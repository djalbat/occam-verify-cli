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
            value: function assign(localContext) {
                var metavariableAdded = localContext.addMetavariable(this.metavariable), metavariableNode = this.metavariable.getNode(), metavariableString = localContext.nodeAsString(metavariableNode), metavariableAssigned = metavariableAdded; ///
                metavariableAssigned ? localContext.debug("Able to assign the '".concat(metavariableString, "' metavariable."), metavariableNode) : localContext.trace("Unable to assign the '".concat(metavariableString, "' metavariable."), metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGFzc2lnbihsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVBZGRlZCA9IGxvY2FsQ29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVBc3NpZ25lZCA9IG1ldGF2YXJpYWJsZUFkZGVkOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZUFzc2lnbmVkID9cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgQWJsZSB0byBhc3NpZ24gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlQXNzaWdubWVudCA9IG5ldyBNZXRhdmFyaWFibGVBc3NpZ25tZW50KG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJtZXRhdmFyaWFibGVBZGRlZCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlQXNzaWduZWQiLCJkZWJ1ZyIsInRyYWNlIiwiZnJvbU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsdUNBQUQsQUFBTDthQUFNQSx1QkFDUEMsWUFBWTtnQ0FETEQ7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFGSEQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakIsSUFBTUMsb0JBQW9CRCxhQUFhRSxlQUFlLENBQUMsSUFBSSxDQUFDTCxZQUFZLEdBQ2xFTSxtQkFBbUIsSUFBSSxDQUFDTixZQUFZLENBQUNPLE9BQU8sSUFDNUNDLHFCQUFxQkwsYUFBYU0sWUFBWSxDQUFDSCxtQkFDL0NJLHVCQUF1Qk4sbUJBQW1CLEdBQUc7Z0JBRW5ETSx1QkFDRVAsYUFBYVEsS0FBSyxDQUFDLEFBQUMsdUJBQXlDLE9BQW5CSCxvQkFBbUIsb0JBQWtCRixvQkFDN0VILGFBQWFTLEtBQUssQ0FBQyxBQUFDLHlCQUEyQyxPQUFuQkosb0JBQW1CLG9CQUFrQkY7Z0JBRXJGLE9BQU9JO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCYixZQUFZO2dCQUNsQyxJQUFNYyx5QkFBeUIsSUF2QmRmLHVCQXVCeUNDO2dCQUUxRCxPQUFPYztZQUNUOzs7V0ExQm1CZiJ9