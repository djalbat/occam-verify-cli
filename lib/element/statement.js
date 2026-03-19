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
    unifyDeduction(deduction, context) {
        let deductionUnifies = false;
        const statementString = this.getString(), deductionString = deduction.getString(), deductionContext = deduction.getContext(), deductionStatement = deduction.getStatement();
        context.trace(`Unifying the '${deductionString}' deduction with the '${statementString}' statement...`);
        const generalContext = context, specificContext = deductionContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const deductionStatementUnifies = this.unifyStatement(deductionStatement, generalContext, specificContext);
                if (deductionStatementUnifies) {
                    specificContext.commit(context);
                    deductionUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction with the '${statementString}' statement.`);
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
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelAssertionUnifies = false;
        const statementString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement...`);
        const unconditional = topLevelMetaAssertion.isUnconditional();
        if (unconditional) {
            const deduction = topLevelMetaAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, context);
            if (deductionUnifies) {
                topLevelAssertionUnifies = true;
            }
        } else {
            const statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
            if (subproofAssertionNode !== null) {
                const subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
                topLevelAssertionUnifies = subproofAssertion.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
            }
        }
        if (topLevelAssertionUnifies) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement.`);
        }
        return topLevelAssertionUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgam9pbiwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBzdHRhZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN0dGFlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3RhdGVtZW50ID0gdGhpcy5maW5kVmFsaWRTdGF0bWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gdmFsaWRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlU3RhdGVtZW50cy5zb21lKCh2YWxpZGF0ZVN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvbkNvbnRleHQgPSBkZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGRlZHVjdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoZGVkdWN0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBkZWZpbmVkQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZmluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdGF0ZW1lbnQiLCJFbGVtZW50IiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdHRhZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiY29udGV4dCIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJmaW5kVmFsaWRTdGF0bWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJ2YWxpZFN0YXRlbWVudCIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJ0ZXJtQ29udGFpbmVkIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInNvbWUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVzIiwiZ2V0RnJhbWVOb2RlcyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGUiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcyIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnRzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJhZGRTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwiZGVkdWN0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJqb2luIiwicmVjb25jaWxlIiwiZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiY29tbWl0Iiwic3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwiZ2V0RGVkdWN0aW9uIiwidG9KU09OIiwic3RyaW5nIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjsyQkFDTzswQkFFUjt1QkFDUTs0QkFDSTs2QkFDRTt5QkFDUTtBQUU3QyxNQUFNLEVBQUVBLGFBQWEsRUFBRSxHQUFHQyx5QkFBYztNQUV4QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkRDLG1CQUFtQjtRQUNqQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsZ0JBQWdCRixNQUFNLEdBQUc7UUFFL0IsT0FBT0U7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0wsZ0JBQWdCLElBQ3JDTSxtQkFBbUJELGNBQWNELG1CQUFtQjtRQUUxRCxPQUFPRTtJQUNUO0lBRUFDLGFBQWE7UUFDWCxNQUFNSixnQkFBZ0IsSUFBSSxDQUFDSCxnQkFBZ0IsSUFDckNRLFdBQVdMLGNBQWNJLFVBQVU7UUFFekMsT0FBT0M7SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTVAsZ0JBQWdCTyxVQUFVUixPQUFPLElBQ2pDUyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1QsZ0JB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