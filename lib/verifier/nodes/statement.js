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
var _query = require("../../utilities/query");
var _term = require("../../verifier/nodes/term");
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
                                var argumentNode = nonTerminalNode, constructorArgumentNode = combinatorNonTerminalNode, argumentVerified = (0, _term.verifyArgument)(argumentNode, constructorArgumentNode, context, verifyAhead);
                                nonTerminalNodeVerified = argumentVerified; ///
                                break;
                            }
                        case _ruleNames.META_ARGUMENT_RULE_NAME:
                            {
                                var metaArgumentNode = nonTerminalNode, combinatorMetaargumentNode = combinatorNonTerminalNode, metaArgumentVerified = verifyMetaargument(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead), metaArgumentNodeVerified = metaArgumentVerified; ///
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
        }
    ]);
    return StatementNodesVerifier;
}(_nodes.default);
var statementNodesVerifier = new StatementNodesVerifier();
var _default = statementNodesVerifier;
function verifyMetaargument(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead) {
    var metaArgumentVerified = false;
    var metaArgumentString = context.nodeAsString(metaArgumentNode);
    context.trace("Verifying the '".concat(metaArgumentString, "' metaargument..."), metaArgumentNode);
    var statementNode = statementNodeQuery(metaArgumentNode), combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);
    if (statementNode === null) {
        context.info("Expected a statement but got a '".concat(metaArgumentString, "' meta-type."), metaArgumentNode);
    } else {
        if (combinatorMetaTYpeNode === null) {
            var combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);
            context.info("Expected a meta-type but got a '".concat(combinatorMetaargumentString, "' statement."), metaArgumentNode);
        } else {
            var combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode), content = combinatorMetaTypeTerminalNode.getContent(), contentStatementMetaType = content === _metaTypes.STATEMENT_META_TYPE;
            if (!contentStatementMetaType) {
                context.info("Expected the meta-type to be 'Statement' but got '".concat(content, "'."), metaArgumentNode);
            } else {
                metaArgumentVerified = true;
            }
        }
    }
    if (metaArgumentVerified) {
        context.debug("...verified the '".concat(metaArgumentString, "' metaargument."), metaArgumentNode);
    }
    return metaArgumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlBcmd1bWVudCB9IGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFIH0gZnJvbSBcIi4uLy4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50Tm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVCOyAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JSdWxlTmFtZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JBcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlNZXRhYXJndW1lbnQobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudE5vZGVzVmVyaWZpZXI7XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFhcmd1bWVudChtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IG1ldGFBcmd1bWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhYXJndW1lbnQuLi5gLCBtZXRhQXJndW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yTWV0YVRZcGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgY29udGV4dC5pbmZvKGBFeHBlY3RlZCBhIHN0YXRlbWVudCBidXQgZ290IGEgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YS10eXBlLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmluZm8oYEV4cGVjdGVkIGEgbWV0YS10eXBlIGJ1dCBnb3QgYSAnJHtjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAoY29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgIGlmICghY29udGVudFN0YXRlbWVudE1ldGFUeXBlKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgRXhwZWN0ZWQgdGhlIG1ldGEtdHlwZSB0byBiZSAnU3RhdGVtZW50JyBidXQgZ290ICcke2NvbnRlbnR9Jy5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGFBcmd1bWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobWV0YUFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YWFyZ3VtZW50LmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFBcmd1bWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIlN0YXRlbWVudE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb21iaW5hdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlIiwibWV0YUFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlNZXRhYXJndW1lbnQiLCJtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQiLCJOb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50Tm9kZXNWZXJpZmllciIsIm1ldGFBcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhVFlwZU5vZGUiLCJpbmZvIiwiY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFN0YXRlbWVudE1ldGFUeXBlIiwiU1RBVEVNRU5UX01FVEFfVFlQRSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0REE7OztlQUFBOzs7NERBMUQwQjtxQkFFQTtvQkFDSzt5QkFDSzt5QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsNkJBQy9CRSw0QkFBNEJGLElBQUFBLGdCQUFTLEVBQUM7QUFFNUMsSUFBQSxBQUFNRyx1Q0E2Q0gsQUE3Q0g7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQzVFLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsa0JBQWtCTCxrQkFDbEJNLDRCQUE0Qkwsa0JBQWtCLEdBQUc7Z0JBRXZELElBQU1NLFdBQVdGLGdCQUFnQkcsV0FBVyxJQUN0Q0MscUJBQXFCSCwwQkFBMEJFLFdBQVcsSUFBSSxHQUFHO2dCQUV2RSxJQUFJRCxhQUFhRSxvQkFBb0I7b0JBQ25DLE9BQVFGO3dCQUNOLEtBQUtHLDZCQUFrQjs0QkFBRTtnQ0FDdkIsSUFBTUMsZUFBZU4saUJBQ2ZPLDBCQUEwQk4sMkJBQzFCTyxtQkFBbUJDLElBQUFBLG9CQUFjLEVBQUNILGNBQWNDLHlCQUF5QlYsU0FBU0M7Z0NBRXhGQywwQkFBMEJTLGtCQUFrQixHQUFHO2dDQUUvQzs0QkFDRjt3QkFFQSxLQUFLRSxrQ0FBdUI7NEJBQUU7Z0NBQzVCLElBQU1DLG1CQUFtQlgsaUJBQ25CWSw2QkFBNkJYLDJCQUM3QlksdUJBQXVCQyxtQkFBbUJILGtCQUFrQkMsNEJBQTRCZixTQUFTQyxjQUNqR2lCLDJCQUEyQkYsc0JBQXVCLEdBQUc7Z0NBRTNEZCwwQkFBMEJnQiwwQkFBMEIsR0FBRztnQ0FFdkQ7NEJBQ0Y7d0JBRUE7NEJBQVM7Z0NBQ1BoQiwwQkFBMEIsdUJBbEM5Qk4sbUNBa0NvQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLFNBQVNDO2dDQUVuRzs0QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0ExQ0lOO0VBQStCdUIsY0FBYTtBQTZDbEQsSUFBTUMseUJBQXlCLElBQUl4QjtJQUVuQyxXQUFld0I7QUFFZixTQUFTSCxtQkFBbUJILGdCQUFnQixFQUFFQywwQkFBMEIsRUFBRWYsT0FBTyxFQUFFQyxXQUFXO0lBQzVGLElBQUllLHVCQUF1QjtJQUUzQixJQUFNSyxxQkFBcUJyQixRQUFRc0IsWUFBWSxDQUFDUjtJQUVoRGQsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQkYsb0JBQW1CLHNCQUFvQlA7SUFFdkUsSUFBTVUsZ0JBQWdCOUIsbUJBQW1Cb0IsbUJBQ25DVyx5QkFBeUJqQyxrQkFBa0J1QjtJQUVqRCxJQUFJUyxrQkFBa0IsTUFBTTtRQUMxQnhCLFFBQVEwQixJQUFJLENBQUMsQUFBQyxtQ0FBcUQsT0FBbkJMLG9CQUFtQixpQkFBZVA7SUFDcEYsT0FBTztRQUNMLElBQUlXLDJCQUEyQixNQUFNO1lBQ25DLElBQU1FLCtCQUErQjNCLFFBQVFzQixZQUFZLENBQUNQO1lBRTFEZixRQUFRMEIsSUFBSSxDQUFDLEFBQUMsbUNBQStELE9BQTdCQyw4QkFBNkIsaUJBQWViO1FBQzlGLE9BQU87WUFDTCxJQUFNYyxpQ0FBaUNqQywwQkFBMEI4Qix5QkFDM0RJLFVBQVVELCtCQUErQkUsVUFBVSxJQUNuREMsMkJBQTRCRixZQUFZRyw4QkFBbUI7WUFFakUsSUFBSSxDQUFDRCwwQkFBMEI7Z0JBQzdCL0IsUUFBUTBCLElBQUksQ0FBQyxBQUFDLHFEQUE0RCxPQUFSRyxTQUFRLE9BQUtmO1lBQ2pGLE9BQU87Z0JBQ0xFLHVCQUF1QjtZQUN6QjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxzQkFBc0I7UUFDeEJoQixRQUFRaUMsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CWixvQkFBbUIsb0JBQWtCUDtJQUN6RTtJQUVBLE9BQU9FO0FBQ1QifQ==