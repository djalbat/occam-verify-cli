"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
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
var first = _necessary.arrayUtilities.first;
var NonTerminalNode = /*#__PURE__*/ function(NonTerminalNodeBase) {
    _inherits(NonTerminalNode, NonTerminalNodeBase);
    function NonTerminalNode() {
        _class_call_check(this, NonTerminalNode);
        return _call_super(this, NonTerminalNode, arguments);
    }
    _create_class(NonTerminalNode, [
        {
            key: "getSingularTNodeByRuleName",
            value: function getSingularTNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var singularNode = null;
                var nodes = this.filterChildNode(function(childNode) {
                    var ruleName = childNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                    if (ruleNamesIncludesRuleName) {
                        return true;
                    }
                }), nodesLength = nodes.length;
                if (nodesLength === 1) {
                    var firstNode = first(nodes);
                    singularNode = firstNode; ///
                }
                return singularNode;
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
    return NonTerminalNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIGFzIE5vblRlcm1pbmFsTm9kZUJhc2UgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlQmFzZSB7XG4gIGdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGxldCBzaW5ndWxhck5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICAgIHNpbmd1bGFyTm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZUJhc2UuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUiLCJydWxlTmFtZXMiLCJzaW5ndWxhck5vZGUiLCJub2RlcyIsImZpbHRlckNoaWxkTm9kZSIsImNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlQmFzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7NEJBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBMkIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLFlBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLFVBQUgsUUFBQSxTQUFBLENBQUEsS0FBWTs7Z0JBQ3JDLElBQUlDLGVBQWU7Z0JBRW5CLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0M7b0JBQzVCLElBQU1DLFdBQVdELFVBQVVFLFdBQVcsSUFDaENDLDRCQUE0QlAsVUFBVVEsUUFBUSxDQUFDSDtvQkFFckQsSUFBSUUsMkJBQTJCO3dCQUM3QixPQUFPO29CQUNUO2dCQUNGLElBQ0FFLGNBQWNQLE1BQU1RLE1BQU07Z0JBRTlCLElBQUlELGdCQUFnQixHQUFHO29CQUNyQixJQUFNRSxZQUFZZCxNQUFNSztvQkFFeEJELGVBQWVVLFdBQVcsR0FBRztnQkFDL0I7Z0JBRUYsT0FBT1Y7WUFDVDs7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRVIsUUFBUSxFQUFFUyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBbUIsQ0FBQ0wsMENBQTBDLENBQUNDLE9BQU9SLFVBQVVTLFlBQVlDLFNBQVNDO1lBQWE7OztXQXZCNU1wQjtFQUF3QnFCLDZCQUFtQiJ9