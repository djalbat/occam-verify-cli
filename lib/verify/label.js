"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyLabel;
    }
});
var _query = require("../utilities/query");
function verifyLabel(labelNode, labels, context) {
    var labelVerified = false;
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), label = labelName, labelPresent = context.isLabelPresent(label);
    if (labelPresent) {
        context.error("The label ".concat(label, " is already present"), labelNode);
    } else {
        labels.push(label);
        labelVerified = true;
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxhYmVsKGxhYmVsTm9kZSwgbGFiZWxzLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50KGxhYmVsKTtcblxuICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlIGxhYmVsICR7bGFiZWx9IGlzIGFscmVhZHkgcHJlc2VudGAsIGxhYmVsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuXG4gICAgbGFiZWxWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbGFiZWxWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbCIsImxhYmVsTm9kZSIsImxhYmVscyIsImNvbnRleHQiLCJsYWJlbFZlcmlmaWVkIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsImxhYmVsIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnQiLCJlcnJvciIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7cUJBRmU7QUFFeEIsU0FBU0EsWUFBWUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUM5RCxJQUFJQyxnQkFBZ0IsS0FBSztJQUV6QixJQUFNQyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ0wsWUFDbkNNLFFBQVFGLFdBQ1JHLGVBQWVMLFFBQVFNLGNBQWMsQ0FBQ0Y7SUFFNUMsSUFBSUMsY0FBYztRQUNoQkwsUUFBUU8sS0FBSyxDQUFDLEFBQUMsYUFBa0IsT0FBTkgsT0FBTSx3QkFBc0JOO0lBQ3pELE9BQU87UUFDTEMsT0FBT1MsSUFBSSxDQUFDSjtRQUVaSCxnQkFBZ0IsSUFBSTtJQUN0QixDQUFDO0lBRUQsT0FBT0E7QUFDVCJ9