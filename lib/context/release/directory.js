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
    function DirectoryReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, fileContexts) {
        _classCallCheck(this, DirectoryReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts);
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
                    this.releaseContexts.forEach(function(releaseContext) {
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
                var verified = false, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, releaseContexts = null, fileContexts = [], directoryReleaseContext = new DirectoryReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, fileContexts);
                return directoryReleaseContext;
            }
        }
    ]);
    return DirectoryReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZGlyZWN0b3J5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVsZWFzZUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVsZWFzZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlSZWxlYXNlQ29udGV4dCBleHRlbmRzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCBmaWxlQ29udGV4dHMpIHtcbiAgICBzdXBlcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCByZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0UnVsZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBydWxlcyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGJ1YmJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMYWJlbHMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBjb25zdCBidWJibGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoYnViYmxlKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhidWJibGUpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgY29uc3QgYnViYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGJ1YmJsZSk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgIHB1c2goanNvbiwgZmlsZUNvbnRleHRKU09OKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0FuZENhbGxiYWNrcyhsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcykge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG51bGwsXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgZGlyZWN0b3J5UmVsZWFzZUNvbnRleHQgPSBuZXcgRGlyZWN0b3J5UmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCBmaWxlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdG9yeVJlbGVhc2VDb250ZXh0IiwibG9nIiwibmFtZSIsImVudHJpZXMiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJyZWxlYXNlQ29udGV4dHMiLCJmaWxlQ29udGV4dHMiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRSdWxlcyIsInJlbGVhc2VOYW1lcyIsInJ1bGVzIiwicmVsZWFzZU5hbWUiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJidWJibGUiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExhYmVscyIsImxhYmVscyIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiYWRkRmlsZUNvbnRleHQiLCJ0b0pTT04iLCJqc29uIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVFbnRyaWVzQW5kQ2FsbGJhY2tzIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsImRpcmVjdG9yeVJlbGVhc2VDb250ZXh0IiwiUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzREQUxNO3FCQUVOOzZCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BOzhCQUFBQTthQUFBQSx3QkFDUEMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsWUFBWTs4QkFEN0dWOztr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