"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAction;
    }
});
var _occamentities = require("occam-entities");
require("../preamble");
var _constants = require("../constants");
var _release = require("../utilities/release");
var _fileSystem = require("../utilities/fileSystem");
var _releaseContext = require("../utilities/releaseContext");
function verifyAction(argument, log) {
    var name = trimTrailingSlash(argument), context = {}, dependency = _occamentities.Dependency.fromName(name), dependentNames = [], releaseContextMap = {};
    Object.assign(context, {
        log: log,
        releaseContextMap: releaseContextMap,
        releaseContextFromDependency: _fileSystem.releaseContextFromDependency
    });
    var now = startClock();
    (0, _releaseContext.createReleaseContext)(dependency, dependentNames, context, function(error, success) {
        if (error) {
            log.error(error);
            return;
        }
        if (!success) {
            log.warning("The '".concat(name, "' project or package cannot be created."));
            return;
        }
        var releaseName = name, releaseContext = releaseContextMap[releaseName], released = releaseContext.isReleased();
        if (released) {
            log.warning("The '".concat(name, "' package does not need to be verified."));
            return;
        }
        (0, _releaseContext.initialiseReleaseContext)(dependency, context);
        var dependentName = null, dependentReleased = false, releaseVerifies = (0, _release.verifyRelease)(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (!releaseVerifies) {
            log.warning("The '".concat(name, "' project or package cannot be verified."));
            return;
        }
        stopClock(now, log);
    });
}
function startClock() {
    var now;
    now = Date.now();
    return now;
}
function stopClock(now, log) {
    var then = now; ///
    now = Date.now();
    var seconds = Math.floor(now - then) / 1000;
    log.info("Time ".concat(seconds, " seconds."));
}
function trimTrailingSlash(string) {
    string = string.replace(/\/$/, _constants.EMPTY_STRING); ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5cbmltcG9ydCBcIi4uL3ByZWFtYmxlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZlcmlmeVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKSB7XG4gIGNvbnN0IG5hbWUgPSB0cmltVHJhaWxpbmdTbGFzaChhcmd1bWVudCksIC8vL1xuICAgICAgICBjb250ZXh0ID0ge30sXG4gICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICByZWxlYXNlQ29udGV4dE1hcCA9IHt9O1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxvZyxcbiAgICByZWxlYXNlQ29udGV4dE1hcCxcbiAgICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG4gIH0pO1xuXG4gIGxldCBub3cgPSBzdGFydENsb2NrKCk7XG5cbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSBjcmVhdGVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcGFja2FnZSBkb2VzIG5vdCBuZWVkIHRvIGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW50UmVsZWFzZWQgPSBmYWxzZSxcbiAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKCFyZWxlYXNlVmVyaWZpZXMpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9wQ2xvY2sobm93LCBsb2cpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRDbG9jaygpIHtcbiAgbGV0IG5vdztcblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBub3c7XG59XG5cbmZ1bmN0aW9uIHN0b3BDbG9jayhub3csIGxvZykge1xuICBjb25zdCB0aGVuID0gbm93OyAvLy9cblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKG5vdyAtIHRoZW4pIC8gMTAwMDtcblxuICBsb2cuaW5mbyhgVGltZSAke3NlY29uZHN9IHNlY29uZHMuYCk7XG59XG5cbmZ1bmN0aW9uIHRyaW1UcmFpbGluZ1NsYXNoKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJhcmd1bWVudCIsImxvZyIsIm5hbWUiLCJ0cmltVHJhaWxpbmdTbGFzaCIsImNvbnRleHQiLCJkZXBlbmRlbmN5IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwiZGVwZW5kZW50TmFtZXMiLCJyZWxlYXNlQ29udGV4dE1hcCIsIk9iamVjdCIsImFzc2lnbiIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJub3ciLCJzdGFydENsb2NrIiwiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJlcnJvciIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VWZXJpZmllcyIsInZlcmlmeVJlbGVhc2UiLCJzdG9wQ2xvY2siLCJEYXRlIiwidGhlbiIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbmZvIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs2QkFURztRQUVwQjt5QkFFc0I7dUJBQ0M7MEJBQ2U7OEJBQ2tCO0FBRWhELFNBQVNBLGFBQWFDLFFBQVEsRUFBRUMsR0FBRztJQUNoRCxJQUFNQyxPQUFPQyxrQkFBa0JILFdBQ3pCSSxVQUFVLENBQUMsR0FDWEMsYUFBYUMseUJBQVUsQ0FBQ0MsUUFBUSxDQUFDTCxPQUNqQ00saUJBQWlCLEVBQUUsRUFDbkJDLG9CQUFvQixDQUFDO0lBRTNCQyxPQUFPQyxNQUFNLENBQUNQLFNBQVM7UUFDckJILEtBQUFBO1FBQ0FRLG1CQUFBQTtRQUNBRyw4QkFBQUEsd0NBQTRCO0lBQzlCO0lBRUEsSUFBSUMsTUFBTUM7SUFFVkMsSUFBQUEsb0NBQW9CLEVBQUNWLFlBQVlHLGdCQUFnQkosU0FBUyxTQUFDWSxPQUFPQztRQUNoRSxJQUFJRCxPQUFPO1lBQ1RmLElBQUllLEtBQUssQ0FBQ0E7WUFFVjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxTQUFTO1lBQ1poQixJQUFJaUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMaEIsTUFBSztZQUV6QjtRQUNGO1FBRUEsSUFBTWlCLGNBQWNqQixNQUNka0IsaUJBQWlCWCxpQkFBaUIsQ0FBQ1UsWUFBWSxFQUMvQ0UsV0FBV0QsZUFBZUUsVUFBVTtRQUUxQyxJQUFJRCxVQUFVO1lBQ1pwQixJQUFJaUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMaEIsTUFBSztZQUV6QjtRQUNGO1FBRUFxQixJQUFBQSx3Q0FBd0IsRUFBQ2xCLFlBQVlEO1FBRXJDLElBQU1vQixnQkFBZ0IsTUFDaEJDLG9CQUFvQixPQUNwQkMsa0JBQWtCQyxJQUFBQSxzQkFBYSxFQUFDUixhQUFhSyxlQUFlQyxtQkFBbUJoQjtRQUVyRixJQUFJLENBQUNpQixpQkFBaUI7WUFDcEJ6QixJQUFJaUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMaEIsTUFBSztZQUV6QjtRQUNGO1FBRUEwQixVQUFVZixLQUFLWjtJQUNqQjtBQUNGO0FBRUEsU0FBU2E7SUFDUCxJQUFJRDtJQUVKQSxNQUFNZ0IsS0FBS2hCLEdBQUc7SUFFZCxPQUFPQTtBQUNUO0FBRUEsU0FBU2UsVUFBVWYsR0FBRyxFQUFFWixHQUFHO0lBQ3pCLElBQU02QixPQUFPakIsS0FBSyxHQUFHO0lBRXJCQSxNQUFNZ0IsS0FBS2hCLEdBQUc7SUFFZCxJQUFNa0IsVUFBVUMsS0FBS0MsS0FBSyxDQUFDcEIsTUFBTWlCLFFBQVE7SUFFekM3QixJQUFJaUMsSUFBSSxDQUFDLEFBQUMsUUFBZSxPQUFSSCxTQUFRO0FBQzNCO0FBRUEsU0FBUzVCLGtCQUFrQmdDLE1BQU07SUFDL0JBLFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxPQUFPQyx1QkFBWSxHQUFHLEdBQUc7SUFFakQsT0FBT0Y7QUFDVCJ9