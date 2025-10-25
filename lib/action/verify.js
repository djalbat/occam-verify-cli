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
var _index = require("../../lib/index");
var _string = require("../utilities/string");
var _releaseContext = require("../utilities/releaseContext");
var verifyRelease = _index.releaseUtilities.verifyRelease, createReleaseContext = _index.releaseContextUtilities.createReleaseContext, initialiseReleaseContext = _index.releaseContextUtilities.initialiseReleaseContext;
function verifyAction(argument, log) {
    var name = (0, _string.trimTrailingSlash)(argument), context = {}, dependency = _occamentities.Dependency.fromName(name), dependentNames = [], releaseContextMap = {};
    Object.assign(context, {
        log: log,
        releaseContextMap: releaseContextMap,
        releaseContextFromDependency: _releaseContext.releaseContextFromDependency
    });
    var now = startClock();
    createReleaseContext(dependency, dependentNames, context, function(error, success) {
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
        initialiseReleaseContext(dependency, context);
        var dependentName = null, dependentReleased = false, releaseVerified = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyByZWxlYXNlVXRpbGl0aWVzLCByZWxlYXNlQ29udGV4dFV0aWxpdGllcyB9IGZyb20gXCIuLi8uLi9saWIvaW5kZXhcIjtcblxuaW1wb3J0IHsgdHJpbVRyYWlsaW5nU2xhc2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcblxuY29uc3QgeyB2ZXJpZnlSZWxlYXNlIH0gPSByZWxlYXNlVXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVSZWxlYXNlQ29udGV4dCwgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IH0gPSByZWxlYXNlQ29udGV4dFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5QWN0aW9uKGFyZ3VtZW50LCBsb2cpIHtcbiAgY29uc3QgbmFtZSA9IHRyaW1UcmFpbGluZ1NsYXNoKGFyZ3VtZW50KSwgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fSxcbiAgICAgICAgZGVwZW5kZW5jeSA9IERlcGVuZGVuY3kuZnJvbU5hbWUobmFtZSksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzID0gW10sXG4gICAgICAgIHJlbGVhc2VDb250ZXh0TWFwID0ge307XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgbG9nLFxuICAgIHJlbGVhc2VDb250ZXh0TWFwLFxuICAgIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lcbiAgfSk7XG5cbiAgbGV0IG5vdyA9IHN0YXJ0Q2xvY2soKTtcblxuICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yLCBzdWNjZXNzKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgIHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwYWNrYWdlIGRvZXMgbm90IG5lZWQgdG8gYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoIXJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0b3BDbG9jayhub3csIGxvZyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydENsb2NrKCkge1xuICBsZXQgbm93O1xuXG4gIG5vdyA9IERhdGUubm93KCk7XG5cbiAgcmV0dXJuIG5vdztcbn1cblxuZnVuY3Rpb24gc3RvcENsb2NrKG5vdywgbG9nKSB7XG4gIGNvbnN0IHRoZW4gPSBub3c7IC8vL1xuXG4gIG5vdyA9IERhdGUubm93KCk7XG5cbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3Iobm93IC0gdGhlbikgLyAxMDAwO1xuXG4gIGxvZy5pbmZvKGBUaW1lICR7c2Vjb25kc30gc2Vjb25kcy5gKTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJ2ZXJpZnlSZWxlYXNlIiwicmVsZWFzZVV0aWxpdGllcyIsImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRVdGlsaXRpZXMiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJhcmd1bWVudCIsImxvZyIsIm5hbWUiLCJ0cmltVHJhaWxpbmdTbGFzaCIsImNvbnRleHQiLCJkZXBlbmRlbmN5IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwiZGVwZW5kZW50TmFtZXMiLCJyZWxlYXNlQ29udGV4dE1hcCIsIk9iamVjdCIsImFzc2lnbiIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJub3ciLCJzdGFydENsb2NrIiwiZXJyb3IiLCJzdWNjZXNzIiwid2FybmluZyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZWQiLCJzdG9wQ2xvY2siLCJEYXRlIiwidGhlbiIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzZCQVRHO3FCQUMrQjtzQkFFeEI7OEJBQ1c7QUFFN0MsSUFBTSxBQUFFQyxnQkFBa0JDLHVCQUFnQixDQUFsQ0QsZUFDQUUsdUJBQW1EQyw4QkFBdUIsQ0FBMUVELHNCQUFzQkUsMkJBQTZCRCw4QkFBdUIsQ0FBcERDO0FBRWYsU0FBU0wsYUFBYU0sUUFBUSxFQUFFQyxHQUFHO0lBQ2hELElBQU1DLE9BQU9DLElBQUFBLHlCQUFpQixFQUFDSCxXQUN6QkksVUFBVSxDQUFDLEdBQ1hDLGFBQWFDLHlCQUFVLENBQUNDLFFBQVEsQ0FBQ0wsT0FDakNNLGlCQUFpQixFQUFFLEVBQ25CQyxvQkFBb0IsQ0FBQztJQUUzQkMsT0FBT0MsTUFBTSxDQUFDUCxTQUFTO1FBQ3JCSCxLQUFBQTtRQUNBUSxtQkFBQUE7UUFDQUcsOEJBQUFBLDRDQUE0QjtJQUM5QjtJQUVBLElBQUlDLE1BQU1DO0lBRVZqQixxQkFBcUJRLFlBQVlHLGdCQUFnQkosU0FBUyxTQUFDVyxPQUFPQztRQUNoRSxJQUFJRCxPQUFPO1lBQ1RkLElBQUljLEtBQUssQ0FBQ0E7WUFFVjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxTQUFTO1lBQ1pmLElBQUlnQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxmLE1BQUs7WUFFekI7UUFDRjtRQUVBLElBQU1nQixjQUFjaEIsTUFDZGlCLGlCQUFpQlYsaUJBQWlCLENBQUNTLFlBQVksRUFDL0NFLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNabkIsSUFBSWdCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGYsTUFBSztZQUV6QjtRQUNGO1FBRUFILHlCQUF5Qk0sWUFBWUQ7UUFFckMsSUFBTWtCLGdCQUFnQixNQUNoQkMsb0JBQW9CLE9BQ3BCQyxrQkFBa0I3QixjQUFjdUIsYUFBYUksZUFBZUMsbUJBQW1CZDtRQUVyRixJQUFJLENBQUNlLGlCQUFpQjtZQUNwQnZCLElBQUlnQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxmLE1BQUs7WUFFekI7UUFDRjtRQUVBdUIsVUFBVVosS0FBS1o7SUFDakI7QUFDRjtBQUVBLFNBQVNhO0lBQ1AsSUFBSUQ7SUFFSkEsTUFBTWEsS0FBS2IsR0FBRztJQUVkLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTWSxVQUFVWixHQUFHLEVBQUVaLEdBQUc7SUFDekIsSUFBTTBCLE9BQU9kLEtBQUssR0FBRztJQUVyQkEsTUFBTWEsS0FBS2IsR0FBRztJQUVkLElBQU1lLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ2pCLE1BQU1jLFFBQVE7SUFFekMxQixJQUFJOEIsSUFBSSxDQUFDLEFBQUMsUUFBZSxPQUFSSCxTQUFRO0FBQzNCIn0=