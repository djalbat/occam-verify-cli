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
        var error = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext);
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
        error = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext);
        if (error !== null) {
            callback(error);
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
    var error = null;
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var firstDependentName = first(dependentNames), dependencyNames = _toConsumableArray(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        error = "There is a cyclic dependency: '".concat(dependencyNamesString, "'.");
    }
    return error;
}
function checkReleaseMatchesDependency(dependency, dependentNames, releaseContext) {
    var error = null;
    var entries = releaseContext.getEntries(), shortenedVersion = dependency.getShortedVersion();
    if (shortenedVersion !== null) {
        var entriesMatchShortenedVersion = entries.matchShortenedVersion(shortenedVersion);
        if (!entriesMatchShortenedVersion) {
            var version = releaseContext.getVersion(), versionString = version.toString(), lastDependentName = (0, _array.last)(dependentNames), dependentName = lastDependentName, dependencyName = dependency.getName(), shortenedVersion1 = dependency.getShortedVersion(), shortenedVersionString = shortenedVersion1.toString();
            error = "Version mismatch: '".concat(dependentName, "' requires '").concat(dependencyName, "' to be version ").concat(shortenedVersionString, ".0 or higher but version ").concat(versionString, " has been supplied.");
        }
    }
    return error;
}
function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies();
    dependentNames = _toConsumableArray(dependentNames).concat([
        dependencyName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var error = checkCyclicDependencyExists(dependency, dependentNames);
        if (error !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UgY291bGQgbm90IGJlIGNyZWF0ZWQuYDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKGVycm9yICE9PSBudWxsKSAge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWUsIHZlcmlmaWVkLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gIGlmIChpbml0aWFsaXNlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0VmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgICAgbG9nLmVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBkZXBlbmRlbmN5J3MgY29udGV4dCBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHRWZXJpZmllZDsgIC8vL1xuXG4gIGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lLCB2ZXJpZmllZCwgY29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0XG59O1xuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpIHtcbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBlcnJvciA9YFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmA7XG4gIH1cblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gIGNvbnN0IGVudHJpZXMgPSByZWxlYXNlQ29udGV4dC5nZXRFbnRyaWVzKCksXG4gICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCk7XG5cbiAgaWYgKHNob3J0ZW5lZFZlcnNpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uID0gZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCksXG4gICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgICBlcnJvciA9IGBWZXJzaW9uIG1pc21hdGNoOiAnJHtkZXBlbmRlbnROYW1lfScgcmVxdWlyZXMgJyR7ZGVwZW5kZW5jeU5hbWV9JyB0byBiZSB2ZXJzaW9uICR7c2hvcnRlbmVkVmVyc2lvblN0cmluZ30uMCBvciBoaWdoZXIgYnV0IHZlcnNpb24gJHt2ZXJzaW9uU3RyaW5nfSBoYXMgYmVlbiBzdXBwbGllZC5gO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0LCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lBbmREZXBlbmRlbnROYW1lcyIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJkZXBlbmRlbnROYW1lIiwidmVyaWZpZWQiLCJpbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwiaXNWZXJpZmllZCIsImxvZyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkb25lIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLG9CQUFvQjtlQUFwQkE7O0lBNkNBQyx3QkFBd0I7ZUFBeEJBOztJQTJDaEIsT0FHRTtlQUhGOzs7cUJBMUZxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxTQUFTRCxxQkFBcUJFLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNsRixJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJMLFdBQVdNLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJQyxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVFDLDhCQUE4QlYsWUFBWUMsZ0JBQWdCTztRQUV4RUwsU0FBU007UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVFLGdEQUFrRFQsUUFBbERTO0lBRVJBLDhDQUE4Q1gsWUFBWUMsZ0JBQWdCQyxTQUFTLFNBQUNPLE9BQU9ELGdCQUFtQjtRQUM1RyxJQUFJQyxPQUFPO1lBQ1ROLFNBQVNNO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBSUQsbUJBQW1CLElBQUksRUFBRTtZQUMzQixJQUFNQyxVQUFRLEFBQUMsUUFBbUIsT0FBWkYsYUFBWTtZQUVsQ0osU0FBU007WUFFVDtRQUNGLENBQUM7UUFFREEsUUFBUUMsOEJBQThCVixZQUFZQyxnQkFBZ0JPO1FBRWxFLElBQUlDLFVBQVUsSUFBSSxFQUFHO1lBQ25CTixTQUFTTTtZQUVUO1FBQ0YsQ0FBQztRQUVETCxpQkFBaUIsQ0FBQ0csWUFBWSxHQUFHQztRQUVqQ0ksZ0NBQWdDWixZQUFZQyxnQkFBZ0JDLFNBQVNDO0lBQ3ZFLEdBQUdEO0FBQ0w7QUFFTyxTQUFTSCx5QkFBeUJDLFVBQVUs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