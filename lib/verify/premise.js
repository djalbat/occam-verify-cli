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
            var assignmentAssigned = (0, _assignments.assignAssignment)(assignments, localContext);
            if (assignmentAssigned) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4uL3ByZW1pc2VcIjtcbmltcG9ydCBQcm9vZlN0ZXAgZnJvbSBcIi4uL3Byb29mU3RlcFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJlbWlzZS91bnF1YWxpZmllZFN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVByZW1pc2UocHJlbWlzZU5vZGUsIHByZW1pc2VzLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VWZXJpZmllZDtcblxuICBjb25zdCBwcmVtaXNlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhwcmVtaXNlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCwgcHJlbWlzZU5vZGUpO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByZW1pc2VOb2RlKTtcblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRBc3NpZ25lZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByZW1pc2VzLnB1c2gocHJlbWlzZSk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBwcmVtaXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcmVtaXNlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gLCBwcmVtaXNlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVByZW1pc2UiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInByZW1pc2VOb2RlIiwicHJlbWlzZXMiLCJsb2NhbENvbnRleHQiLCJwcmVtaXNlVmVyaWZpZWQiLCJwcmVtaXNlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJkZXJpdmVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhc3NpZ25tZW50QXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInByZW1pc2UiLCJQcmVtaXNlIiwicHVzaCIsImFkZFByb29mU3RlcCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzhEQVZKO2dFQUNFO2tFQUNpQjtxQkFFYjsyQkFDTzs7Ozs7O0FBRWpDLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQ0FDL0JDLGdDQUFnQ0QsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxTQUFTRixjQUFjSSxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsWUFBWTtJQUN2RSxJQUFJQztJQUVKLElBQU1DLGdCQUFnQkYsYUFBYUcsWUFBWSxDQUFDTDtJQUVoREUsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWRGLGVBQWMsaUJBQWVKO0lBRWxFLElBQU1PLDJCQUEyQlIsOEJBQThCQztJQUUvRCxJQUFJTyw2QkFBNkIsTUFBTTtRQUNyQyxJQUFNQyxVQUFVLE9BQ1ZDLGNBQWMsRUFBRSxFQUNoQkMsK0JBQStCQyxJQUFBQSxvQkFBMEIsRUFBQ0osMEJBQTBCRSxhQUFhRCxTQUFTTjtRQUVoSCxJQUFJUSw4QkFBOEI7WUFDaEMsSUFBTUUscUJBQXFCQyxJQUFBQSw2QkFBZ0IsRUFBQ0osYUFBYVA7WUFFekQsSUFBSVUsb0JBQW9CO2dCQUN0QixJQUFNRSxnQkFBZ0JqQixtQkFBbUJVLDJCQUNuQ1EsZ0JBQWdCQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQzVDSSxVQUFVQyxnQkFBTyxDQUFDRixpQkFBaUIsQ0FBQ0g7Z0JBRTFDYixTQUFTbUIsSUFBSSxDQUFDRjtnQkFFZGhCLGFBQWFtQixZQUFZLENBQUNOO2dCQUUxQlosa0JBQWtCO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGlCQUFpQjtRQUNuQkQsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkbEIsZUFBYyxlQUFhSjtJQUNwRTtJQUVBLE9BQU9HO0FBQ1QifQ==