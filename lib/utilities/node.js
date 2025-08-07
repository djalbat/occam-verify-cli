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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICB2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICR7dGVybVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybXNTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21UZXJtcyIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidmFyaWFibGVGcm9tVGVybSIsInR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJUeXBlIiwiZG9tIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsIm5hbWUiLCJzdHJpbmciLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJjb250ZXh0IiwiVGVybSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInRva2VucyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50IiwidGVybU5vZGVzIiwidGVybXMiLCJtYXAiLCJ2YXJpYWJsZSIsImdldE5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0ZXJtc1N0cmluZyIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9DZ0JBO2VBQUFBOztRQXdDQUM7ZUFBQUE7O1FBbERBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQXhDQUM7ZUFBQUE7O1FBa0RBQztlQUFBQTs7OzBEQXREQTtvQkFFVzs7Ozs7O0FBRXBCLFNBQVNELGlCQUFpQkUsUUFBUTtJQUN2QyxJQUFJQztJQUVKLElBQUlELGFBQWEsTUFBTTtRQUNyQkMsT0FBT0MsZ0JBQVU7SUFDbkIsT0FBTztRQUNMLElBQU0sQUFBRUMsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRSxXQUFXTCxTQUFTTSxXQUFXLElBQy9CQyxPQUFPRixVQUNQRyxTQUFTRCxNQUNURSxhQUFhLE1BQ2JDLGFBQWEsTUFDYkMsY0FBYztRQUVwQlYsT0FBTyxJQUFJRSxLQUFLSyxRQUFRRCxNQUFNRSxZQUFZQyxZQUFZQztJQUN4RDtJQUVBLE9BQU9WO0FBQ1Q7QUFFTyxTQUFTTCxpQkFBaUJnQixRQUFRLEVBQUVDLE9BQU87SUFDaEQsSUFBTSxBQUFFQyxPQUFTVixZQUFHLENBQVpVLE1BQ0ZDLE9BQU9ILFVBQ1BKLFNBQVNLLFFBQVFHLFlBQVksQ0FBQ0QsT0FDOUJkLE9BQU8sTUFDUGdCLE9BQU8sSUFBSUgsS0FBS04sUUFBUU8sTUFBTWQ7SUFFcEMsT0FBT2dCO0FBQ1Q7QUFFTyxTQUFTdkIsMkJBQTJCd0IsYUFBYSxFQUFFTCxPQUFPO0lBQy9ELElBQU0sQUFBRU0sWUFBY2YsWUFBRyxDQUFqQmUsV0FDRkosT0FBT0csZUFDUEUsU0FBU1AsUUFBUVEsWUFBWSxDQUFDTixPQUM5QlAsU0FBU0ssUUFBUVMsY0FBYyxDQUFDRixTQUNoQ0csWUFBWSxJQUFJSixVQUFVWCxRQUFRTyxNQUFNSztJQUU5QyxPQUFPRztBQUNUO0FBRU8sU0FBUzFCLG1CQUFtQjJCLFNBQVMsRUFBRVgsT0FBTztJQUNuRCxJQUFNWSxRQUFRRCxVQUFVRSxHQUFHLENBQUMsU0FBQ2Q7UUFDckIsSUFBTUssT0FBT3JCLGlCQUFpQmdCLFVBQVVDO1FBRXhDLE9BQU9JO0lBQ1Q7SUFFTixPQUFPUTtBQUNUO0FBRU8sU0FBUzFCLGlCQUFpQmtCLElBQUksRUFBRUosT0FBTztJQUM1QyxJQUFJYyxXQUFXO0lBRWYsSUFBTWYsV0FBV0ssS0FBS1csT0FBTyxJQUN2QkMsdUJBQXVCakIsU0FBU2tCLHVCQUF1QjtJQUU3RCxJQUFJRCx5QkFBeUIsTUFBTTtRQUNqQyxJQUFNLEFBQUVFLFdBQWEzQixZQUFHLENBQWhCMkIsVUFDRkMsZUFBZUgsc0JBQXVCLEdBQUc7UUFFL0NGLFdBQVdJLFNBQVNFLGdCQUFnQixDQUFDRCxjQUFjbkI7UUFFbkQsSUFBTVosT0FBT2dCLEtBQUtpQixPQUFPO1FBRXpCUCxTQUFTUSxPQUFPLENBQUNsQztJQUNuQjtJQUVBLE9BQU8wQjtBQUNUO0FBRU8sU0FBU2hDLGdCQUFnQjhCLEtBQUs7SUFDbkMsSUFBTVcsY0FBY1gsTUFBTVksTUFBTSxDQUFDLFNBQUNELGFBQWFuQjtRQUN2QyxJQUFNcUIsYUFBYXJCLEtBQUtzQixTQUFTO1FBRWpDSCxjQUFjLEFBQUNBLGdCQUFnQixPQUNoQixBQUFDLEdBQWtCRSxPQUFoQkYsYUFBWSxNQUFlLE9BQVhFLGNBQ2pCQTtRQUVqQixPQUFPRjtJQUNULEdBQUcsT0FDSDVCLFNBQVMsQUFBQyxJQUFlLE9BQVo0QixhQUFZO0lBRS9CLE9BQU81QjtBQUNUIn0=