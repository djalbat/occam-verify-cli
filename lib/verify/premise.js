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
var _proofStep = /*#__PURE__*/ _interop_require_default(require("../proofStep"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _assignments = require("../utilities/assignments");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/premise/unqualifiedStatement!");
function verifyPremise(premiseNode, premises, localContext) {
    var premiseVerified;
    var premiseString = localContext.nodeAsString(premiseNode);
    localContext.trace("Verifying the '".concat(premiseString, "' premise..."), premiseNode);
    var unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode);
    if (unqualifiedStatementNode !== null) {
        var derived = false, assignments = [], unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments, derived, localContext);
        if (unqualifiedStatementVerified) {
            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
            if (assignmentsAssigned) {
                var statementNode = statementNodeQuery(unqualifiedStatementNode), metaproofStep = _proofStep.default.fromStatementNode(statementNode), premise = _premise.default.fromStatementNode(statementNode);
                premises.push(premise);
                localContext.addProofStep(metaproofStep);
                premiseVerified = true;
            }
        }
    }
    if (premiseVerified) {
        localContext.debug("...verified the '".concat(premiseString, "' premise."), premiseNode);
    }
    return premiseVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4uL3ByZW1pc2VcIjtcbmltcG9ydCBQcm9vZlN0ZXAgZnJvbSBcIi4uL3Byb29mU3RlcFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2UvdW5xdWFsaWZpZWRTdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQcmVtaXNlKHByZW1pc2VOb2RlLCBwcmVtaXNlcywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBwcmVtaXNlVmVyaWZpZWQ7XG5cbiAgY29uc3QgcHJlbWlzZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcocHJlbWlzZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmAsIHByZW1pc2VOb2RlKTtcblxuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcmVtaXNlTm9kZSk7XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcmVtaXNlcy5wdXNoKHByZW1pc2UpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgcHJlbWlzZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgcHJlbWlzZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlQcmVtaXNlIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VzIiwibG9jYWxDb250ZXh0IiwicHJlbWlzZVZlcmlmaWVkIiwicHJlbWlzZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwic3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInByZW1pc2UiLCJQcmVtaXNlIiwicHVzaCIsImFkZFByb29mU3RlcCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzhEQVZKO2dFQUNFO2tFQUNpQjtxQkFFYjsyQkFDUTs7Ozs7O0FBRWxDLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQ0FDL0JDLGdDQUFnQ0QsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxTQUFTRixjQUFjSSxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsWUFBWTtJQUN2RSxJQUFJQztJQUVKLElBQU1DLGdCQUFnQkYsYUFBYUcsWUFBWSxDQUFDTDtJQUVoREUsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWRGLGVBQWMsaUJBQWVKO0lBRWxFLElBQU1PLDJCQUEyQlIsOEJBQThCQztJQUUvRCxJQUFJTyw2QkFBNkIsTUFBTTtRQUNyQyxJQUFNQyxVQUFVLE9BQ1ZDLGNBQWMsRUFBRSxFQUNoQkMsK0JBQStCQyxJQUFBQSxvQkFBMEIsRUFBQ0osMEJBQTBCRSxhQUFhRCxTQUFTTjtRQUVoSCxJQUFJUSw4QkFBOEI7WUFDaEMsSUFBTUUsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ0osYUFBYVA7WUFFM0QsSUFBSVUscUJBQXFCO2dCQUN2QixJQUFNRSxnQkFBZ0JqQixtQkFBbUJVLDJCQUNuQ1EsZ0JBQWdCQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQzVDSSxVQUFVQyxnQkFBTyxDQUFDRixpQkFBaUIsQ0FBQ0g7Z0JBRTFDYixTQUFTbUIsSUFBSSxDQUFDRjtnQkFFZGhCLGFBQWFtQixZQUFZLENBQUNOO2dCQUUxQlosa0JBQWtCO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGlCQUFpQjtRQUNuQkQsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkbEIsZUFBYyxlQUFhSjtJQUNwRTtJQUVBLE9BQU9HO0FBQ1QifQ==