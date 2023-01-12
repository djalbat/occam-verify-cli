"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatementAsEquality;
    }
});
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
var _term = /*#__PURE__*/ _interopRequireDefault(require("../verify/term"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
var _array = require("../utilities/array");
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var specialNodeQuery = (0, _query.nodeQuery)("/statement/@special!"), leftTermNodeQuery = (0, _query.nodeQuery)("/statement/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/term[1]");
function verifyStatementAsEquality(statementNode, qualified, proofContext) {
    var statementVerifiedAsEquality = false;
    proofContext.begin(statementNode);
    var statementString = (0, _string.nodeAsString)(statementNode);
    proofContext.debug("Verifying the '".concat(statementString, "' statement as an equality..."));
    var specialNode = specialNodeQuery(statementNode);
    if (specialNode !== null) {
        var terminalNode = specialNode, terminalNodeContent = terminalNode.getContent();
        if (terminalNodeContent === _constants.EQUALS_CHARACTER) {
            var types = [], context = proofContext, leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), leftTermVerified = (0, _term.default)(leftTermNode, types, context), rightTermVerified = (0, _term.default)(rightTermNode, types, context);
            if (leftTermVerified && rightTermVerified) {
                var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftType = firstType, rightType = secondType, leftTermString = (0, _string.nodeAsString)(leftTermNode), rightTermString = (0, _string.nodeAsString)(rightTermNode);
                if (leftType === null && rightType === null) {
                    proofContext.error("The types of the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms are both undefined and therefore the terms cannot be equated."));
                } else if (rightType === null) {
                    proofContext.info("The type of the right '".concat(rightTermString, "' term is undefined and therefore the types cannot be equated."));
                } else if (leftType === null) {
                    proofContext.info("The type of the left '".concat(leftTermString, "' term is undefined and therefore the types cannot be equated."));
                } else {
                    var leftTypeMatchesRightType = leftType.match(rightType);
                    if (!leftTypeMatchesRightType) {
                        proofContext.error("The types of the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms do not match and therefore the terms cannot be equated."));
                    } else {
                        if (!qualified) {
                            statementVerifiedAsEquality = true;
                        } else {
                            var equality = _equality.default.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), proofSteps = proofContext.getProofSteps(), equalities = equalitiesFromProofSteps(proofSteps), equalityEquates = equality.equate(equalities, proofContext);
                            statementVerifiedAsEquality = equalityEquates; ///
                        }
                    }
                }
            }
        }
    }
    if (statementVerifiedAsEquality) {
        proofContext.info("Verified the '".concat(statementString, "' equality."));
    }
    statementVerifiedAsEquality ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerifiedAsEquality;
}
function equalitiesFromProofSteps(proofSteps) {
    var start = -_constants.MAXIMUM_INDEXES_LENGTH; ///
    proofSteps = proofSteps.slice(start); ///
    var equalities = proofSteps.reduce(function(equalities, proofStep, index) {
        var equality = _equality.default.fromProofStep(proofStep);
        if (equality !== null) {
            equalities.push(equality);
        }
        return equalities;
    }, []);
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNFcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRVFVQUxTX0NIQVJBQ1RFUiwgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3Qgc3BlY2lhbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvQHNwZWNpYWwhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm1bMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgcXVhbGlmaWVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gIGNvbnN0IHNwZWNpYWxOb2RlID0gc3BlY2lhbE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3BlY2lhbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBzcGVjaWFsTm9kZSwgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBpZiAodGVybWluYWxOb2RlQ29udGVudCA9PT0gRVFVQUxTX0NIQVJBQ1RFUikge1xuICAgICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWQgJiYgcmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICAgICAgbGVmdFR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpO1xuXG4gICAgICAgIGlmICgobGVmdFR5cGUgPT09IG51bGwpICYmIChyaWdodFR5cGUgPT09IG51bGwpKSB7XG4gICAgICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgdHlwZXMgb2YgdGhlICcke2xlZnRUZXJtU3RyaW5nfScgYW5kICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm1zIGFyZSBib3RoIHVuZGVmaW5lZCBhbmQgdGhlcmVmb3JlIHRoZSB0ZXJtcyBjYW5ub3QgYmUgZXF1YXRlZC5gKTtcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodFR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwcm9vZkNvbnRleHQuaW5mbyhgVGhlIHR5cGUgb2YgdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0gaXMgdW5kZWZpbmVkIGFuZCB0aGVyZWZvcmUgdGhlIHR5cGVzIGNhbm5vdCBiZSBlcXVhdGVkLmApO1xuICAgICAgICB9IGVsc2UgaWYgKGxlZnRUeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgcHJvb2ZDb250ZXh0LmluZm8oYFRoZSB0eXBlIG9mIHRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSBpcyB1bmRlZmluZWQgYW5kIHRoZXJlZm9yZSB0aGUgdHlwZXMgY2Fubm90IGJlIGVxdWF0ZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGVmdFR5cGVNYXRjaGVzUmlnaHRUeXBlID0gbGVmdFR5cGUubWF0Y2gocmlnaHRUeXBlKTtcblxuICAgICAgICAgIGlmICghbGVmdFR5cGVNYXRjaGVzUmlnaHRUeXBlKSB7XG4gICAgICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB0eXBlcyBvZiB0aGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBhbmQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybXMgZG8gbm90IG1hdGNoIGFuZCB0aGVyZWZvcmUgdGhlIHRlcm1zIGNhbm5vdCBiZSBlcXVhdGVkLmApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXF1YWxpZmllZCkge1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tUHJvb2ZTdGVwcyhwcm9vZlN0ZXBzKSxcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxpdHlFcXVhdGVzID0gZXF1YWxpdHkuZXF1YXRlKGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlFcXVhdGVzOyAgLy8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gIH1cblxuICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShzdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiBlcXVhbGl0aWVzRnJvbVByb29mU3RlcHMocHJvb2ZTdGVwcykge1xuICBjb25zdCBzdGFydCA9IC1NQVhJTVVNX0lOREVYRVNfTEVOR1RIOyAgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHByb29mU3RlcHMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBjb25zdCBlcXVhbGl0aWVzID0gcHJvb2ZTdGVwcy5yZWR1Y2UoKGVxdWFsaXRpZXMsIHByb29mU3RlcCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJzcGVjaWFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiYmVnaW4iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInNwZWNpYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJFUVVBTFNfQ0hBUkFDVEVSIiwidHlwZXMiLCJjb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInNlY29uZFR5cGUiLCJzZWNvbmQiLCJsZWZ0VHlwZSIsInJpZ2h0VHlwZSIsImxlZnRUZXJtU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwiZXJyb3IiLCJpbmZvIiwibGVmdFR5cGVNYXRjaGVzUmlnaHRUeXBlIiwibWF0Y2giLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsImVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzRnJvbVByb29mU3RlcHMiLCJlcXVhbGl0eUVxdWF0ZXMiLCJlcXVhdGUiLCJjb21wbGV0ZSIsImhhbHQiLCJzdGFydCIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJzbGljZSIsInJlZHVjZSIsInByb29mU3RlcCIsImluZGV4IiwiZnJvbVByb29mU3RlcCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBd0JBOzs7NkRBWkg7eURBQ0U7cUJBRUc7c0JBQ0c7cUJBQ0M7eUJBQzJCOzs7Ozs7QUFFekQsSUFBTUMsbUJBQW1CQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUM3QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHVCQUM5QkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLDBCQUEwQkssYUFBYSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRTtJQUN4RixJQUFJQyw4QkFBOEIsS0FBSztJQUV2Q0QsYUFBYUUsS0FBSyxDQUFDSjtJQUVuQixJQUFNSyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUNOO0lBRXJDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQjtJQUVyRCxJQUFNRyxjQUFjWixpQkFBaUJJO0lBRXJDLElBQUlRLGdCQUFnQixJQUFJLEVBQUU7UUFDeEIsSUFBTUMsZUFBZUQsYUFDZkUsc0JBQXNCRCxhQUFhRSxVQUFVO1FBRW5ELElBQUlELHdCQUF3QkUsMkJBQWdCLEVBQUU7WUFDNUMsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLFVBQVVaLGNBQ1Zh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