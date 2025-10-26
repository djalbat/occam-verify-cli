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
var _release = require("../utilities/release");
var _string = require("../utilities/string");
var _fileSystem = require("../utilities/fileSystem");
var _releaseContext = require("../utilities/releaseContext");
function verifyAction(argument, log) {
    var name = (0, _string.trimTrailingSlash)(argument), context = {}, dependency = _occamentities.Dependency.fromName(name), dependentNames = [], releaseContextMap = {};
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
        var dependentName = null, dependentReleased = false, releaseVerified = (0, _release.verifyRelease)(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (!releaseVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5cbmltcG9ydCB7IHZlcmlmeVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHRyaW1UcmFpbGluZ1NsYXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKSB7XG4gIGNvbnN0IG5hbWUgPSB0cmltVHJhaWxpbmdTbGFzaChhcmd1bWVudCksIC8vL1xuICAgICAgICBjb250ZXh0ID0ge30sXG4gICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICByZWxlYXNlQ29udGV4dE1hcCA9IHt9O1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxvZyxcbiAgICByZWxlYXNlQ29udGV4dE1hcCxcbiAgICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG4gIH0pO1xuXG4gIGxldCBub3cgPSBzdGFydENsb2NrKCk7XG5cbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSBjcmVhdGVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcGFja2FnZSBkb2VzIG5vdCBuZWVkIHRvIGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW50UmVsZWFzZWQgPSBmYWxzZSxcbiAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKCFyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9wQ2xvY2sobm93LCBsb2cpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRDbG9jaygpIHtcbiAgbGV0IG5vdztcblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBub3c7XG59XG5cbmZ1bmN0aW9uIHN0b3BDbG9jayhub3csIGxvZykge1xuICBjb25zdCB0aGVuID0gbm93OyAvLy9cblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKG5vdyAtIHRoZW4pIC8gMTAwMDtcblxuICBsb2cuaW5mbyhgVGltZSAke3NlY29uZHN9IHNlY29uZHMuYCk7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwiYXJndW1lbnQiLCJsb2ciLCJuYW1lIiwidHJpbVRyYWlsaW5nU2xhc2giLCJjb250ZXh0IiwiZGVwZW5kZW5jeSIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZSIsImRlcGVuZGVudE5hbWVzIiwicmVsZWFzZUNvbnRleHRNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5Iiwibm93Iiwic3RhcnRDbG9jayIsImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJzdWNjZXNzIiwid2FybmluZyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZWQiLCJ2ZXJpZnlSZWxlYXNlIiwic3RvcENsb2NrIiwiRGF0ZSIsInRoZW4iLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7Ozs2QkFQRzt1QkFFRztzQkFDSTswQkFDVzs4QkFDa0I7QUFFaEQsU0FBU0EsYUFBYUMsUUFBUSxFQUFFQyxHQUFHO0lBQ2hELElBQU1DLE9BQU9DLElBQUFBLHlCQUFpQixFQUFDSCxXQUN6QkksVUFBVSxDQUFDLEdBQ1hDLGFBQWFDLHlCQUFVLENBQUNDLFFBQVEsQ0FBQ0wsT0FDakNNLGlCQUFpQixFQUFFLEVBQ25CQyxvQkFBb0IsQ0FBQztJQUUzQkMsT0FBT0MsTUFBTSxDQUFDUCxTQUFTO1FBQ3JCSCxLQUFBQTtRQUNBUSxtQkFBQUE7UUFDQUcsOEJBQUFBLHdDQUE0QjtJQUM5QjtJQUVBLElBQUlDLE1BQU1DO0lBRVZDLElBQUFBLG9DQUFvQixFQUFDVixZQUFZRyxnQkFBZ0JKLFNBQVMsU0FBQ1ksT0FBT0M7UUFDaEUsSUFBSUQsT0FBTztZQUNUZixJQUFJZSxLQUFLLENBQUNBO1lBRVY7UUFDRjtRQUVBLElBQUksQ0FBQ0MsU0FBUztZQUNaaEIsSUFBSWlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGhCLE1BQUs7WUFFekI7UUFDRjtRQUVBLElBQU1pQixjQUFjakIsTUFDZGtCLGlCQUFpQlgsaUJBQWlCLENBQUNVLFlBQVksRUFDL0NFLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNacEIsSUFBSWlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGhCLE1BQUs7WUFFekI7UUFDRjtRQUVBcUIsSUFBQUEsd0NBQXdCLEVBQUNsQixZQUFZRDtRQUVyQyxJQUFNb0IsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsT0FDcEJDLGtCQUFrQkMsSUFBQUEsc0JBQWEsRUFBQ1IsYUFBYUssZUFBZUMsbUJBQW1CaEI7UUFFckYsSUFBSSxDQUFDaUIsaUJBQWlCO1lBQ3BCekIsSUFBSWlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGhCLE1BQUs7WUFFekI7UUFDRjtRQUVBMEIsVUFBVWYsS0FBS1o7SUFDakI7QUFDRjtBQUVBLFNBQVNhO0lBQ1AsSUFBSUQ7SUFFSkEsTUFBTWdCLEtBQUtoQixHQUFHO0lBRWQsT0FBT0E7QUFDVDtBQUVBLFNBQVNlLFVBQVVmLEdBQUcsRUFBRVosR0FBRztJQUN6QixJQUFNNkIsT0FBT2pCLEtBQUssR0FBRztJQUVyQkEsTUFBTWdCLEtBQUtoQixHQUFHO0lBRWQsSUFBTWtCLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ3BCLE1BQU1pQixRQUFRO0lBRXpDN0IsSUFBSWlDLElBQUksQ0FBQyxBQUFDLFFBQWUsT0FBUkgsU0FBUTtBQUMzQiJ9