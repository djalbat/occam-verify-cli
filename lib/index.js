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
var _statement = /*#__PURE__*/ _interop_require_default(require("./statement"));
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
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
var _qualified = /*#__PURE__*/ _interop_require_default(require("./statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9sZW1tYVwiO1xuaW1wb3J0IEZyYW1lIGZyb20gXCIuL2ZyYW1lXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vcHJvb2ZcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuL3RoZW9yZW1cIjtcbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi9lcXVhbGl0eVwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL21ldGFUeXBlXCI7XG5pbXBvcnQgU3VicHJvb2YgZnJvbSBcIi4vc3VicHJvb2ZcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi92YXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBQcm9vZlN0ZXAgZnJvbSBcIi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuL2p1ZGdlbWVudFwiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25zZXF1ZW50IGZyb20gXCIuL2NvbnNlcXVlbnRcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcbmltcG9ydCBEZXJpdmF0aW9uIGZyb20gXCIuL2Rlcml2YXRpb25cIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgU3ViRGVyaXZhdGlvbiBmcm9tIFwiLi9zdWJEZXJpdmF0aW9uXCI7XG5pbXBvcnQgUXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZyB9IGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWxlYXNlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxlYXNlVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tR3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG4iXSwibmFtZXMiOlsiTG9nIiwiUmVsZWFzZUNvbnRleHQiLCJjdXN0b21HcmFtbWFyVXRpbGl0aWVzIiwicmVsZWFzZUNvbnRleHRVdGlsaXRpZXMiLCJyZWxlYXNlVXRpbGl0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFxQ29CQSxHQUFHO2VBQUhBLFlBQUc7O0lBQ0hDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBRWRDLHNCQUFzQjtlQUF0QkEsc0JBQXNCOztJQUN0QkMsdUJBQXVCO2VBQXZCQSx1QkFBdUI7O0lBRnZCQyxnQkFBZ0I7ZUFBaEJBLGlCQUFnQjs7OzJEQXJDbkI7MkRBQ0E7MkRBQ0E7NERBQ0M7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7OERBQ0U7OERBQ0E7K0RBQ0M7K0RBQ0E7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVBQ0E7aUVBQ0E7aUVBQ0E7aUVBQ0E7a0VBQ0M7a0VBQ0E7a0VBQ0E7a0VBQ0E7bUVBQ0M7bUVBQ0E7b0VBQ0M7b0VBQ0E7Z0VBQ0s7a0VBQ0U7aUVBQ0M7MERBRUg7OERBQ1c7K0RBQ0U7b0VBQ007cUVBQ0MifQ==