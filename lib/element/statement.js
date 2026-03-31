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
const _unify = require("../process/unify");
const _validation = require("../utilities/validation");
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
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
    validate(context) {
        let statement = null;
        const statementString = this.getString(); ///
        context.trace(`Validating the '${statementString}' statement...`);
        const validStatement = this.findValidStatment(context);
        if (validStatement !== null) {
            statement = validStatement; ///
            context.debug(`...the '${statementString}' statement is already valid.`);
        } else {
            const validates = _validation.validateStatements.some((validateStatement)=>{
                const statement = this, statementValidates = validateStatement(statement, context);
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
    static name = "Statement";
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, statementNode = (0, _instantiate.instantiateStatement)(string, context), node = statementNode; ///
            context = null;
            const statement = new Statement(context, string, node, lineIndex);
            return statement;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVN0YXRlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGpvaW4sIHJlY29uY2lsZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGVBLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFN0YXRlbWVudCA9IHRoaXMuZmluZFZhbGlkU3RhdG1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHZhbGlkU3RhdGVtZW50OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudHMuc29tZSgodmFsaWRhdGVTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uQ29udGV4dCA9IGRlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gZGVkdWN0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChkZWR1Y3Rpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudCIsIkVsZW1lbnQiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCIiwibWF0Y2giLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJmaW5kVmFsaWRTdGF0bWVudCIsImNvbnRleHQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwidmFsaWRTdGF0ZW1lbnQiLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50cyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiYWRkU3RhdGVtZW50IiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImRlZHVjdGlvblN0cmluZyIsImRlZHVjdGlvbkNvbnRleHQiLCJnZXRDb250ZXh0IiwiZGVkdWN0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwiam9pbiIsInJlY29uY2lsZSIsImRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImNvbW1pdCIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsImdldERlZHVjdGlvbiIsIm5hbWUiLCJ0b0pTT04iLCJzdHJpbmciLCJsaW5lSW5kZXgiLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7dUJBQ1E7NEJBQ0k7NkJBQ0U7eUJBQ1E7TUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25EQyxtQkFBbUI7UUFDakIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGdCQUFnQkYsTUFBTSxHQUFHO1FBRS9CLE9BQU9FO0lBQ1Q7SUFFQUMsMEJBQTBCO1FBQ3hCLE1BQU1ELGdCQUFnQixJQUFJLENBQUNELE9BQU8sSUFDNUJHLHVCQUF1QkYsY0FBY0MsdUJBQXVCO1FBRWxFLE9BQU9DO0lBQ1Q7SUFFQUMsMkJBQTJCO1FBQ3pCLE1BQU1ILGdCQUFnQixJQUFJLENBQUNELE9BQU8sSUFDNUJLLHdCQUF3QkosY0FBY0csd0JBQXdCO1FBRXBFLE9BQU9DO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLElBQUlDLG1CQUFtQjtRQUV2QixNQUFNQyxXQUFXLElBQUksQ0FBQ0MsVUFBVTtRQUVoQyxJQUFJRCxVQUFVO1lBQ1osTUFBTVAsZ0JBQWdCLElBQUksQ0FBQ0gsZ0JBQWdCO1lBRTNDUyxtQkFBbUJOLGNBQWNLLG1CQUFtQjtRQUN0RDtRQUVBLE9BQU9DO0lBQ1Q7SUFFQUcsc0JBQXNCO1FBQ3BCLElBQUlDLG1CQUFtQjtRQUV2QixNQUFNSCxXQUFXLElBQUksQ0FBQ0MsVUFBVTtRQUVoQyxJQUFJRCxVQUFVO1lBQ1osTUFBTVAsZ0JBQWdC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