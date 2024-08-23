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
    var name = (0, _name.nameFromMetavariableNode)(metavariableNode), metavariablePresent = fileContext.isMetavariablePresentByName(name);
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
            var node = metavariableNode, metavariable = _metavariable.default.fromNodeNameTermTypeAndMetaType(node, name, termType, metaType), metavariableAssignment = _metavariable1.default.fromMetavariable(metavariable), metavariableAssigned = metavariableAssignment.assign(fileContext);
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
    var metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TmFtZShuYW1lKTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtVHlwZXMgPSBbXSxcbiAgICAgICAgICBtZXRhVHlwZXMgPSBbXSxcbiAgICAgICAgICBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCB0ZXJtVHlwZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZVZlcmlmaWVkID0gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChhcmd1bWVudFZlcmlmaWVkICYmIG1ldGFUeXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB0ZXJtVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZTtcblxuICAgICAgY29uc3QgZmlyc3RNZXRhVHlwZSA9IGZpcnN0KG1ldGFUeXBlcyk7XG5cbiAgICAgIG1ldGFUeXBlID0gZmlyc3RNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlc0xlbmd0aCA9IHRlcm1UeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0ZXJtVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGVybVR5cGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtVHlwZSA9IGZpcnN0KHRlcm1UeXBlcyk7XG5cbiAgICAgICAgdGVybVR5cGUgPSBmaXJzdFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTm9kZU5hbWVUZXJtVHlwZUFuZE1ldGFUeXBlKG5vZGUsIG5hbWUsIHRlcm1UeXBlLCBtZXRhVHlwZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVBc3NpZ25tZW50ID0gTWV0YXZhcmlhYmxlQXNzaWdubWVudC5mcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVBc3NpZ25lZCA9IG1ldGF2YXJpYWJsZUFzc2lnbm1lbnQuYXNzaWduKGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZUFzc2lnbmVkKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgc3RhbmRhbG9uZSBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gbG9jYWxNZXRhQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBzdGFuZGFsb25lIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFyZ3VtZW50KGFyZ3VtZW50Tm9kZSwgdGVybVR5cGVzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgYXJndW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICBhcmd1bWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdhcyBmb3VuZCB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgIHRlcm1UeXBlcy5wdXNoKHRlcm1UeXBlKTtcblxuICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhVHlwZShtZXRhVHlwZU5vZGUsIG1ldGFUeXBlcywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlVmVyaWZpZWQ7XG5cbiAgY29uc3QgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gIG1ldGFUeXBlcy5wdXNoKG1ldGFUeXBlKTtcblxuICBtZXRhVHlwZVZlcmlmaWVkID0gdHJ1ZTtcblxuICByZXR1cm4gbWV0YVR5cGVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXZhcmlhYmxlIiwidmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiYXJndW1lbnROb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibmFtZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU5hbWUiLCJkZWJ1ZyIsInRlcm1UeXBlcyIsIm1ldGFUeXBlcyIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsIm1ldGFUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhVHlwZSIsInRlcm1UeXBlIiwibWV0YVR5cGUiLCJmaXJzdE1ldGFUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRlcm1UeXBlIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsImZyb21Ob2RlTmFtZVRlcm1UeXBlQW5kTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVBc3NpZ25tZW50IiwiTWV0YXZhcmlhYmxlQXNzaWdubWVudCIsImZyb21NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBc3NpZ25lZCIsImFzc2lnbiIsImxvY2FsTWV0YUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJ0ZXJtTm9kZSIsInRlcm1TdHJpbmciLCJ0eXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJwdXNoIiwidHlwZVN0cmluZyIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVO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