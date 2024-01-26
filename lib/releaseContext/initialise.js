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
                    var releaseContexts = retrieveReleaseContexts(dependency, context);
                    releaseContext.initialise(releaseContexts);
                }
            }
        }
    }
    return releaseContextInitialised;
}
function retrieveReleaseContexts(dependency, context) {
    var releaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext);
    if (releaseContextsIncludesReleaseContext) {
        return;
    }
    releaseContexts.push(releaseContext);
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        retrieveReleaseContexts(dependency, context, releaseContexts);
    });
    return releaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC9pbml0aWFsaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy5lcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgZGVwZW5kZW5jeSdzIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmIChpbml0aWFsaXNlZCkge1xuICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VkICYmIGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGxvZy5lcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgZGVwZW5kZW5jeSdzIGNvbnRleHQgYmVjYXVzZSBpdHMgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCBpcyBhIHBhY2thZ2UuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgICBkZXBlbmRlbnROYW1lID0gZGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IHJlbGVhc2VkOyAgLy8vXG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0LCByZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIHJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIHJlbGVhc2VDb250ZXh0cyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsImNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwibG9nIiwiZXJyb3IiLCJpbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJldmVyeURlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJwdXNoIiwiZm9yRWFjaERlcGVuZGVuY3kiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSx5QkFBeUJDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztJQUNwRyxJQUFJQyw0QkFBNEI7SUFFaEMsSUFBTSxBQUFFQyxvQkFBc0JGLFFBQXRCRSxtQkFDRkMsaUJBQWlCTixXQUFXTyxPQUFPLElBQ25DQyxjQUFjRixnQkFDZEcsaUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxJQUFJO0lBRXpELElBQUlDLG1CQUFtQixNQUFNO1FBQzNCLElBQU0sQUFBRUMsTUFBUVAsUUFBUk87UUFFUkEsSUFBSUMsS0FBSyxDQUFDLEFBQUMsNkJBQTJDLE9BQWZMLGdCQUFlO0lBQ3hELE9BQU87UUFDTCxJQUFNTSxjQUFjSCxlQUFlSSxhQUFhO1FBRWhELElBQUlELGFBQWE7WUFDZlIsNEJBQTRCO1FBQzlCLE9BQU87WUFDTCxJQUFNVSxXQUFXTCxlQUFlTSxVQUFVO1lBRTFDLElBQUksQ0FBQ0QsWUFBWVosbUJBQW1CO2dCQUNsQyxJQUFNLEFBQUVRLE9BQVFQLFFBQVJPO2dCQUVSQSxLQUFJQyxLQUFLLENBQUMsQUFBQyw2QkFBaUZWLE9BQXJESyxnQkFBZSx3Q0FBb0QsT0FBZEwsZUFBYztZQUM1RyxPQUFPO2dCQUNMLElBQU1lLGVBQWVQLGVBQWVRLGVBQWU7Z0JBRW5EaEIsZ0JBQWdCSyxnQkFBaUIsR0FBRztnQkFFcENKLG9CQUFvQlksVUFBVyxHQUFHO2dCQUVsQ1YsNEJBQTRCWSxhQUFhRSxlQUFlLENBQUMsU0FBQ2xCO29CQUN4RCxJQUFNSSw0QkFBNEJMLHlCQUF5QkMsWUFBWUMsZUFBZUMsbUJBQW1CQztvQkFFekcsSUFBSUMsMkJBQTJCO3dCQUM3QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlBLDJCQUEyQjtvQkFDN0IsSUFBTWUsa0JBQWtCQyx3QkFBd0JwQixZQUFZRztvQkFFNURNLGVBQWVZLFVBQVUsQ0FBQ0Y7Z0JBQzVCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT2Y7QUFDVDtBQUVBLFNBQVNnQix3QkFBd0JwQixVQUFVLEVBQUVHLE9BQU87UUFBRWdCLGtCQUFBQSxpRUFBa0IsRUFBRTtJQUN4RSxJQUFNLEFBQUVkLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLEVBQy9DYyx3Q0FBd0NILGdCQUFnQkksUUFBUSxDQUFDZDtJQUV2RSxJQUFJYSx1Q0FBdUM7UUFDekM7SUFDRjtJQUVBSCxnQkFBZ0JLLElBQUksQ0FBQ2Y7SUFFckIsSUFBTU8sZUFBZVAsZUFBZVEsZUFBZTtJQUVuREQsYUFBYVMsaUJBQWlCLENBQUMsU0FBQ3pCO1FBQzlCb0Isd0JBQXdCcEIsWUFBWUcsU0FBU2dCO0lBQy9DO0lBRUEsT0FBT0E7QUFDVCJ9