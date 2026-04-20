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
const _necessary = require("necessary");
const _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
const _elements = require("../../elements");
const _breakPoint = require("../../utilities/breakPoint");
const _instantiate = require("../../process/instantiate");
const _context = require("../../utilities/context");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last, front, backwardsEvery } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class SubproofAssertion extends _assertion.default {
    constructor(context, string, node, breakPoint, statements){
        super(context, string, node, breakPoint);
        this.statements = statements;
    }
    getStatements() {
        return this.statements;
    }
    getLastStatement() {
        const lastStatement = last(this.statements);
        return lastStatement;
    }
    getSupposedStatement(index) {
        const statement = this.statements[index], supposedStatement = statement; ///
        return supposedStatement;
    }
    getSupposedStatements() {
        const frontStatements = front(this.statements), supposedStatements = frontStatements; ///
        return supposedStatements;
    }
    getSubproofAssertionNode() {
        const node = this.getNode(), subproofAssertionNode = node; ///
        return subproofAssertionNode;
    }
    validate(context) {
        let subproofAssertion = null;
        const subproofAssertionString = this.getString(); ///
        context.trace(`Validating the '${subproofAssertionString}' subproof assertion...`);
        let validates = false;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            validates = true;
            subproofAssertion = validAssertion; ///
            context.debug(`...the '${subproofAssertionString}' subproof assertion is already valid.`);
        } else {
            const statementsValidate = this.validateStatements(context);
            if (statementsValidate) {
                validates = true;
            }
            if (validates) {
                const assertion = this; ///
                subproofAssertion = assertion; ///
                context.addAssertion(assertion);
            }
        }
        if (validates) {
            context.debug(`...validated the '${subproofAssertionString}' subproof assertion.`);
        }
        return subproofAssertion;
    }
    validateStatements(context) {
        const statementsValidate = this.statements.every((statement)=>{
            let statementValidates = false;
            (0, _context.descend)((context)=>{
                statement = statement.validate(context); ///
                if (statement !== null) {
                    statementValidates = true;
                }
            }, context);
            if (statementValidates) {
                return true;
            }
        });
        return statementsValidate;
    }
    unifySubproof(subproof, generalContext, specificContext) {
        let subproofUnifies = false;
        const context = specificContext, subproofString = subproof.getString(), subproofAssertionString = this.getString(); ///
        context.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);
        (0, _context.reconcile)((specificContext)=>{
            const lastStep = subproof.getLastStep(), lastStepUnifies = this.unifyLastStep(lastStep, generalContext, specificContext);
            if (lastStepUnifies) {
                const suppositions = subproof.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);
                if (suppositionsUnify) {
                    specificContext.commit();
                    subproofUnifies = true;
                }
            }
        }, specificContext);
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
        }
        return subproofUnifies;
    }
    unifyLastStep(lastStep, generalContext, specificContext) {
        let lastStepUnifies = false;
        const context = specificContext, lastStatement = this.getLastStatement(), lastStepString = lastStep.getString(), lastStatementString = lastStatement.getString();
        context.trace(`Unifying the '${lastStepString}' last step with the '${lastStatementString}' last statement...`);
        const lastStepContext = lastStep.getContext();
        specificContext = lastStepContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const lastStepStatement = lastStep.getStatement(), lastStepStatementUnifies = lastStatement.unifyStatement(lastStepStatement, generalContext, specificContext);
            if (lastStepStatementUnifies) {
                specificContext.commit(context);
                lastStepUnifies = true;
            }
        }, specificContext);
        if (lastStepUnifies) {
            context.debug(`...unified the '${lastStepString}' last step with the '${lastStatementString}' last statement.`);
        }
        return lastStepUnifies;
    }
    unifyDeduction(deduction, generalContext, specificContext) {
        let deductionUnifies = false;
        const context = specificContext, lastStatement = this.getLastStatement(), deductionString = deduction.getString(), lastStatementString = lastStatement.getString();
        context.trace(`Unifying the '${deductionString}' deduction with the '${lastStatementString}' last statement...`);
        const deductionContext = deduction.getContext();
        specificContext = deductionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const deductionStatement = deduction.getStatement(), deductionStatementUnifies = lastStatement.unifyStatement(deductionStatement, generalContext, specificContext);
            if (deductionStatementUnifies) {
                specificContext.commit(context);
                deductionUnifies = true;
            }
        }, specificContext);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction with the '${lastStatementString}' last statement.`);
        }
        return deductionUnifies;
    }
    unifySupposition(supposition, index, generalContext, specificContext) {
        let suppositionUnifies = false;
        const context = specificContext, supposedStatement = this.getSupposedStatement(index), suppositionString = supposition.getString(), supposedStatementString = supposedStatement.getString();
        context.trace(`Unifying the '${suppositionString}' supposition with the '${supposedStatementString}' supposed statement...`);
        const suppositionContext = supposition.getContext();
        specificContext = suppositionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const suppositionStatement = supposition.getStatement(), suppositionStatementUnifies = supposedStatement.unifyStatement(suppositionStatement, generalContext, specificContext);
            if (suppositionStatementUnifies) {
                specificContext.commit(context);
                suppositionUnifies = true;
            }
        }, specificContext);
        if (suppositionUnifies) {
            context.debug(`...unified the '${suppositionString}' supposition with the '${supposedStatementString}' supposed statement.`);
        }
        return suppositionUnifies;
    }
    unifySuppositions(suppositions, generalContxt, spsecificContext) {
        let suppositionsUnify = false;
        const supposedStatements = this.getSupposedStatements(), suppositionsLength = suppositions.length, supposedStatementsLength = supposedStatements.length;
        if (suppositionsLength === supposedStatementsLength) {
            suppositionsUnify = backwardsEvery(suppositions, (supposition, index)=>{
                const suppositionUnifies = this.unifySupposition(supposition, index, generalContxt, spsecificContext);
                if (suppositionUnifies) {
                    return true;
                }
            });
        }
        return suppositionsUnify;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUnifies = false;
        const generalContext = context, specificContext = context, subproofAssertionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${subproofAssertionString}' subproof assertion...`);
        const deduction = topLevelMetaAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
        if (deductionUnifies) {
            const suppositions = topLevelMetaAssertion.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);
            if (suppositionsUnify) {
                topLevelMetaAssertionUnifies = true;
            }
        }
        if (topLevelMetaAssertionUnifies) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${subproofAssertionString}' subproof assertion.`);
        }
        return topLevelMetaAssertionUnifies;
    }
    static name = "SubproofAssertion";
    static fromJSON(json, context) {
        let subproorAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string } = json, subproofAssertionNode = (0, _instantiate.instantiateSubproofAssertion)(string, context), node = subproofAssertionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context);
                context = null;
                subproorAssertion = new SubproofAssertion(context, string, node, breakPoint, statements);
            }, context);
        }
        return subproorAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), subproofAssertion = (0, _element.subproofAssertionFromStatementNode)(statementNode, context);
        return subproofAssertion;
    }
});
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    const statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementNodes.map((statemetNode)=>{
        const statement = context.findStatementByStatementNode(statemetNode);
        return statement;
    });
    return statements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBkZXNjZW5kLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbGFzdCwgZnJvbnQsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRMYXN0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RTdGF0ZW1lbnQgPSBsYXN0KHRoaXMuc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gbGFzdFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHRoaXMuc3RhdGVtZW50cyksXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRzID0gZnJvbnRTdGF0ZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zZWRTdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50c1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRzVmFsaWRhdGUpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5ldmVyeSgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWYWxpZGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IGxhc3RTdGVwQ29udGV4dCA9IGxhc3RTdGVwLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGxhc3RTdGVwQ29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGxhc3RTdGVwU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25Db250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGRlZHVjdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChkZWR1Y3Rpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbkNvbnRleHQgPSBzdXBwb3NpdGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzID0gc3VwcG9zZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3VwcG9zaXRpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250eHQsIHNwc2VjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2VkU3RhdGVtZW50cyA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGggPSBzdXBwb3NlZFN0YXRlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGJhY2t3YXJkc0V2ZXJ5KHN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udHh0LCBzcHNlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vckFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RhdGVtZW50cyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb3JBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZXROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWV0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJsYXN0IiwiZnJvbnQiLCJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldExhc3RTdGF0ZW1lbnQiLCJsYXN0U3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnQiLCJpbmRleCIsInN0YXRlbWVudCIsInN1cHBvc2VkU3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwic3VwcG9zZWRTdGF0ZW1lbnRzIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInN0YXRlbWVudHNWYWxpZGF0ZSIsInZhbGlkYXRlU3RhdGVtZW50cyIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsImV2ZXJ5Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiZGVzY2VuZCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJyZWNvbmNpbGUiLCJsYXN0U3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwidW5pZnlMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJjb21taXQiLCJsYXN0U3RlcFN0cmluZyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJsYXN0U3RlcENvbnRleHQiLCJnZXRDb250ZXh0IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImRlZHVjdGlvblN0cmluZyIsImRlZHVjdGlvbkNvbnRleHQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdXBwb3NlZFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uQ29udGV4dCIsInN1cHBvc2l0aW9uU3RhdGVtZW50Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbENvbnR4dCIsInNwc2VjaWZpY0NvbnRleHQiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXREZWR1Y3Rpb24iLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3VicHJvb3JBc3NlcnRpb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJtYXAiLCJzdGF0ZW1ldE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyQkFaK0I7a0VBRVQ7MEJBRUM7NEJBQ1k7NkJBQ1U7eUJBQ0c7eUJBQ0c7Ozs7OztB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