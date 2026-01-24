"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiminalContext;
    }
});
var _necessary = require("necessary");
var _context = require("../utilities/context");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var extract = _necessary.arrayUtilities.extract;
var LiminalContext = /*#__PURE__*/ function() {
    function LiminalContext(context, substitutions) {
        _class_call_check(this, LiminalContext);
        this.context = context;
        this.substitutions = substitutions;
        return (0, _context.chainContext)(this);
    }
    _create_class(LiminalContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                var substitutions = this.context.getSubstitutions();
                substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                return substitutions;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                extract(this.substitutions, function(substitution) {
                    var substitutionB = substitution, substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionString, "' substitution to the context."));
                this.substitutions.push(substitution);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var substitutions = [], emphemeralContext = new LiminalContext(context, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return LiminalContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBjaGFpbkNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdWJzdGl0dXRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJjaGFpbkNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiaXNFcXVhbFRvIiwidHJhY2UiLCJwdXNoIiwiZnJvbU5vdGhpbmciLCJlbXBoZW1lcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7dUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLFVBQVlDLHlCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsK0JBQU47YUFBTUEsZUFDUEcsT0FBTyxFQUFFQyxhQUFhO2dDQURmSjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFFckIsT0FBT0MsSUFBQUEscUJBQVksRUFBQyxJQUFJOztrQkFMUEw7O1lBUW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUgsZ0JBQWdCLElBQUksQ0FBQ0QsT0FBTyxDQUFDSSxnQkFBZ0I7Z0JBRWpESCxnQkFBZ0IsQUFDZCxxQkFBRyxJQUFJLENBQUNBLGFBQWEsU0FDckIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxZQUFZO2dCQUMxQixJQUFNTixVQUFVLElBQUksRUFDZE8sZ0JBQWdCRCxjQUNoQkUscUJBQXFCRixhQUFhRyxTQUFTO2dCQUVqRFgsUUFBUSxJQUFJLENBQUNHLGFBQWEsRUFBRSxTQUFDSztvQkFDM0IsSUFBTUksZ0JBQWdCSixjQUNoQkssaUNBQWlDSixjQUFjSyxTQUFTLENBQUNGO29CQUUvRCxJQUFJQyxnQ0FBZ0M7d0JBQ2xDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUFYLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGNBQWdDLE9BQW5CTCxvQkFBbUI7Z0JBRS9DLElBQUksQ0FBQ1AsYUFBYSxDQUFDYSxJQUFJLENBQUNSO1lBQzFCOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlmLE9BQU87Z0JBQ3hCLElBQU1DLGdCQUFnQixFQUFFLEVBQ2xCZSxvQkFBb0IsSUE1Q1RuQixlQTRDNEJHLFNBQVNDO2dCQUV0RCxPQUFPZTtZQUNUOzs7V0EvQ21CbkIifQ==