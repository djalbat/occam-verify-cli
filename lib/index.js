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
var _property = /*#__PURE__*/ _interop_require_default(require("./dom/property"));
var _parameter = /*#__PURE__*/ _interop_require_default(require("./dom/parameter"));
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./dom/proofStep"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./dom/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./dom/statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./dom/judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./dom/metaLemma"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./dom/consequent"));
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
var _satisfying = /*#__PURE__*/ _interop_require_default(require("./dom/assertion/satisfying"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZG9tL3R5cGVcIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuL2RvbS90ZXJtXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9kb20vcnVsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL2RvbS9sYWJlbFwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuL2RvbS9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuL2RvbS9sZW1tYVwiO1xuaW1wb3J0IEZyYW1lIGZyb20gXCIuL2RvbS9mcmFtZVwiO1xuaW1wb3J0IFByb29mIGZyb20gXCIuL2RvbS9wcm9vZlwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL2RvbS9lcnJvclwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vZG9tL3ByZW1pc2VcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuL2RvbS90aGVvcmVtXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4vZG9tL2VxdWFsaXR5XCI7XG5pbXBvcnQgTWV0YVR5cGUgZnJvbSBcIi4vZG9tL21ldGFUeXBlXCI7XG5pbXBvcnQgU3VicHJvb2YgZnJvbSBcIi4vZG9tL3N1YnByb29mXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4vZG9tL3ZhcmlhYmxlXCI7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSBcIi4vZG9tL3Byb3BlcnR5XCI7XG5pbXBvcnQgUGFyYW1ldGVyIGZyb20gXCIuL2RvbS9wYXJhbWV0ZXJcIjtcbmltcG9ydCBQcm9vZlN0ZXAgZnJvbSBcIi4vZG9tL3Byb29mU3RlcFwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9kb20vcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL2RvbS9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vZG9tL2p1ZGdlbWVudFwiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi9kb20vbWV0YUxlbW1hXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9kb20vY29uc2VxdWVudFwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4vZG9tL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2RvbS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9kb20vZGVyaXZhdGlvblwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4vZG9tL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi9kb20vY29uc3RydWN0b3JcIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb25cIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9kb20vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi9kb20vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4vZG9tL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFByb2NlZHVyZUNhbGwgZnJvbSBcIi4vZG9tL3Byb2NlZHVyZUNhbGxcIjtcbmltcG9ydCBTdWJEZXJpdmF0aW9uIGZyb20gXCIuL2RvbS9zdWJEZXJpdmF0aW9uXCI7XG5pbXBvcnQgVHlwZUFzc2VydGlvbiBmcm9tIFwiLi9kb20vYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCBUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCBEZWZpbmVkQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vZGVmaW5lZFwiO1xuaW1wb3J0IFByb3BlcnR5UmVsYXRpb24gZnJvbSBcIi4vZG9tL3JlbGF0aW9uL3Byb3BlcnR5XCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFByb3BlcnR5QXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vcHJvcGVydHlcIjtcbmltcG9ydCBDb250YWluZWRBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBTYXRpc2Z5aW5nQXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vc2F0aXNmeWluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi9kb20vY29tYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCBCcmFja2V0ZWRDb25zdHJ1Y3RvciBmcm9tIFwiLi9kb20vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgQ29tYmluYXRvckRlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3JcIjtcbmltcG9ydCBDb21wbGV4VHlwZURlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi9jb21wbGV4VHlwZVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2cgfSBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0L3JlbGVhc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsZWFzZVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1c3RvbUdyYW1tYXJVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxlYXNlQ29udGV4dFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9yZWxlYXNlQ29udGV4dFwiO1xuIl0sIm5hbWVzIjpbIkxvZyIsIlJlbGVhc2VDb250ZXh0IiwiY3VzdG9tR3JhbW1hclV0aWxpdGllcyIsInJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIiwicmVsZWFzZVV0aWxpdGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0RvQkEsR0FBRztlQUFIQSxZQUFHOztJQUNIQyxjQUFjO2VBQWRBLGdCQUFjOztJQUVkQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsdUJBQXVCOztJQUZ2QkMsZ0JBQWdCO2VBQWhCQSxpQkFBZ0I7OzsyREFwRG5COzJEQUNBOzJEQUNBOzREQUNDOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzhEQUNFOzhEQUNBOytEQUNDOytEQUNBOytEQUNBOytEQUNBOytEQUNBO2dFQUNDO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO2tFQUNBO2tFQUNBO2tFQUNBO21FQUNDO29FQUNDO29FQUNBOzREQUNBOzREQUNFOzhEQUNDO2dFQUNBO2dFQUNDO2dFQUNBO2dFQUNDO2lFQUNDO2dFQUNBO2dFQUNBO2lFQUNDO2tFQUNDO21FQUNDO2tFQUNBO29FQUNDOzBEQUVMOzhEQUNXOytEQUNFO29FQUNNO3FFQUNDIn0=