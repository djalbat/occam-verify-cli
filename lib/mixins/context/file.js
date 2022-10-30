"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _type = /*#__PURE__*/ _interopRequireDefault(require("../../verify/type"));
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../verify/rule"));
var _axiom = /*#__PURE__*/ _interopRequireDefault(require("../../verify/axiom"));
var _label = /*#__PURE__*/ _interopRequireDefault(require("../../verify/label"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../../verify/labels"));
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../../verify/variable"));
var _type1 = /*#__PURE__*/ _interopRequireDefault(require("../../verify/declaration/type"));
var _termAsConstructor = /*#__PURE__*/ _interopRequireDefault(require("../../verify/termAsConstructor"));
var _topLevel = /*#__PURE__*/ _interopRequireDefault(require("../../verify/declaration/topLevel"));
var _variable1 = /*#__PURE__*/ _interopRequireDefault(require("../../verify/declaration/variable"));
var _topLevelDeclarations = /*#__PURE__*/ _interopRequireDefault(require("../../verify/topLevelDeclarations"));
var _statementAsCombinator = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statementAsCombinator"));
var _combinator = /*#__PURE__*/ _interopRequireDefault(require("../../verify/declaration/combinator"));
var _constructor = /*#__PURE__*/ _interopRequireDefault(require("../../verify/declaration/constructor"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var fileContextMixins = {
    verifyType: _type.default,
    verifyRule: _rule.default,
    verifyAxiom: _axiom.default,
    verifyLabel: _label.default,
    verifyLabels: _labels.default,
    verifyVariable: _variable.default,
    verifyTypeDeclaration: _type1.default,
    verifyTermAsConstructor: _termAsConstructor.default,
    verifyTopLevelDeclaration: _topLevel.default,
    verifyVariableDeclaration: _variable1.default,
    verifyTopLevelDeclarations: _topLevelDeclarations.default,
    verifyStatementAsCombinator: _statementAsCombinator.default,
    verifyCombinatorDeclaration: _combinator.default,
    verifyConstructorDeclaration: _constructor.default
};
var _default = fileContextMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvY29udGV4dC9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VHlwZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3R5cGVcIjtcbmltcG9ydCB2ZXJpZnlSdWxlIGZyb20gXCIuLi8uLi92ZXJpZnkvcnVsZVwiO1xuaW1wb3J0IHZlcmlmeUF4aW9tIGZyb20gXCIuLi8uLi92ZXJpZnkvYXhpb21cIjtcbmltcG9ydCB2ZXJpZnlMYWJlbCBmcm9tIFwiLi4vLi4vdmVyaWZ5L2xhYmVsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi8uLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGUgZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1Bc0NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbiBmcm9tIFwiLi4vLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbnMgZnJvbSBcIi4uLy4uL3ZlcmlmeS90b3BMZXZlbERlY2xhcmF0aW9uc1wiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvciBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudEFzQ29tYmluYXRvclwiO1xuaW1wb3J0IHZlcmlmeUNvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuLi8uLi92ZXJpZnkvZGVjbGFyYXRpb24vY29uc3RydWN0b3JcIjtcblxuY29uc3QgZmlsZUNvbnRleHRNaXhpbnMgPSB7XG4gIHZlcmlmeVR5cGUsXG4gIHZlcmlmeVJ1bGUsXG4gIHZlcmlmeUF4aW9tLFxuICB2ZXJpZnlMYWJlbCxcbiAgdmVyaWZ5TGFiZWxzLFxuICB2ZXJpZnlWYXJpYWJsZSxcbiAgdmVyaWZ5VHlwZURlY2xhcmF0aW9uLFxuICB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvcixcbiAgdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbixcbiAgdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbixcbiAgdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbnMsXG4gIHZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvcixcbiAgdmVyaWZ5Q29tYmluYXRvckRlY2xhcmF0aW9uLFxuICB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaWxlQ29udGV4dE1peGlucztcbiJdLCJuYW1lcyI6WyJmaWxlQ29udGV4dE1peGlucyIsInZlcmlmeVR5cGUiLCJ2ZXJpZnlSdWxlIiwidmVyaWZ5QXhpb20iLCJ2ZXJpZnlMYWJlbCIsInZlcmlmeUxhYmVscyIsInZlcmlmeVZhcmlhYmxlIiwidmVyaWZ5VHlwZURlY2xhcmF0aW9uIiwidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJ2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIiwidmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiIsInZlcmlmeVRvcExldmVsRGVjbGFyYXRpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIiwidmVyaWZ5Q29tYmluYXRvckRlY2xhcmF0aW9uIiwidmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0NBOzs7ZUFBQTs7O3lEQWhDdUI7eURBQ0E7MERBQ0M7MERBQ0E7MkRBQ0M7NkRBQ0U7MERBQ087c0VBQ0U7NkRBQ0U7OERBQ0E7eUVBQ0M7MEVBQ0M7K0RBQ0E7Z0VBQ0M7Ozs7OztBQUV6QyxJQUFNQSxvQkFBb0I7SUFDeEJDLFlBQUFBLGFBQVU7SUFDVkMsWUFBQUEsYUFBVTtJQUNWQyxhQUFBQSxjQUFXO0lBQ1hDLGFBQUFBLGNBQVc7SUFDWEMsY0FBQUEsZUFBWTtJQUNaQyxnQkFBQUEsaUJBQWM7SUFDZEMsdUJBQUFBLGNBQXFCO0lBQ3JCQyx5QkFBQUEsMEJBQXVCO0lBQ3ZCQywyQkFBQUEsaUJBQXlCO0lBQ3pCQywyQkFBQUEsa0JBQXlCO0lBQ3pCQyw0QkFBQUEsNkJBQTBCO0lBQzFCQyw2QkFBQUEsOEJBQTJCO0lBQzNCQyw2QkFBQUEsbUJBQTJCO0lBQzNCQyw4QkFBQUEsb0JBQTRCO0FBQzlCO0lBRUEsV0FBZWQifQ==