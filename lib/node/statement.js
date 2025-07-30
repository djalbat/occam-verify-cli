"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
var _node = require("../utilities/node");
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
var StatementNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(StatementNode, NonTerminalNode);
    function StatementNode() {
        _class_call_check(this, StatementNode);
        return _call_super(this, StatementNode, arguments);
    }
    _create_class(StatementNode, [
        {
            key: "getTermNodes",
            value: function getTermNodes() {
                var termNodes = this.filterDescendantNode(function(descendantNode) {
                    var descendantNodeTermNode = (0, _node.isNodeTermNode)(descendantNode);
                    if (descendantNodeTermNode) {
                        return true;
                    }
                });
                return termNodes;
            }
        },
        {
            key: "getFrameNodes",
            value: function getFrameNodes() {
                var frameNodes = this.filterDescendantNode(function(descendantNode) {
                    var descendantNodeFrameNode = (0, _node.isNodeFrameNode)(descendantNode);
                    if (descendantNodeFrameNode) {
                        return true;
                    }
                });
                return frameNodes;
            }
        },
        {
            key: "getEqualityNode",
            value: function getEqualityNode() {
                var equalityNode = this.findChildNode(function(childNode) {
                    var childNodeEqualityNode = (0, _node.isNodeEqualityNode)(childNode);
                    if (childNodeEqualityNode) {
                        return true;
                    }
                }) || null;
                return equalityNode;
            }
        },
        {
            key: "getJudgementNode",
            value: function getJudgementNode() {
                var judgementNode = this.findChildNode(function(childNode) {
                    var childNodeJudgementNode = (0, _node.isNodeJudgementNode)(childNode);
                    if (childNodeJudgementNode) {
                        return true;
                    }
                }) || null;
                return judgementNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.findChildNode(function(childNode) {
                    var childNodeMetavariableNode = (0, _node.isNodeMetavariableNode)(childNode);
                    if (childNodeMetavariableNode) {
                        return true;
                    }
                }) || null;
                return metavariableNode;
            }
        },
        {
            key: "getTypeAssertionNode",
            value: function getTypeAssertionNode() {
                var typeAssertionNode = this.findChildNode(function(childNode) {
                    var childNodeTypeAssertionNode = (0, _node.isNodeTypeAssertionNode)(childNode);
                    if (childNodeTypeAssertionNode) {
                        return true;
                    }
                }) || null;
                return typeAssertionNode;
            }
        },
        {
            key: "getDefinedAssertionNode",
            value: function getDefinedAssertionNode() {
                var definedAssertionNode = this.findChildNode(function(childNode) {
                    var definedAssertionNode = (0, _node.isNodeDefinedAssertionNode)(childNode);
                    if (definedAssertionNode) {
                        return true;
                    }
                }) || null;
                return definedAssertionNode;
            }
        },
        {
            key: "getSubproofAssertionNode",
            value: function getSubproofAssertionNode() {
                var subproofAssertionNode = this.findChildNode(function(childNode) {
                    var childNodeSubproofAssertionNode = (0, _node.isNodeSubproofAssertionNode)(childNode);
                    if (childNodeSubproofAssertionNode) {
                        return true;
                    }
                }) || null;
                return subproofAssertionNode;
            }
        },
        {
            key: "getPropertyAssertionNode",
            value: function getPropertyAssertionNode() {
                var propertyAssertionNode = this.findChildNode(function(childNode) {
                    var childNodePropertyAssertionNode = (0, _node.isNodePropertyAssertionNode)(childNode);
                    if (childNodePropertyAssertionNode) {
                        return true;
                    }
                }) || null;
                return propertyAssertionNode;
            }
        },
        {
            key: "getContainedAssertionNode",
            value: function getContainedAssertionNode() {
                var containedAssertionNode = this.findChildNode(function(childNode) {
                    var containedAssertionNode = (0, _node.isNodeContainedAssertionNode)(childNode);
                    if (containedAssertionNode) {
                        return true;
                    }
                }) || null;
                return containedAssertionNode;
            }
        },
        {
            key: "getSatisfiedAssertionNode",
            value: function getSatisfiedAssertionNode() {
                var satisfiedAssertionNode = this.findChildNode(function(childNode) {
                    var childNodeSatisfiedAssertionNode = (0, _node.isNodeSatisfiesAssertionNode)(childNode);
                    if (childNodeSatisfiedAssertionNode) {
                        return true;
                    }
                }) || null;
                return satisfiedAssertionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StatementNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBpc05vZGVUZXJtTm9kZSxcbiAgICAgICAgIGlzTm9kZUZyYW1lTm9kZSxcbiAgICAgICAgIGlzTm9kZUVxdWFsaXR5Tm9kZSxcbiAgICAgICAgIGlzTm9kZUp1ZGdlbWVudE5vZGUsXG4gICAgICAgICBpc05vZGVNZXRhdmFyaWFibGVOb2RlLFxuICAgICAgICAgaXNOb2RlVHlwZUFzc2VydGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVEZWZpbmVkQXNzZXJ0aW9uTm9kZSxcbiAgICAgICAgIGlzTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSxcbiAgICAgICAgIGlzTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSxcbiAgICAgICAgIGlzTm9kZVNhdGlzZmllc0Fzc2VydGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVDb250YWluZWRBc3NlcnRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUZXJtTm9kZXMoKSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5maWx0ZXJEZXNjZW5kYW50Tm9kZSgoZGVzY2VuZGFudE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnROb2RlVGVybU5vZGUgPSBpc05vZGVUZXJtTm9kZShkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50Tm9kZVRlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlcyA9IHRoaXMuZmlsdGVyRGVzY2VuZGFudE5vZGUoKGRlc2NlbmRhbnROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50Tm9kZUZyYW1lTm9kZSA9IGlzTm9kZUZyYW1lTm9kZShkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50Tm9kZUZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcXVhbGl0eU5vZGUgPSBpc05vZGVFcXVhbGl0eU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZUVxdWFsaXR5Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZTtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudE5vZGUoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVKdWRnZW1lbnROb2RlID0gaXNOb2RlSnVkZ2VtZW50Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlSnVkZ2VtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSA9IGlzTm9kZU1ldGF2YXJpYWJsZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZUFzc2VydGlvbk5vZGUgPSBpc05vZGVUeXBlQXNzZXJ0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVHlwZUFzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaXNOb2RlRGVmaW5lZEFzc2VydGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IGlzTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBpc05vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gaXNOb2RlQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlU2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSA9IGlzTm9kZVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVNhdGlzZmllZEFzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGF0ZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnROb2RlIiwiZ2V0VGVybU5vZGVzIiwidGVybU5vZGVzIiwiZmlsdGVyRGVzY2VuZGFudE5vZGUiLCJkZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlVGVybU5vZGUiLCJpc05vZGVUZXJtTm9kZSIsImdldEZyYW1lTm9kZXMiLCJmcmFtZU5vZGVzIiwiZGVzY2VuZGFudE5vZGVGcmFtZU5vZGUiLCJpc05vZGVGcmFtZU5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlRXF1YWxpdHlOb2RlIiwiaXNOb2RlRXF1YWxpdHlOb2RlIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJjaGlsZE5vZGVKdWRnZW1lbnROb2RlIiwiaXNOb2RlSnVkZ2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSIsImlzTm9kZU1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiY2hpbGROb2RlVHlwZUFzc2VydGlvbk5vZGUiLCJpc05vZGVUeXBlQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJpc05vZGVEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImNoaWxkTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImlzTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImNoaWxkTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImlzTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiaXNOb2RlQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiY2hpbGROb2RlU2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsImlzTm9kZVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFn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