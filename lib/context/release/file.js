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
var _theorem = /*#__PURE__*/ _interopRequireDefault(require("../../theorem"));
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
    function FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, theorems, combinators, constructors) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);
        _this.types = types;
        _this.rules = rules;
        _this.axioms = axioms;
        _this.lemmas = lemmas;
        _this.theorems = theorems;
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
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                var _this = this;
                _get(_getPrototypeOf(FileReleaseContext.prototype), "initialise", this).call(this, dependencyReleaseContexts);
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
                        case _kinds.THEOREM_KIND:
                            {
                                var theorem = _theorem.default.fromJSON(json, releaseContext);
                                _this.theorems.push(theorem);
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
        }
    ], [
        {
            key: "fromLogNameEntriesCallbacksAndContextJSON",
            value: function fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON) {
                var verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, dependencyReleaseContexts = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, theorems, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi8uLi9heGlvbVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uLy4uL3RoZW9yZW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi8uLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uLy4uL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBSVUxFX0tJTkQsIFRZUEVfS0lORCwgQVhJT01fS0lORCwgVEhFT1JFTV9LSU5ELCBDT01CSU5BVE9SX0tJTkQsIENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi4vLi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVJlbGVhc2VDb250ZXh0IGV4dGVuZHMgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICBzdXBlcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLmNvbnRleHRKU09OID0gY29udGV4dEpTT047XG4gIH1cblxuICBnZXRDb250ZXh0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgbm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUoY29udGVudCwgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTWFwID0gdGhpcy5mbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBjb25zdCBqc29uQXJyYXkgPSB0aGlzLmNvbnRleHRKU09OLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAganNvbkFycmF5LmZvckVhY2goKGpzb24pID0+IHtcbiAgICAgIGNvbnN0IHsga2luZCB9ID0ganNvbjtcblxuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgVFlQRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJVTEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBWElPTV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBUSEVPUkVNX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09NQklOQVRPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTlNUUlVDVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUVudHJpZXNDYWxsYmFja3NBbmRDb250ZXh0SlNPTihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgY29udGV4dEpTT04pIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRydWUsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG51bGwsXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgRmlsZVJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZVJlbGVhc2VDb250ZXh0IiwibG9nIiwibmFtZSIsImVudHJpZXMiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY29udGV4dEpTT04iLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnRleHRKU09OIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldEF4aW9tcyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJjb250ZW50IiwicnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiaW5pdGlhbGlzZSIsImpzb25BcnJheSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJmcm9tSlNPTiIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJUSEVPUkVNX0tJTkQiLCJUaGVvcmVtIiwiQ09NQklOQVRPUl9LSU5EIiwiY29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJDT05TVFJVQ1RPUl9LSU5EIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsIlJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7NERBZk07cUNBRUU7eURBRVo7eURBQ0E7MERBQ0M7NERBQ0U7K0RBQ0c7Z0VBQ0M7cUJBRUg7NkJBQzJCO3FCQUNrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7OEJBQUFBO2FBQUFBLG1CQUNQQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMseUJBQXlCLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsWUFBWTs4QkFEekxqQjs7a0NBRVhDLEtBQUtDLE1BQU1DLFNBQVNDLFdBQVdDLFVBQVVDLGVBQWVDLGVBQWVDLGdCQUFnQkM7UUFFN0YsTUFBS0UsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsTUFBTSxHQUFHQTtRQUNkLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsV0FBVyxHQUFHQTtRQUNuQixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtQLFdBQVcsR0FBR0E7OztpQkFYRlY7O1lBY25Ca0IsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ1IsV0FBVztZ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