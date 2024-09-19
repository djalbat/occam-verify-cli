"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resolveSubstitutions;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../resolve/substitution"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resolveSubstitutions(substitutions, fileContextA, localContextB) {
    var substitutionsResolved = substitutions.areResolved();
    if (!substitutionsResolved) {
        var localContextA = _local.default.fromFileContext(fileContextA), metavariableNodes = substitutions.getMetavariableNodes();
        substitutionsResolved = metavariableNodes.every(function(metavariableNode) {
            var complexSubstitutions = substitutions.findComplexSubstitutionsByMetavariableNode(metavariableNode), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
                var substitution = complexSubstitution, complexSubstitutionResolved = (0, _substitution.default)(substitution, substitutions, localContextA, localContextB);
                if (complexSubstitutionResolved) {
                    return true;
                }
            });
            if (complexSubstitutionsResolved) {
                return true;
            }
        });
    }
    return substitutionsResolved;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlL3N1YnN0aXR1dGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCByZXNvbHZlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9yZXNvbHZlL3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgbGV0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICBpZiAoIXN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBzdWJzdGl0dXRpb25zLmdldE1ldGF2YXJpYWJsZU5vZGVzKCk7XG5cbiAgICBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gcmVzb2x2ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNSZXNvbHZlZDtcbn1cbiJdLCJuYW1lcyI6WyJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsImV2ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlIiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7NERBSEM7bUVBQ087Ozs7OztBQUVqQixTQUFTQSxxQkFBcUJDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhO0lBQ3JGLElBQUlDLHdCQUF3QkgsY0FBY0ksV0FBVztJQUVyRCxJQUFJLENBQUNELHVCQUF1QjtRQUMxQixJQUFNRSxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDTixlQUM3Q08sb0JBQW9CUixjQUFjUyxvQkFBb0I7UUFFNUROLHdCQUF3Qkssa0JBQWtCRSxLQUFLLENBQUMsU0FBQ0M7WUFDL0MsSUFBTUMsdUJBQXVCWixjQUFjYSwwQ0FBMEMsQ0FBQ0YsbUJBQ2hGRywrQkFBK0JGLHFCQUFxQkcsaUJBQWlCLENBQUMsU0FBQ0M7Z0JBQ3JFLElBQU1DLGVBQWVELHFCQUNmRSw4QkFBOEJDLElBQUFBLHFCQUFtQixFQUFDRixjQUFjakIsZUFBZUssZUFBZUg7Z0JBRXBHLElBQUlnQiw2QkFBNkI7b0JBQy9CLE9BQU87Z0JBQ1Q7WUFDRjtZQUVOLElBQUlKLDhCQUE4QjtnQkFDaEMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9YO0FBQ1QifQ==