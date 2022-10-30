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
function verifyLabel(labelNode, labels) {
    var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var labelVerified = false;
    context.begin(labelNode);
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), label = labelName, labelPresent = context.isLabelPresent(label);
    if (labelPresent) {
        context.error("The label ".concat(label, " is already present"), labelNode);
    } else {
        labels.push(label);
        labelVerified = true;
    }
    labelVerified ? context.complete(labelNode) : context.halt(labelNode);
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxhYmVsKGxhYmVsTm9kZSwgbGFiZWxzLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgbGFiZWxWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnRleHQuYmVnaW4obGFiZWxOb2RlKTtcblxuICBjb25zdCBsYWJlbE5hbWUgPSBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSksXG4gICAgICAgIGxhYmVsID0gbGFiZWxOYW1lLCAgLy8vXG4gICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnQobGFiZWwpO1xuXG4gIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgbGFiZWwgJHtsYWJlbH0gaXMgYWxyZWFkeSBwcmVzZW50YCwgbGFiZWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsYWJlbHMucHVzaChsYWJlbCk7XG5cbiAgICBsYWJlbFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGxhYmVsVmVyaWZpZWQgP1xuICAgIGNvbnRleHQuY29tcGxldGUobGFiZWxOb2RlKSA6XG4gICAgICBjb250ZXh0LmhhbHQobGFiZWxOb2RlKTtcblxuICByZXR1cm4gbGFiZWxWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbCIsImxhYmVsTm9kZSIsImxhYmVscyIsImNvbnRleHQiLCJsYWJlbFZlcmlmaWVkIiwiYmVnaW4iLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWwiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudCIsImVycm9yIiwicHVzaCIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OztxQkFGZTtBQUV4QixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLE1BQU0sRUFBa0I7UUFBaEJDLFVBQUFBLGlFQUFVLElBQUk7SUFDbkUsSUFBSUMsZ0JBQWdCLEtBQUs7SUFFekJELFFBQVFFLEtBQUssQ0FBQ0o7SUFFZCxJQUFNSyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ04sWUFDbkNPLFFBQVFGLFdBQ1JHLGVBQWVOLFFBQVFPLGNBQWMsQ0FBQ0Y7SUFFNUMsSUFBSUMsY0FBYztRQUNoQk4sUUFBUVEsS0FBSyxDQUFDLEFBQUMsYUFBa0IsT0FBTkgsT0FBTSx3QkFBc0JQO0lBQ3pELE9BQU87UUFDTEMsT0FBT1UsSUFBSSxDQUFDSjtRQUVaSixnQkFBZ0IsSUFBSTtJQUN0QixDQUFDO0lBRURBLGdCQUNFRCxRQUFRVSxRQUFRLENBQUNaLGFBQ2ZFLFFBQVFXLElBQUksQ0FBQ2IsVUFBVTtJQUUzQixPQUFPRztBQUNUIn0=