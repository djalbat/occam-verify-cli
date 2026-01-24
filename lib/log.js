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
var _constants = require("./constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
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
            value: function trace(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = TRACE_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = DEBUG_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = INFO_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = WARNING_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = ERROR_LEVEL;
                this.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "write",
            value: function write(level, message, filePath, lineIndex) {
                var levelIndex = _constants.LEVELS.indexOf(level), logLevelIndex = _constants.LEVELS.indexOf(this.logLevel);
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
function formatMessage(level, message, filePath, lineIndex) {
    var formattedMessage = _constants.EMPTY_STRING;
    var leftPaddedLevel = leftPadLevel(level), upperCaseLeftPaddedLevel = leftPaddedLevel.toUpperCase();
    formattedMessage += "".concat(upperCaseLeftPaddedLevel, ":");
    if (filePath !== null) {
        formattedMessage += " ".concat(filePath);
    }
    if (lineIndex !== null) {
        var leftPaddedLineIndex = leftPadLineIndex(lineIndex);
        formattedMessage += " [".concat(leftPaddedLineIndex, "]");
    }
    formattedMessage += " - ".concat(message);
    message = formattedMessage; ///
    return message;
}
function leftPadLineIndex(lineIndex) {
    lineIndex = "".concat(lineIndex);
    var maximumLength = _constants.LINE_INDEX_MAXIMUM_LENGTH, leftPaddedLineIndex = leftPad(lineIndex, maximumLength);
    return leftPaddedLineIndex;
}
function leftPadLevel(level) {
    var maximumLength = _constants.LEVEL_MAXIMUM_LENGTH, leftPaddedLevel = leftPad(level, maximumLength);
    return leftPaddedLevel;
}
function leftPad(string, maximumLength) {
    var stringLength = string.length, length = maximumLength - stringLength, indent = _constants.SINGLE_SPACE.repeat(length), leftPaddedString = "".concat(indent).concat(string);
    return leftPaddedString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IExFVkVMUywgU0lOR0xFX1NQQUNFLCBFTVBUWV9TVFJJTkcsIExFVkVMX01BWElNVU1fTEVOR1RILCBMSU5FX0lOREVYX01BWElNVU1fTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCBdID0gTEVWRUxTO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpLFxuICAgICAgICAgIGxvZ0xldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgIC8vL1xuXG4gICAgdGhpcy5mb2xsb3cgP1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSkgOlxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXSxcbiAgICAgICAgICBsb2dMZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIGZvbGxvdyA9IGZhbHNlLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9sbG93QW5kTG9nTGV2ZWwoZm9sbG93LCBsb2dMZXZlbCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gZm9sbG93ID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdyk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2UobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgbGV0IGZvcm1hdHRlZE1lc3NhZ2UgPSBFTVBUWV9TVFJJTkc7XG5cbiAgY29uc3QgbGVmdFBhZGRlZExldmVsID0gbGVmdFBhZExldmVsKGxldmVsKSxcbiAgICAgICAgdXBwZXJDYXNlTGVmdFBhZGRlZExldmVsID0gbGVmdFBhZGRlZExldmVsLnRvVXBwZXJDYXNlKCk7XG5cbiAgZm9ybWF0dGVkTWVzc2FnZSArPSBgJHt1cHBlckNhc2VMZWZ0UGFkZGVkTGV2ZWx9OmA7XG5cbiAgaWYgKGZpbGVQYXRoICE9PSBudWxsKSB7XG4gICAgZm9ybWF0dGVkTWVzc2FnZSArPSBgICR7ZmlsZVBhdGh9YDtcbiAgfVxuXG4gIGlmIChsaW5lSW5kZXggIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UGFkZGVkTGluZUluZGV4ID0gbGVmdFBhZExpbmVJbmRleChsaW5lSW5kZXgpO1xuXG4gICAgZm9ybWF0dGVkTWVzc2FnZSArPSBgIFske2xlZnRQYWRkZWRMaW5lSW5kZXh9XWA7XG4gIH1cblxuICBmb3JtYXR0ZWRNZXNzYWdlICs9IGAgLSAke21lc3NhZ2V9YDtcblxuICBtZXNzYWdlID0gZm9ybWF0dGVkTWVzc2FnZTsgLy8vXG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIGxlZnRQYWRMaW5lSW5kZXgobGluZUluZGV4KSB7XG4gIGxpbmVJbmRleCA9IGAke2xpbmVJbmRleH1gO1xuXG4gIGNvbnN0IG1heGltdW1MZW5ndGggPSBMSU5FX0lOREVYX01BWElNVU1fTEVOR1RILFxuICAgICAgICBsZWZ0UGFkZGVkTGluZUluZGV4ID0gbGVmdFBhZChsaW5lSW5kZXgsIG1heGltdW1MZW5ndGgpO1xuXG4gIHJldHVybiBsZWZ0UGFkZGVkTGluZUluZGV4O1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkTGV2ZWwobGV2ZWwpIHtcbiAgY29uc3QgbWF4aW11bUxlbmd0aCA9IExFVkVMX01BWElNVU1fTEVOR1RILFxuICAgICAgICBsZWZ0UGFkZGVkTGV2ZWwgPSBsZWZ0UGFkKGxldmVsLCBtYXhpbXVtTGVuZ3RoKTtcblxuICByZXR1cm4gbGVmdFBhZGRlZExldmVsO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkKHN0cmluZywgbWF4aW11bUxlbmd0aCkge1xuICBjb25zdCBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICBsZW5ndGggPSBtYXhpbXVtTGVuZ3RoIC0gc3RyaW5nTGVuZ3RoLFxuICAgICAgICBpbmRlbnQgPSBTSU5HTEVfU1BBQ0UucmVwZWF0KGxlbmd0aCksXG4gICAgICAgIGxlZnRQYWRkZWRTdHJpbmcgPSBgJHtpbmRlbnR9JHtzdHJpbmd9YDtcblxuICByZXR1cm4gbGVmdFBhZGRlZFN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbIkxvZyIsIkxFVkVMUyIsIlRSQUNFX0xFVkVMIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwibWVzc2FnZXMiLCJsb2dMZXZlbCIsImZvbGxvdyIsImdldE1lc3NhZ2VzIiwiZ2V0TG9nTGV2ZWwiLCJnZXRGb2xsb3ciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsImxldmVsIiwid3JpdGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmcm9tTm90aGluZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsImZvcm1hdHRlZE1lc3NhZ2UiLCJFTVBUWV9TVFJJTkciLCJsZWZ0UGFkZGVkTGV2ZWwiLCJsZWZ0UGFkTGV2ZWwiLCJ1cHBlckNhc2VMZWZ0UGFkZGVkTGV2ZWwiLCJ0b1VwcGVyQ2FzZSIsImxlZnRQYWRkZWRMaW5lSW5kZXgiLCJsZWZ0UGFkTGluZUluZGV4IiwibWF4aW11bUxlbmd0aCIsIkxJTkVfSU5ERVhfTUFYSU1VTV9MRU5HVEgiLCJsZWZ0UGFkIiwiTEVWRUxfTUFYSU1VTV9MRU5HVEgiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJpbmRlbnQiLCJTSU5HTEVfU1BBQ0UiLCJyZXBlYXQiLCJsZWZ0UGFkZGVkU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRyxJQUE2RUMsMkJBQUFBLGlCQUFNLE1BQTNFQyxjQUFxRUQsWUFBeERFLGNBQXdERixZQUEzQ0csYUFBMkNILFlBQS9CSSxnQkFBK0JKLFlBQWhCSyxjQUFnQkw7QUFFOUQsSUFBQSxBQUFNRCxvQkFBTjthQUFNQSxJQUNQTyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEbkJUO1FBRWpCLElBQUksQ0FBQ08sUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR1Q7O1lBT25C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