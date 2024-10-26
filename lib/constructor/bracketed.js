"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bracketedTermNode: function() {
        return bracketedTermNode;
    },
    default: function() {
        return BracketedConstructor;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _constructor = /*#__PURE__*/ _interop_require_wildcard(require("../constructor"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("../context/bracketed/constructor"));
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
var constructorBracketedContext = _constructor1.default.fromNothing();
var bracketedTermNode = constructorBracketedContext.getBracketedTermNode();
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
                var Term = _shim.default.Term, termNode = bracketedTermNode, context = constructorBracketedContext, term = Term.fromTermNode(termNode, context), type = null, string = (0, _constructor.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYWNrZXRlZC9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tVGVybUFuZFR5cGUgfSBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcblxuY29uc3QgY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0ID0gQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBjb25zdCBicmFja2V0ZWRUZXJtTm9kZSA9IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dC5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb25zdHJ1Y3RvciBleHRlbmRzIENvbnN0cnVjdG9yIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgY29udGV4dCA9IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBuZXcgQnJhY2tldGVkQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZFRlcm1Ob2RlIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJmcm9tTm90aGluZyIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwiVGVybSIsInNoaW0iLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidHlwZSIsInN0cmluZyIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVVhQSxpQkFBaUI7ZUFBakJBOzs7ZUFFUUM7OzsyREFWSjttRUFDTzttRUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QyxJQUFNQyw4QkFBOEJDLHFCQUEyQixDQUFDQyxXQUFXO0FBRXBFLElBQU1KLG9CQUFvQkUsNEJBQTRCRyxvQkFBb0I7QUFFbEUsSUFBQSxBQUFNSixxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0sQUFBRUUsT0FBU0MsYUFBSSxDQUFiRCxNQUNGRSxXQUFXUixtQkFDWFMsVUFBVVAsNkJBQ1ZRLE9BQU9KLEtBQUtLLFlBQVksQ0FBQ0gsVUFBVUMsVUFDbkNHLE9BQU8sTUFDUEMsU0FBU0MsSUFBQUEsa0NBQXFCLEVBQUNKLE1BQU1FLE9BQ3JDRyx1QkFBdUIsSUFSWmQscUJBUXFDWSxRQUFRSDtnQkFFOUQsT0FBT0s7WUFDVDs7O1dBWG1CZDtFQUE2QmUsb0JBQVcifQ==