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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMIH0gPSBsZXZlbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZyB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgIHRoaXMubG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgICB0aGlzLmZvbGxvdyA9IGZvbGxvdztcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICB9XG5cbiAgZ2V0TG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nTGV2ZWw7XG4gIH1cblxuICBnZXRGb2xsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9sbG93O1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBsZXZlbHMgPSBbXG4gICAgICAgICAgICBUUkFDRV9MRVZFTCxcbiAgICAgICAgICAgIERFQlVHX0xFVkVMLFxuICAgICAgICAgICAgSU5GT19MRVZFTCxcbiAgICAgICAgICAgIFdBUk5JTkdfTEVWRUwsXG4gICAgICAgICAgICBFUlJPUl9MRVZFTFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpOyAgLy8vXG5cbiAgICB0aGlzLmZvbGxvdyA/XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKSA6XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdLFxuICAgICAgICAgIGxvZ0xldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgZm9sbG93ID0gZmFsc2UsXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdyk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb2xsb3dBbmRMb2dMZXZlbChmb2xsb3csIGxvZ0xldmVsKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBmb2xsb3cgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZUxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBtZXNzYWdlID0gKGZpbGVQYXRoICE9PSBudWxsKSA/XG4gICAgICAgICAgICBgJHt1cHBlckNhc2VMZXZlbH06ICR7ZmlsZVBhdGh9IC0gJHttZXNzYWdlfWA6XG4gICAgICAgICAgICAgIGAke3VwcGVyQ2FzZUxldmVsfTogJHttZXNzYWdlfWA7XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iXSwibmFtZXMiOlsiTG9nIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJtZXNzYWdlcyIsImxvZ0xldmVsIiwiZm9sbG93IiwiZ2V0TWVzc2FnZXMiLCJnZXRMb2dMZXZlbCIsImdldEZvbGxvdyIsInRyYWNlIiwibWVzc2FnZSIsImZpbGVQYXRoIiwibGV2ZWwiLCJ3cml0ZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImxldmVsSW5kZXgiLCJpbmRleE9mIiwibG9nTGV2ZWxJbmRleCIsImZvcm1hdE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImZyb21Ob3RoaW5nIiwiZnJvbUZvbGxvd0FuZExvZ0xldmVsIiwidXBwZXJDYXNlTGV2ZWwiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQVFDLGNBQXFFQyxpQkFBTSxDQUEzRUQsYUFBYUUsY0FBd0RELGlCQUFNLENBQTlEQyxhQUFhQyxhQUEyQ0YsaUJBQU0sQ0FBakRFLFlBQVlDLGdCQUErQkgsaUJBQU0sQ0FBckNHLGVBQWVDLGNBQWdCSixpQkFBTSxDQUF0Qkk7QUFFOUMsSUFBQSxBQUFNTixvQkFBTjthQUFNQSxJQUNQTyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEbkJUO1FBRWpCLElBQUksQ0FBQ08sUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKR1Q7O1lBT25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxRQUFRO2dCQUNyQixJQUFNQyxRQUFRZjtnQkFFZCxJQUFJLENBQUNnQixLQUFLLENBQUNELE9BQU9GLFNBQVNDO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1KLE9BQU8sRUFBRUMsUUFBUTtnQkFDckIsSUFBTUMsUUFBUWI7Z0JBRWQsSUFBSSxDQUFDYyxLQUFLLENBQUNELE9BQU9GLFNBQVNDO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtMLE9BQU8sRUFBRUMsUUFBUTtnQkFDcEIsSUFBTUMsUUFBUVo7Z0JBRWQsSUFBSSxDQUFDYSxLQUFLLENBQUNELE9BQU9GLFNBQVNDO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLE9BQU8sRUFBRUMsUUFBUTtnQkFDdkIsSUFBTUMsUUFBUVg7Z0JBRWQsSUFBSSxDQUFDWSxLQUFLLENBQUNELE9BQU9GLFNBQVNDO1lBQzdCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1QLE9BQU8sRUFBRUMsUUFBUTtnQkFDckIsSUFBTUMsUUFBUVY7Z0JBRWQsSUFBSSxDQUFDVyxLQUFLLENBQUNELE9BQU9GLFNBQVNDO1lBQzdCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1ELEtBQUssRUFBRUYsT0FBTyxFQUFFQyxRQUFRO2dCQUM1QixJQUFNYixXQUFTO29CQUNQRDtvQkFDQUU7b0JBQ0FDO29CQUNBQztvQkFDQUM7aUJBQ0QsRUFDRGdCLGFBQWFwQixTQUFPcUIsT0FBTyxDQUFDUCxRQUM1QlEsZ0JBQWdCdEIsU0FBT3FCLE9BQU8sQ0FBQyxJQUFJLENBQUNmLFFBQVE7Z0JBRWxELElBQUljLGFBQWFFLGVBQWU7b0JBQzlCO2dCQUNGO2dCQUVBVixVQUFVVyxjQUFjVCxPQUFPRixTQUFTQyxXQUFZLEdBQUc7Z0JBRXZELElBQUksQ0FBQ04sTUFBTSxHQUNUaUIsUUFBUUMsR0FBRyxDQUFDYixXQUNWLElBQUksQ0FBQ1AsUUFBUSxDQUFDcUIsSUFBSSxDQUFDZDtZQUN6Qjs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNdEIsV0FBVyxFQUFFLEVBQ2JDLFdBQVdQLGFBQ1hRLFNBQVMsT0FDVGtCLE1BQU0sSUEzRUszQixJQTJFR08sVUFBVUMsVUFBVUM7Z0JBRXhDLE9BQU9rQjtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCckIsTUFBTSxFQUFFRCxRQUFRO2dCQUMzQyxJQUFNRCxXQUFXRSxTQUNFLE9BQ0UsRUFBRSxFQUNqQmtCLE1BQU0sSUFwRkszQixJQW9GR08sVUFBVUMsVUFBVUM7Z0JBRXhDLE9BQU9rQjtZQUNUOzs7V0F2Rm1CM0I7O0FBMEZyQixTQUFTeUIsY0FBY1QsS0FBSyxFQUFFRixPQUFPO1FBQUVDLFdBQUFBLGlFQUFXO0lBQ2hELElBQU1nQixpQkFBaUJmLE1BQU1nQixXQUFXO0lBRXhDbEIsVUFBVSxBQUFDQyxhQUFhLE9BQ2QsQUFBQyxHQUFxQkEsT0FBbkJnQixnQkFBZSxNQUFrQmpCLE9BQWRDLFVBQVMsT0FBYSxPQUFSRCxXQUNsQyxBQUFDLEdBQXFCQSxPQUFuQmlCLGdCQUFlLE1BQVksT0FBUmpCO0lBRWxDLE9BQU9BO0FBQ1QifQ==