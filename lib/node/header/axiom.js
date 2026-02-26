"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AxiomHeaderNode;
    }
});
const _header = /*#__PURE__*/ _interop_require_default(require("../../node/header"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AxiomHeaderNode extends _header.default {
    getSignatureNode() {
        const ruleName = _ruleNames.SIGNATURE_RULE_NAME, signatureNode = this.getNodeByRuleName(ruleName);
        return signatureNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _header.default.fromRuleNameChildNodesOpacityAndPrecedence(AxiomHeaderNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2hlYWRlci9heGlvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhlYWRlck5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaGVhZGVyXCI7XG5cbmltcG9ydCB7IFNJR05BVFVSRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tSGVhZGVyTm9kZSBleHRlbmRzIEhlYWRlck5vZGUge1xuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU0lHTkFUVVJFX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIEhlYWRlck5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEF4aW9tSGVhZGVyTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQXhpb21IZWFkZXJOb2RlIiwiSGVhZGVyTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJydWxlTmFtZSIsIlNJR05BVFVSRV9SVUxFX05BTUUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7K0RBSkU7MkJBRWE7Ozs7OztBQUVyQixNQUFNQSx3QkFBd0JDLGVBQVU7SUFDckRDLG1CQUFtQjtRQUNqQixNQUFNQyxXQUFXQyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUU3QyxPQUFPRTtJQUNUO0lBRUEsT0FBT0UsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPVCxlQUFVLENBQUNNLDBDQUEwQyxDQUFDUCxpQkFBaUJHLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDM04ifQ==