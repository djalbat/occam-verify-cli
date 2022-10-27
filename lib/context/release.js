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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIsIGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcywgQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIm9jY2FtLWN1c3RvbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIHJlbGVhc2UsIHZlcmlmaWVkLCBmaWxlQ29udGV4dHMsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCByZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLnJlbGVhc2UgPSByZWxlYXNlO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyO1xuICAgIHRoaXMuZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlcjtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBnZXRSZWxlYXNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2U7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEZsb3JlbmNlTGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlcjtcbiAgfVxuXG4gIGdldEZsb3JlbmNlUGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gdGhpcy5yZWxlYXNlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5yZWxlYXNlLmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBnZXRSdWxlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0VHlwZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYWVzTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSByZWxlYXNlTmFtZSwgLy8vXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMucmVsZWFzZS5nZXRUZXJtQk5GKCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5yZWxlYXNlLmdldFN0YXRlbWVudEJORigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSB0aGlzLnJlbGVhc2UuZ2V0TWV0YXN0YXRlbWVudEJORigpLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy5yZWxlYXNlLmdldFR5cGVQYXR0ZXJuKCksXG4gICAgICAgICAgc3ltYm9sUGF0dGVybiA9IHRoaXMucmVsZWFzZS5nZXRTeW1ib2xQYXR0ZXJuKCksXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gdGhpcy5yZWxlYXNlLmdldE9wZXJhdG9yUGF0dGVybigpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORk1ldGFzdGF0ZW1lbnRCTkZUeXBlUGF0dGVyblN5bWJvbFBhdHRlcm5BbmRPcGVyYXRvclBhdHRlcm4obmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLmxvZy50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5sb2cuaW5mbyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmxvZy5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZmF0YWwobWVzc2FnZSk7IH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzO1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMgPSBbIHJlbGVhc2VDb250ZXh0LCAuLi5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIF07IC8vL1xuXG4gICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSByZWxlYXNlQ29udGV4dHMubWFwKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldEN1c3RvbUdyYW1tYXIoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyk7XG5cbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dBbmRSZWxlYXNlKGxvZywgcmVsZWFzZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgUmVsZWFzZUNvbnRleHQobG9nLCByZWxlYXNlLCB2ZXJpZmllZCwgZmlsZUNvbnRleHRzLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwibG9nIiwicmVsZWFzZSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHRzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwicmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0UmVsZWFzZSIsImlzVmVyaWZpZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRGbG9yZW5jZUxleGVyIiwiZ2V0RmxvcmVuY2VQYXJzZXIiLCJnZXRSZWxlYXNlQ29udGV4dHMiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0TmFtZSIsImdldFZlcnNpb24iLCJnZXRGaWxlUGF0aHMiLCJnZXRGaWxlQ29udGVudCIsImZpbGVQYXRoIiwiZmlsZSIsImdldEZpbGUiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJnZXREZXBlbmRlbmNpZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VOYW1lcyIsInJ1bGVzIiwicmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSIsImluY2x1ZGVzIiwicHVzaCIsImJ1YmJsZSIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZ2V0UmVsZWFlc05hbWUiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0Q3VzdG9tR3JhbW1hciIsIm5hbWUiLCJ0ZXJtQk5GIiwiZ2V0VGVybUJORiIsInN0YXRlbWVudEJORiIsImdldFN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJnZXRNZXRhc3RhdGVtZW50Qk5GIiwidHlwZVBhdHRlcm4iLCJnZXRUeXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJnZXRTeW1ib2xQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwiZ2V0T3BlcmF0b3JQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZNZXRhc3RhdGVtZW50Qk5GVHlwZVBhdHRlcm5TeW1ib2xQYXR0ZXJuQW5kT3BlcmF0b3JQYXR0ZXJuIiwiYWRkRmlsZUNvbnRleHQiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJwYXJzZSIsInRva2VucyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwiaW5pdGlhbGlzZSIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFycyIsIm1hcCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImZyb21Mb2dBbmRSZWxlYXNlIiwicmVtYWluaW5nQXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzttQ0FQbUU7cUJBRW5FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNLEFBQUVDLHlDQUEyQ0Msb0NBQWUsQ0FBMURELHdDQUNGLEFBQUVFLDBDQUE0Q0MscUNBQWdCLENBQTVERDtBQUVPLElBQUEsQUFBTUgsK0JBQU47YUFBTUEsZUFDUEssR0FBRyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTs4QkFEN0VYO1FBRWpCLElBQUksQ0FBQ0ssR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7O2lCQVJOWDs7WUFXbkJZLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLE9BQU8s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