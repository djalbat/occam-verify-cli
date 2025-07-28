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
            key: "getVariableNodes",
            value: function getVariableNodes() {
                var variableNodes = this.filterDescendantNode(function(descendantNode) {
                    var descendantNodeVariableNode = (0, _node.isNodeVariableNode)(descendantNode);
                    if (descendantNodeVariableNode) {
                        return true;
                    }
                });
                return variableNodes;
            }
        },
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
                    if (childNodeVariableNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlVGVybU5vZGUsIGlzTm9kZVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRWYXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB0aGlzLmZpbHRlckRlc2NlbmRhbnROb2RlKChkZXNjZW5kYW50Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgZGVzY2VuZGFudE5vZGVWYXJpYWJsZU5vZGUgPSBpc05vZGVWYXJpYWJsZU5vZGUoZGVzY2VuZGFudE5vZGUpO1xuXG4gICAgICBpZiAoZGVzY2VuZGFudE5vZGVWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIGdldFNpbmd1bGFyVGVybU5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyVGVybU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlVGVybU5vZGUgPSBpc05vZGVUZXJtTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoIWNoaWxkTm9kZVRlcm1Ob2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlcm1Ob2Rlc0xlbmd0aCA9IHRlcm1Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAodGVybU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gZmlyc3QodGVybU5vZGVzKTtcblxuICAgICAgc2luZ3VsYXJUZXJtTm9kZSA9IGZpcnN0VGVybU5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVWYXJpYWJsZU5vZGUgPSBpc05vZGVWYXJpYWJsZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZVZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzTGVuZ3RoID0gdmFyaWFibGVOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAodmFyaWFibGVOb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZU5vZGUgPSBmaXJzdCh2YXJpYWJsZU5vZGVzKTtcblxuICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBmaXJzdFZhcmlhYmxlTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyVmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUZXJtTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVybU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2V0VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZXMiLCJmaWx0ZXJEZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlIiwiZGVzY2VuZGFudE5vZGVWYXJpYWJsZU5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclRlcm1Ob2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsInRlcm1Ob2RlcyIsImZpbHRlckNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1Ob2RlIiwiaXNOb2RlVGVybU5vZGUiLCJ0ZXJtTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRlcm1Ob2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImNoaWxkTm9kZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZXNMZW5ndGgiLCJmaXJzdFZhcmlhYmxlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTs0QkFDQztvQkFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLG9CQUFvQixDQUFDLFNBQUNDO29CQUMvQyxJQUFNQyw2QkFBNkJDLElBQUFBLHdCQUFrQixFQUFDRjtvQkFFdEQsSUFBSUMsNEJBQTRCO3dCQUM5QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyxZQUFZLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxvQkFBb0JDLElBQUFBLG9CQUFjLEVBQUNGO29CQUV6QyxJQUFJLENBQUNDLG1CQUFtQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRixJQUNBRSxrQkFBa0JMLFVBQVVNLE1BQU07Z0JBRXhDLElBQUlELG9CQUFvQixHQUFHO29CQUN6QixJQUFNRSxnQkFBZ0JqQixNQUFNVTtvQkFFNUJELG1CQUFtQlEsZUFBZSxHQUFHO2dCQUN2QztnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTWhCLGdCQUFnQixJQUFJLENBQUNRLGVBQWUsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTVEsd0JBQXdCYixJQUFBQSx3QkFBa0IsRUFBQ0s7b0JBRWpELElBQUlRLHVCQUF1Qjt3QkFDekIsT0FBTztvQkFDVDtnQkFDRixJQUNBQyxzQkFBc0JsQixjQUFjYSxNQUFNO2dCQUVoRCxJQUFJSyx3QkFBd0IsR0FBRztvQkFDN0IsSUFBTUMsb0JBQW9CdEIsTUFBTUc7b0JBRWhDZ0IsdUJBQXVCRyxtQkFBbUIsR0FBRztnQkFDL0M7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNkJBQWUsQ0FBQ0wsMENBQTBDLENBdkQ3SXhCLFVBdUR3SnlCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXZEcE01QjtFQUFpQjZCLDZCQUFlIn0=