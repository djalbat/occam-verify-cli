"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get startClock () {
        return startClock;
    },
    get stopClock () {
        return stopClock;
    }
});
function stopClock(now, log) {
    const then = now; ///
    now = Date.now();
    const seconds = Math.floor(now - then) / 1000;
    log.info(`Time ${seconds} seconds.`);
}
function startClock() {
    let now;
    now = Date.now();
    return now;
}
const _default = {
    stopClock,
    startClock
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wQ2xvY2sobm93LCBsb2cpIHtcbiAgY29uc3QgdGhlbiA9IG5vdzsgLy8vXG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihub3cgLSB0aGVuKSAvIDEwMDA7XG5cbiAgbG9nLmluZm8oYFRpbWUgJHtzZWNvbmRzfSBzZWNvbmRzLmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRDbG9jaygpIHtcbiAgbGV0IG5vdztcblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBub3c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RvcENsb2NrLFxuICBzdGFydENsb2NrXG59O1xuIl0sIm5hbWVzIjpbInN0YXJ0Q2xvY2siLCJzdG9wQ2xvY2siLCJub3ciLCJsb2ciLCJ0aGVuIiwiRGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQkE7ZUFBQTs7UUFSZ0JBO2VBQUFBOztRQVZBQztlQUFBQTs7O0FBQVQsU0FBU0EsVUFBVUMsR0FBRyxFQUFFQyxHQUFHO0lBQ2hDLE1BQU1DLE9BQU9GLEtBQUssR0FBRztJQUVyQkEsTUFBTUcsS0FBS0gsR0FBRztJQUVkLE1BQU1JLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ04sTUFBTUUsUUFBUTtJQUV6Q0QsSUFBSU0sSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFSCxRQUFRLFNBQVMsQ0FBQztBQUNyQztBQUVPLFNBQVNOO0lBQ2QsSUFBSUU7SUFFSkEsTUFBTUcsS0FBS0gsR0FBRztJQUVkLE9BQU9BO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JEO0lBQ0FEO0FBQ0YifQ==