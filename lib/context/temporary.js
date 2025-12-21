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
    function TemporaryContext(context, tokens1, terms, frames, reference, statements, substitution) {
        _class_call_check(this, TemporaryContext);
        this.context = context;
        this.tokens = tokens1;
        this.terms = terms;
        this.frames = frames;
        this.reference = reference;
        this.statements = statements;
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
            key: "addFrame",
            value: function addFrame(frame) {
                var frameNode = frame.getNode();
                extract(this.frames, function(frame) {
                    var frameMatchesFrameNode = frame.matchFrameNode(frameNode);
                    if (frameMatchesFrameNode) {
                        return true;
                    }
                });
                this.frames.push(frame);
            }
        },
        {
            key: "addStatement",
            value: function addStatement(statement) {
                var statementNode = statement.getNode();
                extract(this.statements, function(statement) {
                    var statementMatchesFrameNode = statement.matchStatementNode(statementNode);
                    if (statementMatchesFrameNode) {
                        return true;
                    }
                });
                this.statements.push(statement);
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                this.reference = reference;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                this.substitution = substitution;
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
                var referenceMatchesMetavariableName = this.reference.matchMetavariableName(metavariableName);
                if (referenceMatchesMetavariableName) {
                    reference = this.reference;
                }
                return reference;
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
                var terms = [], frames = [], tokens1 = null, reference = null, statements = [], substitution = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, reference, statements, substitution);
                return temporaryContext;
            }
        },
        {
            key: "fromTermsAndFrames",
            value: function fromTermsAndFrames(terms, frames, context) {
                var tokens1 = null, reference = null, statements = [], substitution = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, reference, statements, substitution);
                return temporaryContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens1) {
                var terms = [], frames = [], reference = null, statements = [], substitution = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, reference, statements, substitution);
                return temporaryContext;
            }
        }
    ]);
    return TemporaryContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBvcmFyeUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMsIHRlcm1zLCBmcmFtZXMsIHJlZmVyZW5jZSwgc3RhdGVtZW50cywgc3Vic3RpdHV0aW9uKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIGV4dHJhY3QodGhpcy50ZXJtcywgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmZyYW1lcywgKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3RhdGVtZW50cywgKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcyhuZXN0ZWQpOyB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7IH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7IH1cblxuICBnZXRTdGVwcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRTdGVwcygpOyB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZVBhdGgoKTsgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRMZW1tYXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCk7IH1cblxuICBnZXRUaGVvcmVtcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpOyB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTsgfVxuXG4gIGdldENvbWJpbmF0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7IH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7IH1cblxuICBnZXRUeXBlUHJlZml4KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXgoKTsgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7IHRoaXMuY29udGV4dC5hZGRBeGlvbShheGlvbSk7IH1cblxuICBhZGRMZW1tYShsZW1tYSkgeyB0aGlzLmNvbnRleHQuYWRkTGVtbWEobGVtbWEpOyB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7IHRoaXMuY29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pOyB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7IH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQpOyB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpOyB9XG5cbiAgYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpIHsgdGhpcy5jb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTsgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7IH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUZXJtR3JvdW5kZWQodGVybSk7IH1cblxuICBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKTsgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbikgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0aGlzLmNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCByZWZlcmVuY2UsIHN0YXRlbWVudHMsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCByZWZlcmVuY2UsIHN0YXRlbWVudHMsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgcmVmZXJlbmNlLCBzdGF0ZW1lbnRzLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZW1wb3JhcnlDb250ZXh0IiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiY29udGV4dCIsInRva2VucyIsInRlcm1zIiwiZnJhbWVzIiwicmVmZXJlbmNlIiwic3RhdGVtZW50cyIsInN1YnN0aXR1dGlvbiIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldFN0YXRlbWVudHMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0U3Vic3RpdHV0aW9uIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInB1c2giLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVNYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFkZFJlZmVyZW5jZSIsImFkZFN1YnN0aXR1dGlvbiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImZpbmQiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZ2V0U3RlcHMiLCJnZXRMYXN0U3RlcCIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRGaWxlUGF0aCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0VHlwZVByZWZpeCIsImFkZEF4aW9tIiwiYXhpb20iLCJhZGRMZW1tYSIsImxlbW1hIiwiYWRkVGhlb3JlbSIsInRoZW9yZW0iLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImFkZFN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2YiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsImZpbmRMYWJlbEJ5UmVmZXJlbmNlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwiZmluZE1ldGF2YXJpYWJsZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTm9kZSIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNUZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tTm90aGluZyIsInRlbXBvcmFyeUNvbnRleHQiLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjthQUFNQSxpQkFDUEcsT0FBTyxFQUFFQyxPQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQ0FENURUO1FBRWpCLElBQUksQ0FBQ0csT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztr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