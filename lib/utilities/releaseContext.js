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
        var error = null, releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
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
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        var log = context.log;
        log.warning("Unable to initialise the '".concat(dependencyName, "' context because it has not been created."));
    } else {
        var releaseContextInitialised = releaseContext.isInitialised();
        if (!releaseContextInitialised) {
            initialiseDependencyReleaseContexts(dependency, releaseContext, context);
            var log1 = context.log, releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);
            log1.debug("Initialising the '".concat(dependencyName, "' context..."));
            releaseContext.initialise(releaseContexts);
            log1.info("...initialised the '".concat(dependencyName, "' context."));
        }
    }
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
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBBbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgbG9nLmRlYnVnKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeS4uLmApO1xuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgbG9nLmluZm8oYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICBsb2cud2FybmluZyhgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dCBiZWNhdXNlIGl0IGhhcyBub3QgYmVlbiBjcmVhdGVkLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICBsb2cuZGVidWcoYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgbG9nLmluZm8oYC4uLmluaXRpYWxpc2VkIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFZlcnNpb24gbWlzbWF0Y2g6IFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsInN1Y2Nlc3MiLCJkZWJ1ZyIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiYXNTdHJpbmciLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImluZm8iLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dCIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCIsImxlbmd0aCIsInNoaWZ0IiwicHVzaCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsImxhc3REZXBlbmRlbnROYW1lIiwibGFzdCIsImRlcGVuZGVudE5hbWUiLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLG9CQUFvQjtlQUFwQkE7O0lBK0doQixPQUdFO2VBSEY7O0lBNUJnQkMsd0JBQXdCO2VBQXhCQTs7O3FCQXJGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxTQUFTRCxxQkFBcUJFLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7SUFDaEYsSUFBUUMsTUFBMkJGLFFBQTNCRSxLQUFLQyxvQkFBc0JILFFBQXRCRyxtQkFDUEMsaUJBQWlCTixXQUFXTyxPQUFPLElBQ25DQyxjQUFjRixnQkFDZEcsaUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxJQUFJO0lBRXpELElBQUlDLG1CQUFtQixNQUFNO1FBQzNCLElBQU1DLFFBQVEsTUFDUkMsMkJBQTJCQyw4QkFBOEJILGdCQUFnQlQsWUFBWUMsZ0JBQWdCQztRQUUzRyxJQUFJVztRQUVKLElBQUlGLDBCQUEwQjtZQUM1QlAsSUFBSVUsS0FBSyxDQUFDLEFBQUMsd0JBQW1DLE9BQVpOLGFBQVk7WUFFOUNLLFVBQVU7UUFDWixPQUFPO1lBQ0xBLFVBQVU7UUFDWjtRQUVBVixTQUFTTyxPQUFPRztRQUVoQjtJQUNGO0lBRUEsSUFBTSxBQUFFRSwrQkFBaUNiLFFBQWpDYSw4QkFDRkMsbUJBQW1CaEIsV0FBV2lCLFFBQVE7SUFFNUNiLElBQUlVLEtBQUssQ0FBQyxBQUFDLGlCQUFtREUsT0FBbkNSLGFBQVkseUJBQXdDLE9BQWpCUSxrQkFBaUI7SUFFL0VELDZCQUE2QmYsWUFBWUUsU0FBUyxTQUFDUSxPQUFPRDtRQUN4RCxJQUFJQyxPQUFPO1lBQ1RQLFNBQVNPO1lBRVQ7UUFDRjtRQUVBLElBQU1RLHdCQUF3QkMsMkJBQTJCVixnQkFBZ0JULFlBQVlFO1FBRXJGLElBQUksQ0FBQ2dCLHVCQUF1QjtZQUMxQixJQUFNUixVQUFRLE1BQ1JHLFVBQVU7WUFFaEJWLFNBQVNPLFNBQU9HO1lBRWhCO1FBQ0Y7UUFFQSxJQUFNRiwyQkFBMkJDLDhCQUE4QkgsZ0JBQWdCVCxZQUFZQyxnQkFBZ0JDO1FBRTNHLElBQUksQ0FBQ1MsMEJBQTBCO1lBQzdCLElBQU1ELFdBQVEsTUFDUkcsV0FBVTtZQUVoQlYsU0FBU08sVUFBT0c7WUFFaEI7UUFDRjtRQUVBUixpQkFBaUIsQ0FBQ0csWUFBWSxHQUFHQztRQUVqQ0wsSUFBSWdCLElBQUksQ0FBQyxBQUFDLG1CQUE4QixPQUFaWixhQUFZO1FBRXhDYSxnQ0FBZ0NyQixZQUFZUyxnQkFBZ0JSLGdCQUFnQkMsU0FBUyxTQUFDUSxPQUFPRztZQUMzRixJQUFJSCxPQUFPO2dCQUNUUCxTQUFTTztnQkFFVDtZQUNGO1lBRUEsSUFBSSxDQUFDRyxTQUFTO2dCQUNaVCxJQUFJa0IsT0FBTyxDQUFDLEFBQUMsNEJBQXVDLE9BQVpkLGFBQVk7Z0JBRXBETCxTQUFTTyxPQUFPRztnQkFFaEI7WUFDRjtZQUVBVixTQUFTTyxPQUFPRztRQUNsQjtJQUNGLEdBQUdYO0FBQ0w7QUFFTyxTQUFTSCx5QkFBeUJDLFVBQVUsRUFBRUUsT0FBTztJQUMxRCxJQUFNLEFBQUVHLG9CQUFzQkgsUUFBdEJHLG1CQUNGQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUk7SUFFekQsSUFBSUMsbUJBQW1CLE1BQU07UUFDM0IsSUFBTSxBQUFFTCxNQUFRRixRQUFSRTtRQUVSQSxJQUFJa0IsT0FBTyxDQUFDLEFBQUMsNkJBQTJDLE9BQWZoQixnQkFBZTtJQUMxRCxPQUFPO1FBQ0wsSUFBTWlCLDRCQUE0QmQsZUFBZWUsYUFBYTtRQUU5RCxJQUFJLENBQUNELDJCQUEyQjtZQUM5QkUsb0NBQW9DekIsWUFBWVMsZ0JBQWdCUDtZQUVoRSxJQUFNLEFBQUVFLE9BQVFGLFFBQVJFLEtBQ0ZzQixrQkFBa0JDLHdCQUF3QmxCLGdCQUFnQko7WUFFaEVELEtBQUlVLEtBQUssQ0FBQyxBQUFDLHFCQUFtQyxPQUFmUixnQkFBZTtZQUU5Q0csZUFBZW1CLFVBQVUsQ0FBQ0Y7WUFFMUJ0QixLQUFJZ0IsSUFBSSxDQUFDLEFBQUMsdUJBQXFDLE9BQWZkLGdCQUFlO1FBQ2pEO0lBQ0Y7QUFDRjtJQUVBLFdBQWU7SUFDYlIsc0JBQUFBO0lBQ0FDLDBCQUFBQTtBQUNGO0FBRUEsU0FBUzRCLHdCQUF3QmxCLGNBQWMsRUFBRUosaUJBQWlCO0lBQ2hFLElBQU1xQixrQkFBa0IsRUFBRSxFQUNwQkcsMEJBQTBCcEIsZ0JBQzFCcUIsMkJBQTJCO1FBQ3pCRDtLQUNEO0lBRVAsSUFBSUUsaUNBQWlDRCx5QkFBeUJFLE1BQU07SUFFcEUsTUFBT0QsaUNBQWlDLEVBQUc7UUFDekMsSUFBTUYsMkJBQTBCQyx5QkFBeUJHLEtBQUssSUFDeER4QixtQkFBaUJvQiwwQkFBMEIsR0FBRztRQUVwREgsZ0JBQWdCUSxJQUFJLENBQUN6QjtRQUVyQixJQUFNMEIsZUFBZTFCLGlCQUFlMkIsZUFBZTtRQUVuREQsYUFBYUUsaUJBQWlCLENBQUMsU0FBQ3JDO1lBQzlCLElBQU1NLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLG1CQUFpQkosaUJBQWlCLENBQUNHLFlBQVksRUFDL0M4Qix3Q0FBd0NaLGdCQUFnQmEsUUFBUSxDQUFDOUIsbUJBQ2pFK0IsaURBQWlEVix5QkFBeUJTLFFBQVEsQ0FBQzlCO1lBRXpGLElBQUksQ0FBQzZCLHlDQUF5QyxDQUFDRSxnREFBZ0Q7Z0JBQzdGLElBQU1YLDBCQUEwQnBCLGtCQUFnQixHQUFHO2dCQUVuRHFCLHlCQUF5QkksSUFBSSxDQUFDTDtZQUNoQztRQUNGO1FBRUFFLGlDQUFpQ0QseUJBQXlCRSxNQUFNO0lBQ2xFO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNQLDJCQUEyQlYsY0FBYyxFQUFFVCxVQUFVLEVBQUVFLE9BQU87SUFDckUsSUFBTWdCLHdCQUF5QlQsbUJBQW1CO0lBRWxELElBQUksQ0FBQ1MsdUJBQXVCO1FBQzFCLElBQU0sQUFBRWQsTUFBUUYsUUFBUkUsS0FDRkUsaUJBQWlCTixXQUFXTyxPQUFPLElBQ25DQyxjQUFjRixnQkFBZ0IsR0FBRztRQUV2Q0YsSUFBSWtCLE9BQU8sQ0FBQyxBQUFDLFFBQW1CLE9BQVpkLGFBQVk7SUFDbEM7SUFFQSxPQUFPVTtBQUNUO0FBRUEsU0FBU3VCLDRCQUE0QnpDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPO0lBQ3RFLElBQU1JLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ21DLHVDQUF1Q3pDLGVBQWVzQyxRQUFRLENBQUNqQyxpQkFDL0RxQyx5QkFBeUJELHNDQUF1QyxHQUFHO0lBRXpFLElBQUlDLHdCQUF3QjtRQUMxQixJQUFNLEFBQUV2QyxNQUFRRixRQUFSRSxLQUNGd0MscUJBQXFCQyxNQUFNNUMsaUJBQzNCNkMsa0JBQWtCLEFBQ2hCLHFCQUFHN0MsdUJBRGE7WUFFaEIyQztTQUNELEdBQ0RHLHdCQUF3QkQsZ0JBQWdCRSxJQUFJLENBQUU7UUFFcEQ1QyxJQUFJa0IsT0FBTyxDQUFDLEFBQUMsa0NBQXVELE9BQXRCeUIsdUJBQXNCO0lBQ3RFO0lBRUEsT0FBT0o7QUFDVDtBQUVBLFNBQVMvQiw4QkFBOEJILGNBQWMsRUFBRVQsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU87SUFDeEYsSUFBSVMsMkJBQTJCO0lBRS9CLElBQU1zQyxVQUFVeEMsZUFBZXlDLFVBQVUsSUFDbkNDLG1CQUFtQm5ELFdBQVdvRCxpQkFBaUI7SUFFckQsSUFBSUQscUJBQXFCLE1BQU07UUFDN0IsSUFBTUUsK0JBQStCSixRQUFRSyxxQkFBcUIsQ0FBQ0g7UUFFbkUsSUFBSSxDQUFDRSw4QkFBOEI7WUFDakMsSUFBTSxBQUFFakQsTUFBUUYsUUFBUkUsS0FDRm1ELFVBQVU5QyxlQUFlK0MsVUFBVSxJQUNuQ0Msb0JBQW9CQyxJQUFBQSxXQUFJLEVBQUN6RCxpQkFDekIwRCxnQkFBZ0JGLG1CQUNoQkcsZ0JBQWdCTCxRQUFRTSxRQUFRLElBQ2hDN0MsbUJBQW1CaEIsV0FBV2lCLFFBQVE7WUFFNUNiLElBQUlrQixPQUFPLENBQUMsQUFBQywwQkFBbUVOLE9BQTFDMkMsZUFBYyw4QkFBd0ZDLE9BQTVENUMsa0JBQWlCLDZDQUF5RCxPQUFkNEMsZUFBYztZQUUxSmpELDJCQUEyQjtRQUM3QjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNVLGdDQUFnQ3JCLFVBQVUsRUFBRVMsY0FBYyxFQUFFUixjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUNwRyxJQUFNRyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkM0QixlQUFlMUIsZUFBZTJCLGVBQWU7SUFFbkRuQyxpQkFBaUIsQUFBRSxxQkFBR0EsdUJBQUw7UUFBcUJLO0tBQWdCLEdBQUcsR0FBRztJQUU1RDZCLGFBQWEyQiw2QkFBNkIsQ0FBQyxTQUFDOUQsWUFBWStELE1BQU1DO1FBQzVELElBQU1yQix5QkFBeUJGLDRCQUE0QnpDLFlBQVlDO1FBRXZFLElBQUkwQyx3QkFBd0I7WUFDMUIsSUFBTWpDLFFBQVEsTUFDUkcsVUFBVTtZQUVoQlYsU0FBU08sT0FBT0c7WUFFaEJWLFdBQVc7WUFFWDZEO1lBRUE7UUFDRjtRQUVBbEUscUJBQXFCRSxZQUFZQyxnQkFBZ0JDLFNBQVMsU0FBQ1EsT0FBT0c7WUFDaEUsSUFBSUgsT0FBTztnQkFDVFAsU0FBU087Z0JBRVRQLFdBQVc7Z0JBRVg2RDtnQkFFQTtZQUNGO1lBRUEsSUFBSSxDQUFDbkQsU0FBUztnQkFDWlYsU0FBU08sT0FBT0c7Z0JBRWhCVixXQUFXO2dCQUVYNkQ7Z0JBRUE7WUFDRjtZQUVBRDtRQUNGO0lBQ0YsR0FBR0M7SUFFSCxTQUFTQTtRQUNQLElBQUk3RCxhQUFhLE1BQU07WUFDckIsSUFBTU8sUUFBUSxNQUNSRyxVQUFVO1lBRWhCVixTQUFTTyxPQUFPRztRQUNsQjtJQUNGO0FBQ0Y7QUFFQSxTQUFTWSxvQ0FBb0N6QixVQUFVLEVBQUVTLGNBQWMsRUFBRVAsT0FBTztJQUM5RSxJQUFNaUMsZUFBZTFCLGVBQWUyQixlQUFlO0lBRW5ERCxhQUFhRSxpQkFBaUIsQ0FBQyxTQUFDckM7UUFDOUJELHlCQUF5QkMsWUFBWUU7SUFDdkM7QUFDRiJ9