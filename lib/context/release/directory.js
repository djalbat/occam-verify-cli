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
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeReleaseContext = false, fileContextLabels = fileContext.getLabels(includeReleaseContext);
                    (0, _array.push)(labels, fileContextLabels);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextLabels = releaseContext.getLabels(includeDependencyReleaseContexts);
                        (0, _array.push)(labels, releaseContextLabels);
                    });
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeReleaseContext = false, fileContextTypes = fileContext.getTypes(includeReleaseContext);
                    (0, _array.push)(types, fileContextTypes);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextTypes = releaseContext.getTypes(includeDependencyReleaseContexts);
                        (0, _array.push)(types, releaseContextTypes);
                    });
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeReleaseContext = false, fileContextRules = fileContext.getRules(includeReleaseContext);
                    (0, _array.push)(rules, fileContextRules);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextRules = releaseContext.getRules(includeDependencyReleaseContexts);
                        (0, _array.push)(rules, releaseContextRules);
                    });
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeReleaseContext = false, fileContextAxioms = fileContext.getAxioms(includeReleaseContext);
                    (0, _array.push)(axioms, fileContextAxioms);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencyReleaseContexts);
                        (0, _array.push)(axioms, releaseContextAxioms);
                    });
                }
                return axioms;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeReleaseContext = false, fileContextCombinators = fileContext.getCombinators(includeReleaseContext);
                    (0, _array.push)(combinators, fileContextCombinators);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextCombinators = releaseContext.getCombinators(includeDependencyReleaseContexts);
                        (0, _array.push)(combinators, releaseContextCombinators);
                    });
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeReleaseContext = false, fileContextConstructors = fileContext.getConstructors(includeReleaseContext);
                    (0, _array.push)(constructors, fileContextConstructors);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextConstructors = releaseContext.getConstructors(includeDependencyReleaseContexts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZGlyZWN0b3J5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVsZWFzZUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVsZWFzZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlSZWxlYXNlQ29udGV4dCBleHRlbmRzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgZmlsZUNvbnRleHRzKSB7XG4gICAgc3VwZXIobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2VDb250ZXh0ID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZUNvbnRleHQgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlQ29udGV4dCA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZUNvbnRleHQgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlQ29udGV4dCA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZUNvbnRleHQgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgcHVzaChqc29uLCBmaWxlQ29udGV4dEpTT04pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVFbnRyaWVzQW5kQ2FsbGJhY2tzKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgZGlyZWN0b3J5UmVsZWFzZUNvbnRleHQgPSBuZXcgRGlyZWN0b3J5UmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgZmlsZUNvbnRleHRzKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlSZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlSZWxlYXNlQ29udGV4dCIsImxvZyIsIm5hbWUiLCJlbnRyaWVzIiwiY2FsbGJhY2tzIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImZpbGVDb250ZXh0cyIsImdldEZpbGVDb250ZXh0cyIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2VDb250ZXh0IiwiZmlsZUNvbnRleHRMYWJlbHMiLCJwdXNoIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImFkZEZpbGVDb250ZXh0IiwidG9KU09OIiwianNvbiIsImZpbGVDb250ZXh0SlNPTiIsImZyb21Mb2dOYW1lRW50cmllc0FuZENhbGxiYWNrcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJkaXJlY3RvcnlSZWxlYXNlQ29udGV4dCIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0REFMTTtxQkFFTjs2QkFDMkI7Ozs7Ozs7Ozs7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