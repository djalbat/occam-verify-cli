"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameNode;
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
var FrameNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(FrameNode, NonTerminalNode);
    function FrameNode() {
        _class_call_check(this, FrameNode);
        return _call_super(this, FrameNode, arguments);
    }
    _create_class(FrameNode, [
        {
            key: "getDeclarationNodes",
            value: function getDeclarationNodes() {
                var declarationNodes = this.filterChildNode(function(childNode) {
                    var childNodeDeclarationNode = (0, _node.isNodeDeclarationNode)(childNode);
                    if (childNodeDeclarationNode) {
                        return true;
                    }
                });
                return declarationNodes;
            }
        },
        {
            key: "getMetavariableNodes",
            value: function getMetavariableNodes() {
                var metavariableNodes = this.filterChildNode(function(childNode) {
                    var childNodeMetavariableNode = (0, _node.isNodeMetavariableNode)(childNode);
                    if (childNodeMetavariableNode) {
                        return true;
                    }
                });
                return metavariableNodes;
            }
        },
        {
            key: "getSingularMetavariableNode",
            value: function getSingularMetavariableNode() {
                var singularMetavariableNode = null;
                var metavariableNodes = this.filterChildNode(function(childNode) {
                    var childNodeMetavariableNode = (0, _node.isNodeMetavariableNode)(childNode);
                    if (childNodeMetavariableNode) {
                        return true;
                    }
                }), metavariableNodesLength = metavariableNodes.length;
                if (metavariableNodesLength === 1) {
                    var firstMetavariableNode = first(metavariableNodes);
                    singularMetavariableNode = firstMetavariableNode; ///
                }
                return singularMetavariableNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBpc05vZGVEZWNsYXJhdGlvbk5vZGUsIGlzTm9kZU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldERlY2xhcmF0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZURlY2xhcmF0aW9uTm9kZSA9IGlzTm9kZURlY2xhcmF0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlRGVjbGFyYXRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUgPSBpc05vZGVNZXRhdmFyaWFibGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVzO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVNZXRhdmFyaWFibGVOb2RlID0gaXNOb2RlTWV0YXZhcmlhYmxlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9IG1ldGF2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGVOb2RlID0gZmlyc3QobWV0YXZhcmlhYmxlTm9kZXMpO1xuXG4gICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEZyYW1lTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWVOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImdldERlY2xhcmF0aW9uTm9kZXMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlRGVjbGFyYXRpb25Ob2RlIiwiaXNOb2RlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlcyIsImNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUiLCJpc05vZGVNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7a0VBRUg7b0JBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDQztvQkFDN0MsSUFBTUMsMkJBQTJCQyxJQUFBQSwyQkFBcUIsRUFBQ0Y7b0JBRXZELElBQUlDLDBCQUEwQjt3QkFDNUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNMLGVBQWUsQ0FBQyxTQUFDQztvQkFDOUMsSUFBTUssNEJBQTRCQyxJQUFBQSw0QkFBc0IsRUFBQ047b0JBRXpELElBQUlLLDJCQUEyQjt3QkFDN0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBTUosb0JBQW9CLElBQUksQ0FBQ0wsZUFBZSxDQUFDLFNBQUNDO29CQUN4QyxJQUFNSyw0QkFBNEJDLElBQUFBLDRCQUFzQixFQUFDTjtvQkFFekQsSUFBSUssMkJBQTJCO3dCQUM3QixPQUFPO29CQUNUO2dCQUNGLElBQ0FJLDBCQUEwQkwsa0JBQWtCTSxNQUFNO2dCQUV4RCxJQUFJRCw0QkFBNEIsR0FBRztvQkFDakMsSUFBTUUsd0JBQXdCaEIsTUFBTVM7b0JBRXBDSSwyQkFBMkJHLHVCQUF1QixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTCwwQ0FBMEMsQ0E5QzdJbEIsV0E4Q3lKbUIsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBOUNyTXRCO0VBQWtCdUIsb0JBQWUifQ==