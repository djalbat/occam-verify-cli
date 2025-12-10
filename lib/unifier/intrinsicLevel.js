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
            var termUnifies;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = (0, _metaLevel.variableIdentifierFromVariableNode)(variableNode);
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode);
            termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            return termUnifies;
        }
    }
]);
var intrinsicLevelUnifier = new IntrinsicLevelUnifier();
var _default = intrinsicLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuY2xhc3MgSW50cmluc2ljTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNBdEludHJpbnNpY0xldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0F0SW50cmluc2ljTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVzOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVzQXRJbnRyaW5zaWNMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBpbnRyaW5zaWNMZXZlbFVuaWZpZXIgPSBuZXcgSW50cmluc2ljTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiSW50cmluc2ljTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVzQXRJbnRyaW5zaWNMZXZlbCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUiLCJjb250ZXh0IiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJpbnRyaW5zaWNMZXZlbFVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9EQTs7O2VBQUE7Ozs4REFsRG9CO3FCQUVNO3lCQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNRSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsc0JBQXNCLEVBQUVDLHVCQUF1QixFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDbkcsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNQLHdCQUF3QkMseUJBQXlCQyxlQUFlQyxnQkFBZ0JDO2dCQUV6SUMsMEJBQTBCQyx3QkFBd0IsR0FBRztnQkFFckQsT0FBT0Q7WUFDVDs7O1dBVElQO0VBQThCVSxnQkFBTztBQVd6QyxpQkFYSVYsdUJBV0dXLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JiO1FBQ2xCYyxtQkFBbUJoQjtRQUNuQkksT0FBTyxTQUFDYSx5QkFBeUJDLGtCQUFrQlgsZUFBZUMsZ0JBQWdCQztZQUNoRixJQUFJVTtZQUVKLElBQU1DLFdBQVdGLGtCQUNYRyxlQUFlSix5QkFDZksscUJBQXFCQyxJQUFBQSw2Q0FBa0MsRUFBQ0Y7WUFFOUQsSUFBSUc7WUFFSkEsVUFBVWhCLGdCQUFnQixHQUFHO1lBRTdCLElBQU1pQixXQUFXRCxRQUFRRSxnQ0FBZ0MsQ0FBQ0o7WUFFMURFLFVBQVVmLGlCQUFrQixHQUFHO1lBRS9CLElBQU1rQixPQUFPSCxRQUFRSSxrQkFBa0IsQ0FBQ1I7WUFFeENELGNBQWNNLFNBQVNJLFNBQVMsQ0FBQ0YsTUFBTXBCLGVBQWVDLGdCQUFnQkM7WUFFdEUsT0FBT1U7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNVyx3QkFBd0IsSUFBSTNCO0lBRWxDLFdBQWUyQiJ9