"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unifyStatements", {
    enumerable: true,
    get: function() {
        return unifyStatements;
    }
});
var _occamfurtle = require("occam-furtle");
var _necessary = require("necessary");
var _context = require("../utilities/context");
var _statement = require("../utilities/statement");
var backwardsSome = _necessary.arrayUtilities.backwardsSome;
function unifyStatementWithRule(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesWithRule = false;
    if (reference !== null) {
        var rule = context.findRuleByReference(reference);
        if (rule !== null) {
            var ruleString = rule.getString(), statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
            var subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementAndSubproofOrProofAssertionsUnify = rule.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                statementUnifiesWithRule = true;
            }
            if (statementUnifiesWithRule) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule."));
            }
        }
    }
    return statementUnifiesWithRule;
}
function unifyStatementWithReference(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesWithReference = false;
    if (reference !== null) {
        var statementString = statement.getString(), referenceString = reference.getString();
        context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference..."));
        var metavariableValidates = reference.validateMetavariable(context);
        if (metavariableValidates) {
            var metavariable = reference.getMetavariable();
            (0, _context.synthetically)(function(context) {
                var StatementSubstitution = _occamfurtle.elements.StatementSubstitution;
                StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
            }, generalContext, specificContext);
            statementUnifiesWithReference = true;
        }
        if (statementUnifiesWithReference) {
            context.debug("...unified the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference."));
        }
    }
    return statementUnifiesWithReference;
}
function unifyStatementAsSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesAsSatisfiesAssertion = false;
    satisfiesAssertion = (0, _statement.satisfiesAssertionFromStatement)(statement, context);
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
        var stated = true, assignments = null;
        satisfiesAssertion.verifySignature(assignments, stated, context);
        if (reference === null) {
            var subproofOrProofAssertions = context.getSubproofOrProofAssertions();
            statementUnifiesAsSatisfiesAssertion = backwardsSome(subproofOrProofAssertions, function(stepsOrSubproof) {
                var stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);
                if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
                    return true;
                }
            });
        } else {
            var topLevelAssertion = context.findTopLevelAssertionByReference(reference);
            if (topLevelAssertion !== null) {
                reference = satisfiesAssertion.getReference();
                var axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var satisfiable = axiom.isSatisfiable();
                    if (satisfiable) {
                        var Substitutions = _occamfurtle.elements.Substitutions, substitutions1 = Substitutions.fromNothing(context), topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, substitutions1, context);
                        if (topLevelAssertionUnifies) {
                            var substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions1, context);
                            if (substitutionsCorrelates) {
                                statementUnifiesAsSatisfiesAssertion = true;
                            }
                        }
                    } else {
                        var axiomString = axiom.getString();
                        context.debug("Unable to unify with the '".concat(axiomString, "' because it is not satisfiable."));
                    }
                }
            }
        }
        if (statementUnifiesAsSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statement as a satisfies assertion."));
        }
    }
    return statementUnifiesAsSatisfiesAssertion;
}
function unifyStatementWithTopLevelAssertion(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesWithTopLevelAssertion = false;
    if (reference !== null) {
        var Substitutions = _occamfurtle.elements.Substitutions, topLevelAssertion = context.findTopLevelAssertionByReference(reference), generalSubstitutions = substitutions; ///
        if (topLevelAssertion !== null) {
            var statementString = statement.getString(), topLevelAssertionString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion..."));
            var subproofOrProofAssertions = context.getSubproofOrProofAssertions();
            substitutions = Substitutions.fromNothing(context);
            var statementAndSubproofOrProofAssertionsUnify = topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, substitutions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                var metavariable = reference.getMetavariable();
                (0, _context.synthetically)(function(context) {
                    var StatementSubstitution = _occamfurtle.elements.StatementSubstitution;
                    StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
                }, generalContext, specificContext);
                statementUnifiesWithTopLevelAssertion = true;
            }
            if (statementUnifiesWithTopLevelAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion."));
            }
        }
    }
    return statementUnifiesWithTopLevelAssertion;
}
function unifyStatementAEquality(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesAEquality = false;
    if (reference === null) {
        var equality = (0, _statement.equalityFromStatement)(statement, context);
        if (equality !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as an equality..."));
            var equalityEqual = equality.isEqual(context);
            if (equalityEqual) {
                statementUnifiesAEquality = true;
            }
            if (statementUnifiesAEquality) {
                context.debug("...unified the '".concat(statementString, "' statement as an equality."));
            }
        }
    }
    return statementUnifiesAEquality;
}
function unifyStatementAsJudgement(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesAsJudgement = false;
    if (reference === null) {
        var judgement = (0, _statement.judgementFromStatement)(statement, context);
        if (judgement !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a judgement..."));
            statementUnifiesAsJudgement = true;
            if (statementUnifiesAsJudgement) {
                context.debug("...unified the '".concat(statementString, "' statement as a judgement."));
            }
        }
    }
    return statementUnifiesAsJudgement;
}
function unifyStatementAsTypeAssertion(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesAsTypeAssertion = false;
    if (reference === null) {
        var typeAssertion = (0, _statement.typeAssertionFromStatement)(statement, context);
        if (typeAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a type assertion..."));
            statementUnifiesAsTypeAssertion = true;
            context.debug("...unified the '".concat(statementString, "' statement as a type assertion."));
        }
    }
    return statementUnifiesAsTypeAssertion;
}
function unifyStatementAsPropertyAssertion(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesAsPropertyAssertion = false;
    if (reference === null) {
        var propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
        if (propertyAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a property assertion..."));
            var term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
            if (equivalence !== null) {
                var propertyAssertionMatches = equivalence.someOtherTerm(term, function(term) {
                    var propertyRelation = propertyAssertion.getPropertyRelation(), comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);
                    if (comparesToTermAndPropertyRelation) {
                        return true;
                    }
                });
                if (propertyAssertionMatches) {
                    statementUnifiesAsPropertyAssertion = true;
                }
            }
            if (statementUnifiesAsPropertyAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a property assertion."));
            }
        }
    }
    return statementUnifiesAsPropertyAssertion;
}
function unifyStatementWithSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
    var statementUnifiesWithSatisfiesAssertion = false;
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
        context.trace("Unifying the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
        var subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifies = satisfiesAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
        if (statementUnifies) {
            statementUnifiesWithSatisfiesAssertion = true;
        }
        if (statementUnifiesWithSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
        }
    }
    return statementUnifiesWithSatisfiesAssertion;
}
function compareStatementWithSubproofOrProofAssertions(statement, reference, satisfiesAssertion, context) {
    var statementEquatesWithStepOrSubproofs = false;
    if (reference === null) {
        var statementString = statement.getString();
        context.trace("Comparing the '".concat(statementString, "' statement with the subproofs or proof asssertions..."));
        var subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifiesWithSteps = statement.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);
        if (statementUnifiesWithSteps) {
            statementEquatesWithStepOrSubproofs = true;
        }
        if (statementEquatesWithStepOrSubproofs) {
            context.debug("...compared the '".concat(statementString, "' statement with the subproofs or proof asssertions."));
        }
    }
    return statementEquatesWithStepOrSubproofs;
}
var unifyStatements = [
    unifyStatementWithRule,
    unifyStatementWithReference,
    unifyStatementAsSatisfiesAssertion,
    unifyStatementWithTopLevelAssertion,
    unifyStatementAEquality,
    unifyStatementAsJudgement,
    unifyStatementAsTypeAssertion,
    unifyStatementAsPropertyAssertion,
    unifyStatementWithSatisfiesAssertion,
    compareStatementWithSubproofOrProofAssertions
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gcnVsZS51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSByZWZlcmVuY2UudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdGVwc09yU3VicHJvb2YudW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBheGlvbS51bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHVuaWZ5IHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYmVjYXVzZSBpdCBpcyBub3Qgc2F0aXNmaWFibGUuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICAgIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QUVxdWFsaXR5KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGNvbnRleHQuY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzID0gc3RhdGVtZW50LmNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMpIHtcbiAgICAgIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGNvbnN0IHVuaWZ5U3RhdGVtZW50cyA9IFtcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUnVsZSxcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlLFxuICB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRBRXF1YWxpdHksXG4gIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQsXG4gIHVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG5dO1xuIl0sIm5hbWVzIjpbInVuaWZ5U3RhdGVtZW50cyIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsInVuaWZ5U3RhdGVtZW50V2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc1dpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlIiwic3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInN5bnRoZXRpY2FsbHkiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJzdGVwc09yU3VicHJvb2YiLCJzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImF4aW9tU3RyaW5nIiwidW5pZnlTdGF0ZW1lbnRXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInVuaWZ5U3RhdGVtZW50QUVxdWFsaXR5Iiwic3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJ1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50Iiwic3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwiY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzIiwiY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThVYUE7OztlQUFBQTs7OzJCQTVVWTt5QkFDTTt1QkFFRDt5QkFLa0I7QUFFaEQsSUFBTSxBQUFFQyxnQkFBa0JDLHlCQUFjLENBQWhDRDtBQUVSLFNBQVNFLHVCQUF1QkMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixFQUFFQyxPQUFPO0lBQy9FLElBQUlDLDJCQUEyQjtJQUUvQixJQUFJSCxjQUFjLE1BQU07UUFDdEIsSUFBTUksT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNMO1FBRXpDLElBQUlJLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JULFVBQVVRLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGlCQUF3REgsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUVsRixJQUFNSSw0QkFBNEJSLFFBQVFTLDRCQUE0QixJQUNoRUMsNkNBQTZDUixLQUFLUywwQ0FBMEMsQ0FBQ2QsV0FBV1csMkJBQTJCUjtZQUV6SSxJQUFJVSw0Q0FBNEM7Z0JBQzlDVCwyQkFBMkI7WUFDN0I7WUFFQSxJQUFJQSwwQkFBMEI7Z0JBQzVCRCxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBMERSLE9BQXhDRSxpQkFBZ0IsMEJBQW1DLE9BQVhGLFlBQVc7WUFDdEY7UUFDRjtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNZLDRCQUE0QmhCLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsT0FBTztJQUNwRixJQUFJYyxnQ0FBZ0M7SUFFcEMsSUFBSWhCLGNBQWMsTUFBTTtR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