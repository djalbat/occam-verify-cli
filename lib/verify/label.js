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
function verifyLabel(labelsMetavariableNode, labels, fileContext) {
    var labelVerified = false;
    var labelMetavariableString = fileContext.nodeAsString(labelsMetavariableNode);
    fileContext.trace("Verifying the '".concat(labelMetavariableString, "' label..."), labelsMetavariableNode);
    var labelPresent = fileContext.isLabelPresentByLabelMetavariableNode(labelsMetavariableNode);
    if (labelPresent) {
        fileContext.debug("The '".concat(labelMetavariableString, "' label is already present."), labelsMetavariableNode);
    } else {
        var metavariableNode = labelsMetavariableNode, label = _label.default.fromMetavariableNode(metavariableNode);
        labels.push(label);
        labelVerified = true;
    }
    if (labelVerified) {
        fileContext.debug("...verified the '".concat(labelMetavariableString, "' label."), labelsMetavariableNode);
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxzTWV0YXZhcmlhYmxlTm9kZSwgbGFiZWxzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGFiZWxWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsc01ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsTWV0YXZhcmlhYmxlU3RyaW5nfScgbGFiZWwuLi5gLCBsYWJlbHNNZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxNZXRhdmFyaWFibGVOb2RlKGxhYmVsc01ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsTWV0YXZhcmlhYmxlU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmAsIGxhYmVsc01ldGF2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbHNNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsTWV0YXZhcmlhYmxlU3RyaW5nfScgbGFiZWwuYCwgbGFiZWxzTWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbGFiZWxWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbCIsImxhYmVsc01ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJsYWJlbE1ldGF2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTWV0YXZhcmlhYmxlTm9kZSIsImRlYnVnIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwiTGFiZWwiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7NERBRk47Ozs7OztBQUVILFNBQVNBLFlBQVlDLHNCQUFzQixFQUFFQyxNQUFNLEVBQUVDLFdBQVc7SUFDN0UsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQU1DLDBCQUEwQkYsWUFBWUcsWUFBWSxDQUFDTDtJQUV6REUsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRix5QkFBd0IsZUFBYUo7SUFFekUsSUFBTU8sZUFBZUwsWUFBWU0scUNBQXFDLENBQUNSO0lBRXZFLElBQUlPLGNBQWM7UUFDaEJMLFlBQVlPLEtBQUssQ0FBQyxBQUFDLFFBQStCLE9BQXhCTCx5QkFBd0IsZ0NBQThCSjtJQUNsRixPQUFPO1FBQ0wsSUFBTVUsbUJBQW1CVix3QkFDbkJXLFFBQVFDLGNBQUssQ0FBQ0Msb0JBQW9CLENBQUNIO1FBRXpDVCxPQUFPYSxJQUFJLENBQUNIO1FBRVpSLGdCQUFnQjtJQUNsQjtJQUVBLElBQUlBLGVBQWU7UUFDakJELFlBQVlPLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QkwseUJBQXdCLGFBQVdKO0lBQzNFO0lBRUEsT0FBT0c7QUFDVCJ9