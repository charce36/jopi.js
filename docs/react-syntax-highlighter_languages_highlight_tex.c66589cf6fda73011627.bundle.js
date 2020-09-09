;(window.webpackJsonp = window.webpackJsonp || []).push([
  [161],
  {
    1672: function (module, exports) {
      module.exports = function (hljs) {
        var COMMAND = {
          className: 'tag',
          begin: /\\/,
          relevance: 0,
          contains: [
            {
              className: 'name',
              variants: [
                { begin: /[a-zA-Z\u0430-\u044f\u0410-\u042f]+[*]?/ },
                { begin: /[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9]/ },
              ],
              starts: {
                endsWithParent: !0,
                relevance: 0,
                contains: [
                  {
                    className: 'string',
                    variants: [
                      { begin: /\[/, end: /\]/ },
                      { begin: /\{/, end: /\}/ },
                    ],
                  },
                  {
                    begin: /\s*=\s*/,
                    endsWithParent: !0,
                    relevance: 0,
                    contains: [
                      {
                        className: 'number',
                        begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/,
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }
        return {
          contains: [
            COMMAND,
            {
              className: 'formula',
              contains: [COMMAND],
              relevance: 0,
              variants: [
                { begin: /\$\$/, end: /\$\$/ },
                { begin: /\$/, end: /\$/ },
              ],
            },
            hljs.COMMENT('%', '$', { relevance: 0 }),
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_tex.c66589cf6fda73011627.bundle.js.map
