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
var _releaseContext = require("../utilities/releaseContext");
function verifyAction(argument, log) {
    var name = (0, _string.trimTrailingSlash)(argument), context = {}, dependency = _occamentities.Dependency.fromName(name), dependentNames = [], releaseContextMap = {};
    Object.assign(context, {
        log: log,
        releaseContextMap: releaseContextMap,
        releaseContextFromDependency: _releaseContext.releaseContextFromDependency
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5cbmltcG9ydCB7IHZlcmlmeVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHRyaW1UcmFpbGluZ1NsYXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5pbXBvcnQgeyBjcmVhdGVSZWxlYXNlQ29udGV4dCwgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZWxlYXNlQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24oYXJndW1lbnQsIGxvZykge1xuICBjb25zdCBuYW1lID0gdHJpbVRyYWlsaW5nU2xhc2goYXJndW1lbnQpLCAvLy9cbiAgICAgICAgY29udGV4dCA9IHt9LFxuICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tTmFtZShuYW1lKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXMgPSBbXSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAgPSB7fTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBsb2csXG4gICAgcmVsZWFzZUNvbnRleHRNYXAsXG4gICAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxuICB9KTtcblxuICBsZXQgbm93ID0gc3RhcnRDbG9jaygpO1xuXG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgIGlmICghcmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcENsb2NrKG5vdywgbG9nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0Q2xvY2soKSB7XG4gIGxldCBub3c7XG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gbm93O1xufVxuXG5mdW5jdGlvbiBzdG9wQ2xvY2sobm93LCBsb2cpIHtcbiAgY29uc3QgdGhlbiA9IG5vdzsgLy8vXG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihub3cgLSB0aGVuKSAvIDEwMDA7XG5cbiAgbG9nLmluZm8oYFRpbWUgJHtzZWNvbmRzfSBzZWNvbmRzLmApO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUFjdGlvbiIsImFyZ3VtZW50IiwibG9nIiwibmFtZSIsInRyaW1UcmFpbGluZ1NsYXNoIiwiY29udGV4dCIsImRlcGVuZGVuY3kiLCJEZXBlbmRlbmN5IiwiZnJvbU5hbWUiLCJkZXBlbmRlbnROYW1lcyIsInJlbGVhc2VDb250ZXh0TWFwIiwiT2JqZWN0IiwiYXNzaWduIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsIm5vdyIsInN0YXJ0Q2xvY2siLCJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImVycm9yIiwic3VjY2VzcyIsIndhcm5pbmciLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVkIiwidmVyaWZ5UmVsZWFzZSIsInN0b3BDbG9jayIsIkRhdGUiLCJ0aGVuIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7NkJBUEc7dUJBRUc7c0JBQ0k7OEJBQ1c7QUFHOUIsU0FBU0EsYUFBYUMsUUFBUSxFQUFFQyxHQUFHO0lBQ2hELElBQU1DLE9BQU9DLElBQUFBLHlCQUFpQixFQUFDSCxXQUN6QkksVUFBVSxDQUFDLEdBQ1hDLGFBQWFDLHlCQUFVLENBQUNDLFFBQVEsQ0FBQ0wsT0FDakNNLGlCQUFpQixFQUFFLEVBQ25CQyxvQkFBb0IsQ0FBQztJQUUzQkMsT0FBT0MsTUFBTSxDQUFDUCxTQUFTO1FBQ3JCSCxLQUFBQTtRQUNBUSxtQkFBQUE7UUFDQUcsOEJBQUFBLDRDQUE0QjtJQUM5QjtJQUVBLElBQUlDLE1BQU1DO0lBRVZDLElBQUFBLG9DQUFvQixFQUFDVixZQUFZRyxnQkFBZ0JKLFNBQVMsU0FBQ1ksT0FBT0M7UUFDaEUsSUFBSUQsT0FBTztZQUNUZixJQUFJZSxLQUFLLENBQUNBO1lBRVY7UUFDRjtRQUVBLElBQUksQ0FBQ0MsU0FBUztZQUNaaEIsSUFBSWlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGhCLE1BQUs7WUFFekI7UUFDRjtRQUVBLElBQU1pQixjQUFjakIsTUFDZGtCLGlCQUFpQlgsaUJBQWlCLENBQUNVLFlBQVksRUFDL0NFLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNacEIsSUFBSWlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGhCLE1BQUs7WUFFekI7UUFDRjtRQUVBcUIsSUFBQUEsd0NBQXdCLEVBQUNsQixZQUFZRDtRQUVyQyxJQUFNb0IsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsT0FDcEJDLGtCQUFrQkMsSUFBQUEsc0JBQWEsRUFBQ1IsYUFBYUssZUFBZUMsbUJBQW1CaEI7UUFFckYsSUFBSSxDQUFDaUIsaUJBQWlCO1lBQ3BCekIsSUFBSWlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTGhCLE1BQUs7WUFFekI7UUFDRjtRQUVBMEIsVUFBVWYsS0FBS1o7SUFDakI7QUFDRjtBQUVBLFNBQVNhO0lBQ1AsSUFBSUQ7SUFFSkEsTUFBTWdCLEtBQUtoQixHQUFHO0lBRWQsT0FBT0E7QUFDVDtBQUVBLFNBQVNlLFVBQVVmLEdBQUcsRUFBRVosR0FBRztJQUN6QixJQUFNNkIsT0FBT2pCLEtBQUssR0FBRztJQUVyQkEsTUFBTWdCLEtBQUtoQixHQUFHO0lBRWQsSUFBTWtCLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ3BCLE1BQU1pQixRQUFRO0lBRXpDN0IsSUFBSWlDLElBQUksQ0FBQyxBQUFDLFFBQWUsT0FBUkgsU0FBUTtBQUMzQiJ9