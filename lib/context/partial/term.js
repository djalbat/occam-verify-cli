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
        return TermPartialContext;
    },
    get termNodeFromTermString () {
        return termNodeFromTermString;
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
var bnf = "\n\n        _ ::= term... <END_OF_LINE> ;\n        \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var TermPartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(TermPartialContext, PartialContext);
    function TermPartialContext() {
        _class_call_check(this, TermPartialContext);
        return _call_super(this, TermPartialContext, arguments);
    }
    _create_class(TermPartialContext, [
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
                var string = term.getString(), lexer = context.getLexer(), parser = context.getParser(), termPartialContext = _partial.default.fromStringLexerAndParser(TermPartialContext, string, lexer, parser);
                return termPartialContext;
            }
        },
        {
            key: "fromStringLexerAndParser",
            value: function fromStringLexerAndParser(string, lexer, parser) {
                return _partial.default.fromStringLexerAndParser(TermPartialContext, string, lexer, parser);
            }
        }
    ]);
    return TermPartialContext;
}(_partial.default);
_define_property(TermPartialContext, "rule", rule);
function termNodeFromTermString(termString, context) {
    var string = termString, lexer = context.getLexer(), parser = context.getParser(), termPartialContext = TermPartialContext.fromStringLexerAndParser(string, lexer, parser), termNode = termPartialContext.getTermNode();
    return termNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWxcIjtcblxuaW1wb3J0IHsgcnVsZUZyb21CTkYgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBfIDo6PSB0ZXJtLi4uIDxFTkRfT0ZfTElORT4gO1xuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBydWxlID0gcnVsZUZyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybVBhcnRpYWxDb250ZXh0IGV4dGVuZHMgUGFydGlhbENvbnRleHQge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRUZXJtVG9rZW5zKCkge1xuICAgIGNvbnN0IHRlcm1Ub2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXR1cm4gdGVybVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtUGFydGlhbENvbnRleHQgPSBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoVGVybVBhcnRpYWxDb250ZXh0LCBzdHJpbmcsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgcmV0dXJuIHRlcm1QYXJ0aWFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSB7IHJldHVybiBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoVGVybVBhcnRpYWxDb250ZXh0LCBzdHJpbmcsIGxleGVyLCBwYXJzZXIpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtTm9kZUZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgdGVybVBhcnRpYWxDb250ZXh0ID0gVGVybVBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1QYXJ0aWFsQ29udGV4dC5nZXRUZXJtTm9kZSgpO1xuXG4gIHJldHVybiB0ZXJtTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtUGFydGlhbENvbnRleHQiLCJ0ZXJtTm9kZUZyb21UZXJtU3RyaW5nIiwiYm5mIiwicnVsZSIsInJ1bGVGcm9tQk5GIiwiZ2V0VGVybU5vZGUiLCJ0ZXJtTm9kZSIsIm5vZGUiLCJnZXRUZXJtVG9rZW5zIiwidGVybVRva2VucyIsInRva2VucyIsImZyb21UZXJtIiwidGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidGVybVBhcnRpYWxDb250ZXh0IiwiUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJ0ZXJtU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBYXFCQTs7UUEyQkxDO2VBQUFBOzs7K0RBdENXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixJQUFNQyxNQUFPLCtEQUtQQyxPQUFPQyxJQUFBQSxvQkFBVyxFQUFDRjtBQUVWLElBQUEsQUFBTUYsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEdBQUc7Z0JBRS9CLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLE1BQU0sRUFBRSxHQUFHO2dCQUVuQyxPQUFPRDtZQUNUOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRUMsT0FBTztnQkFDM0IsSUFBTUMsU0FBU0YsS0FBS0csU0FBUyxJQUN2QkMsUUFBUUgsUUFBUUksUUFBUSxJQUN4QkMsU0FBU0wsUUFBUU0sU0FBUyxJQUMxQkMscUJBQXFCQyxnQkFBYyxDQUFDQyx3QkFBd0IsQ0FuQmpEdEIsb0JBbUJzRWMsUUFBUUUsT0FBT0U7Z0JBRXRHLE9BQU9FO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJSLE1BQU0sRUFBRUUsS0FBSyxFQUFFRSxNQUFNO2dCQUFJLE9BQU9HLGdCQUFjLENBQUNDLHdCQUF3QixDQXhCcEZ0QixvQkF3QnlHYyxRQUFRRSxPQUFPRTtZQUFTOzs7V0F4QmpJbEI7RUFBMkJxQixnQkFBYztBQWE1RCxpQkFibUJyQixvQkFhWkcsUUFBT0E7QUFjVCxTQUFTRix1QkFBdUJzQixVQUFVLEVBQUVWLE9BQU87SUFDeEQsSUFBTUMsU0FBU1MsWUFDVFAsUUFBUUgsUUFBUUksUUFBUSxJQUN4QkMsU0FBU0wsUUFBUU0sU0FBUyxJQUMxQkMscUJBQXFCcEIsbUJBQW1Cc0Isd0JBQXdCLENBQUNSLFFBQVFFLE9BQU9FLFNBQ2hGWixXQUFXYyxtQkFBbUJmLFdBQVc7SUFFL0MsT0FBT0M7QUFDVCJ9