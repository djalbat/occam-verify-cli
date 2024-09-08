"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetavariable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtVHlwZXMgPSBbXSxcbiAgICAgICAgICBtZXRhVHlwZXMgPSBbXSxcbiAgICAgICAgICBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCB0ZXJtVHlwZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZVZlcmlmaWVkID0gdmVyaWZ5TWV0YVR5cGUobWV0YVR5cGVOb2RlLCBtZXRhVHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChhcmd1bWVudFZlcmlmaWVkICYmIG1ldGFUeXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB0ZXJtVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZTtcblxuICAgICAgY29uc3QgZmlyc3RNZXRhVHlwZSA9IGZpcnN0KG1ldGFUeXBlcyk7XG5cbiAgICAgIG1ldGFUeXBlID0gZmlyc3RNZXRhVHlwZTsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlc0xlbmd0aCA9IHRlcm1UeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0ZXJtVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGVybVR5cGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtVHlwZSA9IGZpcnN0KHRlcm1UeXBlcyk7XG5cbiAgICAgICAgdGVybVR5cGUgPSBmaXJzdFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZShub2RlLCBuYW1lLCB0ZXJtVHlwZSwgbWV0YVR5cGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWdubWVudCA9IE1ldGF2YXJpYWJsZUFzc2lnbm1lbnQuZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQXNzaWduZWQgPSBtZXRhdmFyaWFibGVBc3NpZ25tZW50LmFzc2lnbihmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVBc3NpZ25lZCkge1xuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFyZ3VtZW50KGFyZ3VtZW50Tm9kZSwgdGVybVR5cGVzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgYXJndW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICBhcmd1bWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdhcyBmb3VuZCB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgIHRlcm1UeXBlcy5wdXNoKHRlcm1UeXBlKTtcblxuICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhVHlwZShtZXRhVHlwZU5vZGUsIG1ldGFUeXBlcywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlVmVyaWZpZWQ7XG5cbiAgY29uc3QgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gIG1ldGFUeXBlcy5wdXNoKG1ldGFUeXBlKTtcblxuICBtZXRhVHlwZVZlcmlmaWVkID0gdHJ1ZTtcblxuICByZXR1cm4gbWV0YVR5cGVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJhcmd1bWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVidWciLCJ0ZXJtVHlwZXMiLCJtZXRhVHlwZXMiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudFZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnQiLCJtZXRhVHlwZVZlcmlmaWVkIiwidmVyaWZ5TWV0YVR5cGUiLCJ0ZXJtVHlwZSIsIm1ldGFUeXBlIiwiZmlyc3RNZXRhVHlwZSIsImZpcnN0IiwidGVybVR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUZXJtVHlwZSIsIm5vZGUiLCJuYW1lIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiTWV0YXZhcmlhYmxlIiwiZnJvbU5vZGVOYW1lVGVybVR5cGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiLCJNZXRhdmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFzc2lnbmVkIiwiYXNzaWduIiwidGVybU5vZGUiLCJ0ZXJtU3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwicHVzaCIsInR5cGVTdHJpbmciLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7OzttRUFYQztvRUFDVTtxQkFFYjtxQkFDSTtvQkFDZTs7Ozs7O0FBRXpDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTRixtQkFBbUJLLGdCQUFnQixFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDcEYsSUFBSUMsdUJBQXVCO0lBRTNCLElBQU1DLHFCQUFxQkYsWUFBWUcsWUFBWSxDQUFDTDtJQUVwREUsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5CRixvQkFBbUIsc0JBQW9CSjtJQUUzRSxJQUFNTyxzQkFBc0JMLFlBQVlNLHVDQUF1QyxDQUFDUjtJQUVoRixJQUFJTyxxQkFBcUI7UUFDdkJMLFlBQVlPLEtBQUssQ0FBQyxBQUFDLHFCQUF1QyxPQUFuQkwsb0JBQW1CLDBCQUF3Qko7SUFDcEYsT0FBTztRQUNMLElBQU1VLFlBQVksRUFBRSxFQUNkQyxZQUFZLEVBQUUsRUFDZEMsZUFBZWIsa0JBQWtCQyxtQkFDakNhLG1CQUFtQkMsZUFBZUYsY0FBY0YsV0FBV1IsY0FDM0RhLG1CQUFtQkMsZUFBZWYsY0FBY1UsV0FBV1Q7UUFFakUsSUFBSVcsb0JBQW9CRSxrQkFBa0I7WUFDeEMsSUFBSUUsVUFDQUM7WUFFSixJQUFNQyxnQkFBZ0JDLElBQUFBLFlBQUssRUFBQ1Q7WUFFNUJPLFdBQVdDLGVBQWUsR0FBRztZQUU3QixJQUFNRSxrQkFBa0JYLFVBQVVZLE1BQU07WUFFeEMsSUFBSUQsb0JBQW9CLEdBQUc7Z0JBQ3pCSixXQUFXO1lBQ2IsT0FBTztnQkFDTCxJQUFNTSxnQkFBZ0JILElBQUFBLFlBQUssRUFBQ1Y7Z0JBRTVCTyxXQUFXTSxlQUFlLEdBQUc7WUFDL0I7WUFFQSxJQUFNQyxPQUFPeEIsa0JBQ1B5QixPQUFPQyxJQUFBQSw4QkFBd0IsRUFBQzFCLG1CQUNoQzJCLGVBQWVDLHFCQUFZLENBQUNDLCtCQUErQixDQUFDTCxNQUFNQyxNQUFNUixVQUFVQyxXQUNsRlkseUJBQXlCQyxzQkFBc0IsQ0FBQ0MsZ0JBQWdCLENBQUNMLGVBQ2pFTSx1QkFBdUJILHVCQUF1QkksTUFBTSxDQUFDaEM7WUFFM0QsSUFBSStCLHNCQUFzQjtnQkFDeEI5Qix1QkFBdUI7WUFDekI7UUFDRjtJQUNGO0lBRUEsSUFBSUEsc0JBQXNCO1FBQ3hCRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJMLG9CQUFtQixvQkFBa0JKO0lBQzdFO0lBRUEsT0FBT0c7QUFDVDtBQUVBLFNBQVNXLGVBQWVGLFlBQVksRUFBRUYsU0FBUyxFQUFFUixXQUFXO0lBQzFELElBQUlXLG1CQUFtQjtJQUV2QixJQUFJRCxpQkFBaUIsTUFBTTtRQUN6QkMsbUJBQW1CO0lBQ3JCLE9BQU87UUFDTCxJQUFNc0IsV0FBV3ZDLGNBQWNnQjtRQUUvQixJQUFJdUIsYUFBYSxNQUFNLENBRXZCLE9BQU87WUFDTCxJQUFNQyxhQUFhbEMsWUFBWUcsWUFBWSxDQUFDOEI7WUFFNUNqQyxZQUFZTyxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYMkIsWUFBVywyREFBeUREO1FBQ2hHO1FBQ0EsSUFBTUUsV0FBV3ZDLGNBQWNjO1FBRS9CLElBQUl5QixhQUFhLE1BQU07WUFDckIsSUFBTUMsT0FBT3BDLFlBQVlxQyxrQkFBa0IsQ0FBQ0Y7WUFFNUMsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQixJQUFNckIsV0FBV3FCLE1BQU8sR0FBRztnQkFFM0I1QixVQUFVOEIsSUFBSSxDQUFDdkI7Z0JBRWZKLG1CQUFtQjtZQUNyQixPQUFPO2dCQUNMLElBQU00QixhQUFhdkMsWUFBWUcsWUFBWSxDQUFDZ0M7Z0JBRTVDbkMsWUFBWU8sS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWGdDLFlBQVcsMkJBQXlCSjtZQUNoRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPeEI7QUFDVDtBQUVBLFNBQVNHLGVBQWVmLFlBQVksRUFBRVUsU0FBUyxFQUFFVCxXQUFXO0lBQzFELElBQUlhO0lBRUosSUFBTUcsV0FBV2hCLFlBQVl3QywwQkFBMEIsQ0FBQ3pDO0lBRXhEVSxVQUFVNkIsSUFBSSxDQUFDdEI7SUFFZkgsbUJBQW1CO0lBRW5CLE9BQU9BO0FBQ1QifQ==