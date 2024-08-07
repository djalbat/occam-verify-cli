"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyPremise;
    }
});
var _premise = /*#__PURE__*/ _interop_require_default(require("../premise"));
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../step/metaproof"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/metastatement/unqualified"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metastatementNodeQuery = (0, _query.nodeQuery)("/unqualifiedMetastatement/metastatement!"), unqualifiedMetastatementNodeQuery = (0, _query.nodeQuery)("/premise/unqualifiedMetastatement!");
function verifyPremise(premiseNode, premises, localMetaContext) {
    var premiseVerified;
    var premiseString = localMetaContext.nodeAsString(premiseNode);
    localMetaContext.trace("Verifying the '".concat(premiseString, "' premise..."), premiseNode);
    var derived = false, unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(premiseNode), unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, derived, localMetaContext);
    if (unqualifiedMetastatementVerified) {
        var metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode), metaproofStep = _metaproof.default.fromMetastatementNode(metastatementNode), premise = _premise.default.fromMetastatementNode(metastatementNode);
        premises.push(premise);
        localMetaContext.addMetaproofStep(metaproofStep);
        premiseVerified = true;
    }
    if (premiseVerified) {
        localMetaContext.debug("...verified the '".concat(premiseString, "' premise."), premiseNode);
    }
    return premiseVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4uL3ByZW1pc2VcIjtcbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L21ldGFzdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVByZW1pc2UocHJlbWlzZU5vZGUsIHByZW1pc2VzLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBwcmVtaXNlVmVyaWZpZWQ7XG5cbiAgY29uc3QgcHJlbWlzZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKHByZW1pc2VOb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCwgcHJlbWlzZU5vZGUpO1xuXG4gIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGVRdWVyeShwcmVtaXNlTm9kZSksXG4gICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50KHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gTWV0YXByb29mU3RlcC5mcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBwcmVtaXNlcy5wdXNoKHByZW1pc2UpO1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgcHJlbWlzZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwcmVtaXNlVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgcHJlbWlzZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlQcmVtaXNlIiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsInByZW1pc2VOb2RlIiwicHJlbWlzZXMiLCJsb2NhbE1ldGFDb250ZXh0IiwicHJlbWlzZVZlcmlmaWVkIiwicHJlbWlzZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwiZGVyaXZlZCIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mU3RlcCIsIk1ldGFwcm9vZlN0ZXAiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlIiwiUHJlbWlzZSIsInB1c2giLCJhZGRNZXRhcHJvb2ZTdGVwIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7OERBVEo7Z0VBQ007a0VBQ2lCO3FCQUVqQjs7Ozs7O0FBRTFCLElBQU1DLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQyw2Q0FDbkNDLG9DQUFvQ0QsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxTQUFTRixjQUFjSSxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsZ0JBQWdCO0lBQzNFLElBQUlDO0lBRUosSUFBTUMsZ0JBQWdCRixpQkFBaUJHLFlBQVksQ0FBQ0w7SUFFcERFLGlCQUFpQkksS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWRGLGVBQWMsaUJBQWVKO0lBRXRFLElBQU1PLFVBQVUsT0FDVkMsK0JBQStCVCxrQ0FBa0NDLGNBQ2pFUyxtQ0FBbUNDLElBQUFBLG9CQUE4QixFQUFDRiw4QkFBOEJELFNBQVNMO0lBRS9HLElBQUlPLGtDQUFrQztRQUNwQyxJQUFNRSxvQkFBb0JkLHVCQUF1QlcsK0JBQzNDSSxnQkFBZ0JDLGtCQUFhLENBQUNDLHFCQUFxQixDQUFDSCxvQkFDcERJLFVBQVVDLGdCQUFPLENBQUNGLHFCQUFxQixDQUFDSDtRQUU5Q1YsU0FBU2dCLElBQUksQ0FBQ0Y7UUFFZGIsaUJBQWlCZ0IsZ0JBQWdCLENBQUNOO1FBRWxDVCxrQkFBa0I7SUFDcEI7SUFFQSxJQUFJQSxpQkFBaUI7UUFDbkJELGlCQUFpQmlCLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkZixlQUFjLGVBQWFKO0lBQ3hFO0lBRUEsT0FBT0c7QUFDVCJ9