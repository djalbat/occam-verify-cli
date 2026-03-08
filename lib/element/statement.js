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
const _context = require("../utilities/context");
const _unify = require("../process/unify");
const _validation = require("../utilities/validation");
const _instantiate = require("../process/instantiate");
const { match, backwardsSome } = _necessary.arrayUtilities;
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
    matchStatementNode(statementNode) {
        const node = statementNode, nodeMatches = this.matchNode(node), statementNodeMatches = nodeMatches; ///
        return statementNodeMatches;
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
    findValidStatment(context) {
        const statementNode = this.getStatementNode(), statement = context.findStatementByStatementNode(statementNode), validStatement = statement; ///
        return validStatement;
    }
    isEqualTo(statement) {
        const statementNode = statement.getNode(), statementNodeMatches = this.matchStatementNode(statementNode), equalTo = statementNodeMatches; ///
        return equalTo;
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
        const statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode(), assertionNode = subproofAssertionNode; ///
        if (assertionNode !== null) {
            const context = generalContext, assertion = context.findAssertionByAssertionNode(assertionNode), subproofAssertion = assertion; ///
            const subproofString = subproof.getString(), subproofAssertionString = subproofAssertion.getString();
            context.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);
            const subproofStatements = subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
            subproofUnifies = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement)=>{
                const generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, generalContext, specificContext);
                if (statementUnifies) {
                    return true;
                }
            });
            if (subproofUnifies) {
                context.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
            }
        }
        return subproofUnifies;
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
        if (definedAssertionNode !== null || containedAssertionNode !== null) {
            const context = generalContext, assertionNode = definedAssertionNode || containedAssertionNode, assertion = context.findAssertionByAssertionNode(assertionNode), assertionUnifiesIndependently = assertion.unifyIndependently(generalContext, specificContext);
            if (assertionUnifiesIndependently) {
                unifiesIndependently = true;
            }
        }
        if (unifiesIndependently) {
            context.debug(`...unified the '${statementString}' statement independently.`);
        }
        return unifiesIndependently;
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
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Statement";
    static fromJSON(json, context) {
        const statement = (0, _context.literally)((context)=>{
            const { string } = json, statementNode = (0, _instantiate.instantiateStatement)(string, context), node = statementNode; ///
            context = null;
            const statement = new Statement(context, string, node);
            return statement;
        }, context);
        return statement;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBzdHRhZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN0dGFlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVUZXJtTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlcygpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVOb2RlcygpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnROb2RlRnJhbWVOb2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hOb2RlKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRTdGF0ZW1lbnQgPSB0aGlzLmZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB2YWxpZFN0YXRlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnRzLnNvbWUoKHZhbGlkYXRlU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnQsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZTsgIC8vL1xuXG4gICAgaWYgKGFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZXMgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB8fCAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gKGRlZmluZWRBc3NlcnRpb25Ob2RlIHx8IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN0YXRlbWVudCIsIkVsZW1lbnQiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0dGFlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiZmluZFZhbGlkU3RhdG1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInZhbGlkU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJ0ZXJtQ29udGFpbmVkIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInNvbWUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVzIiwiZ2V0RnJhbWVOb2RlcyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGUiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50cyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiYWRkU3RhdGVtZW50IiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJ0b0pTT04iLCJzdHJpbmciLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjsyQkFDTzswQkFFUjt5QkFDRzt1QkFDSzs0QkFDSTs2QkFDRTtBQUVyQyxNQUFNLEVBQUVBLEtBQUssRUFBRUMsYUFBYSxFQUFFLEdBQUdDLHlCQUFjO01BRS9DLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuREMsbUJBQW1CO1FBQ2pCLE1BQU1D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