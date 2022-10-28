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
    function ReleaseContext(log, release, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts) {
        _classCallCheck(this, ReleaseContext);
        this.log = log;
        this.release = release;
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
            key: "fromLogAndRelease",
            value: function fromLogAndRelease(log, release) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var verified = false, customGrammar = (0, _customGrammar.customGrammarFromRelease)(release), fileContexts = [], florenceLexer = null, florenceParser = null, releaseContexts = [], releaseContext = _construct(ReleaseContext, [
                    log,
                    release,
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
Object.assign(ReleaseContext.prototype, _log.default);
var _default = ReleaseContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IGxvZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21SZWxlYXNlLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgcmVsZWFzZSwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMucmVsZWFzZSA9IHJlbGVhc2U7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyO1xuICAgIHRoaXMuZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlcjtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBnZXRSZWxlYXNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2U7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEZsb3JlbmNlTGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlcjtcbiAgfVxuXG4gIGdldEZsb3JlbmNlUGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZS5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLnJlbGVhc2UuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSB0aGlzLnJlbGVhc2UuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBydWxlcyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFlc05hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIHJlbGVhc2VDb250ZXh0cyA9IFsgcmVsZWFzZUNvbnRleHQsIC4uLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgXTsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5mbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ0FuZFJlbGVhc2UobG9nLCByZWxlYXNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbVJlbGVhc2UocmVsZWFzZSksXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG51bGwsXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywgcmVsZWFzZSwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlbGVhc2VDb250ZXh0LnByb3RvdHlwZSwgbG9nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZUNvbnRleHQ7XG4iXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiUmVsZWFzZUNvbnRleHQiLCJsb2ciLCJyZWxlYXNlIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmlsZUNvbnRleHRzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwicmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0UmVsZWFzZSIsImlzVmVyaWZpZWQiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0RmxvcmVuY2VMZXhlciIsImdldEZsb3JlbmNlUGFyc2VyIiwiZ2V0UmVsZWFzZUNvbnRleHRzIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXROYW1lIiwiZ2V0UnVsZXMiLCJyZWxlYXNlTmFtZXMiLCJydWxlcyIsInJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJidWJibGUiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJlbGVhZXNOYW1lIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImFkZEZpbGVDb250ZXh0IiwidG9rZW5pc2UiLCJjb250ZW50IiwicGFyc2UiLCJ0b2tlbnMiLCJpbml0aWFsaXNlIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJmcm9tTG9nQW5kUmVsZWFzZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImxvZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOE9BOzs7ZUFBQTs7O21DQTVPa0Q7d0RBRTVCO3FCQUVEOzZCQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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