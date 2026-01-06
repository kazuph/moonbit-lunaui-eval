///| Auto-generated types for island props
///| Re-exports Props structs from client packages

///| Props type from @client
pub(all) struct MarkdownEditorProps {
  initial_content : String
  action_url : String
  post_id : String // Empty for new posts, filled for edits
  initial_title : String
  initial_slug : String
  initial_status : String
} derive(ToJson, FromJson)

// =============================================================================
// ComponentRef Factory Functions
// =============================================================================

///|
///| Create ComponentRef for markdown_editor component
pub fn markdown_editor(
  props : MarkdownEditorProps,
  trigger~ : @luna.Trigger = @luna.Load,
) -> @luna.ComponentRef[MarkdownEditorProps] {
  { url: "/markdown_editor.js", props, wc: false, trigger }
}

