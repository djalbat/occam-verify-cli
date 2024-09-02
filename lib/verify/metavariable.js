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
function verifyStandaloneMetavariable(metavariableNode, localContext, verifyAhead) {
    var standaloneMetavariableVerified = false;
    var metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' standalone metavariable..."), metavariableNode);
    var metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode, localContext);
    if (metavariablePresent) {
        var verifiedAhead = verifyAhead();
        standaloneMetavariableVerified = verifiedAhead; ///
    }
    if (standaloneMetavariableVerified) {
        localContext.debug("...verified the '".concat(metavariableString, "' standalone metavariable."), metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtVHlwZXMgPSBbXSxcbiAgICAgICAgICBtZXRhVHlwZXMgPSBbXSxcbiAgICAgICAgICBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCB0ZXJtVHlwZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZVZlcmlmaWVkID0gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChhcmd1bWVudFZlcmlmaWVkICYmIG1ldGFUeXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB0ZXJtVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZTtcblxuICAgICAgY29uc3QgZmlyc3RNZXRhVHlwZSA9IGZpcnN0KG1ldGFUeXBlcyk7XG5cbiAgICAgIG1ldGFUeXBlID0gZmlyc3RNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlc0xlbmd0aCA9IHRlcm1UeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0ZXJtVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGVybVR5cGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtVHlwZSA9IGZpcnN0KHRlcm1UeXBlcyk7XG5cbiAgICAgICAgdGVybVR5cGUgPSBmaXJzdFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWdubWVudCA9IE1ldGF2YXJpYWJsZUFzc2lnbm1lbnQuZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWduZWQgPSBtZXRhdmFyaWFibGVBc3NpZ25tZW50LmFzc2lnbihmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVBc3NpZ25lZCkge1xuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIHN0YW5kYWxvbmUgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgc3RhbmRhbG9uZSBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIHRlcm1UeXBlcywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgYXJndW1lbnRWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3YXMgZm91bmQgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHR5cGU7ICAvLy9cblxuICAgICAgICB0ZXJtVHlwZXMucHVzaCh0ZXJtVHlwZSk7XG5cbiAgICAgICAgYXJndW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKTtcblxuICBtZXRhVHlwZXMucHVzaChtZXRhVHlwZSk7XG5cbiAgbWV0YVR5cGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIG1ldGFUeXBlVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeU1ldGF2YXJpYWJsZSIsInZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImFyZ3VtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlTm9kZSIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJkZWJ1ZyIsInRlcm1UeXBlcyIsIm1ldGFUeXBlcyIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsIm1ldGFUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhVHlwZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJmaXJzdE1ldGFUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRlcm1UeXBlIiwibm9kZSIsIm5hbWUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJmcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlQXNzaWdubWVudCIsIk1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQXNzaWduZWQiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ0ZXJtTm9kZSIsInRlcm1TdHJpbmciLCJ0eXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJwdXNoIiwidHlwZVN0cmluZyIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlIl0sIm1hcHBp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