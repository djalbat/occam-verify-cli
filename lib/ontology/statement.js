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
var _ontology = require("../ontology");
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
var _default = (0, _ontology.define)((_Statement = /*#__PURE__*/ function() {
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
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var statement = null;
                var statementNode = containedAssertionNode.getStatementNode();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5ub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7IHJldHVybiB0aGlzLm5vZGUuaXNTaW5ndWxhcigpOyB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVUZXJtTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlcygpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVUZXJtTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlVGVybU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lTm9kZXMoKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZUZyYW1lTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUEgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuXG4gICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gZXF1YWxUbzsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlOyAgLy8vXG5cbiAgICBpZiAoYXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkgfHwgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBhc3NlcnRpb25Ob2RlID0gKGRlZmluZWRBc3NlcnRpb25Ob2RlIHx8IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIGVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YXRlc1dpdGhTdGVwc09yU3VicHJvb2ZzO1xuXG4gICAgZXF1YXRlc1dpdGhTdGVwc09yU3VicHJvb2ZzID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN0ZXBPclN1YnByb29mLmVxdWF0ZVdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXF1YXRlc1dpdGhTdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdG1lbnROb2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdG1lbnROb2RlLCAgLy8vLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsImRlZmluZSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibWF0Y2hlcyIsImVxdWFsVG8iLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUEiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlQiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsImFkZFN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwiZXF1YXRlc1dpdGhTdGVwc09yU3VicHJvb2ZzIiwic3RlcE9yU3VicHJvb2YiLCJlcXVhdGVXaXRoU3RhdGVtZW50IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdG1lbnROb2RlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnQiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJmcm9tSHlwb3RoZXNpc05vZGUiLCJoeXBvdGhlc2lzTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiZnJvbUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7Ozt5QkFiK0I7NkRBRU47d0JBRUY7cUJBQ1E7MkJBQ007NkJBQ0k7b0JBQ0U7d0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0lBRWYsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJO2dDQURFRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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