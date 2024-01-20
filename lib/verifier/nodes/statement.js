"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    verifyMetaargument: function() {
        return verifyMetaargument;
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
                metaArgumentVerified = verifiedAhead; ///
            }
        }
    }
    if (metaArgumentVerified) {
        context.debug("...verified the '".concat(metaArgumentString, "' metaargument."), metaArgumentNode);
    }
    return metaArgumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlBcmd1bWVudCB9IGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFIH0gZnJvbSBcIi4uLy4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50Tm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVCOyAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JSdWxlTmFtZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JBcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlNZXRhYXJndW1lbnQobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudE5vZGVzVmVyaWZpZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlNZXRhYXJndW1lbnQobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBtZXRhQXJndW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFBcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFBcmd1bWVudE5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YWFyZ3VtZW50Li4uYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlKSxcbiAgICAgICAgY29tYmluYXRvck1ldGFUWXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnRleHQuZGVidWcoYEV4cGVjdGVkIGEgc3RhdGVtZW50IGJ1dCBnb3QgYSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhLXR5cGUuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYEV4cGVjdGVkIGEgbWV0YS10eXBlIGJ1dCBnb3QgYSAnJHtjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAoY29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgIGlmICghY29udGVudFN0YXRlbWVudE1ldGFUeXBlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYEV4cGVjdGVkIHRoZSBtZXRhLXR5cGUgb2YgdGhlIGNvbWJpbmF0b3IgdG8gYmUgJyR7U1RBVEVNRU5UX01FVEFfVFlQRX0nIGJ1dCBnb3QgJyR7Y29udGVudH0nIGluc3RlYWQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICBtZXRhQXJndW1lbnRWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRhQXJndW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhYXJndW1lbnQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YUFyZ3VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YWFyZ3VtZW50IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiU3RhdGVtZW50Tm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbWJpbmF0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnRWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50IiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUiLCJtZXRhQXJndW1lbnRWZXJpZmllZCIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsIk5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIiwibWV0YUFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFUWXBlTm9kZSIsImRlYnVnIiwiY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFN0YXRlbWVudE1ldGFUeXBlIiwiU1RBVEVNRU5UX01FVEFfVFlQRSIsInZlcmlmaWVkQWhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTREQSxPQUFzQztlQUF0Qzs7SUFFZ0JBLGtCQUFrQjtlQUFsQkE7Ozs0REE1RFU7cUJBRUE7b0JBQ0s7eUJBQ0s7eUJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLDRCQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLDZCQUMvQkUsNEJBQTRCRixJQUFBQSxnQkFBUyxFQUFDO0FBRTVDLElBQUEsQUFBTUcsdUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDNUUsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyxrQkFBa0JMLGtCQUNsQk0sNEJBQTRCTCxrQkFBa0IsR0FBRztnQkFFdkQsSUFBTU0sV0FBV0YsZ0JBQWdCRyxXQUFXLElBQ3RDQyxxQkFBcUJILDBCQUEwQkUsV0FBVyxJQUFJLEdBQUc7Z0JBRXZFLElBQUlELGFBQWFFLG9CQUFvQjtvQkFDbkMsT0FBUUY7d0JBQ04sS0FBS0csNkJBQWtCOzRCQUFFO2dDQUN2QixJQUFNQyxlQUFlTixpQkFDZk8sMEJBQTBCTiwyQkFDMUJPLG1CQUFtQkMsSUFBQUEsb0JBQWMsRUFBQ0gsY0FBY0MseUJBQXlCVixTQUFTQztnQ0FFeEZDLDBCQUEwQlMsa0JBQWtCLEdBQUc7Z0NBRS9DOzRCQUNGO3dCQUVBLEtBQUtFLGtDQUF1Qjs0QkFBRTtnQ0FDNUIsSUFBTUMsbUJBQW1CWCxpQkFDbkJZLDZCQUE2QlgsMkJBQzdCWSx1QkFBdUJ6QixtQkFBbUJ1QixrQkFBa0JDLDRCQUE0QmYsU0FBU0MsY0FDakdnQiwyQkFBMkJELHNCQUF1QixHQUFHO2dDQUUzRGQsMEJBQTBCZSwwQkFBMEIsR0FBRztnQ0FFdkQ7NEJBQ0Y7d0JBRUE7NEJBQVM7Z0NBQ1BmLDBCQUEwQix1QkFsQzlCTixtQ0FrQ29DQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsU0FBU0M7Z0NBRW5HOzRCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQTFDSU47RUFBK0JzQixjQUFhO0FBNkNsRCxJQUFNQyx5QkFBeUIsSUFBSXZCO0lBRW5DLFdBQWV1QjtBQUVSLFNBQVM1QixtQkFBbUJ1QixnQkFBZ0IsRUFBRUMsMEJBQTBCLEVBQUVmLE9BQU8sRUFBRUMsV0FBVztJQUNuRyxJQUFJZSx1QkFBdUI7SUFFM0IsSUFBTUkscUJBQXFCcEIsUUFBUXFCLFlBQVksQ0FBQ1A7SUFFaERkLFFBQVFzQixLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJGLG9CQUFtQixzQkFBb0JOO0lBRXZFLElBQU1TLGdCQUFnQjdCLG1CQUFtQm9CLG1CQUNuQ1UseUJBQXlCaEMsa0JBQWtCdUI7SUFFakQsSUFBSVEsa0JBQWtCLE1BQU07UUFDMUJ2QixRQUFReUIsS0FBSyxDQUFDLEFBQUMsbUNBQXFELE9BQW5CTCxvQkFBbUIsaUJBQWVOO0lBQ3JGLE9BQU87UUFDTCxJQUFJVSwyQkFBMkIsTUFBTTtZQUNuQyxJQUFNRSwrQkFBK0IxQixRQUFRcUIsWUFBWSxDQUFDTjtZQUUxRGYsUUFBUXlCLEtBQUssQ0FBQyxBQUFDLG1DQUErRCxPQUE3QkMsOEJBQTZCLGlCQUFlWjtRQUMvRixPQUFPO1lBQ0wsSUFBTWEsaUNBQWlDaEMsMEJBQTBCNkIseUJBQzNESSxVQUFVRCwrQkFBK0JFLFVBQVUsSUFDbkRDLDJCQUE0QkYsWUFBWUcsOEJBQW1CO1lBRWpFLElBQUksQ0FBQ0QsMEJBQTBCO2dCQUM3QjlCLFFBQVF5QixLQUFLLENBQUMsQUFBQyxtREFBbUZHLE9BQWpDRyw4QkFBbUIsRUFBQyxlQUFxQixPQUFSSCxTQUFRLGVBQWFkO1lBQ3pILE9BQU87Z0JBQ0wsSUFBTWtCLGdCQUFnQi9CO2dCQUV0QmUsdUJBQXVCZ0IsZUFBZSxHQUFHO1lBQzNDO1FBQ0Y7SUFDRjtJQUVBLElBQUloQixzQkFBc0I7UUFDeEJoQixRQUFReUIsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CTCxvQkFBbUIsb0JBQWtCTjtJQUN6RTtJQUVBLE9BQU9FO0FBQ1QifQ==