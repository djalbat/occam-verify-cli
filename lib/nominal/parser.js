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
var _node = /*#__PURE__*/ _interop_require_default(require("../node"));
var _nodeMap = /*#__PURE__*/ _interop_require_default(require("../nodeMap"));
var _parser = require("../utilities/parser");
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
    _create_class(NominalParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                var markdownParser = _occamgrammars.NominalParser.fromBNF(NominalParser, bnf), DefaultNonTerminalNode = _node.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, _nodeMap.default, DefaultNonTerminalNode);
                return markdownParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                var markdownParser = _occamgrammars.NominalParser.fromRules(NominalParser, rules), DefaultNonTerminalNode = _node.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, _nodeMap.default, DefaultNonTerminalNode);
                return markdownParser;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var markdownParser = _occamgrammars.NominalParser.fromNothing(NominalParser), DefaultNonTerminalNode = _node.default; ///
                (0, _parser.setNonTerminalNodes)(markdownParser, _nodeMap.default, DefaultNonTerminalNode);
                return markdownParser;
            }
        }
    ]);
    return NominalParser;
}(_occamgrammars.NominalParser);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9taW5hbFBhcnNlciBhcyBOb21pbmFsUGFyc2VyQmFzZSB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZVwiO1xuaW1wb3J0IG5vZGVNYXAgZnJvbSBcIi4uL25vZGVNYXBcIjtcblxuaW1wb3J0IHsgc2V0Tm9uVGVybWluYWxOb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxQYXJzZXIgZXh0ZW5kcyBOb21pbmFsUGFyc2VyQmFzZSB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IG1hcmtkb3duUGFyc2VyID0gTm9taW5hbFBhcnNlckJhc2UuZnJvbUJORihOb21pbmFsUGFyc2VyLCBibmYpLFxuICAgICAgICAgIERlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBOb2RlOyAgLy8vXG5cbiAgICBzZXROb25UZXJtaW5hbE5vZGVzKG1hcmtkb3duUGFyc2VyLCBub2RlTWFwLCBEZWZhdWx0Tm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBtYXJrZG93blBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBtYXJrZG93blBhcnNlciA9IE5vbWluYWxQYXJzZXJCYXNlLmZyb21SdWxlcyhOb21pbmFsUGFyc2VyLCBydWxlcyksXG4gICAgICAgICAgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE5vZGU7ICAvLy9cblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25QYXJzZXIsIG5vZGVNYXAsIERlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1hcmtkb3duUGFyc2VyID0gTm9taW5hbFBhcnNlckJhc2UuZnJvbU5vdGhpbmcoTm9taW5hbFBhcnNlciksXG4gICAgICAgICAgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE5vZGU7ICAvLy9cblxuICAgIHNldE5vblRlcm1pbmFsTm9kZXMobWFya2Rvd25QYXJzZXIsIG5vZGVNYXAsIERlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9taW5hbFBhcnNlciIsImZyb21CTkYiLCJibmYiLCJtYXJrZG93blBhcnNlciIsIk5vbWluYWxQYXJzZXJCYXNlIiwiRGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIk5vZGUiLCJzZXROb25UZXJtaW5hbE5vZGVzIiwibm9kZU1hcCIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzZCQVA4QjsyREFFbEM7OERBQ0c7c0JBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUUMsR0FBRztnQkFDaEIsSUFBTUMsaUJBQWlCQyw0QkFBaUIsQ0FBQ0gsT0FBTyxDQUYvQkQsZUFFK0NFLE1BQzFERyx5QkFBeUJDLGFBQUksRUFBRyxHQUFHO2dCQUV6Q0MsSUFBQUEsMkJBQW1CLEVBQUNKLGdCQUFnQkssZ0JBQU8sRUFBRUg7Z0JBRTdDLE9BQU9GO1lBQ1Q7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUNwQixJQUFNUCxpQkFBaUJDLDRCQUFpQixDQUFDSyxTQUFTLENBWGpDVCxlQVdpRFUsUUFDNURMLHlCQUF5QkMsYUFBSSxFQUFHLEdBQUc7Z0JBRXpDQyxJQUFBQSwyQkFBbUIsRUFBQ0osZ0JBQWdCSyxnQkFBTyxFQUFFSDtnQkFFN0MsT0FBT0Y7WUFDVDs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1SLGlCQUFpQkMsNEJBQWlCLENBQUNPLFdBQVcsQ0FwQm5DWCxnQkFxQlhLLHlCQUF5QkMsYUFBSSxFQUFHLEdBQUc7Z0JBRXpDQyxJQUFBQSwyQkFBbUIsRUFBQ0osZ0JBQWdCSyxnQkFBTyxFQUFFSDtnQkFFN0MsT0FBT0Y7WUFDVDs7O1dBMUJtQkg7RUFBc0JJLDRCQUFpQiJ9