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
var _term = /*#__PURE__*/ _interopRequireDefault(require("../verify/term"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var firstTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), secondTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
function verifyEquality(equalityNode, context) {
    var equalityVerified = false;
    var types = [], values = [], firstTermNode = firstTermNodeQuery(equalityNode), secondTermNode = secondTermNodeQuery(equalityNode), firstTermVerified = (0, _term.default)(firstTermNode, types, values, context), secondTermVerified = (0, _term.default)(secondTermNode, types, values, context);
    if (firstTermVerified && secondTermVerified) {
        var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType = firstType.isEqualToSubTypeOfOrSuperTypeOf(secondType);
        if (firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType) {
            var derived = context.isDerived();
            if (derived) {
                var termsEqual = equateTerms(firstTermNode, secondTermNode, context);
                if (termsEqual) {
                    equalityVerified = true;
                }
            } else {
                equalityVerified = true;
            }
        }
    }
    return equalityVerified;
}
function equateTerms(firstTermNode, secondTermNode, context) {
    var termsEqual = true; ///
    debugger;
    return termsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBmaXJzdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHNlY29uZFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgIGZpcnN0VGVybU5vZGUgPSBmaXJzdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgc2Vjb25kVGVybU5vZGUgPSBzZWNvbmRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgIGZpcnN0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShmaXJzdFRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzLCBjb250ZXh0KSxcbiAgICAgICAgc2Vjb25kVGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShzZWNvbmRUZXJtTm9kZSwgdHlwZXMsIHZhbHVlcywgY29udGV4dCk7XG5cbiAgaWYgKGZpcnN0VGVybVZlcmlmaWVkICYmIHNlY29uZFRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICBmaXJzdFR5cGVFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZlNlY29uZFR5cGUgPSBmaXJzdFR5cGUuaXNFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZihzZWNvbmRUeXBlKTtcblxuICAgIGlmIChmaXJzdFR5cGVFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZlNlY29uZFR5cGUpIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBjb250ZXh0LmlzRGVyaXZlZCgpO1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCB0ZXJtc0VxdWFsID0gZXF1YXRlVGVybXMoZmlyc3RUZXJtTm9kZSwgc2Vjb25kVGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtc0VxdWFsKSB7XG4gICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtcyhmaXJzdFRlcm1Ob2RlLCBzZWNvbmRUZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybXNFcXVhbCA9IHRydWU7ICAvLy9cblxuICBkZWJ1Z2dlclxuXG4gIHJldHVybiB0ZXJtc0VxdWFsO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsImZpcnN0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInNlY29uZFRlcm1Ob2RlUXVlcnkiLCJlcXVhbGl0eU5vZGUiLCJjb250ZXh0IiwiZXF1YWxpdHlWZXJpZmllZCIsInR5cGVzIiwidmFsdWVzIiwiZmlyc3RUZXJtTm9kZSIsInNlY29uZFRlcm1Ob2RlIiwiZmlyc3RUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwic2Vjb25kVGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwiZmlyc3RUeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZTZWNvbmRUeXBlIiwiaXNFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZiIsImRlcml2ZWQiLCJpc0Rlcml2ZWQiLCJ0ZXJtc0VxdWFsIiwiZXF1YXRlVGVybXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7eURBUkQ7cUJBRUc7cUJBQ0k7Ozs7OztBQUU5QixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0YsZUFBZUksWUFBWSxFQUFFQyxPQUFPLEVBQUU7SUFDNUQsSUFBSUMsbUJBQW1CLEtBQUs7SUFFNUIsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLFNBQVMsRUFBRSxFQUNYQyxnQkFBZ0JSLG1CQUFtQkcsZUFDbkNNLGlCQUFpQlAsb0JBQW9CQyxlQUNyQ08sb0JBQW9CQyxJQUFBQSxhQUFVLEVBQUNILGVBQWVGLE9BQU9DLFFBQVFILFVBQzdEUSxxQkFBcUJELElBQUFBLGFBQVUsRUFBQ0YsZ0JBQWdCSCxPQUFPQyxRQUFRSDtJQUVyRSxJQUFJTSxxQkFBcUJFLG9CQUFvQjtRQUMzQyxJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNSLFFBQ2xCUyxhQUFhQyxJQUFBQSxhQUFNLEVBQUNWLFFBQ3BCVyxtREFBbURKLFVBQVVLLCtCQUErQixDQUFDSDtRQUVuRyxJQUFJRSxrREFBa0Q7WUFDcEQsSUFBTUUsVUFBVWYsUUFBUWdCLFNBQVM7WUFFakMsSUFBSUQsU0FBUztnQkFDWCxJQUFNRSxhQUFhQyxZQUFZZCxlQUFlQyxnQkFBZ0JMO2dCQUU5RCxJQUFJaUIsWUFBWTtvQkFDZGhCLG1CQUFtQixJQUFJO2dCQUN6QixDQUFDO1lBQ0gsT0FBTztnQkFDTEEsbUJBQW1CLElBQUk7WUFDekIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVDtBQUVBLFNBQVNpQixZQUFZZCxhQUFhLEVBQUVDLGNBQWMsRUFBRUwsT0FBTyxFQUFFO0lBQzNELElBQUlpQixhQUFhLElBQUksRUFBRyxHQUFHO0lBRTNCLFFBQVE7SUFFUixPQUFPQTtBQUNUIn0=