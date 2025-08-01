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
var first = _necessary.arrayUtilities.first, forwardsFind = _necessary.arrayUtilities.forwardsFind, backwardsFind = _necessary.arrayUtilities.backwardsFind;
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
            key: "getLastNodeByRuleName",
            value: function getLastNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var childNodes = this.getChildNodes(), lastNode = backwardsFind(childNodes, function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                }) || null;
                return lastNode;
            }
        },
        {
            key: "getFirstNodeByRuleName",
            value: function getFirstNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var childNodes = this.getChildNodes(), firstNode = forwardsFind(childNodes, function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                }) || null;
                return firstNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIGFzIE5vblRlcm1pbmFsTm9kZUJhc2UgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc0ZpbmQsIGJhY2t3YXJkc0ZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGVCYXNlIHtcbiAgZ2V0Tm9kZUJ5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXNCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBsYXN0Tm9kZSA9IGJhY2t3YXJkc0ZpbmQoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFzdE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdE5vZGUgPSBmb3J3YXJkc0ZpbmQoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3ROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgbGV0IHNpbmd1bGFyTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBzaW5ndWxhck5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhck5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlQmFzZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmb3J3YXJkc0ZpbmQiLCJiYWNrd2FyZHNGaW5kIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJydWxlTmFtZXMiLCJub2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsIm5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsYXN0Tm9kZSIsImdldEZpcnN0Tm9kZUJ5UnVsZU5hbWUiLCJmaXJzdE5vZGUiLCJnZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZSIsInNpbmd1bGFyTm9kZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZUJhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOzRCQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBUUMsUUFBdUNDLHlCQUFjLENBQXJERCxPQUFPRSxlQUFnQ0QseUJBQWMsQ0FBOUNDLGNBQWNDLGdCQUFrQkYseUJBQWMsQ0FBaENFO0FBRWQsSUFBQSxBQUFNSixnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7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