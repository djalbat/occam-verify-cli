"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDeclaration;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("../metaType/label"));
var _metastatement = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metastatement"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable!"), metastatementNodeQuery = (0, _query.nodeQuery)("/declaration/metastatement!");
function verifyDeclaration(declarationNode, derived, localMetaContext) {
    var declarationVerified = false;
    var declarationString = localMetaContext.nodeAsString(declarationNode);
    localMetaContext.trace("Verifying the '".concat(declarationString, "' declaration..."), declarationNode);
    var metavariableNode = metavariableNodeQuery(declarationNode), metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _label.default) {
            var metastatementNode = metastatementNodeQuery(declarationNode);
            if (metastatementNode !== null) {
                var verifyMetastatement = _metastatement.default.verifyMetastatement, metastatementVerified = verifyMetastatement(metastatementNode, derived, localMetaContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                declarationVerified = metastatementVerified; ///
            }
        } else {
            var metavariableString = localMetaContext.nodeAsString(metavariableNode), labelMetaTypeName = _label.default.getName(), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(labelMetaTypeName, "'."), declarationNode);
        }
    }
    if (declarationVerified) {
        localMetaContext.debug("...verified the '".concat(declarationString, "' declaration."), declarationNode);
    }
    return declarationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsYWJlbE1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9sYWJlbFwiO1xuaW1wb3J0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGUvbWV0YXN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVjbGFyYXRpb24oZGVjbGFyYXRpb25Ob2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBkZWNsYXJhdGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWNsYXJhdGlvbk5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmAsIGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbE1ldGFDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGxhYmVsTWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZnlNZXRhc3RhdGVtZW50IH0gPSBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyLFxuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVjbGFyYXRpb25WZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGxhYmVsTWV0YVR5cGVOYW1lID0gbGFiZWxNZXRhVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtsYWJlbE1ldGFUeXBlTmFtZX0nLmAsIGRlY2xhcmF0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gLCBkZWNsYXJhdGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZSIsImRlcml2ZWQiLCJsb2NhbE1ldGFDb250ZXh0IiwiZGVjbGFyYXRpb25WZXJpZmllZCIsImRlY2xhcmF0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJsYWJlbE1ldGFUeXBlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciIsIm1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJsYWJlbE1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7NERBUkU7b0VBQ1k7cUJBRVo7Ozs7OztBQUUxQixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsK0JBQ2xDQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsU0FBU0Ysa0JBQWtCSSxlQUFlLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO0lBQ2xGLElBQUlDLHNCQUFzQjtJQUUxQixJQUFNQyxvQkFBb0JGLGlCQUFpQkcsWUFBWSxDQUFDTDtJQUV4REUsaUJBQWlCSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQixxQkFBbUJKO0lBRTlFLElBQU1PLG1CQUFtQlYsc0JBQXNCRyxrQkFDekNRLGVBQWVOLGlCQUFpQk8sa0NBQWtDLENBQUNGLGtCQUFrQkw7SUFFM0YsSUFBSU0saUJBQWlCLE1BQU07UUFDekIsSUFBTUUsV0FBV0YsYUFBYUcsV0FBVztRQUV6QyxJQUFJRCxhQUFhRSxjQUFhLEVBQUU7WUFDOUIsSUFBTUMsb0JBQW9CZCx1QkFBdUJDO1lBRWpELElBQUlhLHNCQUFzQixNQUFNO2dCQUM5QixJQUFNLEFBQUVDLHNCQUF3QkMsc0JBQXlCLENBQWpERCxxQkFDRkUsd0JBQXdCRixvQkFBb0JELG1CQUFtQlosU0FBU0Msa0JBQWtCO29CQUN4RixJQUFNZSxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVOZCxzQkFBc0JhLHVCQUF3QixHQUFHO1lBQ25EO1FBQ0YsT0FBTztZQUNMLElBQU1FLHFCQUFxQmhCLGlCQUFpQkcsWUFBWSxDQUFDRSxtQkFDbkRZLG9CQUFvQlAsY0FBYSxDQUFDUSxPQUFPLElBQ3pDQyxpQkFBaUJYLFNBQVNZLFFBQVE7WUFFeENwQixpQkFBaUJxQixLQUFLLENBQUMsQUFBQyxRQUEyREYsT0FBcERILG9CQUFtQixtQ0FBdUVDLE9BQXRDRSxnQkFBZSx5QkFBeUMsT0FBbEJGLG1CQUFrQixPQUFLbkI7UUFDbEo7SUFDRjtJQUVBLElBQUlHLHFCQUFxQjtRQUN2QkQsaUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCbkIsbUJBQWtCLG1CQUFpQko7SUFDaEY7SUFFQSxPQUFPRztBQUNUIn0=