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
var _label = /*#__PURE__*/ _interop_require_default(require("../label"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabel(labelNode, labels, fileContext) {
    var labelVerified = false;
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), labelPresent = fileContext.isLabelPresentByLabelName(labelName);
    if (labelPresent) {
        var labelString = fileContext.nodeAsString(labelNode);
        fileContext.error("The '".concat(labelString, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmAsIGxhYmVsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICBsYWJlbHMucHVzaChsYWJlbCk7XG5cbiAgICBsYWJlbFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUxhYmVsIiwibGFiZWxOb2RlIiwibGFiZWxzIiwiZmlsZUNvbnRleHQiLCJsYWJlbFZlcmlmaWVkIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJsYWJlbFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwibGFiZWwiLCJMYWJlbCIsImZyb21MYWJlbE5vZGUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzREQUpOO3FCQUVxQjs7Ozs7O0FBRXhCLFNBQVNBLFlBQVlDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxXQUFXO0lBQ2hFLElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ0wsWUFDbkNNLGVBQWVKLFlBQVlLLHlCQUF5QixDQUFDSDtJQUUzRCxJQUFJRSxjQUFjO1FBQ2hCLElBQU1FLGNBQWNOLFlBQVlPLFlBQVksQ0FBQ1Q7UUFFN0NFLFlBQVlRLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpGLGFBQVksZ0NBQThCUjtJQUN0RSxPQUFPO1FBQ0wsSUFBTVcsUUFBUUMsY0FBSyxDQUFDQyxhQUFhLENBQUNiO1FBRWxDQyxPQUFPYSxJQUFJLENBQUNIO1FBRVpSLGdCQUFnQjtJQUNsQjtJQUVBLE9BQU9BO0FBQ1QifQ==