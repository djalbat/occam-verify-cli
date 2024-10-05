"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BracketedConstructor;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _constructor = /*#__PURE__*/ _interop_require_wildcard(require("../constructor"));
var _bracketed = /*#__PURE__*/ _interop_require_wildcard(require("../node/term/constructor/bracketed"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var localContext = {
    nodeAsString: function(node) {
        var string = _bracketed.bracketedConstructorTermString; ///
        return string;
    }
};
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
                var Term = _shim.default.Term, termNode = _bracketed.default, term = Term.fromTermNode(termNode, localContext), type = null, string = (0, _constructor.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSBmcm9tIFwiLi4vbm9kZS90ZXJtL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tVGVybUFuZFR5cGUgfSBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVN0cmluZyB9IGZyb20gXCIuLi9ub2RlL3Rlcm0vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5cbmNvbnN0IGxvY2FsQ29udGV4dCA9IHtcbiAgbm9kZUFzU3RyaW5nOiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IHN0cmluZyA9IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJsb2NhbENvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtU3RyaW5nIiwiZnJvbU5vdGhpbmciLCJUZXJtIiwic2hpbSIsInRlcm1Ob2RlIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0eXBlIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFpQnFCQTs7OzJEQWZKO21FQUNPO2lFQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDLElBQU1DLGVBQWU7SUFDbkJDLGNBQWMsU0FBQ0M7UUFDYixJQUFNQyxTQUFTQyx5Q0FBOEIsRUFBRyxHQUFHO1FBRW5ELE9BQU9EO0lBQ1Q7QUFDRjtBQUVlLElBQUEsQUFBTUoscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNaTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVDLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsV0FBV0Msa0JBQTRCLEVBQ3ZDQyxPQUFPSixLQUFLSyxZQUFZLENBQUNILFVBQVVSLGVBQ25DWSxPQUFPLE1BQ1BULFNBQVNVLElBQUFBLGtDQUFxQixFQUFDSCxNQUFNRSxPQUNyQ0UsdUJBQXVCLElBUFpmLHFCQU9xQ0ksUUFBUU87Z0JBRTlELE9BQU9JO1lBQ1Q7OztXQVZtQmY7RUFBNkJnQixvQkFBVyJ9