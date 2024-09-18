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
var TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL, FATAL_LEVEL = _necessary.levels.FATAL_LEVEL;
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
            key: "fatal",
            value: function fatal(message, node, tokens, filePath) {
                var level = FATAL_LEVEL;
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
                    ERROR_LEVEL,
                    FATAL_LEVEL
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9tZXNzYWdlXCI7XG5cbmNvbnN0IHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCwgRkFUQUxfTEVWRUwgfSA9IGxldmVscztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICAgIHRoaXMuZm9sbG93ID0gZm9sbG93O1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gIH1cblxuICBnZXRMb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dMZXZlbDtcbiAgfVxuXG4gIGdldEZvbGxvdygpIHtcbiAgICByZXR1cm4gdGhpcy5mb2xsb3c7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gRkFUQUxfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIHdyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWxzID0gW1xuICAgICAgICAgICAgVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgICBERUJVR19MRVZFTCxcbiAgICAgICAgICAgIElORk9fTEVWRUwsXG4gICAgICAgICAgICBXQVJOSU5HX0xFVkVMLFxuICAgICAgICAgICAgRVJST1JfTEVWRUwsXG4gICAgICAgICAgICBGQVRBTF9MRVZFTCxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZihsZXZlbCksXG4gICAgICAgICAgbG9nTGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKHRoaXMubG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZSA9IGZvcm1hdE1lc3NhZ2UobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyAgLy8vXG5cbiAgICB0aGlzLmZvbGxvdyA/XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKSA6XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdLFxuICAgICAgICAgIGxvZ0xldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgZm9sbG93ID0gZmFsc2UsXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdyk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb2xsb3dBbmRMb2dMZXZlbChmb2xsb3csIGxvZ0xldmVsKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBmb2xsb3cgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICBjb25zdCB1cHBlckNhc2VMZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYgKChub2RlID09PSBudWxsKSB8fCAodG9rZW5zID09PSBudWxsKSkge1xuICAgIG1lc3NhZ2UgPSAoZmlsZVBhdGggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAtICR7bWVzc2FnZX1gOlxuICAgICAgICAgICAgICAgIGAke3VwcGVyQ2FzZUxldmVsfTogJHttZXNzYWdlfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbGVhc3RMaW5lTnVtYmVyID0gbGVhc3RMaW5lSW5kZXgsIC8vL1xuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZU51bWJlciA9IGdyZWF0ZXN0TGluZUluZGV4OyAvLy9cblxuICAgIGlmIChsZWFzdExpbmVOdW1iZXIgPT09IGdyZWF0ZXN0TGluZU51bWJlcikge1xuICAgICAgY29uc3QgbGluZU51bWJlciA9IGxlYXN0TGluZU51bWJlcjsgLy8vXG5cbiAgICAgIG1lc3NhZ2UgPSBgJHt1cHBlckNhc2VMZXZlbH06ICR7ZmlsZVBhdGh9ICgke2xpbmVOdW1iZXJ9KSAtICR7bWVzc2FnZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsZWFzdExpbmVOdW1iZXJ9LSR7Z3JlYXRlc3RMaW5lTnVtYmVyfSkgLSAke21lc3NhZ2V9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZTtcbn1cbiJdLCJuYW1lcyI6WyJMb2ciLCJUUkFDRV9MRVZFTCIsImxldmVscyIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsIkZBVEFMX0xFVkVMIiwibWVzc2FnZXMiLCJsb2dMZXZlbCIsImZvbGxvdyIsImdldE1lc3NhZ2VzIiwiZ2V0TG9nTGV2ZWwiLCJnZXRGb2xsb3ciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJub2RlIiwidG9rZW5zIiwiZmlsZVBhdGgiLCJsZXZlbCIsIndyaXRlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmcm9tTm90aGluZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsInVwcGVyQ2FzZUxldmVsIiwidG9VcHBlckNhc2UiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJsZWFzdExpbmVOdW1iZXIiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVOdW1iZXIiLCJsaW5lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFORTt1QkFFNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLGNBQWtGQyxpQkFBTSxDQUF4RkQsYUFBYUUsY0FBcUVELGlCQUFNLENBQTNFQyxhQUFhQyxhQUF3REYsaUJBQU0sQ0FBOURFLFlBQVlDLGdCQUE0Q0gsaUJBQU0sQ0FBbERHLGVBQWVDLGNBQTZCSixpQkFBTSxDQUFuQ0ksYUFBYUMsY0FBZ0JMLGlCQUFNLENBQXRCSztBQUUzRCxJQUFBLEFBQU1QLG9CQUFOO2FBQU1BLElBQ1BRLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO2dDQURuQlY7UUFFakIsSUFBSSxDQUFDUSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUpHVjs7WUFPbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0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