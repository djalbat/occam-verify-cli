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
var ReferenceUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(ReferenceUnifier, Unifier);
    function ReferenceUnifier() {
        _class_call_check(this, ReferenceUnifier);
        return _call_super(this, ReferenceUnifier, arguments);
    }
    _create_class(ReferenceUnifier, [
        {
            key: "unify",
            value: function unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext) {
                var referenceUnified;
                var generalNonTerminalNode = labelMetavariableNode, specificNonTerminalNode = referenceMetavariableNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
                referenceUnified = nonTerminalNodeUnified; ///
                return referenceUnified;
            }
        }
    ]);
    return ReferenceUnifier;
}(_unifier.default);
_define_property(ReferenceUnifier, "maps", [
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
var referenceUnified = new ReferenceUnifier();
var _default = referenceUnified;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuY2xhc3MgUmVmZXJlbmNlVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShsYWJlbE1ldGF2YXJpYWJsZU5vZGUsIHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBsYWJlbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmVmZXJlbmNlVW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1Ob2RlLCBzcGVjaWZpY1Rlcm1WYXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBnZW5lcmFsVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY1Rlcm1WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnRleHRzUmV2ZXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHRzUmV2ZXJzZWQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSBuZXcgUmVmZXJlbmNlVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCByZWZlcmVuY2VVbmlmaWVkO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJSZWZlcmVuY2VVbmlmaWVyIiwidW5pZnkiLCJsYWJlbE1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVmZXJlbmNlVW5pZmllZCIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFRlcm1Ob2RlIiwic3BlY2lmaWNUZXJtVmFyaWFibGVOb2RlIiwidGVybVVuaWZpZWQiLCJUZXJtIiwiZG9tIiwiVmFyaWFibGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsImNvbnRleHQiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwiY29udGV4dHNSZXZlcnNlZCIsInVuaWZ5VGVybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdURBOzs7ZUFBQTs7OzBEQXJEZ0I7OERBQ0k7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUUsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxxQkFBcUIsRUFBRUMseUJBQXlCLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUNwRyxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUJOLHVCQUN6Qk8sMEJBQTBCTiwyQkFDMUJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5QkwsZUFBZUMsZ0JBQWdCQztnQkFFeklDLG1CQUFtQkcsd0JBQXdCLEdBQUc7Z0JBRTlDLE9BQU9IO1lBQ1Q7OztXQVhJUDtFQUF5QlksZ0JBQU87QUFhcEMsaUJBYklaLGtCQWFHYSxRQUFPO0lBQ1o7UUFDRUMsa0JBQWtCakI7UUFDbEJrQixtQkFBbUJoQjtRQUNuQkUsT0FBTyxTQUFDZSxpQkFBaUJDLDBCQUEwQmIsZUFBZUMsZ0JBQWdCQztZQUNoRixJQUFJWTtZQUVKLElBQVFDLE9BQW1CQyxZQUFHLENBQXRCRCxNQUFNRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNSQyxXQUFXTixpQkFDWE8sZUFBZU4sMEJBQTBCLEdBQUc7WUFFbEQsSUFBSU87WUFFSkEsVUFBVWxCLGlCQUFrQixHQUFHO1lBRS9CLElBQU1tQixXQUFXSixTQUFTSyxnQkFBZ0IsQ0FBQ0gsY0FBY0M7WUFFekRBLFVBQVVuQixnQkFBZ0IsR0FBRztZQUU3QixJQUFNc0IsT0FBT1IsS0FBS1MsWUFBWSxDQUFDTixVQUFVRSxVQUNuQ0ssbUJBQW1CO1lBRXpCWCxjQUFjTyxTQUFTSyxTQUFTLENBQUNILE1BQU12QixlQUFlQyxnQkFBZ0JDLGlCQUFpQnVCO1lBRXZGLE9BQU9YO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTVgsbUJBQW1CLElBQUlQO0lBRTdCLFdBQWVPIn0=