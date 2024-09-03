"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaConsequent;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
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
var MetaConsequent = /*#__PURE__*/ function() {
    function MetaConsequent(metastatementNode, statementNode) {
        _class_call_check(this, MetaConsequent);
        this.metastatementNode = metastatementNode;
        this.statementNode = statementNode;
    }
    _create_class(MetaConsequent, [
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
                var metastatementNode = null, metaConsequent = new MetaConsequent(metastatementNode, statementNode);
                return metaConsequent;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, metaConsequent = new MetaConsequent(metastatementNode, statementNode);
                return metaConsequent;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, statement = json.statement, metastatementString = metastatement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), metaConsequent = new MetaConsequent(metastatementNode, statementNode);
                return metaConsequent;
            }
        }
    ]);
    return MetaConsequent;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhQ29uc2VxdWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcsIG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhQ29uc2VxdWVudCB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhQ29uc2VxdWVudCA9IG5ldyBNZXRhQ29uc2VxdWVudChtZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YUNvbnNlcXVlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBuZXcgTWV0YUNvbnNlcXVlbnQobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBuZXcgTWV0YUNvbnNlcXVlbnQobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFDb25zZXF1ZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YUNvbnNlcXVlbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0IiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHRBIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtZXRhc3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXN0YXRlbWVudCIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm1ldGFDb25zZXF1ZW50IiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzREQU5JO2dFQUNVO3NCQUVOO29CQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEFBQU1BLCtCQUFELEFBQUw7YUFBTUEsZUFDUEMsaUJBQWlCLEVBQUVDLGFBQWE7Z0NBRHpCRjtRQUVqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkosaUJBQWlCLEVBQUVLLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZO2dCQUNoRixJQUFJQywyQkFBMkI7Z0JBRS9CLElBQUksSUFBSSxDQUFDUixpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNUyxlQUFlSCxhQUNmSSxtQkFBbUIsSUFBSSxDQUFDVixpQkFBaUIsRUFDekNXLG1CQUFtQlgsbUJBQ25CWSxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDTCxlQUM3Q00sZ0JBQWdCUixjQUNoQlMsMEJBQTBCQyxrQkFBc0IsQ0FBQ0MscUJBQXFCLENBQUNSLGtCQUFrQkMsa0JBQWtCTixlQUFlTyxlQUFlRyxlQUFlO3dCQUN0SixJQUFNSSxnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVOWCwyQkFBMkJRLHlCQUF5QixHQUFHO2dCQUN6RDtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ3ZCLGlCQUFpQixFQUFFcUIsU0FDM0RHLGtCQUFrQkQsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUN0QixhQUFhLEVBQUVvQixTQUNuREksZ0JBQWdCSCxxQkFDaEJJLFlBQVlGLGlCQUNaRyxPQUFPO29CQUNMRixlQUFBQTtvQkFDQUMsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0IzQixhQUFhO2dCQUNwQyxJQUFNRCxvQkFBb0IsTUFDcEI2QixpQkFBaUIsSUFsRE45QixlQWtEeUJDLG1CQUFtQkM7Z0JBRTdELE9BQU80QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCOUIsaUJBQWlCO2dCQUM1QyxJQUFNQyxnQkFBZ0IsTUFDaEI0QixpQkFBaUIsSUF6RE45QixlQXlEeUJDLG1CQUFtQkM7Z0JBRTdELE9BQU80QjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSixJQUFJLEVBQUVyQixXQUFXO2dCQUM3QyxJQUFRbUIsZ0JBQTZCRSxLQUE3QkYsZUFBZUMsWUFBY0MsS0FBZEQsV0FDakJKLHNCQUFzQkcsZUFDdEJELGtCQUFrQkUsV0FDbEJNLFFBQVExQixZQUFZMkIsUUFBUSxJQUM1QkMsU0FBUzVCLFlBQVk2QixTQUFTLElBQzlCbkMsb0JBQW9Cb0MsSUFBQUEsOENBQXdDLEVBQUNkLHFCQUFxQlUsT0FBT0UsU0FDekZqQyxnQkFBZ0JvQyxJQUFBQSxzQ0FBZ0MsRUFBQ2IsaUJBQWlCUSxPQUFPRSxTQUN6RUwsaUJBQWlCLElBdEVOOUIsZUFzRXlCQyxtQkFBbUJDO2dCQUU3RCxPQUFPNEI7WUFDVDs7O1dBekVtQjlCIn0=