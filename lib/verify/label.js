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
var _label = /*#__PURE__*/ _interopRequireDefault(require("../label"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabel(labelNode, labels, fileContext) {
    var labelVerified = false;
    fileContext.begin(labelNode);
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), labelPresent = fileContext.isLabelPresentByLabelName(labelName);
    if (labelPresent) {
        var labelString = (0, _string.nodeAsString)(labelNode);
        fileContext.error("The '".concat(labelString, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    labelVerified ? fileContext.complete(labelNode) : fileContext.halt(labelNode);
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxhYmVsKGxhYmVsTm9kZSwgbGFiZWxzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGFiZWxWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKGxhYmVsTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbm9kZUFzU3RyaW5nKGxhYmVsTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmAsIGxhYmVsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICBsYWJlbHMucHVzaChsYWJlbCk7XG5cbiAgICBsYWJlbFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGxhYmVsVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKGxhYmVsTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuaGFsdChsYWJlbE5vZGUpO1xuXG4gIHJldHVybiBsYWJlbFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUxhYmVsIiwibGFiZWxOb2RlIiwibGFiZWxzIiwiZmlsZUNvbnRleHQiLCJsYWJlbFZlcmlmaWVkIiwiYmVnaW4iLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJsYWJlbCIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInB1c2giLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7MERBTE47c0JBRVc7cUJBQ1U7Ozs7OztBQUV4QixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0lBQ2xFLElBQUlDLGdCQUFnQixLQUFLO0lBRXpCRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQU1LLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDTixZQUNuQ08sZUFBZUwsWUFBWU0seUJBQXlCLENBQUNIO0lBRTNELElBQUlFLGNBQWM7UUFDaEIsSUFBTUUsY0FBY0MsSUFBQUEsb0JBQVksRUFBQ1Y7UUFFakNFLFlBQVlTLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpGLGFBQVksZ0NBQThCVDtJQUN0RSxPQUFPO1FBQ0wsSUFBTVksUUFBUUMsY0FBSyxDQUFDQyxhQUFhLENBQUNkO1FBRWxDQyxPQUFPYyxJQUFJLENBQUNIO1FBRVpULGdCQUFnQixJQUFJO0lBQ3RCLENBQUM7SUFFREEsZ0JBQ0VELFlBQVljLFFBQVEsQ0FBQ2hCLGFBQ25CRSxZQUFZZSxJQUFJLENBQUNqQixVQUFVO0lBRS9CLE9BQU9HO0FBQ1QifQ==