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
    get stringFromTerms () {
        return stringFromTerms;
    },
    get variableFromTerm () {
        return variableFromTerm;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _type = require("../element/type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function variableFromTerm(term, context) {
    var variable = null;
    var termNode = term.getNode(), singularVariableNode = termNode.getSingularVariableNode();
    if (singularVariableNode !== null) {
        var Variable = _elements.default.Variable, variableNode = singularVariableNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICB2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICR7dGVybVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybXNTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tVGVybXMiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybSIsImNvbnRleHQiLCJ2YXJpYWJsZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwidmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsInRlcm1zIiwidGVybXNTdHJpbmciLCJyZWR1Y2UiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEwQmdCQTtlQUFBQTs7UUFwQkFDO2VBQUFBOzs7K0RBSks7b0JBRUk7Ozs7OztBQUVsQixTQUFTQSxpQkFBaUJDLElBQUksRUFBRUMsT0FBTztJQUM1QyxJQUFJQyxXQUFXO0lBRWYsSUFBTUMsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsdUJBQXVCRixTQUFTRyx1QkFBdUI7SUFFN0QsSUFBSUQseUJBQXlCLE1BQU07UUFDakMsSUFBTSxBQUFFRSxXQUFhQyxpQkFBUSxDQUFyQkQsVUFDRkUsZUFBZUosc0JBQXVCLEdBQUc7UUFFL0NILFdBQVdLLFNBQVNHLGdCQUFnQixDQUFDRCxjQUFjUjtRQUVuRCxJQUFNVSxPQUFPWCxLQUFLWSxPQUFPO1FBRXpCVixTQUFTVyxPQUFPLENBQUNGO0lBQ25CO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLFNBQVNKLGdCQUFnQmdCLEtBQUs7SUFDbkMsSUFBTUMsY0FBY0QsTUFBTUUsTUFBTSxDQUFDLFNBQUNELGFBQWFmO1FBQ3ZDLElBQU1pQixhQUFhakIsS0FBS2tCLFNBQVM7UUFFakNILGNBQWMsQUFBQ0EsZ0JBQWdCLE9BQ2hCLEFBQUMsR0FBa0JFLE9BQWhCRixhQUFZLE1BQWUsT0FBWEUsY0FDakJBO1FBRWpCLE9BQU9GO0lBQ1QsR0FBRyxPQUNISSxTQUFTLEFBQUMsSUFBZSxPQUFaSixhQUFZO0lBRS9CLE9BQU9JO0FBQ1QifQ==