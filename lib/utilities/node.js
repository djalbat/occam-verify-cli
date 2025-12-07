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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
var _type = require("../ontology/type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function typeFromTypeNode(typeNode, context) {
    var type;
    if (typeNode === null) {
        type = _type.baseType;
    } else {
        var Type = _ontology.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName(), nominalTypeName = typeNode.getNominalTypeName(), string = nominalTypeName, name = typeName, prefixName = typePrefixName, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _ontology.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(string, node, type);
    return term;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _ontology.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
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
        var Variable = _ontology.default.Variable, variableNode = singularVariableNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9vbnRvbG9neS90eXBlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHR5cGUgPSBiYXNlVHlwZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gbm9taW5hbFR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtcyh0ZXJtcykge1xuICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLnJlZHVjZSgodGVybXNTdHJpbmcsIHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHRlcm1zU3RyaW5nID0gKHRlcm1zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGVybXNTdHJpbmd9LCAke3Rlcm1TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtU3RyaW5nO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm1zU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1zU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdHJpbmdGcm9tVGVybXMiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybXNGcm9tVGVybU5vZGVzIiwidHlwZUZyb21UeXBlTm9kZSIsInZhcmlhYmxlRnJvbVRlcm0iLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJUeXBlIiwib250b2xvZ3kiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInRva2VucyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50IiwidGVybU5vZGVzIiwidGVybXMiLCJtYXAiLCJ2YXJpYWJsZSIsImdldE5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0ZXJtc1N0cmluZyIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVDZ0JBO2VBQUFBOztRQXdDQUM7ZUFBQUE7O1FBbERBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQTNDQUM7ZUFBQUE7O1FBcURBQztlQUFBQTs7OytEQXpESztvQkFFSTs7Ozs7O0FBRWxCLFNBQVNELGlCQUFpQkUsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQUlDO0lBRUosSUFBSUYsYUFBYSxNQUFNO1FBQ3JCRSxPQUFPQyxjQUFRO0lBQ2pCLE9BQU87UUFDTCxJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxXQUFXTixTQUFTTyxXQUFXLElBQy9CQyxpQkFBaUJSLFNBQVNTLGlCQUFpQixJQUMzQ0Msa0JBQWtCVixTQUFTVyxrQkFBa0IsSUFDN0NDLFNBQVNGLGlCQUNURyxPQUFPUCxVQUNQUSxhQUFhTixnQkFDYk8sYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWM7UUFFcEJmLE9BQU8sSUFBSUUsS0FBS1EsUUFBUUMsTUFBTUMsWUFBWUMsWUFBWUMsWUFBWUM7SUFDcEU7SUFFQSxPQUFPZjtBQUNUO0FBRU8sU0FBU04saUJBQWlCc0IsUUFBUSxFQUFFakIsT0FBTztJQUNoRCxJQUFNLEFBQUVrQixPQUFTZCxpQkFBUSxDQUFqQmMsTUFDRkMsT0FBT0YsVUFDUE4sU0FBU1gsUUFBUW9CLFlBQVksQ0FBQ0QsT0FDOUJsQixPQUFPLE1BQ1BvQixPQUFPLElBQUlILEtBQUtQLFFBQVFRLE1BQU1sQjtJQUVwQyxPQUFPb0I7QUFDVDtBQUVPLFNBQVM1QiwyQkFBMkI2QixhQUFhLEVBQUV0QixPQUFPO0lBQy9ELElBQU0sQUFBRXVCLFlBQWNuQixpQkFBUSxDQUF0Qm1CLFdBQ0ZKLE9BQU9HLGVBQ1BFLFNBQVN4QixRQUFReUIsWUFBWSxDQUFDTixPQUM5QlIsU0FBU1gsUUFBUTBCLGNBQWMsQ0FBQ0YsU0FDaENHLFlBQVksSUFBSUosVUFBVVosUUFBUVEsTUFBTUs7SUFFOUMsT0FBT0c7QUFDVDtBQUVPLFNBQVMvQixtQkFBbUJnQyxTQUFTLEVBQUU1QixPQUFPO0lBQ25ELElBQU02QixRQUFRRCxVQUFVRSxHQUFHLENBQUMsU0FBQ2I7UUFDckIsSUFBTUksT0FBTzFCLGlCQUFpQnNCLFVBQVVqQjtRQUV4QyxPQUFPcUI7SUFDVDtJQUVOLE9BQU9RO0FBQ1Q7QUFFTyxTQUFTL0IsaUJBQWlCdUIsSUFBSSxFQUFFckIsT0FBTztJQUM1QyxJQUFJK0IsV0FBVztJQUVmLElBQU1kLFdBQVdJLEtBQUtXLE9BQU8sSUFDdkJDLHVCQUF1QmhCLFNBQVNpQix1QkFBdUI7SUFFN0QsSUFBSUQseUJBQXlCLE1BQU07UUFDakMsSUFBTSxBQUFFRSxXQUFhL0IsaUJBQVEsQ0FBckIrQixVQUNGQyxlQUFlSCxzQkFBdUIsR0FBRztRQUUvQ0YsV0FBV0ksU0FBU0UsZ0JBQWdCLENBQUNELGNBQWNwQztRQUVuRCxJQUFNQyxPQUFPb0IsS0FBS2lCLE9BQU87UUFFekJQLFNBQVNRLE9BQU8sQ0FBQ3RDO0lBQ25CO0lBRUEsT0FBTzhCO0FBQ1Q7QUFFTyxTQUFTckMsZ0JBQWdCbUMsS0FBSztJQUNuQyxJQUFNVyxjQUFjWCxNQUFNWSxNQUFNLENBQUMsU0FBQ0QsYUFBYW5CO1FBQ3ZDLElBQU1xQixhQUFhckIsS0FBS3NCLFNBQVM7UUFFakNILGNBQWMsQUFBQ0EsZ0JBQWdCLE9BQ2hCLEFBQUMsR0FBa0JFLE9BQWhCRixhQUFZLE1BQWUsT0FBWEUsY0FDakJBO1FBRWpCLE9BQU9GO0lBQ1QsR0FBRyxPQUNIN0IsU0FBUyxBQUFDLElBQWUsT0FBWjZCLGFBQVk7SUFFL0IsT0FBTzdCO0FBQ1QifQ==