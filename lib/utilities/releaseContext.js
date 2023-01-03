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
    initialiseReleaseContext: function() {
        return initialiseReleaseContext;
    },
    default: function() {
        return _default;
    }
});
var _array = require("../utilities/array");
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
function createReleaseContext(dependency, dependentNames, context, callback) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var error = null;
        callback(error);
        return;
    }
    var releaseContextFromDependencyAndDependentNames = context.releaseContextFromDependencyAndDependentNames;
    releaseContextFromDependencyAndDependentNames(dependency, dependentNames, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        if (releaseContext === null) {
            var _$error = "The '".concat(releaseName, "' package could not be created.");
            callback(_$error);
            return;
        }
        var releaseMatchesDependency = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext, context);
        if (!releaseMatchesDependency) {
            var version = releaseContext.getVersion(), versionString = version.toString(), lastDependentName = (0, _array.last)(dependentNames), dependentName = lastDependentName, dependencyName = dependency.getName(), shortenedVersion = dependency.getShortedVersion(), shortenedVersionString = shortenedVersion.toString(), _$error1 = "Version mismatch: '".concat(dependentName, "' requires '").concat(dependencyName, "' to be version ").concat(shortenedVersionString, ".0 or higher but version ").concat(versionString, " has been supplied.");
            callback(_$error1);
            return;
        }
        releaseContextMap[releaseName] = releaseContext;
        createDependencyReleaseContexts(dependency, dependentNames, context, callback);
    }, context);
}
function initialiseReleaseContext(dependency, dependentName, verified, context) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        return;
    }
    var initialised = releaseContext.isInitialised();
    if (initialised) {
        return;
    }
    var releaseContextVerified = releaseContext.isVerified();
    if (verified) {
        if (!releaseContextVerified) {
            var log = context.log;
            log.error("Unable to initialise the '".concat(releaseName, "' dependency's context because its '").concat(dependentName, "' dependent is a package."));
            return;
        }
    }
    verified = releaseContextVerified; ///
    dependentName = releaseName; ///
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, dependentName, verified, context);
    });
    var dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependency, context);
    releaseContext.initialise(dependencyReleaseContexts);
}
var _default = {
    createReleaseContext: createReleaseContext,
    initialiseReleaseContext: initialiseReleaseContext
};
function checkCyclicDependencyExists(dependency, dependentNames) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    return cyclicDependencyExists;
}
function checkReleaseMatchesDependency(dependency, dependentNames, releaseContext, context) {
    var releaseMatchesDependency = true;
    var entries = releaseContext.getEntries(), shortenedVersion = dependency.getShortedVersion();
    if (shortenedVersion !== null) {
        var entriesMatchShortenedVersion = entries.matchShortenedVersion(shortenedVersion);
        if (!entriesMatchShortenedVersion) {
            releaseMatchesDependency = false;
        }
    }
    return releaseMatchesDependency;
}
function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies();
    dependentNames = _toConsumableArray(dependentNames).concat([
        dependencyName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames);
        if (cyclicDependencyExists) {
            var firstDependentName = first(dependentNames), dependencyNames = _toConsumableArray(dependentNames).concat([
                firstDependentName
            ]), dependencyNamesString = dependencyNames.join("' -> '"), error = "There is a cyclic dependency: '".concat(dependencyNamesString, "'.");
            callback(error);
            return;
        }
        createReleaseContext(dependency, dependentNames, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            next();
        });
    }, function() {
        var error = null;
        callback(error);
    });
}
function retrieveDependencyReleaseContexts(dependency, context) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        var dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
        if (releaseContext === null) {
            return;
        }
        var dependencyReleaseContextsIncludesReleaseContext = dependencyReleaseContexts.includes(releaseContext);
        if (dependencyReleaseContextsIncludesReleaseContext) {
            return;
        }
        retrieveDependencyReleaseContexts(dependency, context, dependencyReleaseContexts);
        dependencyReleaseContexts.push(releaseContext);
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UgY291bGQgbm90IGJlIGNyZWF0ZWQuYDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3koZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSAge1xuICAgICAgY29uc3QgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKSxcbiAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBlcnJvciA9IGBWZXJzaW9uIG1pc21hdGNoOiAnJHtkZXBlbmRlbnROYW1lfScgcmVxdWlyZXMgJyR7ZGVwZW5kZW5jeU5hbWV9JyB0byBiZSB2ZXJzaW9uICR7c2hvcnRlbmVkVmVyc2lvblN0cmluZ30uMCBvciBoaWdoZXIgYnV0IHZlcnNpb24gJHt2ZXJzaW9uU3RyaW5nfSBoYXMgYmVlbiBzdXBwbGllZC5gO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgdmVyaWZpZWQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgICBsb2cgLmVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBkZXBlbmRlbmN5J3MgY29udGV4dCBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHRWZXJpZmllZDsgIC8vL1xuXG4gIGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lLCB2ZXJpZmllZCwgY29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0XG59O1xuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApLFxuICAgICAgICAgICAgZXJyb3IgPWBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsImRlcGVuZGVudE5hbWUiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsImlzVmVyaWZpZWQiLCJsb2ciLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJmb3JFYWNoRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxvQkFBb0I7ZUFBcEJBOztJQXNEQUMsd0JBQXdCO2VBQXhCQTs7SUEyQ2hCLE9BR0U7ZUFIRjs7O3FCQW5HcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsU0FBU0QscUJBQXFCRSxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDbEYsSUFBTSxBQUFFQyxvQkFBc0JGLFFBQXRCRSxtQkFDRkMsaUJBQWlCTCxXQUFXTSxPQUFPLElBQ25DQyxjQUFjRixnQkFDZEcsaUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxJQUFJLElBQUk7SUFFN0QsSUFBSUMsbUJBQW1CLElBQUksRUFBRTtRQUMzQixJQUFNQyxRQUFRLElBQUk7UUFFbEJOLFNBQVNNO1FBRVQ7SUFDRixDQUFDO0lBRUQsSUFBTSxBQUFFQyxnREFBa0RSLFFBQWxEUTtJQUVSQSw4Q0FBOENWLFlBQVlDLGdCQUFnQkMsU0FBUyxTQUFDTyxPQUFPRCxnQkFBbUI7UUFDNUcsSUFBSUMsT0FBTztZQUNUTixTQUFTTTtZQUVUO1FBQ0YsQ0FBQztRQUVELElBQUlELG1CQUFtQixJQUFJLEVBQUU7WUFDM0IsSUFBTUMsVUFBUSxBQUFDLFFBQW1CLE9BQVpGLGFBQVk7WUFFbENKLFNBQVNNO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBTUUsMkJBQTJCQyw4QkFBOEJaLFlBQVlDLGdCQUFnQk8sZ0JBQWdCTjtRQUUzRyxJQUFJLENBQUNTLDBCQUEyQjtZQUM5QixJQUFNRSxVQUFVTCxlQUFlTSxVQUFVLElBQ25DQyxnQkFBZ0JG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