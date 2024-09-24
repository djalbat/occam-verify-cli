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
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("../tokens/constructorTerm/bracketed"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlIGZyb20gXCIuLi9ub2RlL3Rlcm0vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyBmcm9tIFwiLi4vdG9rZW5zL2NvbnN0cnVjdG9yVGVybS9icmFja2V0ZWRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBub2RlID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGJyYWNrZXRlZENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBuZXcgQnJhY2tldGVkQ29uc3RydWN0b3IodGVybU5vZGUsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG4gIH1cbn1cblxuY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBCcmFja2V0ZWRDb25zdHJ1Y3Rvci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBicmFja2V0ZWRDb25zdHJ1Y3RvcjtcbiJdLCJuYW1lcyI6WyJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsImZyb21Ob3RoaW5nIiwibm9kZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJ0b2tlbnMiLCJicmFja2V0ZWRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidGVybU5vZGUiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7a0VBcEJ3QjtnRUFDaUI7aUVBQ1M7c0JBRXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQkFBNEIsRUFDbkNDLFNBQVNDLG1CQUFxQyxFQUM5Q0MsU0FBU0MsSUFBQUEsb0JBQVksRUFBQ0wsTUFBTUUsU0FDNUJJLFdBQVdOLE1BQ1hPLHVCQUF1QixJQU4zQlQscUJBTW9EUSxVQUFVRjtnQkFFaEUsT0FBT0c7WUFDVDs7O1dBVElUO0VBQTZCVSxvQkFBVztBQVk5QyxJQUFNRCx1QkFBdUJULHFCQUFxQkMsV0FBVztJQUU3RCxXQUFlUSJ9