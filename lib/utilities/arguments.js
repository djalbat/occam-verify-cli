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
var _necessary = require("necessary");
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var last = _necessary.arrayUtilities.last;
function isLastRemainingArgumentFunction(remainingArguments) {
    var lastRemainingArgumentFunction = false;
    var remainingArgumentsLength = remainingArguments.length;
    if (remainingArgumentsLength > 0) {
        var lastRemainingArgument = last(remainingArguments);
        lastRemainingArgumentFunction = (typeof lastRemainingArgument === "undefined" ? "undefined" : _type_of(lastRemainingArgument)) === _constants.FUNCTION;
    }
    return lastRemainingArgumentFunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJndW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBmYWxzZTtcblxuICBjb25zdCByZW1haW5pbmdBcmd1bWVudHNMZW5ndGggPSByZW1haW5pbmdBcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChyZW1haW5pbmdBcmd1bWVudHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50ID0gbGFzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSAodHlwZW9mIGxhc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gRlVOQ1RJT04pO1xuICB9XG5cbiAgcmV0dXJuIGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uO1xufVxuIl0sIm5hbWVzIjpbImlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsInJlbWFpbmluZ0FyZ3VtZW50c0xlbmd0aCIsImxlbmd0aCIsImxhc3RSZW1haW5pbmdBcmd1bWVudCIsIkZVTkNUSU9OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRZ0JBOzs7ZUFBQUE7Ozt5QkFOZTt5QkFFTjs7Ozs7QUFFekIsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFRCxTQUFTRCxnQ0FBZ0NHLGtCQUFrQjtJQUNoRSxJQUFJQyxnQ0FBZ0M7SUFFcEMsSUFBTUMsMkJBQTJCRixtQkFBbUJHLE1BQU07SUFFMUQsSUFBSUQsMkJBQTJCLEdBQUc7UUFDaEMsSUFBTUUsd0JBQXdCTixLQUFLRTtRQUVuQ0MsZ0NBQWlDLENBQUEsT0FBT0csc0RBQVAsU0FBT0Esc0JBQW9CLE1BQU1DLG1CQUFRO0lBQzVFO0lBRUEsT0FBT0o7QUFDVCJ9