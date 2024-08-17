"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetaSuppositions;
    }
});
var _metaSupposition = /*#__PURE__*/ _interop_require_default(require("../verify/metaSupposition"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localContext) {
    var metaSuppositionsVerified;
    metaSuppositionsVerified = metaSuppositionNodes.every(function(metaSuppositionNode) {
        var metaSuppositionVerified = (0, _metaSupposition.default)(metaSuppositionNode, metaSuppositions, localContext);
        if (metaSuppositionVerified) {
            return true;
        }
    });
    return metaSuppositionsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YVN1cHBvc2l0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L21ldGFTdXBwb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbk5vZGVzLCBtZXRhU3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZDtcblxuICBtZXRhU3VwcG9zaXRpb25zVmVyaWZpZWQgPSBtZXRhU3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgobWV0YVN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5TWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbk5vZGUsIG1ldGFTdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YVN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhU3VwcG9zaXRpb25zIiwibWV0YVN1cHBvc2l0aW9uTm9kZXMiLCJtZXRhU3VwcG9zaXRpb25zIiwibG9jYWxDb250ZXh0IiwibWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJtZXRhU3VwcG9zaXRpb25Ob2RlIiwibWV0YVN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhU3VwcG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7c0VBRlU7Ozs7OztBQUVuQixTQUFTQSx1QkFBdUJDLG9CQUFvQixFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWTtJQUNqRyxJQUFJQztJQUVKQSwyQkFBMkJILHFCQUFxQkksS0FBSyxDQUFDLFNBQUNDO1FBQ3JELElBQU1DLDBCQUEwQkMsSUFBQUEsd0JBQXFCLEVBQUNGLHFCQUFxQkosa0JBQWtCQztRQUU3RixJQUFJSSx5QkFBeUI7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=