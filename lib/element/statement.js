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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBzdHRhZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN0dGFlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3RhdGVtZW50ID0gdGhpcy5maW5kVmFsaWRTdGF0bWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gdmFsaWRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlU3RhdGVtZW50cy5zb21lKCh2YWxpZGF0ZVN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmcgPSBkZWR1Y3Rpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24ncyAnJHtkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KGRlZHVjdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb25TdGF0ZW1lbnRVbmZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCgpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN0YXRlbWVudCIsIkVsZW1lbnQiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0dGFlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb250ZXh0IiwiY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsImZpbmRWYWxpZFN0YXRtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInZhbGlkU3RhdGVtZW50IiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsImFkZFN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmciLCJnZXRDb250ZXh0IiwicmVjb25jaWxlIiwiZGVkdWN0aW9uU3RhdGVtZW50VW5maWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJjb21taXQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ0b0pTT04iLCJzdHJpbmciLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzJCQUNPOzBCQUVSO3VCQUNROzRCQUNJOzZCQUNFO3lCQUNFO0FBRXZDLE1BQU0sRUFBRUEsYUFBYSxFQUFFLEdBQUdDLHlCQUFjO01BRXhDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJ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