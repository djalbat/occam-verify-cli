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
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabel(labelNode, labels, fileContext) {
    var labelVerified = false;
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), labelPresent = fileContext.isLabelPresentByLabelName(labelName);
    if (labelPresent) {
        var labelString = fileContext.nodeAsString(labelNode);
        fileContext.error(labelNode, "The '".concat(labelString, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5lcnJvcihsYWJlbE5vZGUsIGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbGFiZWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsYWJlbE5vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJsYWJlbCIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MERBSk47cUJBRXFCOzs7Ozs7QUFFeEIsU0FBU0EsWUFBWUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsRUFBRTtJQUNsRSxJQUFJQyxnQkFBZ0IsS0FBSztJQUV6QixJQUFNQyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ0wsWUFDbkNNLGVBQWVKLFlBQVlLLHlCQUF5QixDQUFDSDtJQUUzRCxJQUFJRSxjQUFjO1FBQ2hCLElBQU1FLGNBQWNOLFlBQVlPLFlBQVksQ0FBQ1Q7UUFFN0NFLFlBQVlRLEtBQUssQ0FBQ1YsV0FBVyxBQUFDLFFBQW1CLE9BQVpRLGFBQVksZ0NBQThCUjtJQUNqRixPQUFPO1FBQ0wsSUFBTVcsUUFBUUMsY0FBSyxDQUFDQyxhQUFhLENBQUNiO1FBRWxDQyxPQUFPYSxJQUFJLENBQUNIO1FBRVpSLGdCQUFnQixJQUFJO0lBQ3RCLENBQUM7SUFFRCxPQUFPQTtBQUNUIn0=