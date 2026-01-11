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
    function TemporaryContext(context, terms, frames, statements, assertions, references, substitutions) {
        _class_call_check(this, TemporaryContext);
        this.context = context;
        this.terms = terms;
        this.frames = frames;
        this.statements = statements;
        this.assertions = assertions;
        this.references = references;
        this.substitutions = substitutions;
    }
    _create_class(TemporaryContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                return this.references;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                var termA = term, context = this, termString = term.getString();
                extract(this.terms, function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
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
                var frameA = frame, context = this, frameString = frame.getString();
                extract(this.frames, function(frame) {
                    var frameB = frame, frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (frameAEqualToFrameB) {
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
                var context = this, statementA = statement, statementString = statement.getString();
                extract(this.statements, function(statement) {
                    var statementB = statement, statementAEqualToFrameB = statementA.isEqualTo(statementB);
                    if (statementAEqualToFrameB) {
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
                var context = this, assertionA = assertion, assertionString = assertion.getString();
                extract(this.assertions, function(assertion) {
                    var assertionB = assertion, assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
                    if (assertionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(assertionString, "' assertion to the context."));
                this.assertions.push(assertion);
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this, referenceA = reference, referenceString = reference.getString();
                extract(this.references, function(reference) {
                    var referenceB = reference, referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
                    if (referenceAEqualToReferenceB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(referenceString, "' reference to the context."));
                this.references.push(reference);
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                extract(this.substitutions, function(substitution) {
                    var substitutionB = substitution, substituionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substituionAEqualToSubstitutionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionString, "' substitution to the context."));
                this.substitutions.push(substitution);
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
            key: "findReferenceByMetavariableNode",
            value: function findReferenceByMetavariableNode(metavariableNode) {
                var reference = this.references.find(function(reference) {
                    var referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);
                    if (referenceMatcheMetavariableNode) {
                        return true;
                    }
                }) || null;
                return reference;
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
            key: "compareTermAndPropertyRelation",
            value: function compareTermAndPropertyRelation(term, propertyRelation) {
                return this.context.compareTermAndPropertyRelation(term, propertyRelation);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                return this.context.nodeAsString(node);
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                return this.context.nodesAsString(node);
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
                var terms = context.getTerms(), frames = context.getFrames(), statements = context.getStatements(), assertions = context.getAssertions(), references = context.getReferences(), substitutions = context.getSubstitutions();
                this.terms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                this.frames = _to_consumable_array(this.frames).concat(_to_consumable_array(frames));
                this.statements = _to_consumable_array(this.statements).concat(_to_consumable_array(statements));
                this.assertions = _to_consumable_array(this.assertions).concat(_to_consumable_array(assertions));
                this.references = _to_consumable_array(this.references).concat(_to_consumable_array(references));
                this.substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                compress(this.terms, function(termA, termB) {
                    var termAEqualToTermB = termA.isEqualTo(termB);
                    if (!termAEqualToTermB) {
                        return true;
                    }
                });
                compress(this.frames, function(frameA, frameB) {
                    var frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (!frameAEqualToFrameB) {
                        return true;
                    }
                });
                compress(this.statements, function(statementA, statementB) {
                    var statementAEqualToStatementB = statementA.isEqualTo(statementB);
                    if (!statementAEqualToStatementB) {
                        return true;
                    }
                });
                compress(this.assertions, function(assertionA, assertionB) {
                    var assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
                    if (!assertionAEqualToAssertionB) {
                        return true;
                    }
                });
                compress(this.references, function(referenceA, referenceB) {
                    var referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
                    if (!referenceAEqualToReferenceB) {
                        return true;
                    }
                });
                compress(this.substitutions, function(substitutionA, substitutionB) {
                    var substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualToSubstitutionB) {
                        return true;
                    }
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var terms = [], frames = [], statements = [], assertions = [], references = [], substitutions = [], temporaryContext = new TemporaryContext(context, terms, frames, statements, assertions, references, substitutions);
                return temporaryContext;
            }
        },
        {
            key: "fromTermsAndFrames",
            value: function fromTermsAndFrames(terms, frames, context) {
                var statements = [], assertions = [], references = [], substitutions = [], temporaryContext = new TemporaryContext(context, terms, frames, statements, assertions, references, substitutions);
                return temporaryContext;
            }
        }
    ]);
    return TemporaryContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RlbXBvcmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb3JhcnlDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy50ZXJtcywgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFEZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVBID0gZnJhbWUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmZyYW1lcywgKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZUIgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgICBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuXG4gICAgICBpZiAoZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5zdGF0ZW1lbnRzLCAoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEFFcXVhbFRvRnJhbWVCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25BID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25TdHJpbmcgPSBhc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuYXNzZXJ0aW9ucywgKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMucmVmZXJlbmNlcywgKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dWlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHVpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1NYXRjaGVzVGVybU5vZGUgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU1hdGNoZXNGcmFtZU5vZGUgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNYXRjaGVzRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk1hdGNoZXNBc3NlcnRpb25Ob2RlID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk1hdGNoZXNBc3NlcnRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1N1YnRpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzU3VidGl0dXRpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMobmVzdGVkKTsgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpOyB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpOyB9XG5cbiAgZ2V0U3RlcHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0U3RlcHMoKTsgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTsgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7IH1cblxuICBhZGRBeGlvbShheGlvbSkgeyB0aGlzLmNvbnRleHQuYWRkQXhpb20oYXhpb20pOyB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHsgdGhpcy5jb250ZXh0LmFkZExlbW1hKGxlbW1hKTsgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkgeyB0aGlzLmNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7IHJldHVybiB0aGlzLmNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpOyB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkKTsgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTsgfVxuXG4gIGFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKSB7IHRoaXMuY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7IH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pOyB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSk7IH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbikgeyByZXR1cm4gdGhpcy5jb250ZXh0LmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgbWVyZ2UoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpLFxuICAgICAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IGNvbnRleHQuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBjb250ZXh0LmdldEFzc2VydGlvbnMoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgdGhpcy50ZXJtcyA9IFtcbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAuLi50ZXJtc1xuICAgIF07XG5cbiAgICB0aGlzLmZyYW1lcyA9IFtcbiAgICAgIC4uLnRoaXMuZnJhbWVzLFxuICAgICAgLi4uZnJhbWVzXG4gICAgXTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IFtcbiAgICAgIC4uLnRoaXMuc3RhdGVtZW50cyxcbiAgICAgIC4uLnN0YXRlbWVudHNcbiAgICBdO1xuXG4gICAgdGhpcy5hc3NlcnRpb25zID0gW1xuICAgICAgLi4udGhpcy5hc3NlcnRpb25zLFxuICAgICAgLi4uYXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICB0aGlzLnJlZmVyZW5jZXMgPSBbXG4gICAgICAuLi50aGlzLnJlZmVyZW5jZXMsXG4gICAgICAuLi5yZWZlcmVuY2VzXG4gICAgXTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFtcbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICBdO1xuXG4gICAgY29tcHJlc3ModGhpcy50ZXJtcywgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgY29uc3QgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3ModGhpcy5mcmFtZXMsIChmcmFtZUEsIGZyYW1lQikgPT4ge1xuICAgICAgY29uc3QgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKCFmcmFtZUFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdGF0ZW1lbnRzLCAoc3RhdGVtZW50QSwgc3RhdGVtZW50QikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG5cbiAgICAgIGlmICghc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3ModGhpcy5hc3NlcnRpb25zLCAoYXNzZXJ0aW9uQSwgYXNzZXJ0aW9uQikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmICghYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3ModGhpcy5yZWZlcmVuY2VzLCAocmVmZXJlbmNlQSwgcmVmZXJlbmNlQikgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG5cbiAgICAgIGlmICghcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gbmV3IFRlbXBvcmFyeUNvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdGVtcG9yYXJ5Q29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlbXBvcmFyeUNvbnRleHQiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsInN0YXRlbWVudHMiLCJhc3NlcnRpb25zIiwicmVmZXJlbmNlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0VGVybXMiLCJnZXRGcmFtZXMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwidHJhY2UiLCJwdXNoIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QUVxdWFsVG9GcmFtZUIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dWlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwiZmluZCIsInRlcm1NYXRjaGVzVGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU1hdGNoZXNGcmFtZU5vZGUiLCJtYXRjaEZyYW1lTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk1hdGNoZXNBc3NlcnRpb25Ob2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25NYXRjaGVzU3VidGl0dXRpb25Ob2RlIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsImdldFN0ZXBzIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFR5cGVQcmVmaXgiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJhZGRTdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzVGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsIm5vZGVzQXNTdHJpbmciLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwibWVyZ2UiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJmcm9tTm90aGluZyIsInRlbXBvcmFyeUNvbnRleHQiLCJmcm9tVGVybXNBbmRGcmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBUUMsVUFBc0JDLHlCQUFjLENBQXBDRCxTQUFTRSxXQUFhRCx5QkFBYyxDQUEzQkM7QUFFRixJQUFBLEFBQU1ILGlDQUFOO2FBQU1BLGlCQUNQSSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxhQUFhO2dDQURsRVY7UUFFakIsSUFBSSxDQUFDSSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFB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