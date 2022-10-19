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
var _query = require("../utilities/query");
function verifyLabel(labelNode, labels, context) {
    var labelVerified = false;
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), label = labelName, labelPresent = context.isLabelPresent(label);
    if (labelPresent) {
        context.error("The label ".concat(label, " is already present"));
    } else {
        labels.push(label);
        labelVerified = true;
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxhYmVsKGxhYmVsTm9kZSwgbGFiZWxzLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50KGxhYmVsKTtcblxuICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlIGxhYmVsICR7bGFiZWx9IGlzIGFscmVhZHkgcHJlc2VudGApO1xuICB9IGVsc2Uge1xuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsYWJlbE5vZGUiLCJsYWJlbHMiLCJjb250ZXh0IiwibGFiZWxWZXJpZmllZCIsImxhYmVsTmFtZSIsImxhYmVsTmFtZUZyb21MYWJlbE5vZGUiLCJsYWJlbCIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50IiwiZXJyb3IiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUZlO0FBRXhCLFNBQVNBLFlBQVlDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDOUQsSUFBSUMsZ0JBQWdCLEtBQUs7SUFFekIsSUFBTUMsWUFBWUMsSUFBQUEsNkJBQXNCLEVBQUNMLFlBQ25DTSxRQUFRRixXQUNSRyxlQUFlTCxRQUFRTSxjQUFjLENBQUNGO0lBRTVDLElBQUlDLGNBQWM7UUFDaEJMLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGFBQWtCLE9BQU5ILE9BQU07SUFDbkMsT0FBTztRQUNMTCxPQUFPUyxJQUFJLENBQUNKO1FBRVpILGdCQUFnQixJQUFJO0lBQ3RCLENBQUM7SUFFRCxPQUFPQTtBQUNUIn0=