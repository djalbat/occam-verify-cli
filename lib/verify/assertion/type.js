"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTypeAssertion;
    }
});
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../../variable"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("../../verify/term"));
var _array = require("../../utilities/array");
var _string = require("../../utilities/string");
var _query = require("../../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, proofContext) {
    var typeAssertionVerified = false;
    proofContext.begin(typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = proofContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        proofContext.error("The ".concat(typeName, " type is not present."));
    } else {
        var derived = proofContext.isDerived();
        if (derived) {
            debugger;
        } else {
            var types = [], values = [], context = proofContext, termNode = termNodeQuery(typeAssertionNode), termString = (0, _string.nodeAsString)(termNode), termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, types, values, context);
            if (termVerifiedAsVariable) {
                var firstValue = (0, _array.first)(values), variableName = termString, value = firstValue; ///
                if (value !== undefined) {
                    proofContext.error("The value of the ".concat(variableName, " variable is not undefined."));
                } else {
                    var type = proofContext.findTypeByTypeName(typeName), firstType = (0, _array.first)(types), variableType = firstType, typeEqualToOrSubTypeOfVariableType = type.isEqualToOrSubTypeOf(variableType);
                    if (!typeEqualToOrSubTypeOfVariableType) {
                        proofContext.error("The asserted type of the ".concat(variableName, " variable is not equal to or a sub-type of its declared type."));
                    } else {
                        var name = variableName, variable = _variable.default.fromTypeAndName(type, name);
                        proofContext.addVariable(variable);
                        typeAssertionVerified = true;
                    }
                }
            } else {
                var termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, values, context);
                if (termVerifiedAgainstConstructors) {
                    var type1 = proofContext.findTypeByTypeName(typeName), firstType1 = (0, _array.first)(types), termType = firstType1, typeEqualToOrSubTypeOfTermType = type1.isEqualToOrSubTypeOf(termType);
                    if (!typeEqualToOrSubTypeOfTermType) {
                        proofContext.error("The asserted type of the '".concat(termString, "' term is not equal to or a sub-type of its declared type."));
                    } else {
                        typeAssertionVerified = true;
                    }
                }
            }
        }
    }
    typeAssertionVerified ? proofContext.complete(typeAssertionNode) : proofContext.halt(typeAssertionNode);
    return typeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUsIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBwcm9vZkNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBwcm9vZkNvbnRleHQuaXNEZXJpdmVkKCk7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgZGVidWdnZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICAgICAgY29udGV4dCA9IHByb29mQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBmaXJzdFZhbHVlID0gZmlyc3QodmFsdWVzKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdGVybVN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gZmlyc3RWYWx1ZTsgLy8vXG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB2YWx1ZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCB1bmRlZmluZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb29mQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICBpZiAoIXR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIHByb29mQ29udGV4dC5lcnJvcihgVGhlIGFzc2VydGVkIHR5cGUgb2YgdGhlICR7dmFyaWFibGVOYW1lfSB2YXJpYWJsZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiBpdHMgZGVjbGFyZWQgdHlwZS5gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIHByb29mQ29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb29mQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAoIXR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgYXNzZXJ0ZWQgdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgaXRzIGRlY2xhcmVkIHR5cGUuYCk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZSh0eXBlQXNzZXJ0aW9uTm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJwcm9vZkNvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJiZWdpbiIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsImRlcml2ZWQiLCJpc0Rlcml2ZWQiLCJ0eXBlcyIsInZhbHVlcyIsImNvbnRleHQiLCJ0ZXJtTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJmaXJzdFZhbHVlIiwiZmlyc3QiLCJ2YXJpYWJsZU5hbWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJuYW1lIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImFkZFZhcmlhYmxlIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7NkRBWEg7MERBQ0U7cUJBRUQ7c0JBQ087cUJBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHaEQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLG9CQUFvQkksaUJBQWlCLEVBQUVDLFlBQVksRUFBRTtJQUMzRSxJQUFJQyx3QkFBd0IsS0FBSztJQUVqQ0QsYUFBYUUsS0FBSyxDQUFDSDtJQUVuQixJQUFNSSxXQUFXTCxjQUFjQyxvQkFDekJLLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csY0FBY04sYUFBYU8sdUJBQXVCLENBQUNIO0lBRXpELElBQUksQ0FBQ0UsYUFBYTtRQUNoQk4sYUFBYVEsS0FBSyxDQUFDLEFBQUMsT0FBZSxPQUFUSixVQUFTO0lBQ3JDLE9BQU87UUFDTCxJQUFNSyxVQUFVVCxhQUFhVSxTQUFTO1FBRXRDLElBQUlELFNBQVM7WUFDWCxRQUFRO1FBQ1YsT0FBTztZQUNMLElBQU1FLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsVUFBVWIsY0FDVmMsV0FBV2xCLGNBQWNHLG9CQUN6QmdCLGFBQWFDLElBQUFBLG9CQUFZLEVBQUNGLFdBQzFCRyx5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDSixVQUFVSCxPQUFPQyxRQUFRQztZQUU3RSxJQUFJSSx3QkFBd0I7Z0JBQzFCLElBQU1FLGFBQWFDLElBQUFBLFlBQUssRUFBQ1IsU0FDbkJTLGVBQWVOLFlBQ2ZPLFFBQVFILFlBQVksR0FBRztnQkFFN0IsSUFBSUcsVUFBVUMsV0FBVztvQkFDdkJ2QixhQUFhUSxLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYmEsY0FBYTtnQkFDdEQsT0FBTztvQkFDTCxJQUFNRyxPQUFPeEIsYUFBYXlCLGtCQUFrQixDQUFDckIsV0FDdkNzQixZQUFZTixJQUFBQSxZQUFLLEVBQUNULFFBQ2xCZ0IsZUFBZUQsV0FDZkUscUNBQXFDSixLQUFLSyxvQkFBb0IsQ0FBQ0Y7b0JBRXJFLElBQUksQ0FBQ0Msb0NBQW9DO3dCQUN2QzVCLGFBQWFRLEtBQUssQ0FBQyxBQUFDLDRCQUF3QyxPQUFiYSxjQUFhO29CQUM5RCxPQUFPO3dCQUNMLElBQU1TLE9BQU9ULGNBQ1BVLFdBQVdDLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ1QsTUFBTU07d0JBRWhEOUIsYUFBYWtDLFdBQVcsQ0FBQ0g7d0JBRXpCOUIsd0JBQXdCLElBQUk7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILE9BQU87Z0JBQ0wsSUFBTWtDLGtDQUFrQ0MsSUFBQUEsbUNBQTZCLEVBQUN0QixVQUFVSCxPQUFPQyxRQUFRQztnQkFFL0YsSUFBSXNCLGlDQUFpQztvQkFDbkMsSUFBTVgsUUFBT3hCLGFBQWF5QixrQkFBa0IsQ0FBQ3JCLFdBQ3ZDc0IsYUFBWU4sSUFBQUEsWUFBSyxFQUFDVCxRQUNsQjBCLFdBQVdYLFlBQ1hZLGlDQUFpQ2QsTUFBS0ssb0JBQW9CLENBQUNRO29CQUVqRSxJQUFJLENBQUNDLGdDQUFnQzt3QkFDbkN0QyxhQUFhUSxLQUFLLENBQUMsQUFBQyw2QkFBdUMsT0FBWE8sWUFBVztvQkFDN0QsT0FBTzt3QkFFTGQsd0JBQXdCLElBQUk7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEQSx3QkFDRUQsYUFBYXVDLFFBQVEsQ0FBQ3hDLHFCQUNwQkMsYUFBYXdDLElBQUksQ0FBQ3pDLGtCQUFrQjtJQUV4QyxPQUFPRTtBQUNUIn0=