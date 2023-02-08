"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Consequence;
    }
});
var _string = require("./utilities/string");
var _node = require("./utilities/node");
var _consequence = require("./verifier/termForVariable/consequence");
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
var Consequence = /*#__PURE__*/ function() {
    function Consequence(statementNode) {
        _classCallCheck(this, Consequence);
        this.statementNode = statementNode;
    }
    _createClass(Consequence, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, nonTerminalNodeVerified = _consequence.consequenceTermForVariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeVerified; ///
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
            value: function fromJSON(json, context) {
                var statement = json.statement, statementString = statement, lexer = context.getLexer(), parser = context.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), consequence = new Consequence(statementNode);
                return consequence;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var consequence = new Consequence(statementNode);
                return consequence;
            }
        }
    ]);
    return Consequence;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW5jZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgY29uc2VxdWVuY2VUZXJtRm9yVmFyaWFibGVWZXJpZmllciB9IGZyb20gXCIuL3ZlcmlmaWVyL3Rlcm1Gb3JWYXJpYWJsZS9jb25zZXF1ZW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNvbnNlcXVlbmNlVGVybUZvclZhcmlhYmxlVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBjb25zZXF1ZW5jZSA9IG5ldyBDb25zZXF1ZW5jZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25zZXF1ZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29uc2VxdWVuY2UgPSBuZXcgQ29uc2VxdWVuY2Uoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVuY2U7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29uc2VxdWVuY2UiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiY29uc2VxdWVuY2VUZXJtRm9yVmFyaWFibGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwiY29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsImNvbnNlcXVlbmNlIiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO29CQUNvQjsyQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxhQUFhOzhCQURORDtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUZKRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkYsYUFBYSxFQUFFRyxhQUFhLEVBQUU7Z0JBQy9DLElBQU1DLG1CQUFtQixJQUFJLENBQUNKLGFBQWEsRUFDckNLLG1CQUFtQkwsZUFDbkJNLDBCQUEwQkMsK0NBQWtDLENBQUNDLHFCQUFxQixDQUFDSixrQkFBa0JDLGtCQUFrQkYsZ0JBQ3ZITSx1QkFBdUJILHlCQUF5QixHQUFHO2dCQUV6RCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRTtnQkFDYixJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDYixhQUFhLEVBQUVXLFNBQ25ERyxZQUFZRixpQkFDWkcsT0FBTztvQkFDTEQsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLE9BQU8sRUFBRTtnQkFDN0IsSUFBTSxBQUFFSCxZQUFjQyxLQUFkRCxXQUNGRixrQkFBa0JFLFdBQ2xCSSxRQUFRRCxRQUFRRSxRQUFRLElBQ3hCQyxTQUFTSCxRQUFRSSxTQUFTLElBQzFCckIsZ0JBQWdCc0IsSUFBQUEsc0NBQWdDLEVBQUNWLGlCQUFpQk0sT0FBT0UsU0FDekVHLGNBQWMsSUFsQ0h4QixZQWtDbUJDO2dCQUVwQyxPQUFPdUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQnhCLGFBQWEsRUFBRTtnQkFDdEMsSUFBTXVCLGNBQWMsSUF4Q0h4QixZQXdDbUJDO2dCQUVwQyxPQUFPdUI7WUFDVDs7O1dBM0NtQnhCIn0=