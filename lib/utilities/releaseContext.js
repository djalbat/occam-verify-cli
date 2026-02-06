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
var _occammodel = require("occam-model");
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
var last = _necessary.arrayUtilities.last, isMetaJSONFileValid = _occammodel.metaJSONUtilities.isMetaJSONFileValid;
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
    var log = context.log, callback = context.callback, name = json.name;
    context = json.context; ///
    var entries = json.entries;
    json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
    var contextJSON = context; ///
    json = contextJSON; ///
    var releaseContext = _release.default.fromLogNameJSONEntriesAndCallback(log, name, json, entries, callback);
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
            var log = context.log, callback = context.callback, name = project.getName(), json = null, entries = project.getEntries();
            releaseContext = _release.default.fromLogNameJSONEntriesAndCallback(log, name, json, entries, callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBBbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0Li4uYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWU7ICAvLy9cblxuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgfVxuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBsb2cud2FybmluZyhgLi4udW5hYmxlIHRvIGNyZWF0ZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgeyBuYW1lIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0OyAgLy8vXG5cbiAganNvbiA9IGNvbnRleHRKU09OOyAvLy9cblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNBbmRDYWxsYmFjayhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgIGxvZy5pbmZvKGBJbml0aWFsaXNpbmcgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC4uLmApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QocHJvamVjdCwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZUNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFKU09ORmlsZSA9IHByb2plY3QuZ2V0TWV0YUpTT05GaWxlKCk7XG5cbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZVZhbGlkID0gaXNNZXRhSlNPTkZpbGVWYWxpZChtZXRhSlNPTkZpbGUpO1xuXG4gICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBuYW1lID0gcHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05FbnRyaWVzQW5kQ2FsbGJhY2sobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21KU09OLFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQsXG4gIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3Rcbn07XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRcbiAgICAgICAgXTtcblxuICBsZXQgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcblxuICB3aGlsZSAocmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKCFyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ICYmICFyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5wdXNoKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiBQZXJoYXBzIHRoZSAnbWV0YS5qc29uJyBmaWxlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC4gT3IgdGhlcmUgY291bGQgYmUgYSBkZXBlbmRlbmN5IG1pc21hdGNoLmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0Q3JlYXRlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy53YXJuaW5nKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5LCAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IHRydWU7XG5cbiAgY29uc3QgZW50cmllcyA9IHJlbGVhc2VDb250ZXh0LmdldEVudHJpZXMoKSxcbiAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSBlbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCByZXF1aXJlcyB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kgYnV0IGEgY29udGV4dCB3aXRoIHZlcnNpb24gJyR7dmVyc2lvblN0cmluZ30nIHdhcyBwcm92aWRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIGRlcGVuZGVuY2llcy5hc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSwgbmV4dCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMpO1xuXG4gICAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGRvbmUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGRvbmUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4geyAgLy8vXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0IiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiaXNNZXRhSlNPTkZpbGVWYWxpZCIsIm1ldGFKU09OVXRpbGl0aWVzIiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwiZXJyb3IiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsInN1Y2Nlc3MiLCJkZWJ1ZyIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiYXNTdHJpbmciLCJkZXBlbmRlbnROYW1lc0xlbmd0aCIsImxlbmd0aCIsImluZm8iLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ3YXJuaW5nIiwianNvbiIsIm5hbWUiLCJlbnRyaWVzIiwiRW50cmllcyIsImZyb21KU09OIiwiY29udGV4dEpTT04iLCJSZWxlYXNlQ29udGV4dCIsImZyb21Mb2dOYW1lSlNPTkVudHJpZXNBbmRDYWxsYmFjayIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJwcm9qZWN0IiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwibWV0YUpTT05GaWxlVmFsaWQiLCJnZXRFbnRyaWVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHQiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGgiLCJzaGlmdCIsInB1c2giLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJmb3JFYWNoRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJpbmNsdWRlcyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJuZXh0IiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBVWdCQTtlQUFBQTs7UUFpS2hCO2VBQUE7O1FBakRnQkM7ZUFBQUE7O1FBckJBQztlQUFBQTs7UUFpREFDO2VBQUFBOzs7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