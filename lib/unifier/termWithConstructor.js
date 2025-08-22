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
                var termUnifiesWithConstructor;
                var generalNonTerminalNode = constructorTermNode, specificNonTerminalNode = termNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                termUnifiesWithConstructor = nonTerminalNodeUnifies; ///
                return termUnifiesWithConstructor;
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
            var Term = _dom.default.Term, typeNode = generalTypeNode, typeName = typeNode.getTypeName(), type = context.findTypeByTypeName(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1XaXRoQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIik7XG5cbmNsYXNzIFRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3I7XG4gIH07XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVzR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICB1bmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyID0gbmV3IFRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIiLCJ1bmlmeSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFR5cGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInVuaWZpZXMiLCJUZXJtIiwiZG9tIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1WZXJpZmllc0dpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsInRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7MERBckRnQjs4REFDSTtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsbUJBQW1CLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztnQkFDMUMsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCSixxQkFDekJLLDBCQUEwQkosVUFDMUJLLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5Qkg7Z0JBRTFHQyw2QkFBNkJHLHdCQUF3QixHQUFHO2dCQUV4RCxPQUFPSDtZQUNUOzs7V0FYSUw7RUFBbUNVLGdCQUFPO0FBYTlDLGlCQWJJViw0QkFhR1csUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmI7UUFDbEJjLG1CQUFtQmhCO1FBQ25CSSxPQUFPLFNBQUNhLGlCQUFpQkMsa0JBQWtCWDtZQUN6QyxJQUFJWSxVQUFVO1lBRWQsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFdBQVdMLGlCQUNYTSxXQUFXRCxTQUFTRSxXQUFXLElBQy9CQyxPQUFPbEIsUUFBUW1CLGtCQUFrQixDQUFDSDtZQUV4QyxJQUFJRSxTQUFTLE1BQU07Z0JBQ2pCLElBQU1uQixXQUFXWSxrQkFDWFMsT0FBT1AsS0FBS1EsWUFBWSxDQUFDdEIsVUFBVUMsVUFDbkNzQixpQkFBaUJ0QixTQUNqQnVCLGtCQUFrQnZCLFNBQ2xCd0Isd0JBQXdCSixLQUFLSyxlQUFlLENBQUNQLE1BQU1JLGdCQUFnQkM7Z0JBRXpFLElBQUlDLHVCQUF1QjtvQkFDekJaLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWMsNkJBQTZCLElBQUk5QjtJQUV2QyxXQUFlOEIifQ==