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
    function FileReleaseContext(name, entries, messages, lexer, parser, verified, customGrammar, dependencyReleaseContexts, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, contextJSON) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, name, entries, messages, lexer, parser, verified, customGrammar, dependencyReleaseContexts);
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
                var jsonArray = this.contextJSON, lexer = this.getLexer(), parser = this.getParser();
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSON(json, lexer, parser);
                                _this.types.push(type);
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSON(json, lexer, parser);
                                _this.rules.push(rule);
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSON(json, lexer, parser);
                                _this.axioms.push(axiom);
                                break;
                            }
                        case _kinds.LEMMA_KIND:
                            {
                                var lemma = _lemma.default.fromJSON(json, lexer, parser);
                                _this.lemmas.push(lemma);
                                break;
                            }
                        case _kinds.THEOREM_KIND:
                            {
                                var theorem = _theorem.default.fromJSON(json, lexer, parser);
                                _this.theorems.push(theorem);
                                break;
                            }
                        case _kinds.CONJECTURE_KIND:
                            {
                                var conjecture = _conjecture.default.fromJSON(json, lexer, parser);
                                _this.conjectures.push(conjecture);
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSON(json, lexer, parser);
                                _this.combinators.push(combinator);
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSON(json, lexer, parser);
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
            key: "fromNameEntriesMessagesAndContextJSON",
            value: function fromNameEntriesMessagesAndContextJSON(name, entries, messages, contextJSON) {
                var lexer = null, parser = null, verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), dependencyReleaseContexts = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], conjectures = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(name, entries, messages, lexer, parser, verified, customGrammar, dependencyReleaseContexts, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, contextJSON);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBUeXBlIGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uLy4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uLy4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vLi4vdGhlb3JlbVwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uLy4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi8uLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uLy4uL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBSVUxFX0tJTkQsIFRZUEVfS0lORCwgQVhJT01fS0lORCwgTEVNTUFfS0lORCwgVEhFT1JFTV9LSU5ELCBDT05KRUNUVVJFX0tJTkQsIENPTUJJTkFUT1JfS0lORCwgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuLi8uLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlUmVsZWFzZUNvbnRleHQgZXh0ZW5kcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsICBlbnRyaWVzLCBtZXNzYWdlcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgY29udGV4dEpTT04pIHtcbiAgICBzdXBlcihuYW1lLCAgZW50cmllcywgbWVzc2FnZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5jb250ZXh0SlNPTiA9IGNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0Q29udGV4dEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dEpTT047XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKCkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGZyb21KU09OKCkge1xuICAgIGNvbnN0IGpzb25BcnJheSA9IHRoaXMuY29udGV4dEpTT04sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIGpzb25BcnJheS5mb3JFYWNoKChqc29uKSA9PiB7XG4gICAgICBjb25zdCB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJVTEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEFYSU9NX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVNTUFfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGxlbW1hID0gTGVtbWEuZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICAgICAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBUSEVPUkVNX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKTtcblxuICAgICAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT05KRUNUVVJFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKTtcblxuICAgICAgICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT01CSU5BVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKTtcblxuICAgICAgICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT05TVFJVQ1RPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKTtcblxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmZyb21KU09OKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVFbnRyaWVzTWVzc2FnZXNBbmRDb250ZXh0SlNPTihuYW1lLCBlbnRyaWVzLCBtZXNzYWdlcywgY29udGV4dEpTT04pIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWUsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IEZpbGVSZWxlYXNlQ29udGV4dChuYW1lLCAgZW50cmllcywgbWVzc2FnZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIGNvbnRleHRKU09OKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlUmVsZWFzZUNvbnRleHQiLCJuYW1lIiwiZW50cmllcyIsIm1lc3NhZ2VzIiwibGV4ZXIiLCJwYXJzZXIiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsImNvbnRleHRKU09OIiwiZ2V0Q29udGV4dEpTT04iLCJnZXRMYWJlbHMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0QXhpb21zIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJmcm9tSlNPTiIsImpzb25BcnJheSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwianNvbiIsImtpbmQiLCJUWVBFX0tJTkQiLCJ0eXBlIiwiVHlwZSIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJMRU1NQV9LSU5EIiwibGVtbWEiLCJMZW1tYSIsIlRIRU9SRU1fS0lORCIsIlRoZW9yZW0iLCJDT05KRUNUVVJFX0tJTkQiLCJjb25qZWN0dXJlIiwiQ29uamVjdHVyZSIsIkNPTUJJTkFUT1JfS0lORCIsImNvbWJpbmF0b3IiLCJDb21iaW5hdG9yIiwiQ09OU1RSVUNUT1JfS0lORCIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJpbml0aWFsaXNlIiwiZnJvbU5hbWVFbnRyaWVzTWVzc2FnZXNBbmRDb250ZXh0SlNPTiIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJSZWxlYXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFpQnFCQTs7OzREQWZNO3lEQUVWO3lEQUNBOzBEQUNDOzBEQUNBOzREQUNFOytEQUNHOytEQUNBO2dFQUNDO3FC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