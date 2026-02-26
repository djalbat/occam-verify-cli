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
const _occamlanguages = require("occam-languages");
const _ruleNames = require("../ruleNames");
class FrameNode extends _occamlanguages.NonTerminalNode {
    isSingular() {
        let singular = false;
        const metavariableNode = this.getMetavariableNode();
        if (metavariableNode !== null) {
            singular = true;
        }
        return singular;
    }
    getMetavariableName() {
        let metavariableName = null;
        const metavariableNode = this.getMetavariableNode();
        if (metavariableNode !== null) {
            metavariableName = metavariableNode.getMetavariableName();
        }
        return metavariableName;
    }
    getAssumptionNodes() {
        const ruleName = _ruleNames.ASSUMPTION_RULE_NAME, declarationNodes = this.getNodesByRuleName(ruleName);
        return declarationNodes;
    }
    getMetavariableNode() {
        const ruleName = _ruleNames.METAVARIABLE_RULE_NAME, metavariableNode = this.getNodeByRuleName(ruleName);
        return metavariableNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEFTU1VNUFRJT05fUlVMRV9OQU1FLCBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1Npbmd1bGFyKCkge1xuICAgIGxldCBzaW5ndWxhciA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBU1NVTVBUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRnJhbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZU5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwicnVsZU5hbWUiLCJBU1NVTVBUSU9OX1JVTEVfTkFNRSIsImRlY2xhcmF0aW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0NBSlc7MkJBRTZCO0FBRTlDLE1BQU1BLGtCQUFrQkMsK0JBQWU7SUFDcERDLGFBQWE7UUFDWCxJQUFJQyxXQUFXO1FBRWYsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsbUJBQW1CO1FBRWpELElBQUlELHFCQUFxQixNQUFNO1lBQzdCRCxXQUFXO1FBQ2I7UUFFQSxPQUFPQTtJQUNUO0lBRUFHLHNCQUFzQjtRQUNwQixJQUFJQyxtQkFBbUI7UUFFdkIsTUFBTUgsbUJBQW1CLElBQUksQ0FBQ0MsbUJBQW1CO1FBRWpELElBQUlELHFCQUFxQixNQUFNO1lBQzdCRyxtQkFBbUJILGlCQUFpQkUsbUJBQW1CO1FBQ3pEO1FBRUEsT0FBT0M7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsTUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7UUFFakQsT0FBT0U7SUFDVDtJQUVBTixzQkFBc0I7UUFDcEIsTUFBTUksV0FBV0ksaUNBQXNCLEVBQ2pDVCxtQkFBbUIsSUFBSSxDQUFDVSxpQkFBaUIsQ0FBQ0w7UUFFaEQsT0FBT0w7SUFDVDtJQUVBLE9BQU9XLDJDQUEyQ04sUUFBUSxFQUFFTyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2pCLCtCQUFlLENBQUNjLDBDQUEwQyxDQUFDZixXQUFXUyxVQUFVTyxZQUFZQyxTQUFTQztJQUFhO0FBQzFOIn0=