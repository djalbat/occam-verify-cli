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
var _log = /*#__PURE__*/ _interopRequireDefault(require("../mixins/log"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
Object.assign(ReleaseContext.prototype, _log.default);
var _default = ReleaseContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIsIGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcywgQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIm9jY2FtLWN1c3RvbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgbG9nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgcmVsZWFzZSwgdmVyaWZpZWQsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMucmVsZWFzZSA9IHJlbGVhc2U7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXI7XG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyO1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldFJlbGVhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZTtcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9yZW5jZUxleGVyO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSB0aGlzLnJlbGVhc2UuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXRGaWxlQ29udGVudChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLnJlbGVhc2UuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHJldHVybiBmaWxlQ29udGVudDtcbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIGdldFJ1bGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRUeXBlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhZXNOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgYXhpb21zID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJlbGVhc2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy5yZWxlYXNlLmdldFRlcm1CTkYoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnJlbGVhc2UuZ2V0U3RhdGVtZW50Qk5GKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IHRoaXMucmVsZWFzZS5nZXRNZXRhc3RhdGVtZW50Qk5GKCksXG4gICAgICAgICAgdHlwZVBhdHRlcm4gPSB0aGlzLnJlbGVhc2UuZ2V0VHlwZVBhdHRlcm4oKSxcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gdGhpcy5yZWxlYXNlLmdldFN5bWJvbFBhdHRlcm4oKSxcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSB0aGlzLnJlbGVhc2UuZ2V0T3BlcmF0b3JQYXR0ZXJuKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWVUZXJtQk5GU3RhdGVtZW50Qk5GTWV0YXN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9rZW5pc2UoY29udGVudCkgeyByZXR1cm4gdGhpcy5mbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpOyB9XG5cbiAgcGFyc2UodG9rZW5zKSB7IHJldHVybiB0aGlzLmZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucyk7IH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzO1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMgPSBbIHJlbGVhc2VDb250ZXh0LCAuLi5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIF07IC8vL1xuXG4gICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSByZWxlYXNlQ29udGV4dHMubWFwKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldEN1c3RvbUdyYW1tYXIoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyk7XG5cbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dBbmRSZWxlYXNlKGxvZywgcmVsZWFzZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgUmVsZWFzZUNvbnRleHQobG9nLCByZWxlYXNlLCB2ZXJpZmllZCwgZmlsZUNvbnRleHRzLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZUNvbnRleHQucHJvdG90eXBlLCBsb2dNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlQ29udGV4dDtcblxuIl0sIm5hbWVzIjpbImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsIlJlbGVhc2VDb250ZXh0IiwibG9nIiwicmVsZWFzZSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHRzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwicmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0UmVsZWFzZSIsImlzVmVyaWZpZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRGbG9yZW5jZUxleGVyIiwiZ2V0RmxvcmVuY2VQYXJzZXIiLCJnZXRSZWxlYXNlQ29udGV4dHMiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0TmFtZSIsImdldFZlcnNpb24iLCJnZXRGaWxlUGF0aHMiLCJnZXRGaWxlQ29udGVudCIsImZpbGVQYXRoIiwiZmlsZSIsImdldEZpbGUiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJnZXREZXBlbmRlbmNpZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VOYW1lcyIsInJ1bGVzIiwicmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSIsImluY2x1ZGVzIiwicHVzaCIsImJ1YmJsZSIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZ2V0UmVsZWFlc05hbWUiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0Q3VzdG9tR3JhbW1hciIsIm5hbWUiLCJ0ZXJtQk5GIiwiZ2V0VGVybUJORiIsInN0YXRlbWVudEJORiIsImdldFN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJnZXRNZXRhc3RhdGVtZW50Qk5GIiwidHlwZVBhdHRlcm4iLCJnZXRUeXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJnZXRTeW1ib2xQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwiZ2V0T3BlcmF0b3JQYXR0ZXJuIiwiY3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZNZXRhc3RhdGVtZW50Qk5GVHlwZVBhdHRlcm5TeW1ib2xQYXR0ZXJuQW5kT3BlcmF0b3JQYXR0ZXJuIiwiYWRkRmlsZUNvbnRleHQiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJwYXJzZSIsInRva2VucyIsImluaXRpYWxpc2UiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY3VzdG9tR3JhbW1hcnMiLCJtYXAiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJmcm9tTG9nQW5kUmVsZWFzZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImxvZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOFBBOzs7ZUFBQTs7O21DQTVQd0Y7d0RBRWxFO3FCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0sQUFBRUEseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRVIsSUFBQSxBQUFNRSwrQkFpUEgsQUFqUEg7YUFBTUEsZUFDUUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTs4QkFENUZQO1FBRUYsSUFBSSxDQUFDQyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7aUJBUnJCUDs7WUFXSlEsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsT0FBTyxJQUFJLENBQUNQLEdBQUc7WUFDakI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ1AsT0FBTztZQUNyQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDUCxRQUFRO1lBQ3RCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNQLFlBQVk7WUFDMUI7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