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
        _statement.verifyStatementAsJudgement,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksIHZlcmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50LCB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5RGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50LFxuICAgIHZlcmlmeVN0YXRlZFVucXVhbGlmaWVkU3RhdGVtZW50XG4gIF07XG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbih1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBkZXJpdmVkIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IGxvY2FsQ29udGV4dC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAobWF0Y2hlc1N0YXRlbWVudE5vZGUpIHtcbiAgICAgIGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5RGVyaXZlZFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgZGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBkZXJpdmVkIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgc3RhdGVkIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZWQgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQsXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uXG4gIF07XG5cbiAgdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gIGlmIChkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBkZXJpdmVkIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50IiwidmVyaWZ5U3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzb21lIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlEZXJpdmVkU3RhdGVtZW50Iiwic3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50IiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7aUVBUEk7cUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FB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