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
    initialiseReleaseContexts: function() {
        return initialiseReleaseContexts;
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
function createReleaseContext(dependency, dependentNames, context, callback) {
    var releaseContextMap = context.releaseContextMap, name = dependency.getName(), releaseName = name, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var error = false;
        callback(error);
        return;
    }
    var releaseContextFromReleaseNameAndShortenedVersion = context.releaseContextFromReleaseNameAndShortenedVersion;
    releaseContextFromReleaseNameAndShortenedVersion(dependency, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        if (releaseContext === null) {
            var log = context.log;
            log.error("The '".concat(releaseName, "' package could not be created."));
            releaseContextMap[releaseName] = releaseContext;
            callback(error);
            return;
        }
        createDependencyReleaseContexts(releaseContext, dependentNames, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            releaseContextMap[releaseName] = releaseContext;
            callback(error);
        });
    }, context);
}
function initialiseReleaseContexts(releaseName, releaseContextMap) {
    var releaseContext = releaseContextMap[releaseName];
    initialiseReleaseContext(releaseContext, releaseContextMap);
}
var _default = {
    createReleaseContext: createReleaseContext,
    initialiseReleaseContexts: initialiseReleaseContexts
};
function initialiseReleaseContext(releaseContext, releaseContextMap) {
    if (releaseContext === null) {
        return;
    }
    var initialised = releaseContext.isInitialised();
    if (initialised) {
        return;
    }
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, _$releaseContext = releaseContextMap[releaseName];
        initialiseReleaseContext(_$releaseContext, releaseContextMap);
    });
    var dependencyReleaseContexts = retrieveDependencyReleaseContexts(releaseContext, releaseContextMap);
    releaseContext.initialise(dependencyReleaseContexts);
}
function checkCyclicDependencyExists(dependency, dependentNames, releaseContext) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var firstDependentName = first(dependentNames), dependencyNames = _toConsumableArray(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        releaseContext.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function createDependencyReleaseContexts(releaseContext, dependentNames, context, callback) {
    var releaseName = releaseContext.getReleaseName(), dependencies = releaseContext.getDependencies(), done = function() {
        var error = null;
        callback(error);
    };
    dependentNames = _toConsumableArray(dependentNames).concat([
        releaseName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, releaseContext);
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
}
function retrieveDependencyReleaseContexts(releaseContext, releaseContextMap) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        var dependencyName = dependency.getName(), dependencyReleaseName = dependencyName, dependencyReleaseContext = releaseContextMap[dependencyReleaseName];
        if (dependencyReleaseContext === null) {
            return;
        }
        var dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);
        if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
            var _$releaseContext = dependencyReleaseContext; ///
            retrieveDependencyReleaseContexts(_$releaseContext, releaseContextMap, dependencyReleaseContexts);
            dependencyReleaseContexts.push(dependencyReleaseContext);
        }
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVycm9yID0gZmFsc2U7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbVJlbGVhc2VOYW1lQW5kU2hvcnRlbmVkVmVyc2lvbiB9ID0gY29udGV4dDtcblxuICByZWxlYXNlQ29udGV4dEZyb21SZWxlYXNlTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24oZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgICAgbG9nLmVycm9yKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlIGNvdWxkIG5vdCBiZSBjcmVhdGVkLmApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dHNcbn07XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgaWYgKGluaXRpYWxpc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5lcnJvcihgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJlbGVhc2VOYW1lID0gcmVsZWFzZUNvbnRleHQuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRvbmUgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCByZWxlYXNlTmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXAsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBbXSkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtkZXBlbmRlbmN5UmVsZWFzZU5hbWVdO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmICghZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0KSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgICByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5wdXNoKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dHMiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJyZWxlYXNlQ29udGV4dE1hcCIsIm5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIiwibG9nIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImluY2x1ZGVzIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImdldFJlbGVhc2VOYW1lIiwiZG9uZSIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRlcGVuZGVuY3lSZWxlYXNlTmFtZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc0RlcGVuZGVuY3lSZWxlYXNlQ29udGV4dCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsb0JBQW9CO2VBQXBCQTs7SUFpREFDLHlCQUF5QjtlQUF6QkE7O0lBTWhCLE9BR0U7ZUFIRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZETyxTQUFTRCxxQkFBcUJFLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNsRixJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxPQUFPTCxXQUFXTSxPQUFPLElBQ3pCQyxjQUFjRixNQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJQyxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVEsS0FBSztRQUVuQk4sU0FBU007UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVDLG1EQUFxRFIsUUFBckRRO0lBRVJBLGlEQUFpRFYsWUFBWUUsU0FBUyxTQUFDTyxPQUFPRCxnQkFBbUI7UUFDL0YsSUFBSUMsT0FBTztZQUNUTixTQUFTTTtZQUVUO1FBQ0YsQ0FBQztRQUVELElBQUlELG1CQUFtQixJQUFJLEVBQUU7WUFDM0IsSUFBTSxBQUFFRyxNQUFRVCxRQUFSUztZQUVSQSxJQUFJRixLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaRixhQUFZO1lBRTlCSCxpQkFBaUIsQ0FBQ0csWUFBWSxHQUFHQztZQUVqQ0wsU0FBU007WUFFVDtRQUNGLENB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