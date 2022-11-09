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
    default: function() {
        return _default;
    }
});
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
function createReleaseContext(releaseName, dependentNames, shortenedVersion, context, callback) {
    var releaseContextMap = context.releaseContextMap, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var error = false;
        callback(error);
        return;
    }
    var releaseContextFromReleaseName = context.releaseContextFromReleaseName;
    releaseContextFromReleaseName(releaseName, context, function(releaseContext) {
        if (releaseContext === null) {
            var error = true;
            callback(error);
            return;
        }
        var releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion);
        if (!releaseMatchesShortedVersion) {
            var error1 = true;
            callback(error1);
            return;
        }
        createDependencyReleaseContexts(releaseContext, dependentNames, context, function(error) {
            if (!error) {
                releaseContextMap[releaseName] = releaseContext;
            }
            callback(error);
        });
    }, context);
}
var _default = {
    createReleaseContext: createReleaseContext
};
function checkCyclicDependencyExists(releaseName, dependentNames, releaseContext) {
    var dependentNamesIncludesReleaseName = dependentNames.includes(releaseName), cyclicDependencyExists = dependentNamesIncludesReleaseName; ///
    if (cyclicDependencyExists) {
        var firstDependentName = first(dependentNames), dependencyNames = dependentNames.concat(firstDependentName), dependencyNamesString = dependencyNames.join("' -> '");
        releaseContext.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function createDependencyReleaseContexts(releaseContext, dependentNames, context, callback) {
    var releaseName = releaseContext.getReleaseName(), dependencies = releaseContext.getDependencies(), done = function() {
        var error = false;
        callback(error);
    };
    dependentNames = _toConsumableArray(dependentNames).concat([
        releaseName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var name = dependency.getName(), releaseName = name, shortenedVersion = dependency.getShortedVersion(), cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentNames, releaseContext);
        if (cyclicDependencyExists) {
            var error = true;
            callback(error);
            return;
        }
        createReleaseContext(releaseName, dependentNames, shortenedVersion, context, function(error) {
            if (error) {
                error = !!error; ///
                callback(error);
                return;
            }
            next();
        });
    }, done);
}
function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion) {
    var release = releaseContext.getRelease(), releaseMatchesShortedVersion = release.matchShortenedVersion(shortenedVersion);
    if (!releaseMatchesShortedVersion) {
        var version = releaseContext.getVersion(), releaseName = releaseContext.getReleaseName(), versionString = version.toString(), shortenedVersionString = shortenedVersion.toString();
        releaseContext.error("The '".concat(releaseName, "' package's version of ").concat(versionString, " does not match the dependency's shortened version of ").concat(shortenedVersionString, "."));
    }
    return releaseMatchesShortedVersion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBmYWxzZTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWUgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWUocmVsZWFzZU5hbWUsIGNvbnRleHQsIChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0cnVlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24ocmVsZWFzZUNvbnRleHQsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVudE5hbWVzLmNvbmNhdChmaXJzdERlcGVuZGVudE5hbWUpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmVycm9yKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgcmVsZWFzZU5hbWUgPSByZWxlYXNlQ29udGV4dC5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZG9uZSA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IGZhbHNlO1xuXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCByZWxlYXNlTmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy9cbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSB0cnVlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9yID0gISFlcnJvcjsgIC8vL1xuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uKHJlbGVhc2VDb250ZXh0LCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gIGNvbnN0IHJlbGVhc2UgPSByZWxlYXNlQ29udGV4dC5nZXRSZWxlYXNlKCksXG4gICAgICAgIHJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb24gPSByZWxlYXNlLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICBpZiAoIXJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb24pIHtcbiAgICBjb25zdCB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gcmVsZWFzZUNvbnRleHQuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZSdzIHZlcnNpb24gb2YgJHt2ZXJzaW9uU3RyaW5nfSBkb2VzIG5vdCBtYXRjaCB0aGUgZGVwZW5kZW5jeSdzIHNob3J0ZW5lZCB2ZXJzaW9uIG9mICR7c2hvcnRlbmVkVmVyc2lvblN0cmluZ30uYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNTaG9ydGVkVmVyc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWUiLCJyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJjb25jYXQiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiZ2V0UmVsZWFzZU5hbWUiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJkb25lIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwibmV4dCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJyZWxlYXNlIiwiZ2V0UmVsZWFzZSIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxvQkFBb0I7ZUFBcEJBOztJQTJDaEIsT0FFRTtlQUZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM0NPLFNBQVNBLHFCQUFxQkMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNyRyxJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJF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