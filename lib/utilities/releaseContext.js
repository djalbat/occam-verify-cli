"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createReleaseContext () {
        return createReleaseContext;
    },
    get initialiseReleaseContext () {
        return initialiseReleaseContext;
    },
    get releaseContextFromJSON () {
        return releaseContextFromJSON;
    },
    get releaseContextFromProject () {
        return releaseContextFromProject;
    }
});
var _necessary = require("necessary");
var _occamentities = require("occam-entities");
var _release = /*#__PURE__*/ _interop_require_default(require("../context/release"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var last = _necessary.arrayUtilities.last, isMetaJSONFileValid = _occamentities.metaJSONUtilities.isMetaJSONFileValid;
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
        log.info("Creating the '".concat(releaseName, "' context..."));
    } else {
        var lastDependentName = last(dependentNames), dependentName = lastDependentName; ///
        log.info("Creating the '".concat(releaseName, "' context given the '").concat(dependentName, "' dependant's '").concat(dependencyString, "' dependency..."));
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
            log.debug("...created the '".concat(releaseName, "' context."));
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
            log1.info("Initialising the '".concat(dependencyName, "' context..."));
            releaseContext.initialise(releaseContexts);
            log1.debug("...initialised the '".concat(dependencyName, "' context."));
        }
    }
}
function releaseContextFromJSON(json, context) {
    var log = context.log, name = json.name;
    context = json.context; ///
    var entries = json.entries;
    json = entries; ///
    entries = _occamentities.Entries.fromJSON(json);
    var contextJSON = context; ///
    json = contextJSON; ///
    var releaseContext = _release.default.fromLogNameJSONAndEntries(log, name, json, entries);
    return releaseContext;
}
function releaseContextFromProject(project, context) {
    var releaseContext = null;
    var metaJSONFile = project.getMetaJSONFile();
    if (metaJSONFile !== null) {
        var metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);
        if (metaJSONFileValid) {
            var log = context.log, name = project.getName(), json = null, entries = project.getEntries();
            releaseContext = _release.default.fromLogNameJSONAndEntries(log, name, json, entries);
        }
    }
    return releaseContext;
}
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
        log.warning("There is a cyclic dependency, '".concat(dependencyNamesString, "'."));
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
            log.warning("The '".concat(dependentName, "' dependent requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' was provided."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBBbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0Li4uYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWU7ICAvLy9cblxuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgfVxuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsb2cuZGVidWcoYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgbG9nLndhcm5pbmcoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICBsb2cuaW5mbyhgSW5pdGlhbGlzaW5nIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuLi5gKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBsb2cuZGVidWcoYC4uLmluaXRpYWxpc2VkIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICAoe2NvbnRleHR9ID0ganNvbik7IC8vL1xuXG4gIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAganNvbiA9IGVudHJpZXM7IC8vL1xuXG4gIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pO1xuXG4gIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dDsgIC8vL1xuXG4gIGpzb24gPSBjb250ZXh0SlNPTjsgLy8vXG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzKGxvZywgbmFtZSwganNvbiwgZW50cmllcyk7XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlID0gcHJvamVjdC5nZXRNZXRhSlNPTkZpbGUoKTtcblxuICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUpTT05GaWxlVmFsaWQgPSBpc01ldGFKU09ORmlsZVZhbGlkKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlVmFsaWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgICBlbnRyaWVzID0gcHJvamVjdC5nZXRFbnRyaWVzKCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3ksICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRGcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJpc01ldGFKU09ORmlsZVZhbGlkIiwibWV0YUpTT05VdGlsaXRpZXMiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJsb2ciLCJyZWxlYXNlQ29udGV4dE1hcCIsImRlcGVuZGVuY3lOYW1lIiwiZ2V0TmFtZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJlcnJvciIsInJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5Iiwic3VjY2VzcyIsImRlYnVnIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lTdHJpbmciLCJhc1N0cmluZyIsImRlcGVuZGVudE5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiaW5mbyIsImxhc3REZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50TmFtZSIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsIndhcm5pbmciLCJyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwianNvbiIsIm5hbWUiLCJlbnRyaWVzIiwiRW50cmllcyIsImZyb21KU09OIiwiY29udGV4dEpTT04iLCJSZWxlYXNlQ29udGV4dCIsImZyb21Mb2dOYW1lSlNPTkFuZEVudHJpZXMiLCJwcm9qZWN0IiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwibWV0YUpTT05GaWxlVmFsaWQiLCJnZXRFbnRyaWVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHQiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGgiLCJzaGlmdCIsInB1c2giLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJmb3JFYWNoRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJpbmNsdWRlcyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBVWdCQTtlQUFBQTs7UUEyRkFDO2VBQUFBOztRQTRCQUM7ZUFBQUE7O1FBcUJBQztlQUFBQTs7O3lCQXBKZTs2QkFDWTs4REFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxzQkFBd0JDLGdDQUFpQixDQUF6Q0Q7QUFFRCxTQUFTTixxQkFBcUJRLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7SUFDaEYsSUFBUUMsTUFBMkJGLFFBQTNCRSxLQUFLQyxvQkFBc0JILFFBQXRC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