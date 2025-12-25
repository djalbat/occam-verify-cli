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
                context.trace("ADded the '".concat(termString, "' term to the context."));
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
                context.trace("Added the '".concat(frameString, "' frame to the context."));
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
                context.trace("Added the '".concat(statementString, "' statement to the context."));
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
                context.trace("Added the '".concat(assertionString, "' assertion to the context."));
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
                context.trace("Added the '".concat(substitutionString, "' substitution to the context."));
                this.substitutions.push(substitution);
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this, referenceString = reference.getString();
                this.reference = reference;
                context.trace("Added the '".concat(referenceString, "' reference to the context."));
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
            key: "findSubstitutionBySubstitutionNode",
            value: function findSubstitutionBySubstitutionNode(substitutionNode) {
                var substitution = this.substitutions.find(function(substitution) {
                    var substitutionMatchesSubtitutionNode = substitution.matchSubstitutionNode(substitutionNode);
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
            key: "merge",
            value: function merge(context) {
                var terms = context.getTerms(), frames = context.getFrames(), statements = context.getStatements(), assertions = context.getAssertions(), substitutions = context.getSubstitutions();
                this.terms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                this.frames = _to_consumable_array(this.frames).concat(_to_consumable_array(frames));
                this.statements = _to_consumable_array(this.statements).concat(_to_consumable_array(statements));
                this.assertions = _to_consumable_array(this.assertions).concat(_to_consumable_array(assertions));
                this.substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                compress(this.terms, function(termA, termB) {
                    var termANode = termA.getNode(), termBNode = termB.getNode(), termANodeMatchesTermBNode = termANode.match(termBNode);
                    if (!termANodeMatchesTermBNode) {
                        return true;
                    }
                });
                compress(this.frames, function(frameA, frameB) {
                    var frameANode = frameA.getNode(), frameBNode = frameB.getNode(), frameANodeMatchesFrameBNode = frameANode.match(frameBNode);
                    if (!frameANodeMatchesFrameBNode) {
                        return true;
                    }
                });
                compress(this.statements, function(statementA, statementB) {
                    var statementANode = statementA.getNode(), statementBNode = statementB.getNode(), statementANodeMatchesStatementBNode = statementANode.match(statementBNode);
                    if (!statementANodeMatchesStatementBNode) {
                        return true;
                    }
                });
                compress(this.assertions, function(assertionA, assertionB) {
                    var assertionANode = assertionA.getNode(), assertionBNode = assertionB.getNode(), assertionANodeMatchesAssertionBNode = assertionANode.match(assertionBNode);
                    if (!assertionANodeMatchesAssertionBNode) {
                        return true;
                    }
                });
                compress(this.substitutions, function(substitutionA, substitutionB) {
                    var substitutionANode = substitutionA.getNode(), substitutionBNode = substitutionB.getNode(), substitutionANodeMatchesSubstitutionBNode = substitutionANode.match(substitutionBNode);
                    if (!substitutionANodeMatchesSubstitutionBNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb3JhcnlDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zLCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zLCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnRlcm1zLCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU1hdGNoZXNUZXJtTm9kZSA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQURkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuZnJhbWVzLCAoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTWF0Y2hlc0ZyYW1lTm9kZSA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3RhdGVtZW50cywgKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlc0ZyYW1lTm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBhc3NlcnRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5hc3NlcnRpb25zLCAoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25NYXRjaGVzRnJhbWVOb2RlID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk1hdGNoZXNGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNGcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0ZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTWF0Y2hlc1Rlcm1Ob2RlID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1NYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVNYXRjaGVzRnJhbWVOb2RlID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTWF0Y2hlc0ZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTWF0Y2hlc0Fzc2VydGlvbk5vZGUgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTWF0Y2hlc0Fzc2VydGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNTdWJ0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1N1YnRpdHV0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKG5lc3RlZCk7IH1cblxuICBnZXRKdWRnZW1lbnRzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEp1ZGdlbWVudHMoKTsgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTsgfVxuXG4gIGdldFN0ZXBzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzKCk7IH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RlcHNPclN1YnByb29mcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7IH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpOyB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7IHRoaXMuY29udGV4dC5hZGRMZW1tYShsZW1tYSk7IH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHsgdGhpcy5jb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTsgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCk7IH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7IH1cblxuICBhZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZikgeyB0aGlzLmNvbnRleHQuYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTsgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTsgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpOyB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7IHJldHVybiB0aGlzLmNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHsgcmV0dXJuIHRoaXMuY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBtZXJnZShjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBjb250ZXh0LmdldFRlcm1zKCksXG4gICAgICAgICAgZnJhbWVzID0gY29udGV4dC5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIHRoaXMudGVybXMgPSBbXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuXG4gICAgdGhpcy5mcmFtZXMgPSBbXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIC4uLmZyYW1lc1xuICAgIF07XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBbXG4gICAgICAuLi50aGlzLnN0YXRlbWVudHMsXG4gICAgICAuLi5zdGF0ZW1lbnRzXG4gICAgXTtcblxuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IFtcbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9ucyxcbiAgICAgIC4uLmFzc2VydGlvbnNcbiAgICBdO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gW1xuICAgICAgLi4udGhpcy5zdWJzdGl0dXRpb25zLFxuICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnRlcm1zLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQU5vZGUgPSB0ZXJtQS5nZXROb2RlKCksXG4gICAgICAgICAgICB0ZXJtQk5vZGUgPSB0ZXJtQi5nZXROb2RlKCksXG4gICAgICAgICAgICB0ZXJtQU5vZGVNYXRjaGVzVGVybUJOb2RlID0gdGVybUFOb2RlLm1hdGNoKHRlcm1CTm9kZSk7XG5cbiAgICAgIGlmICghdGVybUFOb2RlTWF0Y2hlc1Rlcm1CTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbXByZXNzKHRoaXMuZnJhbWVzLCAoZnJhbWVBLCBmcmFtZUIpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lQU5vZGUgPSBmcmFtZUEuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZnJhbWVCTm9kZSA9IGZyYW1lQi5nZXROb2RlKCksXG4gICAgICAgICAgICBmcmFtZUFOb2RlTWF0Y2hlc0ZyYW1lQk5vZGUgPSBmcmFtZUFOb2RlLm1hdGNoKGZyYW1lQk5vZGUpO1xuXG4gICAgICBpZiAoIWZyYW1lQU5vZGVNYXRjaGVzRnJhbWVCTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbXByZXNzKHRoaXMuc3RhdGVtZW50cywgKHN0YXRlbWVudEEsIHN0YXRlbWVudEIpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEFOb2RlID0gc3RhdGVtZW50QS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50QU5vZGVNYXRjaGVzU3RhdGVtZW50Qk5vZGUgPSBzdGF0ZW1lbnRBTm9kZS5tYXRjaChzdGF0ZW1lbnRCTm9kZSk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50QU5vZGVNYXRjaGVzU3RhdGVtZW50Qk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyh0aGlzLmFzc2VydGlvbnMsIChhc3NlcnRpb25BLCBhc3NlcnRpb25CKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25BTm9kZSA9IGFzc2VydGlvbkEuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uQk5vZGUgPSBhc3NlcnRpb25CLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGFzc2VydGlvbkFOb2RlTWF0Y2hlc0Fzc2VydGlvbkJOb2RlID0gYXNzZXJ0aW9uQU5vZGUubWF0Y2goYXNzZXJ0aW9uQk5vZGUpO1xuXG4gICAgICBpZiAoIWFzc2VydGlvbkFOb2RlTWF0Y2hlc0Fzc2VydGlvbkJOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQU5vZGUgPSBzdWJzdGl0dXRpb25BLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJOb2RlID0gc3Vic3RpdHV0aW9uQi5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BTm9kZU1hdGNoZXNTdWJzdGl0dXRpb25CTm9kZSA9IHN1YnN0aXR1dGlvbkFOb2RlLm1hdGNoKHN1YnN0aXR1dGlvbkJOb2RlKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BTm9kZU1hdGNoZXNTdWJzdGl0dXRpb25CTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucywgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0ZW1wb3JhcnlDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtc0FuZEZyYW1lcyh0ZXJtcywgZnJhbWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBuZXcgVGVtcG9yYXJ5Q29udGV4dChjb250ZXh0LCB0b2tlbnMsIHRlcm1zLCBmcmFtZXMsIHN0YXRlbWVudHMsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IG5ldyBUZW1wb3JhcnlDb250ZXh0KGNvbnRleHQsIHRva2VucywgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucywgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0ZW1wb3JhcnlDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVtcG9yYXJ5Q29udGV4dCIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwiY29udGV4dCIsInRva2VucyIsInRlcm1zIiwiZnJhbWVzIiwic3RhdGVtZW50cyIsImFzc2VydGlvbnMiLCJzdWJzdGl0dXRpb25zIiwicmVmZXJlbmNlIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0UmVmZXJlbmNlIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidGVybU1hdGNoZXNUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJ0cmFjZSIsInB1c2giLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1hdGNoZXNGcmFtZU5vZGUiLCJtYXRjaEZyYW1lTm9kZSIsImFkZFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRNYXRjaGVzRnJhbWVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblN0cmluZyIsImFzc2VydGlvbk1hdGNoZXNGcmFtZU5vZGUiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uTWF0Y2hlc0ZyYW1lTm9kZSIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZVN0cmluZyIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImZpbmQiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25NYXRjaGVzQXNzZXJ0aW9uTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25NYXRjaGVzU3VidGl0dXRpb25Ob2RlIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsImdldFN0ZXBzIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFR5cGVQcmVmaXgiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJhZGRTdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc1Rlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJtZXJnZSIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQU5vZGUiLCJ0ZXJtQk5vZGUiLCJ0ZXJtQU5vZGVNYXRjaGVzVGVybUJOb2RlIiwibWF0Y2giLCJmcmFtZUEiLCJmcmFtZUIiLCJmcmFtZUFOb2RlIiwiZnJhbWVCTm9kZSIsImZyYW1lQU5vZGVNYXRjaGVzRnJhbWVCTm9kZSIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QU5vZGUiLCJzdGF0ZW1lbnRCTm9kZSIsInN0YXRlbWVudEFOb2RlTWF0Y2hlc1N0YXRlbWVudEJOb2RlIiwiYXNzZXJ0aW9uQSIsImFzc2VydGlvbkIiLCJhc3NlcnRpb25BTm9kZSIsImFzc2VydGlvbkJOb2RlIiwiYXNzZXJ0aW9uQU5vZGVNYXRjaGVzQXNzZXJ0aW9uQk5vZGUiLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFOb2RlIiwic3Vic3RpdHV0aW9uQk5vZGUiLCJzdWJzdGl0dXRpb25BTm9kZU1hdGNoZXNTdWJzdGl0dXRpb25CTm9kZSIsImZyb21Ob3RoaW5nIiwidGVtcG9yYXJ5Q29udGV4dCIsImZyb21UZXJtc0FuZEZyYW1lcyIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFDLFVBQXNCQyx5QkFBYyxDQUFwQ0QsU0FBU0UsV0FBYUQseUJBQWMsQ0FBM0JDO0FBRUYsSUFBQSxBQUFNSCxpQ0FBTjthQUFNQSxpQkFDUEksT0FBTyxFQUFFQyxPQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxTQUFTO2dDQUR6RVg7UUFFakIsSUFBSSxDQUFDSSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FB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