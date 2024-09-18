"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyUnqualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interop_require_wildcard(require("../../verify/statement"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../../unify/statement/unqualified"));
var _query = require("../../utilities/query");
var _assignments = require("../../utilities/assignments");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, localContext) {
    var unqualifiedStatementVerified = false;
    var unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
    localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."), unqualifiedStatementNode);
    if (!unqualifiedStatementVerified) {
        var stated = true, assignments = [], statementNode = statementNodeQuery(unqualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, assignments, stated, localContext);
        if (statementVerified) {
            var unqualifiedStatementUnified = (0, _unqualified.default)(unqualifiedStatementNode, localContext);
            unqualifiedStatementVerified = unqualifiedStatementUnified; ///
        }
    }
    if (!unqualifiedStatementVerified) {
        var stated1 = false, assignments1 = [], statementNode1 = statementNodeQuery(unqualifiedStatementNode), statementVerified1 = (0, _statement.default)(statementNode1, assignments1, stated1, localContext);
        if (statementVerified1) {
            var statementVerifiedTrivially = (0, _statement.verifyStatementTrivially)(statementNode1, localContext);
            if (statementVerifiedTrivially) {
                var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments1, localContext);
                unqualifiedStatementVerified = assignmentsAssigned; ///
            }
        }
    }
    if (unqualifiedStatementVerified) {
        localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."), unqualifiedStatementNode);
    }
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5pbXBvcnQgdW5pZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdW5pZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50VHJpdmlhbGx5IH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS9zdGF0ZW1lbnRcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkOyAvLy9cbiAgICB9XG4gIH1cblxuICBpZiAoIXVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZFRyaXZpYWxseSA9IHZlcmlmeVN0YXRlbWVudFRyaXZpYWxseShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRUcml2aWFsbHkpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBhc3NpZ25tZW50c0Fzc2lnbmVkOyAgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkVHJpdmlhbGx5IiwidmVyaWZ5U3RhdGVtZW50VHJpdmlhbGx5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7aUVBVEk7a0VBQ1U7cUJBRVo7MkJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xDLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRiwyQkFBMkJHLHdCQUF3QixFQUFFQyxZQUFZO0lBQ3ZGLElBQUlDLCtCQUErQjtJQUVuQyxJQUFNQyw2QkFBNkJGLGFBQWFHLFlBQVksQ0FBQ0o7SUFFN0RDLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QyxPQUEzQkYsNEJBQTJCLCtCQUE2Qkg7SUFFN0YsSUFBSSxDQUFDRSw4QkFBOEI7UUFDakMsSUFBTUksU0FBUyxNQUNUQyxjQUFjLEVBQUUsRUFDaEJDLGdCQUFnQlYsbUJBQW1CRSwyQkFDbkNTLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0YsZUFBZUQsYUFBYUQsUUFBUUw7UUFFOUUsSUFBSVEsbUJBQW1CO1lBQ3JCLElBQU1FLDhCQUE4QkMsSUFBQUEsb0JBQXlCLEVBQUNaLDBCQUEwQkM7WUFFeEZDLCtCQUErQlMsNkJBQTZCLEdBQUc7UUFDakU7SUFDRjtJQUVBLElBQUksQ0FBQ1QsOEJBQThCO1FBQ2pDLElBQU1JLFVBQVMsT0FDVEMsZUFBYyxFQUFFLEVBQ2hCQyxpQkFBZ0JWLG1CQUFtQkUsMkJBQ25DUyxxQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNGLGdCQUFlRCxjQUFhRCxTQUFRTDtRQUU5RSxJQUFJUSxvQkFBbUI7WUFDckIsSUFBTUksNkJBQTZCQyxJQUFBQSxtQ0FBd0IsRUFBQ04sZ0JBQWVQO1lBRTNFLElBQUlZLDRCQUE0QjtnQkFDOUIsSUFBTUUsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ1QsY0FBYU47Z0JBRTNEQywrQkFBK0JhLHFCQUFzQixHQUFHO1lBQzFEO1FBQ0Y7SUFDRjtJQUVBLElBQUliLDhCQUE4QjtRQUNoQ0QsYUFBYWdCLEtBQUssQ0FBQyxBQUFDLG9CQUE4QyxPQUEzQmQsNEJBQTJCLDZCQUEyQkg7SUFDL0Y7SUFFQSxPQUFPRTtBQUNUIn0=