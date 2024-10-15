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
var _typeNames = require("../typeNames");
var _tokens = require("../utilities/tokens");
var _node = require("../utilities/node");
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
var termString = "(".concat(_typeNames.OBJECT_TYPE_NAME, ")"), constructorDeclarationString = (0, _node.constructorDeclarationStringFromTermString)(termString), constructorDeclarationTokens = (0, _tokens.constructorDeclarationTokensFromConstructorDeclarationString)(constructorDeclarationString), constructorDeclarationNode = (0, _node.constructorDeclarationNodeFromConstructorDeclarationTokens)(constructorDeclarationTokens), termNode = (0, _node.termNodeFromConstructorDeclarationNode)(constructorDeclarationNode), termTokens = (0, _tokens.termTokensFromConstructorDeclarationTokens)(constructorDeclarationTokens), nodeAsTokens = function(node) {
    var tokens = termTokens; ///
    return tokens;
}, nodeAsString = function(node) {
    var string = termString; ///
    return string;
}, tokensAsString = function(tokens) {
    var string = termNode; ///
    return string;
}, localContext = {
    nodeAsTokens: nodeAsTokens,
    nodeAsString: nodeAsString,
    tokensAsString: tokensAsString
};
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
                var Term = _shim.default.Term, term = Term.fromTermNode(termNode, localContext), type = null, string = (0, _constructor.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVGVybUFuZFR5cGUgfSBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IHRlcm1Ub2tlbnNGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucywgY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2Vuc0Zyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ0Zyb21UZXJtU3RyaW5nLFxuICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0ZXJtU3RyaW5nID0gYCgke09CSkVDVF9UWVBFX05BTUV9KWAsICAvLy9cbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nRnJvbVRlcm1TdHJpbmcodGVybVN0cmluZyksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zID0gY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2Vuc0Zyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMpLFxuICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICB0ZXJtVG9rZW5zID0gdGVybVRva2Vuc0Zyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMpLFxuICAgICAgbm9kZUFzVG9rZW5zID0gKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGVybVRva2VuczsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgIH0sXG4gICAgICBub2RlQXNTdHJpbmcgPSAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSB0ZXJtU3RyaW5nOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH0sXG4gICAgICB0b2tlbnNBc1N0cmluZyA9ICh0b2tlbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gdGVybU5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfSxcbiAgICAgIGxvY2FsQ29udGV4dCA9IHtcbiAgICAgICAgbm9kZUFzVG9rZW5zLFxuICAgICAgICBub2RlQXNTdHJpbmcsXG4gICAgICAgIHRva2Vuc0FzU3RyaW5nXG4gICAgICB9O1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb25zdHJ1Y3RvciBleHRlbmRzIENvbnN0cnVjdG9yIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJicmFja2V0ZWRUZXJtTm9kZSIsIkJyYWNrZXRlZENvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsIk9CSkVDVF9UWVBFX05BTUUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ0Zyb21UZXJtU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnNGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyIsInRlcm1Ob2RlIiwidGVybU5vZGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0ZXJtVG9rZW5zIiwidGVybVRva2Vuc0Zyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zIiwibm9kZUFzVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwibG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJUZXJtIiwic2hpbSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0eXBlIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBdUNhQSxpQkFBaUI7ZUFBakJBOzs7ZUFFUUM7OzsyREF2Q0o7bUVBQ087eUJBRVM7c0JBRXdGO29CQUc5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQU1DLGFBQWEsQUFBQyxJQUFvQixPQUFqQkMsMkJBQWdCLEVBQUMsTUFDbENDLCtCQUErQkMsSUFBQUEsZ0RBQTBDLEVBQUNILGFBQzFFSSwrQkFBK0JDLElBQUFBLG9FQUE0RCxFQUFDSCwrQkFDNUZJLDZCQUE2QkMsSUFBQUEsZ0VBQTBELEVBQUNILCtCQUN4RkksV0FBV0MsSUFBQUEsNENBQXNDLEVBQUNILDZCQUNsREksYUFBYUMsSUFBQUEsa0RBQTBDLEVBQUNQLCtCQUN4RFEsZUFBZSxTQUFDQztJQUNkLElBQU1DLFNBQVNKLFlBQVksR0FBRztJQUU5QixPQUFPSTtBQUNULEdBQ0FDLGVBQWUsU0FBQ0Y7SUFDZCxJQUFNRyxTQUFTaEIsWUFBYSxHQUFHO0lBRS9CLE9BQU9nQjtBQUNULEdBQ0FDLGlCQUFpQixTQUFDSDtJQUNoQixJQUFNRSxTQUFTUixVQUFXLEdBQUc7SUFFN0IsT0FBT1E7QUFDVCxHQUNBRSxlQUFlO0lBQ2JOLGNBQUFBO0lBQ0FHLGNBQUFBO0lBQ0FFLGdCQUFBQTtBQUNGO0FBRUMsSUFBTW5CLG9CQUFvQlUsVUFBVyxHQUFHO0FBRWhDLElBQUEsQUFBTVQscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNab0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFQyxPQUFTQyxhQUFJLENBQWJELE1BQ0ZFLE9BQU9GLEtBQUtHLFlBQVksQ0FBQ2YsVUFBVVUsZUFDbkNNLE9BQU8sTUFDUFIsU0FBU1MsSUFBQUEsa0NBQXFCLEVBQUNILE1BQU1FLE9BQ3JDRSx1QkFBdUIsSUFOWjNCLHFCQU1xQ2lCLFFBQVFNO2dCQUU5RCxPQUFPSTtZQUNUOzs7V0FUbUIzQjtFQUE2QjRCLG9CQUFXIn0=