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
var _query = require("../../utilities/query");
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
function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
    var unqualifiedStatementVerified;
    var unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
    localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."), unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, assignments, derived, localContext);
    if (statementVerified) {
        if (derived) {
            var statementVerifiedTrivially = (0, _statement.verifyStatementTrivially)(statementNode, localContext);
            if (statementVerifiedTrivially) {
                unqualifiedStatementVerified = true;
            } else {
                var derivedUnqualifiedStatementUnified = unifyDerivedUnqualifiedStatement(unqualifiedStatementNode, localContext);
                unqualifiedStatementVerified = derivedUnqualifiedStatementUnified; ///
            }
        } else {
            unqualifiedStatementVerified = true;
        }
    }
    if (unqualifiedStatementVerified) {
        localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."), unqualifiedStatementNode);
    }
    return unqualifiedStatementVerified;
}
function unifyDerivedUnqualifiedStatement(unqualifiedStatementNode, localContext) {
    var derivedUnqualifiedStatementUnified;
    var unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
    localContext.trace("Unifying the '".concat(unqualifiedStatementString, "' derived unqualified statement..."), unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode), statementUnified = localContext.unifyStatement(statementNode, localContext);
    derivedUnqualifiedStatementUnified = statementUnified; ///
    if (derivedUnqualifiedStatementUnified) {
        localContext.debug("...unified the '".concat(unqualifiedStatementString, "' derived unqualified statement."), unqualifiedStatementNode);
    }
    return derivedUnqualifiedStatementUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YXRlbWVudFRyaXZpYWxseSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZFRyaXZpYWxseSA9IHZlcmlmeVN0YXRlbWVudFRyaXZpYWxseShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRUcml2aWFsbHkpIHtcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlEZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5RGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGxvY2FsQ29udGV4dC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gIGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG5cbiAgaWYgKGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRWZXJpZmllZFRyaXZpYWxseSIsInZlcmlmeVN0YXRlbWVudFRyaXZpYWxseSIsImRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeURlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudCIsImRlYnVnIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7O2lFQVBJO3FCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLDJCQUEyQkcsd0JBQXdCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzdHLElBQUlDO0lBRUosSUFBTUMsNkJBQTZCRixhQUFhRyxZQUFZLENBQUNOO0lBRTdERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBNEMsT0FBM0JGLDRCQUEyQiwrQkFBNkJMO0lBRTdGLElBQU1RLGdCQUFnQlYsbUJBQW1CRSwyQkFDbkNTLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0YsZUFBZVAsYUFBYUMsU0FBU0M7SUFFL0UsSUFBSU0sbUJBQW1CO1FBQ3JCLElBQUlQLFNBQVM7WUFDWCxJQUFNUyw2QkFBNkJDLElBQUFBLG1DQUF3QixFQUFDSixlQUFlTDtZQUUzRSxJQUFJUSw0QkFBNEI7Z0JBQzlCUCwrQkFBK0I7WUFDakMsT0FBTztnQkFDTCxJQUFNUyxxQ0FBcUNDLGlDQUFpQ2QsMEJBQTBCRztnQkFFdEdDLCtCQUErQlMsb0NBQW9DLEdBQUc7WUFDeEU7UUFDRixPQUFPO1lBQ0xULCtCQUErQjtRQUNqQztJQUNGO0lBRUEsSUFBSUEsOEJBQThCO1FBQ2hDRCxhQUFhWSxLQUFLLENBQUMsQUFBQyxvQkFBOEMsT0FBM0JWLDRCQUEyQiw2QkFBMkJMO0lBQy9GO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNVLGlDQUFpQ2Qsd0JBQXdCLEVBQUVHLFlBQVk7SUFDOUUsSUFBSVU7SUFFSixJQUFNUiw2QkFBNkJGLGFBQWFHLFlBQVksQ0FBQ047SUFFN0RHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGlCQUEyQyxPQUEzQkYsNEJBQTJCLHVDQUFxQ0w7SUFFcEcsSUFBTVEsZ0JBQWdCVixtQkFBbUJFLDJCQUNuQ2dCLG1CQUFtQmIsYUFBYWMsY0FBYyxDQUFDVCxlQUFlTDtJQUVwRVUscUNBQXFDRyxrQkFBbUIsR0FBRztJQUUzRCxJQUFJSCxvQ0FBb0M7UUFDdENWLGFBQWFZLEtBQUssQ0FBQyxBQUFDLG1CQUE2QyxPQUEzQlYsNEJBQTJCLHFDQUFtQ0w7SUFDdEc7SUFFQSxPQUFPYTtBQUNUIn0=