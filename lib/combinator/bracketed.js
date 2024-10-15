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
var statementString = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromStatementString)(statementString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens), statementTokens = (0, _tokens.statementTokensFromUnqualifiedStatementTokens)(unqualifiedStatementTokens), statementNode = (0, _node.statementNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), nodeAsTokens = function(node) {
    var tokens = statementTokens; ///
    return tokens;
}, nodeAsString = function(node) {
    var string = statementString; ///
    return string;
}, tokensAsString = function(tokens) {
    var string = statementNode; ///
    return string;
}, localContext = {
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
                var Statement = _shim.default.Statement, statement = Statement.fromStatementNode(statementNode, localContext), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWAsXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMpLFxuICAgICAgc3RhdGVtZW50VG9rZW5zID0gc3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKSxcbiAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgbm9kZUFzVG9rZW5zID0gKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gc3RhdGVtZW50VG9rZW5zOyAvLy9cblxuICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgfSxcbiAgICAgIG5vZGVBc1N0cmluZyA9IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHN0YXRlbWVudFN0cmluZzsgIC8vL1xuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICB9LFxuICAgICAgdG9rZW5zQXNTdHJpbmcgPSAodG9rZW5zKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfSxcbiAgICAgIGxvY2FsQ29udGV4dCA9IHtcbiAgICAgICAgbm9kZUFzVG9rZW5zLFxuICAgICAgICBub2RlQXNTdHJpbmcsXG4gICAgICAgIHRva2Vuc0FzU3RyaW5nXG4gICAgICB9O1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwic3RhdGVtZW50U3RyaW5nIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwibm9kZUFzVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwibG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBc0NhQSxzQkFBc0I7ZUFBdEJBOzs7ZUFFUUM7OzsyREF0Q0o7aUVBQ007NkJBRWtCO3NCQUMrRTtvQkFHakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsSUFBTUMsa0JBQWtCLEFBQUMsSUFBNEIsT0FBekJDLHVDQUF3QixFQUFDLE1BQy9DQyw2QkFBNkJDLElBQUFBLG1EQUE2QyxFQUFDSCxrQkFDM0VJLDZCQUE2QkMsSUFBQUEsZ0VBQXdELEVBQUNILDZCQUN0RkksMkJBQTJCQyxJQUFBQSw0REFBc0QsRUFBQ0gsNkJBQ2xGSSxrQkFBa0JDLElBQUFBLHFEQUE2QyxFQUFDTCw2QkFDaEVNLGdCQUFnQkMsSUFBQUEsK0NBQXlDLEVBQUNMLDJCQUMxRE0sZUFBZSxTQUFDQztJQUNkLElBQU1DLFNBQVNOLGlCQUFpQixHQUFHO0lBRW5DLE9BQU9NO0FBQ1QsR0FDQUMsZUFBZSxTQUFDRjtJQUNkLElBQU1HLFNBQVNoQixpQkFBa0IsR0FBRztJQUVwQyxPQUFPZ0I7QUFDVCxHQUNBQyxpQkFBaUIsU0FBQ0g7SUFDaEIsSUFBTUUsU0FBU04sZUFBZ0IsR0FBRztJQUVsQyxPQUFPTTtBQUNULEdBQ0FFLGVBQWU7SUFDYk4sY0FBQUE7SUFDQUcsY0FBQUE7SUFDQUUsZ0JBQUFBO0FBQ0Y7QUFFQyxJQUFNbkIseUJBQXlCWSxlQUFnQixHQUFHO0FBRTFDLElBQUEsQUFBTVgsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNab0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFQyxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxZQUFZRixVQUFVRyxpQkFBaUIsQ0FBQ2IsZUFBZVEsZUFDdkRNLHNCQUFzQixJQUpYekIsb0JBSW1DdUI7Z0JBRXBELE9BQU9FO1lBQ1Q7OztXQVBtQnpCO0VBQTRCMEIsbUJBQVUifQ==