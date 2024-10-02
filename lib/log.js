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
var _message = require("./utilities/message");
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
            value: function trace(message, node, tokens, filePath) {
                var level = TRACE_LEVEL;
                this.write(level, message, node, tokens, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message, node, tokens, filePath) {
                var level = DEBUG_LEVEL;
                this.write(level, message, node, tokens, filePath);
            }
        },
        {
            key: "info",
            value: function info(message, node, tokens, filePath) {
                var level = INFO_LEVEL;
                this.write(level, message, node, tokens, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message, node, tokens, filePath) {
                var level = WARNING_LEVEL;
                this.write(level, message, node, tokens, filePath);
            }
        },
        {
            key: "error",
            value: function error(message, node, tokens, filePath) {
                var level = ERROR_LEVEL;
                this.write(level, message, node, tokens, filePath);
            }
        },
        {
            key: "write",
            value: function write(level, message, node, tokens, filePath) {
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
                message = formatMessage(level, message, node, tokens, filePath); ///
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
    var node = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, tokens = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, filePath = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    var upperCaseLevel = level.toUpperCase();
    if (node === null || tokens === null) {
        message = filePath !== null ? "".concat(upperCaseLevel, ": ").concat(filePath, " - ").concat(message) : "".concat(upperCaseLevel, ": ").concat(message);
    } else {
        var leastLineIndex = (0, _message.leastLineIndexFromNodeAndTokens)(node, tokens), leastLineNumber = leastLineIndex, greatestLineIndex = (0, _message.greatestLineIndexFromNodeAndTokens)(node, tokens), greatestLineNumber = greatestLineIndex; ///
        if (leastLineNumber === greatestLineNumber) {
            var lineNumber = leastLineNumber; ///
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(lineNumber, ") - ").concat(message);
        } else {
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(leastLineNumber, "-").concat(greatestLineNumber, ") - ").concat(message);
        }
    }
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9tZXNzYWdlXCI7XG5cbmNvbnN0IHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVscyA9IFtcbiAgICAgICAgICAgIFRSQUNFX0xFVkVMLFxuICAgICAgICAgICAgREVCVUdfTEVWRUwsXG4gICAgICAgICAgICBJTkZPX0xFVkVMLFxuICAgICAgICAgICAgV0FSTklOR19MRVZFTCxcbiAgICAgICAgICAgIEVSUk9SX0xFVkVMXG4gICAgICAgICAgXSxcbiAgICAgICAgICBsZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobGV2ZWwpLFxuICAgICAgICAgIGxvZ0xldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZih0aGlzLmxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTsgIC8vL1xuXG4gICAgdGhpcy5mb2xsb3cgP1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSkgOlxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXSxcbiAgICAgICAgICBsb2dMZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIGZvbGxvdyA9IGZhbHNlLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9sbG93QW5kTG9nTGV2ZWwoZm9sbG93LCBsb2dMZXZlbCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gZm9sbG93ID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdyk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2UobGV2ZWwsIG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgY29uc3QgdXBwZXJDYXNlTGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmICgobm9kZSA9PT0gbnVsbCkgfHwgKHRva2VucyA9PT0gbnVsbCkpIHtcbiAgICBtZXNzYWdlID0gKGZpbGVQYXRoICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgIGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gLSAke21lc3NhZ2V9YDpcbiAgICAgICAgICAgICAgICBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGxlYXN0TGluZU51bWJlciA9IGxlYXN0TGluZUluZGV4LCAvLy9cbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVOdW1iZXIgPSBncmVhdGVzdExpbmVJbmRleDsgLy8vXG5cbiAgICBpZiAobGVhc3RMaW5lTnVtYmVyID09PSBncmVhdGVzdExpbmVOdW1iZXIpIHtcbiAgICAgIGNvbnN0IGxpbmVOdW1iZXIgPSBsZWFzdExpbmVOdW1iZXI7IC8vL1xuXG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsaW5lTnVtYmVyfSkgLSAke21lc3NhZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gKCR7bGVhc3RMaW5lTnVtYmVyfS0ke2dyZWF0ZXN0TGluZU51bWJlcn0pIC0gJHttZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiTG9nIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJtZXNzYWdlcyIsImxvZ0xldmVsIiwiZm9sbG93IiwiZ2V0TWVzc2FnZXMiLCJnZXRMb2dMZXZlbCIsImdldEZvbGxvdyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJ0b2tlbnMiLCJmaWxlUGF0aCIsImxldmVsIiwid3JpdGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmcm9tTm90aGluZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsInVwcGVyQ2FzZUxldmVsIiwidG9VcHBlckNhc2UiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJsZWFzdExpbmVOdW1iZXIiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVOdW1iZXIiLCJsaW5lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFORTt1QkFFNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLGNBQXFFQyxpQkFBTSxDQUEzRUQsYUFBYUUsY0FBd0RELGlCQUFNLENBQTlEQyxhQUFhQyxhQUEyQ0YsaUJBQU0sQ0FBakRFLFlBQVlDLGdCQUErQkgsaUJBQU0sQ0FBckNHLGVBQWVDLGNBQWdCSixpQkFBTSxDQUF0Qkk7QUFFOUMsSUFBQSxBQUFNTixvQkFBTjthQUFNQSxJQUNQTyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEbkJUO1FBRWpCLElBQUksQ0FBQ08sUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR1Q7O1lBT25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUTtnQkFDbkMsSUFBTUMsUUFBUWpCO2dCQUVkLElBQUksQ0FBQ2tC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