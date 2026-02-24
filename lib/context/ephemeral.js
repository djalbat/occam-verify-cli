"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EphemeralContext;
    }
});
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
var _json = require("../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var EphemeralContext = /*#__PURE__*/ function(Context) {
    _inherits(EphemeralContext, Context);
    function EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions) {
        _class_call_check(this, EphemeralContext);
        var _this;
        _this = _call_super(this, EphemeralContext, [
            context
        ]);
        _this.terms = terms;
        _this.frames = frames;
        _this.judgements = judgements;
        _this.equalities = equalities;
        _this.assertions = assertions;
        _this.statements = statements;
        _this.references = references;
        _this.assumptions = assumptions;
        _this.substitutions = substitutions;
        return _this;
    }
    _create_class(EphemeralContext, [
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
            key: "getEqualities",
            value: function getEqualities() {
                return this.equalities;
            }
        },
        {
            key: "getJudgements",
            value: function getJudgements() {
                return this.judgements;
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
            key: "getAssumptions",
            value: function getAssumptions() {
                return this.assumptions;
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
                context.trace("Adding the '".concat(termString, "' term to the ephemeral context..."));
                var termB = this.terms.find(function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
                        return true;
                    }
                }) || null;
                if (termB !== null) {
                    context.trace("The '".concat(termString, "' term has already been added to the ephemeral context."));
                } else {
                    this.terms.push(term);
                    context.debug("...added the '".concat(termString, "' term to the ephemeral context."));
                }
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var frameA = frame, context = this, frameString = frame.getString();
                context.trace("Adding the '".concat(frameString, "' frame to the ephemeral context..."));
                var frameB = this.frames.find(function(frame) {
                    var frameB = frame, frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (frameAEqualToFrameB) {
                        return true;
                    }
                }) || null;
                if (frameB !== null) {
                    context.trace("The '".concat(frameString, "' frame has already been added to the ephemeral context."));
                } else {
                    this.frames.push(frame);
                    context.debug("...added the '".concat(frameString, "' frame to the ephemeral context."));
                }
            }
        },
        {
            key: "addEquality",
            value: function addEquality(equality) {
                var equalityA = equality, context = this, equalityString = equality.getString();
                context.trace("Adding the '".concat(equalityString, "' equality to the ephemeral context..."));
                var equalityB = this.equalities.find(function(equality) {
                    var equalityB = equality, equalityAEqualToEqualityB = equalityA.isEqualTo(equalityB);
                    if (equalityAEqualToEqualityB) {
                        return true;
                    }
                }) || null;
                if (equalityB !== null) {
                    context.trace("The '".concat(equalityString, "' equality has already been added to the ephemeral context."));
                } else {
                    this.equalities.push(equality);
                    context.debug("...added the '".concat(equalityString, "' equality to the ephemeral context."));
                }
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var judgementA = judgement, context = this, judgementString = judgement.getString();
                context.trace("Adding the '".concat(judgementString, "' judgement to the ephemeral context..."));
                var judgementB = this.judgements.find(function(judgement) {
                    var judgementB = judgement, judgementAEqualToEqualityB = judgementA.isEqualTo(judgementB);
                    if (judgementAEqualToEqualityB) {
                        return true;
                    }
                }) || null;
                if (judgementB !== null) {
                    context.trace("The '".concat(judgementString, "' judgement has already been added to the ephemeral context."));
                } else {
                    this.judgements.push(judgement);
                    context.debug("...added the '".concat(judgementString, "' judgement to the ephemeral context."));
                }
            }
        },
        {
            key: "addStatement",
            value: function addStatement(statement) {
                var context = this, statementA = statement, statementString = statement.getString();
                context.trace("Adding the '".concat(statementString, "' statement to the ephemeral context..."));
                var statementB = this.statements.find(function(statement) {
                    var statementB = statement, statementAEqualToStatementB = statementA.isEqualTo(statementB);
                    if (statementAEqualToStatementB) {
                        return true;
                    }
                }) || null;
                if (statementB !== null) {
                    context.trace("The '".concat(statementString, "' statement has already been added to the ephemeral context."));
                } else {
                    this.statements.push(statement);
                    context.debug("...added the '".concat(statementString, "' statement to the ephemeral context."));
                }
            }
        },
        {
            key: "addAssertion",
            value: function addAssertion(assertion) {
                var context = this, assertionA = assertion, assertionString = assertion.getString();
                context.trace("Adding the '".concat(assertionString, "' assertion to the ephemeral context..."));
                var assertionB = this.assertions.find(function(assertion) {
                    var assertionB = assertion, assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
                    if (assertionAEqualToAssertionB) {
                        return true;
                    }
                }) || null;
                if (assertionB !== null) {
                    context.trace("The '".concat(assertionString, "' assertion has already been added to the ephemeral context."));
                } else {
                    this.assertions.push(assertion);
                    context.debug("...added the '".concat(assertionString, "' assertion to the ephemeral context."));
                }
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this, referenceA = reference, referenceString = reference.getString();
                context.trace("Adding the '".concat(referenceString, "' reference to the ephemeral context..."));
                var referenceB = this.references.find(function(reference) {
                    var referenceB = reference, referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
                    if (referenceAEqualToReferenceB) {
                        return true;
                    }
                }) || null;
                if (referenceB !== null) {
                    context.trace("The '".concat(referenceString, "' reference has already been added to the ephemeral context."));
                } else {
                    this.references.push(reference);
                    context.debug("...added the '".concat(referenceString, "' reference to the ephemeral context."));
                }
            }
        },
        {
            key: "addAssumption",
            value: function addAssumption(assumption) {
                var context = this, assumptionA = assumption, assumptionString = assumption.getString();
                context.trace("Adding the '".concat(assumptionString, "' assumption to the ephemeral context..."));
                var assumptionB = this.assumptions.find(function(assumption) {
                    var assumptionB = assumption, assumptionAEqualToAssumptionB = assumptionA.isEqualTo(assumptionB);
                    if (assumptionAEqualToAssumptionB) {
                        return true;
                    }
                }) || null;
                if (assumptionB !== null) {
                    context.trace("The '".concat(assumptionString, "' assumption has already been added to the ephemeral context."));
                } else {
                    this.assumptions.push(assumption);
                    context.debug("...added the '".concat(assumptionString, "' assumption to the ephemeral context."));
                }
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                context.trace("Adding the '".concat(substitutionString, "' substitution to the ephemeral context..."));
                var substitutionB = this.substitutions.find(function(substitution) {
                    var substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToSubstitutionB) {
                        return true;
                    }
                }) || null;
                if (substitutionB !== null) {
                    context.trace("The '".concat(substitutionString, "' substitution has already been added to the ephemeral context."));
                } else {
                    this.substitutions.push(substitution);
                    context.debug("...added the '".concat(substitutionString, "' substitution to the ephemeral context."));
                }
            }
        },
        {
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                var term = this.terms.find(function(term) {
                    var termNodeMatches = term.matchTermNode(termNode);
                    if (termNodeMatches) {
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
                    var frameNodeMatches = frame.matchFrameNode(frameNode);
                    if (frameNodeMatches) {
                        return true;
                    }
                }) || null;
                return frame;
            }
        },
        {
            key: "findJudgementByJudgementNode",
            value: function findJudgementByJudgementNode(judgementNode) {
                var judgement = this.judgements.find(function(judgement) {
                    var judgementNodeMatches = judgement.matchJudgementNode(judgementNode);
                    if (judgementNodeMatches) {
                        return true;
                    }
                }) || null;
                return judgement;
            }
        },
        {
            key: "findEqualityByEqualityNode",
            value: function findEqualityByEqualityNode(equalityNode) {
                var equality = this.equalities.find(function(equality) {
                    var equalityNodeMatches = equality.matchEqualityNode(equalityNode);
                    if (equalityNodeMatches) {
                        return true;
                    }
                }) || null;
                return equality;
            }
        },
        {
            key: "findStatementByStatementNode",
            value: function findStatementByStatementNode(statementNode) {
                var statement = this.statements.find(function(statement) {
                    var statementNodeMatches = statement.matchStatementNode(statementNode);
                    if (statementNodeMatches) {
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
                    var assertionNodeMatches = assertion.matchAssertionNode(assertionNode);
                    if (assertionNodeMatches) {
                        return true;
                    }
                }) || null;
                return assertion;
            }
        },
        {
            key: "findAssumptionByAssumptionNode",
            value: function findAssumptionByAssumptionNode(assumptionNode) {
                var assumption = this.assumptions.find(function(assumption) {
                    var assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);
                    if (assumptionNodeMatches) {
                        return true;
                    }
                }) || null;
                return assumption;
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
                    var substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);
                    if (substitutionNodeMatches) {
                        return true;
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "isTermPresentByTermNode",
            value: function isTermPresentByTermNode(termNode) {
                var term = this.findTermByTermNode(termNode), termPresent = term !== null;
                return termPresent;
            }
        },
        {
            key: "isFramePresentByFrameNode",
            value: function isFramePresentByFrameNode(frameNode) {
                var frame = this.findFrameByFrameNode(frameNode), framePresent = frame !== null;
                return framePresent;
            }
        },
        {
            key: "isEqualityPresentByEqualityNode",
            value: function isEqualityPresentByEqualityNode(equalityNode) {
                var equality = this.findEqualityByEqualityNode(equalityNode), equalityPresent = equality !== null;
                return equalityPresent;
            }
        },
        {
            key: "isJudgementPresentByJudgementNode",
            value: function isJudgementPresentByJudgementNode(judgementNode) {
                var judgement = this.findJudgementByJudgementNode(judgementNode), judgementPresent = judgement !== null;
                return judgementPresent;
            }
        },
        {
            key: "isStatementPresentByStatementNode",
            value: function isStatementPresentByStatementNode(statementNode) {
                var statement = this.findStatementByStatementNode(statementNode), statementPresent = statement !== null;
                return statementPresent;
            }
        },
        {
            key: "isAssertionPresentByAssertionNode",
            value: function isAssertionPresentByAssertionNode(assertionNode) {
                var assertion = this.findAssertionByAssertionNode(assertionNode), assertionPresent = assertion !== null;
                return assertionPresent;
            }
        },
        {
            key: "isAssumptionPresentByAssumptionNode",
            value: function isAssumptionPresentByAssumptionNode(assumptionNode) {
                var assumption = this.findAssumptionByAssumptionNode(assumptionNode), assumptionPresent = assumption !== null;
                return assumptionPresent;
            }
        },
        {
            key: "isReferencePresentByMetavariableNode",
            value: function isReferencePresentByMetavariableNode(metavariableNode) {
                var reference = this.findReferenceByMetavariableNode(metavariableNode), referencePresent = reference !== null;
                return referencePresent;
            }
        },
        {
            key: "isSubstitutionPresentBySubstitutionNode",
            value: function isSubstitutionPresentBySubstitutionNode(substitutionNode) {
                var substitution = this.findSubstitutionBySubstitutionNode(substitutionNode), substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termsJSON = (0, _json.termsToTermsJSON)(this.terms), framesJSON = (0, _json.framesToFramesJSON)(this.frames), judgementsJSON = (0, _json.judgementsToJudgementsJSON)(this.judgements), equalitiesJSON = (0, _json.equalitiesToEqualitiesJSON)(this.equalities), statementsJSON = (0, _json.statementsToStatementsJSON)(this.statements), assertionsJSON = (0, _json.assertionsToAssertionsJSON)(this.assertions), referencesJSON = (0, _json.referencesToReferencesJSON)(this.references), assumptionsJSON = (0, _json.assumptionsToAssumptionsJSON)(this.assumptions), substitutionsJSON = (0, _json.substitutionsToCSubstitutionsJSON)(this.substitutions), terms = termsJSON, frames = framesJSON, judgements = judgementsJSON, equalities = equalitiesJSON, statements = statementsJSON, assertions = assertionsJSON, references = referencesJSON, assumptions = assumptionsJSON, substitutions = substitutionsJSON, json = {
                    terms: terms,
                    frames: frames,
                    judgements: judgements,
                    equalities: equalities,
                    statements: statements,
                    assertions: assertions,
                    references: references,
                    assumptions: assumptions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), judgements = (0, _json.judgementsFromJSON)(json, context), equalities = (0, _json.equalitiesFromJSON)(json, context), statements = (0, _json.statementsFromJSON)(json, context), assertions = (0, _json.assertionsFromJSON)(json, context), references = (0, _json.referencesFromJSON)(json, context), assumptions = (0, _json.assumptionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);
                return emphemeralContext;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var terms = [], frames = [], judgements = [], equalities = [], statements = [], assertions = [], references = [], assumptions = [], substitutions = [], emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return EphemeralContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb0NTdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcGhlbWVyYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGp1ZGdlbWVudHMsIGVxdWFsaXRpZXMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzO1xuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5qdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtQiA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodGVybUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVBID0gZnJhbWUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVCID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lQiA9IGZyYW1lLCAvLy9cbiAgICAgICAgICAgIGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG5cbiAgICAgIGlmIChmcmFtZUFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZnJhbWVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5QiA9IHRoaXMuZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgICAgZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5pc0VxdWFsVG8oZXF1YWxpdHlCKTtcblxuICAgICAgaWYgKGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlcXVhbGl0eUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QganVkZ2VtZW50QSA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IGp1ZGdlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QganVkZ2VtZW50QiA9IHRoaXMuanVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudEIgPSBqdWRnZW1lbnQsIC8vL1xuICAgICAgICAgICAganVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIgPSBqdWRnZW1lbnRBLmlzRXF1YWxUbyhqdWRnZW1lbnRCKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudEIgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25BID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25TdHJpbmcgPSBhc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbkIgPSB0aGlzLmFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25CID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IGFzc2VydGlvbkEuaXNFcXVhbFRvKGFzc2VydGlvbkIpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzZXJ0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZUIgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VCID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiA9IHJlZmVyZW5jZUEuaXNFcXVhbFRvKHJlZmVyZW5jZUIpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAocmVmZXJlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25BID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbkIgPSB0aGlzLmFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25BLmlzRXF1YWxUbyhhc3N1bXB0aW9uQik7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc3VtcHRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IGVxdWFsaXR5Lm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgIGlmIChlcXVhbGl0eU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9ICh0ZXJtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gKGZyYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IChlcXVhbGl0eSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gKHN0YXRlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25QcmVzZW50ID0gKGFzc3VtcHRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IChyZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04odGhpcy5mcmFtZXMpLFxuICAgICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04odGhpcy5qdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKHRoaXMuZXF1YWxpdGllcyksXG4gICAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTih0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04odGhpcy5hc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHRoaXMucmVmZXJlbmNlcyksXG4gICAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTih0aGlzLmFzc3VtcHRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb0NTdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAvLy9cbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNKU09OLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT04sIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zLFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAganVkZ2VtZW50cyxcbiAgICAgICAgICAgIGVxdWFsaXRpZXMsXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLFxuICAgICAgICAgICAgYXNzZXJ0aW9ucyxcbiAgICAgICAgICAgIHJlZmVyZW5jZXMsXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBqdWRnZW1lbnRzLCBlcXVhbGl0aWVzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGp1ZGdlbWVudHMsIGVxdWFsaXRpZXMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJjb250ZXh0IiwidGVybXMiLCJmcmFtZXMiLCJqdWRnZW1lbnRzIiwiZXF1YWxpdGllcyIsImFzc2VydGlvbnMiLCJzdGF0ZW1lbnRzIiwicmVmZXJlbmNlcyIsImFzc3VtcHRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1BIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybUIiLCJmaW5kIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwdXNoIiwiZGVidWciLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QSIsImVxdWFsaXR5U3RyaW5nIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEEiLCJqdWRnZW1lbnRTdHJpbmciLCJqdWRnZW1lbnRCIiwianVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25BIiwiYXNzdW1wdGlvblN0cmluZyIsImFzc3VtcHRpb25CIiwiYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OIiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsInN0YXRlbWVudHNKU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwicmVmZXJlbmNlc0pTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb0NTdWJzdGl0dXRpb25zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImp1ZGdlbWVudHNGcm9tSlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsImFzc2VydGlvbnNGcm9tSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsImFzc3VtcHRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJlbXBoZW1lcmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF1QnFCQTs7OzhEQXJCRDtvQkFtQjhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWE7Z0NBRHZHVjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FB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