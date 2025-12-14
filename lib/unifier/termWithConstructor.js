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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var TermWithConstructorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(TermWithConstructorUnifier, Unifier);
    function TermWithConstructorUnifier() {
        _class_call_check(this, TermWithConstructorUnifier);
        return _call_super(this, TermWithConstructorUnifier, arguments);
    }
    _create_class(TermWithConstructorUnifier, [
        {
            key: "unify",
            value: function unify(constructorTermNode, termNode, context) {
                var termUnifiedWithConstructor;
                var generalNonTerminalNode = constructorTermNode, specificNonTerminalNode = termNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                termUnifiedWithConstructor = nonTerminalNodeUnifies; ///
                return termUnifiedWithConstructor;
            }
        }
    ]);
    return TermWithConstructorUnifier;
}(_unifier.default);
_define_property(TermWithConstructorUnifier, "maps", [
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, context) {
            var unifies = false;
            var Term = _ontology.default.Term, typeNode = generalTypeNode, nominalTypeName = typeNode.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
            if (type !== null) {
                var termNode = specificTermNode, term = Term.fromTermNode(termNode, context), generalContext = context, specificContext = context, termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);
                if (termVerifiesGivenType) {
                    unifies = true;
                }
            }
            return unifies;
        }
    }
]);
var termWithConstructorUnifier = new TermWithConstructorUnifier();
var _default = termWithConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1XaXRoQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpO1xuXG5jbGFzcyBUZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllc0dpdmVuVHlwZSA9IHRlcm0udmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllc0dpdmVuVHlwZSkge1xuICAgICAgICAgICAgdW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZXM7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciA9IG5ldyBUZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIlRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIiwidW5pZnkiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwidGVybU5vZGUiLCJjb250ZXh0IiwidGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVzIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxUeXBlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ1bmlmaWVzIiwiVGVybSIsIm9udG9sb2d5IiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1WZXJpZmllc0dpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsInRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7K0RBckRxQjs4REFDRDtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsbUJBQW1CLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztnQkFDMUMsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCSixxQkFDekJLLDBCQUEwQkosVUFDMUJLLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5Qkg7Z0JBRTFHQyw2QkFBNkJHLHdCQUF3QixHQUFHO2dCQUV4RCxPQUFPSDtZQUNUOzs7V0FYSUw7RUFBbUNVLGdCQUFPO0FBYTlDLGlCQWJJViw0QkFhR1csUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmI7UUFDbEJjLG1CQUFtQmhCO1FBQ25CSSxPQUFPLFNBQUNhLGlCQUFpQkMsa0JBQWtCWDtZQUN6QyxJQUFJWSxVQUFVO1lBRWQsSUFBTSxBQUFFQyxPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkUsV0FBV0wsaUJBQ1hNLGtCQUFrQkQsU0FBU0Usa0JBQWtCLElBQzdDQyxPQUFPbEIsUUFBUW1CLHlCQUF5QixDQUFDSDtZQUUvQyxJQUFJRSxTQUFTLE1BQU07Z0JBQ2pCLElBQU1uQixXQUFXWSxrQkFDWFMsT0FBT1AsS0FBS1EsWUFBWSxDQUFDdEIsVUFBVUMsVUFDbkNzQixpQkFBaUJ0QixTQUNqQnVCLGtCQUFrQnZCLFNBQ2xCd0Isd0JBQXdCSixLQUFLSyxlQUFlLENBQUNQLE1BQU1JLGdCQUFnQkM7Z0JBRXpFLElBQUlDLHVCQUF1QjtvQkFDekJaLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWMsNkJBQTZCLElBQUk5QjtJQUV2QyxXQUFlOEIifQ==