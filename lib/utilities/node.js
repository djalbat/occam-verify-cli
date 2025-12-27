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
var _structure = /*#__PURE__*/ _interop_require_default(require("../structure"));
var _type = require("../structure/type");
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
        var Type = _structure.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName(), nominalTypeName = typeNode.getNominalTypeName(), string = nominalTypeName, name = typeName, prefixName = typePrefixName, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _structure.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(string, node, type);
    return term;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _structure.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
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
        var Variable = _structure.default.Variable, variableNode = singularVariableNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmltcG9ydCB7IGJhc2VUeXBlIH0gZnJvbSBcIi4uL3N0cnVjdHVyZS90eXBlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHR5cGUgPSBiYXNlVHlwZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVGVybXModGVybXMpIHtcbiAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtcy5yZWR1Y2UoKHRlcm1zU3RyaW5nLCB0ZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB0ZXJtc1N0cmluZyA9ICh0ZXJtc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Rlcm1zU3RyaW5nfSwgJHt0ZXJtU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybVN0cmluZztcblxuICAgICAgICAgIHJldHVybiB0ZXJtc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtc1N0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RyaW5nRnJvbVRlcm1zIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsInR5cGVGcm9tVHlwZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZSIsImJhc2VUeXBlIiwiVHlwZSIsInN0cnVjdHVyZSIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwic3RyaW5nIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50IiwidG9rZW5zIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJ0ZXJtTm9kZXMiLCJ0ZXJtcyIsIm1hcCIsInZhcmlhYmxlIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsInRlcm1zU3RyaW5nIiwicmVkdWNlIiwidGVybVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdUNnQkE7ZUFBQUE7O1FBd0NBQztlQUFBQTs7UUFsREFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBM0NBQztlQUFBQTs7UUFxREFDO2VBQUFBOzs7Z0VBekRNO29CQUVHOzs7Ozs7QUFFbEIsU0FBU0QsaUJBQWlCRSxRQUFRLEVBQUVDLE9BQU87SUFDaEQsSUFBSUM7SUFFSixJQUFJRixhQUFhLE1BQU07UUFDckJFLE9BQU9DLGNBQVE7SUFDakIsT0FBTztRQUNMLElBQU0sQUFBRUMsT0FBU0Msa0JBQVMsQ0FBbEJELE1BQ0ZFLFdBQVdOLFNBQVNPLFdBQVcsSUFDL0JDLGlCQUFpQlIsU0FBU1MsaUJBQWlCLElBQzNDQyxrQkFBa0JWLFNBQVNXLGtCQUFrQixJQUM3Q0MsU0FBU0YsaUJBQ1RHLE9BQU9QLFVBQ1BRLGFBQWFOLGdCQUNiTyxhQUFhLE1BQ2JDLGFBQWEsTUFDYkMsY0FBYztRQUVwQmYsT0FBTyxJQUFJRSxLQUFLUSxRQUFRQyxNQUFNQyxZQUFZQyxZQUFZQyxZQUFZQztJQUNwRTtJQUVBLE9BQU9mO0FBQ1Q7QUFFTyxTQUFTTixpQkFBaUJzQixRQUFRLEVBQUVqQixPQUFPO0lBQ2hELElBQU0sQUFBRWtCLE9BQVNkLGtCQUFTLENBQWxCYyxNQUNGQyxPQUFPRixVQUNQTixTQUFTWCxRQUFRb0IsWUFBWSxDQUFDRCxPQUM5QmxCLE9BQU8sTUFDUG9CLE9BQU8sSUFBSUgsS0FBS1AsUUFBUVEsTUFBTWxCO0lBRXBDLE9BQU9vQjtBQUNUO0FBRU8sU0FBUzVCLDJCQUEyQjZCLGFBQWEsRUFBRXRCLE9BQU87SUFDL0QsSUFBTSxBQUFFdUIsWUFBY25CLGtCQUFTLENBQXZCbUIsV0FDRkosT0FBT0csZUFDUEUsU0FBU3hCLFFBQVF5QixZQUFZLENBQUNOLE9BQzlCUixTQUFTWCxRQUFRMEIsY0FBYyxDQUFDRixTQUNoQ0csWUFBWSxJQUFJSixVQUFVWixRQUFRUSxNQUFNSztJQUU5QyxPQUFPRztBQUNUO0FBRU8sU0FBUy9CLG1CQUFtQmdDLFNBQVMsRUFBRTVCLE9BQU87SUFDbkQsSUFBTTZCLFFBQVFELFVBQVVFLEdBQUcsQ0FBQyxTQUFDYjtRQUNyQixJQUFNSSxPQUFPMUIsaUJBQWlCc0IsVUFBVWpCO1FBRXhDLE9BQU9xQjtJQUNUO0lBRU4sT0FBT1E7QUFDVDtBQUVPLFNBQVMvQixpQkFBaUJ1QixJQUFJLEVBQUVyQixPQUFPO0lBQzVDLElBQUkrQixXQUFXO0lBRWYsSUFBTWQsV0FBV0ksS0FBS1csT0FBTyxJQUN2QkMsdUJBQXVCaEIsU0FBU2lCLHVCQUF1QjtJQUU3RCxJQUFJRCx5QkFBeUIsTUFBTTtRQUNqQyxJQUFNLEFBQUVFLFdBQWEvQixrQkFBUyxDQUF0QitCLFVBQ0ZDLGVBQWVILHNCQUF1QixHQUFHO1FBRS9DRixXQUFXSSxTQUFTRSxnQkFBZ0IsQ0FBQ0QsY0FBY3BDO1FBRW5ELElBQU1DLE9BQU9vQixLQUFLaUIsT0FBTztRQUV6QlAsU0FBU1EsT0FBTyxDQUFDdEM7SUFDbkI7SUFFQSxPQUFPOEI7QUFDVDtBQUVPLFNBQVNyQyxnQkFBZ0JtQyxLQUFLO0lBQ25DLElBQU1XLGNBQWNYLE1BQU1ZLE1BQU0sQ0FBQyxTQUFDRCxhQUFhbkI7UUFDdkMsSUFBTXFCLGFBQWFyQixLQUFLc0IsU0FBUztRQUVqQ0gsY0FBYyxBQUFDQSxnQkFBZ0IsT0FDaEIsQUFBQyxHQUFrQkUsT0FBaEJGLGFBQVksTUFBZSxPQUFYRSxjQUNqQkE7UUFFakIsT0FBT0Y7SUFDVCxHQUFHLE9BQ0g3QixTQUFTLEFBQUMsSUFBZSxPQUFaNkIsYUFBWTtJQUUvQixPQUFPN0I7QUFDVCJ9