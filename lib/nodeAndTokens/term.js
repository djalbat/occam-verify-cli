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
    default: function() {
        return TermNodeAndTokens;
    },
    termNodeFromTermString: function() {
        return termNodeFromTermString;
    }
});
var _nodeAndTokens = /*#__PURE__*/ _interop_require_wildcard(require("../nodeAndTokens"));
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
var bnf = "\n\n        _ ::= term... <END_OF_LINE> ;\n        \n      ", rule = (0, _nodeAndTokens.ruleFromBNF)(bnf);
var TermNodeAndTokens = /*#__PURE__*/ function(NodeAndTokens) {
    _inherits(TermNodeAndTokens, NodeAndTokens);
    function TermNodeAndTokens() {
        _class_call_check(this, TermNodeAndTokens);
        return _call_super(this, TermNodeAndTokens, arguments);
    }
    _create_class(TermNodeAndTokens, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                var termNode = this.node; ///
                return termNode;
            }
        },
        {
            key: "getTermTokens",
            value: function getTermTokens() {
                var termTokens = this.tokens; ///
                return termTokens;
            }
        }
    ], [
        {
            key: "fromTerm",
            value: function fromTerm(term, context) {
                var string = term.getString(), termNodeAndTokens = _nodeAndTokens.default.fromString(TermNodeAndTokens, string, context);
                return termNodeAndTokens;
            }
        },
        {
            key: "fromTermString",
            value: function fromTermString(termString, context) {
                var string = termString, termNodeAndTokens = _nodeAndTokens.default.fromString(TermNodeAndTokens, string, context);
                return termNodeAndTokens;
            }
        }
    ]);
    return TermNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(TermNodeAndTokens, "rule", rule);
function termNodeFromTermString(termString, context) {
    var termNodeAndTokens = TermNodeAndTokens.fromTermString(termString, context), termNode = termNodeAndTokens.getTermNode();
    return termNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlQW5kVG9rZW5zIGZyb20gXCIuLi9ub2RlQW5kVG9rZW5zXCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tQk5GIH0gZnJvbSBcIi4uL25vZGVBbmRUb2tlbnNcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgICAgIF8gOjo9IHRlcm0uLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIHJ1bGUgPSBydWxlRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtTm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRUZXJtVG9rZW5zKCkge1xuICAgIGNvbnN0IHRlcm1Ub2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXR1cm4gdGVybVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybU5vZGVBbmRUb2tlbnMgPSBOb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoVGVybU5vZGVBbmRUb2tlbnMsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVBbmRUb2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICB0ZXJtTm9kZUFuZFRva2VucyA9IE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhUZXJtTm9kZUFuZFRva2Vucywgc3RyaW5nLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZUFuZFRva2VucztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlQW5kVG9rZW5zID0gVGVybU5vZGVBbmRUb2tlbnMuZnJvbVRlcm1TdHJpbmcodGVybVN0cmluZywgY29udGV4dCksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBbmRUb2tlbnMuZ2V0VGVybU5vZGUoKTtcblxuICByZXR1cm4gdGVybU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybU5vZGVBbmRUb2tlbnMiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwiYm5mIiwicnVsZSIsInJ1bGVGcm9tQk5GIiwiZ2V0VGVybU5vZGUiLCJ0ZXJtTm9kZSIsIm5vZGUiLCJnZXRUZXJtVG9rZW5zIiwidGVybVRva2VucyIsInRva2VucyIsImZyb21UZXJtIiwidGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJ0ZXJtTm9kZUFuZFRva2VucyIsIk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZnJvbVRlcm1TdHJpbmciLCJ0ZXJtU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBYXFCQTs7SUE4QkxDLHNCQUFzQjtlQUF0QkE7OztxRUF6Q1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCLElBQU1DLE1BQU8sK0RBS1BDLE9BQU9DLElBQUFBLDBCQUFXLEVBQUNGO0FBRVYsSUFBQSxBQUFNRixrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLElBQUksRUFBRSxHQUFHO2dCQUUvQixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRztnQkFFbkMsT0FBT0Q7WUFDVDs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87Z0JBQzNCLElBQU1DLFNBQVNGLEtBQUtHLFNBQVMsSUFDdkJDLG9CQUFvQkMsc0JBQWEsQ0FBQ0MsVUFBVSxDQWpCakNsQixtQkFpQnFEYyxRQUFRRDtnQkFFOUUsT0FBT0c7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVUsRUFBRVAsT0FBTztnQkFDdkMsSUFBTUMsU0FBU00sWUFDVEosb0JBQW9CQyxzQkFBYSxDQUFDQyxVQUFVLENBeEJqQ2xCLG1CQXdCcURjLFFBQVFEO2dCQUU5RSxPQUFPRztZQUNUOzs7V0EzQm1CaEI7RUFBMEJpQixzQkFBYTtBQWExRCxpQkFibUJqQixtQkFhWkcsUUFBT0E7QUFpQlQsU0FBU0YsdUJBQXVCbUIsVUFBVSxFQUFFUCxPQUFPO0lBQ3hELElBQU1HLG9CQUFvQmhCLGtCQUFrQm1CLGNBQWMsQ0FBQ0MsWUFBWVAsVUFDakVQLFdBQVdVLGtCQUFrQlgsV0FBVztJQUU5QyxPQUFPQztBQUNUIn0=