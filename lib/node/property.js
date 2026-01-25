"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyNode;
    }
});
var _occamfurtle = require("occam-furtle");
var _constants = require("../constants");
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
var PropertyNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PropertyNode, NonTerminalNode);
    function PropertyNode() {
        _class_call_check(this, PropertyNode);
        return _call_super(this, PropertyNode, arguments);
    }
    _create_class(PropertyNode, [
        {
            key: "getNames",
            value: function getNames() {
                var names = this.mapChildNode(function(childNode) {
                    var terminalNode = childNode, content = terminalNode.getContent(), identifier = content; //
                    return identifier;
                });
                return names;
            }
        },
        {
            key: "getPropertyName",
            value: function getPropertyName() {
                var names = this.getNames(), propertyName = names.join(_constants.SINGLE_SPACE);
                return propertyName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PropertyNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IFNJTkdMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TmFtZXMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLm1hcENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gY29udGVudDsgLy9cblxuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmFtZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLmdldE5hbWVzKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZXMuam9pbihTSU5HTEVfU1BBQ0UpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJvcGVydHlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9wZXJ0eU5vZGUiLCJnZXROYW1lcyIsIm5hbWVzIiwibWFwQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJpZGVudGlmaWVyIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiam9pbiIsIlNJTkdMRV9TUEFDRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKVzt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFlBQVksQ0FBQyxTQUFDQztvQkFDL0IsSUFBTUMsZUFBZUQsV0FDZkUsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MsYUFBYUYsU0FBUyxFQUFFO29CQUU5QixPQUFPRTtnQkFDVDtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCUyxlQUFlUixNQUFNUyxJQUFJLENBQUNDLHVCQUFZO2dCQUU1QyxPQUFPRjtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw0QkFBZSxDQUFDTCwwQ0FBMEMsQ0FwQjdJYixjQW9CNEpjLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBCeE1qQjtFQUFxQmtCLDRCQUFlIn0=