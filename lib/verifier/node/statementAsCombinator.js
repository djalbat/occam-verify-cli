"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _type = require("./../../verify/type");
var _term = require("./../../verify/term");
var _statement = require("../../verify/statement");
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var StatementAsCombinatorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(StatementAsCombinatorNodeVerifier, NodeVerifier);
    var _super = _create_super(StatementAsCombinatorNodeVerifier);
    function StatementAsCombinatorNodeVerifier() {
        _class_call_check(this, StatementAsCombinatorNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementAsCombinatorNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName();
                switch(ruleName){
                    case _ruleNames.STATEMENT_RULE_NAME:
                        {
                            var statementNode = nonTerminalNode, standaloneStatementVerified = (0, _statement.verifyStandaloneStatement)(statementNode, fileContext, verifyAhead), statementNodeVerified = standaloneStatementVerified; ///
                            nonTerminalNodeVerified = statementNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, fileContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                            nonTerminalNodeVerified = termNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TYPE_RULE_NAME:
                        {
                            var typeNode = nonTerminalNode, standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, fileContext, verifyAhead), typeNodeVerified = standaloneTypeVerified; ///
                            nonTerminalNodeVerified = typeNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(StatementAsCombinatorNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, fileContext, verifyAhead); ///
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return StatementAsCombinatorNodeVerifier;
}(_node.default);
var statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();
var _default = statementAsCombinatorNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3N0YXRlbWVudEFzQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVHlwZSB9IGZyb20gXCIuLy4uLy4uL3ZlcmlmeS90eXBlXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVGVybSB9IGZyb20gXCIuLy4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS9zdGF0ZW1lbnRcIjtcbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBURVJNX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIGV4dGVuZHMgTm9kZVZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRZUEVfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUeXBlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB0eXBlTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHlwZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3Qgc3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyID0gbmV3IFN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnROb2RlIiwic3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVWZXJpZmllZCIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiVFlQRV9SVUxFX05BTUUiLCJ0eXBlTm9kZSIsInN0YW5kYWxvbmVUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lVHlwZSIsInR5cGVOb2RlVmVyaWZpZWQiLCJOb2RlVmVyaWZpZXIiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7OzsyREF6RHlCO29CQUVZO29CQUNBO3lCQUNLO3lCQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQUEsQUFBTUEsa0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVztnQkFDN0QsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0osZ0JBQWdCSyxXQUFXO2dCQUU1QyxPQUFRRDtvQkFDTixLQUFLRSw4QkFBbUI7d0JBQUU7NEJBQ3hCLElBQU1DLGdCQUFnQlAsaUJBQ2hCUSw4QkFBOEJDLElBQUFBLG9DQUF5QixFQUFDRixlQUFlTixhQUFhQyxjQUNwRlEsd0JBQXdCRiw2QkFBNkIsR0FBRzs0QkFFOURMLDBCQUEwQk8sdUJBQXVCLEdBQUc7NEJBRXBEO3dCQUNGO29CQUVBLEtBQUtDLHlCQUFjO3dCQUFFOzRCQUNuQixJQUFNQyxXQUFXWixpQkFDWGEseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVVgsYUFBYUMsY0FDckVhLG1CQUFtQkYsd0JBQXlCLEdBQUc7NEJBRXJEViwwQkFBMEJZLGtCQUFrQixHQUFHOzRCQUUvQzt3QkFDRjtvQkFFQSxLQUFLQyx5QkFBYzt3QkFBRTs0QkFDbkIsSUFBTUMsV0FBV2pCLGlCQUNYa0IseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVWhCLGFBQWFDLGNBQ3JFa0IsbUJBQW1CRix3QkFBeUIsR0FBRzs0QkFFckRmLDBCQUEwQmlCLGtCQUFrQixHQUFHOzRCQUUvQzt3QkFDRjtvQkFFQTt3QkFBUzs0QkFDUGpCLDBCQUEwQix1QkF0QzVCTCw4Q0FzQ2tDQyx5QkFBTixJQUFLLGFBQXVCQyxpQkFBaUJDLGFBQWFDLGNBQWMsR0FBRzs0QkFFckc7d0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1dBN0NJTDtFQUEwQ3VCLGFBQVk7QUFnRDVELElBQU1DLG9DQUFvQyxJQUFJeEI7SUFFOUMsV0FBZXdCIn0=