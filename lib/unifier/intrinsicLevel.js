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
var IntrinsicLevelUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(IntrinsicLevelUnifier, Unifier);
    function IntrinsicLevelUnifier() {
        _class_call_check(this, IntrinsicLevelUnifier);
        return _call_super(this, IntrinsicLevelUnifier, arguments);
    }
    _create_class(IntrinsicLevelUnifier, [
        {
            key: "unify",
            value: function unify(generalNode, specificNode, substitutions, generalContext, specificContext) {
                var unifiedAtMetaLevel;
                var generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
                unifiedAtMetaLevel = nonTerminalNodeUnified; ///
                return unifiedAtMetaLevel;
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
            var termUnified;
            var Term = _dom.default.Term, Variable = _dom.default.Variable, termNode = specificTermNode, variableNode = generalTermVariableNode; ///
            var context;
            context = generalContext; ///
            var variable = Variable.fromVariableNode(variableNode, context);
            context = specificContext; ///
            var term = Term.fromTermNode(termNode, context);
            termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            return termUnified;
        }
    }
]);
var intrinsicLevelUnifier = new IntrinsicLevelUnifier();
var _default = intrinsicLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkQXRNZXRhTGV2ZWw7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkQXRNZXRhTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZWQgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgaW50cmluc2ljTGV2ZWxVbmlmaWVyID0gbmV3IEludHJpbnNpY0xldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRyaW5zaWNMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsVW5pZmllciIsInVuaWZ5IiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1VbmlmaWVkIiwiVGVybSIsImRvbSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJjb250ZXh0IiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInVuaWZ5VGVybSIsImludHJpbnNpY0xldmVsVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0RBOzs7ZUFBQTs7OzBEQXBEZ0I7OERBQ0k7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUUsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQzdFLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5Qk4sYUFDekJPLDBCQUEwQk4sY0FDMUJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5QkwsZUFBZUMsZ0JBQWdCQztnQkFFeklDLHFCQUFxQkcsd0JBQXdCLEdBQUc7Z0JBRWhELE9BQU9IO1lBQ1Q7OztXQVhJUDtFQUE4QlksZ0JBQU87QUFhekMsaUJBYklaLHVCQWFHYSxRQUFPO0lBQ1o7UUFDRUMsa0JBQWtCZjtRQUNsQmdCLG1CQUFtQmxCO1FBQ25CSSxPQUFPLFNBQUNlLHlCQUF5QkMsa0JBQWtCYixlQUFlQyxnQkFBZ0JDO1lBQ2hGLElBQUlZO1lBRUosSUFBUUMsT0FBbUJDLFlBQUcsQ0FBdEJELE1BQU1FLFdBQWFELFlBQUcsQ0FBaEJDLFVBQ1JDLFdBQVdMLGtCQUNYTSxlQUFlUCx5QkFBeUIsR0FBRztZQUVqRCxJQUFJUTtZQUVKQSxVQUFVbkIsZ0JBQWdCLEdBQUc7WUFFN0IsSUFBTW9CLFdBQVdKLFNBQVNLLGdCQUFnQixDQUFDSCxjQUFjQztZQUV6REEsVUFBVWxCLGlCQUFrQixHQUFHO1lBRS9CLElBQU1xQixPQUFPUixLQUFLUyxZQUFZLENBQUNOLFVBQVVFO1lBRXpDTixjQUFjTyxTQUFTSSxTQUFTLENBQUNGLE1BQU12QixlQUFlQyxnQkFBZ0JDO1lBRXRFLE9BQU9ZO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTVksd0JBQXdCLElBQUk5QjtJQUVsQyxXQUFlOEIifQ==