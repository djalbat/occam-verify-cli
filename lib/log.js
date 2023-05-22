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
        var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, tokens), leastLineNumber = leastLineIndex, greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, tokens), greatestLineNumber = greatestLineIndex; ///
        if (leastLineNumber === greatestLineNumber) {
            var lineNumber = leastLineNumber; ///
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(lineNumber, ") - ").concat(message);
        } else {
            message = "".concat(upperCaseLevel, ": ").concat(filePath, " (").concat(leastLineNumber, "-").concat(greatestLineNumber, ") - ").concat(message);
        }
    }
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBGQVRBTF9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTCxcbiAgICAgICAgICAgIEZBVEFMX0xFVkVMLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW10sXG4gICAgICAgICAgbG9nTGV2ZWwgPSBUUkFDRV9MRVZFTCxcbiAgICAgICAgICBmb2xsb3cgPSBmYWxzZSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGZvbGxvdyA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZUxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIG1lc3NhZ2UgPSBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGxlYXN0TGluZU51bWJlciA9IGxlYXN0TGluZUluZGV4LCAvLy9cbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVOdW1iZXIgPSBncmVhdGVzdExpbmVJbmRleDsgLy8vXG5cbiAgICBpZiAobGVhc3RMaW5lTnVtYmVyID09PSBncmVhdGVzdExpbmVOdW1iZXIpIHtcbiAgICAgIGNvbnN0IGxpbmVOdW1iZXIgPSBsZWFzdExpbmVOdW1iZXI7IC8vL1xuXG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsaW5lTnVtYmVyfSkgLSAke21lc3NhZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGAke3VwcGVyQ2FzZUxldmVsfTogJHtmaWxlUGF0aH0gKCR7bGVhc3RMaW5lTnVtYmVyfS0ke2dyZWF0ZXN0TGluZU51bWJlcn0pIC0gJHttZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiTG9nIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsIm1lc3NhZ2VzIiwibG9nTGV2ZWwiLCJmb2xsb3ciLCJnZXRNZXNzYWdlcyIsImdldExvZ0xldmVsIiwiZ2V0Rm9sbG93IiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsInRva2VucyIsImZpbGVQYXRoIiwibGV2ZWwiLCJ3cml0ZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwibGV2ZWxJbmRleCIsImluZGV4T2YiLCJsb2dMZXZlbEluZGV4IiwiZm9ybWF0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZnJvbU5vdGhpbmciLCJmcm9tRm9sbG93QW5kTG9nTGV2ZWwiLCJ1cHBlckNhc2VMZXZlbCIsInRvVXBwZXJDYXNlIiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwibGVhc3RMaW5lTnVtYmVyIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lTnVtYmVyIiwibGluZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTkU7c0JBRTZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxjQUFrRkMsa0JBQWxGRCxhQUFhRSxjQUFxRUQsa0JBQXJFQyxhQUFhQyxhQUF3REYsa0JBQXhERSxZQUFZQyxnQkFBNENILGtCQUE1Q0csZUFBZUMsY0FBNkJKLGtCQUE3QkksYUFBYUMsY0FBZ0JMLGtCQUFoQks7QUFFM0QsSUFBQSxBQUFNUCxvQkFpR2xCLEFBakdZO2FBQU1BLElBQ1BRLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO2dDQURuQlY7UUFFakIsSUFBSSxDQUFDUSxXQUFXQTtRQUNoQixJQUFJLENBQUNDLFdBQVdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBU0E7O2tCQUpHVjs7WUFPbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFB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