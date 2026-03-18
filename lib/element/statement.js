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
const _occamlanguages = require("occam-languages");
const _necessary = require("necessary");
const _elements = require("../elements");
const _unify = require("../process/unify");
const _validation = require("../utilities/validation");
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
const { backwardsSome } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Statement extends _occamlanguages.Element {
    getStatementNode() {
        const node = this.getNode(), statementNode = node; ///
        return statementNode;
    }
    getMetavariableName() {
        const sttaementNode = this.getStatementNode(), metavariableName = sttaementNode.getMetavariableName();
        return metavariableName;
    }
    isSingular() {
        const statementNode = this.getStatementNode(), singular = statementNode.isSingular();
        return singular;
    }
    isEqualTo(statement) {
        const statementNode = statement.getNode(), statementNodeMatches = this.matchStatementNode(statementNode), equalTo = statementNodeMatches; ///
        return equalTo;
    }
    matchStatementNode(statementNode) {
        const node = statementNode, nodeMatches = this.matchNode(node), statementNodeMatches = nodeMatches; ///
        return statementNodeMatches;
    }
    compareParameter(parameter) {
        let comparesToParamter = false;
        const singular = this.isSingular();
        if (singular) {
            const parameterName = parameter.getName();
            if (parameterName !== null) {
                const metavariableName = this.getMetavariableName();
                if (parameterName === metavariableName) {
                    comparesToParamter = true;
                }
            }
        }
        return comparesToParamter;
    }
    compareMetavariable(metavariable) {
        let comparesToMetavariableName;
        const singular = this.isSingular();
        if (singular) {
            let metavariableName;
            metavariableName = metavariable.getName();
            const metavariableNameA = metavariableName; ///
            metavariableName = this.getMetavariableName();
            const metavariableNameB = metavariableName; ///
            comparesToMetavariableName = metavariableNameA === metavariableNameB;
        }
        return comparesToMetavariableName;
    }
    compareMetavariableName(metavariableName) {
        let comparesToMetavariableName = false;
        const singular = this.isSingular();
        if (singular) {
            const metavariableNameA = metavariableName ///
            ;
            metavariableName = this.getMetavariableName();
            const metavariableNameB = metavariableName; ///
            comparesToMetavariableName = metavariableNameA === metavariableNameB;
        }
        return comparesToMetavariableName;
    }
    compareSubproofOrProofAssertions(subproofOrProofAssertions, context) {
        let comparesToSubproofOrProofAssertions;
        comparesToSubproofOrProofAssertions = backwardsSome(subproofOrProofAssertions, (subproofOrProofAssertion)=>{
            const statement = this, subproofOrProofAssertionComparesToStatement = subproofOrProofAssertion.compareStatement(statement, context);
            if (subproofOrProofAssertionComparesToStatement) {
                return true;
            }
        });
        return comparesToSubproofOrProofAssertions;
    }
    findValidStatment(context) {
        const statementNode = this.getStatementNode(), statement = context.findStatementByStatementNode(statementNode), validStatement = statement; ///
        return validStatement;
    }
    isTermContained(term, context) {
        let termContained;
        const termString = term.getString(), statementString = this.getString(); ///
        context.trace(`Is the '${termString}' term contained in the '${statementString}' statement...`);
        const statementNode = this.getStatementNode(), statementNodeTermNodes = statementNode.getTermNodes();
        termContained = statementNodeTermNodes.some((statementNodeTermNode)=>{
            const statementNodeTermNodeMatches = term.matchTermNode(statementNodeTermNode);
            if (statementNodeTermNodeMatches) {
                return true;
            }
        });
        if (termContained) {
            context.debug(`...the '${termString}' term is contained in the '${statementString}' statement.`);
        }
        return termContained;
    }
    isFrameContained(frame, context) {
        let frameContained;
        const frameString = frame.getString(), statementString = this.getString(); ///
        context.trace(`Is the '${frameString}' frame contained in the '${statementString}' statement...`);
        const statementNode = this.getStatementNode(), statementNodeFrameNodes = statementNode.getFrameNodes();
        frameContained = statementNodeFrameNodes.some((statementNodeFrameNode)=>{
            const statementNodeFrameNodeMatches = frame.matchNode(statementNodeFrameNode);
            if (statementNodeFrameNodeMatches) {
                return true;
            }
        });
        if (frameContained) {
            context.debug(`...the '${frameString}' frame is contained in the '${statementString}' statement.`);
        }
        return frameContained;
    }
    validate(stated, context) {
        let statement = null;
        const statementString = this.getString(); ///
        context.trace(`Validating the '${statementString}' statement...`);
        const validStatement = this.findValidStatment(context);
        if (validStatement !== null) {
            statement = validStatement; ///
            context.debug(`...the '${statementString}' statement is already valid.`);
        } else {
            const validates = _validation.validateStatements.some((validateStatement)=>{
                const statement = this, statementValidates = validateStatement(statement, stated, context);
                if (statementValidates) {
                    return true;
                }
            });
            if (validates) {
                statement = this; ///
                context.addStatement(statement);
                context.debug(`...validated the '${statementString}' statement.`);
            }
        }
        return statement;
    }
    unifySubproof(subproof, generalContext, specificContext) {
        let subproofUnifies = false;
        const statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
        if (subproofAssertionNode !== null) {
            const context = generalContext, subproofString = subproof.getString(), statementString = this.getString();
            context.trace(`Unifying the '${subproofString}' subproof with the '${statementString}' statement...`);
            const subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
            subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, specificContext);
            if (subproofUnifies) {
                context.debug(`...unified the '${subproofString}' subproof with the '${statementString}' statement.`);
            }
        }
        return subproofUnifies;
    }
    unifyDeduction(deduction, generalContext, specificContext) {
        let deductionUnifies = false;
        const statementString = this.getString(), deductionString = deduction.getString(), deductionStatement = deduction.getStatement(), deductionStatementString = deductionStatement.getString();
        let context;
        context = specificContext; ///
        context.trace(`Unifying the '${deductionString}' deduction's '${deductionStatementString}' statement with the '${statementString}' statement...`);
        context = deduction.getContext();
        specificContext = context; ///
        (0, _context.reconcile)((specificContext)=>{
            const deductionStatementUnfies = this.unifyStatement(deductionStatement, generalContext, specificContext);
            if (deductionStatementUnfies) {
                specificContext.commit();
                deductionUnifies = true;
            }
        }, specificContext);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction's '${deductionStatementString}' statement with the '${statementString}' statement.`);
        }
        return deductionUnifies;
    }
    unifyStatement(statement, generalContext, specificContext) {
        let statementUnifies;
        const context = specificContext, generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
        context.trace(`Unifying the '${specificStatementString}' statement with the '${generalStatementString}' statement...`);
        statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, generalContext, specificContext);
        if (statementUnifies) {
            context.debug(`...unified the '${specificStatementString}' statement with the '${generalStatementString}' statement.`);
        }
        return statementUnifies;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently = false;
        const context = specificContext, statementString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement independently...`);
        const statementNode = this.getStatementNode(), definedAssertionNode = statementNode.getDefinedAssertionNode(), containedAssertionNode = statementNode.getContainedAssertionNode();
        if (definedAssertionNode !== null) {
            const context = generalContext, definedAssertion = context.findAssertionByAssertionNode(definedAssertionNode), definedAssertionUnifiesIndependently = definedAssertion.unifyIndependently(generalContext, specificContext);
            if (definedAssertionUnifiesIndependently) {
                unifiesIndependently = true;
            }
        }
        if (containedAssertionNode !== null) {
            const context = generalContext, containedAssertion = context.findAssertionByAssertionNode(containedAssertionNode), containedAssertionUnifiesIndependently = containedAssertion.unifyIndependently(generalContext, specificContext);
            if (containedAssertionUnifiesIndependently) {
                unifiesIndependently = true;
            }
        }
        if (unifiesIndependently) {
            context.debug(`...unified the '${statementString}' statement independently.`);
        }
        return unifiesIndependently;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, generalContext, specificContext) {
        let topLevelMetaAssertionUnifies = false;
        const context = specificContext, statementString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement...`);
        const topLevelMetaAssertionUnconditional = topLevelMetaAssertion.isUnconditional();
        if (topLevelMetaAssertionUnconditional) {
            const deduction = topLevelMetaAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
            if (deductionUnifies) {
                topLevelMetaAssertionUnifies = true;
            }
        } else {
            const statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
            if (subproofAssertionNode !== null) {
                const context = generalContext, subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
                topLevelMetaAssertionUnifies = subproofAssertion.unifyTopLevelMetaAssertion(topLevelMetaAssertion, generalContext, specificContext);
            }
        }
        if (topLevelMetaAssertionUnifies) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement.`);
        }
        return topLevelMetaAssertionUnifies;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Statement";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, statementNode = (0, _instantiate.instantiateStatement)(string, context), node = statementNode; ///
            context = null;
            const statement = new Statement(context, string, node);
            return statement;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBzdHRhZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN0dGFlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3RhdGVtZW50ID0gdGhpcy5maW5kVmFsaWRTdGF0bWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gdmFsaWRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlU3RhdGVtZW50cy5zb21lKCh2YWxpZGF0ZVN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmcgPSBkZWR1Y3Rpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24ncyAnJHtkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KGRlZHVjdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCgpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuY29uZGl0aW9uYWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5jb25kaXRpb25hbCkge1xuICAgICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN0YXRlbWVudCIsIkVsZW1lbnQiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0dGFlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb250ZXh0IiwiY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsImZpbmRWYWxpZFN0YXRtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInZhbGlkU3RhdGVtZW50IiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsImFkZFN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmciLCJnZXRDb250ZXh0IiwicmVjb25jaWxlIiwiZGVkdWN0aW9uU3RhdGVtZW50VW5maWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJjb21taXQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwiZ2V0RGVkdWN0aW9uIiwidG9KU09OIiwic3RyaW5nIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjsyQkFDTzswQkFFUjt1QkFDUTs0QkFDSTs2QkFDRTt5QkFDRTtBQUV2QyxNQUFNLEVBQUVBLGFBQWEsRUFBRSxHQUFHQyx5QkFBYztNQUV4QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkRDLG1CQUFtQjtRQUNqQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJ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