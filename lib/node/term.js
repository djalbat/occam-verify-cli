"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermNode;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var TermNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TermNode, NonTerminalNode);
    function TermNode() {
        _class_call_check(this, TermNode);
        return _call_super(this, TermNode, arguments);
    }
    _create_class(TermNode, [
        {
            key: "getSingularTermNode",
            value: function getSingularTermNode() {
                var singularTermNode = null;
                var termNodes = this.filterChildNode(function(childNode) {
                    var childNodeTermNode = (0, _node.isNodeTermNode)(childNode);
                    if (!childNodeTermNode) {
                        return true;
                    }
                }), termNodesLength = termNodes.length;
                if (termNodesLength === 1) {
                    var firstTermNode = first(termNodes);
                    singularTermNode = firstTermNode; ///
                }
                return singularTermNode;
            }
        },
        {
            key: "getSingularVariableNode",
            value: function getSingularVariableNode() {
                var singularVariableNode = null;
                var variableNodes = this.filterChildNode(function(childNode) {
                    var childNodeVariableNode = (0, _node.isNodeVariableNode)(childNode);
                    if (!childNodeVariableNode) {
                        return true;
                    }
                }), variableNodesLength = variableNodes.length;
                if (variableNodesLength === 1) {
                    var firstVariableNode = first(variableNodes);
                    singularVariableNode = firstVariableNode; ///
                }
                return singularVariableNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlVGVybU5vZGUsIGlzTm9kZVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRTaW5ndWxhclRlcm1Ob2RlKCkge1xuICAgIGxldCBzaW5ndWxhclRlcm1Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVRlcm1Ob2RlID0gaXNOb2RlVGVybU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGVUZXJtTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtTm9kZXNMZW5ndGggPSB0ZXJtTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHRlcm1Ob2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RUZXJtTm9kZSA9IGZpcnN0KHRlcm1Ob2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyVGVybU5vZGUgPSBmaXJzdFRlcm1Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlVmFyaWFibGVOb2RlID0gaXNOb2RlVmFyaWFibGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICghY2hpbGROb2RlVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXNMZW5ndGggPSB2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlTm9kZSA9IGZpcnN0KHZhcmlhYmxlTm9kZXMpO1xuXG4gICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IGZpcnN0VmFyaWFibGVOb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJWYXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRTaW5ndWxhclRlcm1Ob2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsInRlcm1Ob2RlcyIsImZpbHRlckNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1Ob2RlIiwiaXNOb2RlVGVybU5vZGUiLCJ0ZXJtTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRlcm1Ob2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZXMiLCJjaGlsZE5vZGVWYXJpYWJsZU5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3RWYXJpYWJsZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7NEJBQ0M7b0JBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLFlBQVksSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1DLG9CQUFvQkMsSUFBQUEsb0JBQWMsRUFBQ0Y7b0JBRXpDLElBQUksQ0FBQ0MsbUJBQW1CO3dCQUN0QixPQUFPO29CQUNUO2dCQUNGLElBQ0FFLGtCQUFrQkwsVUFBVU0sTUFBTTtnQkFFeEMsSUFBSUQsb0JBQW9CLEdBQUc7b0JBQ3pCLElBQU1FLGdCQUFnQlgsTUFBTUk7b0JBRTVCRCxtQkFBbUJRLGVBQWUsR0FBRztnQkFDdkM7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQU1DLGdCQUFnQixJQUFJLENBQUNULGVBQWUsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTVMsd0JBQXdCQyxJQUFBQSx3QkFBa0IsRUFBQ1Y7b0JBRWpELElBQUksQ0FBQ1MsdUJBQXVCO3dCQUMxQixPQUFPO29CQUNUO2dCQUNGLElBQ0FFLHNCQUFzQkgsY0FBY0osTUFBTTtnQkFFaEQsSUFBSU8sd0JBQXdCLEdBQUc7b0JBQzdCLElBQU1DLG9CQUFvQmxCLE1BQU1jO29CQUVoQ0QsdUJBQXVCSyxtQkFBbUIsR0FBRztnQkFDL0M7Z0JBRUEsT0FBT0w7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNkJBQWUsQ0FBQ0wsMENBQTBDLENBM0M3SXBCLFVBMkN3SnFCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDcE14QjtFQUFpQnlCLDZCQUFlIn0=