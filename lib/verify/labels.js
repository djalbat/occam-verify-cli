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
    var labelsVerified;
    labelsVerified = labelNodes.every(function(labelNode) {
        var labelVerified = (0, _label.default)(labelNode, labels, context);
        if (labelVerified) {
            return true;
        }
    });
    return labelsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5TGFiZWwgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbHNWZXJpZmllZDtcblxuICBsYWJlbHNWZXJpZmllZCA9IGxhYmVsTm9kZXMuZXZlcnkoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbChsYWJlbE5vZGUsIGxhYmVscywgY29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWxzIiwibGFiZWxOb2RlcyIsImxhYmVscyIsImNvbnRleHQiLCJsYWJlbHNWZXJpZmllZCIsImV2ZXJ5IiwibGFiZWxOb2RlIiwibGFiZWxWZXJpZmllZCIsInZlcmlmeUxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSxhQUFhQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0lBQ2hFLElBQUlDO0lBRUpBLGlCQUFpQkgsV0FBV0ksS0FBSyxDQUFDLFNBQUNDLFdBQWM7UUFDL0MsSUFBTUMsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNGLFdBQVdKLFFBQVFDO1FBRXJELElBQUlJLGVBQWU7WUFDakIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT0g7QUFDVCJ9