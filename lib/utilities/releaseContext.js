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
    releaseContextFromReleaseNameAndShortenedVersion(releaseName, shortenedVersion, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        if (releaseContext === null) {
            releaseContextMap[releaseName] = releaseContext;
            callback(error);
            return;
        }
        createDependencyReleaseContexts(releaseContext, dependentNames, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            releaseContextMap[releaseName] = releaseContext;
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
    if (releaseContext === null) {
        return;
    }
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
        var error = null;
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
        var dependencyName = dependency.getName(), dependencyReleaseName = dependencyName, dependencyReleaseContext = releaseContextMap[dependencyReleaseName];
        if (dependencyReleaseContext === null) {
            return;
        }
        var dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var _$releaseContext = dependencyReleaseContext; ///
            retrieveDependencyReleaseContexts(_$releaseContext, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBmYWxzZTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbVJlbGVhc2VOYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihyZWxlYXNlTmFtZSwgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dHNcbn07XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVudE5hbWVzLmNvbmNhdChmaXJzdERlcGVuZGVudE5hbWUpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmVycm9yKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgcmVsZWFzZU5hbWUgPSByZWxlYXNlQ29udGV4dC5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZG9uZSA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH1cblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvL1xuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCksXG4gICAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW2RlcGVuZGVuY3lSZWxlYXNlTmFtZV07XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKCFkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2goZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImNvbmNhdCIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJnZXRSZWxlYXNlTmFtZSIsImRvbmUiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJnZXRTaG9ydGVkVmVyc2lvbiIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeVJlbGVhc2VOYW1lIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxvQkFBb0I7ZUFBcEJBOztJQTJDQUMseUJBQXlCO2VBQXpCQTs7SUFNaEIsT0FHRTtlQUhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakRPLFNBQVNELHFCQUFxQkUsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNyRyxJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJELGlCQUFpQixDQUFDTCxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJTSxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVEsS0FBSztRQUVuQkgsU0FBU0c7UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVDLG1EQUFxREwsUUFBckRLO0lBRVJBLGlEQUFpRFIsYUFBYUUsa0JBQWtCQyxTQUFTLFNBQUNJLE9BQU9ELGdCQUFtQjtRQUNsSCxJQUFJQyxPQUFPO1lBQ1RILFNBQVNHO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBSUQsbUJBQW1CLElBQUksRUFBRTtZQUMzQkQsaUJBQWlCLENBQUNMLFlBQVksR0FBR007WUFFakNGLFNBQVNHO1lBRVQ7UUFDRixDQUFDO1FBRURFLGdDQUFnQ0gsZ0JBQWdCTCxnQkFBZ0JFLFNBQVMsU0FBQ0ksT0FBVTtZQUNsRixJQUFJQSxPQUFPO2dCQUNUSCxTQUFTRztnQkFFVDtZQUNGLENBQUM7WUFFREYsaUJBQWlCLENBQUNMLFlBQVksR0FBR007WUFFakNGLFNBQVNHO1FBQ1g7SUFDRixHQUFHSjtBQUNMO0FBRU8sU0FBU0osMEJBQTBCQyxXQUFXLEVBQUVLLGlCQUFpQixFQUFFO0lBQ3hFLElBQU1DLGlCQUFpQkQsaUJBQWlCLENBQUNMLFlBQVk7SUFFckRVLHlCQUF5QkosZ0JBQWdCRDtBQUMzQztJQUVBLFdBQWU7SUFDYlAsc0JBQUFBO0lBQ0FDLDJCQUFBQTtBQUNGO0FBRUEsU0FBU1cseUJBQXlCSixjQUFjLEVBQUVELGlCQUFpQixFQUFFO0lBQ25FLElBQUlDLG1CQUFtQixJQUFJLEVBQUU7UUFDM0I7SUFDRixDQUFDO0lBRUQsSUFBTUssY0FBY0wsZUFBZU0sYUFBYTtJQUVoRCxJQUFJRCxhQUFhO1FBQ2Y7SUFDRixDQUFDO0lBRUQsSUFBTUUsZUFBZVAsZUFBZVEsZUFBZTtJQUVuREQsYUFBYUUsaUJBQWlCLENBQUMsU0FBQ0MsWUFBZTtRQUM3QyxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCbEIsY0FBY2lCLE1BQ2RYLG1CQUFpQkQsaUJBQWlCLENBQUNMLFlBQVk7UUFFckRVLHlCQUF5Qkosa0JBQWdCRDtJQUMzQztJQUVBLElBQU1jLDRCQUE0QkMsa0NBQWtDZCxnQkFBZ0JEO0lBRXBGQyxlQUFlZSxVQUFVLENBQUNGO0FBQzVCO0FBRUEsU0FBU0csNEJBQTRCdEIsV0FBVyxFQUFFQyxjQUFjLEVBQUVLLGNBQWMsRUFBRTtJQUNoRixJQUFNaUIsb0NBQW9DdEIsZUFBZXVCLFFBQVEsQ0FBQ3hCLGNBQzVEeUIseUJBQXlCRixtQ0FBb0MsR0FBRztJQUV0RSxJQUFJRSx3QkFBd0I7UUFDMUIsSUFBTUMscUJBQXFCQyxNQUFNMUIsaUJBQzNCMkIsa0JBQWtCM0IsZUFBZTRCLE1BQU0sQ0FBQ0gscUJBQ3hDSSx3QkFBd0JGLGdCQUFnQkcsSUFBSSxDQUFFO1FBRXBEekIsZUFBZUMsS0FBSyxDQUFDLEFBQUMsa0NBQXVELE9BQXRCdUIsdUJBQXNCO0lBQy9FLENBQUM7SUFFRCxPQUFPTDtBQUNUO0FBRUEsU0FBU2hCLGdDQUFnQ0gsY0FBYyxFQUFFTCxjQUFjLEVBQUVFLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFGLElBQU1KLGNBQWNNLGVBQWUwQixjQUFjLElBQzNDbkIsZUFBZVAsZUFBZVEsZUFBZSxJQUM3Q21CLE9BQU8sV0FBTTtRQUNYLElBQU0xQixRQUFRLElBQUk7UUFFbEJILFNBQVNHO0lBQ1g7SUFFTk4saUJBQWlCLEFBQUUsbUJBQUdBLHVCQUFMO1FBQXFCRDtLQUFhLEdBQUcsR0FBRztJQUV6RGEsYUFBYXFCLDZCQUE2QixDQUFDLFNBQUNsQixZQUFZbUIsTUFBTUYsTUFBUztRQUNyRSxJQUFNaEIsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QmxCLGNBQWNpQixNQUNkZixtQkFBbUJjLFdBQVdvQixpQkFBaUIsSUFDL0NYLHlCQUF5QkgsNEJBQTRCdEIsYUFBYUMsZ0JBQWdCSztRQUV4RixJQUFJbUIsd0JBQXdCO1lBQzFCLElBQU1sQixRQUFRLElBQUk7WUFFbEJILFNBQVNHO1lBRVQ7UUFDRixDQUFDO1FBRURULHFCQUFxQkUsYUFBYUMsZ0JBQWdCQyxrQkFBa0JDLFNBQVMsU0FBQ0ksT0FBVTtZQUN0RixJQUFJQSxPQUFPO2dCQUNUSCxTQUFTRztnQkFFVDtZQUNGLENBQUM7WUFFRDRCO1FBQ0Y7SUFDRixHQUFHRjtBQUNMO0FBRUEsU0FBU2Isa0NBQWtDZCxjQUFjLEVBQUVELGlCQUFpQixFQUFrQztRQUFoQ2MsNEJBQUFBLGlFQUE0QixFQUFFO0lBQzFHLElBQU1OLGVBQWVQLGVBQWVRLGVBQWU7SUFFbkRELGFBQWFFLGlCQUFpQixDQUFDLFNBQUNDLFlBQWU7UUFDN0MsSUFBTXFCLGlCQUFpQnJCLFdBQVdFLE9BQU8sSUFDbkNvQix3QkFBd0JELGdCQUN4QkUsMkJBQTJCbEMsaUJBQWlCLENBQUNpQyxzQkFBc0I7UUFFekUsSUFBSUMsNkJBQTZCLElBQUksRUFBRTtZQUNyQztRQUNGLENBQUM7UUFFRCxJQUFNQyw0REFBNERyQiwwQkFBMEJLLFFBQVEsQ0FBQ2U7UUFFckcsSUFBSSxDQUFDQywyREFBMkQ7WUFDOUQsSUFBTWxDLG1CQUFpQmlDLDBCQUEyQixHQUFHO1lBRXJEbkIsa0NBQWtDZCxrQkFBZ0JELG1CQUFtQmM7WUFFckVBLDBCQUEwQnNCLElBQUksQ0FBQ0Y7UUFDakMsQ0FBQztJQUNIO0lBRUEsT0FBT3BCO0FBQ1QifQ==