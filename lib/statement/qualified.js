"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
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
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement");
var QualifiedStatement = /*#__PURE__*/ function() {
    function QualifiedStatement(string, statement) {
        _class_call_check(this, QualifiedStatement);
        this.string = string;
        this.statement = statement;
    }
    _create_class(QualifiedStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        }
    ], [
        {
            key: "fromQualifiedStatementNode",
            value: function fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
                var qualifiedStatement = null;
                if (qualifiedStatementNode !== null) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = statementNode !== null ? _statement.default.fromStatementNode(statementNode, localContext) : null, node = qualifiedStatementNode, string = (0, _string.trim)(fileContext.nodeAsString(node));
                    qualifiedStatement = new QualifiedStatement(string, statement);
                }
                return qualifiedStatement;
            }
        }
    ]);
    return QualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgdHJpbSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSB0cmltKGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbmV3IFF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwicXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIlN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZSIsInRyaW0iLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O2dFQVJDOzREQUNHO3NCQUVKO3FCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLG1DQUFOO2FBQU1BLG1CQUNQRyxNQUFNLEVBQUVDLFNBQVM7Z0NBRFZKO1FBRWpCLElBQUksQ0FBQ0csTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUVDLFdBQVc7Z0JBQ25FLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBSUYsMkJBQTJCLE1BQU07b0JBQ25DLElBQU1HLGdCQUFnQlYsbUJBQW1CTyx5QkFDbkNJLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDTCxjQUM1Q0wsWUFBWSxBQUFDTyxrQkFBa0IsT0FDakJJLGtCQUFTLENBQUNDLGlCQUFpQixDQUFDTCxlQUFlQyxnQkFDekMsTUFDaEJLLE9BQU9ULHdCQUNQTCxTQUFTZSxJQUFBQSxZQUFJLEVBQUNULFlBQVlVLFlBQVksQ0FBQ0Y7b0JBRTNDUCxxQkFBcUIsSUExQlJWLG1CQTBCK0JHLFFBQVFDO2dCQUN4RDtnQkFFQSxPQUFPTTtZQUNUOzs7V0E5Qm1CViJ9