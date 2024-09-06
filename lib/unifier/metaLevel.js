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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
Object.assign(_shim.default, {
    metaLevelUnifier: metaLevelUnifier
});
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IHVuaWZ5IH0gZnJvbSBcIi4uL3VuaWZpZXJcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0VGVybU5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0ZXJtVmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RUZXJtTm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPVxuXG4gICAgICAgICAgICBzdXBlci51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVW5pZmllZCA9IHVuaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG5vZGVzVW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHVuaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1WYXJpYWJsZU5vZGVVbmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllZEFnYWluc3RWYXJpYWJsZSA9IHVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgdGVybVZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0VGVybU5vZGUgPSB0ZXJtVW5pZmllZEFnYWluc3RWYXJpYWJsZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1WYXJpYWJsZU5vZGVVbmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuICB9XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgbWV0YUxldmVsVW5pZmllclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwidGVybU5vZGVCIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmFyaWFibGVOb2RlVW5pZmllZEFnYWluc3RUZXJtTm9kZSIsInVuaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSIsIm5vZGVzVW5pZmllZCIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IiwidmFyaWFibGVOb2RlQSIsInRlcm1VbmlmaWVkQWdhaW5zdFZhcmlhYmxlIiwidW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwiVW5pZmllciIsIm1ldGFMZXZlbFVuaWZpZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpSEE7OztlQUFBOzs7MkRBL0dpQjsrREFDRzswRUFDaUI7bUZBQ1M7cUJBR3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JFLHVCQUF1QkYsSUFBQUEsZ0JBQVMsRUFBQyxPQUNqQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksaUNBQWlDSixJQUFBQSxnQkFBUyxFQUFDLDZCQUMzQ0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0saUNBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxF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