"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _unifier = /*#__PURE__*/ _interop_require_wildcard(require("../unifier"));
var _variableAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../unify/variableAgainstTerm"));
var _metavariableAgainstStatement = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableAgainstStatement"));
var _query = require("../utilities/query");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), statementSubstitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
var MetaLevelUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(MetaLevelUnifier, Unifier);
    function MetaLevelUnifier() {
        _class_call_check(this, MetaLevelUnifier);
        return _call_super(this, MetaLevelUnifier, arguments);
    }
    _create_class(MetaLevelUnifier, [
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead) {
                var _this = this;
                var nonTerminalNodeUnified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: statementMetavariableNodeQuery,
                        nodeQueryB: statementNodeQuery,
                        unify: function(nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var statementNodeA = nonTerminalNodeA, statementNodeB = nodeB, statementMetavariableNodeA = nodeA, statementSubstitutionNodeA = statementSubstitutionNodeQuery(statementNodeA), metavariableNodeUnifiedAgainstStatementNode = _this.unifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead);
                            nonTerminalNodeUnified = metavariableNodeUnifiedAgainstStatementNode; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: termVariableNodeQuery,
                        nodeQueryB: termNodeQuery,
                        unify: function(nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var termNodeB = nodeB, termVariableNodeA = nodeA, termVariableNodeUnifiedAgainstTermNode = _this.unifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);
                            nonTerminalNodeUnified = termVariableNodeUnifiedAgainstTermNode; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeUnified = _get(_get_prototype_of(MetaLevelUnifier.prototype), "unifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead);
                            return nonTerminalNodeUnified;
                        }
                    }
                ];
                var nodesUnified = (0, _unifier.unify)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead);
                nonTerminalNodeUnified = nodesUnified; ///
                return nonTerminalNodeUnified;
            }
        },
        {
            key: "unifyStatementMetavariableNodeAgainstStatementNode",
            value: function unifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead) {
                var metavariableNodeUnifiedAgainstStatementNode;
                var substitutionNode = statementSubstitutionNodeA, metavariableNodeA = statementMetavariableNodeA, metavariableUnifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, unifyAhead);
                metavariableNodeUnifiedAgainstStatementNode = metavariableUnifiedAgainstStatement; ///
                return metavariableNodeUnifiedAgainstStatementNode;
            }
        },
        {
            key: "unifyTermVariableNodeAgainstTermNode",
            value: function unifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead) {
                var termVariableNodeUnifiedAgainstTermNode;
                var variableNodeA = termVariableNodeA, termUnifiedAgainstVariable = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);
                termVariableNodeUnifiedAgainstTermNode = termUnifiedAgainstVariable; ///
                return termVariableNodeUnifiedAgainstTermNode;
            }
        }
    ]);
    return MetaLevelUnifier;
}(_unifier.default);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcbmltcG9ydCB1bmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uL3VuaWZ5L3ZhcmlhYmxlQWdhaW5zdFRlcm1cIjtcbmltcG9ydCB1bmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQgZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgdW5pZnkgfSBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpLFxuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RUZXJtTm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudW5pZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRlcm1WYXJpYWJsZU5vZGVVbmlmaWVkQWdhaW5zdFRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUI7IC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZXNVbmlmaWVkID0gdW5pZnkobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gbm9kZXNVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCk7XG5cbiAgICBtZXRhdmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVkQWdhaW5zdFZhcmlhYmxlID0gdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCk7XG5cbiAgICB0ZXJtVmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RUZXJtTm9kZSA9IHRlcm1VbmlmaWVkQWdhaW5zdFZhcmlhYmxlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG4gIH1cbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwidGVybU5vZGVCIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RUZXJtTm9kZSIsInVuaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSIsIm5vZGVzVW5pZmllZCIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IiwidmFyaWFibGVOb2RlQSIsInRlcm1VbmlmaWVkQWdhaW5zdFZhcmlhYmxlIiwidW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwiVW5pZmllciIsIm1ldGFMZXZlbFVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRHQTs7O2VBQUE7OzsrREExR29COzBFQUNpQjttRkFDUztxQkFHcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDLE9BQ2pDRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDSSxpQ0FBaUNKLElBQUFBLGdCQUFTLEVBQUMsNkJBQzNDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNTSxpQ0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxVQUFVOztnQkFDOUcsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCO29CQUNwQjt3QkFDRUMsWUFBWVg7d0JBQ1pZLFlBQVloQjt3QkFDWmlCLE9BQU8sU0FBQ0MsT0FBT0MsT0FBT1YsZUFBZUMsZUFBZUMsZUFBZUM7NEJBQ2pFLElBQUlDOzRCQUVKLElBQU1PLGlCQUFpQmIsa0JBQ2pCYyxpQkFBaUJGLE9BQ2pCRyw2QkFBNkJKLE9BQzdCSyw2QkFBNkJwQiwrQkFBK0JpQixpQkFDNURJLDhDQUVFLE1BQUtDLGtEQUFrRCxDQUFDSCw0QkFBNEJDLDRCQUE0QkYsZ0JBQWdCWixlQUFlQyxlQUFlQyxlQUFlQzs0QkFFckxDLHlCQUF5QlcsNkNBQThDLEdBQUc7NEJBRTFFLE9BQU9YO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFRSxZQUFZYjt3QkFDWmMsWUFBWWxCO3dCQUNabUIsT0FBTyxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxlQUFlQyxlQUFlQzs0QkFDakUsSUFBSUM7NEJBRUosSUFBTWEsWUFBWVAsT0FDWlEsb0JBQW9CVCxPQUNwQlUseUNBRUUsTUFBS0Msb0NBQW9DLENBQUNGLG1CQUFtQkQsV0FBV2pCLGVBQWVDLGVBQWVDLGVBQWVDOzRCQUU3SEMseUJBQXlCZSx3Q0FBeUMsR0FBRzs0QkFFckUsT0FBT2Y7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVlkO3dCQUNaZSxZQUFZZjt3QkFDWmdCLE9BQU8sU0FBQ0MsT0FBT0MsT0FBT1YsZUFBZUMsZUFBZUMsZUFBZUM7NEJBQ2pFLElBQUlDOzRCQUVKLElBQU1OLHFCQUFtQlcsT0FDbkJWLHFCQUFtQlcsT0FBTyxHQUFHOzRCQUVuQ04seUJBRUUsdUJBcEROUiw2QkFvRFlDLDJDQUFxQkMsb0JBQWtCQyxvQkFBa0JDLGVBQWVDLGVBQWVDLGVBQWVDOzRCQUU5RyxPQUFPQzt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRCxJQUFNaUIsZUFBZWIsSUFBQUEsY0FBSyxFQUFDSCxlQUFlUCxrQkFBa0JDLGtCQUFrQkMsZUFBZUMsZUFBZUMsZUFBZUM7Z0JBRTNIQyx5QkFBeUJpQixjQUFlLEdBQUc7Z0JBRTNDLE9BQU9qQjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLG1EQUFtREgsMEJBQTBCLEVBQUVDLDBCQUEwQixFQUFFRixjQUFjLEVBQUVaLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFVBQVU7Z0JBQ2hMLElBQUlZO2dCQUVKLElBQU1PLG1CQUFtQlIsNEJBQ25CUyxvQkFBb0JWLDRCQUNwQlcsc0NBQXNDQyxJQUFBQSxxQ0FBaUMsRUFBQ0YsbUJBQW1CWCxnQkFBZ0JVLGtCQUFrQnRCLGVBQWVDLGVBQWVDLGVBQWVDO2dCQUVoTFksOENBQThDUyxxQ0FBc0MsR0FBRztnQkFFdkYsT0FBT1Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxxQ0FBcUNGLGlCQUFpQixFQUFFRCxTQUFTLEVBQUVqQixhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxVQUFVO2dCQUN4SCxJQUFJZ0I7Z0JBRUosSUFBTU8sZ0JBQWdCUixtQkFDaEJTLDZCQUE2QkMsSUFBQUEsNEJBQXdCLEVBQUNGLGVBQWVULFdBQVdqQixlQUFlQyxlQUFlQyxlQUFlQztnQkFFbklnQix5Q0FBeUNRLDRCQUE2QixHQUFHO2dCQUV6RSxPQUFPUjtZQUNUOzs7V0F2Rkl2QjtFQUF5QmlDLGdCQUFPO0FBMEZ0QyxJQUFNQyxtQkFBbUIsSUFBSWxDO0lBRTdCLFdBQWVrQyJ9