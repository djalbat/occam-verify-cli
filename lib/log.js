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
var _lineIndex = require("./utilities/lineIndex");
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
    if (node === null) {
        message = "".concat(upperCaseLevel, ": ").concat(message);
    } else {
        var leastLineIndex = (0, _lineIndex.leastLineIndexFromNodeAndTokens)(node, tokens), leastLineNumber = leastLineIndex, greatestLineIndex = (0, _lineIndex.greatestLineIndexFromNodeAndTokens)(node, tokens), greatestLineNumber = greatestLineIndex; ///
        if (leastLineNumber === greatestLineNumber) {
            var lineNumber = leastLineNumber; ///
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(lineNumber, ") - ").concat(message);
        } else {
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(leastLineNumber, "-").concat(greatestLineNumber, ") - ").concat(message);
        }
    }
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9saW5lSW5kZXhcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBGQVRBTF9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTCxcbiAgICAgICAgICAgIEZBVEFMX0xFVkVMLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW10sXG4gICAgICAgICAgbG9nTGV2ZWwgPSBUUkFDRV9MRVZFTCxcbiAgICAgICAgICBmb2xsb3cgPSBmYWxzZSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGZvbGxvdyA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZUxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIG1lc3NhZ2UgPSBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGxlYXN0TGluZU51bWJlciA9IGxlYXN0TGluZUluZGV4LCAvLy9cbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVOdW1iZXIgPSBncmVhdGVzdExpbmVJbmRleDsgLy8vXG5cbiAgICBpZiAobGVhc3RMaW5lTnVtYmVyID09PSBncmVhdGVzdExpbmVOdW1iZXIpIHtcbiAgICAgIGNvbnN0IGxpbmVOdW1iZXIgPSBsZWFzdExpbmVOdW1iZXI7IC8vL1xuXG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsaW5lTnVtYmVyfSkgLSAke21lc3NhZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gKCR7bGVhc3RMaW5lTnVtYmVyfS0ke2dyZWF0ZXN0TGluZU51bWJlcn0pIC0gJHttZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiTG9nIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsIm1lc3NhZ2VzIiwibG9nTGV2ZWwiLCJmb2xsb3ciLCJnZXRNZXNzYWdlcyIsImdldExvZ0xldmVsIiwiZ2V0Rm9sbG93IiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsInRva2VucyIsImZpbGVQYXRoIiwibGV2ZWwiLCJ3cml0ZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwibGV2ZWxJbmRleCIsImluZGV4T2YiLCJsb2dMZXZlbEluZGV4IiwiZm9ybWF0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZnJvbU5vdGhpbmciLCJmcm9tRm9sbG93QW5kTG9nTGV2ZWwiLCJ1cHBlckNhc2VMZXZlbCIsInRvVXBwZXJDYXNlIiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwibGVhc3RMaW5lTnVtYmVyIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lTnVtYmVyIiwibGluZU51bWJlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFORTt5QkFFNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLGNBQWtGQyxpQkFBTSxDQUF4RkQsYUFBYUUsY0FBcUVELGlCQUFNLENBQTNFQyxhQUFhQyxhQUF3REYsaUJBQU0sQ0FBOURFLFlBQVlDLGdCQUE0Q0gsaUJBQU0sQ0FBbERHLGVBQWVDLGNBQTZCSixpQkFBTSxDQUFuQ0ksYUFBYUMsY0FBZ0JMLGlCQUFNLENBQXRCSztBQUUzRCxJQUFBLEFBQU1QLG9CQUFELEFBQUw7YUFBTUEsSUFDUFEsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07Z0NBRG5CVjtRQUVqQixJQUFJLENBQUNRLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdWOztZQU9u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