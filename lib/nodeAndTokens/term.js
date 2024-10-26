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
            key: "fromString",
            value: function fromString(string, context) {
                return _nodeAndTokens.default.fromString(TermNodeAndTokens, string, context);
            }
        }
    ]);
    return TermNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(TermNodeAndTokens, "rule", rule);
function termNodeFromTermString(termString, context) {
    var string = termString, termNodeAndTokens = TermNodeAndTokens.fromString(string, context), termNode = termNodeAndTokens.getTermNode();
    return termNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlQW5kVG9rZW5zIGZyb20gXCIuLi9ub2RlQW5kVG9rZW5zXCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tQk5GIH0gZnJvbSBcIi4uL25vZGVBbmRUb2tlbnNcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgICAgIF8gOjo9IHRlcm0uLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIHJ1bGUgPSBydWxlRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtTm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRUZXJtVG9rZW5zKCkge1xuICAgIGNvbnN0IHRlcm1Ub2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXR1cm4gdGVybVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybU5vZGVBbmRUb2tlbnMgPSBOb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoVGVybU5vZGVBbmRUb2tlbnMsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVBbmRUb2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHsgcmV0dXJuIE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhUZXJtTm9kZUFuZFRva2Vucywgc3RyaW5nLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgdGVybU5vZGVBbmRUb2tlbnMgPSBUZXJtTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBbmRUb2tlbnMuZ2V0VGVybU5vZGUoKTtcblxuICByZXR1cm4gdGVybU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybU5vZGVBbmRUb2tlbnMiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwiYm5mIiwicnVsZSIsInJ1bGVGcm9tQk5GIiwiZ2V0VGVybU5vZGUiLCJ0ZXJtTm9kZSIsIm5vZGUiLCJnZXRUZXJtVG9rZW5zIiwidGVybVRva2VucyIsInRva2VucyIsImZyb21UZXJtIiwidGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJ0ZXJtTm9kZUFuZFRva2VucyIsIk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwidGVybVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQWFxQkE7O0lBeUJMQyxzQkFBc0I7ZUFBdEJBOzs7cUVBcENVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQixJQUFNQyxNQUFPLCtEQUtQQyxPQUFPQyxJQUFBQSwwQkFBVyxFQUFDRjtBQUVWLElBQUEsQUFBTUYsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxJQUFJLEVBQUUsR0FBRztnQkFFL0IsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxPQUFPO2dCQUMzQixJQUFNQyxTQUFTRixLQUFLRyxTQUFTLElBQ3ZCQyxvQkFBb0JDLHNCQUFhLENBQUNDLFVBQVUsQ0FqQmpDbEIsbUJBaUJxRGMsUUFBUUQ7Z0JBRTlFLE9BQU9HO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXSixNQUFNLEVBQUVELE9BQU87Z0JBQUksT0FBT0ksc0JBQWEsQ0FBQ0MsVUFBVSxDQXRCakRsQixtQkFzQnFFYyxRQUFRRDtZQUFVOzs7V0F0QnZGYjtFQUEwQmlCLHNCQUFhO0FBYTFELGlCQWJtQmpCLG1CQWFaRyxRQUFPQTtBQVlULFNBQVNGLHVCQUF1QmtCLFVBQVUsRUFBRU4sT0FBTztJQUN4RCxJQUFNQyxTQUFTSyxZQUNUSCxvQkFBb0JoQixrQkFBa0JrQixVQUFVLENBQUNKLFFBQVFELFVBQ3pEUCxXQUFXVSxrQkFBa0JYLFdBQVc7SUFFOUMsT0FBT0M7QUFDVCJ9