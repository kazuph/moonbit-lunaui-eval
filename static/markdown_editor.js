// target/js/release/build/client/client.js
var Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static.prototype.$tag = 0;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler.prototype.$tag = 2;
function $64$mizchi$47$markdown$46$ListMarkerKind$Bullet(param0) {
  this._0 = param0;
}
$64$mizchi$47$markdown$46$ListMarkerKind$Bullet.prototype.$tag = 0;
function $64$mizchi$47$markdown$46$ListMarkerKind$Ordered(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$ListMarkerKind$Ordered.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString.prototype.$tag = 0;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrNumber(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrNumber.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrInt(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrInt.prototype.$tag = 2;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrBool(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrBool.prototype.$tag = 3;
var $PanicError = class extends Error {
};
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
var Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds = { $tag: 1 };
var Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex = { $tag: 0 };
var moonbitlang$core$builtin$$int_to_string_js = (x, radix) => {
  return x.toString(radix);
};
function $unsafe_make_string(a, b) {
  return String.fromCodePoint(b).repeat(a);
}
var moonbitlang$core$builtin$$JSArray$push = (arr, val) => {
  arr.push(val);
};
var $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$2$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$2$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$2$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$2$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$2$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$2$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$2$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$2$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$2$.prototype.$tag = 4;
var $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$3$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$3$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$3$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$3$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$3$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$3$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$3$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$3$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$3$.prototype.$tag = 4;
var moonbitlang$core$builtin$$JSArray$copy = (arr) => arr.slice(0);
var moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => {
  arr.length = len;
};
var moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
var moonbitlang$core$builtin$$JSArray$splice = (arr, idx, cnt) => arr.splice(idx, cnt);
var mizchi$js$core$$Any$_get = (obj, key) => obj[key];
var mizchi$js$core$$Any$_call = (obj, key, args) => obj[key](...args);
var mizchi$js$core$$is_nullish = (v) => v == null;
var mizchi$js$core$$new_object = () => ({});
var mizchi$js$core$$Any$_set = (obj, key, value) => {
  obj[key] = value;
};
var mizchi$js$core$$null = () => null;
var Option$None$4$ = { $tag: 0 };
function Option$Some$4$(param0) {
  this._0 = param0;
}
Option$Some$4$.prototype.$tag = 1;
var mizchi$js$browser$dom$$document = () => document;
var mizchi$js$browser$dom$$Document$createElement = (self, tag) => self.createElement(tag);
var mizchi$js$browser$dom$$Document$createTextNode = (self, data) => self.createTextNode(data);
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$El(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$El.prototype.$tag = 0;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw.prototype.$tag = 2;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Static(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Static.prototype.$tag = 3;
var mizchi$luna$luna$dom$element$$apply_event_handler = (elem, name, handler) => elem.addEventListener(name, handler);
var mizchi$luna$luna$dom$element$$HandlerMap$click = (m, handler) => {
  m.click = handler;
  return m;
};
var mizchi$luna$luna$dom$element$$HandlerMap$input = (m, handler) => {
  m.input = handler;
  return m;
};
var mizchi$luna$luna$dom$element$$HandlerMap$submit = (m, handler) => {
  m.submit = handler;
  return m;
};
var mizchi$luna$luna$dom$element$$HandlerMap$to_attrs = (m) => Object.entries(m).map(([k, v]) => ({ _0: k, _1: { $tag: 2, _0: v } }));
var Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
var mizchi$luna$sol$action$$ffi_invoke_action_cb = (url, payload, callback, options) => {
  (async () => {
    try {
      const headers = { "Content-Type": "application/json" };
      if (options.headers && options.headers.length > 0) {
        for (const h of options.headers) {
          const key = h[0] ?? h._0;
          const val = h[1] ?? h._1;
          if (key && val) headers[key] = val;
        }
      }
      const fetchOptions = {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        credentials: "same-origin"
      };
      const signal = options.signal;
      if (signal && signal.$ === "Some" && signal._0 instanceof AbortSignal) {
        fetchOptions.signal = signal._0;
      }
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        const text = await response.text();
        try {
          const json = JSON.parse(text);
          callback({ $tag: 2, _0: response.status, _1: json.error || text });
        } catch {
          callback({ $tag: 2, _0: response.status, _1: text });
        }
        return;
      }
      const data = await response.json();
      if (data.redirect) {
        callback({ $tag: 1, _0: data.redirect });
        return;
      }
      callback({ $tag: 0, _0: data });
    } catch (error) {
      callback({ $tag: 3, _0: error.message || "Network error" });
    }
  })();
};
var Option$None$6$ = { $tag: 0 };
function Option$Some$6$(param0) {
  this._0 = param0;
}
Option$Some$6$.prototype.$tag = 1;
function $64$mizchi$47$markdown$46$Inline$Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$Text.prototype.$tag = 0;
function $64$mizchi$47$markdown$46$Inline$SoftBreak(param0) {
  this._0 = param0;
}
$64$mizchi$47$markdown$46$Inline$SoftBreak.prototype.$tag = 1;
function $64$mizchi$47$markdown$46$Inline$HardBreak(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$HardBreak.prototype.$tag = 2;
function $64$mizchi$47$markdown$46$Inline$Emphasis(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Emphasis.prototype.$tag = 3;
function $64$mizchi$47$markdown$46$Inline$Strong(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Strong.prototype.$tag = 4;
function $64$mizchi$47$markdown$46$Inline$Strikethrough(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$Strikethrough.prototype.$tag = 5;
function $64$mizchi$47$markdown$46$Inline$Code(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Code.prototype.$tag = 6;
function $64$mizchi$47$markdown$46$Inline$Link(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Inline$Link.prototype.$tag = 7;
function $64$mizchi$47$markdown$46$Inline$RefLink(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$RefLink.prototype.$tag = 8;
function $64$mizchi$47$markdown$46$Inline$Autolink(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Autolink.prototype.$tag = 9;
function $64$mizchi$47$markdown$46$Inline$Image(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Inline$Image.prototype.$tag = 10;
function $64$mizchi$47$markdown$46$Inline$RefImage(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$RefImage.prototype.$tag = 11;
function $64$mizchi$47$markdown$46$Inline$HtmlInline(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$HtmlInline.prototype.$tag = 12;
function $64$mizchi$47$markdown$46$Inline$FootnoteReference(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$FootnoteReference.prototype.$tag = 13;
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function $64$mizchi$47$markdown$46$Block$ThematicBreak(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$mizchi$47$markdown$46$Block$ThematicBreak.prototype.$tag = 0;
function $64$mizchi$47$markdown$46$Block$Heading(param0, param1, param2, param3, param4, param5, param6) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
}
$64$mizchi$47$markdown$46$Block$Heading.prototype.$tag = 1;
function $64$mizchi$47$markdown$46$Block$Paragraph(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$Paragraph.prototype.$tag = 2;
function $64$mizchi$47$markdown$46$Block$FencedCode(param0, param1, param2, param3, param4, param5, param6, param7) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
  this._7 = param7;
}
$64$mizchi$47$markdown$46$Block$FencedCode.prototype.$tag = 3;
function $64$mizchi$47$markdown$46$Block$IndentedCode(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$IndentedCode.prototype.$tag = 4;
function $64$mizchi$47$markdown$46$Block$Blockquote(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$Blockquote.prototype.$tag = 5;
function $64$mizchi$47$markdown$46$Block$BulletList(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
$64$mizchi$47$markdown$46$Block$BulletList.prototype.$tag = 6;
function $64$mizchi$47$markdown$46$Block$OrderedList(param0, param1, param2, param3, param4, param5, param6) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
}
$64$mizchi$47$markdown$46$Block$OrderedList.prototype.$tag = 7;
function $64$mizchi$47$markdown$46$Block$HtmlBlock(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$HtmlBlock.prototype.$tag = 8;
function $64$mizchi$47$markdown$46$Block$Table(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
$64$mizchi$47$markdown$46$Block$Table.prototype.$tag = 9;
function $64$mizchi$47$markdown$46$Block$BlankLines(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Block$BlankLines.prototype.$tag = 10;
function $64$mizchi$47$markdown$46$Block$FootnoteDefinition(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$mizchi$47$markdown$46$Block$FootnoteDefinition.prototype.$tag = 11;
var $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$7$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$7$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$7$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$7$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$7$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$7$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$7$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$7$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$7$.prototype.$tag = 4;
var kazuph$blog_admin$client$$generate_slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
var kazuph$blog_admin$client$$get_form_data_from_form = (e, postId) => {
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  if (postId) {
    data.id = postId;
  }
  return data;
};
var kazuph$blog_admin$client$$get_message = (data) => data?.message || "\u6210\u529F";
var kazuph$blog_admin$client$$get_slug = (data) => data?.slug || "";
var kazuph$blog_admin$client$$redirect_to = (url) => {
  window.location.href = url;
};
var Option$None$8$ = { $tag: 0 };
function Option$Some$8$(param0) {
  this._0 = param0;
}
Option$Some$8$.prototype.$tag = 1;
var Option$None$9$ = { $tag: 0 };
function Option$Some$9$(param0) {
  this._0 = param0;
}
Option$Some$9$.prototype.$tag = 1;
var Option$None$10$ = { $tag: 0 };
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
var moonbitlang$core$builtin$$parse$46$42$bind$124$5354 = ":";
var moonbitlang$core$builtin$$parse$46$42$bind$124$5393 = ":";
var moonbitlang$core$builtin$$parse$46$42$bind$124$5387 = "-";
var moonbitlang$core$builtin$$parse$46$42$bind$124$5374 = ":";
var moonbitlang$core$builtin$$parse$46$42$bind$124$5368 = ":";
var moonbitlang$core$builtin$$output$46$42$bind$124$8198 = "/";
var moonbitlang$core$builtin$$output$46$42$bind$124$8192 = "/";
var moonbitlang$core$builtin$$boyer_moore_horspool_find$46$constr$47$81 = 0;
var moonbitlang$core$builtin$$brute_force_find$46$constr$47$95 = 0;
var mizchi$luna$luna$signal$$effect_id_counter = { val: 0 };
var mizchi$luna$luna$signal$$reactive_context = { current_subscriber: void 0, current_owner: void 0, current_cleanups: Option$None$0$, batch_depth: 0, pending_effects: [], pending_ids: [] };
var mizchi$luna$luna$dom$element$$button$46$constr$47$1114 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("true");
var mizchi$luna$luna$dom$element$$button$46$tuple$47$1115 = { _0: "disabled", _1: mizchi$luna$luna$dom$element$$button$46$constr$47$1114 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1137 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1138 = { _0: "disabled", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1137 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1139 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1140 = { _0: "readonly", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1139 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1141 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1142 = { _0: "required", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1141 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1143 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1144 = { _0: "checked", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1143 };
var mizchi$luna$luna$dom$element$$textarea$46$constr$47$1192 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("true");
var mizchi$luna$luna$dom$element$$textarea$46$tuple$47$1193 = { _0: "disabled", _1: mizchi$luna$luna$dom$element$$textarea$46$constr$47$1192 };
var mizchi$markdown$$render_block_html$46$42$bind$124$2187 = " ";
var mizchi$markdown$$render_block_html$46$42$bind$124$2200 = "\n";
var mizchi$markdown$$try_parse_autolink$46$42$bind$124$2278 = "@";
var mizchi$markdown$$try_parse_autolink$46$42$bind$124$2279 = "http";
var mizchi$markdown$$parse_segment_simple$46$42$bind$124$2627 = " ";
var mizchi$markdown$$parse_paragraph$46$42$bind$124$2717 = " 	\n\r";
var mizchi$markdown$$parse_heading_content$46$42$bind$124$2730 = " 	";
var mizchi$markdown$$parse_heading_content$46$42$bind$124$2729 = " 	";
var mizchi$markdown$$try_parse_fenced_code$46$42$bind$124$2749 = " 	";
var mizchi$markdown$$html_block_tags = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
var mizchi$markdown$$try_parse_indented_code$46$42$bind$124$2765 = "\n";
var mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2808 = "[ ] ";
var mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2809 = "[x] ";
var mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2810 = "[X] ";
var mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$2884 = " 	\n\r";
var mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$2885 = " 	\n\r";
var mizchi$markdown$$split_table_cells$46$42$bind$124$2900 = " 	\n\r";
var mizchi$markdown$$split_table_cells$46$42$bind$124$2901 = " 	\n\r";
var mizchi$markdown$$parse_table_alignments$46$42$bind$124$2917 = " 	\n\r";
var mizchi$markdown$$parse_table_alignments$46$42$bind$124$2916 = ":";
var mizchi$markdown$$parse_table_alignments$46$42$bind$124$2915 = ":";
var mizchi$markdown$$parse_table_row$46$42$bind$124$2920 = " 	\n\r";
var mizchi$markdown$$try_parse_table$46$42$bind$124$2922 = "|";
var mizchi$markdown$$try_parse_table$46$42$bind$124$2923 = "|";
var mizchi$markdown$$try_parse_table$46$42$bind$124$2924 = "-";
var mizchi$markdown$$try_parse_table$46$42$bind$124$2927 = " 	\n\r";
var mizchi$markdown$$try_parse_table$46$42$bind$124$2926 = "|";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2948 = "\n";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2943 = " 	\n\r";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2930 = "#";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2937 = ":";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2936 = " 	\n\r";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2935 = " 	\n\r";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2931 = '"';
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2932 = '"';
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2933 = "'";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2934 = "'";
var mizchi$markdown$$empty$46$record$47$1271 = { content: "" };
var mizchi$markdown$$try_parse_code_span$46$constr$47$1529 = 32;
var mizchi$markdown$$try_parse_code_span$46$constr$47$1530 = 32;
var mizchi$markdown$$detect_list_marker$46$constr$47$1917 = new $64$mizchi$47$markdown$46$ListMarkerKind$Bullet(0);
var mizchi$markdown$$detect_list_marker$46$tuple$47$1918 = { _0: mizchi$markdown$$detect_list_marker$46$constr$47$1917, _1: 2 };
var mizchi$markdown$$detect_list_marker$46$constr$47$1919 = mizchi$markdown$$detect_list_marker$46$tuple$47$1918;
var mizchi$markdown$$detect_list_marker$46$constr$47$1920 = new $64$mizchi$47$markdown$46$ListMarkerKind$Bullet(1);
var mizchi$markdown$$detect_list_marker$46$tuple$47$1921 = { _0: mizchi$markdown$$detect_list_marker$46$constr$47$1920, _1: 2 };
var mizchi$markdown$$detect_list_marker$46$constr$47$1922 = mizchi$markdown$$detect_list_marker$46$tuple$47$1921;
var mizchi$markdown$$detect_list_marker$46$constr$47$1923 = new $64$mizchi$47$markdown$46$ListMarkerKind$Bullet(2);
var mizchi$markdown$$detect_list_marker$46$tuple$47$1924 = { _0: mizchi$markdown$$detect_list_marker$46$constr$47$1923, _1: 2 };
var mizchi$markdown$$detect_list_marker$46$constr$47$1925 = mizchi$markdown$$detect_list_marker$46$tuple$47$1924;
var mizchi$markdown$$parse_paragraph$46$constr$47$1980 = 96;
var mizchi$markdown$$parse_paragraph$46$constr$47$1981 = 96;
var mizchi$markdown$$parse_paragraph$46$constr$47$1982 = 126;
var mizchi$markdown$$parse_paragraph$46$constr$47$1983 = 126;
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2135 = false;
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2136 = true;
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2137 = false;
var mizchi$markdown$$parse_task_checkbox$46$tuple$47$2138 = { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2137, _1: "" };
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2139 = true;
var mizchi$markdown$$parse_task_checkbox$46$tuple$47$2140 = { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2139, _1: "" };
var mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2154 = 0;
var mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2155 = 1;
var mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2156 = 2;
var mizchi$markdown$$parse_bullet_list$46$constr$47$2203 = 0;
var mizchi$markdown$$parse_bullet_list$46$constr$47$2204 = 1;
var mizchi$markdown$$parse_bullet_list$46$constr$47$2205 = 2;
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2448 = "markdown-editor-island";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2449 = "form-result";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2450 = "success-actions";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2451 = "success-message";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2452 = "action-buttons";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2453 = "btn btn-secondary";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2454 = "btn";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2455 = "editor-form";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2456 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("POST");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2457 = { _0: "method", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2456 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2458 = "form-group";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2459 = "title";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2460 = "text";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2461 = "title";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2462 = "title";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2463 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("true");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2464 = { _0: "required", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2463 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2465 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("\u8A18\u4E8B\u306E\u30BF\u30A4\u30C8\u30EB");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2466 = { _0: "placeholder", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2465 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2467 = "form-group";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2468 = "slug";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2469 = "text";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2470 = "slug";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2471 = "slug";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2472 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("true");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2473 = { _0: "required", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2472 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2474 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("[a-z0-9\\-]+");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2475 = { _0: "pattern", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2474 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2476 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("my-article-slug");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2477 = { _0: "placeholder", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2476 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2478 = "form-group";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2479 = "status";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2480 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("status");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2481 = { _0: "id", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2480 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2482 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("status");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2483 = { _0: "name", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2482 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2484 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("draft");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2485 = { _0: "value", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2484 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2486 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static("published");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2487 = { _0: "value", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2486 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2488 = "editor-preview-container";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2489 = "preview";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2490 = "editor-pane";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2491 = "content";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2492 = "content";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2493 = "content";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2494 = "editor-textarea";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2495 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3067\u8A18\u4E8B\u3092\u66F8\u304F...");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2496 = { _0: "placeholder", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2495 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2497 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("true");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2498 = { _0: "required", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2497 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2499 = "form-actions";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2500 = "btn";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2501 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString("submit");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2502 = { _0: "type", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2501 };
function moonbitlang$core$abort$$abort$0$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$1$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$2$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$Eq$equal$6$(_x_5248, _x_5249) {
  if (_x_5248 === 0) {
    if (_x_5249 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_5249 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$abort$0$(string, loc) {
  return moonbitlang$core$abort$$abort$0$(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$(loc)}
`);
}
function moonbitlang$core$builtin$$abort$1$(string, loc) {
  return moonbitlang$core$abort$$abort$1$(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$(loc)}
`);
}
function moonbitlang$core$builtin$$abort$2$(string, loc) {
  moonbitlang$core$abort$$abort$2$(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$(loc)}
`);
}
function moonbitlang$core$builtin$$abort$3$(string, loc) {
  return moonbitlang$core$abort$$abort$3$(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$(loc)}
`);
}
function moonbitlang$core$builtin$$abort$4$(string, loc) {
  return moonbitlang$core$abort$$abort$4$(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$(loc)}
`);
}
function moonbitlang$core$builtin$$abort$5$(string, loc) {
  return moonbitlang$core$abort$$abort$5$(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$(loc)}
`);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$8$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (55296 <= c1 && c1 <= 56319) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$builtin$$op_notequal$6$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$6$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$9$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$10$(x, y);
}
function moonbitlang$core$array$$Array$at$11$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$0$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$12$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$13$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$14$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$15$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$16$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$1$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$17$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$18$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$5$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$19$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$boyer_moore_horspool_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end4418 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end4418) {
          const _tmp$22 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$22.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end4424 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end4424) {
              const _p2 = i + j | 0;
              const _tmp$42 = haystack.str;
              const _tmp$52 = haystack.start + _p2 | 0;
              const _tmp$62 = _tmp$42.charCodeAt(_tmp$52);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$62 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _p = (i + needle_len | 0) - 1 | 0;
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + _p | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i + skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return moonbitlang$core$builtin$$boyer_moore_horspool_find$46$constr$47$81;
  }
}
function moonbitlang$core$builtin$$brute_force_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            let _tmp$3;
            if (i <= forward_len) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return moonbitlang$core$builtin$$brute_force_find$46$constr$47$95;
  }
}
function moonbitlang$core$string$$StringView$find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$builtin$$brute_force_find(self, str) : moonbitlang$core$builtin$$boyer_moore_horspool_find(self, str);
}
function moonbitlang$core$builtin$$boyer_moore_horspool_rev_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      let _tmp = needle_len - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i > 0) {
          const _tmp$22 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$22.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = i;
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = haystack_len - needle_len | 0;
      while (true) {
        const i = _tmp$2;
        if (i >= 0) {
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j < needle_len) {
              const _p = i + j | 0;
              const _tmp$42 = haystack.str;
              const _tmp$52 = haystack.start + _p | 0;
              const _tmp$62 = _tmp$42.charCodeAt(_tmp$52);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$62 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + i | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i - skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return haystack_len;
  }
}
function moonbitlang$core$builtin$$brute_force_rev_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      let i = haystack_len - needle_len | 0;
      while (true) {
        if (i >= 0) {
          while (true) {
            let _tmp$3;
            if (i >= 0) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i >= 0) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i - 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return haystack_len;
  }
}
function moonbitlang$core$string$$StringView$rev_find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$builtin$$brute_force_rev_find(self, str) : moonbitlang$core$builtin$$boyer_moore_horspool_rev_find(self, str);
}
function moonbitlang$core$string$$StringView$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$builtin$$abort$0$("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:111:5-111:36");
}
function moonbitlang$core$builtin$$parse$46$parse_loc$124$1093(view) {
  const _bind = moonbitlang$core$string$$StringView$find(view, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$5354, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$5354.length });
  if (_bind === void 0) {
    return void 0;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i > 0 && (_i + 1 | 0) < (view.end - view.start | 0) ? { _0: moonbitlang$core$string$$StringView$view$46$inner(view, 0, _i), _1: moonbitlang$core$string$$StringView$view$46$inner(view, _i + 1 | 0, void 0) } : void 0;
  }
}
function moonbitlang$core$builtin$$SourceLocRepr$parse(repr) {
  _L: {
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(repr, 1, 0, repr.length)) {
      const _x = repr.charCodeAt(0);
      if (_x === 64) {
        const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(repr, 1, 0, repr.length);
        let _tmp;
        if (_bind === void 0) {
          _tmp = repr.length;
        } else {
          const _Some = _bind;
          _tmp = _Some;
        }
        const _x$2 = { str: repr, start: _tmp, end: repr.length };
        const _bind$2 = moonbitlang$core$string$$StringView$find(_x$2, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$5393, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$5393.length });
        if (_bind$2 === void 0) {
          return $panic();
        } else {
          const _Some = _bind$2;
          const _pkg_end = _Some;
          const pkg = moonbitlang$core$string$$StringView$view$46$inner(_x$2, 0, _pkg_end);
          const _bind$3 = moonbitlang$core$string$$StringView$rev_find(_x$2, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$5387, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$5387.length });
          if (_bind$3 === void 0) {
            return $panic();
          } else {
            const _Some$2 = _bind$3;
            const _start_loc_end = _Some$2;
            if ((_start_loc_end + 1 | 0) < (_x$2.end - _x$2.start | 0)) {
              const end_loc = moonbitlang$core$string$$StringView$view$46$inner(_x$2, _start_loc_end + 1 | 0, void 0);
              const _bind$4 = moonbitlang$core$builtin$$parse$46$parse_loc$124$1093(end_loc);
              if (_bind$4 === void 0) {
                return $panic();
              } else {
                const _Some$3 = _bind$4;
                const _x$3 = _Some$3;
                const _end_line = _x$3._0;
                const _end_column = _x$3._1;
                const rest = moonbitlang$core$string$$StringView$view$46$inner(_x$2, 0, _start_loc_end);
                _L$2: {
                  const _bind$5 = moonbitlang$core$string$$StringView$rev_find(rest, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$5374, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$5374.length });
                  if (_bind$5 === void 0) {
                    break _L$2;
                  } else {
                    const _Some$4 = _bind$5;
                    const _start_line_end = _Some$4;
                    const _bind$6 = moonbitlang$core$string$$StringView$rev_find(moonbitlang$core$string$$StringView$view$46$inner(rest, 0, _start_line_end), { str: moonbitlang$core$builtin$$parse$46$42$bind$124$5368, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$5368.length });
                    if (_bind$6 === void 0) {
                      break _L$2;
                    } else {
                      const _Some$5 = _bind$6;
                      const _filename_end = _Some$5;
                      if ((_filename_end + 1 | 0) < (rest.end - rest.start | 0)) {
                        const start_loc = moonbitlang$core$string$$StringView$view$46$inner(rest, _filename_end + 1 | 0, void 0);
                        const _bind$7 = moonbitlang$core$builtin$$parse$46$parse_loc$124$1093(start_loc);
                        if (_bind$7 === void 0) {
                          return $panic();
                        } else {
                          const _Some$6 = _bind$7;
                          const _x$4 = _Some$6;
                          const _start_line = _x$4._0;
                          const _start_column = _x$4._1;
                          if (_filename_end > (_pkg_end + 1 | 0)) {
                            const filename = moonbitlang$core$string$$StringView$view$46$inner(rest, _pkg_end + 1 | 0, _filename_end);
                            return { pkg, filename, start_line: _start_line, start_column: _start_column, end_line: _end_line, end_column: _end_column };
                          } else {
                            return $panic();
                          }
                        }
                      } else {
                        return $panic();
                      }
                    }
                  }
                }
                return $panic();
              }
            } else {
              return $panic();
            }
          }
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return $panic();
}
function moonbitlang$core$builtin$$Logger$write_string$8$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$string$$String$sub$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === void 0) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    let _tmp;
    if (start$2 < len) {
      const _p = self.charCodeAt(start$2);
      _tmp = 56320 <= _p && _p <= 57343;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new Result$Err$1$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    let _tmp$2;
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      _tmp$2 = 56320 <= _p && _p <= 57343;
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      return new Result$Err$1$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    return new Result$Ok$1$({ str: self, start: start$2, end: end$2 });
  } else {
    return new Result$Err$1$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds);
  }
}
function moonbitlang$core$builtin$$Logger$write_substring$20$(self, value, start, len) {
  let _tmp;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = moonbitlang$core$string$$String$sub$46$inner(value, start, start + len | 0);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        const _tmp$2 = _err._0;
        _try_err = _tmp$2;
        break _L$2;
      }
      break _L;
    }
    _tmp = $panic();
  }
  moonbitlang$core$builtin$$Logger$write_view$8$(self, _tmp);
}
function moonbitlang$core$builtin$$Show$to_string$21$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$, method_2: moonbitlang$core$builtin$$Logger$write_view$8$, method_3: moonbitlang$core$builtin$$Logger$write_char$8$ };
  if (self) {
    _p.method_0(_p.self, "true");
  } else {
    _p.method_0(_p.self, "false");
  }
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$22$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$23$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$, method_2: moonbitlang$core$builtin$$Logger$write_view$8$, method_3: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$7$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$24$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$, method_2: moonbitlang$core$builtin$$Logger$write_view$8$, method_3: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$25$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$16$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$, method_2: moonbitlang$core$builtin$$Logger$write_view$8$, method_3: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$builtin$$Iterator$next$26$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$11$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$18$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$0$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$27$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$iter$26$(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$26$(self);
      if (_bind === void 0) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iterator$iter$18$(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$18$(self);
      if (_bind === void 0) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iterator$iter$11$(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$11$(self);
      if (_bind === -1) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iterator$iter$0$(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$0$(self);
      if (_bind === void 0) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$string$$StringView$iterator(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  const _p = () => {
    if (index.val < end) {
      const _tmp = self.str;
      const _tmp$2 = index.val;
      const c1 = _tmp.charCodeAt(_tmp$2);
      if (55296 <= c1 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const _tmp$3 = self.str;
        const _tmp$4 = index.val + 1 | 0;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (56320 <= c2 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  };
  return _p;
}
function moonbitlang$core$string$$StringView$iter(self) {
  return moonbitlang$core$builtin$$Iterator$iter$11$(moonbitlang$core$string$$StringView$iterator(self));
}
function moonbitlang$core$builtin$$Iterator2$next$28$(self) {
  return moonbitlang$core$builtin$$Iterator$next$27$(self);
}
function moonbitlang$core$builtin$$Iterator2$new$28$(f) {
  return f;
}
function moonbitlang$core$string$$StringView$iterator2(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  const char_index = { val: 0 };
  return moonbitlang$core$builtin$$Iterator2$new$28$(() => {
    if (index.val < end) {
      const _tmp = self.str;
      const _tmp$2 = index.val;
      const c1 = _tmp.charCodeAt(_tmp$2);
      if (55296 <= c1 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const _tmp$3 = self.str;
        const _tmp$4 = index.val + 1 | 0;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (56320 <= c2 && c2 <= 57343) {
          const result2 = { _0: char_index.val, _1: moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2) };
          index.val = index.val + 2 | 0;
          char_index.val = char_index.val + 1 | 0;
          return result2;
        }
      }
      const result = { _0: char_index.val, _1: c1 };
      index.val = index.val + 1 | 0;
      char_index.val = char_index.val + 1 | 0;
      return result;
    } else {
      return void 0;
    }
  });
}
function moonbitlang$core$string$$String$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$builtin$$abort$0$("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:374:5-374:36");
}
function moonbitlang$core$string$$String$char_length_eq$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:463:9-463:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:491:9-491:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (56320 <= c && c <= 57343) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? void 0 : utf16_offset;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (55296 <= c && c <= 56319) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? void 0 : utf16_offset;
  } else {
    return moonbitlang$core$builtin$$abort$3$("Invalid start index", "@moonbitlang/core/builtin:string.mbt:366:5-366:33");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char$46$inner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset$2) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i | 0, start_offset, end_offset$2);
}
function moonbitlang$core$builtin$$unsafe_make_string(_tmp, _tmp$2) {
  return $unsafe_make_string(_tmp, _tmp$2);
}
function moonbitlang$core$string$$String$make(length, value) {
  if (length >= 0) {
    if (value <= 65535) {
      return moonbitlang$core$builtin$$unsafe_make_string(length, value);
    } else {
      const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(Math.imul(2, length) | 0);
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < length) {
          moonbitlang$core$builtin$$Logger$write_char$8$(buf, value);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  } else {
    return moonbitlang$core$builtin$$abort$1$("invalid length", "@moonbitlang/core/builtin:string.mbt:25:28-25:51");
  }
}
function moonbitlang$core$builtin$$Logger$write_view$8$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$builtin$$Show$to_string$0$(str)}`;
}
function moonbitlang$core$builtin$$StringBuilder$reset(self) {
  self.val = "";
}
function moonbitlang$core$string$$StringView$find_by(self, pred) {
  const _it = moonbitlang$core$string$$StringView$iterator2(self);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator2$next$28$(_it);
    if (_bind === void 0) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _i = _x._0;
      const _c = _x._1;
      if (pred(_c)) {
        return _i;
      }
      continue;
    }
  }
  return void 0;
}
function moonbitlang$core$string$$String$find_by(self, pred) {
  return moonbitlang$core$string$$StringView$find_by({ str: self, start: 0, end: self.length }, pred);
}
function moonbitlang$core$string$$StringView$has_suffix(self, str) {
  const _bind = moonbitlang$core$string$$StringView$rev_find(self, str);
  if (_bind === void 0) {
    return false;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i === ((self.end - self.start | 0) - (str.end - str.start | 0) | 0);
  }
}
function moonbitlang$core$string$$String$has_suffix(self, str) {
  return moonbitlang$core$string$$StringView$has_suffix({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$has_prefix(self, str) {
  const _bind = moonbitlang$core$string$$StringView$find(self, str);
  if (_bind === void 0) {
    return false;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i === 0;
  }
}
function moonbitlang$core$string$$String$has_prefix(self, str) {
  return moonbitlang$core$string$$StringView$has_prefix({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$array$$Array$new$46$inner$11$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$push$26$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$29$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$13$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$11$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$30$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$0$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$16$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$31$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$32$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$14$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$33$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$34$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$18$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$12$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$1$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$35$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$17$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$5$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$19$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$string$$StringView$contains(self, str) {
  const _bind = moonbitlang$core$string$$StringView$find(self, str);
  return !(_bind === void 0);
}
function moonbitlang$core$string$$String$contains(self, str) {
  return moonbitlang$core$string$$StringView$contains({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$contains_char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 <= 65535) {
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < len) {
          const _tmp$2 = self.str;
          const _tmp$3 = self.start + i | 0;
          if (_tmp$2.charCodeAt(_tmp$3) === c$2) {
            return true;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (len >= 2) {
        const adj = c$2 - 65536 | 0;
        const high = 55296 + (adj >> 10) | 0;
        const low = 56320 + (adj & 1023) | 0;
        let i = 0;
        while (true) {
          if (i < (len - 1 | 0)) {
            const _p = i;
            const _tmp = self.str;
            const _tmp$2 = self.start + _p | 0;
            if (_tmp.charCodeAt(_tmp$2) === high) {
              i = i + 1 | 0;
              const _p$2 = i;
              const _tmp$3 = self.str;
              const _tmp$4 = self.start + _p$2 | 0;
              if (_tmp$3.charCodeAt(_tmp$4) === low) {
                return true;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$StringView$trim_start(self, chars) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
      const _tmp$2 = _param.str;
      const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
      let _tmp$3;
      if (_bind === void 0) {
        _tmp$3 = _param.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _tmp$4 = _tmp$3;
      const _x = { str: _tmp$2, start: _tmp$4, end: _param.end };
      if (moonbitlang$core$string$$StringView$contains_char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$StringView$trim_end$46$inner(self, chars) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, -1, _param.start, _param.end));
      const _x = { str: _param.str, start: _param.start, end: moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, -1, _param.start, _param.end) };
      if (moonbitlang$core$string$$StringView$contains_char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$String$trim_end$46$inner(self, chars) {
  return moonbitlang$core$string$$StringView$trim_end$46$inner({ str: self, start: 0, end: self.length }, chars);
}
function moonbitlang$core$string$$StringView$trim$46$inner(self, chars) {
  return moonbitlang$core$string$$StringView$trim_end$46$inner(moonbitlang$core$string$$StringView$trim_start(self, chars), chars);
}
function moonbitlang$core$string$$String$trim$46$inner(self, chars) {
  return moonbitlang$core$string$$StringView$trim$46$inner({ str: self, start: 0, end: self.length }, chars);
}
function moonbitlang$core$string$$StringView$is_empty(self) {
  return (self.end - self.start | 0) === 0;
}
function moonbitlang$core$string$$String$iterator(self) {
  const len = self.length;
  const index = { val: 0 };
  const _p = () => {
    if (index.val < len) {
      const _tmp = index.val;
      const c1 = self.charCodeAt(_tmp);
      if (55296 <= c1 && c1 <= 56319 && (index.val + 1 | 0) < len) {
        const _tmp$2 = index.val + 1 | 0;
        const c2 = self.charCodeAt(_tmp$2);
        if (56320 <= c2 && c2 <= 57343) {
          const c = moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  };
  return _p;
}
function moonbitlang$core$string$$String$iter(self) {
  return moonbitlang$core$builtin$$Iterator$iter$11$(moonbitlang$core$string$$String$iterator(self));
}
function moonbitlang$core$builtin$$Iter$run$26$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$run$18$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Show$to_string$11$(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$string$$StringView$split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$StringView$iter(self);
    return (_p2) => _bind((_p$2) => _p2(moonbitlang$core$string$$String$view$46$inner(moonbitlang$core$builtin$$Show$to_string$11$(_p$2), 0, void 0)));
  }
  const remaining = { val: self };
  const _p = () => {
    const _bind = remaining.val;
    if (_bind === void 0) {
      return void 0;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = moonbitlang$core$string$$StringView$find(_view, sep);
      if (_bind$2 === void 0) {
        remaining.val = void 0;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = moonbitlang$core$string$$StringView$view$46$inner(_view, _end + sep_len | 0, void 0);
        return moonbitlang$core$string$$StringView$view$46$inner(_view, 0, _end);
      }
    }
  };
  return moonbitlang$core$builtin$$Iterator$iter$0$(_p);
}
function moonbitlang$core$string$$String$split(self, sep) {
  return moonbitlang$core$string$$StringView$split({ str: self, start: 0, end: self.length }, sep);
}
function moonbitlang$core$builtin$$Iter$each$36$(self, f) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$3$ };
  self((a) => {
    f(a);
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function moonbitlang$core$builtin$$Iter$collect$0$(self) {
  const result = [];
  moonbitlang$core$builtin$$Iter$each$36$(self, (e) => {
    moonbitlang$core$array$$Array$push$0$(result, e);
  });
  return result;
}
function moonbitlang$core$char$$Char$is_ascii_uppercase(self) {
  return self >= 65 && self <= 90;
}
function moonbitlang$core$string$$String$to_lower(self) {
  const _bind = moonbitlang$core$string$$String$find_by(self, (x) => moonbitlang$core$char$$Char$is_ascii_uppercase(x));
  if (_bind === void 0) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(self.length);
    const head = moonbitlang$core$string$$String$view$46$inner(self, 0, _idx);
    moonbitlang$core$builtin$$Logger$write_substring$20$(buf, head.str, head.start, head.end - head.start | 0);
    const _it = moonbitlang$core$string$$StringView$iterator(moonbitlang$core$string$$String$view$46$inner(self, _idx, void 0));
    while (true) {
      const _bind$2 = moonbitlang$core$builtin$$Iterator$next$11$(_it);
      if (_bind$2 === -1) {
        break;
      } else {
        const _Some$2 = _bind$2;
        const _c = _Some$2;
        if (moonbitlang$core$char$$Char$is_ascii_uppercase(_c)) {
          moonbitlang$core$builtin$$Logger$write_char$8$(buf, _c + 32 | 0);
        } else {
          moonbitlang$core$builtin$$Logger$write_char$8$(buf, _c);
        }
        continue;
      }
    }
    return buf.val;
  }
}
function moonbitlang$core$string$$String$get_char(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (55296 <= c && c <= 56319) {
      if ((idx + 1 | 0) < self.length) {
        const _tmp = idx + 1 | 0;
        const next = self.charCodeAt(_tmp);
        return 56320 <= next && next <= 57343 ? moonbitlang$core$builtin$$code_point_of_surrogate_pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return 56320 <= c && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function moonbitlang$core$string$$String$to_array(self) {
  const _p = moonbitlang$core$string$$String$iter(self);
  const _p$2 = moonbitlang$core$array$$Array$new$46$inner$11$(self.length);
  const _p$3 = { val: _p$2 };
  const _p$4 = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$2$ };
  _p((_p$5) => {
    const _p$6 = _p$3.val;
    moonbitlang$core$array$$Array$push$11$(_p$6, _p$5);
    _p$3.val = _p$6;
    return 1;
  });
  const _tmp = _p$4.val;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _p$5 = _tmp;
      _p$5._0;
      break;
    }
    case 2: {
      const _p$6 = _tmp;
      return _p$6._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  return _p$3.val;
}
function moonbitlang$core$builtin$$Show$output$16$(self, logger) {
  logger.method_0(logger.self, moonbitlang$core$int$$Int$to_string$46$inner(self, 10));
}
function moonbitlang$core$array$$ArrayView$iterator$26$(self) {
  const i = { val: 0 };
  const _p = () => {
    if (i.val < (self.end - self.start | 0)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return void 0;
    }
  };
  return _p;
}
function moonbitlang$core$array$$ArrayView$iterator$18$(self) {
  const i = { val: 0 };
  const _p = () => {
    if (i.val < (self.end - self.start | 0)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return void 0;
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iterator$26$(self) {
  return moonbitlang$core$array$$ArrayView$iterator$26$({ buf: self, start: 0, end: self.length });
}
function moonbitlang$core$array$$Array$iterator$18$(self) {
  return moonbitlang$core$array$$ArrayView$iterator$18$({ buf: self, start: 0, end: self.length });
}
function moonbitlang$core$array$$Array$iter$26$(self) {
  return moonbitlang$core$builtin$$Iterator$iter$26$(moonbitlang$core$array$$Array$iterator$26$(self));
}
function moonbitlang$core$array$$Array$iter$18$(self) {
  return moonbitlang$core$builtin$$Iterator$iter$18$(moonbitlang$core$array$$Array$iterator$18$(self));
}
function moonbitlang$core$builtin$$Eq$equal$37$(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$10$(self, other) {
  if (self === void 0) {
    return other === void 0;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === void 0) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$equal$38$(_x, _y);
    }
  }
}
function moonbitlang$core$array$$MutArrayView$at$5$(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$builtin$$abort$5$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$25$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$25$(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:91:5-93:6");
  }
}
function moonbitlang$core$array$$MutArrayView$set$5$(self, index, value) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2] = value;
    return;
  } else {
    moonbitlang$core$builtin$$abort$2$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$25$(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$25$(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:151:5-153:6");
    return;
  }
}
function moonbitlang$core$array$$Array$mut_view$46$inner$5$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === void 0) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, end: end$2 } : moonbitlang$core$builtin$$abort$4$("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:223:5-223:38");
}
function moonbitlang$core$array$$MutArrayView$mut_view$46$inner$5$(self, start, end) {
  const len = self.end - self.start | 0;
  let end$2;
  if (end === void 0) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, end: (self.start + start$2 | 0) + (end$2 - start$2 | 0) | 0 } : moonbitlang$core$builtin$$abort$4$("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:270:5-270:38");
}
function moonbitlang$core$builtin$$Iter$any$26$(self, f) {
  return moonbitlang$core$builtin$$op_notequal$6$(moonbitlang$core$builtin$$Iter$run$26$(self, (k) => f(k) ? 0 : 1), 1);
}
function moonbitlang$core$builtin$$Iter$any$18$(self, f) {
  return moonbitlang$core$builtin$$op_notequal$6$(moonbitlang$core$builtin$$Iter$run$18$(self, (k) => f(k) ? 0 : 1), 1);
}
function moonbitlang$core$array$$Array$make$16$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$set$16$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$39$(self, logger) {
  const pkg = self.pkg;
  const _bind = moonbitlang$core$string$$StringView$find(pkg, { str: moonbitlang$core$builtin$$output$46$42$bind$124$8198, start: 0, end: moonbitlang$core$builtin$$output$46$42$bind$124$8198.length });
  let _bind$2;
  if (_bind === void 0) {
    _bind$2 = { _0: pkg, _1: void 0 };
  } else {
    const _Some = _bind;
    const _first_slash = _Some;
    const _bind$3 = moonbitlang$core$string$$StringView$find(moonbitlang$core$string$$StringView$view$46$inner(pkg, _first_slash + 1 | 0, void 0), { str: moonbitlang$core$builtin$$output$46$42$bind$124$8192, start: 0, end: moonbitlang$core$builtin$$output$46$42$bind$124$8192.length });
    if (_bind$3 === void 0) {
      _bind$2 = { _0: pkg, _1: void 0 };
    } else {
      const _Some$2 = _bind$3;
      const _second_slash = _Some$2;
      const module_name_end = (_first_slash + 1 | 0) + _second_slash | 0;
      _bind$2 = { _0: moonbitlang$core$string$$StringView$view$46$inner(pkg, 0, module_name_end), _1: moonbitlang$core$string$$StringView$view$46$inner(pkg, module_name_end + 1 | 0, void 0) };
    }
  }
  const _module_name = _bind$2._0;
  const _package_name = _bind$2._1;
  if (_package_name === void 0) {
  } else {
    const _Some = _package_name;
    const _pkg_name = _Some;
    logger.method_2(logger.self, _pkg_name);
    logger.method_3(logger.self, 47);
  }
  logger.method_2(logger.self, self.filename);
  logger.method_3(logger.self, 58);
  logger.method_2(logger.self, self.start_line);
  logger.method_3(logger.self, 58);
  logger.method_2(logger.self, self.start_column);
  logger.method_3(logger.self, 45);
  logger.method_2(logger.self, self.end_line);
  logger.method_3(logger.self, 58);
  logger.method_2(logger.self, self.end_column);
  logger.method_3(logger.self, 64);
  logger.method_2(logger.self, _module_name);
}
function moonbitlang$core$builtin$$Show$output$24$(self, logger) {
  moonbitlang$core$builtin$$Show$output$39$(moonbitlang$core$builtin$$SourceLocRepr$parse(self), logger);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$14$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_pop$19$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$array$$Array$pop$19$(self) {
  if (self.length === 0) {
    return void 0;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$19$(self);
    return v;
  }
}
function moonbitlang$core$array$$Array$remove$1$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$builtin$$abort$1$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$25$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$25$(index)}`, "@moonbitlang/core/builtin:arraycore_js.mbt:241:5-243:6");
  }
}
function moonbitlang$core$array$$Array$copy$5$(self) {
  return moonbitlang$core$builtin$$JSArray$copy(self);
}
function moonbitlang$core$array$$MutArrayView$swap$5$(arr, i, j) {
  const temp = moonbitlang$core$array$$MutArrayView$at$5$(arr, i);
  moonbitlang$core$array$$MutArrayView$set$5$(arr, i, moonbitlang$core$array$$MutArrayView$at$5$(arr, j));
  moonbitlang$core$array$$MutArrayView$set$5$(arr, j, temp);
}
function moonbitlang$core$array$$MutArrayView$slice$5$(arr, start, end) {
  return moonbitlang$core$array$$MutArrayView$mut_view$46$inner$5$(arr, start, end);
}
function moonbitlang$core$array$$MutArrayView$rev_in_place$5$(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = moonbitlang$core$array$$MutArrayView$at$5$(arr, i);
      moonbitlang$core$array$$MutArrayView$set$5$(arr, i, moonbitlang$core$array$$MutArrayView$at$5$(arr, j));
      moonbitlang$core$array$$MutArrayView$set$5$(arr, j, temp);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_get_limit(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function moonbitlang$core$builtin$$fixed_bubble_sort_by$5$(arr, cmp) {
  const _end561 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end561) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$MutArrayView$at$5$(arr, j - 1 | 0), moonbitlang$core$array$$MutArrayView$at$5$(arr, j)) > 0) {
          moonbitlang$core$array$$MutArrayView$swap$5$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$683(_env, a, b) {
  const cmp = _env._2;
  const arr = _env._1;
  const swaps = _env._0;
  if (cmp(moonbitlang$core$array$$MutArrayView$at$5$(arr, a), moonbitlang$core$array$$MutArrayView$at$5$(arr, b)) > 0) {
    moonbitlang$core$array$$MutArrayView$swap$5$(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$684(_env, a, b, c) {
  moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$683(_env, a, b);
  moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$683(_env, b, c);
  moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$683(_env, a, b);
}
function moonbitlang$core$builtin$$fixed_choose_pivot_by$5$(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr, _2: cmp };
    if (len > 50) {
      moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$684(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$684(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$684(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$684(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$MutArrayView$rev_in_place$5$(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$builtin$$fixed_sift_down_by$5$(arr, index, cmp) {
  let index$2 = index;
  const len = arr.end - arr.start | 0;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$MutArrayView$at$5$(arr, child), moonbitlang$core$array$$MutArrayView$at$5$(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$MutArrayView$at$5$(arr, index$2), moonbitlang$core$array$$MutArrayView$at$5$(arr, child)) >= 0) {
        return void 0;
      }
      moonbitlang$core$array$$MutArrayView$swap$5$(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_heap_sort_by$5$(arr, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$builtin$$fixed_sift_down_by$5$(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      moonbitlang$core$array$$MutArrayView$swap$5$(arr, 0, i);
      moonbitlang$core$builtin$$fixed_sift_down_by$5$(moonbitlang$core$array$$MutArrayView$slice$5$(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_partition_by$5$(arr, cmp, pivot_index) {
  moonbitlang$core$array$$MutArrayView$swap$5$(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = moonbitlang$core$array$$MutArrayView$at$5$(arr, (arr.end - arr.start | 0) - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end550 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end550) {
      if (cmp(moonbitlang$core$array$$MutArrayView$at$5$(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$MutArrayView$swap$5$(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$MutArrayView$swap$5$(arr, i, (arr.end - arr.start | 0) - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$builtin$$fixed_try_bubble_sort_by$5$(arr, cmp) {
  let tries = 0;
  const _end571 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end571) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$MutArrayView$at$5$(arr, j - 1 | 0), moonbitlang$core$array$$MutArrayView$at$5$(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$MutArrayView$swap$5$(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$builtin$$fixed_quick_sort_by$5$(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p = arr$2;
    const len = _p.end - _p.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$builtin$$fixed_bubble_sort_by$5$(arr$2, cmp);
      }
      return void 0;
    }
    if (limit$2 === 0) {
      moonbitlang$core$builtin$$fixed_heap_sort_by$5$(arr$2, cmp);
      return void 0;
    }
    const _bind = moonbitlang$core$builtin$$fixed_choose_pivot_by$5$(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$builtin$$fixed_try_bubble_sort_by$5$(arr$2, cmp)) {
        return void 0;
      }
    }
    const _bind$2 = moonbitlang$core$builtin$$fixed_partition_by$5$(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    const _p$2 = len - _pivot | 0;
    balanced = (_pivot > _p$2 ? _p$2 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === void 0) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$MutArrayView$at$5$(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$MutArrayView$at$5$(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$MutArrayView$slice$5$(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$MutArrayView$slice$5$(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$MutArrayView$slice$5$(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      moonbitlang$core$builtin$$fixed_quick_sort_by$5$(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$MutArrayView$at$5$(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$builtin$$fixed_quick_sort_by$5$(right, cmp, moonbitlang$core$array$$MutArrayView$at$5$(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$MutArrayView$sort_by$5$(self, cmp) {
  moonbitlang$core$builtin$$fixed_quick_sort_by$5$(self, cmp, void 0, moonbitlang$core$builtin$$fixed_get_limit(self.end - self.start | 0));
}
function moonbitlang$core$array$$Array$sort_by$5$(self, cmp) {
  moonbitlang$core$array$$MutArrayView$sort_by$5$(moonbitlang$core$array$$Array$mut_view$46$inner$5$(self, 0, void 0), cmp);
}
function moonbitlang$core$array$$Array$clear$14$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$14$(self, 0);
}
function moonbitlang$core$array$$Array$clear$15$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$(self, 0);
}
function moonbitlang$core$array$$Array$last$19$(self) {
  if (self.length === 0) {
    return void 0;
  } else {
    const _last = self[self.length - 1 | 0];
    return _last;
  }
}
function mizchi$js$core$$identity_option$31$(v) {
  return mizchi$js$core$$is_nullish(v) ? Option$None$4$ : new Option$Some$4$(v);
}
function mizchi$js$browser$dom$$Node$nodeType(self) {
  return mizchi$js$core$$Any$_get(self, "nodeType");
}
function mizchi$js$browser$dom$$Node$parentNode(self) {
  const v = mizchi$js$core$$Any$_get(self, "parentNode");
  return mizchi$js$core$$identity_option$31$(v);
}
function mizchi$js$browser$dom$$Node$firstChild(self) {
  const v = mizchi$js$core$$Any$_get(self, "firstChild");
  return mizchi$js$core$$identity_option$31$(v);
}
function mizchi$js$browser$dom$$Node$appendChild(self, child) {
  return mizchi$js$core$$Any$_call(self, "appendChild", [child]);
}
function mizchi$js$browser$dom$$Node$removeChild(self, child) {
  return mizchi$js$core$$Any$_call(self, "removeChild", [child]);
}
function mizchi$js$browser$dom$$Node$insertBefore(self, new_node, ref_node) {
  if (ref_node.$tag === 1) {
    const _Some = ref_node;
    const _node = _Some._0;
    return mizchi$js$core$$Any$_call(self, "insertBefore", [new_node, _node]);
  } else {
    return mizchi$js$core$$Any$_call(self, "insertBefore", [new_node, mizchi$js$core$$null()]);
  }
}
function mizchi$js$browser$dom$$Node$setTextContent(self, content) {
  mizchi$js$core$$Any$_set(self, "textContent", content);
}
function mizchi$js$browser$dom$$FormEvent$preventDefault(self) {
  mizchi$js$core$$Any$_call(self, "preventDefault", []);
}
function mizchi$js$browser$dom$$InputEvent$target(self) {
  return mizchi$js$core$$Any$_get(self, "target");
}
function mizchi$js$browser$dom$$Element$setClassName(self, class_name) {
  mizchi$js$core$$Any$_set(self, "className", class_name);
}
function mizchi$js$browser$dom$$Element$setAttribute(self, name, value) {
  mizchi$js$core$$Any$_call(self, "setAttribute", [name, value]);
}
function mizchi$js$browser$dom$$Element$removeAttribute(self, name) {
  mizchi$js$core$$Any$_call(self, "removeAttribute", [name]);
}
function mizchi$js$browser$dom$$Document$createDocumentFragment(self) {
  return mizchi$js$core$$Any$_call(self, "createDocumentFragment", []);
}
function mizchi$js$browser$dom$$Document$createComment(self, data) {
  return mizchi$js$core$$Any$_call(self, "createComment", [data]);
}
function mizchi$luna$luna$signal$$new_effect_id() {
  const id = mizchi$luna$luna$signal$$effect_id_counter.val;
  mizchi$luna$luna$signal$$effect_id_counter.val = id + 1 | 0;
  return id;
}
function mizchi$luna$luna$signal$$run_cleanups(cleanups) {
  let _tmp = cleanups.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _func = moonbitlang$core$array$$Array$at$15$(cleanups, i);
      _func();
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$15$(cleanups);
}
function mizchi$luna$luna$signal$$set_current_cleanups(cleanups) {
  const prev = mizchi$luna$luna$signal$$reactive_context.current_cleanups;
  mizchi$luna$luna$signal$$reactive_context.current_cleanups = cleanups;
  return prev;
}
function mizchi$luna$luna$signal$$run_with_cleanup_tracking$2$(cleanups, f) {
  const prev = mizchi$luna$luna$signal$$set_current_cleanups(new Option$Some$0$(cleanups));
  f();
  mizchi$luna$luna$signal$$reactive_context.current_cleanups = prev;
}
function mizchi$luna$luna$signal$$run_with_subscriber$2$(subscriber, f) {
  const prev = mizchi$luna$luna$signal$$reactive_context.current_subscriber;
  mizchi$luna$luna$signal$$reactive_context.current_subscriber = subscriber;
  f();
  mizchi$luna$luna$signal$$reactive_context.current_subscriber = prev;
}
function mizchi$luna$luna$signal$$create_effect_runner(fn_, state) {
  const id = mizchi$luna$luna$signal$$new_effect_id();
  const runner_ref = { val: void 0 };
  const run_effect = () => {
    if (!state.active) {
      return void 0;
    }
    mizchi$luna$luna$signal$$run_cleanups(state.cleanups);
    const _bind = runner_ref.val;
    if (_bind === void 0) {
      return;
    } else {
      const _Some = _bind;
      const _runner = _Some;
      mizchi$luna$luna$signal$$run_with_subscriber$2$(_runner, () => {
        mizchi$luna$luna$signal$$run_with_cleanup_tracking$2$(state.cleanups, fn_);
      });
      return;
    }
  };
  const runner = { id, run: run_effect };
  runner_ref.val = runner;
  const dispose = () => {
    state.active = false;
    mizchi$luna$luna$signal$$run_cleanups(state.cleanups);
  };
  return { _0: runner, _1: dispose };
}
function mizchi$luna$luna$signal$$register_disposer(disposer) {
  const _bind = mizchi$luna$luna$signal$$reactive_context.current_owner;
  if (_bind === void 0) {
    return;
  } else {
    const _Some = _bind;
    const _owner = _Some;
    moonbitlang$core$array$$Array$push$15$(_owner.disposers, disposer);
    return;
  }
}
function mizchi$luna$luna$signal$$render_effect(fn_) {
  const state = { active: true, cleanups: [] };
  const _bind = mizchi$luna$luna$signal$$create_effect_runner(fn_, state);
  const _runner = _bind._0;
  const _dispose = _bind._1;
  const _func = _runner.run;
  _func();
  mizchi$luna$luna$signal$$register_disposer(_dispose);
  return _dispose;
}
function mizchi$luna$luna$signal$$Signal$get$1$(self) {
  const _bind = mizchi$luna$luna$signal$$reactive_context.current_subscriber;
  if (_bind === void 0) {
  } else {
    const _Some = _bind;
    const _subscriber = _Some;
    const already_subscribed = moonbitlang$core$builtin$$Iter$any$26$(moonbitlang$core$array$$Array$iter$26$(self.subscribers), (s) => s.id === _subscriber.id);
    if (!already_subscribed) {
      moonbitlang$core$array$$Array$push$26$(self.subscribers, _subscriber);
    }
  }
  return self.value;
}
function mizchi$luna$luna$signal$$Signal$get$40$(self) {
  const _bind = mizchi$luna$luna$signal$$reactive_context.current_subscriber;
  if (_bind === void 0) {
  } else {
    const _Some = _bind;
    const _subscriber = _Some;
    const already_subscribed = moonbitlang$core$builtin$$Iter$any$26$(moonbitlang$core$array$$Array$iter$26$(self.subscribers), (s) => s.id === _subscriber.id);
    if (!already_subscribed) {
      moonbitlang$core$array$$Array$push$26$(self.subscribers, _subscriber);
    }
  }
  return self.value;
}
function mizchi$luna$luna$signal$$Signal$new$1$(initial) {
  return { value: initial, subscribers: [] };
}
function mizchi$luna$luna$signal$$Signal$new$40$(initial) {
  return { value: initial, subscribers: [] };
}
function mizchi$luna$luna$signal$$signal$1$(initial) {
  return mizchi$luna$luna$signal$$Signal$new$1$(initial);
}
function mizchi$luna$luna$signal$$signal$40$(initial) {
  return mizchi$luna$luna$signal$$Signal$new$40$(initial);
}
function mizchi$luna$luna$signal$$is_pending(id) {
  const _arr = mizchi$luna$luna$signal$$reactive_context.pending_ids;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const pending_id = _arr[_i];
      if (pending_id === id) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function mizchi$luna$luna$signal$$schedule_effect(effect) {
  if (mizchi$luna$luna$signal$$reactive_context.batch_depth > 0) {
    if (!mizchi$luna$luna$signal$$is_pending(effect.id)) {
      moonbitlang$core$array$$Array$push$16$(mizchi$luna$luna$signal$$reactive_context.pending_ids, effect.id);
      moonbitlang$core$array$$Array$push$26$(mizchi$luna$luna$signal$$reactive_context.pending_effects, effect);
      return;
    } else {
      return;
    }
  } else {
    const _func = effect.run;
    _func();
    return;
  }
}
function mizchi$luna$luna$signal$$Signal$notify$40$(self) {
  const _arr = self.subscribers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const subscriber = _arr[_i];
      mizchi$luna$luna$signal$$schedule_effect(subscriber);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function mizchi$luna$luna$signal$$Signal$notify$1$(self) {
  const _arr = self.subscribers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const subscriber = _arr[_i];
      mizchi$luna$luna$signal$$schedule_effect(subscriber);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function mizchi$luna$luna$signal$$Signal$set$40$(self, new_value) {
  self.value = new_value;
  mizchi$luna$luna$signal$$Signal$notify$40$(self);
}
function mizchi$luna$luna$signal$$Signal$set$1$(self, new_value) {
  self.value = new_value;
  mizchi$luna$luna$signal$$Signal$notify$1$(self);
}
function mizchi$luna$luna$signal$$run_with_owner$41$(owner, f) {
  const prev = mizchi$luna$luna$signal$$reactive_context.current_owner;
  mizchi$luna$luna$signal$$reactive_context.current_owner = owner;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context.current_owner = prev;
  return result;
}
function mizchi$luna$luna$signal$$run_with_owner$13$(owner, f) {
  const prev = mizchi$luna$luna$signal$$reactive_context.current_owner;
  mizchi$luna$luna$signal$$reactive_context.current_owner = owner;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context.current_owner = prev;
  return result;
}
function mizchi$luna$luna$signal$$Owner$dispose(self) {
  if (self.disposed) {
    return void 0;
  }
  self.disposed = true;
  let _tmp = self.children.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      mizchi$luna$luna$signal$$Owner$dispose(moonbitlang$core$array$$Array$at$14$(self.children, i));
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = self.disposers.length - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      const _func = moonbitlang$core$array$$Array$at$15$(self.disposers, i);
      _func();
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = self.cleanups.length - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 0) {
      const _func = moonbitlang$core$array$$Array$at$15$(self.cleanups, i);
      _func();
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$14$(self.children);
  moonbitlang$core$array$$Array$clear$15$(self.disposers);
  moonbitlang$core$array$$Array$clear$15$(self.cleanups);
  const _bind = self.parent;
  if (_bind === void 0) {
    return;
  } else {
    const _Some = _bind;
    const _p = _Some;
    const _p$2 = _p.children;
    const _p$3 = _p$2.length;
    let _tmp$4 = 0;
    let _tmp$5 = 0;
    while (true) {
      const _p$4 = _tmp$4;
      const _p$5 = _tmp$5;
      if (_p$4 < _p$3) {
        const _p$6 = _p$2[_p$4];
        if (_p$6.id !== self.id) {
          _p$2[_p$5] = _p$6;
          _tmp$4 = _p$4 + 1 | 0;
          _tmp$5 = _p$5 + 1 | 0;
          continue;
        }
        _tmp$4 = _p$4 + 1 | 0;
        continue;
      } else {
        moonbitlang$core$array$$Array$unsafe_truncate_to_length$14$(_p$2, _p$5);
        return;
      }
    }
  }
}
function mizchi$luna$luna$signal$$Owner$new(parent) {
  const owner = { id: mizchi$luna$luna$signal$$new_effect_id(), parent, children: [], cleanups: [], disposers: [], disposed: false };
  if (parent === void 0) {
  } else {
    const _Some = parent;
    const _p = _Some;
    moonbitlang$core$array$$Array$push$14$(_p.children, owner);
  }
  return owner;
}
function mizchi$luna$luna$signal$$untracked$40$(f) {
  const prev = mizchi$luna$luna$signal$$reactive_context.current_subscriber;
  mizchi$luna$luna$signal$$reactive_context.current_subscriber = void 0;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context.current_subscriber = prev;
  return result;
}
function mizchi$luna$luna$signal$$untracked$41$(f) {
  const prev = mizchi$luna$luna$signal$$reactive_context.current_subscriber;
  mizchi$luna$luna$signal$$reactive_context.current_subscriber = void 0;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context.current_subscriber = prev;
  return result;
}
function mizchi$luna$luna$signal$$create_root_with_dispose$13$(f) {
  const owner = mizchi$luna$luna$signal$$Owner$new(mizchi$luna$luna$signal$$reactive_context.current_owner);
  const dispose = () => {
    mizchi$luna$luna$signal$$Owner$dispose(owner);
  };
  const result = mizchi$luna$luna$signal$$run_with_owner$13$(owner, f);
  return { _0: result, _1: dispose };
}
function mizchi$luna$luna$signal$$with_parent_owner$41$(captured_owner, f) {
  if (captured_owner === void 0) {
    return f();
  } else {
    const _Some = captured_owner;
    const _parent = _Some;
    return mizchi$luna$luna$signal$$run_with_owner$41$(_parent, f);
  }
}
function mizchi$luna$luna$dom$element$$text_node(content) {
  const doc = mizchi$js$browser$dom$$document();
  const initial = content();
  const node = mizchi$js$browser$dom$$Document$createTextNode(doc, initial);
  mizchi$luna$luna$signal$$render_effect(() => {
    const new_content = content();
    mizchi$js$browser$dom$$Node$setTextContent(node, new_content);
  });
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt(node);
}
function mizchi$luna$luna$dom$element$$text_from_signal$1$(sig) {
  return mizchi$luna$luna$dom$element$$text_node(() => mizchi$luna$luna$signal$$Signal$get$1$(sig));
}
function mizchi$luna$luna$dom$element$$apply_static_attr(elem, name, value) {
  if (name === "className" || name === "class") {
    mizchi$js$browser$dom$$Element$setClassName(elem, value);
    return;
  } else {
    if (name === "__innerHTML") {
      mizchi$js$core$$Any$_set(elem, "innerHTML", value);
      return;
    } else {
      if (name === "value") {
        mizchi$js$core$$Any$_set(elem, "value", value);
        return;
      } else {
        if (name === "checked") {
          mizchi$js$core$$Any$_set(elem, "checked", value === "true");
          return;
        } else {
          if (name === "disabled") {
            if (value === "true") {
              mizchi$js$browser$dom$$Element$setAttribute(elem, "disabled", "");
              return;
            } else {
              mizchi$js$browser$dom$$Element$removeAttribute(elem, "disabled");
              return;
            }
          } else {
            mizchi$js$browser$dom$$Element$setAttribute(elem, name, value);
            return;
          }
        }
      }
    }
  }
}
function mizchi$luna$luna$dom$element$$apply_style_string(elem, style) {
  mizchi$js$browser$dom$$Element$setAttribute(elem, "style", style);
}
function mizchi$luna$luna$dom$element$$apply_attribute(elem, name, value) {
  switch (value.$tag) {
    case 0: {
      const _Static = value;
      const _s = _Static._0;
      if (name === "style") {
        mizchi$luna$luna$dom$element$$apply_style_string(elem, _s);
        return;
      } else {
        mizchi$luna$luna$dom$element$$apply_static_attr(elem, name, _s);
        return;
      }
    }
    case 1: {
      const _Dynamic = value;
      const _getter = _Dynamic._0;
      mizchi$luna$luna$signal$$render_effect(() => {
        const new_value = _getter();
        if (name === "style") {
          mizchi$luna$luna$dom$element$$apply_style_string(elem, new_value);
          return;
        } else {
          mizchi$luna$luna$dom$element$$apply_static_attr(elem, name, new_value);
          return;
        }
      });
      return;
    }
    default: {
      const _Handler = value;
      const _handler = _Handler._0;
      if (name === "__ref") {
        _handler(elem);
        return;
      } else {
        mizchi$luna$luna$dom$element$$apply_event_handler(elem, name, _handler);
        return;
      }
    }
  }
}
function mizchi$luna$luna$dom$element$$DomElement$from_dom(elem) {
  return { inner: elem };
}
function mizchi$luna$luna$dom$element$$DomNode$to_dom(self) {
  switch (self.$tag) {
    case 0: {
      const _El = self;
      const _elem = _El._0;
      return _elem.inner;
    }
    case 1: {
      const _Txt = self;
      const _text = _Txt._0;
      return _text;
    }
    case 2: {
      const _Raw = self;
      return _Raw._0;
    }
    default: {
      const _Static = self;
      return _Static._0;
    }
  }
}
function mizchi$luna$luna$dom$element$$create_element(tag, attrs, children) {
  const doc = mizchi$js$browser$dom$$document();
  const elem = mizchi$js$browser$dom$$Document$createElement(doc, tag);
  const _len = attrs.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const attr = attrs[_i];
      const _name = attr._0;
      const _value = attr._1;
      mizchi$luna$luna$dom$element$$apply_attribute(elem, _name, _value);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _len$2 = children.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const child = children[_i];
      mizchi$js$browser$dom$$Node$appendChild(elem, mizchi$luna$luna$dom$element$$DomNode$to_dom(child));
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$El(mizchi$luna$luna$dom$element$$DomElement$from_dom(elem));
}
function mizchi$luna$luna$dom$element$$collect_child_nodes(node) {
  if (mizchi$js$browser$dom$$Node$nodeType(node) === 11) {
    const children = [];
    while (true) {
      const _bind = mizchi$js$browser$dom$$Node$firstChild(node);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _child = _Some._0;
        moonbitlang$core$array$$Array$push$31$(children, _child);
        mizchi$js$browser$dom$$Node$removeChild(node, _child);
        continue;
      } else {
        break;
      }
    }
    return children;
  } else {
    return [node];
  }
}
function mizchi$luna$luna$dom$element$$fragment(children) {
  const _bind = children.length;
  switch (_bind) {
    case 0: {
      const doc = mizchi$js$browser$dom$$document();
      const frag = mizchi$js$browser$dom$$Document$createDocumentFragment(doc);
      return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw(frag);
    }
    case 1: {
      return moonbitlang$core$array$$Array$at$13$(children, 0);
    }
    default: {
      const doc$2 = mizchi$js$browser$dom$$document();
      const frag$2 = mizchi$js$browser$dom$$Document$createDocumentFragment(doc$2);
      const _len = children.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = children[_i];
          mizchi$js$browser$dom$$Node$appendChild(frag$2, mizchi$luna$luna$dom$element$$DomNode$to_dom(child));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw(frag$2);
    }
  }
}
function mizchi$luna$luna$dom$element$$show$46$render_with_scope$124$1407(_env) {
  const render_fn = _env._2;
  const current_dispose = _env._1;
  const captured_owner = _env._0;
  return mizchi$luna$luna$signal$$with_parent_owner$41$(captured_owner, () => {
    const _bind = mizchi$luna$luna$signal$$create_root_with_dispose$13$(() => render_fn());
    const _dom = _bind._0;
    const _dispose = _bind._1;
    current_dispose.val = _dispose;
    return mizchi$luna$luna$dom$element$$collect_child_nodes(mizchi$luna$luna$dom$element$$DomNode$to_dom(_dom));
  });
}
function mizchi$luna$luna$dom$element$$show(when, render_fn) {
  const doc = mizchi$js$browser$dom$$document();
  const placeholder = mizchi$js$browser$dom$$Document$createComment(doc, "show");
  const captured_owner = mizchi$luna$luna$signal$$reactive_context.current_owner;
  const current_dispose = { val: void 0 };
  const _env = { _0: captured_owner, _1: current_dispose, _2: render_fn };
  const initial_show = mizchi$luna$luna$signal$$untracked$40$(() => when());
  const initial_nodes = initial_show ? mizchi$luna$luna$signal$$untracked$41$(() => mizchi$luna$luna$dom$element$$show$46$render_with_scope$124$1407(_env)) : [];
  const current_nodes = { val: initial_nodes };
  const is_first_run = { val: true };
  mizchi$luna$luna$signal$$render_effect(() => {
    const should_show = when();
    const has_nodes = current_nodes.val.length > 0;
    if (is_first_run.val) {
      is_first_run.val = false;
      return void 0;
    }
    if (should_show === true) {
      if (has_nodes === false) {
        const _bind = mizchi$js$browser$dom$$Node$parentNode(placeholder);
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _parent = _Some._0;
          const nodes = mizchi$luna$luna$signal$$untracked$41$(() => mizchi$luna$luna$dom$element$$show$46$render_with_scope$124$1407(_env));
          const _len = nodes.length;
          let _tmp = 0;
          while (true) {
            const _i = _tmp;
            if (_i < _len) {
              const node = nodes[_i];
              mizchi$js$browser$dom$$Node$insertBefore(_parent, node, new Option$Some$4$(placeholder));
              _tmp = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          current_nodes.val = nodes;
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      if (has_nodes === true) {
        const _bind = current_dispose.val;
        if (_bind === void 0) {
        } else {
          const _Some = _bind;
          const _dispose = _Some;
          _dispose();
          current_dispose.val = void 0;
        }
        const _arr = current_nodes.val;
        const _len = _arr.length;
        let _tmp = 0;
        while (true) {
          const _i = _tmp;
          if (_i < _len) {
            const node = _arr[_i];
            const _bind$2 = mizchi$js$browser$dom$$Node$parentNode(node);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _parent = _Some._0;
              mizchi$js$browser$dom$$Node$removeChild(_parent, node);
            }
            _tmp = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        current_nodes.val = [];
        return;
      } else {
        return;
      }
    }
  });
  if (initial_nodes.length > 0) {
    const all_nodes = [];
    const _len = initial_nodes.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const node = initial_nodes[_i];
        moonbitlang$core$array$$Array$push$13$(all_nodes, new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw(node));
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$push$13$(all_nodes, new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw(placeholder));
    return mizchi$luna$luna$dom$element$$fragment(all_nodes);
  } else {
    return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw(placeholder);
  }
}
function mizchi$luna$luna$dom$element$$ToDomNode$to_dom_node$1$(self) {
  const doc = mizchi$js$browser$dom$$document();
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt(mizchi$js$browser$dom$$Document$createTextNode(doc, self));
}
function mizchi$luna$luna$dom$element$$double_to_string(d) {
  const any = d;
  return mizchi$js$core$$Any$_call(any, "toString", []);
}
function moonbitlang$core$builtin$$Show$output$23$(self, logger) {
  switch (self.$tag) {
    case 0: {
      const _AttrString = self;
      const _s = _AttrString._0;
      logger.method_0(logger.self, _s);
      return;
    }
    case 1: {
      const _AttrNumber = self;
      const _d = _AttrNumber._0;
      logger.method_0(logger.self, mizchi$luna$luna$dom$element$$double_to_string(_d));
      return;
    }
    case 2: {
      const _AttrInt = self;
      const _i = _AttrInt._0;
      logger.method_0(logger.self, moonbitlang$core$int$$Int$to_string$46$inner(_i, 10));
      return;
    }
    default: {
      const _AttrBool = self;
      const _b = _AttrBool._0;
      logger.method_0(logger.self, moonbitlang$core$builtin$$Show$to_string$21$(_b));
      return;
    }
  }
}
function mizchi$luna$luna$dom$element$$Attr$to_attr_value(self) {
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(moonbitlang$core$builtin$$Show$to_string$22$(self));
}
function mizchi$luna$luna$dom$element$$events() {
  return mizchi$js$core$$new_object();
}
function mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs) {
  const result = [];
  if (id === void 0) {
  } else {
    const _Some = id;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(result, { _0: "id", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (class_ === void 0) {
  } else {
    const _Some = class_;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(result, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (style === void 0) {
  } else {
    const _Some = style;
    const _s = _Some;
    moonbitlang$core$array$$Array$push$29$(result, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_s) });
  }
  if (on.$tag === 1) {
    const _Some = on;
    const _handlers = _Some._0;
    const _arr = mizchi$luna$luna$dom$element$$HandlerMap$to_attrs(_handlers);
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const attr = _arr[_i];
        moonbitlang$core$array$$Array$push$29$(result, attr);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (ref_ === void 0) {
  } else {
    const _Some = ref_;
    const _cb = _Some;
    const handler = (el) => {
      _cb(el);
    };
    moonbitlang$core$array$$Array$push$29$(result, { _0: "__ref", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler(handler) });
  }
  if (attrs.$tag === 1) {
    const _Some = attrs;
    const _extra = _Some._0;
    const _len = _extra.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const pair = _extra[_i];
        moonbitlang$core$array$$Array$push$29$(result, { _0: pair._0, _1: mizchi$luna$luna$dom$element$$Attr$to_attr_value(pair._1) });
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (dyn_attrs.$tag === 1) {
    const _Some = dyn_attrs;
    const _extra = _Some._0;
    const _len = _extra.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const pair = _extra[_i];
        moonbitlang$core$array$$Array$push$29$(result, pair);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return result;
}
function mizchi$luna$luna$dom$element$$div(id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element("div", props, children);
}
function mizchi$luna$luna$dom$element$$span(id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element("span", props, children);
}
function mizchi$luna$luna$dom$element$$button(disabled, id, class_, style, dyn_class, dyn_style, dyn_disabled, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (disabled === -1) {
  } else {
    const _Some = disabled;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$(props, mizchi$luna$luna$dom$element$$button$46$tuple$47$1115);
    }
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_disabled === void 0) {
  } else {
    const _Some = dyn_disabled;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "disabled", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(() => moonbitlang$core$builtin$$Show$to_string$21$(_getter())) });
  }
  return mizchi$luna$luna$dom$element$$create_element("button", props, children);
}
function mizchi$luna$luna$dom$element$$input(type_, name, value, placeholder, disabled, readonly_, required, checked, id, class_, style, dyn_class, dyn_style, dyn_value, dyn_disabled, dyn_checked, on, ref_, attrs, dyn_attrs) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (type_ === void 0) {
  } else {
    const _Some = type_;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "type", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (name === void 0) {
  } else {
    const _Some = name;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "name", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (value === void 0) {
  } else {
    const _Some = value;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "value", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (placeholder === void 0) {
  } else {
    const _Some = placeholder;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "placeholder", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (disabled === -1) {
  } else {
    const _Some = disabled;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1138);
    }
  }
  if (readonly_ === -1) {
  } else {
    const _Some = readonly_;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1140);
    }
  }
  if (required === -1) {
  } else {
    const _Some = required;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1142);
    }
  }
  if (checked === -1) {
  } else {
    const _Some = checked;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1144);
    }
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_value === void 0) {
  } else {
    const _Some = dyn_value;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "value", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_disabled === void 0) {
  } else {
    const _Some = dyn_disabled;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "disabled", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(() => moonbitlang$core$builtin$$Show$to_string$21$(_getter())) });
  }
  if (dyn_checked === void 0) {
  } else {
    const _Some = dyn_checked;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "checked", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(() => moonbitlang$core$builtin$$Show$to_string$21$(_getter())) });
  }
  return mizchi$luna$luna$dom$element$$create_element("input", props, []);
}
function mizchi$luna$luna$dom$element$$textarea(name, placeholder, disabled, id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (name === void 0) {
  } else {
    const _Some = name;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "name", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (placeholder === void 0) {
  } else {
    const _Some = placeholder;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "placeholder", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (disabled === -1) {
  } else {
    const _Some = disabled;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$(props, mizchi$luna$luna$dom$element$$textarea$46$tuple$47$1193);
    }
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element("textarea", props, children);
}
function mizchi$luna$luna$dom$element$$form(action, http_method, id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (action === void 0) {
  } else {
    const _Some = action;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "action", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (http_method === void 0) {
  } else {
    const _Some = http_method;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "method", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element("form", props, children);
}
function mizchi$luna$luna$dom$element$$label(for_, id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (for_ === void 0) {
  } else {
    const _Some = for_;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "for", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(_v) });
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element("label", props, children);
}
function mizchi$luna$luna$dom$element$$text(content) {
  return mizchi$luna$luna$dom$element$$ToDomNode$to_dom_node$1$(content);
}
function mizchi$luna$luna$dom$element$$text_of$1$(sig) {
  return mizchi$luna$luna$dom$element$$text_from_signal$1$(sig);
}
function mizchi$luna$sol$action$$ActionOptions$default() {
  return { headers: [], timeout: void 0, signal: Option$None$5$ };
}
function mizchi$luna$sol$action$$invoke_action(url, payload, callback, options) {
  const _p = mizchi$luna$sol$action$$ActionOptions$default();
  let opts;
  if (options === void 0) {
    opts = _p;
  } else {
    const _p$2 = options;
    opts = _p$2;
  }
  mizchi$luna$sol$action$$ffi_invoke_action_cb(url, payload, callback, opts);
}
function moonbitlang$core$builtin$$Eq$equal$42$(_x_1792, _x_1793) {
  if (_x_1792 === 0) {
    if (_x_1793 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1793 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$38$(_x_1752, _x_1753) {
  switch (_x_1752) {
    case 0: {
      if (_x_1753 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1753 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1753 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function mizchi$markdown$$Span$new(from, to) {
  return { from, to };
}
function mizchi$markdown$$Trivia$new(content) {
  return { content };
}
function mizchi$markdown$$Scanner$new(source) {
  const chars = moonbitlang$core$string$$String$to_array(source);
  const len = chars.length;
  const has_non_bmp = source.length !== len;
  let utf16_offsets;
  if (has_non_bmp) {
    const offsets = moonbitlang$core$array$$Array$make$16$(len + 1 | 0, 0);
    let utf16_pos = 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        moonbitlang$core$array$$Array$set$16$(offsets, i, utf16_pos);
        const _p = moonbitlang$core$array$$Array$at$11$(chars, i);
        if (_p > 65535) {
          utf16_pos = utf16_pos + 2 | 0;
        } else {
          utf16_pos = utf16_pos + 1 | 0;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$set$16$(offsets, len, utf16_pos);
    utf16_offsets = new Option$Some$6$(offsets);
  } else {
    utf16_offsets = Option$None$6$;
  }
  return { source, chars, pos: 0, len, utf16_offsets };
}
function mizchi$markdown$$Scanner$to_utf16_index(self, cp_index) {
  const _bind = self.utf16_offsets;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _offsets = _Some._0;
    return moonbitlang$core$array$$Array$at$16$(_offsets, cp_index);
  } else {
    return cp_index;
  }
}
function mizchi$markdown$$Scanner$peek(self) {
  return self.pos >= self.len ? -1 : moonbitlang$core$array$$Array$at$11$(self.chars, self.pos);
}
function mizchi$markdown$$Scanner$peek_at(self, offset) {
  const idx = self.pos + offset | 0;
  return idx >= self.len || idx < 0 ? -1 : moonbitlang$core$array$$Array$at$11$(self.chars, idx);
}
function mizchi$markdown$$Scanner$advance(self, n) {
  self.pos = self.pos + n | 0;
  if (self.pos > self.len) {
    self.pos = self.len;
    return;
  } else {
    return;
  }
}
function mizchi$markdown$$Scanner$consume(self) {
  if (self.pos >= self.len) {
    return -1;
  } else {
    const c = moonbitlang$core$array$$Array$at$11$(self.chars, self.pos);
    self.pos = self.pos + 1 | 0;
    return c;
  }
}
function mizchi$markdown$$Scanner$substring(self, start, end) {
  const clamped_start = start < 0 ? 0 : start > self.len ? self.len : start;
  const clamped_end = end < 0 ? 0 : end > self.len ? self.len : end;
  if (clamped_start >= clamped_end) {
    return "";
  } else {
    const utf16_start = mizchi$markdown$$Scanner$to_utf16_index(self, clamped_start);
    const utf16_end = mizchi$markdown$$Scanner$to_utf16_index(self, clamped_end);
    return self.source.substring(utf16_start, utf16_end);
  }
}
function mizchi$markdown$$Scanner$skip_spaces(self) {
  const start = self.pos;
  while (true) {
    if (self.pos < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$(self.chars, self.pos);
      if (c === 32 || c === 9) {
        self.pos = self.pos + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return self.pos - start | 0;
}
function mizchi$markdown$$Scanner$count_leading_spaces(self) {
  let count = 0;
  let idx = self.pos;
  while (true) {
    if (idx < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$(self.chars, idx);
      if (c === 32) {
        count = count + 1 | 0;
        idx = idx + 1 | 0;
      } else {
        if (c === 9) {
          count = Math.imul((count / 4 | 0) + 1 | 0, 4) | 0;
          idx = idx + 1 | 0;
        } else {
          break;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return count;
}
function mizchi$markdown$$Scanner$read_line(self) {
  const start = self.pos;
  while (true) {
    if (self.pos < self.len) {
      if (moonbitlang$core$array$$Array$at$11$(self.chars, self.pos) === 10) {
        break;
      }
      self.pos = self.pos + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const utf16_start = mizchi$markdown$$Scanner$to_utf16_index(self, start);
  const utf16_end = mizchi$markdown$$Scanner$to_utf16_index(self, self.pos);
  return self.source.substring(utf16_start, utf16_end);
}
function mizchi$markdown$$Scanner$skip_line(self) {
  while (true) {
    if (self.pos < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$(self.chars, self.pos);
      self.pos = self.pos + 1 | 0;
      if (c === 10) {
        break;
      }
      continue;
    } else {
      return;
    }
  }
}
function mizchi$markdown$$Scanner$is_blank_line(self) {
  let idx = self.pos;
  while (true) {
    if (idx < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$(self.chars, idx);
      if (c === 10) {
        return true;
      }
      if (c !== 32 && c !== 9) {
        return false;
      }
      idx = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function mizchi$markdown$$Scanner$matches(self, s) {
  const s_len = s.length;
  if ((self.pos + s_len | 0) > self.len) {
    return false;
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < s_len) {
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char(s, i);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _b = _Some;
            if (moonbitlang$core$array$$Array$at$11$(self.chars, self.pos + i | 0) === _b) {
              break _L;
            } else {
              break _L$2;
            }
          }
        }
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function mizchi$markdown$$Scanner$count_char(self, c) {
  let count = 0;
  let idx = self.pos;
  while (true) {
    if (idx < self.len) {
      if (moonbitlang$core$array$$Array$at$11$(self.chars, idx) === c) {
        count = count + 1 | 0;
        idx = idx + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return count;
}
function mizchi$markdown$$Scanner$restore(self, pos) {
  self.pos = pos;
}
function mizchi$markdown$$is_punctuation(c) {
  switch (c) {
    case 33: {
      return true;
    }
    case 34: {
      return true;
    }
    case 35: {
      return true;
    }
    case 36: {
      return true;
    }
    case 37: {
      return true;
    }
    case 38: {
      return true;
    }
    case 39: {
      return true;
    }
    case 40: {
      return true;
    }
    case 41: {
      return true;
    }
    case 42: {
      return true;
    }
    case 43: {
      return true;
    }
    case 44: {
      return true;
    }
    case 45: {
      return true;
    }
    case 46: {
      return true;
    }
    case 47: {
      return true;
    }
    case 58: {
      return true;
    }
    case 59: {
      return true;
    }
    case 60: {
      return true;
    }
    case 61: {
      return true;
    }
    case 62: {
      return true;
    }
    case 63: {
      return true;
    }
    case 64: {
      return true;
    }
    case 91: {
      return true;
    }
    case 92: {
      return true;
    }
    case 93: {
      return true;
    }
    case 94: {
      return true;
    }
    case 95: {
      return true;
    }
    case 96: {
      return true;
    }
    case 123: {
      return true;
    }
    case 124: {
      return true;
    }
    case 125: {
      return true;
    }
    case 126: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function mizchi$markdown$$char_is_digit(opt) {
  if (opt === -1) {
    return false;
  } else {
    const _Some = opt;
    const _c = _Some;
    return _c >= 48 && _c <= 57;
  }
}
function mizchi$markdown$$escape_html(s) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _it = moonbitlang$core$string$$String$iterator(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      switch (_c) {
        case 38: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&amp;");
          break;
        }
        case 60: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&lt;");
          break;
        }
        case 62: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&gt;");
          break;
        }
        case 34: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&quot;");
          break;
        }
        default: {
          moonbitlang$core$builtin$$Logger$write_char$8$(buf, _c);
        }
      }
      continue;
    }
  }
  return buf.val;
}
function mizchi$markdown$$escape_html_attr(s) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _it = moonbitlang$core$string$$String$iterator(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      switch (_c) {
        case 38: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&amp;");
          break;
        }
        case 60: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&lt;");
          break;
        }
        case 62: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&gt;");
          break;
        }
        case 34: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&quot;");
          break;
        }
        case 39: {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "&#39;");
          break;
        }
        default: {
          moonbitlang$core$builtin$$Logger$write_char$8$(buf, _c);
        }
      }
      continue;
    }
  }
  return buf.val;
}
function mizchi$markdown$$render_inlines_html(inlines, buf) {
  const _len = inlines.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const inline = inlines[_i];
      mizchi$markdown$$render_inline_html(inline, buf);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function mizchi$markdown$$render_inline_html(inline, buf) {
  switch (inline.$tag) {
    case 0: {
      const _Text = inline;
      const _content = _Text._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_content));
      return;
    }
    case 6: {
      const _Code = inline;
      const _content$2 = _Code._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<code>");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_content$2));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</code>");
      return;
    }
    case 3: {
      const _Emphasis = inline;
      const _children = _Emphasis._1;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<em>");
      mizchi$markdown$$render_inlines_html(_children, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</em>");
      return;
    }
    case 4: {
      const _Strong = inline;
      const _children$2 = _Strong._1;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<strong>");
      mizchi$markdown$$render_inlines_html(_children$2, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</strong>");
      return;
    }
    case 5: {
      const _Strikethrough = inline;
      const _children$3 = _Strikethrough._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<del>");
      mizchi$markdown$$render_inlines_html(_children$3, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</del>");
      return;
    }
    case 7: {
      const _Link = inline;
      const _children$4 = _Link._0;
      const _url = _Link._1;
      const _title = _Link._2;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<a href="');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_url));
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 34);
      if (!(_title === "")) {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, ' title="');
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_title));
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, 34);
      }
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 62);
      mizchi$markdown$$render_inlines_html(_children$4, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</a>");
      return;
    }
    case 8: {
      const _RefLink = inline;
      const _children$5 = _RefLink._0;
      const _label = _RefLink._1;
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 91);
      mizchi$markdown$$render_inlines_html(_children$5, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "][");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_label));
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 93);
      return;
    }
    case 9: {
      const _Autolink = inline;
      const _url$2 = _Autolink._0;
      const _is_email = _Autolink._1;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<a href="');
      if (_is_email) {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, "mailto:");
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_url$2));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '">');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_url$2));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</a>");
      return;
    }
    case 10: {
      const _Image = inline;
      const _alt = _Image._0;
      const _url$3 = _Image._1;
      const _title$2 = _Image._2;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<img src="');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_url$3));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '" alt="');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_alt));
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 34);
      if (!(_title$2 === "")) {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, ' title="');
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_title$2));
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, 34);
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, ">");
      return;
    }
    case 11: {
      const _RefImage = inline;
      const _alt$2 = _RefImage._0;
      const _label$2 = _RefImage._1;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "![");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_alt$2));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "][");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_label$2));
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 93);
      return;
    }
    case 12: {
      const _HtmlInline = inline;
      const _html = _HtmlInline._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, _html);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 10);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<br>\n");
      return;
    }
    default: {
      const _FootnoteReference = inline;
      const _label$3 = _FootnoteReference._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<sup><a href="#fn-');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_label$3));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '" id="fnref-');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html_attr(_label$3));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '">');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_label$3));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</a></sup>");
      return;
    }
  }
}
function mizchi$markdown$$render_table_cell_html(cell, buf, tag, align) {
  moonbitlang$core$builtin$$Logger$write_char$8$(buf, 60);
  moonbitlang$core$builtin$$Logger$write_string$8$(buf, tag);
  switch (align) {
    case 0: {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, ' align="left"');
      break;
    }
    case 1: {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, ' align="center"');
      break;
    }
    case 2: {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, ' align="right"');
      break;
    }
  }
  moonbitlang$core$builtin$$Logger$write_char$8$(buf, 62);
  mizchi$markdown$$render_inlines_html(cell.children, buf);
  moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</");
  moonbitlang$core$builtin$$Logger$write_string$8$(buf, tag);
  moonbitlang$core$builtin$$Logger$write_string$8$(buf, ">\n");
}
function mizchi$markdown$$render_block_html(block, buf) {
  switch (block.$tag) {
    case 2: {
      const _Paragraph = block;
      const _children = _Paragraph._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<p>");
      mizchi$markdown$$render_inlines_html(_children, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</p>\n");
      return;
    }
    case 1: {
      const _Heading = block;
      const _level = _Heading._0;
      const _children$2 = _Heading._2;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<h");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, moonbitlang$core$int$$Int$to_string$46$inner(_level, 10));
      moonbitlang$core$builtin$$Logger$write_char$8$(buf, 62);
      mizchi$markdown$$render_inlines_html(_children$2, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</h");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, moonbitlang$core$int$$Int$to_string$46$inner(_level, 10));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, ">\n");
      return;
    }
    case 0: {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<hr>\n");
      return;
    }
    case 3: {
      const _FencedCode = block;
      const _info = _FencedCode._2;
      const _code = _FencedCode._3;
      if (_info === "") {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<pre><code>");
      } else {
        const parts = moonbitlang$core$builtin$$Iter$collect$0$(moonbitlang$core$string$$String$split(_info, { str: mizchi$markdown$$render_block_html$46$42$bind$124$2187, start: 0, end: mizchi$markdown$$render_block_html$46$42$bind$124$2187.length }));
        const lang = parts.length > 0 ? moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$array$$Array$at$0$(parts, 0)) : _info;
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<pre><code class="language-');
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(lang));
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, '">');
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_code));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</code></pre>\n");
      return;
    }
    case 4: {
      const _IndentedCode = block;
      const _code$2 = _IndentedCode._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<pre><code>");
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_code$2));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</code></pre>\n");
      return;
    }
    case 5: {
      const _Blockquote = block;
      const _children$3 = _Blockquote._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<blockquote>\n");
      const _len = _children$3.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = _children$3[_i];
          mizchi$markdown$$render_block_html(child, buf);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</blockquote>\n");
      return;
    }
    case 6: {
      const _BulletList = block;
      const _items = _BulletList._2;
      const _tight = _BulletList._1;
      const has_task = moonbitlang$core$builtin$$Iter$any$18$(moonbitlang$core$array$$Array$iter$18$(_items), (item) => {
        const _bind = item.checked;
        return !(_bind === -1);
      });
      if (has_task) {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<ul class="contains-task-list">\n');
      } else {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<ul>\n");
      }
      const _len$2 = _items.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const item = _items[_i];
          mizchi$markdown$$render_list_item_html(item, buf, _tight, has_task);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</ul>\n");
      return;
    }
    case 7: {
      const _OrderedList = block;
      const _items$2 = _OrderedList._3;
      const _start = _OrderedList._0;
      const _tight$2 = _OrderedList._2;
      const has_task$2 = moonbitlang$core$builtin$$Iter$any$18$(moonbitlang$core$array$$Array$iter$18$(_items$2), (item) => {
        const _bind = item.checked;
        return !(_bind === -1);
      });
      if (_start === 1) {
        if (has_task$2) {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<ol class="contains-task-list">\n');
        } else {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<ol>\n");
        }
      } else {
        if (has_task$2) {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<ol class="contains-task-list" start="');
        } else {
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<ol start="');
        }
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, moonbitlang$core$int$$Int$to_string$46$inner(_start, 10));
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, '">\n');
      }
      const _len$3 = _items$2.length;
      let _tmp$3 = 0;
      while (true) {
        const _i = _tmp$3;
        if (_i < _len$3) {
          const item = _items$2[_i];
          mizchi$markdown$$render_list_item_html(item, buf, _tight$2, has_task$2);
          _tmp$3 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</ol>\n");
      return;
    }
    case 8: {
      const _HtmlBlock = block;
      const _html = _HtmlBlock._0;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, _html);
      if (!moonbitlang$core$string$$String$has_suffix(_html, { str: mizchi$markdown$$render_block_html$46$42$bind$124$2200, start: 0, end: mizchi$markdown$$render_block_html$46$42$bind$124$2200.length })) {
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, 10);
        return;
      } else {
        return;
      }
    }
    case 9: {
      const _Table = block;
      const _header = _Table._0;
      const _alignments = _Table._1;
      const _rows = _Table._2;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<table>\n<thead>\n<tr>\n");
      const _len$4 = _header.length;
      let _tmp$4 = 0;
      while (true) {
        const _i = _tmp$4;
        if (_i < _len$4) {
          const cell = _header[_i];
          const align = _i < _alignments.length ? moonbitlang$core$array$$Array$at$12$(_alignments, _i) : 3;
          mizchi$markdown$$render_table_cell_html(cell, buf, "th", align);
          _tmp$4 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</tr>\n</thead>\n");
      if (_rows.length > 0) {
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<tbody>\n");
        const _len$5 = _rows.length;
        let _tmp$5 = 0;
        while (true) {
          const _i = _tmp$5;
          if (_i < _len$5) {
            const row = _rows[_i];
            moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<tr>\n");
            const _len$6 = row.length;
            let _tmp$6 = 0;
            while (true) {
              const _i$2 = _tmp$6;
              if (_i$2 < _len$6) {
                const cell = row[_i$2];
                const align = _i$2 < _alignments.length ? moonbitlang$core$array$$Array$at$12$(_alignments, _i$2) : 3;
                mizchi$markdown$$render_table_cell_html(cell, buf, "td", align);
                _tmp$6 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</tr>\n");
            _tmp$5 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</tbody>\n");
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</table>\n");
      return;
    }
    case 10: {
      return;
    }
    default: {
      const _FootnoteDefinition = block;
      const _label = _FootnoteDefinition._0;
      const _children$4 = _FootnoteDefinition._1;
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<div class="footnote" id="fn-');
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, mizchi$markdown$$escape_html(_label));
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '">\n');
      const _len$5 = _children$4.length;
      let _tmp$5 = 0;
      while (true) {
        const _i = _tmp$5;
        if (_i < _len$5) {
          const child = _children$4[_i];
          mizchi$markdown$$render_block_html(child, buf);
          _tmp$5 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</div>\n");
      return;
    }
  }
}
function mizchi$markdown$$render_list_item_html(item, buf, tight, is_task_list) {
  let _tmp;
  if (is_task_list) {
    const _bind2 = item.checked;
    _tmp = !(_bind2 === -1);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<li class="task-list-item">');
  } else {
    moonbitlang$core$builtin$$Logger$write_string$8$(buf, "<li>");
  }
  const _bind = item.checked;
  if (_bind === -1) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<input type="checkbox" checked disabled> ');
    } else {
      moonbitlang$core$builtin$$Logger$write_string$8$(buf, '<input type="checkbox" disabled> ');
    }
  }
  if (tight) {
    const _arr = item.children;
    const _len = _arr.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const child = _arr[_i];
        if (child.$tag === 2) {
          const _Paragraph = child;
          const _children = _Paragraph._0;
          mizchi$markdown$$render_inlines_html(_children, buf);
        } else {
          mizchi$markdown$$render_block_html(child, buf);
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    moonbitlang$core$builtin$$Logger$write_char$8$(buf, 10);
    const _arr = item.children;
    const _len = _arr.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const child = _arr[_i];
        mizchi$markdown$$render_block_html(child, buf);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  moonbitlang$core$builtin$$Logger$write_string$8$(buf, "</li>\n");
}
function mizchi$markdown$$render_html(doc) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _arr = doc.children;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const block = _arr[_i];
      mizchi$markdown$$render_block_html(block, buf);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function mizchi$markdown$$BlockParser$new(scanner, strict) {
  return { scanner, definitions: [], strict };
}
function mizchi$markdown$$InlineParser$new(scanner) {
  return { scanner };
}
function mizchi$markdown$$trim_trailing_space_from_last_text(inlines) {
  if (inlines.length > 0) {
    const _bind = moonbitlang$core$array$$Array$at$19$(inlines, inlines.length - 1 | 0);
    if (_bind.$tag === 0) {
      const _Text = _bind;
      const _content = _Text._0;
      const _span = _Text._1;
      const len = _content.length;
      if (len > 0) {
        const _tmp = len - 1 | 0;
        if (_content.charCodeAt(_tmp) === 32) {
          let end = len - 1 | 0;
          while (true) {
            let _tmp$2;
            if (end > 0) {
              const _tmp$3 = end - 1 | 0;
              _tmp$2 = _content.charCodeAt(_tmp$3) === 32;
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              end = end - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          moonbitlang$core$array$$Array$pop$19$(inlines);
          if (end > 0) {
            moonbitlang$core$array$$Array$push$19$(inlines, new $64$mizchi$47$markdown$46$Inline$Text(_content.substring(0, end), _span));
            return;
          } else {
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function mizchi$markdown$$InlineParser$try_parse_autolink(self, start) {
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let is_email = false;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 62: {
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
                const url = url_buf.val;
                if (moonbitlang$core$string$$String$contains(url, { str: mizchi$markdown$$try_parse_autolink$46$42$bind$124$2278, start: 0, end: mizchi$markdown$$try_parse_autolink$46$42$bind$124$2278.length }) && !moonbitlang$core$string$$String$has_prefix(url, { str: mizchi$markdown$$try_parse_autolink$46$42$bind$124$2279, start: 0, end: mizchi$markdown$$try_parse_autolink$46$42$bind$124$2279.length })) {
                  is_email = true;
                }
                return new $64$mizchi$47$markdown$46$Inline$Autolink(url, is_email, mizchi$markdown$$Span$new(start, self.scanner.pos));
              }
              case 32: {
                break _L$2;
              }
              case 9: {
                break _L$2;
              }
              case 10: {
                break _L$2;
              }
              default: {
                moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _x);
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              }
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, start);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$restore(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$is_all_spaces(s) {
  const _it = moonbitlang$core$string$$String$iterator(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (_c !== 32) {
        return false;
      }
      continue;
    }
  }
  return true;
}
function mizchi$markdown$$InlineParser$try_parse_code_span(self, start) {
  const backtick_count = mizchi$markdown$$Scanner$count_char(self.scanner, 96);
  if (backtick_count === 0) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, backtick_count);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const closing_count = mizchi$markdown$$Scanner$count_char(self.scanner, 96);
      if (closing_count === backtick_count) {
        const content = content_buf.val;
        mizchi$markdown$$Scanner$advance(self.scanner, closing_count);
        let trimmed;
        if (content.length >= 2) {
          const first = moonbitlang$core$string$$String$get_char(content, 0);
          const last = moonbitlang$core$string$$String$get_char(content, content.length - 1 | 0);
          trimmed = moonbitlang$core$builtin$$Eq$equal$37$(first, mizchi$markdown$$try_parse_code_span$46$constr$47$1529) && (moonbitlang$core$builtin$$Eq$equal$37$(last, mizchi$markdown$$try_parse_code_span$46$constr$47$1530) && !mizchi$markdown$$is_all_spaces(content)) ? content.substring(1, content.length - 1 | 0) : content;
        } else {
          trimmed = content;
        }
        return new $64$mizchi$47$markdown$46$Inline$Code(trimmed, backtick_count, mizchi$markdown$$Span$new(start, self.scanner.pos));
      } else {
        if (closing_count > 0) {
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < closing_count) {
              moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 96);
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          mizchi$markdown$$Scanner$advance(self.scanner, closing_count);
        } else {
          const _bind = mizchi$markdown$$Scanner$consume(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _c = _Some;
            moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, _c);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$restore(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$contains_link(inlines) {
  const _len = inlines.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const inline = inlines[_i];
      let children;
      _L: {
        _L$2: {
          _L$3: {
            _L$4: {
              switch (inline.$tag) {
                case 7: {
                  break _L$4;
                }
                case 8: {
                  break _L$4;
                }
                case 3: {
                  const _Emphasis = inline;
                  const _children = _Emphasis._1;
                  children = _children;
                  break _L$2;
                }
                case 4: {
                  const _Strong = inline;
                  const _children$2 = _Strong._1;
                  children = _children$2;
                  break _L$2;
                }
                case 5: {
                  const _Strikethrough = inline;
                  const _children$3 = _Strikethrough._0;
                  children = _children$3;
                  break _L$2;
                }
              }
              break _L$3;
            }
            return true;
          }
          break _L;
        }
        if (mizchi$markdown$$contains_link(children)) {
          return true;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function mizchi$markdown$$InlineParser$try_parse_escape(self, start) {
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  _L: {
    const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
    if (_bind === -1) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 10) {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
        while (true) {
          const _p = mizchi$markdown$$Scanner$peek(self.scanner);
          const _p$2 = 32;
          let _tmp;
          if (_p === -1) {
            _tmp = false;
          } else {
            const _p$3 = _p;
            const _p$4 = _p$3;
            _tmp = _p$4 === _p$2;
          }
          if (_tmp) {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            continue;
          } else {
            break;
          }
        }
        return new $64$mizchi$47$markdown$46$Inline$HardBreak(1, mizchi$markdown$$Span$new(start, self.scanner.pos));
      } else {
        if (mizchi$markdown$$is_punctuation(_x)) {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
          return new $64$mizchi$47$markdown$46$Inline$Text(moonbitlang$core$string$$String$make(1, _x), mizchi$markdown$$Span$new(start, self.scanner.pos));
        } else {
          break _L;
        }
      }
    }
  }
  return new $64$mizchi$47$markdown$46$Inline$Text("\\", mizchi$markdown$$Span$new(start, self.scanner.pos));
}
function mizchi$markdown$$InlineParser$try_parse_footnote_reference(self, start) {
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 94;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p$32 = self.scanner;
    if (!(_p$32.pos >= _p$32.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 93) {
              break;
            } else {
              if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || (_x >= 48 && _x <= 57 || (_x === 45 || _x === 95)))) {
                moonbitlang$core$builtin$$Logger$write_char$8$(label_buf, _x);
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              } else {
                break _L$2;
              }
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, start);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  const label = label_buf.val;
  if (label === "") {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 93;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    _tmp$2 = _p$6 === _p$4;
  }
  if (!_tmp$2) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  return new $64$mizchi$47$markdown$46$Inline$FootnoteReference(label, mizchi$markdown$$Span$new(start, self.scanner.pos));
}
function mizchi$markdown$$InlineParser$try_parse_hard_break(self, start) {
  const space_count = mizchi$markdown$$Scanner$count_char(self.scanner, 32);
  if (space_count < 2) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, space_count);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    while (true) {
      const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
      const _p$4 = 32;
      let _tmp$2;
      if (_p$3 === -1) {
        _tmp$2 = false;
      } else {
        const _p$5 = _p$3;
        const _p$6 = _p$5;
        _tmp$2 = _p$6 === _p$4;
      }
      if (_tmp$2) {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
        continue;
      } else {
        break;
      }
    }
    return new $64$mizchi$47$markdown$46$Inline$HardBreak(0, mizchi$markdown$$Span$new(start, self.scanner.pos));
  }
  mizchi$markdown$$Scanner$restore(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$InlineParser$try_parse_image(self, start) {
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 91;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const alt_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  _L: while (true) {
    const _p$32 = self.scanner;
    if (!(_p$32.pos >= _p$32.len)) {
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 93: {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            break _L;
          }
          case 92: {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            const _bind$2 = mizchi$markdown$$Scanner$consume(self.scanner);
            if (_bind$2 === -1) {
              break _L;
            } else {
              const _Some$2 = _bind$2;
              const _c = _Some$2;
              moonbitlang$core$builtin$$Logger$write_char$8$(alt_buf, _c);
            }
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$8$(alt_buf, _x);
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  const alt = alt_buf.val;
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 40;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$2 = _p$62 === _p$4;
  }
  if (_tmp$2) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    mizchi$markdown$$Scanner$skip_spaces(self.scanner);
    const _p$52 = mizchi$markdown$$Scanner$peek(self.scanner);
    const _p$62 = 60;
    let _tmp$32;
    if (_p$52 === -1) {
      _tmp$32 = false;
    } else {
      const _p$72 = _p$52;
      const _p$82 = _p$72;
      _tmp$32 = _p$82 === _p$62;
    }
    if (_tmp$32) {
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      while (true) {
        const _p$72 = self.scanner;
        if (!(_p$72.pos >= _p$72.len)) {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 62) {
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
              break;
            } else {
              moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _x);
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
            }
          }
          continue;
        } else {
          break;
        }
      }
    } else {
      while (true) {
        const _p$72 = self.scanner;
        if (!(_p$72.pos >= _p$72.len)) {
          _L$2: {
            _L$3: {
              const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
              if (_bind === -1) {
                break;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 41: {
                    break _L$3;
                  }
                  case 32: {
                    break _L$3;
                  }
                  case 9: {
                    break _L$3;
                  }
                  default: {
                    moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _x);
                    mizchi$markdown$$Scanner$advance(self.scanner, 1);
                  }
                }
              }
              break _L$2;
            }
            break;
          }
          continue;
        } else {
          break;
        }
      }
    }
    const url = url_buf.val;
    mizchi$markdown$$Scanner$skip_spaces(self.scanner);
    let title;
    _L$2: {
      _L$3: {
        const _bind2 = mizchi$markdown$$Scanner$peek(self.scanner);
        if (_bind2 === -1) {
          title = "";
        } else {
          const _Some = _bind2;
          const _x = _Some;
          switch (_x) {
            case 34: {
              break _L$3;
            }
            case 39: {
              break _L$3;
            }
            default: {
              title = "";
            }
          }
        }
        break _L$2;
      }
      const _bind = mizchi$markdown$$Scanner$consume(self.scanner);
      const quote = _bind === -1 ? 34 : _bind;
      const title_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
      while (true) {
        const _p$72 = self.scanner;
        if (!(_p$72.pos >= _p$72.len)) {
          const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind$2 === -1) {
            break;
          } else {
            const _Some = _bind$2;
            const _c = _Some;
            if (_c === quote) {
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
              break;
            } else {
              moonbitlang$core$builtin$$Logger$write_char$8$(title_buf, _c);
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
            }
          }
          continue;
        } else {
          break;
        }
      }
      title = title_buf.val;
    }
    mizchi$markdown$$Scanner$skip_spaces(self.scanner);
    const _p$7 = mizchi$markdown$$Scanner$peek(self.scanner);
    const _p$8 = 41;
    let _tmp$4;
    if (_p$7 === -1) {
      _tmp$4 = false;
    } else {
      const _p$9 = _p$7;
      const _p$10 = _p$9;
      _tmp$4 = _p$10 === _p$8;
    }
    if (_tmp$4) {
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      return new $64$mizchi$47$markdown$46$Inline$Image(alt, url, title, mizchi$markdown$$Span$new(start, self.scanner.pos));
    }
  }
  const _p$5 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$6 = 91;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$7 = _p$5;
    const _p$8 = _p$7;
    _tmp$3 = _p$8 === _p$6;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    while (true) {
      const _p$7 = self.scanner;
      if (!(_p$7.pos >= _p$7.len)) {
        const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          if (_x === 93) {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            break;
          } else {
            moonbitlang$core$builtin$$Logger$write_char$8$(label_buf, _x);
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new $64$mizchi$47$markdown$46$Inline$RefImage(alt, label_buf.val, mizchi$markdown$$Span$new(start, self.scanner.pos));
  }
  mizchi$markdown$$Scanner$restore(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$InlineParser$try_parse_strikethrough(self, start) {
  if (mizchi$markdown$$Scanner$count_char(self.scanner, 126) < 2) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 2);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const content_start = self.scanner.pos;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      if (mizchi$markdown$$Scanner$count_char(self.scanner, 126) >= 2) {
        const content = content_buf.val;
        if (content === "") {
          mizchi$markdown$$Scanner$restore(self.scanner, start);
          return void 0;
        }
        mizchi$markdown$$Scanner$advance(self.scanner, 2);
        const children = [new $64$mizchi$47$markdown$46$Inline$Text(content, mizchi$markdown$$Span$new(content_start, self.scanner.pos - 2 | 0))];
        return new $64$mizchi$47$markdown$46$Inline$Strikethrough(children, mizchi$markdown$$Span$new(start, self.scanner.pos));
      }
      const _bind = mizchi$markdown$$Scanner$consume(self.scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 10) {
          break;
        } else {
          moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, _x);
        }
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$restore(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$is_unicode_punctuation(c) {
  const code = c;
  return code >= 33 && code <= 47 || (code >= 58 && code <= 64 || (code >= 91 && code <= 96 || code >= 123 && code <= 126));
}
function mizchi$markdown$$is_unicode_whitespace(c) {
  return c === 32 || (c === 9 || (c === 10 || (c === 13 || c === 12)));
}
function mizchi$markdown$$parse_inlines$46$inner(text, strict) {
  return strict ? mizchi$markdown$$parse_inlines_with_delimiter_stack(text) : mizchi$markdown$$parse_inlines_fast(text);
}
function mizchi$markdown$$parse_inlines_fast(text) {
  const scanner = mizchi$markdown$$Scanner$new(text);
  const parser = mizchi$markdown$$InlineParser$new(scanner);
  return mizchi$markdown$$InlineParser$parse(parser);
}
function mizchi$markdown$$InlineParser$parse(self) {
  const inlines = [];
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const _bind = mizchi$markdown$$InlineParser$parse_inline(self);
      if (_bind === void 0) {
        const start = self.scanner.pos;
        const _bind$2 = mizchi$markdown$$Scanner$consume(self.scanner);
        if (_bind$2 === -1) {
          break;
        } else {
          const _Some = _bind$2;
          const _c = _Some;
          const text = moonbitlang$core$string$$String$make(1, _c);
          _L: {
            _L$2: {
              const _bind$3 = moonbitlang$core$array$$Array$last$19$(inlines);
              if (_bind$3 === void 0) {
                break _L$2;
              } else {
                const _Some$2 = _bind$3;
                const _x = _Some$2;
                if (_x.$tag === 0) {
                  const _Text = _x;
                  const _content = _Text._0;
                  const _span = _Text._1;
                  moonbitlang$core$array$$Array$pop$19$(inlines);
                  moonbitlang$core$array$$Array$push$19$(inlines, new $64$mizchi$47$markdown$46$Inline$Text(`${_content}${text}`, mizchi$markdown$$Span$new(_span.from, self.scanner.pos)));
                } else {
                  break _L$2;
                }
              }
              break _L;
            }
            moonbitlang$core$array$$Array$push$19$(inlines, new $64$mizchi$47$markdown$46$Inline$Text(text, mizchi$markdown$$Span$new(start, self.scanner.pos)));
          }
        }
      } else {
        const _Some = _bind;
        const _inline = _Some;
        _L: {
          _L$2: {
            switch (_inline.$tag) {
              case 1: {
                break _L$2;
              }
              case 2: {
                break _L$2;
              }
            }
            break _L;
          }
          mizchi$markdown$$trim_trailing_space_from_last_text(inlines);
        }
        moonbitlang$core$array$$Array$push$19$(inlines, _inline);
      }
      continue;
    } else {
      break;
    }
  }
  return inlines;
}
function mizchi$markdown$$InlineParser$parse_inline(self) {
  const start = self.scanner.pos;
  _L: {
    const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
    if (_bind === -1) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 92: {
          return mizchi$markdown$$InlineParser$try_parse_escape(self, start);
        }
        case 96: {
          return mizchi$markdown$$InlineParser$try_parse_code_span(self, start);
        }
        case 42: {
          return mizchi$markdown$$InlineParser$try_parse_emphasis(self, start, 42);
        }
        case 95: {
          return mizchi$markdown$$InlineParser$try_parse_emphasis(self, start, 95);
        }
        case 126: {
          return mizchi$markdown$$InlineParser$try_parse_strikethrough(self, start);
        }
        case 91: {
          const _p = mizchi$markdown$$Scanner$peek_at(self.scanner, 1);
          const _p$2 = 94;
          let _tmp;
          if (_p === -1) {
            _tmp = false;
          } else {
            const _p$3 = _p;
            const _p$4 = _p$3;
            _tmp = _p$4 === _p$2;
          }
          if (_tmp) {
            const _bind$2 = mizchi$markdown$$InlineParser$try_parse_footnote_reference(self, start);
            if (_bind$2 === void 0) {
              return mizchi$markdown$$InlineParser$try_parse_link(self, start);
            } else {
              const _Some$2 = _bind$2;
              const _fn_ref = _Some$2;
              return _fn_ref;
            }
          } else {
            return mizchi$markdown$$InlineParser$try_parse_link(self, start);
          }
        }
        case 33: {
          return mizchi$markdown$$InlineParser$try_parse_image(self, start);
        }
        case 60: {
          return mizchi$markdown$$InlineParser$try_parse_autolink(self, start);
        }
        case 32: {
          return mizchi$markdown$$InlineParser$try_parse_hard_break(self, start);
        }
        case 10: {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
          while (true) {
            const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
            const _p$4 = 32;
            let _tmp$2;
            if (_p$3 === -1) {
              _tmp$2 = false;
            } else {
              const _p$5 = _p$3;
              const _p$6 = _p$5;
              _tmp$2 = _p$6 === _p$4;
            }
            if (_tmp$2) {
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
              continue;
            } else {
              break;
            }
          }
          return new $64$mizchi$47$markdown$46$Inline$SoftBreak(mizchi$markdown$$Span$new(start, self.scanner.pos));
        }
        default: {
          break _L;
        }
      }
    }
  }
  return void 0;
}
function mizchi$markdown$$InlineParser$try_parse_emphasis(self, start, marker_char) {
  const marker_count = mizchi$markdown$$Scanner$count_char(self.scanner, marker_char);
  if (marker_count === 0) {
    return void 0;
  }
  const is_strong = marker_count >= 2;
  const consume_count = is_strong ? 2 : 1;
  mizchi$markdown$$Scanner$advance(self.scanner, consume_count);
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 32: {
            break _L$2;
          }
          case 9: {
            break _L$2;
          }
          case 10: {
            break _L$2;
          }
        }
      }
      break _L;
    }
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  const children = mizchi$markdown$$InlineParser$parse_until_closing_marker(self, marker_char, consume_count);
  if (children.length === 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  const marker = marker_char === 42 ? 0 : 1;
  return is_strong ? new $64$mizchi$47$markdown$46$Inline$Strong(marker, children, mizchi$markdown$$Span$new(start, self.scanner.pos)) : new $64$mizchi$47$markdown$46$Inline$Emphasis(marker, children, mizchi$markdown$$Span$new(start, self.scanner.pos));
}
function mizchi$markdown$$InlineParser$parse_until_closing_marker(self, marker_char, marker_count) {
  const children = [];
  const text_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const text_start = self.scanner.pos;
  _L: while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const closing_count = mizchi$markdown$$Scanner$count_char(self.scanner, marker_char);
      if (closing_count >= marker_count) {
        const prev_char = mizchi$markdown$$Scanner$peek_at(self.scanner, -1);
        _L$2: {
          _L$3: {
            if (prev_char === -1) {
              break _L$3;
            } else {
              const _Some = prev_char;
              const _x = _Some;
              switch (_x) {
                case 32: {
                  break;
                }
                case 9: {
                  break;
                }
                case 10: {
                  break;
                }
                default: {
                  break _L$3;
                }
              }
            }
            break _L$2;
          }
          if (!(text_buf.val === "")) {
            moonbitlang$core$array$$Array$push$19$(children, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(text_start, self.scanner.pos)));
          }
          mizchi$markdown$$Scanner$advance(self.scanner, marker_count);
          return children;
        }
      }
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 96: {
            if (!(text_buf.val === "")) {
              moonbitlang$core$array$$Array$push$19$(children, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(text_start, self.scanner.pos)));
            }
            const nested_start = self.scanner.pos;
            const _bind$22 = mizchi$markdown$$InlineParser$try_parse_code_span(self, nested_start);
            if (_bind$22 === void 0) {
            } else {
              const _Some$2 = _bind$22;
              const _code = _Some$2;
              moonbitlang$core$array$$Array$push$19$(children, _code);
              continue _L;
            }
            break;
          }
          case 91: {
            if (!(text_buf.val === "")) {
              moonbitlang$core$array$$Array$push$19$(children, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(text_start, self.scanner.pos)));
            }
            const nested_start$2 = self.scanner.pos;
            const _bind$3 = mizchi$markdown$$InlineParser$try_parse_link(self, nested_start$2);
            if (_bind$3 === void 0) {
            } else {
              const _Some$2 = _bind$3;
              const _link = _Some$2;
              moonbitlang$core$array$$Array$push$19$(children, _link);
              continue _L;
            }
            break;
          }
          case 10: {
            break _L;
          }
        }
      }
      const _bind$2 = mizchi$markdown$$Scanner$consume(self.scanner);
      if (_bind$2 === -1) {
        break;
      } else {
        const _Some = _bind$2;
        const _c = _Some;
        moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, _c);
      }
      continue;
    } else {
      break;
    }
  }
  return [];
}
function mizchi$markdown$$InlineParser$try_parse_link(self, start) {
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const text_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let bracket_depth = 1;
  _L: while (true) {
    let _tmp2;
    const _p2 = self.scanner;
    if (!(_p2.pos >= _p2.len)) {
      _tmp2 = bracket_depth > 0;
    } else {
      _tmp2 = false;
    }
    if (_tmp2) {
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 91: {
            bracket_depth = bracket_depth + 1 | 0;
            moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 91);
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            break;
          }
          case 93: {
            bracket_depth = bracket_depth - 1 | 0;
            if (bracket_depth > 0) {
              moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 93);
            }
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            break;
          }
          case 92: {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            const _bind$2 = mizchi$markdown$$Scanner$consume(self.scanner);
            if (_bind$2 === -1) {
              break _L;
            } else {
              const _Some$2 = _bind$2;
              const _c = _Some$2;
              moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, _c);
            }
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, _x);
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  const link_text = text_buf.val;
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 40;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    let paren_depth = 1;
    mizchi$markdown$$Scanner$skip_spaces(self.scanner);
    const _p$32 = mizchi$markdown$$Scanner$peek(self.scanner);
    const _p$42 = 60;
    let _tmp$22;
    if (_p$32 === -1) {
      _tmp$22 = false;
    } else {
      const _p$52 = _p$32;
      const _p$62 = _p$52;
      _tmp$22 = _p$62 === _p$42;
    }
    if (_tmp$22) {
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      let angle_url_has_newline = false;
      _L$2: while (true) {
        const _p$52 = self.scanner;
        if (!(_p$52.pos >= _p$52.len)) {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 62: {
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
                break _L$2;
              }
              case 10: {
                angle_url_has_newline = true;
                break _L$2;
              }
              default: {
                moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _x);
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
      if (angle_url_has_newline) {
        mizchi$markdown$$Scanner$restore(self.scanner, start);
        return void 0;
      }
    } else {
      let url_has_newline = false;
      _L$2: while (true) {
        const _p$52 = self.scanner;
        if (!(_p$52.pos >= _p$52.len)) {
          _L$3: {
            _L$4: {
              const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
              if (_bind === -1) {
                break;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 40: {
                    paren_depth = paren_depth + 1 | 0;
                    moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, 40);
                    mizchi$markdown$$Scanner$advance(self.scanner, 1);
                    break;
                  }
                  case 41: {
                    paren_depth = paren_depth - 1 | 0;
                    if (paren_depth === 0) {
                      break _L$2;
                    }
                    moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, 41);
                    mizchi$markdown$$Scanner$advance(self.scanner, 1);
                    break;
                  }
                  case 32: {
                    break _L$4;
                  }
                  case 9: {
                    break _L$4;
                  }
                  case 10: {
                    url_has_newline = true;
                    break _L$2;
                  }
                  default: {
                    moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _x);
                    mizchi$markdown$$Scanner$advance(self.scanner, 1);
                  }
                }
              }
              break _L$3;
            }
            break;
          }
          continue;
        } else {
          break;
        }
      }
      if (url_has_newline) {
        mizchi$markdown$$Scanner$restore(self.scanner, start);
        return void 0;
      }
    }
    const url = url_buf.val;
    while (true) {
      const _p$52 = self.scanner;
      if (!(_p$52.pos >= _p$52.len)) {
        _L$2: {
          _L$3: {
            _L$4: {
              const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
              if (_bind === -1) {
                break _L$3;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 32: {
                    break _L$4;
                  }
                  case 9: {
                    break _L$4;
                  }
                  case 10: {
                    break _L$4;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
            }
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            break _L$2;
          }
          break;
        }
        continue;
      } else {
        break;
      }
    }
    let title;
    _L$2: {
      _L$3: {
        const _bind2 = mizchi$markdown$$Scanner$peek(self.scanner);
        if (_bind2 === -1) {
          title = "";
        } else {
          const _Some = _bind2;
          const _x = _Some;
          switch (_x) {
            case 34: {
              break _L$3;
            }
            case 39: {
              break _L$3;
            }
            case 40: {
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
              const title_buf2 = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
              let paren_depth$2 = 1;
              _L$4: while (true) {
                let _tmp$32;
                const _p$52 = self.scanner;
                if (!(_p$52.pos >= _p$52.len)) {
                  _tmp$32 = paren_depth$2 > 0;
                } else {
                  _tmp$32 = false;
                }
                if (_tmp$32) {
                  const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
                  if (_bind$2 === -1) {
                    break;
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    switch (_x$2) {
                      case 41: {
                        paren_depth$2 = paren_depth$2 - 1 | 0;
                        if (paren_depth$2 === 0) {
                          mizchi$markdown$$Scanner$advance(self.scanner, 1);
                          break _L$4;
                        }
                        moonbitlang$core$builtin$$Logger$write_char$8$(title_buf2, 41);
                        mizchi$markdown$$Scanner$advance(self.scanner, 1);
                        break;
                      }
                      case 40: {
                        paren_depth$2 = paren_depth$2 + 1 | 0;
                        moonbitlang$core$builtin$$Logger$write_char$8$(title_buf2, 40);
                        mizchi$markdown$$Scanner$advance(self.scanner, 1);
                        break;
                      }
                      case 92: {
                        mizchi$markdown$$Scanner$advance(self.scanner, 1);
                        const _bind$3 = mizchi$markdown$$Scanner$consume(self.scanner);
                        if (_bind$3 === -1) {
                          break _L$4;
                        } else {
                          const _Some$3 = _bind$3;
                          const _c = _Some$3;
                          moonbitlang$core$builtin$$Logger$write_char$8$(title_buf2, _c);
                        }
                        break;
                      }
                      default: {
                        moonbitlang$core$builtin$$Logger$write_char$8$(title_buf2, _x$2);
                        mizchi$markdown$$Scanner$advance(self.scanner, 1);
                      }
                    }
                  }
                  continue;
                } else {
                  break;
                }
              }
              title = title_buf2.val;
              break;
            }
            default: {
              title = "";
            }
          }
        }
        break _L$2;
      }
      const _bind = mizchi$markdown$$Scanner$consume(self.scanner);
      const quote = _bind === -1 ? 34 : _bind;
      const title_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
      while (true) {
        const _p$52 = self.scanner;
        if (!(_p$52.pos >= _p$52.len)) {
          const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind$2 === -1) {
            break;
          } else {
            const _Some = _bind$2;
            const _c = _Some;
            if (_c === quote) {
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
              break;
            } else {
              if (_c === 92) {
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
                const _bind$3 = mizchi$markdown$$Scanner$consume(self.scanner);
                if (_bind$3 === -1) {
                  break;
                } else {
                  const _Some$2 = _bind$3;
                  const _c$2 = _Some$2;
                  moonbitlang$core$builtin$$Logger$write_char$8$(title_buf, _c$2);
                }
              } else {
                moonbitlang$core$builtin$$Logger$write_char$8$(title_buf, _c);
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
      title = title_buf.val;
    }
    mizchi$markdown$$Scanner$skip_spaces(self.scanner);
    const _p$5 = mizchi$markdown$$Scanner$peek(self.scanner);
    const _p$6 = 41;
    let _tmp$3;
    if (_p$5 === -1) {
      _tmp$3 = false;
    } else {
      const _p$7 = _p$5;
      const _p$8 = _p$7;
      _tmp$3 = _p$8 === _p$6;
    }
    if (_tmp$3) {
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      const children = mizchi$markdown$$parse_inlines$46$inner(link_text, false);
      if (mizchi$markdown$$contains_link(children)) {
        mizchi$markdown$$Scanner$restore(self.scanner, start);
        return void 0;
      }
      return new $64$mizchi$47$markdown$46$Inline$Link(children, url, title, mizchi$markdown$$Span$new(start, self.scanner.pos));
    }
  }
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 91;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    _tmp$2 = _p$6 === _p$4;
  }
  if (_tmp$2) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    while (true) {
      const _p$5 = self.scanner;
      if (!(_p$5.pos >= _p$5.len)) {
        const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          if (_x === 93) {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
            break;
          } else {
            moonbitlang$core$builtin$$Logger$write_char$8$(label_buf, _x);
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
          }
        }
        continue;
      } else {
        break;
      }
    }
    const label = label_buf.val;
    const children = mizchi$markdown$$parse_inlines$46$inner(link_text, false);
    if (mizchi$markdown$$contains_link(children)) {
      mizchi$markdown$$Scanner$restore(self.scanner, start);
      return void 0;
    }
    return new $64$mizchi$47$markdown$46$Inline$RefLink(children, label, mizchi$markdown$$Span$new(start, self.scanner.pos));
  }
  mizchi$markdown$$Scanner$restore(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$parse_inlines_with_delimiter_stack(text) {
  const chars = moonbitlang$core$string$$String$to_array(text);
  const len = chars.length;
  const delimiters = [];
  let i = 0;
  while (true) {
    if (i < len) {
      const c = moonbitlang$core$array$$Array$at$11$(chars, i);
      if (c === 42 || c === 95) {
        const start = i;
        let count = 0;
        while (true) {
          if (i < len && moonbitlang$core$array$$Array$at$11$(chars, i) === c) {
            count = count + 1 | 0;
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const before = start > 0 ? moonbitlang$core$array$$Array$at$11$(chars, start - 1 | 0) : -1;
        const after = i < len ? moonbitlang$core$array$$Array$at$11$(chars, i) : -1;
        let before_is_whitespace;
        if (before === -1) {
          before_is_whitespace = true;
        } else {
          const _Some = before;
          const _ch = _Some;
          before_is_whitespace = mizchi$markdown$$is_unicode_whitespace(_ch);
        }
        let before_is_punctuation;
        if (before === -1) {
          before_is_punctuation = false;
        } else {
          const _Some = before;
          const _ch = _Some;
          before_is_punctuation = mizchi$markdown$$is_unicode_punctuation(_ch);
        }
        let after_is_whitespace;
        if (after === -1) {
          after_is_whitespace = true;
        } else {
          const _Some = after;
          const _ch = _Some;
          after_is_whitespace = mizchi$markdown$$is_unicode_whitespace(_ch);
        }
        let after_is_punctuation;
        if (after === -1) {
          after_is_punctuation = false;
        } else {
          const _Some = after;
          const _ch = _Some;
          after_is_punctuation = mizchi$markdown$$is_unicode_punctuation(_ch);
        }
        const left_flanking = !after_is_whitespace && (!after_is_punctuation || (before_is_whitespace || before_is_punctuation));
        const right_flanking = !before_is_whitespace && (!before_is_punctuation || (after_is_whitespace || after_is_punctuation));
        let can_open;
        let can_close;
        _L: {
          if (c === 95) {
            const _tmp2 = left_flanking && (!right_flanking || before_is_punctuation);
            const _tmp$2 = right_flanking && (!left_flanking || after_is_punctuation);
            can_open = _tmp2;
            can_close = _tmp$2;
            break _L;
          } else {
            can_open = left_flanking;
            can_close = right_flanking;
            break _L;
          }
        }
        if (can_open || can_close) {
          moonbitlang$core$array$$Array$push$17$(delimiters, { pos: start, marker: c, length: count, remaining: count, can_open, can_close, active: true });
        }
      } else {
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  const matches = [];
  let _tmp = 0;
  while (true) {
    const closer_idx = _tmp;
    if (closer_idx < delimiters.length) {
      _L: {
        const closer = moonbitlang$core$array$$Array$at$17$(delimiters, closer_idx);
        if (!closer.can_close || closer.remaining === 0) {
          break _L;
        }
        let _tmp$2 = closer_idx - 1 | 0;
        while (true) {
          const opener_idx = _tmp$2;
          if (opener_idx >= 0) {
            _L$2: {
              const opener = moonbitlang$core$array$$Array$at$17$(delimiters, opener_idx);
              if (!opener.can_open || (opener.remaining === 0 || !opener.active)) {
                break _L$2;
              }
              if (opener.marker !== closer.marker) {
                break _L$2;
              }
              if (opener.can_open && opener.can_close || closer.can_open && closer.can_close) {
                if (((opener.length + closer.length | 0) % 3 | 0) === 0) {
                  if ((opener.length % 3 | 0) !== 0 || (closer.length % 3 | 0) !== 0) {
                    break _L$2;
                  }
                }
              }
              const use_count = opener.remaining >= 2 && closer.remaining >= 2 ? 2 : 1;
              const is_strong = use_count === 2;
              const opener_end = ((opener.pos + opener.length | 0) - opener.remaining | 0) + use_count | 0;
              const closer_start = closer.pos + (closer.length - closer.remaining | 0) | 0;
              moonbitlang$core$array$$Array$push$5$(matches, { _0: opener_end - use_count | 0, _1: closer_start, _2: opener.marker, _3: is_strong });
              moonbitlang$core$array$$Array$at$17$(delimiters, opener_idx).remaining = opener.remaining - use_count | 0;
              moonbitlang$core$array$$Array$at$17$(delimiters, closer_idx).remaining = closer.remaining - use_count | 0;
              let _tmp$3 = opener_idx + 1 | 0;
              while (true) {
                const j = _tmp$3;
                if (j < closer_idx) {
                  moonbitlang$core$array$$Array$at$17$(delimiters, j).active = false;
                  _tmp$3 = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (closer.remaining > 0) {
              }
              break;
            }
            _tmp$2 = opener_idx - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp = closer_idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const result = [];
  if (matches.length === 0) {
    const segment_inlines = mizchi$markdown$$parse_segment_simple(text, 0);
    const _len = segment_inlines.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const inline = segment_inlines[_i];
        moonbitlang$core$array$$Array$push$19$(result, inline);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    mizchi$markdown$$build_inlines_from_matches(text, chars, matches, result);
  }
  return result;
}
function mizchi$markdown$$build_inlines_from_matches(text, chars, matches, result) {
  const sorted = moonbitlang$core$array$$Array$copy$5$(matches);
  moonbitlang$core$array$$Array$sort_by$5$(sorted, (a, b) => $compare_int(a._0, b._0));
  const len = chars.length;
  mizchi$markdown$$build_inlines_recursive(text, chars, 0, len, sorted, 0, sorted.length, result);
}
function mizchi$markdown$$build_inlines_recursive(text, chars, start, end, matches, match_start, match_end, result) {
  let pos = start;
  let _tmp = match_start;
  while (true) {
    const i = _tmp;
    if (i < match_end) {
      _L: {
        const _bind = moonbitlang$core$array$$Array$at$5$(matches, i);
        const _opener_pos = _bind._0;
        const _closer_pos = _bind._1;
        const _marker = _bind._2;
        const _is_strong = _bind._3;
        if (_opener_pos < start || (_closer_pos > end || _opener_pos < pos)) {
          break _L;
        }
        const marker_len = _is_strong ? 2 : 1;
        if (_opener_pos > pos) {
          const segment = text.substring(pos, _opener_pos);
          const segment_inlines = mizchi$markdown$$parse_segment_simple(segment, pos);
          const _len = segment_inlines.length;
          let _tmp$2 = 0;
          while (true) {
            const _i = _tmp$2;
            if (_i < _len) {
              const inline = segment_inlines[_i];
              moonbitlang$core$array$$Array$push$19$(result, inline);
              _tmp$2 = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const children = [];
        const content_start = _opener_pos + marker_len | 0;
        const nested_start = i + 1 | 0;
        let nested_end = i + 1 | 0;
        while (true) {
          if (nested_end < match_end) {
            const _bind$2 = moonbitlang$core$array$$Array$at$5$(matches, nested_end);
            const _np = _bind$2._0;
            const _nc = _bind$2._1;
            if (_np >= content_start && _nc <= _closer_pos) {
              nested_end = nested_end + 1 | 0;
            } else {
              break;
            }
            continue;
          } else {
            break;
          }
        }
        if (nested_start < nested_end) {
          mizchi$markdown$$build_inlines_recursive(text, chars, content_start, _closer_pos, matches, nested_start, nested_end, children);
        } else {
          const content = text.substring(content_start, _closer_pos);
          const content_inlines = mizchi$markdown$$parse_segment_simple(content, content_start);
          const _len = content_inlines.length;
          let _tmp$2 = 0;
          while (true) {
            const _i = _tmp$2;
            if (_i < _len) {
              const inline = content_inlines[_i];
              moonbitlang$core$array$$Array$push$19$(children, inline);
              _tmp$2 = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const em_marker = _marker === 42 ? 0 : 1;
        const span = mizchi$markdown$$Span$new(_opener_pos, _closer_pos + marker_len | 0);
        if (_is_strong) {
          moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Strong(em_marker, children, span));
        } else {
          moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Emphasis(em_marker, children, span));
        }
        pos = _closer_pos + marker_len | 0;
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (pos < end) {
    const segment = text.substring(pos, end);
    const segment_inlines = mizchi$markdown$$parse_segment_simple(segment, pos);
    const _len = segment_inlines.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const inline = segment_inlines[_i];
        moonbitlang$core$array$$Array$push$19$(result, inline);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function mizchi$markdown$$parse_segment_simple(text, offset) {
  const scanner = mizchi$markdown$$Scanner$new(text);
  const result = [];
  const text_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let text_start = 0;
  while (true) {
    if (!(scanner.pos >= scanner.len)) {
      const pos = scanner.pos;
      const _bind = mizchi$markdown$$Scanner$peek(scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 96: {
            const backtick_count = mizchi$markdown$$Scanner$count_char(scanner, 96);
            mizchi$markdown$$Scanner$advance(scanner, backtick_count);
            const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
            let found_closing = false;
            while (true) {
              if (!(scanner.pos >= scanner.len)) {
                const closing_count = mizchi$markdown$$Scanner$count_char(scanner, 96);
                if (closing_count === backtick_count) {
                  found_closing = true;
                  const content = content_buf.val;
                  mizchi$markdown$$Scanner$advance(scanner, closing_count);
                  if (!(text_buf.val === "")) {
                    moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(offset + text_start | 0, offset + pos | 0)));
                    moonbitlang$core$builtin$$StringBuilder$reset(text_buf);
                  }
                  let trimmed;
                  if (content.length >= 2) {
                    const chars = moonbitlang$core$string$$String$to_array(content);
                    trimmed = moonbitlang$core$array$$Array$at$11$(chars, 0) === 32 && (moonbitlang$core$array$$Array$at$11$(chars, chars.length - 1 | 0) === 32 && !mizchi$markdown$$is_all_spaces(content)) ? content.substring(1, content.length - 1 | 0) : content;
                  } else {
                    trimmed = content;
                  }
                  moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Code(trimmed, backtick_count, mizchi$markdown$$Span$new(offset + pos | 0, offset + scanner.pos | 0)));
                  text_start = scanner.pos;
                  break;
                } else {
                  if (closing_count > 0) {
                    let _tmp = 0;
                    while (true) {
                      const j = _tmp;
                      if (j < closing_count) {
                        moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 96);
                        _tmp = j + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    mizchi$markdown$$Scanner$advance(scanner, closing_count);
                  } else {
                    const _bind$2 = mizchi$markdown$$Scanner$consume(scanner);
                    if (_bind$2 === -1) {
                      break;
                    } else {
                      const _Some$2 = _bind$2;
                      const _c = _Some$2;
                      moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, _c);
                    }
                  }
                }
                continue;
              } else {
                break;
              }
            }
            if (!found_closing) {
              let _tmp = 0;
              while (true) {
                const j = _tmp;
                if (j < backtick_count) {
                  moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 96);
                  _tmp = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              moonbitlang$core$builtin$$Logger$write_string$8$(text_buf, content_buf.val);
            }
            break;
          }
          case 91: {
            const link_parser = mizchi$markdown$$InlineParser$new(scanner);
            const _bind$2 = mizchi$markdown$$InlineParser$try_parse_link(link_parser, pos);
            if (_bind$2 === void 0) {
              moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 91);
              mizchi$markdown$$Scanner$advance(scanner, 1);
            } else {
              const _Some$2 = _bind$2;
              const _link = _Some$2;
              if (!(text_buf.val === "")) {
                moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(offset + text_start | 0, offset + pos | 0)));
                moonbitlang$core$builtin$$StringBuilder$reset(text_buf);
              }
              moonbitlang$core$array$$Array$push$19$(result, _link);
              text_start = scanner.pos;
            }
            break;
          }
          case 33: {
            const _p = mizchi$markdown$$Scanner$peek_at(scanner, 1);
            const _p$2 = 91;
            let _tmp;
            if (_p === -1) {
              _tmp = false;
            } else {
              const _p$3 = _p;
              const _p$4 = _p$3;
              _tmp = _p$4 === _p$2;
            }
            if (_tmp) {
              const img_parser = mizchi$markdown$$InlineParser$new(scanner);
              const _bind$3 = mizchi$markdown$$InlineParser$try_parse_image(img_parser, pos);
              if (_bind$3 === void 0) {
                moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 33);
                mizchi$markdown$$Scanner$advance(scanner, 1);
              } else {
                const _Some$2 = _bind$3;
                const _img = _Some$2;
                if (!(text_buf.val === "")) {
                  moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(offset + text_start | 0, offset + pos | 0)));
                  moonbitlang$core$builtin$$StringBuilder$reset(text_buf);
                }
                moonbitlang$core$array$$Array$push$19$(result, _img);
                text_start = scanner.pos;
              }
            } else {
              moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 33);
              mizchi$markdown$$Scanner$advance(scanner, 1);
            }
            break;
          }
          case 60: {
            const auto_parser = mizchi$markdown$$InlineParser$new(scanner);
            const _bind$3 = mizchi$markdown$$InlineParser$try_parse_autolink(auto_parser, pos);
            if (_bind$3 === void 0) {
              moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, 60);
              mizchi$markdown$$Scanner$advance(scanner, 1);
            } else {
              const _Some$2 = _bind$3;
              const _autolink = _Some$2;
              if (!(text_buf.val === "")) {
                moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(offset + text_start | 0, offset + pos | 0)));
                moonbitlang$core$builtin$$StringBuilder$reset(text_buf);
              }
              moonbitlang$core$array$$Array$push$19$(result, _autolink);
              text_start = scanner.pos;
            }
            break;
          }
          case 10: {
            const content = text_buf.val;
            const trimmed = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim_end$46$inner(content, { str: mizchi$markdown$$parse_segment_simple$46$42$bind$124$2627, start: 0, end: mizchi$markdown$$parse_segment_simple$46$42$bind$124$2627.length }));
            const trailing_spaces = content.length - trimmed.length | 0;
            const is_hard_break = trailing_spaces >= 2;
            if (!(trimmed === "")) {
              moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Text(trimmed, mizchi$markdown$$Span$new(offset + text_start | 0, (offset + pos | 0) - trailing_spaces | 0)));
            }
            moonbitlang$core$builtin$$StringBuilder$reset(text_buf);
            mizchi$markdown$$Scanner$advance(scanner, 1);
            while (true) {
              const _p$3 = mizchi$markdown$$Scanner$peek(scanner);
              const _p$4 = 32;
              let _tmp$2;
              if (_p$3 === -1) {
                _tmp$2 = false;
              } else {
                const _p$5 = _p$3;
                const _p$6 = _p$5;
                _tmp$2 = _p$6 === _p$4;
              }
              if (_tmp$2) {
                mizchi$markdown$$Scanner$advance(scanner, 1);
                continue;
              } else {
                break;
              }
            }
            if (is_hard_break) {
              moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$HardBreak(0, mizchi$markdown$$Span$new((offset + pos | 0) - trailing_spaces | 0, offset + scanner.pos | 0)));
            } else {
              moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$SoftBreak(mizchi$markdown$$Span$new(offset + pos | 0, offset + scanner.pos | 0)));
            }
            text_start = scanner.pos;
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$8$(text_buf, _x);
            mizchi$markdown$$Scanner$advance(scanner, 1);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (!(text_buf.val === "")) {
    moonbitlang$core$array$$Array$push$19$(result, new $64$mizchi$47$markdown$46$Inline$Text(text_buf.val, mizchi$markdown$$Span$new(offset + text_start | 0, offset + scanner.pos | 0)));
  }
  return result;
}
function mizchi$markdown$$BlockParser$detect_list_marker(self) {
  const saved = self.scanner.pos;
  const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
  if (_bind === -1) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 45: {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
        _L: {
          _L$2: {
            const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
            if (_bind$2 === -1) {
            } else {
              const _Some$2 = _bind$2;
              const _x$2 = _Some$2;
              switch (_x$2) {
                case 32: {
                  break _L$2;
                }
                case 9: {
                  break _L$2;
                }
              }
            }
            break _L;
          }
          mizchi$markdown$$Scanner$restore(self.scanner, saved);
          return mizchi$markdown$$detect_list_marker$46$constr$47$1919;
        }
        break;
      }
      case 42: {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
        _L$2: {
          _L$3: {
            const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
            if (_bind$2 === -1) {
            } else {
              const _Some$2 = _bind$2;
              const _x$2 = _Some$2;
              switch (_x$2) {
                case 32: {
                  break _L$3;
                }
                case 9: {
                  break _L$3;
                }
              }
            }
            break _L$2;
          }
          mizchi$markdown$$Scanner$restore(self.scanner, saved);
          return mizchi$markdown$$detect_list_marker$46$constr$47$1922;
        }
        break;
      }
      case 43: {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
        _L$3: {
          _L$4: {
            const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
            if (_bind$2 === -1) {
            } else {
              const _Some$2 = _bind$2;
              const _x$2 = _Some$2;
              switch (_x$2) {
                case 32: {
                  break _L$4;
                }
                case 9: {
                  break _L$4;
                }
              }
            }
            break _L$3;
          }
          mizchi$markdown$$Scanner$restore(self.scanner, saved);
          return mizchi$markdown$$detect_list_marker$46$constr$47$1925;
        }
        break;
      }
    }
  }
  mizchi$markdown$$Scanner$restore(self.scanner, saved);
  if (mizchi$markdown$$char_is_digit(mizchi$markdown$$Scanner$peek(self.scanner))) {
    let num = 0;
    let digits = 0;
    while (true) {
      if (mizchi$markdown$$char_is_digit(mizchi$markdown$$Scanner$peek(self.scanner))) {
        const _bind$22 = mizchi$markdown$$Scanner$peek(self.scanner);
        if (_bind$22 === -1) {
          break;
        } else {
          const _Some = _bind$22;
          const _c = _Some;
          num = (Math.imul(num, 10) | 0) + (_c - 48 | 0) | 0;
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
          digits = digits + 1 | 0;
          if (digits > 9) {
            mizchi$markdown$$Scanner$restore(self.scanner, saved);
            return void 0;
          }
        }
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = mizchi$markdown$$Scanner$peek(self.scanner);
    if (_bind$2 === -1) {
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x) {
        case 46: {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
          _L: {
            _L$2: {
              const _bind$3 = mizchi$markdown$$Scanner$peek(self.scanner);
              if (_bind$3 === -1) {
              } else {
                const _Some$2 = _bind$3;
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 32: {
                    break _L$2;
                  }
                  case 9: {
                    break _L$2;
                  }
                }
              }
              break _L;
            }
            mizchi$markdown$$Scanner$restore(self.scanner, saved);
            return { _0: new $64$mizchi$47$markdown$46$ListMarkerKind$Ordered(num, 0), _1: digits + 2 | 0 };
          }
          break;
        }
        case 41: {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
          _L$2: {
            _L$3: {
              const _bind$3 = mizchi$markdown$$Scanner$peek(self.scanner);
              if (_bind$3 === -1) {
              } else {
                const _Some$2 = _bind$3;
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 32: {
                    break _L$3;
                  }
                  case 9: {
                    break _L$3;
                  }
                }
              }
              break _L$2;
            }
            mizchi$markdown$$Scanner$restore(self.scanner, saved);
            return { _0: new $64$mizchi$47$markdown$46$ListMarkerKind$Ordered(num, 1), _1: digits + 2 | 0 };
          }
          break;
        }
      }
    }
  }
  mizchi$markdown$$Scanner$restore(self.scanner, saved);
  return void 0;
}
function mizchi$markdown$$BlockParser$read_leading_trivia(self) {
  const start = self.scanner.pos;
  const count = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  return count > 0 ? mizchi$markdown$$Trivia$new(mizchi$markdown$$Scanner$substring(self.scanner, start, start + count | 0)) : mizchi$markdown$$empty$46$record$47$1271;
}
function mizchi$markdown$$BlockParser$read_trailing_trivia(self) {
  const start = self.scanner.pos;
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  return self.scanner.pos > start ? mizchi$markdown$$Trivia$new(mizchi$markdown$$Scanner$substring(self.scanner, start, self.scanner.pos)) : mizchi$markdown$$empty$46$record$47$1271;
}
function mizchi$markdown$$BlockParser$try_parse_thematic_break(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  let marker;
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c === 45 || (_c === 42 || _c === 95)) {
          marker = _c;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return void 0;
  }
  let count = 0;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      _L$2: {
        _L$3: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$3;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 10) {
              break;
            } else {
              if (_x === marker) {
                count = count + 1 | 0;
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              } else {
                if (_x === 32 || _x === 9) {
                  mizchi$markdown$$Scanner$advance(self.scanner, 1);
                } else {
                  break _L$3;
                }
              }
            }
          }
          break _L$2;
        }
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  if (count < 3) {
    return void 0;
  }
  const trailing = mizchi$markdown$$BlockParser$read_trailing_trivia(self);
  return new $64$mizchi$47$markdown$46$Block$ThematicBreak(marker, count, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, trailing);
}
function mizchi$markdown$$BlockParser$parse_paragraph(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let first = true;
  _L: while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      if (mizchi$markdown$$Scanner$is_blank_line(self.scanner)) {
        break;
      }
      const saved = self.scanner.pos;
      mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      let c;
      _L$2: {
        _L$3: {
          _L$4: {
            _L$5: {
              _L$6: {
                _L$7: {
                  const _bind3 = mizchi$markdown$$Scanner$peek(self.scanner);
                  if (_bind3 === -1) {
                  } else {
                    const _Some = _bind3;
                    const _x = _Some;
                    switch (_x) {
                      case 35: {
                        break _L$7;
                      }
                      case 62: {
                        break _L$7;
                      }
                      case 96: {
                        if (moonbitlang$core$builtin$$Eq$equal$37$(mizchi$markdown$$Scanner$peek_at(self.scanner, 1), mizchi$markdown$$parse_paragraph$46$constr$47$1980) && moonbitlang$core$builtin$$Eq$equal$37$(mizchi$markdown$$Scanner$peek_at(self.scanner, 2), mizchi$markdown$$parse_paragraph$46$constr$47$1981)) {
                          mizchi$markdown$$Scanner$restore(self.scanner, saved);
                          break _L;
                        } else {
                          if (_x >= 48 && _x <= 57) {
                            c = _x;
                            break _L$3;
                          }
                        }
                        break;
                      }
                      case 126: {
                        if (moonbitlang$core$builtin$$Eq$equal$37$(mizchi$markdown$$Scanner$peek_at(self.scanner, 1), mizchi$markdown$$parse_paragraph$46$constr$47$1982) && moonbitlang$core$builtin$$Eq$equal$37$(mizchi$markdown$$Scanner$peek_at(self.scanner, 2), mizchi$markdown$$parse_paragraph$46$constr$47$1983)) {
                          mizchi$markdown$$Scanner$restore(self.scanner, saved);
                          break _L;
                        } else {
                          if (_x >= 48 && _x <= 57) {
                            c = _x;
                            break _L$3;
                          }
                        }
                        break;
                      }
                      case 45: {
                        break _L$5;
                      }
                      case 42: {
                        break _L$5;
                      }
                      case 95: {
                        break _L$5;
                      }
                      default: {
                        if (_x >= 48 && _x <= 57) {
                          c = _x;
                          break _L$3;
                        }
                      }
                    }
                  }
                  break _L$6;
                }
                mizchi$markdown$$Scanner$restore(self.scanner, saved);
                break;
              }
              break _L$4;
            }
            const _bind2 = mizchi$markdown$$BlockParser$try_parse_thematic_break(self, saved);
            if (_bind2 === void 0) {
            } else {
              mizchi$markdown$$Scanner$restore(self.scanner, saved);
              break;
            }
            mizchi$markdown$$Scanner$restore(self.scanner, saved);
            const _bind$2 = mizchi$markdown$$BlockParser$detect_list_marker(self);
            if (_bind$2 === void 0) {
            } else {
              break;
            }
          }
          break _L$2;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, saved);
        const _bind = mizchi$markdown$$BlockParser$detect_list_marker(self);
        if (_bind === void 0) {
        } else {
          break;
        }
      }
      mizchi$markdown$$Scanner$restore(self.scanner, saved);
      if (!first) {
        moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 10);
      }
      const line = mizchi$markdown$$Scanner$read_line(self.scanner);
      moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, line);
      first = false;
      const _p$2 = mizchi$markdown$$Scanner$peek(self.scanner);
      const _p$3 = 10;
      let _tmp;
      if (_p$2 === -1) {
        _tmp = false;
      } else {
        const _p$4 = _p$2;
        const _p$5 = _p$4;
        _tmp = _p$5 === _p$3;
      }
      if (_tmp) {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
      }
      continue;
    } else {
      break;
    }
  }
  const content = content_buf.val;
  if (moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim$46$inner(content, { str: mizchi$markdown$$parse_paragraph$46$42$bind$124$2717, start: 0, end: mizchi$markdown$$parse_paragraph$46$42$bind$124$2717.length }))) {
    return void 0;
  }
  const children = mizchi$markdown$$parse_inlines$46$inner(content, self.strict);
  return new $64$mizchi$47$markdown$46$Block$Paragraph(children, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$parse_heading_content(line) {
  const trimmed = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim_end$46$inner(line, { str: mizchi$markdown$$parse_heading_content$46$42$bind$124$2730, start: 0, end: mizchi$markdown$$parse_heading_content$46$42$bind$124$2730.length }));
  let hash_count = 0;
  let idx = trimmed.length - 1 | 0;
  while (true) {
    if (idx >= 0) {
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char(trimmed, idx);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 35) {
              hash_count = hash_count + 1 | 0;
              idx = idx - 1 | 0;
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  if (hash_count > 0 && idx >= 0) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$string$$String$get_char(trimmed, idx);
        if (_bind === -1) {
          break _L$2;
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 32: {
              break;
            }
            case 9: {
              break;
            }
            default: {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return { _0: trimmed, _1: 0 };
    }
  }
  if (hash_count > 0) {
    const content = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim_end$46$inner(trimmed.substring(0, idx + 1 | 0), { str: mizchi$markdown$$parse_heading_content$46$42$bind$124$2729, start: 0, end: mizchi$markdown$$parse_heading_content$46$42$bind$124$2729.length }));
    return { _0: content, _1: hash_count };
  } else {
    return { _0: trimmed, _1: 0 };
  }
}
function mizchi$markdown$$BlockParser$try_parse_atx_heading(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const level = mizchi$markdown$$Scanner$count_char(self.scanner, 35);
  if (level < 1 || level > 6) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, level);
  const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
  if (_bind === -1) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 32: {
        break;
      }
      case 9: {
        break;
      }
      case 10: {
        break;
      }
      default: {
        return void 0;
      }
    }
  }
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  const line = mizchi$markdown$$Scanner$read_line(self.scanner);
  const _bind$2 = mizchi$markdown$$parse_heading_content(line);
  const _content = _bind$2._0;
  const _closing_hashes = _bind$2._1;
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const trailing = mizchi$markdown$$empty$46$record$47$1271;
  const children = mizchi$markdown$$parse_inlines$46$inner(_content, self.strict);
  return new $64$mizchi$47$markdown$46$Block$Heading(level, 0, children, _closing_hashes, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, trailing);
}
function mizchi$markdown$$strip_indent(line, n) {
  let stripped = 0;
  let idx = 0;
  while (true) {
    if (idx < line.length && stripped < n) {
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char(line, idx);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 32: {
                stripped = stripped + 1 | 0;
                idx = idx + 1 | 0;
                break;
              }
              case 9: {
                stripped = stripped + 4 | 0;
                idx = idx + 1 | 0;
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return line.substring(idx, line.length);
}
function mizchi$markdown$$BlockParser$try_parse_fenced_code(self, start, indent) {
  if (indent > 3) {
    return void 0;
  }
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  let fence_char;
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c === 96 || _c === 126) {
          fence_char = _c;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return void 0;
  }
  const fence_marker = fence_char === 96 ? 0 : 1;
  const fence_length = mizchi$markdown$$Scanner$count_char(self.scanner, fence_char);
  if (fence_length < 3) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, fence_length);
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  const info = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim_end$46$inner(mizchi$markdown$$Scanner$read_line(self.scanner), { str: mizchi$markdown$$try_parse_fenced_code$46$42$bind$124$2749, start: 0, end: mizchi$markdown$$try_parse_fenced_code$46$42$bind$124$2749.length }));
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const code_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p$3 = self.scanner;
    if (!(_p$3.pos >= _p$3.len)) {
      const line_indent = mizchi$markdown$$Scanner$count_leading_spaces(self.scanner);
      if (line_indent <= 3) {
        const saved = self.scanner.pos;
        mizchi$markdown$$Scanner$skip_spaces(self.scanner);
        if (mizchi$markdown$$Scanner$count_char(self.scanner, fence_char) >= fence_length) {
          mizchi$markdown$$Scanner$advance(self.scanner, mizchi$markdown$$Scanner$count_char(self.scanner, fence_char));
          mizchi$markdown$$Scanner$skip_spaces(self.scanner);
          let _tmp$22;
          const _p$42 = mizchi$markdown$$Scanner$peek(self.scanner);
          const _p$52 = 10;
          let _tmp$3;
          if (_p$42 === -1) {
            _tmp$3 = false;
          } else {
            const _p$6 = _p$42;
            const _p$7 = _p$6;
            _tmp$3 = _p$7 === _p$52;
          }
          if (_tmp$3) {
            _tmp$22 = true;
          } else {
            const _p$6 = self.scanner;
            _tmp$22 = _p$6.pos >= _p$6.len;
          }
          if (_tmp$22) {
            const _p$6 = mizchi$markdown$$Scanner$peek(self.scanner);
            const _p$7 = 10;
            let _tmp$4;
            if (_p$6 === -1) {
              _tmp$4 = false;
            } else {
              const _p$8 = _p$6;
              const _p$9 = _p$8;
              _tmp$4 = _p$9 === _p$7;
            }
            if (_tmp$4) {
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
            }
            break;
          }
        }
        mizchi$markdown$$Scanner$restore(self.scanner, saved);
      }
      const line = mizchi$markdown$$Scanner$read_line(self.scanner);
      const stripped = mizchi$markdown$$strip_indent(line, indent);
      moonbitlang$core$builtin$$Logger$write_string$8$(code_buf, stripped);
      const _p$4 = mizchi$markdown$$Scanner$peek(self.scanner);
      const _p$5 = 10;
      let _tmp$2;
      if (_p$4 === -1) {
        _tmp$2 = false;
      } else {
        const _p$6 = _p$4;
        const _p$7 = _p$6;
        _tmp$2 = _p$7 === _p$5;
      }
      if (_tmp$2) {
        moonbitlang$core$builtin$$Logger$write_char$8$(code_buf, 10);
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
      }
      continue;
    } else {
      break;
    }
  }
  const trailing = mizchi$markdown$$empty$46$record$47$1271;
  return new $64$mizchi$47$markdown$46$Block$FencedCode(fence_marker, fence_length, info, code_buf.val, indent, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, trailing);
}
function mizchi$markdown$$is_html_block_tag(tag) {
  const lower = moonbitlang$core$string$$String$to_lower(tag);
  const _len = mizchi$markdown$$html_block_tags.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = mizchi$markdown$$html_block_tags[_i];
      if (lower === t) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function mizchi$markdown$$BlockParser$try_parse_html_block(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 60;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  const peek_pos = self.scanner.pos;
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 47;
  let is_closing;
  if (_p$3 === -1) {
    is_closing = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    is_closing = _p$6 === _p$4;
  }
  if (is_closing) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const tag_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p$5 = self.scanner;
    if (!(_p$5.pos >= _p$5.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _c = _Some;
            if (_c >= 97 && _c <= 122 || (_c >= 65 && _c <= 90 || _c >= 48 && _c <= 57)) {
              moonbitlang$core$builtin$$Logger$write_char$8$(tag_buf, _c);
              mizchi$markdown$$Scanner$advance(self.scanner, 1);
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const tag_name = tag_buf.val;
  if (tag_name === "") {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  if (!mizchi$markdown$$is_html_block_tag(tag_name)) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$restore(self.scanner, peek_pos);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p$5 = self.scanner;
    if (!(_p$5.pos >= _p$5.len)) {
      const line = mizchi$markdown$$Scanner$read_line(self.scanner);
      moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, line);
      const _p$6 = mizchi$markdown$$Scanner$peek(self.scanner);
      const _p$7 = 10;
      let _tmp$2;
      if (_p$6 === -1) {
        _tmp$2 = false;
      } else {
        const _p$8 = _p$6;
        const _p$9 = _p$8;
        _tmp$2 = _p$9 === _p$7;
      }
      if (_tmp$2) {
        moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 10);
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
      }
      if (mizchi$markdown$$Scanner$is_blank_line(self.scanner)) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const html = content_buf.val;
  return new $64$mizchi$47$markdown$46$Block$HtmlBlock(html, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$BlockParser$try_parse_indented_code(self, start) {
  const leading = mizchi$markdown$$empty$46$record$47$1271;
  const code_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const line_start = self.scanner.pos;
      const indent = mizchi$markdown$$Scanner$count_leading_spaces(self.scanner);
      if (indent < 4 && !mizchi$markdown$$Scanner$is_blank_line(self.scanner)) {
        mizchi$markdown$$Scanner$restore(self.scanner, line_start);
        break;
      }
      if (mizchi$markdown$$Scanner$is_blank_line(self.scanner)) {
        moonbitlang$core$builtin$$Logger$write_char$8$(code_buf, 10);
        mizchi$markdown$$Scanner$skip_line(self.scanner);
      } else {
        mizchi$markdown$$Scanner$advance(self.scanner, 4);
        const line = mizchi$markdown$$Scanner$read_line(self.scanner);
        moonbitlang$core$builtin$$Logger$write_string$8$(code_buf, line);
        const _p$2 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$3 = 10;
        let _tmp;
        if (_p$2 === -1) {
          _tmp = false;
        } else {
          const _p$4 = _p$2;
          const _p$5 = _p$4;
          _tmp = _p$5 === _p$3;
        }
        if (_tmp) {
          moonbitlang$core$builtin$$Logger$write_char$8$(code_buf, 10);
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
        }
      }
      continue;
    } else {
      break;
    }
  }
  const code = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim_end$46$inner(code_buf.val, { str: mizchi$markdown$$try_parse_indented_code$46$42$bind$124$2765, start: 0, end: mizchi$markdown$$try_parse_indented_code$46$42$bind$124$2765.length }));
  if (code === "") {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$IndentedCode(code, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$BlockParser$try_parse_link_definition(self, start) {
  const saved = self.scanner.pos;
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 91;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  _L: while (true) {
    const _p$32 = self.scanner;
    if (!(_p$32.pos >= _p$32.len)) {
      _L$2: {
        _L$3: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$3;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 93: {
                break _L;
              }
              case 10: {
                break _L$3;
              }
              default: {
                moonbitlang$core$builtin$$Logger$write_char$8$(label_buf, _x);
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              }
            }
          }
          break _L$2;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, saved);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 58;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$2 = _p$62 === _p$4;
  }
  if (!_tmp$2) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  const _p$5 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$6 = 10;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$72 = _p$5;
    const _p$82 = _p$72;
    _tmp$3 = _p$82 === _p$6;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  }
  let url;
  const _p$7 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$8 = 60;
  let _tmp$4;
  if (_p$7 === -1) {
    _tmp$4 = false;
  } else {
    const _p$9 = _p$7;
    const _p$10 = _p$9;
    _tmp$4 = _p$10 === _p$8;
  }
  if (_tmp$4) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    while (true) {
      let _tmp$5;
      const _p$9 = self.scanner;
      if (!(_p$9.pos >= _p$9.len)) {
        const _p$10 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$11 = 62;
        let _tmp$6;
        if (_p$10 === -1) {
          _tmp$6 = false;
        } else {
          const _p$12 = _p$10;
          const _p$13 = _p$12;
          _tmp$6 = _p$13 === _p$11;
        }
        _tmp$5 = !_tmp$6;
      } else {
        _tmp$5 = false;
      }
      if (_tmp$5) {
        const _bind = mizchi$markdown$$Scanner$consume(self.scanner);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _c = _Some;
          moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
    url = url_buf.val;
  } else {
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    while (true) {
      const _p$9 = self.scanner;
      if (!(_p$9.pos >= _p$9.len)) {
        _L$2: {
          _L$3: {
            const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
            if (_bind === -1) {
              break _L$3;
            } else {
              const _Some = _bind;
              const _x = _Some;
              switch (_x) {
                case 32: {
                  break _L$3;
                }
                case 9: {
                  break _L$3;
                }
                case 10: {
                  break _L$3;
                }
                default: {
                  moonbitlang$core$builtin$$Logger$write_char$8$(url_buf, _x);
                  mizchi$markdown$$Scanner$advance(self.scanner, 1);
                }
              }
            }
            break _L$2;
          }
          break;
        }
        continue;
      } else {
        break;
      }
    }
    url = url_buf.val;
  }
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  let title;
  _L$2: {
    _L$3: {
      const _bind2 = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind2 === -1) {
        title = "";
      } else {
        const _Some = _bind2;
        const _x = _Some;
        switch (_x) {
          case 34: {
            break _L$3;
          }
          case 39: {
            break _L$3;
          }
          default: {
            title = "";
          }
        }
      }
      break _L$2;
    }
    const _bind = mizchi$markdown$$Scanner$consume(self.scanner);
    const quote = _bind === -1 ? 34 : _bind;
    const title_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
    while (true) {
      let _tmp$52;
      const _p$92 = self.scanner;
      if (!(_p$92.pos >= _p$92.len)) {
        const _p$10 = mizchi$markdown$$Scanner$peek(self.scanner);
        let _tmp$6;
        if (_p$10 === -1) {
          _tmp$6 = false;
        } else {
          const _p$11 = _p$10;
          const _p$12 = _p$11;
          _tmp$6 = _p$12 === quote;
        }
        _tmp$52 = !_tmp$6;
      } else {
        _tmp$52 = false;
      }
      if (_tmp$52) {
        const _bind$2 = mizchi$markdown$$Scanner$consume(self.scanner);
        if (_bind$2 === -1) {
          break;
        } else {
          const _Some = _bind$2;
          const _c = _Some;
          moonbitlang$core$builtin$$Logger$write_char$8$(title_buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    const _p$9 = mizchi$markdown$$Scanner$peek(self.scanner);
    let _tmp$5;
    if (_p$9 === -1) {
      _tmp$5 = false;
    } else {
      const _p$10 = _p$9;
      const _p$11 = _p$10;
      _tmp$5 = _p$11 === quote;
    }
    if (_tmp$5) {
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
    }
    title = title_buf.val;
  }
  mizchi$markdown$$Scanner$skip_line(self.scanner);
  const def = { label: moonbitlang$core$string$$String$to_lower(label_buf.val), url, title, span: mizchi$markdown$$Span$new(start, self.scanner.pos) };
  moonbitlang$core$array$$Array$push$33$(self.definitions, def);
  return def;
}
function mizchi$markdown$$skip_n_chars(s, n) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let i = 0;
  const _it = moonbitlang$core$string$$String$iterator(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (i >= n) {
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, _c);
      }
      i = i + 1 | 0;
      continue;
    }
  }
  return buf.val;
}
function mizchi$markdown$$parse_task_checkbox(content) {
  if (content.length >= 4) {
    if (moonbitlang$core$string$$String$has_prefix(content, { str: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2808, start: 0, end: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2808.length })) {
      return { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2135, _1: mizchi$markdown$$skip_n_chars(content, 4) };
    }
    if (moonbitlang$core$string$$String$has_prefix(content, { str: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2809, start: 0, end: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2809.length }) || moonbitlang$core$string$$String$has_prefix(content, { str: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2810, start: 0, end: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$2810.length })) {
      return { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2136, _1: mizchi$markdown$$skip_n_chars(content, 4) };
    }
  }
  if (content === "[ ]") {
    return mizchi$markdown$$parse_task_checkbox$46$tuple$47$2138;
  }
  if (content === "[x]" || content === "[X]") {
    return mizchi$markdown$$parse_task_checkbox$46$tuple$47$2140;
  }
  return { _0: -1, _1: content };
}
function mizchi$markdown$$BlockParser$parse_nested_list_item(self, start, marker_offset, content_offset) {
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const line = mizchi$markdown$$Scanner$read_line(self.scanner);
  moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, line);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const content = content_buf.val;
  const children = [];
  const _bind = mizchi$markdown$$parse_task_checkbox(content);
  const _checked = _bind._0;
  const _actual_content = _bind._1;
  if (!(_actual_content === "")) {
    const inline_content = mizchi$markdown$$parse_inlines$46$inner(_actual_content, self.strict);
    moonbitlang$core$array$$Array$push$30$(children, new $64$mizchi$47$markdown$46$Block$Paragraph(inline_content, mizchi$markdown$$Span$new(start, self.scanner.pos), mizchi$markdown$$empty$46$record$47$1271, mizchi$markdown$$empty$46$record$47$1271));
  }
  return { children, checked: _checked, marker_offset, content_offset, span: mizchi$markdown$$Span$new(start, self.scanner.pos) };
}
function mizchi$markdown$$BlockParser$parse_nested_bullet_list(self, marker, min_indent) {
  const items = [];
  let tight = true;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const item_start = self.scanner.pos;
      const marker_offset = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      if (marker_offset < min_indent) {
        mizchi$markdown$$Scanner$restore(self.scanner, item_start);
        break;
      }
      let current_marker;
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 45: {
                current_marker = mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2154;
                break;
              }
              case 42: {
                current_marker = mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2155;
                break;
              }
              case 43: {
                current_marker = mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2156;
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        current_marker = void 0;
      }
      if (moonbitlang$core$builtin$$op_notequal$9$(current_marker, marker)) {
        mizchi$markdown$$Scanner$restore(self.scanner, item_start);
        break;
      }
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      const content_offset = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      const actual_offset = content_offset === 0 ? 1 : content_offset;
      const item = mizchi$markdown$$BlockParser$parse_nested_list_item(self, item_start, marker_offset, actual_offset);
      moonbitlang$core$array$$Array$push$18$(items, item);
      let _tmp;
      const _p$2 = self.scanner;
      if (!(_p$2.pos >= _p$2.len)) {
        _tmp = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        tight = false;
        while (true) {
          let _tmp$2;
          const _p$3 = self.scanner;
          if (!(_p$3.pos >= _p$3.len)) {
            _tmp$2 = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            mizchi$markdown$$Scanner$skip_line(self.scanner);
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (items.length === 0) {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$BulletList(marker, tight, items, mizchi$markdown$$Span$new(moonbitlang$core$array$$Array$at$18$(items, 0).span.from, self.scanner.pos), mizchi$markdown$$empty$46$record$47$1271, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$BlockParser$parse_list_item(self, start, marker_offset, content_offset) {
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const line = mizchi$markdown$$Scanner$read_line(self.scanner);
  moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, line);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const content = content_buf.val;
  const children = [];
  const _bind = mizchi$markdown$$parse_task_checkbox(content);
  const _checked = _bind._0;
  const _actual_content = _bind._1;
  if (!(_actual_content === "")) {
    const inline_content = mizchi$markdown$$parse_inlines$46$inner(_actual_content, self.strict);
    moonbitlang$core$array$$Array$push$30$(children, new $64$mizchi$47$markdown$46$Block$Paragraph(inline_content, mizchi$markdown$$Span$new(start, self.scanner.pos), mizchi$markdown$$empty$46$record$47$1271, mizchi$markdown$$empty$46$record$47$1271));
  }
  const min_indent = (marker_offset + 1 | 0) + content_offset | 0;
  while (true) {
    let _tmp$2;
    const _p$3 = self.scanner;
    if (!(_p$3.pos >= _p$3.len)) {
      _tmp$2 = !mizchi$markdown$$Scanner$is_blank_line(self.scanner);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      const saved = self.scanner.pos;
      const indent = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      if (indent < min_indent) {
        mizchi$markdown$$Scanner$restore(self.scanner, saved);
        break;
      }
      _L: {
        _L$2: {
          _L$3: {
            const _bind$22 = mizchi$markdown$$Scanner$peek(self.scanner);
            if (_bind$22 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$22;
              const _x = _Some;
              switch (_x) {
                case 45: {
                  break _L$3;
                }
                case 42: {
                  break _L$3;
                }
                case 43: {
                  break _L$3;
                }
                default: {
                  break _L$2;
                }
              }
            }
          }
          let nested_marker;
          _L$4: {
            _L$5: {
              const _bind$22 = mizchi$markdown$$Scanner$peek(self.scanner);
              if (_bind$22 === -1) {
                break _L$5;
              } else {
                const _Some = _bind$22;
                const _x = _Some;
                switch (_x) {
                  case 45: {
                    nested_marker = 0;
                    break;
                  }
                  case 42: {
                    nested_marker = 1;
                    break;
                  }
                  case 43: {
                    nested_marker = 2;
                    break;
                  }
                  default: {
                    break _L$5;
                  }
                }
              }
              break _L$4;
            }
            nested_marker = $panic();
          }
          mizchi$markdown$$Scanner$restore(self.scanner, saved);
          const _bind$2 = mizchi$markdown$$BlockParser$parse_nested_bullet_list(self, nested_marker, min_indent);
          if (_bind$2 === void 0) {
            break;
          } else {
            const _Some = _bind$2;
            const _nested_list = _Some;
            moonbitlang$core$array$$Array$push$30$(children, _nested_list);
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, saved);
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return { children, checked: _checked, marker_offset, content_offset, span: mizchi$markdown$$Span$new(start, self.scanner.pos) };
}
function mizchi$markdown$$BlockParser$parse_bullet_list(self, start, leading, marker, _marker_width) {
  const items = [];
  let tight = true;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const item_start = self.scanner.pos;
      const marker_offset = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      let current_marker;
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 45: {
                current_marker = mizchi$markdown$$parse_bullet_list$46$constr$47$2203;
                break;
              }
              case 42: {
                current_marker = mizchi$markdown$$parse_bullet_list$46$constr$47$2204;
                break;
              }
              case 43: {
                current_marker = mizchi$markdown$$parse_bullet_list$46$constr$47$2205;
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        current_marker = void 0;
      }
      if (moonbitlang$core$builtin$$op_notequal$9$(current_marker, marker)) {
        mizchi$markdown$$Scanner$restore(self.scanner, item_start);
        break;
      }
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      const content_offset = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      const actual_offset = content_offset === 0 ? 1 : content_offset;
      const item = mizchi$markdown$$BlockParser$parse_list_item(self, item_start, marker_offset, actual_offset);
      moonbitlang$core$array$$Array$push$18$(items, item);
      let _tmp;
      const _p$2 = self.scanner;
      if (!(_p$2.pos >= _p$2.len)) {
        _tmp = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        tight = false;
        while (true) {
          let _tmp$2;
          const _p$3 = self.scanner;
          if (!(_p$3.pos >= _p$3.len)) {
            _tmp$2 = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            mizchi$markdown$$Scanner$skip_line(self.scanner);
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (items.length === 0) {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$BulletList(marker, tight, items, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$BlockParser$parse_ordered_list(self, start, leading, start_num, delimiter, _marker_width) {
  const items = [];
  let tight = true;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const item_start = self.scanner.pos;
      const marker_offset = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$BlockParser$detect_list_marker(self);
          if (_bind === void 0) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _x$2 = _x._0;
            if (_x$2.$tag === 1) {
              const _Ordered = _x$2;
              const _d = _Ordered._1;
              if (moonbitlang$core$builtin$$Eq$equal$42$(_d, delimiter)) {
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, item_start);
        break;
      }
      while (true) {
        if (mizchi$markdown$$char_is_digit(mizchi$markdown$$Scanner$peek(self.scanner))) {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
          continue;
        } else {
          break;
        }
      }
      mizchi$markdown$$Scanner$advance(self.scanner, 1);
      const content_offset = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      const actual_offset = content_offset === 0 ? 1 : content_offset;
      const item = mizchi$markdown$$BlockParser$parse_list_item(self, item_start, marker_offset, actual_offset);
      moonbitlang$core$array$$Array$push$18$(items, item);
      let _tmp;
      const _p$2 = self.scanner;
      if (!(_p$2.pos >= _p$2.len)) {
        _tmp = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        tight = false;
        while (true) {
          let _tmp$2;
          const _p$3 = self.scanner;
          if (!(_p$3.pos >= _p$3.len)) {
            _tmp$2 = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            mizchi$markdown$$Scanner$skip_line(self.scanner);
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (items.length === 0) {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$OrderedList(start_num, delimiter, tight, items, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$BlockParser$try_parse_list(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const _bind = mizchi$markdown$$BlockParser$detect_list_marker(self);
  if (_bind === void 0) {
    return void 0;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _marker_kind = _x._0;
    const _marker_width = _x._1;
    if (_marker_kind.$tag === 0) {
      const _Bullet = _marker_kind;
      const _marker = _Bullet._0;
      return mizchi$markdown$$BlockParser$parse_bullet_list(self, start, leading, _marker, _marker_width);
    } else {
      const _Ordered = _marker_kind;
      const _start_num = _Ordered._0;
      const _delim = _Ordered._1;
      return mizchi$markdown$$BlockParser$parse_ordered_list(self, start, leading, _start_num, _delim, _marker_width);
    }
  }
}
function mizchi$markdown$$BlockParser$try_parse_setext_heading(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const content = mizchi$markdown$$Scanner$read_line(self.scanner);
  if (moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim$46$inner(content, { str: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$2884, start: 0, end: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$2884.length }))) {
    return void 0;
  }
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  } else {
    return void 0;
  }
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  let underline_char;
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c === 61 || _c === 45) {
          underline_char = _c;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return void 0;
  }
  const level = underline_char === 61 ? 1 : 2;
  const underline_count = mizchi$markdown$$Scanner$count_char(self.scanner, underline_char);
  if (underline_count < 1) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, underline_count);
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  let _tmp$2;
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 10;
  let _tmp$3;
  if (_p$3 === -1) {
    _tmp$3 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$3 = _p$62 === _p$4;
  }
  if (!_tmp$3) {
    const _p$52 = self.scanner;
    _tmp$2 = !(_p$52.pos >= _p$52.len);
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  const _p$5 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$6 = 10;
  let _tmp$4;
  if (_p$5 === -1) {
    _tmp$4 = false;
  } else {
    const _p$7 = _p$5;
    const _p$8 = _p$7;
    _tmp$4 = _p$8 === _p$6;
  }
  if (_tmp$4) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const content_str = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim$46$inner(content, { str: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$2885, start: 0, end: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$2885.length }));
  const children = mizchi$markdown$$parse_inlines$46$inner(content_str, self.strict);
  return new $64$mizchi$47$markdown$46$Block$Heading(level, 1, children, 0, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$split_table_cells(line) {
  const cells = [];
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let in_escape = false;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < line.length) {
      let c;
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char(line, i);
          if (_bind === -1) {
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 92: {
                if (!in_escape) {
                  in_escape = true;
                  moonbitlang$core$builtin$$Logger$write_char$8$(buf, 92);
                } else {
                  c = _x;
                  break _L$2;
                }
                break;
              }
              case 124: {
                if (!in_escape) {
                  moonbitlang$core$array$$Array$push$1$(cells, buf.val);
                  moonbitlang$core$builtin$$StringBuilder$reset(buf);
                } else {
                  c = _x;
                  break _L$2;
                }
                break;
              }
              default: {
                c = _x;
                break _L$2;
              }
            }
          }
          break _L;
        }
        in_escape = false;
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, c);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const last = buf.val;
  if (!moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim$46$inner(last, { str: mizchi$markdown$$split_table_cells$46$42$bind$124$2900, start: 0, end: mizchi$markdown$$split_table_cells$46$42$bind$124$2900.length }))) {
    moonbitlang$core$array$$Array$push$1$(cells, last);
  }
  if (cells.length > 0) {
    const _bind = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim$46$inner(moonbitlang$core$array$$Array$at$1$(cells, 0), { str: mizchi$markdown$$split_table_cells$46$42$bind$124$2901, start: 0, end: mizchi$markdown$$split_table_cells$46$42$bind$124$2901.length }));
    if (_bind === "") {
      moonbitlang$core$array$$Array$remove$1$(cells, 0);
    }
  }
  return cells;
}
function mizchi$markdown$$parse_table_alignments(line) {
  const alignments = [];
  const cells = mizchi$markdown$$split_table_cells(line);
  const _len = cells.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const cell = cells[_i];
        const trimmed = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim$46$inner(cell, { str: mizchi$markdown$$parse_table_alignments$46$42$bind$124$2917, start: 0, end: mizchi$markdown$$parse_table_alignments$46$42$bind$124$2917.length }));
        if (trimmed === "") {
          break _L;
        }
        const has_left_colon = moonbitlang$core$string$$String$has_prefix(trimmed, { str: mizchi$markdown$$parse_table_alignments$46$42$bind$124$2916, start: 0, end: mizchi$markdown$$parse_table_alignments$46$42$bind$124$2916.length });
        const has_right_colon = moonbitlang$core$string$$String$has_suffix(trimmed, { str: mizchi$markdown$$parse_table_alignments$46$42$bind$124$2915, start: 0, end: mizchi$markdown$$parse_table_alignments$46$42$bind$124$2915.length });
        let has_dash = false;
        let _tmp$2 = 0;
        while (true) {
          const i = _tmp$2;
          if (i < trimmed.length) {
            _L$2: {
              _L$3: {
                const _bind = moonbitlang$core$string$$String$get_char(trimmed, i);
                if (_bind === -1) {
                  break _L$3;
                } else {
                  const _Some = _bind;
                  const _x = _Some;
                  switch (_x) {
                    case 45: {
                      has_dash = true;
                      break;
                    }
                    case 58: {
                      break;
                    }
                    default: {
                      break _L$3;
                    }
                  }
                }
                break _L$2;
              }
              return [];
            }
            _tmp$2 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (!has_dash) {
          return [];
        }
        const align = has_left_colon && has_right_colon ? 1 : has_left_colon ? 0 : has_right_colon ? 2 : 3;
        moonbitlang$core$array$$Array$push$12$(alignments, align);
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return alignments;
}
function mizchi$markdown$$parse_table_row(line, expected_cols, strict) {
  const cells = [];
  const raw_cells = mizchi$markdown$$split_table_cells(line);
  const _len = raw_cells.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const cell = raw_cells[_i];
      if (_i >= expected_cols) {
        break;
      }
      const content = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim$46$inner(cell, { str: mizchi$markdown$$parse_table_row$46$42$bind$124$2920, start: 0, end: mizchi$markdown$$parse_table_row$46$42$bind$124$2920.length }));
      const children = mizchi$markdown$$parse_inlines$46$inner(content, strict);
      moonbitlang$core$array$$Array$push$35$(cells, { children, span: mizchi$markdown$$Span$new(0, content.length) });
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (cells.length < expected_cols) {
      moonbitlang$core$array$$Array$push$35$(cells, { children: [], span: mizchi$markdown$$Span$new(0, 0) });
      continue;
    } else {
      break;
    }
  }
  return cells;
}
function mizchi$markdown$$BlockParser$try_parse_table(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const header_line = mizchi$markdown$$Scanner$read_line(self.scanner);
  if (!moonbitlang$core$string$$String$contains(header_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$2922, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$2922.length })) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const separator_line = mizchi$markdown$$Scanner$read_line(self.scanner);
  if (!moonbitlang$core$string$$String$contains(separator_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$2923, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$2923.length }) || !moonbitlang$core$string$$String$contains(separator_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$2924, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$2924.length })) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  const alignments = mizchi$markdown$$parse_table_alignments(separator_line);
  if (alignments.length === 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  const header_cells = mizchi$markdown$$split_table_cells(header_line);
  const _p$3 = [];
  const _p$4 = header_cells.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$52 = _tmp$2;
    if (_p$52 < _p$4) {
      const _p$62 = header_cells[_p$52];
      if (!moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim$46$inner(_p$62, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$2927, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$2927.length }))) {
        moonbitlang$core$array$$Array$push$1$(_p$3, _p$62);
      }
      _tmp$2 = _p$52 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const header_col_count = _p$3.length;
  if (header_col_count !== alignments.length) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  const _p$5 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$6 = 10;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$7 = _p$5;
    const _p$8 = _p$7;
    _tmp$3 = _p$8 === _p$6;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const header = mizchi$markdown$$parse_table_row(header_line, alignments.length, self.strict);
  const rows = [];
  while (true) {
    let _tmp$4;
    const _p$7 = self.scanner;
    if (!(_p$7.pos >= _p$7.len)) {
      _tmp$4 = !mizchi$markdown$$Scanner$is_blank_line(self.scanner);
    } else {
      _tmp$4 = false;
    }
    if (_tmp$4) {
      const row_start = self.scanner.pos;
      const row_line = mizchi$markdown$$Scanner$read_line(self.scanner);
      if (!moonbitlang$core$string$$String$contains(row_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$2926, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$2926.length })) {
        mizchi$markdown$$Scanner$restore(self.scanner, row_start);
        break;
      }
      moonbitlang$core$array$$Array$push$34$(rows, mizchi$markdown$$parse_table_row(row_line, alignments.length, self.strict));
      const _p$8 = mizchi$markdown$$Scanner$peek(self.scanner);
      const _p$9 = 10;
      let _tmp$5;
      if (_p$8 === -1) {
        _tmp$5 = false;
      } else {
        const _p$10 = _p$8;
        const _p$11 = _p$10;
        _tmp$5 = _p$11 === _p$9;
      }
      if (_tmp$5) {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
      }
      continue;
    } else {
      break;
    }
  }
  return new $64$mizchi$47$markdown$46$Block$Table(header, alignments, rows, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$parse_simple_yaml(yaml) {
  const entries = [];
  const lines = moonbitlang$core$string$$String$split(yaml, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2948, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2948.length });
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$7$;
  lines((line) => {
    const trimmed = moonbitlang$core$string$$String$trim$46$inner(moonbitlang$core$builtin$$Show$to_string$0$(line), { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2943, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2943.length });
    if (moonbitlang$core$string$$StringView$is_empty(trimmed) || moonbitlang$core$string$$StringView$has_prefix(trimmed, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2930, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2930.length })) {
      return 1;
    }
    const _bind = moonbitlang$core$string$$StringView$find(trimmed, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2937, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2937.length });
    if (_bind === void 0) {
    } else {
      const _Some = _bind;
      const _colon_idx = _Some;
      const key = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim$46$inner(moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$StringView$view$46$inner(trimmed, 0, _colon_idx)), { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2936, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2936.length }));
      const value = moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$String$trim$46$inner(moonbitlang$core$builtin$$Show$to_string$0$(moonbitlang$core$string$$StringView$view$46$inner(trimmed, _colon_idx + 1 | 0, void 0)), { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2935, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2935.length }));
      const clean_value = moonbitlang$core$string$$String$has_prefix(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2931, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2931.length }) && moonbitlang$core$string$$String$has_suffix(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2932, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2932.length }) ? value.substring(1, value.length - 1 | 0) : moonbitlang$core$string$$String$has_prefix(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2933, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2933.length }) && moonbitlang$core$string$$String$has_suffix(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2934, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$2934.length }) ? value.substring(1, value.length - 1 | 0) : value;
      moonbitlang$core$array$$Array$push$32$(entries, { _0: key, _1: clean_value });
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  return entries;
}
function mizchi$markdown$$BlockParser$try_parse_frontmatter(self) {
  const start = self.scanner.pos;
  if (start !== 0) {
    return void 0;
  }
  if (!mizchi$markdown$$Scanner$matches(self.scanner, "---")) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 3);
  mizchi$markdown$$Scanner$skip_spaces(self.scanner);
  let _tmp;
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 10;
  let _tmp$2;
  if (_p === -1) {
    _tmp$2 = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp$2 = _p$42 === _p$2;
  }
  if (!_tmp$2) {
    const _p$32 = self.scanner;
    _tmp = !(_p$32.pos >= _p$32.len);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 10;
  let _tmp$3;
  if (_p$3 === -1) {
    _tmp$3 = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    _tmp$3 = _p$6 === _p$4;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const yaml_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let found_closing = false;
  while (true) {
    const _p$5 = self.scanner;
    if (!(_p$5.pos >= _p$5.len)) {
      if (mizchi$markdown$$Scanner$matches(self.scanner, "---")) {
        mizchi$markdown$$Scanner$advance(self.scanner, 3);
        mizchi$markdown$$Scanner$skip_spaces(self.scanner);
        let _tmp$4;
        const _p$6 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$7 = 10;
        let _tmp$5;
        if (_p$6 === -1) {
          _tmp$5 = false;
        } else {
          const _p$8 = _p$6;
          const _p$9 = _p$8;
          _tmp$5 = _p$9 === _p$7;
        }
        if (_tmp$5) {
          _tmp$4 = true;
        } else {
          const _p$8 = self.scanner;
          _tmp$4 = _p$8.pos >= _p$8.len;
        }
        if (_tmp$4) {
          const _p$8 = mizchi$markdown$$Scanner$peek(self.scanner);
          const _p$9 = 10;
          let _tmp$6;
          if (_p$8 === -1) {
            _tmp$6 = false;
          } else {
            const _p$10 = _p$8;
            const _p$11 = _p$10;
            _tmp$6 = _p$11 === _p$9;
          }
          if (_tmp$6) {
            mizchi$markdown$$Scanner$advance(self.scanner, 1);
          }
          found_closing = true;
          break;
        }
        moonbitlang$core$builtin$$Logger$write_string$8$(yaml_buf, "---");
      } else {
        const line = mizchi$markdown$$Scanner$read_line(self.scanner);
        moonbitlang$core$builtin$$Logger$write_string$8$(yaml_buf, line);
        const _p$6 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$7 = 10;
        let _tmp$4;
        if (_p$6 === -1) {
          _tmp$4 = false;
        } else {
          const _p$8 = _p$6;
          const _p$9 = _p$8;
          _tmp$4 = _p$9 === _p$7;
        }
        if (_tmp$4) {
          moonbitlang$core$builtin$$Logger$write_char$8$(yaml_buf, 10);
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (!found_closing) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
    return void 0;
  }
  const raw = yaml_buf.val;
  const entries = mizchi$markdown$$parse_simple_yaml(raw);
  return { raw, entries, span: mizchi$markdown$$Span$new(start, self.scanner.pos) };
}
function mizchi$markdown$$BlockParser$parse_document(self) {
  const start = self.scanner.pos;
  const frontmatter = mizchi$markdown$$BlockParser$try_parse_frontmatter(self);
  const children = mizchi$markdown$$BlockParser$parse_blocks(self);
  const document2 = { frontmatter, children, span: mizchi$markdown$$Span$new(start, self.scanner.pos) };
  return { document: document2, definitions: self.definitions };
}
function mizchi$markdown$$BlockParser$parse_blocks(self) {
  const blocks = [];
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const blank_start = self.scanner.pos;
      let blank_count = 0;
      while (true) {
        let _tmp;
        const _p$22 = self.scanner;
        if (!(_p$22.pos >= _p$22.len)) {
          _tmp = mizchi$markdown$$Scanner$is_blank_line(self.scanner);
        } else {
          _tmp = false;
        }
        if (_tmp) {
          blank_count = blank_count + 1 | 0;
          mizchi$markdown$$Scanner$skip_line(self.scanner);
          continue;
        } else {
          break;
        }
      }
      if (blank_count > 0) {
        moonbitlang$core$array$$Array$push$30$(blocks, new $64$mizchi$47$markdown$46$Block$BlankLines(blank_count, mizchi$markdown$$Span$new(blank_start, self.scanner.pos)));
      }
      const _p$2 = self.scanner;
      if (_p$2.pos >= _p$2.len) {
        break;
      }
      const _bind = mizchi$markdown$$BlockParser$parse_block(self);
      if (_bind === void 0) {
        mizchi$markdown$$Scanner$skip_line(self.scanner);
      } else {
        const _Some = _bind;
        const _block = _Some;
        moonbitlang$core$array$$Array$push$30$(blocks, _block);
      }
      continue;
    } else {
      break;
    }
  }
  return blocks;
}
function mizchi$markdown$$BlockParser$parse_block(self) {
  const start = self.scanner.pos;
  const indent = mizchi$markdown$$Scanner$count_leading_spaces(self.scanner);
  const _bind = mizchi$markdown$$BlockParser$try_parse_thematic_break(self, start);
  if (_bind === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind;
    const _block = _Some;
    return _block;
  }
  const _bind$2 = mizchi$markdown$$BlockParser$try_parse_atx_heading(self, start);
  if (_bind$2 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$2;
    const _block = _Some;
    return _block;
  }
  const _bind$3 = mizchi$markdown$$BlockParser$try_parse_fenced_code(self, start, indent);
  if (_bind$3 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$3;
    const _block = _Some;
    return _block;
  }
  const _bind$4 = mizchi$markdown$$BlockParser$try_parse_blockquote(self, start);
  if (_bind$4 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$4;
    const _block = _Some;
    return _block;
  }
  const _bind$5 = mizchi$markdown$$BlockParser$try_parse_list(self, start);
  if (_bind$5 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$5;
    const _block = _Some;
    return _block;
  }
  if (indent >= 4) {
    const _bind$62 = mizchi$markdown$$BlockParser$try_parse_indented_code(self, start);
    if (_bind$62 === void 0) {
      mizchi$markdown$$Scanner$restore(self.scanner, start);
    } else {
      const _Some = _bind$62;
      const _block = _Some;
      return _block;
    }
  }
  const _bind$6 = mizchi$markdown$$BlockParser$try_parse_setext_heading(self, start);
  if (_bind$6 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$6;
    const _block = _Some;
    return _block;
  }
  const _bind$7 = mizchi$markdown$$BlockParser$try_parse_html_block(self, start);
  if (_bind$7 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$7;
    const _block = _Some;
    return _block;
  }
  const _bind$8 = mizchi$markdown$$BlockParser$try_parse_table(self, start);
  if (_bind$8 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$8;
    const _block = _Some;
    return _block;
  }
  const _bind$9 = mizchi$markdown$$BlockParser$try_parse_footnote_definition(self, start);
  if (_bind$9 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    const _Some = _bind$9;
    const _block = _Some;
    return _block;
  }
  const _bind$10 = mizchi$markdown$$BlockParser$try_parse_link_definition(self, start);
  if (_bind$10 === void 0) {
    mizchi$markdown$$Scanner$restore(self.scanner, start);
  } else {
    return void 0;
  }
  return mizchi$markdown$$BlockParser$parse_paragraph(self, start);
}
function mizchi$markdown$$BlockParser$try_parse_blockquote(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 62;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (!_tmp) {
    return void 0;
  }
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let first = true;
  while (true) {
    const _p$3 = self.scanner;
    if (!(_p$3.pos >= _p$3.len)) {
      const line_start = self.scanner.pos;
      mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      const _p$4 = mizchi$markdown$$Scanner$peek(self.scanner);
      const _p$5 = 62;
      let _tmp$22;
      if (_p$4 === -1) {
        _tmp$22 = false;
      } else {
        const _p$6 = _p$4;
        const _p$7 = _p$6;
        _tmp$22 = _p$7 === _p$5;
      }
      if (_tmp$22) {
        mizchi$markdown$$Scanner$advance(self.scanner, 1);
        const _p$6 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$7 = 32;
        let _tmp$3;
        if (_p$6 === -1) {
          _tmp$3 = false;
        } else {
          const _p$82 = _p$6;
          const _p$92 = _p$82;
          _tmp$3 = _p$92 === _p$7;
        }
        if (_tmp$3) {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
        }
        const line = mizchi$markdown$$Scanner$read_line(self.scanner);
        if (!first) {
          moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 10);
        }
        moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, line);
        first = false;
        const _p$8 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$9 = 10;
        let _tmp$4;
        if (_p$8 === -1) {
          _tmp$4 = false;
        } else {
          const _p$10 = _p$8;
          const _p$11 = _p$10;
          _tmp$4 = _p$11 === _p$9;
        }
        if (_tmp$4) {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
        }
      } else {
        mizchi$markdown$$Scanner$restore(self.scanner, line_start);
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const content = content_buf.val;
  const inner_scanner = mizchi$markdown$$Scanner$new(content);
  const inner_parser = mizchi$markdown$$BlockParser$new(inner_scanner, self.strict);
  const inner_result = mizchi$markdown$$BlockParser$parse_document(inner_parser);
  const _arr = inner_result.definitions;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const def = _arr[_i];
      moonbitlang$core$array$$Array$push$33$(self.definitions, def);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new $64$mizchi$47$markdown$46$Block$Blockquote(inner_result.document.children, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$BlockParser$try_parse_footnote_definition(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia(self);
  const _p = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$2 = 91;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p$3 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$4 = 94;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$2 = _p$62 === _p$4;
  }
  if (!_tmp$2) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  while (true) {
    const _p$52 = self.scanner;
    if (!(_p$52.pos >= _p$52.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 93) {
              break;
            } else {
              if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || (_x >= 48 && _x <= 57 || (_x === 45 || _x === 95)))) {
                moonbitlang$core$builtin$$Logger$write_char$8$(label_buf, _x);
                mizchi$markdown$$Scanner$advance(self.scanner, 1);
              } else {
                break _L$2;
              }
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore(self.scanner, saved);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  const label = label_buf.val;
  if (label === "") {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p$5 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$6 = 58;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$72 = _p$5;
    const _p$82 = _p$72;
    _tmp$3 = _p$82 === _p$6;
  }
  if (!_tmp$3) {
    mizchi$markdown$$Scanner$restore(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance(self.scanner, 1);
  const _p$7 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$8 = 32;
  let _tmp$4;
  if (_p$7 === -1) {
    _tmp$4 = false;
  } else {
    const _p$92 = _p$7;
    const _p$102 = _p$92;
    _tmp$4 = _p$102 === _p$8;
  }
  if (_tmp$4) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const first_line = mizchi$markdown$$Scanner$read_line(self.scanner);
  moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, first_line);
  const _p$9 = mizchi$markdown$$Scanner$peek(self.scanner);
  const _p$10 = 10;
  let _tmp$5;
  if (_p$9 === -1) {
    _tmp$5 = false;
  } else {
    const _p$11 = _p$9;
    const _p$12 = _p$11;
    _tmp$5 = _p$12 === _p$10;
  }
  if (_tmp$5) {
    mizchi$markdown$$Scanner$advance(self.scanner, 1);
  }
  while (true) {
    const _p$11 = self.scanner;
    if (!(_p$11.pos >= _p$11.len)) {
      const line_start = self.scanner.pos;
      const indent = mizchi$markdown$$Scanner$skip_spaces(self.scanner);
      if (mizchi$markdown$$Scanner$is_blank_line(self.scanner)) {
        moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 10);
        const _p$12 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$13 = 10;
        let _tmp$6;
        if (_p$12 === -1) {
          _tmp$6 = false;
        } else {
          const _p$14 = _p$12;
          const _p$15 = _p$14;
          _tmp$6 = _p$15 === _p$13;
        }
        if (_tmp$6) {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
        }
        continue;
      }
      if (indent >= 2) {
        moonbitlang$core$builtin$$Logger$write_char$8$(content_buf, 10);
        const line = mizchi$markdown$$Scanner$read_line(self.scanner);
        moonbitlang$core$builtin$$Logger$write_string$8$(content_buf, line);
        const _p$12 = mizchi$markdown$$Scanner$peek(self.scanner);
        const _p$13 = 10;
        let _tmp$6;
        if (_p$12 === -1) {
          _tmp$6 = false;
        } else {
          const _p$14 = _p$12;
          const _p$15 = _p$14;
          _tmp$6 = _p$15 === _p$13;
        }
        if (_tmp$6) {
          mizchi$markdown$$Scanner$advance(self.scanner, 1);
        }
      } else {
        mizchi$markdown$$Scanner$restore(self.scanner, line_start);
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const content = content_buf.val;
  const inner_scanner = mizchi$markdown$$Scanner$new(content);
  const inner_parser = mizchi$markdown$$BlockParser$new(inner_scanner, self.strict);
  const inner_result = mizchi$markdown$$BlockParser$parse_document(inner_parser);
  return new $64$mizchi$47$markdown$46$Block$FootnoteDefinition(label, inner_result.document.children, mizchi$markdown$$Span$new(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1271);
}
function mizchi$markdown$$parse$46$inner(source, strict) {
  const scanner = mizchi$markdown$$Scanner$new(source);
  const parser = mizchi$markdown$$BlockParser$new(scanner, strict);
  return mizchi$markdown$$BlockParser$parse_document(parser);
}
function kazuph$blog_admin$client$$markdown_editor(props) {
  const title = mizchi$luna$luna$signal$$signal$1$(props.initial_title);
  const slug = mizchi$luna$luna$signal$$signal$1$(props.initial_slug);
  const content = mizchi$luna$luna$signal$$signal$1$(props.initial_content);
  const status = mizchi$luna$luna$signal$$signal$1$(props.initial_status);
  const is_submitting = mizchi$luna$luna$signal$$signal$40$(false);
  const result_msg = mizchi$luna$luna$signal$$signal$1$("");
  const is_error = mizchi$luna$luna$signal$$signal$40$(false);
  const saved_slug = mizchi$luna$luna$signal$$signal$1$("");
  const render_preview = () => {
    const md_content = mizchi$luna$luna$signal$$Signal$get$1$(content);
    if (md_content === "") {
      return '<p style="color: #999;">\u30D7\u30EC\u30D3\u30E5\u30FC\u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059...</p>';
    }
    const result = mizchi$markdown$$parse$46$inner(md_content, false);
    return mizchi$markdown$$render_html(result.document);
  };
  const handle_submit = (e) => {
    mizchi$js$browser$dom$$FormEvent$preventDefault(e);
    mizchi$luna$luna$signal$$Signal$set$40$(is_submitting, true);
    mizchi$luna$luna$signal$$Signal$set$40$(is_error, false);
    mizchi$luna$luna$signal$$Signal$set$1$(result_msg, "\u9001\u4FE1\u4E2D...");
    const form_data = kazuph$blog_admin$client$$get_form_data_from_form(e, props.post_id);
    const handle_response = (response) => {
      switch (response.$tag) {
        case 0: {
          const _Success = response;
          const _data = _Success._0;
          mizchi$luna$luna$signal$$Signal$set$40$(is_submitting, false);
          const msg = kazuph$blog_admin$client$$get_message(_data);
          const slug_val = kazuph$blog_admin$client$$get_slug(_data);
          mizchi$luna$luna$signal$$Signal$set$1$(result_msg, msg);
          mizchi$luna$luna$signal$$Signal$set$1$(saved_slug, slug_val);
          return;
        }
        case 2: {
          const _Error = response;
          const _error_msg = _Error._1;
          mizchi$luna$luna$signal$$Signal$set$40$(is_submitting, false);
          mizchi$luna$luna$signal$$Signal$set$40$(is_error, true);
          mizchi$luna$luna$signal$$Signal$set$1$(result_msg, _error_msg);
          return;
        }
        case 3: {
          const _NetworkError = response;
          const _error_msg$2 = _NetworkError._0;
          mizchi$luna$luna$signal$$Signal$set$40$(is_submitting, false);
          mizchi$luna$luna$signal$$Signal$set$40$(is_error, true);
          mizchi$luna$luna$signal$$Signal$set$1$(result_msg, `\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC: ${_error_msg$2}`);
          return;
        }
        default: {
          const _Redirect = response;
          const _url = _Redirect._0;
          mizchi$luna$luna$signal$$Signal$set$40$(is_submitting, false);
          mizchi$luna$luna$signal$$Signal$set$1$(result_msg, `\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8: ${_url}`);
          kazuph$blog_admin$client$$redirect_to(_url);
          return;
        }
      }
    };
    mizchi$luna$sol$action$$invoke_action(props.action_url, form_data, handle_response, void 0);
  };
  const on_title_input = (e) => {
    const target = mizchi$js$browser$dom$$InputEvent$target(e);
    mizchi$luna$luna$signal$$Signal$set$1$(title, target.value);
    if (mizchi$luna$luna$signal$$Signal$get$1$(slug) === "") {
      mizchi$luna$luna$signal$$Signal$set$1$(slug, kazuph$blog_admin$client$$generate_slug(target.value));
      return;
    } else {
      return;
    }
  };
  const on_slug_input = (e) => {
    const target = mizchi$js$browser$dom$$InputEvent$target(e);
    mizchi$luna$luna$signal$$Signal$set$1$(slug, target.value);
  };
  const on_content_input = (e) => {
    const target = mizchi$js$browser$dom$$InputEvent$target(e);
    mizchi$luna$luna$signal$$Signal$set$1$(content, target.value);
  };
  return mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2448, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2449, void 0, () => {
    if (mizchi$luna$luna$signal$$Signal$get$40$(is_error)) {
      return "form-result error";
    } else {
      const _p = mizchi$luna$luna$signal$$Signal$get$1$(result_msg);
      const _p$2 = "";
      if (!(_p === _p$2)) {
        return "form-result success";
      } else {
        return "form-result";
      }
    }
  }, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text_of$1$(result_msg)]), mizchi$luna$luna$dom$element$$show(() => {
    const _p = mizchi$luna$luna$signal$$Signal$get$1$(saved_slug);
    const _p$2 = "";
    return !(_p === _p$2);
  }, () => {
    const slug_val = mizchi$luna$luna$signal$$Signal$get$1$(saved_slug);
    return mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2450, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$span(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2451, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u2713 \u4FDD\u5B58\u3057\u307E\u3057\u305F")]), mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2452, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$button(-1, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2453, void 0, void 0, void 0, void 0, new Option$Some$8$(mizchi$luna$luna$dom$element$$HandlerMap$click(mizchi$luna$luna$dom$element$$events(), (_discard_) => {
      kazuph$blog_admin$client$$redirect_to("/admin");
    })), void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u2190 \u8A18\u4E8B\u4E00\u89A7\u3078")]), mizchi$luna$luna$dom$element$$button(-1, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2454, void 0, void 0, void 0, void 0, new Option$Some$8$(mizchi$luna$luna$dom$element$$HandlerMap$click(mizchi$luna$luna$dom$element$$events(), (_discard_) => {
      kazuph$blog_admin$client$$redirect_to(`/posts/${slug_val}`);
    })), void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u8A18\u4E8B\u3092\u898B\u308B \u2192")])])]);
  }), mizchi$luna$luna$dom$element$$form(void 0, void 0, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2455, void 0, void 0, void 0, new Option$Some$8$(mizchi$luna$luna$dom$element$$HandlerMap$submit(mizchi$luna$luna$dom$element$$events(), handle_submit)), void 0, new Option$Some$9$([{ _0: "action", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString(props.action_url) }, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2457]), Option$None$10$, [mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2458, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$label(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2459, void 0, void 0, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u30BF\u30A4\u30C8\u30EB")]), mizchi$luna$luna$dom$element$$input(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2460, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2461, props.initial_title, void 0, -1, -1, -1, -1, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2462, void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Option$Some$8$(mizchi$luna$luna$dom$element$$HandlerMap$input(mizchi$luna$luna$dom$element$$events(), on_title_input)), void 0, new Option$Some$9$([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2464, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2466]), Option$None$10$)]), mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2467, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$label(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2468, void 0, void 0, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u30B9\u30E9\u30C3\u30B0 (URL)")]), mizchi$luna$luna$dom$element$$input(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2469, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2470, props.initial_slug, void 0, -1, -1, -1, -1, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2471, void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Option$Some$8$(mizchi$luna$luna$dom$element$$HandlerMap$input(mizchi$luna$luna$dom$element$$events(), on_slug_input)), void 0, new Option$Some$9$([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2473, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2475, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2477]), Option$None$10$)]), mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2478, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$label(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2479, void 0, void 0, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u30B9\u30C6\u30FC\u30BF\u30B9")]), mizchi$luna$luna$dom$element$$create_element("select", [kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2481, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2483, { _0: "oninput", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler((e) => {
    const target = e;
    mizchi$luna$luna$signal$$Signal$set$1$(status, target.value);
  }) }], [mizchi$luna$luna$dom$element$$create_element("option", [kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2485, { _0: "selected", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(props.initial_status === "draft" || props.initial_status === "" ? "true" : "") }], [mizchi$luna$luna$dom$element$$text("\u4E0B\u66F8\u304D")]), mizchi$luna$luna$dom$element$$create_element("option", [kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2487, { _0: "selected", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static(props.initial_status === "published" ? "true" : "") }], [mizchi$luna$luna$dom$element$$text("\u516C\u958B")])])]), mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2488, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2489, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, new Option$Some$10$([{ _0: "__innerHTML", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(render_preview) }]), []), mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2490, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$label(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2491, void 0, void 0, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$text("\u30B3\u30F3\u30C6\u30F3\u30C4 (Markdown)")]), mizchi$luna$luna$dom$element$$textarea(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2492, void 0, -1, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2493, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2494, void 0, void 0, void 0, new Option$Some$8$(mizchi$luna$luna$dom$element$$HandlerMap$input(mizchi$luna$luna$dom$element$$events(), on_content_input)), void 0, new Option$Some$9$([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2496, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2498]), Option$None$10$, [mizchi$luna$luna$dom$element$$text(props.initial_content)])])]), mizchi$luna$luna$dom$element$$div(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2499, void 0, void 0, void 0, Option$None$8$, void 0, Option$None$9$, Option$None$10$, [mizchi$luna$luna$dom$element$$button(-1, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2500, void 0, void 0, void 0, void 0, Option$None$8$, void 0, new Option$Some$9$([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2502]), new Option$Some$10$([{ _0: "disabled", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic(() => mizchi$luna$luna$signal$$Signal$get$40$(is_submitting) ? "true" : "__remove__") }]), [mizchi$luna$luna$dom$element$$text(props.post_id === "" ? "\u4F5C\u6210\u3059\u308B" : "\u66F4\u65B0\u3059\u308B")])])])]);
}

// target/js/release/build/__gen__/client/client.js
var Option$None$0$2 = { $tag: 0 };
function Option$Some$0$2(param0) {
  this._0 = param0;
}
Option$Some$0$2.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2.prototype.$tag = 0;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler2.prototype.$tag = 2;
function $64$mizchi$47$markdown$46$ListMarkerKind$Bullet2(param0) {
  this._0 = param0;
}
$64$mizchi$47$markdown$46$ListMarkerKind$Bullet2.prototype.$tag = 0;
function $64$mizchi$47$markdown$46$ListMarkerKind$Ordered2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$ListMarkerKind$Ordered2.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2.prototype.$tag = 0;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrNumber2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrNumber2.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrInt2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrInt2.prototype.$tag = 2;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrBool2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrBool2.prototype.$tag = 3;
var $PanicError2 = class extends Error {
};
function $panic2() {
  throw new $PanicError2();
}
function $bound_check2(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init2(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function Result$Err$1$2(param0) {
  this._0 = param0;
}
Result$Err$1$2.prototype.$tag = 0;
function Result$Ok$1$2(param0) {
  this._0 = param0;
}
Result$Ok$1$2.prototype.$tag = 1;
var Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds2 = { $tag: 1 };
var Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex2 = { $tag: 0 };
var moonbitlang$core$builtin$$int_to_string_js2 = (x, radix) => {
  return x.toString(radix);
};
function $unsafe_make_string2(a, b) {
  return String.fromCodePoint(b).repeat(a);
}
var moonbitlang$core$builtin$$JSArray$push2 = (arr, val) => {
  arr.push(val);
};
var $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$2$2 = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$2$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$2$2.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$2$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$2$2.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$2$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$2$2.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$2$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$2$2.prototype.$tag = 4;
var $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$3$2 = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$3$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$3$2.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$3$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$3$2.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$3$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$3$2.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$3$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$3$2.prototype.$tag = 4;
var moonbitlang$core$builtin$$JSArray$copy2 = (arr) => arr.slice(0);
var moonbitlang$core$builtin$$JSArray$set_length2 = (arr, len) => {
  arr.length = len;
};
var moonbitlang$core$builtin$$JSArray$pop2 = (arr) => arr.pop();
var moonbitlang$core$builtin$$JSArray$splice2 = (arr, idx, cnt) => arr.splice(idx, cnt);
var mizchi$js$core$$Any$_get2 = (obj, key) => obj[key];
var mizchi$js$core$$Any$_call2 = (obj, key, args) => obj[key](...args);
var mizchi$js$core$$is_nullish2 = (v) => v == null;
var mizchi$js$core$$new_object2 = () => ({});
var mizchi$js$core$$Any$_set2 = (obj, key, value) => {
  obj[key] = value;
};
var mizchi$js$core$$null2 = () => null;
var Option$None$4$2 = { $tag: 0 };
function Option$Some$4$2(param0) {
  this._0 = param0;
}
Option$Some$4$2.prototype.$tag = 1;
var mizchi$js$browser$dom$$Element$tagName = (self) => self.tagName;
var mizchi$js$browser$dom$$document2 = () => document;
var mizchi$js$browser$dom$$Document$createElement2 = (self, tag) => self.createElement(tag);
var mizchi$js$browser$dom$$Document$createTextNode2 = (self, data) => self.createTextNode(data);
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$El2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$El2.prototype.$tag = 0;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt2.prototype.$tag = 1;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2.prototype.$tag = 2;
function $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Static2(param0) {
  this._0 = param0;
}
$64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Static2.prototype.$tag = 3;
var mizchi$luna$luna$dom$element$$apply_event_handler2 = (elem, name, handler) => elem.addEventListener(name, handler);
var mizchi$luna$luna$dom$element$$HandlerMap$click2 = (m, handler) => {
  m.click = handler;
  return m;
};
var mizchi$luna$luna$dom$element$$HandlerMap$input2 = (m, handler) => {
  m.input = handler;
  return m;
};
var mizchi$luna$luna$dom$element$$HandlerMap$submit2 = (m, handler) => {
  m.submit = handler;
  return m;
};
var mizchi$luna$luna$dom$element$$HandlerMap$to_attrs2 = (m) => Object.entries(m).map(([k, v]) => ({ _0: k, _1: { $tag: 2, _0: v } }));
var Option$None$5$2 = { $tag: 0 };
function Option$Some$5$2(param0) {
  this._0 = param0;
}
Option$Some$5$2.prototype.$tag = 1;
var mizchi$luna$sol$action$$ffi_invoke_action_cb2 = (url, payload, callback, options) => {
  (async () => {
    try {
      const headers = { "Content-Type": "application/json" };
      if (options.headers && options.headers.length > 0) {
        for (const h of options.headers) {
          const key = h[0] ?? h._0;
          const val = h[1] ?? h._1;
          if (key && val) headers[key] = val;
        }
      }
      const fetchOptions = {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        credentials: "same-origin"
      };
      const signal = options.signal;
      if (signal && signal.$ === "Some" && signal._0 instanceof AbortSignal) {
        fetchOptions.signal = signal._0;
      }
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        const text = await response.text();
        try {
          const json = JSON.parse(text);
          callback({ $tag: 2, _0: response.status, _1: json.error || text });
        } catch {
          callback({ $tag: 2, _0: response.status, _1: text });
        }
        return;
      }
      const data = await response.json();
      if (data.redirect) {
        callback({ $tag: 1, _0: data.redirect });
        return;
      }
      callback({ $tag: 0, _0: data });
    } catch (error) {
      callback({ $tag: 3, _0: error.message || "Network error" });
    }
  })();
};
var Option$None$6$2 = { $tag: 0 };
function Option$Some$6$2(param0) {
  this._0 = param0;
}
Option$Some$6$2.prototype.$tag = 1;
function $64$mizchi$47$markdown$46$Inline$Text2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$Text2.prototype.$tag = 0;
function $64$mizchi$47$markdown$46$Inline$SoftBreak2(param0) {
  this._0 = param0;
}
$64$mizchi$47$markdown$46$Inline$SoftBreak2.prototype.$tag = 1;
function $64$mizchi$47$markdown$46$Inline$HardBreak2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$HardBreak2.prototype.$tag = 2;
function $64$mizchi$47$markdown$46$Inline$Emphasis2(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Emphasis2.prototype.$tag = 3;
function $64$mizchi$47$markdown$46$Inline$Strong2(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Strong2.prototype.$tag = 4;
function $64$mizchi$47$markdown$46$Inline$Strikethrough2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$Strikethrough2.prototype.$tag = 5;
function $64$mizchi$47$markdown$46$Inline$Code2(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Code2.prototype.$tag = 6;
function $64$mizchi$47$markdown$46$Inline$Link2(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Inline$Link2.prototype.$tag = 7;
function $64$mizchi$47$markdown$46$Inline$RefLink2(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$RefLink2.prototype.$tag = 8;
function $64$mizchi$47$markdown$46$Inline$Autolink2(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$Autolink2.prototype.$tag = 9;
function $64$mizchi$47$markdown$46$Inline$Image2(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Inline$Image2.prototype.$tag = 10;
function $64$mizchi$47$markdown$46$Inline$RefImage2(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$mizchi$47$markdown$46$Inline$RefImage2.prototype.$tag = 11;
function $64$mizchi$47$markdown$46$Inline$HtmlInline2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$HtmlInline2.prototype.$tag = 12;
function $64$mizchi$47$markdown$46$Inline$FootnoteReference2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Inline$FootnoteReference2.prototype.$tag = 13;
function $compare_int2(a, b) {
  return (a >= b) - (a <= b);
}
function $64$mizchi$47$markdown$46$Block$ThematicBreak2(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$mizchi$47$markdown$46$Block$ThematicBreak2.prototype.$tag = 0;
function $64$mizchi$47$markdown$46$Block$Heading2(param0, param1, param2, param3, param4, param5, param6) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
}
$64$mizchi$47$markdown$46$Block$Heading2.prototype.$tag = 1;
function $64$mizchi$47$markdown$46$Block$Paragraph2(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$Paragraph2.prototype.$tag = 2;
function $64$mizchi$47$markdown$46$Block$FencedCode2(param0, param1, param2, param3, param4, param5, param6, param7) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
  this._7 = param7;
}
$64$mizchi$47$markdown$46$Block$FencedCode2.prototype.$tag = 3;
function $64$mizchi$47$markdown$46$Block$IndentedCode2(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$IndentedCode2.prototype.$tag = 4;
function $64$mizchi$47$markdown$46$Block$Blockquote2(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$Blockquote2.prototype.$tag = 5;
function $64$mizchi$47$markdown$46$Block$BulletList2(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
$64$mizchi$47$markdown$46$Block$BulletList2.prototype.$tag = 6;
function $64$mizchi$47$markdown$46$Block$OrderedList2(param0, param1, param2, param3, param4, param5, param6) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
  this._6 = param6;
}
$64$mizchi$47$markdown$46$Block$OrderedList2.prototype.$tag = 7;
function $64$mizchi$47$markdown$46$Block$HtmlBlock2(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$mizchi$47$markdown$46$Block$HtmlBlock2.prototype.$tag = 8;
function $64$mizchi$47$markdown$46$Block$Table2(param0, param1, param2, param3, param4, param5) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
  this._5 = param5;
}
$64$mizchi$47$markdown$46$Block$Table2.prototype.$tag = 9;
function $64$mizchi$47$markdown$46$Block$BlankLines2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$mizchi$47$markdown$46$Block$BlankLines2.prototype.$tag = 10;
function $64$mizchi$47$markdown$46$Block$FootnoteDefinition2(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$mizchi$47$markdown$46$Block$FootnoteDefinition2.prototype.$tag = 11;
var $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$7$2 = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$7$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$7$2.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$7$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$7$2.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$7$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$7$2.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$7$2(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$7$2.prototype.$tag = 4;
var kazuph$blog_admin$client$$generate_slug2 = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
var kazuph$blog_admin$client$$get_form_data_from_form2 = (e, postId) => {
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  if (postId) {
    data.id = postId;
  }
  return data;
};
var kazuph$blog_admin$client$$get_message2 = (data) => data?.message || "\u6210\u529F";
var kazuph$blog_admin$client$$get_slug2 = (data) => data?.slug || "";
var kazuph$blog_admin$client$$redirect_to2 = (url) => {
  window.location.href = url;
};
var Option$None$8$2 = { $tag: 0 };
function Option$Some$8$2(param0) {
  this._0 = param0;
}
Option$Some$8$2.prototype.$tag = 1;
var Option$None$9$2 = { $tag: 0 };
function Option$Some$9$2(param0) {
  this._0 = param0;
}
Option$Some$9$2.prototype.$tag = 1;
var Option$None$10$2 = { $tag: 0 };
function Option$Some$10$2(param0) {
  this._0 = param0;
}
Option$Some$10$2.prototype.$tag = 1;
var mizchi$luna$luna$dom$$console_log_wc = (msg) => console.log(msg);
var mizchi$luna$luna$dom$$has_shadow_root = (element) => element.shadowRoot != null;
var mizchi$luna$luna$dom$$get_shadow_root_as_element = (element) => element.shadowRoot;
var mizchi$luna$luna$dom$$extract_style_elements = (container) => {
  const styles = [];
  container.querySelectorAll("style").forEach((s) => {
    styles.push(s.cloneNode(true));
  });
  return styles;
};
var moonbitlang$core$builtin$$parse$46$42$bind$124$53542 = ":";
var moonbitlang$core$builtin$$parse$46$42$bind$124$53932 = ":";
var moonbitlang$core$builtin$$parse$46$42$bind$124$53872 = "-";
var moonbitlang$core$builtin$$parse$46$42$bind$124$53742 = ":";
var moonbitlang$core$builtin$$parse$46$42$bind$124$53682 = ":";
var moonbitlang$core$builtin$$output$46$42$bind$124$81982 = "/";
var moonbitlang$core$builtin$$output$46$42$bind$124$81922 = "/";
var moonbitlang$core$builtin$$boyer_moore_horspool_find$46$constr$47$812 = 0;
var moonbitlang$core$builtin$$brute_force_find$46$constr$47$952 = 0;
var mizchi$luna$luna$signal$$effect_id_counter2 = { val: 0 };
var mizchi$luna$luna$signal$$reactive_context2 = { current_subscriber: void 0, current_owner: void 0, current_cleanups: Option$None$0$2, batch_depth: 0, pending_effects: [], pending_ids: [] };
var mizchi$luna$luna$dom$element$$button$46$constr$47$1120 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("true");
var mizchi$luna$luna$dom$element$$button$46$tuple$47$1121 = { _0: "disabled", _1: mizchi$luna$luna$dom$element$$button$46$constr$47$1120 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$11432 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$11442 = { _0: "disabled", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$11432 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1145 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1146 = { _0: "readonly", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1145 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1147 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1148 = { _0: "required", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1147 };
var mizchi$luna$luna$dom$element$$input$46$constr$47$1149 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("true");
var mizchi$luna$luna$dom$element$$input$46$tuple$47$1150 = { _0: "checked", _1: mizchi$luna$luna$dom$element$$input$46$constr$47$1149 };
var mizchi$luna$luna$dom$element$$textarea$46$constr$47$1198 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("true");
var mizchi$luna$luna$dom$element$$textarea$46$tuple$47$1199 = { _0: "disabled", _1: mizchi$luna$luna$dom$element$$textarea$46$constr$47$1198 };
var mizchi$markdown$$render_block_html$46$42$bind$124$21872 = " ";
var mizchi$markdown$$render_block_html$46$42$bind$124$22002 = "\n";
var mizchi$markdown$$try_parse_autolink$46$42$bind$124$22782 = "@";
var mizchi$markdown$$try_parse_autolink$46$42$bind$124$22792 = "http";
var mizchi$markdown$$parse_segment_simple$46$42$bind$124$26272 = " ";
var mizchi$markdown$$parse_paragraph$46$42$bind$124$27172 = " 	\n\r";
var mizchi$markdown$$parse_heading_content$46$42$bind$124$27302 = " 	";
var mizchi$markdown$$parse_heading_content$46$42$bind$124$27292 = " 	";
var mizchi$markdown$$try_parse_fenced_code$46$42$bind$124$27492 = " 	";
var mizchi$markdown$$html_block_tags2 = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
var mizchi$markdown$$try_parse_indented_code$46$42$bind$124$27652 = "\n";
var mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28082 = "[ ] ";
var mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28092 = "[x] ";
var mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28102 = "[X] ";
var mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$28842 = " 	\n\r";
var mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$28852 = " 	\n\r";
var mizchi$markdown$$split_table_cells$46$42$bind$124$29002 = " 	\n\r";
var mizchi$markdown$$split_table_cells$46$42$bind$124$29012 = " 	\n\r";
var mizchi$markdown$$parse_table_alignments$46$42$bind$124$29172 = " 	\n\r";
var mizchi$markdown$$parse_table_alignments$46$42$bind$124$29162 = ":";
var mizchi$markdown$$parse_table_alignments$46$42$bind$124$29152 = ":";
var mizchi$markdown$$parse_table_row$46$42$bind$124$29202 = " 	\n\r";
var mizchi$markdown$$try_parse_table$46$42$bind$124$29222 = "|";
var mizchi$markdown$$try_parse_table$46$42$bind$124$29232 = "|";
var mizchi$markdown$$try_parse_table$46$42$bind$124$29242 = "-";
var mizchi$markdown$$try_parse_table$46$42$bind$124$29272 = " 	\n\r";
var mizchi$markdown$$try_parse_table$46$42$bind$124$29262 = "|";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29482 = "\n";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29432 = " 	\n\r";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29302 = "#";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29372 = ":";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29362 = " 	\n\r";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29352 = " 	\n\r";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29312 = '"';
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29322 = '"';
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29332 = "'";
var mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29342 = "'";
var mizchi$markdown$$empty$46$record$47$1277 = { content: "" };
var mizchi$markdown$$try_parse_code_span$46$constr$47$1535 = 32;
var mizchi$markdown$$try_parse_code_span$46$constr$47$1536 = 32;
var mizchi$markdown$$detect_list_marker$46$constr$47$19232 = new $64$mizchi$47$markdown$46$ListMarkerKind$Bullet2(0);
var mizchi$markdown$$detect_list_marker$46$tuple$47$19242 = { _0: mizchi$markdown$$detect_list_marker$46$constr$47$19232, _1: 2 };
var mizchi$markdown$$detect_list_marker$46$constr$47$19252 = mizchi$markdown$$detect_list_marker$46$tuple$47$19242;
var mizchi$markdown$$detect_list_marker$46$constr$47$1926 = new $64$mizchi$47$markdown$46$ListMarkerKind$Bullet2(1);
var mizchi$markdown$$detect_list_marker$46$tuple$47$1927 = { _0: mizchi$markdown$$detect_list_marker$46$constr$47$1926, _1: 2 };
var mizchi$markdown$$detect_list_marker$46$constr$47$1928 = mizchi$markdown$$detect_list_marker$46$tuple$47$1927;
var mizchi$markdown$$detect_list_marker$46$constr$47$1929 = new $64$mizchi$47$markdown$46$ListMarkerKind$Bullet2(2);
var mizchi$markdown$$detect_list_marker$46$tuple$47$1930 = { _0: mizchi$markdown$$detect_list_marker$46$constr$47$1929, _1: 2 };
var mizchi$markdown$$detect_list_marker$46$constr$47$1931 = mizchi$markdown$$detect_list_marker$46$tuple$47$1930;
var mizchi$markdown$$parse_paragraph$46$constr$47$1986 = 96;
var mizchi$markdown$$parse_paragraph$46$constr$47$1987 = 96;
var mizchi$markdown$$parse_paragraph$46$constr$47$1988 = 126;
var mizchi$markdown$$parse_paragraph$46$constr$47$1989 = 126;
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2141 = false;
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2142 = true;
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2143 = false;
var mizchi$markdown$$parse_task_checkbox$46$tuple$47$2144 = { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2143, _1: "" };
var mizchi$markdown$$parse_task_checkbox$46$constr$47$2145 = true;
var mizchi$markdown$$parse_task_checkbox$46$tuple$47$2146 = { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2145, _1: "" };
var mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2160 = 0;
var mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2161 = 1;
var mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2162 = 2;
var mizchi$markdown$$parse_bullet_list$46$constr$47$2209 = 0;
var mizchi$markdown$$parse_bullet_list$46$constr$47$2210 = 1;
var mizchi$markdown$$parse_bullet_list$46$constr$47$2211 = 2;
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24542 = "markdown-editor-island";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24552 = "form-result";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24562 = "success-actions";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2457 = "success-message";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24582 = "action-buttons";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24592 = "btn btn-secondary";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24602 = "btn";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24612 = "editor-form";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24622 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("POST");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2463 = { _0: "method", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24622 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2464 = "form-group";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24652 = "title";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2466 = "text";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24672 = "title";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24682 = "title";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24692 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("true");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2470 = { _0: "required", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24692 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24712 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("\u8A18\u4E8B\u306E\u30BF\u30A4\u30C8\u30EB");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2472 = { _0: "placeholder", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24712 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2473 = "form-group";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24742 = "slug";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2475 = "text";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24762 = "slug";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2477 = "slug";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24782 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("true");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2479 = { _0: "required", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24782 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24802 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("[a-z0-9\\-]+");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$24812 = { _0: "pattern", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24802 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24822 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("my-article-slug");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$24832 = { _0: "placeholder", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24822 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24842 = "form-group";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2485 = "status";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24862 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("status");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$24872 = { _0: "id", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24862 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24882 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("status");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2489 = { _0: "name", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24882 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24902 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("draft");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2491 = { _0: "value", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24902 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24922 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2("published");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2493 = { _0: "value", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$24922 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24942 = "editor-preview-container";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24952 = "preview";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2496 = "editor-pane";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24972 = "content";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2498 = "content";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$24992 = "content";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$25002 = "editor-textarea";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$25012 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3067\u8A18\u4E8B\u3092\u66F8\u304F...");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$25022 = { _0: "placeholder", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$25012 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2503 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("true");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2504 = { _0: "required", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2503 };
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2505 = "form-actions";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2506 = "btn";
var kazuph$blog_admin$client$$markdown_editor$46$constr$47$2507 = new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2("submit");
var kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2508 = { _0: "type", _1: kazuph$blog_admin$client$$markdown_editor$46$constr$47$2507 };
function moonbitlang$core$abort$$abort$0$2(msg) {
  return $panic2();
}
function moonbitlang$core$abort$$abort$1$2(msg) {
  return $panic2();
}
function moonbitlang$core$abort$$abort$2$2(msg) {
  $panic2();
}
function moonbitlang$core$abort$$abort$3$2(msg) {
  return $panic2();
}
function moonbitlang$core$abort$$abort$4$2(msg) {
  return $panic2();
}
function moonbitlang$core$abort$$abort$5$2(msg) {
  return $panic2();
}
function moonbitlang$core$builtin$$Eq$equal$6$2(_x_5248, _x_5249) {
  if (_x_5248 === 0) {
    if (_x_5249 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_5249 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$abort$0$2(string, loc) {
  return moonbitlang$core$abort$$abort$0$2(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$2(loc)}
`);
}
function moonbitlang$core$builtin$$abort$1$2(string, loc) {
  return moonbitlang$core$abort$$abort$1$2(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$2(loc)}
`);
}
function moonbitlang$core$builtin$$abort$2$2(string, loc) {
  moonbitlang$core$abort$$abort$2$2(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$2(loc)}
`);
}
function moonbitlang$core$builtin$$abort$3$2(string, loc) {
  return moonbitlang$core$abort$$abort$3$2(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$2(loc)}
`);
}
function moonbitlang$core$builtin$$abort$4$2(string, loc) {
  return moonbitlang$core$abort$$abort$4$2(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$2(loc)}
`);
}
function moonbitlang$core$builtin$$abort$5$2(string, loc) {
  return moonbitlang$core$abort$$abort$5$2(`${string}
  at ${moonbitlang$core$builtin$$Show$to_string$7$2(loc)}
`);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner2(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$8$2(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair2(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at2(self, index) {
  const c1 = self.charCodeAt(index);
  if (55296 <= c1 && c1 <= 56319) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair2(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$builtin$$op_notequal$6$2(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$6$2(x, y);
}
function moonbitlang$core$builtin$$op_notequal$9$2(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$10$2(x, y);
}
function moonbitlang$core$array$$Array$at$11$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$0$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$12$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$13$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$14$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$15$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$16$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$1$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$17$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$18$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$5$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$array$$Array$at$19$2(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    return self[index];
  } else {
    return $panic2();
  }
}
function moonbitlang$core$builtin$$boyer_moore_horspool_find2(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init2(256, needle_len);
      const _end4418 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end4418) {
          const _tmp$22 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$22.charCodeAt(_tmp$3) & 255;
          $bound_check2(skip_table, _tmp$4);
          skip_table[_tmp$4] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end4424 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end4424) {
              const _p2 = i + j | 0;
              const _tmp$42 = haystack.str;
              const _tmp$52 = haystack.start + _p2 | 0;
              const _tmp$62 = _tmp$42.charCodeAt(_tmp$52);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$62 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _p = (i + needle_len | 0) - 1 | 0;
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + _p | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check2(skip_table, _tmp$6);
          _tmp$2 = i + skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return moonbitlang$core$builtin$$boyer_moore_horspool_find$46$constr$47$812;
  }
}
function moonbitlang$core$builtin$$brute_force_find2(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            let _tmp$3;
            if (i <= forward_len) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return moonbitlang$core$builtin$$brute_force_find$46$constr$47$952;
  }
}
function moonbitlang$core$string$$StringView$find2(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$builtin$$brute_force_find2(self, str) : moonbitlang$core$builtin$$boyer_moore_horspool_find2(self, str);
}
function moonbitlang$core$builtin$$boyer_moore_horspool_rev_find2(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init2(256, needle_len);
      let _tmp = needle_len - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i > 0) {
          const _tmp$22 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$22.charCodeAt(_tmp$3) & 255;
          $bound_check2(skip_table, _tmp$4);
          skip_table[_tmp$4] = i;
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = haystack_len - needle_len | 0;
      while (true) {
        const i = _tmp$2;
        if (i >= 0) {
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j < needle_len) {
              const _p = i + j | 0;
              const _tmp$42 = haystack.str;
              const _tmp$52 = haystack.start + _p | 0;
              const _tmp$62 = _tmp$42.charCodeAt(_tmp$52);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$62 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + i | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check2(skip_table, _tmp$6);
          _tmp$2 = i - skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return haystack_len;
  }
}
function moonbitlang$core$builtin$$brute_force_rev_find2(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      let i = haystack_len - needle_len | 0;
      while (true) {
        if (i >= 0) {
          while (true) {
            let _tmp$3;
            if (i >= 0) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i >= 0) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i - 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return void 0;
    } else {
      return void 0;
    }
  } else {
    return haystack_len;
  }
}
function moonbitlang$core$string$$StringView$rev_find2(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$builtin$$brute_force_rev_find2(self, str) : moonbitlang$core$builtin$$boyer_moore_horspool_rev_find2(self, str);
}
function moonbitlang$core$string$$StringView$view$46$inner2(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$builtin$$abort$0$2("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:111:5-111:36");
}
function moonbitlang$core$builtin$$parse$46$parse_loc$124$10932(view) {
  const _bind = moonbitlang$core$string$$StringView$find2(view, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$53542, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$53542.length });
  if (_bind === void 0) {
    return void 0;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i > 0 && (_i + 1 | 0) < (view.end - view.start | 0) ? { _0: moonbitlang$core$string$$StringView$view$46$inner2(view, 0, _i), _1: moonbitlang$core$string$$StringView$view$46$inner2(view, _i + 1 | 0, void 0) } : void 0;
  }
}
function moonbitlang$core$builtin$$SourceLocRepr$parse2(repr) {
  _L: {
    if (moonbitlang$core$string$$String$char_length_ge$46$inner2(repr, 1, 0, repr.length)) {
      const _x = repr.charCodeAt(0);
      if (_x === 64) {
        const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner2(repr, 1, 0, repr.length);
        let _tmp;
        if (_bind === void 0) {
          _tmp = repr.length;
        } else {
          const _Some = _bind;
          _tmp = _Some;
        }
        const _x$2 = { str: repr, start: _tmp, end: repr.length };
        const _bind$2 = moonbitlang$core$string$$StringView$find2(_x$2, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$53932, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$53932.length });
        if (_bind$2 === void 0) {
          return $panic2();
        } else {
          const _Some = _bind$2;
          const _pkg_end = _Some;
          const pkg = moonbitlang$core$string$$StringView$view$46$inner2(_x$2, 0, _pkg_end);
          const _bind$3 = moonbitlang$core$string$$StringView$rev_find2(_x$2, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$53872, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$53872.length });
          if (_bind$3 === void 0) {
            return $panic2();
          } else {
            const _Some$2 = _bind$3;
            const _start_loc_end = _Some$2;
            if ((_start_loc_end + 1 | 0) < (_x$2.end - _x$2.start | 0)) {
              const end_loc = moonbitlang$core$string$$StringView$view$46$inner2(_x$2, _start_loc_end + 1 | 0, void 0);
              const _bind$4 = moonbitlang$core$builtin$$parse$46$parse_loc$124$10932(end_loc);
              if (_bind$4 === void 0) {
                return $panic2();
              } else {
                const _Some$3 = _bind$4;
                const _x$3 = _Some$3;
                const _end_line = _x$3._0;
                const _end_column = _x$3._1;
                const rest = moonbitlang$core$string$$StringView$view$46$inner2(_x$2, 0, _start_loc_end);
                _L$2: {
                  const _bind$5 = moonbitlang$core$string$$StringView$rev_find2(rest, { str: moonbitlang$core$builtin$$parse$46$42$bind$124$53742, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$53742.length });
                  if (_bind$5 === void 0) {
                    break _L$2;
                  } else {
                    const _Some$4 = _bind$5;
                    const _start_line_end = _Some$4;
                    const _bind$6 = moonbitlang$core$string$$StringView$rev_find2(moonbitlang$core$string$$StringView$view$46$inner2(rest, 0, _start_line_end), { str: moonbitlang$core$builtin$$parse$46$42$bind$124$53682, start: 0, end: moonbitlang$core$builtin$$parse$46$42$bind$124$53682.length });
                    if (_bind$6 === void 0) {
                      break _L$2;
                    } else {
                      const _Some$5 = _bind$6;
                      const _filename_end = _Some$5;
                      if ((_filename_end + 1 | 0) < (rest.end - rest.start | 0)) {
                        const start_loc = moonbitlang$core$string$$StringView$view$46$inner2(rest, _filename_end + 1 | 0, void 0);
                        const _bind$7 = moonbitlang$core$builtin$$parse$46$parse_loc$124$10932(start_loc);
                        if (_bind$7 === void 0) {
                          return $panic2();
                        } else {
                          const _Some$6 = _bind$7;
                          const _x$4 = _Some$6;
                          const _start_line = _x$4._0;
                          const _start_column = _x$4._1;
                          if (_filename_end > (_pkg_end + 1 | 0)) {
                            const filename = moonbitlang$core$string$$StringView$view$46$inner2(rest, _pkg_end + 1 | 0, _filename_end);
                            return { pkg, filename, start_line: _start_line, start_column: _start_column, end_line: _end_line, end_column: _end_column };
                          } else {
                            return $panic2();
                          }
                        }
                      } else {
                        return $panic2();
                      }
                    }
                  }
                }
                return $panic2();
              }
            } else {
              return $panic2();
            }
          }
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return $panic2();
}
function moonbitlang$core$builtin$$Logger$write_string$8$2(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$string$$String$sub$46$inner2(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === void 0) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    let _tmp;
    if (start$2 < len) {
      const _p = self.charCodeAt(start$2);
      _tmp = 56320 <= _p && _p <= 57343;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      return new Result$Err$1$2(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex2);
    }
    let _tmp$2;
    if (end$2 < len) {
      const _p = self.charCodeAt(end$2);
      _tmp$2 = 56320 <= _p && _p <= 57343;
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      return new Result$Err$1$2(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex2);
    }
    return new Result$Ok$1$2({ str: self, start: start$2, end: end$2 });
  } else {
    return new Result$Err$1$2(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds2);
  }
}
function moonbitlang$core$builtin$$Logger$write_substring$20$2(self, value, start, len) {
  let _tmp;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = moonbitlang$core$string$$String$sub$46$inner2(value, start, start + len | 0);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        const _tmp$2 = _err._0;
        _try_err = _tmp$2;
        break _L$2;
      }
      break _L;
    }
    _tmp = $panic2();
  }
  moonbitlang$core$builtin$$Logger$write_view$8$2(self, _tmp);
}
function moonbitlang$core$builtin$$Show$to_string$21$2(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$2, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$2, method_2: moonbitlang$core$builtin$$Logger$write_view$8$2, method_3: moonbitlang$core$builtin$$Logger$write_char$8$2 };
  if (self) {
    _p.method_0(_p.self, "true");
  } else {
    _p.method_0(_p.self, "false");
  }
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$22$2(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  moonbitlang$core$builtin$$Show$output$23$2(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$2, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$2, method_2: moonbitlang$core$builtin$$Logger$write_view$8$2, method_3: moonbitlang$core$builtin$$Logger$write_char$8$2 });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$7$2(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  moonbitlang$core$builtin$$Show$output$24$2(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$2, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$2, method_2: moonbitlang$core$builtin$$Logger$write_view$8$2, method_3: moonbitlang$core$builtin$$Logger$write_char$8$2 });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$25$2(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  moonbitlang$core$builtin$$Show$output$16$2(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$2, method_1: moonbitlang$core$builtin$$Logger$write_substring$20$2, method_2: moonbitlang$core$builtin$$Logger$write_view$8$2, method_3: moonbitlang$core$builtin$$Logger$write_char$8$2 });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner2(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js2(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$0$2(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$builtin$$Iterator$next$26$2(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$11$2(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$18$2(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$0$2(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$next$27$2(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iterator$iter$26$2(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$26$2(self);
      if (_bind === void 0) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iterator$iter$18$2(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$18$2(self);
      if (_bind === void 0) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iterator$iter$11$2(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$11$2(self);
      if (_bind === -1) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iterator$iter$0$2(self) {
  return (yield_) => {
    while (true) {
      const _bind = moonbitlang$core$builtin$$Iterator$next$0$2(self);
      if (_bind === void 0) {
        return 1;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _bind$2 = yield_(_x);
        if (_bind$2 === 1) {
        } else {
          return 0;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$string$$StringView$iterator3(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  const _p = () => {
    if (index.val < end) {
      const _tmp = self.str;
      const _tmp$2 = index.val;
      const c1 = _tmp.charCodeAt(_tmp$2);
      if (55296 <= c1 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const _tmp$3 = self.str;
        const _tmp$4 = index.val + 1 | 0;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (56320 <= c2 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return moonbitlang$core$builtin$$code_point_of_surrogate_pair2(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  };
  return _p;
}
function moonbitlang$core$string$$StringView$iter2(self) {
  return moonbitlang$core$builtin$$Iterator$iter$11$2(moonbitlang$core$string$$StringView$iterator3(self));
}
function moonbitlang$core$builtin$$Iterator2$next$28$2(self) {
  return moonbitlang$core$builtin$$Iterator$next$27$2(self);
}
function moonbitlang$core$builtin$$Iterator2$new$28$2(f) {
  return f;
}
function moonbitlang$core$string$$StringView$iterator22(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  const char_index = { val: 0 };
  return moonbitlang$core$builtin$$Iterator2$new$28$2(() => {
    if (index.val < end) {
      const _tmp = self.str;
      const _tmp$2 = index.val;
      const c1 = _tmp.charCodeAt(_tmp$2);
      if (55296 <= c1 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const _tmp$3 = self.str;
        const _tmp$4 = index.val + 1 | 0;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (56320 <= c2 && c2 <= 57343) {
          const result2 = { _0: char_index.val, _1: moonbitlang$core$builtin$$code_point_of_surrogate_pair2(c1, c2) };
          index.val = index.val + 2 | 0;
          char_index.val = char_index.val + 1 | 0;
          return result2;
        }
      }
      const result = { _0: char_index.val, _1: c1 };
      index.val = index.val + 1 | 0;
      char_index.val = char_index.val + 1 | 0;
      return result;
    } else {
      return void 0;
    }
  });
}
function moonbitlang$core$string$$String$view$46$inner2(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$builtin$$abort$0$2("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:374:5-374:36");
}
function moonbitlang$core$string$$String$char_length_eq$46$inner2(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$2("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:463:9-463:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge$46$inner2(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$2("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:491:9-491:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward2(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (56320 <= c && c <= 57343) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? void 0 : utf16_offset;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward2(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (55296 <= c && c <= 56319) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? void 0 : utf16_offset;
  } else {
    return moonbitlang$core$builtin$$abort$3$2("Invalid start index", "@moonbitlang/core/builtin:string.mbt:366:5-366:33");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char$46$inner2(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === void 0) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward2(self, i, start_offset, end_offset$2) : moonbitlang$core$string$$String$offset_of_nth_char_backward2(self, -i | 0, start_offset, end_offset$2);
}
function moonbitlang$core$builtin$$unsafe_make_string2(_tmp, _tmp$2) {
  return $unsafe_make_string2(_tmp, _tmp$2);
}
function moonbitlang$core$string$$String$make2(length, value) {
  if (length >= 0) {
    if (value <= 65535) {
      return moonbitlang$core$builtin$$unsafe_make_string2(length, value);
    } else {
      const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(Math.imul(2, length) | 0);
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < length) {
          moonbitlang$core$builtin$$Logger$write_char$8$2(buf, value);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return buf.val;
    }
  } else {
    return moonbitlang$core$builtin$$abort$1$2("invalid length", "@moonbitlang/core/builtin:string.mbt:25:28-25:51");
  }
}
function moonbitlang$core$builtin$$Logger$write_view$8$2(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$builtin$$Show$to_string$0$2(str)}`;
}
function moonbitlang$core$builtin$$StringBuilder$reset2(self) {
  self.val = "";
}
function moonbitlang$core$string$$StringView$find_by2(self, pred) {
  const _it = moonbitlang$core$string$$StringView$iterator22(self);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator2$next$28$2(_it);
    if (_bind === void 0) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _i = _x._0;
      const _c = _x._1;
      if (pred(_c)) {
        return _i;
      }
      continue;
    }
  }
  return void 0;
}
function moonbitlang$core$string$$String$find_by2(self, pred) {
  return moonbitlang$core$string$$StringView$find_by2({ str: self, start: 0, end: self.length }, pred);
}
function moonbitlang$core$string$$StringView$has_suffix2(self, str) {
  const _bind = moonbitlang$core$string$$StringView$rev_find2(self, str);
  if (_bind === void 0) {
    return false;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i === ((self.end - self.start | 0) - (str.end - str.start | 0) | 0);
  }
}
function moonbitlang$core$string$$String$has_suffix2(self, str) {
  return moonbitlang$core$string$$StringView$has_suffix2({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$has_prefix2(self, str) {
  const _bind = moonbitlang$core$string$$StringView$find2(self, str);
  if (_bind === void 0) {
    return false;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i === 0;
  }
}
function moonbitlang$core$string$$String$has_prefix2(self, str) {
  return moonbitlang$core$string$$StringView$has_prefix2({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$array$$Array$new$46$inner$11$2(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$push$26$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$29$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$13$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$11$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$30$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$0$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$16$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$31$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$15$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$32$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$14$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$33$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$34$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$18$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$12$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$1$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$35$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$17$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$5$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$array$$Array$push$19$2(self, value) {
  moonbitlang$core$builtin$$JSArray$push2(self, value);
}
function moonbitlang$core$string$$StringView$contains2(self, str) {
  const _bind = moonbitlang$core$string$$StringView$find2(self, str);
  return !(_bind === void 0);
}
function moonbitlang$core$string$$String$contains2(self, str) {
  return moonbitlang$core$string$$StringView$contains2({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$contains_char2(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 <= 65535) {
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < len) {
          const _tmp$2 = self.str;
          const _tmp$3 = self.start + i | 0;
          if (_tmp$2.charCodeAt(_tmp$3) === c$2) {
            return true;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (len >= 2) {
        const adj = c$2 - 65536 | 0;
        const high = 55296 + (adj >> 10) | 0;
        const low = 56320 + (adj & 1023) | 0;
        let i = 0;
        while (true) {
          if (i < (len - 1 | 0)) {
            const _p = i;
            const _tmp = self.str;
            const _tmp$2 = self.start + _p | 0;
            if (_tmp.charCodeAt(_tmp$2) === high) {
              i = i + 1 | 0;
              const _p$2 = i;
              const _tmp$3 = self.str;
              const _tmp$4 = self.start + _p$2 | 0;
              if (_tmp$3.charCodeAt(_tmp$4) === low) {
                return true;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$StringView$trim_start2(self, chars) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq$46$inner2(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at2(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner2(_param.str, 0, _param.start, _param.end));
      const _tmp$2 = _param.str;
      const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner2(_param.str, 1, _param.start, _param.end);
      let _tmp$3;
      if (_bind === void 0) {
        _tmp$3 = _param.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _tmp$4 = _tmp$3;
      const _x = { str: _tmp$2, start: _tmp$4, end: _param.end };
      if (moonbitlang$core$string$$StringView$contains_char2(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$StringView$trim_end$46$inner2(self, chars) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq$46$inner2(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at2(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner2(_param.str, -1, _param.start, _param.end));
      const _x = { str: _param.str, start: _param.start, end: moonbitlang$core$string$$String$offset_of_nth_char$46$inner2(_param.str, -1, _param.start, _param.end) };
      if (moonbitlang$core$string$$StringView$contains_char2(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$String$trim_end$46$inner2(self, chars) {
  return moonbitlang$core$string$$StringView$trim_end$46$inner2({ str: self, start: 0, end: self.length }, chars);
}
function moonbitlang$core$string$$StringView$trim$46$inner2(self, chars) {
  return moonbitlang$core$string$$StringView$trim_end$46$inner2(moonbitlang$core$string$$StringView$trim_start2(self, chars), chars);
}
function moonbitlang$core$string$$String$trim$46$inner2(self, chars) {
  return moonbitlang$core$string$$StringView$trim$46$inner2({ str: self, start: 0, end: self.length }, chars);
}
function moonbitlang$core$string$$StringView$is_empty2(self) {
  return (self.end - self.start | 0) === 0;
}
function moonbitlang$core$string$$String$iterator2(self) {
  const len = self.length;
  const index = { val: 0 };
  const _p = () => {
    if (index.val < len) {
      const _tmp = index.val;
      const c1 = self.charCodeAt(_tmp);
      if (55296 <= c1 && c1 <= 56319 && (index.val + 1 | 0) < len) {
        const _tmp$2 = index.val + 1 | 0;
        const c2 = self.charCodeAt(_tmp$2);
        if (56320 <= c2 && c2 <= 57343) {
          const c = moonbitlang$core$builtin$$code_point_of_surrogate_pair2(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  };
  return _p;
}
function moonbitlang$core$string$$String$iter2(self) {
  return moonbitlang$core$builtin$$Iterator$iter$11$2(moonbitlang$core$string$$String$iterator2(self));
}
function moonbitlang$core$builtin$$Iter$run$26$2(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$run$18$2(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Show$to_string$11$2(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$string$$StringView$split2(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$StringView$iter2(self);
    return (_p2) => _bind((_p$2) => _p2(moonbitlang$core$string$$String$view$46$inner2(moonbitlang$core$builtin$$Show$to_string$11$2(_p$2), 0, void 0)));
  }
  const remaining = { val: self };
  const _p = () => {
    const _bind = remaining.val;
    if (_bind === void 0) {
      return void 0;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = moonbitlang$core$string$$StringView$find2(_view, sep);
      if (_bind$2 === void 0) {
        remaining.val = void 0;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = moonbitlang$core$string$$StringView$view$46$inner2(_view, _end + sep_len | 0, void 0);
        return moonbitlang$core$string$$StringView$view$46$inner2(_view, 0, _end);
      }
    }
  };
  return moonbitlang$core$builtin$$Iterator$iter$0$2(_p);
}
function moonbitlang$core$string$$String$split2(self, sep) {
  return moonbitlang$core$string$$StringView$split2({ str: self, start: 0, end: self.length }, sep);
}
function moonbitlang$core$builtin$$Iter$each$36$2(self, f) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$3$2 };
  self((a) => {
    f(a);
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic2();
      return;
    }
    default: {
      $panic2();
      return;
    }
  }
}
function moonbitlang$core$builtin$$Iter$collect$0$2(self) {
  const result = [];
  moonbitlang$core$builtin$$Iter$each$36$2(self, (e) => {
    moonbitlang$core$array$$Array$push$0$2(result, e);
  });
  return result;
}
function moonbitlang$core$char$$Char$is_ascii_uppercase2(self) {
  return self >= 65 && self <= 90;
}
function moonbitlang$core$string$$String$to_lower2(self) {
  const _bind = moonbitlang$core$string$$String$find_by2(self, (x) => moonbitlang$core$char$$Char$is_ascii_uppercase2(x));
  if (_bind === void 0) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(self.length);
    const head = moonbitlang$core$string$$String$view$46$inner2(self, 0, _idx);
    moonbitlang$core$builtin$$Logger$write_substring$20$2(buf, head.str, head.start, head.end - head.start | 0);
    const _it = moonbitlang$core$string$$StringView$iterator3(moonbitlang$core$string$$String$view$46$inner2(self, _idx, void 0));
    while (true) {
      const _bind$2 = moonbitlang$core$builtin$$Iterator$next$11$2(_it);
      if (_bind$2 === -1) {
        break;
      } else {
        const _Some$2 = _bind$2;
        const _c = _Some$2;
        if (moonbitlang$core$char$$Char$is_ascii_uppercase2(_c)) {
          moonbitlang$core$builtin$$Logger$write_char$8$2(buf, _c + 32 | 0);
        } else {
          moonbitlang$core$builtin$$Logger$write_char$8$2(buf, _c);
        }
        continue;
      }
    }
    return buf.val;
  }
}
function moonbitlang$core$string$$String$get_char2(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (55296 <= c && c <= 56319) {
      if ((idx + 1 | 0) < self.length) {
        const _tmp = idx + 1 | 0;
        const next = self.charCodeAt(_tmp);
        return 56320 <= next && next <= 57343 ? moonbitlang$core$builtin$$code_point_of_surrogate_pair2(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return 56320 <= c && c <= 57343 ? -1 : c;
    }
  } else {
    return -1;
  }
}
function moonbitlang$core$string$$String$to_array2(self) {
  const _p = moonbitlang$core$string$$String$iter2(self);
  const _p$2 = moonbitlang$core$array$$Array$new$46$inner$11$2(self.length);
  const _p$3 = { val: _p$2 };
  const _p$4 = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$2$2 };
  _p((_p$5) => {
    const _p$6 = _p$3.val;
    moonbitlang$core$array$$Array$push$11$2(_p$6, _p$5);
    _p$3.val = _p$6;
    return 1;
  });
  const _tmp = _p$4.val;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _p$5 = _tmp;
      _p$5._0;
      break;
    }
    case 2: {
      const _p$6 = _tmp;
      return _p$6._0;
    }
    case 3: {
      $panic2();
      break;
    }
    default: {
      $panic2();
    }
  }
  return _p$3.val;
}
function moonbitlang$core$builtin$$Show$output$16$2(self, logger) {
  logger.method_0(logger.self, moonbitlang$core$int$$Int$to_string$46$inner2(self, 10));
}
function moonbitlang$core$array$$ArrayView$iterator$26$2(self) {
  const i = { val: 0 };
  const _p = () => {
    if (i.val < (self.end - self.start | 0)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return void 0;
    }
  };
  return _p;
}
function moonbitlang$core$array$$ArrayView$iterator$18$2(self) {
  const i = { val: 0 };
  const _p = () => {
    if (i.val < (self.end - self.start | 0)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return void 0;
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iterator$26$2(self) {
  return moonbitlang$core$array$$ArrayView$iterator$26$2({ buf: self, start: 0, end: self.length });
}
function moonbitlang$core$array$$Array$iterator$18$2(self) {
  return moonbitlang$core$array$$ArrayView$iterator$18$2({ buf: self, start: 0, end: self.length });
}
function moonbitlang$core$array$$Array$iter$26$2(self) {
  return moonbitlang$core$builtin$$Iterator$iter$26$2(moonbitlang$core$array$$Array$iterator$26$2(self));
}
function moonbitlang$core$array$$Array$iter$18$2(self) {
  return moonbitlang$core$builtin$$Iterator$iter$18$2(moonbitlang$core$array$$Array$iterator$18$2(self));
}
function moonbitlang$core$builtin$$Eq$equal$37$2(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$10$2(self, other) {
  if (self === void 0) {
    return other === void 0;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === void 0) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$equal$38$2(_x, _y);
    }
  }
}
function moonbitlang$core$array$$MutArrayView$at$5$2(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check2(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$builtin$$abort$5$2(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$25$2(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$25$2(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:91:5-93:6");
  }
}
function moonbitlang$core$array$$MutArrayView$set$5$2(self, index, value) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check2(_tmp, _tmp$2);
    _tmp[_tmp$2] = value;
    return;
  } else {
    moonbitlang$core$builtin$$abort$2$2(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$25$2(self.end - self.start | 0)} but the index is ${moonbitlang$core$builtin$$Show$to_string$25$2(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:151:5-153:6");
    return;
  }
}
function moonbitlang$core$array$$Array$mut_view$46$inner$5$2(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === void 0) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, end: end$2 } : moonbitlang$core$builtin$$abort$4$2("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:223:5-223:38");
}
function moonbitlang$core$array$$MutArrayView$mut_view$46$inner$5$2(self, start, end) {
  const len = self.end - self.start | 0;
  let end$2;
  if (end === void 0) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self.buf, start: self.start + start$2 | 0, end: (self.start + start$2 | 0) + (end$2 - start$2 | 0) | 0 } : moonbitlang$core$builtin$$abort$4$2("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:270:5-270:38");
}
function moonbitlang$core$builtin$$Iter$any$26$2(self, f) {
  return moonbitlang$core$builtin$$op_notequal$6$2(moonbitlang$core$builtin$$Iter$run$26$2(self, (k) => f(k) ? 0 : 1), 1);
}
function moonbitlang$core$builtin$$Iter$any$18$2(self, f) {
  return moonbitlang$core$builtin$$op_notequal$6$2(moonbitlang$core$builtin$$Iter$run$18$2(self, (k) => f(k) ? 0 : 1), 1);
}
function moonbitlang$core$array$$Array$make$16$2(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$set$16$2(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check2(self, index);
    self[index] = value;
    return;
  } else {
    $panic2();
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$39$2(self, logger) {
  const pkg = self.pkg;
  const _bind = moonbitlang$core$string$$StringView$find2(pkg, { str: moonbitlang$core$builtin$$output$46$42$bind$124$81982, start: 0, end: moonbitlang$core$builtin$$output$46$42$bind$124$81982.length });
  let _bind$2;
  if (_bind === void 0) {
    _bind$2 = { _0: pkg, _1: void 0 };
  } else {
    const _Some = _bind;
    const _first_slash = _Some;
    const _bind$3 = moonbitlang$core$string$$StringView$find2(moonbitlang$core$string$$StringView$view$46$inner2(pkg, _first_slash + 1 | 0, void 0), { str: moonbitlang$core$builtin$$output$46$42$bind$124$81922, start: 0, end: moonbitlang$core$builtin$$output$46$42$bind$124$81922.length });
    if (_bind$3 === void 0) {
      _bind$2 = { _0: pkg, _1: void 0 };
    } else {
      const _Some$2 = _bind$3;
      const _second_slash = _Some$2;
      const module_name_end = (_first_slash + 1 | 0) + _second_slash | 0;
      _bind$2 = { _0: moonbitlang$core$string$$StringView$view$46$inner2(pkg, 0, module_name_end), _1: moonbitlang$core$string$$StringView$view$46$inner2(pkg, module_name_end + 1 | 0, void 0) };
    }
  }
  const _module_name = _bind$2._0;
  const _package_name = _bind$2._1;
  if (_package_name === void 0) {
  } else {
    const _Some = _package_name;
    const _pkg_name = _Some;
    logger.method_2(logger.self, _pkg_name);
    logger.method_3(logger.self, 47);
  }
  logger.method_2(logger.self, self.filename);
  logger.method_3(logger.self, 58);
  logger.method_2(logger.self, self.start_line);
  logger.method_3(logger.self, 58);
  logger.method_2(logger.self, self.start_column);
  logger.method_3(logger.self, 45);
  logger.method_2(logger.self, self.end_line);
  logger.method_3(logger.self, 58);
  logger.method_2(logger.self, self.end_column);
  logger.method_3(logger.self, 64);
  logger.method_2(logger.self, _module_name);
}
function moonbitlang$core$builtin$$Show$output$24$2(self, logger) {
  moonbitlang$core$builtin$$Show$output$39$2(moonbitlang$core$builtin$$SourceLocRepr$parse2(self), logger);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$14$2(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length2(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$2(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length2(self, new_len);
}
function moonbitlang$core$array$$Array$unsafe_pop$19$2(self) {
  return moonbitlang$core$builtin$$JSArray$pop2(self);
}
function moonbitlang$core$array$$Array$pop$19$2(self) {
  if (self.length === 0) {
    return void 0;
  } else {
    const v = moonbitlang$core$array$$Array$unsafe_pop$19$2(self);
    return v;
  }
}
function moonbitlang$core$array$$Array$remove$1$2(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check2(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice2(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$builtin$$abort$1$2(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$25$2(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$25$2(index)}`, "@moonbitlang/core/builtin:arraycore_js.mbt:241:5-243:6");
  }
}
function moonbitlang$core$array$$Array$copy$5$2(self) {
  return moonbitlang$core$builtin$$JSArray$copy2(self);
}
function moonbitlang$core$array$$MutArrayView$swap$5$2(arr, i, j) {
  const temp = moonbitlang$core$array$$MutArrayView$at$5$2(arr, i);
  moonbitlang$core$array$$MutArrayView$set$5$2(arr, i, moonbitlang$core$array$$MutArrayView$at$5$2(arr, j));
  moonbitlang$core$array$$MutArrayView$set$5$2(arr, j, temp);
}
function moonbitlang$core$array$$MutArrayView$slice$5$2(arr, start, end) {
  return moonbitlang$core$array$$MutArrayView$mut_view$46$inner$5$2(arr, start, end);
}
function moonbitlang$core$array$$MutArrayView$rev_in_place$5$2(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = moonbitlang$core$array$$MutArrayView$at$5$2(arr, i);
      moonbitlang$core$array$$MutArrayView$set$5$2(arr, i, moonbitlang$core$array$$MutArrayView$at$5$2(arr, j));
      moonbitlang$core$array$$MutArrayView$set$5$2(arr, j, temp);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_get_limit2(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function moonbitlang$core$builtin$$fixed_bubble_sort_by$5$2(arr, cmp) {
  const _end561 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end561) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$MutArrayView$at$5$2(arr, j - 1 | 0), moonbitlang$core$array$$MutArrayView$at$5$2(arr, j)) > 0) {
          moonbitlang$core$array$$MutArrayView$swap$5$2(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$6832(_env, a, b) {
  const cmp = _env._2;
  const arr = _env._1;
  const swaps = _env._0;
  if (cmp(moonbitlang$core$array$$MutArrayView$at$5$2(arr, a), moonbitlang$core$array$$MutArrayView$at$5$2(arr, b)) > 0) {
    moonbitlang$core$array$$MutArrayView$swap$5$2(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$6842(_env, a, b, c) {
  moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$6832(_env, a, b);
  moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$6832(_env, b, c);
  moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_2$47$6832(_env, a, b);
}
function moonbitlang$core$builtin$$fixed_choose_pivot_by$5$2(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = { val: 0 };
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr, _2: cmp };
    if (len > 50) {
      moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$6842(_env, a - 1 | 0, a, a + 1 | 0);
      moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$6842(_env, b - 1 | 0, b, b + 1 | 0);
      moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$6842(_env, c - 1 | 0, c, c + 1 | 0);
    }
    moonbitlang$core$builtin$$fixed_choose_pivot_by$46$sort_3$47$6842(_env, a, b, c);
  }
  if (swaps.val === 12) {
    moonbitlang$core$array$$MutArrayView$rev_in_place$5$2(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function moonbitlang$core$builtin$$fixed_sift_down_by$5$2(arr, index, cmp) {
  let index$2 = index;
  const len = arr.end - arr.start | 0;
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(moonbitlang$core$array$$MutArrayView$at$5$2(arr, child), moonbitlang$core$array$$MutArrayView$at$5$2(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(moonbitlang$core$array$$MutArrayView$at$5$2(arr, index$2), moonbitlang$core$array$$MutArrayView$at$5$2(arr, child)) >= 0) {
        return void 0;
      }
      moonbitlang$core$array$$MutArrayView$swap$5$2(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_heap_sort_by$5$2(arr, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = (len / 2 | 0) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      moonbitlang$core$builtin$$fixed_sift_down_by$5$2(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i > 0) {
      moonbitlang$core$array$$MutArrayView$swap$5$2(arr, 0, i);
      moonbitlang$core$builtin$$fixed_sift_down_by$5$2(moonbitlang$core$array$$MutArrayView$slice$5$2(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$fixed_partition_by$5$2(arr, cmp, pivot_index) {
  moonbitlang$core$array$$MutArrayView$swap$5$2(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = moonbitlang$core$array$$MutArrayView$at$5$2(arr, (arr.end - arr.start | 0) - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _end550 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _end550) {
      if (cmp(moonbitlang$core$array$$MutArrayView$at$5$2(arr, j), pivot) < 0) {
        if (i !== j) {
          moonbitlang$core$array$$MutArrayView$swap$5$2(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$MutArrayView$swap$5$2(arr, i, (arr.end - arr.start | 0) - 1 | 0);
  return { _0: i, _1: partitioned };
}
function moonbitlang$core$builtin$$fixed_try_bubble_sort_by$5$2(arr, cmp) {
  let tries = 0;
  const _end571 = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _end571) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(moonbitlang$core$array$$MutArrayView$at$5$2(arr, j - 1 | 0), moonbitlang$core$array$$MutArrayView$at$5$2(arr, j)) > 0) {
          sorted = false;
          moonbitlang$core$array$$MutArrayView$swap$5$2(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$builtin$$fixed_quick_sort_by$5$2(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const _p = arr$2;
    const len = _p.end - _p.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        moonbitlang$core$builtin$$fixed_bubble_sort_by$5$2(arr$2, cmp);
      }
      return void 0;
    }
    if (limit$2 === 0) {
      moonbitlang$core$builtin$$fixed_heap_sort_by$5$2(arr$2, cmp);
      return void 0;
    }
    const _bind = moonbitlang$core$builtin$$fixed_choose_pivot_by$5$2(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (moonbitlang$core$builtin$$fixed_try_bubble_sort_by$5$2(arr$2, cmp)) {
        return void 0;
      }
    }
    const _bind$2 = moonbitlang$core$builtin$$fixed_partition_by$5$2(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    const _p$2 = len - _pivot | 0;
    balanced = (_pivot > _p$2 ? _p$2 : _pivot) >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === void 0) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (cmp(_pred, moonbitlang$core$array$$MutArrayView$at$5$2(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, moonbitlang$core$array$$MutArrayView$at$5$2(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = moonbitlang$core$array$$MutArrayView$slice$5$2(arr$2, i, len);
        continue;
      }
    }
    const left = moonbitlang$core$array$$MutArrayView$slice$5$2(arr$2, 0, _pivot);
    const right = moonbitlang$core$array$$MutArrayView$slice$5$2(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      moonbitlang$core$builtin$$fixed_quick_sort_by$5$2(left, cmp, pred$2, limit$2);
      pred$2 = moonbitlang$core$array$$MutArrayView$at$5$2(arr$2, _pivot);
      arr$2 = right;
    } else {
      moonbitlang$core$builtin$$fixed_quick_sort_by$5$2(right, cmp, moonbitlang$core$array$$MutArrayView$at$5$2(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function moonbitlang$core$array$$MutArrayView$sort_by$5$2(self, cmp) {
  moonbitlang$core$builtin$$fixed_quick_sort_by$5$2(self, cmp, void 0, moonbitlang$core$builtin$$fixed_get_limit2(self.end - self.start | 0));
}
function moonbitlang$core$array$$Array$sort_by$5$2(self, cmp) {
  moonbitlang$core$array$$MutArrayView$sort_by$5$2(moonbitlang$core$array$$Array$mut_view$46$inner$5$2(self, 0, void 0), cmp);
}
function moonbitlang$core$array$$Array$clear$14$2(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$14$2(self, 0);
}
function moonbitlang$core$array$$Array$clear$15$2(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$15$2(self, 0);
}
function moonbitlang$core$array$$Array$last$19$2(self) {
  if (self.length === 0) {
    return void 0;
  } else {
    const _last = self[self.length - 1 | 0];
    return _last;
  }
}
function mizchi$js$core$$identity_option$31$2(v) {
  return mizchi$js$core$$is_nullish2(v) ? Option$None$4$2 : new Option$Some$4$2(v);
}
function mizchi$js$browser$dom$$Node$nodeType2(self) {
  return mizchi$js$core$$Any$_get2(self, "nodeType");
}
function mizchi$js$browser$dom$$Node$parentNode2(self) {
  const v = mizchi$js$core$$Any$_get2(self, "parentNode");
  return mizchi$js$core$$identity_option$31$2(v);
}
function mizchi$js$browser$dom$$Node$firstChild2(self) {
  const v = mizchi$js$core$$Any$_get2(self, "firstChild");
  return mizchi$js$core$$identity_option$31$2(v);
}
function mizchi$js$browser$dom$$Node$appendChild2(self, child) {
  return mizchi$js$core$$Any$_call2(self, "appendChild", [child]);
}
function mizchi$js$browser$dom$$Node$removeChild2(self, child) {
  return mizchi$js$core$$Any$_call2(self, "removeChild", [child]);
}
function mizchi$js$browser$dom$$Node$insertBefore2(self, new_node, ref_node) {
  if (ref_node.$tag === 1) {
    const _Some = ref_node;
    const _node = _Some._0;
    return mizchi$js$core$$Any$_call2(self, "insertBefore", [new_node, _node]);
  } else {
    return mizchi$js$core$$Any$_call2(self, "insertBefore", [new_node, mizchi$js$core$$null2()]);
  }
}
function mizchi$js$browser$dom$$Node$setTextContent2(self, content) {
  mizchi$js$core$$Any$_set2(self, "textContent", content);
}
function mizchi$js$browser$dom$$FormEvent$preventDefault2(self) {
  mizchi$js$core$$Any$_call2(self, "preventDefault", []);
}
function mizchi$js$browser$dom$$InputEvent$target2(self) {
  return mizchi$js$core$$Any$_get2(self, "target");
}
function mizchi$js$browser$dom$$Element$setClassName2(self, class_name) {
  mizchi$js$core$$Any$_set2(self, "className", class_name);
}
function mizchi$js$browser$dom$$Element$setAttribute2(self, name, value) {
  mizchi$js$core$$Any$_call2(self, "setAttribute", [name, value]);
}
function mizchi$js$browser$dom$$Element$removeAttribute2(self, name) {
  mizchi$js$core$$Any$_call2(self, "removeAttribute", [name]);
}
function mizchi$js$browser$dom$$Document$createDocumentFragment2(self) {
  return mizchi$js$core$$Any$_call2(self, "createDocumentFragment", []);
}
function mizchi$js$browser$dom$$Document$createComment2(self, data) {
  return mizchi$js$core$$Any$_call2(self, "createComment", [data]);
}
function mizchi$luna$luna$signal$$new_effect_id2() {
  const id = mizchi$luna$luna$signal$$effect_id_counter2.val;
  mizchi$luna$luna$signal$$effect_id_counter2.val = id + 1 | 0;
  return id;
}
function mizchi$luna$luna$signal$$run_cleanups2(cleanups) {
  let _tmp = cleanups.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _func = moonbitlang$core$array$$Array$at$15$2(cleanups, i);
      _func();
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$15$2(cleanups);
}
function mizchi$luna$luna$signal$$set_current_cleanups2(cleanups) {
  const prev = mizchi$luna$luna$signal$$reactive_context2.current_cleanups;
  mizchi$luna$luna$signal$$reactive_context2.current_cleanups = cleanups;
  return prev;
}
function mizchi$luna$luna$signal$$run_with_cleanup_tracking$2$2(cleanups, f) {
  const prev = mizchi$luna$luna$signal$$set_current_cleanups2(new Option$Some$0$2(cleanups));
  f();
  mizchi$luna$luna$signal$$reactive_context2.current_cleanups = prev;
}
function mizchi$luna$luna$signal$$run_with_subscriber$2$2(subscriber, f) {
  const prev = mizchi$luna$luna$signal$$reactive_context2.current_subscriber;
  mizchi$luna$luna$signal$$reactive_context2.current_subscriber = subscriber;
  f();
  mizchi$luna$luna$signal$$reactive_context2.current_subscriber = prev;
}
function mizchi$luna$luna$signal$$create_effect_runner2(fn_, state) {
  const id = mizchi$luna$luna$signal$$new_effect_id2();
  const runner_ref = { val: void 0 };
  const run_effect = () => {
    if (!state.active) {
      return void 0;
    }
    mizchi$luna$luna$signal$$run_cleanups2(state.cleanups);
    const _bind = runner_ref.val;
    if (_bind === void 0) {
      return;
    } else {
      const _Some = _bind;
      const _runner = _Some;
      mizchi$luna$luna$signal$$run_with_subscriber$2$2(_runner, () => {
        mizchi$luna$luna$signal$$run_with_cleanup_tracking$2$2(state.cleanups, fn_);
      });
      return;
    }
  };
  const runner = { id, run: run_effect };
  runner_ref.val = runner;
  const dispose = () => {
    state.active = false;
    mizchi$luna$luna$signal$$run_cleanups2(state.cleanups);
  };
  return { _0: runner, _1: dispose };
}
function mizchi$luna$luna$signal$$register_disposer2(disposer) {
  const _bind = mizchi$luna$luna$signal$$reactive_context2.current_owner;
  if (_bind === void 0) {
    return;
  } else {
    const _Some = _bind;
    const _owner = _Some;
    moonbitlang$core$array$$Array$push$15$2(_owner.disposers, disposer);
    return;
  }
}
function mizchi$luna$luna$signal$$render_effect2(fn_) {
  const state = { active: true, cleanups: [] };
  const _bind = mizchi$luna$luna$signal$$create_effect_runner2(fn_, state);
  const _runner = _bind._0;
  const _dispose = _bind._1;
  const _func = _runner.run;
  _func();
  mizchi$luna$luna$signal$$register_disposer2(_dispose);
  return _dispose;
}
function mizchi$luna$luna$signal$$Signal$get$1$2(self) {
  const _bind = mizchi$luna$luna$signal$$reactive_context2.current_subscriber;
  if (_bind === void 0) {
  } else {
    const _Some = _bind;
    const _subscriber = _Some;
    const already_subscribed = moonbitlang$core$builtin$$Iter$any$26$2(moonbitlang$core$array$$Array$iter$26$2(self.subscribers), (s) => s.id === _subscriber.id);
    if (!already_subscribed) {
      moonbitlang$core$array$$Array$push$26$2(self.subscribers, _subscriber);
    }
  }
  return self.value;
}
function mizchi$luna$luna$signal$$Signal$get$40$2(self) {
  const _bind = mizchi$luna$luna$signal$$reactive_context2.current_subscriber;
  if (_bind === void 0) {
  } else {
    const _Some = _bind;
    const _subscriber = _Some;
    const already_subscribed = moonbitlang$core$builtin$$Iter$any$26$2(moonbitlang$core$array$$Array$iter$26$2(self.subscribers), (s) => s.id === _subscriber.id);
    if (!already_subscribed) {
      moonbitlang$core$array$$Array$push$26$2(self.subscribers, _subscriber);
    }
  }
  return self.value;
}
function mizchi$luna$luna$signal$$Signal$new$1$2(initial) {
  return { value: initial, subscribers: [] };
}
function mizchi$luna$luna$signal$$Signal$new$40$2(initial) {
  return { value: initial, subscribers: [] };
}
function mizchi$luna$luna$signal$$signal$1$2(initial) {
  return mizchi$luna$luna$signal$$Signal$new$1$2(initial);
}
function mizchi$luna$luna$signal$$signal$40$2(initial) {
  return mizchi$luna$luna$signal$$Signal$new$40$2(initial);
}
function mizchi$luna$luna$signal$$is_pending2(id) {
  const _arr = mizchi$luna$luna$signal$$reactive_context2.pending_ids;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const pending_id = _arr[_i];
      if (pending_id === id) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function mizchi$luna$luna$signal$$schedule_effect2(effect) {
  if (mizchi$luna$luna$signal$$reactive_context2.batch_depth > 0) {
    if (!mizchi$luna$luna$signal$$is_pending2(effect.id)) {
      moonbitlang$core$array$$Array$push$16$2(mizchi$luna$luna$signal$$reactive_context2.pending_ids, effect.id);
      moonbitlang$core$array$$Array$push$26$2(mizchi$luna$luna$signal$$reactive_context2.pending_effects, effect);
      return;
    } else {
      return;
    }
  } else {
    const _func = effect.run;
    _func();
    return;
  }
}
function mizchi$luna$luna$signal$$Signal$notify$40$2(self) {
  const _arr = self.subscribers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const subscriber = _arr[_i];
      mizchi$luna$luna$signal$$schedule_effect2(subscriber);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function mizchi$luna$luna$signal$$Signal$notify$1$2(self) {
  const _arr = self.subscribers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const subscriber = _arr[_i];
      mizchi$luna$luna$signal$$schedule_effect2(subscriber);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function mizchi$luna$luna$signal$$Signal$set$40$2(self, new_value) {
  self.value = new_value;
  mizchi$luna$luna$signal$$Signal$notify$40$2(self);
}
function mizchi$luna$luna$signal$$Signal$set$1$2(self, new_value) {
  self.value = new_value;
  mizchi$luna$luna$signal$$Signal$notify$1$2(self);
}
function mizchi$luna$luna$signal$$run_with_owner$41$2(owner, f) {
  const prev = mizchi$luna$luna$signal$$reactive_context2.current_owner;
  mizchi$luna$luna$signal$$reactive_context2.current_owner = owner;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context2.current_owner = prev;
  return result;
}
function mizchi$luna$luna$signal$$run_with_owner$13$2(owner, f) {
  const prev = mizchi$luna$luna$signal$$reactive_context2.current_owner;
  mizchi$luna$luna$signal$$reactive_context2.current_owner = owner;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context2.current_owner = prev;
  return result;
}
function mizchi$luna$luna$signal$$Owner$dispose2(self) {
  if (self.disposed) {
    return void 0;
  }
  self.disposed = true;
  let _tmp = self.children.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      mizchi$luna$luna$signal$$Owner$dispose2(moonbitlang$core$array$$Array$at$14$2(self.children, i));
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = self.disposers.length - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      const _func = moonbitlang$core$array$$Array$at$15$2(self.disposers, i);
      _func();
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = self.cleanups.length - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 0) {
      const _func = moonbitlang$core$array$$Array$at$15$2(self.cleanups, i);
      _func();
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$array$$Array$clear$14$2(self.children);
  moonbitlang$core$array$$Array$clear$15$2(self.disposers);
  moonbitlang$core$array$$Array$clear$15$2(self.cleanups);
  const _bind = self.parent;
  if (_bind === void 0) {
    return;
  } else {
    const _Some = _bind;
    const _p = _Some;
    const _p$2 = _p.children;
    const _p$3 = _p$2.length;
    let _tmp$4 = 0;
    let _tmp$5 = 0;
    while (true) {
      const _p$4 = _tmp$4;
      const _p$5 = _tmp$5;
      if (_p$4 < _p$3) {
        const _p$6 = _p$2[_p$4];
        if (_p$6.id !== self.id) {
          _p$2[_p$5] = _p$6;
          _tmp$4 = _p$4 + 1 | 0;
          _tmp$5 = _p$5 + 1 | 0;
          continue;
        }
        _tmp$4 = _p$4 + 1 | 0;
        continue;
      } else {
        moonbitlang$core$array$$Array$unsafe_truncate_to_length$14$2(_p$2, _p$5);
        return;
      }
    }
  }
}
function mizchi$luna$luna$signal$$Owner$new2(parent) {
  const owner = { id: mizchi$luna$luna$signal$$new_effect_id2(), parent, children: [], cleanups: [], disposers: [], disposed: false };
  if (parent === void 0) {
  } else {
    const _Some = parent;
    const _p = _Some;
    moonbitlang$core$array$$Array$push$14$2(_p.children, owner);
  }
  return owner;
}
function mizchi$luna$luna$signal$$untracked$40$2(f) {
  const prev = mizchi$luna$luna$signal$$reactive_context2.current_subscriber;
  mizchi$luna$luna$signal$$reactive_context2.current_subscriber = void 0;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context2.current_subscriber = prev;
  return result;
}
function mizchi$luna$luna$signal$$untracked$41$2(f) {
  const prev = mizchi$luna$luna$signal$$reactive_context2.current_subscriber;
  mizchi$luna$luna$signal$$reactive_context2.current_subscriber = void 0;
  const result = f();
  mizchi$luna$luna$signal$$reactive_context2.current_subscriber = prev;
  return result;
}
function mizchi$luna$luna$signal$$create_root_with_dispose$13$2(f) {
  const owner = mizchi$luna$luna$signal$$Owner$new2(mizchi$luna$luna$signal$$reactive_context2.current_owner);
  const dispose = () => {
    mizchi$luna$luna$signal$$Owner$dispose2(owner);
  };
  const result = mizchi$luna$luna$signal$$run_with_owner$13$2(owner, f);
  return { _0: result, _1: dispose };
}
function mizchi$luna$luna$signal$$with_parent_owner$41$2(captured_owner, f) {
  if (captured_owner === void 0) {
    return f();
  } else {
    const _Some = captured_owner;
    const _parent = _Some;
    return mizchi$luna$luna$signal$$run_with_owner$41$2(_parent, f);
  }
}
function mizchi$luna$luna$dom$element$$text_node2(content) {
  const doc = mizchi$js$browser$dom$$document2();
  const initial = content();
  const node = mizchi$js$browser$dom$$Document$createTextNode2(doc, initial);
  mizchi$luna$luna$signal$$render_effect2(() => {
    const new_content = content();
    mizchi$js$browser$dom$$Node$setTextContent2(node, new_content);
  });
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt2(node);
}
function mizchi$luna$luna$dom$element$$text_from_signal$1$2(sig) {
  return mizchi$luna$luna$dom$element$$text_node2(() => mizchi$luna$luna$signal$$Signal$get$1$2(sig));
}
function mizchi$luna$luna$dom$element$$apply_static_attr2(elem, name, value) {
  if (name === "className" || name === "class") {
    mizchi$js$browser$dom$$Element$setClassName2(elem, value);
    return;
  } else {
    if (name === "__innerHTML") {
      mizchi$js$core$$Any$_set2(elem, "innerHTML", value);
      return;
    } else {
      if (name === "value") {
        mizchi$js$core$$Any$_set2(elem, "value", value);
        return;
      } else {
        if (name === "checked") {
          mizchi$js$core$$Any$_set2(elem, "checked", value === "true");
          return;
        } else {
          if (name === "disabled") {
            if (value === "true") {
              mizchi$js$browser$dom$$Element$setAttribute2(elem, "disabled", "");
              return;
            } else {
              mizchi$js$browser$dom$$Element$removeAttribute2(elem, "disabled");
              return;
            }
          } else {
            mizchi$js$browser$dom$$Element$setAttribute2(elem, name, value);
            return;
          }
        }
      }
    }
  }
}
function mizchi$luna$luna$dom$element$$apply_style_string2(elem, style) {
  mizchi$js$browser$dom$$Element$setAttribute2(elem, "style", style);
}
function mizchi$luna$luna$dom$element$$apply_attribute2(elem, name, value) {
  switch (value.$tag) {
    case 0: {
      const _Static = value;
      const _s = _Static._0;
      if (name === "style") {
        mizchi$luna$luna$dom$element$$apply_style_string2(elem, _s);
        return;
      } else {
        mizchi$luna$luna$dom$element$$apply_static_attr2(elem, name, _s);
        return;
      }
    }
    case 1: {
      const _Dynamic = value;
      const _getter = _Dynamic._0;
      mizchi$luna$luna$signal$$render_effect2(() => {
        const new_value = _getter();
        if (name === "style") {
          mizchi$luna$luna$dom$element$$apply_style_string2(elem, new_value);
          return;
        } else {
          mizchi$luna$luna$dom$element$$apply_static_attr2(elem, name, new_value);
          return;
        }
      });
      return;
    }
    default: {
      const _Handler = value;
      const _handler = _Handler._0;
      if (name === "__ref") {
        _handler(elem);
        return;
      } else {
        mizchi$luna$luna$dom$element$$apply_event_handler2(elem, name, _handler);
        return;
      }
    }
  }
}
function mizchi$luna$luna$dom$element$$DomElement$from_dom2(elem) {
  return { inner: elem };
}
function mizchi$luna$luna$dom$element$$DomNode$to_dom2(self) {
  switch (self.$tag) {
    case 0: {
      const _El = self;
      const _elem = _El._0;
      return _elem.inner;
    }
    case 1: {
      const _Txt = self;
      const _text = _Txt._0;
      return _text;
    }
    case 2: {
      const _Raw = self;
      return _Raw._0;
    }
    default: {
      const _Static = self;
      return _Static._0;
    }
  }
}
function mizchi$luna$luna$dom$element$$create_element2(tag, attrs, children) {
  const doc = mizchi$js$browser$dom$$document2();
  const elem = mizchi$js$browser$dom$$Document$createElement2(doc, tag);
  const _len = attrs.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const attr = attrs[_i];
      const _name = attr._0;
      const _value = attr._1;
      mizchi$luna$luna$dom$element$$apply_attribute2(elem, _name, _value);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _len$2 = children.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const child = children[_i];
      mizchi$js$browser$dom$$Node$appendChild2(elem, mizchi$luna$luna$dom$element$$DomNode$to_dom2(child));
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$El2(mizchi$luna$luna$dom$element$$DomElement$from_dom2(elem));
}
function mizchi$luna$luna$dom$element$$mount(container, n) {
  mizchi$js$browser$dom$$Node$appendChild2(container.inner, mizchi$luna$luna$dom$element$$DomNode$to_dom2(n));
}
function mizchi$luna$luna$dom$element$$clear(container) {
  mizchi$js$browser$dom$$Node$setTextContent2(container.inner, "");
}
function mizchi$luna$luna$dom$element$$render(container, n) {
  mizchi$luna$luna$dom$element$$clear(container);
  mizchi$luna$luna$dom$element$$mount(container, n);
}
function mizchi$luna$luna$dom$element$$collect_child_nodes2(node) {
  if (mizchi$js$browser$dom$$Node$nodeType2(node) === 11) {
    const children = [];
    while (true) {
      const _bind = mizchi$js$browser$dom$$Node$firstChild2(node);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _child = _Some._0;
        moonbitlang$core$array$$Array$push$31$2(children, _child);
        mizchi$js$browser$dom$$Node$removeChild2(node, _child);
        continue;
      } else {
        break;
      }
    }
    return children;
  } else {
    return [node];
  }
}
function mizchi$luna$luna$dom$element$$fragment2(children) {
  const _bind = children.length;
  switch (_bind) {
    case 0: {
      const doc = mizchi$js$browser$dom$$document2();
      const frag = mizchi$js$browser$dom$$Document$createDocumentFragment2(doc);
      return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2(frag);
    }
    case 1: {
      return moonbitlang$core$array$$Array$at$13$2(children, 0);
    }
    default: {
      const doc$2 = mizchi$js$browser$dom$$document2();
      const frag$2 = mizchi$js$browser$dom$$Document$createDocumentFragment2(doc$2);
      const _len = children.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = children[_i];
          mizchi$js$browser$dom$$Node$appendChild2(frag$2, mizchi$luna$luna$dom$element$$DomNode$to_dom2(child));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2(frag$2);
    }
  }
}
function mizchi$luna$luna$dom$element$$show$46$render_with_scope$124$14072(_env) {
  const render_fn = _env._2;
  const current_dispose = _env._1;
  const captured_owner = _env._0;
  return mizchi$luna$luna$signal$$with_parent_owner$41$2(captured_owner, () => {
    const _bind = mizchi$luna$luna$signal$$create_root_with_dispose$13$2(() => render_fn());
    const _dom = _bind._0;
    const _dispose = _bind._1;
    current_dispose.val = _dispose;
    return mizchi$luna$luna$dom$element$$collect_child_nodes2(mizchi$luna$luna$dom$element$$DomNode$to_dom2(_dom));
  });
}
function mizchi$luna$luna$dom$element$$show2(when, render_fn) {
  const doc = mizchi$js$browser$dom$$document2();
  const placeholder = mizchi$js$browser$dom$$Document$createComment2(doc, "show");
  const captured_owner = mizchi$luna$luna$signal$$reactive_context2.current_owner;
  const current_dispose = { val: void 0 };
  const _env = { _0: captured_owner, _1: current_dispose, _2: render_fn };
  const initial_show = mizchi$luna$luna$signal$$untracked$40$2(() => when());
  const initial_nodes = initial_show ? mizchi$luna$luna$signal$$untracked$41$2(() => mizchi$luna$luna$dom$element$$show$46$render_with_scope$124$14072(_env)) : [];
  const current_nodes = { val: initial_nodes };
  const is_first_run = { val: true };
  mizchi$luna$luna$signal$$render_effect2(() => {
    const should_show = when();
    const has_nodes = current_nodes.val.length > 0;
    if (is_first_run.val) {
      is_first_run.val = false;
      return void 0;
    }
    if (should_show === true) {
      if (has_nodes === false) {
        const _bind = mizchi$js$browser$dom$$Node$parentNode2(placeholder);
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _parent = _Some._0;
          const nodes = mizchi$luna$luna$signal$$untracked$41$2(() => mizchi$luna$luna$dom$element$$show$46$render_with_scope$124$14072(_env));
          const _len = nodes.length;
          let _tmp = 0;
          while (true) {
            const _i = _tmp;
            if (_i < _len) {
              const node = nodes[_i];
              mizchi$js$browser$dom$$Node$insertBefore2(_parent, node, new Option$Some$4$2(placeholder));
              _tmp = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          current_nodes.val = nodes;
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      if (has_nodes === true) {
        const _bind = current_dispose.val;
        if (_bind === void 0) {
        } else {
          const _Some = _bind;
          const _dispose = _Some;
          _dispose();
          current_dispose.val = void 0;
        }
        const _arr = current_nodes.val;
        const _len = _arr.length;
        let _tmp = 0;
        while (true) {
          const _i = _tmp;
          if (_i < _len) {
            const node = _arr[_i];
            const _bind$2 = mizchi$js$browser$dom$$Node$parentNode2(node);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _parent = _Some._0;
              mizchi$js$browser$dom$$Node$removeChild2(_parent, node);
            }
            _tmp = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        current_nodes.val = [];
        return;
      } else {
        return;
      }
    }
  });
  if (initial_nodes.length > 0) {
    const all_nodes = [];
    const _len = initial_nodes.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const node = initial_nodes[_i];
        moonbitlang$core$array$$Array$push$13$2(all_nodes, new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2(node));
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$push$13$2(all_nodes, new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2(placeholder));
    return mizchi$luna$luna$dom$element$$fragment2(all_nodes);
  } else {
    return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Raw2(placeholder);
  }
}
function mizchi$luna$luna$dom$element$$ToDomNode$to_dom_node$1$2(self) {
  const doc = mizchi$js$browser$dom$$document2();
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$DomNode$Txt2(mizchi$js$browser$dom$$Document$createTextNode2(doc, self));
}
function mizchi$luna$luna$dom$element$$double_to_string2(d) {
  const any = d;
  return mizchi$js$core$$Any$_call2(any, "toString", []);
}
function moonbitlang$core$builtin$$Show$output$23$2(self, logger) {
  switch (self.$tag) {
    case 0: {
      const _AttrString = self;
      const _s = _AttrString._0;
      logger.method_0(logger.self, _s);
      return;
    }
    case 1: {
      const _AttrNumber = self;
      const _d = _AttrNumber._0;
      logger.method_0(logger.self, mizchi$luna$luna$dom$element$$double_to_string2(_d));
      return;
    }
    case 2: {
      const _AttrInt = self;
      const _i = _AttrInt._0;
      logger.method_0(logger.self, moonbitlang$core$int$$Int$to_string$46$inner2(_i, 10));
      return;
    }
    default: {
      const _AttrBool = self;
      const _b = _AttrBool._0;
      logger.method_0(logger.self, moonbitlang$core$builtin$$Show$to_string$21$2(_b));
      return;
    }
  }
}
function mizchi$luna$luna$dom$element$$Attr$to_attr_value2(self) {
  return new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(moonbitlang$core$builtin$$Show$to_string$22$2(self));
}
function mizchi$luna$luna$dom$element$$events2() {
  return mizchi$js$core$$new_object2();
}
function mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs) {
  const result = [];
  if (id === void 0) {
  } else {
    const _Some = id;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(result, { _0: "id", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (class_ === void 0) {
  } else {
    const _Some = class_;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(result, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (style === void 0) {
  } else {
    const _Some = style;
    const _s = _Some;
    moonbitlang$core$array$$Array$push$29$2(result, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_s) });
  }
  if (on.$tag === 1) {
    const _Some = on;
    const _handlers = _Some._0;
    const _arr = mizchi$luna$luna$dom$element$$HandlerMap$to_attrs2(_handlers);
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const attr = _arr[_i];
        moonbitlang$core$array$$Array$push$29$2(result, attr);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (ref_ === void 0) {
  } else {
    const _Some = ref_;
    const _cb = _Some;
    const handler = (el) => {
      _cb(el);
    };
    moonbitlang$core$array$$Array$push$29$2(result, { _0: "__ref", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler2(handler) });
  }
  if (attrs.$tag === 1) {
    const _Some = attrs;
    const _extra = _Some._0;
    const _len = _extra.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const pair = _extra[_i];
        moonbitlang$core$array$$Array$push$29$2(result, { _0: pair._0, _1: mizchi$luna$luna$dom$element$$Attr$to_attr_value2(pair._1) });
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (dyn_attrs.$tag === 1) {
    const _Some = dyn_attrs;
    const _extra = _Some._0;
    const _len = _extra.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const pair = _extra[_i];
        moonbitlang$core$array$$Array$push$29$2(result, pair);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return result;
}
function mizchi$luna$luna$dom$element$$div2(id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("div", props, children);
}
function mizchi$luna$luna$dom$element$$span2(id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("span", props, children);
}
function mizchi$luna$luna$dom$element$$button2(disabled, id, class_, style, dyn_class, dyn_style, dyn_disabled, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (disabled === -1) {
  } else {
    const _Some = disabled;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$2(props, mizchi$luna$luna$dom$element$$button$46$tuple$47$1121);
    }
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_disabled === void 0) {
  } else {
    const _Some = dyn_disabled;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "disabled", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(() => moonbitlang$core$builtin$$Show$to_string$21$2(_getter())) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("button", props, children);
}
function mizchi$luna$luna$dom$element$$input2(type_, name, value, placeholder, disabled, readonly_, required, checked, id, class_, style, dyn_class, dyn_style, dyn_value, dyn_disabled, dyn_checked, on, ref_, attrs, dyn_attrs) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (type_ === void 0) {
  } else {
    const _Some = type_;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "type", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (name === void 0) {
  } else {
    const _Some = name;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "name", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (value === void 0) {
  } else {
    const _Some = value;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "value", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (placeholder === void 0) {
  } else {
    const _Some = placeholder;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "placeholder", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (disabled === -1) {
  } else {
    const _Some = disabled;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$2(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$11442);
    }
  }
  if (readonly_ === -1) {
  } else {
    const _Some = readonly_;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$2(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1146);
    }
  }
  if (required === -1) {
  } else {
    const _Some = required;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$2(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1148);
    }
  }
  if (checked === -1) {
  } else {
    const _Some = checked;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$2(props, mizchi$luna$luna$dom$element$$input$46$tuple$47$1150);
    }
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_value === void 0) {
  } else {
    const _Some = dyn_value;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "value", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_disabled === void 0) {
  } else {
    const _Some = dyn_disabled;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "disabled", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(() => moonbitlang$core$builtin$$Show$to_string$21$2(_getter())) });
  }
  if (dyn_checked === void 0) {
  } else {
    const _Some = dyn_checked;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "checked", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(() => moonbitlang$core$builtin$$Show$to_string$21$2(_getter())) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("input", props, []);
}
function mizchi$luna$luna$dom$element$$textarea2(name, placeholder, disabled, id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (name === void 0) {
  } else {
    const _Some = name;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "name", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (placeholder === void 0) {
  } else {
    const _Some = placeholder;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "placeholder", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (disabled === -1) {
  } else {
    const _Some = disabled;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$array$$Array$push$29$2(props, mizchi$luna$luna$dom$element$$textarea$46$tuple$47$1199);
    }
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("textarea", props, children);
}
function mizchi$luna$luna$dom$element$$form2(action, http_method, id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (action === void 0) {
  } else {
    const _Some = action;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "action", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (http_method === void 0) {
  } else {
    const _Some = http_method;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "method", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("form", props, children);
}
function mizchi$luna$luna$dom$element$$label2(for_, id, class_, style, dyn_class, dyn_style, on, ref_, attrs, dyn_attrs, children) {
  const props = mizchi$luna$luna$dom$element$$build_props$46$inner2(id, class_, style, on, ref_, attrs, dyn_attrs);
  if (for_ === void 0) {
  } else {
    const _Some = for_;
    const _v = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "for", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(_v) });
  }
  if (dyn_class === void 0) {
  } else {
    const _Some = dyn_class;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "className", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  if (dyn_style === void 0) {
  } else {
    const _Some = dyn_style;
    const _getter = _Some;
    moonbitlang$core$array$$Array$push$29$2(props, { _0: "style", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(_getter) });
  }
  return mizchi$luna$luna$dom$element$$create_element2("label", props, children);
}
function mizchi$luna$luna$dom$element$$text2(content) {
  return mizchi$luna$luna$dom$element$$ToDomNode$to_dom_node$1$2(content);
}
function mizchi$luna$luna$dom$element$$text_of$1$2(sig) {
  return mizchi$luna$luna$dom$element$$text_from_signal$1$2(sig);
}
function mizchi$luna$sol$action$$ActionOptions$default2() {
  return { headers: [], timeout: void 0, signal: Option$None$5$2 };
}
function mizchi$luna$sol$action$$invoke_action2(url, payload, callback, options) {
  const _p = mizchi$luna$sol$action$$ActionOptions$default2();
  let opts;
  if (options === void 0) {
    opts = _p;
  } else {
    const _p$2 = options;
    opts = _p$2;
  }
  mizchi$luna$sol$action$$ffi_invoke_action_cb2(url, payload, callback, opts);
}
function moonbitlang$core$builtin$$Eq$equal$42$2(_x_1792, _x_1793) {
  if (_x_1792 === 0) {
    if (_x_1793 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1793 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Eq$equal$38$2(_x_1752, _x_1753) {
  switch (_x_1752) {
    case 0: {
      if (_x_1753 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1753 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1753 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function mizchi$markdown$$Span$new2(from, to) {
  return { from, to };
}
function mizchi$markdown$$Trivia$new2(content) {
  return { content };
}
function mizchi$markdown$$Scanner$new2(source) {
  const chars = moonbitlang$core$string$$String$to_array2(source);
  const len = chars.length;
  const has_non_bmp = source.length !== len;
  let utf16_offsets;
  if (has_non_bmp) {
    const offsets = moonbitlang$core$array$$Array$make$16$2(len + 1 | 0, 0);
    let utf16_pos = 0;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        moonbitlang$core$array$$Array$set$16$2(offsets, i, utf16_pos);
        const _p = moonbitlang$core$array$$Array$at$11$2(chars, i);
        if (_p > 65535) {
          utf16_pos = utf16_pos + 2 | 0;
        } else {
          utf16_pos = utf16_pos + 1 | 0;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$array$$Array$set$16$2(offsets, len, utf16_pos);
    utf16_offsets = new Option$Some$6$2(offsets);
  } else {
    utf16_offsets = Option$None$6$2;
  }
  return { source, chars, pos: 0, len, utf16_offsets };
}
function mizchi$markdown$$Scanner$to_utf16_index2(self, cp_index) {
  const _bind = self.utf16_offsets;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _offsets = _Some._0;
    return moonbitlang$core$array$$Array$at$16$2(_offsets, cp_index);
  } else {
    return cp_index;
  }
}
function mizchi$markdown$$Scanner$peek2(self) {
  return self.pos >= self.len ? -1 : moonbitlang$core$array$$Array$at$11$2(self.chars, self.pos);
}
function mizchi$markdown$$Scanner$peek_at2(self, offset) {
  const idx = self.pos + offset | 0;
  return idx >= self.len || idx < 0 ? -1 : moonbitlang$core$array$$Array$at$11$2(self.chars, idx);
}
function mizchi$markdown$$Scanner$advance2(self, n) {
  self.pos = self.pos + n | 0;
  if (self.pos > self.len) {
    self.pos = self.len;
    return;
  } else {
    return;
  }
}
function mizchi$markdown$$Scanner$consume2(self) {
  if (self.pos >= self.len) {
    return -1;
  } else {
    const c = moonbitlang$core$array$$Array$at$11$2(self.chars, self.pos);
    self.pos = self.pos + 1 | 0;
    return c;
  }
}
function mizchi$markdown$$Scanner$substring2(self, start, end) {
  const clamped_start = start < 0 ? 0 : start > self.len ? self.len : start;
  const clamped_end = end < 0 ? 0 : end > self.len ? self.len : end;
  if (clamped_start >= clamped_end) {
    return "";
  } else {
    const utf16_start = mizchi$markdown$$Scanner$to_utf16_index2(self, clamped_start);
    const utf16_end = mizchi$markdown$$Scanner$to_utf16_index2(self, clamped_end);
    return self.source.substring(utf16_start, utf16_end);
  }
}
function mizchi$markdown$$Scanner$skip_spaces2(self) {
  const start = self.pos;
  while (true) {
    if (self.pos < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$2(self.chars, self.pos);
      if (c === 32 || c === 9) {
        self.pos = self.pos + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return self.pos - start | 0;
}
function mizchi$markdown$$Scanner$count_leading_spaces2(self) {
  let count = 0;
  let idx = self.pos;
  while (true) {
    if (idx < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$2(self.chars, idx);
      if (c === 32) {
        count = count + 1 | 0;
        idx = idx + 1 | 0;
      } else {
        if (c === 9) {
          count = Math.imul((count / 4 | 0) + 1 | 0, 4) | 0;
          idx = idx + 1 | 0;
        } else {
          break;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return count;
}
function mizchi$markdown$$Scanner$read_line2(self) {
  const start = self.pos;
  while (true) {
    if (self.pos < self.len) {
      if (moonbitlang$core$array$$Array$at$11$2(self.chars, self.pos) === 10) {
        break;
      }
      self.pos = self.pos + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const utf16_start = mizchi$markdown$$Scanner$to_utf16_index2(self, start);
  const utf16_end = mizchi$markdown$$Scanner$to_utf16_index2(self, self.pos);
  return self.source.substring(utf16_start, utf16_end);
}
function mizchi$markdown$$Scanner$skip_line2(self) {
  while (true) {
    if (self.pos < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$2(self.chars, self.pos);
      self.pos = self.pos + 1 | 0;
      if (c === 10) {
        break;
      }
      continue;
    } else {
      return;
    }
  }
}
function mizchi$markdown$$Scanner$is_blank_line2(self) {
  let idx = self.pos;
  while (true) {
    if (idx < self.len) {
      const c = moonbitlang$core$array$$Array$at$11$2(self.chars, idx);
      if (c === 10) {
        return true;
      }
      if (c !== 32 && c !== 9) {
        return false;
      }
      idx = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function mizchi$markdown$$Scanner$matches2(self, s) {
  const s_len = s.length;
  if ((self.pos + s_len | 0) > self.len) {
    return false;
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < s_len) {
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char2(s, i);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _b = _Some;
            if (moonbitlang$core$array$$Array$at$11$2(self.chars, self.pos + i | 0) === _b) {
              break _L;
            } else {
              break _L$2;
            }
          }
        }
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function mizchi$markdown$$Scanner$count_char2(self, c) {
  let count = 0;
  let idx = self.pos;
  while (true) {
    if (idx < self.len) {
      if (moonbitlang$core$array$$Array$at$11$2(self.chars, idx) === c) {
        count = count + 1 | 0;
        idx = idx + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return count;
}
function mizchi$markdown$$Scanner$restore2(self, pos) {
  self.pos = pos;
}
function mizchi$markdown$$is_punctuation2(c) {
  switch (c) {
    case 33: {
      return true;
    }
    case 34: {
      return true;
    }
    case 35: {
      return true;
    }
    case 36: {
      return true;
    }
    case 37: {
      return true;
    }
    case 38: {
      return true;
    }
    case 39: {
      return true;
    }
    case 40: {
      return true;
    }
    case 41: {
      return true;
    }
    case 42: {
      return true;
    }
    case 43: {
      return true;
    }
    case 44: {
      return true;
    }
    case 45: {
      return true;
    }
    case 46: {
      return true;
    }
    case 47: {
      return true;
    }
    case 58: {
      return true;
    }
    case 59: {
      return true;
    }
    case 60: {
      return true;
    }
    case 61: {
      return true;
    }
    case 62: {
      return true;
    }
    case 63: {
      return true;
    }
    case 64: {
      return true;
    }
    case 91: {
      return true;
    }
    case 92: {
      return true;
    }
    case 93: {
      return true;
    }
    case 94: {
      return true;
    }
    case 95: {
      return true;
    }
    case 96: {
      return true;
    }
    case 123: {
      return true;
    }
    case 124: {
      return true;
    }
    case 125: {
      return true;
    }
    case 126: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function mizchi$markdown$$char_is_digit2(opt) {
  if (opt === -1) {
    return false;
  } else {
    const _Some = opt;
    const _c = _Some;
    return _c >= 48 && _c <= 57;
  }
}
function mizchi$markdown$$escape_html2(s) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const _it = moonbitlang$core$string$$String$iterator2(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$2(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      switch (_c) {
        case 38: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&amp;");
          break;
        }
        case 60: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&lt;");
          break;
        }
        case 62: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&gt;");
          break;
        }
        case 34: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&quot;");
          break;
        }
        default: {
          moonbitlang$core$builtin$$Logger$write_char$8$2(buf, _c);
        }
      }
      continue;
    }
  }
  return buf.val;
}
function mizchi$markdown$$escape_html_attr2(s) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const _it = moonbitlang$core$string$$String$iterator2(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$2(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      switch (_c) {
        case 38: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&amp;");
          break;
        }
        case 60: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&lt;");
          break;
        }
        case 62: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&gt;");
          break;
        }
        case 34: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&quot;");
          break;
        }
        case 39: {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "&#39;");
          break;
        }
        default: {
          moonbitlang$core$builtin$$Logger$write_char$8$2(buf, _c);
        }
      }
      continue;
    }
  }
  return buf.val;
}
function mizchi$markdown$$render_inlines_html2(inlines, buf) {
  const _len = inlines.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const inline = inlines[_i];
      mizchi$markdown$$render_inline_html2(inline, buf);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function mizchi$markdown$$render_inline_html2(inline, buf) {
  switch (inline.$tag) {
    case 0: {
      const _Text = inline;
      const _content = _Text._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_content));
      return;
    }
    case 6: {
      const _Code = inline;
      const _content$2 = _Code._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<code>");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_content$2));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</code>");
      return;
    }
    case 3: {
      const _Emphasis = inline;
      const _children = _Emphasis._1;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<em>");
      mizchi$markdown$$render_inlines_html2(_children, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</em>");
      return;
    }
    case 4: {
      const _Strong = inline;
      const _children$2 = _Strong._1;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<strong>");
      mizchi$markdown$$render_inlines_html2(_children$2, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</strong>");
      return;
    }
    case 5: {
      const _Strikethrough = inline;
      const _children$3 = _Strikethrough._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<del>");
      mizchi$markdown$$render_inlines_html2(_children$3, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</del>");
      return;
    }
    case 7: {
      const _Link = inline;
      const _children$4 = _Link._0;
      const _url = _Link._1;
      const _title = _Link._2;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<a href="');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_url));
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 34);
      if (!(_title === "")) {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ' title="');
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_title));
        moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 34);
      }
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 62);
      mizchi$markdown$$render_inlines_html2(_children$4, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</a>");
      return;
    }
    case 8: {
      const _RefLink = inline;
      const _children$5 = _RefLink._0;
      const _label = _RefLink._1;
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 91);
      mizchi$markdown$$render_inlines_html2(_children$5, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "][");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_label));
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 93);
      return;
    }
    case 9: {
      const _Autolink = inline;
      const _url$2 = _Autolink._0;
      const _is_email = _Autolink._1;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<a href="');
      if (_is_email) {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "mailto:");
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_url$2));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '">');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_url$2));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</a>");
      return;
    }
    case 10: {
      const _Image = inline;
      const _alt = _Image._0;
      const _url$3 = _Image._1;
      const _title$2 = _Image._2;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<img src="');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_url$3));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '" alt="');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_alt));
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 34);
      if (!(_title$2 === "")) {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ' title="');
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_title$2));
        moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 34);
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ">");
      return;
    }
    case 11: {
      const _RefImage = inline;
      const _alt$2 = _RefImage._0;
      const _label$2 = _RefImage._1;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "![");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_alt$2));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "][");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_label$2));
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 93);
      return;
    }
    case 12: {
      const _HtmlInline = inline;
      const _html = _HtmlInline._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, _html);
      return;
    }
    case 1: {
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 10);
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<br>\n");
      return;
    }
    default: {
      const _FootnoteReference = inline;
      const _label$3 = _FootnoteReference._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<sup><a href="#fn-');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_label$3));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '" id="fnref-');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html_attr2(_label$3));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '">');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_label$3));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</a></sup>");
      return;
    }
  }
}
function mizchi$markdown$$render_table_cell_html2(cell, buf, tag, align) {
  moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 60);
  moonbitlang$core$builtin$$Logger$write_string$8$2(buf, tag);
  switch (align) {
    case 0: {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ' align="left"');
      break;
    }
    case 1: {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ' align="center"');
      break;
    }
    case 2: {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ' align="right"');
      break;
    }
  }
  moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 62);
  mizchi$markdown$$render_inlines_html2(cell.children, buf);
  moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</");
  moonbitlang$core$builtin$$Logger$write_string$8$2(buf, tag);
  moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ">\n");
}
function mizchi$markdown$$render_block_html2(block, buf) {
  switch (block.$tag) {
    case 2: {
      const _Paragraph = block;
      const _children = _Paragraph._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<p>");
      mizchi$markdown$$render_inlines_html2(_children, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</p>\n");
      return;
    }
    case 1: {
      const _Heading = block;
      const _level = _Heading._0;
      const _children$2 = _Heading._2;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<h");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, moonbitlang$core$int$$Int$to_string$46$inner2(_level, 10));
      moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 62);
      mizchi$markdown$$render_inlines_html2(_children$2, buf);
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</h");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, moonbitlang$core$int$$Int$to_string$46$inner2(_level, 10));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, ">\n");
      return;
    }
    case 0: {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<hr>\n");
      return;
    }
    case 3: {
      const _FencedCode = block;
      const _info = _FencedCode._2;
      const _code = _FencedCode._3;
      if (_info === "") {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<pre><code>");
      } else {
        const parts = moonbitlang$core$builtin$$Iter$collect$0$2(moonbitlang$core$string$$String$split2(_info, { str: mizchi$markdown$$render_block_html$46$42$bind$124$21872, start: 0, end: mizchi$markdown$$render_block_html$46$42$bind$124$21872.length }));
        const lang = parts.length > 0 ? moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$array$$Array$at$0$2(parts, 0)) : _info;
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<pre><code class="language-');
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(lang));
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '">');
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_code));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</code></pre>\n");
      return;
    }
    case 4: {
      const _IndentedCode = block;
      const _code$2 = _IndentedCode._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<pre><code>");
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_code$2));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</code></pre>\n");
      return;
    }
    case 5: {
      const _Blockquote = block;
      const _children$3 = _Blockquote._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<blockquote>\n");
      const _len = _children$3.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = _children$3[_i];
          mizchi$markdown$$render_block_html2(child, buf);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</blockquote>\n");
      return;
    }
    case 6: {
      const _BulletList = block;
      const _items = _BulletList._2;
      const _tight = _BulletList._1;
      const has_task = moonbitlang$core$builtin$$Iter$any$18$2(moonbitlang$core$array$$Array$iter$18$2(_items), (item) => {
        const _bind = item.checked;
        return !(_bind === -1);
      });
      if (has_task) {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<ul class="contains-task-list">\n');
      } else {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<ul>\n");
      }
      const _len$2 = _items.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const item = _items[_i];
          mizchi$markdown$$render_list_item_html2(item, buf, _tight, has_task);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</ul>\n");
      return;
    }
    case 7: {
      const _OrderedList = block;
      const _items$2 = _OrderedList._3;
      const _start = _OrderedList._0;
      const _tight$2 = _OrderedList._2;
      const has_task$2 = moonbitlang$core$builtin$$Iter$any$18$2(moonbitlang$core$array$$Array$iter$18$2(_items$2), (item) => {
        const _bind = item.checked;
        return !(_bind === -1);
      });
      if (_start === 1) {
        if (has_task$2) {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<ol class="contains-task-list">\n');
        } else {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<ol>\n");
        }
      } else {
        if (has_task$2) {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<ol class="contains-task-list" start="');
        } else {
          moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<ol start="');
        }
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, moonbitlang$core$int$$Int$to_string$46$inner2(_start, 10));
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '">\n');
      }
      const _len$3 = _items$2.length;
      let _tmp$3 = 0;
      while (true) {
        const _i = _tmp$3;
        if (_i < _len$3) {
          const item = _items$2[_i];
          mizchi$markdown$$render_list_item_html2(item, buf, _tight$2, has_task$2);
          _tmp$3 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</ol>\n");
      return;
    }
    case 8: {
      const _HtmlBlock = block;
      const _html = _HtmlBlock._0;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, _html);
      if (!moonbitlang$core$string$$String$has_suffix2(_html, { str: mizchi$markdown$$render_block_html$46$42$bind$124$22002, start: 0, end: mizchi$markdown$$render_block_html$46$42$bind$124$22002.length })) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 10);
        return;
      } else {
        return;
      }
    }
    case 9: {
      const _Table = block;
      const _header = _Table._0;
      const _alignments = _Table._1;
      const _rows = _Table._2;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<table>\n<thead>\n<tr>\n");
      const _len$4 = _header.length;
      let _tmp$4 = 0;
      while (true) {
        const _i = _tmp$4;
        if (_i < _len$4) {
          const cell = _header[_i];
          const align = _i < _alignments.length ? moonbitlang$core$array$$Array$at$12$2(_alignments, _i) : 3;
          mizchi$markdown$$render_table_cell_html2(cell, buf, "th", align);
          _tmp$4 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</tr>\n</thead>\n");
      if (_rows.length > 0) {
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<tbody>\n");
        const _len$5 = _rows.length;
        let _tmp$5 = 0;
        while (true) {
          const _i = _tmp$5;
          if (_i < _len$5) {
            const row = _rows[_i];
            moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<tr>\n");
            const _len$6 = row.length;
            let _tmp$6 = 0;
            while (true) {
              const _i$2 = _tmp$6;
              if (_i$2 < _len$6) {
                const cell = row[_i$2];
                const align = _i$2 < _alignments.length ? moonbitlang$core$array$$Array$at$12$2(_alignments, _i$2) : 3;
                mizchi$markdown$$render_table_cell_html2(cell, buf, "td", align);
                _tmp$6 = _i$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</tr>\n");
            _tmp$5 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</tbody>\n");
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</table>\n");
      return;
    }
    case 10: {
      return;
    }
    default: {
      const _FootnoteDefinition = block;
      const _label = _FootnoteDefinition._0;
      const _children$4 = _FootnoteDefinition._1;
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<div class="footnote" id="fn-');
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, mizchi$markdown$$escape_html2(_label));
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '">\n');
      const _len$5 = _children$4.length;
      let _tmp$5 = 0;
      while (true) {
        const _i = _tmp$5;
        if (_i < _len$5) {
          const child = _children$4[_i];
          mizchi$markdown$$render_block_html2(child, buf);
          _tmp$5 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</div>\n");
      return;
    }
  }
}
function mizchi$markdown$$render_list_item_html2(item, buf, tight, is_task_list) {
  let _tmp;
  if (is_task_list) {
    const _bind2 = item.checked;
    _tmp = !(_bind2 === -1);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<li class="task-list-item">');
  } else {
    moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "<li>");
  }
  const _bind = item.checked;
  if (_bind === -1) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === true) {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<input type="checkbox" checked disabled> ');
    } else {
      moonbitlang$core$builtin$$Logger$write_string$8$2(buf, '<input type="checkbox" disabled> ');
    }
  }
  if (tight) {
    const _arr = item.children;
    const _len = _arr.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const child = _arr[_i];
        if (child.$tag === 2) {
          const _Paragraph = child;
          const _children = _Paragraph._0;
          mizchi$markdown$$render_inlines_html2(_children, buf);
        } else {
          mizchi$markdown$$render_block_html2(child, buf);
        }
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 10);
    const _arr = item.children;
    const _len = _arr.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const child = _arr[_i];
        mizchi$markdown$$render_block_html2(child, buf);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  moonbitlang$core$builtin$$Logger$write_string$8$2(buf, "</li>\n");
}
function mizchi$markdown$$render_html2(doc) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const _arr = doc.children;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const block = _arr[_i];
      mizchi$markdown$$render_block_html2(block, buf);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function mizchi$markdown$$BlockParser$new2(scanner, strict) {
  return { scanner, definitions: [], strict };
}
function mizchi$markdown$$InlineParser$new2(scanner) {
  return { scanner };
}
function mizchi$markdown$$trim_trailing_space_from_last_text2(inlines) {
  if (inlines.length > 0) {
    const _bind = moonbitlang$core$array$$Array$at$19$2(inlines, inlines.length - 1 | 0);
    if (_bind.$tag === 0) {
      const _Text = _bind;
      const _content = _Text._0;
      const _span = _Text._1;
      const len = _content.length;
      if (len > 0) {
        const _tmp = len - 1 | 0;
        if (_content.charCodeAt(_tmp) === 32) {
          let end = len - 1 | 0;
          while (true) {
            let _tmp$2;
            if (end > 0) {
              const _tmp$3 = end - 1 | 0;
              _tmp$2 = _content.charCodeAt(_tmp$3) === 32;
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              end = end - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          moonbitlang$core$array$$Array$pop$19$2(inlines);
          if (end > 0) {
            moonbitlang$core$array$$Array$push$19$2(inlines, new $64$mizchi$47$markdown$46$Inline$Text2(_content.substring(0, end), _span));
            return;
          } else {
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function mizchi$markdown$$InlineParser$try_parse_autolink2(self, start) {
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let is_email = false;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 62: {
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                const url = url_buf.val;
                if (moonbitlang$core$string$$String$contains2(url, { str: mizchi$markdown$$try_parse_autolink$46$42$bind$124$22782, start: 0, end: mizchi$markdown$$try_parse_autolink$46$42$bind$124$22782.length }) && !moonbitlang$core$string$$String$has_prefix2(url, { str: mizchi$markdown$$try_parse_autolink$46$42$bind$124$22792, start: 0, end: mizchi$markdown$$try_parse_autolink$46$42$bind$124$22792.length })) {
                  is_email = true;
                }
                return new $64$mizchi$47$markdown$46$Inline$Autolink2(url, is_email, mizchi$markdown$$Span$new2(start, self.scanner.pos));
              }
              case 32: {
                break _L$2;
              }
              case 9: {
                break _L$2;
              }
              case 10: {
                break _L$2;
              }
              default: {
                moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _x);
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              }
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, start);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$is_all_spaces2(s) {
  const _it = moonbitlang$core$string$$String$iterator2(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$2(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (_c !== 32) {
        return false;
      }
      continue;
    }
  }
  return true;
}
function mizchi$markdown$$InlineParser$try_parse_code_span2(self, start) {
  const backtick_count = mizchi$markdown$$Scanner$count_char2(self.scanner, 96);
  if (backtick_count === 0) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, backtick_count);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const closing_count = mizchi$markdown$$Scanner$count_char2(self.scanner, 96);
      if (closing_count === backtick_count) {
        const content = content_buf.val;
        mizchi$markdown$$Scanner$advance2(self.scanner, closing_count);
        let trimmed;
        if (content.length >= 2) {
          const first = moonbitlang$core$string$$String$get_char2(content, 0);
          const last = moonbitlang$core$string$$String$get_char2(content, content.length - 1 | 0);
          trimmed = moonbitlang$core$builtin$$Eq$equal$37$2(first, mizchi$markdown$$try_parse_code_span$46$constr$47$1535) && (moonbitlang$core$builtin$$Eq$equal$37$2(last, mizchi$markdown$$try_parse_code_span$46$constr$47$1536) && !mizchi$markdown$$is_all_spaces2(content)) ? content.substring(1, content.length - 1 | 0) : content;
        } else {
          trimmed = content;
        }
        return new $64$mizchi$47$markdown$46$Inline$Code2(trimmed, backtick_count, mizchi$markdown$$Span$new2(start, self.scanner.pos));
      } else {
        if (closing_count > 0) {
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < closing_count) {
              moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 96);
              _tmp = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          mizchi$markdown$$Scanner$advance2(self.scanner, closing_count);
        } else {
          const _bind = mizchi$markdown$$Scanner$consume2(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _c = _Some;
            moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, _c);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$contains_link2(inlines) {
  const _len = inlines.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const inline = inlines[_i];
      let children;
      _L: {
        _L$2: {
          _L$3: {
            _L$4: {
              switch (inline.$tag) {
                case 7: {
                  break _L$4;
                }
                case 8: {
                  break _L$4;
                }
                case 3: {
                  const _Emphasis = inline;
                  const _children = _Emphasis._1;
                  children = _children;
                  break _L$2;
                }
                case 4: {
                  const _Strong = inline;
                  const _children$2 = _Strong._1;
                  children = _children$2;
                  break _L$2;
                }
                case 5: {
                  const _Strikethrough = inline;
                  const _children$3 = _Strikethrough._0;
                  children = _children$3;
                  break _L$2;
                }
              }
              break _L$3;
            }
            return true;
          }
          break _L;
        }
        if (mizchi$markdown$$contains_link2(children)) {
          return true;
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function mizchi$markdown$$InlineParser$try_parse_escape2(self, start) {
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  _L: {
    const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
    if (_bind === -1) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 10) {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        while (true) {
          const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
          const _p$2 = 32;
          let _tmp;
          if (_p === -1) {
            _tmp = false;
          } else {
            const _p$3 = _p;
            const _p$4 = _p$3;
            _tmp = _p$4 === _p$2;
          }
          if (_tmp) {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            continue;
          } else {
            break;
          }
        }
        return new $64$mizchi$47$markdown$46$Inline$HardBreak2(1, mizchi$markdown$$Span$new2(start, self.scanner.pos));
      } else {
        if (mizchi$markdown$$is_punctuation2(_x)) {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          return new $64$mizchi$47$markdown$46$Inline$Text2(moonbitlang$core$string$$String$make2(1, _x), mizchi$markdown$$Span$new2(start, self.scanner.pos));
        } else {
          break _L;
        }
      }
    }
  }
  return new $64$mizchi$47$markdown$46$Inline$Text2("\\", mizchi$markdown$$Span$new2(start, self.scanner.pos));
}
function mizchi$markdown$$InlineParser$try_parse_footnote_reference2(self, start) {
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 94;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p$32 = self.scanner;
    if (!(_p$32.pos >= _p$32.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 93) {
              break;
            } else {
              if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || (_x >= 48 && _x <= 57 || (_x === 45 || _x === 95)))) {
                moonbitlang$core$builtin$$Logger$write_char$8$2(label_buf, _x);
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              } else {
                break _L$2;
              }
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, start);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  const label = label_buf.val;
  if (label === "") {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 93;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    _tmp$2 = _p$6 === _p$4;
  }
  if (!_tmp$2) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  return new $64$mizchi$47$markdown$46$Inline$FootnoteReference2(label, mizchi$markdown$$Span$new2(start, self.scanner.pos));
}
function mizchi$markdown$$InlineParser$try_parse_hard_break2(self, start) {
  const space_count = mizchi$markdown$$Scanner$count_char2(self.scanner, 32);
  if (space_count < 2) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, space_count);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    while (true) {
      const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
      const _p$4 = 32;
      let _tmp$2;
      if (_p$3 === -1) {
        _tmp$2 = false;
      } else {
        const _p$5 = _p$3;
        const _p$6 = _p$5;
        _tmp$2 = _p$6 === _p$4;
      }
      if (_tmp$2) {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        continue;
      } else {
        break;
      }
    }
    return new $64$mizchi$47$markdown$46$Inline$HardBreak2(0, mizchi$markdown$$Span$new2(start, self.scanner.pos));
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$InlineParser$try_parse_image2(self, start) {
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 91;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const alt_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  _L: while (true) {
    const _p$32 = self.scanner;
    if (!(_p$32.pos >= _p$32.len)) {
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 93: {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            break _L;
          }
          case 92: {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            const _bind$2 = mizchi$markdown$$Scanner$consume2(self.scanner);
            if (_bind$2 === -1) {
              break _L;
            } else {
              const _Some$2 = _bind$2;
              const _c = _Some$2;
              moonbitlang$core$builtin$$Logger$write_char$8$2(alt_buf, _c);
            }
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$8$2(alt_buf, _x);
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  const alt = alt_buf.val;
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 40;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$2 = _p$62 === _p$4;
  }
  if (_tmp$2) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
    const _p$52 = mizchi$markdown$$Scanner$peek2(self.scanner);
    const _p$62 = 60;
    let _tmp$32;
    if (_p$52 === -1) {
      _tmp$32 = false;
    } else {
      const _p$72 = _p$52;
      const _p$82 = _p$72;
      _tmp$32 = _p$82 === _p$62;
    }
    if (_tmp$32) {
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      while (true) {
        const _p$72 = self.scanner;
        if (!(_p$72.pos >= _p$72.len)) {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 62) {
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              break;
            } else {
              moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _x);
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            }
          }
          continue;
        } else {
          break;
        }
      }
    } else {
      while (true) {
        const _p$72 = self.scanner;
        if (!(_p$72.pos >= _p$72.len)) {
          _L$2: {
            _L$3: {
              const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
              if (_bind === -1) {
                break;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 41: {
                    break _L$3;
                  }
                  case 32: {
                    break _L$3;
                  }
                  case 9: {
                    break _L$3;
                  }
                  default: {
                    moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _x);
                    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                  }
                }
              }
              break _L$2;
            }
            break;
          }
          continue;
        } else {
          break;
        }
      }
    }
    const url = url_buf.val;
    mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
    let title;
    _L$2: {
      _L$3: {
        const _bind2 = mizchi$markdown$$Scanner$peek2(self.scanner);
        if (_bind2 === -1) {
          title = "";
        } else {
          const _Some = _bind2;
          const _x = _Some;
          switch (_x) {
            case 34: {
              break _L$3;
            }
            case 39: {
              break _L$3;
            }
            default: {
              title = "";
            }
          }
        }
        break _L$2;
      }
      const _bind = mizchi$markdown$$Scanner$consume2(self.scanner);
      const quote = _bind === -1 ? 34 : _bind;
      const title_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
      while (true) {
        const _p$72 = self.scanner;
        if (!(_p$72.pos >= _p$72.len)) {
          const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind$2 === -1) {
            break;
          } else {
            const _Some = _bind$2;
            const _c = _Some;
            if (_c === quote) {
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              break;
            } else {
              moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf, _c);
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            }
          }
          continue;
        } else {
          break;
        }
      }
      title = title_buf.val;
    }
    mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
    const _p$7 = mizchi$markdown$$Scanner$peek2(self.scanner);
    const _p$8 = 41;
    let _tmp$4;
    if (_p$7 === -1) {
      _tmp$4 = false;
    } else {
      const _p$9 = _p$7;
      const _p$10 = _p$9;
      _tmp$4 = _p$10 === _p$8;
    }
    if (_tmp$4) {
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      return new $64$mizchi$47$markdown$46$Inline$Image2(alt, url, title, mizchi$markdown$$Span$new2(start, self.scanner.pos));
    }
  }
  const _p$5 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$6 = 91;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$7 = _p$5;
    const _p$8 = _p$7;
    _tmp$3 = _p$8 === _p$6;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    while (true) {
      const _p$7 = self.scanner;
      if (!(_p$7.pos >= _p$7.len)) {
        const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          if (_x === 93) {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            break;
          } else {
            moonbitlang$core$builtin$$Logger$write_char$8$2(label_buf, _x);
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          }
        }
        continue;
      } else {
        break;
      }
    }
    return new $64$mizchi$47$markdown$46$Inline$RefImage2(alt, label_buf.val, mizchi$markdown$$Span$new2(start, self.scanner.pos));
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$InlineParser$try_parse_strikethrough2(self, start) {
  if (mizchi$markdown$$Scanner$count_char2(self.scanner, 126) < 2) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 2);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const content_start = self.scanner.pos;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      if (mizchi$markdown$$Scanner$count_char2(self.scanner, 126) >= 2) {
        const content = content_buf.val;
        if (content === "") {
          mizchi$markdown$$Scanner$restore2(self.scanner, start);
          return void 0;
        }
        mizchi$markdown$$Scanner$advance2(self.scanner, 2);
        const children = [new $64$mizchi$47$markdown$46$Inline$Text2(content, mizchi$markdown$$Span$new2(content_start, self.scanner.pos - 2 | 0))];
        return new $64$mizchi$47$markdown$46$Inline$Strikethrough2(children, mizchi$markdown$$Span$new2(start, self.scanner.pos));
      }
      const _bind = mizchi$markdown$$Scanner$consume2(self.scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 10) {
          break;
        } else {
          moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, _x);
        }
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$is_unicode_punctuation2(c) {
  const code = c;
  return code >= 33 && code <= 47 || (code >= 58 && code <= 64 || (code >= 91 && code <= 96 || code >= 123 && code <= 126));
}
function mizchi$markdown$$is_unicode_whitespace2(c) {
  return c === 32 || (c === 9 || (c === 10 || (c === 13 || c === 12)));
}
function mizchi$markdown$$parse_inlines$46$inner2(text, strict) {
  return strict ? mizchi$markdown$$parse_inlines_with_delimiter_stack2(text) : mizchi$markdown$$parse_inlines_fast2(text);
}
function mizchi$markdown$$parse_inlines_fast2(text) {
  const scanner = mizchi$markdown$$Scanner$new2(text);
  const parser = mizchi$markdown$$InlineParser$new2(scanner);
  return mizchi$markdown$$InlineParser$parse2(parser);
}
function mizchi$markdown$$InlineParser$parse2(self) {
  const inlines = [];
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const _bind = mizchi$markdown$$InlineParser$parse_inline2(self);
      if (_bind === void 0) {
        const start = self.scanner.pos;
        const _bind$2 = mizchi$markdown$$Scanner$consume2(self.scanner);
        if (_bind$2 === -1) {
          break;
        } else {
          const _Some = _bind$2;
          const _c = _Some;
          const text = moonbitlang$core$string$$String$make2(1, _c);
          _L: {
            _L$2: {
              const _bind$3 = moonbitlang$core$array$$Array$last$19$2(inlines);
              if (_bind$3 === void 0) {
                break _L$2;
              } else {
                const _Some$2 = _bind$3;
                const _x = _Some$2;
                if (_x.$tag === 0) {
                  const _Text = _x;
                  const _content = _Text._0;
                  const _span = _Text._1;
                  moonbitlang$core$array$$Array$pop$19$2(inlines);
                  moonbitlang$core$array$$Array$push$19$2(inlines, new $64$mizchi$47$markdown$46$Inline$Text2(`${_content}${text}`, mizchi$markdown$$Span$new2(_span.from, self.scanner.pos)));
                } else {
                  break _L$2;
                }
              }
              break _L;
            }
            moonbitlang$core$array$$Array$push$19$2(inlines, new $64$mizchi$47$markdown$46$Inline$Text2(text, mizchi$markdown$$Span$new2(start, self.scanner.pos)));
          }
        }
      } else {
        const _Some = _bind;
        const _inline = _Some;
        _L: {
          _L$2: {
            switch (_inline.$tag) {
              case 1: {
                break _L$2;
              }
              case 2: {
                break _L$2;
              }
            }
            break _L;
          }
          mizchi$markdown$$trim_trailing_space_from_last_text2(inlines);
        }
        moonbitlang$core$array$$Array$push$19$2(inlines, _inline);
      }
      continue;
    } else {
      break;
    }
  }
  return inlines;
}
function mizchi$markdown$$InlineParser$parse_inline2(self) {
  const start = self.scanner.pos;
  _L: {
    const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
    if (_bind === -1) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 92: {
          return mizchi$markdown$$InlineParser$try_parse_escape2(self, start);
        }
        case 96: {
          return mizchi$markdown$$InlineParser$try_parse_code_span2(self, start);
        }
        case 42: {
          return mizchi$markdown$$InlineParser$try_parse_emphasis2(self, start, 42);
        }
        case 95: {
          return mizchi$markdown$$InlineParser$try_parse_emphasis2(self, start, 95);
        }
        case 126: {
          return mizchi$markdown$$InlineParser$try_parse_strikethrough2(self, start);
        }
        case 91: {
          const _p = mizchi$markdown$$Scanner$peek_at2(self.scanner, 1);
          const _p$2 = 94;
          let _tmp;
          if (_p === -1) {
            _tmp = false;
          } else {
            const _p$3 = _p;
            const _p$4 = _p$3;
            _tmp = _p$4 === _p$2;
          }
          if (_tmp) {
            const _bind$2 = mizchi$markdown$$InlineParser$try_parse_footnote_reference2(self, start);
            if (_bind$2 === void 0) {
              return mizchi$markdown$$InlineParser$try_parse_link2(self, start);
            } else {
              const _Some$2 = _bind$2;
              const _fn_ref = _Some$2;
              return _fn_ref;
            }
          } else {
            return mizchi$markdown$$InlineParser$try_parse_link2(self, start);
          }
        }
        case 33: {
          return mizchi$markdown$$InlineParser$try_parse_image2(self, start);
        }
        case 60: {
          return mizchi$markdown$$InlineParser$try_parse_autolink2(self, start);
        }
        case 32: {
          return mizchi$markdown$$InlineParser$try_parse_hard_break2(self, start);
        }
        case 10: {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          while (true) {
            const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
            const _p$4 = 32;
            let _tmp$2;
            if (_p$3 === -1) {
              _tmp$2 = false;
            } else {
              const _p$5 = _p$3;
              const _p$6 = _p$5;
              _tmp$2 = _p$6 === _p$4;
            }
            if (_tmp$2) {
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              continue;
            } else {
              break;
            }
          }
          return new $64$mizchi$47$markdown$46$Inline$SoftBreak2(mizchi$markdown$$Span$new2(start, self.scanner.pos));
        }
        default: {
          break _L;
        }
      }
    }
  }
  return void 0;
}
function mizchi$markdown$$InlineParser$try_parse_emphasis2(self, start, marker_char) {
  const marker_count = mizchi$markdown$$Scanner$count_char2(self.scanner, marker_char);
  if (marker_count === 0) {
    return void 0;
  }
  const is_strong = marker_count >= 2;
  const consume_count = is_strong ? 2 : 1;
  mizchi$markdown$$Scanner$advance2(self.scanner, consume_count);
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 32: {
            break _L$2;
          }
          case 9: {
            break _L$2;
          }
          case 10: {
            break _L$2;
          }
        }
      }
      break _L;
    }
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  const children = mizchi$markdown$$InlineParser$parse_until_closing_marker2(self, marker_char, consume_count);
  if (children.length === 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  const marker = marker_char === 42 ? 0 : 1;
  return is_strong ? new $64$mizchi$47$markdown$46$Inline$Strong2(marker, children, mizchi$markdown$$Span$new2(start, self.scanner.pos)) : new $64$mizchi$47$markdown$46$Inline$Emphasis2(marker, children, mizchi$markdown$$Span$new2(start, self.scanner.pos));
}
function mizchi$markdown$$InlineParser$parse_until_closing_marker2(self, marker_char, marker_count) {
  const children = [];
  const text_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const text_start = self.scanner.pos;
  _L: while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const closing_count = mizchi$markdown$$Scanner$count_char2(self.scanner, marker_char);
      if (closing_count >= marker_count) {
        const prev_char = mizchi$markdown$$Scanner$peek_at2(self.scanner, -1);
        _L$2: {
          _L$3: {
            if (prev_char === -1) {
              break _L$3;
            } else {
              const _Some = prev_char;
              const _x = _Some;
              switch (_x) {
                case 32: {
                  break;
                }
                case 9: {
                  break;
                }
                case 10: {
                  break;
                }
                default: {
                  break _L$3;
                }
              }
            }
            break _L$2;
          }
          if (!(text_buf.val === "")) {
            moonbitlang$core$array$$Array$push$19$2(children, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(text_start, self.scanner.pos)));
          }
          mizchi$markdown$$Scanner$advance2(self.scanner, marker_count);
          return children;
        }
      }
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 96: {
            if (!(text_buf.val === "")) {
              moonbitlang$core$array$$Array$push$19$2(children, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(text_start, self.scanner.pos)));
            }
            const nested_start = self.scanner.pos;
            const _bind$22 = mizchi$markdown$$InlineParser$try_parse_code_span2(self, nested_start);
            if (_bind$22 === void 0) {
            } else {
              const _Some$2 = _bind$22;
              const _code = _Some$2;
              moonbitlang$core$array$$Array$push$19$2(children, _code);
              continue _L;
            }
            break;
          }
          case 91: {
            if (!(text_buf.val === "")) {
              moonbitlang$core$array$$Array$push$19$2(children, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(text_start, self.scanner.pos)));
            }
            const nested_start$2 = self.scanner.pos;
            const _bind$3 = mizchi$markdown$$InlineParser$try_parse_link2(self, nested_start$2);
            if (_bind$3 === void 0) {
            } else {
              const _Some$2 = _bind$3;
              const _link = _Some$2;
              moonbitlang$core$array$$Array$push$19$2(children, _link);
              continue _L;
            }
            break;
          }
          case 10: {
            break _L;
          }
        }
      }
      const _bind$2 = mizchi$markdown$$Scanner$consume2(self.scanner);
      if (_bind$2 === -1) {
        break;
      } else {
        const _Some = _bind$2;
        const _c = _Some;
        moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, _c);
      }
      continue;
    } else {
      break;
    }
  }
  return [];
}
function mizchi$markdown$$InlineParser$try_parse_link2(self, start) {
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const text_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let bracket_depth = 1;
  _L: while (true) {
    let _tmp2;
    const _p2 = self.scanner;
    if (!(_p2.pos >= _p2.len)) {
      _tmp2 = bracket_depth > 0;
    } else {
      _tmp2 = false;
    }
    if (_tmp2) {
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 91: {
            bracket_depth = bracket_depth + 1 | 0;
            moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 91);
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            break;
          }
          case 93: {
            bracket_depth = bracket_depth - 1 | 0;
            if (bracket_depth > 0) {
              moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 93);
            }
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            break;
          }
          case 92: {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            const _bind$2 = mizchi$markdown$$Scanner$consume2(self.scanner);
            if (_bind$2 === -1) {
              break _L;
            } else {
              const _Some$2 = _bind$2;
              const _c = _Some$2;
              moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, _c);
            }
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, _x);
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  const link_text = text_buf.val;
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 40;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    let paren_depth = 1;
    mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
    const _p$32 = mizchi$markdown$$Scanner$peek2(self.scanner);
    const _p$42 = 60;
    let _tmp$22;
    if (_p$32 === -1) {
      _tmp$22 = false;
    } else {
      const _p$52 = _p$32;
      const _p$62 = _p$52;
      _tmp$22 = _p$62 === _p$42;
    }
    if (_tmp$22) {
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      let angle_url_has_newline = false;
      _L$2: while (true) {
        const _p$52 = self.scanner;
        if (!(_p$52.pos >= _p$52.len)) {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 62: {
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                break _L$2;
              }
              case 10: {
                angle_url_has_newline = true;
                break _L$2;
              }
              default: {
                moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _x);
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
      if (angle_url_has_newline) {
        mizchi$markdown$$Scanner$restore2(self.scanner, start);
        return void 0;
      }
    } else {
      let url_has_newline = false;
      _L$2: while (true) {
        const _p$52 = self.scanner;
        if (!(_p$52.pos >= _p$52.len)) {
          _L$3: {
            _L$4: {
              const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
              if (_bind === -1) {
                break;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 40: {
                    paren_depth = paren_depth + 1 | 0;
                    moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, 40);
                    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                    break;
                  }
                  case 41: {
                    paren_depth = paren_depth - 1 | 0;
                    if (paren_depth === 0) {
                      break _L$2;
                    }
                    moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, 41);
                    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                    break;
                  }
                  case 32: {
                    break _L$4;
                  }
                  case 9: {
                    break _L$4;
                  }
                  case 10: {
                    url_has_newline = true;
                    break _L$2;
                  }
                  default: {
                    moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _x);
                    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                  }
                }
              }
              break _L$3;
            }
            break;
          }
          continue;
        } else {
          break;
        }
      }
      if (url_has_newline) {
        mizchi$markdown$$Scanner$restore2(self.scanner, start);
        return void 0;
      }
    }
    const url = url_buf.val;
    while (true) {
      const _p$52 = self.scanner;
      if (!(_p$52.pos >= _p$52.len)) {
        _L$2: {
          _L$3: {
            _L$4: {
              const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
              if (_bind === -1) {
                break _L$3;
              } else {
                const _Some = _bind;
                const _x = _Some;
                switch (_x) {
                  case 32: {
                    break _L$4;
                  }
                  case 9: {
                    break _L$4;
                  }
                  case 10: {
                    break _L$4;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
            }
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            break _L$2;
          }
          break;
        }
        continue;
      } else {
        break;
      }
    }
    let title;
    _L$2: {
      _L$3: {
        const _bind2 = mizchi$markdown$$Scanner$peek2(self.scanner);
        if (_bind2 === -1) {
          title = "";
        } else {
          const _Some = _bind2;
          const _x = _Some;
          switch (_x) {
            case 34: {
              break _L$3;
            }
            case 39: {
              break _L$3;
            }
            case 40: {
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              const title_buf2 = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
              let paren_depth$2 = 1;
              _L$4: while (true) {
                let _tmp$32;
                const _p$52 = self.scanner;
                if (!(_p$52.pos >= _p$52.len)) {
                  _tmp$32 = paren_depth$2 > 0;
                } else {
                  _tmp$32 = false;
                }
                if (_tmp$32) {
                  const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
                  if (_bind$2 === -1) {
                    break;
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    switch (_x$2) {
                      case 41: {
                        paren_depth$2 = paren_depth$2 - 1 | 0;
                        if (paren_depth$2 === 0) {
                          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                          break _L$4;
                        }
                        moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf2, 41);
                        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                        break;
                      }
                      case 40: {
                        paren_depth$2 = paren_depth$2 + 1 | 0;
                        moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf2, 40);
                        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                        break;
                      }
                      case 92: {
                        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                        const _bind$3 = mizchi$markdown$$Scanner$consume2(self.scanner);
                        if (_bind$3 === -1) {
                          break _L$4;
                        } else {
                          const _Some$3 = _bind$3;
                          const _c = _Some$3;
                          moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf2, _c);
                        }
                        break;
                      }
                      default: {
                        moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf2, _x$2);
                        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                      }
                    }
                  }
                  continue;
                } else {
                  break;
                }
              }
              title = title_buf2.val;
              break;
            }
            default: {
              title = "";
            }
          }
        }
        break _L$2;
      }
      const _bind = mizchi$markdown$$Scanner$consume2(self.scanner);
      const quote = _bind === -1 ? 34 : _bind;
      const title_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
      while (true) {
        const _p$52 = self.scanner;
        if (!(_p$52.pos >= _p$52.len)) {
          const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind$2 === -1) {
            break;
          } else {
            const _Some = _bind$2;
            const _c = _Some;
            if (_c === quote) {
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              break;
            } else {
              if (_c === 92) {
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                const _bind$3 = mizchi$markdown$$Scanner$consume2(self.scanner);
                if (_bind$3 === -1) {
                  break;
                } else {
                  const _Some$2 = _bind$3;
                  const _c$2 = _Some$2;
                  moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf, _c$2);
                }
              } else {
                moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf, _c);
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              }
            }
          }
          continue;
        } else {
          break;
        }
      }
      title = title_buf.val;
    }
    mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
    const _p$5 = mizchi$markdown$$Scanner$peek2(self.scanner);
    const _p$6 = 41;
    let _tmp$3;
    if (_p$5 === -1) {
      _tmp$3 = false;
    } else {
      const _p$7 = _p$5;
      const _p$8 = _p$7;
      _tmp$3 = _p$8 === _p$6;
    }
    if (_tmp$3) {
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      const children = mizchi$markdown$$parse_inlines$46$inner2(link_text, false);
      if (mizchi$markdown$$contains_link2(children)) {
        mizchi$markdown$$Scanner$restore2(self.scanner, start);
        return void 0;
      }
      return new $64$mizchi$47$markdown$46$Inline$Link2(children, url, title, mizchi$markdown$$Span$new2(start, self.scanner.pos));
    }
  }
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 91;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    _tmp$2 = _p$6 === _p$4;
  }
  if (_tmp$2) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    while (true) {
      const _p$5 = self.scanner;
      if (!(_p$5.pos >= _p$5.len)) {
        const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          if (_x === 93) {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            break;
          } else {
            moonbitlang$core$builtin$$Logger$write_char$8$2(label_buf, _x);
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          }
        }
        continue;
      } else {
        break;
      }
    }
    const label = label_buf.val;
    const children = mizchi$markdown$$parse_inlines$46$inner2(link_text, false);
    if (mizchi$markdown$$contains_link2(children)) {
      mizchi$markdown$$Scanner$restore2(self.scanner, start);
      return void 0;
    }
    return new $64$mizchi$47$markdown$46$Inline$RefLink2(children, label, mizchi$markdown$$Span$new2(start, self.scanner.pos));
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, start);
  return void 0;
}
function mizchi$markdown$$parse_inlines_with_delimiter_stack2(text) {
  const chars = moonbitlang$core$string$$String$to_array2(text);
  const len = chars.length;
  const delimiters = [];
  let i = 0;
  while (true) {
    if (i < len) {
      const c = moonbitlang$core$array$$Array$at$11$2(chars, i);
      if (c === 42 || c === 95) {
        const start = i;
        let count = 0;
        while (true) {
          if (i < len && moonbitlang$core$array$$Array$at$11$2(chars, i) === c) {
            count = count + 1 | 0;
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const before = start > 0 ? moonbitlang$core$array$$Array$at$11$2(chars, start - 1 | 0) : -1;
        const after = i < len ? moonbitlang$core$array$$Array$at$11$2(chars, i) : -1;
        let before_is_whitespace;
        if (before === -1) {
          before_is_whitespace = true;
        } else {
          const _Some = before;
          const _ch = _Some;
          before_is_whitespace = mizchi$markdown$$is_unicode_whitespace2(_ch);
        }
        let before_is_punctuation;
        if (before === -1) {
          before_is_punctuation = false;
        } else {
          const _Some = before;
          const _ch = _Some;
          before_is_punctuation = mizchi$markdown$$is_unicode_punctuation2(_ch);
        }
        let after_is_whitespace;
        if (after === -1) {
          after_is_whitespace = true;
        } else {
          const _Some = after;
          const _ch = _Some;
          after_is_whitespace = mizchi$markdown$$is_unicode_whitespace2(_ch);
        }
        let after_is_punctuation;
        if (after === -1) {
          after_is_punctuation = false;
        } else {
          const _Some = after;
          const _ch = _Some;
          after_is_punctuation = mizchi$markdown$$is_unicode_punctuation2(_ch);
        }
        const left_flanking = !after_is_whitespace && (!after_is_punctuation || (before_is_whitespace || before_is_punctuation));
        const right_flanking = !before_is_whitespace && (!before_is_punctuation || (after_is_whitespace || after_is_punctuation));
        let can_open;
        let can_close;
        _L: {
          if (c === 95) {
            const _tmp2 = left_flanking && (!right_flanking || before_is_punctuation);
            const _tmp$2 = right_flanking && (!left_flanking || after_is_punctuation);
            can_open = _tmp2;
            can_close = _tmp$2;
            break _L;
          } else {
            can_open = left_flanking;
            can_close = right_flanking;
            break _L;
          }
        }
        if (can_open || can_close) {
          moonbitlang$core$array$$Array$push$17$2(delimiters, { pos: start, marker: c, length: count, remaining: count, can_open, can_close, active: true });
        }
      } else {
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  const matches = [];
  let _tmp = 0;
  while (true) {
    const closer_idx = _tmp;
    if (closer_idx < delimiters.length) {
      _L: {
        const closer = moonbitlang$core$array$$Array$at$17$2(delimiters, closer_idx);
        if (!closer.can_close || closer.remaining === 0) {
          break _L;
        }
        let _tmp$2 = closer_idx - 1 | 0;
        while (true) {
          const opener_idx = _tmp$2;
          if (opener_idx >= 0) {
            _L$2: {
              const opener = moonbitlang$core$array$$Array$at$17$2(delimiters, opener_idx);
              if (!opener.can_open || (opener.remaining === 0 || !opener.active)) {
                break _L$2;
              }
              if (opener.marker !== closer.marker) {
                break _L$2;
              }
              if (opener.can_open && opener.can_close || closer.can_open && closer.can_close) {
                if (((opener.length + closer.length | 0) % 3 | 0) === 0) {
                  if ((opener.length % 3 | 0) !== 0 || (closer.length % 3 | 0) !== 0) {
                    break _L$2;
                  }
                }
              }
              const use_count = opener.remaining >= 2 && closer.remaining >= 2 ? 2 : 1;
              const is_strong = use_count === 2;
              const opener_end = ((opener.pos + opener.length | 0) - opener.remaining | 0) + use_count | 0;
              const closer_start = closer.pos + (closer.length - closer.remaining | 0) | 0;
              moonbitlang$core$array$$Array$push$5$2(matches, { _0: opener_end - use_count | 0, _1: closer_start, _2: opener.marker, _3: is_strong });
              moonbitlang$core$array$$Array$at$17$2(delimiters, opener_idx).remaining = opener.remaining - use_count | 0;
              moonbitlang$core$array$$Array$at$17$2(delimiters, closer_idx).remaining = closer.remaining - use_count | 0;
              let _tmp$3 = opener_idx + 1 | 0;
              while (true) {
                const j = _tmp$3;
                if (j < closer_idx) {
                  moonbitlang$core$array$$Array$at$17$2(delimiters, j).active = false;
                  _tmp$3 = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (closer.remaining > 0) {
              }
              break;
            }
            _tmp$2 = opener_idx - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp = closer_idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const result = [];
  if (matches.length === 0) {
    const segment_inlines = mizchi$markdown$$parse_segment_simple2(text, 0);
    const _len = segment_inlines.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const inline = segment_inlines[_i];
        moonbitlang$core$array$$Array$push$19$2(result, inline);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    mizchi$markdown$$build_inlines_from_matches2(text, chars, matches, result);
  }
  return result;
}
function mizchi$markdown$$build_inlines_from_matches2(text, chars, matches, result) {
  const sorted = moonbitlang$core$array$$Array$copy$5$2(matches);
  moonbitlang$core$array$$Array$sort_by$5$2(sorted, (a, b) => $compare_int2(a._0, b._0));
  const len = chars.length;
  mizchi$markdown$$build_inlines_recursive2(text, chars, 0, len, sorted, 0, sorted.length, result);
}
function mizchi$markdown$$build_inlines_recursive2(text, chars, start, end, matches, match_start, match_end, result) {
  let pos = start;
  let _tmp = match_start;
  while (true) {
    const i = _tmp;
    if (i < match_end) {
      _L: {
        const _bind = moonbitlang$core$array$$Array$at$5$2(matches, i);
        const _opener_pos = _bind._0;
        const _closer_pos = _bind._1;
        const _marker = _bind._2;
        const _is_strong = _bind._3;
        if (_opener_pos < start || (_closer_pos > end || _opener_pos < pos)) {
          break _L;
        }
        const marker_len = _is_strong ? 2 : 1;
        if (_opener_pos > pos) {
          const segment = text.substring(pos, _opener_pos);
          const segment_inlines = mizchi$markdown$$parse_segment_simple2(segment, pos);
          const _len = segment_inlines.length;
          let _tmp$2 = 0;
          while (true) {
            const _i = _tmp$2;
            if (_i < _len) {
              const inline = segment_inlines[_i];
              moonbitlang$core$array$$Array$push$19$2(result, inline);
              _tmp$2 = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const children = [];
        const content_start = _opener_pos + marker_len | 0;
        const nested_start = i + 1 | 0;
        let nested_end = i + 1 | 0;
        while (true) {
          if (nested_end < match_end) {
            const _bind$2 = moonbitlang$core$array$$Array$at$5$2(matches, nested_end);
            const _np = _bind$2._0;
            const _nc = _bind$2._1;
            if (_np >= content_start && _nc <= _closer_pos) {
              nested_end = nested_end + 1 | 0;
            } else {
              break;
            }
            continue;
          } else {
            break;
          }
        }
        if (nested_start < nested_end) {
          mizchi$markdown$$build_inlines_recursive2(text, chars, content_start, _closer_pos, matches, nested_start, nested_end, children);
        } else {
          const content = text.substring(content_start, _closer_pos);
          const content_inlines = mizchi$markdown$$parse_segment_simple2(content, content_start);
          const _len = content_inlines.length;
          let _tmp$2 = 0;
          while (true) {
            const _i = _tmp$2;
            if (_i < _len) {
              const inline = content_inlines[_i];
              moonbitlang$core$array$$Array$push$19$2(children, inline);
              _tmp$2 = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const em_marker = _marker === 42 ? 0 : 1;
        const span = mizchi$markdown$$Span$new2(_opener_pos, _closer_pos + marker_len | 0);
        if (_is_strong) {
          moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Strong2(em_marker, children, span));
        } else {
          moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Emphasis2(em_marker, children, span));
        }
        pos = _closer_pos + marker_len | 0;
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (pos < end) {
    const segment = text.substring(pos, end);
    const segment_inlines = mizchi$markdown$$parse_segment_simple2(segment, pos);
    const _len = segment_inlines.length;
    let _tmp$2 = 0;
    while (true) {
      const _i = _tmp$2;
      if (_i < _len) {
        const inline = segment_inlines[_i];
        moonbitlang$core$array$$Array$push$19$2(result, inline);
        _tmp$2 = _i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function mizchi$markdown$$parse_segment_simple2(text, offset) {
  const scanner = mizchi$markdown$$Scanner$new2(text);
  const result = [];
  const text_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let text_start = 0;
  while (true) {
    if (!(scanner.pos >= scanner.len)) {
      const pos = scanner.pos;
      const _bind = mizchi$markdown$$Scanner$peek2(scanner);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 96: {
            const backtick_count = mizchi$markdown$$Scanner$count_char2(scanner, 96);
            mizchi$markdown$$Scanner$advance2(scanner, backtick_count);
            const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
            let found_closing = false;
            while (true) {
              if (!(scanner.pos >= scanner.len)) {
                const closing_count = mizchi$markdown$$Scanner$count_char2(scanner, 96);
                if (closing_count === backtick_count) {
                  found_closing = true;
                  const content = content_buf.val;
                  mizchi$markdown$$Scanner$advance2(scanner, closing_count);
                  if (!(text_buf.val === "")) {
                    moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(offset + text_start | 0, offset + pos | 0)));
                    moonbitlang$core$builtin$$StringBuilder$reset2(text_buf);
                  }
                  let trimmed;
                  if (content.length >= 2) {
                    const chars = moonbitlang$core$string$$String$to_array2(content);
                    trimmed = moonbitlang$core$array$$Array$at$11$2(chars, 0) === 32 && (moonbitlang$core$array$$Array$at$11$2(chars, chars.length - 1 | 0) === 32 && !mizchi$markdown$$is_all_spaces2(content)) ? content.substring(1, content.length - 1 | 0) : content;
                  } else {
                    trimmed = content;
                  }
                  moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Code2(trimmed, backtick_count, mizchi$markdown$$Span$new2(offset + pos | 0, offset + scanner.pos | 0)));
                  text_start = scanner.pos;
                  break;
                } else {
                  if (closing_count > 0) {
                    let _tmp = 0;
                    while (true) {
                      const j = _tmp;
                      if (j < closing_count) {
                        moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 96);
                        _tmp = j + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    mizchi$markdown$$Scanner$advance2(scanner, closing_count);
                  } else {
                    const _bind$2 = mizchi$markdown$$Scanner$consume2(scanner);
                    if (_bind$2 === -1) {
                      break;
                    } else {
                      const _Some$2 = _bind$2;
                      const _c = _Some$2;
                      moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, _c);
                    }
                  }
                }
                continue;
              } else {
                break;
              }
            }
            if (!found_closing) {
              let _tmp = 0;
              while (true) {
                const j = _tmp;
                if (j < backtick_count) {
                  moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 96);
                  _tmp = j + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              moonbitlang$core$builtin$$Logger$write_string$8$2(text_buf, content_buf.val);
            }
            break;
          }
          case 91: {
            const link_parser = mizchi$markdown$$InlineParser$new2(scanner);
            const _bind$2 = mizchi$markdown$$InlineParser$try_parse_link2(link_parser, pos);
            if (_bind$2 === void 0) {
              moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 91);
              mizchi$markdown$$Scanner$advance2(scanner, 1);
            } else {
              const _Some$2 = _bind$2;
              const _link = _Some$2;
              if (!(text_buf.val === "")) {
                moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(offset + text_start | 0, offset + pos | 0)));
                moonbitlang$core$builtin$$StringBuilder$reset2(text_buf);
              }
              moonbitlang$core$array$$Array$push$19$2(result, _link);
              text_start = scanner.pos;
            }
            break;
          }
          case 33: {
            const _p = mizchi$markdown$$Scanner$peek_at2(scanner, 1);
            const _p$2 = 91;
            let _tmp;
            if (_p === -1) {
              _tmp = false;
            } else {
              const _p$3 = _p;
              const _p$4 = _p$3;
              _tmp = _p$4 === _p$2;
            }
            if (_tmp) {
              const img_parser = mizchi$markdown$$InlineParser$new2(scanner);
              const _bind$3 = mizchi$markdown$$InlineParser$try_parse_image2(img_parser, pos);
              if (_bind$3 === void 0) {
                moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 33);
                mizchi$markdown$$Scanner$advance2(scanner, 1);
              } else {
                const _Some$2 = _bind$3;
                const _img = _Some$2;
                if (!(text_buf.val === "")) {
                  moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(offset + text_start | 0, offset + pos | 0)));
                  moonbitlang$core$builtin$$StringBuilder$reset2(text_buf);
                }
                moonbitlang$core$array$$Array$push$19$2(result, _img);
                text_start = scanner.pos;
              }
            } else {
              moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 33);
              mizchi$markdown$$Scanner$advance2(scanner, 1);
            }
            break;
          }
          case 60: {
            const auto_parser = mizchi$markdown$$InlineParser$new2(scanner);
            const _bind$3 = mizchi$markdown$$InlineParser$try_parse_autolink2(auto_parser, pos);
            if (_bind$3 === void 0) {
              moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, 60);
              mizchi$markdown$$Scanner$advance2(scanner, 1);
            } else {
              const _Some$2 = _bind$3;
              const _autolink = _Some$2;
              if (!(text_buf.val === "")) {
                moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(offset + text_start | 0, offset + pos | 0)));
                moonbitlang$core$builtin$$StringBuilder$reset2(text_buf);
              }
              moonbitlang$core$array$$Array$push$19$2(result, _autolink);
              text_start = scanner.pos;
            }
            break;
          }
          case 10: {
            const content = text_buf.val;
            const trimmed = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim_end$46$inner2(content, { str: mizchi$markdown$$parse_segment_simple$46$42$bind$124$26272, start: 0, end: mizchi$markdown$$parse_segment_simple$46$42$bind$124$26272.length }));
            const trailing_spaces = content.length - trimmed.length | 0;
            const is_hard_break = trailing_spaces >= 2;
            if (!(trimmed === "")) {
              moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Text2(trimmed, mizchi$markdown$$Span$new2(offset + text_start | 0, (offset + pos | 0) - trailing_spaces | 0)));
            }
            moonbitlang$core$builtin$$StringBuilder$reset2(text_buf);
            mizchi$markdown$$Scanner$advance2(scanner, 1);
            while (true) {
              const _p$3 = mizchi$markdown$$Scanner$peek2(scanner);
              const _p$4 = 32;
              let _tmp$2;
              if (_p$3 === -1) {
                _tmp$2 = false;
              } else {
                const _p$5 = _p$3;
                const _p$6 = _p$5;
                _tmp$2 = _p$6 === _p$4;
              }
              if (_tmp$2) {
                mizchi$markdown$$Scanner$advance2(scanner, 1);
                continue;
              } else {
                break;
              }
            }
            if (is_hard_break) {
              moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$HardBreak2(0, mizchi$markdown$$Span$new2((offset + pos | 0) - trailing_spaces | 0, offset + scanner.pos | 0)));
            } else {
              moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$SoftBreak2(mizchi$markdown$$Span$new2(offset + pos | 0, offset + scanner.pos | 0)));
            }
            text_start = scanner.pos;
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$8$2(text_buf, _x);
            mizchi$markdown$$Scanner$advance2(scanner, 1);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (!(text_buf.val === "")) {
    moonbitlang$core$array$$Array$push$19$2(result, new $64$mizchi$47$markdown$46$Inline$Text2(text_buf.val, mizchi$markdown$$Span$new2(offset + text_start | 0, offset + scanner.pos | 0)));
  }
  return result;
}
function mizchi$markdown$$BlockParser$detect_list_marker2(self) {
  const saved = self.scanner.pos;
  const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
  if (_bind === -1) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 45: {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        _L: {
          _L$2: {
            const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
            if (_bind$2 === -1) {
            } else {
              const _Some$2 = _bind$2;
              const _x$2 = _Some$2;
              switch (_x$2) {
                case 32: {
                  break _L$2;
                }
                case 9: {
                  break _L$2;
                }
              }
            }
            break _L;
          }
          mizchi$markdown$$Scanner$restore2(self.scanner, saved);
          return mizchi$markdown$$detect_list_marker$46$constr$47$19252;
        }
        break;
      }
      case 42: {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        _L$2: {
          _L$3: {
            const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
            if (_bind$2 === -1) {
            } else {
              const _Some$2 = _bind$2;
              const _x$2 = _Some$2;
              switch (_x$2) {
                case 32: {
                  break _L$3;
                }
                case 9: {
                  break _L$3;
                }
              }
            }
            break _L$2;
          }
          mizchi$markdown$$Scanner$restore2(self.scanner, saved);
          return mizchi$markdown$$detect_list_marker$46$constr$47$1928;
        }
        break;
      }
      case 43: {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        _L$3: {
          _L$4: {
            const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
            if (_bind$2 === -1) {
            } else {
              const _Some$2 = _bind$2;
              const _x$2 = _Some$2;
              switch (_x$2) {
                case 32: {
                  break _L$4;
                }
                case 9: {
                  break _L$4;
                }
              }
            }
            break _L$3;
          }
          mizchi$markdown$$Scanner$restore2(self.scanner, saved);
          return mizchi$markdown$$detect_list_marker$46$constr$47$1931;
        }
        break;
      }
    }
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, saved);
  if (mizchi$markdown$$char_is_digit2(mizchi$markdown$$Scanner$peek2(self.scanner))) {
    let num = 0;
    let digits = 0;
    while (true) {
      if (mizchi$markdown$$char_is_digit2(mizchi$markdown$$Scanner$peek2(self.scanner))) {
        const _bind$22 = mizchi$markdown$$Scanner$peek2(self.scanner);
        if (_bind$22 === -1) {
          break;
        } else {
          const _Some = _bind$22;
          const _c = _Some;
          num = (Math.imul(num, 10) | 0) + (_c - 48 | 0) | 0;
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          digits = digits + 1 | 0;
          if (digits > 9) {
            mizchi$markdown$$Scanner$restore2(self.scanner, saved);
            return void 0;
          }
        }
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
    if (_bind$2 === -1) {
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      switch (_x) {
        case 46: {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          _L: {
            _L$2: {
              const _bind$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
              if (_bind$3 === -1) {
              } else {
                const _Some$2 = _bind$3;
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 32: {
                    break _L$2;
                  }
                  case 9: {
                    break _L$2;
                  }
                }
              }
              break _L;
            }
            mizchi$markdown$$Scanner$restore2(self.scanner, saved);
            return { _0: new $64$mizchi$47$markdown$46$ListMarkerKind$Ordered2(num, 0), _1: digits + 2 | 0 };
          }
          break;
        }
        case 41: {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          _L$2: {
            _L$3: {
              const _bind$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
              if (_bind$3 === -1) {
              } else {
                const _Some$2 = _bind$3;
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 32: {
                    break _L$3;
                  }
                  case 9: {
                    break _L$3;
                  }
                }
              }
              break _L$2;
            }
            mizchi$markdown$$Scanner$restore2(self.scanner, saved);
            return { _0: new $64$mizchi$47$markdown$46$ListMarkerKind$Ordered2(num, 1), _1: digits + 2 | 0 };
          }
          break;
        }
      }
    }
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, saved);
  return void 0;
}
function mizchi$markdown$$BlockParser$read_leading_trivia2(self) {
  const start = self.scanner.pos;
  const count = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  return count > 0 ? mizchi$markdown$$Trivia$new2(mizchi$markdown$$Scanner$substring2(self.scanner, start, start + count | 0)) : mizchi$markdown$$empty$46$record$47$1277;
}
function mizchi$markdown$$BlockParser$read_trailing_trivia2(self) {
  const start = self.scanner.pos;
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  return self.scanner.pos > start ? mizchi$markdown$$Trivia$new2(mizchi$markdown$$Scanner$substring2(self.scanner, start, self.scanner.pos)) : mizchi$markdown$$empty$46$record$47$1277;
}
function mizchi$markdown$$BlockParser$try_parse_thematic_break2(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  let marker;
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c === 45 || (_c === 42 || _c === 95)) {
          marker = _c;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return void 0;
  }
  let count = 0;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      _L$2: {
        _L$3: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$3;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 10) {
              break;
            } else {
              if (_x === marker) {
                count = count + 1 | 0;
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              } else {
                if (_x === 32 || _x === 9) {
                  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                } else {
                  break _L$3;
                }
              }
            }
          }
          break _L$2;
        }
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  if (count < 3) {
    return void 0;
  }
  const trailing = mizchi$markdown$$BlockParser$read_trailing_trivia2(self);
  return new $64$mizchi$47$markdown$46$Block$ThematicBreak2(marker, count, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, trailing);
}
function mizchi$markdown$$BlockParser$parse_paragraph2(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let first = true;
  _L: while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      if (mizchi$markdown$$Scanner$is_blank_line2(self.scanner)) {
        break;
      }
      const saved = self.scanner.pos;
      mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      let c;
      _L$2: {
        _L$3: {
          _L$4: {
            _L$5: {
              _L$6: {
                _L$7: {
                  const _bind3 = mizchi$markdown$$Scanner$peek2(self.scanner);
                  if (_bind3 === -1) {
                  } else {
                    const _Some = _bind3;
                    const _x = _Some;
                    switch (_x) {
                      case 35: {
                        break _L$7;
                      }
                      case 62: {
                        break _L$7;
                      }
                      case 96: {
                        if (moonbitlang$core$builtin$$Eq$equal$37$2(mizchi$markdown$$Scanner$peek_at2(self.scanner, 1), mizchi$markdown$$parse_paragraph$46$constr$47$1986) && moonbitlang$core$builtin$$Eq$equal$37$2(mizchi$markdown$$Scanner$peek_at2(self.scanner, 2), mizchi$markdown$$parse_paragraph$46$constr$47$1987)) {
                          mizchi$markdown$$Scanner$restore2(self.scanner, saved);
                          break _L;
                        } else {
                          if (_x >= 48 && _x <= 57) {
                            c = _x;
                            break _L$3;
                          }
                        }
                        break;
                      }
                      case 126: {
                        if (moonbitlang$core$builtin$$Eq$equal$37$2(mizchi$markdown$$Scanner$peek_at2(self.scanner, 1), mizchi$markdown$$parse_paragraph$46$constr$47$1988) && moonbitlang$core$builtin$$Eq$equal$37$2(mizchi$markdown$$Scanner$peek_at2(self.scanner, 2), mizchi$markdown$$parse_paragraph$46$constr$47$1989)) {
                          mizchi$markdown$$Scanner$restore2(self.scanner, saved);
                          break _L;
                        } else {
                          if (_x >= 48 && _x <= 57) {
                            c = _x;
                            break _L$3;
                          }
                        }
                        break;
                      }
                      case 45: {
                        break _L$5;
                      }
                      case 42: {
                        break _L$5;
                      }
                      case 95: {
                        break _L$5;
                      }
                      default: {
                        if (_x >= 48 && _x <= 57) {
                          c = _x;
                          break _L$3;
                        }
                      }
                    }
                  }
                  break _L$6;
                }
                mizchi$markdown$$Scanner$restore2(self.scanner, saved);
                break;
              }
              break _L$4;
            }
            const _bind2 = mizchi$markdown$$BlockParser$try_parse_thematic_break2(self, saved);
            if (_bind2 === void 0) {
            } else {
              mizchi$markdown$$Scanner$restore2(self.scanner, saved);
              break;
            }
            mizchi$markdown$$Scanner$restore2(self.scanner, saved);
            const _bind$2 = mizchi$markdown$$BlockParser$detect_list_marker2(self);
            if (_bind$2 === void 0) {
            } else {
              break;
            }
          }
          break _L$2;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, saved);
        const _bind = mizchi$markdown$$BlockParser$detect_list_marker2(self);
        if (_bind === void 0) {
        } else {
          break;
        }
      }
      mizchi$markdown$$Scanner$restore2(self.scanner, saved);
      if (!first) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 10);
      }
      const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
      moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, line);
      first = false;
      const _p$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
      const _p$3 = 10;
      let _tmp;
      if (_p$2 === -1) {
        _tmp = false;
      } else {
        const _p$4 = _p$2;
        const _p$5 = _p$4;
        _tmp = _p$5 === _p$3;
      }
      if (_tmp) {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      }
      continue;
    } else {
      break;
    }
  }
  const content = content_buf.val;
  if (moonbitlang$core$string$$StringView$is_empty2(moonbitlang$core$string$$String$trim$46$inner2(content, { str: mizchi$markdown$$parse_paragraph$46$42$bind$124$27172, start: 0, end: mizchi$markdown$$parse_paragraph$46$42$bind$124$27172.length }))) {
    return void 0;
  }
  const children = mizchi$markdown$$parse_inlines$46$inner2(content, self.strict);
  return new $64$mizchi$47$markdown$46$Block$Paragraph2(children, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$parse_heading_content2(line) {
  const trimmed = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim_end$46$inner2(line, { str: mizchi$markdown$$parse_heading_content$46$42$bind$124$27302, start: 0, end: mizchi$markdown$$parse_heading_content$46$42$bind$124$27302.length }));
  let hash_count = 0;
  let idx = trimmed.length - 1 | 0;
  while (true) {
    if (idx >= 0) {
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char2(trimmed, idx);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 35) {
              hash_count = hash_count + 1 | 0;
              idx = idx - 1 | 0;
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  if (hash_count > 0 && idx >= 0) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$string$$String$get_char2(trimmed, idx);
        if (_bind === -1) {
          break _L$2;
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 32: {
              break;
            }
            case 9: {
              break;
            }
            default: {
              break _L$2;
            }
          }
        }
        break _L;
      }
      return { _0: trimmed, _1: 0 };
    }
  }
  if (hash_count > 0) {
    const content = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim_end$46$inner2(trimmed.substring(0, idx + 1 | 0), { str: mizchi$markdown$$parse_heading_content$46$42$bind$124$27292, start: 0, end: mizchi$markdown$$parse_heading_content$46$42$bind$124$27292.length }));
    return { _0: content, _1: hash_count };
  } else {
    return { _0: trimmed, _1: 0 };
  }
}
function mizchi$markdown$$BlockParser$try_parse_atx_heading2(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const level = mizchi$markdown$$Scanner$count_char2(self.scanner, 35);
  if (level < 1 || level > 6) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, level);
  const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
  if (_bind === -1) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 32: {
        break;
      }
      case 9: {
        break;
      }
      case 10: {
        break;
      }
      default: {
        return void 0;
      }
    }
  }
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
  const _bind$2 = mizchi$markdown$$parse_heading_content2(line);
  const _content = _bind$2._0;
  const _closing_hashes = _bind$2._1;
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const trailing = mizchi$markdown$$empty$46$record$47$1277;
  const children = mizchi$markdown$$parse_inlines$46$inner2(_content, self.strict);
  return new $64$mizchi$47$markdown$46$Block$Heading2(level, 0, children, _closing_hashes, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, trailing);
}
function mizchi$markdown$$strip_indent2(line, n) {
  let stripped = 0;
  let idx = 0;
  while (true) {
    if (idx < line.length && stripped < n) {
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char2(line, idx);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 32: {
                stripped = stripped + 1 | 0;
                idx = idx + 1 | 0;
                break;
              }
              case 9: {
                stripped = stripped + 4 | 0;
                idx = idx + 1 | 0;
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return line.substring(idx, line.length);
}
function mizchi$markdown$$BlockParser$try_parse_fenced_code2(self, start, indent) {
  if (indent > 3) {
    return void 0;
  }
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  let fence_char;
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c === 96 || _c === 126) {
          fence_char = _c;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return void 0;
  }
  const fence_marker = fence_char === 96 ? 0 : 1;
  const fence_length = mizchi$markdown$$Scanner$count_char2(self.scanner, fence_char);
  if (fence_length < 3) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, fence_length);
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  const info = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim_end$46$inner2(mizchi$markdown$$Scanner$read_line2(self.scanner), { str: mizchi$markdown$$try_parse_fenced_code$46$42$bind$124$27492, start: 0, end: mizchi$markdown$$try_parse_fenced_code$46$42$bind$124$27492.length }));
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const code_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p$3 = self.scanner;
    if (!(_p$3.pos >= _p$3.len)) {
      const line_indent = mizchi$markdown$$Scanner$count_leading_spaces2(self.scanner);
      if (line_indent <= 3) {
        const saved = self.scanner.pos;
        mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
        if (mizchi$markdown$$Scanner$count_char2(self.scanner, fence_char) >= fence_length) {
          mizchi$markdown$$Scanner$advance2(self.scanner, mizchi$markdown$$Scanner$count_char2(self.scanner, fence_char));
          mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
          let _tmp$22;
          const _p$42 = mizchi$markdown$$Scanner$peek2(self.scanner);
          const _p$52 = 10;
          let _tmp$3;
          if (_p$42 === -1) {
            _tmp$3 = false;
          } else {
            const _p$6 = _p$42;
            const _p$7 = _p$6;
            _tmp$3 = _p$7 === _p$52;
          }
          if (_tmp$3) {
            _tmp$22 = true;
          } else {
            const _p$6 = self.scanner;
            _tmp$22 = _p$6.pos >= _p$6.len;
          }
          if (_tmp$22) {
            const _p$6 = mizchi$markdown$$Scanner$peek2(self.scanner);
            const _p$7 = 10;
            let _tmp$4;
            if (_p$6 === -1) {
              _tmp$4 = false;
            } else {
              const _p$8 = _p$6;
              const _p$9 = _p$8;
              _tmp$4 = _p$9 === _p$7;
            }
            if (_tmp$4) {
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            }
            break;
          }
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, saved);
      }
      const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
      const stripped = mizchi$markdown$$strip_indent2(line, indent);
      moonbitlang$core$builtin$$Logger$write_string$8$2(code_buf, stripped);
      const _p$4 = mizchi$markdown$$Scanner$peek2(self.scanner);
      const _p$5 = 10;
      let _tmp$2;
      if (_p$4 === -1) {
        _tmp$2 = false;
      } else {
        const _p$6 = _p$4;
        const _p$7 = _p$6;
        _tmp$2 = _p$7 === _p$5;
      }
      if (_tmp$2) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(code_buf, 10);
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      }
      continue;
    } else {
      break;
    }
  }
  const trailing = mizchi$markdown$$empty$46$record$47$1277;
  return new $64$mizchi$47$markdown$46$Block$FencedCode2(fence_marker, fence_length, info, code_buf.val, indent, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, trailing);
}
function mizchi$markdown$$is_html_block_tag2(tag) {
  const lower = moonbitlang$core$string$$String$to_lower2(tag);
  const _len = mizchi$markdown$$html_block_tags2.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const t = mizchi$markdown$$html_block_tags2[_i];
      if (lower === t) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function mizchi$markdown$$BlockParser$try_parse_html_block2(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 60;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  const peek_pos = self.scanner.pos;
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 47;
  let is_closing;
  if (_p$3 === -1) {
    is_closing = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    is_closing = _p$6 === _p$4;
  }
  if (is_closing) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const tag_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p$5 = self.scanner;
    if (!(_p$5.pos >= _p$5.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _c = _Some;
            if (_c >= 97 && _c <= 122 || (_c >= 65 && _c <= 90 || _c >= 48 && _c <= 57)) {
              moonbitlang$core$builtin$$Logger$write_char$8$2(tag_buf, _c);
              mizchi$markdown$$Scanner$advance2(self.scanner, 1);
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const tag_name = tag_buf.val;
  if (tag_name === "") {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  if (!mizchi$markdown$$is_html_block_tag2(tag_name)) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$restore2(self.scanner, peek_pos);
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p$5 = self.scanner;
    if (!(_p$5.pos >= _p$5.len)) {
      const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
      moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, line);
      const _p$6 = mizchi$markdown$$Scanner$peek2(self.scanner);
      const _p$7 = 10;
      let _tmp$2;
      if (_p$6 === -1) {
        _tmp$2 = false;
      } else {
        const _p$8 = _p$6;
        const _p$9 = _p$8;
        _tmp$2 = _p$9 === _p$7;
      }
      if (_tmp$2) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 10);
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      }
      if (mizchi$markdown$$Scanner$is_blank_line2(self.scanner)) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const html = content_buf.val;
  return new $64$mizchi$47$markdown$46$Block$HtmlBlock2(html, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$BlockParser$try_parse_indented_code2(self, start) {
  const leading = mizchi$markdown$$empty$46$record$47$1277;
  const code_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const line_start = self.scanner.pos;
      const indent = mizchi$markdown$$Scanner$count_leading_spaces2(self.scanner);
      if (indent < 4 && !mizchi$markdown$$Scanner$is_blank_line2(self.scanner)) {
        mizchi$markdown$$Scanner$restore2(self.scanner, line_start);
        break;
      }
      if (mizchi$markdown$$Scanner$is_blank_line2(self.scanner)) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(code_buf, 10);
        mizchi$markdown$$Scanner$skip_line2(self.scanner);
      } else {
        mizchi$markdown$$Scanner$advance2(self.scanner, 4);
        const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
        moonbitlang$core$builtin$$Logger$write_string$8$2(code_buf, line);
        const _p$2 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$3 = 10;
        let _tmp;
        if (_p$2 === -1) {
          _tmp = false;
        } else {
          const _p$4 = _p$2;
          const _p$5 = _p$4;
          _tmp = _p$5 === _p$3;
        }
        if (_tmp) {
          moonbitlang$core$builtin$$Logger$write_char$8$2(code_buf, 10);
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        }
      }
      continue;
    } else {
      break;
    }
  }
  const code = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim_end$46$inner2(code_buf.val, { str: mizchi$markdown$$try_parse_indented_code$46$42$bind$124$27652, start: 0, end: mizchi$markdown$$try_parse_indented_code$46$42$bind$124$27652.length }));
  if (code === "") {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$IndentedCode2(code, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$BlockParser$try_parse_link_definition2(self, start) {
  const saved = self.scanner.pos;
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 91;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  _L: while (true) {
    const _p$32 = self.scanner;
    if (!(_p$32.pos >= _p$32.len)) {
      _L$2: {
        _L$3: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$3;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 93: {
                break _L;
              }
              case 10: {
                break _L$3;
              }
              default: {
                moonbitlang$core$builtin$$Logger$write_char$8$2(label_buf, _x);
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              }
            }
          }
          break _L$2;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, saved);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 58;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$2 = _p$62 === _p$4;
  }
  if (!_tmp$2) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  const _p$5 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$6 = 10;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$72 = _p$5;
    const _p$82 = _p$72;
    _tmp$3 = _p$82 === _p$6;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  }
  let url;
  const _p$7 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$8 = 60;
  let _tmp$4;
  if (_p$7 === -1) {
    _tmp$4 = false;
  } else {
    const _p$9 = _p$7;
    const _p$10 = _p$9;
    _tmp$4 = _p$10 === _p$8;
  }
  if (_tmp$4) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    while (true) {
      let _tmp$5;
      const _p$9 = self.scanner;
      if (!(_p$9.pos >= _p$9.len)) {
        const _p$10 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$11 = 62;
        let _tmp$6;
        if (_p$10 === -1) {
          _tmp$6 = false;
        } else {
          const _p$12 = _p$10;
          const _p$13 = _p$12;
          _tmp$6 = _p$13 === _p$11;
        }
        _tmp$5 = !_tmp$6;
      } else {
        _tmp$5 = false;
      }
      if (_tmp$5) {
        const _bind = mizchi$markdown$$Scanner$consume2(self.scanner);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _c = _Some;
          moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    url = url_buf.val;
  } else {
    const url_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    while (true) {
      const _p$9 = self.scanner;
      if (!(_p$9.pos >= _p$9.len)) {
        _L$2: {
          _L$3: {
            const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
            if (_bind === -1) {
              break _L$3;
            } else {
              const _Some = _bind;
              const _x = _Some;
              switch (_x) {
                case 32: {
                  break _L$3;
                }
                case 9: {
                  break _L$3;
                }
                case 10: {
                  break _L$3;
                }
                default: {
                  moonbitlang$core$builtin$$Logger$write_char$8$2(url_buf, _x);
                  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
                }
              }
            }
            break _L$2;
          }
          break;
        }
        continue;
      } else {
        break;
      }
    }
    url = url_buf.val;
  }
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  let title;
  _L$2: {
    _L$3: {
      const _bind2 = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind2 === -1) {
        title = "";
      } else {
        const _Some = _bind2;
        const _x = _Some;
        switch (_x) {
          case 34: {
            break _L$3;
          }
          case 39: {
            break _L$3;
          }
          default: {
            title = "";
          }
        }
      }
      break _L$2;
    }
    const _bind = mizchi$markdown$$Scanner$consume2(self.scanner);
    const quote = _bind === -1 ? 34 : _bind;
    const title_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
    while (true) {
      let _tmp$52;
      const _p$92 = self.scanner;
      if (!(_p$92.pos >= _p$92.len)) {
        const _p$10 = mizchi$markdown$$Scanner$peek2(self.scanner);
        let _tmp$6;
        if (_p$10 === -1) {
          _tmp$6 = false;
        } else {
          const _p$11 = _p$10;
          const _p$12 = _p$11;
          _tmp$6 = _p$12 === quote;
        }
        _tmp$52 = !_tmp$6;
      } else {
        _tmp$52 = false;
      }
      if (_tmp$52) {
        const _bind$2 = mizchi$markdown$$Scanner$consume2(self.scanner);
        if (_bind$2 === -1) {
          break;
        } else {
          const _Some = _bind$2;
          const _c = _Some;
          moonbitlang$core$builtin$$Logger$write_char$8$2(title_buf, _c);
        }
        continue;
      } else {
        break;
      }
    }
    const _p$9 = mizchi$markdown$$Scanner$peek2(self.scanner);
    let _tmp$5;
    if (_p$9 === -1) {
      _tmp$5 = false;
    } else {
      const _p$10 = _p$9;
      const _p$11 = _p$10;
      _tmp$5 = _p$11 === quote;
    }
    if (_tmp$5) {
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
    }
    title = title_buf.val;
  }
  mizchi$markdown$$Scanner$skip_line2(self.scanner);
  const def = { label: moonbitlang$core$string$$String$to_lower2(label_buf.val), url, title, span: mizchi$markdown$$Span$new2(start, self.scanner.pos) };
  moonbitlang$core$array$$Array$push$33$2(self.definitions, def);
  return def;
}
function mizchi$markdown$$skip_n_chars2(s, n) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let i = 0;
  const _it = moonbitlang$core$string$$String$iterator2(s);
  while (true) {
    const _bind = moonbitlang$core$builtin$$Iterator$next$11$2(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (i >= n) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(buf, _c);
      }
      i = i + 1 | 0;
      continue;
    }
  }
  return buf.val;
}
function mizchi$markdown$$parse_task_checkbox2(content) {
  if (content.length >= 4) {
    if (moonbitlang$core$string$$String$has_prefix2(content, { str: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28082, start: 0, end: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28082.length })) {
      return { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2141, _1: mizchi$markdown$$skip_n_chars2(content, 4) };
    }
    if (moonbitlang$core$string$$String$has_prefix2(content, { str: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28092, start: 0, end: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28092.length }) || moonbitlang$core$string$$String$has_prefix2(content, { str: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28102, start: 0, end: mizchi$markdown$$parse_task_checkbox$46$42$bind$124$28102.length })) {
      return { _0: mizchi$markdown$$parse_task_checkbox$46$constr$47$2142, _1: mizchi$markdown$$skip_n_chars2(content, 4) };
    }
  }
  if (content === "[ ]") {
    return mizchi$markdown$$parse_task_checkbox$46$tuple$47$2144;
  }
  if (content === "[x]" || content === "[X]") {
    return mizchi$markdown$$parse_task_checkbox$46$tuple$47$2146;
  }
  return { _0: -1, _1: content };
}
function mizchi$markdown$$BlockParser$parse_nested_list_item2(self, start, marker_offset, content_offset) {
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
  moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, line);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const content = content_buf.val;
  const children = [];
  const _bind = mizchi$markdown$$parse_task_checkbox2(content);
  const _checked = _bind._0;
  const _actual_content = _bind._1;
  if (!(_actual_content === "")) {
    const inline_content = mizchi$markdown$$parse_inlines$46$inner2(_actual_content, self.strict);
    moonbitlang$core$array$$Array$push$30$2(children, new $64$mizchi$47$markdown$46$Block$Paragraph2(inline_content, mizchi$markdown$$Span$new2(start, self.scanner.pos), mizchi$markdown$$empty$46$record$47$1277, mizchi$markdown$$empty$46$record$47$1277));
  }
  return { children, checked: _checked, marker_offset, content_offset, span: mizchi$markdown$$Span$new2(start, self.scanner.pos) };
}
function mizchi$markdown$$BlockParser$parse_nested_bullet_list2(self, marker, min_indent) {
  const items = [];
  let tight = true;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const item_start = self.scanner.pos;
      const marker_offset = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      if (marker_offset < min_indent) {
        mizchi$markdown$$Scanner$restore2(self.scanner, item_start);
        break;
      }
      let current_marker;
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 45: {
                current_marker = mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2160;
                break;
              }
              case 42: {
                current_marker = mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2161;
                break;
              }
              case 43: {
                current_marker = mizchi$markdown$$parse_nested_bullet_list$46$constr$47$2162;
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        current_marker = void 0;
      }
      if (moonbitlang$core$builtin$$op_notequal$9$2(current_marker, marker)) {
        mizchi$markdown$$Scanner$restore2(self.scanner, item_start);
        break;
      }
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      const content_offset = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      const actual_offset = content_offset === 0 ? 1 : content_offset;
      const item = mizchi$markdown$$BlockParser$parse_nested_list_item2(self, item_start, marker_offset, actual_offset);
      moonbitlang$core$array$$Array$push$18$2(items, item);
      let _tmp;
      const _p$2 = self.scanner;
      if (!(_p$2.pos >= _p$2.len)) {
        _tmp = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        tight = false;
        while (true) {
          let _tmp$2;
          const _p$3 = self.scanner;
          if (!(_p$3.pos >= _p$3.len)) {
            _tmp$2 = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            mizchi$markdown$$Scanner$skip_line2(self.scanner);
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (items.length === 0) {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$BulletList2(marker, tight, items, mizchi$markdown$$Span$new2(moonbitlang$core$array$$Array$at$18$2(items, 0).span.from, self.scanner.pos), mizchi$markdown$$empty$46$record$47$1277, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$BlockParser$parse_list_item2(self, start, marker_offset, content_offset) {
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
  moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, line);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const content = content_buf.val;
  const children = [];
  const _bind = mizchi$markdown$$parse_task_checkbox2(content);
  const _checked = _bind._0;
  const _actual_content = _bind._1;
  if (!(_actual_content === "")) {
    const inline_content = mizchi$markdown$$parse_inlines$46$inner2(_actual_content, self.strict);
    moonbitlang$core$array$$Array$push$30$2(children, new $64$mizchi$47$markdown$46$Block$Paragraph2(inline_content, mizchi$markdown$$Span$new2(start, self.scanner.pos), mizchi$markdown$$empty$46$record$47$1277, mizchi$markdown$$empty$46$record$47$1277));
  }
  const min_indent = (marker_offset + 1 | 0) + content_offset | 0;
  while (true) {
    let _tmp$2;
    const _p$3 = self.scanner;
    if (!(_p$3.pos >= _p$3.len)) {
      _tmp$2 = !mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      const saved = self.scanner.pos;
      const indent = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      if (indent < min_indent) {
        mizchi$markdown$$Scanner$restore2(self.scanner, saved);
        break;
      }
      _L: {
        _L$2: {
          _L$3: {
            const _bind$22 = mizchi$markdown$$Scanner$peek2(self.scanner);
            if (_bind$22 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$22;
              const _x = _Some;
              switch (_x) {
                case 45: {
                  break _L$3;
                }
                case 42: {
                  break _L$3;
                }
                case 43: {
                  break _L$3;
                }
                default: {
                  break _L$2;
                }
              }
            }
          }
          let nested_marker;
          _L$4: {
            _L$5: {
              const _bind$22 = mizchi$markdown$$Scanner$peek2(self.scanner);
              if (_bind$22 === -1) {
                break _L$5;
              } else {
                const _Some = _bind$22;
                const _x = _Some;
                switch (_x) {
                  case 45: {
                    nested_marker = 0;
                    break;
                  }
                  case 42: {
                    nested_marker = 1;
                    break;
                  }
                  case 43: {
                    nested_marker = 2;
                    break;
                  }
                  default: {
                    break _L$5;
                  }
                }
              }
              break _L$4;
            }
            nested_marker = $panic2();
          }
          mizchi$markdown$$Scanner$restore2(self.scanner, saved);
          const _bind$2 = mizchi$markdown$$BlockParser$parse_nested_bullet_list2(self, nested_marker, min_indent);
          if (_bind$2 === void 0) {
            break;
          } else {
            const _Some = _bind$2;
            const _nested_list = _Some;
            moonbitlang$core$array$$Array$push$30$2(children, _nested_list);
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, saved);
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return { children, checked: _checked, marker_offset, content_offset, span: mizchi$markdown$$Span$new2(start, self.scanner.pos) };
}
function mizchi$markdown$$BlockParser$parse_bullet_list2(self, start, leading, marker, _marker_width) {
  const items = [];
  let tight = true;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const item_start = self.scanner.pos;
      const marker_offset = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      let current_marker;
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 45: {
                current_marker = mizchi$markdown$$parse_bullet_list$46$constr$47$2209;
                break;
              }
              case 42: {
                current_marker = mizchi$markdown$$parse_bullet_list$46$constr$47$2210;
                break;
              }
              case 43: {
                current_marker = mizchi$markdown$$parse_bullet_list$46$constr$47$2211;
                break;
              }
              default: {
                break _L$2;
              }
            }
          }
          break _L;
        }
        current_marker = void 0;
      }
      if (moonbitlang$core$builtin$$op_notequal$9$2(current_marker, marker)) {
        mizchi$markdown$$Scanner$restore2(self.scanner, item_start);
        break;
      }
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      const content_offset = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      const actual_offset = content_offset === 0 ? 1 : content_offset;
      const item = mizchi$markdown$$BlockParser$parse_list_item2(self, item_start, marker_offset, actual_offset);
      moonbitlang$core$array$$Array$push$18$2(items, item);
      let _tmp;
      const _p$2 = self.scanner;
      if (!(_p$2.pos >= _p$2.len)) {
        _tmp = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        tight = false;
        while (true) {
          let _tmp$2;
          const _p$3 = self.scanner;
          if (!(_p$3.pos >= _p$3.len)) {
            _tmp$2 = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            mizchi$markdown$$Scanner$skip_line2(self.scanner);
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (items.length === 0) {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$BulletList2(marker, tight, items, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$BlockParser$parse_ordered_list2(self, start, leading, start_num, delimiter, _marker_width) {
  const items = [];
  let tight = true;
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const item_start = self.scanner.pos;
      const marker_offset = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$BlockParser$detect_list_marker2(self);
          if (_bind === void 0) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _x$2 = _x._0;
            if (_x$2.$tag === 1) {
              const _Ordered = _x$2;
              const _d = _Ordered._1;
              if (moonbitlang$core$builtin$$Eq$equal$42$2(_d, delimiter)) {
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, item_start);
        break;
      }
      while (true) {
        if (mizchi$markdown$$char_is_digit2(mizchi$markdown$$Scanner$peek2(self.scanner))) {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          continue;
        } else {
          break;
        }
      }
      mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      const content_offset = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      const actual_offset = content_offset === 0 ? 1 : content_offset;
      const item = mizchi$markdown$$BlockParser$parse_list_item2(self, item_start, marker_offset, actual_offset);
      moonbitlang$core$array$$Array$push$18$2(items, item);
      let _tmp;
      const _p$2 = self.scanner;
      if (!(_p$2.pos >= _p$2.len)) {
        _tmp = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
      } else {
        _tmp = false;
      }
      if (_tmp) {
        tight = false;
        while (true) {
          let _tmp$2;
          const _p$3 = self.scanner;
          if (!(_p$3.pos >= _p$3.len)) {
            _tmp$2 = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            mizchi$markdown$$Scanner$skip_line2(self.scanner);
            continue;
          } else {
            break;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (items.length === 0) {
    return void 0;
  }
  return new $64$mizchi$47$markdown$46$Block$OrderedList2(start_num, delimiter, tight, items, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$BlockParser$try_parse_list2(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const _bind = mizchi$markdown$$BlockParser$detect_list_marker2(self);
  if (_bind === void 0) {
    return void 0;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _marker_kind = _x._0;
    const _marker_width = _x._1;
    if (_marker_kind.$tag === 0) {
      const _Bullet = _marker_kind;
      const _marker = _Bullet._0;
      return mizchi$markdown$$BlockParser$parse_bullet_list2(self, start, leading, _marker, _marker_width);
    } else {
      const _Ordered = _marker_kind;
      const _start_num = _Ordered._0;
      const _delim = _Ordered._1;
      return mizchi$markdown$$BlockParser$parse_ordered_list2(self, start, leading, _start_num, _delim, _marker_width);
    }
  }
}
function mizchi$markdown$$BlockParser$try_parse_setext_heading2(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const content = mizchi$markdown$$Scanner$read_line2(self.scanner);
  if (moonbitlang$core$string$$StringView$is_empty2(moonbitlang$core$string$$String$trim$46$inner2(content, { str: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$28842, start: 0, end: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$28842.length }))) {
    return void 0;
  }
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  } else {
    return void 0;
  }
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  let underline_char;
  _L: {
    _L$2: {
      const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
      if (_bind === -1) {
        break _L$2;
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c === 61 || _c === 45) {
          underline_char = _c;
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return void 0;
  }
  const level = underline_char === 61 ? 1 : 2;
  const underline_count = mizchi$markdown$$Scanner$count_char2(self.scanner, underline_char);
  if (underline_count < 1) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, underline_count);
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  let _tmp$2;
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 10;
  let _tmp$3;
  if (_p$3 === -1) {
    _tmp$3 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$3 = _p$62 === _p$4;
  }
  if (!_tmp$3) {
    const _p$52 = self.scanner;
    _tmp$2 = !(_p$52.pos >= _p$52.len);
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  const _p$5 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$6 = 10;
  let _tmp$4;
  if (_p$5 === -1) {
    _tmp$4 = false;
  } else {
    const _p$7 = _p$5;
    const _p$8 = _p$7;
    _tmp$4 = _p$8 === _p$6;
  }
  if (_tmp$4) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const content_str = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim$46$inner2(content, { str: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$28852, start: 0, end: mizchi$markdown$$try_parse_setext_heading$46$42$bind$124$28852.length }));
  const children = mizchi$markdown$$parse_inlines$46$inner2(content_str, self.strict);
  return new $64$mizchi$47$markdown$46$Block$Heading2(level, 1, children, 0, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$split_table_cells2(line) {
  const cells = [];
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let in_escape = false;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < line.length) {
      let c;
      _L: {
        _L$2: {
          const _bind = moonbitlang$core$string$$String$get_char2(line, i);
          if (_bind === -1) {
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 92: {
                if (!in_escape) {
                  in_escape = true;
                  moonbitlang$core$builtin$$Logger$write_char$8$2(buf, 92);
                } else {
                  c = _x;
                  break _L$2;
                }
                break;
              }
              case 124: {
                if (!in_escape) {
                  moonbitlang$core$array$$Array$push$1$2(cells, buf.val);
                  moonbitlang$core$builtin$$StringBuilder$reset2(buf);
                } else {
                  c = _x;
                  break _L$2;
                }
                break;
              }
              default: {
                c = _x;
                break _L$2;
              }
            }
          }
          break _L;
        }
        in_escape = false;
        moonbitlang$core$builtin$$Logger$write_char$8$2(buf, c);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const last = buf.val;
  if (!moonbitlang$core$string$$StringView$is_empty2(moonbitlang$core$string$$String$trim$46$inner2(last, { str: mizchi$markdown$$split_table_cells$46$42$bind$124$29002, start: 0, end: mizchi$markdown$$split_table_cells$46$42$bind$124$29002.length }))) {
    moonbitlang$core$array$$Array$push$1$2(cells, last);
  }
  if (cells.length > 0) {
    const _bind = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim$46$inner2(moonbitlang$core$array$$Array$at$1$2(cells, 0), { str: mizchi$markdown$$split_table_cells$46$42$bind$124$29012, start: 0, end: mizchi$markdown$$split_table_cells$46$42$bind$124$29012.length }));
    if (_bind === "") {
      moonbitlang$core$array$$Array$remove$1$2(cells, 0);
    }
  }
  return cells;
}
function mizchi$markdown$$parse_table_alignments2(line) {
  const alignments = [];
  const cells = mizchi$markdown$$split_table_cells2(line);
  const _len = cells.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      _L: {
        const cell = cells[_i];
        const trimmed = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim$46$inner2(cell, { str: mizchi$markdown$$parse_table_alignments$46$42$bind$124$29172, start: 0, end: mizchi$markdown$$parse_table_alignments$46$42$bind$124$29172.length }));
        if (trimmed === "") {
          break _L;
        }
        const has_left_colon = moonbitlang$core$string$$String$has_prefix2(trimmed, { str: mizchi$markdown$$parse_table_alignments$46$42$bind$124$29162, start: 0, end: mizchi$markdown$$parse_table_alignments$46$42$bind$124$29162.length });
        const has_right_colon = moonbitlang$core$string$$String$has_suffix2(trimmed, { str: mizchi$markdown$$parse_table_alignments$46$42$bind$124$29152, start: 0, end: mizchi$markdown$$parse_table_alignments$46$42$bind$124$29152.length });
        let has_dash = false;
        let _tmp$2 = 0;
        while (true) {
          const i = _tmp$2;
          if (i < trimmed.length) {
            _L$2: {
              _L$3: {
                const _bind = moonbitlang$core$string$$String$get_char2(trimmed, i);
                if (_bind === -1) {
                  break _L$3;
                } else {
                  const _Some = _bind;
                  const _x = _Some;
                  switch (_x) {
                    case 45: {
                      has_dash = true;
                      break;
                    }
                    case 58: {
                      break;
                    }
                    default: {
                      break _L$3;
                    }
                  }
                }
                break _L$2;
              }
              return [];
            }
            _tmp$2 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (!has_dash) {
          return [];
        }
        const align = has_left_colon && has_right_colon ? 1 : has_left_colon ? 0 : has_right_colon ? 2 : 3;
        moonbitlang$core$array$$Array$push$12$2(alignments, align);
        break _L;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return alignments;
}
function mizchi$markdown$$parse_table_row2(line, expected_cols, strict) {
  const cells = [];
  const raw_cells = mizchi$markdown$$split_table_cells2(line);
  const _len = raw_cells.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const cell = raw_cells[_i];
      if (_i >= expected_cols) {
        break;
      }
      const content = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim$46$inner2(cell, { str: mizchi$markdown$$parse_table_row$46$42$bind$124$29202, start: 0, end: mizchi$markdown$$parse_table_row$46$42$bind$124$29202.length }));
      const children = mizchi$markdown$$parse_inlines$46$inner2(content, strict);
      moonbitlang$core$array$$Array$push$35$2(cells, { children, span: mizchi$markdown$$Span$new2(0, content.length) });
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (cells.length < expected_cols) {
      moonbitlang$core$array$$Array$push$35$2(cells, { children: [], span: mizchi$markdown$$Span$new2(0, 0) });
      continue;
    } else {
      break;
    }
  }
  return cells;
}
function mizchi$markdown$$BlockParser$try_parse_table2(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const header_line = mizchi$markdown$$Scanner$read_line2(self.scanner);
  if (!moonbitlang$core$string$$String$contains2(header_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$29222, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$29222.length })) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const separator_line = mizchi$markdown$$Scanner$read_line2(self.scanner);
  if (!moonbitlang$core$string$$String$contains2(separator_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$29232, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$29232.length }) || !moonbitlang$core$string$$String$contains2(separator_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$29242, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$29242.length })) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  const alignments = mizchi$markdown$$parse_table_alignments2(separator_line);
  if (alignments.length === 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  const header_cells = mizchi$markdown$$split_table_cells2(header_line);
  const _p$3 = [];
  const _p$4 = header_cells.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$52 = _tmp$2;
    if (_p$52 < _p$4) {
      const _p$62 = header_cells[_p$52];
      if (!moonbitlang$core$string$$StringView$is_empty2(moonbitlang$core$string$$String$trim$46$inner2(_p$62, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$29272, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$29272.length }))) {
        moonbitlang$core$array$$Array$push$1$2(_p$3, _p$62);
      }
      _tmp$2 = _p$52 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const header_col_count = _p$3.length;
  if (header_col_count !== alignments.length) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  const _p$5 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$6 = 10;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$7 = _p$5;
    const _p$8 = _p$7;
    _tmp$3 = _p$8 === _p$6;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const header = mizchi$markdown$$parse_table_row2(header_line, alignments.length, self.strict);
  const rows = [];
  while (true) {
    let _tmp$4;
    const _p$7 = self.scanner;
    if (!(_p$7.pos >= _p$7.len)) {
      _tmp$4 = !mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
    } else {
      _tmp$4 = false;
    }
    if (_tmp$4) {
      const row_start = self.scanner.pos;
      const row_line = mizchi$markdown$$Scanner$read_line2(self.scanner);
      if (!moonbitlang$core$string$$String$contains2(row_line, { str: mizchi$markdown$$try_parse_table$46$42$bind$124$29262, start: 0, end: mizchi$markdown$$try_parse_table$46$42$bind$124$29262.length })) {
        mizchi$markdown$$Scanner$restore2(self.scanner, row_start);
        break;
      }
      moonbitlang$core$array$$Array$push$34$2(rows, mizchi$markdown$$parse_table_row2(row_line, alignments.length, self.strict));
      const _p$8 = mizchi$markdown$$Scanner$peek2(self.scanner);
      const _p$9 = 10;
      let _tmp$5;
      if (_p$8 === -1) {
        _tmp$5 = false;
      } else {
        const _p$10 = _p$8;
        const _p$11 = _p$10;
        _tmp$5 = _p$11 === _p$9;
      }
      if (_tmp$5) {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
      }
      continue;
    } else {
      break;
    }
  }
  return new $64$mizchi$47$markdown$46$Block$Table2(header, alignments, rows, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$parse_simple_yaml2(yaml) {
  const entries = [];
  const lines = moonbitlang$core$string$$String$split2(yaml, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29482, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29482.length });
  let _foreach_result = $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$7$2;
  lines((line) => {
    const trimmed = moonbitlang$core$string$$String$trim$46$inner2(moonbitlang$core$builtin$$Show$to_string$0$2(line), { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29432, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29432.length });
    if (moonbitlang$core$string$$StringView$is_empty2(trimmed) || moonbitlang$core$string$$StringView$has_prefix2(trimmed, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29302, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29302.length })) {
      return 1;
    }
    const _bind = moonbitlang$core$string$$StringView$find2(trimmed, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29372, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29372.length });
    if (_bind === void 0) {
    } else {
      const _Some = _bind;
      const _colon_idx = _Some;
      const key = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim$46$inner2(moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$StringView$view$46$inner2(trimmed, 0, _colon_idx)), { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29362, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29362.length }));
      const value = moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$String$trim$46$inner2(moonbitlang$core$builtin$$Show$to_string$0$2(moonbitlang$core$string$$StringView$view$46$inner2(trimmed, _colon_idx + 1 | 0, void 0)), { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29352, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29352.length }));
      const clean_value = moonbitlang$core$string$$String$has_prefix2(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29312, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29312.length }) && moonbitlang$core$string$$String$has_suffix2(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29322, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29322.length }) ? value.substring(1, value.length - 1 | 0) : moonbitlang$core$string$$String$has_prefix2(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29332, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29332.length }) && moonbitlang$core$string$$String$has_suffix2(value, { str: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29342, start: 0, end: mizchi$markdown$$parse_simple_yaml$46$42$bind$124$29342.length }) ? value.substring(1, value.length - 1 | 0) : value;
      moonbitlang$core$array$$Array$push$32$2(entries, { _0: key, _1: clean_value });
    }
    return 1;
  });
  const _tmp = _foreach_result;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic2();
      break;
    }
    default: {
      $panic2();
    }
  }
  return entries;
}
function mizchi$markdown$$BlockParser$try_parse_frontmatter2(self) {
  const start = self.scanner.pos;
  if (start !== 0) {
    return void 0;
  }
  if (!mizchi$markdown$$Scanner$matches2(self.scanner, "---")) {
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 3);
  mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
  let _tmp;
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 10;
  let _tmp$2;
  if (_p === -1) {
    _tmp$2 = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp$2 = _p$42 === _p$2;
  }
  if (!_tmp$2) {
    const _p$32 = self.scanner;
    _tmp = !(_p$32.pos >= _p$32.len);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 10;
  let _tmp$3;
  if (_p$3 === -1) {
    _tmp$3 = false;
  } else {
    const _p$5 = _p$3;
    const _p$6 = _p$5;
    _tmp$3 = _p$6 === _p$4;
  }
  if (_tmp$3) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const yaml_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let found_closing = false;
  while (true) {
    const _p$5 = self.scanner;
    if (!(_p$5.pos >= _p$5.len)) {
      if (mizchi$markdown$$Scanner$matches2(self.scanner, "---")) {
        mizchi$markdown$$Scanner$advance2(self.scanner, 3);
        mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
        let _tmp$4;
        const _p$6 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$7 = 10;
        let _tmp$5;
        if (_p$6 === -1) {
          _tmp$5 = false;
        } else {
          const _p$8 = _p$6;
          const _p$9 = _p$8;
          _tmp$5 = _p$9 === _p$7;
        }
        if (_tmp$5) {
          _tmp$4 = true;
        } else {
          const _p$8 = self.scanner;
          _tmp$4 = _p$8.pos >= _p$8.len;
        }
        if (_tmp$4) {
          const _p$8 = mizchi$markdown$$Scanner$peek2(self.scanner);
          const _p$9 = 10;
          let _tmp$6;
          if (_p$8 === -1) {
            _tmp$6 = false;
          } else {
            const _p$10 = _p$8;
            const _p$11 = _p$10;
            _tmp$6 = _p$11 === _p$9;
          }
          if (_tmp$6) {
            mizchi$markdown$$Scanner$advance2(self.scanner, 1);
          }
          found_closing = true;
          break;
        }
        moonbitlang$core$builtin$$Logger$write_string$8$2(yaml_buf, "---");
      } else {
        const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
        moonbitlang$core$builtin$$Logger$write_string$8$2(yaml_buf, line);
        const _p$6 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$7 = 10;
        let _tmp$4;
        if (_p$6 === -1) {
          _tmp$4 = false;
        } else {
          const _p$8 = _p$6;
          const _p$9 = _p$8;
          _tmp$4 = _p$9 === _p$7;
        }
        if (_tmp$4) {
          moonbitlang$core$builtin$$Logger$write_char$8$2(yaml_buf, 10);
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (!found_closing) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
    return void 0;
  }
  const raw = yaml_buf.val;
  const entries = mizchi$markdown$$parse_simple_yaml2(raw);
  return { raw, entries, span: mizchi$markdown$$Span$new2(start, self.scanner.pos) };
}
function mizchi$markdown$$BlockParser$parse_document2(self) {
  const start = self.scanner.pos;
  const frontmatter = mizchi$markdown$$BlockParser$try_parse_frontmatter2(self);
  const children = mizchi$markdown$$BlockParser$parse_blocks2(self);
  const document2 = { frontmatter, children, span: mizchi$markdown$$Span$new2(start, self.scanner.pos) };
  return { document: document2, definitions: self.definitions };
}
function mizchi$markdown$$BlockParser$parse_blocks2(self) {
  const blocks = [];
  while (true) {
    const _p = self.scanner;
    if (!(_p.pos >= _p.len)) {
      const blank_start = self.scanner.pos;
      let blank_count = 0;
      while (true) {
        let _tmp;
        const _p$22 = self.scanner;
        if (!(_p$22.pos >= _p$22.len)) {
          _tmp = mizchi$markdown$$Scanner$is_blank_line2(self.scanner);
        } else {
          _tmp = false;
        }
        if (_tmp) {
          blank_count = blank_count + 1 | 0;
          mizchi$markdown$$Scanner$skip_line2(self.scanner);
          continue;
        } else {
          break;
        }
      }
      if (blank_count > 0) {
        moonbitlang$core$array$$Array$push$30$2(blocks, new $64$mizchi$47$markdown$46$Block$BlankLines2(blank_count, mizchi$markdown$$Span$new2(blank_start, self.scanner.pos)));
      }
      const _p$2 = self.scanner;
      if (_p$2.pos >= _p$2.len) {
        break;
      }
      const _bind = mizchi$markdown$$BlockParser$parse_block2(self);
      if (_bind === void 0) {
        mizchi$markdown$$Scanner$skip_line2(self.scanner);
      } else {
        const _Some = _bind;
        const _block = _Some;
        moonbitlang$core$array$$Array$push$30$2(blocks, _block);
      }
      continue;
    } else {
      break;
    }
  }
  return blocks;
}
function mizchi$markdown$$BlockParser$parse_block2(self) {
  const start = self.scanner.pos;
  const indent = mizchi$markdown$$Scanner$count_leading_spaces2(self.scanner);
  const _bind = mizchi$markdown$$BlockParser$try_parse_thematic_break2(self, start);
  if (_bind === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind;
    const _block = _Some;
    return _block;
  }
  const _bind$2 = mizchi$markdown$$BlockParser$try_parse_atx_heading2(self, start);
  if (_bind$2 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$2;
    const _block = _Some;
    return _block;
  }
  const _bind$3 = mizchi$markdown$$BlockParser$try_parse_fenced_code2(self, start, indent);
  if (_bind$3 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$3;
    const _block = _Some;
    return _block;
  }
  const _bind$4 = mizchi$markdown$$BlockParser$try_parse_blockquote2(self, start);
  if (_bind$4 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$4;
    const _block = _Some;
    return _block;
  }
  const _bind$5 = mizchi$markdown$$BlockParser$try_parse_list2(self, start);
  if (_bind$5 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$5;
    const _block = _Some;
    return _block;
  }
  if (indent >= 4) {
    const _bind$62 = mizchi$markdown$$BlockParser$try_parse_indented_code2(self, start);
    if (_bind$62 === void 0) {
      mizchi$markdown$$Scanner$restore2(self.scanner, start);
    } else {
      const _Some = _bind$62;
      const _block = _Some;
      return _block;
    }
  }
  const _bind$6 = mizchi$markdown$$BlockParser$try_parse_setext_heading2(self, start);
  if (_bind$6 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$6;
    const _block = _Some;
    return _block;
  }
  const _bind$7 = mizchi$markdown$$BlockParser$try_parse_html_block2(self, start);
  if (_bind$7 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$7;
    const _block = _Some;
    return _block;
  }
  const _bind$8 = mizchi$markdown$$BlockParser$try_parse_table2(self, start);
  if (_bind$8 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$8;
    const _block = _Some;
    return _block;
  }
  const _bind$9 = mizchi$markdown$$BlockParser$try_parse_footnote_definition2(self, start);
  if (_bind$9 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    const _Some = _bind$9;
    const _block = _Some;
    return _block;
  }
  const _bind$10 = mizchi$markdown$$BlockParser$try_parse_link_definition2(self, start);
  if (_bind$10 === void 0) {
    mizchi$markdown$$Scanner$restore2(self.scanner, start);
  } else {
    return void 0;
  }
  return mizchi$markdown$$BlockParser$parse_paragraph2(self, start);
}
function mizchi$markdown$$BlockParser$try_parse_blockquote2(self, start) {
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 62;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$3 = _p;
    const _p$4 = _p$3;
    _tmp = _p$4 === _p$2;
  }
  if (!_tmp) {
    return void 0;
  }
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  let first = true;
  while (true) {
    const _p$3 = self.scanner;
    if (!(_p$3.pos >= _p$3.len)) {
      const line_start = self.scanner.pos;
      mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      const _p$4 = mizchi$markdown$$Scanner$peek2(self.scanner);
      const _p$5 = 62;
      let _tmp$22;
      if (_p$4 === -1) {
        _tmp$22 = false;
      } else {
        const _p$6 = _p$4;
        const _p$7 = _p$6;
        _tmp$22 = _p$7 === _p$5;
      }
      if (_tmp$22) {
        mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        const _p$6 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$7 = 32;
        let _tmp$3;
        if (_p$6 === -1) {
          _tmp$3 = false;
        } else {
          const _p$82 = _p$6;
          const _p$92 = _p$82;
          _tmp$3 = _p$92 === _p$7;
        }
        if (_tmp$3) {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        }
        const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
        if (!first) {
          moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 10);
        }
        moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, line);
        first = false;
        const _p$8 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$9 = 10;
        let _tmp$4;
        if (_p$8 === -1) {
          _tmp$4 = false;
        } else {
          const _p$10 = _p$8;
          const _p$11 = _p$10;
          _tmp$4 = _p$11 === _p$9;
        }
        if (_tmp$4) {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        }
      } else {
        mizchi$markdown$$Scanner$restore2(self.scanner, line_start);
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const content = content_buf.val;
  const inner_scanner = mizchi$markdown$$Scanner$new2(content);
  const inner_parser = mizchi$markdown$$BlockParser$new2(inner_scanner, self.strict);
  const inner_result = mizchi$markdown$$BlockParser$parse_document2(inner_parser);
  const _arr = inner_result.definitions;
  const _len = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len) {
      const def = _arr[_i];
      moonbitlang$core$array$$Array$push$33$2(self.definitions, def);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new $64$mizchi$47$markdown$46$Block$Blockquote2(inner_result.document.children, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$BlockParser$try_parse_footnote_definition2(self, start) {
  const saved = self.scanner.pos;
  const leading = mizchi$markdown$$BlockParser$read_leading_trivia2(self);
  const _p = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$2 = 91;
  let _tmp;
  if (_p === -1) {
    _tmp = false;
  } else {
    const _p$32 = _p;
    const _p$42 = _p$32;
    _tmp = _p$42 === _p$2;
  }
  if (!_tmp) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p$3 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$4 = 94;
  let _tmp$2;
  if (_p$3 === -1) {
    _tmp$2 = false;
  } else {
    const _p$52 = _p$3;
    const _p$62 = _p$52;
    _tmp$2 = _p$62 === _p$4;
  }
  if (!_tmp$2) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const label_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  while (true) {
    const _p$52 = self.scanner;
    if (!(_p$52.pos >= _p$52.len)) {
      _L: {
        _L$2: {
          const _bind = mizchi$markdown$$Scanner$peek2(self.scanner);
          if (_bind === -1) {
            break _L$2;
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 93) {
              break;
            } else {
              if (_x >= 97 && _x <= 122 || (_x >= 65 && _x <= 90 || (_x >= 48 && _x <= 57 || (_x === 45 || _x === 95)))) {
                moonbitlang$core$builtin$$Logger$write_char$8$2(label_buf, _x);
                mizchi$markdown$$Scanner$advance2(self.scanner, 1);
              } else {
                break _L$2;
              }
            }
          }
          break _L;
        }
        mizchi$markdown$$Scanner$restore2(self.scanner, saved);
        return void 0;
      }
      continue;
    } else {
      break;
    }
  }
  const label = label_buf.val;
  if (label === "") {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p$5 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$6 = 58;
  let _tmp$3;
  if (_p$5 === -1) {
    _tmp$3 = false;
  } else {
    const _p$72 = _p$5;
    const _p$82 = _p$72;
    _tmp$3 = _p$82 === _p$6;
  }
  if (!_tmp$3) {
    mizchi$markdown$$Scanner$restore2(self.scanner, saved);
    return void 0;
  }
  mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  const _p$7 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$8 = 32;
  let _tmp$4;
  if (_p$7 === -1) {
    _tmp$4 = false;
  } else {
    const _p$92 = _p$7;
    const _p$102 = _p$92;
    _tmp$4 = _p$102 === _p$8;
  }
  if (_tmp$4) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  const content_buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner2(0);
  const first_line = mizchi$markdown$$Scanner$read_line2(self.scanner);
  moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, first_line);
  const _p$9 = mizchi$markdown$$Scanner$peek2(self.scanner);
  const _p$10 = 10;
  let _tmp$5;
  if (_p$9 === -1) {
    _tmp$5 = false;
  } else {
    const _p$11 = _p$9;
    const _p$12 = _p$11;
    _tmp$5 = _p$12 === _p$10;
  }
  if (_tmp$5) {
    mizchi$markdown$$Scanner$advance2(self.scanner, 1);
  }
  while (true) {
    const _p$11 = self.scanner;
    if (!(_p$11.pos >= _p$11.len)) {
      const line_start = self.scanner.pos;
      const indent = mizchi$markdown$$Scanner$skip_spaces2(self.scanner);
      if (mizchi$markdown$$Scanner$is_blank_line2(self.scanner)) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 10);
        const _p$12 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$13 = 10;
        let _tmp$6;
        if (_p$12 === -1) {
          _tmp$6 = false;
        } else {
          const _p$14 = _p$12;
          const _p$15 = _p$14;
          _tmp$6 = _p$15 === _p$13;
        }
        if (_tmp$6) {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        }
        continue;
      }
      if (indent >= 2) {
        moonbitlang$core$builtin$$Logger$write_char$8$2(content_buf, 10);
        const line = mizchi$markdown$$Scanner$read_line2(self.scanner);
        moonbitlang$core$builtin$$Logger$write_string$8$2(content_buf, line);
        const _p$12 = mizchi$markdown$$Scanner$peek2(self.scanner);
        const _p$13 = 10;
        let _tmp$6;
        if (_p$12 === -1) {
          _tmp$6 = false;
        } else {
          const _p$14 = _p$12;
          const _p$15 = _p$14;
          _tmp$6 = _p$15 === _p$13;
        }
        if (_tmp$6) {
          mizchi$markdown$$Scanner$advance2(self.scanner, 1);
        }
      } else {
        mizchi$markdown$$Scanner$restore2(self.scanner, line_start);
        break;
      }
      continue;
    } else {
      break;
    }
  }
  const content = content_buf.val;
  const inner_scanner = mizchi$markdown$$Scanner$new2(content);
  const inner_parser = mizchi$markdown$$BlockParser$new2(inner_scanner, self.strict);
  const inner_result = mizchi$markdown$$BlockParser$parse_document2(inner_parser);
  return new $64$mizchi$47$markdown$46$Block$FootnoteDefinition2(label, inner_result.document.children, mizchi$markdown$$Span$new2(start, self.scanner.pos), leading, mizchi$markdown$$empty$46$record$47$1277);
}
function mizchi$markdown$$parse$46$inner2(source, strict) {
  const scanner = mizchi$markdown$$Scanner$new2(source);
  const parser = mizchi$markdown$$BlockParser$new2(scanner, strict);
  return mizchi$markdown$$BlockParser$parse_document2(parser);
}
function kazuph$blog_admin$client$$markdown_editor2(props) {
  const title = mizchi$luna$luna$signal$$signal$1$2(props.initial_title);
  const slug = mizchi$luna$luna$signal$$signal$1$2(props.initial_slug);
  const content = mizchi$luna$luna$signal$$signal$1$2(props.initial_content);
  const status = mizchi$luna$luna$signal$$signal$1$2(props.initial_status);
  const is_submitting = mizchi$luna$luna$signal$$signal$40$2(false);
  const result_msg = mizchi$luna$luna$signal$$signal$1$2("");
  const is_error = mizchi$luna$luna$signal$$signal$40$2(false);
  const saved_slug = mizchi$luna$luna$signal$$signal$1$2("");
  const render_preview = () => {
    const md_content = mizchi$luna$luna$signal$$Signal$get$1$2(content);
    if (md_content === "") {
      return '<p style="color: #999;">\u30D7\u30EC\u30D3\u30E5\u30FC\u304C\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059...</p>';
    }
    const result = mizchi$markdown$$parse$46$inner2(md_content, false);
    return mizchi$markdown$$render_html2(result.document);
  };
  const handle_submit = (e) => {
    mizchi$js$browser$dom$$FormEvent$preventDefault2(e);
    mizchi$luna$luna$signal$$Signal$set$40$2(is_submitting, true);
    mizchi$luna$luna$signal$$Signal$set$40$2(is_error, false);
    mizchi$luna$luna$signal$$Signal$set$1$2(result_msg, "\u9001\u4FE1\u4E2D...");
    const form_data = kazuph$blog_admin$client$$get_form_data_from_form2(e, props.post_id);
    const handle_response = (response) => {
      switch (response.$tag) {
        case 0: {
          const _Success = response;
          const _data = _Success._0;
          mizchi$luna$luna$signal$$Signal$set$40$2(is_submitting, false);
          const msg = kazuph$blog_admin$client$$get_message2(_data);
          const slug_val = kazuph$blog_admin$client$$get_slug2(_data);
          mizchi$luna$luna$signal$$Signal$set$1$2(result_msg, msg);
          mizchi$luna$luna$signal$$Signal$set$1$2(saved_slug, slug_val);
          return;
        }
        case 2: {
          const _Error = response;
          const _error_msg = _Error._1;
          mizchi$luna$luna$signal$$Signal$set$40$2(is_submitting, false);
          mizchi$luna$luna$signal$$Signal$set$40$2(is_error, true);
          mizchi$luna$luna$signal$$Signal$set$1$2(result_msg, _error_msg);
          return;
        }
        case 3: {
          const _NetworkError = response;
          const _error_msg$2 = _NetworkError._0;
          mizchi$luna$luna$signal$$Signal$set$40$2(is_submitting, false);
          mizchi$luna$luna$signal$$Signal$set$40$2(is_error, true);
          mizchi$luna$luna$signal$$Signal$set$1$2(result_msg, `\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC: ${_error_msg$2}`);
          return;
        }
        default: {
          const _Redirect = response;
          const _url = _Redirect._0;
          mizchi$luna$luna$signal$$Signal$set$40$2(is_submitting, false);
          mizchi$luna$luna$signal$$Signal$set$1$2(result_msg, `\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8: ${_url}`);
          kazuph$blog_admin$client$$redirect_to2(_url);
          return;
        }
      }
    };
    mizchi$luna$sol$action$$invoke_action2(props.action_url, form_data, handle_response, void 0);
  };
  const on_title_input = (e) => {
    const target = mizchi$js$browser$dom$$InputEvent$target2(e);
    mizchi$luna$luna$signal$$Signal$set$1$2(title, target.value);
    if (mizchi$luna$luna$signal$$Signal$get$1$2(slug) === "") {
      mizchi$luna$luna$signal$$Signal$set$1$2(slug, kazuph$blog_admin$client$$generate_slug2(target.value));
      return;
    } else {
      return;
    }
  };
  const on_slug_input = (e) => {
    const target = mizchi$js$browser$dom$$InputEvent$target2(e);
    mizchi$luna$luna$signal$$Signal$set$1$2(slug, target.value);
  };
  const on_content_input = (e) => {
    const target = mizchi$js$browser$dom$$InputEvent$target2(e);
    mizchi$luna$luna$signal$$Signal$set$1$2(content, target.value);
  };
  return mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24542, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24552, void 0, () => {
    if (mizchi$luna$luna$signal$$Signal$get$40$2(is_error)) {
      return "form-result error";
    } else {
      const _p = mizchi$luna$luna$signal$$Signal$get$1$2(result_msg);
      const _p$2 = "";
      if (!(_p === _p$2)) {
        return "form-result success";
      } else {
        return "form-result";
      }
    }
  }, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text_of$1$2(result_msg)]), mizchi$luna$luna$dom$element$$show2(() => {
    const _p = mizchi$luna$luna$signal$$Signal$get$1$2(saved_slug);
    const _p$2 = "";
    return !(_p === _p$2);
  }, () => {
    const slug_val = mizchi$luna$luna$signal$$Signal$get$1$2(saved_slug);
    return mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24562, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$span2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2457, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u2713 \u4FDD\u5B58\u3057\u307E\u3057\u305F")]), mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24582, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$button2(-1, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24592, void 0, void 0, void 0, void 0, new Option$Some$8$2(mizchi$luna$luna$dom$element$$HandlerMap$click2(mizchi$luna$luna$dom$element$$events2(), (_discard_) => {
      kazuph$blog_admin$client$$redirect_to2("/admin");
    })), void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u2190 \u8A18\u4E8B\u4E00\u89A7\u3078")]), mizchi$luna$luna$dom$element$$button2(-1, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24602, void 0, void 0, void 0, void 0, new Option$Some$8$2(mizchi$luna$luna$dom$element$$HandlerMap$click2(mizchi$luna$luna$dom$element$$events2(), (_discard_) => {
      kazuph$blog_admin$client$$redirect_to2(`/posts/${slug_val}`);
    })), void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u8A18\u4E8B\u3092\u898B\u308B \u2192")])])]);
  }), mizchi$luna$luna$dom$element$$form2(void 0, void 0, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24612, void 0, void 0, void 0, new Option$Some$8$2(mizchi$luna$luna$dom$element$$HandlerMap$submit2(mizchi$luna$luna$dom$element$$events2(), handle_submit)), void 0, new Option$Some$9$2([{ _0: "action", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$Attr$AttrString2(props.action_url) }, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2463]), Option$None$10$2, [mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2464, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$label2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$24652, void 0, void 0, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u30BF\u30A4\u30C8\u30EB")]), mizchi$luna$luna$dom$element$$input2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2466, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24672, props.initial_title, void 0, -1, -1, -1, -1, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24682, void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Option$Some$8$2(mizchi$luna$luna$dom$element$$HandlerMap$input2(mizchi$luna$luna$dom$element$$events2(), on_title_input)), void 0, new Option$Some$9$2([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2470, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2472]), Option$None$10$2)]), mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2473, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$label2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$24742, void 0, void 0, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u30B9\u30E9\u30C3\u30B0 (URL)")]), mizchi$luna$luna$dom$element$$input2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2475, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24762, props.initial_slug, void 0, -1, -1, -1, -1, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2477, void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Option$Some$8$2(mizchi$luna$luna$dom$element$$HandlerMap$input2(mizchi$luna$luna$dom$element$$events2(), on_slug_input)), void 0, new Option$Some$9$2([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2479, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$24812, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$24832]), Option$None$10$2)]), mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24842, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$label2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2485, void 0, void 0, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u30B9\u30C6\u30FC\u30BF\u30B9")]), mizchi$luna$luna$dom$element$$create_element2("select", [kazuph$blog_admin$client$$markdown_editor$46$tuple$47$24872, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2489, { _0: "oninput", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Handler2((e) => {
    const target = e;
    mizchi$luna$luna$signal$$Signal$set$1$2(status, target.value);
  }) }], [mizchi$luna$luna$dom$element$$create_element2("option", [kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2491, { _0: "selected", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(props.initial_status === "draft" || props.initial_status === "" ? "true" : "") }], [mizchi$luna$luna$dom$element$$text2("\u4E0B\u66F8\u304D")]), mizchi$luna$luna$dom$element$$create_element2("option", [kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2493, { _0: "selected", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Static2(props.initial_status === "published" ? "true" : "") }], [mizchi$luna$luna$dom$element$$text2("\u516C\u958B")])])]), mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24942, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24952, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, new Option$Some$10$2([{ _0: "__innerHTML", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(render_preview) }]), []), mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2496, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$label2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$24972, void 0, void 0, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$text2("\u30B3\u30F3\u30C6\u30F3\u30C4 (Markdown)")]), mizchi$luna$luna$dom$element$$textarea2(kazuph$blog_admin$client$$markdown_editor$46$constr$47$2498, void 0, -1, kazuph$blog_admin$client$$markdown_editor$46$constr$47$24992, kazuph$blog_admin$client$$markdown_editor$46$constr$47$25002, void 0, void 0, void 0, new Option$Some$8$2(mizchi$luna$luna$dom$element$$HandlerMap$input2(mizchi$luna$luna$dom$element$$events2(), on_content_input)), void 0, new Option$Some$9$2([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$25022, kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2504]), Option$None$10$2, [mizchi$luna$luna$dom$element$$text2(props.initial_content)])])]), mizchi$luna$luna$dom$element$$div2(void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2505, void 0, void 0, void 0, Option$None$8$2, void 0, Option$None$9$2, Option$None$10$2, [mizchi$luna$luna$dom$element$$button2(-1, void 0, kazuph$blog_admin$client$$markdown_editor$46$constr$47$2506, void 0, void 0, void 0, void 0, Option$None$8$2, void 0, new Option$Some$9$2([kazuph$blog_admin$client$$markdown_editor$46$tuple$47$2508]), new Option$Some$10$2([{ _0: "disabled", _1: new $64$mizchi$47$luna$47$luna$47$dom$47$element$46$AttrValue$Dynamic2(() => mizchi$luna$luna$signal$$Signal$get$40$2(is_submitting) ? "true" : "__remove__") }]), [mizchi$luna$luna$dom$element$$text2(props.post_id === "" ? "\u4F5C\u6210\u3059\u308B" : "\u66F4\u65B0\u3059\u308B")])])])]);
}
function mizchi$luna$luna$dom$$hydrate_auto_dom$46$inner(element, node, is_rerender) {
  if (mizchi$luna$luna$dom$$has_shadow_root(element)) {
    const shadow_root = mizchi$luna$luna$dom$$get_shadow_root_as_element(element);
    mizchi$luna$luna$dom$$console_log_wc(`[${mizchi$js$browser$dom$$Element$tagName(element)}] WC mode - replacing shadow DOM content`);
    const new_content = mizchi$luna$luna$dom$element$$DomNode$to_dom2(node);
    const doc = mizchi$js$browser$dom$$document2();
    const fragment = mizchi$js$browser$dom$$Document$createDocumentFragment2(doc);
    const styles = mizchi$luna$luna$dom$$extract_style_elements(shadow_root);
    const _len = styles.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const style = styles[_i];
        mizchi$js$browser$dom$$Node$appendChild2(fragment, style);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    mizchi$js$browser$dom$$Node$appendChild2(fragment, new_content);
    mizchi$js$browser$dom$$Node$setTextContent2(shadow_root, "");
    mizchi$js$browser$dom$$Node$appendChild2(shadow_root, fragment);
    return;
  } else {
    const el = mizchi$luna$luna$dom$element$$DomElement$from_dom2(element);
    mizchi$luna$luna$dom$element$$render(el, node);
    return;
  }
}
function kazuph$blog_admin$__gen__$client$$__sol_internal__client_markdown_editor(element, state, _id, is_rerender) {
  const jsdom_el = element;
  const props = state;
  const node = kazuph$blog_admin$client$$markdown_editor2(props);
  mizchi$luna$luna$dom$$hydrate_auto_dom$46$inner(jsdom_el, node, is_rerender);
}

// .sol/prod/client/markdown_editor.js
var markdown_editor_default = kazuph$blog_admin$__gen__$client$$__sol_internal__client_markdown_editor;
export {
  markdown_editor_default as default,
  kazuph$blog_admin$__gen__$client$$__sol_internal__client_markdown_editor as hydrate,
  kazuph$blog_admin$client$$markdown_editor as markdown_editor
};
//# sourceMappingURL=markdown_editor.js.map
