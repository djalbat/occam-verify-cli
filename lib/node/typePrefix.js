"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypePrefixNode;
    }
});
var _occamfurtle = require("occam-furtle");
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
var TypePrefixNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TypePrefixNode, NonTerminalNode);
    function TypePrefixNode() {
        _class_call_check(this, TypePrefixNode);
        return _call_super(this, TypePrefixNode, arguments);
    }
    _create_class(TypePrefixNode, [
        {
            key: "getTypePrefixName",
            value: function getTypePrefixName() {
                var typePrefixName;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, content = terminalNode.getContent();
                        typePrefixName = content; ///
                        return true;
                    }
                });
                return typePrefixName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypePrefixNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypePrefixNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZVByZWZpeE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlUHJlZml4TmFtZSgpIHtcbiAgICBsZXQgdHlwZVByZWZpeE5hbWU7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVHlwZVByZWZpeE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlR5cGVQcmVmaXhOb2RlIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJCQUZXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1DLHdCQUF3QkQsVUFBVUUsY0FBYztvQkFFdEQsSUFBSUQsdUJBQXVCO3dCQUN6QixJQUFNRSxlQUFlSCxXQUNmSSxVQUFVRCxhQUFhRSxVQUFVO3dCQUV2Q1AsaUJBQWlCTSxTQUFTLEdBQUc7d0JBRTdCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNEJBQWUsQ0FBQ0wsMENBQTBDLENBcEI3SVYsZ0JBb0I4SlcsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBcEIxTWQ7RUFBdUJlLDRCQUFlIn0=