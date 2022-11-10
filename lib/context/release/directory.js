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
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var releaseContextTypes = releaseContext.getTypes(releaseNames);
                        (0, _array.push)(types, releaseContextTypes);
                    });
                }
                return types;
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
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var releaseContextRules = releaseContext.getRules(releaseNames);
                        (0, _array.push)(rules, releaseContextRules);
                    });
                }
                return rules;
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
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var releaseContextAxioms = releaseContext.getAxioms(releaseNames);
                        (0, _array.push)(axioms, releaseContextAxioms);
                    });
                }
                return axioms;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var labels = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    var bubble = false;
                    this.fileContexts.forEach(function(fileContext) {
                        var fileContextLabels = fileContext.getLabels(bubble);
                        (0, _array.push)(labels, fileContextLabels);
                    });
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var releaseContextLabels = releaseContext.getLabels(releaseNames);
                        (0, _array.push)(labels, releaseContextLabels);
                    });
                }
                return labels;
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
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
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
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZGlyZWN0b3J5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVsZWFzZUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVsZWFzZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlSZWxlYXNlQ29udGV4dCBleHRlbmRzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgZmlsZUNvbnRleHRzKSB7XG4gICAgc3VwZXIobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRUeXBlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhidWJibGUpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgYXhpb21zID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExhYmVscyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhidWJibGUpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgcHVzaChqc29uLCBmaWxlQ29udGV4dEpTT04pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVFbnRyaWVzQW5kQ2FsbGJhY2tzKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgZGlyZWN0b3J5UmVsZWFzZUNvbnRleHQgPSBuZXcgRGlyZWN0b3J5UmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgZmlsZUNvbnRleHRzKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlSZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlSZWxlYXNlQ29udGV4dCIsImxvZyIsIm5hbWUiLCJlbnRyaWVzIiwiY2FsbGJhY2tzIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImZpbGVDb250ZXh0cyIsImdldEZpbGVDb250ZXh0cyIsImdldFR5cGVzIiwicmVsZWFzZU5hbWVzIiwidHlwZXMiLCJyZWxlYXNlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSIsImluY2x1ZGVzIiwicHVzaCIsImJ1YmJsZSIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImZpbGVDb250ZXh0VHlwZXMiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExhYmVscyIsImxhYmVscyIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiYWRkRmlsZUNvbnRleHQiLCJ0b0pTT04iLCJqc29uIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVFbnRyaWVzQW5kQ2FsbGJhY2tzIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsImRpcmVjdG9yeVJlbGVhc2VDb250ZXh0IiwiUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzREQUxNO3FCQUVOOzZCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BOzhCQUFBQTthQUFBQSx3QkFDUEMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLHlCQUF5QixFQUFFQyxZQUFZOzhCQUR2SFY7O2tDQUVYQyxLQUFLQyxNQUFNQyxTQUFTQyxXQUFXQyxVQUFVQyxlQUFlQyxlQUFlQyxnQkFBZ0JDO1FBRTdGLE1BQUtDLFlBQVksR0FBR0E7OztpQkFKSFY7O1lBT25CVyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUE0QjtvQkFBbkJDLGVBQUFBLGlFQUFlLEVBQUU7Z0JBQ3hCLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0Msa0NBQWtDSixhQUFhSyxRQUFRLENBQUNIO2dCQUU5RCxJQUFJ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