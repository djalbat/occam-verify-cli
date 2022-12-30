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
    function FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, combinators, constructors) {
        _classCallCheck(this, FileReleaseContext);
        var _this;
        _this = _super.call(this, log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);
        _this.types = types;
        _this.rules = rules;
        _this.axioms = axioms;
        _this.lemmas = lemmas;
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
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                (0, _array.push)(lemmas, this.lemmas);
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextLemmas = releaseContext.getLemmas(includeDependencies);
                        (0, _array.push)(lemmas, releaseContextLemmas);
                    });
                }
                return lemmas;
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
                        case _kinds.LEMMA_KIND:
                            {
                                var lemma = Lemma.fromJSON(json, releaseContext);
                                _this.lemmas.push(lemma);
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
                var verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, dependencyReleaseContexts = null, types = [], rules = [], axioms = [], lemmas = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi8uLi9heGlvbVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uLy4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCB7IFJVTEVfS0lORCwgVFlQRV9LSU5ELCBBWElPTV9LSU5ELCBMRU1NQV9LSU5ELCBDT01CSU5BVE9SX0tJTkQsIENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi4vLi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVJlbGVhc2VDb250ZXh0IGV4dGVuZHMgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycykge1xuICAgIHN1cGVyKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5jb250ZXh0SlNPTiA9IGNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0Q29udGV4dEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dEpTT047XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGVtbWFzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgbm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUoY29udGVudCwgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTWFwID0gdGhpcy5mbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gdGhpcy5mbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBjb25zdCBqc29uQXJyYXkgPSB0aGlzLmNvbnRleHRKU09OLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAganNvbkFycmF5LmZvckVhY2goKGpzb24pID0+IHtcbiAgICAgIGNvbnN0IHsga2luZCB9ID0ganNvbjtcblxuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgVFlQRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJVTEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBWElPTV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBMRU1NQV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT01CSU5BVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09OU1RSVUNUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCBjb250ZXh0SlNPTikge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gdHJ1ZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgRmlsZVJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlUmVsZWFzZUNvbnRleHQiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsImNhbGxiYWNrcyIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJjb250ZXh0SlNPTiIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnRleHRKU09OIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRBeGlvbXMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJjb250ZW50IiwicnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiaW5pdGlhbGlzZSIsImpzb25BcnJheSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJmcm9tSlNPTiIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJMRU1NQV9LSU5EIiwibGVtbWEiLCJMZW1tYSIsIkNPTUJJTkFUT1JfS0lORCIsImNvbWJpbmF0b3IiLCJDb21iaW5hdG9yIiwiQ09OU1RSVUNUT1JfS0lORCIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tTG9nTmFtZUVudHJpZXNDYWxsYmFja3NBbmRDb250ZXh0SlNPTiIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJSZWxlYXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzREQWRNO3FDQUVFO3lEQUVaO3lEQUNBOzBEQUNDOytEQUNLO2dFQUNDO3FCQUVIOzZCQUMyQjtxQkFDZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxtQkFDUEMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGFB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