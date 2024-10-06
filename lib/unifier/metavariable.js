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
var typeNodeQuery = (0, _query.nodeQuery)("/type!"), termNodeQuery = (0, _query.nodeQuery)("/term!");
var MetavariableUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(MetavariableUnifier, Unifier);
    function MetavariableUnifier() {
        _class_call_check(this, MetavariableUnifier);
        return _call_super(this, MetavariableUnifier, arguments);
    }
    _create_class(MetavariableUnifier, [
        {
            key: "unify",
            value: function unify(metavariableNodeA, metavariableNodeB, localContext) {
                var unified;
                var nonTerminalNodeA = metavariableNodeA, nonTerminalNodeB = metavariableNodeB, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);
                unified = nonTerminalNodeUnified; ///
                return unified;
            }
        }
    ]);
    return MetavariableUnifier;
}(_unifier.default);
_define_property(MetavariableUnifier, "maps", [
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, localContext) {
            var unified = false;
            var Term = _shim.default.Term, Type = _shim.default.Type, typeNode = typeNodeB, type = Type.fromTypeNode(typeNode, localContext), typeVerified = type.verify(localContext);
            if (typeVerified) {
                var termNode = termNodeA, term = Term.fromTermNode(termNode, localContext), termVerifiedGivenType = term.verifyGivenType(type, localContext);
                if (termVerifiedGivenType) {
                    unified = true;
                }
            }
            return unified;
        }
    }
]);
var metavariableUnifier = new MetavariableUnifier();
var _default = metavariableUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIik7XG5cbmNsYXNzIE1ldGF2YXJpYWJsZVVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGF2YXJpYWJsZU5vZGVCLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGVCLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQpO1xuXG4gICAgdW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybU5vZGVBLCB0eXBlTm9kZUIsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHR5cGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgICAgICAgIHVuaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllciA9IG5ldyBNZXRhdmFyaWFibGVVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGF2YXJpYWJsZVVuaWZpZXI7XG4iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJNZXRhdmFyaWFibGVVbmlmaWVyIiwidW5pZnkiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibG9jYWxDb250ZXh0IiwidW5pZmllZCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInRlcm1Ob2RlQSIsInR5cGVOb2RlQiIsIlRlcm0iLCJzaGltIiwiVHlwZSIsInR5cGVOb2RlIiwidHlwZSIsImZyb21UeXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeSIsInRlcm1Ob2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllZEdpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFEQTs7O2VBQUE7OzsyREFuRGlCOzhEQUNHO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRUMsWUFBWTtnQkFDdEQsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CSixtQkFDbkJLLG1CQUFtQkosbUJBQ25CSyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JIO2dCQUU3RkMsVUFBVUcsd0JBQXdCLEdBQUc7Z0JBRXJDLE9BQU9IO1lBQ1Q7OztXQVhJTDtFQUE0QlUsZ0JBQU87QUFhdkMsaUJBYklWLHFCQWFHVyxRQUFPO0lBQ1o7UUFDRUMsWUFBWWI7UUFDWmMsWUFBWWhCO1FBQ1pJLE9BQU8sU0FBQ2EsV0FBV0MsV0FBV1g7WUFDNUIsSUFBSUMsVUFBVTtZQUVkLElBQVFXLE9BQWVDLGFBQUksQ0FBbkJELE1BQU1FLE9BQVNELGFBQUksQ0FBYkMsTUFDUkMsV0FBV0osV0FDWEssT0FBT0YsS0FBS0csWUFBWSxDQUFDRixVQUFVZixlQUNuQ2tCLGVBQWVGLEtBQUtHLE1BQU0sQ0FBQ25CO1lBRWpDLElBQUlrQixjQUFjO2dCQUNoQixJQUFNRSxXQUFXVixXQUNYVyxPQUFPVCxLQUFLVSxZQUFZLENBQUNGLFVBQVVwQixlQUNuQ3VCLHdCQUF3QkYsS0FBS0csZUFBZSxDQUFDUixNQUFNaEI7Z0JBRXpELElBQUl1Qix1QkFBdUI7b0JBQ3pCdEIsVUFBVTtnQkFDWjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNd0Isc0JBQXNCLElBQUk3QjtJQUVoQyxXQUFlNkIifQ==