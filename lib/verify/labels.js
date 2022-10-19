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
var _label = /*#__PURE__*/ _interopRequireDefault(require("../verify/label"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabels(labelNodes, labels, context) {
    var labelsVerified = labelNodes.every(function(labelNode) {
        var labelVerified = (0, _label.default)(labelNode, labels, context);
        if (labelVerified) {
            return true;
        }
    });
    return labelsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5TGFiZWwgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gbGFiZWxOb2Rlcy5ldmVyeSgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWxWZXJpZmllZCA9IHZlcmlmeUxhYmVsKGxhYmVsTm9kZSwgbGFiZWxzLCBjb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbHMiLCJsYWJlbE5vZGVzIiwibGFiZWxzIiwiY29udGV4dCIsImxhYmVsc1ZlcmlmaWVkIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJsYWJlbFZlcmlmaWVkIiwidmVyaWZ5TGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MERBRkE7Ozs7OztBQUVULFNBQVNBLGFBQWFDLFVBQVUsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDaEUsSUFBTUMsaUJBQWlCSCxXQUFXSSxLQUFLLENBQUMsU0FBQ0MsV0FBYztRQUNyRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0osUUFBUUM7UUFFckQsSUFBSUksZUFBZTtZQUNqQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPSDtBQUNUIn0=