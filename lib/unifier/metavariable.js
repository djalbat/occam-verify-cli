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
var typeNodeQuery = (0, _query.nodeQuery)("/type"), termNodeQuery = (0, _query.nodeQuery)("/term");
var MetavariableUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(MetavariableUnifier, Unifier);
    function MetavariableUnifier() {
        _class_call_check(this, MetavariableUnifier);
        return _call_super(this, MetavariableUnifier, arguments);
    }
    _create_class(MetavariableUnifier, [
        {
            key: "unify",
            value: function unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext) {
                var metavariableUnified;
                var generalNonTerminalNode = generalMetavariableNode, specificNonTerminalNode = specificMetavariableNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, generalContext, specificContext);
                metavariableUnified = nonTerminalNodeUnified; ///
                return metavariableUnified;
            }
        }
    ]);
    return MetavariableUnifier;
}(_unifier.default);
_define_property(MetavariableUnifier, "maps", [
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, generalContext, specificContext) {
            var termUnified;
            var Term = _dom.default.Term, typeNode = generalTypeNode, termNode = specificTermNode, typeName = typeNode.getTypeName(), type = generalContext.findTypeByTypeName(typeName), context = specificContext, term = Term.fromTermNode(termNode, context), termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);
            termUnified = termVerifiedGivenType; ///
            return termUnified;
        }
    }
]);
var metavariableUnifier = new MetavariableUnifier();
var _default = metavariableUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGUgPSBnZW5lcmFsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZWQgPSB0ZXJtVmVyaWZpZWRHaXZlblR5cGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhdmFyaWFibGVVbmlmaWVyID0gbmV3IE1ldGF2YXJpYWJsZVVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YXZhcmlhYmxlVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsIk1ldGF2YXJpYWJsZVVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsVHlwZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZWQiLCJUZXJtIiwiZG9tIiwidHlwZU5vZGUiLCJ0ZXJtTm9kZSIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiY29udGV4dCIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJtZXRhdmFyaWFibGVVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpREE7OztlQUFBOzs7MERBL0NnQjs4REFDSTtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsdUJBQXVCLEVBQUVDLHdCQUF3QixFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3RGLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QkwseUJBQ3pCTSwwQkFBMEJMLDBCQUMxQk0seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCSixnQkFBZ0JDO2dCQUUxSEMsc0JBQXNCRyx3QkFBd0IsR0FBRztnQkFFakQsT0FBT0g7WUFDVDs7O1dBWElOO0VBQTRCVyxnQkFBTztBQWF2QyxpQkFiSVgscUJBYUdZLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JoQjtRQUNsQmlCLG1CQUFtQmY7UUFDbkJFLE9BQU8sU0FBQ2MsaUJBQWlCQyxrQkFBa0JaLGdCQUFnQkM7WUFDekQsSUFBSVk7WUFFSixJQUFNLEFBQUVDLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsV0FBV0wsaUJBQ1hNLFdBQVdMLGtCQUNYTSxXQUFXRixTQUFTRyxXQUFXLElBQy9CQyxPQUFPcEIsZUFBZXFCLGtCQUFrQixDQUFDSCxXQUN6Q0ksVUFBVXJCLGlCQUNWc0IsT0FBT1QsS0FBS1UsWUFBWSxDQUFDUCxVQUFVSyxVQUNuQ0csd0JBQXdCRixLQUFLRyxlQUFlLENBQUNOLE1BQU1wQixnQkFBZ0JDO1lBRXpFWSxjQUFjWSx1QkFBd0IsR0FBRztZQUV6QyxPQUFPWjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1jLHNCQUFzQixJQUFJL0I7SUFFaEMsV0FBZStCIn0=