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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBsb2cuZGVidWcoYEFscmVhZHkgY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICBsb2cuZGVidWcoYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgZ2l2ZW4gdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5Li4uYCk7XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBsb2cud2FybmluZyhgLi4udW5hYmxlIHRvIGNyZWF0ZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgICBsb2cuaW5mbyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luaXRpYWxpc2VkID0gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c0luaXRpYWxpc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgbG9nLCB2ZXJib3NlIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhgSW5pdGlhbGlzaW5nIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuLi5gKTtcblxuICAgICAgICByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIHZlcmJvc2UpO1xuXG4gICAgICAgIHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgP1xuICAgICAgICAgIGxvZy5pbmZvKGAuLi5pbml0aWFsaXNlZCB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0LmApIDpcbiAgICAgICAgICAgIGxvZy53YXJuaW5nKGAuLi51bmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRcbiAgICAgICAgXTtcblxuICBsZXQgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcblxuICB3aGlsZSAocmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKCFyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ICYmICFyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5wdXNoKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiBQZXJoYXBzIHRoZSAnbWV0YS5qc29uJyBmaWxlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC4gT3IgdGhlcmUgY291bGQgYmUgYSBkZXBlbmRlbmN5IG1pc21hdGNoLmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0Q3JlYXRlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy53YXJuaW5nKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5OiAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IHRydWU7XG5cbiAgY29uc3QgZW50cmllcyA9IHJlbGVhc2VDb250ZXh0LmdldEVudHJpZXMoKSxcbiAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSBlbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy53YXJuaW5nKGBWZXJzaW9uIG1pc21hdGNoOiBUaGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCByZXF1aXJlcyB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kgYnV0IGEgY29udGV4dCB3aXRoIHZlcnNpb24gJyR7dmVyc2lvblN0cmluZ30nIHdhcyBwcm92aWRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGRvbmUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGRvbmUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzSW5pdGlhbGlzZWQgPSBkZXBlbmRlbmNpZXMuZXZlcnlEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZDtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImxvZyIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiZXJyb3IiLCJzdWNjZXNzIiwiZGVidWciLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVN0cmluZyIsImFzU3RyaW5nIiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsImluZm8iLCJyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwidmVyYm9zZSIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwibGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwibGFzdERlcGVuZGVudE5hbWUiLCJsYXN0IiwiZGVwZW5kZW50TmFtZSIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiLCJldmVyeURlcGVuZGVuY3kiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsb0JBQW9CO2VBQXBCQTs7SUF3SGhCLE9BR0U7ZUFIRjs7SUFwQ2dCQyx3QkFBd0I7ZUFBeEJBOzs7cUJBdEZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLFNBQVNELHFCQUFxQkUsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUNoRixJQUFRQyxNQUEyQkYsUUFBM0JFLEtBQUtDLG9CQUFzQkgsUUFBdEJHLG1CQUNQQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLGNBQWNGLGdCQUNkRyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLElBQUk7SUFFekQsSUFBSUMsbUJBQW1CLE1BQU07UUFDM0IsSUFBTUMsMkJBQTJCQyw4QkFBOEJGLGdCQUFnQlQsWUFBWUMsZ0JBQWdCQztRQUUzRyxJQUFNVSxRQUFRO1FBRWQsSUFBSUM7UUFFSixJQUFJSCwwQkFBMEI7WUFDNUJOLElBQUlV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