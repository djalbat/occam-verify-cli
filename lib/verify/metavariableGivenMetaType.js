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
function verifyMetavariableGivenMetaType(metavariableNode, metaType, metavariables, localContext) {
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
            var unified = _metavariable.default.unify(metavariableNodeA, metavariableNodeB, localContext);
            if (unified) {
                metavariables.push(metavariable);
                metavariableVerifiedGivenMetaType = true;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGF2YXJpYWJsZVVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZU5hbWV9JyBtZXRhLXR5cGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZSA9PT0gbWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICBjb25zdCB1bmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllci51bmlmeShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXZhcmlhYmxlTm9kZUIsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlTmFtZSA9IG1ldGF2YXJpYWJsZU1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGF2YXJpYWJsZU1ldGFUeXBlTmFtZX0nIHdoZW4gaXQgc2hvdWxkIGJlICcke21ldGFUeXBlTmFtZX0nLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVOYW1lfScgbWV0YS10eXBlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwibWV0YXZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwidW5pZmllZCIsIm1ldGF2YXJpYWJsZVVuaWZpZXIiLCJ1bmlmeSIsInB1c2giLCJtZXRhdmFyaWFibGVNZXRhVHlwZU5hbWUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzttRUFKUTtvQkFFcUI7Ozs7OztBQUV0QyxTQUFTQSxnQ0FBZ0NDLGdCQUFnQixFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUM3RyxJQUFJQyxvQ0FBb0M7SUFFeEMsSUFBTUMsZUFBZUosU0FBU0ssT0FBTyxJQUMvQkMscUJBQXFCSixhQUFhSyxZQUFZLENBQUNSO0lBRXJERyxhQUFhTSxLQUFLLENBQUMsQUFBQyxrQkFBZ0VKLE9BQS9DRSxvQkFBbUIsOEJBQXlDLE9BQWJGLGNBQWEsbUJBQWlCTDtJQUVsSCxJQUFNVSxtQkFBbUJDLElBQUFBLDBDQUFvQyxFQUFDWCxtQkFDeERZLGVBQWVULGFBQWFVLGtDQUFrQyxDQUFDSDtJQUVyRSxJQUFJRSxpQkFBaUIsTUFBTTtRQUN6QixJQUFNRSx1QkFBdUJGLGFBQWFHLFdBQVc7UUFFckQsSUFBSUQseUJBQXlCYixVQUFVO1lBQ3JDLElBQU1lLG9CQUFvQmhCLGtCQUFrQixHQUFHO1lBRS9DQSxtQkFBbUJZLGFBQWFLLE9BQU87WUFFdkMsSUFBTUMsb0JBQW9CbEIsa0JBQWtCLEdBQUc7WUFFL0MsSUFBTW1CLFVBQVVDLHFCQUFtQixDQUFDQyxLQUFLLENBQUNMLG1CQUFtQkUsbUJBQW1CZjtZQUVoRixJQUFJZ0IsU0FBUztnQkFDWGpCLGNBQWNvQixJQUFJLENBQUNWO2dCQUVuQlIsb0NBQW9DO1lBQ3RDO1FBQ0YsT0FBTztZQUNMLElBQU1tQiwyQkFBMkJULHFCQUFxQlIsT0FBTztZQUU3REgsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLFFBQTJERCxPQUFwRGhCLG9CQUFtQixtQ0FBaUZGLE9BQWhEa0IsMEJBQXlCLHlCQUFvQyxPQUFibEIsY0FBYSxPQUFLTDtRQUNuSjtJQUNGLE9BQU87UUFDTEcsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLFFBQTBCLE9BQW5CakIsb0JBQW1CLG9DQUFrQ1A7SUFDbEY7SUFFQSxJQUFJSSxtQ0FBbUM7UUFDckNELGFBQWFxQixLQUFLLENBQUMsQUFBQyxvQkFBa0VuQixPQUEvQ0Usb0JBQW1CLDhCQUF5QyxPQUFiRixjQUFhLGlCQUFlTDtJQUNwSDtJQUVBLE9BQU9JO0FBQ1QifQ==