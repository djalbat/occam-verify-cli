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
var _name = require("../utilities/name");
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
                var generalNonTerminalNode = constructorTermNode, specificNonTerminalNode = termNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                termUnifiedWithConstructor = nonTerminalNodeUnified; ///
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
            var unified = false;
            var Term = _dom.default.Term, typeNode = generalTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                var termNode = specificTermNode, term = Term.fromTermNode(termNode, context), generalContext = context, specificContext = context, termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);
                if (termVerifiedGivenType) {
                    unified = true;
                }
            }
            return unified;
        }
    }
]);
var termWithConstructorUnifier = new TermWithConstructorUnifier();
var _default = termWithConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1XaXRoQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpO1xuXG5jbGFzcyBUZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICB1bmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyID0gbmV3IFRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIiLCJ1bmlmeSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFR5cGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInVuaWZpZWQiLCJUZXJtIiwiZG9tIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1WZXJpZmllZEdpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsInRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3REE7OztlQUFBOzs7MERBdERnQjs4REFDSTtxQkFFTTtvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLG1CQUFtQixFQUFFQyxRQUFRLEVBQUVDLE9BQU87Z0JBQzFDLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QkoscUJBQ3pCSywwQkFBMEJKLFVBQzFCSyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsd0JBQXdCQyx5QkFBeUJIO2dCQUUxR0MsNkJBQTZCRyx3QkFBd0IsR0FBRztnQkFFeEQsT0FBT0g7WUFDVDs7O1dBWElMO0VBQW1DVSxnQkFBTztBQWE5QyxpQkFiSVYsNEJBYUdXLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JiO1FBQ2xCYyxtQkFBbUJoQjtRQUNuQkksT0FBTyxTQUFDYSxpQkFBaUJDLGtCQUFrQlg7WUFDekMsSUFBSVksVUFBVTtZQUVkLElBQU0sQUFBRUMsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRSxXQUFXTCxpQkFDWE0sV0FBV0MsSUFBQUEsMEJBQW9CLEVBQUNGLFdBQ2hDRyxPQUFPbEIsUUFBUW1CLGtCQUFrQixDQUFDSDtZQUV4QyxJQUFJRSxTQUFTLE1BQU07Z0JBQ2pCLElBQU1uQixXQUFXWSxrQkFDWFMsT0FBT1AsS0FBS1EsWUFBWSxDQUFDdEIsVUFBVUMsVUFDbkNzQixpQkFBaUJ0QixTQUNqQnVCLGtCQUFrQnZCLFNBQ2xCd0Isd0JBQXdCSixLQUFLSyxlQUFlLENBQUNQLE1BQU1JLGdCQUFnQkM7Z0JBRXpFLElBQUlDLHVCQUF1QjtvQkFDekJaLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWMsNkJBQTZCLElBQUk5QjtJQUV2QyxXQUFlOEIifQ==