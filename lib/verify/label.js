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
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), labelString = fileContext.nodeAsString(labelNode);
    fileContext.trace("Verifying the '".concat(labelString, "' label..."));
    var labelPresent = fileContext.isLabelPresentByLabelName(labelName);
    if (labelPresent) {
        var labelString1 = fileContext.nodeAsString(labelNode);
        fileContext.info("The '".concat(labelString1, "' label is already present."), labelNode);
    } else {
        var label = _label.default.fromLabelNode(labelNode);
        labels.push(label);
        labelVerified = true;
    }
    if (labelVerified) {
        fileContext.debug("...verified the '".concat(labelString, "' label."));
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhsYWJlbE5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICBjb25zdCBsYWJlbFByZXNlbnQgPSBmaWxlQ29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5pbmZvKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbGFiZWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gIH1cblxuICByZXR1cm4gbGFiZWxWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbCIsImxhYmVsTm9kZSIsImxhYmVscyIsImZpbGVDb250ZXh0IiwibGFiZWxWZXJpZmllZCIsImxhYmVsTmFtZSIsImxhYmVsTmFtZUZyb21MYWJlbE5vZGUiLCJsYWJlbFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImluZm8iLCJsYWJlbCIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsInB1c2giLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozs0REFKTjtxQkFFcUI7Ozs7OztBQUV4QixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztJQUNoRSxJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBTUMsWUFBWUMsSUFBQUEsNkJBQXNCLEVBQUNMLFlBQ25DTSxjQUFjSixZQUFZSyxZQUFZLENBQUNQO0lBRTdDRSxZQUFZTSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWTtJQUVoRCxJQUFNRyxlQUFlUCxZQUFZUSx5QkFBeUIsQ0FBQ047SUFFM0QsSUFBSUssY0FBYztRQUNoQixJQUFNSCxlQUFjSixZQUFZSyxZQUFZLENBQUNQO1FBRTdDRSxZQUFZUyxJQUFJLENBQUMsQUFBQyxRQUFtQixPQUFaTCxjQUFZLGdDQUE4Qk47SUFDckUsT0FBTztRQUNMLElBQU1ZLFFBQVFDLGNBQUssQ0FBQ0MsYUFBYSxDQUFDZDtRQUVsQ0MsT0FBT2MsSUFBSSxDQUFDSDtRQUVaVCxnQkFBZ0I7SUFDbEI7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZYyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWlYsYUFBWTtJQUNwRDtJQUVBLE9BQU9IO0FBQ1QifQ==