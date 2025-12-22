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
var first = _necessary.arrayUtilities.first, extract = _necessary.arrayUtilities.extract;
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
            key: "removeFrame",
            value: function removeFrame(frame) {
                var index = this.frames.indexOf(frame), start = index, deleteCount = 1;
                this.frames.splice(start, deleteCount);
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
            key: "addAssertion",
            value: function addAssertion(assertion) {
                var assertionNode = assertion.getNode();
                extract(this.assertions, function(assertion) {
                    var assertionMatchesFrameNode = assertion.matchAssertionNode(assertionNode);
                    if (assertionMatchesFrameNode) {
                        return true;
                    }
                });
                this.assertions.push(assertion);
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
            key: "getFrame",
            value: function getFrame() {
                var frame = null;
                var framesLengtrh = this.frames.length;
                if (framesLengtrh === 1) {
                    var firstFrame = first(this.frames);
                    frame = firstFrame; ///
                }
                return frame;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb3JhcnlDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIGV4dHJhY3QodGhpcy50ZXJtcywgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmZyYW1lcywgKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gIH1cblxuICByZW1vdmVGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcmFtZXMuaW5kZXhPZihmcmFtZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZnJhbWVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnN0YXRlbWVudHMsIChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXNGcmFtZU5vZGUgPSBzdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbi5nZXROb2RlKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuYXNzZXJ0aW9ucywgKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTWF0Y2hlc0ZyYW1lTm9kZSA9IGFzc2VydGlvbi5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25NYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVzTGVuZ3RyaCA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcblxuICAgIGlmIChmcmFtZXNMZW5ndHJoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QodGhpcy5mcmFtZXMpO1xuXG4gICAgICBmcmFtZSA9IGZpcnN0RnJhbWU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKG5lc3RlZCk7IH1cblxuICBnZXRKdWRnZW1lbnRzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEp1ZGdlbWVudHMoKTsgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTsgfVxuXG4gIGdldFN0ZXBzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzKCk7IH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RlcHNPclN1YnByb29mcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7IH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpOyB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7IHRoaXMuY29udGV4dC5hZGRMZW1tYShsZW1tYSk7IH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHsgdGhpcy5jb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KTsgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCk7IH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7IH1cblxuICBhZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZikgeyB0aGlzLmNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTsgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTsgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpOyB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7IHJldHVybiB0aGlzLmNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHsgcmV0dXJuIHRoaXMuY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlbXBvcmFyeUNvbnRleHQiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImNvbnRleHQiLCJ0b2tlbnMiLCJ0ZXJtcyIsImZyYW1lcyIsInN0YXRlbWVudHMiLCJhc3NlcnRpb25zIiwicmVmZXJlbmNlIiwic3Vic3RpdHV0aW9uIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0U3Vic3RpdHV0aW9uIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInB1c2giLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVNYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJyZW1vdmVGcmFtZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25NYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYWRkUmVmZXJlbmNlIiwiYWRkU3Vic3RpdHV0aW9uIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwiZmluZCIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXNTdGF0ZW1lbnROb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJyZWZlcmVuY2VNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsImdldEZyYW1lIiwiZnJhbWVzTGVuZ3RyaCIsImxlbmd0aCIsImZpcnN0RnJhbWUiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZ2V0U3RlcHMiLCJnZXRMYXN0U3RlcCIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRGaWxlUGF0aCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0VHlwZVByZWZpeCIsImFkZEF4aW9tIiwiYXhpb20iLCJhZGRMZW1tYSIsImxlbW1hIiwiYWRkVGhlb3JlbSIsInRoZW9yZW0iLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImFkZFN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2YiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsImZpbmRMYWJlbEJ5UmVmZXJlbmNlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwiZmluZE1ldGF2YXJpYWJsZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTm9kZSIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNUZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tTm90aGluZyIsInRlbXBvcmFyeUNvbnRleHQiLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFD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