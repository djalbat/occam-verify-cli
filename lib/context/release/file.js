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
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../rule"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../../type"));
var _axiom = /*#__PURE__*/ _interopRequireDefault(require("../../axiom"));
var _combinator = /*#__PURE__*/ _interopRequireDefault(require("../../combinator"));
var _constructor = /*#__PURE__*/ _interopRequireDefault(require("../../constructor"));
var _array = require("../../utilities/array");
var _customGrammar = require("../../utilities/customGrammar");
var _kinds = require("../../kinds");
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
    function FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, types, rules, axioms, combinators, constructors) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts);
        _this.types = types;
        _this.rules = rules;
        _this.axioms = axioms;
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
                var labels = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    (0, _array.push)(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                });
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    this.releaseContexts.forEach(function(releaseContext) {
                        var releaseContextAxioms = releaseContext.getAxioms(releaseNames);
                        (0, _array.push)(labels, releaseContextAxioms);
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
                var _this = this;
                _get(_getPrototypeOf(FileReleaseContext.prototype), "initialise", this).call(this, dependencyReleaseContexts);
                var topLevelDeclarationsJSON = this.contextJSON, ruleMap = this.florenceParser.getRuleMap(), callback = function(content, ruleName) {
                    var tokens = _this.florenceLexer.tokenise(content), rule = ruleMap[ruleName], node = _this.florenceParser.parse(tokens, rule);
                    return node;
                };
                topLevelDeclarationsJSON.forEach(function(topLevelDeclarationJSON) {
                    var json = topLevelDeclarationJSON, kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSON(json);
                                _this.types.push(type);
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSON(json, callback);
                                _this.rules.push(rule);
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSON(json, callback);
                                _this.axioms.push(axiom);
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSON(json, callback);
                                _this.combinators.push(combinator);
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSON(json, callback);
                                _this.constructors.push(constructor);
                                break;
                            }
                    }
                });
            }
        }
    ], [
        {
            key: "fromLogNameEntriesCallbacksAndContextJSON",
            value: function fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON) {
                var verified = false, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, releaseContexts = null, types = null, rules = null, axioms = null, combinators = null, constructors = null, releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, types, rules, axioms, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUeXBlIGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uLy4uL2F4aW9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi8uLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IHsgUlVMRV9LSU5ELCBUWVBFX0tJTkQsIEFYSU9NX0tJTkQsIENPTUJJTkFUT1JfS0lORCwgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuLi8uLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUmVsZWFzZUNvbnRleHQgZXh0ZW5kcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgY29udGV4dEpTT04sIHR5cGVzLCBydWxlcywgYXhpb21zLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKSB7XG4gICAgc3VwZXIobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMuY29udGV4dEpTT04gPSBjb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldENvbnRleHRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0VHlwZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50aGlzLnR5cGVzXG4gICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5ydWxlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmF4aW9tc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExhYmVscyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmNvbWJpbmF0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuY29uc3RydWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25zSlNPTiA9IHRoaXMuY29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBydWxlTWFwID0gdGhpcy5mbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgY2FsbGJhY2sgPSAoY29udGVudCwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH07XG5cbiAgICB0b3BMZXZlbERlY2xhcmF0aW9uc0pTT04uZm9yRWFjaCgodG9wTGV2ZWxEZWNsYXJhdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0b3BMZXZlbERlY2xhcmF0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJVTEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBWElPTV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT01CSU5BVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09OU1RSVUNUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCBjb250ZXh0SlNPTikge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gZmFsc2UsIC8vL1xuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBudWxsLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gbnVsbCxcbiAgICAgICAgICBydWxlcyA9IG51bGwsXG4gICAgICAgICAgYXhpb21zID0gbnVsbCxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IG51bGwsXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBGaWxlUmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGVSZWxlYXNlQ29udGV4dCIsImxvZyIsIm5hbWUiLCJlbnRyaWVzIiwiY2FsbGJhY2tzIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwicmVsZWFzZUNvbnRleHRzIiwiY29udGV4dEpTT04iLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb250ZXh0SlNPTiIsImdldFR5cGVzIiwicmVsZWFzZU5hbWVzIiwicmVsZWFzZU5hbWUiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJmb3JFYWNoIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImluaXRpYWxpc2UiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwidG9wTGV2ZWxEZWNsYXJhdGlvbnNKU09OIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJjYWxsYmFjayIsImNvbnRlbnQiLCJydWxlTmFtZSIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwidG9wTGV2ZWxEZWNsYXJhdGlvbkpTT04iLCJqc29uIiwia2luZCIsIlRZUEVfS0lORCIsInR5cGUiLCJUeXBlIiwiZnJvbUpTT04iLCJSVUxFX0tJTkQiLCJSdWxlIiwiQVhJT01fS0lORCIsIkF4aW9tIiwiQ09NQklOQVRPUl9LSU5EIiwiY29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJDT05TVFJVQ1RPUl9LSU5EIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdz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