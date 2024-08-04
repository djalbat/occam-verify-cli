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
    if (node === null || tokens === null) {
        message = filePath !== null ? "".concat(upperCaseLevel, ": ").concat(filePath, " - ").concat(message) : "".concat(upperCaseLevel, ": ").concat(message);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9saW5lSW5kZXhcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBGQVRBTF9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTCxcbiAgICAgICAgICAgIEZBVEFMX0xFVkVMLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW10sXG4gICAgICAgICAgbG9nTGV2ZWwgPSBUUkFDRV9MRVZFTCxcbiAgICAgICAgICBmb2xsb3cgPSBmYWxzZSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGZvbGxvdyA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZUxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBpZiAoKG5vZGUgPT09IG51bGwpIHx8ICh0b2tlbnMgPT09IG51bGwpKSB7XG4gICAgbWVzc2FnZSA9IChmaWxlUGF0aCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICBgJHt1cHBlckNhc2VMZXZlbH06ICR7ZmlsZVBhdGh9IC0gJHttZXNzYWdlfWA6XG4gICAgICAgICAgICAgICAgYCR7dXBwZXJDYXNlTGV2ZWx9OiAke21lc3NhZ2V9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBsZWFzdExpbmVOdW1iZXIgPSBsZWFzdExpbmVJbmRleCwgLy8vXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lTnVtYmVyID0gZ3JlYXRlc3RMaW5lSW5kZXg7IC8vL1xuXG4gICAgaWYgKGxlYXN0TGluZU51bWJlciA9PT0gZ3JlYXRlc3RMaW5lTnVtYmVyKSB7XG4gICAgICBjb25zdCBsaW5lTnVtYmVyID0gbGVhc3RMaW5lTnVtYmVyOyAvLy9cblxuICAgICAgbWVzc2FnZSA9IGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gKCR7bGluZU51bWJlcn0pIC0gJHttZXNzYWdlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBgJHt1cHBlckNhc2VMZXZlbH06ICR7ZmlsZVBhdGh9ICgke2xlYXN0TGluZU51bWJlcn0tJHtncmVhdGVzdExpbmVOdW1iZXJ9KSAtICR7bWVzc2FnZX1gO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuIl0sIm5hbWVzIjpbIkxvZyIsIlRSQUNFX0xFVkVMIiwibGV2ZWxzIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwiRkFUQUxfTEVWRUwiLCJtZXNzYWdlcyIsImxvZ0xldmVsIiwiZm9sbG93IiwiZ2V0TWVzc2FnZXMiLCJnZXRMb2dMZXZlbCIsImdldEZvbGxvdyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJ0b2tlbnMiLCJmaWxlUGF0aCIsImxldmVsIiwid3JpdGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImxldmVsSW5kZXgiLCJpbmRleE9mIiwibG9nTGV2ZWxJbmRleCIsImZvcm1hdE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZyb21Ob3RoaW5nIiwiZnJvbUZvbGxvd0FuZExvZ0xldmVsIiwidXBwZXJDYXNlTGV2ZWwiLCJ0b1VwcGVyQ2FzZSIsImxlYXN0TGluZUluZGV4IiwibGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImxlYXN0TGluZU51bWJlciIsImdyZWF0ZXN0TGluZUluZGV4IiwiZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImdyZWF0ZXN0TGluZU51bWJlciIsImxpbmVOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5FO3lCQUU2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMsY0FBa0ZDLGlCQUFNLENBQXhGRCxhQUFhRSxjQUFxRUQsaUJBQU0sQ0FBM0VDLGFBQWFDLGFBQXdERixpQkFBTSxDQUE5REUsWUFBWUMsZ0JBQTRDSCxpQkFBTSxDQUFsREcsZUFBZUMsY0FBNkJKLGlCQUFNLENBQW5DSSxhQUFhQyxjQUFnQkwsaUJBQU0sQ0FBdEJLO0FBRTNELElBQUEsQUFBTVAsb0JBQUQsQUFBTDthQUFNQSxJQUNQUSxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEbkJWO1FBRWpCLElBQUksQ0FBQ1EsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR1Y7O1lBT25CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFB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