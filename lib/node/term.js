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
                    if (childNodeTermNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlVGVybU5vZGUsIGlzTm9kZVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRWYXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB0aGlzLmZpbHRlckRlc2NlbmRhbnROb2RlKChkZXNjZW5kYW50Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgZGVzY2VuZGFudE5vZGVWYXJpYWJsZU5vZGUgPSBpc05vZGVWYXJpYWJsZU5vZGUoZGVzY2VuZGFudE5vZGUpO1xuXG4gICAgICBpZiAoZGVzY2VuZGFudE5vZGVWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIGdldFNpbmd1bGFyVGVybU5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyVGVybU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlVGVybU5vZGUgPSBpc05vZGVUZXJtTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlVGVybU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybU5vZGVzTGVuZ3RoID0gdGVybU5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh0ZXJtTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpO1xuXG4gICAgICBzaW5ndWxhclRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyVGVybU5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVZhcmlhYmxlTm9kZSA9IGlzTm9kZVZhcmlhYmxlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZXNMZW5ndGggPSB2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlTm9kZSA9IGZpcnN0KHZhcmlhYmxlTm9kZXMpO1xuXG4gICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IGZpcnN0VmFyaWFibGVOb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJWYXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZXRWYXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlcyIsImZpbHRlckRlc2NlbmRhbnROb2RlIiwiZGVzY2VuZGFudE5vZGUiLCJkZXNjZW5kYW50Tm9kZVZhcmlhYmxlTm9kZSIsImlzTm9kZVZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJzaW5ndWxhclRlcm1Ob2RlIiwidGVybU5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVGVybU5vZGUiLCJpc05vZGVUZXJtTm9kZSIsInRlcm1Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VGVybU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiY2hpbGROb2RlVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2Rlc0xlbmd0aCIsImZpcnN0VmFyaWFibGVOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVOzRCQUNDO29CQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMsU0FBQ0M7b0JBQy9DLElBQU1DLDZCQUE2QkMsSUFBQUEsd0JBQWtCLEVBQUNGO29CQUV0RCxJQUFJQyw0QkFBNEI7d0JBQzlCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLFlBQVksSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1DLG9CQUFvQkMsSUFBQUEsb0JBQWMsRUFBQ0Y7b0JBRXpDLElBQUlDLG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRixJQUNBRSxrQkFBa0JMLFVBQVVNLE1BQU07Z0JBRXhDLElBQUlELG9CQUFvQixHQUFHO29CQUN6QixJQUFNRSxnQkFBZ0JqQixNQUFNVTtvQkFFNUJELG1CQUFtQlEsZUFBZSxHQUFHO2dCQUN2QztnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTWhCLGdCQUFnQixJQUFJLENBQUNRLGVBQWUsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTVEsd0JBQXdCYixJQUFBQSx3QkFBa0IsRUFBQ0s7b0JBRWpELElBQUlRLHVCQUF1Qjt3QkFDekIsT0FBTztvQkFDVDtnQkFDRixJQUNBQyxzQkFBc0JsQixjQUFjYSxNQUFNO2dCQUVoRCxJQUFJSyx3QkFBd0IsR0FBRztvQkFDN0IsSUFBTUMsb0JBQW9CdEIsTUFBTUc7b0JBRWhDZ0IsdUJBQXVCRyxtQkFBbUIsR0FBRztnQkFDL0M7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNkJBQWUsQ0FBQ0wsMENBQTBDLENBdkQ3SXhCLFVBdUR3SnlCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXZEcE01QjtFQUFpQjZCLDZCQUFlIn0=