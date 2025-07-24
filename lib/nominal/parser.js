"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalParser;
    }
});
var _occamgrammars = require("occam-grammars");
var _occamparsers = require("occam-parsers");
var _nonTerminalNodeMap = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNodeMap"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var NominalParser = /*#__PURE__*/ function(NominalParserBase) {
    _inherits(NominalParser, NominalParserBase);
    function NominalParser() {
        _class_call_check(this, NominalParser);
        return _call_super(this, NominalParser, arguments);
    }
    return NominalParser;
}(_occamgrammars.NominalParser);
_define_property(NominalParser, "NonTerminalNodeMap", _nonTerminalNodeMap.default);
_define_property(NominalParser, "defaultNonTerminalNode", _occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9taW5hbFBhcnNlciBhcyBOb21pbmFsUGFyc2VyQmFzZSB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIGFzIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlTWFwIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9taW5hbFBhcnNlciBleHRlbmRzIE5vbWluYWxQYXJzZXJCYXNlIHtcbiAgc3RhdGljIE5vblRlcm1pbmFsTm9kZU1hcCA9IE5vblRlcm1pbmFsTm9kZU1hcDtcblxuICBzdGF0aWMgZGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IGRlZmF1bHROb25UZXJtaW5hbE5vZGU7XG59XG4iXSwibmFtZXMiOlsiTm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXJCYXNlIiwiTm9uVGVybWluYWxOb2RlTWFwIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NkJBTDhCOzRCQUNPO3lFQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O1dBQUFBO0VBQXNCQyw0QkFBaUI7QUFDMUQsaUJBRG1CRCxlQUNaRSxzQkFBcUJBLDJCQUFrQjtBQUU5QyxpQkFIbUJGLGVBR1pHLDBCQUF5QkEsNkJBQXNCIn0=