"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Log;
    }
});
var _necessary = require("necessary");
var _constants = require("./constants");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL;
var Log = /*#__PURE__*/ function() {
    function Log(messages, logLevel, follow) {
        _class_call_check(this, Log);
        this.messages = messages;
        this.logLevel = logLevel;
        this.follow = follow;
    }
    _create_class(Log, [
        {
            key: "getMessages",
            value: function getMessages() {
                return this.messages;
            }
        },
        {
            key: "getLogLevel",
            value: function getLogLevel() {
                return this.logLevel;
            }
        },
        {
            key: "getFollow",
            value: function getFollow() {
                return this.follow;
            }
        },
        {
            key: "trace",
            value: function trace(message, filePath) {
                var lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = TRACE_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message, filePath) {
                var lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = DEBUG_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message, filePath) {
                var lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = INFO_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message, filePath) {
                var lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = WARNING_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message, filePath) {
                var lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = ERROR_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "write",
            value: function write(level, message, filePath, lineIndex) {
                var _$levels = [
                    TRACE_LEVEL,
                    DEBUG_LEVEL,
                    INFO_LEVEL,
                    WARNING_LEVEL,
                    ERROR_LEVEL
                ], levelIndex = _$levels.indexOf(level), logLevelIndex = _$levels.indexOf(this.logLevel);
                if (levelIndex < logLevelIndex) {
                    return;
                }
                message = formatMessage(level, message, filePath, lineIndex); ///
                this.follow ? console.log(message) : this.messages.push(message);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var messages = [], logLevel = TRACE_LEVEL, follow = false, log = new Log(messages, logLevel, follow);
                return log;
            }
        },
        {
            key: "fromFollowAndLogLevel",
            value: function fromFollowAndLogLevel(follow, logLevel) {
                var messages = follow ? null : [], log = new Log(messages, logLevel, follow);
                return log;
            }
        }
    ]);
    return Log;
}();
function formatMessage(level, message) {
    var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, lineIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var formattedMessage = _constants.EMPTY_STRING;
    var upperCaseLevel = level.toUpperCase();
    formattedMessage += "".concat(upperCaseLevel, ":");
    if (filePath !== null) {
        formattedMessage += " ".concat(filePath);
    }
    if (lineIndex !== null) {
        formattedMessage += " [".concat(lineIndex, "]");
    }
    formattedMessage += " - ".concat(message);
    message = formattedMessage; ///
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7RU1QVFlfU1RSSU5HfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMIH0gPSBsZXZlbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZyB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgIHRoaXMubG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgICB0aGlzLmZvbGxvdyA9IGZvbGxvdztcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICB9XG5cbiAgZ2V0TG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nTGV2ZWw7XG4gIH1cblxuICBnZXRGb2xsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9sbG93O1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW10sXG4gICAgICAgICAgbG9nTGV2ZWwgPSBUUkFDRV9MRVZFTCxcbiAgICAgICAgICBmb2xsb3cgPSBmYWxzZSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGZvbGxvdyA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgbGV0IGZvcm1hdHRlZE1lc3NhZ2UgPSBFTVBUWV9TVFJJTkc7XG5cbiAgY29uc3QgdXBwZXJDYXNlTGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuXG4gIGZvcm1hdHRlZE1lc3NhZ2UgKz0gYCR7dXBwZXJDYXNlTGV2ZWx9OmA7XG5cbiAgaWYgKGZpbGVQYXRoICE9PSBudWxsKSB7XG4gICAgZm9ybWF0dGVkTWVzc2FnZSArPSBgICR7ZmlsZVBhdGh9YDtcbiAgfVxuXG4gIGlmIChsaW5lSW5kZXggIT09IG51bGwpIHtcbiAgICBmb3JtYXR0ZWRNZXNzYWdlICs9IGAgWyR7bGluZUluZGV4fV1gO1xuICB9XG5cbiAgZm9ybWF0dGVkTWVzc2FnZSArPSBgIC0gJHttZXNzYWdlfWA7XG5cbiAgbWVzc2FnZSA9IGZvcm1hdHRlZE1lc3NhZ2U7IC8vL1xuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuIl0sIm5hbWVzIjpbIkxvZyIsIlRSQUNFX0xFVkVMIiwibGV2ZWxzIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwibWVzc2FnZXMiLCJsb2dMZXZlbCIsImZvbGxvdyIsImdldE1lc3NhZ2VzIiwiZ2V0TG9nTGV2ZWwiLCJnZXRGb2xsb3ciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsImxldmVsIiwid3JpdGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmcm9tTm90aGluZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsImZvcm1hdHRlZE1lc3NhZ2UiLCJFTVBUWV9TVFJJTkciLCJ1cHBlckNhc2VMZXZlbCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozt5QkFMRTt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUMsY0FBcUVDLGlCQUFNLENBQTNFRCxhQUFhRSxjQUF3REQsaUJBQU0sQ0FBOURDLGFBQWFDLGFBQTJDRixpQkFBTSxDQUFqREUsWUFBWUMsZ0JBQStCSCxpQkFBTSxDQUFyQ0csZUFBZUMsY0FBZ0JKLGlCQUFNLENBQXRCSTtBQUU5QyxJQUFBLEFBQU1OLG9CQUFOO2FBQU1BLElBQ1BPLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO2dDQURuQlQ7UUFFakIsSUFBSSxDQUFDTyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUpHVDs7WUFPbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0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