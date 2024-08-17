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
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyLabel(labelNode, labels, fileContext) {
    var labelVerified = false;
    var labelName = (0, _name.labelNameFromLabelNode)(labelNode), labelString = fileContext.nodeAsString(labelNode);
    fileContext.trace("Verifying the '".concat(labelString, "' label..."), labelNode);
    var labelPresent = fileContext.isLabelPresentByLabelName(labelName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbChsYWJlbE5vZGUsIGxhYmVscywgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxhYmVsVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5hbWUgPSBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSksXG4gICAgICAgIGxhYmVsU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmAsIGxhYmVsTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhsYWJlbE5vZGUpO1xuXG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gLCBsYWJlbE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuXG4gICAgbGFiZWxWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gLCBsYWJlbE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsYWJlbE5vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWxTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJkZWJ1ZyIsImxhYmVsIiwiTGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozs0REFKTjtvQkFFcUI7Ozs7OztBQUV4QixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztJQUNoRSxJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBTUMsWUFBWUMsSUFBQUEsNEJBQXNCLEVBQUNMLFlBQ25DTSxjQUFjSixZQUFZSyxZQUFZLENBQUNQO0lBRTdDRSxZQUFZTSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxlQUFhTjtJQUU3RCxJQUFNUyxlQUFlUCxZQUFZUSx5QkFBeUIsQ0FBQ047SUFFM0QsSUFBSUssY0FBYztRQUNoQixJQUFNSCxlQUFjSixZQUFZSyxZQUFZLENBQUNQO1FBRTdDRSxZQUFZUyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaTCxjQUFZLGdDQUE4Qk47SUFDdEUsT0FBTztRQUNMLElBQU1ZLFFBQVFDLGNBQUssQ0FBQ0MsYUFBYSxDQUFDZDtRQUVsQ0MsT0FBT2MsSUFBSSxDQUFDSDtRQUVaVCxnQkFBZ0I7SUFDbEI7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZUyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkwsYUFBWSxhQUFXTjtJQUMvRDtJQUVBLE9BQU9HO0FBQ1QifQ==