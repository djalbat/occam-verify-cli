"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Consequent;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
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
var Consequent = /*#__PURE__*/ function() {
    function Consequent(statementNode) {
        _class_call_check(this, Consequent);
        this.statementNode = statementNode;
    }
    _create_class(Consequent, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, substitutions, fileContext, localContext) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var nodeA = this.statementNode, nodeB = statementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    statementUnified = unified; ///
                }
                return statementUnified;
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var consequent = new Consequent(statementNode);
                return consequent;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), consequent = new Consequent(statementNode);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc2VxdWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnNlcXVlbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW50IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NERBTkk7Z0VBQ0k7c0JBRUE7b0JBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsMkJBQUQsQUFBTDthQUFNQSxXQUNQQyxhQUFhO2dDQURORDtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUZKRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixhQUFhLEVBQUVHLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZO2dCQUNwRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQUksSUFBSSxDQUFDTixhQUFhLEtBQUssTUFBTTtvQkFDL0IsSUFBTU8sUUFBUSxJQUFJLENBQUNQLGFBQWEsRUFDMUJRLFFBQVFSLGVBQ1JTLGVBQWVMLGFBQ2ZNLGdCQUFnQkMsY0FBWSxDQUFDQyxlQUFlLENBQUNILGVBQzdDSSxnQkFBZ0JSLGNBQ2hCUyxVQUFVQyxrQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDVCxPQUFPQyxPQUFPTCxlQUFlTyxlQUFlRztvQkFFbkZQLG1CQUFtQlEsU0FBUyxHQUFHO2dCQUNqQztnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ3BCLGFBQWEsRUFBRWtCLFNBQ25ERyxZQUFZRixpQkFDWkcsT0FBTztvQkFDTEQsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0J2QixhQUFhO2dCQUNwQyxJQUFNd0IsYUFBYSxJQXJDRnpCLFdBcUNpQkM7Z0JBRWxDLE9BQU93QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSCxJQUFJLEVBQUVsQixXQUFXO2dCQUM3QyxJQUFNLEFBQUVpQixZQUFjQyxLQUFkRCxXQUNGRixrQkFBa0JFLFdBQ2xCSyxRQUFRdEIsWUFBWXVCLFFBQVEsSUFDNUJDLFNBQVN4QixZQUFZeUIsU0FBUyxJQUM5QjdCLGdCQUFnQjhCLElBQUFBLHNDQUFnQyxFQUFDWCxpQkFBaUJPLE9BQU9FLFNBQ3pFSixhQUFhLElBaERGekIsV0FnRGlCQztnQkFFbEMsT0FBT3dCO1lBQ1Q7OztXQW5EbUJ6QiJ9