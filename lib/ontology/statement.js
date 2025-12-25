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
var _statement = /*#__PURE__*/ _interop_require_default(require("../context/partial/statement"));
var _ontology = require("../ontology");
var _unification = require("../utilities/unification");
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
    function Statement(string, node, tokens) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
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
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                return this.node.isSimple();
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
                        var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
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
                statementUnifies = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
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
                var string = json.string, lexer = context.getLexer(), parser = context.getParser(), statementPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementPartialContext.getNode(), tokens = statementPartialContext.getTokens(), statement = new Statement(string, node, tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgeyBtYXRjaCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzU2ltcGxlKCkgeyByZXR1cm4gdGhpcy5ub2RlLmlzU2ltcGxlKCk7fVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlVGVybU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZXMoKTtcblxuICAgIHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnROb2RlVGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlVGVybU5vZGUgPSB0ZXJtTm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1Db250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVGcmFtZU5vZGUgPSBmcmFtZU5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVDb250YWluZWQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkgeyByZXR1cm4gdGhpcy5ub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7ICAvLy9cblxuICAgIGlmIChhc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NlcnRpb24gPSBnZW5lcmFsQ29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB8fCAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGUgPSAoZGVmaW5lZEFzc2VydGlvbk5vZGUgfHwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBnZW5lcmFsQ29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG5cbiAgICBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMgPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YuZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50UGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsImRlZmluZSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNTaW1wbGUiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibWF0Y2hlcyIsImVxdWFsVG8iLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwiYWRkU3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwT3JTdWJwcm9vZiIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzaXNOb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJmcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7O3lCQWIrQjs2REFFTjtnRUFDVzt3QkFFYjsyQkFDUTs2QkFDVTtvQkFDRTt3QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQVFBLFFBQXlCQyx5QkFBYyxDQUF2Q0QsT0FBT0UsZ0JBQWtCRCx5QkFBYyxDQUFoQ0M7SUFFZixXQUFlQyxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FETkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2Qs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