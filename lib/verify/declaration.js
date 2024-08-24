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
var _metaTypeNames = require("../metaTypeNames");
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
            var metavariableString = localMetaContext.nodeAsString(metavariableNode), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(_metaTypeNames.LABEL_META_TYPE_NAME, "'."), declarationNode);
        }
    }
    if (declarationVerified) {
        localMetaContext.debug("...verified the '".concat(declarationString, "' declaration."), declarationNode);
    }
    return declarationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsYWJlbE1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9sYWJlbFwiO1xuaW1wb3J0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGUvbWV0YXN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBMQUJFTF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVjbGFyYXRpb24oZGVjbGFyYXRpb25Ob2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBkZWNsYXJhdGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWNsYXJhdGlvbk5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmAsIGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbE1ldGFDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGxhYmVsTWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZnlNZXRhc3RhdGVtZW50IH0gPSBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyLFxuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVjbGFyYXRpb25WZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSBpcyAnJHttZXRhVHlwZVN0cmluZ30nIHdoZW4gaXQgc2hvdWxkIGJlICcke0xBQkVMX01FVEFfVFlQRV9OQU1FfScuYCwgZGVjbGFyYXRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmAsIGRlY2xhcmF0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwiZGVjbGFyYXRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImxhYmVsTWV0YVR5cGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciLCJkZWJ1ZyIsIkxBQkVMX01FVEFfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzREQVRFO29FQUNZO3FCQUVaOzZCQUNXOzs7Ozs7QUFFckMsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUNsQ0MseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLGtCQUFrQkksZUFBZSxFQUFFQyxPQUFPLEVBQUVDLGdCQUFnQjtJQUNsRixJQUFJQyxzQkFBc0I7SUFFMUIsSUFBTUMsb0JBQW9CRixpQkFBaUJHLFlBQVksQ0FBQ0w7SUFFeERFLGlCQUFpQkksS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCRixtQkFBa0IscUJBQW1CSjtJQUU5RSxJQUFNTyxtQkFBbUJWLHNCQUFzQkcsa0JBQ3pDUSxlQUFlTixpQkFBaUJPLGtDQUFrQyxDQUFDRixrQkFBa0JMO0lBRTNGLElBQUlNLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1FLFdBQVdGLGFBQWFHLFdBQVc7UUFFekMsSUFBSUQsYUFBYUUsY0FBYSxFQUFFO1lBQzlCLElBQU1DLG9CQUFvQmQsdUJBQXVCQztZQUVqRCxJQUFJYSxzQkFBc0IsTUFBTTtnQkFDOUIsSUFBTSxBQUFFQyxzQkFBd0JDLHNCQUF5QixDQUFqREQscUJBQ0ZFLHdCQUF3QkYsb0JBQW9CRCxtQkFBbUJaLFNBQVNDLGtCQUFrQjtvQkFDeEYsSUFBTWUsZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVDtnQkFFTmQsc0JBQXNCYSx1QkFBd0IsR0FBRztZQUNuRDtRQUNGLE9BQU87WUFDTCxJQUFNRSxxQkFBcUJoQixpQkFBaUJHLFlBQVksQ0FBQ0UsbUJBQ25EWSxpQkFBaUJULFNBQVNVLFFBQVE7WUFFeENsQixpQkFBaUJtQixLQUFLLENBQUMsQUFBQyxRQUEyREYsT0FBcERELG9CQUFtQixtQ0FBdUVJLE9BQXRDSCxnQkFBZSx5QkFBNEMsT0FBckJHLG1DQUFvQixFQUFDLE9BQUt0QjtRQUNySjtJQUNGO0lBRUEsSUFBSUcscUJBQXFCO1FBQ3ZCRCxpQkFBaUJtQixLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJqQixtQkFBa0IsbUJBQWlCSjtJQUNoRjtJQUVBLE9BQU9HO0FBQ1QifQ==