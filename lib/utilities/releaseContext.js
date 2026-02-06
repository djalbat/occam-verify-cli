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
function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgbG9nLCByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGxvZy5kZWJ1ZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpLFxuICAgICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRlcGVuZGVudE5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBsb2cuaW5mbyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC4uLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lOyAgLy8vXG5cbiAgICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBhd2FpdCByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWNjZXNzID9cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApIDpcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgeyBuYW1lIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0OyAgLy8vXG5cbiAganNvbiA9IGNvbnRleHRKU09OOyAvLy9cblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNBbmRDYWxsYmFjayhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgIGxvZy5pbmZvKGBJbml0aWFsaXNpbmcgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC4uLmApO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QocHJvamVjdCwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZUNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFKU09ORmlsZSA9IHByb2plY3QuZ2V0TWV0YUpTT05GaWxlKCk7XG5cbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZVZhbGlkID0gaXNNZXRhSlNPTkZpbGVWYWxpZChtZXRhSlNPTkZpbGUpO1xuXG4gICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBuYW1lID0gcHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05FbnRyaWVzQW5kQ2FsbGJhY2sobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21KU09OLFxuICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQsXG4gIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3Rcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBzdWNjZXNzO1xuXG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVudE5hbWVzID0gWyAuLi5kZXBlbmRlbnROYW1lcywgZGVwZW5kZW5jeU5hbWUgXTsgIC8vL1xuXG4gIHN1Y2Nlc3MgPSBhd2FpdCBhc3luY0V2ZXJ5RGVwZW5kZW5jeShkZXBlbmRlbmNpZXMsIGFzeW5jIChkZXBlbmRlbmN5KSA9PiB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgICBzdWNjZXNzID0gYXdhaXQgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9KTtcblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3ksICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpLFxuICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IGVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEZyb21KU09OIiwicmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJzdWNjZXNzIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiZ2V0TmFtZSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiZGVidWciLCJhc1N0cmluZyIsImxlbmd0aCIsImluZm8iLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ3YXJuaW5nIiwianNvbiIsImNhbGxiYWNrIiwibmFtZSIsImVudHJpZXMiLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJjb250ZXh0SlNPTiIsIlJlbGVhc2VDb250ZXh0IiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0FuZENhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldEVudHJpZXMiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY0V2ZXJ5RGVwZW5kZW5jeSIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dCIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCIsInNoaWZ0IiwicHVzaCIsImZvckVhY2hEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBWXNCQTtlQUFBQTs7UUF5SHRCO2VBQUE7O1FBakRnQkM7ZUFBQUE7O1FBckJBQztlQUFBQTs7UUFpREFDO2VBQUFBOzs7eUJBOUdlOzBCQUNZOzhEQUVoQjswQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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