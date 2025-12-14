"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _query = require("../utilities/query");
var _metaLevel = require("../unifier/metaLevel");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var IntrinsicLevelUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(IntrinsicLevelUnifier, Unifier);
    function IntrinsicLevelUnifier() {
        _class_call_check(this, IntrinsicLevelUnifier);
        return _call_super(this, IntrinsicLevelUnifier, arguments);
    }
    _create_class(IntrinsicLevelUnifier, [
        {
            key: "unify",
            value: function unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
                var unifiesAtIntrinsicLevel;
                var nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
                unifiesAtIntrinsicLevel = nonTerminalNodeUnifies; ///
                return unifiesAtIntrinsicLevel;
            }
        }
    ]);
    return IntrinsicLevelUnifier;
}(_unifier.default);
_define_property(IntrinsicLevelUnifier, "maps", [
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var termUnifies = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = (0, _metaLevel.variableIdentifierFromVariableNode)(variableNode);
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode);
            if (term !== null) {
                termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            } else {
                var termVariaibleIdentifer = (0, _metaLevel.termVariableIdentifierFromTermNode)(termNode), termVariable = context.findVariableByVariableIdentifier(termVariaibleIdentifer), termVariableUnifies = variable.unifyTermVariable(termVariable, substitutions, generalContext, specificContext);
                if (termVariableUnifies) {
                    termUnifies = true;
                }
            }
            return termUnifies;
        }
    }
]);
var intrinsicLevelUnifier = new IntrinsicLevelUnifier();
var _default = intrinsicLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlLCB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuY2xhc3MgSW50cmluc2ljTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNBdEludHJpbnNpY0xldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0F0SW50cmluc2ljTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVzOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVzQXRJbnRyaW5zaWNMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGVybVZhcmlhaWJsZUlkZW50aWZlciA9IHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodGVybVZhcmlhaWJsZUlkZW50aWZlciksXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybVZhcmlhYmxlKHRlcm1WYXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGludHJpbnNpY0xldmVsVW5pZmllciA9IG5ldyBJbnRyaW5zaWNMZXZlbFVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW50cmluc2ljTGV2ZWxVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJJbnRyaW5zaWNMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNBdEludHJpbnNpY0xldmVsIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSIsImNvbnRleHQiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInVuaWZ5VGVybSIsInRlcm1WYXJpYWlibGVJZGVudGlmZXIiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlVW5pZmllcyIsInVuaWZ5VGVybVZhcmlhYmxlIiwiaW50cmluc2ljTGV2ZWxVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7OERBNURvQjtxQkFFTTt5QkFDNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZGLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUUsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLHNCQUFzQixFQUFFQyx1QkFBdUIsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ25HLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDUCx3QkFBd0JDLHlCQUF5QkMsZUFBZUMsZ0JBQWdCQztnQkFFeklDLDBCQUEwQkMsd0JBQXdCLEdBQUc7Z0JBRXJELE9BQU9EO1lBQ1Q7OztXQVRJUDtFQUE4QlUsZ0JBQU87QUFXekMsaUJBWElWLHVCQVdHVyxRQUFPO0lBQ1o7UUFDRUMsa0JBQWtCYjtRQUNsQmMsbUJBQW1CaEI7UUFDbkJJLE9BQU8sU0FBQ2EseUJBQXlCQyxrQkFBa0JYLGVBQWVDLGdCQUFnQkM7WUFDaEYsSUFBSVUsY0FBYztZQUVsQixJQUFNQyxXQUFXRixrQkFDWEcsZUFBZUoseUJBQ2ZLLHFCQUFxQkMsSUFBQUEsNkNBQWtDLEVBQUNGO1lBRTlELElBQUlHO1lBRUpBLFVBQVVoQixnQkFBZ0IsR0FBRztZQUU3QixJQUFNaUIsV0FBV0QsUUFBUUUsZ0NBQWdDLENBQUNKO1lBRTFERSxVQUFVZixpQkFBa0IsR0FBRztZQUUvQixJQUFNa0IsT0FBT0gsUUFBUUksa0JBQWtCLENBQUNSO1lBRXhDLElBQUlPLFNBQVMsTUFBTTtnQkFDakJSLGNBQWNNLFNBQVNJLFNBQVMsQ0FBQ0YsTUFBTXBCLGVBQWVDLGdCQUFnQkM7WUFDeEUsT0FBTztnQkFDTCxJQUFNcUIseUJBQXlCQyxJQUFBQSw2Q0FBa0MsRUFBQ1gsV0FDNURZLGVBQWVSLFFBQVFFLGdDQUFnQyxDQUFDSSx5QkFDeERHLHNCQUFzQlIsU0FBU1MsaUJBQWlCLENBQUNGLGNBQWN6QixlQUFlQyxnQkFBZ0JDO2dCQUVwRyxJQUFJd0IscUJBQXFCO29CQUN2QmQsY0FBYztnQkFDaEI7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWdCLHdCQUF3QixJQUFJaEM7SUFFbEMsV0FBZWdDIn0=