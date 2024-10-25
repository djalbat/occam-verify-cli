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
    bracketedTermNode: function() {
        return bracketedTermNode;
    },
    default: function() {
        return BracketedConstructor;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _constructor = /*#__PURE__*/ _interop_require_wildcard(require("../constructor"));
var _term = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/term"));
var _typeNames = require("../typeNames");
var _nominal = require("../utilities/nominal");
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
var getLexer = function() {
    var lexer = _nominal.nominalLexer; ///
    return lexer;
}, getParser = function() {
    var parser = _nominal.nominalParser; ///
    return parser;
}, nodeAsTokens = function(node) {
    var tokens = termTokens; ///
    return tokens;
}, nodeAsString = function(node) {
    var string = termString; ///
    return string;
}, tokensAsString = function(tokens) {
    var string = termNode; ///
    return string;
}, context = {
    getLexer: getLexer,
    getParser: getParser,
    nodeAsTokens: nodeAsTokens,
    nodeAsString: nodeAsString,
    tokensAsString: tokensAsString
}, termString = "(".concat(_typeNames.OBJECT_TYPE_NAME, ")"), termNodeAndTokens = _term.default.fromTermString(termString, context), termTokens = termNodeAndTokens.getTermTokens(), termNode = termNodeAndTokens.getTermNode();
var bracketedTermNode = termNode; ///
var BracketedConstructor = /*#__PURE__*/ function(Constructor) {
    _inherits(BracketedConstructor, Constructor);
    function BracketedConstructor() {
        _class_call_check(this, BracketedConstructor);
        return _call_super(this, BracketedConstructor, arguments);
    }
    _create_class(BracketedConstructor, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Term = _shim.default.Term, term = Term.fromTermNode(termNode, context), type = null, string = (0, _constructor.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgVGVybU5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uL25vZGVBbmRUb2tlbnMvdGVybVwiO1xuXG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVRlcm1BbmRUeXBlIH0gZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBub21pbmFsTGV4ZXIsIG5vbWluYWxQYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcblxuY29uc3QgZ2V0TGV4ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgICAgICByZXR1cm4gbGV4ZXI7XG4gICAgICB9LFxuICAgICAgZ2V0UGFyc2VyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBub21pbmFsUGFyc2VyOyAvLy9cblxuICAgICAgICByZXR1cm4gcGFyc2VyO1xuICAgICAgfSxcbiAgICAgIG5vZGVBc1Rva2VucyA9IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRlcm1Ub2tlbnM7IC8vL1xuXG4gICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICB9LFxuICAgICAgbm9kZUFzU3RyaW5nID0gKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICB9LFxuICAgICAgdG9rZW5zQXNTdHJpbmcgPSAodG9rZW5zKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH0sXG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBnZXRMZXhlcixcbiAgICAgICAgZ2V0UGFyc2VyLFxuICAgICAgICBub2RlQXNUb2tlbnMsXG4gICAgICAgIG5vZGVBc1N0cmluZyxcbiAgICAgICAgdG9rZW5zQXNTdHJpbmdcbiAgICAgIH0sXG4gICAgICB0ZXJtU3RyaW5nID0gYCgke09CSkVDVF9UWVBFX05BTUV9KWAsXG4gICAgICB0ZXJtTm9kZUFuZFRva2VucyA9IFRlcm1Ob2RlQW5kVG9rZW5zLmZyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGNvbnRleHQpLFxuICAgICAgdGVybVRva2VucyA9IHRlcm1Ob2RlQW5kVG9rZW5zLmdldFRlcm1Ub2tlbnMoKSxcbiAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBbmRUb2tlbnMuZ2V0VGVybU5vZGUoKTtcblxuZXhwb3J0IGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBuZXcgQnJhY2tldGVkQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZFRlcm1Ob2RlIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJnZXRMZXhlciIsImxleGVyIiwibm9taW5hbExleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwibm9taW5hbFBhcnNlciIsIm5vZGVBc1Rva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtVG9rZW5zIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwidGVybVN0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwidGVybU5vZGUiLCJjb250ZXh0IiwiT0JKRUNUX1RZUEVfTkFNRSIsInRlcm1Ob2RlQW5kVG9rZW5zIiwiVGVybU5vZGVBbmRUb2tlbnMiLCJmcm9tVGVybVN0cmluZyIsImdldFRlcm1Ub2tlbnMiLCJnZXRUZXJtTm9kZSIsImZyb21Ob3RoaW5nIiwiVGVybSIsInNoaW0iLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidHlwZSIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQStDYUEsaUJBQWlCO2VBQWpCQTs7O2VBRVFDOzs7MkRBL0NKO21FQUNPOzJEQUNNO3lCQUVHO3VCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTUMsV0FBVztJQUNULElBQU1DLFFBQVFDLHFCQUFZLEVBQUUsR0FBRztJQUUvQixPQUFPRDtBQUNULEdBQ0FFLFlBQVk7SUFDVixJQUFNQyxTQUFTQyxzQkFBYSxFQUFFLEdBQUc7SUFFakMsT0FBT0Q7QUFDVCxHQUNBRSxlQUFlLFNBQUNDO0lBQ2QsSUFBTUMsU0FBU0MsWUFBWSxHQUFHO0lBRTlCLE9BQU9EO0FBQ1QsR0FDQUUsZUFBZSxTQUFDSDtJQUNkLElBQU1JLFNBQVNDLFlBQWEsR0FBRztJQUUvQixPQUFPRDtBQUNULEdBQ0FFLGlCQUFpQixTQUFDTDtJQUNoQixJQUFNRyxTQUFTRyxVQUFXLEdBQUc7SUFFN0IsT0FBT0g7QUFDVCxHQUNBSSxVQUFVO0lBQ1JmLFVBQUFBO0lBQ0FHLFdBQUFBO0lBQ0FHLGNBQUFBO0lBQ0FJLGNBQUFBO0lBQ0FHLGdCQUFBQTtBQUNGLEdBQ0FELGFBQWEsQUFBQyxJQUFvQixPQUFqQkksMkJBQWdCLEVBQUMsTUFDbENDLG9CQUFvQkMsYUFBaUIsQ0FBQ0MsY0FBYyxDQUFDUCxZQUFZRyxVQUNqRU4sYUFBYVEsa0JBQWtCRyxhQUFhLElBQzVDTixXQUFXRyxrQkFBa0JJLFdBQVc7QUFFdkMsSUFBTXZCLG9CQUFvQmdCLFVBQVcsR0FBRztBQUVoQyxJQUFBLEFBQU1mLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWnVCLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0sQUFBRUMsT0FBU0MsYUFBSSxDQUFiRCxNQUNGRSxPQUFPRixLQUFLRyxZQUFZLENBQUNaLFVBQVVDLFVBQ25DWSxPQUFPLE1BQ1BoQixTQUFTaUIsSUFBQUEsa0NBQXFCLEVBQUNILE1BQU1FLE9BQ3JDRSx1QkFBdUIsSUFOWjlCLHFCQU1xQ1ksUUFBUWM7Z0JBRTlELE9BQU9JO1lBQ1Q7OztXQVRtQjlCO0VBQTZCK0Isb0JBQVcifQ==