"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return VariablePartialContext;
    },
    get variableNodeFromVariableString () {
        return variableNodeFromVariableString;
    }
});
var _partial = /*#__PURE__*/ _interop_require_wildcard(require("../../context/partial"));
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
var bnf = "\n\n        _ ::= variable... <END_OF_LINE> ;\n        \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var VariablePartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(VariablePartialContext, PartialContext);
    function VariablePartialContext() {
        _class_call_check(this, VariablePartialContext);
        return _call_super(this, VariablePartialContext, arguments);
    }
    _create_class(VariablePartialContext, [
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
                var string = variable.getString(), lexer = context.getLexer(), parser = context.getParser(), variablePartialContext = _partial.default.fromStringLexerAndParser(VariablePartialContext, string, context, lexer, parser);
                return variablePartialContext;
            }
        },
        {
            key: "fromStringLexerAndParser",
            value: function fromStringLexerAndParser(string, lexer, parser) {
                return _partial.default.fromStringLexerAndParser(VariablePartialContext, string, lexer, parser);
            }
        }
    ]);
    return VariablePartialContext;
}(_partial.default);
_define_property(VariablePartialContext, "rule", rule);
function variableNodeFromVariableString(variableString, context) {
    var string = variableString, lexer = context.getLexer(), parser = context.getParser(), variablePartialContext = VariablePartialContext.fromStringLexerAndParser(string, lexer, parser), variableNode = variablePartialContext.getVariableNode();
    return variableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsXCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tQk5GIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICAgICAgXyA6Oj0gdmFyaWFibGUuLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIHJ1bGUgPSBydWxlRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZVBhcnRpYWxDb250ZXh0IGV4dGVuZHMgUGFydGlhbENvbnRleHQge1xuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZVRva2VucygpIHtcbiAgICBjb25zdCB2YXJpYWJsZVRva2VucyA9IHRoaXMudG9rZW5zOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVBhcnRpYWxDb250ZXh0ID0gUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKFZhcmlhYmxlUGFydGlhbENvbnRleHQsIHN0cmluZywgY29udGV4dCwgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQYXJ0aWFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSB7IHJldHVybiBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoVmFyaWFibGVQYXJ0aWFsQ29udGV4dCwgc3RyaW5nLCBsZXhlciwgcGFyc2VyKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICB2YXJpYWJsZVBhcnRpYWxDb250ZXh0ID0gVmFyaWFibGVQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVQYXJ0aWFsQ29udGV4dC5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICByZXR1cm4gdmFyaWFibGVOb2RlO1xufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlUGFydGlhbENvbnRleHQiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJibmYiLCJydWxlIiwicnVsZUZyb21CTkYiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJub2RlIiwiZ2V0VmFyaWFibGVUb2tlbnMiLCJ2YXJpYWJsZVRva2VucyIsInRva2VucyIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlIiwiY29udGV4dCIsInN0cmluZyIsImdldFN0cmluZyIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJ2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQWFxQkE7O1FBMkJMQztlQUFBQTs7OytEQXRDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0IsSUFBTUMsTUFBTyxtRUFLUEMsT0FBT0MsSUFBQUEsb0JBQVcsRUFBQ0Y7QUFFVixJQUFBLEFBQU1GLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsR0FBRztnQkFFbkMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRztnQkFFdkMsT0FBT0Q7WUFDVDs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVDLE9BQU87Z0JBQ25DLElBQU1DLFNBQVNGLFNBQVNHLFNBQVMsSUFDM0JDLFFBQVFILFFBQVFJLFFBQVEsSUFDeEJDLFNBQVNMLFFBQVFNLFNBQVMsSUFDMUJDLHlCQUF5QkMsZ0JBQWMsQ0FBQ0Msd0JBQXdCLENBbkJyRHRCLHdCQW1COEVjLFFBQVFELFNBQVNHLE9BQU9FO2dCQUV2SCxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCUixNQUFNLEVBQUVFLEtBQUssRUFBRUUsTUFBTTtnQkFBSSxPQUFPRyxnQkFBYyxDQUFDQyx3QkFBd0IsQ0F4QnBGdEIsd0JBd0I2R2MsUUFBUUUsT0FBT0U7WUFBUzs7O1dBeEJySWxCO0VBQStCcUIsZ0JBQWM7QUFhaEUsaUJBYm1CckIsd0JBYVpHLFFBQU9BO0FBY1QsU0FBU0YsK0JBQStCc0IsY0FBYyxFQUFFVixPQUFPO0lBQ3BFLElBQU1DLFNBQVNTLGdCQUNUUCxRQUFRSCxRQUFRSSxRQUFRLElBQ3hCQyxTQUFTTCxRQUFRTSxTQUFTLElBQzFCQyx5QkFBeUJwQix1QkFBdUJzQix3QkFBd0IsQ0FBQ1IsUUFBUUUsT0FBT0UsU0FDeEZaLGVBQWVjLHVCQUF1QmYsZUFBZTtJQUUzRCxPQUFPQztBQUNUIn0=