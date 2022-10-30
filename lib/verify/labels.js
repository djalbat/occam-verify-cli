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
function verifyLabels(labelNodes, labels) {
    var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var labelsVerified;
    labelsVerified = labelNodes.every(function(labelNode) {
        var labelVerified = context.verifyLabel(labelNode, labels);
        if (labelVerified) {
            return true;
        }
    });
    return labelsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgbGFiZWxzVmVyaWZpZWQ7XG5cbiAgbGFiZWxzVmVyaWZpZWQgPSBsYWJlbE5vZGVzLmV2ZXJ5KChsYWJlbE5vZGUpID0+IHtcbiAgICBjb25zdCBsYWJlbFZlcmlmaWVkID0gY29udGV4dC52ZXJpZnlMYWJlbChsYWJlbE5vZGUsIGxhYmVscyk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWxzIiwibGFiZWxOb2RlcyIsImxhYmVscyIsImNvbnRleHQiLCJsYWJlbHNWZXJpZmllZCIsImV2ZXJ5IiwibGFiZWxOb2RlIiwibGFiZWxWZXJpZmllZCIsInZlcmlmeUxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsYUFBYUMsVUFBVSxFQUFFQyxNQUFNLEVBQWtCO1FBQWhCQyxVQUFBQSxpRUFBVSxJQUFJO0lBQ3JFLElBQUlDO0lBRUpBLGlCQUFpQkgsV0FBV0ksS0FBSyxDQUFDLFNBQUNDLFdBQWM7UUFDL0MsSUFBTUMsZ0JBQWdCSixRQUFRSyxXQUFXLENBQUNGLFdBQVdKO1FBRXJELElBQUlLLGVBQWU7WUFDakIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT0g7QUFDVCJ9