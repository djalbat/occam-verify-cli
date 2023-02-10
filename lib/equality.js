"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("./matcher"));
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("./verifier"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("./verify/term"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("./node/statement/equality"));
var _query = require("./utilities/query");
var _array = require("./utilities/array");
var _ruleNames = require("./ruleNames");
var _constants = require("./constants");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
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
function _interopRequireWildcard(obj, nodeInterop) {
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
    var newObj = {};
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!");
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTermNode, rightTermNode) {
        _classCallCheck(this, Equality);
        this.leftTermNode = leftTermNode;
        this.rightTermNode = rightTermNode;
    }
    _createClass(Equality, [
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                return this.leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                return this.rightTermNode;
            }
        },
        {
            key: "matchTermNodes",
            value: function matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
                var leftTermNodeAndRightTermNodeMatch = true;
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeVerified = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerified; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeVerified1 = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerified1; ///
                }
                return leftTermNodeAndRightTermNodeMatch;
            }
        },
        {
            key: "match",
            value: function match(equality, equalities, context) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                equalities = filterEqualities(equalities, equality); ///
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchTermNodes(leftTermNode, rightTermNode, reversed1, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
            }
        },
        {
            key: "verify",
            value: function verify(equalities, context) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeVerified = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context), verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ], [
        {
            key: "fromProofStep",
            value: function fromProofStep(proofStep) {
                var equality = null;
                var statementNode = proofStep.getStatementNode();
                if (statementNode !== null) {
                    var nodeA = statementNode, nodeB = _equality.default, depth = _constants.EQUALITY_DEPTH, nodeMatches = _matcher.default.matchNode(nodeA, nodeB, depth);
                    if (nodeMatches) {
                        var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                        equality = new Equality(leftTermNode, rightTermNode);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equality = new Equality(leftTermNode, rightTermNode);
                return equality;
            }
        },
        {
            key: "fromLeftTermNodeAndRightTermNode",
            value: function fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode) {
                var equality = new Equality(leftTermNode, rightTermNode);
                return equality;
            }
        }
    ]);
    return Equality;
}();
var EqualityVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(EqualityVerifier, Verifier);
    var _super = _createSuper(EqualityVerifier);
    function EqualityVerifier() {
        _classCallCheck(this, EqualityVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(EqualityVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
                var nonTerminalNodeVerified = false;
                var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
                if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                    var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
                    if (ruleNameTermRuleName) {
                        var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context);
                        nonTerminalNodeVerified = termNodeVerified; ///
                    }
                    if (!nonTerminalNodeVerified) {
                        var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesVerified = this.verifyNodes(leftNodes, rightNodes, equalities, context);
                        nonTerminalNodeVerified = nodesVerified; ///
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(leftTermNode, rightTermNode, equalities, context) {
                var termNodeVerified = false;
                var variables = [], leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                var equality = null;
                if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
                    var firstVariable = (0, _array.first)(variables), secondVariable = (0, _array.second)(variables), leftVariable = firstVariable, rightVariable = secondVariable, leftVariableType = leftVariable.getType(), rightVariableType = rightVariable.getType(), leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);
                    if (leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                } else if (leftTermVerifiedAsVariable) {
                    var types = [];
                    (0, _term.default)(rightTermNode, types, context);
                    var firstType = (0, _array.first)(types), firstVariable1 = (0, _array.first)(variables), leftVariable1 = firstVariable1, rightTermType = firstType, leftVariableType1 = leftVariable1.getType(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType1.isEqualToOrSuperTypeOf(rightTermType);
                    if (leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                } else if (rightTermVerifiedAsVariable) {
                    var types1 = [];
                    (0, _term.default)(leftTermNode, types1, context);
                    var firstType1 = (0, _array.first)(types1), firstVariable2 = (0, _array.first)(variables), leftTermType = firstType1, rightVariable1 = firstVariable2, rightVariableType1 = rightVariable1.getType(), rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType1.isEqualToOrSuperTypeOf(leftTermType);
                    if (rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                } else {
                    var types2 = [];
                    (0, _term.default)(leftTermNode, types2, context);
                    (0, _term.default)(rightTermNode, types2, context);
                    var firstType2 = (0, _array.first)(types2), secondType = (0, _array.second)(types2), leftTermType1 = firstType2, rightTermType1 = secondType, leftTermTypeEqualToOrSubTypeOfOfSuperTypeOfRightTermType = leftTermType1.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType1);
                    if (leftTermTypeEqualToOrSubTypeOfOfSuperTypeOfRightTermType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                }
                if (equality !== null) {
                    var equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
                        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
                        if (equalityAMatchesEqualityB) {
                            return true;
                        }
                    });
                    termNodeVerified = equalityMatches; ///
                }
                return termNodeVerified;
            }
        }
    ]);
    return EqualityVerifier;
}(_verifier.default);
var equalityVerifier = new EqualityVerifier();
function filterEqualities(equalities, equality) {
    var equalityA = equality; ///
    equalities = equalities.filter(function(equality) {
        var equalityB = equality; ///
        if (equalityA !== equalityB) {
            return true;
        }
    });
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyXCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSBmcm9tIFwiLi9ub2RlL3N0YXRlbWVudC9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBFUVVBTElUWV9ERVBUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMF0vdGVybSFcIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0cnVlO1xuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBlcXVhbGl0eVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBlcXVhbGl0eVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGVxdWFsaXRpZXMgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KTsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZXF1YWxpdHlWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBlcXVhbGl0eVN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgZGVwdGgpO1xuXG4gICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbmNsYXNzIEVxdWFsaXR5VmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByaWdodE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCB0ZXJtTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSAmJiByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IHNlY29uZFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZihyaWdodFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmIChsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gcmlnaHRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgICBpZiAocmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHNlY29uZFR5cGUsIC8vL1xuICAgICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgICAgZXF1YWxpdGllc0IgPSBlcXVhbGl0aWVzLCAvLy9cbiAgICAgICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXNCLnNvbWUoKGVxdWFsaXR5QikgPT4geyAvLy9cbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGVybU5vZGVWZXJpZmllZCA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IGVxdWFsaXR5VmVyaWZpZXIgPSBuZXcgRXF1YWxpdHlWZXJpZmllcigpO1xuXG5mdW5jdGlvbiBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KSB7XG4gIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5OyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllcy5maWx0ZXIoKGVxdWFsaXR5KSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHk7IC8vL1xuXG4gICAgaWYgKGVxdWFsaXR5QSAhPT0gZXF1YWxpdHlCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGVzIiwicmV2ZXJzZWQiLCJlcXVhbGl0aWVzIiwiY29udGV4dCIsImxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiZXF1YWxpdHlWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoIiwiZXF1YWxpdHkiLCJtYXRjaGVzIiwiZmlsdGVyRXF1YWxpdGllcyIsInZlcmlmeSIsInZlcmlmaWVkIiwiZnJvbVByb29mU3RlcCIsInByb29mU3RlcCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImVxdWFsaXR5U3RhdGVtZW50Tm9kZSIsImRlcHRoIiwiRVFVQUxJVFlfREVQVEgiLCJub2RlTWF0Y2hlcyIsIm1hdGNoZXIiLCJtYXRjaE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiRXF1YWxpdHlWZXJpZmllciIsImxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Tm9kZXMiLCJ2YXJpYWJsZXMiLCJsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0Iiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJ0eXBlcyIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsInNlY29uZFR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImVxdWFsaXR5QSIsImVxdWFsaXRpZXNCIiwiZXF1YWxpdHlNYXRjaGVzIiwic29tZSIsImVxdWFsaXR5QiIsImVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIiLCJWZXJpZmllciIsImZpbHRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzREQWREOzZEQUNDOzBEQUNFOzZEQUNXO3FCQUVSO3FCQUNJO3lCQUNDO3lCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9CLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQStHbEIsQUEvR1k7YUFBTUEsU0FDUEksWUFBWSxFQUFFQyxhQUFhOzhCQURwQkw7UUFFakIsSUFBSSxDQUFDSSxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZ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