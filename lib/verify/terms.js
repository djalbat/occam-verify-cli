"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTerms;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTerms(leftTermNode, rightTermNode, context, verifyAhead) {
    var termsVerified;
    var leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode);
    context.trace("Verifying the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms..."), leftTermNode);
    var types = [], leftTermVerified = (0, _term.default)(leftTermNode, types, context, function() {
        var verifiedAhead;
        var rightTermVerified = (0, _term.default)(rightTermNode, types, context, function() {
            var verifiedAhead = false;
            var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftType = firstType, rightType = secondType, leftTypeEqualToOrSubTypeOfOfSuperTypeOfRightType = leftType.isEqualToOrSubTypeOfOfSuperTypeOf(rightType);
            if (!leftTypeEqualToOrSubTypeOfOfSuperTypeOfRightType) {
                var leftTypeName = leftType.getName(), rightTypeName = rightType.getName(), leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode);
                context.debug("The left '".concat(leftTermString, "' term's '").concat(leftTypeName, "' type is not equal to, a sub-type of nor a super-type of the right '").concat(rightTermString, "' term's '").concat(rightTypeName, "' type."), statementNode);
            } else {
                verifiedAhead = verifyAhead();
            }
            return verifiedAhead;
        });
        verifiedAhead = rightTermVerified; ///
        return verifiedAhead;
    });
    if (termsVerified) {
        context.debug("...verified the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms."), leftTermNode);
    }
    termsVerified = leftTermVerified; ///
    return termsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocmlnaHRUZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsZWZ0VGVybVN0cmluZ30nIGFuZCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtcy4uLmAsIGxlZnRUZXJtTm9kZSk7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgbGVmdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgcmlnaHRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRUeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0VHlwZSA9IHNlY29uZFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRUeXBlID0gbGVmdFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghbGVmdFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxlZnRUeXBlTmFtZSA9IGxlZnRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUeXBlTmFtZSA9IHJpZ2h0VHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocmlnaHRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8sIGEgc3ViLXR5cGUgb2Ygbm9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHJpZ2h0VGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBhbmQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybXMuYCwgbGVmdFRlcm1Ob2RlKTtcbiAgfVxuXG4gIHRlcm1zVmVyaWZpZWQgPSBsZWZ0VGVybVZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gdGVybXNWZXJpZmllZFxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1zIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1zVmVyaWZpZWQiLCJsZWZ0VGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInRyYWNlIiwidHlwZXMiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllZCIsImZpcnN0VHlwZSIsImZpcnN0Iiwic2Vjb25kVHlwZSIsInNlY29uZCIsImxlZnRUeXBlIiwicmlnaHRUeXBlIiwibGVmdFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwibGVmdFR5cGVOYW1lIiwiZ2V0TmFtZSIsInJpZ2h0VHlwZU5hbWUiLCJkZWJ1ZyIsInN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MkRBSkQ7cUJBRU87Ozs7OztBQUVmLFNBQVNBLFlBQVlDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDbkYsSUFBSUM7SUFFSixJQUFNQyxpQkFBaUJILFFBQVFJLFlBQVksQ0FBQ04sZUFDdENPLGtCQUFrQkwsUUFBUUksWUFBWSxDQUFDTDtJQUU3Q0MsUUFBUU0sS0FBSyxDQUFDLEFBQUMsa0JBQXlDRCxPQUF4QkYsZ0JBQWUsV0FBeUIsT0FBaEJFLGlCQUFnQixlQUFhUDtJQUVyRixJQUFNUyxRQUFRLEVBQUUsRUFDVkMsbUJBQW1CQyxJQUFBQSxhQUFVLEVBQUNYLGNBQWNTLE9BQU9QLFNBQVM7UUFDMUQsSUFBSVU7UUFFSixJQUFNQyxvQkFBb0JGLElBQUFBLGFBQVUsRUFBQ1YsZUFBZVEsT0FBT1AsU0FBUztZQUNsRSxJQUFJVSxnQkFBZ0I7WUFFcEIsSUFBTUUsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTixRQUNsQk8sYUFBYUMsSUFBQUEsYUFBTSxFQUFDUixRQUNwQlMsV0FBV0osV0FDWEssWUFBWUgsWUFDWkksbURBQW1ERixTQUFTRyxpQ0FBaUMsQ0FBQ0Y7WUFFcEcsSUFBSSxDQUFDQyxrREFBa0Q7Z0JBQ3JELElBQU1FLGVBQWVKLFNBQVNLLE9BQU8sSUFDL0JDLGdCQUFnQkwsVUFBVUksT0FBTyxJQUNqQ2xCLGlCQUFpQkgsUUFBUUksWUFBWSxDQUFDTixlQUN0Q08sa0JBQWtCTCxRQUFRSSxZQUFZLENBQUNMO2dCQUU3Q0MsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLGFBQXVDSCxPQUEzQmpCLGdCQUFlLGNBQWdHRSxPQUFwRmUsY0FBYSx5RUFBbUdFLE9BQTVCakIsaUJBQWdCLGNBQTBCLE9BQWRpQixlQUFjLFlBQVVFO1lBQ2hNLE9BQU87Z0JBQ0xkLGdCQUFnQlQ7WUFDbEI7WUFFQSxPQUFPUztRQUNUO1FBRUFBLGdCQUFnQkMsbUJBQW9CLEdBQUc7UUFFdkMsT0FBT0Q7SUFDVDtJQUVOLElBQUlSLGVBQWU7UUFDakJGLFFBQVF1QixLQUFLLENBQUMsQUFBQyxvQkFBMkNsQixPQUF4QkYsZ0JBQWUsV0FBeUIsT0FBaEJFLGlCQUFnQixhQUFXUDtJQUN2RjtJQUVBSSxnQkFBZ0JNLGtCQUFrQixHQUFHO0lBRXJDLE9BQU9OO0FBQ1QifQ==