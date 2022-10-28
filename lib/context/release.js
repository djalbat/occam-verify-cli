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
var _necessary = require("necessary");
var _occamCustomGrammars = require("occam-custom-grammars");
var _array = require("../utilities/array");
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
var florenceLexerFromCombinedCustomGrammar = _occamCustomGrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _occamCustomGrammars.parsersUtilities.florenceParserFromCombinedCustomGrammar, TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL, FATAL_LEVEL = _necessary.levels.FATAL_LEVEL;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log, release, verified, fileContexts, florenceLexer, florenceParser, releaseContexts) {
        _classCallCheck(this, ReleaseContext);
        this.log = log;
        this.release = release;
        this.verified = verified;
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
            key: "isVerified",
            value: function isVerified() {
                return this.verified;
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
            key: "getReleaseName",
            value: function getReleaseName() {
                var releaseName = this.release.getName();
                return releaseName;
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
            key: "getFileContent",
            value: function getFileContent(filePath) {
                var file = this.release.getFile(filePath), fileContent = file.getContent();
                return fileContent;
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.release.getDependencies();
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
                var types = [], releaseName = this.getReleaesName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
                var releaseName = this.getReleaseName(), constructors = [], releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
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
            key: "getCustomGrammar",
            value: function getCustomGrammar() {
                var releaseName = this.getReleaseName(), name = releaseName, termBNF = this.release.getTermBNF(), statementBNF = this.release.getStatementBNF(), metastatementBNF = this.release.getMetastatementBNF(), typePattern = this.release.getTypePattern(), symbolPattern = this.release.getSymbolPattern(), operatorPattern = this.release.getOperatorPattern(), customGrammar = _occamCustomGrammars.CustomGrammar.fromNameTermBNFStatementBNFMetastatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        },
        {
            key: "addFileContext",
            value: function addFileContext(fileContext) {
                this.fileContexts.push(fileContext);
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
                this.log(TRACE_LEVEL, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.log(DEBUG_LEVEL, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.log(INFO_LEVEL, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.log(WARNING_LEVEL, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.log(ERROR_LEVEL, message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.log(FATAL_LEVEL, message);
            }
        },
        {
            key: "initialise",
            value: function initialise(releaseContexts, dependencyReleaseContexts) {
                this.releaseContexts = releaseContexts;
                var releaseContext = this; ///
                releaseContexts = [
                    releaseContext
                ].concat(_toConsumableArray(dependencyReleaseContexts)); ///
                var customGrammars = releaseContexts.map(function(releaseContext) {
                    var customGrammar = releaseContext.getCustomGrammar();
                    return customGrammar;
                }), combinedCustomGrammar = _occamCustomGrammars.CombinedCustomGrammar.fromCustomGrammars(customGrammars);
                this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
            }
        }
    ], [
        {
            key: "fromLogAndRelease",
            value: function fromLogAndRelease(log, release) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var verified = false, fileContexts = [], florenceLexer = null, florenceParser = null, releaseContexts = [], releaseContext = _construct(ReleaseContext, [
                    log,
                    release,
                    verified,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIsIGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcywgQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIm9jY2FtLWN1c3RvbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCwgRkFUQUxfTEVWRUwgfSA9IGxldmVscztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIHJlbGVhc2UsIHZlcmlmaWVkLCBmaWxlQ29udGV4dHMsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCByZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLnJlbGVhc2UgPSByZWxlYXNlO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyO1xuICAgIHRoaXMuZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlcjtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBnZXRSZWxlYXNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2U7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEZsb3JlbmNlTGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlcjtcbiAgfVxuXG4gIGdldEZsb3JlbmNlUGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gdGhpcy5yZWxlYXNlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5yZWxlYXNlLmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBnZXRSdWxlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0VHlwZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYWVzTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSByZWxlYXNlTmFtZSwgLy8vXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMucmVsZWFzZS5nZXRUZXJtQk5GKCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5yZWxlYXNlLmdldFN0YXRlbWVudEJORigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSB0aGlzLnJlbGVhc2UuZ2V0TWV0YXN0YXRlbWVudEJORigpLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy5yZWxlYXNlLmdldFR5cGVQYXR0ZXJuKCksXG4gICAgICAgICAgc3ltYm9sUGF0dGVybiA9IHRoaXMucmVsZWFzZS5nZXRTeW1ib2xQYXR0ZXJuKCksXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gdGhpcy5yZWxlYXNlLmdldE9wZXJhdG9yUGF0dGVybigpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORk1ldGFzdGF0ZW1lbnRCTkZUeXBlUGF0dGVyblN5bWJvbFBhdHRlcm5BbmRPcGVyYXRvclBhdHRlcm4obmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLmxvZyhUUkFDRV9MRVZFTCwgbWVzc2FnZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMubG9nKERFQlVHX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLmxvZyhJTkZPX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLmxvZyhXQVJOSU5HX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5sb2coRVJST1JfTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSkgeyB0aGlzLmxvZyhGQVRBTF9MRVZFTCwgbWVzc2FnZSk7IH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzO1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMgPSBbIHJlbGVhc2VDb250ZXh0LCAuLi5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIF07IC8vL1xuXG4gICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSByZWxlYXNlQ29udGV4dHMubWFwKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldEN1c3RvbUdyYW1tYXIoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyk7XG5cbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dBbmRSZWxlYXNlKGxvZywgcmVsZWFzZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgUmVsZWFzZUNvbnRleHQobG9nLCByZWxlYXNlLCB2ZXJpZmllZCwgZmlsZUNvbnRleHRzLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsImxvZyIsInJlbGVhc2UiLCJ2ZXJpZmllZCIsImZpbGVDb250ZXh0cyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldFJlbGVhc2UiLCJpc1ZlcmlmaWVkIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0RmxvcmVuY2VMZXhlciIsImdldEZsb3JlbmNlUGFyc2VyIiwiZ2V0UmVsZWFzZUNvbnRleHRzIiwiZ2V0UmVsZWFzZU5hbWUiLCJyZWxlYXNlTmFtZSIsImdldE5hbWUiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RmlsZUNvbnRlbnQiLCJmaWxlUGF0aCIsImZpbGUiLCJnZXRGaWxlIiwiZmlsZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0RGVwZW5kZW5jaWVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlTmFtZXMiLCJydWxlcyIsInJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJidWJibGUiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJlbGVhZXNOYW1lIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldEN1c3RvbUdyYW1tYXIiLCJuYW1lIiwidGVybUJORiIsImdldFRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJnZXRTdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwiZ2V0TWV0YXN0YXRlbWVudEJORiIsInR5cGVQYXR0ZXJuIiwiZ2V0VHlwZVBhdHRlcm4iLCJzeW1ib2xQYXR0ZXJuIiwiZ2V0U3ltYm9sUGF0dGVybiIsIm9wZXJhdG9yUGF0dGVybiIsImdldE9wZXJhdG9yUGF0dGVybiIsImN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbU5hbWVUZXJtQk5GU3RhdGVtZW50Qk5GTWV0YXN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybiIsImFkZEZpbGVDb250ZXh0IiwidG9rZW5pc2UiLCJjb250ZW50IiwicGFyc2UiLCJ0b2tlbnMiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImluaXRpYWxpc2UiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY3VzdG9tR3JhbW1hcnMiLCJtYXAiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJmcm9tTG9nQW5kUmVsZWFzZSIsInJlbWFpbmluZ0FyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVEU7bUNBQ2lFO3FCQUVuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxBQUFFQyx5Q0FBMkNDLG9DQUFlLENBQTFERCx3Q0FDRixBQUFFRSwwQ0FBNENDLHFDQUFnQixDQUE1REQseUNBQ0FFLGNBQWtGQyxpQkFBTSxDQUF4RkQsYUFBYUUsY0FBcUVELGlCQUFNLENBQTNFQyxhQUFhQyxhQUF3REYsaUJBQU0sQ0FBOURF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