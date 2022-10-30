"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
            key: "getName",
            value: function getName() {
                return this.release.getName();
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
            key: "getRules",
            value: function getRules() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var name = this.getName(), rules = [], releaseName = name, releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
                var name = this.getName(), types = [], releaseName = name, releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
                var name = this.getName(), axioms = [], releaseName = name, releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
                var name = this.getName(), combinators = [], releaseName = name, releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
                var name = this.getName(), constructors = [], releaseName = name, releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
var _default = ReleaseContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZSwgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIHJlbGVhc2UsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMucmVsZWFzZSA9IHJlbGVhc2U7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5mbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlcjtcbiAgICB0aGlzLmZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0UmVsZWFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrcztcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9yZW5jZUxleGVyO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXROYW1lKCk7IH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldFZlcnNpb24oKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLnJlbGVhc2UubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgZ2V0UnVsZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgdG9rZW5pc2UoY29udGVudCkgeyByZXR1cm4gdGhpcy5mbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpOyB9XG5cbiAgcGFyc2UodG9rZW5zKSB7IHJldHVybiB0aGlzLmZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMubG9nLnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmxvZy5kZWJ1ZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLmxvZy5pbmZvKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMubG9nLndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMubG9nLmVycm9yKG1lc3NhZ2UpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSkgeyB0aGlzLmxvZy5mYXRhbChtZXNzYWdlKTsgfVxuXG4gIGhhbHQoZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCkgeyB0aGlzLmNhbGxiYWNrcy5oYWx0KGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpOyB9XG5cbiAgYmVnaW4oZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCkgeyB0aGlzLmNhbGxiYWNrcy5iZWdpbihmaWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTsgfVxuXG4gIGNvbXBsZXRlKGZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpIHsgdGhpcy5jYWxsYmFja3MuY29tcGxldGUoZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7IH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzID0gWyByZWxlYXNlQ29udGV4dCwgLi4uZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyBdOyAvLy9cblxuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMuZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG5cbiAgICB0aGlzLmZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nUmVsZWFzZUFuZENhbGxiYWNrcyhsb2csIHJlbGVhc2UsIGNhbGxiYWNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21SZWxlYXNlKHJlbGVhc2UpLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBudWxsLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIHJlbGVhc2UsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJSZWxlYXNlQ29udGV4dCIsImxvZyIsInJlbGVhc2UiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmaWxlQ29udGV4dHMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJyZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXRSZWxlYXNlIiwiZ2V0Q2FsbGJhY2tzIiwiaXNWZXJpZmllZCIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRGbG9yZW5jZUxleGVyIiwiZ2V0RmxvcmVuY2VQYXJzZXIiLCJnZXRSZWxlYXNlQ29udGV4dHMiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXROYW1lIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRSdWxlcyIsInJlbGVhc2VOYW1lcyIsIm5hbWUiLCJydWxlcyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSIsImluY2x1ZGVzIiwicHVzaCIsImJ1YmJsZSIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImFkZEZpbGVDb250ZXh0Iiwic2V0VmVyaWZpZWQiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJwYXJzZSIsInRva2VucyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwiaGFsdCIsImxlYXN0TGluZUluZGV4IiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJiZWdpbiIsImNvbXBsZXRlIiwiaW5pdGlhbGlzZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwiZnJvbUxvZ1JlbGVhc2VBbmRDYWxsYmFja3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjdXN0b21HcmFtbWFyRnJvbVJlbGVhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVRQTs7O2VBQUE7OzttQ0FyUWtEO3FCQUU3Qjs2QkFDOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQU0sQUFBRUEseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRVIsSUFBQSxBQUFNRSwrQkE2UEgsQUE3UEg7YUFBTUEsZUFDUUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7OEJBRHRIVDtRQUVGLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7aUJBVnJCVDs7WUFhSlUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsT0FBTyxJQUFJLENBQUNULEdBQUc7WUFDakI7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ1QsT0FBTztZQUNyQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLE9BQU8sSUFBSSxDQUFDVCxTQUFTO1lBQ3ZC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