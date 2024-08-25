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
var _reference = /*#__PURE__*/ _interop_require_default(require("../metaType/reference"));
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
        if (metaType === _reference.default) {
            var metastatementNode = metastatementNodeQuery(declarationNode);
            if (metastatementNode !== null) {
                var verifyMetastatement = _metastatement.default.verifyMetastatement, assignments = [], metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                declarationVerified = metastatementVerified; ///
            }
        } else {
            var referenceMetaTypeName = _reference.default.getName(), metavariableString = localMetaContext.nodeAsString(metavariableNode), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(referenceMetaTypeName, "'."), declarationNode);
        }
    }
    if (declarationVerified) {
        localMetaContext.debug("...verified the '".concat(declarationString, "' declaration."), declarationNode);
    }
    return declarationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZWZlcmVuY2VNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvcmVmZXJlbmNlXCI7XG5pbXBvcnQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS9tZXRhc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCwgZGVjbGFyYXRpb25Ob2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gcmVmZXJlbmNlTWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZnlNZXRhc3RhdGVtZW50IH0gPSBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGVOYW1lID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtyZWZlcmVuY2VNZXRhVHlwZU5hbWV9Jy5gLCBkZWNsYXJhdGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCwgZGVjbGFyYXRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZXJpdmVkIiwibG9jYWxNZXRhQ29udGV4dCIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJkZWNsYXJhdGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwiYXNzaWdubWVudHMiLCJtZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwicmVmZXJlbmNlTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OztnRUFSTTtvRUFDUTtxQkFFWjs7Ozs7O0FBRTFCLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQywrQkFDbENDLHlCQUF5QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTRixrQkFBa0JJLGVBQWUsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDbEYsSUFBSUMsc0JBQXNCO0lBRTFCLElBQU1DLG9CQUFvQkYsaUJBQWlCRyxZQUFZLENBQUNMO0lBRXhERSxpQkFBaUJJLEtBQUssQ0FBQyxBQUFDLGtCQUFtQyxPQUFsQkYsbUJBQWtCLHFCQUFtQko7SUFFOUUsSUFBTU8sbUJBQW1CVixzQkFBc0JHLGtCQUN6Q1EsZUFBZU4saUJBQWlCTyxrQ0FBa0MsQ0FBQ0Ysa0JBQWtCTDtJQUUzRixJQUFJTSxpQkFBaUIsTUFBTTtRQUN6QixJQUFNRSxXQUFXRixhQUFhRyxXQUFXO1FBRXpDLElBQUlELGFBQWFFLGtCQUFpQixFQUFFO1lBQ2xDLElBQU1DLG9CQUFvQmQsdUJBQXVCQztZQUVqRCxJQUFJYSxzQkFBc0IsTUFBTTtnQkFDOUIsSUFBTSxBQUFFQyxzQkFBd0JDLHNCQUF5QixDQUFqREQscUJBQ0ZFLGNBQWMsRUFBRSxFQUNoQkMsd0JBQXdCSCxvQkFBb0JELG1CQUFtQkcsYUFBYWYsU0FBU0Msa0JBQWtCO29CQUNyRyxJQUFNZ0IsZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVDtnQkFFTmYsc0JBQXNCYyx1QkFBd0IsR0FBRztZQUNuRDtRQUNGLE9BQU87WUFDTCxJQUFNRSx3QkFBd0JQLGtCQUFpQixDQUFDUSxPQUFPLElBQ2pEQyxxQkFBcUJuQixpQkFBaUJHLFlBQVksQ0FBQ0UsbUJBQ25EZSxpQkFBaUJaLFNBQVNhLFFBQVE7WUFFeENyQixpQkFBaUJzQixLQUFLLENBQUMsQUFBQyxRQUEyREYsT0FBcERELG9CQUFtQixtQ0FBdUVGLE9BQXRDRyxnQkFBZSx5QkFBNkMsT0FBdEJILHVCQUFzQixPQUFLbkI7UUFDdEo7SUFDRjtJQUVBLElBQUlHLHFCQUFxQjtRQUN2QkQsaUJBQWlCc0IsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCcEIsbUJBQWtCLG1CQUFpQko7SUFDaEY7SUFFQSxPQUFPRztBQUNUIn0=