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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _query = require("../utilities/query");
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
var LabelUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(LabelUnifier, Unifier);
    function LabelUnifier() {
        _class_call_check(this, LabelUnifier);
        return _call_super(this, LabelUnifier, arguments);
    }
    _create_class(LabelUnifier, [
        {
            key: "unify",
            value: function unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext) {
                var labelUnified;
                var generalNonTerminalNode = labelMetavariableNode, specificNonTerminalNode = referenceMetavariableNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
                labelUnified = nonTerminalNodeUnified; ///
                return labelUnified;
            }
        }
    ]);
    return LabelUnifier;
}(_unifier.default);
_define_property(LabelUnifier, "maps", [
    {
        generalNodeQuery: termNodeQuery,
        specificNodeQuery: termVariableNodeQuery,
        unify: function(generalTermNode, specificTermVariableNode, substitutions, generalContext, specificContext) {
            var termUnified;
            var Term = _dom.default.Term, Variable = _dom.default.Variable, termNode = generalTermNode, variableNode = specificTermVariableNode; ///
            var context;
            context = specificContext; ///
            var variable = Variable.fromVariableNode(variableNode, context);
            context = generalContext; ///
            var term = Term.fromTermNode(termNode, context), contextsReversed = true;
            termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext, contextsReversed);
            return termUnified;
        }
    }
]);
var labelUnifier = new LabelUnifier();
var _default = labelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBMYWJlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobGFiZWxNZXRhdmFyaWFibGVOb2RlLCByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBsYWJlbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUZXJtTm9kZSwgc3BlY2lmaWNUZXJtVmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gZ2VuZXJhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gc3BlY2lmaWNUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb250ZXh0c1JldmVyc2VkID0gdHJ1ZTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0c1JldmVyc2VkKTtcblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBsYWJlbFVuaWZpZXIgPSBuZXcgTGFiZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxhYmVsVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiTGFiZWxVbmlmaWVyIiwidW5pZnkiLCJsYWJlbE1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGFiZWxVbmlmaWVkIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsVGVybU5vZGUiLCJzcGVjaWZpY1Rlcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtVW5pZmllZCIsIlRlcm0iLCJkb20iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJjb250ZXh0c1JldmVyc2VkIiwidW5pZnlUZXJtIiwibGFiZWxVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7MERBckRnQjs4REFDSTtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNRSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLHFCQUFxQixFQUFFQyx5QkFBeUIsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3BHLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5Qk4sdUJBQ3pCTywwQkFBMEJOLDJCQUMxQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCTCxlQUFlQyxnQkFBZ0JDO2dCQUV6SUMsZUFBZUcsd0JBQXdCLEdBQUc7Z0JBRTFDLE9BQU9IO1lBQ1Q7OztXQVhJUDtFQUFxQlksZ0JBQU87QUFhaEMsaUJBYklaLGNBYUdhLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JqQjtRQUNsQmtCLG1CQUFtQmhCO1FBQ25CRSxPQUFPLFNBQUNlLGlCQUFpQkMsMEJBQTBCYixlQUFlQyxnQkFBZ0JDO1lBQ2hGLElBQUlZO1lBRUosSUFBUUMsT0FBbUJDLFlBQUcsQ0FBdEJELE1BQU1FLFdBQWFELFlBQUcsQ0FBaEJDLFVBQ1JDLFdBQVdOLGlCQUNYTyxlQUFlTiwwQkFBMEIsR0FBRztZQUVsRCxJQUFJTztZQUVKQSxVQUFVbEIsaUJBQWtCLEdBQUc7WUFFL0IsSUFBTW1CLFdBQVdKLFNBQVNLLGdCQUFnQixDQUFDSCxjQUFjQztZQUV6REEsVUFBVW5CLGdCQUFnQixHQUFHO1lBRTdCLElBQU1zQixPQUFPUixLQUFLUyxZQUFZLENBQUNOLFVBQVVFLFVBQ25DSyxtQkFBbUI7WUFFekJYLGNBQWNPLFNBQVNLLFNBQVMsQ0FBQ0gsTUFBTXZCLGVBQWVDLGdCQUFnQkMsaUJBQWlCdUI7WUFFdkYsT0FBT1g7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNYSxlQUFlLElBQUkvQjtJQUV6QixXQUFlK0IifQ==