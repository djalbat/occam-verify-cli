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
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(assumptionNode, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50LCBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50LCBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChzdGF0ZW1lbnRTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVUZXJtTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlcygpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVUZXJtTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlVGVybU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lTm9kZXMoKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZUZyYW1lTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnROb2RlRnJhbWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7IH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZXMgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB2ZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHk7IC8vL1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG5cbiAgICBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMgPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RlcE9yU3VicHJvb2YuZXF1YXRlV2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50UGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJkZWZpbmUiLCJTdGF0ZW1lbnQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImVxdWFsVG8iLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudE5vZGVUZXJtTm9kZSIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsImZyYW1lTm9kZSIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVzIiwiZ2V0RnJhbWVOb2RlcyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsImFkZFN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwiY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJlcXVhdGVzV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwT3JTdWJwcm9vZiIsImVxdWF0ZVdpdGhTdGF0ZW1lbnQiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzaXNOb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7O3lCQWQrQjs2REFFTjtnRUFDVzt3QkFFYjsyQkFDUTs2QkFDVTtvQkFDRTt3QkFDSTt1QkFDZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0lBRWYsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRE5IO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7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