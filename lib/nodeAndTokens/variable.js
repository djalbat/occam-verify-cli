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
        return VariableNodeAndTokens;
    },
    variableNodeFromVariableString: function() {
        return variableNodeFromVariableString;
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
var bnf = "\n\n        _ ::= variable... <END_OF_LINE> ;\n        \n      ", rule = (0, _nodeAndTokens.ruleFromBNF)(bnf);
var VariableNodeAndTokens = /*#__PURE__*/ function(NodeAndTokens) {
    _inherits(VariableNodeAndTokens, NodeAndTokens);
    function VariableNodeAndTokens() {
        _class_call_check(this, VariableNodeAndTokens);
        return _call_super(this, VariableNodeAndTokens, arguments);
    }
    _create_class(VariableNodeAndTokens, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var variableNode = this.node; ///
                return variableNode;
            }
        },
        {
            key: "getVariableTokens",
            value: function getVariableTokens() {
                var variableTokens = this.tokens; ///
                return variableTokens;
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable, context) {
                var string = variable.getString(), variableNodeAndTokens = _nodeAndTokens.default.fromString(VariableNodeAndTokens, string, context);
                return variableNodeAndTokens;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                return _nodeAndTokens.default.fromString(VariableNodeAndTokens, string, context);
            }
        }
    ]);
    return VariableNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(VariableNodeAndTokens, "rule", rule);
function variableNodeFromVariableString(variableString, context) {
    var string = variableString, variableNodeAndTokens = VariableNodeAndTokens.fromString(string, context), variableNode = variableNodeAndTokens.getVariableNode();
    return variableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vuc1wiO1xuXG5pbXBvcnQgeyBydWxlRnJvbUJORiB9IGZyb20gXCIuLi9ub2RlQW5kVG9rZW5zXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBfIDo6PSB2YXJpYWJsZS4uLiA8RU5EX09GX0xJTkU+IDtcbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgcnVsZSA9IHJ1bGVGcm9tQk5GKGJuZik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlTm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZVRva2VucygpIHtcbiAgICBjb25zdCB2YXJpYWJsZVRva2VucyA9IHRoaXMudG9rZW5zOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKFZhcmlhYmxlTm9kZUFuZFRva2Vucywgc3RyaW5nLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVBbmRUb2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHsgcmV0dXJuIE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhWYXJpYWJsZU5vZGVBbmRUb2tlbnMsIHN0cmluZywgY29udGV4dCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZU5vZGVBbmRUb2tlbnMgPSBWYXJpYWJsZU5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZU5vZGVBbmRUb2tlbnMiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJibmYiLCJydWxlIiwicnVsZUZyb21CTkYiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJub2RlIiwiZ2V0VmFyaWFibGVUb2tlbnMiLCJ2YXJpYWJsZVRva2VucyIsInRva2VucyIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlIiwiY29udGV4dCIsInN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlTm9kZUFuZFRva2VucyIsIk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwidmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFhcUJBOztJQXlCTEMsOEJBQThCO2VBQTlCQTs7O3FFQXBDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsSUFBTUMsTUFBTyxtRUFLUEMsT0FBT0MsSUFBQUEsMEJBQVcsRUFBQ0Y7QUFFVixJQUFBLEFBQU1GLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEdBQUc7Z0JBRW5DLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRXZDLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFQyxPQUFPO2dCQUNuQyxJQUFNQyxTQUFTRixTQUFTRyxTQUFTLElBQzNCQyx3QkFBd0JDLHNCQUFhLENBQUNDLFVBQVUsQ0FqQnJDbEIsdUJBaUI2RGMsUUFBUUQ7Z0JBRXRGLE9BQU9HO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXSixNQUFNLEVBQUVELE9BQU87Z0JBQUksT0FBT0ksc0JBQWEsQ0FBQ0MsVUFBVSxDQXRCakRsQix1QkFzQnlFYyxRQUFRRDtZQUFVOzs7V0F0QjNGYjtFQUE4QmlCLHNCQUFhO0FBYTlELGlCQWJtQmpCLHVCQWFaRyxRQUFPQTtBQVlULFNBQVNGLCtCQUErQmtCLGNBQWMsRUFBRU4sT0FBTztJQUNwRSxJQUFNQyxTQUFTSyxnQkFDVEgsd0JBQXdCaEIsc0JBQXNCa0IsVUFBVSxDQUFDSixRQUFRRCxVQUNqRVAsZUFBZVUsc0JBQXNCWCxlQUFlO0lBRTFELE9BQU9DO0FBQ1QifQ==