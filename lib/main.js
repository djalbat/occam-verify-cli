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
var _occamfurtle = require("occam-furtle");
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
    var log = _occamfurtle.Log.fromFollowAndLogLevel(follow, logLevel);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBoZWxwQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9oZWxwXCI7XG5pbXBvcnQgdmVyaWZ5QWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJpZnlcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5cbmltcG9ydCB7IE5PX0NPTU1BTkRfR0lWRU5fTUVTU0FHRSB9IGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIFZFUklGWV9DT01NQU5ELCBWRVJTSU9OX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9UQUlMLCBERUZBVUxUX0ZPTExPVywgREVGQVVMVF9MT0dfTEVWRUwgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgdGFpbCA9IERFRkFVTFRfVEFJTCxcbiAgICAgICAgICBmb2xsb3cgPSBERUZBVUxUX0ZPTExPVyxcbiAgICAgICAgICBsb2dMZXZlbCA9IERFRkFVTFRfTE9HX0xFVkVMIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGxvZyA9IExvZy5mcm9tRm9sbG93QW5kTG9nTGV2ZWwoZm9sbG93LCBsb2dMZXZlbCk7XG5cbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSBudWxsOiB7XG4gICAgICBjb25zb2xlLmxvZyhOT19DT01NQU5EX0dJVkVOX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEhFTFBfQ09NTUFORDoge1xuICAgICAgaGVscEFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFZFUklGWV9DT01NQU5EOiB7XG4gICAgICB2ZXJpZnlBY3Rpb24oYXJndW1lbnQsIGxvZyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVkVSU0lPTl9DT01NQU5EOiB7XG4gICAgICB2ZXJzaW9uQWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGFyZ3VtZW50ID0gY29tbWFuZDsgLy8vXG5cbiAgICAgIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFmb2xsb3cpIHtcbiAgICBsZXQgbWVzc2FnZXMgPSBsb2cuZ2V0TWVzc2FnZXMoKVxuXG4gICAgY29uc3Qgc3RhcnQgPSAtIHRhaWw7XG5cbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgICBtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1haW4iLCJjb21tYW5kIiwiYXJndW1lbnQiLCJvcHRpb25zIiwidGFpbCIsIkRFRkFVTFRfVEFJTCIsImZvbGxvdyIsIkRFRkFVTFRfRk9MTE9XIiwibG9nTGV2ZWwiLCJERUZBVUxUX0xPR19MRVZFTCIsImxvZyIsIkxvZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsImNvbnNvbGUiLCJOT19DT01NQU5EX0dJVkVOX01FU1NBR0UiLCJIRUxQX0NPTU1BTkQiLCJoZWxwQWN0aW9uIiwiVkVSSUZZX0NPTU1BTkQiLCJ2ZXJpZnlBY3Rpb24iLCJWRVJTSU9OX0NPTU1BTkQiLCJ2ZXJzaW9uQWN0aW9uIiwibWVzc2FnZXMiLCJnZXRNZXNzYWdlcyIsInN0YXJ0Iiwic2xpY2UiLCJmb3JFYWNoIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OzsyQkFWSjsyREFFRzs2REFDRTs4REFDQzt3QkFFZTt3QkFDcUI7d0JBQ0U7Ozs7OztBQUVqRCxTQUFTQSxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNyRCxvQkFFeUNBLFFBRmpDQyxNQUFBQSxrQ0FBT0Msc0JBQVksb0NBRWNGLFFBRGpDRyxRQUFBQSxzQ0FBU0Msd0JBQWMsd0NBQ1VKLFFBQWpDSyxVQUFBQSwwQ0FBV0MsMkJBQWlCO0lBRXBDLElBQU1DLE1BQU1DLGdCQUFHLENBQUNDLHFCQUFxQixDQUFDTixRQUFRRTtJQUU5QyxPQUFRUDtRQUNOLEtBQUs7WUFBTTtnQkFDVFksUUFBUUgsR0FBRyxDQUFDSSxrQ0FBd0I7Z0JBRXBDO1lBQ0Y7UUFFQSxLQUFLQyxzQkFBWTtZQUFFO2dCQUNqQkMsSUFBQUEsYUFBVTtnQkFFVjtZQUNGO1FBRUEsS0FBS0Msd0JBQWM7WUFBRTtnQkFDbkJDLElBQUFBLGVBQVksRUFBQ2hCLFVBQVVRO2dCQUV2QjtZQUNGO1FBRUEsS0FBS1MseUJBQWU7WUFBRTtnQkFDcEJDLElBQUFBLGdCQUFhO2dCQUViO1lBQ0Y7UUFFQTtZQUFTO2dCQUNQbEIsV0FBV0QsU0FBUyxHQUFHO2dCQUV2QmlCLElBQUFBLGVBQVksRUFBQ2hCLFVBQVVRO2dCQUV2QjtZQUNGO0lBQ0Y7SUFFQSxJQUFJLENBQUNKLFFBQVE7UUFDWCxJQUFJZSxXQUFXWCxJQUFJWSxXQUFXO1FBRTlCLElBQU1DLFFBQVEsQ0FBRW5CO1FBRWhCaUIsV0FBV0EsU0FBU0csS0FBSyxDQUFDRCxRQUFRLEdBQUc7UUFFckNGLFNBQVNJLE9BQU8sQ0FBQyxTQUFDQztZQUNoQmIsUUFBUUgsR0FBRyxDQUFDZ0I7UUFDZDtJQUNGO0FBQ0YifQ==