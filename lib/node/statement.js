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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlVGVybU5vZGUsXG4gICAgICAgICBpc05vZGVGcmFtZU5vZGUsXG4gICAgICAgICBpc05vZGVFcXVhbGl0eU5vZGUsXG4gICAgICAgICBpc05vZGVKdWRnZW1lbnROb2RlLFxuICAgICAgICAgaXNOb2RlTWV0YXZhcmlhYmxlTm9kZSxcbiAgICAgICAgIGlzTm9kZVR5cGVBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgaXNOb2RlU3VicHJvb2ZBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgaXNOb2RlUHJvcGVydHlBc3NlcnRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUZXJtTm9kZXMoKSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5maWx0ZXJEZXNjZW5kYW50Tm9kZSgoZGVzY2VuZGFudE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnROb2RlVGVybU5vZGUgPSBpc05vZGVUZXJtTm9kZShkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50Tm9kZVRlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlcyA9IHRoaXMuZmlsdGVyRGVzY2VuZGFudE5vZGUoKGRlc2NlbmRhbnROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50Tm9kZUZyYW1lTm9kZSA9IGlzTm9kZUZyYW1lTm9kZShkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50Tm9kZUZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcXVhbGl0eU5vZGUgPSBpc05vZGVFcXVhbGl0eU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZUVxdWFsaXR5Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZTtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudE5vZGUoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVKdWRnZW1lbnROb2RlID0gaXNOb2RlSnVkZ2VtZW50Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlSnVkZ2VtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSA9IGlzTm9kZU1ldGF2YXJpYWJsZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZUFzc2VydGlvbk5vZGUgPSBpc05vZGVUeXBlQXNzZXJ0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVHlwZUFzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gaXNOb2RlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IGlzTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUHJvcGVydHlBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGF0ZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnROb2RlIiwiZ2V0VGVybU5vZGVzIiwidGVybU5vZGVzIiwiZmlsdGVyRGVzY2VuZGFudE5vZGUiLCJkZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlVGVybU5vZGUiLCJpc05vZGVUZXJtTm9kZSIsImdldEZyYW1lTm9kZXMiLCJmcmFtZU5vZGVzIiwiZGVzY2VuZGFudE5vZGVGcmFtZU5vZGUiLCJpc05vZGVGcmFtZU5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlRXF1YWxpdHlOb2RlIiwiaXNOb2RlRXF1YWxpdHlOb2RlIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJjaGlsZE5vZGVKdWRnZW1lbnROb2RlIiwiaXNOb2RlSnVkZ2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSIsImlzTm9kZU1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiY2hpbGROb2RlVHlwZUFzc2VydGlvbk5vZGUiLCJpc05vZGVUeXBlQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImNoaWxkTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImlzTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImNoaWxkTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImlzTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozs0QkFYVztvQkFTWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMseUJBQXlCQyxJQUFBQSxvQkFBYyxFQUFDRjtvQkFFOUMsSUFBSUMsd0JBQXdCO3dCQUMxQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNMLG9CQUFvQixDQUFDLFNBQUNDO29CQUM1QyxJQUFNSywwQkFBMEJDLElBQUFBLHFCQUFlLEVBQUNOO29CQUVoRCxJQUFJSyx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUN2QyxJQUFNQyx3QkFBd0JDLElBQUFBLHdCQUFrQixFQUFDRjtvQkFFakQsSUFBSUMsdUJBQXVCO3dCQUN6QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDTCxhQUFhLENBQUMsU0FBQ0M7b0JBQ3hDLElBQU1LLHlCQUF5QkMsSUFBQUEseUJBQW1CLEVBQUNOO29CQUVuRCxJQUFJSyx3QkFBd0I7d0JBQzFCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNULGFBQWEsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTVMsNEJBQTRCQyxJQUFBQSw0QkFBc0IsRUFBQ1Y7b0JBRXpELElBQUlTLDJCQUEyQjt3QkFDN0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsb0JBQW9CLElBQUksQ0FBQ2IsYUFBYSxDQUFDLFNBQUNDO29CQUM1QyxJQUFNYSw2QkFBNkJDLElBQUFBLDZCQUF1QixFQUFDZDtvQkFFM0QsSUFBSWEsNEJBQTRCO3dCQUM5QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0IsSUFBSSxDQUFDakIsYUFBYSxDQUFDLFNBQUNDO29CQUNoRCxJQUFNaUIsaUNBQWlDQyxJQUFBQSxpQ0FBMkIsRUFBQ2xCO29CQUVuRSxJQUFJaUIsZ0NBQWdDO3dCQUNsQyxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0IsSUFBSSxDQUFDckIsYUFBYSxDQUFDLFNBQUNDO29CQUNoRCxJQUFNcUIsaUNBQWlDQyxJQUFBQSxpQ0FBMkIsRUFBQ3RCO29CQUVuRSxJQUFJcUIsZ0NBQWdDO3dCQUNsQyxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNkJBQWUsQ0FBQ0wsMENBQTBDLENBakc3SXJDLGVBaUc2SnNDLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQWpHek16QztFQUFzQjBDLDZCQUFlIn0=