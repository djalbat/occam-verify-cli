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
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "getSingularArgumentNode",
            value: function getSingularArgumentNode() {
                var singularArgumentNode = null;
                var argumentNodes = this.filterChildNode(function(childNode) {
                    var childNodeArgumentNode = (0, _node.isNodeArgumentNode)(childNode);
                    if (childNodeArgumentNode) {
                        return true;
                    }
                }), argumentNodesLength = argumentNodes.length;
                if (argumentNodesLength === 1) {
                    var firstArgumentNode = first(argumentNodes);
                    singularArgumentNode = firstArgumentNode; ///
                }
                return singularArgumentNode;
            }
        },
        {
            key: "getSingularTermNode",
            value: function getSingularTermNode() {
                var singularTermNode = null;
                var singularArgumentNode = this.getSingularArgumentNode();
                if (singularArgumentNode !== null) {
                    singularTermNode = singularArgumentNode.getSingularTermNode();
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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGlzTm9kZVZhcmlhYmxlTm9kZSwgaXNOb2RlQXJndW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFZhcmlhYmxlTm9kZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlcyA9IHRoaXMuZmlsdGVyRGVzY2VuZGFudE5vZGUoKGRlc2NlbmRhbnROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50Tm9kZVZhcmlhYmxlTm9kZSA9IGlzTm9kZVZhcmlhYmxlTm9kZShkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50Tm9kZVZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVzO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyQXJndW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZ3VtZW50Tm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVBcmd1bWVudE5vZGUgPSBpc05vZGVBcmd1bWVudE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUFyZ3VtZW50Tm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhcmd1bWVudE5vZGVzTGVuZ3RoID0gYXJndW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoYXJndW1lbnROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudE5vZGUgPSBmaXJzdChhcmd1bWVudE5vZGVzKTtcblxuICAgICAgc2luZ3VsYXJBcmd1bWVudE5vZGUgPSBmaXJzdEFyZ3VtZW50Tm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyQXJndW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJUZXJtTm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJUZXJtTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhckFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhckFyZ3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2luZ3VsYXJUZXJtTm9kZSA9IHNpbmd1bGFyQXJndW1lbnROb2RlLmdldFNpbmd1bGFyVGVybU5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlVmFyaWFibGVOb2RlID0gaXNOb2RlVmFyaWFibGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVOb2Rlc0xlbmd0aCA9IHZhcmlhYmxlTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGVOb2RlID0gZmlyc3QodmFyaWFibGVOb2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gZmlyc3RWYXJpYWJsZU5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVGVybU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImdldFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVzIiwiZmlsdGVyRGVzY2VuZGFudE5vZGUiLCJkZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlVmFyaWFibGVOb2RlIiwiaXNOb2RlVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUiLCJzaW5ndWxhckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZXMiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVBcmd1bWVudE5vZGUiLCJpc05vZGVBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudE5vZGUiLCJnZXRTaW5ndWxhclRlcm1Ob2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJjaGlsZE5vZGVWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3RWYXJpYWJsZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7a0VBRUg7b0JBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLG9CQUFvQixDQUFDLFNBQUNDO29CQUMvQyxJQUFNQyw2QkFBNkJDLElBQUFBLHdCQUFrQixFQUFDRjtvQkFFdEQsSUFBSUMsNEJBQTRCO3dCQUM5QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1DLHdCQUF3QkMsSUFBQUEsd0JBQWtCLEVBQUNGO29CQUVqRCxJQUFJQyx1QkFBdUI7d0JBQ3pCLE9BQU87b0JBQ1Q7Z0JBQ0YsSUFDQUUsc0JBQXNCTCxjQUFjTSxNQUFNO2dCQUVoRCxJQUFJRCx3QkFBd0IsR0FBRztvQkFDN0IsSUFBTUUsb0JBQW9CakIsTUFBTVU7b0JBRWhDRCx1QkFBdUJRLG1CQUFtQixHQUFHO2dCQUMvQztnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTVYsdUJBQXVCLElBQUksQ0FBQ0QsdUJBQXVCO2dCQUV6RCxJQUFJQyx5QkFBeUIsTUFBTTtvQkFDakNVLG1CQUFtQlYscUJBQXFCUyxtQkFBbUI7Z0JBQzdEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNbEIsZ0JBQWdCLElBQUksQ0FBQ1EsZUFBZSxDQUFDLFNBQUNDO29CQUNwQyxJQUFNVSx3QkFBd0JmLElBQUFBLHdCQUFrQixFQUFDSztvQkFFakQsSUFBSVUsdUJBQXVCO3dCQUN6QixPQUFPO29CQUNUO2dCQUNGLElBQ0FDLHNCQUFzQnBCLGNBQWNhLE1BQU07Z0JBRWhELElBQUlPLHdCQUF3QixHQUFHO29CQUM3QixJQUFNQyxvQkFBb0J4QixNQUFNRztvQkFFaENrQix1QkFBdUJHLG1CQUFtQixHQUFHO2dCQUMvQztnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTCwwQ0FBMEMsQ0FuRTdJMUIsVUFtRXdKMkIsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBbkVwTTlCO0VBQWlCK0Isb0JBQWUifQ==