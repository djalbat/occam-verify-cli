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
function verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, substitutions, localContext) {
    var metaSuppositionsVerified;
    metaSuppositionsVerified = metaSuppositionNodes.every(function(metaSuppositionNode) {
        var metaSuppositionVerified = (0, _metaSupposition.default)(metaSuppositionNode, metaSuppositions, localContext);
        if (metaSuppositionVerified) {
            return true;
        }
    });
    return metaSuppositionsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YVN1cHBvc2l0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L21ldGFTdXBwb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbk5vZGVzLCBtZXRhU3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZDtcblxuICBtZXRhU3VwcG9zaXRpb25zVmVyaWZpZWQgPSBtZXRhU3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgobWV0YVN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5TWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbk5vZGUsIG1ldGFTdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YVN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhU3VwcG9zaXRpb25zIiwibWV0YVN1cHBvc2l0aW9uTm9kZXMiLCJtZXRhU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsIm1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwibWV0YVN1cHBvc2l0aW9uTm9kZSIsIm1ldGFTdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5TWV0YVN1cHBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3NFQUZVOzs7Ozs7QUFFbkIsU0FBU0EsdUJBQXVCQyxvQkFBb0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUNoSCxJQUFJQztJQUVKQSwyQkFBMkJKLHFCQUFxQkssS0FBSyxDQUFDLFNBQUNDO1FBQ3JELElBQU1DLDBCQUEwQkMsSUFBQUEsd0JBQXFCLEVBQUNGLHFCQUFxQkwsa0JBQWtCRTtRQUU3RixJQUFJSSx5QkFBeUI7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=