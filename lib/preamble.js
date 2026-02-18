"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _type = /*#__PURE__*/ _interop_require_default(require("./element/type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./element/term"));
var _rule = /*#__PURE__*/ _interop_require_default(require("./element/rule"));
var _step = /*#__PURE__*/ _interop_require_default(require("./element/proofAssertion/step"));
var _label = /*#__PURE__*/ _interop_require_default(require("./element/label"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/lemma"));
var _frame = /*#__PURE__*/ _interop_require_default(require("./element/frame"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./element/proof"));
var _error = /*#__PURE__*/ _interop_require_default(require("./element/error"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./element/proofAssertion/premise"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/theorem"));
var _section = /*#__PURE__*/ _interop_require_default(require("./element/section"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./element/equality"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./element/metaType"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./element/subproof"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./element/variable"));
var _property = /*#__PURE__*/ _interop_require_default(require("./element/property"));
var _parameter = /*#__PURE__*/ _interop_require_default(require("./element/parameter"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./element/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./element/statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./element/judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./element/topLevelMetaAssertion/metaLemma"));
var _deduction = /*#__PURE__*/ _interop_require_default(require("./element/deduction"));
var _signature = /*#__PURE__*/ _interop_require_default(require("./element/signature"));
var _typePrefix = /*#__PURE__*/ _interop_require_default(require("./element/typePrefix"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./element/topLevelAssertion/conjecture"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./element/conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./element/derivation"));
var _hypothesis = /*#__PURE__*/ _interop_require_default(require("./element/hypothesis"));
var _assumption = /*#__PURE__*/ _interop_require_default(require("./element/assumption"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./element/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./element/constructor"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./element/proofAssertion/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./element/topLevelMetaAssertion/metatheorem"));
var _equivalence = /*#__PURE__*/ _interop_require_default(require("./element/equivalence"));
var _equivalences = /*#__PURE__*/ _interop_require_default(require("./element/equivalences"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./element/metavariable"));
var _procedureCall = /*#__PURE__*/ _interop_require_default(require("./element/procedureCall"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./element/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./element/assertion/type"));
var _propertyRelation = /*#__PURE__*/ _interop_require_default(require("./element/propertyRelation"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./element/assertion/defined"));
var _term1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/term"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/frame"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./element/assertion/subproof"));
var _property1 = /*#__PURE__*/ _interop_require_default(require("./element/assertion/property"));
var _procedureReference = /*#__PURE__*/ _interop_require_default(require("./element/procedureReference"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./element/assertion/contained"));
var _satisfies = /*#__PURE__*/ _interop_require_default(require("./element/assertion/satisfies"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/variable"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("./element/combinator/bracketed"));
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("./element/constructor/bracketed"));
var _simpleType = /*#__PURE__*/ _interop_require_default(require("./element/declaration/simpleType"));
var _statement1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/statement"));
var _reference1 = /*#__PURE__*/ _interop_require_default(require("./element/substitution/reference"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/combinator"));
var _typePrefix1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/typePrefix"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/constructor"));
var _complexType = /*#__PURE__*/ _interop_require_default(require("./element/declaration/complexType"));
var _metavariable1 = /*#__PURE__*/ _interop_require_default(require("./element/declaration/metavariable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVhbWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZWxlbWVudC90eXBlXCI7XG5pbXBvcnQgVGVybSBmcm9tIFwiLi9lbGVtZW50L3Rlcm1cIjtcbmltcG9ydCBSdWxlIGZyb20gXCIuL2VsZW1lbnQvcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vZWxlbWVudC9wcm9vZkFzc2VydGlvbi9zdGVwXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vZWxlbWVudC9sYWJlbFwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxBc3NlcnRpb24vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2xlbW1hXCI7XG5pbXBvcnQgRnJhbWUgZnJvbSBcIi4vZWxlbWVudC9mcmFtZVwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL2VsZW1lbnQvcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9lbGVtZW50L2Vycm9yXCI7XG5pbXBvcnQgUHJlbWlzZSBmcm9tIFwiLi9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2VcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxBc3NlcnRpb24vdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vZWxlbWVudC9zZWN0aW9uXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4vZWxlbWVudC9lcXVhbGl0eVwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL2VsZW1lbnQvbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9lbGVtZW50L3N1YnByb29mXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4vZWxlbWVudC92YXJpYWJsZVwiO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gXCIuL2VsZW1lbnQvcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vZWxlbWVudC9wYXJhbWV0ZXJcIjtcbmltcG9ydCBSZWZlcmVuY2UgZnJvbSBcIi4vZWxlbWVudC9yZWZlcmVuY2VcIjtcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9qdWRnZW1lbnRcIjtcbmltcG9ydCBNZXRhTGVtbWEgZnJvbSBcIi4vZWxlbWVudC90b3BMZXZlbE1ldGFBc3NlcnRpb24vbWV0YUxlbW1hXCI7XG5pbXBvcnQgRGVkdWN0aW9uIGZyb20gXCIuL2VsZW1lbnQvZGVkdWN0aW9uXCI7XG5pbXBvcnQgU2lnbmF0dXJlIGZyb20gXCIuL2VsZW1lbnQvc2lnbmF0dXJlXCI7XG5pbXBvcnQgVHlwZVByZWZpeCBmcm9tIFwiLi9lbGVtZW50L3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxBc3NlcnRpb24vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vZWxlbWVudC9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9lbGVtZW50L2Rlcml2YXRpb25cIjtcbmltcG9ydCBIeXBvdGhlc2lzIGZyb20gXCIuL2VsZW1lbnQvaHlwb3RoZXNpc1wiO1xuaW1wb3J0IEFzc3VtcHRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3N1bXB0aW9uXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi9lbGVtZW50L2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi9lbGVtZW50L2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vZWxlbWVudC9wcm9vZkFzc2VydGlvbi9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuL2VsZW1lbnQvdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uL21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4vZWxlbWVudC9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi9lbGVtZW50L2VxdWl2YWxlbmNlc1wiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9lbGVtZW50L21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFByb2NlZHVyZUNhbGwgZnJvbSBcIi4vZWxlbWVudC9wcm9jZWR1cmVDYWxsXCI7XG5pbXBvcnQgU3ViRGVyaXZhdGlvbiBmcm9tIFwiLi9lbGVtZW50L3N1YkRlcml2YXRpb25cIjtcbmltcG9ydCBUeXBlQXNzZXJ0aW9uIGZyb20gXCIuL2VsZW1lbnQvYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCBQcm9wZXJ0eVJlbGF0aW9uIGZyb20gXCIuL2VsZW1lbnQvcHJvcGVydHlSZWxhdGlvblwiO1xuaW1wb3J0IERlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3NlcnRpb24vZGVmaW5lZFwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4vZWxlbWVudC9zdWJzdGl0dXRpb24vdGVybVwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL2VsZW1lbnQvc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3NlcnRpb24vc3VicHJvb2ZcIjtcbmltcG9ydCBQcm9wZXJ0eUFzc2VydGlvbiBmcm9tIFwiLi9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eVwiO1xuaW1wb3J0IFByb2NlZHVyZVJlZmVyZW5jZSBmcm9tIFwiLi9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZVwiO1xuaW1wb3J0IENvbnRhaW5lZEFzc2VydGlvbiBmcm9tIFwiLi9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBTYXRpc2ZpZXNBc3NlcnRpb24gZnJvbSBcIi4vZWxlbWVudC9hc3NlcnRpb24vc2F0aXNmaWVzXCI7XG5pbXBvcnQgVmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi9lbGVtZW50L2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4vZWxlbWVudC9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9zaW1wbGVUeXBlXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuL2VsZW1lbnQvc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuaW1wb3J0IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2VcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgVHlwZVByZWZpeERlY2xhcmF0aW9uIGZyb20gXCIuL2VsZW1lbnQvZGVjbGFyYXRpb24vdHlwZVByZWZpeFwiO1xuaW1wb3J0IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZWxlbWVudC9kZWNsYXJhdGlvbi9jb21wbGV4VHlwZVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL2VsZW1lbnQvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MkRBRWlCOzJEQUNBOzJEQUNBOzJEQUNBOzREQUNDOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzhEQUNFOzhEQUNBOzhEQUNBOytEQUNDOytEQUNBOytEQUNBOytEQUNBOytEQUNBO2dFQUNDO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO2tFQUNBO2tFQUNBO2tFQUNBO21FQUNDO21FQUNBO29FQUNDO29FQUNBOzREQUNBO3VFQUNHOzhEQUNBOzREQUNBOzZEQUNDO2dFQUNBO2dFQUNBO3lFQUNDO2dFQUNBO2dFQUNBO2dFQUNDO2dFQUNBO2lFQUNDO2lFQUNDO2lFQUNBO2lFQUNBO2tFQUNBO2tFQUNBO21FQUNDO2tFQUNBO29FQUNDIn0=