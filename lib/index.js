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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vZG9tL3R5cGVcIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuL2RvbS90ZXJtXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9kb20vcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vZG9tL3N0ZXBcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9kb20vbGFiZWxcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi9kb20vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9kb20vbGVtbWFcIjtcbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9kb20vZnJhbWVcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9kb20vcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9kb20vZXJyb3JcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL2RvbS9wcmVtaXNlXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi9kb20vdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vZG9tL3NlY3Rpb25cIjtcbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi9kb20vZXF1YWxpdHlcIjtcbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi9kb20vbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9kb20vc3VicHJvb2ZcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi9kb20vdmFyaWFibGVcIjtcbmltcG9ydCBQcm9wZXJ0eSBmcm9tIFwiLi9kb20vcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vZG9tL3BhcmFtZXRlclwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9kb20vcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL2RvbS9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vZG9tL2p1ZGdlbWVudFwiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi9kb20vbWV0YUxlbW1hXCI7XG5pbXBvcnQgRGVkdWN0aW9uIGZyb20gXCIuL2RvbS9kZWR1Y3Rpb25cIjtcbmltcG9ydCBTaWduYXR1cmUgZnJvbSBcIi4vZG9tL3NpZ25hdHVyZVwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4vZG9tL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2RvbS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9kb20vZGVyaXZhdGlvblwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4vZG9tL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBIeXBvdGhlc2lzIGZyb20gXCIuL2RvbS9oeXBvdGhlc2lzXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4vZG9tL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vZG9tL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXRoZW9yZW0gZnJvbSBcIi4vZG9tL21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuL2RvbS9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBQcm9jZWR1cmVDYWxsIGZyb20gXCIuL2RvbS9wcm9jZWR1cmVDYWxsXCI7XG5pbXBvcnQgU3ViRGVyaXZhdGlvbiBmcm9tIFwiLi9kb20vc3ViRGVyaXZhdGlvblwiO1xuaW1wb3J0IFR5cGVBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi90eXBlXCI7XG5pbXBvcnQgRGVmaW5lZEFzc2VydGlvbiBmcm9tIFwiLi9kb20vYXNzZXJ0aW9uL2RlZmluZWRcIjtcbmltcG9ydCBQcm9wZXJ0eVJlbGF0aW9uIGZyb20gXCIuL2RvbS9wcm9wZXJ0eVJlbGF0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9kb20vc3Vic3RpdHV0aW9uL3Rlcm1cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9kb20vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFByb3BlcnR5QXNzZXJ0aW9uIGZyb20gXCIuL2RvbS9hc3NlcnRpb24vcHJvcGVydHlcIjtcbmltcG9ydCBDb250YWluZWRBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBTYXRpc2ZpZXNBc3NlcnRpb24gZnJvbSBcIi4vZG9tL2Fzc2VydGlvbi9zYXRpc2ZpZXNcIjtcbmltcG9ydCBWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL2RvbS9kZWNsYXJhdGlvbi92YXJpYWJsZVwiO1xuaW1wb3J0IEJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4vZG9tL2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4vZG9tL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vc2ltcGxlVHlwZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9kb20vc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vZG9tL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nIH0gZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbGVhc2VDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGVhc2VVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXN0b21HcmFtbWFyVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcbiJdLCJuYW1lcyI6WyJMb2ciLCJSZWxlYXNlQ29udGV4dCIsImN1c3RvbUdyYW1tYXJVdGlsaXRpZXMiLCJyZWxlYXNlQ29udGV4dFV0aWxpdGllcyIsInJlbGVhc2VVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTBEb0JBO2VBQUFBLFlBQUc7O1FBQ0hDO2VBQUFBLGdCQUFjOztRQUVkQztlQUFBQSxzQkFBc0I7O1FBQ3RCQztlQUFBQSx1QkFBdUI7O1FBRnZCQztlQUFBQSxpQkFBZ0I7OzsyREExRG5COzJEQUNBOzJEQUNBOzJEQUNBOzREQUNDOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzhEQUNFOzhEQUNBOzhEQUNBOytEQUNDOytEQUNBOytEQUNBOytEQUNBOytEQUNBO2dFQUNDO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2dFQUNBO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO2tFQUNBO2tFQUNBO2tFQUNBO21FQUNDO29FQUNDO29FQUNBOzREQUNBOzhEQUNHO3VFQUNBOzREQUNBOzZEQUNDO2dFQUNBO2dFQUNBO2dFQUNDO2dFQUNBO2dFQUNDO2dFQUNBO2lFQUNDO2lFQUNDO2lFQUNBO2tFQUNBO21FQUNDO2tFQUNBO29FQUNDOzBEQUVMOzhEQUNXOytEQUNFO29FQUNNO3FFQUNDIn0=