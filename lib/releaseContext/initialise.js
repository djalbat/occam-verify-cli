"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initialiseReleaseContext;
    }
});
function initialiseReleaseContext(dependency, dependentName, dependentReleased, context) {
    var releaseContextInitialised = false;
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        var log = context.log;
        log.error("Unable to initialise the '".concat(dependencyName, "' dependency's context because it has not been created."));
    } else {
        var initialised = releaseContext.isInitialised();
        if (initialised) {
            releaseContextInitialised = true;
        } else {
            var released = releaseContext.isReleased();
            if (!released && dependentReleased) {
                var log1 = context.log;
                log1.error("Unable to initialise the '".concat(dependencyName, "' dependency's context because its '").concat(dependentName, "' dependent is a package."));
            } else {
                var dependencies = releaseContext.getDependencies();
                dependentName = dependencyName; ///
                dependentReleased = released; ///
                releaseContextInitialised = dependencies.everyDependency(function(dependency) {
                    var releaseContextInitialised = initialiseReleaseContext(dependency, dependentName, dependentReleased, context);
                    if (releaseContextInitialised) {
                        return true;
                    }
                });
                if (releaseContextInitialised) {
                    var releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);
                    releaseContext.initialise(releaseContexts);
                }
            }
        }
    }
    return releaseContextInitialised;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC9pbml0aWFsaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy5lcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgZGVwZW5kZW5jeSdzIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmIChpbml0aWFsaXNlZCkge1xuICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VkICYmIGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGxvZy5lcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgZGVwZW5kZW5jeSdzIGNvbnRleHQgYmVjYXVzZSBpdHMgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCBpcyBhIHBhY2thZ2UuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgICBkZXBlbmRlbnROYW1lID0gZGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IHJlbGVhc2VkOyAgLy8vXG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQ7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRcbiAgICAgICAgXTtcblxuICBsZXQgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcblxuICB3aGlsZSAocmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKCFyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ICYmICFyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5wdXNoKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJjb250ZXh0IiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImxvZyIsImVycm9yIiwiaW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZXZlcnlEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHQiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGgiLCJsZW5ndGgiLCJzaGlmdCIsInB1c2giLCJmb3JFYWNoRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJpbmNsdWRlcyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EseUJBQXlCQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87SUFDcEcsSUFBSUMsNEJBQTRCO0lBRWhDLElBQU0sQUFBRUMsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSTtJQUV6RCxJQUFJQyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNLEFBQUVDLE1BQVFQLFFBQVJPO1FBRVJBLElBQUlDLEtBQUssQ0FBQyxBQUFDLDZCQUEyQyxPQUFmTCxnQkFBZTtJQUN4RCxPQUFPO1FBQ0wsSUFBTU0sY0FBY0gsZUFBZUksYUFBYTtRQUVoRCxJQUFJRCxhQUFhO1lBQ2ZSLDRCQUE0QjtRQUM5QixPQUFPO1lBQ0wsSUFBTVUsV0FBV0wsZUFBZU0sVUFBVTtZQUUxQyxJQUFJLENBQUNELFlBQVlaLG1CQUFtQjtnQkFDbEMsSUFBTSxBQUFFUSxPQUFRUCxRQUFSTztnQkFFUkEsS0FBSUMsS0FBSyxDQUFDLEFBQUMsNkJBQWlGVixPQUFyREssZ0JBQWUsd0NBQW9ELE9BQWRMLGVBQWM7WUFDNUcsT0FBTztnQkFDTCxJQUFNZSxlQUFlUCxlQUFlUSxlQUFlO2dCQUVuRGhCLGdCQUFnQkssZ0JBQWlCLEdBQUc7Z0JBRXBDSixvQkFBb0JZLFVBQVcsR0FBRztnQkFFbENWLDRCQUE0QlksYUFBYUUsZUFBZSxDQUFDLFNBQUNsQjtvQkFDeEQsSUFBTUksNEJBQTRCTCx5QkFBeUJDLFlBQVlDLGVBQWVDLG1CQUFtQkM7b0JBRXpHLElBQUlDLDJCQUEyQjt3QkFDN0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSwyQkFBMkI7b0JBQzdCLElBQU1lLGtCQUFrQkMsd0JBQXdCWCxnQkFBZ0JKO29CQUVoRUksZUFBZVksVUFBVSxDQUFDRjtnQkFDNUI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPZjtBQUNUO0FBRUEsU0FBU2dCLHdCQUF3QlgsY0FBYyxFQUFFSixpQkFBaUI7SUFDaEUsSUFBTWMsa0JBQWtCLEVBQUUsRUFDcEJHLDBCQUEwQmIsZ0JBQzFCYywyQkFBMkI7UUFDekJEO0tBQ0Q7SUFFUCxJQUFJRSxpQ0FBaUNELHlCQUF5QkUsTUFBTTtJQUVwRSxNQUFPRCxpQ0FBaUMsRUFBRztRQUN6QyxJQUFNRiwyQkFBMEJDLHlCQUF5QkcsS0FBSyxJQUN4RGpCLG1CQUFpQmEsMEJBQTBCLEdBQUc7UUFFcERILGdCQUFnQlEsSUFBSSxDQUFDbEI7UUFFckIsSUFBTU8sZUFBZVAsaUJBQWVRLGVBQWU7UUFFbkRELGFBQWFZLGlCQUFpQixDQUFDLFNBQUM1QjtZQUM5QixJQUFNTSxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxtQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLEVBQy9DcUIsd0NBQXdDVixnQkFBZ0JXLFFBQVEsQ0FBQ3JCLG1CQUNqRXNCLGlEQUFpRFIseUJBQXlCTyxRQUFRLENBQUNyQjtZQUV6RixJQUFJLENBQUNvQix5Q0FBeUMsQ0FBQ0UsZ0RBQWdEO2dCQUM3RixJQUFNVCwwQkFBMEJiLGtCQUFnQixHQUFHO2dCQUVuRGMseUJBQXlCSSxJQUFJLENBQUNMO1lBQ2hDO1FBQ0Y7UUFFQUUsaUNBQWlDRCx5QkFBeUJFLE1BQU07SUFDbEU7SUFFQSxPQUFPTjtBQUNUIn0=