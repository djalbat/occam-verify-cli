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
var _occamlanguages = require("occam-languages");
var _occammodel = require("occam-model");
var _dependency = require("../utilities/dependency");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var last = _necessary.arrayUtilities.last, isMetaJSONFileValid = _occammodel.metaJSONUtilities.isMetaJSONFileValid;
function createReleaseContext(dependency, dependentNames, context) {
    return _async_to_generator(function() {
        var success, log, releaseContextMap, dependencyName, releaseName, releaseContext, releaseMatchesDependency, dependencyString, dependentNamesLength, lastDependentName, dependentName, releaseContextFromDependency, releaseContext1, releaseContextCreated, releaseMatchesDependency1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    success = false;
                    log = context.log, releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
                    if (!(releaseContext !== null)) return [
                        3,
                        1
                    ];
                    releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
                    if (releaseMatchesDependency) {
                        log.debug("The '".concat(releaseName, "' context has already been created."));
                        success = true;
                    }
                    return [
                        3,
                        5
                    ];
                case 1:
                    dependencyString = dependency.asString(), dependentNamesLength = dependentNames.length;
                    if (dependentNamesLength === 0) {
                        log.info("Creating the '".concat(releaseName, "' context..."));
                    } else {
                        lastDependentName = last(dependentNames), dependentName = lastDependentName; ///
                        log.info("Creating the '".concat(releaseName, "' context given the '").concat(dependentName, "' dependant's '").concat(dependencyString, "' dependency..."));
                    }
                    releaseContextFromDependency = context.releaseContextFromDependency;
                    return [
                        4,
                        releaseContextFromDependency(dependency, context)
                    ];
                case 2:
                    releaseContext1 = _state.sent(), releaseContextCreated = checkReleaseContextCreated(releaseContext1, dependency, context);
                    if (!releaseContextCreated) return [
                        3,
                        4
                    ];
                    releaseMatchesDependency1 = checkReleaseMatchesDependency(releaseContext1, dependency, dependentNames, context);
                    if (!releaseMatchesDependency1) return [
                        3,
                        4
                    ];
                    releaseContextMap[releaseName] = releaseContext1;
                    return [
                        4,
                        createDependencyReleaseContexts(dependency, releaseContext1, dependentNames, context)
                    ];
                case 3:
                    success = _state.sent();
                    _state.label = 4;
                case 4:
                    success ? log.debug("...created the '".concat(releaseName, "' context.")) : log.warning("...unable to create the '".concat(releaseName, "' context."));
                    _state.label = 5;
                case 5:
                    return [
                        2,
                        success
                    ];
            }
        });
    })();
}
function releaseContextFromJSON(json, context) {
    var log = context.log, callback = context.callback, name = json.name;
    context = json.context; ///
    var entries = json.entries;
    json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
    var contextJSON = context; ///
    json = contextJSON; ///
    var releaseContext = _occamlanguages.ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
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
            releaseContext = _occamlanguages.ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
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
function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context) {
    return _async_to_generator(function() {
        var success, dependencyName, dependencies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dependencyName = dependency.getName(), dependencies = releaseContext.getDependencies();
                    dependentNames = _to_consumable_array(dependentNames).concat([
                        dependencyName
                    ]); ///
                    return [
                        4,
                        (0, _dependency.asyncEveryDependency)(dependencies, function(dependency) {
                            return _async_to_generator(function() {
                                var success, cyclicDependencyExists;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            success = false;
                                            cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);
                                            if (!!cyclicDependencyExists) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                createReleaseContext(dependency, dependentNames, context)
                                            ];
                                        case 1:
                                            success = _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            return [
                                                2,
                                                success
                                            ];
                                    }
                                });
                            })();
                        })
                    ];
                case 1:
                    success = _state.sent();
                    return [
                        2,
                        success
                    ];
            }
        });
    })();
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
    var shortenedVersion = dependency.getShortedVersion();
    if (shortenedVersion !== null) {
        var entriesMatchShortenedVersion = releaseContext.matchShortenedVersion(shortenedVersion);
        if (!entriesMatchShortenedVersion) {
            var log = context.log, version = releaseContext.getVersion(), lastDependentName = last(dependentNames), dependentName = lastDependentName, versionString = version.toString(), dependencyString = dependency.asString();
            log.warning("The '".concat(dependentName, "' dependent requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' was provided."));
            releaseMatchesDependency = false;
        }
    }
    return releaseMatchesDependency;
}
function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBFbnRyaWVzLCBtZXRhSlNPTlV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuXG5pbXBvcnQgeyBhc3luY0V2ZXJ5RGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVwZW5kZW5jeVwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc01ldGFKU09ORmlsZVZhbGlkIH0gPSBtZXRhSlNPTlV0aWxpdGllcztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgeyBsb2csIHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgbG9nLmRlYnVnKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZC5gKTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCksXG4gICAgICAgICAgZGVwZW5kZW50TmFtZXNMZW5ndGggPSBkZXBlbmRlbnROYW1lcy5sZW5ndGg7XG5cbiAgICBpZiAoZGVwZW5kZW50TmFtZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0Li4uYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWU7ICAvLy9cblxuICAgICAgbG9nLmluZm8oYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgZ2l2ZW4gdGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRhbnQncyAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeS4uLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9ID0gY29udGV4dCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IGF3YWl0IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSwgY29udGV4dCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSkge1xuICAgICAgICByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gPSByZWxlYXNlQ29udGV4dDtcblxuICAgICAgICBzdWNjZXNzID0gYXdhaXQgY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1Y2Nlc3MgP1xuICAgICAgbG9nLmRlYnVnKGAuLi5jcmVhdGVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCkgOlxuICAgICAgICBsb2cud2FybmluZyhgLi4udW5hYmxlIHRvIGNyZWF0ZSB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBsb2csIGNhbGxiYWNrIH0gPSBjb250ZXh0LFxuICAgICAgICB7IG5hbWUgfSA9IGpzb247XG5cbiAgKHtjb250ZXh0fSA9IGpzb24pOyAvLy9cblxuICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gIGpzb24gPSBlbnRyaWVzOyAvLy9cblxuICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTtcblxuICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQ7ICAvLy9cblxuICBqc29uID0gY29udGV4dEpTT047IC8vL1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgIGxvZy5pbmZvKGBJbml0aWFsaXNpbmcgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC4uLmApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QocHJvamVjdCwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZUNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFKU09ORmlsZSA9IHByb2plY3QuZ2V0TWV0YUpTT05GaWxlKCk7XG5cbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZVZhbGlkID0gaXNNZXRhSlNPTkZpbGVWYWxpZChtZXRhSlNPTkZpbGUpO1xuXG4gICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBuYW1lID0gcHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tSlNPTixcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcztcblxuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBzdWNjZXNzID0gYXdhaXQgYXN5bmNFdmVyeURlcGVuZGVuY3koZGVwZW5kZW5jaWVzLCBhc3luYyAoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfSk7XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRcbiAgICAgICAgXTtcblxuICBsZXQgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcblxuICB3aGlsZSAocmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKCFyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ICYmICFyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5wdXNoKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiBQZXJoYXBzIHRoZSAnbWV0YS5qc29uJyBmaWxlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC4gT3IgdGhlcmUgY291bGQgYmUgYSBkZXBlbmRlbmN5IG1pc21hdGNoLmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0Q3JlYXRlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy53YXJuaW5nKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5LCAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IHRydWU7XG5cbiAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpO1xuXG4gICAgICBsb2cud2FybmluZyhgVGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyB3YXMgcHJvdmlkZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4geyAgLy8vXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0IiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiaXNNZXRhSlNPTkZpbGVWYWxpZCIsIm1ldGFKU09OVXRpbGl0aWVzIiwiZGVwZW5kZW5jeSIsImRlcGVuZGVudE5hbWVzIiwiY29udGV4dCIsInN1Y2Nlc3MiLCJsb2ciLCJyZWxlYXNlQ29udGV4dE1hcCIsImRlcGVuZGVuY3lOYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImRlcGVuZGVuY3lTdHJpbmciLCJkZXBlbmRlbnROYW1lc0xlbmd0aCIsImxhc3REZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50TmFtZSIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJnZXROYW1lIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJkZWJ1ZyIsImFzU3RyaW5nIiwibGVuZ3RoIiwiaW5mbyIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsIndhcm5pbmciLCJqc29uIiwiY2FsbGJhY2siLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiY3VzdG9tR3JhbW1hciIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJwcm9qZWN0IiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwibWV0YUpTT05GaWxlVmFsaWQiLCJnZXRFbnRyaWVzIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiYXN5bmNFdmVyeURlcGVuZGVuY3kiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHQiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGgiLCJzaGlmdCIsInB1c2giLCJmb3JFYWNoRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJpbmNsdWRlcyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQiLCJkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUiLCJmaXJzdERlcGVuZGVudE5hbWUiLCJmaXJzdCIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lc1N0cmluZyIsImpvaW4iLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVdzQkE7ZUFBQUE7O1FBeUh0QjtlQUFBOztRQWpEZ0JDO2VBQUFBOztRQXJCQUM7ZUFBQUE7O1FBaURBQztlQUFBQTs7O3lCQTdHZTs4QkFDQTswQkFDWTswQkFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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