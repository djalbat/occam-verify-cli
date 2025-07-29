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
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGlzTm9kZURlY2xhcmF0aW9uTm9kZSwgaXNOb2RlTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0RGVjbGFyYXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlRGVjbGFyYXRpb25Ob2RlID0gaXNOb2RlRGVjbGFyYXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVEZWNsYXJhdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSA9IGlzTm9kZU1ldGF2YXJpYWJsZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU1ldGF2YXJpYWJsZU5vZGUgPSBpc05vZGVNZXRhdmFyaWFibGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID0gbWV0YXZhcmlhYmxlTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdChtZXRhdmFyaWFibGVOb2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0TWV0YXZhcmlhYmxlTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRnJhbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZ2V0RGVjbGFyYXRpb25Ob2RlcyIsImRlY2xhcmF0aW9uTm9kZXMiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVEZWNsYXJhdGlvbk5vZGUiLCJpc05vZGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiY2hpbGROb2RlTWV0YXZhcmlhYmxlTm9kZSIsImlzTm9kZU1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0TWV0YXZhcmlhYmxlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTs0QkFDQztvQkFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDQztvQkFDN0MsSUFBTUMsMkJBQTJCQyxJQUFBQSwyQkFBcUIsRUFBQ0Y7b0JBRXZELElBQUlDLDBCQUEwQjt3QkFDNUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNMLGVBQWUsQ0FBQyxTQUFDQztvQkFDOUMsSUFBTUssNEJBQTRCQyxJQUFBQSw0QkFBc0IsRUFBQ047b0JBRXpELElBQUlLLDJCQUEyQjt3QkFDN0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBTUosb0JBQW9CLElBQUksQ0FBQ0wsZUFBZSxDQUFDLFNBQUNDO29CQUN4QyxJQUFNSyw0QkFBNEJDLElBQUFBLDRCQUFzQixFQUFDTjtvQkFFekQsSUFBSUssMkJBQTJCO3dCQUM3QixPQUFPO29CQUNUO2dCQUNGLElBQ0FJLDBCQUEwQkwsa0JBQWtCTSxNQUFNO2dCQUV4RCxJQUFJRCw0QkFBNEIsR0FBRztvQkFDakMsSUFBTUUsd0JBQXdCaEIsTUFBTVM7b0JBRXBDSSwyQkFBMkJHLHVCQUF1QixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBZSxDQUFDTCwwQ0FBMEMsQ0E5QzdJbEIsV0E4Q3lKbUIsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBOUNyTXRCO0VBQWtCdUIsNkJBQWUifQ==