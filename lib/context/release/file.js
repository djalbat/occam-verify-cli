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
                var verified = true, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), florenceLexer = null, florenceParser = null, dependencyReleaseContexts = null, types = [], rules = [], axioms = [], combinators = [], constructors = [], releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, combinators, constructors);
                return releaseContext;
            }
        }
    ]);
    return FileReleaseContext;
}(_release.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvZmlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi8uLi9heGlvbVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uLy4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCB7IFJVTEVfS0lORCwgVFlQRV9LSU5ELCBBWElPTV9LSU5ELCBDT01CSU5BVE9SX0tJTkQsIENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi4vLi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVJlbGVhc2VDb250ZXh0IGV4dGVuZHMgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICBzdXBlcihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMuY29udGV4dEpTT04gPSBjb250ZXh0SlNPTjtcbiAgfVxuXG4gIGdldENvbnRleHRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIG5vZGVGcm9tQ29udGVudEFuZFJ1bGVOYW1lKGNvbnRlbnQsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHRoaXMuZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHRoaXMuZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgY29uc3QganNvbkFycmF5ID0gdGhpcy5jb250ZXh0SlNPTixcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIGpzb25BcnJheS5mb3JFYWNoKChqc29uKSA9PiB7XG4gICAgICBjb25zdCB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSVUxFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQVhJT01fS0lORDoge1xuICAgICAgICAgIGNvbnN0IGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09NQklOQVRPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTlNUUlVDVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUVudHJpZXNDYWxsYmFja3NBbmRDb250ZXh0SlNPTihsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgY29udGV4dEpTT04pIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRydWUsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG51bGwsXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IEZpbGVSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGVudHJpZXMsIGNhbGxiYWNrcywgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLCBjb250ZXh0SlNPTiwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGVSZWxlYXNlQ29udGV4dCIsImxvZyIsIm5hbWUiLCJlbnRyaWVzIiwiY2FsbGJhY2tzIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImNvbnRleHRKU09OIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29udGV4dEpTT04iLCJnZXRMYWJlbHMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldEF4aW9tcyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJjb250ZW50IiwicnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiaW5pdGlhbGlzZSIsImpzb25BcnJheSIsImpzb24iLCJraW5kIiwiVFlQRV9LSU5EIiwidHlwZSIsIlR5cGUiLCJmcm9tSlNPTiIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJDT01CSU5BVE9SX0tJTkQiLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsIkNPTlNUUlVDVE9SX0tJTkQiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbUxvZ05hbWVFbnRyaWVzQ2FsbGJhY2tzQW5kQ29udGV4dEpTT04iLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozs0REFkTTtxQ0FFRTt5REFFWjt5REFDQTswREFDQzsrREFDSztnRUFDQztxQkFFSDs2QkFDMkI7cUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBQSxBQUFNQSxtQ0FB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