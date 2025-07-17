"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalLexer;
    }
});
var _occamgrammars = require("occam-grammars");
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
var NominalLexer = /*#__PURE__*/ function(NominalLexerBase) {
    _inherits(NominalLexer, NominalLexerBase);
    function NominalLexer() {
        _class_call_check(this, NominalLexer);
        return _call_super(this, NominalLexer, arguments);
    }
    _create_class(NominalLexer, null, [
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamgrammars.NominalLexer.fromRules(NominalLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamgrammars.NominalLexer.fromEntries(NominalLexer, entries);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamgrammars.NominalLexer.fromNothing(NominalLexer);
            }
        }
    ]);
    return NominalLexer;
}(_occamgrammars.NominalLexer);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb21pbmFsTGV4ZXIgYXMgTm9taW5hbExleGVyQmFzZSB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb21pbmFsTGV4ZXIgZXh0ZW5kcyBOb21pbmFsTGV4ZXJCYXNlIHtcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gTm9taW5hbExleGVyQmFzZS5mcm9tUnVsZXMoTm9taW5hbExleGVyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gTm9taW5hbExleGVyQmFzZS5mcm9tRW50cmllcyhOb21pbmFsTGV4ZXIsIGVudHJpZXMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gTm9taW5hbExleGVyQmFzZS5mcm9tTm90aGluZyhOb21pbmFsTGV4ZXIpOyB9XG59XG4iXSwibmFtZXMiOlsiTm9taW5hbExleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJOb21pbmFsTGV4ZXJCYXNlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZCQUY0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9DLDJCQUFnQixDQUFDRixTQUFTLENBRHhDRCxjQUN1REU7WUFBUTs7O1lBRTNFRSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUFJLE9BQU9GLDJCQUFnQixDQUFDQyxXQUFXLENBSDlDSixjQUc2REs7WUFBVTs7O1lBRW5GQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0gsMkJBQWdCLENBQUNHLFdBQVcsQ0FMdkNOO1lBS3VEOzs7V0FMdkRBO0VBQXFCRywyQkFBZ0IifQ==