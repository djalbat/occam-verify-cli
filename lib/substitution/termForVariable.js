"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    var _super = _create_super(TermForVariableSubstitution);
    function TermForVariableSubstitution(variableNode, termNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _super.call(this);
        _this.variableNode = variableNode;
        _this.termNode = termNode;
        return _this;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                return this.variableNode;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeMatches = this.termNode.match(termNode);
                return termNodeMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeMatches = this.variableNode.match(variableNode);
                return variableNodeMatches;
            }
        }
    ], [
        {
            key: "fromVariableNodeAndTermNode",
            value: function fromVariableNodeAndTermNode(variableNode, termNode) {
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59Il0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O21FQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSw0Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSw0QkFDUEMsWUFBWSxFQUFFQyxRQUFRO2dDQURmRjs7O1FBSWpCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUxDRjs7WUFRbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjSCxRQUFRO2dCQUNwQixJQUFNSSxrQkFBa0IsSUFBSSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0w7Z0JBRTVDLE9BQU9JO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCUCxZQUFZO2dCQUM1QixJQUFNUSxzQkFBc0IsSUFBSSxDQUFDUixZQUFZLENBQUNNLEtBQUssQ0FBQ047Z0JBRXBELE9BQU9RO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCVCxZQUFZLEVBQUVDLFFBQVE7Z0JBQ3ZELElBQU1TLDhCQUE4QixJQTdCbkJYLDRCQTZCbURDLGNBQWNDO2dCQUVsRixPQUFPUztZQUNUOzs7V0FoQ21CWDtFQUFvQ1kscUJBQVkifQ==