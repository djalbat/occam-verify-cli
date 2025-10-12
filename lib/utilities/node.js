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
    get stringFromTerms () {
        return stringFromTerms;
    },
    get termFromTermNode () {
        return termFromTermNode;
    },
    get termsFromTermNodes () {
        return termsFromTermNodes;
    },
    get typeFromTypeNode () {
        return typeFromTypeNode;
    },
    get variableFromTerm () {
        return variableFromTerm;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _type = require("../dom/type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function typeFromTypeNode(typeNode, context) {
    var type;
    if (typeNode === null) {
        type = _type.objectType;
    } else {
        var Type = _dom.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName(), nominalTypeName = typeNode.getNominalTypeName(), string = nominalTypeName, name = typeName, prefixName = typePrefixName, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, prefixName, superTypes, properties, provisional);
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
function termsFromTermNodes(termNodes, context) {
    var terms = termNodes.map(function(termNode) {
        var term = termFromTermNode(termNode, context);
        return term;
    });
    return terms;
}
function variableFromTerm(term, context) {
    var variable = null;
    var termNode = term.getNode(), singularVariableNode = termNode.getSingularVariableNode();
    if (singularVariableNode !== null) {
        var Variable = _dom.default.Variable, variableNode = singularVariableNode; ///
        variable = Variable.fromVariableNode(variableNode, context);
        var type = term.getType();
        variable.setType(type);
    }
    return variable;
}
function stringFromTerms(terms) {
    var termsString = terms.reduce(function(termsString, term) {
        var termString = term.getString();
        termsString = termsString !== null ? "".concat(termsString, ", ").concat(termString) : termString;
        return termsString;
    }, null), string = "[".concat(termsString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICB2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICR7dGVybVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybXNTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21UZXJtcyIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidmFyaWFibGVGcm9tVGVybSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJvYmplY3RUeXBlIiwiVHlwZSIsImRvbSIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwic3RyaW5nIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50IiwidG9rZW5zIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJ0ZXJtTm9kZXMiLCJ0ZXJtcyIsIm1hcCIsInZhcmlhYmxlIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsInRlcm1zU3RyaW5nIiwicmVkdWNlIiwidGVybVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdUNnQkE7ZUFBQUE7O1FBd0NBQztlQUFBQTs7UUFsREFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBM0NBQztlQUFBQTs7UUFxREFDO2VBQUFBOzs7MERBekRBO29CQUVXOzs7Ozs7QUFFcEIsU0FBU0QsaUJBQWlCRSxRQUFRLEVBQUVDLE9BQU87SUFDaEQsSUFBSUM7SUFFSixJQUFJRixhQUFhLE1BQU07UUFDckJFLE9BQU9DLGdCQUFVO0lBQ25CLE9BQU87UUFDTCxJQUFNLEFBQUVDLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsV0FBV04sU0FBU08sV0FBVyxJQUMvQkMsaUJBQWlCUixTQUFTUyxpQkFBaUIsSUFDM0NDLGtCQUFrQlYsU0FBU1csa0JBQWtCLElBQzdDQyxTQUFTRixpQkFDVEcsT0FBT1AsVUFDUFEsYUFBYU4sZ0JBQ2JPLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjO1FBRXBCZixPQUFPLElBQUlFLEtBQUtRLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDLFlBQVlDO0lBQ3BFO0lBRUEsT0FBT2Y7QUFDVDtBQUVPLFNBQVNOLGlCQUFpQnNCLFFBQVEsRUFBRWpCLE9BQU87SUFDaEQsSUFBTSxBQUFFa0IsT0FBU2QsWUFBRyxDQUFaYyxNQUNGQyxPQUFPRixVQUNQTixTQUFTWCxRQUFRb0IsWUFBWSxDQUFDRCxPQUM5QmxCLE9BQU8sTUFDUG9CLE9BQU8sSUFBSUgsS0FBS1AsUUFBUVEsTUFBTWxCO0lBRXBDLE9BQU9vQjtBQUNUO0FBRU8sU0FBUzVCLDJCQUEyQjZCLGFBQWEsRUFBRXRCLE9BQU87SUFDL0QsSUFBTSxBQUFFdUIsWUFBY25CLFlBQUcsQ0FBakJtQixXQUNGSixPQUFPRyxlQUNQRSxTQUFTeEIsUUFBUXlCLFlBQVksQ0FBQ04sT0FDOUJSLFNBQVNYLFFBQVEwQixjQUFjLENBQUNGLFNBQ2hDRyxZQUFZLElBQUlKLFVBQVVaLFFBQVFRLE1BQU1LO0lBRTlDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTL0IsbUJBQW1CZ0MsU0FBUyxFQUFFNUIsT0FBTztJQUNuRCxJQUFNNkIsUUFBUUQsVUFBVUUsR0FBRyxDQUFDLFNBQUNiO1FBQ3JCLElBQU1JLE9BQU8xQixpQkFBaUJzQixVQUFVakI7UUFFeEMsT0FBT3FCO0lBQ1Q7SUFFTixPQUFPUTtBQUNUO0FBRU8sU0FBUy9CLGlCQUFpQnVCLElBQUksRUFBRXJCLE9BQU87SUFDNUMsSUFBSStCLFdBQVc7SUFFZixJQUFNZCxXQUFXSSxLQUFLVyxPQUFPLElBQ3ZCQyx1QkFBdUJoQixTQUFTaUIsdUJBQXVCO0lBRTdELElBQUlELHlCQUF5QixNQUFNO1FBQ2pDLElBQU0sQUFBRUUsV0FBYS9CLFlBQUcsQ0FBaEIrQixVQUNGQyxlQUFlSCxzQkFBdUIsR0FBRztRQUUvQ0YsV0FBV0ksU0FBU0UsZ0JBQWdCLENBQUNELGNBQWNwQztRQUVuRCxJQUFNQyxPQUFPb0IsS0FBS2lCLE9BQU87UUFFekJQLFNBQVNRLE9BQU8sQ0FBQ3RDO0lBQ25CO0lBRUEsT0FBTzhCO0FBQ1Q7QUFFTyxTQUFTckMsZ0JBQWdCbUMsS0FBSztJQUNuQyxJQUFNVyxjQUFjWCxNQUFNWSxNQUFNLENBQUMsU0FBQ0QsYUFBYW5CO1FBQ3ZDLElBQU1xQixhQUFhckIsS0FBS3NCLFNBQVM7UUFFakNILGNBQWMsQUFBQ0EsZ0JBQWdCLE9BQ2hCLEFBQUMsR0FBa0JFLE9BQWhCRixhQUFZLE1BQWUsT0FBWEUsY0FDakJBO1FBRWpCLE9BQU9GO0lBQ1QsR0FBRyxPQUNIN0IsU0FBUyxBQUFDLElBQWUsT0FBWjZCLGFBQVk7SUFFL0IsT0FBTzdCO0FBQ1QifQ==