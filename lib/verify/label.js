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
var metavariableNodeQuery = (0, _query.nodeQuery)("/label/metavariable!");
function verifyLabel(labelNode, labels, fileContext) {
    var labelVerified = false;
    var labelString = fileContext.nodeAsString(labelNode);
    fileContext.trace("Verifying the '".concat(labelString, "' label..."), labelNode);
    var metavariableNode = metavariableNodeQuery(labelNode), labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);
    if (labelPresent) {
        fileContext.debug("The '".concat(labelString, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromMetavariableNode(metavariableNode);
        labels.push(label);
        labelVerified = true;
    }
    if (labelVerified) {
        fileContext.debug("...verified the '".concat(labelString, "' label."), labelNode);
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGFiZWwvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobGFiZWxOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCwgbGFiZWxOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgIGxhYmVsUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmAsIGxhYmVsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCwgbGFiZWxOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2RlIiwibGFiZWxzIiwiZmlsZUNvbnRleHQiLCJsYWJlbFZlcmlmaWVkIiwibGFiZWxTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlYnVnIiwibGFiZWwiLCJMYWJlbCIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozs0REFOTjtxQkFFUTs7Ozs7O0FBRTFCLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRixZQUFZRyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztJQUNoRSxJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBTUMsY0FBY0YsWUFBWUcsWUFBWSxDQUFDTDtJQUU3Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYUo7SUFFN0QsSUFBTU8sbUJBQW1CVCxzQkFBc0JFLFlBQ3pDUSxlQUFlTixZQUFZTyxnQ0FBZ0MsQ0FBQ0Y7SUFFbEUsSUFBSUMsY0FBYztRQUNoQk4sWUFBWVEsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWk4sYUFBWSxnQ0FBOEJKO0lBQ3RFLE9BQU87UUFDTCxJQUFNVyxRQUFRQyxjQUFLLENBQUNDLG9CQUFvQixDQUFDTjtRQUV6Q04sT0FBT2EsSUFBSSxDQUFDSDtRQUVaUixnQkFBZ0I7SUFDbEI7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZUSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWk4sYUFBWSxhQUFXSjtJQUMvRDtJQUVBLE9BQU9HO0FBQ1QifQ==