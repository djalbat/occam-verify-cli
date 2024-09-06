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
                            var statementNodeA = nonTerminalNodeA, statementNodeB = nodeB, statementMetavariableNodeA = nodeA, statementSubstitutionNodeA = statementSubstitutionNodeQuery(statementNodeA), metavariableUnifiedAgainstStatement = _this.unifyStatementMetavariableAgainstStatement(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead);
                            nonTerminalNodeUnified = metavariableUnifiedAgainstStatement; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: termVariableNodeQuery,
                        nodeQueryB: termNodeQuery,
                        unify: function(nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var termNodeB = nodeB, termVariableNodeA = nodeA, termVariableUnifiedAgainstTerm = _this.unifyTermVariableAgainstTerm(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);
                            nonTerminalNodeUnified = termVariableUnifiedAgainstTerm; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) {
                            var unified = _get(_get_prototype_of(MetaLevelUnifier.prototype), "unify", _this).call(_this, nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead);
                            return unified;
                        }
                    }
                ];
                var unified = (0, _unifier.unify)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead);
                nonTerminalNodeUnified = unified; ///
                return nonTerminalNodeUnified;
            }
        },
        {
            key: "unifyStatementMetavariableAgainstStatement",
            value: function unifyStatementMetavariableAgainstStatement(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead) {
                var metavariableUnifiedAgainstStatement;
                var substitutionNode = statementSubstitutionNodeA, metavariableNodeA = statementMetavariableNodeA; ///
                metavariableUnifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, unifyAhead);
                return metavariableUnifiedAgainstStatement;
            }
        },
        {
            key: "unifyTermVariableAgainstTerm",
            value: function unifyTermVariableAgainstTerm(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead) {
                var termVariableUnifiedAgainstTerm;
                var variableNodeA = termVariableNodeA, termUnifiedAgainstVariable = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);
                termVariableUnifiedAgainstTerm = termUnifiedAgainstVariable; ///
                return termVariableUnifiedAgainstTerm;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IHVuaWZ5IH0gZnJvbSBcIi4uL3VuaWZpZXJcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy51bmlmeVRlcm1WYXJpYWJsZUFnYWluc3RUZXJtKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRlcm1WYXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBjb25zdCB1bmlmaWVkID0gc3VwZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB1bmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQTsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlUZXJtVmFyaWFibGVBZ2FpbnN0VGVybSh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1WYXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgdGVybVVuaWZpZWRBZ2FpbnN0VmFyaWFibGUgPSB1bmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0odmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgIHRlcm1WYXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSA9IHRlcm1VbmlmaWVkQWdhaW5zdFZhcmlhYmxlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtO1xuICB9XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgbWV0YUxldmVsVW5pZmllclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXZhcmlhYmxlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQiLCJ0ZXJtTm9kZUIiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1WYXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSIsInVuaWZ5VGVybVZhcmlhYmxlQWdhaW5zdFRlcm0iLCJ1bmlmaWVkIiwic3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwidW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IiwidmFyaWFibGVOb2RlQSIsInRlcm1VbmlmaWVkQWdhaW5zdFZhcmlhYmxlIiwidW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwiVW5pZmllciIsIm1ldGFMZXZlbFVuaWZpZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5R0E7OztlQUFBOzs7MkRBdkdpQjsrREFDRzswRUFDaUI7bUZBQ1M7cUJBR3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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