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
function verifyLabel(labelNode, labels, fileContext) {
    var labelVerified = false;
    var labelString = fileContext.nodeAsString(labelNode);
    fileContext.trace("Verifying the '".concat(labelString, "' label..."), labelNode);
    var labelPresent = fileContext.isLabelPresentByLabelNode(labelNode);
    if (labelPresent) {
        var labelString1 = fileContext.nodeAsString(labelNode);
        fileContext.debug("The '".concat(labelString1, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    if (labelVerified) {
        fileContext.debug("...verified the '".concat(labelString, "' label."), labelNode);
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobGFiZWxOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCwgbGFiZWxOb2RlKTtcblxuICBjb25zdCBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmAsIGxhYmVsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICBsYWJlbHMucHVzaChsYWJlbCk7XG5cbiAgICBsYWJlbFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChsYWJlbFZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmAsIGxhYmVsTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbGFiZWxWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbCIsImxhYmVsTm9kZSIsImxhYmVscyIsImZpbGVDb250ZXh0IiwibGFiZWxWZXJpZmllZCIsImxhYmVsU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwiZGVidWciLCJsYWJlbCIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7NERBRk47Ozs7OztBQUVILFNBQVNBLFlBQVlDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxXQUFXO0lBQ2hFLElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxjQUFjRixZQUFZRyxZQUFZLENBQUNMO0lBRTdDRSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxlQUFhSjtJQUU3RCxJQUFNTyxlQUFlTCxZQUFZTSx5QkFBeUIsQ0FBQ1I7SUFFM0QsSUFBSU8sY0FBYztRQUNoQixJQUFNSCxlQUFjRixZQUFZRyxZQUFZLENBQUNMO1FBRTdDRSxZQUFZTyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaTCxjQUFZLGdDQUE4Qko7SUFDdEUsT0FBTztRQUNMLElBQU1VLFFBQVFDLGNBQUssQ0FBQ0MsYUFBYSxDQUFDWjtRQUVsQ0MsT0FBT1ksSUFBSSxDQUFDSDtRQUVaUCxnQkFBZ0I7SUFDbEI7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkwsYUFBWSxhQUFXSjtJQUMvRDtJQUVBLE9BQU9HO0FBQ1QifQ==