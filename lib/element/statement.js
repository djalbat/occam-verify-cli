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
const _fileSystem = require("necessary/lib/utilities/fileSystem");
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
        let validates;
        const validStatement = this.findValidStatment(context);
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
    unifySubproof(subproof, generalContext, specificContext) {
        let subproofUnifies = false;
        const statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
        if (subproofAssertionNode !== null) {
            const context = generalContext, subproofString = subproof.getString(), statementString = this.getString(); ///
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
        const context = generalContext, statementString = this.getString(), deductionString = deduction.getString(), deductionStatement = deduction.getStatement();
        context.trace(`Unifying the '${deductionString}' deduction with the '${statementString}' statement...`);
        (0, _context.reconcile)((specificContext)=>{
            const deductionStatementUnifies = this.unifyStatement(deductionStatement, generalContext, specificContext);
            if (deductionStatementUnifies) {
                specificContext.commit(context);
                deductionUnifies = true;
            }
        }, specificContext);
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
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelAssertionUnifies = false;
        const statementString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement...`);
        const unconditional = topLevelMetaAssertion.isUnconditional();
        if (unconditional) {
            const deduction = topLevelMetaAssertion.getDeduction(), generalContext = context; ///
            context = deduction.getContext();
            const specificContext = context; ///
            context = generalContext; ///
            const deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVN0YXRlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHJlY29uY2lsZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7Z2V0RW50cnlTdGF0c30gZnJvbSBcIm5lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHN0YXRlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGVBLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdmFsaWRTdGF0ZW1lbnQgPSB0aGlzLmZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzdGF0ZW1lbnQgPSB2YWxpZFN0YXRlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnRzLnNvbWUoKHZhbGlkYXRlU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoZGVkdWN0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgdHlwZUFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSB0eXBlQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBkZWZpbmVkQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZmluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnQiLCJFbGVtZW50IiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiZmluZFZhbGlkU3RhdG1lbnQiLCJjb250ZXh0IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInZhbGlkU3RhdGVtZW50IiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsImFkZFN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJyZWNvbmNpbGUiLCJkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJjb21taXQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsImdldERlZHVjdGlvbiIsImdldENvbnRleHQiLCJuYW1lIiwidG9KU09OIiwic3RyaW5nIiwibGluZUluZGV4IiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5z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