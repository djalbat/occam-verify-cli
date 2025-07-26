"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyRelationNode;
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
var PropertyRelationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PropertyRelationNode, NonTerminalNode);
    function PropertyRelationNode() {
        _class_call_check(this, PropertyRelationNode);
        return _call_super(this, PropertyRelationNode, arguments);
    }
    _create_class(PropertyRelationNode, [
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
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyRelationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PropertyRelationNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBpc05vZGVQcm9wZXJ0eU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlSZWxhdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRQcm9wZXJ0eU5vZGUoKSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVByb3BlcnR5Tm9kZSA9IGlzTm9kZVByb3BlcnR5Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUHJvcGVydHlOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOYW1lKCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHRoaXMuZ2V0UHJvcGVydHlOb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJvcGVydHlSZWxhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVByb3BlcnR5Tm9kZSIsImlzTm9kZVByb3BlcnR5Tm9kZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozs0QkFIVztvQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ3ZDLElBQU1DLHdCQUF3QkMsSUFBQUEsd0JBQWtCLEVBQUNGO29CQUVqRCxJQUFJQyx1QkFBdUI7d0JBQ3pCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLGVBQWUsSUFBSSxDQUFDRCxlQUFlLElBQ25DTyxlQUFlTixhQUFhSyxlQUFlO2dCQUVqRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBZSxDQUFDTCwwQ0FBMEMsQ0FwQjdJVCxzQkFvQm9LVSxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FwQmhOYjtFQUE2QmMsNkJBQWUifQ==