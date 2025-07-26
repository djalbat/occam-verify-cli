"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DerivationNode;
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
var DerivationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DerivationNode, NonTerminalNode);
    function DerivationNode() {
        _class_call_check(this, DerivationNode);
        return _call_super(this, DerivationNode, arguments);
    }
    _create_class(DerivationNode, [
        {
            key: "getStepOrSubproofNodes",
            value: function getStepOrSubproofNodes() {
                var stepOrSubproofNodes = this.reduceChildNode(function(stepOrSubproofNodes, childNode) {
                    var childNodeStepNode = (0, _node.isNodeStepNode)(childNode), childNodeSubproofNode = (0, _node.isNodeSubproofNode)(childNode);
                    if (childNodeStepNode || childNodeSubproofNode) {
                        var stepOrSubproofNode = childNode; ///
                        stepOrSubproofNodes.push(stepOrSubproofNode);
                    }
                    return stepOrSubproofNodes;
                }, []);
                return stepOrSubproofNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DerivationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return DerivationNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGlzTm9kZVN0ZXBOb2RlLCBpc05vZGVTdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVyaXZhdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCkge1xuICAgIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoc3RlcE9yU3VicHJvb2ZOb2RlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVTdGVwTm9kZSA9IGlzTm9kZVN0ZXBOb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICBjaGlsZE5vZGVTdWJwcm9vZk5vZGUgPSBpc05vZGVTdWJwcm9vZk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVN0ZXBOb2RlIHx8IGNoaWxkTm9kZVN1YnByb29mTm9kZSkge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0ZXBPclN1YnByb29mTm9kZXMucHVzaChzdGVwT3JTdWJwcm9vZk5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2ZOb2RlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3RlcE9yU3VicHJvb2ZOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRGVyaXZhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlcml2YXRpb25Ob2RlIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVTdGVwTm9kZSIsImlzTm9kZVN0ZXBOb2RlIiwiY2hpbGROb2RlU3VicHJvb2ZOb2RlIiwiaXNOb2RlU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwicHVzaCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0QkFKVztvQkFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QscUJBQXFCRTtvQkFDckUsSUFBTUMsb0JBQW9CQyxJQUFBQSxvQkFBYyxFQUFDRixZQUNuQ0csd0JBQXdCQyxJQUFBQSx3QkFBa0IsRUFBQ0o7b0JBRWpELElBQUlDLHFCQUFxQkUsdUJBQXVCO3dCQUM5QyxJQUFNRSxxQkFBcUJMLFdBQVcsR0FBRzt3QkFFekNGLG9CQUFvQlEsSUFBSSxDQUFDRDtvQkFDM0I7b0JBRUEsT0FBT1A7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVMLE9BQU9BO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNMLDBDQUEwQyxDQWxCN0lYLGdCQWtCOEpZLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQWxCMU1mO0VBQXVCZ0IsNkJBQWUifQ==