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
                var ruleMap = this.florenceParser.getRuleMap(), jsonArray = this.contextJSON, callback = function(content, ruleName) {
                    var tokens = _this.florenceLexer.tokenise(content), rule = ruleMap[ruleName], node = _this.florenceParser.parse(tokens, rule);
                    return node;
                };
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUeXBlIGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uLy4uL2F4aW9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi8uLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IHsgUlVMRV9LSU5ELCBUWVBFX0tJTkQsIEFYSU9NX0tJTkQsIENPTUJJTkFUT1JfS0lORCwgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuLi8uLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUmVsZWFzZUNvbnRleHQgZXh0ZW5kcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgY29udGV4dEpTT04sIHR5cGVzLCBydWxlcywgYXhpb21zLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKSB7XG4gICAgc3VwZXIobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMuY29udGV4dEpTT04gPSBjb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldENvbnRleHRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0VHlwZXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50aGlzLnR5cGVzXG4gICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5ydWxlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmF4aW9tc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExhYmVscyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gdGhpcy5nZXRSZWxlYXNlTmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUgPSByZWxlYXNlTmFtZXMuaW5jbHVkZXMocmVsZWFzZU5hbWUpO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLmNvbWJpbmF0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuY29uc3RydWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGNvbnN0IHJ1bGVNYXAgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBqc29uQXJyYXkgPSB0aGlzLmNvbnRleHRKU09OLCAgLy8vXG4gICAgICAgICAgY2FsbGJhY2sgPSAoY29udGVudCwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH07XG5cbiAgICBqc29uQXJyYXkuZm9yRWFjaCgoanNvbikgPT4ge1xuICAgICAgY29uc3QgeyBraW5kIH0gPSBqc29uO1xuXG4gICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBUWVBFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSVUxFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQVhJT01fS0lORDoge1xuICAgICAgICAgIGNvbnN0IGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09NQklOQVRPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTlNUUlVDVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUVudHJpZXNDYWxsYmFja3NBbmRDb250ZXh0SlNPTihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgY29udGV4dEpTT04pIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgRmlsZVJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHJlbGVhc2VDb250ZXh0cywgY29udGV4dEpTT04sIHR5cGVzLCBydWxlcywgYXhpb21zLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlUmVsZWFzZUNvbnRleHQiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsImNhbGxiYWNrcyIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInJlbGVhc2VDb250ZXh0cyIsImNvbnRleHRKU09OIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29udGV4dEpTT04iLCJnZXRUeXBlcyIsInJlbGVhc2VOYW1lcyIsInJlbGVhc2VOYW1lIiwiZ2V0UmVsZWFzZU5hbWUiLCJyZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lIiwiaW5jbHVkZXMiLCJwdXNoIiwiZm9yRWFjaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJpbml0aWFsaXNlIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwianNvbkFycmF5IiwiY2FsbGJhY2siLCJjb250ZW50IiwicnVsZU5hbWUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJmcm9tSlNPTiIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJDT01CSU5BVE9SX0tJTkQiLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsIkNPTlNUUlVDVE9SX0tJTkQiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbUxvZ05hbWVFbnRyaWVzQ2FsbGJhY2tzQW5kQ29udGV4dEpTT04iLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzREQVpNO3lEQUVWO3lEQUNBOzBEQUNDOytEQUNLO2dFQUNDO3FCQUVIOzZCQUMyQjtxQkFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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