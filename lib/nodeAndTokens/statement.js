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
    default: function() {
        return StatementNodeAndTokens;
    },
    statementNodeFromStatementString: function() {
        return statementNodeFromStatementString;
    }
});
var _nodeAndTokens = /*#__PURE__*/ _interop_require_wildcard(require("../nodeAndTokens"));
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
var bnf = "\n\n        _ ::= statement... <END_OF_LINE> ;\n        \n      ", rule = (0, _nodeAndTokens.ruleFromBNF)(bnf);
var StatementNodeAndTokens = /*#__PURE__*/ function(NodeAndTokens) {
    _inherits(StatementNodeAndTokens, NodeAndTokens);
    function StatementNodeAndTokens() {
        _class_call_check(this, StatementNodeAndTokens);
        return _call_super(this, StatementNodeAndTokens, arguments);
    }
    _create_class(StatementNodeAndTokens, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var statementNode = this.node; ///
                return statementNode;
            }
        },
        {
            key: "getStatementTokens",
            value: function getStatementTokens() {
                var statementTokens = this.tokens; ///
                return statementTokens;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var string = statement.getString(), statementNodeAndTokens = _nodeAndTokens.default.fromString(StatementNodeAndTokens, string, context);
                return statementNodeAndTokens;
            }
        },
        {
            key: "fromStatementString",
            value: function fromStatementString(statementString, context) {
                var string = statementString, statementNodeAndTokens = _nodeAndTokens.default.fromString(StatementNodeAndTokens, string, context);
                return statementNodeAndTokens;
            }
        }
    ]);
    return StatementNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(StatementNodeAndTokens, "rule", rule);
function statementNodeFromStatementString(statementString, context) {
    var statementNodeAndTokens = StatementNodeAndTokens.fromStatementString(statementString, context), statementNode = statementNodeAndTokens.getStatementNode();
    return statementNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uL25vZGVBbmRUb2tlbnNcIjtcblxuaW1wb3J0IHsgcnVsZUZyb21CTkYgfSBmcm9tIFwiLi4vbm9kZUFuZFRva2Vuc1wiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICAgICAgXyA6Oj0gc3RhdGVtZW50Li4uIDxFTkRfT0ZfTElORT4gO1xuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBydWxlID0gcnVsZUZyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Tm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRUb2tlbnMoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUFuZFRva2VucyA9IE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhTdGF0ZW1lbnROb2RlQW5kVG9rZW5zLCBzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVBbmRUb2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQW5kVG9rZW5zID0gTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKFN0YXRlbWVudE5vZGVBbmRUb2tlbnMsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZUFuZFRva2VucztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVBbmRUb2tlbnMgPSBTdGF0ZW1lbnROb2RlQW5kVG9rZW5zLmZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVBbmRUb2tlbnMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnROb2RlO1xufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudE5vZGVBbmRUb2tlbnMiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsImJuZiIsInJ1bGUiLCJydWxlRnJvbUJORiIsImdldFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldFN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudFRva2VucyIsInRva2VucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50Tm9kZUFuZFRva2VucyIsIk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZnJvbVN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQWFxQkE7O0lBOEJMQyxnQ0FBZ0M7ZUFBaENBOzs7cUVBekNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQixJQUFNQyxNQUFPLG9FQUtQQyxPQUFPQyxJQUFBQSwwQkFBVyxFQUFDRjtBQUVWLElBQUEsQUFBTUYsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLElBQUksRUFBRSxHQUFHO2dCQUVwQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNDLE1BQU0sRUFBRSxHQUFHO2dCQUV4QyxPQUFPRDtZQUNUOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsT0FBTztnQkFDckMsSUFBTUMsU0FBU0YsVUFBVUcsU0FBUyxJQUM1QkMseUJBQXlCQyxzQkFBYSxDQUFDQyxVQUFVLENBakJ0Q2xCLHdCQWlCK0RjLFFBQVFEO2dCQUV4RixPQUFPRztZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVQLE9BQU87Z0JBQ2pELElBQU1DLFNBQVNNLGlCQUNUSix5QkFBeUJDLHNCQUFhLENBQUNDLFVBQVUsQ0F4QnRDbEIsd0JBd0IrRGMsUUFBUUQ7Z0JBRXhGLE9BQU9HO1lBQ1Q7OztXQTNCbUJoQjtFQUErQmlCLHNCQUFhO0FBYS9ELGlCQWJtQmpCLHdCQWFaRyxRQUFPQTtBQWlCVCxTQUFTRixpQ0FBaUNtQixlQUFlLEVBQUVQLE9BQU87SUFDdkUsSUFBTUcseUJBQXlCaEIsdUJBQXVCbUIsbUJBQW1CLENBQUNDLGlCQUFpQlAsVUFDckZQLGdCQUFnQlUsdUJBQXVCWCxnQkFBZ0I7SUFFN0QsT0FBT0M7QUFDVCJ9