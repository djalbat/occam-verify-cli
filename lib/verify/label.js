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
    fileContext.begin(labelNode);
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), labelPresent = fileContext.isLabelPresentByLabelName(labelName);
    if (labelPresent) {
        var labelString = fileContext.nodeAsString(labelNode);
        fileContext.error("The '".concat(labelString, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    labelVerified ? fileContext.complete(labelNode) : fileContext.halt(labelNode);
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4obGFiZWxOb2RlKTtcblxuICBjb25zdCBsYWJlbE5hbWUgPSBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSksXG4gICAgICAgIGxhYmVsUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobGFiZWxOb2RlKTtcblxuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbGFiZWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgbGFiZWxWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUobGFiZWxOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5oYWx0KGxhYmVsTm9kZSk7XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsYWJlbE5vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJiZWdpbiIsImxhYmVsTmFtZSIsImxhYmVsTmFtZUZyb21MYWJlbE5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwibGFiZWxTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsImxhYmVsIiwiTGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwicHVzaCIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzswREFKTjtxQkFFcUI7Ozs7OztBQUV4QixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0lBQ2xFLElBQUlDLGdCQUFnQixLQUFLO0lBRXpCRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQU1LLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDTixZQUNuQ08sZUFBZUwsWUFBWU0seUJBQXlCLENBQUNIO0lBRTNELElBQUlFLGNBQWM7UUFDaEIsSUFBTUUsY0FBY1AsWUFBWVEsWUFBWSxDQUFDVjtRQUU3Q0UsWUFBWVMsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkYsYUFBWSxnQ0FBOEJUO0lBQ3RFLE9BQU87UUFDTCxJQUFNWSxRQUFRQyxjQUFLLENBQUNDLGFBQWEsQ0FBQ2Q7UUFFbENDLE9BQU9jLElBQUksQ0FBQ0g7UUFFWlQsZ0JBQWdCLElBQUk7SUFDdEIsQ0FBQztJQUVEQSxnQkFDRUQsWUFBWWMsUUFBUSxDQUFDaEIsYUFDbkJFLFlBQVllLElBQUksQ0FBQ2pCLFVBQVU7SUFFL0IsT0FBT0c7QUFDVCJ9