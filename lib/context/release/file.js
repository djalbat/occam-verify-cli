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
var FileReleaseContext = /*#__PURE__*/ function(ReleaseContext) {
    _inherits(FileReleaseContext, ReleaseContext);
    var _super = _createSuper(FileReleaseContext);
    function FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, combinators, constructors) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);
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
                var types = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    (0, _array.push)(types, this.types);
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
                    (0, _array.push)(rules, this.rules);
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
                    (0, _array.push)(axioms, this.axioms);
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
                    this.rules.forEach(function(rule) {
                        var ruleLabels = rule.getLabels();
                        (0, _array.push)(labels, ruleLabels);
                    });
                    this.axioms.forEach(function(axiom) {
                        var axiomLabels = axiom.getLabels();
                        (0, _array.push)(labels, axiomLabels);
                    });
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
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
                var combinators = [], releaseName = this.getReleaseName(), releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);
                if (!releaseNamesIncludesReleaseName) {
                    releaseNames.push(releaseName);
                    (0, _array.push)(combinators, this.combinators);
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
                    (0, _array.push)(constructors, this.constructors);
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
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                var _this = this;
                _get(_getPrototypeOf(FileReleaseContext.prototype), "initialise", this).call(this, dependencyReleaseContexts);
                var jsonArray = this.contextJSON, callback = function(content, ruleName) {
                    var ruleMap = _this.florenceParser.getRuleMap(), tokens = _this.florenceLexer.tokenise(content), rule = ruleMap[ruleName], node = _this.florenceParser.parse(tokens, rule);
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
                var verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, dependencyReleaseContexts = null, types = [], rules = [], axioms = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUeXBlIGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uLy4uL2F4aW9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi8uLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IHsgUlVMRV9LSU5ELCBUWVBFX0tJTkQsIEFYSU9NX0tJTkQsIENPTUJJTkFUT1JfS0lORCwgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuLi8uLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUmVsZWFzZUNvbnRleHQgZXh0ZW5kcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycykge1xuICAgIHN1cGVyKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5jb250ZXh0SlNPTiA9IGNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0Q29udGV4dEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dEpTT047XG4gIH1cblxuICBnZXRUeXBlcyhyZWxlYXNlTmFtZXMgPSBbXSkge1xuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgYXhpb21zID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMYWJlbHMocmVsZWFzZU5hbWVzID0gW10pIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMocmVsZWFzZU5hbWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IHRoaXMuZ2V0UmVsZWFzZU5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZXNJbmNsdWRlc1JlbGVhc2VOYW1lID0gcmVsZWFzZU5hbWVzLmluY2x1ZGVzKHJlbGVhc2VOYW1lKTtcblxuICAgIGlmICghcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSkge1xuICAgICAgcmVsZWFzZU5hbWVzLnB1c2gocmVsZWFzZU5hbWUpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhyZWxlYXNlTmFtZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSB0aGlzLmdldFJlbGVhc2VOYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSA9IHJlbGVhc2VOYW1lcy5pbmNsdWRlcyhyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAoIXJlbGVhc2VOYW1lc0luY2x1ZGVzUmVsZWFzZU5hbWUpIHtcbiAgICAgIHJlbGVhc2VOYW1lcy5wdXNoKHJlbGVhc2VOYW1lKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKHJlbGVhc2VOYW1lcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBpbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgY29uc3QganNvbkFycmF5ID0gdGhpcy5jb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGNhbGxiYWNrID0gKGNvbnRlbnQsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWFwID0gdGhpcy5mbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgICAgICAgICB0b2tlbnMgPSB0aGlzLmZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICB9O1xuXG4gICAganNvbkFycmF5LmZvckVhY2goKGpzb24pID0+IHtcbiAgICAgIGNvbnN0IHsga2luZCB9ID0ganNvbjtcblxuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgVFlQRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUlVMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEFYSU9NX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTUJJTkFUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT05TVFJVQ1RPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVFbnRyaWVzQ2FsbGJhY2tzQW5kQ29udGV4dEpTT04obG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIGNvbnRleHRKU09OKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSB0cnVlLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBudWxsLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBGaWxlUmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgY29udGV4dEpTT04sIHR5cGVzLCBydWxlcywgYXhpb21zLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlUmVsZWFzZUNvbnRleHQiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsImNhbGxiYWNrcyIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJjb250ZXh0SlNPTiIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnRleHRKU09OIiwiZ2V0VHlwZXMiLCJyZWxlYXNlTmFtZXMiLCJyZWxlYXNlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWVzSW5jbHVkZXNSZWxlYXNlTmFtZSIsImluY2x1ZGVzIiwicHVzaCIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJmb3JFYWNoIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImluaXRpYWxpc2UiLCJqc29uQXJyYXkiLCJjYWxsYmFjayIsImNvbnRlbnQiLCJydWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJqc29uIiwia2luZCIsIlRZUEVfS0lORCIsInR5cGUiLCJUeXBlIiwiZnJvbUpTT04iLCJSVUxFX0tJTkQiLCJSdWxlIiwiQVhJT01fS0lORCIsIkF4aW9tIiwiQ09NQklOQVRPUl9LSU5EIiwiY29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJDT05TVFJVQ1RPUl9LSU5EIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozs0REFaTTt5REFFVjt5REFDQTswREFDQzsrREFDSztnRUFDQztxQkFFSDs2QkFDMkI7cUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUEsbUJBQ1BDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyx5QkFBeUIsRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7OEJBRHZLZjs7a0NBRVhDLEtBQUtDLE1BQU1DLFNBQVNDLFdBQVdDLFVBQVVDLGVBQWVDLGVBQWVDLGdCQUFnQkM7UUFFN0YsTUFBS0UsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsV0FBVyxHQUFHQTtRQUNuQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtMLFdBQVcsR0FBR0E7OztpQkFURlY7O1lBWW5CZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ04sV0FBVztZQUN6Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxXQUE0QjtvQkFBbkJDLGVBQUFBLGlFQUFlLEVBQUU7Z0JBQ3hCLElBQU1QLFFBQVEsRUFBRSxFQUNWUSxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0Msa0NBQWtDSCxhQUFhSSxRQUFRLENBQUNIO2dCQUU5RCxJQUFJLENBQUNFLGlDQUFpQztvQkFDcENILGFBQWFLLElBQUksQ0FBQ0o7b0JBRWxCSSxJQUFBQSxXQUFJLEVBQUNaLE9BQU8sSUFBSSxDQUFDQSxLQUFLO29CQUV0QixJQUFNRiw0QkFBNEIsSUFBSSxDQUFDZSw0QkFBNEI7b0JBRW5FZiwwQkFBMEJnQixPQUFPLENBQUMsU0FBQ0MsZ0JBQW1CO3dCQUNwRCxJQUFNQyxzQkFBc0JELGVBQWVULFFBQVEsQ0FBQ0M7d0JBRXBESyxJQUFBQSxXQUFJLEVBQUNaLE9BQU9nQjtvQkFDZDtnQkFDRixDQUFDO2dCQUVELE9BQU9oQjtZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxXQUE0QjtvQkFBbkJWLGVBQUFBLGlFQUFlLEVBQUU7Z0JBQ3hCLElBQU1OLFFBQVEsRUFBRSxFQUNWTyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0Msa0NBQWtDSCxhQUFhSSxRQUFRLENBQUNIO2dCQUU5RCxJQUFJLENBQUNFLGlDQUFpQztvQkFDcENILGFBQWFLLElBQUksQ0FBQ0o7b0JBRWxCSSxJQUFBQSxXQUFJLEVBQUNYLE9BQU8sSUFBSSxDQUFDQSxLQUFLO29CQUV0QixJQUFNSCw0QkFBNEIsSUFBSSxDQUFDZSw0QkFBNEI7b0JBRW5FZiwwQkFBMEJnQixPQUFPLENBQUMsU0FBQ0MsZ0JBQW1CO3dCQUNwRCxJQUFNRyxzQkFBc0JILGVBQWVFLFFBQVEsQ0FBQ1Y7d0JBRXBESyxJQUFBQSxXQUFJLEVBQUNYLE9BQU9pQjtvQkFDZDtnQkFDRixDQUFDO2dCQUVELE9BQU9qQjtZQUNUOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxZQUE2QjtvQkFBbkJaLGVBQUFBLGlFQUFlLEVBQUU7Z0JBQ3pCLElBQU1MLFNBQVMsRUFBRSxFQUNYTSxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0Msa0NBQWtDSCxhQUFhSSxRQUFRLENBQUNIO2dCQUU5RCxJQUFJLENBQUNFLGlDQUFpQztvQkFDcENILGFBQWFLLElBQUksQ0FBQ0o7b0JBRWxCSSxJQUFBQSxXQUFJLEVBQUNWLFFBQVEsSUFBSSxDQUFDQSxNQUFNO29CQUV4QixJQUFNSiw0QkFBNEIsSUFBSSxDQUFDZSw0QkFBNEI7b0JBRW5FZiwwQkFBMEJnQixPQUFPLENBQUMsU0FBQ0MsZ0JBQW1CO3dCQUNwRCxJQUFNSyx1QkFBdUJMLGVBQWVJLFNBQVMsQ0FBQ1o7d0JBRXRESyxJQUFBQSxXQUFJLEVBQUNWLFFBQVFrQjtvQkFDZjtnQkFDRixDQUFDO2dCQUVELE9BQU9sQjtZQUNUOzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQSxZQUE2QjtvQkFBbkJkLGVBQUFBLGlFQUFlLEVBQUU7Z0JBQ3pCLElBQU1lLFNBQVMsRUFBRSxFQUNYZCxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0Msa0NBQWtDSCxhQUFhSSxRQUFRLENBQUNIO2dCQUU5RCxJQUFJLENBQUNFLGlDQUFpQztvQkFDcENILGFBQWFLLElBQUksQ0FBQ0o7b0JBRWxCLElBQUksQ0FBQ1AsS0FBSyxDQUFDYSxPQUFPLENBQUMsU0FBQ1MsTUFBUzt3QkFDM0IsSUFBTUMsYUFBYUQsS0FBS0YsU0FBUzt3QkFFakNULElBQUFBLFdBQUksRUFBQ1UsUUFBUUU7b0JBQ2Y7b0JBRUEsSUFBSSxDQUFDdEIsTUFBTSxDQUFDWSxPQUFPLENBQUMsU0FBQ1csT0FBVTt3QkFDN0IsSUFBTUMsY0FBY0QsTUFBTUosU0FBUzt3QkFFbkNULElBQUFBLFdBQUksRUFBQ1UsUUFBUUk7b0JBQ2Y7b0JBRUEsSUFBTTVCLDRCQUE0QixJQUFJLENBQUNlLDRCQUE0QjtvQkFFbkVmLDBCQUEwQmdCLE9BQU8sQ0FBQyxTQUFDQyxnQkFBbUI7d0JBQ3BELElBQU1LLHVCQUF1QkwsZUFBZUksU0FBUyxDQUFDWjt3QkFFdERLLElBQUFBLFdBQUksRUFBQ1UsUUFBUUY7b0JBQ2Y7Z0JBQ0YsQ0FBQztnQkFFRCxPQUFPRTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFrQztvQkFBbkJwQixlQUFBQSxpRUFBZSxFQUFFO2dCQUM5QixJQUFNSixjQUFjLEVBQUUsRUFDaEJLLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDQyxrQ0FBa0NILGFBQWFJLFFBQVEsQ0FBQ0g7Z0JBRTlELElBQUksQ0FBQ0UsaUNBQWlDO29CQUNwQ0gsYUFBYUssSUFBSSxDQUFDSjtvQkFFbEJJLElBQUFBLFdBQUksRUFBQ1QsYUFBYSxJQUFJLENBQUNBLFdBQVc7b0JBRWxDLElBQU1MLDRCQUE0QixJQUFJLENBQUNlLDRCQUE0QjtvQkFFbkVmLDBCQUEwQmdCLE9BQU8sQ0FBQyxTQUFDQyxnQkFBbUI7d0JBQ3BELElBQU1hLDRCQUE0QmIsZUFBZVksY0FBYyxDQUFDcEI7d0JBRWhFSyxJQUFBQSxXQUFJLEVBQUNULGFBQWF5QjtvQkFDcEI7Z0JBQ0YsQ0FBQztnQkFFRCxPQUFPekI7WUFDVDs7O1lBRUEwQixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQW1DO29CQUFuQnRCLGVBQUFBLGlFQUFlLEVBQUU7Z0JBQy9CLElBQU1ILGVBQWUsRUFBRSxFQUNqQkksY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNDLGtDQUFrQ0gsYUFBYUksUUFBUSxDQUFDSDtnQkFFOUQsSUFBSSxDQUFDRSxpQ0FBaUM7b0JBQ3BDSCxhQUFhSyxJQUFJLENBQUNKO29CQUVsQkksSUFBQUEsV0FBSSxFQUFDUixjQUFjLElBQUksQ0FBQ0EsWUFBWTtvQkFFcEMsSUFBTU4sNEJBQTRCLElBQUksQ0FBQ2UsNEJBQTRCO29CQUVuRWYsMEJBQTBCZ0IsT0FBTyxDQUFDLFNBQUNDLGdCQUFtQjt3QkFDcEQsSUFBTWUsNkJBQTZCZixlQUFlYyxlQUFlLENBQUN0Qjt3QkFFbEVLLElBQUFBLFdBQUksRUFBQ1IsY0FBYzBCO29CQUNyQjtnQkFDRixDQUFDO2dCQUVELE9BQU8xQjtZQUNUOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXakMseUJBQXlCLEVBQUU7O2dCQUNwQyxxQkEvSmlCVCwrQkErSlgwQyxjQUFOLElBQUssYUFBWWpDO2dCQUVqQixJQUFNa0MsWUFBWSxJQUFJLENBQUNqQyxXQUFXLEVBQzVCa0MsV0FBVyxTQUFDQyxTQUFTQyxVQUFhO29CQUNoQyxJQUFNQyxVQUFVLE1BQUt2QyxjQUFjLENBQUN3QyxVQUFVLElBQ3hDQyxTQUFTLE1BQUsxQyxhQUFhLENBQUMyQyxRQUFRLENBQUNMLFVBQ3JDWCxPQUFPYSxPQUFPLENBQUNELFNBQVMsRUFDeEJLLE9BQU8sTUFBSzNDLGNBQWMsQ0FBQzRDLEtBQUssQ0FBQ0gsUUFBUWY7b0JBRS9DLE9BQU9pQjtnQkFDVDtnQkFFTlIsVUFBVWxCLE9BQU8sQ0FBQyxTQUFDNEIsTUFBUztvQkFDMUIsSUFBTSxBQUFFQyxPQUFTRCxLQUFUQztvQkFFUixPQUFRQTt3QkFDTixLQUFLQyxnQkFBUzs0QkFBRTtnQ0FDZCxJQUFNQyxPQUFPQyxhQUFJLENBQUNDLFFBQVEsQ0FBQ0w7Z0NBRTNCLE1BQUsxQyxLQUFLLENBQUNZLElBQUksQ0FBQ2lDO2dDQUVoQixLQUFNOzRCQUNSO3dCQUVBLEtBQUtHLGdCQUFTOzRCQUFFO2dDQUNkLElBQU16QixPQUFPMEIsYUFBSSxDQUFDRixRQUFRLENBQUNMLE1BQU1UO2dDQUVqQyxNQUFLaEMsS0FBSyxDQUFDVyxJQUFJLENBQUNXO2dDQUVoQixLQUFNOzRCQUNSO3dCQUVBLEtBQUsyQixpQkFBVTs0QkFBRTtnQ0FDZixJQUFNekIsUUFBUTBCLGNBQUssQ0FBQ0osUUFBUSxDQUFDTCxNQUFNVDtnQ0FFbkMsTUFBSy9CLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDYTtnQ0FFakIsS0FBTTs0QkFDUjt3QkFFQSxLQUFLMkIsc0JBQWU7NEJBQUU7Z0NBQ3BCLElBQU1DLGFBQWFDLG1CQUFVLENBQUNQLFFBQVEsQ0FBQ0wsTUFBTVQ7Z0NBRTdDLE1BQUs5QixXQUFXLENBQUNTLElBQUksQ0FBQ3lDO2dDQUV0QixLQUFNOzRCQUNSO3dCQUVBLEtBQUtFLHVCQUFnQjs0QkFBRTtnQ0FDckIsSUFBTUMsY0FBY0Msb0JBQVcsQ0FBQ1YsUUFBUSxDQUFDTCxNQUFNVDtnQ0FFL0MsTUFBSzdCLFlBQVksQ0FBQ1EsSUFBSSxDQUFDNEM7Z0NBRXZCLEtBQU07NEJBQ1I7b0JBQ0Y7Z0JBQ0Y7WUFDRjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwwQ0FBMENwRSxHQUFHLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVNLFdBQVcsRUFBRTtnQkFDM0YsSUFBTUwsV0FBVyxJQUFJLEVBQ2ZDLGdCQUFnQmdFLElBQUFBLDhDQUErQixFQUFDcEUsTUFBTUMsVUFDdERJLGdCQUFnQixJQUFJLEVBQ3BCQyxpQkFBaUIsSUFBSSxFQUNyQkMsNEJBQTRCLElBQUksRUFDaENFLFFBQVEsRUFBRSxFQUNWQyxRQUFRLEVBQUUsRUFDVkMsU0FBUyxFQUFFLEVBQ1hDLGNBQWMsRUFBRSxFQUNoQkMsZUFBZSxFQUFFLEVBQ2pCVyxpQkFBaUIsSUFyT04xQixtQkFxTzZCQyxLQUFLQyxNQUFNQyxTQUFTQyxXQUFXQyxVQUFVQyxlQUFlQyxlQUFlQyxnQkFBZ0JDLDJCQUEyQkMsYUFBYUMsT0FBT0MsT0FBT0MsUUFBUUMsYUFBYUM7Z0JBRWhOLE9BQU9XO1lBQ1Q7OztXQXhPbUIxQjtFQUEyQnVFLGdCQUFjIn0=