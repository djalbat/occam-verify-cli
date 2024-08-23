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
        log.error("The '".concat(releaseName, "' context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch."));
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
            log.error("Version mismatch: '".concat(dependentName, "' requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' was created."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC9jcmVhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxvZywgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGxvZy5kZWJ1ZyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgbG9nLmRlYnVnKGAuLi5hbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfToke3ZlcnNpb25TdHJpbmd9JyBjb250ZXh0LmApO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9nLmluZm8oYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfUAke3ZlcnNpb25TdHJpbmd9JyBjb250ZXh0LmApO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBjb3VsZCBub3QgYmUgY3JlYXRlZC4gUGVyaGFwcyB0aGUgJ21ldGEuanNvbicgZmlsZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuIE9yIHRoZXJlIGNvdWxkIGJlIGEgZGVwZW5kZW5jeSBtaXNtYXRjaC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cuZXJyb3IoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLmVycm9yKGBWZXJzaW9uIG1pc21hdGNoOiAnJHtkZXBlbmRlbnROYW1lfScgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyB3YXMgY3JlYXRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJkZXBlbmRlbmN5U3RyaW5nIiwiYXNTdHJpbmciLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZGVidWciLCJlcnJvciIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5mbyIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImluY2x1ZGVzIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLFNBQVNBLHFCQUFxQkMsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUN4RixJQUFRQyxNQUEyQkYsUUFBM0JFLEtBQUtDLG9CQUFzQkgsUUFBdEJHLG1CQUNQQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLG1CQUFtQlIsV0FBV1MsUUFBUSxJQUN0Q0MsY0FBY0osZ0JBQ2RLLGlCQUFpQk4saUJBQWlCLENBQUNLLFlBQVksSUFBSTtJQUV6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