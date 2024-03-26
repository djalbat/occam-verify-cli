"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetavariableAssignment;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var MetavariableAssignment = /*#__PURE__*/ function() {
    function MetavariableAssignment(metavariable) {
        _class_call_check(this, MetavariableAssignment);
        this.metavariable = metavariable;
    }
    _create_class(MetavariableAssignment, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "assign",
            value: function assign(fileContext) {
                var metavariableAdded = fileContext.addMetavariable(this.metavariable), metavariableNode = this.metavariable.getNode(), metavariableString = fileContext.nodeAsString(metavariableNode), metavariableAssigned = metavariableAdded; ///
                metavariableAssigned ? fileContext.trace("Assigned the '".concat(metavariableString, "' metavariable."), metavariableNode) : fileContext.debug("Unable to assign the '".concat(metavariableString, "' metavariable."), metavariableNode);
                return metavariableAssigned;
            }
        }
    ], [
        {
            key: "fromMetavariable",
            value: function fromMetavariable(metavariable) {
                var metavariableAssignment = new MetavariableAssignment(metavariable);
                return metavariableAssignment;
            }
        }
    ]);
    return MetavariableAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGFzc2lnbihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmlsZUNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVBc3NpZ25lZCA9IG1ldGF2YXJpYWJsZUFkZGVkOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZUFzc2lnbmVkID9cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpIDpcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFzc2lnbm1lbnQgPSBuZXcgTWV0YXZhcmlhYmxlQXNzaWdubWVudChtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGVBc3NpZ25tZW50IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiYXNzaWduIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVBZGRlZCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlQXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2FBQU1BLHVCQUNQQyxZQUFZO2dDQURMRDtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUZIRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFNQyxvQkFBb0JELFlBQVlFLGVBQWUsQ0FBQyxJQUFJLENBQUNMLFlBQVksR0FDakVNLG1CQUFtQixJQUFJLENBQUNOLFlBQVksQ0FBQ08sT0FBTyxJQUM1Q0MscUJBQXFCTCxZQUFZTSxZQUFZLENBQUNILG1CQUM5Q0ksdUJBQXVCTixtQkFBbUIsR0FBRztnQkFFbkRNLHVCQUNFUCxZQUFZUSxLQUFLLENBQUMsQUFBQyxpQkFBbUMsT0FBbkJILG9CQUFtQixvQkFBa0JGLG9CQUN0RUgsWUFBWVMsS0FBSyxDQUFDLEFBQUMseUJBQTJDLE9BQW5CSixvQkFBbUIsb0JBQWtCRjtnQkFFcEYsT0FBT0k7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJiLFlBQVk7Z0JBQ2xDLElBQU1jLHlCQUF5QixJQXZCZGYsdUJBdUJ5Q0M7Z0JBRTFELE9BQU9jO1lBQ1Q7OztXQTFCbUJmIn0=