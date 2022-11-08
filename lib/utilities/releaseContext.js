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
var _release = /*#__PURE__*/ _interopRequireDefault(require("../context/release"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    var createRelease = context.createRelease;
    createRelease(releaseName, function(release) {
        if (release === null) {
            var error = true;
            callback(error);
            return;
        }
        var log = context.log, callbacks = context.callbacks, releaseContext = _release.default.fromLogReleaseAndCallbacks(log, release, callbacks), releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IGZhbHNlO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBjcmVhdGVSZWxlYXNlIH0gPSBjb250ZXh0O1xuXG4gIGNyZWF0ZVJlbGVhc2UocmVsZWFzZU5hbWUsIChyZWxlYXNlKSA9PiB7XG4gICAgaWYgKHJlbGVhc2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdHJ1ZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsb2csIGNhbGxiYWNrcyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dSZWxlYXNlQW5kQ2FsbGJhY2tzKGxvZywgcmVsZWFzZSwgY2FsbGJhY2tzKSxcbiAgICAgICAgICByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24ocmVsZWFzZUNvbnRleHQsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVudE5hbWVzLmNvbmNhdChmaXJzdERlcGVuZGVudE5hbWUpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmVycm9yKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgcmVsZWFzZU5hbWUgPSByZWxlYXNlQ29udGV4dC5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZG9uZSA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IGZhbHNlO1xuXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCByZWxlYXNlTmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy9cbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSB0cnVlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9yID0gISFlcnJvcjsgIC8vL1xuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uKHJlbGVhc2VDb250ZXh0LCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gIGNvbnN0IHJlbGVhc2UgPSByZWxlYXNlQ29udGV4dC5nZXRSZWxlYXNlKCksXG4gICAgICAgIHJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb24gPSByZWxlYXNlLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICBpZiAoIXJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb24pIHtcbiAgICBjb25zdCB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gcmVsZWFzZUNvbnRleHQuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZSdzIHZlcnNpb24gb2YgJHt2ZXJzaW9uU3RyaW5nfSBkb2VzIG5vdCBtYXRjaCB0aGUgZGVwZW5kZW5jeSdzIHNob3J0ZW5lZCB2ZXJzaW9uIG9mICR7c2hvcnRlbmVkVmVyc2lvblN0cmluZ30uYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNTaG9ydGVkVmVyc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwiY3JlYXRlUmVsZWFzZSIsInJlbGVhc2UiLCJsb2ciLCJjYWxsYmFja3MiLCJSZWxlYXNlQ29udGV4dCIsImZyb21Mb2dSZWxlYXNlQW5kQ2FsbGJhY2tzIiwicmVsZWFzZU1hdGNoZXNTaG9ydGVkVmVyc2lvbiIsImNoZWNrUmVsZWFzZU1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSIsImluY2x1ZGVzIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiY29uY2F0IiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImdldFJlbGVhc2VOYW1lIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZG9uZSIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5leHQiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFNob3J0ZWRWZXJzaW9uIiwiZ2V0UmVsZWFzZSIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7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