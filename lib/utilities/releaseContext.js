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
        if (error) {
            callback(error);
            return;
        }
        releaseContextMap[releaseName] = releaseContext;
        createDependencyReleaseContexts(dependency, dependentNames, context, callback);
    }, context);
}
function initialiseReleaseContext(dependency, dependentName, verified, context, callback) {
    var done = function done() {
        var dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependency, context);
        releaseContext.initialise(dependencyReleaseContexts);
        callback(error);
    };
    var error = null;
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        callback(error);
        return;
    }
    var initialised = releaseContext.isInitialised();
    if (initialised) {
        callback(error);
        return;
    }
    var releaseContextVerified = releaseContext.isVerified();
    if (verified) {
        if (!releaseContextVerified) {
            error = "Unable to initialise the '".concat(releaseName, "' dependency's context because its '").concat(dependentName, "' dependent is a package.");
            callback(error);
            return;
        }
    }
    dependentName = releaseName; ///
    verified = releaseContextVerified; ///
    var dependencies = releaseContext.getDependencies();
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        initialiseReleaseContext(dependency, dependentName, verified, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            next();
        });
    }, done);
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
        if (error) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UgY291bGQgbm90IGJlIGNyZWF0ZWQuYDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgdmVyaWZpZWQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBlcnJvciA9IG51bGw7XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgIGVycm9yID0gYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGRlcGVuZGVuY3kncyBjb250ZXh0IGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmA7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZTsgIC8vL1xuXG4gIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHRWZXJpZmllZDsgIC8vL1xuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lLCB2ZXJpZmllZCwgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKSB7XG4gIGxldCBlcnJvciA9IG51bGw7XG5cbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgZXJyb3IgPWBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IHNob3J0ZW5lZFZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgICAgZXJyb3IgPSBgVmVyc2lvbiBtaXNtYXRjaDogJyR7ZGVwZW5kZW50TmFtZX0nIHJlcXVpcmVzICcke2RlcGVuZGVuY3lOYW1lfScgdG8gYmUgdmVyc2lvbiAke3Nob3J0ZW5lZFZlcnNpb25TdHJpbmd9LjAgb3IgaGlnaGVyIGJ1dCB2ZXJzaW9uICR7dmVyc2lvblN0cmluZ30gaGFzIGJlZW4gc3VwcGxpZWQuYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZGVwZW5kZW50TmFtZSIsInZlcmlmaWVkIiwiZG9uZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwiaW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsImlzVmVyaWZpZWQiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJmb3JFYWNoRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxvQkFBb0I7ZUFBcEJBOztJQTZDQUMsd0JBQXdCO2VBQXhCQTs7SUE2RGhCLE9BR0U7ZUFIRjs7O3FCQTVHcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsU0FBU0QscUJBQXFCRSxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDbEYsSUFBTSxBQUFFQyxvQkFBc0JGLFFBQXRCRSxtQkFDRkMsaUJBQWlCTCxXQUFXTSxPQUFPLElBQ25DQyxjQUFjRixnQkFDZEcsaUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxJQUFJLElBQUk7SUFFN0QsSUFBSUMsbUJBQW1CLElBQUksRUFBRTtRQUMzQixJQUFNQyxRQUFRQyw4QkFBOEJWLFlBQVlDLGdCQUFnQk87UUFFeEVMLFNBQVNNO1FBRVQ7SUFDRixDQUFDO0lBRUQsSUFBTSxBQUFFRSxnREFBa0RULFFBQWxEUztJQUVSQSw4Q0FBOENYLFlBQVlDLGdCQUFnQkMsU0FBUyxTQUFDTyxPQUFPRCxnQkFBbUI7UUFDNUcsSUFBSUMsT0FBTztZQUNUTixTQUFTTTtZQUVUO1FBQ0YsQ0FBQztRQUVELElBQUlELG1CQUFtQixJQUFJLEVBQUU7WUFDM0IsSUFBTUMsVUFBUSxBQUFD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