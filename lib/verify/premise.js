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
var _statement = /*#__PURE__*/ _interop_require_default(require("../verify/statement"));
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
        var stated = true, assignments = [], statementNode = statementNodeQuery(unqualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, assignments, stated, localContext);
        if (statementVerified) {
            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
            if (assignmentsAssigned) {
                var metaproofStep = _proofStep.default.fromStatementNode(statementNode), premise = _premise.default.fromStatementNode(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4uL3ByZW1pc2VcIjtcbmltcG9ydCBQcm9vZlN0ZXAgZnJvbSBcIi4uL3Byb29mU3RlcFwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3VucXVhbGlmaWVkU3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UHJlbWlzZShwcmVtaXNlTm9kZSwgcHJlbWlzZXMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgcHJlbWlzZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHByZW1pc2VTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHByZW1pc2VOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gLCBwcmVtaXNlTm9kZSk7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJlbWlzZU5vZGUpO1xuXG4gIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgY29uc3QgbWV0YXByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJlbWlzZXMucHVzaChwcmVtaXNlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIHByZW1pc2VWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmAsIHByZW1pc2VOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UHJlbWlzZSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwicHJlbWlzZU5vZGUiLCJwcmVtaXNlcyIsImxvY2FsQ29udGV4dCIsInByZW1pc2VWZXJpZmllZCIsInByZW1pc2VTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwibWV0YXByb29mU3RlcCIsIlByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIiwicHJlbWlzZSIsIlByZW1pc2UiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7OERBVko7Z0VBQ0U7Z0VBQ007cUJBRUY7MkJBQ1E7Ozs7OztBQUVsQyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMscUNBQy9CQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsY0FBY0ksV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFlBQVk7SUFDdkUsSUFBSUM7SUFFSixJQUFNQyxnQkFBZ0JGLGFBQWFHLFlBQVksQ0FBQ0w7SUFFaERFLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUErQixPQUFkRixlQUFjLGlCQUFlSjtJQUVsRSxJQUFNTywyQkFBMkJSLDhCQUE4QkM7SUFFL0QsSUFBSU8sNkJBQTZCLE1BQU07UUFDckMsSUFBTUMsU0FBUyxNQUNUQyxjQUFjLEVBQUUsRUFDaEJDLGdCQUFnQmIsbUJBQW1CVSwyQkFDbkNJLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0YsZUFBZUQsYUFBYUQsUUFBUU47UUFFOUUsSUFBSVMsbUJBQW1CO1lBQ3JCLElBQU1FLHNCQUFzQkMsSUFBQUEsOEJBQWlCLEVBQUNMLGFBQWFQO1lBRTNELElBQUlXLHFCQUFxQjtnQkFDdkIsSUFBTUUsZ0JBQWdCQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ1AsZ0JBQzVDUSxVQUFVQyxnQkFBTyxDQUFDRixpQkFBaUIsQ0FBQ1A7Z0JBRTFDVCxTQUFTbUIsSUFBSSxDQUFDRjtnQkFFZGhCLGFBQWFtQixZQUFZLENBQUNOO2dCQUUxQlosa0JBQWtCO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGlCQUFpQjtRQUNuQkQsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkbEIsZUFBYyxlQUFhSjtJQUNwRTtJQUVBLE9BQU9HO0FBQ1QifQ==