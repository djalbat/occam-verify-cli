"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/verify"));
var _elements = require("../elements");
var _unify = require("../process/unify");
var _instantiate = require("../process/instantiate");
var _metaTypeNames = require("../metaTypeNames");
var _node = require("../utilities/node");
var _brackets = require("../utilities/brackets");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Statement;
var match = _necessary.arrayUtilities.match, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var _default = (0, _elements.define)((_Statement = /*#__PURE__*/ function() {
    function Statement(string, node) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
    }
    _create_class(Statement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var singular = this.isSingular();
                if (singular) {
                    metavariableName = this.node.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                return this.node.isSingular();
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(statement) {
                var statementNode = statement.getNode(), matches = this.node.match(statementNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "isTermContained",
            value: function isTermContained(term, context) {
                var termContained;
                var termString = term.getString(), statementString = this.string; ///
                context.trace("Is the '".concat(termString, "' term contained in the '").concat(statementString, "' statement..."), this.node);
                var termNode = term.getNode(), statementNode = this.node, statementNodeTermNodes = statementNode.getTermNodes();
                termContained = statementNodeTermNodes.some(function(statementNodeTermNode) {
                    var termNodeMatchesStatementNodeTermNode = termNode.match(statementNodeTermNode);
                    if (termNodeMatchesStatementNodeTermNode) {
                        return true;
                    }
                });
                if (termContained) {
                    context.debug("...the '".concat(termString, "' term is contained in the '").concat(statementString, "' statement."), this.node);
                }
                return termContained;
            }
        },
        {
            key: "isFrameContained",
            value: function isFrameContained(frame, context) {
                var frameContained;
                var frameString = frame.getString(), statementString = this.string; ///
                context.trace("Is the '".concat(frameString, "' frame contained in the '").concat(statementString, "' statement..."), this.node);
                var frameNode = frame.getNode(), statementNode = this.node, statementNodeFrameNodes = statementNode.getFrameNodes();
                frameContained = statementNodeFrameNodes.some(function(statementNodeFrameNode) {
                    var frameNodeMatchesStatementNodeFrameNode = frameNode.match(statementNodeFrameNode);
                    if (frameNodeMatchesStatementNodeFrameNode) {
                        return true;
                    }
                });
                if (frameContained) {
                    context.debug("...the '".concat(frameString, "' frame is contained in the '").concat(statementString, "' statement."), this.node);
                }
                return frameContained;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable, context) {
                var metavariableEqualToMetavariable;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableA = metavariable, singularMetavariableNode = this.node.getSingularMetavariableNode(), metavariableName = singularMetavariableNode.getMetavariableName();
                    metavariable = context.findMetavariableByMetavariableName(metavariableName);
                    var metavariableB = metavariable, equalTo = metavariableA.isEqualTo(metavariableB);
                    metavariableEqualToMetavariable = equalTo; ///
                }
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                return this.node.match(statementNode);
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var _this = this;
                var verifies;
                var statementString = this.string; ///
                context.trace("Verifying the '".concat(statementString, "' statement..."), this.node);
                verifies = _verify.default.some(function(verifyMixin) {
                    var statement = _this, verifies = verifyMixin(statement, assignments, stated, context);
                    if (verifies) {
                        return true;
                    }
                });
                if (verifies) {
                    var statement = this; ///
                    context.addStatement(statement);
                    context.debug("...verified the '".concat(statementString, "' statement."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var metaTypeString = metaType.getString(), statementString = this.string; ///
                context.trace("Verifying the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type..."), this.node);
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type."), this.node);
                }
                return verifiesGivenMetaType;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies = false;
                var context = specificContext, statementNode = this.node, subproofAssertionNode = statementNode.getSubproofAssertionNode(), assertionNode = subproofAssertionNode; ///
                if (assertionNode !== null) {
                    var assertion = generalContext.findAssertionByAssertionNode(assertionNode), subproofAssertion = assertion; ///
                    var subproofString = subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                    var subproofStatements = subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                        if (statementUnifies) {
                            return true;
                        }
                    });
                    if (subproofUnifies) {
                        context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
                specificContext.trace("Unifying the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement..."));
                statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiesIndependently = false;
                var context = specificContext, statementString = this.string; ///
                context.trace("Unifying the '".concat(statementString, "' statement independently..."));
                var statementNode = this.node, definedAssertionNode = statementNode.getDefinedAssertionNode(), containedAssertionNode = statementNode.getContainedAssertionNode();
                if (definedAssertionNode !== null || containedAssertionNode !== null) {
                    var assertionNode = definedAssertionNode || containedAssertionNode, assertion = generalContext.findAssertionByAssertionNode(assertionNode), assertionUnifiesIndependently = assertion.unifyIndependently(substitutions, generalContext, specificContext);
                    if (assertionUnifiesIndependently) {
                        unifiesIndependently = true;
                    }
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(statementString, "' statement independently."));
                }
                return unifiesIndependently;
            }
        },
        {
            key: "equateWithStepsOrSubproofs",
            value: function equateWithStepsOrSubproofs(stepsOrSubproofs, context) {
                var _this = this;
                var equatesWithStepsOrSubproofs;
                equatesWithStepsOrSubproofs = backwardsSome(stepsOrSubproofs, function(stepOrSubproof) {
                    var statement = _this, statementUnifies = stepOrSubproof.equateWithStatement(statement, context);
                    if (statementUnifies) {
                        return true;
                    }
                });
                return equatesWithStepsOrSubproofs;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var string = this.string, json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var string = json.string, statmentNode = (0, _instantiate.instantiateStatement)(string, context), node = statmentNode, statement = new Statement(string, node);
                return statement;
            }
        },
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var statement = null;
                var statementNode = stepNode.getStatementNode();
                if (statementNode !== null) {
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, context) {
                var statement = null;
                var statementNode = premiseNode.getStatementNode();
                if (statementNode !== null) {
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var statement = (0, _node.statementFromStatementNode)(statementNode, context);
                return statement;
            }
        },
        {
            key: "fromDeductionNode",
            value: function fromDeductionNode(deductionNode, context) {
                var statement = null;
                var statementNode = deductionNode.getStatementNode();
                if (statementNode !== null) {
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromHypothesisNode",
            value: function fromHypothesisNode(hypothesisNode, context) {
                var statement = null;
                var statementNode = hypothesisNode.getStatementNode();
                if (statementNode !== null) {
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, context) {
                var statement = null;
                var statementNode = conclusionNode.getStatementNode();
                if (statementNode !== null) {
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromAssumptionNode",
            value: function fromAssumptionNode(assumptionNode, context) {
                var statement = null;
                var statementNode;
                statementNode = assumptionNode.getStatementNode(); ///
                if (statementNode !== null) {
                    statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, context) {
                var statement = null;
                var statementNode = suppositionNode.getStatementNode();
                if (statementNode !== null) {
                    statement = (0, _node.statementFromStatementNode)(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
                var statementNode = combinatorDeclarationNode.getStatementNode(), statement = (0, _node.statementFromStatementNode)(statementNode, context);
                return statement;
            }
        }
    ]);
    return Statement;
}(), _define_property(_Statement, "name", "Statement"), _Statement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB2ZXJpZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHsgcmV0dXJuIHRoaXMubm9kZS5pc1Npbmd1bGFyKCk7IH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZVRlcm1Ob2RlID0gdGVybU5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVUZXJtTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVDb250YWluZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVOb2RlcygpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnROb2RlRnJhbWVOb2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlID0gZnJhbWVOb2RlLm1hdGNoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVGcmFtZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpXG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsXG4gICAgICAgICAgICBlcXVhbFRvID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBlcXVhbFRvOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkgeyByZXR1cm4gdGhpcy5ub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7ICAvLy9cblxuICAgIGlmIChhc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NlcnRpb24gPSBnZW5lcmFsQ29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB8fCAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGUgPSAoZGVmaW5lZEFzc2VydGlvbk5vZGUgfHwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBnZW5lcmFsQ29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG5cbiAgICBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMgPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YuZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBzdGF0bWVudE5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0bWVudE5vZGUsICAvLy8sXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGh5cG90aGVzaXNOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgbGV0IHN0YXRlbWVudE5vZGU7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiZGVmaW5lIiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJtYXRjaGVzIiwiZXF1YWxUbyIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJjb250ZXh0IiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInNvbWUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlVGVybU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJmcmFtZU5vZGUiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVGcmFtZU5vZGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVCIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwiYWRkU3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwT3JTdWJwcm9vZiIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0bWVudE5vZGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzaXNOb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJmcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7Ozt5QkFiK0I7NkRBRU47d0JBRUY7cUJBQ1E7MkJBQ007NkJBQ0k7b0JBQ0U7d0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0lBRWYsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJO2dDQURFRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1pELG1CQUFtQixJQUFJLENBQUNKLElBQUksQ0FBQ0csbUJBQW1CO2dCQUNsRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFlLE9BQU8sSUFBSSxDQUFDTixJQUFJLENBQUNNLFVBQVU7WUFBSTs7O1lBRTlDQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsU0FBUztnQkFDakIsSUFBTUMsZ0JBQWdCRCxVQUFVTixPQUFPLElBQ2pDUSxVQUFVLElBQUksQ0FBQ1Ys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