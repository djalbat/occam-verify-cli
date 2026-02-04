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
    var log = context.log, name = json.name;
    context = json.context; ///
    var entries = json.entries;
    json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBBbHJlYWR5IGNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0Li4uYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWU7ICAvLy9cblxuICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgfVxuXG4gIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCwgKGVycm9yLCByZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBsb2cud2FybmluZyhgLi4udW5hYmxlIHRvIGNyZWF0ZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG4gICAgfSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICB7IG5hbWUgfSA9IGpzb247XG5cbiAgKHtjb250ZXh0fSA9IGpzb24pOyAvLy9cblxuICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gIGpzb24gPSBlbnRyaWVzOyAvLy9cblxuICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTtcblxuICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQ7ICAvLy9cblxuICBqc29uID0gY29udGV4dEpTT047IC8vL1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpO1xuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgbG9nLndhcm5pbmcoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgbG9nLmluZm8oYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgbG9nLmRlYnVnKGAuLi5pbml0aWFsaXNlZCB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlID0gcHJvamVjdC5nZXRNZXRhSlNPTkZpbGUoKTtcblxuICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUpTT05GaWxlVmFsaWQgPSBpc01ldGFKU09ORmlsZVZhbGlkKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlVmFsaWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgICBlbnRyaWVzID0gcHJvamVjdC5nZXRFbnRyaWVzKCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tSlNPTixcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0XG59O1xuXG5mdW5jdGlvbiByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0XG4gICAgICAgIF07XG5cbiAgbGV0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5zaGlmdCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHQ7ICAvLy9cblxuICAgIHJlbGVhc2VDb250ZXh0cy5wdXNoKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICghcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCAmJiAhcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMucHVzaChyZW1haW5pbmdSZWxlYXNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKTtcblxuICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZTsgLy8vXG5cbiAgICBsb2cud2FybmluZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBjb3VsZCBub3QgYmUgY3JlYXRlZC4gUGVyaGFwcyB0aGUgJ21ldGEuanNvbicgZmlsZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuIE9yIHRoZXJlIGNvdWxkIGJlIGEgZGVwZW5kZW5jeSBtaXNtYXRjaC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cud2FybmluZyhgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeSwgJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSB0cnVlO1xuXG4gIGNvbnN0IGVudHJpZXMgPSByZWxlYXNlQ29udGV4dC5nZXRFbnRyaWVzKCksXG4gICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCk7XG5cbiAgaWYgKHNob3J0ZW5lZFZlcnNpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uID0gZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpO1xuXG4gICAgICBsb2cud2FybmluZyhgVGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyB3YXMgcHJvdmlkZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBkZXBlbmRlbmNpZXMuYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3ksIG5leHQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzKTtcblxuICAgIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yLCBzdWNjZXNzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG51bGwsXG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEZyb21KU09OIiwicmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImxvZyIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImVycm9yIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJzdWNjZXNzIiwiZGVidWciLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVN0cmluZyIsImFzU3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmZvIiwibGFzdERlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnROYW1lIiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsImpzb24iLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzIiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldEVudHJpZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dCIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCIsInNoaWZ0IiwicHVzaCIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImZvckVhY2hEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm5leHQiLCJkb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVZ0JBO2VBQUFBOztRQWlLaEI7ZUFBQTs7UUFqRGdCQztlQUFBQTs7UUFyQkFDO2VBQUFBOztRQWlEQUM7ZUFBQUE7Ozt5QkFwSmU7MEJBQ1k7OERBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU0sQUFB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