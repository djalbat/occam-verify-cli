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
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./dom/proofStep"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./dom/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./dom/statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./dom/judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./dom/metaLemma"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./dom/consequent"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./dom/conjecture"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./dom/conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./dom/derivation"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./dom/declaration"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./dom/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./dom/metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./dom/metavariable"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./dom/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/type"));
var _type2 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/type"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/defined"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/subproof"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/contained"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/variable"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/constructor"));
var _metavariable1 = /*#__PURE__*/ _interop_require_default(require("./dom/declaration/metavariable"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("./context/bracketed/constructor"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZG9tL3R5cGVcIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuL2RvbS90ZXJtXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9kb20vcnVsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2RvbS9sYWJlbFwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuL2RvbS9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuL2RvbS9sZW1tYVwiO1xuaW1wb3J0IEZyYW1lIGZyb20gXCIuL2RvbS9mcmFtZVwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL2RvbS9wcm9vZlwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL2RvbS9lcnJvclwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vZG9tL3ByZW1pc2VcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuL2RvbS90aGVvcmVtXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4vZG9tL2VxdWFsaXR5XCI7XG5pbXBvcnQgTWV0YVR5cGUgZnJvbSBcIi4vZG9tL21ldGFUeXBlXCI7XG5pbXBvcnQgU3VicHJvb2YgZnJvbSBcIi4vZG9tL3N1YnByb29mXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4vZG9tL3ZhcmlhYmxlXCI7XG5pbXBvcnQgUHJvb2ZTdGVwIGZyb20gXCIuL2RvbS9wcm9vZlN0ZXBcIjtcbmltcG9ydCBSZWZlcmVuY2UgZnJvbSBcIi4vZG9tL3JlZmVyZW5jZVwiO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tIFwiLi9kb20vc3RhdGVtZW50XCI7XG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuL2RvbS9qdWRnZW1lbnRcIjtcbmltcG9ydCBNZXRhTGVtbWEgZnJvbSBcIi4vZG9tL21ldGFMZW1tYVwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vZG9tL2NvbnNlcXVlbnRcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuL2RvbS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tIFwiLi9kb20vY29uY2x1c2lvblwiO1xuaW1wb3J0IERlcml2YXRpb24gZnJvbSBcIi4vZG9tL2Rlcml2YXRpb25cIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb25cIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9kb20vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi9kb20vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4vZG9tL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFN1YkRlcml2YXRpb24gZnJvbSBcIi4vZG9tL3N1YkRlcml2YXRpb25cIjtcbmltcG9ydCBUeXBlQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IFR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vdHlwZVwiO1xuaW1wb3J0IERlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9kZWZpbmVkXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IENvbnRhaW5lZEFzc2VydGlvbiBmcm9tIFwiLi9kb20vYXNzZXJ0aW9uL2NvbnRhaW5lZFwiO1xuaW1wb3J0IFZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29tYmluYXRvckRlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvYnJhY2tldGVkL2NvbnN0cnVjdG9yXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nIH0gZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbGVhc2VDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGVhc2VVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcbiJdLCJuYW1lcyI6WyJMb2ciLCJSZWxlYXNlQ29udGV4dCIsImN1c3RvbUdyYW1tYXJVdGlsaXRpZXMiLCJyZWxlYXNlQ29udGV4dFV0aWxpdGllcyIsInJlbGVhc2VVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBDb0JBLEdBQUc7ZUFBSEEsWUFBRzs7SUFDSEMsY0FBYztlQUFkQSxnQkFBYzs7SUFFZEMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBQ3RCQyx1QkFBdUI7ZUFBdkJBLHVCQUF1Qjs7SUFGdkJDLGdCQUFnQjtlQUFoQkEsaUJBQWdCOzs7MkRBMUNuQjsyREFDQTsyREFDQTs0REFDQzs0REFDQTs0REFDQTs0REFDQTs0REFDQTs0REFDQTs4REFDRTs4REFDQTsrREFDQzsrREFDQTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQztrRUFDQTtrRUFDQTttRUFDQztvRUFDQzs0REFDQTs0REFDRTs4REFDQztnRUFDQztnRUFDQztnRUFDQztpRUFDRTtrRUFDQztvRUFDQzttRUFDSTswREFFVDs4REFDVzsrREFDRTtvRUFDTTtxRUFDQyJ9