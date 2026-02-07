"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SectionNode;
    }
});
var _occamlanguages = require("occam-languages");
var _ruleNames = require("../ruleNames");
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
var SectionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SectionNode, NonTerminalNode);
    function SectionNode() {
        _class_call_check(this, SectionNode);
        return _call_super(this, SectionNode, arguments);
    }
    _create_class(SectionNode, [
        {
            key: "getAxiomNode",
            value: function getAxiomNode() {
                var ruleName = _ruleNames.AXIOM_RULE_NAME, axiomNode = this.getNodeByRuleName(ruleName);
                return axiomNode;
            }
        },
        {
            key: "getLemmaNode",
            value: function getLemmaNode() {
                var ruleName = _ruleNames.LEMMA_RULE_NAME, lemmaNode = this.getNodeByRuleName(ruleName);
                return lemmaNode;
            }
        },
        {
            key: "getTheoremNode",
            value: function getTheoremNode() {
                var ruleName = _ruleNames.THEOREM_RULE_NAME, theoremNode = this.getNodeByRuleName(ruleName);
                return theoremNode;
            }
        },
        {
            key: "getConjectureNode",
            value: function getConjectureNode() {
                var ruleName = _ruleNames.CONJECTURE_RULE_NAME, conjectureNode = this.getNodeByRuleName(ruleName);
                return conjectureNode;
            }
        },
        {
            key: "getHypothesisNodes",
            value: function getHypothesisNodes() {
                var ruleName = _ruleNames.HYPOTHESIS_RULE_NAME, hypothesisNodes = this.getNodesByRuleName(ruleName);
                return hypothesisNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SectionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SectionNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgQVhJT01fUlVMRV9OQU1FLCBMRU1NQV9SVUxFX05BTUUsIFRIRU9SRU1fUlVMRV9OQU1FLCBDT05KRUNUVVJFX1JVTEVfTkFNRSwgSFlQT1RIRVNJU19SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQVhJT01fUlVMRV9OQU1FLFxuICAgICAgICAgIGF4aW9tTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGF4aW9tTm9kZTtcbiAgfVxuXG4gIGdldExlbW1hTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IExFTU1BX1JVTEVfTkFNRSxcbiAgICAgICAgICBsZW1tYU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsZW1tYU5vZGU7XG4gIH1cblxuICBnZXRUaGVvcmVtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRIRU9SRU1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRoZW9yZW1Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGhlb3JlbU5vZGU7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTkpFQ1RVUkVfUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbmplY3R1cmVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZU5vZGU7XG4gIH1cblxuICBnZXRIeXBvdGhlc2lzTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBIWVBPVEhFU0lTX1JVTEVfTkFNRSxcbiAgICAgICAgICBoeXBvdGhlc2lzTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc05vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTZWN0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU2VjdGlvbk5vZGUiLCJnZXRBeGlvbU5vZGUiLCJydWxlTmFtZSIsIkFYSU9NX1JVTEVfTkFNRSIsImF4aW9tTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0TGVtbWFOb2RlIiwiTEVNTUFfUlVMRV9OQU1FIiwibGVtbWFOb2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJUSEVPUkVNX1JVTEVfTkFNRSIsInRoZW9yZW1Ob2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJDT05KRUNUVVJFX1JVTEVfTkFNRSIsImNvbmplY3R1cmVOb2RlIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwiSFlQT1RIRVNJU19SVUxFX05BTUUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzhCQUpXO3lCQUVnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakcsSUFBQSxBQUFNQSw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUV6QyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLDRCQUFpQixFQUM1QkMsY0FBYyxJQUFJLENBQUNOLGlCQUFpQixDQUFDSDtnQkFFM0MsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixXQUFXVywrQkFBb0IsRUFDL0JDLGlCQUFpQixJQUFJLENBQUNULGlCQUFpQixDQUFDSDtnQkFFOUMsT0FBT1k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixXQUFXYywrQkFBb0IsRUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDaEI7Z0JBRWhELE9BQU9lO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDakIsUUFBUSxFQUFFa0IsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsK0JBQWUsQ0FBQ0osMENBQTBDLENBcEM3SW5CLGFBb0MySkUsVUFBVWtCLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBDdk10QjtFQUFvQnVCLCtCQUFlIn0=