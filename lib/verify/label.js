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
var _necessary = require("necessary");
var _query = require("../utilities/query");
var log = _necessary.loggingUtilities.log;
function verifyLabel(labelNode, labels, context) {
    var labelVerified = false;
    var labelName = (0, _query.labelNameFromLabelNode)(labelNode), label = labelName, labelPresent = context.isLabelPresent(label);
    if (labelPresent) {
        log.error("The label ".concat(label, " is already present"));
    } else {
        labels.push(label);
        labelVerified = true;
    }
    return labelVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvZ2dpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbG9nIH0gPSBsb2dnaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbChsYWJlbE5vZGUsIGxhYmVscywgY29udGV4dCkge1xuICBsZXQgbGFiZWxWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTmFtZSA9IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbE5hbWUsICAvLy9cbiAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudChsYWJlbCk7XG5cbiAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgIGxvZy5lcnJvcihgVGhlIGxhYmVsICR7bGFiZWx9IGlzIGFscmVhZHkgcHJlc2VudGApO1xuICB9IGVsc2Uge1xuICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgIGxhYmVsVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWwiLCJsb2ciLCJsb2dnaW5nVXRpbGl0aWVzIiwibGFiZWxOb2RlIiwibGFiZWxzIiwiY29udGV4dCIsImxhYmVsVmVyaWZpZWQiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWwiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudCIsImVycm9yIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozt5QkFOUztxQkFFTTtBQUV2QyxJQUFNLEFBQUVDLE1BQVFDLDJCQUFnQixDQUF4QkQ7QUFFTyxTQUFTRCxZQUFZRyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0lBQzlELElBQUlDLGdCQUFnQixLQUFLO0lBRXpCLElBQU1DLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDTCxZQUNuQ00sUUFBUUYsV0FDUkcsZUFBZUwsUUFBUU0sY0FBYyxDQUFDRjtJQUU1QyxJQUFJQyxjQUFjO1FBQ2hCVCxJQUFJVyxLQUFLLENBQUMsQUFBQyxhQUFrQixPQUFOSCxPQUFNO0lBQy9CLE9BQU87UUFDTEwsT0FBT1MsSUFBSSxDQUFDSjtRQUVaSCxnQkFBZ0IsSUFBSTtJQUN0QixDQUFDO0lBRUQsT0FBT0E7QUFDVCJ9