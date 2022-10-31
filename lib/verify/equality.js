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
function verifyEquality(equalityNode, proofContext) {
    var equalityVerified = false;
    proofContext.begin(equalityNode);
    var types = [], values = [], context = proofContext, firstTermNode = firstTermNodeQuery(equalityNode), secondTermNode = secondTermNodeQuery(equalityNode), firstTermVerified = (0, _term.default)(firstTermNode, types, values, context), secondTermVerified = (0, _term.default)(secondTermNode, types, values, context);
    if (firstTermVerified && secondTermVerified) {
        var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType = firstType.isEqualToSubTypeOfOrSuperTypeOf(secondType);
        if (firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType) {
            var derived = proofContext.isDerived();
            if (derived) {
                var termsEqual = equateTerms(firstTermNode, secondTermNode, proofContext);
                if (termsEqual) {
                    equalityVerified = true;
                }
            } else {
                equalityVerified = true;
            }
        }
    }
    equalityVerified ? proofContext.complete(equalityNode) : proofContext.halt(equalityNode);
    return equalityVerified;
}
function equateTerms(firstTermNode, secondTermNode, proofContext) {
    var termsEqual = true; ///
    debugger;
    return termsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBmaXJzdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHNlY29uZFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4oZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICB2YWx1ZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHByb29mQ29udGV4dCxcbiAgICAgICAgZmlyc3RUZXJtTm9kZSA9IGZpcnN0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICBzZWNvbmRUZXJtTm9kZSA9IHNlY29uZFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgZmlyc3RUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKGZpcnN0VGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpLFxuICAgICAgICBzZWNvbmRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHNlY29uZFRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzLCBjb250ZXh0KTtcblxuICBpZiAoZmlyc3RUZXJtVmVyaWZpZWQgJiYgc2Vjb25kVGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgIGZpcnN0VHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mU2Vjb25kVHlwZSA9IGZpcnN0VHlwZS5pc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mKHNlY29uZFR5cGUpO1xuXG4gICAgaWYgKGZpcnN0VHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mU2Vjb25kVHlwZSkge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IHByb29mQ29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgdGVybXNFcXVhbCA9IGVxdWF0ZVRlcm1zKGZpcnN0VGVybU5vZGUsIHNlY29uZFRlcm1Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtc0VxdWFsKSB7XG4gICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVxdWFsaXR5VmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShlcXVhbGl0eU5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KGVxdWFsaXR5Tm9kZSk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1zKGZpcnN0VGVybU5vZGUsIHNlY29uZFRlcm1Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHRlcm1zRXF1YWwgPSB0cnVlOyAgLy8vXG5cbiAgZGVidWdnZXJcblxuICByZXR1cm4gdGVybXNFcXVhbDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJmaXJzdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzZWNvbmRUZXJtTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlIiwicHJvb2ZDb250ZXh0IiwiZXF1YWxpdHlWZXJpZmllZCIsImJlZ2luIiwidHlwZXMiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiZmlyc3RUZXJtTm9kZSIsInNlY29uZFRlcm1Ob2RlIiwiZmlyc3RUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwic2Vjb25kVGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwiZmlyc3RUeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZTZWNvbmRUeXBlIiwiaXNFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZiIsImRlcml2ZWQiLCJpc0Rlcml2ZWQiLCJ0ZXJtc0VxdWFsIiwiZXF1YXRlVGVybXMiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7eURBUkQ7cUJBRUc7cUJBQ0k7Ozs7OztBQUU5QixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0YsZUFBZUksWUFBWSxFQUFFQyxZQUFZLEVBQUU7SUFDakUsSUFBSUMsbUJBQW1CLEtBQUs7SUFFNUJELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksUUFBUSxFQUFFLEVBQ1ZDLFNBQVMsRUFBRSxFQUNYQyxVQUFVTCxjQUNWTSxnQkFBZ0JWLG1CQUFtQkcsZUFDbkNRLGlCQUFpQlQsb0JBQW9CQyxlQUNyQ1Msb0JBQW9CQyxJQUFBQSxhQUFVLEVBQUNILGVBQWVILE9BQU9DLFFBQVFDLFVBQzdESyxxQkFBcUJELElBQUFBLGFBQVUsRUFBQ0YsZ0JBQWdCSixPQUFPQyxRQUFRQztJQUVyRSxJQUFJRyxxQkFBcUJFLG9CQUFvQjtRQUMzQyxJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNULFFBQ2xCVSxhQUFhQyxJQUFBQSxhQUFNLEVBQUNYLFFBQ3BCWSxtREFBbURKLFVBQVVLLCtCQUErQixDQUFDSDtRQUVuRyxJQUFJRSxrREFBa0Q7WUFDcEQsSUFBTUUsVUFBVWpCLGFBQWFrQixTQUFTO1lBRXRDLElBQUlELFNBQVM7Z0JBQ1gsSUFBTUUsYUFBYUMsWUFBWWQsZUFBZUMsZ0JBQWdCUDtnQkFFOUQsSUFBSW1CLFlBQVk7b0JBQ2RsQixtQkFBbUIsSUFBSTtnQkFDekIsQ0FBQztZQUNILE9BQU87Z0JBQ0xBLG1CQUFtQixJQUFJO1lBQ3pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEQSxtQkFDRUQsYUFBYXFCLFFBQVEsQ0FBQ3RCLGdCQUNwQkMsYUFBYXNCLElBQUksQ0FBQ3ZCLGFBQWE7SUFFbkMsT0FBT0U7QUFDVDtBQUVBLFNBQVNtQixZQUFZZCxhQUFhLEVBQUVDLGNBQWMsRUFBRVAsWUFBWSxFQUFFO0lBQ2hFLElBQUltQixhQUFhLElBQUksRUFBRyxHQUFHO0lBRTNCLFFBQVE7SUFFUixPQUFPQTtBQUNUIn0=