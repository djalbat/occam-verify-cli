"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyDeclarationNode;
    }
});
var _occamparsers = require("occam-parsers");
var _node = require("../../utilities/node");
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
var PropertyDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PropertyDeclarationNode, NonTerminalNode);
    function PropertyDeclarationNode() {
        _class_call_check(this, PropertyDeclarationNode);
        return _call_super(this, PropertyDeclarationNode, arguments);
    }
    _create_class(PropertyDeclarationNode, [
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var typeNode = this.findChildNode(function(childNode) {
                    var childNodeTypeNode = (0, _node.isNodeTypeNode)(childNode);
                    if (childNodeTypeNode) {
                        return true;
                    }
                }) || null;
                return typeNode;
            }
        },
        {
            key: "getPropertyNode",
            value: function getPropertyNode() {
                var propertyNode = this.findChildNode(function(childNode) {
                    var childNodePropertyNode = (0, _node.isNodePropertyNode)(childNode);
                    if (childNodePropertyNode) {
                        return true;
                    }
                }) || null;
                return propertyNode;
            }
        },
        {
            key: "getPropertyName",
            value: function getPropertyName() {
                var propertyNode = this.getPropertyNode(), propertyName = propertyNode.getPropertyName();
                return propertyName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PropertyDeclarationNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBpc05vZGVUeXBlTm9kZSwgaXNOb2RlUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZU5vZGUgPSBpc05vZGVUeXBlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVHlwZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUHJvcGVydHlOb2RlID0gaXNOb2RlUHJvcGVydHlOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQcm9wZXJ0eU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9wZXJ0eU5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5hbWUoKSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gdGhpcy5nZXRQcm9wZXJ0eU5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTm9kZSIsInR5cGVOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVOb2RlIiwiaXNOb2RlVHlwZU5vZGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJjaGlsZE5vZGVQcm9wZXJ0eU5vZGUiLCJpc05vZGVQcm9wZXJ0eU5vZGUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NEJBSlc7b0JBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbkMsSUFBTUMsb0JBQW9CQyxJQUFBQSxvQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0wsYUFBYSxDQUFDLFNBQUNDO29CQUN2QyxJQUFNSyx3QkFBd0JDLElBQUFBLHdCQUFrQixFQUFDTjtvQkFFakQsSUFBSUssdUJBQXVCO3dCQUN6QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxlQUFlLElBQUksQ0FBQ0QsZUFBZSxJQUNuQ0ssZUFBZUosYUFBYUcsZUFBZTtnQkFFakQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNkJBQWUsQ0FBQ0wsMENBQTBDLENBaEM3SWIseUJBZ0N1S2MsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBaENuTmpCO0VBQWdDa0IsNkJBQWUifQ==