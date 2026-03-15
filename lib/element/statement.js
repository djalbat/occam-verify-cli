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
        const statement = (0, _context.instantiate)((context)=>{
            const { string } = json, statementNode = (0, _instantiate.instantiateStatement)(string, context), node = statementNode; ///
            context = null;
            const statement = new Statement(context, string, node);
            return statement;
        }, context);
        return statement;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBzdHRhZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN0dGFlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3RhdGVtZW50ID0gdGhpcy5maW5kVmFsaWRTdGF0bWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gdmFsaWRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlU3RhdGVtZW50cy5zb21lKCh2YWxpZGF0ZVN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmcgPSBkZWR1Y3Rpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24ncyAnJHtkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KGRlZHVjdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMpIHtcbiAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24ncyAnJHtkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFN0cmluZyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmcgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBjb250YWluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5jb25kaXRpb25hbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3RhdGVtZW50IiwiRWxlbWVudCIsImdldFN0YXRlbWVudE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3R0YWVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbnRleHQiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50IiwiZmluZFZhbGlkU3RhdG1lbnQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwidmFsaWRTdGF0ZW1lbnQiLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50cyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiYWRkU3RhdGVtZW50IiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImRlZHVjdGlvblN0cmluZyIsImRlZHVjdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudFN0cmluZyIsImdldENvbnRleHQiLCJyZWNvbmNpbGUiLCJkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJnZXREZWR1Y3Rpb24iLCJ0b0pTT04iLCJzdHJpbmciLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzJCQUNPOzBCQUVSO3VCQUNROzRCQUNJOzZCQUNFO3lCQUNFO0FBRXZDLE1BQU0sRUFBRUEsYUFBYSxFQUFFLEdBQUdDLHlCQUFjO01BRXhDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuREMsbUJBQW1CO1FBQ2pCLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxnQkFB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