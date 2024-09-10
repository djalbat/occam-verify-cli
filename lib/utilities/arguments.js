"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLastRemainingArgumentFunction", {
    enumerable: true,
    get: function() {
        return isLastRemainingArgumentFunction;
    }
});
var _array = require("./array");
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function isLastRemainingArgumentFunction(remainingArguments) {
    var lastRemainingArgumentFunction = false;
    var remainingArgumentsLength = remainingArguments.length;
    if (remainingArgumentsLength > 0) {
        var lastRemainingArgument = (0, _array.last)(remainingArguments);
        lastRemainingArgumentFunction = (typeof lastRemainingArgument === "undefined" ? "undefined" : _type_of(lastRemainingArgument)) === _constants.FUNCTION;
    }
    return lastRemainingArgumentFunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJndW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgcmVtYWluaW5nQXJndW1lbnRzTGVuZ3RoID0gcmVtYWluaW5nQXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAocmVtYWluaW5nQXJndW1lbnRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudCA9IGxhc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gKHR5cGVvZiBsYXN0UmVtYWluaW5nQXJndW1lbnQgPT09IEZVTkNUSU9OKTtcbiAgfVxuXG4gIHJldHVybiBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwicmVtYWluaW5nQXJndW1lbnRzIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJyZW1haW5pbmdBcmd1bWVudHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0UmVtYWluaW5nQXJndW1lbnQiLCJsYXN0IiwiRlVOQ1RJT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtnQkE7OztlQUFBQTs7O3FCQUhLO3lCQUNJOzs7OztBQUVsQixTQUFTQSxnQ0FBZ0NDLGtCQUFrQjtJQUNoRSxJQUFJQyxnQ0FBZ0M7SUFFcEMsSUFBTUMsMkJBQTJCRixtQkFBbUJHLE1BQU07SUFFMUQsSUFBSUQsMkJBQTJCLEdBQUc7UUFDaEMsSUFBTUUsd0JBQXdCQyxJQUFBQSxXQUFJLEVBQUNMO1FBRW5DQyxnQ0FBaUMsQ0FBQSxPQUFPRyxzREFBUCxTQUFPQSxzQkFBb0IsTUFBTUUsbUJBQVE7SUFDNUU7SUFFQSxPQUFPTDtBQUNUIn0=