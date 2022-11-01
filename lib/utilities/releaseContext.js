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
    var done = function done() {
        var error = !noError;
        callback(error);
    };
    var noError = true;
    var releaseName = releaseContext.getReleaseName(), dependencies = releaseContext.getDependencies();
    dependentNames = _toConsumableArray(dependentNames).concat([
        releaseName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var name = dependency.getName(), releaseName = name, shortenedVersion = dependency.getShortedVersion(), cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentNames, releaseContext);
        if (cyclicDependencyExists) {
            noError = false;
            done();
            return;
        }
        createReleaseContext(releaseName, dependentNames, shortenedVersion, context, function(error) {
            if (error) {
                noError = false;
                done();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lcywgc2hvcnRlbmVkVmVyc2lvbiwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IGZhbHNlO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBjcmVhdGVSZWxlYXNlIH0gPSBjb250ZXh0O1xuXG4gIGNyZWF0ZVJlbGVhc2UocmVsZWFzZU5hbWUsIChyZWxlYXNlKSA9PiB7XG4gICAgaWYgKHJlbGVhc2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdHJ1ZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsb2csIGNhbGxiYWNrcyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dSZWxlYXNlQW5kQ2FsbGJhY2tzKGxvZywgcmVsZWFzZSwgY2FsbGJhY2tzKSxcbiAgICAgICAgICByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24ocmVsZWFzZUNvbnRleHQsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVudE5hbWVzLmNvbmNhdChmaXJzdERlcGVuZGVudE5hbWUpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmVycm9yKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgbGV0IG5vRXJyb3IgPSB0cnVlO1xuXG4gIGNvbnN0IHJlbGVhc2VOYW1lID0gcmVsZWFzZUNvbnRleHQuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCByZWxlYXNlTmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy9cbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgbm9FcnJvciA9IGZhbHNlO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZXMsIHNob3J0ZW5lZFZlcnNpb24sIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIG5vRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgZXJyb3IgPSAhbm9FcnJvcjtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzU2hvcnRlbmVkVmVyc2lvbihyZWxlYXNlQ29udGV4dCwgc2hvcnRlbmVkVmVyc2lvbikge1xuICBjb25zdCByZWxlYXNlID0gcmVsZWFzZUNvbnRleHQuZ2V0UmVsZWFzZSgpLFxuICAgICAgICByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gcmVsZWFzZS5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHJlbGVhc2VDb250ZXh0LmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuZXJyb3IoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UncyB2ZXJzaW9uIG9mICR7dmVyc2lvblN0cmluZ30gZG9lcyBub3QgbWF0Y2ggdGhlIGRlcGVuZGVuY3kncyBzaG9ydGVuZWQgdmVyc2lvbiBvZiAke3Nob3J0ZW5lZFZlcnNpb25TdHJpbmd9LmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb247XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlTmFtZSIsImRlcGVuZGVudE5hbWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImNvbnRleHQiLCJjYWxsYmFjayIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZUNvbnRleHQiLCJlcnJvciIsImNyZWF0ZVJlbGVhc2UiLCJyZWxlYXNlIiwibG9nIiwiY2FsbGJhY2tzIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nUmVsZWFzZUFuZENhbGxiYWNrcyIsInJlbGVhc2VNYXRjaGVzU2hvcnRlZFZlcnNpb24iLCJjaGVja1JlbGVhc2VNYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImNvbmNhdCIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJkb25lIiwibm9FcnJvciIsImdldFJlbGVhc2VOYW1lIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwibmV4dCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJnZXRSZWxlYXNlIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLG9CQUFvQjtlQUFwQkE7O0lBNkNoQixPQUVFO2VBRkY7Ozs0REEvQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLFNBQVNBLHFCQUFxQkMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNyRyxJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJELGlCQUFpQixDQUFDTCxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJTSxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVEsS0FBSztRQUVuQkgsU0FBU0c7UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVDLGdCQUFrQkwsUUFBbEJLO0lBRVJBLGNBQWNSLGFBQWEsU0FBQ1MsU0FBWTtRQUN0QyxJQUFJQSxZQUFZLElBQUksRUFBRTtZQUNwQixJQUFNRixRQUFRLElBQUk7WUFFbEJILFNBQVNHO1lBRVQ7UUFDRixDQUFDO1FBRUQsSUFBUUcsTUFBbUJQLFFBQW5CTyxLQUFLQyxZQUFjUixRQUFkUSxXQUNQTCxpQkFBaUJNLGdCQUFjLENBQUNDLDBCQUEwQixDQUFDSCxLQUFLRCxTQUFTRSxZQUN6RUcsK0JBQStCQyxvQ0FBb0NULGdCQUFnQko7UUFFekYsSUFBSSxDQUFDWSw4QkFBOEI7WUFDakMsSUFBTVAsU0FBUSxJQUFJO1lBRWxCSCxTQUFTRztZQUVUO1FBQ0YsQ0FBQztRQUVEUyxnQ0FBZ0NWLGdCQUFnQkwsZ0JBQWdCRSxTQUFTLFNBQUNJLE9BQVU7WUFDbEYsSUFBSSxDQUFDQSxPQUFPO2dCQUNWRixpQkFBaUIsQ0FBQ0wsWUFBWSxHQUFHTTtZQUNuQyxDQUFDO1lBRURGLFNBQVNHO1FBQ1g7SUFDRixHQUFHSjtBQUNMO0lBRUEsV0FBZTtJQUNiSixzQkFBQUE7QUFDRjtBQUVBLFNBQVNrQiw0QkFBNEJqQixXQUFXLEVBQUVDLGNBQWMsRUFBRUssY0FBYyxFQUFFO0lBQ2hGLElBQU1ZLG9DQUFvQ2pCLGVBQWVrQixRQUFRLENBQUNuQixjQUM1RG9CLHlCQUF5QkYsbUNBQW9DLEdBQUc7SUFFdEUsSUFBSUUsd0JBQXdCO1FBQzFCLElBQU1DLHFCQUFxQkMsTUFBTXJCLGlCQUMzQnNCLGtCQUFrQnRCLGVBQWV1QixNQUFNLENBQUNILHFCQUN4Q0ksd0JBQXdCRixnQkFBZ0JHLElBQUksQ0FBRTtRQUVwRHBCLGVBQWVDLEtBQUssQ0FBQyxBQUFDLGtDQUF1RCxPQUF0QmtCLHVCQUFzQjtJQUMvRSxDQUFDO0lBRUQsT0FBT0w7QUFDVDtBQUVBLFNBQVNKLGdDQUFnQ1YsY0FBYyxFQUFFTCxjQUFjLEVBQUVFLE9BQU8sRUFBRUMsUUFBUSxFQUFFO1FBbUNqRnVCLE9BQVQsU0FBU0EsT0FBTztRQUNkLElBQU1wQixRQUFRLENBQUNxQjtRQUVmeEIsU0FBU0c7SUFDWDtJQXRDQSxJQUFJcUIsVUFBVSxJQUFJO0lBRWxCLElBQU01QixjQUFjTSxlQUFldUIsY0FBYyxJQUMzQ0MsZUFBZXhCLGVBQWV5QixlQUFlO0lBRW5EOUIsaUJBQWlCLEFBQUUsbUJBQUdBLHVCQUFMO1FBQXFCRDtLQUFhLEdBQUcsR0FBRztJQUV6RDhCLGFBQWFFLDZCQUE2QixDQUFDLFNBQUNDLFlBQVlDLE1BQU1QLE1BQVM7UUFDckUsSUFBTVEsT0FBT0YsV0FBV0csT0FBTyxJQUN6QnBDLGNBQWNtQyxNQUNkakMsbUJBQW1CK0IsV0FBV0ksaUJBQWlCLElBQy9DakIseUJBQXlCSCw0QkFBNEJqQixhQUFhQyxnQkFBZ0JLO1FBRXhGLElBQUljLHdCQUF3QjtZQUMxQlEsVUFBVSxLQUFLO1lBRWZEO1lBRUE7UUFDRixDQUFDO1FBRUQ1QixxQkFBcUJDLGFBQWFDLGdCQUFnQkMsa0JBQWtCQyxTQUFTLFNBQUNJLE9BQVU7WUFDdEYsSUFBSUEsT0FBTztnQkFDVHFCLFVBQVUsS0FBSztnQkFFZkQ7Z0JBRUE7WUFDRixDQUFDO1lBRURPO1FBQ0Y7SUFDRixHQUFHUDtBQU9MO0FBRUEsU0FBU1osb0NBQW9DVCxjQUFjLEVBQUVKLGdCQUFnQixFQUFFO0lBQzdFLElBQU1PLFVBQVVILGVBQWVnQyxVQUFVLElBQ25DeEIsK0JBQStCTCxRQUFROEIscUJBQXFCLENBQUNyQztJQUVuRSxJQUFJLENBQUNZLDhCQUE4QjtRQUNqQyxJQUFNMEIsVUFBVWxDLGVBQWVtQyxVQUFVLElBQ25DekMsY0FBY00sZUFBZXVCLGNBQWMsSUFDM0NhLGdCQUFnQkYsUUFBUUcsUUFBUSxJQUNoQ0MseUJBQXlCMUMsaUJBQWlCeUMsUUFBUTtRQUV4RHJDLGVBQWVDLEtBQUssQ0FBQyxBQUFDLFFBQTRDbUMsT0FBckMxQyxhQUFZLDJCQUErRjRDLE9BQXRFRixlQUFjLDBEQUErRSxPQUF2QkUsd0JBQXVCO0lBQ2pLLENBQUM7SUFFRCxPQUFPOUI7QUFDVCJ9