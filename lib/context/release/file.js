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
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                var _this = this;
                _get(_getPrototypeOf(FileReleaseContext.prototype), "initialise", this).call(this, dependencyReleaseContexts);
                var jsonArray = this.contextJSON, callback = function(content, ruleName) {
                    var ruleMap = _this.florenceParser.getRuleMap(), tokens = _this.florenceLexer.tokenise(content), rule = ruleMap[ruleName], node = _this.florenceParser.parse(tokens, rule);
                    if (node !== null) {
                        (0, _occamGrammarUtilities.rewriteNodes)(node);
                    }
                    return node;
                };
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSON(json);
                                if (type !== null) {
                                    _this.types.push(type);
                                }
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSON(json, callback);
                                if (rule !== null) {
                                    _this.rules.push(rule);
                                }
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSON(json, callback);
                                if (axiom !== null) {
                                    _this.axioms.push(axiom);
                                }
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSON(json, callback);
                                if (combinator !== null) {
                                    _this.combinators.push(combinator);
                                }
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSON(json, callback);
                                if (constructor !== null) {
                                    _this.constructors.push(constructor);
                                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi8uLi9heGlvbVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uLy4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCB7IFJVTEVfS0lORCwgVFlQRV9LSU5ELCBBWElPTV9LSU5ELCBDT01CSU5BVE9SX0tJTkQsIENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi4vLi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVJlbGVhc2VDb250ZXh0IGV4dGVuZHMgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICBzdXBlcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMuY29udGV4dEpTT04gPSBjb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldENvbnRleHRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBjb25zdCBqc29uQXJyYXkgPSB0aGlzLmNvbnRleHRKU09OLCAgLy8vXG4gICAgICAgICAgY2FsbGJhY2sgPSAoY29udGVudCwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXAgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICAgICAgICAgIHRva2VucyA9IHRoaXMuZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgfTtcblxuICAgIGpzb25BcnJheS5mb3JFYWNoKChqc29uKSA9PiB7XG4gICAgICBjb25zdCB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUlVMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQVhJT01fS0lORDoge1xuICAgICAgICAgIGNvbnN0IGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09NQklOQVRPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKGNvbWJpbmF0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09OU1RSVUNUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKGNvbnN0cnVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lRW50cmllc0NhbGxiYWNrc0FuZENvbnRleHRKU09OKGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCBjb250ZXh0SlNPTikge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gdHJ1ZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbnVsbCxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgRmlsZVJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwgZW50cmllcywgY2FsbGJhY2tzLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMsIGNvbnRleHRKU09OLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZVJlbGVhc2VDb250ZXh0IiwibG9nIiwibmFtZSIsImVudHJpZXMiLCJjYWxsYmFja3MiLCJ2ZXJpZmllZCIsImN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiY29udGV4dEpTT04iLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb250ZXh0SlNPTiIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0QXhpb21zIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJpbml0aWFsaXNlIiwianNvbkFycmF5IiwiY2FsbGJhY2siLCJjb250ZW50IiwicnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwianNvbiIsImtpbmQiLCJUWVBFX0tJTkQiLCJ0eXBlIiwiVHlwZSIsImZyb21KU09OIiwiUlVMRV9LSU5EIiwiUnVsZSIsIkFYSU9NX0tJTkQiLCJBeGlvbSIsIkNPTUJJTkFUT1JfS0lORCIsImNvbWJpbmF0b3IiLCJDb21iaW5hdG9yIiwiQ09OU1RSVUNUT1JfS0lORCIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tTG9nTmFtZUVudHJpZXNDYWxsYmFja3NBbmRDb250ZXh0SlNPTiIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJSZWxlYXNlQ29udGV4dCJdLCJtYXBw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