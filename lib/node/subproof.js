"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubproofNode;
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
var SubproofNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SubproofNode, NonTerminalNode);
    function SubproofNode() {
        _class_call_check(this, SubproofNode);
        return _call_super(this, SubproofNode, arguments);
    }
    _create_class(SubproofNode, [
        {
            key: "isStepNode",
            value: function isStepNode() {
                var stepNode = false;
                return stepNode;
            }
        },
        {
            key: "isSubproofNode",
            value: function isSubproofNode() {
                var subproofNode = true;
                return subproofNode;
            }
        },
        {
            key: "getSubDerivationNode",
            value: function getSubDerivationNode() {
                var subDerivationNode = this.findChildNode(function(childNode) {
                    var childNodeSubDerivationNode = (0, _node.isNodeSubDerivationNode)(childNode);
                    if (childNodeSubDerivationNode) {
                        return true;
                    }
                }) || null;
                return subDerivationNode;
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SubproofNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGlzTm9kZVN1cHBvc2l0aW9uTm9kZSwgaXNOb2RlU3ViRGVyaXZhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VicHJvb2ZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTdWJwcm9vZk5vZGUoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVTdWJEZXJpdmF0aW9uTm9kZSA9IGlzTm9kZVN1YkRlcml2YXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVTdWJEZXJpdmF0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlU3VwcG9zaXRpb25Ob2RlID0gaXNOb2RlU3VwcG9zaXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVTdXBwb3NpdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3VicHJvb2ZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJwcm9vZk5vZGUiLCJpc1N0ZXBOb2RlIiwic3RlcE5vZGUiLCJpc1N1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlU3ViRGVyaXZhdGlvbk5vZGUiLCJpc05vZGVTdWJEZXJpdmF0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROb2RlU3VwcG9zaXRpb25Ob2RlIiwiaXNOb2RlU3VwcG9zaXRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpPO29CQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVztnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlO2dCQUVyQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDNUMsSUFBTUMsNkJBQTZCQyxJQUFBQSw2QkFBdUIsRUFBQ0Y7b0JBRTNELElBQUlDLDRCQUE0Qjt3QkFDOUIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNMO29CQUM3QyxJQUFNTSwyQkFBMkJDLElBQUFBLDJCQUFxQixFQUFDUDtvQkFFdkQsSUFBSU0sMEJBQTBCO3dCQUM1QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNMLDBDQUEwQyxDQXJDN0loQixjQXFDNEppQixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FyQ3hNcEI7RUFBcUJxQixvQkFBZSJ9