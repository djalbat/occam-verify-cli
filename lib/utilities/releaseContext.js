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
    initialiseReleaseContext: function() {
        return initialiseReleaseContext;
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
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var error = null;
        callback(error);
        return;
    }
    var releaseContextFromDependencyAndDependentNames = context.releaseContextFromDependencyAndDependentNames;
    releaseContextFromDependencyAndDependentNames(dependency, dependentNames, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        releaseContextMap[releaseName] = releaseContext;
        if (releaseContext === null) {
            var log = context.log;
            log.error("The '".concat(releaseName, "' package could not be created."));
            callback(error);
            return;
        }
        createDependencyReleaseContexts(dependency, dependentNames, context, callback);
    }, context);
}
function initialiseReleaseContext(dependency, context) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        return;
    }
    var initialised = releaseContext.isInitialised();
    if (initialised) {
        return;
    }
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, context);
    });
    var dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependency, context);
    releaseContext.initialise(dependencyReleaseContexts);
}
var _default = {
    createReleaseContext: createReleaseContext,
    initialiseReleaseContext: initialiseReleaseContext
};
function checkCyclicDependencyExists(dependency, dependentNames, context) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var log = context.log, firstDependentName = first(dependentNames), dependencyNames = _toConsumableArray(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        log.error("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies(), done = function() {
        var error = null;
        callback(error);
    };
    dependentNames = _toConsumableArray(dependentNames).concat([
        dependencyName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);
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
function retrieveDependencyReleaseContexts(dependency, context) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        return;
    }
    var dependencyReleaseContextsIncludesReleaseContext = dependencyReleaseContexts.includes(releaseContext);
    if (dependencyReleaseContextsIncludesReleaseContext) {
        return;
    }
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        retrieveDependencyReleaseContexts(dependency, context, dependencyReleaseContexts);
    });
    dependencyReleaseContexts.push(releaseContext);
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGxvZy5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZSBjb3VsZCBub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gIGlmIChpbml0aWFsaXNlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy5lcnJvcihgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZG9uZSA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH1cblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgcmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuICB9KTtcblxuICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMiLCJsb2ciLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImluY2x1ZGVzIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImRvbmUiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsb0JBQW9CO2VBQXBCQTs7SUF1Q0FDLHdCQUF3QjtlQUF4QkE7O0lBMkJoQixPQUdFO2VBSEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsRU8sU0FBU0QscUJBQXFCRSxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVB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