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
var _tokens = require("./utilities/tokens");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL, FATAL_LEVEL = _necessary.levels.FATAL_LEVEL;
var Log = /*#__PURE__*/ function() {
    function Log(messages, logLevel) {
        _classCallCheck(this, Log);
        this.messages = messages;
        this.logLevel = logLevel;
    }
    _createClass(Log, [
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
                this.messages.push(message);
            }
        },
        {
            key: "toConsole",
            value: function toConsole() {
                this.messages.forEach(function(message) {
                    console.log(message);
                });
            }
        }
    ], [
        {
            key: "fromLogLevel",
            value: function fromLogLevel(logLevel) {
                var messages = [], log = new Log(messages, logLevel);
                return log;
            }
        }
    ]);
    return Log;
}();
function formatMessage(level, message, node, tokens, filePath) {
    var upperCaseLevel = level.toUpperCase();
    if (node === null) {
        message = "".concat(upperCaseLevel, ": ").concat(message);
    } else {
        var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, tokens);
        if (leastLineIndex === greatestLineIndex) {
            var lineIndex = leastLineIndex; ///
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(lineIndex, ") - ").concat(message);
        } else {
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(leastLineIndex, "-").concat(greatestLineIndex, ") - ").concat(message);
        }
    }
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBGQVRBTF9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gIH1cblxuICBnZXRMb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dMZXZlbDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTCxcbiAgICAgICAgICAgIEZBVEFMX0xFVkVMLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgfVxuXG4gIHRvQ29uc29sZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dMZXZlbChsb2dMZXZlbCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW10sXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZUxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIG1lc3NhZ2UgPSBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGxlYXN0TGluZUluZGV4ID09PSBncmVhdGVzdExpbmVJbmRleCkge1xuICAgICAgY29uc3QgbGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXg7IC8vL1xuXG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsaW5lSW5kZXh9KSAtICR7bWVzc2FnZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsZWFzdExpbmVJbmRleH0tJHtncmVhdGVzdExpbmVJbmRleH0pIC0gJHttZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiTG9nIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsIm1lc3NhZ2VzIiwibG9nTGV2ZWwiLCJnZXRNZXNzYWdlcyIsImdldExvZ0xldmVsIiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsInRva2VucyIsImZpbGVQYXRoIiwibGV2ZWwiLCJ3cml0ZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwibGV2ZWxJbmRleCIsImluZGV4T2YiLCJsb2dMZXZlbEluZGV4IiwiZm9ybWF0TWVzc2FnZSIsInB1c2giLCJ0b0NvbnNvbGUiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImZyb21Mb2dMZXZlbCIsInVwcGVyQ2FzZUxldmVsIiwidG9VcHBlckNhc2UiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJsaW5lSW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5FO3NCQUU2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMsY0FBa0ZDLGlCQUFNLENBQXhGRCxhQUFhRSxjQUFxRUQsaUJBQU0sQ0FBM0VDLGFBQWFDLGFBQXdERixpQkFBTSxDQUE5REUsWUFBWUMsZ0JBQTRDSCxpQkFBTSxDQUFsREcsZUFBZUMsY0FB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