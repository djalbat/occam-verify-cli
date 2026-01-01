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
    var Statement = _ontology.default.Statement, node = statementNode, string = context.nodeAsString(node), statement = new Statement(string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9vbnRvbG9neS90eXBlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHR5cGUgPSBiYXNlVHlwZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gbm9taW5hbFR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICB2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICR7dGVybVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybXNTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21UZXJtcyIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidmFyaWFibGVGcm9tVGVybSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJiYXNlVHlwZSIsIlR5cGUiLCJvbnRvbG9neSIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwic3RyaW5nIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwidGVybU5vZGVzIiwidGVybXMiLCJtYXAiLCJ2YXJpYWJsZSIsImdldE5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0ZXJtc1N0cmluZyIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVDZ0JBO2VBQUFBOztRQXVDQUM7ZUFBQUE7O1FBakRBQztlQUFBQTs7UUFtQkFDO2VBQUFBOztRQTFDQUM7ZUFBQUE7O1FBb0RBQztlQUFBQTs7OytEQXhESztvQkFFSTs7Ozs7O0FBRWxCLFNBQVNELGlCQUFpQkUsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQUlDO0lBRUosSUFBSUYsYUFBYSxNQUFNO1FBQ3JCRSxPQUFPQyxjQUFRO0lBQ2pCLE9BQU87UUFDTCxJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxXQUFXTixTQUFTTyxXQUFXLElBQy9CQyxpQkFBaUJSLFNBQVNTLGlCQUFpQixJQUMzQ0Msa0JBQWtCVixTQUFTVyxrQkFBa0IsSUFDN0NDLFNBQVNGLGlCQUNURyxPQUFPUCxVQUNQUSxhQUFhTixnQkFDYk8sYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWM7UUFFcEJmLE9BQU8sSUFBSUUsS0FBS1EsUUFBUUMsTUFBTUMsWUFBWUMsWUFBWUMsWUFBWUM7SUFDcEU7SUFFQSxPQUFPZjtBQUNUO0FBRU8sU0FBU04saUJBQWlCc0IsUUFBUSxFQUFFakIsT0FBTztJQUNoRCxJQUFNLEFBQUVrQixPQUFTZCxpQkFBUSxDQUFqQmMsTUFDRkMsT0FBT0YsVUFDUE4sU0FBU1gsUUFBUW9CLFlBQVksQ0FBQ0QsT0FDOUJsQixPQUFPLE1BQ1BvQixPQUFPLElBQUlILEtBQUtQLFFBQVFRLE1BQU1sQjtJQUVwQyxPQUFPb0I7QUFDVDtBQUVPLFNBQVM1QiwyQkFBMkI2QixhQUFhLEVBQUV0QixPQUFPO0lBQy9ELElBQU0sQUFBRXVCLFlBQWNuQixpQkFBUSxDQUF0Qm1CLFdBQ0ZKLE9BQU9HLGVBQ1BYLFNBQVNYLFFBQVFvQixZQUFZLENBQUNELE9BQzlCSyxZQUFZLElBQUlELFVBQVVaLFFBQVFRO0lBRXhDLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTNUIsbUJBQW1CNkIsU0FBUyxFQUFFekIsT0FBTztJQUNuRCxJQUFNMEIsUUFBUUQsVUFBVUUsR0FBRyxDQUFDLFNBQUNWO1FBQ3JCLElBQU1JLE9BQU8xQixpQkFBaUJzQixVQUFVakI7UUFFeEMsT0FBT3FCO0lBQ1Q7SUFFTixPQUFPSztBQUNUO0FBRU8sU0FBUzVCLGlCQUFpQnVCLElBQUksRUFBRXJCLE9BQU87SUFDNUMsSUFBSTRCLFdBQVc7SUFFZixJQUFNWCxXQUFXSSxLQUFLUSxPQUFPLElBQ3ZCQyx1QkFBdUJiLFNBQVNjLHVCQUF1QjtJQUU3RCxJQUFJRCx5QkFBeUIsTUFBTTtRQUNqQyxJQUFNLEFBQUVFLFdBQWE1QixpQkFBUSxDQUFyQjRCLFVBQ0ZDLGVBQWVILHNCQUF1QixHQUFHO1FBRS9DRixXQUFXSSxTQUFTRSxnQkFBZ0IsQ0FBQ0QsY0FBY2pDO1FBRW5ELElBQU1DLE9BQU9vQixLQUFLYyxPQUFPO1FBRXpCUCxTQUFTUSxPQUFPLENBQUNuQztJQUNuQjtJQUVBLE9BQU8yQjtBQUNUO0FBRU8sU0FBU2xDLGdCQUFnQmdDLEtBQUs7SUFDbkMsSUFBTVcsY0FBY1gsTUFBTVksTUFBTSxDQUFDLFNBQUNELGFBQWFoQjtRQUN2QyxJQUFNa0IsYUFBYWxCLEtBQUttQixTQUFTO1FBRWpDSCxjQUFjLEFBQUNBLGdCQUFnQixPQUNoQixBQUFDLEdBQWtCRSxPQUFoQkYsYUFBWSxNQUFlLE9BQVhFLGNBQ2pCQTtRQUVqQixPQUFPRjtJQUNULEdBQUcsT0FDSDFCLFNBQVMsQUFBQyxJQUFlLE9BQVowQixhQUFZO0lBRS9CLE9BQU8xQjtBQUNUIn0=