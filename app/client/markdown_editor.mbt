///| Markdown Editor Client Component (Island)
///| Provides real-time markdown preview using Luna UI signals

///|
/// Props passed from server
/// Note: Factory methods removed - use struct literals directly
/// e.g. { initial_content: "", action_url: "/action", ... }
pub(all) struct MarkdownEditorProps {
  initial_content : String
  action_url : String
  post_id : String // Empty for new posts, filled for edits
  initial_title : String
  initial_slug : String
  initial_status : String
} derive(ToJson, FromJson)

///|
/// Markdown editor component with real-time preview and Server Action submission
pub fn markdown_editor(props : MarkdownEditorProps) -> DomNode {
  // Signals for form state
  let title = @signal.signal(props.initial_title)
  let slug = @signal.signal(props.initial_slug)
  let content = @signal.signal(props.initial_content)
  let status = @signal.signal(props.initial_status)
  let is_submitting = @signal.signal(false)
  let result_msg = @signal.signal("")
  let is_error = @signal.signal(false)
  let saved_slug = @signal.signal("")

  // Convert markdown to HTML for preview
  fn render_preview() -> String {
    let md_content = content.get()
    if md_content == "" {
      return "<p style=\"color: #999;\">プレビューがここに表示されます...</p>"
    }
    // Use MoonBit markdown parser
    let result = @markdown.parse(md_content)
    @markdown.render_html(result.document)
  }

  // Form submit handler using Server Action
  let handle_submit : @element.FormHandler = fn(e) {
    e.preventDefault()
    is_submitting.set(true)
    is_error.set(false)
    result_msg.set("送信中...")

    // Get form data from the DOM
    let form_data = get_form_data_from_form(e, props.post_id)

    // Create response handler callback
    let handle_response : (@action.ActionResponse) -> Unit = fn(response) {
      match response {
        @action.ActionResponse::Success(data) => {
          is_submitting.set(false)
          let msg = get_message(data)
          let slug_val = get_slug(data)
          result_msg.set(msg)
          saved_slug.set(slug_val)
        }
        @action.ActionResponse::Error(_, error_msg) => {
          is_submitting.set(false)
          is_error.set(true)
          result_msg.set(error_msg)
        }
        @action.ActionResponse::NetworkError(error_msg) => {
          is_submitting.set(false)
          is_error.set(true)
          result_msg.set("ネットワークエラー: " + error_msg)
        }
        @action.ActionResponse::Redirect(url) => {
          is_submitting.set(false)
          result_msg.set("リダイレクト: " + url)
          redirect_to(url)
        }
      }
    }

    // Call Server Action with callback
    @action.invoke_action(props.action_url, form_data, handle_response)
  }

  // Input handlers
  let on_title_input : @element.InputHandler = fn(e) {
    let target : @js_dom.HTMLInputElement = e.target() |> @js.identity
    title.set(target.value)
    // Auto-generate slug from title if slug is empty
    if slug.get() == "" {
      slug.set(generate_slug(target.value))
    }
  }

  let on_slug_input : @element.InputHandler = fn(e) {
    let target : @js_dom.HTMLInputElement = e.target() |> @js.identity
    slug.set(target.value)
  }

  let on_content_input : @element.InputHandler = fn(e) {
    let target : @js_dom.HTMLTextAreaElement = e.target() |> @js.identity
    content.set(target.value)
  }

  div(class="markdown-editor-island", [
    // Result message display
    div(
      class="form-result",
      dyn_class=fn() {
        if is_error.get() {
          "form-result error"
        } else if result_msg.get() != "" {
          "form-result success"
        } else {
          "form-result"
        }
      },
      [text_of(result_msg)],
    ),
    // Success actions (show after save)
    @element.show(
      fn() { saved_slug.get() != "" },
      fn() {
        let slug_val = saved_slug.get()
        div(class="success-actions", [
          span(class="success-message", [text("✓ 保存しました")]),
          div(class="action-buttons", [
            button(
              class="btn btn-secondary",
              on=events().click(fn(_) { redirect_to("/admin") }),
              [text("← 記事一覧へ")],
            ),
            button(
              class="btn",
              on=events().click(fn(_) { redirect_to("/posts/" + slug_val) }),
              [text("記事を見る →")],
            ),
          ]),
        ])
      },
    ),
    // Form with all fields
    form(
      class="editor-form",
      on=events().submit(handle_submit),
      attrs=[
        ("action", @element.AttrString(props.action_url)),
        ("method", @element.AttrString("POST")),
      ],
      [
        // Title field
        div(class="form-group", [
          label(for_="title", [text("タイトル")]),
          input(
            type_="text",
            id="title",
            name="title",
            value=props.initial_title,
            attrs=[
              ("required", @element.AttrString("true")),
              ("placeholder", @element.AttrString("記事のタイトル")),
            ],
            on=events().input(on_title_input),
          ),
        ]),
        // Slug field
        div(class="form-group", [
          label(for_="slug", [text("スラッグ (URL)")]),
          input(
            type_="text",
            id="slug",
            name="slug",
            value=props.initial_slug,
            attrs=[
              ("required", @element.AttrString("true")),
              ("pattern", @element.AttrString("[a-z0-9\\-]+")),
              ("placeholder", @element.AttrString("my-article-slug")),
            ],
            on=events().input(on_slug_input),
          ),
        ]),
        // Status field (using create_element for select/option)
        div(class="form-group", [
          label(for_="status", [text("ステータス")]),
          create_element(
            "select",
            [
              ("id", @element.AttrValue::Static("status")),
              ("name", @element.AttrValue::Static("status")),
              ("oninput", @element.AttrValue::Handler(fn(e) {
                let target : @js_dom.HTMLSelectElement = @js.identity(e)
                status.set(target.value)
              })),
            ],
            [
              create_element(
                "option",
                [
                  ("value", @element.AttrValue::Static("draft")),
                  ("selected", @element.AttrValue::Static(if props.initial_status == "draft" || props.initial_status == "" { "true" } else { "" })),
                ],
                [text("下書き")],
              ),
              create_element(
                "option",
                [
                  ("value", @element.AttrValue::Static("published")),
                  ("selected", @element.AttrValue::Static(if props.initial_status == "published" { "true" } else { "" })),
                ],
                [text("公開")],
              ),
            ],
          ),
        ]),
        // Editor and preview side by side
        div(class="editor-preview-container", [
          // Preview pane (left)
          div(
            class="preview",
            dyn_attrs=[("__innerHTML", @element.AttrValue::Dynamic(render_preview))],
            [],
          ),
          // Editor pane (right)
          div(class="editor-pane", [
            label(for_="content", [text("コンテンツ (Markdown)")]),
            textarea(
              id="content",
              name="content",
              class="editor-textarea",
              attrs=[
                ("placeholder", @element.AttrString("マークダウンで記事を書く...")),
                ("required", @element.AttrString("true")),
              ],
              on=events().input(on_content_input),
              [text(props.initial_content)],
            ),
          ]),
        ]),
        // Submit button
        div(class="form-actions", [
          button(
            class="btn",
            attrs=[("type", @element.AttrString("submit"))],
            dyn_attrs=[("disabled", @element.AttrValue::Dynamic(fn() { if is_submitting.get() { "true" } else { "__remove__" } }))],
            [text(if props.post_id == "" { "作成する" } else { "更新する" })],
          ),
        ]),
      ],
    ),
  ])
}

///| Get form data as JS object from form event
extern "js" fn get_form_data_from_form(e : @js_dom.FormEvent, post_id : String) -> @js.Any =
  #| (e, postId) => {
  #|   const form = e.target;
  #|   const formData = new FormData(form);
  #|   const data = {};
  #|   formData.forEach((value, key) => { data[key] = value; });
  #|   // Include post_id for update operations
  #|   if (postId) { data.id = postId; }
  #|   return data;
  #| }

///| Get message from response data
extern "js" fn get_message(data : @js.Any) -> String =
  #| (data) => data?.message || "成功"

///| Get slug from response data
extern "js" fn get_slug(data : @js.Any) -> String =
  #| (data) => data?.slug || ""

///| Redirect to URL
extern "js" fn redirect_to(url : String) -> Unit =
  #| (url) => { window.location.href = url; }

///| Generate slug from title (lowercase, replace spaces with hyphens)
extern "js" fn generate_slug(title : String) -> String =
  #| (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
