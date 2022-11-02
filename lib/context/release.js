"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReleaseContext;
    }
});
var _occamCustomGrammars = require("occam-custom-grammars");
var _array = require("../utilities/array");
var _customGrammar = require("../utilities/customGrammar");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var florenceLexerFromCombinedCustomGrammar = _occamCustomGrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _occamCustomGrammars.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log, release, callbacks, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts) {
        _classCallCheck(this, ReleaseContext);
        this.log = log;
        this.release = release;
        this.callbacks = callbacks;
        this.verified = verified;
        this.customGrammar = customGrammar;
        this.fileContexts = fileContexts;
        this.florenceLexer = florenceLexer;
        this.florenceParser = florenceParser;
        this.releaseContexts = releaseContexts;
    }
    _createClass(ReleaseContext, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
            }
        },
        {
            key: "getRelease",
            value: function getRelease() {
                return this.release;
            }
        },
        {
            key: "getCallbacks",
            value: function getCallbacks() {
                return this.callbacks;
            }
        },
        {
            key: "isVerified",
            value: function isVerified() {
                return this.verified;
            }
        },
        {
            key: "getCustomGrammar",
            value: function getCustomGrammar() {
                return this.customGrammar;
            }
        },
        {
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
            }
        },
        {
            key: "getFlorenceLexer",
            value: function getFlorenceLexer() {
                return this.florenceLexer;
            }
        },
        {
            key: "getFlorenceParser",
            value: function getFlorenceParser() {
                return this.florenceParser;
            }
        },
        {
            key: "getReleaseContexts",
            value: function getReleaseContexts() {
                return this.releaseContexts;
            }
        },
        {
            key: "getFile",
            value: function getFile(filePath) {
                return this.release.getFile(filePath);
            }
        },
        {
            key: "getVersion",
            value: function getVersion() {
                return this.release.getVersion();
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                return this.release.getFilePaths();
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.release.getDependencies();
            }
        },
        {
            key: "matchShortenedVersion",
            value: function matchShortenedVersion(shortenedVersion) {
                return this.release.matchShortenedVersion(shortenedVersion);
            }
        },
        {
            key: "getReleaseName",
            value: function getReleaseName() {
                var releaseName = this.release.getName();
                return releaseName;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var rules = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    var bubble = false;
                    this.fileContexts.forEach(function(fileContext) {
                        var fileContextRules = fileContext.getRules(bubble);
                        (0, _array.push)(rules, fileContextRules);
                    });
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextRules = releaseContext.getRules(releaseNames);
                        (0, _array.push)(rules, releaseContextRules);
                    });
                }
                return rules;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var types = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    var bubble = false;
                    this.fileContexts.forEach(function(fileContext) {
                        var fileContextTypes = fileContext.getTypes(bubble);
                        (0, _array.push)(types, fileContextTypes);
                    });
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextTypes = releaseContext.getTypes(releaseNames);
                        (0, _array.push)(types, releaseContextTypes);
                    });
                }
                return types;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var axioms = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    var bubble = false;
                    this.fileContexts.forEach(function(fileContext) {
                        var fileContextAxioms = fileContext.getAxioms(bubble);
                        (0, _array.push)(axioms, fileContextAxioms);
                    });
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextAxioms = releaseContext.getAxioms(releaseNames);
                        (0, _array.push)(axioms, releaseContextAxioms);
                    });
                }
                return axioms;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var combinators = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    var bubble = false;
                    this.fileContexts.forEach(function(fileContext) {
                        var fileContextCombinators = fileContext.getCombinators(bubble);
                        (0, _array.push)(combinators, fileContextCombinators);
                    });
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextCombinators = releaseContext.getCombinators(releaseNames);
                        (0, _array.push)(combinators, releaseContextCombinators);
                    });
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var constructors = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    var bubble = false;
                    this.fileContexts.forEach(function(fileContext) {
                        var fileContextConstructors = fileContext.getConstructors(bubble);
                        (0, _array.push)(constructors, fileContextConstructors);
                    });
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextConstructors = releaseContext.getConstructors(releaseNames);
                        (0, _array.push)(constructors, releaseContextConstructors);
                    });
                }
                return constructors;
            }
        },
        {
            key: "addFileContext",
            value: function addFileContext(fileContext) {
                this.fileContexts.push(fileContext);
            }
        },
        {
            key: "setVerified",
            value: function setVerified(verified) {
                this.verified = verified;
            }
        },
        {
            key: "tokenise",
            value: function tokenise(content) {
                return this.florenceLexer.tokenise(content);
            }
        },
        {
            key: "parse",
            value: function parse(tokens) {
                return this.florenceParser.parse(tokens);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.log.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.log.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.log.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.log.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.log.error(message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.log.fatal(message);
            }
        },
        {
            key: "halt",
            value: function halt(filePath, leastLineIndex, greatestLineIndex) {
                this.callbacks.halt(filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "begin",
            value: function begin(filePath, leastLineIndex, greatestLineIndex) {
                this.callbacks.begin(filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "complete",
            value: function complete(filePath, leastLineIndex, greatestLineIndex) {
                this.callbacks.complete(filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "initialise",
            value: function initialise(releaseContexts, dependencyReleaseContexts) {
                var releaseContext = this; ///
                releaseContexts = [
                    releaseContext
                ].concat(_toConsumableArray(dependencyReleaseContexts)); ///
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts);
                this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
                this.releaseContexts = releaseContexts;
            }
        },
        {
            key: "asJSON",
            value: function asJSON() {
                var fileContextsJSON = this.fileContexts.map(function(fileContext) {
                    return fileContext.toJSON();
                }), files = fileContextsJSON, json = {
                    files: files
                };
                return json;
            }
        }
    ], [
        {
            key: "fromLogReleaseAndCallbacks",
            value: function fromLogReleaseAndCallbacks(log, release, callbacks) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var verified = false, customGrammar = (0, _customGrammar.customGrammarFromRelease)(release), fileContexts = [], florenceLexer = null, florenceParser = null, releaseContexts = [], releaseContext = _construct(ReleaseContext, [
                    log,
                    release,
                    callbacks,
                    verified,
                    customGrammar,
                    fileContexts,
                    florenceLexer,
                    florenceParser,
                    releaseContexts
                ].concat(_toConsumableArray(remainingArguments)));
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZSwgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIHJlbGVhc2UsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMucmVsZWFzZSA9IHJlbGVhc2U7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5mbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlcjtcbiAgICB0aGlzLmZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0UmVsZWFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrcztcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9yZW5jZUxleGVyO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5yZWxlYXNlLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gdGhpcy5yZWxlYXNlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldFJ1bGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRUeXBlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgYXhpb21zID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBzZXRWZXJpZmllZCh2ZXJpZmllZCkge1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLmxvZy50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5sb2cuaW5mbyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmxvZy5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZmF0YWwobWVzc2FnZSk7IH1cblxuICBoYWx0KGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpIHsgdGhpcy5jYWxsYmFja3MuaGFsdChmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTsgfVxuXG4gIGJlZ2luKGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpIHsgdGhpcy5jYWxsYmFja3MuYmVnaW4oZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7IH1cblxuICBjb21wbGV0ZShmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KSB7IHRoaXMuY2FsbGJhY2tzLmNvbXBsZXRlKGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIHJlbGVhc2VDb250ZXh0cyA9IFsgcmVsZWFzZUNvbnRleHQsIC4uLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgXTsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBhc0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IGZpbGVDb250ZXh0LnRvSlNPTigpKSxcbiAgICAgICAgICBmaWxlcyA9IGZpbGVDb250ZXh0c0pTT04sIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nUmVsZWFzZUFuZENhbGxiYWNrcyhsb2csIHJlbGVhc2UsIGNhbGxiYWNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21SZWxlYXNlKHJlbGVhc2UpLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBudWxsLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIHJlbGVhc2UsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImxvZyIsInJlbGVhc2UiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmaWxlQ29udGV4dHMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJyZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXRSZWxlYXNlIiwiZ2V0Q2FsbGJhY2tzIiwiaXNWZXJpZmllZCIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRGbG9yZW5jZUxleGVyIiwiZ2V0RmxvcmVuY2VQYXJzZXIiLCJnZXRSZWxlYXNlQ29udGV4dHMiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXROYW1lIiwiZ2V0UnVsZXMiLCJyZWxlYXNlTmFtZXMiLCJydWxlcyIsInJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJidWJibGUiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJhZGRGaWxlQ29udGV4dCIsInNldFZlcmlmaWVkIiwidG9rZW5pc2UiLCJjb250ZW50IiwicGFyc2UiLCJ0b2tlbnMiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImhhbHQiLCJsZWFzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4IiwiYmVnaW4iLCJjb21wbGV0ZSIsImluaXRpYWxpc2UiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsImFzSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJ0b0pTT04iLCJmaWxlcyIsImpzb24iLCJmcm9tTG9nUmVsZWFzZUFuZENhbGxiYWNrcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7bUNBUjZCO3FCQUU3Qjs2QkFDOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQU0sQUFBRUMseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRU8sSUFBQSxBQUFNSCwrQkFBTjthQUFNQSxlQUNQSyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTs4QkFEdkdiO1FBRWpCLElBQUksQ0FBQ0ssR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEs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