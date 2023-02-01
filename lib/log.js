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
            key: "followAndLogLevel",
            value: function followAndLogLevel(follow, logLevel) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBGQVRBTF9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBGQVRBTF9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTCxcbiAgICAgICAgICAgIEZBVEFMX0xFVkVMLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGZvbGxvdyA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGxldmVsLCBtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZUxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIG1lc3NhZ2UgPSBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGxlYXN0TGluZUluZGV4ID09PSBncmVhdGVzdExpbmVJbmRleCkge1xuICAgICAgY29uc3QgbGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXg7IC8vL1xuXG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsaW5lSW5kZXh9KSAtICR7bWVzc2FnZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAoJHtsZWFzdExpbmVJbmRleH0tJHtncmVhdGVzdExpbmVJbmRleH0pIC0gJHttZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiTG9nIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsIm1lc3NhZ2VzIiwibG9nTGV2ZWwiLCJmb2xsb3ciLCJnZXRNZXNzYWdlcyIsImdldExvZ0xldmVsIiwiZ2V0Rm9sbG93IiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsInRva2VucyIsImZpbGVQYXRoIiwibGV2ZWwiLCJ3cml0ZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwibGV2ZWxJbmRleCIsImluZGV4T2YiLCJsb2dMZXZlbEluZGV4IiwiZm9ybWF0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZm9sbG93QW5kTG9nTGV2ZWwiLCJ1cHBlckNhc2VMZXZlbCIsInRvVXBwZXJDYXNlIiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwibGluZUluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFORTtzQkFFNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLGNBQWtGQyxpQkFBTSxDQUF4RkQsYUFBYUUsY0FBcUVELGlCQUFNLENBQTNFQyxhQUFhQyxhQUF3REYsaUJBQU0sQ0FBOURFLFlBQVlDLGdCQUE0Q0gsaUJBQU0sQ0FBbERHLGVBQWVDLGNBQTZCSixpQkFBTSxDQUFuQ0ksYUFBYUMsY0FBZ0JMLGlCQUFNLENBQXRCSztBQUUzRCxJQUFBLEFBQU1QLG9CQXdGbEIsQUF4Rlk7YUFBTUEsSUFDUFEsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07OEJBRG5CVjtRQUVqQixJQUFJLENBQUNRLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7aUJBSkdWOztZQU9uQlcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtnQkFDckMsSUFBTUMsUUFBUWxCO2dCQUVkLElBQUksQ0FBQ21CLEtBQUssQ0FBQ0QsT0FBT0osU0FBU0MsTUFBTUMsUUFBUUM7WUFDM0M7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTU4sT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2dCQUNyQyxJQUFNQyxRQUFRaEI7Z0JBRWQsSUFBSSxDQUFDaUIsS0FBSyxDQUFDRCxPQUFPSixTQUFTQyxNQUFNQyxRQUFRQztZQUMzQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLUCxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUU7Z0JBQ3BDLElBQU1DLFFBQVFmO2dCQUVkLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ0QsT0FBT0osU0FBU0MsTUFBTUMsUUFBUUM7WUFDM0M7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVIsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2dCQUN2QyxJQUFNQyxRQUFRZDtnQkFFZCxJQUFJLENBQUNlLEtBQUssQ0FBQ0QsT0FBT0osU0FBU0MsTUFBTUMsUUFBUUM7WUFDM0M7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTVQsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2dCQUNyQyxJQUFNQyxRQUFRYjtnQkFFZCxJQUFJLENBQUNjLEtBQUssQ0FBQ0QsT0FBT0osU0FBU0MsTUFBTUMsUUFBUUM7WUFDM0M7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTVYsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2dCQUNyQyxJQUFNQyxRQUFRWjtnQkFFZCxJQUFJLENBQUNhLEtBQUssQ0FBQ0QsT0FBT0osU0FBU0MsTUFBTUMsUUFBUUM7WUFDM0M7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUQsS0FBSyxFQUFFSixPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVDLElBQU1oQixXQUFTO29CQUNQRDtvQkFDQUU7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO2lCQUNELEVBQ0RtQixhQUFheEIsU0FBT3lCLE9BQU8sQ0FBQ1IsUUFDNUJTLGdCQUFnQjFCLFNBQU95QixPQUFPLENBQUMsSUFBSSxDQUFDbEIsUUFBUTtnQkFFbEQsSUFBSWlCLGFBQWFFLGVBQWU7b0JBQzlCO2dCQUNGLENBQUM7Z0JBRURiLFVBQVVjLGNBQWNWLE9BQU9KLFNBQVNDLE1BQU1DLFFBQVFDLFdBQVksR0FBRztnQkFFckUsSUFBSSxDQUFDUixNQUFNLEdBQ1RvQixRQUFRQyxHQUFHLENBQUNoQixXQUNWLElBQUksQ0FBQ1AsUUFBUSxDQUFDd0IsSUFBSSxDQUFDakIsUUFBUTtZQUNqQzs7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCdkIsTUFBTSxFQUFFRCxRQUFRLEVBQUU7Z0JBQ3pDLElBQU1ELFdBQVdFLFNBQ0UsSUFBSSxHQUNGLEVBQUUsRUFDakJxQixNQUFNLElBbEZLL0IsSUFrRkdRLFVBQVVDLFVBQVVDO2dCQUV4QyxPQUFPcUI7WUFDVDs7O1dBckZtQi9COztBQXdGckIsU0FBUzZCLGNBQWNWLEtBQUssRUFBRUosT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO0lBQzdELElBQU1nQixpQkFBaUJmLE1BQU1nQixXQUFXO0lBRXhDLElBQUluQixTQUFTLElBQUksRUFBRTtRQUNqQkQsVUFBVSxBQUFDLEdBQXFCQSxPQUFuQm1CLGdCQUFlLE1BQVksT0FBUm5CO0lBQ2xDLE9BQU87UUFDTCxJQUFNcUIsaUJBQWlCQyxJQUFBQSx1Q0FBK0IsRUFBQ3JCLE1BQU1DLFNBQ3ZEcUIsb0JBQW9CQyxJQUFBQSwwQ0FBa0MsRUFBQ3ZCLE1BQU1DO1FBRW5FLElBQUltQixtQkFBbUJFLG1CQUFtQjtZQUN4QyxJQUFNRSxZQUFZSixnQkFBZ0IsR0FBRztZQUVyQ3JCLFVBQVUsQUFBQyxHQUFxQkcsT0FBbkJnQixnQkFBZSxNQUFpQk0sT0FBYnRCLFVBQVMsTUFBb0JILE9BQWhCeUIsV0FBVSxRQUFjLE9BQVJ6QjtRQUMvRCxPQUFPO1lBQ0xBLFVBQVUsQUFBQyxHQUFxQkcsT0FBbkJnQixnQkFBZSxNQUFpQkUsT0FBYmxCLFVBQVMsTUFBc0JvQixPQUFsQkYsZ0JBQWUsS0FBMkJyQixPQUF4QnVCLG1CQUFrQixRQUFjLE9BQVJ2QjtRQUN6RixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9BO0FBQ1QifQ==