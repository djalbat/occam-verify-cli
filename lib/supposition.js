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
var _supposition = require("./matcher/supposition");
var _query = require("./utilities/query");
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
var statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), unqualifiedStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement/statement!"), qualifiedOrUnqualifiedStatementStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");
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
                    var subproofAssertionStatementNodes = statementNodesQuery(subproofAssertionNode), unqualifiedStatementStatementNodes = unqualifiedStatementStatementNodesQuery(subproofNode), qualifiedOrUnqualifiedStatementStatementNode = qualifiedOrUnqualifiedStatementStatementNodeQuery(subproofNode), statementNodes = _toConsumableArray(unqualifiedStatementStatementNodes).concat([
                        qualifiedOrUnqualifiedStatementStatementNode
                    ]), statementNodesLength = statementNodes.length, subproofAssertionStatementNodesLength = subproofAssertionStatementNodes.length;
                    if (statementNodesLength === subproofAssertionStatementNodesLength) {
                        subproofNodeMatches = subproofAssertionStatementNodes.every(function(subproofAssertionStatementNode, index) {
                            var statementNode = statementNodes[index], nonTerminalNode = statementNode, suppositionNonTerminalNode = subproofAssertionStatementNode, nonTerminalNodeMatches = _supposition.suppositionMatcher.matchNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions);
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
                var nonTerminalNode = statementNode, suppositionNonTerminalNode = this.statementNode, nonTerminalNodeMatches = _supposition.suppositionMatcher.matchNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementString = (0, _string.nodeAsString)(this.statementNode), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var statement = json.statement, statementString = statement, statementNode = (0, _string.statementNodeFromStatementString)(statementString, releaseContext), supposition = new Supposition(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3VwcG9zaXRpb25NYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2YvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnRbLTFdL3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMuZXZlcnkoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBwb3NpdGlvbk1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUoc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBwb3NpdGlvbk1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUoc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJldmVyeSIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwic3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwic3VwcG9zaXRpb25NYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0Iiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztzQkFWUTsyQkFDTTtxQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RDLElBQU1DLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyxpQ0FDakNDLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDdkNDLDBDQUEwQ0gsSUFBQUEsaUJBQVUsRUFBQyw4Q0FDckRJLG9EQUFvREYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyRCxJQUFBLEFBQU1KLDRCQUFOO2FBQU1BLFlBQ1BPLGFBQWE7OEJBRE5QO1FBRWpCLElBQUksQ0FBQ08sYUFBYSxHQUFHQTs7aUJBRkpQOztZQUtuQlEsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNELGFBQWE7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUVDLGFBQWEsRUFBRTtnQkFDN0MsSUFBSUMsc0JBQXNCLEtBQUs7Z0JBRS9CLElBQU1DLHdCQUF3QlYsMkJBQTJCLElBQUksQ0FBQ0ksYUFBYTtnQkFFM0UsSUFBSU0sMEJBQTBCLElBQUksRUFBRTtvQkFDbEMsSUFBTUMsa0NBQWtDYixvQkFBb0JZLHdCQUN0REUscUNBQXFDVix3Q0FBd0NLLGVBQzdFTSwrQ0FBK0NWLGtEQUFrREksZUFDakdPLGlCQUFpQixBQUNmLG1CQUFHRiwyQ0FEWTt3QkFFZkM7cUJBQ0QsR0FDREUsdUJBQXVCRCxlQUFlRSxNQUFNLEVBQzVDQyx3Q0FBd0NOLGdDQUFnQ0ssTUFBTTtvQkFFcEYsSUFBSUQseUJBQXlCRSx1Q0FBdUM7d0JBQ2xFUixzQkFBc0JFLGdDQUFnQ08sS0FBSyxDQUFDLFNBQUNDLGdDQUFnQ0MsT0FBVTs0QkFDL0UsSUFBTWhCLGdCQUFnQlUsY0FBYyxDQUFDTSxNQUFNLEVBQ3JDQyxrQkFBa0JqQixlQUNsQmtCLDZCQUE2QkgsZ0NBQzdCSSx5QkFBeUJDLCtCQUFrQixDQUFDQyxvQkFBb0IsQ0FBQ0gsNEJBQTRCRCxpQkFBaUJiOzRCQUVwSCxJQUFJZSx3QkFBd0I7Z0NBQzFCLE9BQU8sSUFBSTs0QkFDYixDQUFDO3dCQUNIO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT2Q7WUFDVDs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CdEIsYUFBYSxFQUFFSSxhQUFhLEVBQUU7Z0JBQy9DLElBQU1hLGtCQUFrQmpCLGVBQ2xCa0IsNkJBQTZCLElBQUksQ0FBQ2xCLGFBQWEsRUFDL0NtQix5QkFBeUJDLCtCQUFrQixDQUFDQyxvQkFBb0IsQ0FBQ0gsNEJBQTRCRCxpQkFBaUJiLGdCQUM5R21CLHVCQUF1Qkosd0JBQXdCLEdBQUc7Z0JBRXhELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDMUIsYUFBYSxHQUNqRDJCLFlBQVlGLGlCQUNaRyxPQUFPO29CQUNMRCxXQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFNLEFBQUVILFlBQWNDLEtBQWRELFdBQ0ZGLGtCQUFrQkUsV0FDbEIzQixnQkFBZ0IrQixJQUFBQSx3Q0FBZ0MsRUFBQ04saUJBQWlCSyxpQkFDbEVFLGNBQWMsSUFqRUh2QyxZQWlFbUJPO2dCQUVwQyxPQUFPZ0M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmpDLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWdDLGNBQWMsSUF2RUh2QyxZQXVFbUJPO2dCQUVwQyxPQUFPZ0M7WUFDVDs7O1dBMUVtQnZDIn0=