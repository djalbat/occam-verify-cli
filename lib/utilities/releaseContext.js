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
    get default () {
        return _default;
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
var _default = {
    createReleaseContext: createReleaseContext,
    releaseContextFromJSON: releaseContextFromJSON,
    initialiseReleaseContext: initialiseReleaseContext,
    releaseContextFromProject: releaseContextFromProject
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBBbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0Li4uYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWU7ICAvLy9cblxuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgfVxuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsb2cuZGVidWcoYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBuYW1lIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0OyAgLy8vXG5cbiAganNvbiA9IGNvbnRleHRKU09OOyAvLy9cblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkFuZEVudHJpZXMobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgbG9nLmluZm8oYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgbG9nLmRlYnVnKGAuLi5pbml0aWFsaXNlZCB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlID0gcHJvamVjdC5nZXRNZXRhSlNPTkZpbGUoKTtcblxuICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUpTT05GaWxlVmFsaWQgPSBpc01ldGFKU09ORmlsZVZhbGlkKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlVmFsaWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgICBlbnRyaWVzID0gcHJvamVjdC5nZXRFbnRyaWVzKCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tSlNPTixcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0XG59O1xuXG5mdW5jdGlvbiByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0XG4gICAgICAgIF07XG5cbiAgbGV0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5zaGlmdCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHQ7ICAvLy9cblxuICAgIHJlbGVhc2VDb250ZXh0cy5wdXNoKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICghcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCAmJiAhcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMucHVzaChyZW1haW5pbmdSZWxlYXNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKTtcblxuICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZTsgLy8vXG5cbiAgICBsb2cud2FybmluZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBjb3VsZCBub3QgYmUgY3JlYXRlZC4gUGVyaGFwcyB0aGUgJ21ldGEuanNvbicgZmlsZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuIE9yIHRoZXJlIGNvdWxkIGJlIGEgZGVwZW5kZW5jeSBtaXNtYXRjaC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cud2FybmluZyhgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeSwgJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSB0cnVlO1xuXG4gIGNvbnN0IGVudHJpZXMgPSByZWxlYXNlQ29udGV4dC5nZXRFbnRyaWVzKCksXG4gICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCk7XG5cbiAgaWYgKHNob3J0ZW5lZFZlcnNpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uID0gZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpO1xuXG4gICAgICBsb2cud2FybmluZyhgVGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyB3YXMgcHJvdmlkZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yLCBzdWNjZXNzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEZyb21KU09OIiwicmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImxvZyIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJzdWNjZXNzIiwiZGVidWciLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVN0cmluZyIsImFzU3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmZvIiwibGFzdERlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnROYW1lIiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsImpzb24iLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzIiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldEVudHJpZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dCIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCIsInNoaWZ0IiwicHVzaCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVZ0JBO2VBQUFBOztRQWlLaEI7ZUFBQTs7UUFqRGdCQztlQUFBQTs7UUFyQkFDO2VBQUFBOztRQWlEQUM7ZUFBQUE7Ozt5QkFwSmU7NkJBQ1k7OERBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU0sQUFBRUMsT0FBU0Ms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