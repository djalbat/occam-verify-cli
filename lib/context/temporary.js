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
var _necessary = require("necessary");
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
var extract = _necessary.arrayUtilities.extract;
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
                var termNode = term.getNode();
                extract(this.terms, function(term) {
                    var termMatchesTermNode = term.matchTermNode(termNode);
                    if (termMatchesTermNode) {
                        return true;
                    }
                });
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
                return term;
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
            key: "fromNothing",
            value: function fromNothing(context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBvcmFyeUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMsIHRlcm1zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIGV4dHJhY3QodGhpcy50ZXJtcywgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcyhuZXN0ZWQpOyB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7IH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7IH1cblxuICBnZXRTdGVwcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRTdGVwcygpOyB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZVBhdGgoKTsgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRMZW1tYXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCk7IH1cblxuICBnZXRUaGVvcmVtcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpOyB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTsgfVxuXG4gIGdldENvbWJpbmF0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7IH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7IH1cblxuICBnZXRUeXBlUHJlZml4KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXgoKTsgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7IHRoaXMuY29udGV4dC5hZGRBeGlvbShheGlvbSk7IH1cblxuICBhZGRMZW1tYShsZW1tYSkgeyB0aGlzLmNvbnRleHQuYWRkTGVtbWEobGVtbWEpOyB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7IHRoaXMuY29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pOyB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7IH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQpOyB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpOyB9XG5cbiAgYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpIHsgdGhpcy5jb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTsgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7IH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUZXJtR3JvdW5kZWQodGVybSk7IH1cblxuICBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKTsgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbikgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0aGlzLmNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21UZXJtcyh0ZXJtcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KHRlcm1zLCB0b2tlbnMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcyk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBuZXcgVGVtcG9yYXJ5Q29udGV4dChjb250ZXh0LCB0b2tlbnMsIHRlcm1zKTtcblxuICAgIHJldHVybiB0ZW1wb3JhcnlDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVtcG9yYXJ5Q29udGV4dCIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsImNvbnRleHQiLCJ0b2tlbnMiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybU5vZGUiLCJnZXROb2RlIiwidGVybU1hdGNoZXNUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJwdXNoIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwiZmluZCIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJnZXRTdGVwcyIsImdldExhc3RTdGVwIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsImdldEZpbGVQYXRoIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRUeXBlUHJlZml4IiwiYWRkQXhpb20iLCJheGlvbSIsImFkZExlbW1hIiwibGVtbWEiLCJhZGRUaGVvcmVtIiwidGhlb3JlbSIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiYWRkU3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZiIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc1Rlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21UZXJtcyIsInRlbXBvcmFyeUNvbnRleHQiLCJmcm9tTm90aGluZyIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2FBQU1BLGlCQUNQRyxPQUFPLEVBQUVDLE9BQU0sRUFBRUMsS0FBSztnQ0FEZkw7UUFFakIsSUFBSSxDQUFDRyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFKSUw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUNWLElBQU1DLFdBQVdELEtBQUtFLE9BQU87Z0JBRTdCWCxRQUFRLElBQUksQ0FBQ0ksS0FBSyxFQUFFLFNBQUNLO29CQUNuQixJQUFNRyxzQkFBc0JILEtBQUtJLGFBQWEsQ0FBQ0g7b0JBRS9DLElB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