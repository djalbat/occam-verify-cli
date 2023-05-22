"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function trace(node, message) {
    this.context.trace(node, message);
}
function debug(node, message) {
    this.context.debug(node, message);
}
function info(node, message) {
    this.context.info(node, message);
}
function warning(node, message) {
    this.context.warning(node, message);
}
function error(node, message) {
    this.context.error(node, message);
}
function fatal(node, message) {
    this.context.fatal(node, message);
}
var loggingMixins = {
    trace: trace,
    debug: debug,
    info: info,
    warning: warning,
    error: error,
    fatal: fatal
};
var _default = loggingMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbG9nZ2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gdHJhY2Uobm9kZSwgbWVzc2FnZSkgeyB0aGlzLmNvbnRleHQudHJhY2Uobm9kZSwgbWVzc2FnZSk7IH1cblxuZnVuY3Rpb24gZGVidWcobm9kZSwgbWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobm9kZSwgbWVzc2FnZSk7IH1cblxuZnVuY3Rpb24gaW5mbyhub2RlLCBtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5pbmZvKG5vZGUsIG1lc3NhZ2UpOyB9XG5cbmZ1bmN0aW9uIHdhcm5pbmcobm9kZSwgbWVzc2FnZSkgeyB0aGlzLmNvbnRleHQud2FybmluZyhub2RlLCBtZXNzYWdlKTsgfVxuXG5mdW5jdGlvbiBlcnJvcihub2RlLCBtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihub2RlLCBtZXNzYWdlKTsgfVxuXG5mdW5jdGlvbiBmYXRhbChub2RlLCBtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5mYXRhbChub2RlLCBtZXNzYWdlKTsgfVxuXG5jb25zdCBsb2dnaW5nTWl4aW5zID0ge1xuICB0cmFjZSxcbiAgZGVidWcsXG4gIGluZm8sXG4gIHdhcm5pbmcsXG4gIGVycm9yLFxuICBmYXRhbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2luZ01peGlucztcbiJdLCJuYW1lcyI6WyJ0cmFjZSIsIm5vZGUiLCJtZXNzYWdlIiwiY29udGV4dCIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwibG9nZ2luZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUJBOzs7ZUFBQTs7O0FBckJBLFNBQVNBLE1BQU1DLElBQUksRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsUUFBUUgsTUFBTUMsTUFBTUM7QUFBVTtBQUVuRSxTQUFTRSxNQUFNSCxJQUFJLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLFFBQVFDLE1BQU1ILE1BQU1DO0FBQVU7QUFFbkUsU0FBU0csS0FBS0osSUFBSSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxRQUFRRSxLQUFLSixNQUFNQztBQUFVO0FBRWpFLFNBQVNJLFFBQVFMLElBQUksRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsUUFBUUcsUUFBUUwsTUFBTUM7QUFBVTtBQUV2RSxTQUFTSyxNQUFNTixJQUFJLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLFFBQVFJLE1BQU1OLE1BQU1DO0FBQVU7QUFFbkUsU0FBU00sTUFBTVAsSUFBSSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxRQUFRSyxNQUFNUCxNQUFNQztBQUFVO0FBRW5FLElBQU1PLGdCQUFnQjtJQUNwQlQsT0FBQUE7SUFDQUksT0FBQUE7SUFDQUMsTUFBQUE7SUFDQUMsU0FBQUE7SUFDQUMsT0FBQUE7SUFDQUMsT0FBQUE7QUFDRjtJQUVBLFdBQWVDIn0=