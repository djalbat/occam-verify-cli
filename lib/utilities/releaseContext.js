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
    var releaseContextFromReleaseName = context.releaseContextFromReleaseName;
    releaseContextFromReleaseName(releaseName, context, function(releaseContext) {
        if (releaseContext === null) {
            var error = true;
            callback(error);
            return;
        }
        var releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion);
        if (!releaseMatchesShortedVersion) {
            var error1 = true;
            callback(error1);
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
function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion) {
    var entries = releaseContext.getEntries(), releaseMatchesShortedVersion = entries.matchShortenedVersion(shortenedVersion);
    if (!releaseMatchesShortedVersion) {
        var version = releaseContext.getVersion(), releaseName = releaseContext.getReleaseName(), versionString = version.toString(), shortenedVersionString = shortenedVersion.toString();
        releaseContext.error("The '".concat(releaseName, "' package's version of ").concat(versionString, " does not match the dependency's shortened version of ").concat(shortenedVersionString, "."));
    }
    return releaseMatchesShortedVersion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBmYWxzZTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWUgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWUocmVsZWFzZU5hbWUsIGNvbnRleHQsIChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0cnVlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24ocmVsZWFzZUNvbnRleHQsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VOYW1lLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0c1xufTtcblxuZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBpbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICBpZiAoaW5pdGlhbGlzZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuICB9KTtcblxuICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW50TmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW50TmFtZXMuY29uY2F0KGZpcnN0RGVwZW5kZW50TmFtZSksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuZXJyb3IoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCByZWxlYXNlTmFtZSA9IHJlbGVhc2VDb250ZXh0LmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkb25lID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH1cblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvL1xuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCksXG4gICAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSAhIWVycm9yOyAgLy8vXG5cbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW2RlcGVuZGVuY3lSZWxlYXNlTmFtZV0sXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKCFkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2goZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzU2hvcnRlbmVkVmVyc2lvbihyZWxlYXNlQ29udGV4dCwgc2hvcnRlbmVkVmVyc2lvbikge1xuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHJlbGVhc2VDb250ZXh0LmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuZXJyb3IoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UncyB2ZXJzaW9uIG9mICR7dmVyc2lvblN0cmluZ30gZG9lcyBub3QgbWF0Y2ggdGhlIGRlcGVuZGVuY3kncyBzaG9ydGVuZWQgdmVyc2lvbiBvZiAke3Nob3J0ZW5lZFZlcnNpb25TdHJpbmd9LmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb247XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZU5hbWUiLCJkZXBlbmRlbnROYW1lcyIsInNob3J0ZW5lZFZlcnNpb24iLCJjb250ZXh0IiwiY2FsbGJhY2siLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlQ29udGV4dEZyb21SZWxlYXNlTmFtZSIsInJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb24iLCJjaGVja1JlbGVhc2VNYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJmb3JFYWNoRGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJjb25jYXQiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiZ2V0UmVsZWFzZU5hbWUiLCJkb25lIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlTmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsInB1c2giLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxvQkFBb0I7ZUFBcEJBOztJQTJDQUMseUJBQXlCO2VBQXpCQTs7SUFNaEIsT0FHRTtlQUhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakRPLFNBQVNELHFCQUFxQkUsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNyRyxJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJELGlCQUFpQixDQUFDTCxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJTSxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVEsS0FBSztRQUVuQkgsU0FBU0c7UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVDLGdDQUFrQ0wsUUFBbENLO0lBRVJBLDhCQUE4QlIsYUFBYUcsU0FBUyxTQUFDRyxnQkFBbUI7UUFDdEUsSUFBSUEsbUJBQW1CLElBQUksRUFBRTtZQUMzQixJQUFNQyxRQUFRLElBQUk7WUFFbEJILFNBQVNHO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBTUUsK0JBQStCQyxvQ0FBb0NKLGdCQUFnQko7UUFFekYsSUFBSSxDQUFDTyw4QkFBOEI7WUFDakMsSUFBTUYsU0FBUSxJQUFJO1lBRWxCSCxTQUFTRztZQUVUO1FBQ0YsQ0FBQztRQUVESSxnQ0FBZ0NMLGdCQUFnQkwsZ0JBQWdCRSxTQUFTLFNBQUNJLE9BQVU7WUFDbEYsSUFBSSxDQUFDQSxPQUFPO2dCQUNWRixpQkFBaUIsQ0FBQ0wsWUFBWSxHQUFHTTtZQUNuQyxDQUFDO1lBRURGLFNBQVNHO1FBQ1g7SUFDRixHQUFHSjtBQUNMO0FBRU8sU0FBU0osMEJBQTBCQyxXQUFXLEVBQUVL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