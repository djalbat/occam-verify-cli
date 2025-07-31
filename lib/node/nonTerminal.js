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
            key: "getNodeByRuleName",
            value: function getNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var node = this.findChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                }) || null;
                return node;
            }
        },
        {
            key: "getNodesByRuleName",
            value: function getNodesByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var nodes = this.filterChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                });
                return nodes;
            }
        },
        {
            key: "getSingularTNodeByRuleName",
            value: function getSingularTNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var singularNode = null;
                var nodes = this.filterChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIGFzIE5vblRlcm1pbmFsTm9kZUJhc2UgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlQmFzZSB7XG4gIGdldE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGxldCBzaW5ndWxhck5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgICAgc2luZ3VsYXJOb2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhck5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlQmFzZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJnZXROb2RlQnlSdWxlTmFtZSIsInJ1bGVOYW1lcyIsIm5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwibm9kZXMiLCJmaWx0ZXJDaGlsZE5vZGUiLCJnZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZSIsInNpbmd1bGFyTm9kZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGVCYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTs0QkFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsWUFBSCxVQUFBLE9BQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsVUFBSCxRQUFBLFNBQUEsQ0FBQSxLQUFZOztnQkFDNUIsSUFBTUMsT0FBTyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDL0IsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7b0JBRTVELElBQUlELDBCQUEwQjt3QkFDNUIsSUFBTUUsa0JBQWtCSCxXQUNsQkksV0FBV0QsZ0JBQWdCRSxXQUFXLElBQ3RDQyw0QkFBNEJULFVBQVVVLFFBQVEsQ0FBQ0g7d0JBRXJELElBQUlFLDJCQUEyQjs0QkFDN0IsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRixNQUFNO2dCQUVOLE9BQU9SO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW1CLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHWCxZQUFILFVBQUEsT0FBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxVQUFILFFBQUEsU0FBQSxDQUFBLEtBQVk7O2dCQUM3QixJQUFNWSxRQUFRLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNWO29CQUNsQyxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxXQUFXRCxnQkFBZ0JFLFdBQVcsSUFDdENDLDRCQUE0QlQsVUFBVVUsUUFBUSxDQUFDSDt3QkFFckQsSUFBSUUsMkJBQTJCOzRCQUM3QixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQTJCLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHZCxZQUFILFVBQUEsT0FBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxVQUFILFFBQUEsU0FBQSxDQUFBLEtBQVk7O2dCQUNyQyxJQUFJZSxlQUFlO2dCQUVuQixJQUFNSCxRQUFRLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNWO29CQUM1QixJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxXQUFXRCxnQkFBZ0JFLFdBQVcsSUFDdENDLDRCQUE0QlQsVUFBVVUsUUFBUSxDQUFDSDt3QkFFckQsSUFBSUUsMkJBQTJCOzRCQUM3QixPQUFPO3dCQUNUO29CQUNGO2dCQUNGLElBQ0FPLGNBQWNKLE1BQU1LLE1BQU07Z0JBRTlCLElBQUlELGdCQUFnQixHQUFHO29CQUNyQixJQUFNRSxZQUFZckIsTUFBTWU7b0JBRXhCRyxlQUFlRyxXQUFXLEdBQUc7Z0JBQy9CO2dCQUVGLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUViLFFBQVEsRUFBRWMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNkJBQW1CLENBQUNMLDBDQUEwQyxDQUFDQyxPQUFPYixVQUFVYyxZQUFZQyxTQUFTQztZQUFhOzs7V0FoRTVNM0I7RUFBd0I0Qiw2QkFBbUIifQ==