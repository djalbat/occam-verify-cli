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
const _elements = require("../elements");
const _context = require("../utilities/context");
const _unify = require("../process/unify");
const _validation = require("../utilities/validation");
const _instantiate = require("../process/instantiate");
const _breakPoint = require("../utilities/breakPoint");
const _default = (0, _elements.define)(class Statement extends _occamlanguages.Element {
    getStatementNode() {
        const node = this.getNode(), statementNode = node; ///
        return statementNode;
    }
    getTermSubstitutionNode() {
        const statementNode = this.getNode(), termSubstitutionNode = statementNode.getTermSubstitutionNode();
        return termSubstitutionNode;
    }
    getFrameSubstitutionNode() {
        const statementNode = this.getNode(), frameSubstitutionNode = statementNode.getFrameSubstitutionNode();
        return frameSubstitutionNode;
    }
    getMetavariableNode() {
        let metavariableNode = null;
        const singular = this.isSingular();
        if (singular) {
            const statementNode = this.getStatementNode();
            metavariableNode = statementNode.getMetavariableNode();
        }
        return metavariableNode;
    }
    getMetavariableName() {
        let metavariableName = null;
        const singular = this.isSingular();
        if (singular) {
            const statementNode = this.getStatementNode(), metavariableNode = statementNode.getMetavariableNode();
            metavariableName = metavariableNode.getMetavariableName();
        }
        return metavariableName;
    }
    isEqualTo(statement) {
        const statementNode = statement.getNode(), statementNodeMatches = this.matchStatementNode(statementNode), equalTo = statementNodeMatches; ///
        return equalTo;
    }
    isSingular() {
        const statementNode = this.getStatementNode(), singular = statementNode.isSingular();
        return singular;
    }
    matchStatementNode(statementNode) {
        const node = statementNode, nodeMatches = this.matchNode(node), statementNodeMatches = nodeMatches; ///
        return statementNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        let metavariableNodeMatches = false;
        const singular = this.isSingular();
        if (singular) {
            const metavariableNodeA = metavariableNode, statementNode = this.getStatementNode();
            metavariableNode = statementNode.getMetavariableNode();
            const metavariableNodeB = metavariableNode, metavariableNodeAMatchesMetavariableNodeB = metavariableNodeA.match(metavariableNodeB);
            if (metavariableNodeAMatchesMetavariableNodeB) {
                metavariableNodeMatches = true;
            }
        }
        return metavariableNodeMatches;
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
    findValidStatement(context) {
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
    validate(context) {
        let statement = null;
        const statementString = this.getString(); ///
        context.trace(`Validating the '${statementString}' statement...`);
        let validates;
        const validStatement = this.findValidStatement(context);
        if (validStatement !== null) {
            validates = true;
            statement = validStatement; ///
            context.debug(`...the '${statementString}' statement is already valid.`);
        } else {
            validates = _validation.validateStatements.some((validateStatement)=>{
                const statement = this, statementValidates = validateStatement(statement, context);
                if (statementValidates) {
                    return true;
                }
            });
            if (validates) {
                statement = this; ///
                context.addStatement(statement);
            }
        }
        if (validates) {
            context.debug(`...validated the '${statementString}' statement.`);
        }
        return statement;
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
        const statementNode = this.getStatementNode(), typeAssertionNode = statementNode.getTypeAssertionNode(), definedAssertionNode = statementNode.getDefinedAssertionNode(), containedAssertionNode = statementNode.getContainedAssertionNode();
        if (typeAssertionNode !== null) {
            const context = generalContext, typeAssertion = context.findAssertionByAssertionNode(typeAssertionNode), typeAssertionUnifiesIndependently = typeAssertion.unifyIndependently(generalContext, specificContext);
            if (typeAssertionUnifiesIndependently) {
                unifiesIndependently = true;
            }
        }
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
    static name = "Statement";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, statementNode = (0, _instantiate.instantiateStatement)(string, context), node = statementNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json);
            context = null;
            const statement = new Statement(context, string, node, breakPoint);
            return statement;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBzdGF0ZW1lbnROb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQS5tYXRjaChtZXRhdmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQikge1xuICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBmaW5kVmFsaWRTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlVGVybU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZXMoKTtcblxuICAgIHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnROb2RlVGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHN0YXRlbWVudE5vZGVUZXJtTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1Db250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVDb250YWluZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lTm9kZXMoKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVDb250YWluZWQ7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCB2YWxpZFN0YXRlbWVudCA9IHRoaXMuZmluZFZhbGlkU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzdGF0ZW1lbnQgPSB2YWxpZFN0YXRlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnRzLnNvbWUoKHZhbGlkYXRlU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFN0cmluZyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmcgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHR5cGVBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdHlwZUFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHlwZUFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBjb250YWluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgc3RyaW5nLFxuICAgICAgYnJlYWtQb2ludFxuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RhdGVtZW50IiwiRWxlbWVudCIsImdldFN0YXRlbWVudE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsImZpbmRWYWxpZFN0YXRlbWVudCIsImNvbnRleHQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwidmFsaWRTdGF0ZW1lbnQiLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50cyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiYWRkU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsIm5hbWUiLCJ0b0pTT04iLCJzdHJpbmciLCJicmVha1BvaW50IiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRl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