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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabel(metavariableNode, labels, fileContext) {
    var labelVerified = false;
    var labelMetavariableString = fileContext.nodeAsString(metavariableNode);
    fileContext.trace("Verifying the '".concat(labelMetavariableString, "' label..."), metavariableNode);
    var labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);
    if (labelPresent) {
        fileContext.debug("The '".concat(labelMetavariableString, "' label is already present."), metavariableNode);
    } else {
        var label = _label.default.fromMetavariableNode(metavariableNode);
        labels.push(label);
        labelVerified = true;
    }
    if (labelVerified) {
        fileContext.debug("...verified the '".concat(labelMetavariableString, "' label."), metavariableNode);
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobWV0YXZhcmlhYmxlTm9kZSwgbGFiZWxzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGFiZWxWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsTWV0YXZhcmlhYmxlU3RyaW5nfScgbGFiZWwuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtsYWJlbE1ldGF2YXJpYWJsZVN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuXG4gICAgbGFiZWxWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxNZXRhdmFyaWFibGVTdHJpbmd9JyBsYWJlbC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhYmVscyIsImZpbGVDb250ZXh0IiwibGFiZWxWZXJpZmllZCIsImxhYmVsTWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlYnVnIiwibGFiZWwiLCJMYWJlbCIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozs0REFGTjs7Ozs7O0FBRUgsU0FBU0EsWUFBWUMsZ0JBQWdCLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztJQUN2RSxJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBTUMsMEJBQTBCRixZQUFZRyxZQUFZLENBQUNMO0lBRXpERSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBeUMsT0FBeEJGLHlCQUF3QixlQUFhSjtJQUV6RSxJQUFNTyxlQUFlTCxZQUFZTSxnQ0FBZ0MsQ0FBQ1I7SUFFbEUsSUFBSU8sY0FBYztRQUNoQkwsWUFBWU8sS0FBSyxDQUFDLEFBQUMsUUFBK0IsT0FBeEJMLHlCQUF3QixnQ0FBOEJKO0lBQ2xGLE9BQU87UUFDTCxJQUFNVSxRQUFRQyxjQUFLLENBQUNDLG9CQUFvQixDQUFDWjtRQUV6Q0MsT0FBT1ksSUFBSSxDQUFDSDtRQUVaUCxnQkFBZ0I7SUFDbEI7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBMkMsT0FBeEJMLHlCQUF3QixhQUFXSjtJQUMzRTtJQUVBLE9BQU9HO0FBQ1QifQ==