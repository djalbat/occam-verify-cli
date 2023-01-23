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
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../rule"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../../type"));
var _axiom = /*#__PURE__*/ _interopRequireDefault(require("../../axiom"));
var _lemma = /*#__PURE__*/ _interopRequireDefault(require("../../lemma"));
var _theorem = /*#__PURE__*/ _interopRequireDefault(require("../../theorem"));
var _conjecture = /*#__PURE__*/ _interopRequireDefault(require("../../conjecture"));
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
    function FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);
        _this.types = types;
        _this.rules = rules;
        _this.axioms = axioms;
        _this.lemmas = lemmas;
        _this.theorems = theorems;
        _this.conjectures = conjectures;
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
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    (0, _array.push)(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                });
                this.theorems.forEach(function(theorem) {
                    var theoremLabels = theorem.getLabels();
                    (0, _array.push)(labels, theoremLabels);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencies);
                        (0, _array.push)(labels, releaseContextAxioms);
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
                (0, _array.push)(types, this.types);
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
                (0, _array.push)(rules, this.rules);
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
                (0, _array.push)(axioms, this.axioms);
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
                var theorems = [];
                (0, _array.push)(theorems, this.theorems);
                return theorems;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                (0, _array.push)(theorems, this.theorems);
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTheorems = releaseContext.getTheorems(includeDependencies);
                        (0, _array.push)(theorems, releaseContextTheorems);
                    });
                }
                return theorems;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                (0, _array.push)(conjectures, this.conjectures);
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConjectures = releaseContext.getConjectures(includeDependencies);
                        (0, _array.push)(conjectures, releaseContextConjectures);
                    });
                }
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                (0, _array.push)(combinators, this.combinators);
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
                (0, _array.push)(constructors, this.constructors);
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
            key: "nodeFromContentAndRuleName",
            value: function nodeFromContentAndRuleName(content, ruleName) {
                var ruleMap = this.florenceParser.getRuleMap(), rule = ruleMap[ruleName], tokens = this.florenceLexer.tokenise(content), node = this.florenceParser.parse(tokens, rule);
                if (node !== null) {
                    (0, _occamGrammarUtilities.rewriteNodes)(node);
                }
                return node;
            }
        },
        {
            key: "fromJSON",
            value: function fromJSON() {
                var _this = this;
                var jsonArray = this.contextJSON, releaseContext = this; ///
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSON(json, releaseContext);
                                _this.types.push(type);
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSON(json, releaseContext);
                                _this.rules.push(rule);
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSON(json, releaseContext);
                                _this.axioms.push(axiom);
                                break;
                            }
                        case _kinds.LEMMA_KIND:
                            {
                                var lemma = _lemma.default.fromJSON(json, releaseContext);
                                _this.lemmas.push(lemma);
                                break;
                            }
                        case _kinds.THEOREM_KIND:
                            {
                                var theorem = _theorem.default.fromJSON(json, releaseContext);
                                _this.theorems.push(theorem);
                                break;
                            }
                        case _kinds.CONJECTURE_KIND:
                            {
                                var conjecture = _conjecture.default.fromJSON(json, releaseContext);
                                _this.conjectures.push(conjecture);
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSON(json, releaseContext);
                                _this.combinators.push(combinator);
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSON(json, releaseContext);
                                _this.constructors.push(constructor);
                                break;
                            }
                    }
                });
            }
        },
        {
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                _get(_getPrototypeOf(FileReleaseContext.prototype), "initialise", this).call(this, dependencyReleaseContexts);
                this.fromJSON();
            }
        }
    ], [
        {
            key: "fromLogNameEntriesCallbacksAndContextJSON",
            value: function fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON) {
                var verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, dependencyReleaseContexts = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], conjectures = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi8uLi9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuLi8uLi9sZW1tYVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uLy4uL3RoZW9yZW1cIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi8uLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi8uLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IHsgUlVMRV9LSU5ELCBUWVBFX0tJTkQsIEFYSU9NX0tJTkQsIExFTU1BX0tJTkQsIFRIRU9SRU1fS0lORCwgQ09OSkVDVFVSRV9LSU5ELCBDT01CSU5BVE9SX0tJTkQsIENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi4vLi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVJlbGVhc2VDb250ZXh0IGV4dGVuZHMgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKSB7XG4gICAgc3VwZXIobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMuY29udGV4dEpTT04gPSBjb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldENvbnRleHRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcygpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBub2RlRnJvbUNvbnRlbnRBbmRSdWxlTmFtZShjb250ZW50LCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5mbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnJvbUpTT04oKSB7XG4gICAgY29uc3QganNvbkFycmF5ID0gdGhpcy5jb250ZXh0SlNPTixcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIGpzb25BcnJheS5mb3JFYWNoKChqc29uKSA9PiB7XG4gICAgICBjb25zdCB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSVUxFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQVhJT01fS0lORDoge1xuICAgICAgICAgIGNvbnN0IGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVNTUFfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGxlbW1hID0gTGVtbWEuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgVEhFT1JFTV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTkpFQ1RVUkVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT01CSU5BVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09OU1RSVUNUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMuZnJvbUpTT04oKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUVudHJpZXNDYWxsYmFja3NBbmRDb250ZXh0SlNPTihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgY29udGV4dEpTT04pIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRydWUsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG51bGwsXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBGaWxlUmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBjYWxsYmFja3MsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgY29udGV4dEpTT04sIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZVJlbGVhc2VDb250ZXh0IiwibG9nIiwibmFtZSIsImVudHJpZXMiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY29udGV4dEpTT04iLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29udGV4dEpTT04iLCJnZXRMYWJlbHMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0QXhpb21zIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJub2RlRnJvbUNvbnRlbnRBbmRSdWxlTmFtZSIsImNvbnRlbnQiLCJydWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXMiLCJmcm9tSlNPTiIsImpzb25BcnJheSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJSVUxFX0tJTkQiLCJSdWxlIiwiQVhJT01fS0lORCIsIkF4aW9tIiwiTEVNTUFfS0lORCIsImxlbW1hIiwiTGVtbWEiLCJUSEVPUkVNX0tJTkQiLCJUaGVvcmVtIiwiQ09OSkVDVFVSRV9LSU5EIiwiY29uamVjdHVyZSIsIkNvbmplY3R1cmUiLCJDT01CSU5BVE9SX0tJTkQiLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsIkNPTlNUUlVDVE9SX0tJTkQiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiaW5pdGlhbGlzZSIsImZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7NERBakJNO3FDQUVFO3lEQUVaO3lEQUNBOzBEQUNDOzBEQUNBOzREQUNFOytEQUNHOytEQUNBO2dFQUNDO3FCQUVIOzZCQUMyQjtxQkFDK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoSCxJQUFBLEFBQU1BLG1DQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxtQkFDUEMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLHlCQUF5QixFQUFFQyxXQUFXLEVBQUVDLEtB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