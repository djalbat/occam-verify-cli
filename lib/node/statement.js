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
var _occamparsers = require("occam-parsers");
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
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StatementNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlVGVybU5vZGUsXG4gICAgICAgICBpc05vZGVGcmFtZU5vZGUsXG4gICAgICAgICBpc05vZGVFcXVhbGl0eU5vZGUsXG4gICAgICAgICBpc05vZGVKdWRnZW1lbnROb2RlLFxuICAgICAgICAgaXNOb2RlTWV0YXZhcmlhYmxlTm9kZSxcbiAgICAgICAgIGlzTm9kZVR5cGVBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgaXNOb2RlRGVmaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVTdWJwcm9vZkFzc2VydGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgaXNOb2RlQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VGVybU5vZGVzKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHRoaXMuZmlsdGVyRGVzY2VuZGFudE5vZGUoKGRlc2NlbmRhbnROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50Tm9kZVRlcm1Ob2RlID0gaXNOb2RlVGVybU5vZGUoZGVzY2VuZGFudE5vZGUpO1xuXG4gICAgICBpZiAoZGVzY2VuZGFudE5vZGVUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXM7XG4gIH1cblxuICBnZXRGcmFtZU5vZGVzKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZXMgPSB0aGlzLmZpbHRlckRlc2NlbmRhbnROb2RlKChkZXNjZW5kYW50Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgZGVzY2VuZGFudE5vZGVGcmFtZU5vZGUgPSBpc05vZGVGcmFtZU5vZGUoZGVzY2VuZGFudE5vZGUpO1xuXG4gICAgICBpZiAoZGVzY2VuZGFudE5vZGVGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlcztcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlRXF1YWxpdHlOb2RlID0gaXNOb2RlRXF1YWxpdHlOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVFcXVhbGl0eU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlSnVkZ2VtZW50Tm9kZSA9IGlzTm9kZUp1ZGdlbWVudE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZUp1ZGdlbWVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUgPSBpc05vZGVNZXRhdmFyaWFibGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVBc3NlcnRpb25Ob2RlID0gaXNOb2RlVHlwZUFzc2VydGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGlzTm9kZURlZmluZWRBc3NlcnRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBpc05vZGVTdWJwcm9vZkFzc2VydGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUHJvcGVydHlBc3NlcnRpb25Ob2RlID0gaXNOb2RlUHJvcGVydHlBc3NlcnRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGlzTm9kZUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSBpc05vZGVTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3RhdGVtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Tm9kZSIsImdldFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsImZpbHRlckRlc2NlbmRhbnROb2RlIiwiZGVzY2VuZGFudE5vZGUiLCJkZXNjZW5kYW50Tm9kZVRlcm1Ob2RlIiwiaXNOb2RlVGVybU5vZGUiLCJnZXRGcmFtZU5vZGVzIiwiZnJhbWVOb2RlcyIsImRlc2NlbmRhbnROb2RlRnJhbWVOb2RlIiwiaXNOb2RlRnJhbWVOb2RlIiwiZ2V0RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUVxdWFsaXR5Tm9kZSIsImlzTm9kZUVxdWFsaXR5Tm9kZSIsImdldEp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiY2hpbGROb2RlSnVkZ2VtZW50Tm9kZSIsImlzTm9kZUp1ZGdlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUiLCJpc05vZGVNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImNoaWxkTm9kZVR5cGVBc3NlcnRpb25Ob2RlIiwiaXNOb2RlVHlwZUFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiaXNOb2RlRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJjaGlsZE5vZGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJpc05vZGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJjaGlsZE5vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJpc05vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImlzTm9kZUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsImNoaWxkTm9kZVNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJpc05vZGVTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0Jx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