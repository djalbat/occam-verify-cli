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
    function FileReleaseContext(log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, contextJSON) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts);
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
            key: "fromJSON",
            value: function fromJSON() {
                var _this = this;
                var context = this, jsonArray = this.contextJSON;
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSON(json, context);
                                _this.types.push(type);
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSON(json, context);
                                _this.rules.push(rule);
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSON(json, context);
                                _this.axioms.push(axiom);
                                break;
                            }
                        case _kinds.LEMMA_KIND:
                            {
                                var lemma = _lemma.default.fromJSON(json, context);
                                _this.lemmas.push(lemma);
                                break;
                            }
                        case _kinds.THEOREM_KIND:
                            {
                                var theorem = _theorem.default.fromJSON(json, context);
                                _this.theorems.push(theorem);
                                break;
                            }
                        case _kinds.CONJECTURE_KIND:
                            {
                                var conjecture = _conjecture.default.fromJSON(json, context);
                                _this.conjectures.push(conjecture);
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSON(json, context);
                                _this.combinators.push(combinator);
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSON(json, context);
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
            key: "fromLogNameEntriesAndContextJSON",
            value: function fromLogNameEntriesAndContextJSON(log, name, entries, contextJSON) {
                var lexer = null, parser = null, verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), dependencyReleaseContexts = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], conjectures = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, contextJSON);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUeXBlIGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uLy4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uLy4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vLi4vdGhlb3JlbVwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uLy4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi8uLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uLy4uL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBSVUxFX0tJTkQsIFRZUEVfS0lORCwgQVhJT01fS0lORCwgTEVNTUFfS0lORCwgVEhFT1JFTV9LSU5ELCBDT05KRUNUVVJFX0tJTkQsIENPTUJJTkFUT1JfS0lORCwgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuLi8uLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUmVsZWFzZUNvbnRleHQgZXh0ZW5kcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgY29udGV4dEpTT04pIHtcbiAgICBzdXBlcihsb2csIG5hbWUsIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5jb250ZXh0SlNPTiA9IGNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0Q29udGV4dEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dEpTT047XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKCkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGZyb21KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqc29uQXJyYXkgPSB0aGlzLmNvbnRleHRKU09OO1xuXG4gICAganNvbkFycmF5LmZvckVhY2goKGpzb24pID0+IHtcbiAgICAgIGNvbnN0IHsga2luZCB9ID0ganNvbjtcblxuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgVFlQRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUlVMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQVhJT01fS0lORDoge1xuICAgICAgICAgIGNvbnN0IGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBMRU1NQV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFRIRU9SRU1fS0lORDoge1xuICAgICAgICAgIGNvbnN0IHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTkpFQ1RVUkVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTUJJTkFUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTlNUUlVDVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMuZnJvbUpTT04oKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUVudHJpZXNBbmRDb250ZXh0SlNPTihsb2csIG5hbWUsIGVudHJpZXMsIGNvbnRleHRKU09OKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBGaWxlUmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cywgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBjb250ZXh0SlNPTik7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZVJlbGVhc2VDb250ZXh0IiwibG9nIiwibmFtZSIsImVudHJpZXMiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiY29udGV4dEpTT04iLCJnZXRDb250ZXh0SlNPTiIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRBeGlvbXMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImZyb21KU09OIiwiY29udGV4dCIsImpzb25BcnJheSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJSVUxFX0tJTkQiLCJSdWxlIiwiQVhJT01fS0lORCIsIkF4aW9tIiwiTEVNTUFfS0lORCIsImxlbW1hIiwiTGVtbWEiLCJUSEVPUkVNX0tJTkQiLCJUaGVvcmVtIiwiQ09OSkVDVFVSRV9LSU5EIiwiY29uamVjdHVyZSIsIkNvbmplY3R1cmUiLCJDT01CSU5BVE9SX0tJTkQiLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsIkNPTlNUUlVDVE9SX0tJTkQiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiaW5pdGlhbGlzZSIsImZyb21Mb2dOYW1lRW50cmllc0FuZENvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7NERBZk07eURBRVY7eURBQ0E7MERBQ0M7MERBQ0E7NERBQ0U7K0RBQ0c7K0RBQ0E7Z0VBQ0M7cUJBRUg7NkJBQzJCO3FCQUMrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhILElBQUEs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