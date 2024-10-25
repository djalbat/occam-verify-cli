"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermSubstitutionNodeAndTokens;
    }
});
var _nodeAndTokens = /*#__PURE__*/ _interop_require_wildcard(require("../../nodeAndTokens"));
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
var bnf = "\n\n            _ ::= termSubstitution... <END_OF_LINE> ;\n            \n      ", rule = (0, _nodeAndTokens.ruleFromBNF)(bnf);
var TermSubstitutionNodeAndTokens = /*#__PURE__*/ function(NodeAndTokens) {
    _inherits(TermSubstitutionNodeAndTokens, NodeAndTokens);
    function TermSubstitutionNodeAndTokens() {
        _class_call_check(this, TermSubstitutionNodeAndTokens);
        return _call_super(this, TermSubstitutionNodeAndTokens, arguments);
    }
    _create_class(TermSubstitutionNodeAndTokens, null, [
        {
            key: "fromTermSubstitutionString",
            value: function fromTermSubstitutionString(termSubstitutionString, context) {
                var string = termSubstitutionString, termSubstitutionNodeAndTokens = _nodeAndTokens.default.fromString(TermSubstitutionNodeAndTokens, string, context);
                return termSubstitutionNodeAndTokens;
            }
        }
    ]);
    return TermSubstitutionNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(TermSubstitutionNodeAndTokens, "rule", rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vLi4vbm9kZUFuZFRva2Vuc1wiO1xuXG5pbXBvcnQgeyBydWxlRnJvbUJORiB9IGZyb20gXCIuLi8uLi9ub2RlQW5kVG9rZW5zXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICAgICAgXyA6Oj0gdGVybVN1YnN0aXR1dGlvbi4uLiA8RU5EX09GX0xJTkU+IDtcbiAgICAgICAgICAgIFxuICAgICAgYCxcbiAgICAgIHJ1bGUgPSBydWxlRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBzdGF0aWMgcnVsZSA9IHJ1bGU7XG5cbiAgc3RhdGljIGZyb21UZXJtU3Vic3RpdHV0aW9uU3RyaW5nKHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMgPSBOb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoVGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsImJuZiIsInJ1bGUiLCJydWxlRnJvbUJORiIsImZyb21UZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImNvbnRleHQiLCJzdHJpbmciLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsIk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OztxRUFYSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsSUFBTUMsTUFBTyxtRkFLUEMsT0FBT0MsSUFBQUEsMEJBQVcsRUFBQ0Y7QUFFVixJQUFBLEFBQU1ELDhDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFHWkksS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxzQkFBc0IsRUFBRUMsT0FBTztnQkFDL0QsSUFBTUMsU0FBU0Ysd0JBQ1RHLGdDQUFnQ0Msc0JBQWEsQ0FBQ0MsVUFBVSxDQUw3Q1YsK0JBSzZFTyxRQUFRRDtnQkFFdEcsT0FBT0U7WUFDVDs7O1dBUm1CUjtFQUFzQ1Msc0JBQWE7QUFDdEUsaUJBRG1CVCwrQkFDWkUsUUFBT0EifQ==