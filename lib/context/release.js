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
    function ReleaseContext(releaseName, fileContexts, florenceLexer, florenceParser, releaseContexts, releaseVerified) {
        _classCallCheck(this, ReleaseContext);
        this.releaseName = releaseName;
        this.fileContexts = fileContexts;
        this.florenceLexer = florenceLexer;
        this.florenceParser = florenceParser;
        this.releaseContexts = releaseContexts;
        this.releaseVerified = releaseVerified;
    }
    _createClass(ReleaseContext, [
        {
            key: "getReleaseName",
            value: function getReleaseName() {
                return this.releaseName;
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
            key: "isReleaseVerified",
            value: function isReleaseVerified() {
                return this.releaseVerified;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var rules = [], releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(this.releaseName);
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
                var types = [], releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(this.releaseName);
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
                var axioms = [], releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(this.releaseName);
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
                var combinators = [], releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(this.releaseName);
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
                var constructors = [], releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(this.releaseName);
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
                var name = this.releaseName, termBNF = this.getTermBNF(), statementBNF = this.getStatementBNF(), metastatementBNF = this.getMetastatementBNF(), typePattern = this.getTypePattern(), symbolPattern = this.getSymbolPattern(), operatorPattern = this.getOperatorPattern(), customGrammar = new _occamCustomGrammars.CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);
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
            key: "fromReleaseName",
            value: function fromReleaseName(Class, releaseName) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var fileContexts = [], florenceLexer = null, florenceParser = null, releaseContexts = [], releaseVerified = false, releaseContext = _construct(Class, [
                    releaseName,
                    fileContexts,
                    florenceLexer,
                    florenceParser,
                    releaseContexts,
                    releaseVerified
                ].concat(_toConsumableArray(remainingArguments)));
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIsIGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcywgQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIm9jY2FtLWN1c3RvbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlTmFtZSwgZmlsZUNvbnRleHRzLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCByZWxlYXNlVmVyaWZpZWQpIHtcbiAgICB0aGlzLnJlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWU7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5mbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlcjtcbiAgICB0aGlzLmZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHM7XG4gICAgdGhpcy5yZWxlYXNlVmVyaWZpZWQgPSByZWxlYXNlVmVyaWZpZWQ7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRGbG9yZW5jZUxleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmZsb3JlbmNlTGV4ZXI7XG4gIH1cblxuICBnZXRGbG9yZW5jZVBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBpc1JlbGVhc2VWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlVmVyaWZpZWQ7XG4gIH1cblxuICBnZXRSdWxlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyh0aGlzLnJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2godGhpcy5yZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHRoaXMucmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaCh0aGlzLnJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgYXhpb21zID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyh0aGlzLnJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2godGhpcy5yZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHRoaXMucmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaCh0aGlzLnJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyh0aGlzLnJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2godGhpcy5yZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucmVsZWFzZU5hbWUsIC8vL1xuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLmdldFRlcm1CTkYoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLmdldFN0YXRlbWVudEJORigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSB0aGlzLmdldE1ldGFzdGF0ZW1lbnRCTkYoKSxcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IHRoaXMuZ2V0VHlwZVBhdHRlcm4oKSxcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gdGhpcy5nZXRTeW1ib2xQYXR0ZXJuKCksXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gdGhpcy5nZXRPcGVyYXRvclBhdHRlcm4oKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0cztcblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzID0gWyByZWxlYXNlQ29udGV4dCwgLi4uZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyBdOyAvLy9cblxuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJzID0gcmVsZWFzZUNvbnRleHRzLm1hcCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXIgPSByZWxlYXNlQ29udGV4dC5nZXRDdXN0b21HcmFtbWFyKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpO1xuXG4gICAgdGhpcy5mbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgIHRoaXMuZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVsZWFzZU5hbWUoQ2xhc3MsIHJlbGVhc2VOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgQ2xhc3MocmVsZWFzZU5hbWUsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgcmVsZWFzZVZlcmlmaWVkLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwicmVsZWFzZU5hbWUiLCJmaWxlQ29udGV4dHMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJyZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlVmVyaWZpZWQiLCJnZXRSZWxlYXNlTmFtZSIsImdldEZpbGVDb250ZXh0cyIsImdldEZsb3JlbmNlTGV4ZXIiLCJnZXRGbG9yZW5jZVBhcnNlciIsImdldFJlbGVhc2VDb250ZXh0cyIsImlzUmVsZWFzZVZlcmlmaWVkIiwiZ2V0UnVsZXMiLCJyZWxlYXNlTmFtZXMiLCJydWxlcyIsInJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJidWJibGUiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRDdXN0b21HcmFtbWFyIiwibmFtZSIsInRlcm1CTkYiLCJnZXRUZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwiZ2V0U3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE1ldGFzdGF0ZW1lbnRCTkYiLCJ0eXBlUGF0dGVybiIsImdldFR5cGVQYXR0ZXJuIiwic3ltYm9sUGF0dGVybiIsImdldFN5bWJvbFBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJnZXRPcGVyYXRvclBhdHRlcm4iLCJjdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImFkZEZpbGVDb250ZXh0IiwidG9rZW5pc2UiLCJjb250ZW50IiwicGFyc2UiLCJ0b2tlbnMiLCJpbml0aWFsaXNlIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImN1c3RvbUdyYW1tYXJzIiwibWFwIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiZnJvbVJlbGVhc2VOYW1lIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O21DQVBtRTtxQkFFbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0sQUFBRUMseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUs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