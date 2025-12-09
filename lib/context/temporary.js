"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TemporaryContext;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var TemporaryContext = /*#__PURE__*/ function() {
    function TemporaryContext(context, tokens1, terms) {
        _class_call_check(this, TemporaryContext);
        this.context = context;
        this.tokens = tokens1;
        this.terms = terms;
    }
    _create_class(TemporaryContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return tokens;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                this.terms.push(term);
            }
        },
        {
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                var term = this.terms.find(function(term) {
                    var termMatchesTermNode = term.matchTermNode(termNode);
                    if (termMatchesTermNode) {
                        return true;
                    }
                }) || null;
                return null;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.context.getVariables(nested);
            }
        },
        {
            key: "getJudgements",
            value: function getJudgements() {
                return this.context.getJudgements();
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                return this.context.getEquivalences();
            }
        },
        {
            key: "getSteps",
            value: function getSteps() {
                return this.context.getSteps();
            }
        },
        {
            key: "getLastStep",
            value: function getLastStep() {
                return this.context.getLastStep();
            }
        },
        {
            key: "getStepsOrSubproofs",
            value: function getStepsOrSubproofs() {
                return this.context.getStepsOrSubproofs();
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.context.getFilePath();
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                return this.context.getLexer();
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.context.getParser();
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                return this.context.getAxioms();
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                return this.context.getLemmas();
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                return this.context.getTheorems();
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                return this.context.getConjectures();
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                return this.context.getCombinators();
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                return this.context.getConstructors();
            }
        },
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.context.getTypePrefix();
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.context.addAxiom(axiom);
            }
        },
        {
            key: "addLemma",
            value: function addLemma(lemma) {
                this.context.addLemma(lemma);
            }
        },
        {
            key: "addTheorem",
            value: function addTheorem(theorem) {
                this.context.addTheorem(theorem);
            }
        },
        {
            key: "addEquality",
            value: function addEquality(equality, context) {
                return this.context.addEquality(equality, context);
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.context.addVariable(variable, nested);
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                return this.context.addJudgement(judgement);
            }
        },
        {
            key: "addStepOrSubproof",
            value: function addStepOrSubproof(stepOrSubproof) {
                this.context.addStepOrSubproof(stepOrSubproof);
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                return this.context.findProcedureByName(name);
            }
        },
        {
            key: "findLabelByReference",
            value: function findLabelByReference(reference, context) {
                return this.context.findLabelByReference(reference, context);
            }
        },
        {
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                return this.context.findRuleByReference(reference);
            }
        },
        {
            key: "findAxiomByReference",
            value: function findAxiomByReference(reference) {
                return this.context.findAxiomByReference(reference);
            }
        },
        {
            key: "findLemmaByReference",
            value: function findLemmaByReference(reference) {
                return this.context.findLemmaByReference(reference);
            }
        },
        {
            key: "findTheoremByReference",
            value: function findTheoremByReference(reference) {
                return this.context.findTheoremByReference(reference);
            }
        },
        {
            key: "findConjectureByReference",
            value: function findConjectureByReference(reference) {
                return this.context.findConjectureByReference(reference);
            }
        },
        {
            key: "findMetaLemmasByReference",
            value: function findMetaLemmasByReference(reference) {
                return this.context.findMetaLemmasByReference(reference);
            }
        },
        {
            key: "findMetatheoremsByReference",
            value: function findMetatheoremsByReference(reference) {
                return this.context.findMetatheoremsByReference(reference);
            }
        },
        {
            key: "findMetaLemmaMetatheoremByReference",
            value: function findMetaLemmaMetatheoremByReference(reference) {
                return this.context.findMetaLemmaMetatheoremByReference(reference);
            }
        },
        {
            key: "findMetaLemmaMetatheoremsByReference",
            value: function findMetaLemmaMetatheoremsByReference(reference) {
                return this.context.findMetaLemmaMetatheoremsByReference(reference);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.context.findVariableByVariableIdentifier(variableIdentifier, nested);
            }
        },
        {
            key: "findJudgementByMetavariable",
            value: function findJudgementByMetavariable(metavariable) {
                return this.context.findJudgementByMetavariable(metavariable);
            }
        },
        {
            key: "findEquivalenceByTerm",
            value: function findEquivalenceByTerm(term) {
                return this.context.findEquivalenceByTerm(term);
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                return this.context.findMetavariable(metavariable, generalContext, specificContext);
            }
        },
        {
            key: "findLabelByMetavariable",
            value: function findLabelByMetavariable(metavariable) {
                return this.context.findLabelByMetavariable(metavariable);
            }
        },
        {
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                return this.context.findTypeByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                return this.context.findMetaTypeByMetaTypeName(metaTypeName);
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                return this.context.findMetavariableByMetavariableName(metavariableName);
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                return this.context.isProcedurePresentByName(name);
            }
        },
        {
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                return this.context.isLabelPresentByReference(reference);
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                return this.context.isMetavariablePresentByReference(reference);
            }
        },
        {
            key: "isMetaLemmaMetatheoremPresentByReference",
            value: function isMetaLemmaMetatheoremPresentByReference(reference) {
                return this.context.isMetaLemmaMetatheoremPresentByReference(reference);
            }
        },
        {
            key: "findAxiomLemmaTheoremOrConjectureByReference",
            value: function findAxiomLemmaTheoremOrConjectureByReference(reference) {
                return this.context.findAxiomLemmaTheoremOrConjectureByReference(reference);
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable, generalContext, specificContext) {
                return this.context.isMetavariablePresent(metavariable, generalContext, specificContext);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
            }
        },
        {
            key: "isTypePresentByNominalTypeName",
            value: function isTypePresentByNominalTypeName(nominalTypeName) {
                return this.context.isTypePresentByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "isTypePresentByPrefixedTypeName",
            value: function isTypePresentByPrefixedTypeName(prefixedTypeName) {
                return this.context.isTypePresentByPrefixedTypeName(prefixedTypeName);
            }
        },
        {
            key: "isTypePrefixPresentByTypePrefixName",
            value: function isTypePrefixPresentByTypePrefixName(typePrefixName) {
                return this.context.isTypePrefixPresentByTypePrefixName(typePrefixName);
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.context.findVariableByVariableIdentifier(variableIdentifier, nested);
            }
        },
        {
            key: "isLabelPresentByMetavariableName",
            value: function isLabelPresentByMetavariableName(metavariableName) {
                return this.context.isLabelPresentByMetavariableName(metavariableName);
            }
        },
        {
            key: "isLabelPresentByMetavariable",
            value: function isLabelPresentByMetavariable(metavariable) {
                return this.context.isLabelPresentByMetavariable(metavariable);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableNode) {
                return this.context.isMetavariablePresentByMetavariableName(metavariableNode);
            }
        },
        {
            key: "isJudgementPresentByMetavariable",
            value: function isJudgementPresentByMetavariable(metavariable) {
                return this.context.isJudgementPresentByMetavariable(metavariable);
            }
        },
        {
            key: "isTermGrounded",
            value: function isTermGrounded(term) {
                return this.context.isTermGrounded(term);
            }
        },
        {
            key: "isVariableDefined",
            value: function isVariableDefined(variable) {
                return this.context.isVariableDefined(variable);
            }
        },
        {
            key: "isMetavariableDefined",
            value: function isMetavariableDefined(metavariable) {
                return this.context.isMetavariableDefined(metavariable);
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation) {
                return this.context.matchTermAndPropertyRelation(term, propertyRelation);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var tokens1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens1 === null) {
                    tokens1 = this.tokens;
                }
                var string = this.context.nodeAsString(node, tokens1);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var tokens1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens1 === null) {
                    tokens1 = this.tokens;
                }
                var string = this.context.nodesAsString(node, tokens1);
                return string;
            }
        },
        {
            key: "nodeAsTokens",
            value: function nodeAsTokens(node) {
                var tokens1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens1 === null) {
                    tokens1 = this.tokens;
                }
                tokens1 = this.context.nodeAsTokens(node, tokens1); ///
                return tokens1;
            }
        },
        {
            key: "nodesAsTokens",
            value: function nodesAsTokens(node) {
                var tokens1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens1 === null) {
                    tokens1 = this.tokens;
                }
                tokens1 = this.context.nodesAsTokens(node, tokens1); ///
                return tokens1;
            }
        },
        {
            key: "tokensAsString",
            value: function tokensAsString(tokens1) {
                return this.context.tokensAsString(tokens1);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.trace(message, node);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.debug(message, node);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.info(message, node);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.warning(message, node);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.error(message, node);
            }
        }
    ], [
        {
            key: "fromTerms",
            value: function fromTerms(terms, context) {
                var tokens1 = null, temporaryContext = new TemporaryContext(terms, tokens1, context);
                return temporaryContext;
            }
        },
        {
            key: "fromContext",
            value: function fromContext(context) {
                var terms = [], tokens1 = null, temporaryContext = new TemporaryContext(context, tokens1, terms);
                return temporaryContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens1) {
                var terms = [], temporaryContext = new TemporaryContext(context, tokens1, terms);
                return temporaryContext;
            }
        }
    ]);
    return TemporaryContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcG9yYXJ5Q29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRva2VucywgdGVybXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTWF0Y2hlc1Rlcm1Ob2RlID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1NYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMobmVzdGVkKTsgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpOyB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpOyB9XG5cbiAgZ2V0U3RlcHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0U3RlcHMoKTsgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTsgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7IH1cblxuICBhZGRBeGlvbShheGlvbSkgeyB0aGlzLmNvbnRleHQuYWRkQXhpb20oYXhpb20pOyB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHsgdGhpcy5jb250ZXh0LmFkZExlbW1hKGxlbW1hKTsgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkgeyB0aGlzLmNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpOyB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkKTsgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTsgfVxuXG4gIGFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKSB7IHRoaXMuY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7IH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pOyB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pOyB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tVGVybXModGVybXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBuZXcgVGVtcG9yYXJ5Q29udGV4dCh0ZXJtcywgdG9rZW5zLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZW1wb3JhcnlDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMpO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlbXBvcmFyeUNvbnRleHQiLCJjb250ZXh0IiwidG9rZW5zIiwidGVybXMiLCJnZXRDb250ZXh0IiwiZ2V0VG9rZW5zIiwiZ2V0VGVybXMiLCJhZGRUZXJtIiwidGVybSIsInB1c2giLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsImZpbmQiLCJ0ZXJtTWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJnZXRTdGVwcyIsImdldExhc3RTdGVwIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsImdldEZpbGVQYXRoIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRUeXBlUHJlZml4IiwiYWRkQXhpb20iLCJheGlvbSIsImFkZExlbW1hIiwibGVtbWEiLCJhZGRUaGVvcmVtIiwidGhlb3JlbSIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiYWRkU3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZiIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc1Rlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21UZXJtcyIsInRlbXBvcmFyeUNvbnRleHQiLCJmcm9tQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFB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