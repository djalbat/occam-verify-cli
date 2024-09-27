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
    var log = context.log, releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), dependencyString = dependency.asString(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    log.debug("Creating the '".concat(releaseName, "' context given the '").concat(dependencyString, "' dependency..."));
    if (releaseContext !== null) {
        var error = null;
        log.debug("...already created the '".concat(releaseName, "' context."));
        callback(error);
        return;
    }
    var releaseContextFromDependency = context.releaseContextFromDependency;
    releaseContextFromDependency(dependency, context, function(error, releaseContext) {
        if (error) {
            callback(error);
            return;
        }
        var releaseContextCreated = checkReleaseContextCreated(releaseContext, dependency, context);
        if (!releaseContextCreated) {
            var _$error = null;
            callback(_$error);
            return;
        }
        var releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
        if (!releaseMatchesDependency) {
            var _$error1 = null;
            callback(_$error1);
            return;
        }
        releaseContextMap[releaseName] = releaseContext;
        log.info("...created the '".concat(releaseName, "' context."));
        createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, function(error) {
            if (error) {
                callback(error);
                return;
            }
            callback(error);
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
function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
    var dependencies = releaseContext.getDependencies(), dependencyReleaseContextsInitialised = dependencies.everyDependency(function(dependency) {
        var releaseContextInitialised = initialiseReleaseContext(dependency, context);
        if (releaseContextInitialised) {
            return true;
        }
    });
    return dependencyReleaseContextsInitialised;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBsb2cuZGVidWcoYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgZ2l2ZW4gdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5Li4uYCk7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgbG9nLmRlYnVnKGAuLi5hbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9ID0gY29udGV4dDtcblxuICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQsIChlcnJvciwgcmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGxvZy5pbmZvKGAuLi5jcmVhdGVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0pO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICBsb2cud2FybmluZyhgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dCBiZWNhdXNlIGl0IGhhcyBub3QgYmVlbiBjcmVhdGVkLmApO1xuICB9IGVsc2Uge1xuICAgIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZCA9IGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZCkge1xuICAgICAgICBjb25zdCB7IGxvZywgdmVyYm9zZSB9ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgICBsb2cuZGVidWcoYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCB2ZXJib3NlKTtcblxuICAgICAgICByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID9cbiAgICAgICAgICBsb2cuaW5mbyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKSA6XG4gICAgICAgICAgICBsb2cud2FybmluZyhgLi4udW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0XG59O1xuXG5mdW5jdGlvbiByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0XG4gICAgICAgIF07XG5cbiAgbGV0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5zaGlmdCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHQ7ICAvLy9cblxuICAgIHJlbGVhc2VDb250ZXh0cy5wdXNoKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICghcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCAmJiAhcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMucHVzaChyZW1haW5pbmdSZWxlYXNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKTtcblxuICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZTsgLy8vXG5cbiAgICBsb2cud2FybmluZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBjb3VsZCBub3QgYmUgY3JlYXRlZC4gUGVyaGFwcyB0aGUgJ21ldGEuanNvbicgZmlsZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuIE9yIHRoZXJlIGNvdWxkIGJlIGEgZGVwZW5kZW5jeSBtaXNtYXRjaC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cud2FybmluZyhgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeTogJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSB0cnVlO1xuXG4gIGNvbnN0IGVudHJpZXMgPSByZWxlYXNlQ29udGV4dC5nZXRFbnRyaWVzKCksXG4gICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCk7XG5cbiAgaWYgKHNob3J0ZW5lZFZlcnNpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uID0gZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpO1xuXG4gICAgICBsb2cud2FybmluZyhgVmVyc2lvbiBtaXNtYXRjaDogVGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyB3YXMgcHJvdmlkZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luaXRpYWxpc2VkID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJsb2ciLCJyZWxlYXNlQ29udGV4dE1hcCIsImRlcGVuZGVuY3lOYW1lIiwiZ2V0TmFtZSIsImRlcGVuZGVuY3lTdHJpbmciLCJhc1N0cmluZyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJkZWJ1ZyIsImVycm9yIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJpbmZvIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJ3YXJuaW5nIiwiaXNJbml0aWFsaXNlZCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwidmVyYm9zZSIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwibGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwibGFzdERlcGVuZGVudE5hbWUiLCJsYXN0IiwiZGVwZW5kZW50TmFtZSIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiLCJldmVyeURlcGVuZGVuY3kiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsb0JBQW9CO2VBQXBCQTs7SUFvR2hCLE9BR0U7ZUFIRjs7SUFwQ2dCQyx3QkFBd0I7ZUFBeEJBOzs7cUJBbEVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLFNBQVNELHFCQUFxQkUsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUNoRixJQUFRQyxNQUEyQkYsUUFBM0JFLEtBQUtDLG9CQUFzQkgsUUFBdEJHLG1CQUNQQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLG1CQUFtQlIsV0FBV1MsUUFBUSxJQUN0Q0MsY0FBY0osZ0JBQ2RLLGlCQUFpQk4saUJBQWlCLENBQUNLLFlBQVksSUFBSTtJQUV6RE4sSUFBSVEsS0FBSyxDQUFDLEFBQUMsaUJBQW1ESixPQUFuQ0UsYUFBWSx5QkFBd0MsT0FBakJGLGtCQUFpQjtJQUUvRSxJQUFJRyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNRSxRQUFRO1FB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