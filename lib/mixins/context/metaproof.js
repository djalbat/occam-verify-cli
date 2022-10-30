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
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../../verify/labels"));
var _metaproof = /*#__PURE__*/ _interopRequireDefault(require("../../verify/metaproof"));
var _conclusion = /*#__PURE__*/ _interopRequireDefault(require("../../verify/conclusion"));
var _metaDerivation = /*#__PURE__*/ _interopRequireDefault(require("../../verify/metaDerivation"));
var _premiseOrPremises = /*#__PURE__*/ _interopRequireDefault(require("../../verify/premiseOrPremises"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../../verify/metastatement/unqualified"));
var _conditinalInference = /*#__PURE__*/ _interopRequireDefault(require("../../verify/conditinalInference"));
var _indicativeConditional = /*#__PURE__*/ _interopRequireDefault(require("../../verify/indicativeConditional"));
var _unconditionalInference = /*#__PURE__*/ _interopRequireDefault(require("../../verify/unconditionalInference"));
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../../verify/metastatement/qualified"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metaproofContextMixins = {
    verifyLabels: _labels.default,
    verifyMetaproof: _metaproof.default,
    verifyConclusion: _conclusion.default,
    verifyMetaDerivation: _metaDerivation.default,
    verifyPremiseOrPremises: _premiseOrPremises.default,
    verifyUnqualifiedStatement: _unqualified.default,
    verifyConditionalInference: _conditinalInference.default,
    verifyIndicativeConditional: _indicativeConditional.default,
    verifyUnconditionalInference: _unconditionalInference.default,
    verifyQualifiedMetastatement: _qualified.default,
    verifyUnqualifiedMetastatement: _unqualified.default
};
var _default = metaproofContextMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvY29udGV4dC9tZXRhcHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uLy4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlNZXRhcHJvb2YgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlDb25jbHVzaW9uIGZyb20gXCIuLi8uLi92ZXJpZnkvY29uY2x1c2lvblwiO1xuaW1wb3J0IHZlcmlmeU1ldGFEZXJpdmF0aW9uIGZyb20gXCIuLi8uLi92ZXJpZnkvbWV0YURlcml2YXRpb25cIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlT3JQcmVtaXNlcyBmcm9tIFwiLi4vLi4vdmVyaWZ5L3ByZW1pc2VPclByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5pbXBvcnQgdmVyaWZ5Q29uZGl0aW9uYWxJbmZlcmVuY2UgZnJvbSBcIi4uLy4uL3ZlcmlmeS9jb25kaXRpbmFsSW5mZXJlbmNlXCI7XG5pbXBvcnQgdmVyaWZ5SW5kaWNhdGl2ZUNvbmRpdGlvbmFsIGZyb20gXCIuLi8uLi92ZXJpZnkvaW5kaWNhdGl2ZUNvbmRpdGlvbmFsXCI7XG5pbXBvcnQgdmVyaWZ5VW5jb25kaXRpb25hbEluZmVyZW5jZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3VuY29uZGl0aW9uYWxJbmZlcmVuY2VcIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmNvbnN0IG1ldGFwcm9vZkNvbnRleHRNaXhpbnMgPSB7XG4gIHZlcmlmeUxhYmVscyxcbiAgdmVyaWZ5TWV0YXByb29mLFxuICB2ZXJpZnlDb25jbHVzaW9uLFxuICB2ZXJpZnlNZXRhRGVyaXZhdGlvbixcbiAgdmVyaWZ5UHJlbWlzZU9yUHJlbWlzZXMsXG4gIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50LFxuICB2ZXJpZnlDb25kaXRpb25hbEluZmVyZW5jZSxcbiAgdmVyaWZ5SW5kaWNhdGl2ZUNvbmRpdGlvbmFsLFxuICB2ZXJpZnlVbmNvbmRpdGlvbmFsSW5mZXJlbmNlLFxuICB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50LFxuICB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFwcm9vZkNvbnRleHRNaXhpbnM7XG4iXSwibmFtZXMiOlsibWV0YXByb29mQ29udGV4dE1peGlucyIsInZlcmlmeUxhYmVscyIsInZlcmlmeU1ldGFwcm9vZiIsInZlcmlmeUNvbmNsdXNpb24iLCJ2ZXJpZnlNZXRhRGVyaXZhdGlvbiIsInZlcmlmeVByZW1pc2VPclByZW1pc2VzIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ2ZXJpZnlDb25kaXRpb25hbEluZmVyZW5jZSIsInZlcmlmeUluZGljYXRpdmVDb25kaXRpb25hbCIsInZlcmlmeVVuY29uZGl0aW9uYWxJbmZlcmVuY2UiLCJ2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkE7OztlQUFBOzs7MkRBMUJ5Qjs4REFDRzsrREFDQzttRUFDSTtzRUFDRztnRUFDRzt3RUFDQTswRUFDQzsyRUFDQzs4REFDQTs7Ozs7O0FBR3pDLElBQU1BLHlCQUF5QjtJQUM3QkMsY0FBQUEsZUFBWTtJQUNaQyxpQkFBQUEsa0JBQWU7SUFDZkMsa0JBQUFBLG1CQUFnQjtJQUNoQkMsc0JBQUFBLHVCQUFvQjtJQUNwQkMseUJBQUFBLDBCQUF1QjtJQUN2QkMsNEJBQUFBLG9CQUEwQjtJQUMxQkMsNEJBQUFBLDRCQUEwQjtJQUMxQkMsNkJBQUFBLDhCQUEyQjtJQUMzQkMsOEJBQUFBLCtCQUE0QjtJQUM1QkMsOEJBQUFBLGtCQUE0QjtJQUM1QkMsZ0NBQUFBLG9CQUE4QjtBQUNoQztJQUVBLFdBQWVYIn0=