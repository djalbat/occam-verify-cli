"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyEquality;
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
var leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
function verifyEquality(equalityNode, proofContext) {
    var equalityVerified = false;
    proofContext.begin(equalityNode);
    var equalityString = (0, _string.nodeAsString)(equalityNode);
    proofContext.debug("Verifying the '".concat(equalityString, "' equality..."));
    var types = [], context = proofContext, leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), leftTermVerified = (0, _term.default)(leftTermNode, types, context), rightTermVerified = (0, _term.default)(rightTermNode, types, context);
    if (leftTermVerified && rightTermVerified) {
        var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftType = firstType, rightType = secondType, leftTermString = (0, _string.nodeAsString)(leftTermNode), rightTermString = (0, _string.nodeAsString)(rightTermNode);
        if (leftType === null && rightType === null) {
            proofContext.error("The types of the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms are both undefined and therefore the terms cannot be equated."));
        } else if (rightType === null) {
            var type = leftType, termNode = rightTermNode, variable = addVariable(type, termNode, proofContext);
            if (variable !== null) {
                var leftTypeName = leftType.getName();
                proofContext.info("The '".concat(rightTermString, "' variable has been given the '").concat(leftTypeName, "' type."));
                equalityVerified = true;
            }
        } else if (leftType === null) {
            var type1 = rightType, termNode1 = leftType, variable1 = addVariable(type1, termNode1, proofContext);
            if (variable1 !== null) {
                var rightTypeName = rightType.getName();
                proofContext.info("The '".concat(rightTermString, "' variable has been given the '").concat(rightTypeName, "' type."));
                equalityVerified = true;
            }
        } else {
            var leftTypeMatchesRightType = leftType.match(rightType);
            if (!leftTypeMatchesRightType) {
                proofContext.error("The types of the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms do not match and therefore the terms cannot be equated."));
            } else {
                var derived = proofContext.isDerived();
                if (!derived) {
                    equalityVerified = true;
                } else {
                    var equality = _equality.default.fromEqualityNode(equalityNode), proofSteps = proofContext.getProofSteps(), equalities = equalitiesFromProofSteps(proofSteps), equalityEquates = equality.equate(equalities, proofContext);
                    equalityVerified = equalityEquates; ///
                }
            }
        }
    }
    if (equalityVerified) {
        proofContext.info("Verified the '".concat(equalityString, "' equality."));
    }
    equalityVerified ? proofContext.complete(equalityNode) : proofContext.halt(equalityNode);
    return equalityVerified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBNQVhJTVVNX0lOREVYRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICBwcm9vZkNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSBwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICBsZWZ0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICBpZiAobGVmdFRlcm1WZXJpZmllZCAmJiByaWdodFRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICBsZWZ0VHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgcmlnaHRUeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgbGVmdFRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcocmlnaHRUZXJtTm9kZSk7XG5cbiAgICBpZiAoKGxlZnRUeXBlID09PSBudWxsKSAmJiAocmlnaHRUeXBlID09PSBudWxsKSkge1xuICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgdHlwZXMgb2YgdGhlICcke2xlZnRUZXJtU3RyaW5nfScgYW5kICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm1zIGFyZSBib3RoIHVuZGVmaW5lZCBhbmQgdGhlcmVmb3JlIHRoZSB0ZXJtcyBjYW5ub3QgYmUgZXF1YXRlZC5gKTtcbiAgICB9IGVsc2UgaWYgKHJpZ2h0VHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IGxlZnRUeXBlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBhZGRWYXJpYWJsZSh0eXBlLCB0ZXJtTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxlZnRUeXBlTmFtZSA9IGxlZnRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuaW5mbyhgVGhlICcke3JpZ2h0VGVybVN0cmluZ30nIHZhcmlhYmxlIGhhcyBiZWVuIGdpdmVuIHRoZSAnJHtsZWZ0VHlwZU5hbWV9JyB0eXBlLmApO1xuXG4gICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGVmdFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSByaWdodFR5cGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlID0gbGVmdFR5cGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBhZGRWYXJpYWJsZSh0eXBlLCB0ZXJtTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0VHlwZU5hbWUgPSByaWdodFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5pbmZvKGBUaGUgJyR7cmlnaHRUZXJtU3RyaW5nfScgdmFyaWFibGUgaGFzIGJlZW4gZ2l2ZW4gdGhlICcke3JpZ2h0VHlwZU5hbWV9JyB0eXBlLmApO1xuXG4gICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VHlwZU1hdGNoZXNSaWdodFR5cGUgPSBsZWZ0VHlwZS5tYXRjaChyaWdodFR5cGUpO1xuXG4gICAgICBpZiAoIWxlZnRUeXBlTWF0Y2hlc1JpZ2h0VHlwZSkge1xuICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB0eXBlcyBvZiB0aGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBhbmQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybXMgZG8gbm90IG1hdGNoIGFuZCB0aGVyZWZvcmUgdGhlIHRlcm1zIGNhbm5vdCBiZSBlcXVhdGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVyaXZlZCA9IHByb29mQ29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgICAgICBpZiAoIWRlcml2ZWQpIHtcbiAgICAgICAgICBlcXVhbGl0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICAgICAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0Zyb21Qcm9vZlN0ZXBzKHByb29mU3RlcHMpLFxuICAgICAgICAgICAgICAgIGVxdWFsaXR5RXF1YXRlcyA9IGVxdWFsaXR5LmVxdWF0ZShlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IGVxdWFsaXR5RXF1YXRlczsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICBwcm9vZkNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gIH1cblxuICBlcXVhbGl0eVZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoZXF1YWxpdHlOb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChlcXVhbGl0eU5vZGUpO1xuXG4gIHJldHVybiBlcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBlcXVhbGl0aWVzRnJvbVByb29mU3RlcHMocHJvb2ZTdGVwcykge1xuICBjb25zdCBzdGFydCA9IC1NQVhJTVVNX0lOREVYRVNfTEVOR1RIOyAgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHByb29mU3RlcHMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBjb25zdCBlcXVhbGl0aWVzID0gcHJvb2ZTdGVwcy5yZWR1Y2UoKGVxdWFsaXRpZXMsIHByb29mU3RlcCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuXG5mdW5jdGlvbiBhZGRWYXJpYWJsZSh0eXBlLCB0ZXJtTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBwcm9vZkNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyk7XG5cbiAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGU7ICAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTsgIC8vL1xuXG4gICAgcHJvb2ZDb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlIiwicHJvb2ZDb250ZXh0IiwiZXF1YWxpdHlWZXJpZmllZCIsImJlZ2luIiwiZXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInR5cGVzIiwiY29udGV4dCIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInJpZ2h0VGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwibGVmdFR5cGUiLCJyaWdodFR5cGUiLCJsZWZ0VGVybVN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsImVycm9yIiwidHlwZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJhZGRWYXJpYWJsZSIsImxlZnRUeXBlTmFtZSIsImdldE5hbWUiLCJpbmZvIiwicmlnaHRUeXBlTmFtZSIsImxlZnRUeXBlTWF0Y2hlc1JpZ2h0VHlwZSIsIm1hdGNoIiwiZGVyaXZlZCIsImlzRGVyaXZlZCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tRXF1YWxpdHlOb2RlIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJlcXVhbGl0aWVzIiwiZXF1YWxpdGllc0Zyb21Qcm9vZlN0ZXBzIiwiZXF1YWxpdHlFcXVhdGVzIiwiZXF1YXRlIiwiY29tcGxldGUiLCJoYWx0Iiwic3RhcnQiLCJNQVhJTVVNX0lOREVYRVNfTEVOR1RIIiwic2xpY2UiLCJyZWR1Y2UiLCJwcm9vZlN0ZXAiLCJpbmRleCIsImZyb21Qcm9vZlN0ZXAiLCJwdXNoIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsIm5hbWUiLCJWYXJp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