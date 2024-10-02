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
            value: function trace(message, filePath) {
                var level = TRACE_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message, filePath) {
                var level = DEBUG_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "info",
            value: function info(message, filePath) {
                var level = INFO_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message, filePath) {
                var level = WARNING_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "error",
            value: function error(message, filePath) {
                var level = ERROR_LEVEL;
                this.write(level, message, filePath);
            }
        },
        {
            key: "write",
            value: function write(level, message, filePath) {
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
                message = formatMessage(level, message, filePath); ///
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
    var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var upperCaseLevel = level.toUpperCase();
    message = filePath !== null ? "".concat(upperCaseLevel, ": ").concat(filePath, " - ").concat(message) : "".concat(upperCaseLevel, ": ").concat(message);
    return message;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9tZXNzYWdlXCI7XG5cbmNvbnN0IHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgd3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgbGV2ZWxzID0gW1xuICAgICAgICAgICAgVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgICBERUJVR19MRVZFTCxcbiAgICAgICAgICAgIElORk9fTEVWRUwsXG4gICAgICAgICAgICBXQVJOSU5HX0xFVkVMLFxuICAgICAgICAgICAgRVJST1JfTEVWRUxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZihsZXZlbCksXG4gICAgICAgICAgbG9nTGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKHRoaXMubG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZSA9IGZvcm1hdE1lc3NhZ2UobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTsgIC8vL1xuXG4gICAgdGhpcy5mb2xsb3cgP1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSkgOlxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXSxcbiAgICAgICAgICBsb2dMZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIGZvbGxvdyA9IGZhbHNlLFxuICAgICAgICAgIGxvZyA9IG5ldyBMb2cobWVzc2FnZXMsIGxvZ0xldmVsLCBmb2xsb3cpO1xuXG4gICAgcmV0dXJuIGxvZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9sbG93QW5kTG9nTGV2ZWwoZm9sbG93LCBsb2dMZXZlbCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gZm9sbG93ID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdyk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2UobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkge1xuICBjb25zdCB1cHBlckNhc2VMZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG5cbiAgbWVzc2FnZSA9IChmaWxlUGF0aCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgYCR7dXBwZXJDYXNlTGV2ZWx9OiAke2ZpbGVQYXRofSAtICR7bWVzc2FnZX1gOlxuICAgICAgICAgICAgICBgJHt1cHBlckNhc2VMZXZlbH06ICR7bWVzc2FnZX1gO1xuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuIl0sIm5hbWVzIjpbIkxvZyIsIlRSQUNFX0xFVkVMIiwibGV2ZWxzIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwibWVzc2FnZXMiLCJsb2dMZXZlbCIsImZvbGxvdyIsImdldE1lc3NhZ2VzIiwiZ2V0TG9nTGV2ZWwiLCJnZXRGb2xsb3ciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJmaWxlUGF0aCIsImxldmVsIiwid3JpdGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmcm9tTm90aGluZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsInVwcGVyQ2FzZUxldmVsIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5FO3VCQUU2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMsY0FBcUVDLGlCQUFNLENBQTNFRCxhQUFhRSxjQUF3REQsaUJBQU0sQ0FBOURDLGFBQWFDLGFBQTJDRixpQkFBTSxDQUFqREUsWUFBWUMsZ0JBQStCSCxpQkFBTSxDQUFyQ0csZUFBZUMsY0FBZ0JKLGlCQUFNLENBQXRCSTtBQUU5QyxJQUFBLEFBQU1OLG9CQUFOO2FBQU1BLElBQ1BPLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO2dDQURuQlQ7UUFFakIsSUFBSSxDQUFDTyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUpHVDs7WUFPbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPLEVBQUVDLFFBQVE7Z0JBQ3JCLElBQU1DLFFBQVFmO2dCQUVkLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ0QsT0FBT0YsU0FBU0M7WUFDN0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosT0FBTyxFQUFFQyxRQUFRO2dCQUNyQixJQUFNQyxRQUFRYjtnQkFFZCxJQUFJLENBQUNjLEtBQUssQ0FBQ0QsT0FBT0YsU0FBU0M7WUFDN0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0wsT0FBTyxFQUFFQyxRQUFRO2dCQUNwQixJQUFNQyxRQUFRWjtnQkFFZCxJQUFJLENBQUNhLEtBQUssQ0FBQ0QsT0FBT0YsU0FBU0M7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sT0FBTyxFQUFFQyxRQUFRO2dCQUN2QixJQUFNQyxRQUFRWDtnQkFFZCxJQUFJLENBQUNZLEtBQUssQ0FBQ0QsT0FBT0YsU0FBU0M7WUFDN0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTVAsT0FBTyxFQUFFQyxRQUFRO2dCQUNyQixJQUFNQyxRQUFRVjtnQkFFZCxJQUFJLENBQUNXLEtBQUssQ0FBQ0QsT0FBT0YsU0FBU0M7WUFDN0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUQsS0FBSyxFQUFFRixPQUFPLEVBQUVDLFFBQVE7Z0JBQzVCLElBQU1iLFdBQVM7b0JBQ1BEO29CQUNBRTtvQkFDQUM7b0JBQ0FDO29CQUNBQztpQkFDRCxFQUNEZ0IsYUFBYXBCLFNBQU9xQixPQUFPLENBQUNQLFFBQzVCUSxnQkFBZ0J0QixTQUFPcUIsT0FBTyxDQUFDLElBQUksQ0FBQ2YsUUFBUTtnQkFFbEQsSUFBSWMsYUFBYUUsZUFBZTtvQkFDOUI7Z0JBQ0Y7Z0JBRUFWLFVBQVVXLGNBQWNULE9BQU9GLFNBQVNDLFdBQVksR0FBRztnQkFFdkQsSUFBSSxDQUFDTixNQUFNLEdBQ1RpQixRQUFRQyxHQUFHLENBQUNiLFdBQ1YsSUFBSSxDQUFDUCxRQUFRLENBQUNxQixJQUFJLENBQUNkO1lBQ3pCOzs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU10QixXQUFXLEVBQUUsRUFDYkMsV0FBV1AsYUFDWFEsU0FBUyxPQUNUa0IsTUFBTSxJQTNFSzNCLElBMkVHTyxVQUFVQyxVQUFVQztnQkFFeEMsT0FBT2tCO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JyQixNQUFNLEVBQUVELFFBQVE7Z0JBQzNDLElBQU1ELFdBQVdFLFNBQ0UsT0FDRSxFQUFFLEVBQ2pCa0IsTUFBTSxJQXBGSzNCLElBb0ZHTyxVQUFVQyxVQUFVQztnQkFFeEMsT0FBT2tCO1lBQ1Q7OztXQXZGbUIzQjs7QUEwRnJCLFNBQVN5QixjQUFjVCxLQUFLLEVBQUVGLE9BQU87UUFBRUMsV0FBQUEsaUVBQVc7SUFDaEQsSUFBTWdCLGlCQUFpQmYsTUFBTWdCLFdBQVc7SUFFeENsQixVQUFVLEFBQUNDLGFBQWEsT0FDZCxBQUFDLEdBQXFCQSxPQUFuQmdCLGdCQUFlLE1BQWtCakIsT0FBZEMsVUFBUyxPQUFhLE9BQVJELFdBQ2xDLEFBQUMsR0FBcUJBLE9BQW5CaUIsZ0JBQWUsTUFBWSxPQUFSakI7SUFFbEMsT0FBT0E7QUFDVCJ9