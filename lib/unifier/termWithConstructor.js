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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
            value: function unify(constructorTermNode, termNode, localContext) {
                var termUnifiedWithConstructor;
                var nonTerminalNodeA = constructorTermNode, nonTerminalNodeB = termNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);
                termUnifiedWithConstructor = nonTerminalNodeUnified; ///
                return termUnifiedWithConstructor;
            }
        }
    ]);
    return TermWithConstructorUnifier;
}(_unifier.default);
_define_property(TermWithConstructorUnifier, "maps", [
    {
        nodeQueryA: typeNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(typeNodeB, termNodeB, localContext) {
            var unified = false;
            var Term = _shim.default.Term, typeNode = typeNodeB, typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = localContext.findTypeByTypeName(typeName);
            if (type !== null) {
                var termNode = termNodeB, term = Term.fromTermNode(termNode, localContext), termVerifiedGivenType = term.verifyGivenType(type, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1XaXRoQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIik7XG5cbmNsYXNzIFRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gY29uc3RydWN0b3JUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQpO1xuXG4gICAgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcjtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodHlwZU5vZGVCLCB0ZXJtTm9kZUIsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWRHaXZlblR5cGUgPSB0ZXJtLnZlcmlmeUdpdmVuVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllZEdpdmVuVHlwZSkge1xuICAgICAgICAgICAgdW5pZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciA9IG5ldyBUZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIlRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIiwidW5pZnkiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwidGVybU5vZGUiLCJsb2NhbENvbnRleHQiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInR5cGVOb2RlQiIsInRlcm1Ob2RlQiIsInVuaWZpZWQiLCJUZXJtIiwic2hpbSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5UeXBlIiwidGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQUE7OzsyREFwRGlCOzhEQUNHO3FCQUVNO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLG1CQUFtQixFQUFFQyxRQUFRLEVBQUVDLFlBQVk7Z0JBQy9DLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQkoscUJBQ25CSyxtQkFBbUJKLFVBQ25CSyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JIO2dCQUU3RkMsNkJBQTZCRyx3QkFBd0IsR0FBRztnQkFFeEQsT0FBT0g7WUFDVDs7O1dBWElMO0VBQW1DVSxnQkFBTztBQWE5QyxpQkFiSVYsNEJBYUdXLFFBQU87SUFDWjtRQUNFQyxZQUFZYjtRQUNaYyxZQUFZaEI7UUFDWkksT0FBTyxTQUFDYSxXQUFXQyxXQUFXWDtZQUM1QixJQUFJWSxVQUFVO1lBRWQsSUFBTSxBQUFFQyxPQUFTQyxhQUFJLENBQWJELE1BQ0ZFLFdBQVdMLFdBQ1hNLFdBQVdDLElBQUFBLDBCQUFvQixFQUFDRixXQUNoQ0csT0FBT2xCLGFBQWFtQixrQkFBa0IsQ0FBQ0g7WUFFN0MsSUFBSUUsU0FBUyxNQUFNO2dCQUNqQixJQUFNbkIsV0FBV1ksV0FDWFMsT0FBT1AsS0FBS1EsWUFBWSxDQUFDdEIsVUFBVUMsZUFDbkNzQix3QkFBd0JGLEtBQUtHLGVBQWUsQ0FBQ0wsTUFBTWxCO2dCQUV6RCxJQUFJc0IsdUJBQXVCO29CQUN6QlYsVUFBVTtnQkFDWjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNWSw2QkFBNkIsSUFBSTVCO0lBRXZDLFdBQWU0QiJ9