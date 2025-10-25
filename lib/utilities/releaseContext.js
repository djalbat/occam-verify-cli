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
    get releaseContextFromDependency () {
        return releaseContextFromDependency;
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
var _occamfilesystem = require("occam-file-system");
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
var last = _necessary.arrayUtilities.last, loadProject = _occamfilesystem.fileSystemUtilities.loadProject, concatenatePaths = _necessary.pathUtilities.concatenatePaths, isMetaJSONFileValid = _occamentities.metaJSONUtilities.isMetaJSONFileValid, readFile = _necessary.fileSystemUtilities.readFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists;
function releaseContextFromDependency(dependency, context, callback) {
    var projectsDirectoryPath = process.cwd(), dependencyName = dependency.getName(), entryPath = concatenatePaths(projectsDirectoryPath, dependencyName), entryExists = checkEntryExists(entryPath);
    if (!entryExists) {
        var _$error = null, releaseContext = null;
        callback(_$error, releaseContext);
        return;
    }
    var releaseContext1 = null;
    try {
        var entryFile = isEntryFile(entryPath);
        if (entryFile) {
            var filePath = entryPath, content = readFile(filePath), jsonString = content, json = JSON.parse(jsonString);
            releaseContext1 = releaseContextFromJSON(json, context);
        } else {
            var projectName = dependencyName, project = loadProject(projectName, projectsDirectoryPath);
            if (project !== null) {
                releaseContext1 = releaseContextFromProject(project, context);
            }
        }
    } catch (error) {
        callback(error, releaseContext1);
        return;
    }
    var _$error1 = null;
    callback(_$error1, releaseContext1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgYXMgb2NjYW1GaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIGFzIG5lY2Vzc2FyeUZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGxvYWRQcm9qZWN0IH0gPSBvY2NhbUZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGlzTWV0YUpTT05GaWxlVmFsaWQgfSA9IG1ldGFKU09OVXRpbGl0aWVzLFxuICAgICAgeyByZWFkRmlsZSwgaXNFbnRyeUZpbGUsIGNoZWNrRW50cnlFeGlzdHMgfSA9IG5lY2Vzc2FyeUZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IHByb2Nlc3MuY3dkKCksIC8vL1xuICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgZW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRlcGVuZGVuY3lOYW1lKSxcbiAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKTtcblxuICBpZiAoIWVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgcmVsZWFzZUNvbnRleHQgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBlbnRyeVBhdGgsIC8vL1xuICAgICAgICBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBqc29uU3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICBwcm9qZWN0ID0gbG9hZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChwcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2FsbGJhY2soZXJyb3IsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGVycm9yID0gbnVsbDtcblxuICBjYWxsYmFjayhlcnJvciwgcmVsZWFzZUNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICAoe2NvbnRleHR9ID0ganNvbik7IC8vL1xuXG4gIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAganNvbiA9IGVudHJpZXM7IC8vL1xuXG4gIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pO1xuXG4gIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dDsgIC8vL1xuXG4gIGpzb24gPSBjb250ZXh0SlNPTjsgLy8vXG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzKGxvZywgbmFtZSwganNvbiwgZW50cmllcyk7XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlID0gcHJvamVjdC5nZXRNZXRhSlNPTkZpbGUoKTtcblxuICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUpTT05GaWxlVmFsaWQgPSBpc01ldGFKU09ORmlsZVZhbGlkKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlVmFsaWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICBuYW1lID0gcHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICBlbnRyaWVzID0gcHJvamVjdC5nZXRFbnRyaWVzKCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxvZywgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBsb2cuZGVidWcoYEFscmVhZHkgY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuXG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNMZW5ndGggPSBkZXBlbmRlbnROYW1lcy5sZW5ndGg7XG5cbiAgaWYgKGRlcGVuZGVudE5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgbG9nLmluZm8oYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuLi5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZTsgIC8vL1xuXG4gICAgbG9nLmluZm8oYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgZ2l2ZW4gdGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRhbnQncyAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeS4uLmApO1xuICB9XG5cbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0LCAoZXJyb3IsIHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbnVsbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgKGVycm9yLCBzdWNjZXNzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGxvZy53YXJuaW5nKGAuLi51bmFibGUgdG8gY3JlYXRlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG5cbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHN1Y2Nlc3MpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9nLmRlYnVnKGAuLi5jcmVhdGVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9KTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgIGxvZy5pbmZvKGBJbml0aWFsaXNpbmcgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC4uLmApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3ksICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgZGVwZW5kZW5jaWVzLmFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5LCBuZXh0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcyk7XG5cbiAgICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICBjYWxsYmFjayhlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQsIChlcnJvciwgc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcblxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBzdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0IiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwibG9hZFByb2plY3QiLCJvY2NhbUZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsInJlYWRGaWxlIiwibmVjZXNzYXJ5RmlsZVN5c3RlbVV0aWxpdGllcyIsImlzRW50cnlGaWxlIiwiY2hlY2tFbnRyeUV4aXN0cyIsImRlcGVuZGVuY3kiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwiZW50cnlQYXRoIiwiZW50cnlFeGlzdHMiLCJlcnJvciIsInJlbGVhc2VDb250ZXh0IiwiZW50cnlGaWxlIiwiZmlsZVBhdGgiLCJjb250ZW50IiwianNvblN0cmluZyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzIiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwibWV0YUpTT05GaWxlVmFsaWQiLCJnZXRFbnRyaWVzIiwiZGVwZW5kZW50TmFtZXMiLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VOYW1lIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJzdWNjZXNzIiwiZGVidWciLCJkZXBlbmRlbmN5U3RyaW5nIiwiYXNTdHJpbmciLCJkZXBlbmRlbnROYW1lc0xlbmd0aCIsImxlbmd0aCIsImluZm8iLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ3YXJuaW5nIiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5IiwibmV4dCIsImRvbmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVHZ0JBO2VBQUFBOztRQTJGQUM7ZUFBQUE7O1FBbkxBQztlQUFBQTs7UUE4Q0FDO2VBQUFBOztRQXFCQUM7ZUFBQUE7Ozt5QkFoRmU7NkJBQ1k7K0JBQ3FCOzhEQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLGNBQWdCQyxvQ0FBd0IsQ0FBeENELGFBQ0YsQUFBRUUsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0YsQUFBRUUsc0JBQXdCQyxnQ0FBaUIsQ0FB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