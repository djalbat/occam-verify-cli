"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Log () {
        return _log.default;
    },
    get ReleaseContext () {
        return _release.default;
    },
    get customGrammarUtilities () {
        return _customGrammar.default;
    },
    get releaseContextUtilities () {
        return _releaseContext.default;
    },
    get releaseUtilities () {
        return _release1.default;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("./dom/type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./dom/term"));
var _rule = /*#__PURE__*/ _interop_require_default(require("./dom/rule"));
var _step = /*#__PURE__*/ _interop_require_default(require("./dom/step"));
var _label = /*#__PURE__*/ _interop_require_default(require("./dom/label"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("./dom/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("./dom/lemma"));
var _frame = /*#__PURE__*/ _interop_require_default(require("./dom/frame"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./dom/proof"));
var _error = /*#__PURE__*/ _interop_require_default(require("./dom/error"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./dom/premise"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("./dom/theorem"));
var _section = /*#__PURE__*/ _interop_require_default(require("./dom/section"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./dom/equality"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./dom/metaType"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./dom/subproof"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./dom/variable"));
var _property = /*#__PURE__*/ _interop_require_default(require("./dom/property"));
var _parameter = /*#__PURE__*/ _interop_require_default(require("./dom/parameter"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./dom/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./dom/statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./dom/judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./dom/metaLemma"));
var _deduction = /*#__PURE__*/ _interop_require_default(require("./dom/deduction"));
var _signature = /*#__PURE__*/ _interop_require_default(require("./dom/signature"));
var _typePrefix = /*#__PURE__*/ _interop_require_default(require("./dom/typePrefix"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./dom/conjecture"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./dom/conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./dom/derivation"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./dom/combinator"));
var _hypothesis = /*#__PURE__*/ _interop_require_default(require("./dom/hypothesis"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./dom/constructor"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./dom/declaration"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./dom/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./dom/metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./dom/metavariable"));
var _procedureCall = /*#__PURE__*/ _interop_require_default(require("./dom/procedureCall"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./dom/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/type"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/defined"));
var _propertyRelation = /*#__PURE__*/ _interop_require_default(require("./dom/propertyRelation"));
var _term1 = /*#__PURE__*/ _interop_require_default(require("./dom/substitution/term"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("./dom/substitution/frame"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/subproof"));
var _property1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/property"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/contained"));
var _satisfies = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/satisfies"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/variable"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("./dom/combinator/bracketed"));
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("./dom/constructor/bracketed"));
var _simpleType = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/simpleType"));
var _statement1 = /*#__PURE__*/ _interop_require_default(require("./dom/substitution/statement"));
var _reference1 = /*#__PURE__*/ _interop_require_default(require("./dom/substitution/reference"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/combinator"));
var _typePrefix1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/typePrefix"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/constructor"));
var _complexType = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/complexType"));
var _metavariable1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/metavariable"));
var _log = /*#__PURE__*/ _interop_require_default(require("./log"));
var _release = /*#__PURE__*/ _interop_require_default(require("./context/release"));
var _release1 = /*#__PURE__*/ _interop_require_default(require("./utilities/release"));
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("./utilities/customGrammar"));
var _releaseContext = /*#__PURE__*/ _interop_require_default(require("./utilities/releaseContext"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZG9tL3R5cGVcIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuL2RvbS90ZXJtXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9kb20vcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vZG9tL3N0ZXBcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9kb20vbGFiZWxcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi9kb20vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9kb20vbGVtbWFcIjtcbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9kb20vZnJhbWVcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9kb20vcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9kb20vZXJyb3JcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL2RvbS9wcmVtaXNlXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi9kb20vdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vZG9tL3NlY3Rpb25cIjtcbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi9kb20vZXF1YWxpdHlcIjtcbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi9kb20vbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9kb20vc3VicHJvb2ZcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi9kb20vdmFyaWFibGVcIjtcbmltcG9ydCBQcm9wZXJ0eSBmcm9tIFwiLi9kb20vcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vZG9tL3BhcmFtZXRlclwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9kb20vcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL2RvbS9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vZG9tL2p1ZGdlbWVudFwiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi9kb20vbWV0YUxlbW1hXCI7XG5pbXBvcnQgRGVkdWN0aW9uIGZyb20gXCIuL2RvbS9kZWR1Y3Rpb25cIjtcbmltcG9ydCBTaWduYXR1cmUgZnJvbSBcIi4vZG9tL3NpZ25hdHVyZVwiO1xuaW1wb3J0IFR5cGVQcmVmaXggZnJvbSBcIi4vZG9tL3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuL2RvbS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tIFwiLi9kb20vY29uY2x1c2lvblwiO1xuaW1wb3J0IERlcml2YXRpb24gZnJvbSBcIi4vZG9tL2Rlcml2YXRpb25cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuL2RvbS9jb21iaW5hdG9yXCI7XG5pbXBvcnQgSHlwb3RoZXNpcyBmcm9tIFwiLi9kb20vaHlwb3RoZXNpc1wiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuL2RvbS9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvblwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL2RvbS9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuL2RvbS9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9kb20vbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgUHJvY2VkdXJlQ2FsbCBmcm9tIFwiLi9kb20vcHJvY2VkdXJlQ2FsbFwiO1xuaW1wb3J0IFN1YkRlcml2YXRpb24gZnJvbSBcIi4vZG9tL3N1YkRlcml2YXRpb25cIjtcbmltcG9ydCBUeXBlQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IERlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9kZWZpbmVkXCI7XG5pbXBvcnQgUHJvcGVydHlSZWxhdGlvbiBmcm9tIFwiLi9kb20vcHJvcGVydHlSZWxhdGlvblwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4vZG9tL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5pbXBvcnQgRnJhbWVTdWJzdGl0dXRpb24gZnJvbSBcIi4vZG9tL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vc3VicHJvb2ZcIjtcbmltcG9ydCBQcm9wZXJ0eUFzc2VydGlvbiBmcm9tIFwiLi9kb20vYXNzZXJ0aW9uL3Byb3BlcnR5XCI7XG5pbXBvcnQgQ29udGFpbmVkQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vY29udGFpbmVkXCI7XG5pbXBvcnQgU2F0aXNmaWVzQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vc2F0aXNmaWVzXCI7XG5pbXBvcnQgVmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVcIjtcbmltcG9ydCBCcmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuL2RvbS9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IEJyYWNrZXRlZENvbnN0cnVjdG9yIGZyb20gXCIuL2RvbS9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL3NpbXBsZVR5cGVcIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZnJvbSBcIi4vZG9tL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZnJvbSBcIi4vZG9tL3N1YnN0aXR1dGlvbi9yZWZlcmVuY2VcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBUeXBlUHJlZml4RGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZyB9IGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWxlYXNlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxlYXNlVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tR3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG4iXSwibmFtZXMiOlsiTG9nIiwiUmVsZWFzZUNvbnRleHQiLCJjdXN0b21HcmFtbWFyVXRpbGl0aWVzIiwicmVsZWFzZUNvbnRleHRVdGlsaXRpZXMiLCJyZWxlYXNlVXRpbGl0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2RG9CQTtlQUFBQSxZQUFHOztRQUNIQztlQUFBQSxnQkFBYzs7UUFFZEM7ZUFBQUEsc0JBQXNCOztRQUN0QkM7ZUFBQUEsdUJBQXVCOztRQUZ2QkM7ZUFBQUEsaUJBQWdCOzs7MkRBN0RuQjsyREFDQTsyREFDQTsyREFDQTs0REFDQzs0REFDQTs0REFDQTs0REFDQTs0REFDQTs0REFDQTs4REFDRTs4REFDQTs4REFDQTsrREFDQzsrREFDQTsrREFDQTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQztrRUFDQTtrRUFDQTtrRUFDQTttRUFDQztvRUFDQztvRUFDQTs0REFDQTs4REFDRzt1RUFDQTs0REFDQTs2REFDQztnRUFDQTtnRUFDQTtnRUFDQztnRUFDQTtnRUFDQztnRUFDQTtpRUFDQztpRUFDQztpRUFDQTtpRUFDQTtrRUFDQTtrRUFDQTttRUFDQztrRUFDQTtvRUFDQzswREFFTDs4REFDVzsrREFDRTtvRUFDTTtxRUFDQyJ9