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
var _occamlanguages = require("occam-languages");
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
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        case _commands.VERIFY_COMMAND:
            {
                verify(argument, options);
                break;
            }
        default:
            {
                argument = command; ///
                verify(argument, options);
                break;
            }
    }
}
function verify(argument, options) {
    var _options_tail = options.tail, tail = _options_tail === void 0 ? _defaults.DEFAULT_TAIL : _options_tail, _options_follow = options.follow, follow = _options_follow === void 0 ? _defaults.DEFAULT_FOLLOW : _options_follow, _options_logLevel = options.logLevel, logLevel = _options_logLevel === void 0 ? _defaults.DEFAULT_LOG_LEVEL : _options_logLevel;
    var log = _occamlanguages.Log.fromFollowAndLogLevel(follow, logLevel);
    (0, _verify.default)(argument, log).then(function() {
        if (!follow) {
            var messages = log.getMessages();
            var start = -tail;
            messages = messages.slice(start); ///
            messages.forEach(function(message) {
                console.log(message);
            });
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBoZWxwQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9oZWxwXCI7XG5pbXBvcnQgdmVyaWZ5QWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJpZnlcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5cbmltcG9ydCB7IE5PX0NPTU1BTkRfR0lWRU5fTUVTU0FHRSB9IGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIFZFUklGWV9DT01NQU5ELCBWRVJTSU9OX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9UQUlMLCBERUZBVUxUX0ZPTExPVywgREVGQVVMVF9MT0dfTEVWRUwgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgbnVsbDoge1xuICAgICAgY29uc29sZS5sb2coTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBIRUxQX0NPTU1BTkQ6IHtcbiAgICAgIGhlbHBBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBWRVJTSU9OX0NPTU1BTkQ6IHtcbiAgICAgIHZlcnNpb25BY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBWRVJJRllfQ09NTUFORDoge1xuICAgICAgdmVyaWZ5KGFyZ3VtZW50LCBvcHRpb25zKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYXJndW1lbnQgPSBjb21tYW5kOyAvLy9cblxuICAgICAgdmVyaWZ5KGFyZ3VtZW50LCBvcHRpb25zKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeShhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCB7IHRhaWwgPSBERUZBVUxUX1RBSUwsXG4gICAgICAgICAgZm9sbG93ID0gREVGQVVMVF9GT0xMT1csXG4gICAgICAgICAgbG9nTGV2ZWwgPSBERUZBVUxUX0xPR19MRVZFTCB9ID0gb3B0aW9ucztcblxuICBjb25zdCBsb2cgPSBMb2cuZnJvbUZvbGxvd0FuZExvZ0xldmVsKGZvbGxvdywgbG9nTGV2ZWwpO1xuXG4gIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGlmICghZm9sbG93KSB7XG4gICAgICAgIGxldCBtZXNzYWdlcyA9IGxvZy5nZXRNZXNzYWdlcygpXG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSAtIHRhaWw7XG5cbiAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG59Il0sIm5hbWVzIjpbIm1haW4iLCJjb21tYW5kIiwiYXJndW1lbnQiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsIk5PX0NPTU1BTkRfR0lWRU5fTUVTU0FHRSIsIkhFTFBfQ09NTUFORCIsImhlbHBBY3Rpb24iLCJWRVJTSU9OX0NPTU1BTkQiLCJ2ZXJzaW9uQWN0aW9uIiwiVkVSSUZZX0NPTU1BTkQiLCJ2ZXJpZnkiLCJ0YWlsIiwiREVGQVVMVF9UQUlMIiwiZm9sbG93IiwiREVGQVVMVF9GT0xMT1ciLCJsb2dMZXZlbCIsIkRFRkFVTFRfTE9HX0xFVkVMIiwiTG9nIiwiZnJvbUZvbGxvd0FuZExvZ0xldmVsIiwidmVyaWZ5QWN0aW9uIiwidGhlbiIsIm1lc3NhZ2VzIiwiZ2V0TWVzc2FnZXMiLCJzdGFydCIsInNsaWNlIiwiZm9yRWFjaCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7OEJBVko7MkRBRUc7NkRBQ0U7OERBQ0M7d0JBRWU7d0JBQ3FCO3dCQUNFOzs7Ozs7QUFFakQsU0FBU0EsS0FBS0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDckQsT0FBUUY7UUFDTixLQUFLO1lBQU07Z0JBQ1RHLFFBQVFDLEdBQUcsQ0FBQ0Msa0NBQXdCO2dCQUVwQztZQUNGO1FBRUEsS0FBS0Msc0JBQVk7WUFBRTtnQkFDakJDLElBQUFBLGFBQVU7Z0JBRVY7WUFDRjtRQUVBLEtBQUtDLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUEsS0FBS0Msd0JBQWM7WUFBRTtnQkFDbkJDLE9BQU9WLFVBQVVDO2dCQUVqQjtZQUNGO1FBRUE7WUFBUztnQkFDUEQsV0FBV0QsU0FBUyxHQUFHO2dCQUV2QlcsT0FBT1YsVUFBVUM7Z0JBRWpCO1lBQ0Y7SUFDRjtBQUNGO0FBRUEsU0FBU1MsT0FBT1YsUUFBUSxFQUFFQyxPQUFPO0lBQy9CLG9CQUV5Q0EsUUFGakNVLE1BQUFBLGtDQUFPQyxzQkFBWSxvQ0FFY1gsUUFEakNZLFFBQUFBLHNDQUFTQyx3QkFBYyx3Q0FDVWIsUUFBakNjLFVBQUFBLDBDQUFXQywyQkFBaUI7SUFFcEMsSUFBTWIsTUFBTWMsbUJBQUcsQ0FBQ0MscUJBQXFCLENBQUNMLFFBQVFFO0lBRTlDSSxJQUFBQSxlQUFZLEVBQUNuQixVQUFVRyxLQUNwQmlCLElBQUksQ0FBQztRQUNKLElBQUksQ0FBQ1AsUUFBUTtZQUNYLElBQUlRLFdBQVdsQixJQUFJbUIsV0FBVztZQUU5QixJQUFNQyxRQUFRLENBQUVaO1lBRWhCVSxXQUFXQSxTQUFTRyxLQUFLLENBQUNELFFBQVEsR0FBRztZQUVyQ0YsU0FBU0ksT0FBTyxDQUFDLFNBQUNDO2dCQUNoQnhCLFFBQVFDLEdBQUcsQ0FBQ3VCO1lBQ2Q7UUFDRjtJQUNGO0FBQ0oifQ==