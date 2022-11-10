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
            key: "getLabels",
            value: function getLabels() {
                var includeDependencyReleaseContexts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    (0, _array.push)(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                });
                if (includeDependencyReleaseContexts) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencyReleaseContexts = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencyReleaseContexts);
                        (0, _array.push)(labels, releaseContextAxioms);
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
                (0, _array.push)(types, this.types);
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
                (0, _array.push)(rules, this.rules);
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
                (0, _array.push)(axioms, this.axioms);
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
                (0, _array.push)(combinators, this.combinators);
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
                (0, _array.push)(constructors, this.constructors);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUeXBlIGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uLy4uL2F4aW9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi8uLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IHsgUlVMRV9LSU5ELCBUWVBFX0tJTkQsIEFYSU9NX0tJTkQsIENPTUJJTkFUT1JfS0lORCwgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuLi8uLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUmVsZWFzZUNvbnRleHQgZXh0ZW5kcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycykge1xuICAgIHN1cGVyKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5jb250ZXh0SlNPTiA9IGNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0Q29udGV4dEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dEpTT047XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIGNvbnN0IGpzb25BcnJheSA9IHRoaXMuY29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBjYWxsYmFjayA9IChjb250ZW50LCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU1hcCA9IHRoaXMuZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgICAgICAgICAgdG9rZW5zID0gdGhpcy5mbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfTtcblxuICAgIGpzb25BcnJheS5mb3JFYWNoKChqc29uKSA9PiB7XG4gICAgICBjb25zdCB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJVTEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBWElPTV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT01CSU5BVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09OU1RSVUNUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCBjb250ZXh0SlNPTikge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gdHJ1ZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgRmlsZVJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZVJlbGVhc2VDb250ZXh0IiwibG9nIiwibmFtZSIsImVudHJpZXMiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY29udGV4dEpTT04iLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb250ZXh0SlNPTiIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldEF4aW9tcyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiaW5pdGlhbGlzZSIsImpzb25BcnJheSIsImNhbGxiYWNrIiwiY29udGVudCIsInJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJmcm9tSlNPTiIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJDT01CSU5BVE9SX0tJTkQiLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsIkNPTlNUUlVDVE9SX0tJTkQiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbUxvZ05hbWVFbnRyaWVzQ2FsbGJhY2tzQW5kQ29udGV4dEpTT04iLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzREQVpNO3lEQUVWO3lEQUNBOzBEQUNDOytEQUNLO2dFQUNDO3FCQUVIOzZCQUMyQjtxQkFDb0M7Ozs7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