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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QsIGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb3JhcnlDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCByZWZlcmVuY2UsIHN0YXRlbWVudHMsIHN1YnN0aXR1dGlvbikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICBleHRyYWN0KHRoaXMudGVybXMsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTWF0Y2hlc1Rlcm1Ob2RlID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1NYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKTtcblxuICAgIGV4dHJhY3QodGhpcy5mcmFtZXMsIChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVNYXRjaGVzRnJhbWVOb2RlID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTWF0Y2hlc0ZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgcmVtb3ZlRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnJhbWVzLmluZGV4T2YoZnJhbWUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmZyYW1lcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIGV4dHJhY3QodGhpcy5zdGF0ZW1lbnRzLCAoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzRnJhbWVOb2RlID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU1hdGNoZXNUZXJtTm9kZSA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTWF0Y2hlc0ZyYW1lTm9kZSA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXNTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1hdGNoZXNTdGF0ZW1lbnROb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChyZWZlcmVuY2VNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZXNMZW5ndHJoID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKGZyYW1lc0xlbmd0cmggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdCh0aGlzLmZyYW1lcyk7XG5cbiAgICAgIGZyYW1lID0gZmlyc3RGcmFtZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMobmVzdGVkKTsgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpOyB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpOyB9XG5cbiAgZ2V0U3RlcHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0U3RlcHMoKTsgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTsgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7IH1cblxuICBhZGRBeGlvbShheGlvbSkgeyB0aGlzLmNvbnRleHQuYWRkQXhpb20oYXhpb20pOyB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHsgdGhpcy5jb250ZXh0LmFkZExlbW1hKGxlbW1hKTsgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkgeyB0aGlzLmNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpOyB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkKTsgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTsgfVxuXG4gIGFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKSB7IHRoaXMuY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7IH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pOyB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pOyB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgcmVmZXJlbmNlLCBzdGF0ZW1lbnRzLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1zQW5kRnJhbWVzKHRlcm1zLCBmcmFtZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgcmVmZXJlbmNlLCBzdGF0ZW1lbnRzLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBuZXcgVGVtcG9yYXJ5Q29udGV4dChjb250ZXh0LCB0b2tlbnMsIHRlcm1zLCBmcmFtZXMsIHJlZmVyZW5jZSwgc3RhdGVtZW50cywgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiB0ZW1wb3JhcnlDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVtcG9yYXJ5Q29udGV4dCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiY29udGV4dCIsInRva2VucyIsInRlcm1zIiwiZnJhbWVzIiwicmVmZXJlbmNlIiwic3RhdGVtZW50cyIsInN1YnN0aXR1dGlvbiIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldFN0YXRlbWVudHMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0U3Vic3RpdHV0aW9uIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInB1c2giLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVNYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJyZW1vdmVGcmFtZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFkZFJlZmVyZW5jZSIsImFkZFN1YnN0aXR1dGlvbiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImZpbmQiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRGcmFtZSIsImZyYW1lc0xlbmd0cmgiLCJsZW5ndGgiLCJmaXJzdEZyYW1lIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsImdldFN0ZXBzIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFR5cGVQcmVmaXgiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJhZGRTdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzVGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsIm5vZGVBc1N0cmluZyIsIm5vZGUiLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbU5vdGhpbmciLCJ0ZW1wb3JhcnlDb250ZXh0IiwiZnJvbVRlcm1zQW5kRnJhbWVzIiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQyxRQUFtQkMseUJBQWMsQ0FBakNELE9BQU9FLFVBQVlELHlCQUFjLENBQTFCQztBQUVBLElBQUEsQUFBTUgsaUNBQU47YUFBTUEsaUJBQ1BJLE9BQU8sRUFBRUMsT0FBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7Z0NBRDVEVjtRQUVqQixJQUFJLENBQUNJLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBUkhWOztZQVduQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxPQUFPO1lBQ3JCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU9QO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLEtBQUs7WUFDbkI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLE1BQU07WUFDcEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFVBQVU7WUFDeEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJ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