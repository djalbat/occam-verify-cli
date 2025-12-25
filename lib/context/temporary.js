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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var extract = _necessary.arrayUtilities.extract, compress = _necessary.arrayUtilities.compress;
var TemporaryContext = /*#__PURE__*/ function() {
    function TemporaryContext(context, tokens1, terms, frames, statements, assertions, substitutions, reference) {
        _class_call_check(this, TemporaryContext);
        this.context = context;
        this.tokens = tokens1;
        this.terms = terms;
        this.frames = frames;
        this.statements = statements;
        this.assertions = assertions;
        this.substitutions = substitutions;
        this.reference = reference;
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
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
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionNode = substitution.getNode(), substitutionString = substitution.getString();
                extract(this.substitutions, function(substitution) {
                    var substitutionMatchesFrameNode = substitution.matchSubstitutionNode(substitutionNode);
                    if (substitutionMatchesFrameNode) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionString, "' substitution."));
                this.substitutions.push(substitution);
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
            key: "findSubtitutionBySubtitutionNode",
            value: function findSubtitutionBySubtitutionNode(substitutionNode) {
                var substitution = this.substitutions.find(function(substitution) {
                    var substitutionMatchesSubtitutionNode = substitution.matchSubtitutionNode(substitutionNode);
                    if (substitutionMatchesSubtitutionNode) {
                        return true;
                    }
                }) || null;
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
        },
        {
            key: "marge",
            value: function marge(context) {
                var terms = context.getTerms(), frames = context.getFrames(), statements = context.getStatements(), assertions = context.getAssertions(), substitutions = context.getSubstitutions();
                this.terms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                this.frames = _to_consumable_array(this.frames).concat(_to_consumable_array(frames));
                this.statements = _to_consumable_array(this.statements).concat(_to_consumable_array(statements));
                this.assertions = _to_consumable_array(this.assertions).concat(_to_consumable_array(assertions));
                this.substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                compress(this.terms, function(termA, termB) {
                    var termANode = termA.getNode(), termBNode = termB.getNode(), termANodeMatchesTermBNode = termANode.match(termBNode);
                    if (termAMatchesTermB) {
                        return true;
                    }
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var terms = [], frames = [], tokens1 = null, statements = [], assertions = [], substitutions = [], reference = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, statements, assertions, substitutions, reference);
                return temporaryContext;
            }
        },
        {
            key: "fromTermsAndFrames",
            value: function fromTermsAndFrames(terms, frames, context) {
                var tokens1 = null, statements = [], assertions = [], substitutions = [], reference = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, statements, assertions, substitutions, reference);
                return temporaryContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens1) {
                var terms = [], frames = [], statements = [], assertions = [], substitutions = [], reference = null, temporaryContext = new TemporaryContext(context, tokens1, terms, frames, statements, assertions, substitutions, reference);
                return temporaryContext;
            }
        }
    ]);
    return TemporaryContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb3JhcnlDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zLCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnRlcm1zLCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU1hdGNoZXNUZXJtTm9kZSA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQURkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuXG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuZnJhbWVzLCAoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTWF0Y2hlc0ZyYW1lTm9kZSA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcblxuICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3RhdGVtZW50cywgKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcblxuICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBhc3NlcnRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5hc3NlcnRpb25zLCAoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25NYXRjaGVzRnJhbWVOb2RlID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uLmApO1xuXG4gICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNGcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0ZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25NYXRjaGVzQXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbi5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25NYXRjaGVzQXNzZXJ0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXNTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1hdGNoZXNTdGF0ZW1lbnROb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFN1YnRpdHV0aW9uQnlTdWJ0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNTdWJ0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJ0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzU3VidGl0dXRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMobmVzdGVkKTsgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpOyB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpOyB9XG5cbiAgZ2V0U3RlcHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0U3RlcHMoKTsgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTsgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7IH1cblxuICBhZGRBeGlvbShheGlvbSkgeyB0aGlzLmNvbnRleHQuYWRkQXhpb20oYXhpb20pOyB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHsgdGhpcy5jb250ZXh0LmFkZExlbW1hKGxlbW1hKTsgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkgeyB0aGlzLmNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpOyB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkKTsgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTsgfVxuXG4gIGFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKSB7IHRoaXMuY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7IH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pOyB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pOyB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIG1hcmdlKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKSxcbiAgICAgICAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gY29udGV4dC5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgdGhpcy50ZXJtcyA9IFtcbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAuLi50ZXJtc1xuICAgIF07XG5cbiAgICB0aGlzLmZyYW1lcyA9IFtcbiAgICAgIC4uLnRoaXMuZnJhbWVzLFxuICAgICAgLi4uZnJhbWVzXG4gICAgXTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IFtcbiAgICAgIC4uLnRoaXMuc3RhdGVtZW50cyxcbiAgICAgIC4uLnN0YXRlbWVudHNcbiAgICBdO1xuXG4gICAgdGhpcy5hc3NlcnRpb25zID0gW1xuICAgICAgLi4udGhpcy5hc3NlcnRpb25zLFxuICAgICAgLi4uYXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBbXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMudGVybXMsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1BTm9kZSA9IHRlcm1BLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1CTm9kZSA9IHRlcm1CLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1BTm9kZU1hdGNoZXNUZXJtQk5vZGUgPSB0ZXJtQU5vZGUubWF0Y2godGVybUJOb2RlKTtcblxuICAgICAgaWYgKHRlcm1BTWF0Y2hlc1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBuZXcgVGVtcG9yYXJ5Q29udGV4dChjb250ZXh0LCB0b2tlbnMsIHRlcm1zLCBmcmFtZXMsIHN0YXRlbWVudHMsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zLCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRlbXBvcmFyeUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBuZXcgVGVtcG9yYXJ5Q29udGV4dChjb250ZXh0LCB0b2tlbnMsIHRlcm1zLCBmcmFtZXMsIHN0YXRlbWVudHMsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlbXBvcmFyeUNvbnRleHQiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsImNvbnRleHQiLCJ0b2tlbnMiLCJ0ZXJtcyIsImZyYW1lcyIsInN0YXRlbWVudHMiLCJhc3NlcnRpb25zIiwic3Vic3RpdHV0aW9ucyIsInJlZmVyZW5jZSIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldFN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFJlZmVyZW5jZSIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybU5vZGUiLCJnZXROb2RlIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRlcm1NYXRjaGVzVGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwidHJhY2UiLCJwdXNoIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU3RyaW5nIiwiZnJhbWVNYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25NYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbk1hdGNoZXNGcmFtZU5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJhZGRSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJmaW5kIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTWF0Y2hlc0Fzc2VydGlvbk5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJmaW5kU3VidGl0dXRpb25CeVN1YnRpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNTdWJ0aXR1dGlvbk5vZGUiLCJtYXRjaFN1YnRpdHV0aW9uTm9kZSIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJnZXRTdGVwcyIsImdldExhc3RTdGVwIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsImdldEZpbGVQYXRoIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRUeXBlUHJlZml4IiwiYWRkQXhpb20iLCJheGlvbSIsImFkZExlbW1hIiwibGVtbWEiLCJhZGRUaGVvcmVtIiwidGhlb3JlbSIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiYWRkU3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZiIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJmaW5kTWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTm9kZSIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNUZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwibWFyZ2UiLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFOb2RlIiwidGVybUJOb2RlIiwidGVybUFOb2RlTWF0Y2hlc1Rlcm1CTm9kZSIsIm1hdGNoIiwidGVybUFNYXRjaGVzVGVybUIiLCJmcm9tTm90aGluZyIsInRlbXBvcmFyeUNvbnRleHQiLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQyxVQUFzQkMseUJBQWMsQ0FBcENELFNBQVNFLFdBQWFELHlCQUFjLENBQTNCQztBQUVGLElBQUEsQUFBTUgsaUNBQU47YUFBTUEsaUJBQ1BJLE9BQU8sRUFBRUMsT0FBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsU0FBUztnQ0FEekVYO1FBRWpCLElBQUksQ0FBQ0ksT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxh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