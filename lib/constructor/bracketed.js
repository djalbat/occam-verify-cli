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
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
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
                var Term = _shim.default.Term, termNode = _bracketed.default, term = Term.fromTermNode(termNode, localContext), bracketedConstructor = new BracketedConstructor(term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSBmcm9tIFwiLi4vbm9kZS90ZXJtL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1TdHJpbmcgfSBmcm9tIFwiLi4vbm9kZS90ZXJtL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuXG5jb25zdCBsb2NhbENvbnRleHQgPSB7XG4gIG5vZGVBc1N0cmluZzogKG5vZGUpID0+IHtcbiAgICBjb25zdCBzdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1TdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3Rvcih0ZXJtKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbnN0cnVjdG9yIiwibG9jYWxDb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVN0cmluZyIsImZyb21Ob3RoaW5nIiwiVGVybSIsInNoaW0iLCJ0ZXJtTm9kZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzJEQWRKO2tFQUNPO2lFQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDLElBQU1DLGVBQWU7SUFDbkJDLGNBQWMsU0FBQ0M7UUFDYixJQUFNQyxTQUFTQyx5Q0FBOEIsRUFBRyxHQUFHO1FBRW5ELE9BQU9EO0lBQ1Q7QUFDRjtBQUVlLElBQUEsQUFBTUoscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNaTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVDLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsV0FBV0Msa0JBQTRCLEVBQ3ZDQyxPQUFPSixLQUFLSyxZQUFZLENBQUNILFVBQVVSLGVBQ25DWSx1QkFBdUIsSUFMWmIscUJBS3FDVztnQkFFdEQsT0FBT0U7WUFDVDs7O1dBUm1CYjtFQUE2QmMsb0JBQVcifQ==