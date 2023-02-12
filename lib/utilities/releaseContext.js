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
    var done = function done() {
        var error = null;
        callback(error);
    };
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
    }, done);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UgY291bGQgbm90IGJlIGNyZWF0ZWQuYDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgdmVyaWZpZWQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBlcnJvciA9IG51bGw7XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgIGVycm9yID0gYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGRlcGVuZGVuY3kncyBjb250ZXh0IGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmA7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZTsgIC8vL1xuXG4gIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHRWZXJpZmllZDsgIC8vL1xuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lLCB2ZXJpZmllZCwgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKSB7XG4gIGxldCBlcnJvciA9IG51bGw7XG5cbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgZXJyb3IgPWBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IHNob3J0ZW5lZFZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgICAgZXJyb3IgPSBgVmVyc2lvbiBtaXNtYXRjaDogJyR7ZGVwZW5kZW50TmFtZX0nIHJlcXVpcmVzICcke2RlcGVuZGVuY3lOYW1lfScgdG8gYmUgdmVyc2lvbiAke3Nob3J0ZW5lZFZlcnNpb25TdHJpbmd9LjAgb3IgaGlnaGVyIGJ1dCB2ZXJzaW9uICR7dmVyc2lvblN0cmluZ30gaGFzIGJlZW4gc3VwcGxpZWQuYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0LCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lBbmREZXBlbmRlbnROYW1lcyIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJkZXBlbmRlbnROYW1lIiwidmVyaWZpZWQiLCJkb25lIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJpbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwiaXNWZXJpZmllZCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImluY2x1ZGVzIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwibGFzdERlcGVuZGVudE5hbWUiLCJsYXN0Iiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyIsImZvckVhY2hEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLG9CQUFvQjtlQUFwQkE7O0lBNkNBQyx3QkFBd0I7ZUFBeEJBOztJQTZEaEIsT0FHRTtlQUhGOzs7cUJBNUdxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxTQUFTRCxxQkFBcUJFLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNsRixJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJMLFdBQVdNLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJQyxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVFDLDhCQUE4QlYsWUFBWUMsZ0JBQWdCTztRQUV4RUwsU0FBU007UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVFLGdEQUFrRFQsUUFBbERTO0lBRVJBLDhDQUE4Q1gsWUFBWUMsZ0JBQWdCQyxTQUFTLFNBQUNPLE9BQU9ELGdCQUFtQjtRQUM1RyxJQUFJQyxPQUFPO1lBQ1ROLFNBQVNNO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBSUQsbUJBQW1CLElBQUksRUFBRTtZ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