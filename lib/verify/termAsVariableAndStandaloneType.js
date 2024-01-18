"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAsVariableAndStandaloneType;
    }
});
var _standaloneType = /*#__PURE__*/ _interop_require_default(require("../verify/standaloneType"));
var _term = require("../verify/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAsVariableAndStandaloneType(termNode, typeNode, variables, types, context, verifyAhead) {
    var termAsVariableAndStandaloneTypeVerified;
    var termString = context.nodeAsString(termNode), typeString = context.nodeAsString(typeNode);
    context.trace("Verifying the '".concat(termString, "' term as a variable and the standalone '").concat(typeString, "' type..."), termNode);
    var termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context, function() {
        var verifiedAhead;
        var standaloneTypeVerified = (0, _standaloneType.default)(typeNode, types, context, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = standaloneTypeVerified; ///
        return verifiedAhead;
    });
    termAsVariableAndStandaloneTypeVerified = termVerifiedAsVariable; ///
    if (termAsVariableAndStandaloneTypeVerified) {
        context.debug("...verified the '".concat(termString, "' term as a variable and the standalone '").concat(typeString, "' type."), termNode);
    }
    return termAsVariableAndStandaloneTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzVmFyaWFibGVBbmRTdGFuZGFsb25lVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YW5kYWxvbmVUeXBlIGZyb20gXCIuLi92ZXJpZnkvc3RhbmRhbG9uZVR5cGVcIjtcblxuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGVBbmRTdGFuZGFsb25lVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIHZhcmlhYmxlcywgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtQXNWYXJpYWJsZUFuZFN0YW5kYWxvbmVUeXBlVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUgYW5kIHRoZSBzdGFuZGFsb25lICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVR5cGUodHlwZU5vZGUsIHR5cGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtQXNWYXJpYWJsZUFuZFN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlOyAvLy9cblxuICBpZiAodGVybUFzVmFyaWFibGVBbmRTdGFuZGFsb25lVHlwZVZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUgYW5kIHRoZSBzdGFuZGFsb25lICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtQXNWYXJpYWJsZUFuZFN0YW5kYWxvbmVUeXBlVmVyaWZpZWRcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNWYXJpYWJsZUFuZFN0YW5kYWxvbmVUeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInZhcmlhYmxlcyIsInR5cGVzIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybUFzVmFyaWFibGVBbmRTdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInZlcmlmaWVkQWhlYWQiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OztxRUFKUztvQkFFSTs7Ozs7O0FBRXRCLFNBQVNBLHNDQUFzQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdEgsSUFBSUM7SUFFSixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNSLFdBQ2xDUyxhQUFhTCxRQUFRSSxZQUFZLENBQUNQO0lBRXhDRyxRQUFRTSxLQUFLLENBQUMsQUFBQyxrQkFBdUVELE9BQXRERixZQUFXLDZDQUFzRCxPQUFYRSxZQUFXLGNBQVlUO0lBRTdHLElBQU1XLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNaLFVBQVVFLFdBQVdFLFNBQVM7UUFDMUUsSUFBSVM7UUFFSixJQUFNQyx5QkFBeUJDLElBQUFBLHVCQUFvQixFQUFDZCxVQUFVRSxPQUFPQyxTQUFTO1lBQzVFLElBQUlTO1lBRUpBLGdCQUFnQlI7WUFFaEIsT0FBT1E7UUFDVDtRQUVBQSxnQkFBZ0JDLHdCQUF5QixHQUFHO1FBRTVDLE9BQU9EO0lBQ1Q7SUFFTlAsMENBQTBDSyx3QkFBd0IsR0FBRztJQUVyRSxJQUFJTCx5Q0FBeUM7UUFDM0NGLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUF5RVAsT0FBdERGLFlBQVcsNkNBQXNELE9BQVhFLFlBQVcsWUFBVVQ7SUFDL0c7SUFFQSxPQUFPTTtBQUNUIn0=