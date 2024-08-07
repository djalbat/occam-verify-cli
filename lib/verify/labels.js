"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyLabels;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("../verify/label"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabels(labelNodes, labels, fileContext) {
    var labelsVerified;
    labelsVerified = labelNodes.every(function(labelNode) {
        var labelVerified = (0, _label.default)(labelNode, labels, fileContext);
        if (labelVerified) {
            return true;
        }
    });
    return labelsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5TGFiZWwgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGFiZWxzVmVyaWZpZWQ7XG5cbiAgbGFiZWxzVmVyaWZpZWQgPSBsYWJlbE5vZGVzLmV2ZXJ5KChsYWJlbE5vZGUpID0+IHtcbiAgICBjb25zdCBsYWJlbFZlcmlmaWVkID0gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbHMiLCJsYWJlbE5vZGVzIiwibGFiZWxzIiwiZmlsZUNvbnRleHQiLCJsYWJlbHNWZXJpZmllZCIsImV2ZXJ5IiwibGFiZWxOb2RlIiwibGFiZWxWZXJpZmllZCIsInZlcmlmeUxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzREQUZBOzs7Ozs7QUFFVCxTQUFTQSxhQUFhQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztJQUNsRSxJQUFJQztJQUVKQSxpQkFBaUJILFdBQVdJLEtBQUssQ0FBQyxTQUFDQztRQUNqQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0osUUFBUUM7UUFFckQsSUFBSUksZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9IO0FBQ1QifQ==