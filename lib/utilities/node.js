"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get statementFromStatementNode () {
        return statementFromStatementNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
    },
    get typeFromTypeNode () {
        return typeFromTypeNode;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _type = require("../dom/type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function typeFromTypeNode(typeNode) {
    var type;
    if (typeNode === null) {
        type = _type.objectType;
    } else {
        var Type = _dom.default.Type, typeName = typeNode.getTypeName(), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _dom.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(string, node, type);
    return term;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _dom.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJUeXBlIiwiZG9tIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsIm5hbWUiLCJzdHJpbmciLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJjb250ZXh0IiwiVGVybSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInRva2VucyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQ2dCQTtlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7OzBEQUpBO29CQUVXOzs7Ozs7QUFFcEIsU0FBU0EsaUJBQWlCQyxRQUFRO0lBQ3ZDLElBQUlDO0lBRUosSUFBSUQsYUFBYSxNQUFNO1FBQ3JCQyxPQUFPQyxnQkFBVTtJQUNuQixPQUFPO1FBQ0wsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFdBQVdMLFNBQVNNLFdBQVcsSUFDL0JDLE9BQU9GLFVBQ1BHLFNBQVNELE1BQ1RFLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjO1FBRXBCVixPQUFPLElBQUlFLEtBQUtLLFFBQVFELE1BQU1FLFlBQVlDLFlBQVlDO0lBQ3hEO0lBRUEsT0FBT1Y7QUFDVDtBQUVPLFNBQVNILGlCQUFpQmMsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQU0sQUFBRUMsT0FBU1YsWUFBRyxDQUFaVSxNQUNGQyxPQUFPSCxVQUNQSixTQUFTSyxRQUFRRyxZQUFZLENBQUNELE9BQzlCZCxPQUFPLE1BQ1BnQixPQUFPLElBQUlILEtBQUtOLFFBQVFPLE1BQU1kO0lBRXBDLE9BQU9nQjtBQUNUO0FBRU8sU0FBU3BCLDJCQUEyQnFCLGFBQWEsRUFBRUwsT0FBTztJQUMvRCxJQUFNLEFBQUVNLFlBQWNmLFlBQUcsQ0FBakJlLFdBQ0ZKLE9BQU9HLGVBQ1BFLFNBQVNQLFFBQVFRLFlBQVksQ0FBQ04sT0FDOUJQLFNBQVNLLFFBQVFTLGNBQWMsQ0FBQ0YsU0FDaENHLFlBQVksSUFBSUosVUFBVVgsUUFBUU8sTUFBTUs7SUFFOUMsT0FBT0c7QUFDVCJ9