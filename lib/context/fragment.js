"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FragmentContext;
    }
});
var _node = require("../utilities/node");
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
var FragmentContext = /*#__PURE__*/ function() {
    function FragmentContext(context, tokens, variables, metavariables) {
        _class_call_check(this, FragmentContext);
        this.context = context;
        this.tokens = tokens;
        this.variables = variables;
        this.metavariables = metavariables;
        return (0, _context.chainContext)(this);
    }
    _create_class(FragmentContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var variables;
                variables = this.context.getVariables();
                variables = _to_consumable_array(this.variables).concat(_to_consumable_array(variables));
                return variables;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables;
                metavariables = this.context.getMetavariables();
                metavariables = _to_consumable_array(this.metavariables).concat(_to_consumable_array(metavariables));
                return metavariables;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                this.metavariables.push(metavariable);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var tokens = null, variables = [], metavariables = [], fragmentContext = new FragmentContext(context, tokens, variables, metavariables);
                return fragmentContext;
            }
        }
    ]);
    return FragmentContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZyYWdtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGNoYWluQ29udGV4dCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbXG4gICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgIC4uLnZhcmlhYmxlc1xuICAgIF07XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcztcblxuICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcyA9IFtcbiAgICAgIC4uLnRoaXMubWV0YXZhcmlhYmxlcyxcbiAgICAgIC4uLm1ldGF2YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmcmFnbWVudENvbnRleHQgPSBuZXcgRnJhZ21lbnRDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmcmFnbWVudENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFnbWVudENvbnRleHQiLCJjb250ZXh0IiwidG9rZW5zIiwidmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImNoYWluQ29udGV4dCIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRWYXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGVzIiwic2V0VG9rZW5zIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInB1c2giLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJmcmFnbWVudENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O29CQUhRO3VCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLGdDQUFOO2FBQU1BLGdCQUNQQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURsQ0o7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUVyQixPQUFPQyxJQUFBQSxxQkFBWSxFQUFDLElBQUk7O2tCQVBQTDs7WUFVbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsT0FBTztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJTDtnQkFFSkEsWUFBWSxJQUFJLENBQUNGLE9BQU8sQ0FBQ08sWUFBWTtnQkFFckNMLFlBQVksQUFDVixxQkFBRyxJQUFJLENBQUNBLFNBQVMsU0FDakIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUw7Z0JBRUpBLGdCQUFnQixJQUFJLENBQUNILE9BQU8sQ0FBQ1EsZ0JBQWdCO2dCQUU3Q0wsZ0JBQWdCLEFBQ2QscUJBQUcsSUFBSSxDQUFDQSxhQUFhLFNBQ3JCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ1QsU0FBUyxDQUFDVSxJQUFJLENBQUNEO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsWUFBWTtnQkFDMUIsSUFBSSxDQUFDWCxhQUFhLENBQUNTLElBQUksQ0FBQ0U7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsSUFBSTtnQkFDZixJQUFNQyxTQUFTRixJQUFBQSxrQkFBWSxFQUFDQyxNQUFNLElBQUksQ0FBQ2YsTUFBTTtnQkFFN0MsT0FBT2dCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWWxCLE9BQU87Z0JBQ3hCLElBQU1DLFNBQVMsTUFDVEMsWUFBWSxFQUFFLEVBQ2RDLGdCQUFnQixFQUFFLEVBQ2xCZ0Isa0JBQWtCLElBbEVQcEIsZ0JBa0UyQkMsU0FBU0MsUUFBUUMsV0FBV0M7Z0JBRXhFLE9BQU9nQjtZQUNUOzs7V0FyRW1CcEIifQ==