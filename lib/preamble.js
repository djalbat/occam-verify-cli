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
var _assumption = /*#__PURE__*/ _interop_require_default(require("./ontology/assumption"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("./ontology/constructor"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./ontology/supposition"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("./ontology/metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./ontology/metavariable"));
var _procedureCall = /*#__PURE__*/ _interop_require_default(require("./ontology/procedureCall"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./ontology/subDerivation"));
var _type1 = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/type"));
var _propertyRelation = /*#__PURE__*/ _interop_require_default(require("./ontology/propertyRelation"));
var _defined = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/defined"));
var _term1 = /*#__PURE__*/ _interop_require_default(require("./ontology/substitution/term"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("./ontology/substitution/frame"));
var _subproof1 = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/subproof"));
var _property1 = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/property"));
var _procedureReference = /*#__PURE__*/ _interop_require_default(require("./ontology/procedureReference"));
var _contained = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/contained"));
var _satisfies = /*#__PURE__*/ _interop_require_default(require("./ontology/assertion/satisfies"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVhbWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vb250b2xvZ3kvdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vb250b2xvZ3kvdGVybVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vb250b2xvZ3kvcnVsZVwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIi4vb250b2xvZ3kvc3RlcFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL29udG9sb2d5L2xhYmVsXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4vb250b2xvZ3kvYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi9vbnRvbG9neS9sZW1tYVwiO1xuaW1wb3J0IEZyYW1lIGZyb20gXCIuL29udG9sb2d5L2ZyYW1lXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vb250b2xvZ3kvcHJvb2ZcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9vbnRvbG9neS9lcnJvclwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vb250b2xvZ3kvcHJlbWlzZVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4vb250b2xvZ3kvdGhlb3JlbVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vb250b2xvZ3kvc2VjdGlvblwiO1xuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuL29udG9sb2d5L2VxdWFsaXR5XCI7XG5pbXBvcnQgTWV0YVR5cGUgZnJvbSBcIi4vb250b2xvZ3kvbWV0YVR5cGVcIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9vbnRvbG9neS9zdWJwcm9vZlwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuL29udG9sb2d5L3ZhcmlhYmxlXCI7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSBcIi4vb250b2xvZ3kvcHJvcGVydHlcIjtcbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4vb250b2xvZ3kvcGFyYW1ldGVyXCI7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gXCIuL29udG9sb2d5L3JlZmVyZW5jZVwiO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tIFwiLi9vbnRvbG9neS9zdGF0ZW1lbnRcIjtcbmltcG9ydCBKdWRnZW1lbnQgZnJvbSBcIi4vb250b2xvZ3kvanVkZ2VtZW50XCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuL29udG9sb2d5L21ldGFMZW1tYVwiO1xuaW1wb3J0IERlZHVjdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWR1Y3Rpb25cIjtcbmltcG9ydCBTaWduYXR1cmUgZnJvbSBcIi4vb250b2xvZ3kvc2lnbmF0dXJlXCI7XG5pbXBvcnQgVHlwZVByZWZpeCBmcm9tIFwiLi9vbnRvbG9neS90eXBlUHJlZml4XCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi9vbnRvbG9neS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tIFwiLi9vbnRvbG9neS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgRGVyaXZhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZXJpdmF0aW9uXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi9vbnRvbG9neS9jb21iaW5hdG9yXCI7XG5pbXBvcnQgSHlwb3RoZXNpcyBmcm9tIFwiLi9vbnRvbG9neS9oeXBvdGhlc2lzXCI7XG5pbXBvcnQgQXNzdW1wdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9hc3N1bXB0aW9uXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4vb250b2xvZ3kvY29uc3RydWN0b3JcIjtcbmltcG9ydCBTdXBwb3NpdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuL29udG9sb2d5L21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuL29udG9sb2d5L21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFByb2NlZHVyZUNhbGwgZnJvbSBcIi4vb250b2xvZ3kvcHJvY2VkdXJlQ2FsbFwiO1xuaW1wb3J0IFN1YkRlcml2YXRpb24gZnJvbSBcIi4vb250b2xvZ3kvc3ViRGVyaXZhdGlvblwiO1xuaW1wb3J0IFR5cGVBc3NlcnRpb24gZnJvbSBcIi4vb250b2xvZ3kvYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCBQcm9wZXJ0eVJlbGF0aW9uIGZyb20gXCIuL29udG9sb2d5L3Byb3BlcnR5UmVsYXRpb25cIjtcbmltcG9ydCBEZWZpbmVkQXNzZXJ0aW9uIGZyb20gXCIuL29udG9sb2d5L2Fzc2VydGlvbi9kZWZpbmVkXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybVwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL29udG9sb2d5L3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuL29udG9sb2d5L2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFByb3BlcnR5QXNzZXJ0aW9uIGZyb20gXCIuL29udG9sb2d5L2Fzc2VydGlvbi9wcm9wZXJ0eVwiO1xuaW1wb3J0IFByb2NlZHVyZVJlZmVyZW5jZSBmcm9tIFwiLi9vbnRvbG9neS9wcm9jZWR1cmVSZWZlcmVuY2VcIjtcbmltcG9ydCBDb250YWluZWRBc3NlcnRpb24gZnJvbSBcIi4vb250b2xvZ3kvYXNzZXJ0aW9uL2NvbnRhaW5lZFwiO1xuaW1wb3J0IFNhdGlzZmllc0Fzc2VydGlvbiBmcm9tIFwiLi9vbnRvbG9neS9hc3NlcnRpb24vc2F0aXNmaWVzXCI7XG5pbXBvcnQgVmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi92YXJpYWJsZVwiO1xuaW1wb3J0IEJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4vb250b2xvZ3kvY29tYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCBCcmFja2V0ZWRDb25zdHJ1Y3RvciBmcm9tIFwiLi9vbnRvbG9neS9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vb250b2xvZ3kvZGVjbGFyYXRpb24vc2ltcGxlVHlwZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9vbnRvbG9neS9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGZyb20gXCIuL29udG9sb2d5L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2VcIjtcbmltcG9ydCBDb21iaW5hdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4vb250b2xvZ3kvZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi90eXBlUHJlZml4XCI7XG5pbXBvcnQgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4vb250b2xvZ3kvZGVjbGFyYXRpb24vY29tcGxleFR5cGVcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi9vbnRvbG9neS9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzsyREFFaUI7MkRBQ0E7MkRBQ0E7MkRBQ0E7NERBQ0M7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7OERBQ0U7OERBQ0E7OERBQ0E7K0RBQ0M7K0RBQ0E7K0RBQ0E7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVBQ0E7aUVBQ0E7aUVBQ0E7aUVBQ0E7aUVBQ0E7aUVBQ0E7a0VBQ0M7a0VBQ0E7a0VBQ0E7bUVBQ0M7b0VBQ0M7b0VBQ0E7NERBQ0E7dUVBQ0c7OERBQ0E7NERBQ0E7NkRBQ0M7Z0VBQ0E7Z0VBQ0E7eUVBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0M7Z0VBQ0E7aUVBQ0M7aUVBQ0M7aUVBQ0E7aUVBQ0E7a0VBQ0E7a0VBQ0E7bUVBQ0M7a0VBQ0E7b0VBQ0MifQ==