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
function initialiseReleaseContext(dependency, dependentName, verified, context) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        return;
    }
    var initialised = releaseContext.isInitialised();
    if (initialised) {
        return;
    }
    var releaseContextVerified = releaseContext.isVerified();
    if (verified) {
        if (!releaseContextVerified) {
            var log = context.log;
            log.error("Unable to initialise the '".concat(releaseName, "' dependency's context because its '").concat(dependentName, "' dependent is a package."));
            return;
        }
    }
    verified = releaseContextVerified; ///
    dependentName = releaseName; ///
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, dependentName, verified, context);
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
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies();
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
    }, function() {
        var error = null;
        callback(error);
    });
}
function retrieveDependencyReleaseContexts(dependency, context) {
    var dependencyReleaseContexts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName], dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        var dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
        if (releaseContext === null) {
            return;
        }
        var dependencyReleaseContextsIncludesReleaseContext = dependencyReleaseContexts.includes(releaseContext);
        if (dependencyReleaseContextsIncludesReleaseContext) {
            return;
        }
        retrieveDependencyReleaseContexts(dependency, context, dependencyReleaseContexts);
        dependencyReleaseContexts.push(releaseContext);
    });
    return dependencyReleaseContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMgfSA9IGNvbnRleHQ7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeUFuZERlcGVuZGVudE5hbWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGxvZy5lcnJvcihgVGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZSBjb3VsZCBub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lLCB2ZXJpZmllZCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICBpZiAoaW5pdGlhbGlzZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaXNWZXJpZmllZCgpO1xuXG4gIGlmICh2ZXJpZmllZCkge1xuICAgIGlmICghcmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICAgIGxvZyAuZXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGRlcGVuZGVuY3kncyBjb250ZXh0IGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dFZlcmlmaWVkOyAgLy8vXG5cbiAgZGVwZW5kZW50TmFtZSA9IHJlbGVhc2VOYW1lOyAgLy8vXG5cbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWUsIHZlcmlmaWVkLCBjb250ZXh0KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy5lcnJvcihgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgY29udGV4dCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IFtdKSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHJpZXZlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCBjb250ZXh0LCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5QW5kRGVwZW5kZW50TmFtZXMiLCJsb2ciLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZGVwZW5kZW50TmFtZSIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsImlzVmVyaWZpZWQiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJmb3JFYWNoRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiaW5jbHVkZXMiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxvQkFBb0I7ZUFBcEJBOztJQXVDQUMsd0JBQXdCO2VBQXhCQTs7SUEyQ2hCLE9BR0U7ZUFIRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxGTyxTQUFTRCxxQkFBcUJFLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNsRixJQUFNLEFBQUVDLG9CQUFzQkYsUUFBdEJFLG1CQUNGQyxpQkFBaUJMLFdBQVdNLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUksSUFBSTtJQUU3RCxJQUFJQyxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCLElBQU1DLFFBQVEsSUFBSTtRQUVsQk4sU0FBU007UUFFVDtJQUNGLENBQUM7SUFFRCxJQUFNLEFBQUVDLGdEQUFrRFIsUUFBbERRO0lBRVJBLDhDQUE4Q1YsWUFBWUMsZ0JBQWdCQyxTQUFTLFNBQUNPLE9BQU9ELGdCQUFtQjtRQUM1RyxJQUFJQyxPQUFPO1lBQ1ROLFNBQVNNO1lBRVQ7UUFDRixDQUFDO1FBRURMLGlCQUFpQixDQUFDRyxZQUFZLEdBQUdDO1FBRWpDLElBQUlBLG1CQUFtQixJQUFJLEVBQUU7WUFDM0IsSUFBTSxBQUFFRyxNQUFRVCxRQUFSUztZQUVSQSxJQUFJRixLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaRixhQUFZO1lBRTlCSixTQUFTTTtZQUVUO1FBQ0YsQ0FBQztRQUVERyxnQ0FBZ0NaLFlBQVlDLGdCQUFnQkMsU0FBU0M7SUFDdkUsR0FBR0Q7QUFDTDtBQUVPLFNBQVNILHlCQUF5QkMsVUFBVSxFQUFFYSxhQUFhLEVBQUVDLFFBQVEsRUFBRVosT0FBTyxFQUFFO0lBQ3JGLElBQU0sQUFBRUUsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSSxJQUFJO0lBRTdELElBQUlDLG1CQUFtQixJQUFJLEVBQUU7UUFDM0I7SUFDRixDQUFDO0lBRUQsSUFBTU8sY0FBY1AsZUFBZVEsYUFBYTtJQUVoRCxJQUFJRCxhQUFhO1FBQ2Y7SUFDRixDQUFDO0lBRUQsSUFBTUUseUJBQXlCVCxlQUFlVSxVQUFVO0lBRXhELElBQUlKLFVBQVU7UUFDWixJQUFJLENBQUNHLHdCQUF3QjtZQUMzQixJQUFNLEFBQUVOLE1BQVFULFFBQVJTO1lBRVJBLElBQUtGLEtBQUssQ0FBQyxBQUFDLDZCQUE4RUksT0FBbEROLGFBQVksd0NBQW9ELE9BQWRNLGVBQWM7WUFFeEc7UUFDRixDQUFDO0lBQ0gsQ0FBQztJQUVEQyxXQUFXRyx3QkFBeUIsR0FBRztJQUV2Q0osZ0JBQWdCTixhQUFjLEdBQUc7SUFFakMsSUFBTVksZUFBZVgsZUFBZVksZUFBZTtJQUVuREQsYUFBYUUsaUJBQWlCLENBQUMsU0FBQ3JCLFlBQWU7UUFDN0NELHlCQUF5QkMsWUFBWWEsZUFBZUMsVUFBVVo7SUFDaEU7SUFFQSxJQUFNb0IsNEJBQTRCQyxrQ0FBa0N2QixZQUFZRTtJQUVoRk0sZUFBZWdCLFVBQVUsQ0FBQ0Y7QUFDNUI7SUFFQSxXQUFlO0lBQ2J4QixzQkFBQUE7SUFDQUMsMEJBQUFBO0FBQ0Y7QUFFQSxTQUFTMEIsNEJBQTRCekIsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRTtJQUN4RSxJQUFNRyxpQkFBaUJMLFdBQVdNLE9BQU8sSUFDbkNvQix1Q0FBdUN6QixlQUFlMEIsUUFBUSxDQUFDdEIsaUJBQy9EdUIseUJBQXlCRixzQ0FBdUMsR0FBRztJQUV6RSxJQUFJRSx3QkFBd0I7UUFDMUIsSUFBTSxBQUFFakIsTUFBUVQsUUFBUlMsS0FDRmtCLHFCQUFxQkMsTUFBTTdCLGlCQUMzQjhCLGtCQUFrQixBQUNkLG1CQUFHOUIsdUJBRFc7WUFFaEI0QjtTQUNELEdBQ0RHLHdCQUF3QkQsZ0JBQWdCRSxJQUFJLENBQUU7UUFFcER0QixJQUFJRixLQUFLLENBQUMsQUFBQyxrQ0FBdUQsT0FBdEJ1Qix1QkFBc0I7SUFDcEUsQ0FBQztJQUVELE9BQU9KO0FBQ1Q7QUFFQSxTQUFTaEIsZ0NBQWdDWixVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDdEYsSUFBTSxBQUFFQyxvQkFBc0JGLFFBQXRCRSxtQkFDRkMsaUJBQWlCTCxXQUFXTSxPQUFPLElBQ25DQyxjQUFjRixnQkFDZEcsaUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxFQUMvQ1ksZUFBZVgsZUFBZVksZUFBZTtJQUVuRG5CLGlCQUFpQixBQUFFLG1CQUFHQSx1QkFBTDtRQUFxQkk7S0FBZ0IsR0FBRyxHQUFHO0lBRTVEYyxhQUFhZSw2QkFBNkIsQ0FBQyxTQUFDbEMsWUFBWW1DLE1BQU1DLE1BQVM7UUFDckUsSUFBTVIseUJBQXlCSCw0QkFBNEJ6QixZQUFZQyxnQkFBZ0JDO1FBRXZGLElBQUkwQix3QkFBd0I7WUFDMUIsSUFBTW5CLFFBQVEsSUFBSTtZQUVsQk4sU0FBU007WUFFVDtRQUNGLENBQUM7UUFFRFgscUJBQXFCRSxZQUFZQyxnQkFBZ0JDLFNBQVMsU0FBQ08sT0FBVTtZQUNuRSxJQUFJQSxPQUFPO2dCQUNUTixTQUFTTTtnQkFFVDtZQUNGLENBQUM7WUFFRDBCO1FBQ0Y7SUFDRixHQUFHLFdBQU07UUFDUCxJQUFNMUIsUUFBUSxJQUFJO1FBRWxCTixTQUFTTTtJQUNYO0FBQ0Y7QUFFQSxTQUFTYyxrQ0FBa0N2QixVQUFVLEVBQUVFLE9BQU8sRUFBa0M7UUFBaENvQiw0QkFBQUEsaUVBQTRCLEVBQUU7SUFDNUYsSUFBTSxBQUFFbEIsb0JBQXNCRixRQUF0QkUsbUJBQ0ZDLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksRUFDL0NZLGVBQWVYLGVBQWVZLGVBQWU7SUFFbkRELGFBQWFFLGlCQUFpQixDQUFDLFNBQUNyQixZQUFlO1FBQzdDLElBQU1LLGlCQUFpQkwsV0FBV00sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSSxJQUFJO1FBRTdELElBQUlDLG1CQUFtQixJQUFJLEVBQUU7WUFDM0I7UUFDRixDQUFDO1FBRUQsSUFBTTZCLGtEQUFrRGYsMEJBQTBCSyxRQUFRLENBQUNuQjtRQUUzRixJQUFJNkIsaURBQWlEO1lBQ25EO1FBQ0YsQ0FBQztRQUVEZCxrQ0FBa0N2QixZQUFZRSxTQUFTb0I7UUFFdkRBLDBCQUEwQmdCLElBQUksQ0FBQzlCO0lBQ2pDO0lBRUEsT0FBT2M7QUFDVCJ9