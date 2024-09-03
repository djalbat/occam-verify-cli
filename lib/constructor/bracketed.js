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
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../node/term/constructor/bracketed"));
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("../tokens/constructorDeclaration/bracketed"));
var _string = require("../utilities/string");
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
var BracketedConstructor = /*#__PURE__*/ function(Constructor) {
    _inherits(BracketedConstructor, Constructor);
    function BracketedConstructor() {
        _class_call_check(this, BracketedConstructor);
        return _call_super(this, BracketedConstructor, arguments);
    }
    _create_class(BracketedConstructor, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var node = _bracketed.default, tokens = _bracketed1.default, string = (0, _string.nodeAsString)(node, tokens), termNode = node, bracketedConstructor = new BracketedConstructor(termNode, string);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);
var bracketedConstructor = BracketedConstructor.fromNothing();
var _default = bracketedConstructor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlIGZyb20gXCIuLi9ub2RlL3Rlcm0vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyBmcm9tIFwiLi4vdG9rZW5zL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vYnJhY2tldGVkXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBicmFja2V0ZWRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm1Ob2RlLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59XG5cbmNvbnN0IGJyYWNrZXRlZENvbnN0cnVjdG9yID0gQnJhY2tldGVkQ29uc3RydWN0b3IuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgYnJhY2tldGVkQ29uc3RydWN0b3I7XG4iXSwibmFtZXMiOlsiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJmcm9tTm90aGluZyIsIm5vZGUiLCJicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlIiwidG9rZW5zIiwiYnJhY2tldGVkQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRlcm1Ob2RlIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O2tFQXBCd0I7Z0VBQ2lCO2lFQUNTO3NCQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLHFDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQkFBNEIsRUFDbkNDLFNBQVNDLG1CQUFxQyxFQUM5Q0MsU0FBU0MsSUFBQUEsb0JBQVksRUFBQ0wsTUFBTUUsU0FDNUJJLFdBQVdOLE1BQ1hPLHVCQUF1QixJQU4zQlQscUJBTW9EUSxVQUFVRjtnQkFFaEUsT0FBT0c7WUFDVDs7O1dBVElUO0VBQTZCVSxvQkFBVztBQVk5QyxJQUFNRCx1QkFBdUJULHFCQUFxQkMsV0FBVztJQUU3RCxXQUFlUSJ9