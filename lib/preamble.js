"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _type = /*#__PURE__*/ _interop_require_default(require("./structure/type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./structure/term"));
var _rule = /*#__PURE__*/ _interop_require_default(require("./structure/rule"));
var _step = /*#__PURE__*/ _interop_require_default(require("./structure/step"));
var _label = /*#__PURE__*/ _interop_require_default(require("./structure/label"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("./structure/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("./structure/lemma"));
var _frame = /*#__PURE__*/ _interop_require_default(require("./structure/frame"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./structure/proof"));
var _error = /*#__PURE__*/ _interop_require_default(require("./structure/error"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./structure/premise"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("./structure/theorem"));
var _section = /*#__PURE__*/ _interop_require_default(require("./structure/section"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./structure/equality"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./structure/metaType"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./structure/subproof"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./structure/variable"));
var _property = /*#__PURE__*/ _interop_require_default(require("./structure/property"));
var _parameter = /*#__PURE__*/ _interop_require_default(require("./structure/parameter"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./structure/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./structure/statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./structure/judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./structure/metaLemma"));
var _deduction = /*#__PURE__*/ _interop_require_default(require("./structure/deduction"));
var _signature = /*#__PURE__*/ _interop_require_default(require("./structure/signature"));
var _typePrefix = /*#__PURE__*/ _interop_require_default(require("./structure/typePrefix"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./structure/conjecture"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./structure/conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./structure/derivation"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./structure/combinator"));
var _hypothesis = /*#__PURE__*/ _interop_require_default(require("./structure/hypothesis"));
var _assumption = /*#__PURE__*/ _interop_require_default(require("./structure/assumption"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./structure/constructor"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./structure/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./structure/metatheorem"));
var _equivalence = /*#__PURE__*/ _interop_require_default(require("./structure/equivalence"));
var _equivalences = /*#__PURE__*/ _interop_require_default(require("./structure/equivalences"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./structure/metavariable"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./structure/substitutions"));
var _procedureCall = /*#__PURE__*/ _interop_require_default(require("./structure/procedureCall"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./structure/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./structure/assertion/type"));
var _propertyRelation = /*#__PURE__*/ _interop_require_default(require("./structure/propertyRelation"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./structure/assertion/defined"));
var _term1 = /*#__PURE__*/ _interop_require_default(require("./structure/substitution/term"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("./structure/substitution/frame"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./structure/assertion/subproof"));
var _property1 = /*#__PURE__*/ _interop_require_default(require("./structure/assertion/property"));
var _procedureReference = /*#__PURE__*/ _interop_require_default(require("./structure/procedureReference"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./structure/assertion/contained"));
var _satisfies = /*#__PURE__*/ _interop_require_default(require("./structure/assertion/satisfies"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/variable"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("./structure/combinator/bracketed"));
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("./structure/constructor/bracketed"));
var _simpleType = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/simpleType"));
var _statement1 = /*#__PURE__*/ _interop_require_default(require("./structure/substitution/statement"));
var _reference1 = /*#__PURE__*/ _interop_require_default(require("./structure/substitution/reference"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/combinator"));
var _typePrefix1 = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/typePrefix"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/constructor"));
var _complexType = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/complexType"));
var _metavariable1 = /*#__PURE__*/ _interop_require_default(require("./structure/declaration/metavariable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVhbWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vc3RydWN0dXJlL3R5cGVcIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuL3N0cnVjdHVyZS90ZXJtXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vc3RydWN0dXJlL3N0ZXBcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9zdHJ1Y3R1cmUvbGFiZWxcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi9zdHJ1Y3R1cmUvYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9zdHJ1Y3R1cmUvbGVtbWFcIjtcbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvZnJhbWVcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9zdHJ1Y3R1cmUvcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9zdHJ1Y3R1cmUvZXJyb3JcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3N0cnVjdHVyZS9wcmVtaXNlXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi9zdHJ1Y3R1cmUvdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vc3RydWN0dXJlL3NlY3Rpb25cIjtcbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi9zdHJ1Y3R1cmUvZXF1YWxpdHlcIjtcbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9zdHJ1Y3R1cmUvc3VicHJvb2ZcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvdmFyaWFibGVcIjtcbmltcG9ydCBQcm9wZXJ0eSBmcm9tIFwiLi9zdHJ1Y3R1cmUvcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vc3RydWN0dXJlL3BhcmFtZXRlclwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL3N0cnVjdHVyZS9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vc3RydWN0dXJlL2p1ZGdlbWVudFwiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi9zdHJ1Y3R1cmUvbWV0YUxlbW1hXCI7XG5pbXBvcnQgRGVkdWN0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9kZWR1Y3Rpb25cIjtcbmltcG9ydCBTaWduYXR1cmUgZnJvbSBcIi4vc3RydWN0dXJlL3NpZ25hdHVyZVwiO1xuaW1wb3J0IFR5cGVQcmVmaXggZnJvbSBcIi4vc3RydWN0dXJlL3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuL3N0cnVjdHVyZS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tIFwiLi9zdHJ1Y3R1cmUvY29uY2x1c2lvblwiO1xuaW1wb3J0IERlcml2YXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2Rlcml2YXRpb25cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuL3N0cnVjdHVyZS9jb21iaW5hdG9yXCI7XG5pbXBvcnQgSHlwb3RoZXNpcyBmcm9tIFwiLi9zdHJ1Y3R1cmUvaHlwb3RoZXNpc1wiO1xuaW1wb3J0IEFzc3VtcHRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2Fzc3VtcHRpb25cIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi9zdHJ1Y3R1cmUvY29uc3RydWN0b3JcIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9zdHJ1Y3R1cmUvc3VwcG9zaXRpb25cIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi9zdHJ1Y3R1cmUvbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBFcXVpdmFsZW5jZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvZXF1aXZhbGVuY2VcIjtcbmltcG9ydCBFcXVpdmFsZW5jZXMgZnJvbSBcIi4vc3RydWN0dXJlL2VxdWl2YWxlbmNlc1wiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdHJ1Y3R1cmUvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFByb2NlZHVyZUNhbGwgZnJvbSBcIi4vc3RydWN0dXJlL3Byb2NlZHVyZUNhbGxcIjtcbmltcG9ydCBTdWJEZXJpdmF0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9zdWJEZXJpdmF0aW9uXCI7XG5pbXBvcnQgVHlwZUFzc2VydGlvbiBmcm9tIFwiLi9zdHJ1Y3R1cmUvYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCBQcm9wZXJ0eVJlbGF0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9wcm9wZXJ0eVJlbGF0aW9uXCI7XG5pbXBvcnQgRGVmaW5lZEFzc2VydGlvbiBmcm9tIFwiLi9zdHJ1Y3R1cmUvYXNzZXJ0aW9uL2RlZmluZWRcIjtcbmltcG9ydCBUZXJtU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9zdWJzdGl0dXRpb24vdGVybVwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9zdWJzdGl0dXRpb24vZnJhbWVcIjtcbmltcG9ydCBTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi9zdHJ1Y3R1cmUvYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5pbXBvcnQgUHJvcGVydHlBc3NlcnRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2Fzc2VydGlvbi9wcm9wZXJ0eVwiO1xuaW1wb3J0IFByb2NlZHVyZVJlZmVyZW5jZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvcHJvY2VkdXJlUmVmZXJlbmNlXCI7XG5pbXBvcnQgQ29udGFpbmVkQXNzZXJ0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9hc3NlcnRpb24vY29udGFpbmVkXCI7XG5pbXBvcnQgU2F0aXNmaWVzQXNzZXJ0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9hc3NlcnRpb24vc2F0aXNmaWVzXCI7XG5pbXBvcnQgVmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9zdHJ1Y3R1cmUvZGVjbGFyYXRpb24vdmFyaWFibGVcIjtcbmltcG9ydCBCcmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuL3N0cnVjdHVyZS9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IEJyYWNrZXRlZENvbnN0cnVjdG9yIGZyb20gXCIuL3N0cnVjdHVyZS9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2RlY2xhcmF0aW9uL3NpbXBsZVR5cGVcIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL3N1YnN0aXR1dGlvbi9yZWZlcmVuY2VcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBUeXBlUHJlZml4RGVjbGFyYXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2RlY2xhcmF0aW9uL3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuL3N0cnVjdHVyZS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4vc3RydWN0dXJlL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzJEQUVpQjsyREFDQTsyREFDQTsyREFDQTs0REFDQzs0REFDQTs0REFDQTs0REFDQTs0REFDQTs0REFDQTs4REFDRTs4REFDQTs4REFDQTsrREFDQzsrREFDQTsrREFDQTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQztrRUFDQTtrRUFDQTtrRUFDQTttRUFDQzttRUFDQTtvRUFDQztvRUFDQTtvRUFDQTs0REFDQTt1RUFDRzs4REFDQTs0REFDQTs2REFDQztnRUFDQTtnRUFDQTt5RUFDQztnRUFDQTtnRUFDQTtnRUFDQztnRUFDQTtpRUFDQztpRUFDQztpRUFDQTtpRUFDQTtrRUFDQTtrRUFDQTttRUFDQztrRUFDQTtvRUFDQyJ9