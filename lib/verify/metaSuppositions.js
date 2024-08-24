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
function verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localMetaContext) {
    var metaSuppositionsVerified;
    metaSuppositionsVerified = metaSuppositionNodes.every(function(metaSuppositionNode) {
        var metaSuppositionVerified = (0, _metaSupposition.default)(metaSuppositionNode, metaSuppositions, localMetaContext);
        if (metaSuppositionVerified) {
            return true;
        }
    });
    return metaSuppositionsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YVN1cHBvc2l0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L21ldGFTdXBwb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbk5vZGVzLCBtZXRhU3VwcG9zaXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBtZXRhU3VwcG9zaXRpb25zVmVyaWZpZWQ7XG5cbiAgbWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gbWV0YVN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKG1ldGFTdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25WZXJpZmllZCA9IHZlcmlmeU1ldGFTdXBwb3NpdGlvbihtZXRhU3VwcG9zaXRpb25Ob2RlLCBtZXRhU3VwcG9zaXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhU3VwcG9zaXRpb25Ob2RlcyIsIm1ldGFTdXBwb3NpdGlvbnMiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJtZXRhU3VwcG9zaXRpb25Ob2RlIiwibWV0YVN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhU3VwcG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7c0VBRlU7Ozs7OztBQUVuQixTQUFTQSx1QkFBdUJDLG9CQUFvQixFQUFFQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCO0lBQ3JHLElBQUlDO0lBRUpBLDJCQUEyQkgscUJBQXFCSSxLQUFLLENBQUMsU0FBQ0M7UUFDckQsSUFBTUMsMEJBQTBCQyxJQUFBQSx3QkFBcUIsRUFBQ0YscUJBQXFCSixrQkFBa0JDO1FBRTdGLElBQUlJLHlCQUF5QjtZQUMzQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9IO0FBQ1QifQ==