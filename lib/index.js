"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Log: function() {
        return _log.default;
    },
    ReleaseContext: function() {
        return _release.default;
    },
    customGrammarUtilities: function() {
        return _customGrammar.default;
    },
    releaseContextUtilities: function() {
        return _releaseContext.default;
    },
    releaseUtilities: function() {
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
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./dom/conjecture"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./dom/conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./dom/derivation"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./dom/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./dom/constructor"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./dom/declaration"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./dom/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./dom/metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./dom/metavariable"));
var _procedureCall = /*#__PURE__*/ _interop_require_default(require("./dom/procedureCall"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./dom/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/type"));
var _type2 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/type"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/defined"));
var _property1 = /*#__PURE__*/ _interop_require_default(require("./dom/relation/property"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/subproof"));
var _property2 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/property"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/contained"));
var _satisfies = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/satisfies"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/variable"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("./dom/combinator/bracketed"));
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("./dom/constructor/bracketed"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/combinator"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZG9tL3R5cGVcIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuL2RvbS90ZXJtXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9kb20vcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vZG9tL3N0ZXBcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9kb20vbGFiZWxcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi9kb20vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9kb20vbGVtbWFcIjtcbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9kb20vZnJhbWVcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9kb20vcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9kb20vZXJyb3JcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL2RvbS9wcmVtaXNlXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi9kb20vdGhlb3JlbVwiO1xuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuL2RvbS9lcXVhbGl0eVwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL2RvbS9tZXRhVHlwZVwiO1xuaW1wb3J0IFN1YnByb29mIGZyb20gXCIuL2RvbS9zdWJwcm9vZlwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuL2RvbS92YXJpYWJsZVwiO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gXCIuL2RvbS9wcm9wZXJ0eVwiO1xuaW1wb3J0IFBhcmFtZXRlciBmcm9tIFwiLi9kb20vcGFyYW1ldGVyXCI7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gXCIuL2RvbS9yZWZlcmVuY2VcIjtcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4vZG9tL3N0YXRlbWVudFwiO1xuaW1wb3J0IEp1ZGdlbWVudCBmcm9tIFwiLi9kb20vanVkZ2VtZW50XCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuL2RvbS9tZXRhTGVtbWFcIjtcbmltcG9ydCBEZWR1Y3Rpb24gZnJvbSBcIi4vZG9tL2RlZHVjdGlvblwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4vZG9tL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2RvbS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9kb20vZGVyaXZhdGlvblwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4vZG9tL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi9kb20vY29uc3RydWN0b3JcIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb25cIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9kb20vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi9kb20vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4vZG9tL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFByb2NlZHVyZUNhbGwgZnJvbSBcIi4vZG9tL3Byb2NlZHVyZUNhbGxcIjtcbmltcG9ydCBTdWJEZXJpdmF0aW9uIGZyb20gXCIuL2RvbS9zdWJEZXJpdmF0aW9uXCI7XG5pbXBvcnQgVHlwZUFzc2VydGlvbiBmcm9tIFwiLi9kb20vYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCBUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCBEZWZpbmVkQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vZGVmaW5lZFwiO1xuaW1wb3J0IFByb3BlcnR5UmVsYXRpb24gZnJvbSBcIi4vZG9tL3JlbGF0aW9uL3Byb3BlcnR5XCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFByb3BlcnR5QXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vcHJvcGVydHlcIjtcbmltcG9ydCBDb250YWluZWRBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBTYXRpc2ZpZXNBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9zYXRpc2ZpZXNcIjtcbmltcG9ydCBWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi92YXJpYWJsZVwiO1xuaW1wb3J0IEJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4vZG9tL2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4vZG9tL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nIH0gZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbGVhc2VDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGVhc2VVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcbiJdLCJuYW1lcyI6WyJMb2ciLCJSZWxlYXNlQ29udGV4dCIsImN1c3RvbUdyYW1tYXJVdGlsaXRpZXMiLCJyZWxlYXNlQ29udGV4dFV0aWxpdGllcyIsInJlbGVhc2VVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9Eb0JBLEdBQUc7ZUFBSEEsWUFBRzs7SUFDSEMsY0FBYztlQUFkQSxnQkFBYzs7SUFFZEMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBQ3RCQyx1QkFBdUI7ZUFBdkJBLHVCQUF1Qjs7SUFGdkJDLGdCQUFnQjtlQUFoQkEsaUJBQWdCOzs7MkRBcERuQjsyREFDQTsyREFDQTsyREFDQTs0REFDQzs0REFDQTs0REFDQTs0REFDQTs0REFDQTs0REFDQTs4REFDRTs4REFDQTsrREFDQzsrREFDQTsrREFDQTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQztrRUFDQTtrRUFDQTtrRUFDQTttRUFDQztvRUFDQztvRUFDQTs0REFDQTs0REFDRTs4REFDQztnRUFDQTtnRUFDQztnRUFDQTtnRUFDQztnRUFDQTtnRUFDQztnRUFDQTtpRUFDQztrRUFDQzttRUFDQztrRUFDQTtvRUFDQzswREFFTDs4REFDVzsrREFDRTtvRUFDTTtxRUFDQyJ9