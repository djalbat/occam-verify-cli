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
    var metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtVHlwZXMgPSBbXSxcbiAgICAgICAgICBtZXRhVHlwZXMgPSBbXSxcbiAgICAgICAgICBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCB0ZXJtVHlwZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZVZlcmlmaWVkID0gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChhcmd1bWVudFZlcmlmaWVkICYmIG1ldGFUeXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB0ZXJtVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZTtcblxuICAgICAgY29uc3QgZmlyc3RNZXRhVHlwZSA9IGZpcnN0KG1ldGFUeXBlcyk7XG5cbiAgICAgIG1ldGFUeXBlID0gZmlyc3RNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlc0xlbmd0aCA9IHRlcm1UeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0ZXJtVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGVybVR5cGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtVHlwZSA9IGZpcnN0KHRlcm1UeXBlcyk7XG5cbiAgICAgICAgdGVybVR5cGUgPSBmaXJzdFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWdubWVudCA9IE1ldGF2YXJpYWJsZUFzc2lnbm1lbnQuZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWduZWQgPSBtZXRhdmFyaWFibGVBc3NpZ25tZW50LmFzc2lnbihmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVBc3NpZ25lZCkge1xuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIHN0YW5kYWxvbmUgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIHN0YW5kYWxvbmUgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCB0ZXJtVHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBhcmd1bWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlID09PSBudWxsKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2FzIGZvdW5kIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gICAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGUgPSB0eXBlOyAgLy8vXG5cbiAgICAgICAgdGVybVR5cGVzLnB1c2godGVybVR5cGUpO1xuXG4gICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFUeXBlKG1ldGFUeXBlTm9kZSwgbWV0YVR5cGVzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YVR5cGVWZXJpZmllZDtcblxuICBjb25zdCBtZXRhVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSk7XG5cbiAgbWV0YVR5cGVzLnB1c2gobWV0YVR5cGUpO1xuXG4gIG1ldGFUeXBlVmVyaWZpZWQgPSB0cnVlO1xuXG4gIHJldHVybiBtZXRhVHlwZVZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJ2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJhcmd1bWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVidWciLCJ0ZXJtVHlwZXMiLCJtZXRhVHlwZXMiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudFZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnQiLCJtZXRhVHlwZVZlcmlmaWVkIiwidmVyaWZ5TWV0YVR5cGUiLCJ0ZXJtVHlwZSIsIm1ldGFUeXBlIiwiZmlyc3RNZXRhVHlwZSIsImZpcnN0IiwidGVybVR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUZXJtVHlwZSIsIm5vZGUiLCJuYW1lIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiTWV0YXZhcmlhYmxlIiwiZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiLCJNZXRhdmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFzc2lnbmVkIiwiYXNzaWduIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidGVybU5vZGUiLCJ0ZXJtU3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwicHVzaCIsInR5cGVTdHJpbmciLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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