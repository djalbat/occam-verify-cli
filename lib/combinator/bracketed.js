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
    bracketedStatementNode: function() {
        return bracketedStatementNode;
    },
    default: function() {
        return BracketedCombinator;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _metaTypeNames = require("../metaTypeNames");
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
var lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, statementString = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromStatementString)(statementString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), statementTokens = (0, _tokens.statementTokensFromUnqualifiedStatementTokens)(unqualifiedStatementTokens), statementNode = (0, _node.statementNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), nodeAsTokens = function(node) {
    var tokens = statementTokens; ///
    return tokens;
}, nodeAsString = function(node) {
    var string = statementString; ///
    return string;
}, tokensAsString = function(tokens) {
    var string = statementNode; ///
    return string;
}, context = {
    nodeAsTokens: nodeAsTokens,
    nodeAsString: nodeAsString,
    tokensAsString: tokensAsString
};
var bracketedStatementNode = statementNode; ///
var BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _call_super(this, BracketedCombinator, arguments);
    }
    _create_class(BracketedCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Statement = _shim.default.Statement, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub21pbmFsTGV4ZXIsIG5vbWluYWxQYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcbmltcG9ydCB7IHN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgbGV4ZXIgPSBub21pbmFsTGV4ZXIsIC8vL1xuICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBgKCR7U1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FfSlgLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgIHN0YXRlbWVudFRva2VucyA9IHN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyksXG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgIG5vZGVBc1Rva2VucyA9IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHN0YXRlbWVudFRva2VuczsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgIH0sXG4gICAgICBub2RlQXNTdHJpbmcgPSAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmc7ICAvLy9cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfSxcbiAgICAgIHRva2Vuc0FzU3RyaW5nID0gKHRva2VucykgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBzdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH0sXG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBub2RlQXNUb2tlbnMsXG4gICAgICAgIG5vZGVBc1N0cmluZyxcbiAgICAgICAgdG9rZW5zQXNTdHJpbmdcbiAgICAgIH07XG5cbmV4cG9ydCBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwibGV4ZXIiLCJub21pbmFsTGV4ZXIiLCJwYXJzZXIiLCJub21pbmFsUGFyc2VyIiwic3RhdGVtZW50U3RyaW5nIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwibm9kZUFzVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwiY29udGV4dCIsImZyb21Ob3RoaW5nIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlDYUEsc0JBQXNCO2VBQXRCQTs7O2VBRVFDOzs7MkRBekNKO2lFQUNNOzZCQUVrQjt1QkFDRztzQkFDNEU7b0JBR2pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLElBQU1DLFFBQVFDLHFCQUFZLEVBQ3BCQyxTQUFTQyxzQkFBYSxFQUN0QkMsa0JBQWtCLEFBQUMsSUFBNEIsT0FBekJDLHVDQUF3QixFQUFDLE1BQy9DQyw2QkFBNkJDLElBQUFBLG1EQUE2QyxFQUFDSCxrQkFDM0VJLDZCQUE2QkMsSUFBQUEsZ0VBQXdELEVBQUNILDRCQUE0Qk4sUUFDbEhVLDJCQUEyQkMsSUFBQUEsNERBQXNELEVBQUNILDRCQUE0Qk4sU0FDOUdVLGtCQUFrQkMsSUFBQUEscURBQTZDLEVBQUNMLDZCQUNoRU0sZ0JBQWdCQyxJQUFBQSwrQ0FBeUMsRUFBQ0wsMkJBQzFETSxlQUFlLFNBQUNDO0lBQ2QsSUFBTUMsU0FBU04saUJBQWlCLEdBQUc7SUFFbkMsT0FBT007QUFDVCxHQUNBQyxlQUFlLFNBQUNGO0lBQ2QsSUFBTUcsU0FBU2hCLGlCQUFrQixHQUFHO0lBRXBDLE9BQU9nQjtBQUNULEdBQ0FDLGlCQUFpQixTQUFDSDtJQUNoQixJQUFNRSxTQUFTTixlQUFnQixHQUFHO0lBRWxDLE9BQU9NO0FBQ1QsR0FDQUUsVUFBVTtJQUNSTixjQUFBQTtJQUNBRyxjQUFBQTtJQUNBRSxnQkFBQUE7QUFDRjtBQUVDLElBQU12Qix5QkFBeUJnQixlQUFnQixHQUFHO0FBRTFDLElBQUEsQUFBTWYsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNad0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFQyxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxZQUFZRixVQUFVRyxpQkFBaUIsQ0FBQ2IsZUFBZVEsVUFDdkRNLHNCQUFzQixJQUpYN0Isb0JBSW1DMkI7Z0JBRXBELE9BQU9FO1lBQ1Q7OztXQVBtQjdCO0VBQTRCOEIsbUJBQVUifQ==