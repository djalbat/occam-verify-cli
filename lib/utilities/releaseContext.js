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
        var error = null, success = true;
        log.debug("Already created the '".concat(releaseName, "' context."));
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
            releaseContextMap[releaseName] = releaseContext;
            log.info("...created the '".concat(releaseName, "' context."));
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
    }, function() {
        if (callback !== null) {
            var error = null, success = true;
            callback(error, success);
        }
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICBsb2cuZGVidWcoYEFscmVhZHkgY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpO1xuXG4gIGxvZy5kZWJ1ZyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcblxuICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQsIChlcnJvciwgcmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yLCBzdWNjZXNzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGxvZy53YXJuaW5nKGAuLi51bmFibGUgdG8gY3JlYXRlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG5cbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICAgIGxvZy5pbmZvKGAuLi5jcmVhdGVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgbG9nLndhcm5pbmcoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQpIHtcbiAgICAgICAgY29uc3QgeyBsb2csIHZlcmJvc2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgbG9nLmRlYnVnKGBJbml0aWFsaXNpbmcgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC4uLmApO1xuXG4gICAgICAgIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgdmVyYm9zZSk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA/XG4gICAgICAgICAgbG9nLmluZm8oYC4uLmluaXRpYWxpc2VkIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCkgOlxuICAgICAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFZlcnNpb24gbWlzbWF0Y2g6IFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCAoKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQgPSBkZXBlbmRlbmNpZXMuZXZlcnlEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZDtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImxvZyIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwic3VjY2VzcyIsImRlYnVnIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lTdHJpbmciLCJhc1N0cmluZyIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsImluZm8iLCJyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwidmVyYm9zZSIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwibGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwibGFzdERlcGVuZGVudE5hbWUiLCJsYXN0IiwiZGVwZW5kZW50TmFtZSIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiLCJldmVyeURlcGVuZGVuY3kiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsb0JBQW9CO2VBQXBCQTs7SUErR2hCLE9BR0U7ZUFIRjs7SUFwQ2dCQyx3QkFBd0I7ZUFBeEJBOzs7cUJBN0VLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLFNBQVNELHFCQUFxQkUsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUNoRixJQUFRQyxNQUEyQkYsUUFBM0JFLEtBQUtDLG9CQUFzQkgsUUFBdEJHLG1CQUNQQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUk7SUFFekQsSUFBSUMsbUJBQW1CLE1BQU07UUFDM0IsSUFBTUMsUUFBUSxNQUNSQyxVQUFVO1FBRWhCUCxJQUFJUSxLQUFLLENBQUMsQUFBQyx3QkFBbUMsT0FBWkosYUFBWTtRQUU5Q0wsU0FBU08sT0FBT0M7UUFFaEI7SUFDRjtJQUVBLElBQU0sQUFBRUUsK0JBQWlDWCxRQUFqQ1csOEJBQ0ZDLG1CQUFtQmQsV0FBV2UsUUFBUTtJQUU1Q1gsSUFBSVEsS0FBSyxDQUFDLEFBQUMsaUJBQW1ERSxPQUFuQ04sYUFBWSx5QkFBd0MsT0FBakJNLGtCQUFpQjtJQUUvRUQsNkJBQTZCYixZQUFZRSxTQUFTLFNBQUNRLE9BQU9EO1FBQ3hELElBQUlDLE9BQU87WUFDVFAsU0FBU087WUFFVDtRQUNGO1FBRUEsSUFBTU0sd0JBQXdCQywyQkFBMkJSLGdCQUFnQlQsWUFBWUU7UUFFckYs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