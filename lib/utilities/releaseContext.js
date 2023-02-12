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
    var releaseContextFromDependency = context.releaseContextFromDependency;
    releaseContextFromDependency(dependency, context, function(error, releaseContext) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlIGNvdWxkIG5vdCBiZSBjcmVhdGVkLmA7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3koZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWUsIHZlcmlmaWVkLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gIGlmIChpbml0aWFsaXNlZCkge1xuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0VmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICBlcnJvciA9IGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBkZXBlbmRlbmN5J3MgY29udGV4dCBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBkZXBlbmRlbnROYW1lID0gcmVsZWFzZU5hbWU7ICAvLy9cblxuICB2ZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0VmVyaWZpZWQ7ICAvLy9cblxuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgdmVyaWZpZWQsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcykge1xuICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGVycm9yID1gVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYDtcbiAgfVxuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3koZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGxldCBlcnJvciA9IG51bGw7XG5cbiAgY29uc3QgZW50cmllcyA9IHJlbGVhc2VDb250ZXh0LmdldEVudHJpZXMoKSxcbiAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSBlbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKSxcbiAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGVycm9yID0gYFZlcnNpb24gbWlzbWF0Y2g6ICcke2RlcGVuZGVudE5hbWV9JyByZXF1aXJlcyAnJHtkZXBlbmRlbmN5TmFtZX0nIHRvIGJlIHZlcnNpb24gJHtzaG9ydGVuZWRWZXJzaW9uU3RyaW5nfS4wIG9yIGhpZ2hlciBidXQgdmVyc2lvbiAke3ZlcnNpb25TdHJpbmd9IGhhcyBiZWVuIHN1cHBsaWVkLmA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImRlcGVuZGVudE5hbWUiLCJ2ZXJpZmllZCIsImRvbmUiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsImluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsInJlbGVhc2VDb250ZXh0VmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJsYXN0RGVwZW5kZW50TmFtZSIsImxhc3QiLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsb0JBQW9CO2VBQXBCQTs7SUE2Q0FDLHdCQUF3QjtlQUF4QkE7O0lBNkRoQixPQUdFO2VBSEY7OztxQkE1R3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLFNBQVNELHFCQUFxQkUsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ2xGLElBQU0sQUFBRUMsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSSxJQUFJO0lBRTdELElBQUlDLG1CQUFtQixJQUFJLEVBQUU7UUFDM0IsSUFBTUMsUUFBUUMsOEJBQThCVixZQUFZQyxnQkFBZ0JPO1FBRXhFTCxTQUFTTTtRQUVUO0lBQ0YsQ0FBQztJQUVELElBQU0sQUFBRUUsK0JBQWlDVCxRQUFqQ1M7SUFFUkEsNkJBQTZCWCxZQUFZRSxTQUFTLFNBQUNPLE9BQU9ELGdCQUFtQjtRQUMzRSxJQUFJQyxPQUFPO1lBQ1ROLFNBQVNNO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBSUQsbUJBQW1CLElBQUksRUFBRTtZQUMzQixJQUFNQyxVQUFRLEFBQUMsUUFBbUIsT0FBWkYsYUFBWTtZQUVsQ0osU0FBU007WUFFVDtRQUNGLENBQUM7UUFFREEsUUFBUUMsOEJBQThCVixZQUFZQyxnQkFBZ0JPO1FBRWxFLElBQUlDLE9BQU87WUFDVE4sU0FBU007WUFFVDtRQUNGLENBQUM7UUFFREwsaUJBQWlCLENBQUNHLFlBQVksR0FBR0M7UUFFakNJLGdDQUFnQ1osWUFBWUMsZ0JBQWdCQyxTQUFTQztJQUN2RSxHQUFHRDtBQUNMO0FBRU8sU0FBU0gseUJBQXlCQyxVQUFVLEVBQUVhLGFBQWEsRUFBRUMsUUFBUSxFQUFFWixPQUFPLEVBQUVDLFFBQVEsRUFBRTtRQW9EdEZZLE9BQVQsU0FBU0EsT0FBTztRQUNkLElBQU1DLDRCQUE0QkMsa0NBQWtDakIsWUFBWUU7UUFFaEZNLGVBQWVVLFVBQVUsQ0FBQ0Y7UUFFMUJiLFNBQVNNO0lBQ1g7SUF6REEsSUFBSUEsUUFBUSxJQUFJO0lBRWhCLElBQU0sQUFBRUwsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSSxJQUFJO0lBRTdELElBQUlDLG1CQUFtQixJQUFJLEVBQUU7UUFDM0JMLFNBQVNNO1FBRVQ7SUFDRixDQUFDO0lBRUQsSUFBTVUsY0FBY1gsZUFBZVksYUFBYTtJQUVoRCxJQUFJRCxhQUFhO1FBQ2ZoQixTQUFTTTtRQUVUO0lBQ0YsQ0FBQztJQUVELElBQU1ZLHlCQUF5QmIsZUFBZWMsVUFBVTtJQUV4RCxJQUFJUixVQUFVO1FBQ1osSUFBSSxDQUFDTyx3QkFBd0I7WUFDM0JaLFFBQVEsQUFBQyw2QkFBOEVJLE9BQWxETixhQUFZLHdDQUFvRCxPQUFkTSxlQUFjO1lBRXJHVixTQUFTTTtZQUVUO1FBQ0YsQ0FBQztJQUNILENBQUM7SUFFREksZ0JBQWdCTixhQUFjLEdBQUc7SUFFakNPLFdBQVdPLHdCQUF5QixHQUFHO0lBRXZDLElBQU1FLGVBQWVmLGVBQWVnQixlQUFlO0lBRW5ERCxhQUFhRSw2QkFBNkIsQ0FBQyxTQUFDekIsWUFBWTBCLE1BQU1YLE1BQVM7UUFDckVoQix5QkFBeUJDLFlBQVlhLGVBQWVDLFVBQVVaLFNBQVMsU0FBQ08sT0FBVTtZQUNoRixJQUFJQSxPQUFPO2dCQUNUTixTQUFTTTtnQkFFVDtZQUNGLENBQUM7WUFFRGlCO1FBQ0Y7SUFDRixHQUFHWDtBQVNMO0lBRUEsV0FBZTtJQUNiakIsc0JBQUFBO0lBQ0FDLDBCQUFBQTtBQUNGO0FBRUEsU0FBUzRCLDRCQUE0QjNCLFVBQVUsRUFBRUMsY0FBYyxFQUFFO0lBQy9ELElBQUlRLFFBQVEsSUFBSTtJQUVoQixJQUFNSixpQkFBaUJMLFdBQVdNLE9BQU8sSUFDbkNzQix1Q0FBdUMzQixlQUFlNEIsUUFBUSxDQUFDeEIsaUJBQy9EeUIseUJBQXlCRixzQ0FBdUMsR0FBRztJQUV6RSxJQUFJRSx3QkFBd0I7UUFDMUIsSUFBTUMscUJBQXFCQyxNQUFNL0IsaUJBQzNCZ0Msa0JBQWtCLEFBQ2hCLG1CQUFHaEMsdUJBRGE7WUFFaEI4QjtTQUNELEdBQ0RHLHdCQUF3QkQsZ0JBQWdCRSxJQUFJLENBQUU7UUFFcEQxQixRQUFPLEFBQUMsa0NBQXVELE9BQXRCeUIsdUJBQXNCO0lBQ2pFLENBQUM7SUFFRCxPQUFPekI7QUFDVDtBQUVBLFNBQVNDLDhCQUE4QlYsVUFBVSxFQUFFQyxjQUFjLEVBQUVPLGNBQWMsRUFBRTtJQUNqRixJQUFJQyxRQUFRLElBQUk7SUFFaEIsSUFBTTJCLFVBQVU1QixlQUFlNkIsVUFBVSxJQUNuQ0MsbUJBQW1CdEMsV0FBV3VDLGlCQUFpQjtJQUVyRCxJQUFJRCxxQkFBcUIsSUFBSSxFQUFFO1FBQzdCLElBQU1FLCtCQUErQkosUUFBUUsscUJBQXFCLENBQUNIO1FBRW5FLElBQUksQ0FBQ0UsOEJBQThCO1lBQ2pDLElBQU1FLFVBQVVsQyxlQUFlbUMsVUFBVSxJQUNuQ0MsZ0JBQWdCRixRQUFRRyxRQUFRLElBQ2hDQyxvQkFBb0JDLElBQUFBLFdBQUksRUFBQzlDLGlCQUN6QlksZ0JBQWdCaUMsbUJBQ2hCekMsaUJBQWlCTCxXQUFXTSxPQUFPLElBQ25DZ0Msb0JBQW1CdEMsV0FBV3VDLGlCQUFpQixJQUMvQ1MseUJBQXlCVixrQkFBaUJPLFFBQVE7WUFFeERwQyxRQUFRLEFBQUMsc0JBQWlESixPQUE1QlEsZUFBYyxnQkFBK0NtQyxPQUFqQzNDLGdCQUFlLG9CQUFvRXVDLE9BQWxESSx3QkFBdUIsNkJBQXlDLE9BQWRKLGVBQWM7UUFDN0osQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPbkM7QUFDVDtBQUVBLFNBQVNHLGdDQUFnQ1osVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO1FBNkI3RVksT0FBVCxTQUFTQSxPQUFPO1FBQ2QsSUFBTU4sUUFBUSxJQUFJO1FBRWxCTixTQUFTTTtJQUNYO0lBaENBLElBQU0sQUFBRUwsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksRUFDL0NnQixlQUFlZixlQUFlZ0IsZUFBZTtJQUVuRHZCLGlCQUFpQixBQUFFLG1CQUFHQSx1QkFBTDtRQUFxQkk7S0FBZ0IsR0FBRyxHQUFHO0lBRTVEa0IsYUFBYUUsNkJBQTZCLENBQUMsU0FBQ3pCLFlBQVkwQixNQUFNWCxNQUFTO1FBQ3JFLElBQU1OLFFBQVFrQiw0QkFBNEIzQixZQUFZQztRQUV0RCxJQUFJUSxPQUFPO1lBQ1ROLFNBQVNNO1lBRVQ7UUFDRixDQUFDO1FBRURYLHFCQUFxQkUsWUFBWUMsZ0JBQWdCQyxTQUFTLFNBQUNPLE9BQVU7WUFDbkUsSUFBSUEsT0FBTztnQkFDVE4sU0FBU007Z0JBRVQ7WUFDRixDQUFDO1lBRURpQjtRQUNGO0lBQ0YsR0FBR1g7QUFPTDtBQUVBLFNBQVNFLGtDQUFrQ2pCLFVBQVUsRUFBRUUsT0FBTyxFQUFrQztRQUFoQ2MsNEJBQUFBLGlFQUE0QixFQUFFO0lBQzVGLElBQU0sQUFBRVosb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksRUFDL0NnQixlQUFlZixlQUFlZ0IsZUFBZTtJQUVuREQsYUFBYTBCLGlCQUFpQixDQUFDLFNBQUNqRCxZQUFlO1FBQzdDLElBQU1LLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSSxJQUFJO1FBRTdELElBQUlDLG1CQUFtQixJQUFJLEVBQUU7WUFDM0I7UUFDRixDQUFDO1FBRUQsSUFBTTBDLGtEQUFrRGxDLDBCQUEwQmEsUUFBUSxDQUFDckI7UUFFM0YsSUFBSTBDLGlEQUFpRDtZQUNuRDtRQUNGLENBQUM7UUFFRGpDLGtDQUFrQ2pCLFlBQVlFLFNBQVNjO1FBRXZEQSwwQkFBMEJtQyxJQUFJLENBQUMzQztJQUNqQztJQUVBLE9BQU9RO0FBQ1QifQ==