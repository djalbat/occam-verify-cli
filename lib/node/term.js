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
                var termNodes = this.reduceChildNode(function(termNodes, childNode) {
                    var childNodeTermNode = (0, _node.isNodeTermNode)(childNode);
                    if (!childNodeTermNode) {
                        var singularTermNode = childNode; ///
                        termNodes.push(singularTermNode);
                    }
                    return termNodes;
                }, []), termNodesLength = termNodes.length;
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
                var variableNodes = this.reduceChildNode(function(variableNodes, childNode) {
                    var childNodeVariableNode = (0, _node.isNodeVariableNode)(childNode);
                    if (!childNodeVariableNode) {
                        var singularVariableNode = childNode; ///
                        variableNodes.push(singularVariableNode);
                    }
                    return variableNodes;
                }, []), variableNodesLength = variableNodes.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlVGVybU5vZGUsIGlzTm9kZVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRTaW5ndWxhclRlcm1Ob2RlKCkge1xuICAgIGxldCBzaW5ndWxhclRlcm1Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1Ob2RlcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKCh0ZXJtTm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlVGVybU5vZGUgPSBpc05vZGVUZXJtTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoIWNoaWxkTm9kZVRlcm1Ob2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNpbmd1bGFyVGVybU5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgIHRlcm1Ob2Rlcy5wdXNoKHNpbmd1bGFyVGVybU5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGVybU5vZGVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB0ZXJtTm9kZXNMZW5ndGggPSB0ZXJtTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHRlcm1Ob2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RUZXJtTm9kZSA9IGZpcnN0KHRlcm1Ob2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyVGVybU5vZGUgPSBmaXJzdFRlcm1Ob2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKHZhcmlhYmxlTm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlVmFyaWFibGVOb2RlID0gaXNOb2RlVmFyaWFibGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICghY2hpbGROb2RlVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVzLnB1c2goc2luZ3VsYXJWYXJpYWJsZU5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGVOb2RlcztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgdmFyaWFibGVOb2Rlc0xlbmd0aCA9IHZhcmlhYmxlTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGVOb2RlID0gZmlyc3QodmFyaWFibGVOb2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gZmlyc3RWYXJpYWJsZU5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVGVybU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJzaW5ndWxhclRlcm1Ob2RlIiwidGVybU5vZGVzIiwicmVkdWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVGVybU5vZGUiLCJpc05vZGVUZXJtTm9kZSIsInB1c2giLCJ0ZXJtTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRlcm1Ob2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZXMiLCJjaGlsZE5vZGVWYXJpYWJsZU5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3RWYXJpYWJsZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7NEJBQ0M7b0JBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLFlBQVksSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsV0FBV0U7b0JBQzNDLElBQU1DLG9CQUFvQkMsSUFBQUEsb0JBQWMsRUFBQ0Y7b0JBRXpDLElBQUksQ0FBQ0MsbUJBQW1CO3dCQUN0QixJQUFNSixtQkFBbUJHLFdBQVcsR0FBRzt3QkFFdkNGLFVBQVVLLElBQUksQ0FBQ047b0JBQ2pCO29CQUVBLE9BQU9DO2dCQUNULEdBQUcsRUFBRSxHQUNMTSxrQkFBa0JOLFVBQVVPLE1BQU07Z0JBRXhDLElBQUlELG9CQUFvQixHQUFHO29CQUN6QixJQUFNRSxnQkFBZ0JaLE1BQU1JO29CQUU1QkQsbUJBQW1CUyxlQUFlLEdBQUc7Z0JBQ3ZDO2dCQUVBLE9BQU9UO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDVixlQUFlLENBQUMsU0FBQ1UsZUFBZVQ7b0JBQ25ELElBQU1VLHdCQUF3QkMsSUFBQUEsd0JBQWtCLEVBQUNYO29CQUVqRCxJQUFJLENBQUNVLHVCQUF1Qjt3QkFDMUIsSUFBTUYsdUJBQXVCUixXQUFXLEdBQUc7d0JBRTNDUyxjQUFjTixJQUFJLENBQUNLO29CQUNyQjtvQkFFQSxPQUFPQztnQkFDVCxHQUFHLEVBQUUsR0FDTEcsc0JBQXNCSCxjQUFjSixNQUFNO2dCQUVoRCxJQUFJTyx3QkFBd0IsR0FBRztvQkFDN0IsSUFBTUMsb0JBQW9CbkIsTUFBTWU7b0JBRWhDRCx1QkFBdUJLLG1CQUFtQixHQUFHO2dCQUMvQztnQkFFQSxPQUFPTDtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBZSxDQUFDTCwwQ0FBMEMsQ0FuRDdJckIsVUFtRHdKc0IsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBbkRwTXpCO0VBQWlCMEIsNkJBQWUifQ==