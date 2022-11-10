"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createReleaseContext: function() {
        return createReleaseContext;
    },
    initialiseReleaseContexts: function() {
        return initialiseReleaseContexts;
    },
    default: function() {
        return _default;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function createReleaseContext(releaseName, dependentNames, shortenedVersion, context, callback) {
    var releaseContextMap = context.releaseContextMap, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var error = false;
        callback(error);
        return;
    }
    var releaseContextFromReleaseNameAndShortenedVersion = context.releaseContextFromReleaseNameAndShortenedVersion;
    releaseContextFromReleaseNameAndShortenedVersion(releaseName, shortenedVersion, context, function(releaseContext) {
        if (releaseContext === null) {
            var error = true;
            callback(error);
            return;
        }
        createDependencyReleaseContexts(releaseContext, dependentNames, context, function(error) {
            if (!error) {
                releaseContextMap[releaseName] = releaseContext;
            }
            callback(error);
        });
    }, context);
}
function initialiseReleaseContexts(releaseName, releaseContextMap) {
    var releaseContext = releaseContextMap[releaseName];
    initialiseReleaseContext(releaseContext, releaseContextMap);
}
var _default = {
    createReleaseContext: createReleaseContext,
    initialiseReleaseContexts: initialiseReleaseContexts
};
function initialiseReleaseContext(releaseContext, releaseContextMap) {
    var initialised = releaseContext.isInitialised();
    if (initialised) {
        return;
    }
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, _$releaseContext = releaseContextMap[releaseName];
        initialiseReleaseContext(_$releaseContext, releaseContextMap);
    });
    var dependencyReleaseContexts = retrieveDependencyReleaseContexts(releaseContext, releaseContextMap);
    releaseContext.initialise(dependencyReleaseContexts);
}
function checkCyclicDependencyExists(releaseName, dependentNames, releaseContext) {
    var dependentNamesIncludesReleaseName = dependentNames.includes(releaseName), cyclicDependencyExists = dependentNamesIncludesReleaseName; ///
    if (cyclicDependencyExists) {
        var firstDependentName = first(dependentNames), dependencyNames = dependentNames.concat(firstDependentName), dependencyNamesString = dependencyNames.join("' -> '");
        releaseContext.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function createDependencyReleaseContexts(releaseContext, dependentNames, context, callback) {
    var releaseName = releaseContext.getReleaseName(), dependencies = releaseContext.getDependencies(), done = function() {
        var error = false;
        callback(error);
    };
    dependentNames = _toConsumableArray(dependentNames).concat([
        releaseName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var name = dependency.getName(), releaseName = name, shortenedVersion = dependency.getShortedVersion(), cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentNames, releaseContext);
        if (cyclicDependencyExists) {
            var error = true;
            callback(error);
            return;
        }
        createReleaseContext(releaseName, dependentNames, shortenedVersion, context, function(error) {
            if (error) {
                error = !!error; ///
                callback(error);
                return;
            }
            next();
        });
    }, done);
}
function retrieveDependencyReleaseContexts(releaseContext, releaseContextMap) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        var dependencyName = dependency.getName(), dependencyReleaseName = dependencyName, dependencyReleaseContext = releaseContextMap[dependencyReleaseName], dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var _$releaseContext = dependencyReleaseContext; ///
            retrieveDependencyReleaseContexts(_$releaseContext, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBmYWxzZTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbVJlbGVhc2VOYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihyZWxlYXNlTmFtZSwgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VOYW1lLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0c1xufTtcblxuZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBpbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICBpZiAoaW5pdGlhbGlzZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuICB9KTtcblxuICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW50TmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW50TmFtZXMuY29uY2F0KGZpcnN0RGVwZW5kZW50TmFtZSksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuZXJyb3IoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCByZWxlYXNlTmFtZSA9IHJlbGVhc2VDb250ZXh0LmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkb25lID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH1cblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvL1xuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCksXG4gICAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSAhIWVycm9yOyAgLy8vXG5cbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW2RlcGVuZGVuY3lSZWxlYXNlTmFtZV0sXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKCFkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2goZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImNvbmNhdCIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJnZXRSZWxlYXNlTmFtZSIsImRvbmUiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJnZXRTaG9ydGVkVmVyc2lvbiIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeVJlbGVhc2VOYW1lIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lB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