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
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/statementForMetavariable/conclusion"));
var _conclusion1 = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metastatementForMetavariable/conclusion"));
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
    function Conclusion(metastatementNode) {
        _class_call_check(this, Conclusion);
        this.metastatementNode = metastatementNode;
    }
    _create_class(Conclusion, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, fileContextA = fileContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _conclusion.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, function() {
                    var verifyAhead = true;
                    return verifyAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetalocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, metalocalContextB = metastatementMetalocalContext, nonTerminalNodeVerified = _conclusion1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metalocalContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), metastatementNodeMatches = nonTerminalNodeVerified; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), metastatement = metastatementString, json = {
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var conclusion = new Conclusion(metastatementNode);
                return conclusion;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), conclusion = new Conclusion(metastatementNode);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL2NvbmNsdXNpb25cIjtcbmltcG9ydCBjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9jb25jbHVzaW9uXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25jbHVzaW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gc3RhdGVtZW50TG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZnlBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YWxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGFsb2NhbENvbnRleHRCID0gbWV0YXN0YXRlbWVudE1ldGFsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBtZXRhbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbmNsdXNpb24iLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudExvY2FsQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlBaGVhZCIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNZXRhbG9jYWxDb250ZXh0IiwibWV0YWxvY2FsQ29udGV4dEIiLCJjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZmllZEFoZWFkIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiY29uY2x1c2lvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7aUVBTnVDO2tFQUNJO3NCQUVuQztvQkFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBQSxBQUFNQSwyQkFBRCxBQUFMO2FBQU1BLFdBQ1BDLGlCQUFpQjtnQ0FEVkQ7UUFFakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2tCQUZSRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMscUJBQXFCO2dCQUNqRixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUCxpQkFBaUIsRUFDekNRLG1CQUFtQkwsZUFDbkJNLGVBQWVKLGFBQ2ZLLGdCQUFnQkosdUJBQ2hCSywwQkFBMEJDLG1CQUErQyxDQUFDQyxxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JKLGVBQWVLLGNBQWNDLGVBQWU7b0JBQzlLLElBQU1JLGNBQWM7b0JBRXBCLE9BQU9BO2dCQUNULElBQ0FDLHVCQUF1QkoseUJBQXlCLEdBQUc7Z0JBRXpELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCaEIsaUJBQWlCLEVBQUVJLGFBQWEsRUFBRUMsV0FBVyxFQUFFWSw2QkFBNkI7Z0JBQ2pHLElBQU1WLG1CQUFtQixJQUFJLENBQUNQLGlCQUFpQixFQUN6Q1EsbUJBQW1CUixtQkFDbkJTLGVBQWVKLGFBQ2ZhLG9CQUFvQkQsK0JBQ3BCTiwwQkFBMEJRLG9CQUFtRCxDQUFDTixxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JKLGVBQWVLLGNBQWNTLG1CQUFtQjtvQkFDdEwsSUFBTUUsZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVCxJQUNBQywyQkFBMkJWLHlCQUF5QixHQUFHO2dCQUU3RCxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ3pCLGlCQUFpQixFQUFFdUIsU0FDM0RHLGdCQUFnQkYscUJBQ2hCRyxPQUFPO29CQUNMRCxlQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQjVCLGlCQUFpQjtnQkFDNUMsSUFBTTZCLGFBQWEsSUFsREY5QixXQWtEaUJDO2dCQUVsQyxPQUFPNkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsSUFBSSxFQUFFdEIsV0FBVztnQkFDN0MsSUFBTSxBQUFFcUIsZ0JBQWtCQyxLQUFsQkQsZUFDRkYsc0JBQXNCRSxlQUN0QkssUUFBUTFCLFlBQVkyQixRQUFRLElBQzVCQyxTQUFTNUIsWUFBWTZCLFNBQVMsSUFDOUJsQyxvQkFBb0JtQyxJQUFBQSw4Q0FBd0MsRUFBQ1gscUJBQXFCTyxPQUFPRSxTQUN6RkosYUFBYSxJQTdERjlCLFdBNkRpQkM7Z0JBRWxDLE9BQU82QjtZQUNUOzs7V0FoRW1COUIifQ==