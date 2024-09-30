"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyProofStep;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _proofStep = /*#__PURE__*/ _interop_require_default(require("../proofStep"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("../verify/subproof"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/subproof!"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), qualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/qualifiedStatement!"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/unqualifiedStatement!");
function verifyProofStep(proofStepNode, substitutions, localContext) {}
Object.assign(_shim.default, {
    verifyProofStep: verifyProofStep
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN1YnByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3N1YnByb29mIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvdW5xdWFsaWZpZWRTdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQcm9vZlN0ZXAocHJvb2ZTdGVwTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlQcm9vZlN0ZXBcbn0pO1xuIl0sIm5hbWVzIjpbInZlcmlmeVByb29mU3RlcCIsInN1YnByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJwcm9vZlN0ZXBOb2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBd0JBOzs7MkRBYlA7Z0VBQ0s7K0RBQ0s7Z0VBQ1U7a0VBQ0U7cUJBRWI7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsdUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsd0RBQy9CRSw4QkFBOEJGLElBQUFBLGdCQUFTLEVBQUMsaURBQ3hDRyxnQ0FBZ0NILElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsZ0JBQWdCTSxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxHQUNsRjtBQUVBQyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQlgsaUJBQUFBO0FBQ0YifQ==