"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createReleaseContext;
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
    var log = context.log, releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), dependencyString = dependency.asString(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    log.debug("Creating the '".concat(releaseName, "' context given the '").concat(dependencyString, "' dependency..."));
    if (releaseContext !== null) {
        var error = null;
        log.debug("...already created the '".concat(releaseName, "' context."));
        callback(error);
        return;
    }
    var releaseContextFromDependency = context.releaseContextFromDependency;
    releaseContextFromDependency(dependency, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        var releaseContextCreated = checkReleaseContextCreated(releaseContext, dependency, context);
        if (!releaseContextCreated) {
            var _$error = null;
            callback(_$error);
            return;
        }
        var releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
        if (!releaseMatchesDependency) {
            var _$error1 = null;
            callback(_$error1);
            return;
        }
        releaseContextMap[releaseName] = releaseContext;
        log.info("...created the '".concat(releaseName, "' context."));
        createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            callback(error);
        });
    }, context);
}
function checkReleaseContextCreated(releaseContext, dependency, context) {
    var releaseContextCreated = releaseContext !== null;
    if (!releaseContextCreated) {
        var log = context.log, dependencyName = dependency.getName(), releaseName = dependencyName; ///
        log.warning("The '".concat(releaseName, "' context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch."));
    }
    return releaseContextCreated;
}
function checkCyclicDependencyExists(dependency, dependentNames, context) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var log = context.log, firstDependentName = first(dependentNames), dependencyNames = _to_consumable_array(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        log.warning("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context) {
    var releaseMatchesDependency = true;
    var entries = releaseContext.getEntries(), shortenedVersion = dependency.getShortedVersion();
    if (shortenedVersion !== null) {
        var entriesMatchShortenedVersion = entries.matchShortenedVersion(shortenedVersion);
        if (!entriesMatchShortenedVersion) {
            var log = context.log, version = releaseContext.getVersion(), lastDependentName = (0, _array.last)(dependentNames), dependentName = lastDependentName, versionString = version.toString(), dependencyString = dependency.asString();
            log.warning("Version mismatch: The '".concat(dependentName, "' dependent requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' was provided."));
            releaseMatchesDependency = false;
        }
    }
    return releaseMatchesDependency;
}
function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, callback) {
    var dependencyName = dependency.getName(), dependencies = releaseContext.getDependencies();
    dependentNames = _to_consumable_array(dependentNames).concat([
        dependencyName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxvZywgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGxvZy5kZWJ1ZyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBsb2cuZGVidWcoYC4uLmFscmVhZHkgY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgbG9nLmluZm8oYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiBQZXJoYXBzIHRoZSAnbWV0YS5qc29uJyBmaWxlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC4gT3IgdGhlcmUgY291bGQgYmUgYSBkZXBlbmRlbmN5IG1pc21hdGNoLmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0Q3JlYXRlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy53YXJuaW5nKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IHRydWU7XG5cbiAgY29uc3QgZW50cmllcyA9IHJlbGVhc2VDb250ZXh0LmdldEVudHJpZXMoKSxcbiAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSBlbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy53YXJuaW5nKGBWZXJzaW9uIG1pc21hdGNoOiBUaGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCByZXF1aXJlcyB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kgYnV0IGEgY29udGV4dCB3aXRoIHZlcnNpb24gJyR7dmVyc2lvblN0cmluZ30nIHdhcyBwcm92aWRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJsb2ciLCJyZWxlYXNlQ29udGV4dE1hcCIsImRlcGVuZGVuY3lOYW1lIiwiZ2V0TmFtZSIsImRlcGVuZGVuY3lTdHJpbmciLCJhc1N0cmluZyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJkZWJ1ZyIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJpbmZvIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsIndhcm5pbmciLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsImRlcGVuZGVudE5hbWUiLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLFNBQVNBLHFCQUFxQkMsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUN4RixJQUFRQyxNQUEyQkYsUUFBM0JFLEtBQUtDLG9CQUFzQkgsUUFBdEJHLG1CQUNQQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLG1CQUFtQlIsV0FBV1MsUUFBUSxJQUN0Q0MsY0FBY0osZ0JBQ2RLLGlCQUFpQk4saUJBQWlCLENBQUNLLFlBQVksSUFBSTtJQUV6RE4sSUFBSVEsS0FBSyxDQUFDLEFBQUMsaUJBQW1ESixPQUFuQ0UsYUFBWSx5QkFBd0MsT0FBakJGLGtCQUFpQjtJQUUvRSxJQUFJRyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNRSxRQUFRO1FBRWRULElBQUlRLEtBQUssQ0FBQyxBQUFDLDJCQUFzQyxPQUFaRixhQUFZO1FBRWpEUCxTQUFTVTtRQUVUO0lBQ0Y7SUFFQSxJQUFNLEFBQUVDLCtCQUFpQ1osUUFBakNZO0lBRVJBLDZCQUE2QmQsWUFBWUUsU0FBUyxTQUFDVyxPQUFPRjtRQUN4RCxJQUFJRSxPQUFPO1lBQ1RWLFNBQVNVO1lBRVQ7UUFDRjtRQUVBLElBQU1FLHdCQUF3QkMsMkJBQTJCTCxn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