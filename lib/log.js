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
    function Log(messages, logLevel, follow) {
        _classCallCheck(this, Log);
        this.messages = messages;
        this.logLevel = logLevel;
        this.follow = follow;
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
            key: "fromFollowAndLogLevel",
            value: function fromFollowAndLogLevel(follow, logLevel) {
                var messages = follow ? null : [], log = new Log(messages, logLevel, follow);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBGQVRBTF9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTCxcbiAgICAgICAgICAgIEZBVEFMX0xFVkVMLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb2xsb3dBbmRMb2dMZXZlbChmb2xsb3csIGxvZ0xldmVsKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBmb2xsb3cgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCkge1xuICBjb25zdCB1cHBlckNhc2VMZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke21lc3NhZ2V9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIGlmIChsZWFzdExpbmVJbmRleCA9PT0gZ3JlYXRlc3RMaW5lSW5kZXgpIHtcbiAgICAgIGNvbnN0IGxpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4OyAvLy9cblxuICAgICAgbWVzc2FnZSA9IGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gKCR7bGluZUluZGV4fSkgLSAke21lc3NhZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gKCR7bGVhc3RMaW5lSW5kZXh9LSR7Z3JlYXRlc3RMaW5lSW5kZXh9KSAtICR7bWVzc2FnZX1gO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuIl0sIm5hbWVzIjpbIkxvZyIsIlRSQUNFX0xFVkVMIiwibGV2ZWxzIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwiRkFUQUxfTEVWRUwiLCJtZXNzYWdlcyIsImxvZ0xldmVsIiwiZm9sbG93IiwiZ2V0TWVzc2FnZXMiLCJnZXRMb2dMZXZlbCIsImdldEZvbGxvdyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJ0b2tlbnMiLCJmaWxlUGF0aCIsImxldmVsIiwid3JpdGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImxldmVsSW5kZXgiLCJpbmRleE9mIiwibG9nTGV2ZWxJbmRleCIsImZvcm1hdE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsInVwcGVyQ2FzZUxldmVsIiwidG9VcHBlckNhc2UiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJsaW5lSW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5FO3NCQUU2RDs7Ozs7Ozs7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