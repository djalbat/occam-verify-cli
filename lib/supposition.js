"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Supposition;
    }
});
var _string = require("./utilities/string");
var _query = require("./utilities/query");
var _node = require("./utilities/node");
var _supposition = require("./matcher/termForVariable/supposition");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), subproofAssertionStatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement/statement!"), subproofSubDerivationLastStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(statementNode) {
        _classCallCheck(this, Supposition);
        this.statementNode = statementNode;
    }
    _createClass(Supposition, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions) {
                var subproofNodeMatches = false;
                var subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);
                if (subproofAssertionNode !== null) {
                    var subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofSubDerivationLastStatementNode = subproofSubDerivationLastStatementNodeQuery(subproofNode), subproofStatementNodes = _toConsumableArray(subproofSuppositionStatementNodes).concat([
                        subproofSubDerivationLastStatementNode
                    ]), subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode), subproofStatementNodesLength = subproofStatementNodes.length, subproofAssertionStatementNodesLength = subproofAssertionStatementNodes.length;
                    if (subproofStatementNodesLength === subproofAssertionStatementNodesLength) {
                        subproofNodeMatches = subproofAssertionStatementNodes.every(function(subproofAssertionStatementNode, index) {
                            var subproofStatementNode = subproofStatementNodes[index], nonTerminalNodeA = subproofAssertionStatementNode, nonTerminalNodeB = subproofStatementNode, nonTerminalNodeMatches = _supposition.suppositionTermForVariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                            if (nonTerminalNodeMatches) {
                                return true;
                            }
                        });
                    }
                }
                return subproofNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _supposition.suppositionTermForVariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var statementString = (0, _string.nodeAsString)(this.statementNode, tokens), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, lexer, parser) {
                var statement = json.statement, statementString = statement, statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), supposition = new Supposition(statementNode);
                return supposition;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var supposition = new Supposition(statementNode);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBzdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIgfSBmcm9tIFwiLi9tYXRjaGVyL3Rlcm1Gb3JWYXJpYWJsZS9zdXBwb3NpdGlvblwiO1xuXG5jb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnRbLTFdL3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZTdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLmV2ZXJ5KChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gc3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVNYXRjaGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gc3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVNYXRjaGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcikge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdXBwb3NpdGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwic3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlcyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImV2ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlIiwiaW5kZXgiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJzdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJwYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3NCQVZRO3FCQUNTO29CQUNXOzJCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBTUMsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDLGtDQUN2Q0MsdUNBQXVDQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUNsREMseUNBQXlDRCxJQUFBQSxpQkFBVSxFQUFDLDBEQUNwREUsOENBQThDSixJQUFBQSxnQkFBUyxFQUFDO0FBRS9DLElBQUEsQUFBTUYsNEJBQU47YUFBTUEsWUFDUE8sYUFBYTs4QkFETlA7UUFFakIsSUFBSSxDQUFDTyxhQUFhLEdBQUdBOztpQkFGSlA7O1lBS25CUSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsYUFBYSxFQUFFO2dCQUM3QyxJQUFJQyxzQkFBc0IsS0FBSztnQkFFL0IsSUFBTUMsd0JBQXdCWiwyQkFBMkIsSUFBSSxDQUFDTSxhQUFhO2dCQUUzRSxJQUFJTSwwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNQyxvQ0FBb0NULHVDQUF1Q0ssZUFDM0VLLHlDQUF5Q1QsNENBQTRDSSxlQUNyRk0seUJBQXlCLEFBQ3ZCLG1CQUFHRiwwQ0FEb0I7d0JBRXZCQztxQkFDRCxHQUNERSxrQ0FBa0NkLHFDQUFxQ1Usd0JBQ3ZFSywrQkFBK0JGLHVCQUF1QkcsTUFBTSxFQUM1REMsd0NBQXdDSCxnQ0FBZ0NFLE1BQU07b0JBRXBGLElBQUlELGlDQUFpQ0UsdUNBQXVDO3dCQUMxRVIsc0JBQXNCSyxnQ0FBZ0NJLEtBQUssQ0FBQyxTQUFDQyxnQ0FBZ0NDLE9BQVU7NEJBQy9FLElBQU1DLHdCQUF3QlIsc0JBQXNCLENBQUNPLE1BQU0sRUFDckRFLG1CQUFtQkgsZ0NBQ25CSSxtQkFBbUJGLHVCQUNuQkcseUJBQXlCQyw4Q0FBaUMsQ0FBQ0Msb0JBQW9CLENBQUNKLGtCQUFrQkMsa0JBQWtCZjs0QkFFMUgsSUFBSWdCLHdCQUF3QjtnQ0FDMUIsT0FBTyxJQUFJOzRCQUNiLENBQUM7d0JBQ0g7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPZjtZQUNUOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJ2QixhQUFhLEVBQUVJLGFBQWEsRUFBRTtnQkFDL0MsSUFBTWMsbUJBQW1CLElBQUksQ0FBQ2xCLGFBQWEsRUFDckNtQixtQkFBbUJuQixlQUNuQm9CLHlCQUF5QkMsOENBQWlDLENBQUNDLG9CQUFvQixDQUFDSixrQkFBa0JDLGtCQUFrQmYsZ0JBQ3BIb0IsdUJBQXVCSix3QkFBd0IsR0FBRztnQkFFeEQsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQzVCLGFBQWEsRUFBRTBCLFNBQ25ERyxZQUFZRixpQkFDWkcsT0FBTztvQkFDTEQsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLEtBQUssRUFBRUMsTUFBTSxFQUFFO2dCQUNuQyxJQUFNLEFBQUVKLFlBQWNDLEtBQWRELFdBQ0ZGLGtCQUFrQkUsV0FDbEI3QixnQkFBZ0JrQyxJQUFBQSxzQ0FBZ0MsRUFBQ1AsaUJBQWlCSyxPQUFPQyxTQUN6RUUsY0FBYyxJQWpFSDFDLFlBaUVtQk87Z0JBRXBDLE9BQU9tQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCcEMsYUFBYSxFQUFFO2dCQUN0QyxJQUFNbUMsY0FBYyxJQXZFSDFDLFlBdUVtQk87Z0JBRXBDLE9BQU9tQztZQUNUOzs7V0ExRW1CMUMifQ==