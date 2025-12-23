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
var _context = require("../utilities/context");
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
            key: "isEqualTo",
            value: function isEqualTo(statement) {
                var statementString = statement.getString(), equalTo = statementString === this.string;
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
                var context = specificContext, statement = this, subproofAssertion = (0, _context.subproofAssertionFromStatement)(statement, context);
                if (subproofAssertion !== null) {
                    var subproofString = subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                    var subproofStatements = subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                        if (statementUnifies) {
                            return true;
                        }
                    });
                    if (subproofUnifies) {
                        specificContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
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
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var statement = this, statementString = this.string; ///
                context.trace("Unifying the '".concat(statementString, "' statement independently..."));
                var definedAssertion = (0, _context.definedAssertionFromStatement)(statement, context), containedAssertion = (0, _context.containedAssertionFromStatement)(statement, context);
                if (definedAssertion !== null) {
                    var definedAssertionUnifiesIndependently = definedAssertion.unifyIndependently(substitutions, context);
                    unifiesIndependently = definedAssertionUnifiesIndependently; ///
                }
                if (containedAssertion !== null) {
                    var containedAssertionUnifiesIndependently = containedAssertion.unifyIndependently(substitutions, context);
                    unifiesIndependently = containedAssertionUnifiesIndependently; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50LCBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50LCBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChzdGF0ZW1lbnRTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVUZXJtTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlcygpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVUZXJtTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlVGVybU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lTm9kZXMoKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZUZyYW1lTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7IH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZXMgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB2ZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHk7IC8vL1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG5cbiAgICBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMgPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YuZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50UGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsImRlZmluZSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZXF1YWxUbyIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJjb250ZXh0IiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwiYWRkU3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsImVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsImVxdWF0ZXNXaXRoU3RlcHNPclN1YnByb29mcyIsInN0ZXBPclN1YnByb29mIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsIlN0YXRlbWVudFBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiZnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNpc05vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7Ozt5QkFkK0I7NkRBRU47Z0VBQ1c7d0JBRWI7MkJBQ1E7NkJBQ1U7b0JBQ0U7d0JBQ0k7dUJBQ2dFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBUUEsUUFBeUJDLHlCQUFjLENBQXZDRCxPQUFPRSxnQkFBa0JELHlCQUFjLENBQWhDQztJQUVmLFdBQWVDLElBQUFBLGdCQUFNLDhCQUFDO2FBQU1DLFVBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dDQUROSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lB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