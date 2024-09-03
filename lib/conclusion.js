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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
                var matchesStatementNose = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    matchesStatementNose = nonTerminalNodeVerified; ///
                }
                return matchesStatementNose;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext) {
                var matchesMetastatementNode = false;
                if (this.metastatementNode !== null) {
                    var fileContextA = fileContext, nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    matchesMetastatementNode = nonTerminalNodeVerified; ///
                }
                return matchesMetastatementNode;
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var metastatementNode = null, conclusion = new Conclusion(metastatementNode, statementNode);
                return conclusion;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, conclusion = new Conclusion(metastatementNode, statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL21ldGFMZXZlbFwiO1xuaW1wb3J0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nLCBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uY2x1c2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzU3RhdGVtZW50Tm9zZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gc3RhdGVtZW50TG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgbWF0Y2hlc1N0YXRlbWVudE5vc2UgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnROb3NlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24obWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uY2x1c2lvbiIsIm1ldGFzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJtYXRjaGVzU3RhdGVtZW50Tm9zZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhc3RhdGVtZW50Iiwic3RhdGVtZW50IiwianNvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwiY29uY2x1c2lvbiIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQSTtnRUFDVTtxRkFDcUI7c0JBRTNCO29CQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEFBQU1BLDJCQUFELEFBQUw7YUFBTUEsV0FDUEMsaUJBQWlCLEVBQUVDLGFBQWE7Z0NBRHpCRjtRQUVqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsYUFBYSxFQUFFSSxhQUFhLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCO2dCQUNsRixJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQUksSUFBSSxDQUFDUixpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNUyxtQkFBbUIsSUFBSSxDQUFDVCxpQkFBaUIsRUFDekNVLG1CQUFtQlQsZUFDbkJVLGdCQUFnQkwsY0FDaEJNLGdCQUFnQkwsdUJBQ2hCTSwwQkFBMEJDLHVDQUEyQyxDQUFDQyxxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JMLGVBQWVNLGVBQWVDLGVBQWU7d0JBQzNLLElBQU1JLGdCQUFnQjt3QkFFdEIsT0FBT0E7b0JBQ1Q7b0JBRU5SLHVCQUF1QksseUJBQXlCLEdBQUc7Z0JBQ3JEO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCakIsaUJBQWlCLEVBQUVLLGFBQWEsRUFBRWEsV0FBVyxFQUFFWixZQUFZO2dCQUNoRixJQUFJYSwyQkFBMkI7Z0JBRS9CLElBQUksSUFBSSxDQUFDbkIsaUJBQWlCLEtBQUssTUFBTTtvQkFDbkMsSUFBTW9CLGVBQWVGLGFBQ2ZULG1CQUFtQixJQUFJLENBQUNULGlCQUFpQixFQUN6Q1UsbUJBQW1CVixtQkFDbkJXLGdCQUFnQlUsY0FBWSxDQUFDQyxlQUFlLENBQUNGLGVBQzdDUixnQkFBZ0JOLGNBQ2hCTywwQkFBMEJVLGtCQUFzQixDQUFDUixxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JMLGVBQWVNLGVBQWVDLGVBQWU7d0JBQ3RKLElBQU1JLGdCQUFnQjt3QkFFdEIsT0FBT0E7b0JBQ1Q7b0JBRU5HLDJCQUEyQk4seUJBQXlCLEdBQUc7Z0JBQ3pEO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDM0IsaUJBQWlCLEVBQUV5QixTQUMzREcsa0JBQWtCRCxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQzFCLGFBQWEsRUFBRXdCLFNBQ25ESSxnQkFBZ0JILHFCQUNoQkksWUFBWUYsaUJBQ1pHLE9BQU87b0JBQ0xGLGVBQUFBO29CQUNBQyxXQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQi9CLGFBQWE7Z0JBQ3BDLElBQU1ELG9CQUFvQixNQUNwQmlDLGFBQWEsSUF0RUZsQyxXQXNFaUJDLG1CQUFtQkM7Z0JBRXJELE9BQU9nQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCbEMsaUJBQWlCO2dCQUM1QyxJQUFNQyxnQkFBZ0IsTUFDaEJnQyxhQUFhLElBN0VGbEMsV0E2RWlCQyxtQkFBbUJDO2dCQUVyRCxPQUFPZ0M7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkosSUFBSSxFQUFFYixXQUFXO2dCQUM3QyxJQUFRVyxnQkFBNkJFLEtBQTdCRixlQUFlQyxZQUFjQyxLQUFkRCxXQUNqQkosc0JBQXNCRyxlQUN0QkQsa0JBQWtCRSxXQUNsQk0sUUFBUWxCLFlBQVltQixRQUFRLElBQzVCQyxTQUFTcEIsWUFBWXFCLFNBQVMsSUFDOUJ2QyxvQkFBb0J3QyxJQUFBQSw4Q0FBd0MsRUFBQ2QscUJBQXFCVSxPQUFPRSxTQUN6RnJDLGdCQUFnQndDLElBQUFBLHNDQUFnQyxFQUFDYixpQkFBaUJRLE9BQU9FLFNBQ3pFTCxhQUFhLElBMUZGbEMsV0EwRmlCQyxtQkFBbUJDO2dCQUVyRCxPQUFPZ0M7WUFDVDs7O1dBN0ZtQmxDIn0=