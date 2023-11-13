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
    fileContext.trace("Verifying the '".concat(labelString, "' label..."), labelNode);
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
        fileContext.debug("...verified the '".concat(labelString, "' label."), labelNode);
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGFiZWwobGFiZWxOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhsYWJlbE5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gLCBsYWJlbE5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobGFiZWxOb2RlKTtcblxuICAgIGZpbGVDb250ZXh0LmluZm8oYFRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gLCBsYWJlbE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuXG4gICAgbGFiZWxWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gLCBsYWJlbE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsYWJlbE5vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWxTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJpbmZvIiwibGFiZWwiLCJMYWJlbCIsImZyb21MYWJlbE5vZGUiLCJwdXNoIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NERBSk47cUJBRXFCOzs7Ozs7QUFFeEIsU0FBU0EsWUFBWUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7SUFDaEUsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQU1DLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDTCxZQUNuQ00sY0FBY0osWUFBWUssWUFBWSxDQUFDUDtJQUU3Q0UsWUFBWU0sS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYU47SUFFN0QsSUFBTVMsZUFBZVAsWUFBWVEseUJBQXlCLENBQUNOO0lBRTNELElBQUlLLGNBQWM7UUFDaEIsSUFBTUgsZUFBY0osWUFBWUssWUFBWSxDQUFDUDtRQUU3Q0UsWUFBWVMsSUFBSSxDQUFDLEFBQUMsUUFBbUIsT0FBWkwsY0FBWSxnQ0FBOEJOO0lBQ3JFLE9BQU87UUFDTCxJQUFNWSxRQUFRQyxjQUFLLENBQUNDLGFBQWEsQ0FBQ2Q7UUFFbENDLE9BQU9jLElBQUksQ0FBQ0g7UUFFWlQsZ0JBQWdCO0lBQ2xCO0lBRUEsSUFBSUEsZUFBZTtRQUNqQkQsWUFBWWMsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpWLGFBQVksYUFBV047SUFDL0Q7SUFFQSxPQUFPRztBQUNUIn0=