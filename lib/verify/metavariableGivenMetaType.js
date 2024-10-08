"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetavariableGivenMetaType;
    }
});
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../unifier/metavariable"));
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext) {
    var metavariableVerifiedGivenMetaType = false;
    var metaTypeName = metaType.getName(), metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeName, "' meta-type..."), metavariableNode);
    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
    if (metavariable !== null) {
        var metavariableMetaType = metavariable.getMetaType();
        if (metavariableMetaType === metaType) {
            var metavariableNodeA = metavariableNode; ///
            metavariableNode = metavariable.getNode();
            var metavariableNodeB = metavariableNode; ///
            var metavariableUnified = _metavariable.default.unify(metavariableNodeA, metavariableNodeB, localContext);
            metavariableVerifiedGivenMetaType = metavariableUnified; ///
        } else {
            var metavariableMetaTypeName = metavariableMetaType.getName();
            localContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metavariableMetaTypeName, "' when it should be '").concat(metaTypeName, "'."), metavariableNode);
        }
    } else {
        localContext.debug("The '".concat(metavariableString, "' metavariable is not present'."), metavariableNode);
    }
    if (metavariableVerifiedGivenMetaType) {
        localContext.debug("...verified the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeName, "' meta-type."), metavariableNode);
    }
    return metavariableVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGF2YXJpYWJsZVVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZU5hbWV9JyBtZXRhLXR5cGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZSA9PT0gbWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllci51bmlmeShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXZhcmlhYmxlTm9kZUIsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZVVuaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVOYW1lID0gbWV0YXZhcmlhYmxlTWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YXZhcmlhYmxlTWV0YVR5cGVOYW1lfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7bWV0YVR5cGVOYW1lfScuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudCcuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZU5hbWV9JyBtZXRhLXR5cGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJsb2NhbENvbnRleHQiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsImdldE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJtZXRhdmFyaWFibGVVbmlmaWVyIiwidW5pZnkiLCJtZXRhdmFyaWFibGVNZXRhVHlwZU5hbWUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzttRUFKUTtvQkFFcUI7Ozs7OztBQUV0QyxTQUFTQSxnQ0FBZ0NDLGdCQUFnQixFQUFFQyxRQUFRLEVBQUVDLFlBQVk7SUFDOUYsSUFBSUMsb0NBQW9DO0lBRXhDLElBQU1DLGVBQWVILFNBQVNJLE9BQU8sSUFDL0JDLHFCQUFxQkosYUFBYUssWUFBWSxDQUFDUDtJQUVyREUsYUFBYU0sS0FBSyxDQUFDLEFBQUMsa0JBQWdFSixPQUEvQ0Usb0JBQW1CLDhCQUF5QyxPQUFiRixjQUFhLG1CQUFpQko7SUFFbEgsSUFBTVMsbUJBQW1CQyxJQUFBQSwwQ0FBb0MsRUFBQ1YsbUJBQ3hEVyxlQUFlVCxhQUFhVSxrQ0FBa0MsQ0FBQ0g7SUFFckUsSUFBSUUsaUJBQWlCLE1BQU07UUFDekIsSUFBTUUsdUJBQXVCRixhQUFhRyxXQUFXO1FBRXJELElBQUlELHlCQUF5QlosVUFBVTtZQUNyQyxJQUFNYyxvQkFBb0JmLGtCQUFrQixHQUFHO1lBRS9DQSxtQkFBbUJXLGFBQWFLLE9BQU87WUFFdkMsSUFBTUMsb0JBQW9CakIsa0JBQWtCLEdBQUc7WUFFL0MsSUFBTWtCLHNCQUFzQkMscUJBQW1CLENBQUNDLEtBQUssQ0FBQ0wsbUJBQW1CRSxtQkFBbUJmO1lBRTVGQyxvQ0FBb0NlLHFCQUFzQixHQUFHO1FBQy9ELE9BQU87WUFDTCxJQUFNRywyQkFBMkJSLHFCQUFxQlIsT0FBTztZQUU3REgsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLFFBQTJERCxPQUFwRGYsb0JBQW1CLG1DQUFpRkYsT0FBaERpQiwwQkFBeUIseUJBQW9DLE9BQWJqQixjQUFhLE9BQUtKO1FBQ25KO0lBQ0YsT0FBTztRQUNMRSxhQUFhb0IsS0FBSyxDQUFDLEFBQUMsUUFBMEIsT0FBbkJoQixvQkFBbUIsb0NBQWtDTjtJQUNsRjtJQUVBLElBQUlHLG1DQUFtQztRQUNyQ0QsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLG9CQUFrRWxCLE9BQS9DRSxvQkFBbUIsOEJBQXlDLE9BQWJGLGNBQWEsaUJBQWVKO0lBQ3BIO0lBRUEsT0FBT0c7QUFDVCJ9