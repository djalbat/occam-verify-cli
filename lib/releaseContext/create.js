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
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var error = null;
        callback(error);
        return;
    }
    var releaseContextFromDependency = context.releaseContextFromDependency;
    releaseContextFromDependency(dependency, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        var releaseCreated = checkReleaseCreated(releaseContext, dependency, context);
        if (!releaseCreated) {
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
        createDependencyReleaseContexts(dependency, dependentNames, context, callback);
    }, context);
}
function checkReleaseCreated(releaseContext, dependency, context) {
    var releaseCreated = releaseContext !== null;
    if (!releaseCreated) {
        var log = context.log, dependencyName = dependency.getName(), releaseName = dependencyName; ///
        log.error("The '".concat(releaseName, "' package could not be created."));
    }
    return releaseCreated;
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
            var log = context.log, version = releaseContext.getVersion(), versionString = version.toString(), lastDependentName = (0, _array.last)(dependentNames), dependentName = lastDependentName, dependencyName = dependency.getName(), shortenedVersion1 = dependency.getShortedVersion(), shortenedVersionString = shortenedVersion1.toString();
            log.error("Version mismatch: '".concat(dependentName, "' requires '").concat(dependencyName, "' to be version ").concat(shortenedVersionString, ".0 or higher but version ").concat(versionString, " has been supplied."));
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
    }, done);
    function done() {
        var error = null;
        callback(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC9jcmVhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlQ3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ3JlYXRlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDcmVhdGVkID0gKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKTtcblxuICBpZiAoIXJlbGVhc2VDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZSBjb3VsZCBub3QgYmUgY3JlYXRlZC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ3JlYXRlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy5lcnJvcihgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSB0cnVlO1xuXG4gIGNvbnN0IGVudHJpZXMgPSByZWxlYXNlQ29udGV4dC5nZXRFbnRyaWVzKCksXG4gICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCk7XG5cbiAgaWYgKHNob3J0ZW5lZFZlcnNpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uID0gZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKSxcbiAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGxvZy5lcnJvcihgVmVyc2lvbiBtaXNtYXRjaDogJyR7ZGVwZW5kZW50TmFtZX0nIHJlcXVpcmVzICcke2RlcGVuZGVuY3lOYW1lfScgdG8gYmUgdmVyc2lvbiAke3Nob3J0ZW5lZFZlcnNpb25TdHJpbmd9LjAgb3IgaGlnaGVyIGJ1dCB2ZXJzaW9uICR7dmVyc2lvblN0cmluZ30gaGFzIGJlZW4gc3VwcGxpZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNyZWF0ZWQiLCJjaGVja1JlbGVhc2VDcmVhdGVkIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwibG9nIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJsYXN0RGVwZW5kZW50TmFtZSIsImxhc3QiLCJkZXBlbmRlbnROYW1lIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiXSwibWFwcGluZ3MiOiJBQUFB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