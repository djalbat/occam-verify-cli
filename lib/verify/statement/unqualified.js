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
var _unqualifiedStatement = /*#__PURE__*/ _interop_require_default(require("../../unify/unqualifiedStatement"));
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
            var unqualifiedStatementUnified = (0, _unqualifiedStatement.default)(unqualifiedStatementNode, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5pbXBvcnQgdW5pZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdW5pZnkvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGF0ZW1lbnRUcml2aWFsbHkgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICghdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGlmICghdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkVHJpdmlhbGx5ID0gdmVyaWZ5U3RhdGVtZW50VHJpdmlhbGx5KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZFRyaXZpYWxseSkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2lnbm1lbnRzQXNzaWduZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50VmVyaWZpZWRUcml2aWFsbHkiLCJ2ZXJpZnlTdGF0ZW1lbnRUcml2aWFsbHkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7OztpRUFUSTsyRUFDVTtxQkFFWjsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEMsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLDJCQUEyQkcsd0JBQXdCLEVBQUVDLFlBQVk7SUFDdkYsSUFBSUMsK0JBQStCO0lBRW5DLElBQU1DLDZCQUE2QkYsYUFBYUcsWUFBWSxDQUFDSjtJQUU3REMsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTRDLE9BQTNCRiw0QkFBMkIsK0JBQTZCSDtJQUU3RixJQUFJLENBQUNFLDhCQUE4QjtRQUNqQyxJQUFNSSxTQUFTLE1BQ1RDLGNBQWMsRUFBRSxFQUNoQkMsZ0JBQWdCVixtQkFBbUJFLDJCQUNuQ1Msb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDRixlQUFlRCxhQUFhRCxRQUFRTDtRQUU5RSxJQUFJUSxtQkFBbUI7WUFDckIsSUFBTUUsOEJBQThCQyxJQUFBQSw2QkFBeUIsRUFBQ1osMEJBQTBCQztZQUV4RkMsK0JBQStCUyw2QkFBNkIsR0FBRztRQUNqRTtJQUNGO0lBRUEsSUFBSSxDQUFDVCw4QkFBOEI7UUFDakMsSUFBTUksVUFBUyxPQUNUQyxlQUFjLEVBQUUsRUFDaEJDLGlCQUFnQlYsbUJBQW1CRSwyQkFDbkNTLHFCQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0YsZ0JBQWVELGNBQWFELFNBQVFMO1FBRTlFLElBQUlRLG9CQUFtQjtZQUNyQixJQUFNSSw2QkFBNkJDLElBQUFBLG1DQUF3QixFQUFDTixnQkFBZVA7WUFFM0UsSUFBSVksNEJBQTRCO2dCQUM5QixJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDVCxjQUFhTjtnQkFFM0RDLCtCQUErQmEscUJBQXNCLEdBQUc7WUFDMUQ7UUFDRjtJQUNGO0lBRUEsSUFBSWIsOEJBQThCO1FBQ2hDRCxhQUFhZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQThDLE9BQTNCZCw0QkFBMkIsNkJBQTJCSDtJQUMvRjtJQUVBLE9BQU9FO0FBQ1QifQ==