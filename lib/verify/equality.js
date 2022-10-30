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
var _query = require("../utilities/query");
var _array = require("../utilities/array");
var firstTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), secondTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
function verifyEquality(equalityNode) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var equalityVerified = false;
    context.begin(equalityNode);
    var types = [], values = [], firstTermNode = firstTermNodeQuery(equalityNode), secondTermNode = secondTermNodeQuery(equalityNode), firstTermVerified = context.verifyTerm(firstTermNode, types, values), secondTermVerified = context.verifyTerm(secondTermNode, types, values);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGZpcnN0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzBdXCIpLFxuICAgICAgc2Vjb25kVGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGNvbnRleHQgPSB0aGlzKSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29udGV4dC5iZWdpbihlcXVhbGl0eU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICBmaXJzdFRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgIHNlY29uZFRlcm1Ob2RlID0gc2Vjb25kVGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICBmaXJzdFRlcm1WZXJpZmllZCA9IGNvbnRleHQudmVyaWZ5VGVybShmaXJzdFRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzKSxcbiAgICAgICAgc2Vjb25kVGVybVZlcmlmaWVkID0gY29udGV4dC52ZXJpZnlUZXJtKHNlY29uZFRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzKTtcblxuICBpZiAoZmlyc3RUZXJtVmVyaWZpZWQgJiYgc2Vjb25kVGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgIGZpcnN0VHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mU2Vjb25kVHlwZSA9IGZpcnN0VHlwZS5pc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mKHNlY29uZFR5cGUpO1xuXG4gICAgaWYgKGZpcnN0VHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mU2Vjb25kVHlwZSkge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IGNvbnRleHQuaXNEZXJpdmVkKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zRXF1YWwgPSBlcXVhdGVUZXJtcyhmaXJzdFRlcm1Ob2RlLCBzZWNvbmRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1zRXF1YWwpIHtcbiAgICAgICAgICBlcXVhbGl0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXF1YWxpdHlWZXJpZmllZCA/XG4gICAgY29udGV4dC5jb21wbGV0ZShlcXVhbGl0eU5vZGUpIDpcbiAgICAgIGNvbnRleHQuaGFsdChlcXVhbGl0eU5vZGUpO1xuXG4gIHJldHVybiBlcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtcyhmaXJzdFRlcm1Ob2RlLCBzZWNvbmRUZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybXNFcXVhbCA9IHRydWU7ICAvLy9cblxuICBkZWJ1Z2dlclxuXG4gIHJldHVybiB0ZXJtc0VxdWFsO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsImZpcnN0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInNlY29uZFRlcm1Ob2RlUXVlcnkiLCJlcXVhbGl0eU5vZGUiLCJjb250ZXh0IiwiZXF1YWxpdHlWZXJpZmllZCIsImJlZ2luIiwidHlwZXMiLCJ2YWx1ZXMiLCJmaXJzdFRlcm1Ob2RlIiwic2Vjb25kVGVybU5vZGUiLCJmaXJzdFRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJzZWNvbmRUZXJtVmVyaWZpZWQiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInNlY29uZFR5cGUiLCJzZWNvbmQiLCJmaXJzdFR5cGVFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZlNlY29uZFR5cGUiLCJpc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwiZGVyaXZlZCIsImlzRGVyaXZlZCIsInRlcm1zRXF1YWwiLCJlcXVhdGVUZXJtcyIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztxQkFORTtxQkFDSTtBQUU5QixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0YsZUFBZUksWUFBWSxFQUFrQjtRQUFoQkMsVUFBQUEsaUVBQVUsSUFBSTtJQUNqRSxJQUFJQyxtQkFBbUIsS0FBSztJQUU1QkQsUUFBUUUsS0FBSyxDQUFDSDtJQUVkLElBQU1JLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsZ0JBQWdCVCxtQkFBbUJHLGVBQ25DTyxpQkFBaUJSLG9CQUFvQkMsZUFDckNRLG9CQUFvQlAsUUFBUVEsVUFBVSxDQUFDSCxlQUFlRixPQUFPQyxTQUM3REsscUJBQXFCVCxRQUFRUSxVQUFVLENBQUNGLGdCQUFnQkgsT0FBT0M7SUFFckUsSUFBSUcscUJBQXFCRSxvQkFBb0I7UUFDM0MsSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDUixRQUNsQlMsYUFBYUMsSUFBQUEsYUFBTSxFQUFDVixRQUNwQlcsbURBQW1ESixVQUFVSywrQkFBK0IsQ0FBQ0g7UUFFbkcsSUFBSUUsa0RBQWtEO1lBQ3BELElBQU1FLFVBQVVoQixRQUFRaUIsU0FBUztZQUVqQyxJQUFJRCxTQUFTO2dCQUNYLElBQU1FLGFBQWFDLFlBQVlkLGVBQWVDLGdCQUFnQk47Z0JBRTlELElBQUlrQixZQUFZO29CQUNkakIsbUJBQW1CLElBQUk7Z0JBQ3pCLENBQUM7WUFDSCxPQUFPO2dCQUNMQSxtQkFBbUIsSUFBSTtZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFREEsbUJBQ0VELFFBQVFvQixRQUFRLENBQUNyQixnQkFDZkMsUUFBUXFCLElBQUksQ0FBQ3RCLGFBQWE7SUFFOUIsT0FBT0U7QUFDVDtBQUVBLFNBQVNrQixZQUFZZCxhQUFhLEVBQUVDLGNBQWMsRUFBRU4sT0FBTyxFQUFFO0lBQzNELElBQUlrQixhQUFhLElBQUksRUFBRyxHQUFHO0lBRTNCLFFBQVE7SUFFUixPQUFPQTtBQUNUIn0=