"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileReleaseContext;
    }
});
var _release = /*#__PURE__*/ _interopRequireDefault(require("../../context/release"));
var _array = require("../../utilities/array");
var _customGrammar = require("../../utilities/customGrammar");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
var FileReleaseContext = /*#__PURE__*/ function(ReleaseContext) {
    _inherits(FileReleaseContext, ReleaseContext);
    var _super = _createSuper(FileReleaseContext);
    function FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, rules, types, axioms, labels, combinators, constructors) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts);
        _this.rules = rules;
        _this.types = types;
        _this.axioms = axioms;
        _this.labels = labels;
        _this.combinators = combinators;
        _this.constructors = constructors;
        _this.contextJSON = contextJSON;
        return _this;
    }
    _createClass(FileReleaseContext, [
        {
            key: "getContextJSON",
            value: function getContextJSON() {
                return this.contextJSON;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var releaseNames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var rules = _toConsumableArray(this.rules), releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
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
                var types = _toConsumableArray(this.types), releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
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
                var axioms = _toConsumableArray(this.axioms), releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
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
                var labels = _toConsumableArray(this.labels), releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
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
                var combinators = _toConsumableArray(this.combinators), releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
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
                var constructors = _toConsumableArray(this.constructors), releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextConstructors = releaseContext.getConstructors(releaseNames);
                        (0, _array.push)(constructors, releaseContextConstructors);
                    });
                }
                return constructors;
            }
        },
        {
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                _get(_getPrototypeOf(FileReleaseContext.prototype), "initialise", this).call(this, dependencyReleaseContexts);
                debugger;
            }
        }
    ], [
        {
            key: "fromLogNameEntriesCallbacksAndContextJSON",
            value: function fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON) {
                var verified = false, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, releaseContexts = null, rules = null, types = null, axioms = null, labels = null, combinators = null, constructors = null, releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, rules, types, axioms, labels, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7Y29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cywgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllc30gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVSZWxlYXNlQ29udGV4dCBleHRlbmRzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgcnVsZXMsIHR5cGVzLCBheGlvbXMsIGxhYmVscywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycykge1xuICAgIHN1cGVyKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLmNvbnRleHRKU09OID0gY29udGV4dEpTT047XG4gIH1cblxuICBnZXRDb250ZXh0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldFJ1bGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnJ1bGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnR5cGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuYXhpb21zXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5sYWJlbHNcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgaWYgKCFyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lKSB7XG4gICAgICByZWxlYXNlTmFtZXMucHVzaChyZWxlYXNlTmFtZSk7XG5cbiAgICAgIHRoaXMucmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5jb21iaW5hdG9yc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmNvbnN0cnVjdG9yc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCBjb250ZXh0SlNPTikge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gZmFsc2UsIC8vL1xuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBudWxsLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJ1bGVzID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgYXhpb21zID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IEZpbGVSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCByZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCBydWxlcywgdHlwZXMsIGF4aW9tcywgbGFiZWxzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlUmVsZWFzZUNvbnRleHQiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsImNhbGxiYWNrcyIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJlbGVhc2VDb250ZXh0cyIsImNvbnRleHRKU09OIiwicnVsZXMiLCJ0eXBlcyIsImF4aW9tcyIsImxhYmVscyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29udGV4dEpTT04iLCJnZXRSdWxlcyIsInJlbGVhc2VOYW1lcyIsInJlbGVhc2VOYW1lIiwiZ2V0UmVsZWFzZU5hbWUiLCJyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lIiwiaW5jbHVkZXMiLCJwdXNoIiwiZm9yRWFjaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImluaXRpYWxpc2UiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZnJvbUxvZ05hbWVFbnRyaWVzQ2FsbGJhY2tzQW5kQ29udGV4dEpTT04iLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzREQUxNO3FCQUVOOzZCQUNtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxJQUFBLEFBQU1BLG1DQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxtQkFDUEMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFB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