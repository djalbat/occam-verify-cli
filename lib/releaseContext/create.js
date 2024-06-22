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
        log.info("...created the '".concat(releaseName, "@").concat(versionString, "' context."));
        releaseContextMap[releaseName] = releaseContext;
        createDependencyReleaseContexts(dependency, dependentNames, context, callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxlYXNlQ29udGV4dC9jcmVhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxvZywgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGxvZy5kZWJ1ZyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgbG9nLmRlYnVnKGAuLi5hbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfToke3ZlcnNpb25TdHJpbmd9JyBjb250ZXh0LmApO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0O1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgIGxvZy5pbmZvKGAuLi5jcmVhdGVkIHRoZSAnJHtyZWxlYXNlTmFtZX1AJHt2ZXJzaW9uU3RyaW5nfScgY29udGV4dC5gKTtcblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKTtcblxuICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZTsgLy8vXG5cbiAgICBsb2cuZXJyb3IoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLmVycm9yKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IHRydWU7XG5cbiAgY29uc3QgZW50cmllcyA9IHJlbGVhc2VDb250ZXh0LmdldEVudHJpZXMoKSxcbiAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSBlbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy5lcnJvcihgVmVyc2lvbiBtaXNtYXRjaDogJyR7ZGVwZW5kZW50TmFtZX0nIHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJsb2ciLCJyZWxlYXNlQ29udGV4dE1hcCIsImRlcGVuZGVuY3lOYW1lIiwiZ2V0TmFtZSIsImRlcGVuZGVuY3lTdHJpbmciLCJhc1N0cmluZyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJkZWJ1ZyIsImVycm9yIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImluZm8iLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibGFzdERlcGVuZGVudE5hbWUiLCJsYXN0IiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7cUJBRkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sU0FBU0EscUJBQXFCQyxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3hGLElBQVFDLE1BQTJCRixRQUEzQkUsS0FBS0Msb0JBQXNCSCxRQUF0QkcsbUJBQ1BDLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsbUJBQW1CUixXQUFXUyxRQUFRLElBQ3RDQyxjQUFjSixnQkFDZEssaUJBQWlCTixpQkFBaUIsQ0FBQ0ssWUFBWSxJQUFJO0lBRXpETixJQUFJUSxLQUFLLENBQUMsQUFBQyxpQkFBbURKLE9BQW5DRSxhQUFZLHlCQUF3QyxPQUFqQkYsa0JBQWlCO0lBRS9FLElBQUlHLG1CQUFtQixNQUFNO1FBQzNCLElBQU1FLFFBQVEsTUFDUkMsVUFBVUgsZUFBZUksVUFBVSxJQUNuQ0MsZ0JBQWdCRixRQUFRRyxRQUFRO1FBRXRDYixJQUFJUSxLQUFLLENBQUMsQUFBQywyQkFBeUNJLE9BQWZOLGFBQVksS0FBaUIsT0FBZE0sZUFBYztRQUVsRWIsU0FBU1U7UUFFVDtJQUNGO0lBRUEsSUFBTSxBQUFFSywrQkFBaUNoQixRQUFqQ2dCO0lBRVJBLDZCQUE2QmxCLFlBQVlFLFNBQVMsU0FBQ1csT0FBT0Y7UUFDeEQsSUFBSUUsT0FBTztZQUNUVixTQUFTVTtZQUVUO1FBQ0Y7UUFFQSxJQUFNTSx3QkFBd0JDLDJCQUEyQlQsZ0JBQWdCWCxZQUFZRTtRQUVyRixJQUFJLENBQUNpQix1QkFBdUI7WUFDMUIsSUFBTU4sVUFBUTtZQUVkVixTQUFTVTtZQUVUO1FBQ0Y7UUFFQSxJQUFNUSwyQkFBMkJDLDhCQUE4QlgsZ0JBQWdCWCxZQUFZQyxnQkFBZ0JDO1FBRTNHLElBQUksQ0FBQ21CLDBCQUEwQjtZQUM3QixJQUFNUixXQUFRO1lBRWRWLFNBQVNVO1lBRVQ7UUFDRjtRQUVBLElBQU1DLFVBQVVILGVBQWVJLFVBQVUsSUFDbkNDLGdCQUFnQkYsUUFBUUcsUUFBUTtRQUV0Q2IsSUFBSW1CLElBQUksQ0FBQyxBQUFDLG1CQUFpQ1AsT0FBZk4sYUFBWSxLQUFpQixPQUFkTSxlQUFjO1FBRXpEWCxpQkFBaUIsQ0FBQ0ssWUFBWSxHQUFHQztRQUVqQ2EsZ0NBQWdDeEIsWUFBWUMsZ0JBQWdCQyxTQUFTQztJQUN2RSxHQUFHRDtBQUNMO0FBRUEsU0FBU2tCLDJCQUEyQlQsY0FBYyxFQUFFWCxVQUFVLEVBQUVFLE9BQU87SUFDckUsSUFBTWlCLHdCQUF5QlIsbUJBQW1CO0lBRWxELElBQUksQ0FBQ1EsdUJBQXVCO1FBQzFCLElBQU0sQUFBRWYsTUFBUUYsUUFBUkUsS0FDRkUsaUJBQWlCTixXQUFXTyxPQUFPLElBQ25DRyxjQUFjSixnQkFBZ0IsR0FBRztRQUV2Q0YsSUFBSVMsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkgsYUFBWTtJQUNoQztJQUVBLE9BQU9TO0FBQ1Q7QUFFQSxTQUFTTSw0QkFBNEJ6QixVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTztJQUN0RSxJQUFNSSxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNtQix1Q0FBdUN6QixlQUFlMEIsUUFBUSxDQUFDckIsaUJBQy9Ec0IseUJBQXlCRixzQ0FBdUMsR0FBRztJQUV6RSxJQUFJRSx3QkFBd0I7UUFDMUIsSUFBTSxBQUFFeEIsTUFBUUYsUUFBUkUsS0FDRnlCLHFCQUFxQkMsTUFBTTdCLGlCQUMzQjhCLGtCQUFrQixBQUNoQixxQkFBRzlCLHVCQURhO1lBRWhCNEI7U0FDRCxHQUNERyx3QkFBd0JELGdCQUFnQkUsSUFBSSxDQUFFO1FBRXBEN0IsSUFBSVMsS0FBSyxDQUFDLEFBQUMsa0NBQXVELE9BQXRCbUIsdUJBQXNCO0lBQ3BFO0lBRUEsT0FBT0o7QUFDVDtBQUVBLFNBQVNOLDhCQUE4QlgsY0FBYyxFQUFFWCxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTztJQUN4RixJQUFJbUIsMkJBQTJCO0lBRS9CLElBQU1hLFVBQVV2QixlQUFld0IsVUFBVSxJQUNuQ0MsbUJBQW1CcEMsV0FBV3FDLGlCQUFpQjtJQUVyRCxJQUFJRCxxQkFBcUIsTUFBTTtRQUM3QixJQUFNRSwrQkFBK0JKLFFBQVFLLHFCQUFxQixDQUFDSDtRQUVuRSxJQUFJLENBQUNFLDhCQUE4QjtZQUNqQyxJQUFNLEFBQUVsQyxNQUFRRixRQUFSRSxLQUNGVSxVQUFVSCxlQUFlSSxVQUFVLElBQ25DeUIsb0JBQW9CQyxJQUFBQSxXQUFJLEVBQUN4QyxpQkFDekJ5QyxnQkFBZ0JGLG1CQUNoQnhCLGdCQUFnQkYsUUFBUUcsUUFBUSxJQUNoQ1QsbUJBQW1CUixXQUFXUyxRQUFRO1lBRTVDTCxJQUFJUyxLQUFLLENBQUMsQUFBQyxzQkFBcURMLE9BQWhDa0MsZUFBYyxvQkFBOEUxQixPQUE1RFIsa0JBQWlCLDZDQUF5RCxPQUFkUSxlQUFjO1lBRTFJSywyQkFBMkI7UUFDN0I7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRyxnQ0FBZ0N4QixVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3BGLElBQU0sQUFBRUUsb0JBQXNCSCxRQUF0QkcsbUJBQ0ZDLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0csY0FBY0osZ0JBQ2RLLGlCQUFpQk4saUJBQWlCLENBQUNLLFlBQVksRUFDL0NpQyxlQUFlaEMsZUFBZWlDLGVBQWU7SUFFbkQzQyxpQkFBaUIsQUFBRSxxQkFBR0EsdUJBQUw7UUFBcUJLO0tBQWdCLEdBQUcsR0FBRztJQUU1RHFDLGFBQWFFLDZCQUE2QixDQUFDLFNBQUM3QyxZQUFZOEMsTUFBTUM7UUFDNUQsSUFBTW5CLHlCQUF5QkgsNEJBQTRCekIsWUFBWUM7UUFFdkUsSUFBSTJCLHdCQUF3QjtZQUMxQixJQUFNZixRQUFRO1lBRWRWLFNBQVNVO1lBRVQ7UUFDRjtRQUVBZCxxQkFBcUJDLFlBQVlDLGdCQUFnQkMsU0FBUyxTQUFDVztZQUN6RCxJQUFJQSxPQUFPO2dCQUNUVixTQUFTVTtnQkFFVDtZQUNGO1lBRUFpQztRQUNGO0lBQ0YsR0FBRztRQUNELElBQU1qQyxRQUFRO1FBRWRWLFNBQVNVO0lBQ1g7QUFDRiJ9