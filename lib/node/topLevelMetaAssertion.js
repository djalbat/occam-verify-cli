"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertionNode;
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
var TopLevelMetaAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelMetaAssertionNode, NonTerminalNode);
    function TopLevelMetaAssertionNode() {
        _class_call_check(this, TopLevelMetaAssertionNode);
        return _call_super(this, TopLevelMetaAssertionNode, arguments);
    }
    _create_class(TopLevelMetaAssertionNode, [
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var parenthesisedLabelsNode = this.getParenthesisedLabelsNode(), labelNodes = parenthesisedLabelsNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var proofNode = this.findChildNode(function(childNode) {
                    var childNOdeProofNode = (0, _node.isNodeProofNode)(childNode);
                    if (childNOdeProofNode) {
                        return true;
                    }
                }) || null;
                return proofNode;
            }
        },
        {
            key: "getPremiseNodes",
            value: function getPremiseNodes() {
                var premiseNodes = this.filterChildNode(function(childNode) {
                    var childNOdePremiseNode = (0, _node.isNodePremiseNode)(childNode);
                    if (childNOdePremiseNode) {
                        return true;
                    }
                }) || null;
                return premiseNodes;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var conclusionNode = this.findChildNode(function(childNode) {
                    var childNOdeConclusionNode = (0, _node.isNodeConclusionNode)(childNode);
                    if (childNOdeConclusionNode) {
                        return true;
                    }
                }) || null;
                return conclusionNode;
            }
        },
        {
            key: "getParenthesisedLabelsNode",
            value: function getParenthesisedLabelsNode() {
                var parenthesisedLabelsNode = this.findChildNode(function(childNode) {
                    var childNodeParenthesisedLabelNode = (0, _node.isNodeParenthesisedLabelsNode)(childNode);
                    if (childNodeParenthesisedLabelNode) {
                        return true;
                    }
                }) || null;
                return parenthesisedLabelsNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopLevelMetaAssertionNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGlzTm9kZVByb29mTm9kZSwgaXNOb2RlUHJlbWlzZU5vZGUsIGlzTm9kZUNvbmNsdXNpb25Ob2RlLCBpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gcGFyZW50aGVzaXNlZExhYmVsc05vZGUuZ2V0TGFiZWxOb2RlcygpO1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcHJvb2ZOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTk9kZVByb29mTm9kZSA9IGlzTm9kZVByb29mTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROT2RlUHJvb2ZOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0UHJlbWlzZU5vZGVzKCkge1xuICAgIGNvbnN0IHByZW1pc2VOb2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTk9kZVByZW1pc2VOb2RlID0gaXNOb2RlUHJlbWlzZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZVByZW1pc2VOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJlbWlzZU5vZGVzO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROT2RlQ29uY2x1c2lvbk5vZGUgPSBpc05vZGVDb25jbHVzaW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROT2RlQ29uY2x1c2lvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25jbHVzaW9uTm9kZTtcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUgPSBpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJnZXRMYWJlbE5vZGVzIiwicGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROT2RlUHJvb2ZOb2RlIiwiaXNOb2RlUHJvb2ZOb2RlIiwiZ2V0UHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROT2RlUHJlbWlzZU5vZGUiLCJpc05vZGVQcmVtaXNlTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJjaGlsZE5PZGVDb25jbHVzaW9uTm9kZSIsImlzTm9kZUNvbmNsdXNpb25Ob2RlIiwiY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7NEJBSFc7b0JBQ3dFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCLElBQ3pEQyxhQUFhRix3QkFBd0JELGFBQWE7Z0JBRXhELE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTUMscUJBQXFCQyxJQUFBQSxxQkFBZSxFQUFDRjtvQkFFM0MsSUFBSUMsb0JBQW9CO3dCQUN0QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNMO29CQUN6QyxJQUFNTSx1QkFBdUJDLElBQUFBLHVCQUFpQixFQUFDUDtvQkFFL0MsSUFBSU0sc0JBQXNCO3dCQUN4QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDVixhQUFhLENBQUMsU0FBQ0M7b0JBQ3pDLElBQU1VLDBCQUEwQkMsSUFBQUEsMEJBQW9CLEVBQUNYO29CQUVyRCxJQUFJVSx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRDtZQUNUOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELDBCQUEwQixJQUFJLENBQUNLLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEQsSUFBTVksa0NBQWtDQyxJQUFBQSxtQ0FBNkIsRUFBQ2I7b0JBRXRFLElBQUlZLGlDQUFpQzt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9sQjtZQUNUOzs7O1lBRU9vQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBZSxDQUFDTiwwQ0FBMEMsQ0FBQ0MsT0FBT0MsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBeER4TTNCO0VBQWtDNEIsNkJBQWUifQ==