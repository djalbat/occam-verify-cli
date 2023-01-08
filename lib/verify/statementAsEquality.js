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
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("../verify/term"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
var _array = require("../utilities/array");
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var specialNodeQuery = (0, _query.nodeQuery)("/statement/@special!"), leftTermNodeQuery = (0, _query.nodeQuery)("/statement/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/term[1]");
function verifyStatementAsEquality(statementNode, proofContext) {
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
                    var type = leftType, termNode = rightTermNode, variable = addVariable(type, termNode, proofContext);
                    if (variable !== null) {
                        var leftTypeName = leftType.getName();
                        proofContext.info("The '".concat(rightTermString, "' variable has been given the '").concat(leftTypeName, "' type."));
                        statementVerifiedAsEquality = true;
                    }
                } else if (leftType === null) {
                    var type1 = rightType, termNode1 = leftType, variable1 = addVariable(type1, termNode1, proofContext);
                    if (variable1 !== null) {
                        var rightTypeName = rightType.getName();
                        proofContext.info("The '".concat(rightTermString, "' variable has been given the '").concat(rightTypeName, "' type."));
                        statementVerifiedAsEquality = true;
                    }
                } else {
                    var leftTypeMatchesRightType = leftType.match(rightType);
                    if (!leftTypeMatchesRightType) {
                        proofContext.error("The types of the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms do not match and therefore the terms cannot be equated."));
                    } else {
                        var derived = proofContext.isDerived();
                        if (!derived) {
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
function addVariable(type, termNode, proofContext) {
    var variable = null;
    var variables = [], termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, proofContext);
    if (termVerifiedAsVariable) {
        var firstVariable = (0, _array.first)(variables);
        variable = firstVariable; ///
        var name = variable.getName();
        variable = _variable.default.fromTypeAndName(type, name); ///
        proofContext.addVariable(variable);
    }
    return variable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNFcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi9lcXVhbGl0eVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IEVRVUFMU19DSEFSQUNURVIsIE1BWElNVU1fSU5ERVhFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHNwZWNpYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L0BzcGVjaWFsIVwiKSxcbiAgICAgIGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBwcm9vZkNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgY29uc3Qgc3BlY2lhbE5vZGUgPSBzcGVjaWFsTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzcGVjaWFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHNwZWNpYWxOb2RlLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIGlmICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBFUVVBTFNfQ0hBUkFDVEVSKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgY29udGV4dCA9IHByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGVmdFRlcm1WZXJpZmllZCAmJiByaWdodFRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgICAgICBsZWZ0VHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VHlwZSA9IHNlY29uZFR5cGUsIC8vL1xuICAgICAgICAgICAgICBsZWZ0VGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcocmlnaHRUZXJtTm9kZSk7XG5cbiAgICAgICAgaWYgKChsZWZ0VHlwZSA9PT0gbnVsbCkgJiYgKHJpZ2h0VHlwZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB0eXBlcyBvZiB0aGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBhbmQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybXMgYXJlIGJvdGggdW5kZWZpbmVkIGFuZCB0aGVyZWZvcmUgdGhlIHRlcm1zIGNhbm5vdCBiZSBlcXVhdGVkLmApO1xuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0VHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBsZWZ0VHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBhZGRWYXJpYWJsZSh0eXBlLCB0ZXJtTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFR5cGVOYW1lID0gbGVmdFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICBwcm9vZkNvbnRleHQuaW5mbyhgVGhlICcke3JpZ2h0VGVybVN0cmluZ30nIHZhcmlhYmxlIGhhcyBiZWVuIGdpdmVuIHRoZSAnJHtsZWZ0VHlwZU5hbWV9JyB0eXBlLmApO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0VHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSByaWdodFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZSA9IGxlZnRUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGFkZFZhcmlhYmxlKHR5cGUsIHRlcm1Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByaWdodFR5cGVOYW1lID0gcmlnaHRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcHJvb2ZDb250ZXh0LmluZm8oYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyB2YXJpYWJsZSBoYXMgYmVlbiBnaXZlbiB0aGUgJyR7cmlnaHRUeXBlTmFtZX0nIHR5cGUuYCk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxlZnRUeXBlTWF0Y2hlc1JpZ2h0VHlwZSA9IGxlZnRUeXBlLm1hdGNoKHJpZ2h0VHlwZSk7XG5cbiAgICAgICAgICBpZiAoIWxlZnRUeXBlTWF0Y2hlc1JpZ2h0VHlwZSkge1xuICAgICAgICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgdHlwZXMgb2YgdGhlICcke2xlZnRUZXJtU3RyaW5nfScgYW5kICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm1zIGRvIG5vdCBtYXRjaCBhbmQgdGhlcmVmb3JlIHRoZSB0ZXJtcyBjYW5ub3QgYmUgZXF1YXRlZC5gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVyaXZlZCA9IHByb29mQ29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCFkZXJpdmVkKSB7XG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgICAgIHByb29mU3RlcHMgPSBwcm9vZkNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgICAgICAgICAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0Zyb21Qcm9vZlN0ZXBzKHByb29mU3RlcHMpLFxuICAgICAgICAgICAgICAgICAgICBlcXVhbGl0eUVxdWF0ZXMgPSBlcXVhbGl0eS5lcXVhdGUoZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eUVxdWF0ZXM7ICAvLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgcHJvb2ZDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgfVxuXG4gIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIGVxdWFsaXRpZXNGcm9tUHJvb2ZTdGVwcyhwcm9vZlN0ZXBzKSB7XG4gIGNvbnN0IHN0YXJ0ID0gLU1BWElNVU1fSU5ERVhFU19MRU5HVEg7ICAvLy9cblxuICBwcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGNvbnN0IGVxdWFsaXRpZXMgPSBwcm9vZlN0ZXBzLnJlZHVjZSgoZXF1YWxpdGllcywgcHJvb2ZTdGVwLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBlcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFZhcmlhYmxlKHR5cGUsIHRlcm1Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIHByb29mQ29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKTtcblxuICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZTsgIC8vL1xuXG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpOyAgLy8vXG5cbiAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJzcGVjaWFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiYmVnaW4iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInNwZWNpYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJFUVVBTFNfQ0hBUkFDVEVSIiwidHlwZXMiLCJjb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInNlY29uZFR5cGUiLCJzZWNvbmQiLCJsZWZ0VHlwZSIsInJpZ2h0VHlwZSIsImxlZnRUZXJtU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwiZXJyb3IiLCJ0eXBlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImFkZFZhcmlhYmxlIiwibGVmdFR5cGVOYW1lIiwiZ2V0TmFtZSIsImluZm8iLCJyaWdodFR5cGVOYW1lIiwibGVmdFR5cGVNYXRjaGVzUmlnaHRUeXBlIiwibWF0Y2giLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJlcXVhbGl0aWVzIiwiZXF1YWxpdGllc0Zyb21Qcm9vZlN0ZXBzIiwiZXF1YWxpdHlFcXVhdGVzIiwiZXF1YXRlIiwiY29tcGxldGUiLCJoYWx0Iiwic3RhcnQiLCJNQVhJTVVNX0lOREVYRVNfTEVOR1RIIiwic2xpY2UiLCJyZWR1Y2UiLCJwcm9vZlN0ZXAiLCJpbmRleCIsImZyb21Qcm9vZlN0ZXAiLCJwdXNoIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsIm5hbWUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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