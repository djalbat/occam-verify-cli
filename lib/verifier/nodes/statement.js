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
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes/term"));
var _query = require("../../utilities/query");
var _metaTypes = require("../../metaTypes");
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var metaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type");
var StatementNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(StatementNodesVerifier, NodesVerifier);
    var _super = _create_super(StatementNodesVerifier);
    function StatementNodesVerifier() {
        _class_call_check(this, StatementNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNode = nonTerminalNodeA, combinatorNonTerminalNode = nonTerminalNodeB; ///
                var ruleName = nonTerminalNode.getRuleName(), combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///
                if (ruleName === combinatorRuleName) {
                    switch(ruleName){
                        case _ruleNames.ARGUMENT_RULE_NAME:
                            {
                                var argumentNode = nonTerminalNode, constructorArgumentNode = combinatorNonTerminalNode, argumentNodeVerified = _term.default.verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead);
                                nonTerminalNodeVerified = argumentNodeVerified; ///
                                break;
                            }
                        case _ruleNames.META_ARGUMENT_RULE_NAME:
                            {
                                var metaArgumentNode = nonTerminalNode, combinatorMetaargumentNode = combinatorNonTerminalNode, metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead);
                                nonTerminalNodeVerified = metaArgumentNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(StatementNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetaargumentNode",
            value: function verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead) {
                var metaArgumentNodeVerified = false;
                var metaArgumentString = context.nodeAsString(metaArgumentNode);
                var statementNode = statementNodeQuery(metaArgumentNode), combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);
                if (statementNode === null) {
                    context.debug("Expected a statement but got a '".concat(metaArgumentString, "' meta-type."), metaArgumentNode);
                } else {
                    if (combinatorMetaTYpeNode === null) {
                        var combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);
                        context.debug("Expected a meta-type but got a '".concat(combinatorMetaargumentString, "' statement."), metaArgumentNode);
                    } else {
                        var combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode), content = combinatorMetaTypeTerminalNode.getContent(), contentStatementMetaType = content === _metaTypes.STATEMENT_META_TYPE;
                        if (!contentStatementMetaType) {
                            context.debug("Expected the meta-type of the combinator to be '".concat(_metaTypes.STATEMENT_META_TYPE, "' but got '").concat(content, "' instead."), metaArgumentNode);
                        } else {
                            var verifiedAhead = verifyAhead();
                            metaArgumentNodeVerified = verifiedAhead; ///
                        }
                    }
                }
                return metaArgumentNodeVerified;
            }
        }
    ]);
    return StatementNodesVerifier;
}(_nodes.default);
var statementNodesVerifier = new StatementNodesVerifier();
var _default = statementNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHRlcm1Ob2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvbWV0YVR5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZS9AbWV0YS10eXBlXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUI7IC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGVybU5vZGVzVmVyaWZpZXIudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhQXJndW1lbnROb2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgY29tYmluYXRvck1ldGFUWXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBFeHBlY3RlZCBhIHN0YXRlbWVudCBidXQgZ290IGEgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YS10eXBlLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29tYmluYXRvck1ldGFUWXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYEV4cGVjdGVkIGEgbWV0YS10eXBlIGJ1dCBnb3QgYSAnJHtjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeShjb21iaW5hdG9yTWV0YVRZcGVOb2RlKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSA9IChjb250ZW50ID09PSBTVEFURU1FTlRfTUVUQV9UWVBFKTtcblxuICAgICAgICBpZiAoIWNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSkge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYEV4cGVjdGVkIHRoZSBtZXRhLXR5cGUgb2YgdGhlIGNvbWJpbmF0b3IgdG8gYmUgJyR7U1RBVEVNRU5UX01FVEFfVFlQRX0nIGJ1dCBnb3QgJyR7Y29udGVudH0nIGluc3RlYWQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudE5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsibWV0YVR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiU3RhdGVtZW50Tm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbWJpbmF0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ0ZXJtTm9kZXNWZXJpZmllciIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YVRZcGVOb2RlIiwiZGVidWciLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIiwidmVyaWZpZWRBaGVhZCIsIk5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRGQTs7O2VBQUE7Ozs0REExRjBCOzJEQUNJO3FCQUVKO3lCQUNVO3lCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDL0JFLDRCQUE0QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUU1QyxJQUFBLEFBQU1HLHVDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQzVFLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsa0JBQWtCTCxrQkFDbEJNLDRCQUE0Qkwsa0JBQWtCLEdBQUc7Z0JBRXZELElBQU1NLFdBQVdGLGdCQUFnQkcsV0FBVyxJQUN0Q0MscUJBQXFCSCwwQkFBMEJFLFdBQVcsSUFBSSxHQUFHO2dCQUV2RSxJQUFJRCxhQUFhRSxvQkFBb0I7b0JBQ25DLE9BQVFGO3dCQUNOLEtBQUtHLDZCQUFrQjs0QkFBRTtnQ0FDdkIsSUFBTUMsZUFBZU4saUJBQ2ZPLDBCQUEwQk4sMkJBQzFCTyx1QkFBdUJDLGFBQWlCLENBQUNDLGtCQUFrQixDQUFDSixjQUFjQyx5QkFBeUJWLFNBQVNDO2dDQUVsSEMsMEJBQTBCUyxzQkFBc0IsR0FBRztnQ0FFbkQ7NEJBQ0Y7d0JBRUEsS0FBS0csa0NBQXVCOzRCQUFFO2dDQUM1QixJQUFNQyxtQkFBbUJaLGlCQUNuQmEsNkJBQTZCWiwyQkFDN0JhLDJCQUEyQixJQUFJLENBQUNDLHNCQUFzQixDQUFDSCxrQkFBa0JDLDRCQUE0QmhCLFNBQVNDO2dDQUVwSEMsMEJBQTBCZSwwQkFBMEIsR0FBRztnQ0FFdkQ7NEJBQ0Y7d0JBRUE7NEJBQVM7Z0NBQ1BmLDBCQUEwQix1QkFqQzlCTixtQ0FpQ29DQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsU0FBU0M7Z0NBRW5HOzRCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkgsZ0JBQWdCLEVBQUVDLDBCQUEwQixFQUFFaEIsT0FBTyxFQUFFQyxXQUFXO2dCQUN2RixJQUFJZ0IsMkJBQTJCO2dCQUUvQixJQUFNRSxxQkFBcUJuQixRQUFRb0IsWUFBWSxDQUFDTDtnQkFFaEQsSUFBTU0sZ0JBQWdCM0IsbUJBQW1CcUIsbUJBQ25DTyx5QkFBeUI5QixrQkFBa0J3QjtnQkFFakQsSUFBSUssa0JBQWtCLE1BQU07b0JBQzFCckIsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLG1DQUFxRCxPQUFuQkosb0JBQW1CLGlCQUFlSjtnQkFDckYsT0FBTztvQkFDTCxJQUFJTywyQkFBMkIsTUFBTTt3QkFDbkMsSUFBTUUsK0JBQStCeEIsUUFBUW9CLFlBQVksQ0FBQ0o7d0JBRTFEaEIsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLG1DQUErRCxPQUE3QkMsOEJBQTZCLGlCQUFlVDtvQkFDL0YsT0FBTzt3QkFDTCxJQUFNVSxpQ0FBaUM5QiwwQkFBMEIyQix5QkFDM0RJLFVBQVVELCtCQUErQkUsVUFBVSxJQUNuREMsMkJBQTRCRixZQUFZRyw4QkFBbUI7d0JBRWpFLElBQUksQ0FBQ0QsMEJBQTBCOzRCQUM3QjVCLFFBQVF1QixLQUFLLENBQUMsQUFBQyxtREFBbUZHLE9BQWpDRyw4QkFBbUIsRUFBQyxlQUFxQixPQUFSSCxTQUFRLGVBQWFYO3dCQUN6SCxPQUFPOzRCQUNMLElBQU1lLGdCQUFnQjdCOzRCQUV0QmdCLDJCQUEyQmEsZUFBZSxHQUFHO3dCQUMvQztvQkFDRjtnQkFDRjtnQkFFQSxPQUFPYjtZQUNUOzs7V0ExRUlyQjtFQUErQm1DLGNBQWE7QUE2RWxELElBQU1DLHlCQUF5QixJQUFJcEM7SUFFbkMsV0FBZW9DIn0=