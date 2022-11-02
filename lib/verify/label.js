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
        var labelString = (0, _string.nodesAsString)(labelNode);
        fileContext.error("The label ".concat(labelString, " is already present"), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    labelVerified ? fileContext.complete(labelNode) : fileContext.halt(labelNode);
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbChsYWJlbE5vZGUsIGxhYmVscywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxhYmVsVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihsYWJlbE5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsTmFtZSA9IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgbGFiZWxQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IG5vZGVzQXNTdHJpbmcobGFiZWxOb2RlKTtcblxuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgbGFiZWwgJHtsYWJlbFN0cmluZ30gaXMgYWxyZWFkeSBwcmVzZW50YCwgbGFiZWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgbGFiZWxWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUobGFiZWxOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5oYWx0KGxhYmVsTm9kZSk7XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsYWJlbE5vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJiZWdpbiIsImxhYmVsTmFtZSIsImxhYmVsTmFtZUZyb21MYWJlbE5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwibGFiZWxTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiZXJyb3IiLCJsYWJlbCIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInB1c2giLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7MERBTE47c0JBRVk7cUJBQ1M7Ozs7OztBQUV4QixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0lBQ2xFLElBQUlDLGdCQUFnQixLQUFLO0lBRXpCRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQU1LLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDTixZQUNuQ08sZUFBZUwsWUFBWU0seUJBQXlCLENBQUNIO0lBRTNELElBQUlFLGNBQWM7UUFDaEIsSUFBTUUsY0FBY0MsSUFBQUEscUJBQWEsRUFBQ1Y7UUFFbENFLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGFBQXdCLE9BQVpGLGFBQVksd0JBQXNCVDtJQUNuRSxPQUFPO1FBQ0wsSUFBTVksUUFBUUMsY0FBSyxDQUFDQyxhQUFhLENBQUNkO1FBRWxDQyxPQUFPYyxJQUFJLENBQUNIO1FBRVpULGdCQUFnQixJQUFJO0lBQ3RCLENBQUM7SUFFREEsZ0JBQ0VELFlBQVljLFFBQVEsQ0FBQ2hCLGFBQ25CRSxZQUFZZSxJQUFJLENBQUNqQixVQUFVO0lBRS9CLE9BQU9HO0FBQ1QifQ==