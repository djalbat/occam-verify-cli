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
        var error = null, version = releaseContext.getVersion(), versionString = version.toString();
        log.debug("...already created the '".concat(releaseName, ":").concat(versionString, "' context."));
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
        var version = releaseContext.getVersion(), versionString = version.toString();
        releaseContextMap[releaseName] = releaseContext;
        createDependencyReleaseContexts(dependency, dependentNames, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            log.info("...created the '".concat(releaseName, "@").concat(versionString, "' context."));
            callback(error);
        });
    }, context);
}
function checkReleaseContextCreated(releaseContext, dependency, context) {
    var releaseContextCreated = releaseContext !== null;
    if (!releaseContextCreated) {
        var log = context.log, dependencyName = dependency.getName(), releaseName = dependencyName; ///
        log.error("The '".concat(releaseName, "' context could not be created."));
    }
    return releaseContextCreated;
}
function checkCyclicDependencyExists(dependency, dependentNames, context) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var log = context.log, firstDependentName = first(dependentNames), dependencyNames = _to_consumable_array(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        log.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
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
            log.error("Version mismatch: '".concat(dependentName, "' requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' has already been created."));
            releaseMatchesDependency = false;
        }
    }
    return releaseMatchesDependency;
}
function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC9jcmVhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxvZywgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGxvZy5kZWJ1ZyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgbG9nLmRlYnVnKGAuLi5hbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfToke3ZlcnNpb25TdHJpbmd9JyBjb250ZXh0LmApO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9nLmluZm8oYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfUAke3ZlcnNpb25TdHJpbmd9JyBjb250ZXh0LmApO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBjb3VsZCBub3QgYmUgY3JlYXRlZC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cuZXJyb3IoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLmVycm9yKGBWZXJzaW9uIG1pc21hdGNoOiAnJHtkZXBlbmRlbnROYW1lfScgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImxvZyIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwiZGVwZW5kZW5jeVN0cmluZyIsImFzU3RyaW5nIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImRlYnVnIiwiZXJyb3IiLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsInJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluZm8iLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJsYXN0RGVwZW5kZW50TmFtZSIsImxhc3QiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OztxQkFGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixTQUFTQSxxQkFBcUJDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7SUFDeEYsSUFBUUMsTUFBMkJGLFFBQTNCRSxLQUFLQyxvQkFBc0JILFFBQXRCRyxtQkFDUEMsaUJBQWlCTixXQUFXTyxPQUFPLElBQ25DQyxtQkFBbUJSLFdBQVdTLFFBQVEsSUFDdENDLGNBQWNKLGdCQUNkSyxpQkFBaUJOLGlCQUFpQixDQUFDSyxZQUFZLElBQUk7SUFFekROLElBQUlRLEtBQUssQ0FBQyxBQUFDLGlCQUFtREosT0FBbkNFLGFBQVkseUJBQXdDLE9BQWpCRixrQkFBaUI7SUFFL0UsSUFBSUcsbUJB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