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
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _rule = /*#__PURE__*/ _interop_require_default(require("./rule"));
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("./axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("./lemma"));
var _frame = /*#__PURE__*/ _interop_require_default(require("./frame"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./proof"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./premise"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("./theorem"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./equality"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./metaType"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./subproof"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./variable"));
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./metaLemma"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./combinator"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./derivation"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./constructor"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("./substitution"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./subDerivation"));
var _statement1 = /*#__PURE__*/ _interop_require_default(require("./substitution/statement"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9sZW1tYVwiO1xuaW1wb3J0IEZyYW1lIGZyb20gXCIuL2ZyYW1lXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vcHJvb2ZcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuL3RoZW9yZW1cIjtcbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi9lcXVhbGl0eVwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL21ldGFUeXBlXCI7XG5pbXBvcnQgU3VicHJvb2YgZnJvbSBcIi4vc3VicHJvb2ZcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi92YXJpYWJsZVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi9wcm9vZlN0ZXBcIjtcbmltcG9ydCBSZWZlcmVuY2UgZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudFwiO1xuaW1wb3J0IEp1ZGdlbWVudCBmcm9tIFwiLi9qdWRnZW1lbnRcIjtcbmltcG9ydCBNZXRhTGVtbWEgZnJvbSBcIi4vbWV0YUxlbW1hXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tIFwiLi9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9kZXJpdmF0aW9uXCI7XG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXRoZW9yZW0gZnJvbSBcIi4vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4vbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFN1YkRlcml2YXRpb24gZnJvbSBcIi4vc3ViRGVyaXZhdGlvblwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nIH0gZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbGVhc2VDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGVhc2VVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcbiJdLCJuYW1lcyI6WyJMb2ciLCJSZWxlYXNlQ29udGV4dCIsImN1c3RvbUdyYW1tYXJVdGlsaXRpZXMiLCJyZWxlYXNlQ29udGV4dFV0aWxpdGllcyIsInJlbGVhc2VVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9Db0JBLEdBQUc7ZUFBSEEsWUFBRzs7SUFDSEMsY0FBYztlQUFkQSxnQkFBYzs7SUFFZEMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBQ3RCQyx1QkFBdUI7ZUFBdkJBLHVCQUF1Qjs7SUFGdkJDLGdCQUFnQjtlQUFoQkEsaUJBQWdCOzs7MkRBcENuQjsyREFDQTsyREFDQTs0REFDQzs0REFDQTs0REFDQTs0REFDQTs0REFDQTs4REFDRTs4REFDQTsrREFDQzsrREFDQTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQztrRUFDQTtrRUFDQTtrRUFDQTttRUFDQzttRUFDQTtvRUFDQztvRUFDQTtpRUFDUTswREFFSDs4REFDVzsrREFDRTtvRUFDTTtxRUFDQyJ9