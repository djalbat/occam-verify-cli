"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _type = /*#__PURE__*/ _interop_require_default(require("./element/type"));
const _term = /*#__PURE__*/ _interop_require_default(require("./element/term"));
const _rule = /*#__PURE__*/ _interop_require_default(require("./element/rule"));
const _step = /*#__PURE__*/ _interop_require_default(require("./element/proofAssertion/step"));
const _label = /*#__PURE__*/ _interop_require_default(require("./element/label"));
const _axiom = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/axiom"));
const _lemma = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/lemma"));
const _frame = /*#__PURE__*/ _interop_require_default(require("./element/frame"));
const _proof = /*#__PURE__*/ _interop_require_default(require("./element/proof"));
const _error = /*#__PURE__*/ _interop_require_default(require("./element/error"));
const _premise = /*#__PURE__*/ _interop_require_default(require("./element/proofAssertion/premise"));
const _theorem = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/theorem"));
const _section = /*#__PURE__*/ _interop_require_default(require("./element/section"));
const _equality = /*#__PURE__*/ _interop_require_default(require("./element/equality"));
const _metaType = /*#__PURE__*/ _interop_require_default(require("./element/metaType"));
const _subproof = /*#__PURE__*/ _interop_require_default(require("./element/subproof"));
const _variable = /*#__PURE__*/ _interop_require_default(require("./element/variable"));
const _property = /*#__PURE__*/ _interop_require_default(require("./element/property"));
const _parameter = /*#__PURE__*/ _interop_require_default(require("./element/parameter"));
const _reference = /*#__PURE__*/ _interop_require_default(require("./element/reference"));
const _statement = /*#__PURE__*/ _interop_require_default(require("./element/statement"));
const _judgement = /*#__PURE__*/ _interop_require_default(require("./element/judgement"));
const _metaLemma = /*#__PURE__*/ _interop_require_default(require("./element/topLevelMetaAssertion/metaLemma"));
const _deduction = /*#__PURE__*/ _interop_require_default(require("./element/deduction"));
const _signature = /*#__PURE__*/ _interop_require_default(require("./element/signature"));
const _typePrefix = /*#__PURE__*/ _interop_require_default(require("./element/typePrefix"));
const _conjecture = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/conjecture"));
const _conclusion = /*#__PURE__*/ _interop_require_default(require("./element/conclusion"));
const _derivation = /*#__PURE__*/ _interop_require_default(require("./element/derivation"));
const _hypothesis = /*#__PURE__*/ _interop_require_default(require("./element/hypothesis"));
const _assumption = /*#__PURE__*/ _interop_require_default(require("./element/assumption"));
const _combinator = /*#__PURE__*/ _interop_require_default(require("./element/combinator"));
const _constructor = /*#__PURE__*/ _interop_require_default(require("./element/constructor"));
const _supposition = /*#__PURE__*/ _interop_require_default(require("./element/proofAssertion/supposition"));
const _metatheorem = /*#__PURE__*/ _interop_require_default(require("./element/topLevelMetaAssertion/metatheorem"));
const _equivalence = /*#__PURE__*/ _interop_require_default(require("./element/equivalence"));
const _equivalences = /*#__PURE__*/ _interop_require_default(require("./element/equivalences"));
const _metavariable = /*#__PURE__*/ _interop_require_default(require("./element/metavariable"));
const _procedureCall = /*#__PURE__*/ _interop_require_default(require("./element/procedureCall"));
const _subDerivation = /*#__PURE__*/ _interop_require_default(require("./element/subDerivation"));
const _type1 = /*#__PURE__*/ _interop_require_default(require("./element/assertion/type"));
const _propertyRelation = /*#__PURE__*/ _interop_require_default(require("./element/propertyRelation"));
const _defined = /*#__PURE__*/ _interop_require_default(require("./element/assertion/defined"));
const _term1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/term"));
const _frame1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/frame"));
const _subproof1 = /*#__PURE__*/ _interop_require_default(require("./element/assertion/subproof"));
const _property1 = /*#__PURE__*/ _interop_require_default(require("./element/assertion/property"));
const _procedureReference = /*#__PURE__*/ _interop_require_default(require("./element/procedureReference"));
const _contained = /*#__PURE__*/ _interop_require_default(require("./element/assertion/contained"));
const _satisfies = /*#__PURE__*/ _interop_require_default(require("./element/assertion/satisfies"));
const _variable1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/variable"));
const _bracketed = /*#__PURE__*/ _interop_require_default(require("./element/combinator/bracketed"));
const _bracketed1 = /*#__PURE__*/ _interop_require_default(require("./element/constructor/bracketed"));
const _simpleType = /*#__PURE__*/ _interop_require_default(require("./element/declaration/simpleType"));
const _statement1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/statement"));
const _reference1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/reference"));
const _combinator1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/combinator"));
const _typePrefix1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/typePrefix"));
const _constructor1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/constructor"));
const _complexType = /*#__PURE__*/ _interop_require_default(require("./element/declaration/complexType"));
const _metavariable1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/metavariable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVhbWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZWxlbWVudC90eXBlXCI7XG5pbXBvcnQgVGVybSBmcm9tIFwiLi9lbGVtZW50L3Rlcm1cIjtcbmltcG9ydCBSdWxlIGZyb20gXCIuL2VsZW1lbnQvcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vZWxlbWVudC9wcm9vZkFzc2VydGlvbi9zdGVwXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vZWxlbWVudC9sYWJlbFwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxBc3NlcnRpb24vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2xlbW1hXCI7XG5pbXBvcnQgRnJhbWUgZnJvbSBcIi4vZWxlbWVudC9mcmFtZVwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL2VsZW1lbnQvcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9lbGVtZW50L2Vycm9yXCI7XG5pbXBvcnQgUHJlbWlzZSBmcm9tIFwiLi9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2VcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxBc3NlcnRpb24vdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vZWxlbWVudC9zZWN0aW9uXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4vZWxlbWVudC9lcXVhbGl0eVwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL2VsZW1lbnQvbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9lbGVtZW50L3N1YnByb29mXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4vZWxlbWVudC92YXJpYWJsZVwiO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gXCIuL2VsZW1lbnQvcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vZWxlbWVudC9wYXJhbWV0ZXJcIjtcbmltcG9ydCBSZWZlcmVuY2UgZnJvbSBcIi4vZWxlbWVudC9yZWZlcmVuY2VcIjtcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9qdWRnZW1lbnRcIjtcbmltcG9ydCBNZXRhTGVtbWEgZnJvbSBcIi4vZWxlbWVudC90b3BMZXZlbE1ldGFBc3NlcnRpb24vbWV0YUxlbW1hXCI7XG5pbXBvcnQgRGVkdWN0aW9uIGZyb20gXCIuL2VsZW1lbnQvZGVkdWN0aW9uXCI7XG5pbXBvcnQgU2lnbmF0dXJlIGZyb20gXCIuL2VsZW1lbnQvc2lnbmF0dXJlXCI7XG5pbXBvcnQgVHlwZVByZWZpeCBmcm9tIFwiLi9lbGVtZW50L3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxBc3NlcnRpb24vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vZWxlbWVudC9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9lbGVtZW50L2Rlcml2YXRpb25cIjtcbmltcG9ydCBIeXBvdGhlc2lzIGZyb20gXCIuL2VsZW1lbnQvaHlwb3RoZXNpc1wiO1xuaW1wb3J0IEFzc3VtcHRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3N1bXB0aW9uXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi9lbGVtZW50L2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi9lbGVtZW50L2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vZWxlbWVudC9wcm9vZkFzc2VydGlvbi9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uL21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4vZWxlbWVudC9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi9lbGVtZW50L2VxdWl2YWxlbmNlc1wiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9lbGVtZW50L21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFByb2NlZHVyZUNhbGwgZnJvbSBcIi4vZWxlbWVudC9wcm9jZWR1cmVDYWxsXCI7XG5pbXBvcnQgU3ViRGVyaXZhdGlvbiBmcm9tIFwiLi9lbGVtZW50L3N1YkRlcml2YXRpb25cIjtcbmltcG9ydCBUeXBlQXNzZXJ0aW9uIGZyb20gXCIuL2VsZW1lbnQvYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCBQcm9wZXJ0eVJlbGF0aW9uIGZyb20gXCIuL2VsZW1lbnQvcHJvcGVydHlSZWxhdGlvblwiO1xuaW1wb3J0IERlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3NlcnRpb24vZGVmaW5lZFwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4vZWxlbWVudC9zdWJzdGl0dXRpb24vdGVybVwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL2VsZW1lbnQvc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3NlcnRpb24vc3VicHJvb2ZcIjtcbmltcG9ydCBQcm9wZXJ0eUFzc2VydGlvbiBmcm9tIFwiLi9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eVwiO1xuaW1wb3J0IFByb2NlZHVyZVJlZmVyZW5jZSBmcm9tIFwiLi9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZVwiO1xuaW1wb3J0IENvbnRhaW5lZEFzc2VydGlvbiBmcm9tIFwiLi9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBTYXRpc2ZpZXNBc3NlcnRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3NlcnRpb24vc2F0aXNmaWVzXCI7XG5pbXBvcnQgVmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi9lbGVtZW50L2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4vZWxlbWVudC9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9zaW1wbGVUeXBlXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuL2VsZW1lbnQvc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuaW1wb3J0IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2VcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgVHlwZVByZWZpeERlY2xhcmF0aW9uIGZyb20gXCIuL2VsZW1lbnQvZGVjbGFyYXRpb24vdHlwZVByZWZpeFwiO1xuaW1wb3J0IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9jb21wbGV4VHlwZVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL2VsZW1lbnQvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7NkRBRWlCOzZEQUNBOzZEQUNBOzZEQUNBOzhEQUNDOzhEQUNBOzhEQUNBOzhEQUNBOzhEQUNBOzhEQUNBO2dFQUNFO2dFQUNBO2dFQUNBO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO2tFQUNBO2tFQUNBO2tFQUNBO2tFQUNBO2tFQUNBO2tFQUNBO21FQUNDO21FQUNBO21FQUNBO21FQUNBO21FQUNBO21FQUNBO21FQUNBO29FQUNDO29FQUNBO29FQUNBO29FQUNBO3FFQUNDO3FFQUNBO3NFQUNDO3NFQUNBOzhEQUNBO3lFQUNHO2dFQUNBOzhEQUNBOytEQUNDO2tFQUNBO2tFQUNBOzJFQUNDO2tFQUNBO2tFQUNBO2tFQUNDO2tFQUNBO21FQUNDO21FQUNDO21FQUNBO21FQUNBO29FQUNBO29FQUNBO3FFQUNDO29FQUNBO3NFQUNDIn0=