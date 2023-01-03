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
        releaseContextMap[releaseName] = releaseContext;
        var log = context.log;
        if (releaseContext === null) {
            log.error("The '".concat(releaseName, "' package could not be created."));
            callback(error);
            return;
        }
        var releaseMatchesDependency = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext, context);
        if (!releaseMatchesDependency) {
            var version = releaseContext.getVersion(), versionString = version.toString(), lastDependentName = (0, _array.last)(dependentNames), dependentName = lastDependentName, dependencyName = dependency.getName(), shortenedVersion = dependency.getShortedVersion(), shortenedVersionString = shortenedVersion.toString();
            error = "Version mismatch: '".concat(dependentName, "' requires '").concat(dependencyName, "' to be version ").concat(shortenedVersionString, ".0 or higher but version ").concat(versionString, " has been supplied.");
            log.error(error);
            callback(error);
            return;
        }
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
function checkCyclicDependencyExists(dependency, dependentNames, context) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var log = context.log, firstDependentName = first(dependentNames), dependencyNames = _toConsumableArray(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        log.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
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
        var cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);
        if (cyclicDependencyExists) {
            var error = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICBsb2cuZXJyb3IoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UgY291bGQgbm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgY29uc3QgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKSxcbiAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGVycm9yID0gYFZlcnNpb24gbWlzbWF0Y2g6ICcke2RlcGVuZGVudE5hbWV9JyByZXF1aXJlcyAnJHtkZXBlbmRlbmN5TmFtZX0nIHRvIGJlIHZlcnNpb24gJHtzaG9ydGVuZWRWZXJzaW9uU3RyaW5nfS4wIG9yIGhpZ2hlciBidXQgdmVyc2lvbiAke3ZlcnNpb25TdHJpbmd9IGhhcyBiZWVuIHN1cHBsaWVkLmA7XG5cbiAgICAgIGxvZy5lcnJvcihlcnJvcik7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgdmVyaWZpZWQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgICBsb2cgLmVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBkZXBlbmRlbmN5J3MgY29udGV4dCBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHRWZXJpZmllZDsgIC8vL1xuXG4gIGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lLCB2ZXJpZmllZCwgY29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0XG59O1xuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cuZXJyb3IoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0LCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gW10pIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5wdXNoKHJlbGVhc2VDb250ZXh0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJyZWxlYXNlQ29udGV4dE1hcCIsImRlcGVuZGVuY3lOYW1lIiwiZ2V0TmFtZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJlcnJvciIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lBbmREZXBlbmRlbnROYW1lcyIsImxvZyIsInJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJsYXN0RGVwZW5kZW50TmFtZSIsImxhc3QiLCJkZXBlbmRlbnROYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ2ZXJpZmllZCIsImluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsInJlbGVhc2VDb250ZXh0VmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImluY2x1ZGVzIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsb0JBQW9CO2VBQXBCQTs7SUEyREFDLHdCQUF3QjtlQUF4QkE7O0lBMkNoQixPQUdFO2VBSEY7OztxQkF4R3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLFNBQVNELHFCQUFxQkUsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ2xGLElBQU0sQUFBRUMsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSSxJQUFJO0lBRTdELElBQUlDLG1CQUFtQixJQUFJLEVBQUU7UUFDM0IsSUFBTUMsUUFBUSxJQUFJO1FBRWxCTixTQUFTTTtRQUVUO0lBQ0YsQ0FBQztJQUVELElBQU0sQUFBRUMsZ0RBQWtEUixRQUFsRFE7SUFFUkEsOENBQThDVixZQUFZQyxnQkFBZ0JDLFNBQVMsU0FBQ08sT0FBT0QsZ0JBQW1CO1FBQzVHLElBQUlDLE9BQU87WUFDVE4sU0FBU007WUFFVDtRQUNGLENBQUM7UUFFREwsaUJBQWlCLENBQUNHLFlBQVksR0FBR0M7UUFFakMsSUFBTSxBQUFFRyxNQUFRVCxRQUFS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