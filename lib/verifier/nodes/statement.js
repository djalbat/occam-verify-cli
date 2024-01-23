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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlBcmd1bWVudCB9IGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFIH0gZnJvbSBcIi4uLy4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50Tm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVCOyAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JSdWxlTmFtZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JBcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgRXhwZWN0ZWQgYSBzdGF0ZW1lbnQgYnV0IGdvdCBhICcke21ldGFBcmd1bWVudFN0cmluZ30nIG1ldGEtdHlwZS5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGBFeHBlY3RlZCBhIG1ldGEtdHlwZSBidXQgZ290IGEgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkoY29tYmluYXRvck1ldGFUWXBlTm9kZSksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAoY29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50U3RhdGVtZW50TWV0YVR5cGUpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBFeHBlY3RlZCB0aGUgbWV0YS10eXBlIG9mIHRoZSBjb21iaW5hdG9yIHRvIGJlICcke1NUQVRFTUVOVF9NRVRBX1RZUEV9JyBidXQgZ290ICcke2NvbnRlbnR9JyBpbnN0ZWFkLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVzVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50Tm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIlN0YXRlbWVudE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb21iaW5hdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YVRZcGVOb2RlIiwiZGVidWciLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIiwidmVyaWZpZWRBaGVhZCIsIk5vZGVzVmVy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