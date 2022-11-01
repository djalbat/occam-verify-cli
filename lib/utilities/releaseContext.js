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
function createReleaseContext(connection, name, dependentNames, shortenedVersion, context, callback) {
    var releaseContextMap = context.releaseContextMap, releaseContext = releaseContextMap[name] || null;
    if (releaseContext !== null) {
        var error = false;
        callback(error);
        return;
    }
    var createRelease = context.createRelease;
    createRelease(name, function(release) {
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
        createDependencyReleaseContexts(connection, releaseContext, dependentNames, context, function(error) {
            if (!error) {
                releaseContextMap[name] = releaseContext;
            }
            callback(error);
        });
    }, context);
}
var _default = {
    createReleaseContext: createReleaseContext
};
function checkCyclicDependencyExists(name, dependentNames, releaseContext) {
    var dependentNamesIncludesName = dependentNames.includes(name), cyclicDependencyExists = dependentNamesIncludesName; ///
    if (cyclicDependencyExists) {
        var firstDependentName = first(dependentNames), dependencyNames = dependentNames.concat(firstDependentName), dependencyNamesString = dependencyNames.join("' -> '");
        releaseContext.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function createDependencyReleaseContexts(connection, releaseContext, dependentNames, context, callback) {
    var done = function done() {
        var error = !noError;
        callback(error);
    };
    var noError = true;
    var name = releaseContext.getName(), dependencies = releaseContext.getDependencies();
    dependentNames = _toConsumableArray(dependentNames).concat([
        name
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var name = dependency.getName(), shortenedVersion = dependency.getShortedVersion(), cyclicDependencyExists = checkCyclicDependencyExists(name, dependentNames, releaseContext);
        if (cyclicDependencyExists) {
            noError = false;
            done();
            return;
        }
        createReleaseContext(connection, name, dependentNames, shortenedVersion, context, function(error) {
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
        var name = releaseContext.getName(), version = releaseContext.getVersion(), versionString = version.toString(), shortenedVersionString = shortenedVersion.toString();
        releaseContext.error("The '".concat(name, "' package's version of ").concat(versionString, " does not match the dependency's shortened version of ").concat(shortenedVersionString, "."));
    }
    return releaseMatchesShortedVersion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGNvbm5lY3Rpb24sIG5hbWUsIGRlcGVuZGVudE5hbWVzLCBzaG9ydGVuZWRWZXJzaW9uLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW25hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBmYWxzZTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgY3JlYXRlUmVsZWFzZSB9ID0gY29udGV4dDtcblxuICBjcmVhdGVSZWxlYXNlKG5hbWUsIChyZWxlYXNlKSA9PiB7XG4gICAgaWYgKHJlbGVhc2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdHJ1ZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsb2csIGNhbGxiYWNrcyB9ID0gY29udGV4dCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dSZWxlYXNlQW5kQ2FsbGJhY2tzKGxvZywgcmVsZWFzZSwgY2FsbGJhY2tzKSxcbiAgICAgICAgICByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uID0gY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24ocmVsZWFzZUNvbnRleHQsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoY29ubmVjdGlvbiwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbbmFtZV0gPSByZWxlYXNlQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0pO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKG5hbWUsIGRlcGVuZGVudE5hbWVzLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbnROYW1lc0luY2x1ZGVzTmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKG5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc05hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbnROYW1lcy5jb25jYXQoZmlyc3REZXBlbmRlbnROYW1lKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5lcnJvcihgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhjb25uZWN0aW9uLCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBub0Vycm9yID0gdHJ1ZTtcblxuICBjb25zdCBuYW1lID0gcmVsZWFzZUNvbnRleHQuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIG5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMobmFtZSwgZGVwZW5kZW50TmFtZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBub0Vycm9yID0gZmFsc2U7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGNvbm5lY3Rpb24sIG5hbWUsIGRlcGVuZGVudE5hbWVzLCBzaG9ydGVuZWRWZXJzaW9uLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBub0Vycm9yID0gZmFsc2U7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IGVycm9yID0gIW5vRXJyb3I7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24ocmVsZWFzZUNvbnRleHQsIHNob3J0ZW5lZFZlcnNpb24pIHtcbiAgY29uc3QgcmVsZWFzZSA9IHJlbGVhc2VDb250ZXh0LmdldFJlbGVhc2UoKSxcbiAgICAgICAgcmVsZWFzZU1hdGNoZXNTaG9ydGVkVmVyc2lvbiA9IHJlbGVhc2UubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gIGlmICghcmVsZWFzZU1hdGNoZXNTaG9ydGVkVmVyc2lvbikge1xuICAgIGNvbnN0IG5hbWUgPSByZWxlYXNlQ29udGV4dC5nZXROYW1lKCksXG4gICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5lcnJvcihgVGhlICcke25hbWV9JyBwYWNrYWdlJ3MgdmVyc2lvbiBvZiAke3ZlcnNpb25TdHJpbmd9IGRvZXMgbm90IG1hdGNoIHRoZSBkZXBlbmRlbmN5J3Mgc2hvcnRlbmVkIHZlcnNpb24gb2YgJHtzaG9ydGVuZWRWZXJzaW9uU3RyaW5nfS5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiY29ubmVjdGlvbiIsIm5hbWUiLCJkZXBlbmRlbnROYW1lcyIsInNob3J0ZW5lZFZlcnNpb24iLCJjb250ZXh0IiwiY2FsbGJhY2siLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJjcmVhdGVSZWxlYXNlIiwicmVsZWFzZSIsImxvZyIsImNhbGxiYWNrcyIsIlJlbGVhc2VDb250ZXh0IiwiZnJvbUxvZ1JlbGVhc2VBbmRDYWxsYmFja3MiLCJyZWxlYXNlTWF0Y2hlc1Nob3J0ZWRWZXJzaW9uIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc05hbWUiLCJpbmNsdWRlcyIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImNvbmNhdCIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJkb25lIiwibm9FcnJvciIsImdldE5hbWUiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuZXh0IiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJnZXRSZWxlYXNlIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLG9CQUFvQjtlQUFwQkE7O0lBNkNoQixPQUVFO2VBRkY7Ozs0REEvQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLFNBQVNBLHFCQUFxQkMsVUFBVSxFQUFFQyxJQUFJLEVBQUVD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