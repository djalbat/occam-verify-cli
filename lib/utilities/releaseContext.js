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
    },
    initialiseReleaseContext: function() {
        return initialiseReleaseContext;
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
    var log = context.log, releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext !== null) {
        var releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
        var error = null;
        var success;
        if (releaseMatchesDependency) {
            log.debug("Already created the '".concat(releaseName, "' context."));
            success = true;
        } else {
            success = false;
        }
        callback(error, success);
        return;
    }
    var releaseContextFromDependency = context.releaseContextFromDependency, dependencyString = dependency.asString();
    log.debug("Creating the '".concat(releaseName, "' context given the '").concat(dependencyString, "' dependency..."));
    releaseContextFromDependency(dependency, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        var releaseContextCreated = checkReleaseContextCreated(releaseContext, dependency, context);
        if (!releaseContextCreated) {
            var _$error = null, success = false;
            callback(_$error, success);
            return;
        }
        var releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
        if (!releaseMatchesDependency) {
            var _$error1 = null, success1 = false;
            callback(_$error1, success1);
            return;
        }
        releaseContextMap[releaseName] = releaseContext;
        log.info("...created the '".concat(releaseName, "' context."));
        createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, function(error, success) {
            if (error) {
                callback(error);
                return;
            }
            if (!success) {
                log.warning("...unable to create the '".concat(releaseName, "' context."));
                callback(error, success);
                return;
            }
            callback(error, success);
        });
    }, context);
}
function initialiseReleaseContext(dependency, context) {
    var releaseContextInitialised = false;
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        var log = context.log;
        log.warning("Unable to initialise the '".concat(dependencyName, "' context because it has not been created."));
    } else {
        releaseContextInitialised = releaseContext.isInitialised();
        if (!releaseContextInitialised) {
            var dependencyReleaseContextsInitialised = initialiseDependencyReleaseContexts(dependency, releaseContext, context);
            if (dependencyReleaseContextsInitialised) {
                var log1 = context.log, verbose = context.verbose, releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);
                log1.debug("Initialising the '".concat(dependencyName, "' context..."));
                releaseContextInitialised = releaseContext.initialise(releaseContexts, verbose);
                releaseContextInitialised ? log1.info("...initialised the '".concat(dependencyName, "' context.")) : log1.warning("...unable to initialise the '".concat(dependencyName, "' context."));
            }
        }
    }
    return releaseContextInitialised;
}
var _default = {
    createReleaseContext: createReleaseContext,
    initialiseReleaseContext: initialiseReleaseContext
};
function retrieveReleaseContexts(releaseContext, releaseContextMap) {
    var releaseContexts = [], remainingReleaseContext = releaseContext, remainingReleaseContexts = [
        remainingReleaseContext
    ];
    var remainingReleaseContextsLength = remainingReleaseContexts.length;
    while(remainingReleaseContextsLength > 0){
        var remainingReleaseContext1 = remainingReleaseContexts.shift(), _$releaseContext = remainingReleaseContext1; ///
        releaseContexts.push(_$releaseContext);
        var dependencies = _$releaseContext.getDependencies();
        dependencies.forEachDependency(function(dependency) {
            var dependencyName = dependency.getName(), releaseName = dependencyName, _$releaseContext = releaseContextMap[releaseName], releaseContextsIncludesReleaseContext = releaseContexts.includes(_$releaseContext), remainingReleaseContextsIncludesReleaseContext = remainingReleaseContexts.includes(_$releaseContext);
            if (!releaseContextsIncludesReleaseContext && !remainingReleaseContextsIncludesReleaseContext) {
                var remainingReleaseContext = _$releaseContext; ///
                remainingReleaseContexts.push(remainingReleaseContext);
            }
        });
        remainingReleaseContextsLength = remainingReleaseContexts.length;
    }
    return releaseContexts;
}
function checkReleaseContextCreated(releaseContext, dependency, context) {
    var releaseContextCreated = releaseContext !== null;
    if (!releaseContextCreated) {
        var log = context.log, dependencyName = dependency.getName(), releaseName = dependencyName; ///
        log.warning("The '".concat(releaseName, "' context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch."));
    }
    return releaseContextCreated;
}
function checkCyclicDependencyExists(dependency, dependentNames, context) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var log = context.log, firstDependentName = first(dependentNames), dependencyNames = _to_consumable_array(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        log.warning("There is a cyclic dependency: '".concat(dependencyNamesString, "'."));
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
            log.warning("Version mismatch: The '".concat(dependentName, "' dependent requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' was provided."));
            releaseMatchesDependency = false;
        }
    }
    return releaseMatchesDependency;
}
function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, callback) {
    var dependencyName = dependency.getName(), dependencies = releaseContext.getDependencies();
    dependentNames = _to_consumable_array(dependentNames).concat([
        dependencyName
    ]); ///
    dependencies.asynchronousForEachDependency(function(dependency, next, done) {
        var cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames);
        if (cyclicDependencyExists) {
            var error = null, success = false;
            callback(error, success);
            callback = null;
            done();
            return;
        }
        createReleaseContext(dependency, dependentNames, context, function(error, success) {
            if (error) {
                callback(error);
                callback = null;
                done();
                return;
            }
            if (!success) {
                callback(error, success);
                callback = null;
                done();
                return;
            }
            next();
        });
    }, done);
    function done() {
        if (callback !== null) {
            var error = null, success = true;
            callback(error, success);
        }
    }
}
function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
    var dependencies = releaseContext.getDependencies(), dependencyReleaseContextsInitialised = dependencies.everyDependency(function(dependency) {
        var releaseContextInitialised = initialiseReleaseContext(dependency, context);
        if (releaseContextInitialised) {
            return true;
        }
    });
    return dependencyReleaseContextsInitialised;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBsb2cuZGVidWcoYEFscmVhZHkgY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICBsb2cuZGVidWcoYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgZ2l2ZW4gdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5Li4uYCk7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBsb2cuaW5mbyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBsb2cud2FybmluZyhgLi4udW5hYmxlIHRvIGNyZWF0ZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgbG9nLndhcm5pbmcoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQpIHtcbiAgICAgICAgY29uc3QgeyBsb2csIHZlcmJvc2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgbG9nLmRlYnVnKGBJbml0aWFsaXNpbmcgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC4uLmApO1xuXG4gICAgICAgIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgdmVyYm9zZSk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA/XG4gICAgICAgICAgbG9nLmluZm8oYC4uLmluaXRpYWxpc2VkIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCkgOlxuICAgICAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFZlcnNpb24gbWlzbWF0Y2g6IFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luaXRpYWxpc2VkO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJlcnJvciIsInN1Y2Nlc3MiLCJkZWJ1ZyIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiYXNTdHJpbmciLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImluZm8iLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ2ZXJib3NlIiwicmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHQiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGgiLCJsZW5ndGgiLCJzaGlmdCIsInB1c2giLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJmb3JFYWNoRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJpbmNsdWRlcyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJsYXN0RGVwZW5kZW50TmFtZSIsImxhc3QiLCJkZXBlbmRlbnROYW1lIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSIsImV2ZXJ5RGVwZW5kZW5jeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxvQkFBb0I7ZUFBcEJBOztJQXdIaEIsT0FHRTtlQUhGOztJQXBDZ0JDLHdCQUF3QjtlQUF4QkE7OztxQkF0Rks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsU0FBU0QscUJBQXFCRSxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ2hGLElBQVFDLE1BQTJCRixRQUEzQkUsS0FBS0Msb0JBQXNCSCxRQUF0QkcsbUJBQ1BDLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSTtJQUV6RCxJQUFJQyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNQywyQkFBMkJDLDhCQUE4QkYsZ0JBQWdCVCxZQUFZQyxnQkFBZ0JDO1FBRTNHLElBQU1VLFFBQVE7UUFFZCxJQUFJQztRQUVKLElBQUlILDBCQUEwQjtZQUM1Qk4sSUFBSVUsS0FB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