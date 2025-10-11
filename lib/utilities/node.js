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
        var Type = _dom.default.Type, typeName = typeNode.getTypeName(), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(context, string, name, superTypes, properties, provisional);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICB2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICR7dGVybVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybXNTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21UZXJtcyIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidmFyaWFibGVGcm9tVGVybSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJvYmplY3RUeXBlIiwiVHlwZSIsImRvbSIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJuYW1lIiwic3RyaW5nIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInRva2VucyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50IiwidGVybU5vZGVzIiwidGVybXMiLCJtYXAiLCJ2YXJpYWJsZSIsImdldE5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0ZXJtc1N0cmluZyIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9DZ0JBO2VBQUFBOztRQXdDQUM7ZUFBQUE7O1FBbERBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQXhDQUM7ZUFBQUE7O1FBa0RBQztlQUFBQTs7OzBEQXREQTtvQkFFVzs7Ozs7O0FBRXBCLFNBQVNELGlCQUFpQkUsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQUlDO0lBRUosSUFBSUYsYUFBYSxNQUFNO1FBQ3JCRSxPQUFPQyxnQkFBVTtJQUNuQixPQUFPO1FBQ0wsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFdBQVdOLFNBQVNPLFdBQVcsSUFDL0JDLE9BQU9GLFVBQ1BHLFNBQVNELE1BQ1RFLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjO1FBRXBCVixPQUFPLElBQUlFLEtBQUtILFNBQVNRLFFBQVFELE1BQU1FLFlBQVlDLFlBQVlDO0lBQ2pFO0lBRUEsT0FBT1Y7QUFDVDtBQUVPLFNBQVNOLGlCQUFpQmlCLFFBQVEsRUFBRVosT0FBTztJQUNoRCxJQUFNLEFBQUVhLE9BQVNULFlBQUcsQ0FBWlMsTUFDRkMsT0FBT0YsVUFDUEosU0FBU1IsUUFBUWUsWUFBWSxDQUFDRCxPQUM5QmIsT0FBTyxNQUNQZSxPQUFPLElBQUlILEtBQUtMLFFBQVFNLE1BQU1iO0lBRXBDLE9BQU9lO0FBQ1Q7QUFFTyxTQUFTdkIsMkJBQTJCd0IsYUFBYSxFQUFFakIsT0FBTztJQUMvRCxJQUFNLEFBQUVrQixZQUFjZCxZQUFHLENBQWpCYyxXQUNGSixPQUFPRyxlQUNQRSxTQUFTbkIsUUFBUW9CLFlBQVksQ0FBQ04sT0FDOUJOLFNBQVNSLFFBQVFxQixjQUFjLENBQUNGLFNBQ2hDRyxZQUFZLElBQUlKLFVBQVVWLFFBQVFNLE1BQU1LO0lBRTlDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTMUIsbUJBQW1CMkIsU0FBUyxFQUFFdkIsT0FBTztJQUNuRCxJQUFNd0IsUUFBUUQsVUFBVUUsR0FBRyxDQUFDLFNBQUNiO1FBQ3JCLElBQU1JLE9BQU9yQixpQkFBaUJpQixVQUFVWjtRQUV4QyxPQUFPZ0I7SUFDVDtJQUVOLE9BQU9RO0FBQ1Q7QUFFTyxTQUFTMUIsaUJBQWlCa0IsSUFBSSxFQUFFaEIsT0FBTztJQUM1QyxJQUFJMEIsV0FBVztJQUVmLElBQU1kLFdBQVdJLEtBQUtXLE9BQU8sSUFDdkJDLHVCQUF1QmhCLFNBQVNpQix1QkFBdUI7SUFFN0QsSUFBSUQseUJBQXlCLE1BQU07UUFDakMsSUFBTSxBQUFFRSxXQUFhMUIsWUFBRyxDQUFoQjBCLFVBQ0ZDLGVBQWVILHNCQUF1QixHQUFHO1FBRS9DRixXQUFXSSxTQUFTRSxnQkFBZ0IsQ0FBQ0QsY0FBYy9CO1FBRW5ELElBQU1DLE9BQU9lLEtBQUtpQixPQUFPO1FBRXpCUCxTQUFTUSxPQUFPLENBQUNqQztJQUNuQjtJQUVBLE9BQU95QjtBQUNUO0FBRU8sU0FBU2hDLGdCQUFnQjhCLEtBQUs7SUFDbkMsSUFBTVcsY0FBY1gsTUFBTVksTUFBTSxDQUFDLFNBQUNELGFBQWFuQjtRQUN2QyxJQUFNcUIsYUFBYXJCLEtBQUtzQixTQUFTO1FBRWpDSCxjQUFjLEFBQUNBLGdCQUFnQixPQUNoQixBQUFDLEdBQWtCRSxPQUFoQkYsYUFBWSxNQUFlLE9BQVhFLGNBQ2pCQTtRQUVqQixPQUFPRjtJQUNULEdBQUcsT0FDSDNCLFNBQVMsQUFBQyxJQUFlLE9BQVoyQixhQUFZO0lBRS9CLE9BQU8zQjtBQUNUIn0=