;(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    1562: function (module, exports) {
      module.exports = function (hljs) {
        var METHOD = {
          className: 'function',
          beginKeywords: 'def',
          end: /[:={\[(\n;]/,
          excludeEnd: !0,
          contains: [
            {
              className: 'title',
              begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
            },
          ],
        }
        return {
          keywords: {
            literal: 'true false',
            keyword:
              'case class def else enum if impl import in lat rel index let match namespace switch type yield with',
          },
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            { className: 'string', begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ },
            { className: 'string', variants: [{ begin: '"', end: '"' }] },
            METHOD,
            hljs.C_NUMBER_MODE,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_flix.c66589cf6fda73011627.bundle.js.map
