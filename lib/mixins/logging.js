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
function trace(message) {
    this.context.trace(message);
}
function debug(message) {
    this.context.debug(message);
}
function info(message) {
    this.context.info(message);
}
function warning(message) {
    this.context.warning(message);
}
function error(message) {
    this.context.error(message);
}
function fatal(message) {
    this.context.fatal(message);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbG9nZ2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gdHJhY2UobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSk7IH1cblxuZnVuY3Rpb24gZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSk7IH1cblxuZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UpOyB9XG5cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlKTsgfVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlKTsgfVxuXG5mdW5jdGlvbiBmYXRhbChtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5mYXRhbChtZXNzYWdlKTsgfVxuXG5jb25zdCBsb2dnaW5nTWl4aW5zID0ge1xuICB0cmFjZSxcbiAgZGVidWcsXG4gIGluZm8sXG4gIHdhcm5pbmcsXG4gIGVycm9yLFxuICBmYXRhbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2luZ01peGlucztcbiJdLCJuYW1lcyI6WyJ0cmFjZSIsIm1lc3NhZ2UiLCJjb250ZXh0IiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJsb2dnaW5nTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1QkE7OztlQUFBOzs7QUFyQkEsU0FBU0EsTUFBTUMsT0FBTyxFQUFFO0lBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUNGLEtBQUssQ0FBQ0M7QUFBVTtBQUV2RCxTQUFTRSxNQUFNRixPQUFPLEVBQUU7SUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRjtBQUFVO0FBRXZELFNBQVNHLEtBQUtILE9BQU8sRUFBRTtJQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDRSxJQUFJLENBQUNIO0FBQVU7QUFFckQsU0FBU0ksUUFBUUosT0FBTyxFQUFFO0lBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUNHLE9BQU8sQ0FBQ0o7QUFBVTtBQUUzRCxTQUFTSyxNQUFNTCxPQUFPLEVBQUU7SUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDTDtBQUFVO0FBRXZELFNBQVNNLE1BQU1OLE9BQU8sRUFBRTtJQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDSyxLQUFLLENBQUNOO0FBQVU7QUFFdkQsSUFBTU8sZ0JBQWdCO0lBQ3BCUixPQUFBQTtJQUNBRyxPQUFBQTtJQUNBQyxNQUFBQTtJQUNBQyxTQUFBQTtJQUNBQyxPQUFBQTtJQUNBQyxPQUFBQTtBQUNGO0lBRUEsV0FBZUMifQ==