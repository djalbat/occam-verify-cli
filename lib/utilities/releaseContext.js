"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
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
var last = _necessary.arrayUtilities.last;
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
    var releaseContextFromDependency = context.releaseContextFromDependency, dependencyString = dependency.asString(), dependentNamesLength = dependentNames.length;
    if (dependentNamesLength === 0) {
        log.debug("Creating the '".concat(releaseName, "' context..."));
    } else {
        var lastDependentName = last(dependentNames), dependentName = lastDependentName; ///
        log.debug("Creating the '".concat(releaseName, "' context given the '").concat(dependentName, "' dependant's '").concat(dependencyString, "' dependency..."));
    }
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
            log.info("...created the '".concat(releaseName, "' context."));
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
            var log = context.log, version = releaseContext.getVersion(), lastDependentName = last(dependentNames), dependentName = lastDependentName, versionString = version.toString(), dependencyString = dependency.asString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBBbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgIGxvZy5kZWJ1ZyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC4uLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lOyAgLy8vXG5cbiAgICBsb2cuZGVidWcoYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgZ2l2ZW4gdGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRhbnQncyAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeS4uLmApO1xuICB9XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yLCBzdWNjZXNzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGxvZy53YXJuaW5nKGAuLi51bmFibGUgdG8gY3JlYXRlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG5cbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9nLmluZm8oYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICBsb2cud2FybmluZyhgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dCBiZWNhdXNlIGl0IGhhcyBub3QgYmVlbiBjcmVhdGVkLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICBsb2cuZGVidWcoYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgbG9nLmluZm8oYC4uLmluaXRpYWxpc2VkIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dFxufTtcblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3k6ICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFZlcnNpb24gbWlzbWF0Y2g6IFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsInN1Y2Nlc3MiLCJkZWJ1ZyIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiYXNTdHJpbmciLCJkZXBlbmRlbnROYW1lc0xlbmd0aCIsImxlbmd0aCIsImxhc3REZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50TmFtZSIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsIndhcm5pbmciLCJpbmZvIiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkhBOzs7ZUFBQTs7O3lCQTNIK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsU0FBU0UscUJBQXFCQyxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3pFLElBQVFDLE1BQTJCRixRQUEzQkUsS0FBS0Msb0JBQXNCSCxRQUF0QkcsbUJBQ1BDLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQ2RHLGlCQUFpQkosaUJBQWlCLENBQUNHLFlBQVksSUFBSTtJQUV6RCxJQUFJQyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNQyxRQUFRLE1BQ1JDLDJCQUEyQkMsOEJBQThCSCxnQkFBZ0JULFlBQVlDLGdCQUFnQkM7UUFFM0csSUFBSVc7UUFFSixJQUFJRiwwQkFBMEI7WUFDNUJQLElBQUlVLEtBQUssQ0FBQyxBQUFDLHdCQUFtQyxPQUFaTixhQUFZO1lBRTlDSyxVQUFVO1FBQ1osT0FBTztZQUNMQSxVQUFVO1FBQ1o7UUFFQVYsU0FBU08sT0FBT0c7UUFFaEI7SUFDRjtJQUVBLElBQU0sQUFBRUUsK0JBQWlDYixRQUFqQ2EsOEJBQ0ZDLG1CQUFtQmhCLFdBQVdpQixRQUFRLElBQ3RDQyx1QkFBdUJqQixlQUFla0IsTUFBTTtJQUVsRCxJQUFJRCx5QkFBeUIsR0FBRztRQUM5QmQsSUFBSVUsS0FBSyxDQUFDLEFBQUMsaUJBQTRCLE9BQVpOLGFBQVk7SUFDekMsT0FBTztRQUNMLElBQU1ZLG9CQUFvQnZCLEtBQUtJLGlCQUN6Qm9CLGdCQUFnQkQsbUJBQW9CLEdBQUc7UUFFN0NoQixJQUFJVSxLQUFLLENBQUMsQUFBQyxpQkFBbURPLE9BQW5DYixhQUFZLHlCQUFzRFEsT0FBL0JLLGVBQWMsbUJBQWtDLE9BQWpCTCxrQkFBaUI7SUFDaEg7SUFFQUQsNkJBQTZCZixZQUFZRSxTQUFTLFNBQUNRLE9BQU9EO1FBQ3hELElBQUlDLE9BQU87WUFDVFAsU0FBU087WUFFVDtRQUNGO1FBRUEsSUFBTVksd0JBQXdCQywyQkFBMkJkLGdCQUFnQlQsWUFBWUU7UUFFckYsSUFBSSxDQUFDb0IsdUJBQXVCO1lBQzFCLElBQU1aLFVBQVEsTUFDUkcsVUFBVTtZQUVoQlYsU0FBU08sU0FBT0c7WUFFaEI7UUFDRjtRQUVBLElBQU1GLDJCQUEyQkMsOEJBQThCSCxnQkFBZ0JULFlBQVlDLGdCQUFnQkM7UUFFM0csSUFBSSxDQUFDUywwQkFBMEI7WUFDN0IsSUFBTUQsV0FBUSxNQUNSRyxXQUFVO1lBRWhCVixTQUFTTyxVQUFPRztZQUVoQjtRQUNGO1FBRUFSLGlCQUFpQixDQUFDRyxZQUFZLEdBQUdDO1FBRWpDZSxnQ0FBZ0N4QixZQUFZUyxnQkFBZ0JSLGdCQUFnQkMsU0FBUyxTQUFDUSxPQUFPRztZQUMzRixJQUFJSCxPQUFPO2dCQUNUUCxTQUFTTztnQkFFVDtZQUNGO1lBRUEsSUFBSSxDQUFDRyxTQUFTO2dCQUNaVCxJQUFJcUIsT0FBTyxDQUFDLEFBQUMsNEJBQXVDLE9BQVpqQixhQUFZO2dCQUVwREwsU0FBU08sT0FBT0c7Z0JBRWhCO1lBQ0Y7WUFFQVQsSUFBSXNCLElBQUksQ0FBQyxBQUFDLG1CQUE4QixPQUFabEIsYUFBWTtZQUV4Q0wsU0FBU08sT0FBT0c7UUFDbEI7SUFDRixHQUFHWDtBQUNMO0FBRUEsU0FBU3lCLHlCQUF5QjNCLFVBQVUsRUFBRUUsT0FBTztJQUNuRCxJQUFNLEFBQUVHLG9CQUFzQkgsUUFBdEJHLG1CQUNGQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUk7SUFFekQsSUFBSUMsbUJBQW1CLE1BQU07UUFDM0IsSUFBTSxBQUFFTCxNQUFRRixRQUFSRTtRQUVSQSxJQUFJcUIsT0FBTyxDQUFDLEFBQUMsNkJBQTJDLE9BQWZuQixnQkFBZTtJQUMxRCxPQUFPO1FBQ0wsSUFBTXNCLDRCQUE0Qm5CLGVBQWVvQixhQUFhO1FBRTlELElBQUksQ0FBQ0QsMkJBQTJCO1lBQzlCRSxvQ0FBb0M5QixZQUFZUyxnQkFBZ0JQO1lBRWhFLElBQU0sQUFBRUUsT0FBUUYsUUFBUkUsS0FDRjJCLGtCQUFrQkMsd0JBQXdCdkIsZ0JBQWdCSjtZQUVoRUQsS0FBSVUsS0FBSyxDQUFDLEFBQUMscUJBQW1DLE9BQWZSLGdCQUFlO1lBRTlDRyxlQUFld0IsVUFBVSxDQUFDRjtZQUUxQjNCLEtBQUlzQixJQUFJLENBQUMsQUFBQyx1QkFBcUMsT0FBZnBCLGdCQUFlO1FBQ2pEO0lBQ0Y7QUFDRjtJQUVBLFdBQWU7SUFDYlAsc0JBQUFBO0lBQ0E0QiwwQkFBQUE7QUFDRjtBQUVBLFNBQVNLLHdCQUF3QnZCLGNBQWMsRUFBRUosaUJBQWlCO0lBQ2hFLElBQU0wQixrQkFBa0IsRUFBRSxFQUNwQkcsMEJBQTBCekIsZ0JBQzFCMEIsMkJBQTJCO1FBQ3pCRDtLQUNEO0lBRVAsSUFBSUUsaUNBQWlDRCx5QkFBeUJoQixNQUFNO0lBRXBFLE1BQU9pQixpQ0FBaUMsRUFBRztRQUN6QyxJQUFNRiwyQkFBMEJDLHlCQUF5QkUsS0FBSyxJQUN4RDVCLG1CQUFpQnlCLDBCQUEwQixHQUFHO1FBRXBESCxnQkFBZ0JPLElBQUksQ0FBQzdCO1FBRXJCLElBQU04QixlQUFlOUIsaUJBQWUrQixlQUFlO1FBRW5ERCxhQUFhRSxpQkFBaUIsQ0FBQyxTQUFDekM7WUFDOUIsSUFBTU0saUJBQWlCTixXQUFXTyxPQUFPLElBQ25DQyxjQUFjRixnQkFDZEcsbUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxFQUMvQ2tDLHdDQUF3Q1gsZ0JBQWdCWSxRQUFRLENBQUNsQyxtQkFDakVtQyxpREFBaURULHlCQUF5QlEsUUFBUSxDQUFDbEM7WUFFekYsSUFBSSxDQUFDaUMseUNBQXlDLENBQUNFLGdEQUFnRDtnQkFDN0YsSUFBTVYsMEJBQTBCekIsa0JBQWdCLEdBQUc7Z0JBRW5EMEIseUJBQXlCRyxJQUFJLENBQUNKO1lBQ2hDO1FBQ0Y7UUFFQUUsaUNBQWlDRCx5QkFBeUJoQixNQUFNO0lBQ2xFO0lBRUEsT0FBT1k7QUFDVDtBQUVBLFNBQVNSLDJCQUEyQmQsY0FBYyxFQUFFVCxVQUFVLEVBQUVFLE9BQU87SUFDckUsSUFBTW9CLHdCQUF5QmIsbUJBQW1CO0lBRWxELElBQUksQ0FBQ2EsdUJBQXVCO1FBQzFCLElBQU0sQUFBRWxCLE1BQVFGLFFBQVJFLEtBQ0ZFLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ0MsY0FBY0YsZ0JBQWdCLEdBQUc7UUFFdkNGLElBQUlxQixPQUFPLENBQUMsQUFBQyxRQUFtQixPQUFaakIsYUFBWTtJQUNsQztJQUVBLE9BQU9jO0FBQ1Q7QUFFQSxTQUFTdUIsNEJBQTRCN0MsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU87SUFDdEUsSUFBTUksaUJBQWlCTixXQUFXTyxPQUFPLElBQ25DdUMsdUNBQXVDN0MsZUFBZTBDLFFBQVEsQ0FBQ3JDLGlCQUMvRHlDLHlCQUF5QkQsc0NBQXVDLEdBQUc7SUFFekUsSUFBSUMsd0JBQXdCO1FBQzFCLElBQU0sQUFBRTNDLE1BQVFGLFFBQVJFLEtBQ0Y0QyxxQkFBcUJDLE1BQU1oRCxpQkFDM0JpRCxrQkFBa0IsQUFDaEIscUJBQUdqRCx1QkFEYTtZQUVoQitDO1NBQ0QsR0FDREcsd0JBQXdCRCxnQkFBZ0JFLElBQUksQ0FBRTtRQUVwRGhELElBQUlxQixPQUFPLENBQUMsQUFBQyxrQ0FBdUQsT0FBdEIwQix1QkFBc0I7SUFDdEU7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU25DLDhCQUE4QkgsY0FBYyxFQUFFVCxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTztJQUN4RixJQUFJUywyQkFBMkI7SUFFL0IsSUFBTTBDLFVBQVU1QyxlQUFlNkMsVUFBVSxJQUNuQ0MsbUJBQW1CdkQsV0FBV3dELGlCQUFpQjtJQUVyRCxJQUFJRCxxQkFBcUIsTUFBTTtRQUM3QixJQUFNRSwrQkFBK0JKLFFBQVFLLHFCQUFxQixDQUFDSDtRQUVuRSxJQUFJLENBQUNFLDhCQUE4QjtZQUNqQyxJQUFNLEFBQUVyRCxNQUFRRixRQUFSRSxLQUNGdUQsVUFBVWxELGVBQWVtRCxVQUFVLElBQ25DeEMsb0JBQW9CdkIsS0FBS0ksaUJBQ3pCb0IsZ0JBQWdCRCxtQkFDaEJ5QyxnQkFBZ0JGLFFBQVFHLFFBQVEsSUFDaEM5QyxtQkFBbUJoQixXQUFXaUIsUUFBUTtZQUU1Q2IsSUFBSXFCLE9BQU8sQ0FBQyxBQUFDLDBCQUFtRVQsT0FBMUNLLGVBQWMsOEJBQXdGd0MsT0FBNUQ3QyxrQkFBaUIsNkNBQXlELE9BQWQ2QyxlQUFjO1lBRTFKbEQsMkJBQTJCO1FBQzdCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU2EsZ0NBQWdDeEIsVUFBVSxFQUFFUyxjQUFjLEVBQUVSLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3BHLElBQU1HLGlCQUFpQk4sV0FBV08sT0FBTyxJQUNuQ2dDLGVBQWU5QixlQUFlK0IsZUFBZTtJQUVuRHZDLGlCQUFpQixBQUFFLHFCQUFHQSx1QkFBTDtRQUFxQks7S0FBZ0IsR0FBRyxHQUFHO0lBRTVEaUMsYUFBYXdCLDZCQUE2QixDQUFDLFNBQUMvRCxZQUFZZ0UsTUFBTUM7UUFDNUQsSUFBTWxCLHlCQUF5QkYsNEJBQTRCN0MsWUFBWUM7UUFFdkUsSUFBSThDLHdCQUF3QjtZQUMxQixJQUFNckMsUUFBUSxNQUNSRyxVQUFVO1lBRWhCVixTQUFTTyxPQUFPRztZQUVoQlYsV0FBVztZQUVYOEQ7WUFFQTtRQUNGO1FBRUFsRSxxQkFBcUJDLFlBQVlDLGdCQUFnQkMsU0FBUyxTQUFDUSxPQUFPRztZQUNoRSxJQUFJSCxPQUFPO2dCQUNUUCxTQUFTTztnQkFFVFAsV0FBVztnQkFFWDhEO2dCQUVBO1lBQ0Y7WUFFQSxJQUFJLENBQUNwRCxTQUFTO2dCQUNaVixTQUFTTyxPQUFPRztnQkFFaEJWLFdBQVc7Z0JBRVg4RDtnQkFFQTtZQUNGO1lBRUFEO1FBQ0Y7SUFDRixHQUFHQztJQUVILFNBQVNBO1FBQ1AsSUFBSTlELGFBQWEsTUFBTTtZQUNyQixJQUFNTyxRQUFRLE1BQ1JHLFVBQVU7WUFFaEJWLFNBQVNPLE9BQU9HO1FBQ2xCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNpQixvQ0FBb0M5QixVQUFVLEVBQUVTLGNBQWMsRUFBRVAsT0FBTztJQUM5RSxJQUFNcUMsZUFBZTlCLGVBQWUrQixlQUFlO0lBRW5ERCxhQUFhRSxpQkFBaUIsQ0FBQyxTQUFDekM7UUFDOUIyQix5QkFBeUIzQixZQUFZRTtJQUN2QztBQUNGIn0=