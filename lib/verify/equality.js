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
    context.begin(equalityNode);
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
    equalityVerified ? context.complete(equalityNode) : context.halt(equalityNode);
    return equalityVerified;
}
function equateTerms(firstTermNode, secondTermNode, context) {
    var termsEqual = true; ///
    debugger;
    return termsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBmaXJzdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHNlY29uZFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29udGV4dC5iZWdpbihlcXVhbGl0eU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICBmaXJzdFRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgIHNlY29uZFRlcm1Ob2RlID0gc2Vjb25kVGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICBmaXJzdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0oZmlyc3RUZXJtTm9kZSwgdHlwZXMsIHZhbHVlcywgY29udGV4dCksXG4gICAgICAgIHNlY29uZFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0oc2Vjb25kVGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpO1xuXG4gIGlmIChmaXJzdFRlcm1WZXJpZmllZCAmJiBzZWNvbmRUZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgZmlyc3RUeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZTZWNvbmRUeXBlID0gZmlyc3RUeXBlLmlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2Yoc2Vjb25kVHlwZSk7XG5cbiAgICBpZiAoZmlyc3RUeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZTZWNvbmRUeXBlKSB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gY29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgdGVybXNFcXVhbCA9IGVxdWF0ZVRlcm1zKGZpcnN0VGVybU5vZGUsIHNlY29uZFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybXNFcXVhbCkge1xuICAgICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcXVhbGl0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlcXVhbGl0eVZlcmlmaWVkID9cbiAgICBjb250ZXh0LmNvbXBsZXRlKGVxdWFsaXR5Tm9kZSkgOlxuICAgICAgY29udGV4dC5oYWx0KGVxdWFsaXR5Tm9kZSk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1zKGZpcnN0VGVybU5vZGUsIHNlY29uZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtc0VxdWFsID0gdHJ1ZTsgIC8vL1xuXG4gIGRlYnVnZ2VyXG5cbiAgcmV0dXJuIHRlcm1zRXF1YWw7XG59Il0sIm5hbWVzIjpbInZlcmlmeUVxdWFsaXR5IiwiZmlyc3RUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic2Vjb25kVGVybU5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZSIsImNvbnRleHQiLCJlcXVhbGl0eVZlcmlmaWVkIiwiYmVnaW4iLCJ0eXBlcyIsInZhbHVlcyIsImZpcnN0VGVybU5vZGUiLCJzZWNvbmRUZXJtTm9kZSIsImZpcnN0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInNlY29uZFRlcm1WZXJpZmllZCIsImZpcnN0VHlwZSIsImZpcnN0Iiwic2Vjb25kVHlwZSIsInNlY29uZCIsImZpcnN0VHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mU2Vjb25kVHlwZSIsImlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwidGVybXNFcXVhbCIsImVxdWF0ZVRlcm1zIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3lEQVJEO3FCQUVHO3FCQUNJOzs7Ozs7QUFFOUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHNCQUMvQkMsc0JBQXNCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXZCLFNBQVNGLGVBQWVJLFlBQVksRUFBRUMsT0FBTyxFQUFFO0lBQzVELElBQUlDLG1CQUFtQixLQUFLO0lBRTVCRCxRQUFRRSxLQUFLLENBQUNIO0lBRWQsSUFBTUksUUFBUSxFQUFFLEVBQ1ZDLFNBQVMsRUFBRSxFQUNYQyxnQkFBZ0JULG1CQUFtQkcsZUFDbkNPLGlCQUFpQlIsb0JBQW9CQyxlQUNyQ1Esb0JBQW9CQyxJQUFBQSxhQUFVLEVBQUNILGVBQWVGLE9BQU9DLFFBQVFKLFVBQzdEUyxxQkFBcUJELElBQUFBLGFBQVUsRUFBQ0YsZ0JBQWdCSCxPQUFPQyxRQUFRSjtJQUVyRSxJQUFJTyxxQkFBcUJFLG9CQUFvQjtRQUMzQyxJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNSLFFBQ2xCUyxhQUFhQyxJQUFBQSxhQUFNLEVBQUNWLFFBQ3BCVyxtREFBbURKLFVBQVVLLCtCQUErQixDQUFDSDtRQUVuRyxJQUFJRSxrREFBa0Q7WUFDcEQsSUFBTUUsVUFBVWhCLFFBQVFpQixTQUFTO1lBRWpDLElBQUlELFNBQVM7Z0JBQ1gsSUFBTUUsYUFBYUMsWUFBWWQsZUFBZUMsZ0JBQWdCTjtnQkFFOUQsSUFBSWtCLFlBQVk7b0JBQ2RqQixtQkFBbUIsSUFBSTtnQkFDekIsQ0FBQztZQUNILE9BQU87Z0JBQ0xBLG1CQUFtQixJQUFJO1lBQ3pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEQSxtQkFDRUQsUUFBUW9CLFFBQVEsQ0FBQ3JCLGdCQUNmQyxRQUFRcUIsSUFBSSxDQUFDdEIsYUFBYTtJQUU5QixPQUFPRTtBQUNUO0FBRUEsU0FBU2tCLFlBQVlkLGFBQWEsRUFBRUMsY0FBYyxFQUFFTixPQUFPLEVBQUU7SUFDM0QsSUFBSWtCLGFBQWEsSUFBSSxFQUFHLEdBQUc7SUFFM0IsUUFBUTtJQUVSLE9BQU9BO0FBQ1QifQ==