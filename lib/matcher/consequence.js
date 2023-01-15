"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "consequenceMatcher", {
    enumerable: true,
    get: function() {
        return consequenceMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var ConsequenceMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(ConsequenceMatcher, Matcher);
    var _super = _createSuper(ConsequenceMatcher);
    function ConsequenceMatcher() {
        _classCallCheck(this, ConsequenceMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(ConsequenceMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions) {
                var nonTerminalNodeMatches = false;
                var ruleName = nonTerminalNode.getRuleName(), consequenceRuleName = consequenceNonTerminalNode.getRuleName(); ///
                if (ruleName === consequenceRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(ConsequenceMatcher.prototype), "matchNonTerminalNode", this).call(this, consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions);
                    if (!nonTerminalNodeMatches) {
                        var ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME;
                        if (ruleNameStatementRuleName) {
                            var statementNode = nonTerminalNode, consequenceStatementNode = consequenceNonTerminalNode, statementNodeMatches = this.matchStatementNode(consequenceStatementNode, statementNode, metaSubstitutions);
                            nonTerminalNodeMatches = statementNodeMatches; ///
                        }
                    }
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(consequenceStatementNode, statementNode, metaSubstitutions) {
                var statementNodeMatches = false;
                var consequenceNonTerminalNode = consequenceStatementNode, consequenceChildNodes = consequenceNonTerminalNode.getChildNodes(), consequenceChildNodesLength = consequenceChildNodes.length;
                if (consequenceChildNodesLength === 1) {
                    var firstConsequenceChildNode = (0, _array.first)(consequenceChildNodes), consequenceChildNode = firstConsequenceChildNode, consequenceChildNodeNonTerminalNode = consequenceChildNode.isNonTerminalNode();
                    if (consequenceChildNodeNonTerminalNode) {
                        var consequenceNonTerminalChildNode = consequenceChildNode, consequenceNonTerminalChildNodeRuleName = consequenceNonTerminalChildNode.getRuleName(), consequenceNonTerminalChildNodeRuleNameVariableRuleName = consequenceNonTerminalChildNodeRuleName === _ruleNames.VARIABLE_RULE_NAME;
                        if (consequenceNonTerminalChildNodeRuleNameVariableRuleName) {
                            var consequenceVariableNode = consequenceNonTerminalChildNode, nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, variableMatches = this.matchVariable(consequenceVariableNode, nodes, metaSubstitutions);
                            statementNodeMatches = variableMatches; ///
                        }
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchVariable",
            value: function matchVariable(consequenceVariableNode, nodes, metaSubstitutions) {
                var variableMatches = true;
                var consequenceVariableName = (0, _query.variableNameFromVariableNode)(consequenceVariableNode), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
                    var variableName = metaSubstitution.getVariableName();
                    if (variableName === consequenceVariableName) {
                        return true;
                    }
                }) || null;
                if (metaSubstitution !== null) {
                    var metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);
                    variableMatches = metaSubstitutionNodesMatch; ///
                }
                return variableMatches;
            }
        }
    ]);
    return ConsequenceMatcher;
}(_matcher.default);
var consequenceMatcher = new ConsequenceMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL2NvbnNlcXVlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIENvbnNlcXVlbmNlTWF0Y2hlciBleHRlbmRzIE1hdGNoZXIge1xuICBtYXRjaE5vblRlcm1pbmFsTm9kZShjb25zZXF1ZW5jZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGNvbnNlcXVlbmNlUnVsZU5hbWUgPSBjb25zZXF1ZW5jZU5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29uc2VxdWVuY2VSdWxlTmFtZSkge1xuICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKGNvbnNlcXVlbmNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFub25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnNlcXVlbmNlU3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbmNlTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3RhdGVtZW50Tm9kZShjb25zZXF1ZW5jZVN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShjb25zZXF1ZW5jZVN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25zZXF1ZW5jZU5vblRlcm1pbmFsTm9kZSA9IGNvbnNlcXVlbmNlU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbmNlQ2hpbGROb2RlcyA9IGNvbnNlcXVlbmNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjb25zZXF1ZW5jZUNoaWxkTm9kZXNMZW5ndGggPSBjb25zZXF1ZW5jZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNvbnNlcXVlbmNlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDb25zZXF1ZW5jZUNoaWxkTm9kZSA9IGZpcnN0KGNvbnNlcXVlbmNlQ2hpbGROb2RlcyksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZUNoaWxkTm9kZSA9IGZpcnN0Q29uc2VxdWVuY2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbnNlcXVlbmNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY29uc2VxdWVuY2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnNlcXVlbmNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBjb25zZXF1ZW5jZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb25zZXF1ZW5jZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPSBjb25zZXF1ZW5jZU5vblRlcm1pbmFsQ2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZVZhcmlhYmxlUnVsZU5hbWUgPSAoY29uc2VxdWVuY2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW5jZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVWYXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29uc2VxdWVuY2VWYXJpYWJsZU5vZGUgPSBjb25zZXF1ZW5jZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVNYXRjaGVzID0gdGhpcy5tYXRjaFZhcmlhYmxlKGNvbnNlcXVlbmNlVmFyaWFibGVOb2RlLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB2YXJpYWJsZU1hdGNoZXM7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZShjb25zZXF1ZW5jZVZhcmlhYmxlTm9kZSwgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHZhcmlhYmxlTWF0Y2hlcyA9IHRydWU7XG5cbiAgICBjb25zdCBjb25zZXF1ZW5jZVZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUoY29uc2VxdWVuY2VWYXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBtZXRhU3Vic3RpdHV0aW9ucy5maW5kKChtZXRhU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBtZXRhU3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lID09PSBjb25zZXF1ZW5jZVZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKG1ldGFTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gbWV0YVN1YnN0aXR1dGlvbi5tYXRjaE5vZGVzKG5vZGVzKTtcblxuICAgICAgdmFyaWFibGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVNYXRjaGVzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25zZXF1ZW5jZU1hdGNoZXIgPSBuZXcgQ29uc2VxdWVuY2VNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsiY29uc2VxdWVuY2VNYXRjaGVyIiwiQ29uc2VxdWVuY2VNYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJjb25zZXF1ZW5jZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25zZXF1ZW5jZVJ1bGVOYW1lIiwicnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnROb2RlIiwiY29uc2VxdWVuY2VTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW5jZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29uc2VxdWVuY2VDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDb25zZXF1ZW5jZUNoaWxkTm9kZSIsImZpcnN0IiwiY29uc2VxdWVuY2VDaGlsZE5vZGUiLCJjb25zZXF1ZW5jZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY29uc2VxdWVuY2VOb25UZXJtaW5hbENoaWxkTm9kZSIsImNvbnNlcXVlbmNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsImNvbnNlcXVlbmNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZVZhcmlhYmxlUnVsZU5hbWUiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJjb25zZXF1ZW5jZVZhcmlhYmxlTm9kZSIsImNoaWxkTm9kZXMiLCJub2RlcyIsInZhcmlhYmxlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGUiLCJjb25zZXF1ZW5jZVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uIiwiZmluZCIsInZhcmlhYmxlTmFtZSIsImdldFZhcmlhYmxlTmFtZSIsIm1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIk1hdGNoZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdGYUE7OztlQUFBQTs7OzREQXRGTztxQkFFRTtxQkFDdUI7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFBLEFBQU1DLG1DQWdGSCxBQWhGSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQywwQkFBMEIsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRTtnQkFDbkYsSUFBSUMseUJBQXlCLEtBQUs7Z0JBRWxDLElBQU1DLFdBQVdILGdCQUFnQkksV0FBVyxJQUN0Q0Msc0JBQXNCTiwyQkFBMkJLLFdBQVcsSUFBSSxHQUFHO2dCQUV6RSxJQUFJRCxhQUFhRSxxQkFBcUI7b0JBQ3BDSCx5QkFBeUIscUJBUnpCTCwrQkFRK0JDLHdCQUFOLElBQUssYUFBc0JDLDRCQUE0QkMsaUJBQWlCQztvQkFFakcsSUFBSSxDQUFDQyx3QkFBd0I7d0JBQzNCLElBQU1JLDRCQUE2QkgsYUFBYUksOEJBQW1CO3dCQUVuRSxJQUFJRCwyQkFBMkI7NEJBQzdCLElBQU1FLGdCQUFnQlIsaUJBQ2hCUywyQkFBMkJWLDRCQUMzQlcsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLDBCQUEwQkQsZUFBZVA7NEJBRTlGQyx5QkFBeUJRLHNCQUFzQixHQUFHO3dCQUNwRCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPUjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkYsd0JBQXdCLEVBQUVELGFBQWEsRUFBRVAsaUJBQWlCLEVBQUU7Z0JBQzdFLElBQUlTLHVCQUF1QixLQUFLO2dCQUVoQyxJQUFNWCw2QkFBNkJVLDBCQUM3Qkcsd0JBQXdCYiwyQkFBMkJjLGFBQWEsSUFDaEVDLDhCQUE4QkYsc0JBQXNCRyxNQUFNO2dCQUVoRSxJQUFJRCxnQ0FBZ0MsR0FBRztvQkFDckMsSUFBTUUsNEJBQTRCQyxJQUFBQSxZQUFLLEVBQUNMLHdCQUNsQ00sdUJBQXVCRiwyQkFDdkJHLHNDQUFzQ0QscUJBQXFCRSxpQkFBaUI7b0JBRWxGLElBQUlELHFDQUFxQzt3QkFDdkMsSUFBTUUsa0NBQWtDSCxzQkFDbENJLDBDQUEwQ0QsZ0NBQWdDakIsV0FBVyxJQUNyRm1CLDBEQUEyREQsNENBQTRDRSw2QkFBa0I7d0JBRS9ILElBQUlELHlEQUF5RDs0QkFDM0QsSUFBTUUsMEJBQTBCSixpQ0FDMUJyQixrQkFBa0JRLGVBQ2xCa0IsYUFBYTFCLGdCQUFnQmEsYUFBYSxJQUMxQ2MsUUFBUUQsWUFDUkUsa0JBQWtCLElBQUksQ0FBQ0MsYUFBYSxDQUFDSix5QkFBeUJFLE9BQU8xQjs0QkFFM0VTLHVCQUF1QmtCLGlCQUFpQixHQUFHO3dCQUM3QyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPbEI7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0osdUJBQXVCLEVBQUVFLEtBQUssRUFBRTFCLGlCQUFpQixFQUFFO2dCQUMvRCxJQUFJMkIsa0JBQWtCLElBQUk7Z0JBRTFCLElBQU1FLDBCQUEwQkMsSUFBQUEsbUNBQTRCLEVBQUNOLDBCQUN2RE8sbUJBQW1CL0Isa0JBQWtCZ0MsSUFBSSxDQUFDLFNBQUNELGtCQUFxQjtvQkFDOUQsSUFBTUUsZUFBZUYsaUJBQWlCRyxlQUFlO29CQUVyRCxJQUFJRCxpQkFBaUJKLHlCQUF5Qjt3QkFDNUMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsTUFBTSxJQUFJO2dCQUVoQixJQUFJRSxxQkFBcUIsSUFBSSxFQUFFO29CQUM3QixJQUFNSSw2QkFBNkJKLGlCQUFpQkssVUFBVSxDQUFDVjtvQkFFL0RDLGtCQUFrQlEsNEJBQTZCLEdBQUc7Z0JBQ3BELENBQUM7Z0JBRUQsT0FBT1I7WUFDVDs7O1dBN0VJL0I7RUFBMkJ5QyxnQkFBTztBQWdGakMsSUFBTTFDLHFCQUFxQixJQUFJQyJ9