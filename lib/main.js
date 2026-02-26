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
const _occamlanguages = require("occam-languages");
const _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
const _verify = /*#__PURE__*/ _interop_require_default(require("./action/verify"));
const _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
const _clock = require("./utilities/clock");
const _messages = require("./messages");
const _commands = require("./commands");
const _defaults = require("./defaults");
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
                const name = argument; ///
                verify(name, options);
                break;
            }
        default:
            {
                const name = command; ///
                verify(name, options);
                break;
            }
    }
}
function verify(name, options) {
    const { tail = _defaults.DEFAULT_TAIL, follow = _defaults.DEFAULT_FOLLOW, logLevel = _defaults.DEFAULT_LOG_LEVEL } = options, log = _occamlanguages.Log.fromFollowAndLogLevel(follow, logLevel);
    let now = (0, _clock.startClock)();
    (0, _verify.default)(name, log).then(()=>{
        (0, _clock.stopClock)(now, log);
        if (!follow) {
            let messages = log.getMessages();
            const start = -tail;
            messages = messages.slice(start); ///
            messages.forEach((message)=>{
                console.log(message);
            });
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBoZWxwQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9oZWxwXCI7XG5pbXBvcnQgdmVyaWZ5QWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJpZnlcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5cbmltcG9ydCB7IHN0YXJ0Q2xvY2ssIHN0b3BDbG9jayB9IGZyb20gXCIuL3V0aWxpdGllcy9jbG9ja1wiO1xuaW1wb3J0IHsgTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IEhFTFBfQ09NTUFORCwgVkVSSUZZX0NPTU1BTkQsIFZFUlNJT05fQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1RBSUwsIERFRkFVTFRfRk9MTE9XLCBERUZBVUxUX0xPR19MRVZFTCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSBudWxsOiB7XG4gICAgICBjb25zb2xlLmxvZyhOT19DT01NQU5EX0dJVkVOX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEhFTFBfQ09NTUFORDoge1xuICAgICAgaGVscEFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFZFUlNJT05fQ09NTUFORDoge1xuICAgICAgdmVyc2lvbkFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFZFUklGWV9DT01NQU5EOiB7XG4gICAgICBjb25zdCBuYW1lID0gYXJndW1lbnQ7ICAvLy9cblxuICAgICAgdmVyaWZ5KG5hbWUsIG9wdGlvbnMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBuYW1lID0gY29tbWFuZDsgLy8vXG5cbiAgICAgIHZlcmlmeShuYW1lLCBvcHRpb25zKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeShuYW1lLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgdGFpbCA9IERFRkFVTFRfVEFJTCwgZm9sbG93ID0gREVGQVVMVF9GT0xMT1csIGxvZ0xldmVsID0gREVGQVVMVF9MT0dfTEVWRUwgfSA9IG9wdGlvbnMsXG4gICAgICAgIGxvZyA9IExvZy5mcm9tRm9sbG93QW5kTG9nTGV2ZWwoZm9sbG93LCBsb2dMZXZlbCk7XG5cbiAgbGV0IG5vdyA9IHN0YXJ0Q2xvY2soKTtcblxuICB2ZXJpZnlBY3Rpb24obmFtZSwgbG9nKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHN0b3BDbG9jayhub3csIGxvZyk7XG5cbiAgICAgIGlmICghZm9sbG93KSB7XG4gICAgICAgIGxldCBtZXNzYWdlcyA9IGxvZy5nZXRNZXNzYWdlcygpXG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSAtIHRhaWw7XG5cbiAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsibWFpbiIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFIiwiSEVMUF9DT01NQU5EIiwiaGVscEFjdGlvbiIsIlZFUlNJT05fQ09NTUFORCIsInZlcnNpb25BY3Rpb24iLCJWRVJJRllfQ09NTUFORCIsIm5hbWUiLCJ2ZXJpZnkiLCJ0YWlsIiwiREVGQVVMVF9UQUlMIiwiZm9sbG93IiwiREVGQVVMVF9GT0xMT1ciLCJsb2dMZXZlbCIsIkRFRkFVTFRfTE9HX0xFVkVMIiwiTG9nIiwiZnJvbUZvbGxvd0FuZExvZ0xldmVsIiwibm93Iiwic3RhcnRDbG9jayIsInZlcmlmeUFjdGlvbiIsInRoZW4iLCJzdG9wQ2xvY2siLCJtZXNzYWdlcyIsImdldE1lc3NhZ2VzIiwic3RhcnQiLCJzbGljZSIsImZvckVhY2giLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7O2dDQVhKOzZEQUVHOytEQUNFO2dFQUNDO3VCQUVZOzBCQUNHOzBCQUNxQjswQkFDRTs7Ozs7O0FBRWpELFNBQVNBLEtBQUtDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQ3JELE9BQVFGO1FBQ04sS0FBSztZQUFNO2dCQUNURyxRQUFRQyxHQUFHLENBQUNDLGtDQUF3QjtnQkFFcEM7WUFDRjtRQUVBLEtBQUtDLHNCQUFZO1lBQUU7Z0JBQ2pCQyxJQUFBQSxhQUFVO2dCQUVWO1lBQ0Y7UUFFQSxLQUFLQyx5QkFBZTtZQUFFO2dCQUNwQkMsSUFBQUEsZ0JBQWE7Z0JBRWI7WUFDRjtRQUVBLEtBQUtDLHdCQUFjO1lBQUU7Z0JBQ25CLE1BQU1DLE9BQU9WLFVBQVcsR0FBRztnQkFFM0JXLE9BQU9ELE1BQU1UO2dCQUViO1lBQ0Y7UUFFQTtZQUFTO2dCQUNQLE1BQU1TLE9BQU9YLFNBQVMsR0FBRztnQkFFekJZLE9BQU9ELE1BQU1UO2dCQUViO1lBQ0Y7SUFDRjtBQUNGO0FBRUEsU0FBU1UsT0FBT0QsSUFBSSxFQUFFVCxPQUFPO0lBQzNCLE1BQU0sRUFBRVcsT0FBT0Msc0JBQVksRUFBRUMsU0FBU0Msd0JBQWMsRUFBRUMsV0FBV0MsMkJBQWlCLEVBQUUsR0FBR2hCLFNBQ2pGRSxNQUFNZSxtQkFBRyxDQUFDQyxxQkFBcUIsQ0FBQ0wsUUFBUUU7SUFFOUMsSUFBSUksTUFBTUMsSUFBQUEsaUJBQVU7SUFFcEJDLElBQUFBLGVBQVksRUFBQ1osTUFBTVAsS0FDaEJvQixJQUFJLENBQUM7UUFDSkMsSUFBQUEsZ0JBQVMsRUFBQ0osS0FBS2pCO1FBRWYsSUFBSSxDQUFDVyxRQUFRO1lBQ1gsSUFBSVcsV0FBV3RCLElBQUl1QixXQUFXO1lBRTlCLE1BQU1DLFFBQVEsQ0FBRWY7WUFFaEJhLFdBQVdBLFNBQVNHLEtBQUssQ0FBQ0QsUUFBUSxHQUFHO1lBRXJDRixTQUFTSSxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2hCNUIsUUFBUUMsR0FBRyxDQUFDMkI7WUFDZDtRQUNGO0lBQ0Y7QUFDSiJ9