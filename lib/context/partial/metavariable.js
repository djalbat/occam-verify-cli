"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetavariablePartialContext;
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
var bnf = "\n\n        _ ::= metavariable... <END_OF_LINE> ;\n        \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var MetavariablePartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(MetavariablePartialContext, PartialContext);
    function MetavariablePartialContext() {
        _class_call_check(this, MetavariablePartialContext);
        return _call_super(this, MetavariablePartialContext, arguments);
    }
    _create_class(MetavariablePartialContext, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.node; ///
                return metavariableNode;
            }
        },
        {
            key: "getMetavariableTokens",
            value: function getMetavariableTokens() {
                var metavariableTokens = this.tokens; ///
                return metavariableTokens;
            }
        }
    ], [
        {
            key: "fromMetavariable",
            value: function fromMetavariable(metavariable, context) {
                var string = metavariable.getString(), lexer = context.getLexer(), parser = context.getParser(), metavariablePartialContext = _partial.default.fromStringLexerAndParser(MetavariablePartialContext, string, lexer, parser);
                return metavariablePartialContext;
            }
        },
        {
            key: "fromStringLexerAndParser",
            value: function fromStringLexerAndParser(string, lexer, parser) {
                return _partial.default.fromStringLexerAndParser(MetavariablePartialContext, string, lexer, parser);
            }
        }
    ]);
    return MetavariablePartialContext;
}(_partial.default);
_define_property(MetavariablePartialContext, "rule", rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbFwiO1xuXG5pbXBvcnQgeyBydWxlRnJvbUJORiB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWxcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgICAgIF8gOjo9IG1ldGF2YXJpYWJsZS4uLiA8RU5EX09GX0xJTkU+IDtcbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgcnVsZSA9IHJ1bGVGcm9tQk5GKGJuZik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0IGV4dGVuZHMgUGFydGlhbENvbnRleHQge1xuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVUb2tlbnMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCA9IFBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihNZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCwgc3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSB7IHJldHVybiBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQsIHN0cmluZywgbGV4ZXIsIHBhcnNlcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCIsImJuZiIsInJ1bGUiLCJydWxlRnJvbUJORiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibm9kZSIsImdldE1ldGF2YXJpYWJsZVRva2VucyIsIm1ldGF2YXJpYWJsZVRva2VucyIsInRva2VucyIsImZyb21NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjb250ZXh0Iiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OytEQVhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixJQUFNQyxNQUFPLHVFQUtQQyxPQUFPQyxJQUFBQSxvQkFBVyxFQUFDRjtBQUVWLElBQUEsQUFBTUQsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEdBQUc7Z0JBRXZDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxZQUFZLEVBQUVDLE9BQU87Z0JBQzNDLElBQU1DLFNBQVNGLGFBQWFHLFNBQVMsSUFDL0JDLFFBQVFILFFBQVFJLFFBQVEsSUFDeEJDLFNBQVNMLFFBQVFNLFNBQVMsSUFDMUJDLDZCQUE2QkMsZ0JBQWMsQ0FBQ0Msd0JBQXdCLENBbkJ6RHJCLDRCQW1Cc0ZhLFFBQVFFLE9BQU9FO2dCQUV0SCxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCUixNQUFNLEVBQUVFLEtBQUssRUFBRUUsTUFBTTtnQkFBSSxPQUFPRyxnQkFBYyxDQUFDQyx3QkFBd0IsQ0F4QnBGckIsNEJBd0JpSGEsUUFBUUUsT0FBT0U7WUFBUzs7O1dBeEJ6SWpCO0VBQW1Db0IsZ0JBQWM7QUFhcEUsaUJBYm1CcEIsNEJBYVpFLFFBQU9BIn0=