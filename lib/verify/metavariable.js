"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return verifyMetavariable;
    },
    verifyStandaloneMetavariable: function() {
        return verifyStandaloneMetavariable;
    }
});
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _metavariable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/metavariable"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/argument/term"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type"), argumentNodeQuery = (0, _query.nodeQuery)("/metavariable/argument!");
function verifyMetavariable(metavariableNode, metaTypeNode, fileContext) {
    var metavariableVerified = false;
    var metavariableString = fileContext.nodeAsString(metavariableNode);
    fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariablePresent = fileContext.isMetavariablePresentByMetavariableNode(metavariableNode);
    if (metavariablePresent) {
        fileContext.debug("The metavariable '".concat(metavariableString, "' is already present."), metavariableNode);
    } else {
        var termTypes = [], metaTypes = [], argumentNode = argumentNodeQuery(metavariableNode), argumentVerified = verifyArgument(argumentNode, termTypes, fileContext), metaTypeVerified = verifyMetaType(metaTypeNode, metaTypes, fileContext);
        if (argumentVerified && metaTypeVerified) {
            var termType, metaType;
            var firstMetaType = (0, _array.first)(metaTypes);
            metaType = firstMetaType; ///
            var termTypesLength = termTypes.length;
            if (termTypesLength === 0) {
                termType = null;
            } else {
                var firstTermType = (0, _array.first)(termTypes);
                termType = firstTermType; ///
            }
            var node = metavariableNode, name = (0, _name.nameFromMetavariableNode)(metavariableNode), metavariable = _metavariable.default.fromNodeNameTermTypeAndMetaType(node, name, termType, metaType), metavariableAssignment = _metavariable1.default.fromMetavariable(metavariable), metavariableAssigned = metavariableAssignment.assign(fileContext);
            if (metavariableAssigned) {
                metavariableVerified = true;
            }
        }
    }
    if (metavariableVerified) {
        fileContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}
function verifyStandaloneMetavariable(metavariableNode, localMetaContext, verifyAhead) {
    var standaloneMetavariableVerified = false;
    var metavariableString = localMetaContext.nodeAsString(metavariableNode);
    localMetaContext.trace("Verifying the '".concat(metavariableString, "' standalone metavariable..."), metavariableNode);
    var metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext);
    if (metavariablePresent) {
        var verifiedAhead = verifyAhead();
        standaloneMetavariableVerified = verifiedAhead; ///
    }
    if (standaloneMetavariableVerified) {
        localMetaContext.debug("...verified the '".concat(metavariableString, "' standalone metavariable."), metavariableNode);
    }
    return standaloneMetavariableVerified;
}
function verifyArgument(argumentNode, termTypes, fileContext) {
    var argumentVerified = false;
    if (argumentNode === null) {
        argumentVerified = true;
    } else {
        var termNode = termNodeQuery(argumentNode);
        if (termNode === null) {} else {
            var termString = fileContext.nodeAsString(termNode);
            fileContext.debug("The '".concat(termString, "' term was found when a type should have been present."), termNode);
        }
        var typeNode = typeNodeQuery(argumentNode);
        if (typeNode !== null) {
            var type = fileContext.findTypeByTypeNode(typeNode);
            if (type !== null) {
                var termType = type; ///
                termTypes.push(termType);
                argumentVerified = true;
            } else {
                var typeString = fileContext.nodeAsString(typeNode);
                fileContext.debug("The '".concat(typeString, "' type is not present."), typeNode);
            }
        }
    }
    return argumentVerified;
}
function verifyMetaType(metaTypeNode, metaTypes, fileContext) {
    var metaTypeVerified;
    var metaType = fileContext.findMetaTypeByMetaTypeNode(metaTypeNode);
    metaTypes.push(metaType);
    metaTypeVerified = true;
    return metaTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtVHlwZXMgPSBbXSxcbiAgICAgICAgICBtZXRhVHlwZXMgPSBbXSxcbiAgICAgICAgICBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCB0ZXJtVHlwZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZVZlcmlmaWVkID0gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChhcmd1bWVudFZlcmlmaWVkICYmIG1ldGFUeXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB0ZXJtVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZTtcblxuICAgICAgY29uc3QgZmlyc3RNZXRhVHlwZSA9IGZpcnN0KG1ldGFUeXBlcyk7XG5cbiAgICAgIG1ldGFUeXBlID0gZmlyc3RNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlc0xlbmd0aCA9IHRlcm1UeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0ZXJtVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGVybVR5cGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtVHlwZSA9IGZpcnN0KHRlcm1UeXBlcyk7XG5cbiAgICAgICAgdGVybVR5cGUgPSBmaXJzdFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWdubWVudCA9IE1ldGF2YXJpYWJsZUFzc2lnbm1lbnQuZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWduZWQgPSBtZXRhdmFyaWFibGVBc3NpZ25tZW50LmFzc2lnbihmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVBc3NpZ25lZCkge1xuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIHN0YW5kYWxvbmUgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsTWV0YUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgc3RhbmRhbG9uZSBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIHRlcm1UeXBlcywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgYXJndW1lbnRWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3YXMgZm91bmQgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHR5cGU7ICAvLy9cblxuICAgICAgICB0ZXJtVHlwZXMucHVzaCh0ZXJtVHlwZSk7XG5cbiAgICAgICAgYXJndW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKTtcblxuICBtZXRhVHlwZXMucHVzaChtZXRhVHlwZSk7XG5cbiAgbWV0YVR5cGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIG1ldGFUeXBlVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeU1ldGF2YXJpYWJsZSIsInZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImFyZ3VtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlTm9kZSIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJkZWJ1ZyIsInRlcm1UeXBlcyIsIm1ldGFUeXBlcyIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsIm1ldGFUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhVHlwZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJmaXJzdE1ldGFUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRlcm1UeXBlIiwibm9kZSIsIm5hbWUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlQXNzaWdubWVudCIsIk1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQXNzaWduZWQiLCJhc3NpZ24iLCJsb2NhbE1ldGFDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidGVybU5vZGUiLCJ0ZXJtU3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwicHVzaCIsInR5cGVTdHJpbmciLCJmaW5kTWV0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