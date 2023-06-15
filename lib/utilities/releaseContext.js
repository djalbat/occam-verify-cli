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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function initialiseReleaseContext(dependency, dependentName, dependentReleased, context, callback) {
    var done = function done() {
        var dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependency, context);
        releaseContext.initialise(dependencyReleaseContexts);
        callback(error);
    };
    var error = null;
    var releaseContextMap = context.releaseContextMap, name = dependency.getName(), releaseName = name, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        callback(error);
        return;
    }
    var released = releaseContext.isReleased(), initialised = releaseContext.isInitialised();
    if (initialised) {
        callback(error);
        return;
    }
    if (!released) {
        if (dependentReleased) {
            error = "Unable to initialise the '".concat(name, "' dependency's context because its '").concat(dependentName, "' dependent is a package.");
            callback(error);
            return;
        }
    }
    dependentName = name; ///
    dependentReleased = released; ///
    var dependencies = releaseContext.getDependencies();
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        initialiseReleaseContext(dependency, dependentName, dependentReleased, context, function(error) {
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
        var firstDependentName = first(dependentNames), dependencyNames = _to_consumable_array(dependentNames).concat([
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
    dependentNames = _to_consumable_array(dependentNames).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlIGNvdWxkIG5vdCBiZSBjcmVhdGVkLmA7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3koZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKSxcbiAgICAgICAgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFyZWxlYXNlZCkge1xuICAgIGlmIChkZXBlbmRlbnRSZWxlYXNlZCkge1xuICAgICAgZXJyb3IgPSBgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke25hbWV9JyBkZXBlbmRlbmN5J3MgY29udGV4dCBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBkZXBlbmRlbnROYW1lID0gbmFtZTsgIC8vL1xuXG4gIGRlcGVuZGVudFJlbGVhc2VkID0gcmVsZWFzZWQ7ICAvLy9cblxuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcykge1xuICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGVycm9yID1gVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYDtcbiAgfVxuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3koZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGxldCBlcnJvciA9IG51bGw7XG5cbiAgY29uc3QgZW50cmllcyA9IHJlbGVhc2VDb250ZXh0LmdldEVudHJpZXMoKSxcbiAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSBlbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKSxcbiAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGVycm9yID0gYFZlcnNpb24gbWlzbWF0Y2g6ICcke2RlcGVuZGVudE5hbWV9JyByZXF1aXJlcyAnJHtkZXBlbmRlbmN5TmFtZX0nIHRvIGJlIHZlcnNpb24gJHtzaG9ydGVuZWRWZXJzaW9uU3RyaW5nfS4wIG9yIGhpZ2hlciBidXQgdmVyc2lvbiAke3ZlcnNpb25TdHJpbmd9IGhhcyBiZWVuIHN1cHBsaWVkLmA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsImRvbmUiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsIm5hbWUiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJpbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJmb3JFYWNoRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxvQkFBb0I7ZUFBcEJBOztJQTZDQUMsd0JBQXdCO2VBQXhCQTs7SUE0RGhCLE9BR0U7ZUFIRjs7O3FCQTNHcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsU0FBU0QscUJBQXFCRSxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ2hGLElBQU0sQUFBRUMsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSTtJQUV6RCxJQUFJQyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNQyxRQUFRQyw4QkFBOEJWLFlBQVlDLGdCQUFnQk87UUFFeEVMLFNBQVNNO1FBRVQ7SUFDRjtJQUVBLElBQU0sQUFBRUUsK0JBQWlDVCxRQUFqQ1M7SUFFUkEsNkJBQTZCWCxZQUFZRSxTQUFTLFNBQUNPLE9BQU9EO1FBQ3hELElBQUlDLE9BQU87WUFDVE4sU0FBU007WUFFVDtRQUNGO1FBRUEsSUFBSUQsbUJBQW1CLE1BQU07WUFDM0IsSUFBTUMsVUFBUSxBQUFDLFFBQW1CLE9BQVpGLGFBQVk7WUFFbENKLFNBQVNNO1lBRVQ7UUFDRjtRQUVBQSxRQUFRQyw4QkFBOEJWLFlBQVlDLGdCQUFnQk87UUFFbEUsSUFBSUMsT0FBTztZQUNUTixTQUFTTTtZQUVUO1FBQ0Y7UUFFQUwsaUJBQWlCLENBQUNH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