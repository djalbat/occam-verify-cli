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
var _nominal = require("../utilities/nominal");
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
var lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, termString = "(".concat(_typeNames.OBJECT_TYPE_NAME, ")"), constructorDeclarationString = (0, _node.constructorDeclarationStringFromTermString)(termString), constructorDeclarationTokens = (0, _tokens.constructorDeclarationTokensFromConstructorDeclarationString)(constructorDeclarationString, lexer), constructorDeclarationNode = (0, _node.constructorDeclarationNodeFromConstructorDeclarationTokens)(constructorDeclarationTokens, parser), termNode = (0, _node.termNodeFromConstructorDeclarationNode)(constructorDeclarationNode), termTokens = (0, _tokens.termTokensFromConstructorDeclarationTokens)(constructorDeclarationTokens), nodeAsTokens = function(node) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVGVybUFuZFR5cGUgfSBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuaW1wb3J0IHsgdGVybVRva2Vuc0Zyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zLCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgdGVybU5vZGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nRnJvbVRlcm1TdHJpbmcsXG4gICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgIHBhcnNlciA9IG5vbWluYWxQYXJzZXIsIC8vL1xuICAgICAgdGVybVN0cmluZyA9IGAoJHtPQkpFQ1RfVFlQRV9OQU1FfSlgLCAgLy8vXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ0Zyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnNGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyhjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nLCBsZXhlciksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMoY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucywgcGFyc2VyKSxcbiAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgdGVybVRva2VucyA9IHRlcm1Ub2tlbnNGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2Vucyhjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zKSxcbiAgICAgIG5vZGVBc1Rva2VucyA9IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRlcm1Ub2tlbnM7IC8vL1xuXG4gICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICB9LFxuICAgICAgbm9kZUFzU3RyaW5nID0gKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICB9LFxuICAgICAgdG9rZW5zQXNTdHJpbmcgPSAodG9rZW5zKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH0sXG4gICAgICBsb2NhbENvbnRleHQgPSB7XG4gICAgICAgIG5vZGVBc1Rva2VucyxcbiAgICAgICAgbm9kZUFzU3RyaW5nLFxuICAgICAgICB0b2tlbnNBc1N0cmluZ1xuICAgICAgfTtcblxuZXhwb3J0IGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkVGVybU5vZGUiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsImxleGVyIiwibm9taW5hbExleGVyIiwicGFyc2VyIiwibm9taW5hbFBhcnNlciIsInRlcm1TdHJpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmdGcm9tVGVybVN0cmluZyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidGVybVRva2VucyIsInRlcm1Ub2tlbnNGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvblRva2VucyIsIm5vZGVBc1Rva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJ0b2tlbnNBc1N0cmluZyIsImxvY2FsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiVGVybSIsInNoaW0iLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidHlwZSIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBDYUEsaUJBQWlCO2VBQWpCQTs7O2VBRVFDOzs7MkRBMUNKO21FQUNPO3lCQUVTO3VCQUVXO3NCQUM2RTtvQkFHOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRSxJQUFNQyxRQUFRQyxxQkFBWSxFQUNwQkMsU0FBU0Msc0JBQWEsRUFDdEJDLGFBQWEsQUFBQyxJQUFvQixPQUFqQkMsMkJBQWdCLEVBQUMsTUFDbENDLCtCQUErQkMsSUFBQUEsZ0RBQTBDLEVBQUNILGFBQzFFSSwrQkFBK0JDLElBQUFBLG9FQUE0RCxFQUFDSCw4QkFBOEJOLFFBQzFIVSw2QkFBNkJDLElBQUFBLGdFQUEwRCxFQUFDSCw4QkFBOEJOLFNBQ3RIVSxXQUFXQyxJQUFBQSw0Q0FBc0MsRUFBQ0gsNkJBQ2xESSxhQUFhQyxJQUFBQSxrREFBMEMsRUFBQ1AsK0JBQ3hEUSxlQUFlLFNBQUNDO0lBQ2QsSUFBTUMsU0FBU0osWUFBWSxHQUFHO0lBRTlCLE9BQU9JO0FBQ1QsR0FDQUMsZUFBZSxTQUFDRjtJQUNkLElBQU1HLFNBQVNoQixZQUFhLEdBQUc7SUFFL0IsT0FBT2dCO0FBQ1QsR0FDQUMsaUJBQWlCLFNBQUNIO0lBQ2hCLElBQU1FLFNBQVNSLFVBQVcsR0FBRztJQUU3QixPQUFPUTtBQUNULEdBQ0FFLGVBQWU7SUFDYk4sY0FBQUE7SUFDQUcsY0FBQUE7SUFDQUUsZ0JBQUFBO0FBQ0Y7QUFFQyxJQUFNdkIsb0JBQW9CYyxVQUFXLEdBQUc7QUFFaEMsSUFBQSxBQUFNYixxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1p3QixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVDLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsT0FBT0YsS0FBS0csWUFBWSxDQUFDZixVQUFVVSxlQUNuQ00sT0FBTyxNQUNQUixTQUFTUyxJQUFBQSxrQ0FBcUIsRUFBQ0gsTUFBTUUsT0FDckNFLHVCQUF1QixJQU5aL0IscUJBTXFDcUIsUUFBUU07Z0JBRTlELE9BQU9JO1lBQ1Q7OztXQVRtQi9CO0VBQTZCZ0Msb0JBQVcifQ==