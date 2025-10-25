"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return main;
    }
});
var _log = /*#__PURE__*/ _interop_require_default(require("./log"));
var _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./action/verify"));
var _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
var _messages = require("./messages");
var _commands = require("./commands");
var _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    var _options_tail = options.tail, tail = _options_tail === void 0 ? _defaults.DEFAULT_TAIL : _options_tail, _options_follow = options.follow, follow = _options_follow === void 0 ? _defaults.DEFAULT_FOLLOW : _options_follow, _options_logLevel = options.logLevel, logLevel = _options_logLevel === void 0 ? _defaults.DEFAULT_LOG_LEVEL : _options_logLevel;
    var log = _log.default.fromFollowAndLogLevel(follow, logLevel);
    switch(command){
        case null:
            {
                console.log(_messages.NO_COMMAND_GIVEN_MESSAGE);
                break;
            }
        case _commands.HELP_COMMAND:
            {
                (0, _help.default)();
                break;
            }
        case _commands.VERIFY_COMMAND:
            {
                (0, _verify.default)(argument, log);
                break;
            }
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        default:
            {
                argument = command; ///
                (0, _verify.default)(argument, log);
                break;
            }
    }
    if (!follow) {
        var messages = log.getMessages();
        var start = -tail;
        messages = messages.slice(start); ///
        messages.forEach(function(message) {
            console.log(message);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0IGhlbHBBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2hlbHBcIjtcbmltcG9ydCB2ZXJpZnlBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3ZlcmlmeVwiO1xuaW1wb3J0IHZlcnNpb25BY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3ZlcnNpb25cIjtcblxuaW1wb3J0IHsgTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IEhFTFBfQ09NTUFORCwgVkVSSUZZX0NPTU1BTkQsIFZFUlNJT05fQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1RBSUwsIERFRkFVTFRfRk9MTE9XLCBERUZBVUxUX0xPR19MRVZFTCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyB0YWlsID0gREVGQVVMVF9UQUlMLFxuICAgICAgICAgIGZvbGxvdyA9IERFRkFVTFRfRk9MTE9XLFxuICAgICAgICAgIGxvZ0xldmVsID0gREVGQVVMVF9MT0dfTEVWRUwgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgbG9nID0gTG9nLmZyb21Gb2xsb3dBbmRMb2dMZXZlbChmb2xsb3csIGxvZ0xldmVsKTtcblxuICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICBjYXNlIG51bGw6IHtcbiAgICAgIGNvbnNvbGUubG9nKE5PX0NPTU1BTkRfR0lWRU5fTUVTU0FHRSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgSEVMUF9DT01NQU5EOiB7XG4gICAgICBoZWxwQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVkVSSUZZX0NPTU1BTkQ6IHtcbiAgICAgIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBWRVJTSU9OX0NPTU1BTkQ6IHtcbiAgICAgIHZlcnNpb25BY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYXJndW1lbnQgPSBjb21tYW5kOyAvLy9cblxuICAgICAgdmVyaWZ5QWN0aW9uKGFyZ3VtZW50LCBsb2cpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvbGxvdykge1xuICAgIGxldCBtZXNzYWdlcyA9IGxvZy5nZXRNZXNzYWdlcygpXG5cbiAgICBjb25zdCBzdGFydCA9IC0gdGFpbDtcblxuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsibWFpbiIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJ0YWlsIiwiREVGQVVMVF9UQUlMIiwiZm9sbG93IiwiREVGQVVMVF9GT0xMT1ciLCJsb2dMZXZlbCIsIkRFRkFVTFRfTE9HX0xFVkVMIiwibG9nIiwiTG9nIiwiZnJvbUZvbGxvd0FuZExvZ0xldmVsIiwiY29uc29sZSIsIk5PX0NPTU1BTkRfR0lWRU5fTUVTU0FHRSIsIkhFTFBfQ09NTUFORCIsImhlbHBBY3Rpb24iLCJWRVJJRllfQ09NTUFORCIsInZlcmlmeUFjdGlvbiIsIlZFUlNJT05fQ09NTUFORCIsInZlcnNpb25BY3Rpb24iLCJtZXNzYWdlcyIsImdldE1lc3NhZ2VzIiwic3RhcnQiLCJzbGljZSIsImZvckVhY2giLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzBEQVRSOzJEQUNPOzZEQUNFOzhEQUNDO3dCQUVlO3dCQUNxQjt3QkFDRTs7Ozs7O0FBRWpELFNBQVNBLEtBQUtDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQ3JELG9CQUV5Q0EsUUFGakNDLE1BQUFBLGtDQUFPQyxzQkFBWSxvQ0FFY0YsUUFEakNHLFFBQUFBLHNDQUFTQyx3QkFBYyx3Q0FDVUosUUFBakNLLFVBQUFBLDBDQUFXQywyQkFBaUI7SUFFcEMsSUFBTUMsTUFBTUMsWUFBRyxDQUFDQyxxQkFBcUIsQ0FBQ04sUUFBUUU7SUFFOUMsT0FBUVA7UUFDTixLQUFLO1lBQU07Z0JBQ1RZLFFBQVFILEdBQUcsQ0FBQ0ksa0NBQXdCO2dCQUVwQztZQUNGO1FBRUEsS0FBS0Msc0JBQVk7WUFBRTtnQkFDakJDLElBQUFBLGFBQVU7Z0JBRVY7WUFDRjtRQUVBLEtBQUtDLHdCQUFjO1lBQUU7Z0JBQ25CQyxJQUFBQSxlQUFZLEVBQUNoQixVQUFVUTtnQkFFdkI7WUFDRjtRQUVBLEtBQUtTLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUE7WUFBUztnQkFDUGxCLFdBQVdELFNBQVMsR0FBRztnQkFFdkJpQixJQUFBQSxlQUFZLEVBQUNoQixVQUFVUTtnQkFFdkI7WUFDRjtJQUNGO0lBRUEsSUFBSSxDQUFDSixRQUFRO1FBQ1gsSUFBSWUsV0FBV1gsSUFBSVksV0FBVztRQUU5QixJQUFNQyxRQUFRLENBQUVuQjtRQUVoQmlCLFdBQVdBLFNBQVNHLEtBQUssQ0FBQ0QsUUFBUSxHQUFHO1FBRXJDRixTQUFTSSxPQUFPLENBQUMsU0FBQ0M7WUFDaEJiLFFBQVFILEdBQUcsQ0FBQ2dCO1FBQ2Q7SUFDRjtBQUNGIn0=