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
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("../tokens/term/constructorDeclaration/bracketed"));
var _string = require("../utilities/string");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var BracketedConstructor = /*#__PURE__*/ function(Constructor) {
    _inherits(BracketedConstructor, Constructor);
    var _super = _create_super(BracketedConstructor);
    function BracketedConstructor() {
        _class_call_check(this, BracketedConstructor);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlIGZyb20gXCIuLi9ub2RlL3Rlcm0vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdW5xdWFsaWZpZWRCcmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ub2tlbnMgZnJvbSBcIi4uL3Rva2Vucy90ZXJtL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vYnJhY2tldGVkXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB1bnF1YWxpZmllZEJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVRva2VucywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgc3RyaW5nKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3RvcjtcbiAgfVxufVxuXG5jb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IEJyYWNrZXRlZENvbnN0cnVjdG9yLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbnN0cnVjdG9yIiwiZnJvbU5vdGhpbmciLCJub2RlIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsInRva2VucyIsInVucXVhbGlmaWVkQnJhY2tldGVkQ29uc3RydWN0b3JUZXJtVG9rZW5zIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidGVybU5vZGUiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7a0VBcEJ3QjtnRUFDaUI7aUVBQ2E7c0JBRXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQkFBNEIsRUFDbkNDLFNBQVNDLG1CQUF5QyxFQUNsREMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQ0wsTUFBTUUsU0FDNUJJLFdBQVdOLE1BQ1hPLHVCQUF1QixJQU4zQlQscUJBTW9EUSxVQUFVRjtnQkFFaEUsT0FBT0c7WUFDVDs7O1dBVElUO0VBQTZCVSxvQkFBVztBQVk5QyxJQUFNRCx1QkFBdUJULHFCQUFxQkMsV0FBVztJQUU3RCxXQUFlUSJ9