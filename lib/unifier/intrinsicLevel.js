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
var _variable = require("../utilities/variable");
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
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = (0, _variable.variableIdentifierFromVariableNode)(variableNode);
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode);
            if (term !== null) {
                termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            } else {
                var termVariaibleIdentifer = (0, _variable.termVariableIdentifierFromTermNode)(termNode), termVariable = context.findVariableByVariableIdentifier(termVariaibleIdentifer), termVariableUnifies = variable.unifyTermVariable(termVariable, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlLCB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YXJpYWJsZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIEludHJpbnNpY0xldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzQXRJbnRyaW5zaWNMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNBdEludHJpbnNpY0xldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllc0F0SW50cmluc2ljTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRlcm1WYXJpYWlibGVJZGVudGlmZXIgPSB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHRlcm1WYXJpYWlibGVJZGVudGlmZXIpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm1WYXJpYWJsZSh0ZXJtVmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBpbnRyaW5zaWNMZXZlbFVuaWZpZXIgPSBuZXcgSW50cmluc2ljTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiSW50cmluc2ljTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVzQXRJbnRyaW5zaWNMZXZlbCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUiLCJjb250ZXh0IiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJ0ZXJtVmFyaWFpYmxlSWRlbnRpZmVyIiwidGVybVZhcmlhYmxlSWRlbnRpZmllckZyb21UZXJtTm9kZSIsInRlcm1WYXJpYWJsZSIsInRlcm1WYXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVRlcm1WYXJpYWJsZSIsImludHJpbnNpY0xldmVsVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOERBOzs7ZUFBQTs7OzhEQTVEb0I7cUJBRU07d0JBQzZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1FLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUNuRyxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ1Asd0JBQXdCQyx5QkFBeUJDLGVBQWVDLGdCQUFnQkM7Z0JBRXpJQywwQkFBMEJDLHdCQUF3QixHQUFHO2dCQUVyRCxPQUFPRDtZQUNUOzs7V0FUSVA7RUFBOEJVLGdCQUFPO0FBV3pDLGlCQVhJVix1QkFXR1csUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmI7UUFDbEJjLG1CQUFtQmhCO1FBQ25CSSxPQUFPLFNBQUNhLHlCQUF5QkMsa0JBQWtCWCxlQUFlQyxnQkFBZ0JDO1lBQ2hGLElBQUlVLGNBQWM7WUFFbEIsSUFBTUMsV0FBV0Ysa0JBQ1hHLGVBQWVKLHlCQUNmSyxxQkFBcUJDLElBQUFBLDRDQUFrQyxFQUFDRjtZQUU5RCxJQUFJRztZQUVKQSxVQUFVaEIsZ0JBQWdCLEdBQUc7WUFFN0IsSUFBTWlCLFdBQVdELFFBQVFFLGdDQUFnQyxDQUFDSjtZQUUxREUsVUFBVWYsaUJBQWtCLEdBQUc7WUFFL0IsSUFBTWtCLE9BQU9ILFFBQVFJLGtCQUFrQixDQUFDUjtZQUV4QyxJQUFJTyxTQUFTLE1BQU07Z0JBQ2pCUixjQUFjTSxTQUFTSSxTQUFTLENBQUNGLE1BQU1wQixlQUFlQyxnQkFBZ0JDO1lBQ3hFLE9BQU87Z0JBQ0wsSUFBTXFCLHlCQUF5QkMsSUFBQUEsNENBQWtDLEVBQUNYLFdBQzVEWSxlQUFlUixRQUFRRSxnQ0FBZ0MsQ0FBQ0kseUJBQ3hERyxzQkFBc0JSLFNBQVNTLGlCQUFpQixDQUFDRixjQUFjekIsZUFBZUMsZ0JBQWdCQztnQkFFcEcsSUFBSXdCLHFCQUFxQjtvQkFDdkJkLGNBQWM7Z0JBQ2hCO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1nQix3QkFBd0IsSUFBSWhDO0lBRWxDLFdBQWVnQyJ9