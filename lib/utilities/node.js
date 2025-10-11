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
        var Type = _dom.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName();
        var string;
        string = typeName; ///
        if (typePrefixName !== null) {
            string = "".concat(typePrefixName).concat(string);
        }
        var name = typeName, superTypes = null, properties = null, provisional = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBzdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVQcmVmaXhOYW1lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0eXBlUHJlZml4TmFtZX0ke3N0cmluZ31gO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVGVybXModGVybXMpIHtcbiAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtcy5yZWR1Y2UoKHRlcm1zU3RyaW5nLCB0ZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB0ZXJtc1N0cmluZyA9ICh0ZXJtc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Rlcm1zU3RyaW5nfSwgJHt0ZXJtU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybVN0cmluZztcblxuICAgICAgICAgIHJldHVybiB0ZXJtc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtc1N0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RyaW5nRnJvbVRlcm1zIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsInR5cGVGcm9tVHlwZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZSIsIm9iamVjdFR5cGUiLCJUeXBlIiwiZG9tIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInRva2VucyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50IiwidGVybU5vZGVzIiwidGVybXMiLCJtYXAiLCJ2YXJpYWJsZSIsImdldE5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0ZXJtc1N0cmluZyIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTZDZ0JBO2VBQUFBOztRQXdDQUM7ZUFBQUE7O1FBbERBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQWpEQUM7ZUFBQUE7O1FBMkRBQztlQUFBQTs7OzBEQS9EQTtvQkFFVzs7Ozs7O0FBRXBCLFNBQVNELGlCQUFpQkUsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQUlDO0lBRUosSUFBSUYsYUFBYSxNQUFNO1FBQ3JCRSxPQUFPQyxnQkFBVTtJQUNuQixPQUFPO1FBQ0wsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFdBQVdOLFNBQVNPLFdBQVcsSUFDL0JDLGlCQUFpQlIsU0FBU1MsaUJBQWlCO1FBRWpELElBQUlDO1FBRUpBLFNBQVNKLFVBQVcsR0FBRztRQUV2QixJQUFJRSxtQkFBbUIsTUFBTTtZQUMzQkUsU0FBUyxBQUFDLEdBQW1CQSxPQUFqQkYsZ0JBQXdCLE9BQVBFO1FBQy9CO1FBRUEsSUFBTUMsT0FBT0wsVUFDUE0sYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWM7UUFFcEJaLE9BQU8sSUFBSUUsS0FBS0gsU0FBU1MsUUFBUUMsTUFBTUMsWUFBWUMsWUFBWUM7SUFDakU7SUFFQSxPQUFPWjtBQUNUO0FBRU8sU0FBU04saUJBQWlCbUIsUUFBUSxFQUFFZCxPQUFPO0lBQ2hELElBQU0sQUFBRWUsT0FBU1gsWUFBRyxDQUFaVyxNQUNGQyxPQUFPRixVQUNQTCxTQUFTVCxRQUFRaUIsWUFBWSxDQUFDRCxPQUM5QmYsT0FBTyxNQUNQaUIsT0FBTyxJQUFJSCxLQUFLTixRQUFRTyxNQUFNZjtJQUVwQyxPQUFPaUI7QUFDVDtBQUVPLFNBQVN6QiwyQkFBMkIwQixhQUFhLEVBQUVuQixPQUFPO0lBQy9ELElBQU0sQUFBRW9CLFlBQWNoQixZQUFHLENBQWpCZ0IsV0FDRkosT0FBT0csZUFDUEUsU0FBU3JCLFFBQVFzQixZQUFZLENBQUNOLE9BQzlCUCxTQUFTVCxRQUFRdUIsY0FBYyxDQUFDRixTQUNoQ0csWUFBWSxJQUFJSixVQUFVWCxRQUFRTyxNQUFNSztJQUU5QyxPQUFPRztBQUNUO0FBRU8sU0FBUzVCLG1CQUFtQjZCLFNBQVMsRUFBRXpCLE9BQU87SUFDbkQsSUFBTTBCLFFBQVFELFVBQVVFLEdBQUcsQ0FBQyxTQUFDYjtRQUNyQixJQUFNSSxPQUFPdkIsaUJBQWlCbUIsVUFBVWQ7UUFFeEMsT0FBT2tCO0lBQ1Q7SUFFTixPQUFPUTtBQUNUO0FBRU8sU0FBUzVCLGlCQUFpQm9CLElBQUksRUFBRWxCLE9BQU87SUFDNUMsSUFBSTRCLFdBQVc7SUFFZixJQUFNZCxXQUFXSSxLQUFLVyxPQUFPLElBQ3ZCQyx1QkFBdUJoQixTQUFTaUIsdUJBQXVCO0lBRTdELElBQUlELHlCQUF5QixNQUFNO1FBQ2pDLElBQU0sQUFBRUUsV0FBYTVCLFlBQUcsQ0FBaEI0QixVQUNGQyxlQUFlSCxzQkFBdUIsR0FBRztRQUUvQ0YsV0FBV0ksU0FBU0UsZ0JBQWdCLENBQUNELGNBQWNqQztRQUVuRCxJQUFNQyxPQUFPaUIsS0FBS2lCLE9BQU87UUFFekJQLFNBQVNRLE9BQU8sQ0FBQ25DO0lBQ25CO0lBRUEsT0FBTzJCO0FBQ1Q7QUFFTyxTQUFTbEMsZ0JBQWdCZ0MsS0FBSztJQUNuQyxJQUFNVyxjQUFjWCxNQUFNWSxNQUFNLENBQUMsU0FBQ0QsYUFBYW5CO1FBQ3ZDLElBQU1xQixhQUFhckIsS0FBS3NCLFNBQVM7UUFFakNILGNBQWMsQUFBQ0EsZ0JBQWdCLE9BQ2hCLEFBQUMsR0FBa0JFLE9BQWhCRixhQUFZLE1BQWUsT0FBWEUsY0FDakJBO1FBRWpCLE9BQU9GO0lBQ1QsR0FBRyxPQUNINUIsU0FBUyxBQUFDLElBQWUsT0FBWjRCLGFBQVk7SUFFL0IsT0FBTzVCO0FBQ1QifQ==