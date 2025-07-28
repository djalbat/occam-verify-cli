"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertionNode;
    }
});
var _occamparsers = require("occam-parsers");
var _constants = require("../constants");
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
var TopLevelAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelAssertionNode, NonTerminalNode);
    function TopLevelAssertionNode() {
        _class_call_check(this, TopLevelAssertionNode);
        return _call_super(this, TopLevelAssertionNode, arguments);
    }
    _create_class(TopLevelAssertionNode, [
        {
            key: "isSatisfiable",
            value: function isSatisfiable() {
                var satisfiable = false;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, content = terminalNode.getContent(), contentSatisfiable = content === _constants.SATISFIABLE;
                    if (contentSatisfiable) {
                        satisfiable = true;
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return satisfiable;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var labelNodes = [];
                var parenthesisedLabelsNode = this.getParenthesisedLabelsNode();
                if (parenthesisedLabelsNode !== null) {
                    labelNodes = parenthesisedLabelsNode.getLabelNodes();
                }
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
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var deductionNode = this.findChildNode(function(childNode) {
                    var childNOdeDeductionNode = (0, _node.isNodeDeductionNode)(childNode);
                    if (childNOdeDeductionNode) {
                        return true;
                    }
                }) || null;
                return deductionNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var suppositionNodes = this.filterChildNode(function(childNode) {
                    var childNodeSuppositionNode = (0, _node.isNodeSuppositionNode)(childNode);
                    if (childNodeSuppositionNode) {
                        return true;
                    }
                });
                return suppositionNodes;
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
    return TopLevelAssertionNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBTQVRJU0ZJQUJMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTm9kZVByb29mTm9kZSxcbiAgICAgICAgIGlzTm9kZURlZHVjdGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVTdXBwb3NpdGlvbk5vZGUsXG4gICAgICAgICBpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGxldCBzYXRpc2ZpYWJsZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsXG4gICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGNvbnRlbnRTYXRpc2ZpYWJsZSA9IChjb250ZW50ID09PSBTQVRJU0ZJQUJMRSk7XG5cbiAgICAgIGlmIChjb250ZW50U2F0aXNmaWFibGUpIHtcbiAgICAgICAgc2F0aXNmaWFibGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGxldCBsYWJlbE5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUoKTtcblxuICAgIGlmIChwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFiZWxOb2RlcyA9IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlLmdldExhYmVsTm9kZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROT2RlUHJvb2ZOb2RlID0gaXNOb2RlUHJvb2ZOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5PZGVQcm9vZk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROT2RlRGVkdWN0aW9uTm9kZSA9IGlzTm9kZURlZHVjdGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZURlZHVjdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlU3VwcG9zaXRpb25Ob2RlID0gaXNOb2RlU3VwcG9zaXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVTdXBwb3NpdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUgPSBpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImlzU2F0aXNmaWFibGUiLCJzYXRpc2ZpYWJsZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFNhdGlzZmlhYmxlIiwiU0FUSVNGSUFCTEUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxOb2RlcyIsInBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROT2RlUHJvb2ZOb2RlIiwiaXNOb2RlUHJvb2ZOb2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJjaGlsZE5PZGVEZWR1Y3Rpb25Ob2RlIiwiaXNOb2RlRGVkdWN0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROb2RlU3VwcG9zaXRpb25Ob2RlIiwiaXNOb2RlU3VwcG9zaXRpb25Ob2RlIiwiY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NEJBUlc7eUJBRUo7b0JBSWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsY0FBYztnQkFFbEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQU1DLGVBQWVGLFdBQ2ZHLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVc7b0JBRW5ELElBQUlELG9CQUFvQjt3QkFDdEJQLGNBQWM7b0JBQ2hCO29CQUVBLElBQUlHLFVBQVUsR0FBRzt3QkFDZixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsYUFBYSxFQUFFO2dCQUVuQixJQUFNQywwQkFBMEIsSUFBSSxDQUFDQywwQkFBMEI7Z0JBRS9ELElBQUlELDRCQUE0QixNQUFNO29CQUNwQ0QsYUFBYUMsd0JBQXdCRixhQUFhO2dCQUNwRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ2I7b0JBQ3BDLElBQU1jLHFCQUFxQkMsSUFBQUEscUJBQWUsRUFBQ2Y7b0JBRTNDLElBQUljLG9CQUFvQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9GO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0osYUFBYSxDQUFDLFNBQUNiO29CQUN4QyxJQUFNa0IseUJBQXlCQyxJQUFBQSx5QkFBbUIsRUFBQ25CO29CQUVuRCxJQUFJa0Isd0JBQXdCO3dCQUMxQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ3RCO29CQUM3QyxJQUFNdUIsMkJBQTJCQyxJQUFBQSwyQkFBcUIsRUFBQ3hCO29CQUV2RCxJQUFJdUIsMEJBQTBCO3dCQUM1QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsMEJBQTBCLElBQUksQ0FBQ0ksYUFBYSxDQUFDLFNBQUNiO29CQUNsRCxJQUFNeUIsa0NBQWtDQyxJQUFBQSxtQ0FBNkIsRUFBQzFCO29CQUV0RSxJQUFJeUIsaUNBQWlDO3dCQUNuQyxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT2hCO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNOLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FqRnhNcEM7RUFBOEJxQyw2QkFBZSJ9