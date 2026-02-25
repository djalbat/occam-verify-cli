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
            key: "initialise",
            value: function initialise(json) {
                var context = this; ///
                this.terms = (0, _json.termsFromJSON)(json, context);
                this.frames = (0, _json.framesFromJSON)(json, context);
                this.judgements = (0, _json.judgementsFromJSON)(json, context);
                this.equalities = (0, _json.equalitiesFromJSON)(json, context);
                this.statements = (0, _json.statementsFromJSON)(json, context);
                this.assertions = (0, _json.assertionsFromJSON)(json, context);
                this.references = (0, _json.referencesFromJSON)(json, context);
                this.assumptions = (0, _json.assumptionsFromJSON)(json, context);
                this.substitutions = (0, _json.substitutionsFromJSON)(json, context);
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
                var terms = null, frames = null, judgements = null, equalities = null, statements = null, assertions = null, references = null, assumptions = null, substitutions = null, emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);
                emphemeralContext.initialise(json);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb0NTdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcGhlbWVyYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGp1ZGdlbWVudHMsIGVxdWFsaXRpZXMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzO1xuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5qdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtQiA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodGVybUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVBID0gZnJhbWUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVCID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lQiA9IGZyYW1lLCAvLy9cbiAgICAgICAgICAgIGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG5cbiAgICAgIGlmIChmcmFtZUFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZnJhbWVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5QiA9IHRoaXMuZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgICAgZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5pc0VxdWFsVG8oZXF1YWxpdHlCKTtcblxuICAgICAgaWYgKGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlcXVhbGl0eUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QganVkZ2VtZW50QSA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IGp1ZGdlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QganVkZ2VtZW50QiA9IHRoaXMuanVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudEIgPSBqdWRnZW1lbnQsIC8vL1xuICAgICAgICAgICAganVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIgPSBqdWRnZW1lbnRBLmlzRXF1YWxUbyhqdWRnZW1lbnRCKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudEIgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25BID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25TdHJpbmcgPSBhc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbkIgPSB0aGlzLmFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25CID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IGFzc2VydGlvbkEuaXNFcXVhbFRvKGFzc2VydGlvbkIpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzZXJ0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZUIgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VCID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiA9IHJlZmVyZW5jZUEuaXNFcXVhbFRvKHJlZmVyZW5jZUIpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAocmVmZXJlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25BID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbkIgPSB0aGlzLmFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25BLmlzRXF1YWxUbyhhc3N1bXB0aW9uQik7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc3VtcHRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IGVxdWFsaXR5Lm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgIGlmIChlcXVhbGl0eU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9ICh0ZXJtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gKGZyYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IChlcXVhbGl0eSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gKHN0YXRlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25QcmVzZW50ID0gKGFzc3VtcHRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IChyZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0aGlzLnRlcm1zKSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKHRoaXMuZnJhbWVzKSxcbiAgICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OKHRoaXMuanVkZ2VtZW50cyksXG4gICAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTih0aGlzLmVxdWFsaXRpZXMpLFxuICAgICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04odGhpcy5zdGF0ZW1lbnRzKSxcbiAgICAgICAgICBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKHRoaXMuYXNzZXJ0aW9ucyksXG4gICAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTih0aGlzLnJlZmVyZW5jZXMpLFxuICAgICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04odGhpcy5hc3N1bXB0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9DU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zSlNPTiwgLy8vXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzSlNPTiwgLy8vXG4gICAgICAgICAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLCAvLy9cbiAgICAgICAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04sIC8vL1xuICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT04sIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtcyxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIGp1ZGdlbWVudHMsXG4gICAgICAgICAgICBlcXVhbGl0aWVzLFxuICAgICAgICAgICAgc3RhdGVtZW50cyxcbiAgICAgICAgICAgIGFzc2VydGlvbnMsXG4gICAgICAgICAgICByZWZlcmVuY2VzLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IG51bGwsXG4gICAgICAgICAgZnJhbWVzID0gbnVsbCxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBhc3NlcnRpb25zID0gbnVsbCxcbiAgICAgICAgICByZWZlcmVuY2VzID0gbnVsbCxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBqdWRnZW1lbnRzLCBlcXVhbGl0aWVzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBlbXBoZW1lcmFsQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBqdWRnZW1lbnRzLCBlcXVhbGl0aWVzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwianVkZ2VtZW50cyIsImVxdWFsaXRpZXMiLCJhc3NlcnRpb25zIiwic3RhdGVtZW50cyIsInJlZmVyZW5jZXMiLCJhc3N1bXB0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHVzaCIsImRlYnVnIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUEiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QiIsImVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBIiwianVkZ2VtZW50U3RyaW5nIiwianVkZ2VtZW50QiIsImp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiYWRkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQSIsImFzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQiIsImFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImluaXRpYWxpc2UiLCJqc29uIiwidGVybXNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwiZXF1YWxpdGllc0Zyb21KU09OIiwic3RhdGVtZW50c0Zyb21KU09OIiwiYXNzZXJ0aW9uc0Zyb21KU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04iLCJzdGF0ZW1lbnRzSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTiIsInJlZmVyZW5jZXNKU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9DU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250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