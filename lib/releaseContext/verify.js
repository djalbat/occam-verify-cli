"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyReleaseContext;
    }
});
function verifyReleaseContext(dependency, dependentName, dependentReleased, context) {
    var releaseContextVerified = false;
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        var log = context.log;
        log.error("Unable to verify the '".concat(dependencyName, "' dependency's context because it has not been created."));
    } else {
        var verified = releaseContext.isVerified();
        if (verified) {
            releaseContextVerified = true;
        } else {
            var released = releaseContext.isReleased();
            if (!released && dependentReleased) {
                var log1 = context.log;
                log1.error("Unable to verify the '".concat(dependencyName, "' dependency's context because its '").concat(dependentName, "' dependent is a package."));
            } else {
                var dependencies = releaseContext.getDependencies();
                dependentName = dependencyName; ///
                dependentReleased = released; ///
                releaseContextVerified = dependencies.everyDependency(function(dependency) {
                    var releaseContextVerified = verifyReleaseContext(dependency, dependentName, dependentReleased, context);
                    if (releaseContextVerified) {
                        return true;
                    }
                });
                if (releaseContextVerified) {
                    var releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);
                    releaseContext.verify(releaseContexts);
                }
            }
        }
    }
    return releaseContextVerified;
}
function retrieveReleaseContexts(releaseContext, releaseContextMap) {
    var releaseContexts = [], remainingReleaseContext = releaseContext, remainingReleaseContexts = [
        remainingReleaseContext
    ];
    var remainingReleaseContextsLength = remainingReleaseContexts.length;
    while(remainingReleaseContextsLength > 0){
        var remainingReleaseContext1 = remainingReleaseContexts.shift(), _$releaseContext = remainingReleaseContext1; ///
        releaseContexts.push(_$releaseContext);
        var dependencies = _$releaseContext.getDependencies();
        dependencies.forEachDependency(function(dependency) {
            var dependencyName = dependency.getName(), releaseName = dependencyName, _$releaseContext = releaseContextMap[releaseName], releaseContextsIncludesReleaseContext = releaseContexts.includes(_$releaseContext), remainingReleaseContextsIncludesReleaseContext = remainingReleaseContexts.includes(_$releaseContext);
            if (!releaseContextsIncludesReleaseContext && !remainingReleaseContextsIncludesReleaseContext) {
                var remainingReleaseContext = _$releaseContext; ///
                remainingReleaseContexts.push(remainingReleaseContext);
            }
        });
        remainingReleaseContextsLength = remainingReleaseContexts.length;
    }
    return releaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICBsb2cuZXJyb3IoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgZGVwZW5kZW5jeSdzIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VkICYmIGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGxvZy5lcnJvcihgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBkZXBlbmRlbmN5J3MgY29udGV4dCBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgICAgIGRlcGVuZGVudE5hbWUgPSBkZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gcmVsZWFzZWQ7ICAvLy9cblxuICAgICAgICByZWxlYXNlQ29udGV4dFZlcmlmaWVkID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0LnZlcmlmeShyZWxlYXNlQ29udGV4dHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRcbiAgICAgICAgXTtcblxuICBsZXQgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcblxuICB3aGlsZSAocmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKCFyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ICYmICFyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5wdXNoKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsImNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwibG9nIiwiZXJyb3IiLCJ2ZXJpZmllZCIsImlzVmVyaWZpZWQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJldmVyeURlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsInZlcmlmeSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwibGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EscUJBQXFCQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87SUFDaEcsSUFBSUMseUJBQXlCO0lBRTdCLElBQU0sQUFBRUMsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSTtJQUV6RCxJQUFJQyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNLEFBQUVDLE1BQVFQLFFBQVJPO1FBRVJBLElBQUlDLEtBQUssQ0FBQyxBQUFDLHlCQUF1QyxPQUFmTCxnQkFBZTtJQUNwRCxPQUFPO1FBQ0wsSUFBTU0sV0FBV0gsZUFBZUksVUFBVTtRQUUxQyxJQUFJRCxVQUFVO1lBQ1pSLHlCQUF5QjtRQUMzQixPQUFPO1lBQ0wsSUFBTVUsV0FBV0wsZUFBZU0sVUFBVTtZQUUxQyxJQUFJLENBQUNELFlBQVlaLG1CQUFtQjtnQkFDbEMsSUFBTSxBQUFFUSxPQUFRUCxRQUFSTztnQkFFUkEsS0FBSUMsS0FBSyxDQUFDLEFBQUMseUJBQTZFVixPQUFyREssZ0JBQWUsd0NBQW9ELE9BQWRMLGVBQWM7WUFDeEcsT0FBTztnQkFDTCxJQUFNZSxlQUFlUCxlQUFlUSxlQUFlO2dCQUVuRGhCLGdCQUFnQkssZ0JBQWlCLEdBQUc7Z0JBRXBDSixvQkFBb0JZLFVBQVcsR0FBRztnQkFFbENWLHlCQUF5QlksYUFBYUUsZUFBZSxDQUFDLFNBQUNsQjtvQkFDckQsSUFBTUkseUJBQXlCTCxxQkFBcUJDLFlBQVlDLGVBQWVDLG1CQUFtQkM7b0JBRWxHLElBQUlDLHdCQUF3Qjt3QkFDMUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSx3QkFBd0I7b0JBQzFCLElBQU1lLGtCQUFrQkMsd0JBQXdCWCxnQkFBZ0JKO29CQUVoRUksZUFBZVksTUFBTSxDQUFDRjtnQkFDeEI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPZjtBQUNUO0FBRUEsU0FBU2dCLHdCQUF3QlgsY0FBYyxFQUFFSixpQkFBaUI7SUFDaEUsSUFBTWMsa0JBQWtCLEVBQUUsRUFDcEJHLDBCQUEwQmIsZ0JBQzFCYywyQkFBMkI7UUFDekJEO0tBQ0Q7SUFFUCxJQUFJRSxpQ0FBaUNELHlCQUF5QkUsTUFBTTtJQUVwRSxNQUFPRCxpQ0FBaUMsRUFBRztRQUN6QyxJQUFNRiwyQkFBMEJDLHlCQUF5QkcsS0FBSyxJQUN4RGpCLG1CQUFpQmEsMEJBQTBCLEdBQUc7UUFFcERILGdCQUFnQlEsSUFBSSxDQUFDbEI7UUFFckIsSUFBTU8sZUFBZVAsaUJBQWVRLGVBQWU7UUFFbkRELGFBQWFZLGlCQUFpQixDQUFDLFNBQUM1QjtZQUM5QixJQUFNTSxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxtQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLEVBQy9DcUIsd0NBQXdDVixnQkFBZ0JXLFFBQVEsQ0FBQ3JCLG1CQUNqRXNCLGlEQUFpRFIseUJBQXlCTyxRQUFRLENBQUNyQjtZQUV6RixJQUFJLENBQUNvQix5Q0FBeUMsQ0FBQ0UsZ0RBQWdEO2dCQUM3RixJQUFNVCwwQkFBMEJiLGtCQUFnQixHQUFHO2dCQUVuRGMseUJBQXlCSSxJQUFJLENBQUNMO1lBQ2hDO1FBQ0Y7UUFFQUUsaUNBQWlDRCx5QkFBeUJFLE1BQU07SUFDbEU7SUFFQSxPQUFPTjtBQUNUIn0=