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
var _term = /*#__PURE__*/ _interopRequireDefault(require("../../verify/term"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../../verify/equality"));
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../../verify/assertion/type"));
var _termAsVariable = /*#__PURE__*/ _interopRequireDefault(require("../../verify/termAsVariable"));
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement/unqualified"));
var _indicativeConditional = /*#__PURE__*/ _interopRequireDefault(require("../../verify/indicativeConditional"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofContextMixins = {
    verifyTerm: _term.default,
    verifyEquality: _equality.default,
    verifyStatement: _statement.default,
    verifyTypeAssertion: _type.default,
    verifyTermAsVariable: _termAsVariable.default,
    verifyQualifiedStatement: _qualified.default,
    verifyUnqualifiedStatement: _unqualified.default,
    verifyIndicativeConditional: _indicativeConditional.default
};
var _default = proofContextMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvY29udGV4dC9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uLy4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uLy4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybUFzVmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlJbmRpY2F0aXZlQ29uZGl0aW9uYWwgZnJvbSBcIi4uLy4uL3ZlcmlmeS9pbmRpY2F0aXZlQ29uZGl0aW9uYWxcIjtcblxuY29uc3QgcHJvb2ZDb250ZXh0TWl4aW5zID0ge1xuICB2ZXJpZnlUZXJtLFxuICB2ZXJpZnlFcXVhbGl0eSxcbiAgdmVyaWZ5U3RhdGVtZW50LFxuICB2ZXJpZnlUeXBlQXNzZXJ0aW9uLFxuICB2ZXJpZnlUZXJtQXNWYXJpYWJsZSxcbiAgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50LFxuICB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCxcbiAgdmVyaWZ5SW5kaWNhdGl2ZUNvbmRpdGlvbmFsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9vZkNvbnRleHRNaXhpbnM7XG4iXSwibmFtZXMiOlsicHJvb2ZDb250ZXh0TWl4aW5zIiwidmVyaWZ5VGVybSIsInZlcmlmeUVxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ2ZXJpZnlJbmRpY2F0aXZlQ29uZGl0aW9uYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNCQTs7O2VBQUE7Ozt5REFwQnVCOzZEQUNJOzhEQUNDO3lEQUNJO21FQUNDOzhEQUNJO2dFQUNFOzBFQUNDOzs7Ozs7QUFFeEMsSUFBTUEscUJBQXFCO0lBQ3pCQyxZQUFBQSxhQUFVO0lBQ1ZDLGdCQUFBQSxpQkFBYztJQUNkQyxpQkFBQUEsa0JBQWU7SUFDZkMscUJBQUFBLGFBQW1CO0lBQ25CQyxzQkFBQUEsdUJBQW9CO0lBQ3BCQywwQkFBQUEsa0JBQXdCO0lBQ3hCQyw0QkFBQUEsb0JBQTBCO0lBQzFCQyw2QkFBQUEsOEJBQTJCO0FBQzdCO0lBRUEsV0FBZVIifQ==