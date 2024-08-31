"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Conclusion;
    }
});
var _localMeta = /*#__PURE__*/ _interop_require_default(require("./context/localMeta"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
var _intrinsicLevelAgainstMetaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/intrinsicLevelAgainstMetaLevel"));
var _string = require("./utilities/string");
var _node = require("./utilities/node");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Conclusion = /*#__PURE__*/ function() {
    function Conclusion(metastatementNode, statementNode) {
        _class_call_check(this, Conclusion);
        this.metastatementNode = metastatementNode;
        this.statementNode = statementNode;
    }
    _create_class(Conclusion, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, localContext, statementLocalContext) {
                var statementNodeMatches = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    statementNodeMatches = nonTerminalNodeVerified; ///
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
                var metastatementNodeMatches = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localMetaContextA = _localMeta.default.fromFileContext(fileContextA), localMetaContextB = localMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    metastatementNodeMatches = nonTerminalNodeVerified; ///
                }
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), statementString = (0, _string.nodeAsString)(this.statementNode, tokens), metastatement = metastatementString, statement = statementString, json = {
                    metastatement: metastatement,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, conclusion = new Conclusion(metastatementNode, statementNode);
                return conclusion;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var metastatementNode = null, conclusion = new Conclusion(metastatementNode, statementNode);
                return conclusion;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, statement = json.statement, metastatementString = metastatement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), conclusion = new Conclusion(metastatementNode, statementNode);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsTWV0YVwiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvbWV0YUxldmVsXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcsIG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25jbHVzaW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QSA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uY2x1c2lvbiIsIm1ldGFzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwibG9jYWxNZXRhQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsImZpbGVDb250ZXh0QSIsImxvY2FsTWV0YUNvbnRleHRBIiwiTG9jYWxNZXRhQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsTWV0YUNvbnRleHRCIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhc3RhdGVtZW50Iiwic3RhdGVtZW50IiwianNvbiIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsImNvbmNsdXNpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztnRUFQUTtnRUFDTTtxRkFDcUI7c0JBRTNCO29CQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEFBQU1BLDJCQUFELEFBQUw7YUFBTUEsV0FDUEMsaUJBQWlCLEVBQUVDLGFBQWE7Z0NBRHpCRjtRQUVqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsYUFBYSxFQUFFSSxhQUFhLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCO2dCQUNsRixJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQUksSUFBSSxDQUFDUixpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNUyxtQkFBbUIsSUFBSSxDQUFDVCxpQkFBaUIsRUFDekNVLG1CQUFtQlQsZUFDbkJVLGdCQUFnQkwsY0FDaEJNLGdCQUFnQkwsdUJBQ2hCTSwwQkFBMEJDLHVDQUEyQyxDQUFDQyxxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JMLGVBQWVNLGVBQWVDLGVBQWU7d0JBQzNLLElBQU1JLGdCQUFnQjt3QkFFdEIsT0FBT0E7b0JBQ1Q7b0JBRU5SLHVCQUF1QksseUJBQXlCLEdBQUc7Z0JBQ3JEO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCakIsaUJBQWlCLEVBQUVLLGFBQWEsRUFBRWEsV0FBVyxFQUFFQyxnQkFBZ0I7Z0JBQ3BGLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBSSxJQUFJLENBQUNwQixpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNUyxtQkFBbUIsSUFBSSxDQUFDVCxpQkFBaUIsRUFDekNVLG1CQUFtQlYsbUJBQ25CcUIsZUFBZUgsYUFDZkksb0JBQW9CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDSCxlQUNyREksb0JBQW9CTixrQkFDcEJOLDBCQUEwQmEsa0JBQXNCLENBQUNYLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQkwsZUFBZWlCLG1CQUFtQkcsbUJBQW1CO3dCQUM5SixJQUFNVCxnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVOSSwyQkFBMkJQLHlCQUF5QixHQUFHO2dCQUN6RDtnQkFFQSxPQUFPTztZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQzlCLGlCQUFpQixFQUFFNEIsU0FDM0RHLGtCQUFrQkQsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUM3QixhQUFhLEVBQUUyQixTQUNuREksZ0JBQWdCSCxxQkFDaEJJLFlBQVlGLGlCQUNaRyxPQUFPO29CQUNMRixlQUFBQTtvQkFDQUMsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JuQyxpQkFBaUI7Z0JBQzVDLElBQU1DLGdCQUFnQixNQUNoQm1DLGFBQWEsSUF0RUZyQyxXQXNFaUJDLG1CQUFtQkM7Z0JBRXJELE9BQU9tQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCcEMsYUFBYTtnQkFDcEMsSUFBTUQsb0JBQW9CLE1BQ3BCb0MsYUFBYSxJQTdFRnJDLFdBNkVpQkMsbUJBQW1CQztnQkFFckQsT0FBT21DO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJKLElBQUksRUFBRWhCLFdBQVc7Z0JBQzdDLElBQVFjLGdCQUE2QkUsS0FBN0JGLGVBQWVDLFlBQWNDLEtBQWRELFdBQ2pCSixzQkFBc0JHLGVBQ3RCRCxrQkFBa0JFLFdBQ2xCTSxRQUFRckIsWUFBWXNCLFFBQVEsSUFDNUJDLFNBQVN2QixZQUFZd0IsU0FBUyxJQUM5QjFDLG9CQUFvQjJDLElBQUFBLDhDQUF3QyxFQUFDZCxxQkFBcUJVLE9BQU9FLFNBQ3pGeEMsZ0JBQWdCMkMsSUFBQUEsc0NBQWdDLEVBQUNiLGlCQUFpQlEsT0FBT0UsU0FDekVMLGFBQWEsSUExRkZyQyxXQTBGaUJDLG1CQUFtQkM7Z0JBRXJELE9BQU9tQztZQUNUOzs7V0E3Rm1CckMifQ==