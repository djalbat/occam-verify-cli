"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementSubstitutionPartialContext;
    }
});
var _partial = /*#__PURE__*/ _interop_require_wildcard(require("../../../context/partial"));
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
var bnf = "\n\n        _ ::= statementSubstitution... <END_OF_LINE> ;\n            \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var StatementSubstitutionPartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(StatementSubstitutionPartialContext, PartialContext);
    function StatementSubstitutionPartialContext() {
        _class_call_check(this, StatementSubstitutionPartialContext);
        return _call_super(this, StatementSubstitutionPartialContext, arguments);
    }
    _create_class(StatementSubstitutionPartialContext, null, [
        {
            key: "fromStringLexerAndParser",
            value: function fromStringLexerAndParser(string, lexer, parser) {
                return _partial.default.fromStringLexerAndParser(StatementSubstitutionPartialContext, string, lexer, parser);
            }
        }
    ]);
    return StatementSubstitutionPartialContext;
}(_partial.default);
_define_property(StatementSubstitutionPartialContext, "rule", rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L3BhcnRpYWxcIjtcblxuaW1wb3J0IHsgcnVsZUZyb21CTkYgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9wYXJ0aWFsXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBfIDo6PSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICAgICAgICBcbiAgICAgIGAsXG4gICAgICBydWxlID0gcnVsZUZyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZXh0ZW5kcyBQYXJ0aWFsQ29udGV4dCB7XG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlcikgeyByZXR1cm4gUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKFN0YXRlbWVudFN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LCBzdHJpbmcsIGxleGVyLCBwYXJzZXIpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50U3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJibmYiLCJydWxlIiwicnVsZUZyb21CTkYiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJzdHJpbmciLCJsZXhlciIsInBhcnNlciIsIlBhcnRpYWxDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsrREFYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0IsSUFBTUMsTUFBTyxvRkFLUEMsT0FBT0MsSUFBQUEsb0JBQVcsRUFBQ0Y7QUFFVixJQUFBLEFBQU1ELG9EQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBR1pJLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU07Z0JBQUksT0FBT0MsZ0JBQWMsQ0FBQ0osd0JBQXdCLENBSHBGSixxQ0FHMEhLLFFBQVFDLE9BQU9DO1lBQVM7OztXQUhsSlA7RUFBNENRLGdCQUFjO0FBQzdFLGlCQURtQlIscUNBQ1pFLFFBQU9BIn0=