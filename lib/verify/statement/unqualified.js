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
    var verifyUnqualifiedStatementFunctions = [
        verifyDerivedUnqualifiedStatement,
        verifyStatedUnqualifiedStatement
    ];
    unqualifiedStatementVerified = verifyUnqualifiedStatementFunctions.some(function(verifyUnqualifiedStatementFunction) {
        var unqualifiedStatementVerified = verifyUnqualifiedStatementFunction(unqualifiedStatementNode, assignments, derived, localContext);
        if (unqualifiedStatementVerified) {
            return true;
        }
    });
    if (unqualifiedStatementVerified) {
        localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."), unqualifiedStatementNode);
    }
    return unqualifiedStatementVerified;
}
function verifyDerivedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
    var derivedUnqualifiedStatementVerified = false;
    if (derived) {
        var statementNode = statementNodeQuery(unqualifiedStatementNode), unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
        localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' derived unqualified statement..."), unqualifiedStatementNode);
        var matchesStatementNode = localContext.matchStatementNode(statementNode);
        if (matchesStatementNode) {
            derivedUnqualifiedStatementVerified = true;
        } else {
            var statementNode1 = statementNodeQuery(unqualifiedStatementNode), derivedStatementVerified = verifyDerivedStatement(statementNode1, assignments, derived, localContext);
            derivedUnqualifiedStatementVerified = derivedStatementVerified; ///
        }
        if (derivedUnqualifiedStatementVerified) {
            localContext.debug("...verified the '".concat(unqualifiedStatementString, "' derived unqualified statement."), unqualifiedStatementNode);
        }
    }
    return derivedUnqualifiedStatementVerified;
}
function verifyStatedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
    var statedUnqualifiedStatementVerified = false;
    if (!derived) {
        var statementNode = statementNodeQuery(unqualifiedStatementNode), unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
        localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' stated unqualified statement..."), unqualifiedStatementNode);
        var statementVerified = (0, _statement.default)(statementNode, assignments, derived, localContext);
        statedUnqualifiedStatementVerified = statementVerified; ///
        if (statedUnqualifiedStatementVerified) {
            localContext.debug("...verified the '".concat(unqualifiedStatementString, "' stated unqualified statement."), unqualifiedStatementNode);
        }
    }
    return statedUnqualifiedStatementVerified;
}
function verifyDerivedStatement(statementNode, assignments, derived, localContext) {
    var derivedStatementVerified;
    var statementString = localContext.nodeAsString(statementNode);
    localContext.trace("Verifying the '".concat(statementString, "' derived statement..."), statementNode);
    var verifyStatementFunctions = [
        _statement.verifyStatementAsEquality,
        _statement.verifyStatementAsTypeAssertion
    ];
    verifyStatementFunctions.some(function(verifyStatementFunction) {
        var derivedStatementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);
        if (derivedStatementVerified) {
            return true;
        }
    });
    derivedStatementVerified = true; ///
    if (derivedStatementVerified) {
        localContext.debug("...verified the '".concat(statementString, "' derived statement."), statementNode);
    }
    return derivedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQsXG4gICAgdmVyaWZ5U3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRcbiAgXTtcblxuICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudEZ1bmN0aW9uKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbG9jYWxDb250ZXh0Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgZGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlEZXJpdmVkU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZWQgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHN0YXRlZCB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb25cbiAgXTtcblxuICB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgaWYgKGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudCIsInNvbWUiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudE5vZGUiLCJtYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeURlcml2ZWRTdGF0ZW1lbnQiLCJzdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7aUVBUEk7cUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0csSUFBSUM7SUFFSixJQUFNQyw2QkFBNkJGLGFBQWFHLFlB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