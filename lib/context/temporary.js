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
    function TemporaryContext(context, tokens1, terms, frames, statements, assertions, reference, substitution) {
        _class_call_check(this, TemporaryContext);
        this.context = context;
        this.tokens = tokens1;
        this.terms = terms;
        this.frames = frames;
        this.statements = statements;
        this.assertions = assertions;
        this.reference = reference;
        this.substitution = substitution;
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
            key: "getFrames",
            value: function getFrames() {
                return this.frames;
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "getAssertions",
            value: function getAssertions() {
                return this.assertions;
            }
        },
        {
            key: "getReferences",
            value: function getReferences() {
                return this.reference;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                var context = this, termNode = term.getNode(), termString = term.getString();
                extract(this.terms, function(term) {
                    var termMatchesTermNode = term.matchTermNode(termNode);
                    if (termMatchesTermNode) {
                        return true;
                    }
                });
                context.trace("ADded the '".concat(termString, "' term."));
                this.terms.push(term);
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var context = this, frameNode = frame.getNode(), frameString = frame.getString();
                extract(this.frames, function(frame) {
                    var frameMatchesFrameNode = frame.matchFrameNode(frameNode);
                    if (frameMatchesFrameNode) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(frameString, "' frame."));
                this.frames.push(frame);
            }
        },
        {
            key: "addTerms",
            value: function addTerms(terms) {
                var _this = this;
                terms.forEach(function(term) {
                    _this.addTerm(term);
                });
            }
        },
        {
            key: "addFrames",
            value: function addFrames(frames) {
                var _this = this;
                frames.forEach(function(frame) {
                    _this.addFrame(frame);
                });
            }
        },
        {
            key: "addStatement",
            value: function addStatement(statement) {
                var context = this, statementNode = statement.getNode(), statementString = statement.getString();
                extract(this.statements, function(statement) {
                    var statementMatchesFrameNode = statement.matchStatementNode(statementNode);
                    if (statementMatchesFrameNode) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(statementString, "' statement."));
                this.statements.push(statement);
            }
        },
        {
            key: "addAssertion",
            value: function addAssertion(assertion) {
                var context = this, assertionNode = assertion.getNode(), assertionString = assertion.getString();
                extract(this.assertions, function(assertion) {
                    var assertionMatchesFrameNode = assertion.matchAssertionNode(assertionNode);
                    if (assertionMatchesFrameNode) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(assertionString, "' assertion."));
                this.assertions.push(assertion);
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this, referenceString = reference.getString();
                this.reference = reference;
                context.trace("Added the '".concat(referenceString, "' reference."));
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionString = substitution.getString();
                this.substitution = substitution;
                context.trace("Added the '".concat(substitutionString, "' substitution."));
            }
        },
        {
            key: "removeTerm",
            value: function removeTerm(term) {
                var context = this, termNode = term.getNode(), termString = term.getString();
                term = this.findTermByTermNode(termNode);
                var index = this.terms.indexOf(term), start = index, deleteCount = 1;
                this.terms.splice(start, deleteCount);
                context.trace("Removed the '".concat(termString, "' term."));
            }
        },
        {
            key: "removeFrame",
            value: function removeFrame(frame) {
                var context = this, frameNode = frame.getNode(), frameString = frame.getString();
                frame = this.findFrameByFrameNode(frameNode);
                var index = this.frames.indexOf(frame), start = index, deleteCount = 1;
                this.frames.splice(start, deleteCount);
                context.trace("Removed the '".concat(frameString, "' frame."));
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
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                var frame = this.frames.find(function(frame) {
                    var frameMatchesFrameNode = frame.matchFrameNode(frameNode);
                    if (frameMatchesFrameNode) {
                        return true;
                    }
                }) || null;
                return frame;
            }
        },
        {
            key: "findAssertionByAssertionNode",
            value: function findAssertionByAssertionNode(assertionNode) {
                var assertion = this.assertions.find(function(assertion) {
                    var assertionMatchesAssertionNode = assertion.matchAssertionNode(assertionNode);
                    if (assertionMatchesAssertionNode) {
                        return true;
                    }
                }) || null;
                return assertion;
            }
        },
        {
            key: "findStatementByStatementNode",
            value: function findStatementByStatementNode(statementNode) {
                var statement = this.statements.find(function(statement) {
                    var statementMatchesStatementNode = statement.matchStatementNode(statementNode);
                    if (statementMatchesStatementNode) {
                        return true;
                    }
                }) || null;
                return statement;
            }
        },
        {
            key: "findReferenceByMetavariableName",
            value: function findReferenceByMetavariableName(metavariableName) {
                var reference = null;
                if (this.reference !== null) {
                    var referenceMatchesMetavariableName = this.reference.matchMetavariableName(metavariableName);
                    if (referenceMatchesMetavariableName) {
                        reference = this.reference;
                    }
                }
                return reference;
            }
        },
        {
            key: "findSubstitutionBySubstitutionNode",
            value: function findSubstitutionBySubstitutionNode(substitutionNode) {
                var substitution = null;
                if (this.substitution !== null) {
                    var substitutionMatchesSubstitutionNode = this.substitution.matchSubstitutionNode(substitutionNode);
                    if (substitutionMatchesSubstitutionNode) {
                        substitution = this.substitution;
                    }
                }
                return substitution;
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
            value: function addEquality(equality) {
                return this.context.addEquality(equality);
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
            value: function findMetavariable(metavariable) {
                return this.context.findMetavariable(metavariable);
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
            value: function isMetavariablePresent(metavariable) {
                return this.context.isMetavariablePresent(metavariable);
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
            key: "fromNothing",
            value: function fromNothing(context) {
                var terms = [], frames = [], tokens1 = null, statements = [], assertions = [], reference = null, substitution = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, statements, assertions, reference, substitution);
                return temporaryContext;
            }
        },
        {
            key: "fromTermsAndFrames",
            value: function fromTermsAndFrames(terms, frames, context) {
                var tokens1 = null, statements = [], assertions = [], reference = null, substitution = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, statements, assertions, reference, substitution);
                return temporaryContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens1) {
                var terms = [], frames = [], statements = [], assertions = [], reference = null, substitution = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, statements, assertions, reference, substitution);
                return temporaryContext;
            }
        }
    ]);
    return TemporaryContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBvcmFyeUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMsIHRlcm1zLCBmcmFtZXMsIHN0YXRlbWVudHMsIGFzc2VydGlvbnMsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy50ZXJtcywgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFEZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcblxuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmZyYW1lcywgKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG5cbiAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgdGhpcy5hZGRUZXJtKHRlcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRnJhbWVzKGZyYW1lcykge1xuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGRGcmFtZShmcmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5zdGF0ZW1lbnRzLCAoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzRnJhbWVOb2RlID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmFzc2VydGlvbnMsIChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk1hdGNoZXNGcmFtZU5vZGUgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTWF0Y2hlc0ZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24uYCk7XG5cbiAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgfVxuXG4gIHJlbW92ZVRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50ZXJtcy5pbmRleE9mKHRlcm0pLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLnRlcm1zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgY29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gIH1cblxuICByZW1vdmVGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGZyYW1lID0gdGhpcy5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZyYW1lcy5pbmRleE9mKGZyYW1lKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5mcmFtZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU1hdGNoZXNUZXJtTm9kZSA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTWF0Y2hlc0ZyYW1lTm9kZSA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk1hdGNoZXNBc3NlcnRpb25Ob2RlID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk1hdGNoZXNBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWF0Y2hlc1N0YXRlbWVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNTdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5zdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1N1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKG5lc3RlZCk7IH1cblxuICBnZXRKdWRnZW1lbnRzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEp1ZGdlbWVudHMoKTsgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTsgfVxuXG4gIGdldFN0ZXBzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzKCk7IH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RlcHNPclN1YnByb29mcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7IH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpOyB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7IHRoaXMuY29udGV4dC5hZGRMZW1tYShsZW1tYSk7IH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHsgdGhpcy5jb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTsgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCk7IH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7IH1cblxuICBhZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZikgeyB0aGlzLmNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTsgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTsgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpOyB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7IHJldHVybiB0aGlzLmNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHsgcmV0dXJuIHRoaXMuY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlbXBvcmFyeUNvbnRleHQiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwidG9rZW5zIiwidGVybXMiLCJmcmFtZXMiLCJzdGF0ZW1lbnRzIiwiYXNzZXJ0aW9ucyIsInJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbiIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldFN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsImdldFN1YnN0aXR1dGlvbiIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybU5vZGUiLCJnZXROb2RlIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRlcm1NYXRjaGVzVGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwidHJhY2UiLCJwdXNoIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU3RyaW5nIiwiZnJhbWVNYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJhZGRUZXJtcyIsImZvckVhY2giLCJhZGRGcmFtZXMiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25NYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlU3RyaW5nIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwicmVtb3ZlVGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVGcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZmluZCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25NYXRjaGVzQXNzZXJ0aW9uTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNTdWJzdGl0dXRpb25Ob2RlIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsImdldFN0ZXBzIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFR5cGVQcmVmaXgiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJhZGRTdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzVGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsIm5vZGVBc1N0cmluZyIsIm5vZGUiLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Ob3RoaW5nIiwidGVtcG9yYXJ5Q29udGV4dCIsImZyb21UZXJtc0FuZEZyYW1lcyIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2FBQU1BLGlCQUNQRyxPQUFPLEVBQUVDLE9BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRHhFVjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFD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