"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _type = /*#__PURE__*/ _interop_require_default(require("./ontology/type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./ontology/term"));
var _rule = /*#__PURE__*/ _interop_require_default(require("./ontology/rule"));
var _step = /*#__PURE__*/ _interop_require_default(require("./ontology/step"));
var _label = /*#__PURE__*/ _interop_require_default(require("./ontology/label"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("./ontology/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("./ontology/lemma"));
var _frame = /*#__PURE__*/ _interop_require_default(require("./ontology/frame"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./ontology/proof"));
var _error = /*#__PURE__*/ _interop_require_default(require("./ontology/error"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./ontology/premise"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("./ontology/theorem"));
var _section = /*#__PURE__*/ _interop_require_default(require("./ontology/section"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./ontology/equality"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./ontology/metaType"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./ontology/subproof"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./ontology/variable"));
var _property = /*#__PURE__*/ _interop_require_default(require("./ontology/property"));
var _parameter = /*#__PURE__*/ _interop_require_default(require("./ontology/parameter"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./ontology/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./ontology/statement"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./ontology/judgement"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./ontology/metaLemma"));
var _deduction = /*#__PURE__*/ _interop_require_default(require("./ontology/deduction"));
var _signature = /*#__PURE__*/ _interop_require_default(require("./ontology/signature"));
var _typePrefix = /*#__PURE__*/ _interop_require_default(require("./ontology/typePrefix"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("./ontology/conjecture"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./ontology/conclusion"));
var _derivation = /*#__PURE__*/ _interop_require_default(require("./ontology/derivation"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./ontology/combinator"));
var _hypothesis = /*#__PURE__*/ _interop_require_default(require("./ontology/hypothesis"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./ontology/constructor"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./ontology/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./ontology/metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./ontology/metavariable"));
var _procedureCall = /*#__PURE__*/ _interop_require_default(require("./ontology/procedureCall"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./ontology/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/type"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/defined"));
var _propertyRelation = /*#__PURE__*/ _interop_require_default(require("./ontology/propertyRelation"));
var _term1 = /*#__PURE__*/ _interop_require_default(require("./ontology/substitution/term"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("./ontology/substitution/frame"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/subproof"));
var _property1 = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/property"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/contained"));
var _satisfies = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/satisfies"));
var _procedureReference = /*#__PURE__*/ _interop_require_default(require("./ontology/procedureReference"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/variable"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("./ontology/combinator/bracketed"));
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("./ontology/constructor/bracketed"));
var _simpleType = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/simpleType"));
var _statement1 = /*#__PURE__*/ _interop_require_default(require("./ontology/substitution/statement"));
var _reference1 = /*#__PURE__*/ _interop_require_default(require("./ontology/substitution/reference"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/combinator"));
var _typePrefix1 = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/typePrefix"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/constructor"));
var _complexType = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/complexType"));
var _metavariable1 = /*#__PURE__*/ _interop_require_default(require("./ontology/declaration/metavariable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVhbWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vb250b2xvZ3kvdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vb250b2xvZ3kvdGVybVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vb250b2xvZ3kvcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vb250b2xvZ3kvc3RlcFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL29udG9sb2d5L2xhYmVsXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4vb250b2xvZ3kvYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9vbnRvbG9neS9sZW1tYVwiO1xuaW1wb3J0IEZyYW1lIGZyb20gXCIuL29udG9sb2d5L2ZyYW1lXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vb250b2xvZ3kvcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9vbnRvbG9neS9lcnJvclwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vb250b2xvZ3kvcHJlbWlzZVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4vb250b2xvZ3kvdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vb250b2xvZ3kvc2VjdGlvblwiO1xuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuL29udG9sb2d5L2VxdWFsaXR5XCI7XG5pbXBvcnQgTWV0YVR5cGUgZnJvbSBcIi4vb250b2xvZ3kvbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9vbnRvbG9neS9zdWJwcm9vZlwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuL29udG9sb2d5L3ZhcmlhYmxlXCI7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSBcIi4vb250b2xvZ3kvcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vb250b2xvZ3kvcGFyYW1ldGVyXCI7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gXCIuL29udG9sb2d5L3JlZmVyZW5jZVwiO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tIFwiLi9vbnRvbG9neS9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vb250b2xvZ3kvanVkZ2VtZW50XCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuL29udG9sb2d5L21ldGFMZW1tYVwiO1xuaW1wb3J0IERlZHVjdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWR1Y3Rpb25cIjtcbmltcG9ydCBTaWduYXR1cmUgZnJvbSBcIi4vb250b2xvZ3kvc2lnbmF0dXJlXCI7XG5pbXBvcnQgVHlwZVByZWZpeCBmcm9tIFwiLi9vbnRvbG9neS90eXBlUHJlZml4XCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi9vbnRvbG9neS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tIFwiLi9vbnRvbG9neS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZXJpdmF0aW9uXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi9vbnRvbG9neS9jb21iaW5hdG9yXCI7XG5pbXBvcnQgSHlwb3RoZXNpcyBmcm9tIFwiLi9vbnRvbG9neS9oeXBvdGhlc2lzXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4vb250b2xvZ3kvY29uc3RydWN0b3JcIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvblwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL29udG9sb2d5L3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXRoZW9yZW0gZnJvbSBcIi4vb250b2xvZ3kvbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4vb250b2xvZ3kvbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgUHJvY2VkdXJlQ2FsbCBmcm9tIFwiLi9vbnRvbG9neS9wcm9jZWR1cmVDYWxsXCI7XG5pbXBvcnQgU3ViRGVyaXZhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9zdWJEZXJpdmF0aW9uXCI7XG5pbXBvcnQgVHlwZUFzc2VydGlvbiBmcm9tIFwiLi9vbnRvbG9neS9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IERlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4vb250b2xvZ3kvYXNzZXJ0aW9uL2RlZmluZWRcIjtcbmltcG9ydCBQcm9wZXJ0eVJlbGF0aW9uIGZyb20gXCIuL29udG9sb2d5L3Byb3BlcnR5UmVsYXRpb25cIjtcbmltcG9ydCBUZXJtU3Vic3RpdHV0aW9uIGZyb20gXCIuL29udG9sb2d5L3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5pbXBvcnQgRnJhbWVTdWJzdGl0dXRpb24gZnJvbSBcIi4vb250b2xvZ3kvc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vb250b2xvZ3kvYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5pbXBvcnQgUHJvcGVydHlBc3NlcnRpb24gZnJvbSBcIi4vb250b2xvZ3kvYXNzZXJ0aW9uL3Byb3BlcnR5XCI7XG5pbXBvcnQgQ29udGFpbmVkQXNzZXJ0aW9uIGZyb20gXCIuL29udG9sb2d5L2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBTYXRpc2ZpZXNBc3NlcnRpb24gZnJvbSBcIi4vb250b2xvZ3kvYXNzZXJ0aW9uL3NhdGlzZmllc1wiO1xuaW1wb3J0IFByb2NlZHVyZVJlZmVyZW5jZSBmcm9tIFwiLi9vbnRvbG9neS9wcm9jZWR1cmVSZWZlcmVuY2VcIjtcbmltcG9ydCBWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL29udG9sb2d5L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi9vbnRvbG9neS9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IEJyYWNrZXRlZENvbnN0cnVjdG9yIGZyb20gXCIuL29udG9sb2d5L2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi9zaW1wbGVUeXBlXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuL29udG9sb2d5L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZnJvbSBcIi4vb250b2xvZ3kvc3Vic3RpdHV0aW9uL3JlZmVyZW5jZVwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgVHlwZVByZWZpeERlY2xhcmF0aW9uIGZyb20gXCIuL29udG9sb2d5L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXhcIjtcbmltcG9ydCBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuL29udG9sb2d5L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb21wbGV4VHlwZVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuL29udG9sb2d5L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzJEQUVpQjsyREFDQTsyREFDQTsyREFDQTs0REFDQzs0REFDQTs0REFDQTs0REFDQTs0REFDQTs0REFDQTs4REFDRTs4REFDQTs4REFDQTsrREFDQzsrREFDQTsrREFDQTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQztrRUFDQTtrRUFDQTtrRUFDQTttRUFDQztvRUFDQztvRUFDQTs0REFDQTs4REFDRzt1RUFDQTs0REFDQTs2REFDQztnRUFDQTtnRUFDQTtnRUFDQztnRUFDQTt5RUFDQTtnRUFDQztnRUFDQTtpRUFDQztpRUFDQztpRUFDQTtpRUFDQTtrRUFDQTtrRUFDQTttRUFDQztrRUFDQTtvRUFDQyJ9