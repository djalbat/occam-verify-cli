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
                metavariableAssigned ? fileContext.debug("Able to assign the '".concat(metavariableString, "' metavariable."), metavariableNode) : fileContext.trace("Unable to assign the '".concat(metavariableString, "' metavariable."), metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGFzc2lnbihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmlsZUNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVBc3NpZ25lZCA9IG1ldGF2YXJpYWJsZUFkZGVkOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZUFzc2lnbmVkID9cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBBYmxlIHRvIGFzc2lnbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpIDpcbiAgICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFzc2lnbm1lbnQgPSBuZXcgTWV0YXZhcmlhYmxlQXNzaWdubWVudChtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGVBc3NpZ25tZW50IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiYXNzaWduIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVBZGRlZCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlQXNzaWduZWQiLCJkZWJ1ZyIsInRyYWNlIiwiZnJvbU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsdUNBQUQsQUFBTDthQUFNQSx1QkFDUEMsWUFBWTtnQ0FETEQ7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFGSEQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVztnQkFDaEIsSUFBTUMsb0JBQW9CRCxZQUFZRSxlQUFlLENBQUMsSUFBSSxDQUFDTCxZQUFZLEdBQ2pFTSxtQkFBbUIsSUFBSSxDQUFDTixZQUFZLENBQUNPLE9BQU8sSUFDNUNDLHFCQUFxQkwsWUFBWU0sWUFBWSxDQUFDSCxtQkFDOUNJLHVCQUF1Qk4sbUJBQW1CLEdBQUc7Z0JBRW5ETSx1QkFDRVAsWUFBWVEsS0FBSyxDQUFDLEFBQUMsdUJBQXlDLE9BQW5CSCxvQkFBbUIsb0JBQWtCRixvQkFDNUVILFlBQVlTLEtBQUssQ0FBQyxBQUFDLHlCQUEyQyxPQUFuQkosb0JBQW1CLG9CQUFrQkY7Z0JBRXBGLE9BQU9JO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCYixZQUFZO2dCQUNsQyxJQUFNYyx5QkFBeUIsSUF2QmRmLHVCQXVCeUNDO2dCQUUxRCxPQUFPYztZQUNUOzs7V0ExQm1CZiJ9