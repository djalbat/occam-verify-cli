"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryReleaseContext;
    }
});
var _release = /*#__PURE__*/ _interopRequireDefault(require("../../context/release"));
var _array = require("../../utilities/array");
var _customGrammar = require("../../utilities/customGrammar");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var DirectoryReleaseContext = /*#__PURE__*/ function(ReleaseContext) {
    _inherits(DirectoryReleaseContext, ReleaseContext);
    var _super = _createSuper(DirectoryReleaseContext);
    function DirectoryReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, fileContexts) {
        _classCallCheck(this, DirectoryReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);
        _this.fileContexts = fileContexts;
        return _this;
    }
    _createClass(DirectoryReleaseContext, [
        {
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLabels = fileContext.getLabels(includeRelease);
                    (0, _array.push)(labels, fileContextLabels);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextLabels = releaseContext.getLabels(includeDependencies);
                        (0, _array.push)(labels, releaseContextLabels);
                    });
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTypes = fileContext.getTypes(includeRelease);
                    (0, _array.push)(types, fileContextTypes);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTypes = releaseContext.getTypes(includeDependencies);
                        (0, _array.push)(types, releaseContextTypes);
                    });
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextRules = fileContext.getRules(includeRelease);
                    (0, _array.push)(rules, fileContextRules);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextRules = releaseContext.getRules(includeDependencies);
                        (0, _array.push)(rules, releaseContextRules);
                    });
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextAxioms = fileContext.getAxioms(includeRelease);
                    (0, _array.push)(axioms, fileContextAxioms);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencies);
                        (0, _array.push)(axioms, releaseContextAxioms);
                    });
                }
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLemmas = fileContext.getLemmas(includeRelease);
                    (0, _array.push)(lemmas, fileContextLemmas);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextLemmas = releaseContext.getLemmas(includeDependencies);
                        (0, _array.push)(lemmas, releaseContextLemmas);
                    });
                }
                return lemmas;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextCombinators = fileContext.getCombinators(includeRelease);
                    (0, _array.push)(combinators, fileContextCombinators);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextCombinators = releaseContext.getCombinators(includeDependencies);
                        (0, _array.push)(combinators, releaseContextCombinators);
                    });
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextConstructors = fileContext.getConstructors(includeRelease);
                    (0, _array.push)(constructors, fileContextConstructors);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConstructors = releaseContext.getConstructors(includeDependencies);
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
            key: "toJSON",
            value: function toJSON() {
                var json = [];
                this.fileContexts.forEach(function(fileContext) {
                    var fileContextJSON = fileContext.toJSON();
                    (0, _array.push)(json, fileContextJSON);
                });
                return json;
            }
        }
    ], [
        {
            key: "fromLogNameEntriesAndCallbacks",
            value: function fromLogNameEntriesAndCallbacks(log, name, entries, callbacks) {
                var verified = false, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, dependencyReleaseContexts = null, fileContexts = [], directoryReleaseContext = new DirectoryReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, fileContexts);
                return directoryReleaseContext;
            }
        }
    ]);
    return DirectoryReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZGlyZWN0b3J5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVsZWFzZUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVsZWFzZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlSZWxlYXNlQ29udGV4dCBleHRlbmRzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgZmlsZUNvbnRleHRzKSB7XG4gICAgc3VwZXIobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGVtbWFzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgIHB1c2goanNvbiwgZmlsZUNvbnRleHRKU09OKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0FuZENhbGxiYWNrcyhsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcykge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG51bGwsXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGRpcmVjdG9yeVJlbGVhc2VDb250ZXh0ID0gbmV3IERpcmVjdG9yeVJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGZpbGVDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0b3J5UmVsZWFzZUNvbnRleHQiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsImNhbGxiYWNrcyIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJmaWxlQ29udGV4dHMiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInB1c2giLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImFkZEZpbGVDb250ZXh0IiwidG9KU09OIiwianNvbiIsImZpbGVDb250ZXh0SlNPTiIsImZyb21Mb2dOYW1lRW50cmllc0FuZENhbGxiYWNrcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJkaXJlY3RvcnlSZWxlYXNlQ29udGV4dCIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0REFMTTtxQkFFTjs2QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTs4QkFBQUE7YUFBQUEsd0JBQ1BDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyx5QkFBeUIsRUFBRUMsWUFBWTs4QkFEdkhWOztrQ0FFWEMsS0FBS0MsTUFBTUMsU0FBU0MsV0FBV0MsVUFBVUMsZUFBZUMsZUFBZUMsZ0JBQWdCQztRQUU3RixNQUFLQyxZQUFZLEdBQUdBOzs7aUJBSkhWOztZQU9uQlcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBc0M7b0JBQTVCQyxzQkFBQUEsaUVBQXNCLElBQUk7Z0JBQ2xDLElBQU1DLFNBQVMsRUFBRTtnQkFFakIsSUFBSSxDQUFDSixZQUFZLENBQUNLLE9BQU8sQ0FBQyxTQUFDQyxhQUFnQjtvQkFDekMsSUFBTUMsaUJBQWlCLEtBQUssRUFDdEJDLG9CQUFv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