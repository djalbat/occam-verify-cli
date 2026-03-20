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
const _context = require("../../utilities/context");
const _instantiate = require("../../process/instantiate");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last, front, backwardsEvery } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class SubproofAssertion extends _assertion.default {
    constructor(context, string, node, statements){
        super(context, string, node);
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
    validate(stated, context) {
        let subproofAssertion = null;
        const subproofAssertionString = this.getString(); ///
        context.trace(`Validating the '${subproofAssertionString}' subproof assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            subproofAssertion = validAssertion; ///
            context.debug(`...the '${subproofAssertionString}' subproof assertion is already valid.`);
        } else {
            let validates = false;
            const statementsValidate = this.validateStatements(stated, context);
            if (statementsValidate) {
                validates = true;
            }
            if (validates) {
                const assertion = this; ///
                subproofAssertion = assertion; ///
                context.addAssertion(assertion);
                context.debug(`...validated the '${subproofAssertionString}' subproof assertion.`);
            }
        }
        return subproofAssertion;
    }
    validateStatements(stated, context) {
        const statementsValidate = this.statements.every((statement)=>{
            let statementValidates = false;
            (0, _context.descend)((stated, context)=>{
                statement = statement.validate(stated, context); ///
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
        const lastStepContext = lastStep.getContext(), lastStepStatement = lastStep.getStatement();
        specificContext = lastStepContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const lastStepStatementUnifies = lastStatement.unifyStatement(lastStepStatement, generalContext, specificContext);
                if (lastStepStatementUnifies) {
                    specificContext.commit(context);
                    lastStepUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
        if (lastStepUnifies) {
            context.debug(`...unified the '${lastStepString}' last step with the '${lastStatementString}' last statement.`);
        }
        return lastStepUnifies;
    }
    unifyDeduction(deduction, generalContext, specificContext) {
        let deductionUnifies = false;
        const context = specificContext, lastStatement = this.getLastStatement(), deductionString = deduction.getString(), lastStatementString = lastStatement.getString();
        context.trace(`Unifying the '${deductionString}' deduction with the '${lastStatementString}' last statement...`);
        const deductionContext = deduction.getContext(), deductionStatement = deduction.getStatement();
        specificContext = deductionContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const deductionStatementUnifies = lastStatement.unifyStatement(deductionStatement, generalContext, specificContext);
                if (deductionStatementUnifies) {
                    specificContext.commit(context);
                    deductionUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction with the '${lastStatementString}' last statement.`);
        }
        return deductionUnifies;
    }
    unifySupposition(supposition, index, generalContext, specificContext) {
        let suppositionUnifies = false;
        const context = specificContext, supposedStatement = this.getSupposedStatement(index), suppositionString = supposition.getString(), supposedStatementString = supposedStatement.getString();
        context.trace(`Unifying the '${suppositionString}' supposition with the '${supposedStatementString}' supposed statement...`);
        const suppositionContext = supposition.getContext(), suppositionStatement = supposition.getStatement();
        specificContext = suppositionContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const suppositionStatementUnifies = supposedStatement.unifyStatement(suppositionStatement, generalContext, specificContext);
                if (suppositionStatementUnifies) {
                    specificContext.commit(context);
                    suppositionUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
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
                const { string } = json, subproofAssertionNode = (0, _instantiate.instantiateSubproofAssertion)(string, context), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), node = subproofAssertionNode; ///
                context = null;
                subproorAssertion = new SubproofAssertion(context, string, node, statements);
            }, context);
        }
        return subproorAssertion;
    }
});
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    const statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementNodes.map((statemetNode)=>{
        const statement = context.findStatementByStatementNode(statemetNode);
        return statement;
    });
    return statements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgam9pbiwgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFzdFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50ID0gbGFzdCh0aGlzLnN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udCh0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50cyA9IGZyb250U3RhdGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5ldmVyeSgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGRlc2NlbmQoKHN0YXRlZCwgY29udGV4dCkgPT4ge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzVmFsaWRhdGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdGhpcy51bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCgpO1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0cmluZyA9IGxhc3RTdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBsYXN0U3RlcENvbnRleHQgPSBsYXN0U3RlcC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGxhc3RTdGVwQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGxhc3RTdGVwU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAobGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25Db250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBkZWR1Y3Rpb25Db250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGRlZHVjdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudCA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnQoaW5kZXgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NlZFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uQ29udGV4dCA9IHN1cHBvc2l0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gc3VwcG9zaXRpb25Db250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyA9IHN1cHBvc2VkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN1cHBvc2l0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7c3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NlZCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udHh0LCBzcHNlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NlZFN0YXRlbWVudHMgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50cygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoID0gc3VwcG9zZWRTdGF0ZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IHN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBiYWNrd2FyZHNFdmVyeShzdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnR4dCwgc3BzZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb3JBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb3JBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZXROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWV0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJsYXN0IiwiZnJvbnQiLCJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0TGFzdFN0YXRlbWVudCIsImxhc3RTdGF0ZW1lbnQiLCJnZXRTdXBwb3NlZFN0YXRlbWVudCIsImluZGV4Iiwic3RhdGVtZW50Iiwic3VwcG9zZWRTdGF0ZW1lbnQiLCJnZXRTdXBwb3NlZFN0YXRlbWVudHMiLCJmcm9udFN0YXRlbWVudHMiLCJzdXBwb3NlZFN0YXRlbWVudHMiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50c1ZhbGlkYXRlIiwidmFsaWRhdGVTdGF0ZW1lbnRzIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwiZXZlcnkiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJkZXNjZW5kIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsInJlY29uY2lsZSIsImxhc3RTdGVwIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcFVuaWZpZXMiLCJ1bmlmeUxhc3RTdGVwIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsImNvbW1pdCIsImxhc3RTdGVwU3RyaW5nIiwibGFzdFN0YXRlbWVudFN0cmluZyIsImxhc3RTdGVwQ29udGV4dCIsImdldENvbnRleHQiLCJsYXN0U3RlcFN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImpvaW4iLCJsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImRlZHVjdGlvblN0cmluZyIsImRlZHVjdGlvbkNvbnRleHQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdXBwb3NlZFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uQ29udGV4dCIsInN1cHBvc2l0aW9uU3RhdGVtZW50Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbENvbnR4dCIsInNwc2VjaWZpY0NvbnRleHQiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXREZWR1Y3Rpb24iLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3VicHJvb3JBc3NlcnRpb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJtYXAiLCJzdGF0ZW1ldE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyQkFYK0I7a0VBRVQ7MEJBRUM7eUJBQ0c7NkJBRW1COzs7Ozs7QUFFN0MsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsY0FBYyxFQUFFLEdBQUdDLHlCQUFjO01BRXRELFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxrQkFBUztJQUM3RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDN0MsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQmIsS0FBSyxJQUFJLENBQUNVLFVBQVU7UUFFMUMsT0FBT0c7SUFDVDtJQUVBQyxxQkFBcUJDLEtBQUssRUFBRTtRQUMxQixNQUFNQyxZQUFZLElBQUksQ0FBQ04sVUFBVSxDQUFDSyxNQUFNLEVBQ2xDRSxvQkFBb0JELFdBQVksR0FBRztRQUV6QyxPQUFPQztJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixNQUFNQyxrQkFBa0JsQixNQUFNLElBQUksQ0FBQ1MsVUFBVSxHQUN2Q1UscUJBQXFCRCxpQkFBa0IsR0FBRztRQUVoRCxPQUFPQztJQUNUO0lBRUFDLDJCQUEyQjtRQUN6QixNQUFNWixPQUFPLElBQUksQ0FBQ2EsT0FBTyxJQUNuQkMsd0JBQXdCZCxNQUFNLEdBQUc7UUFFdkMsT0FBT2M7SUFDVDtJQUVBQyxTQUFTQyxNQUFNLEVBQUVsQixPQUFPLEVBQUU7UUFDeEIsSUFBSW1CLG9CQUFvQjtRQUV4QixNQUFNQywwQkFBMEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUV0RHJCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsd0JBQXdCLHVCQUF1QixDQUFDO1FBRWpGLE1BQU1HLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDeEI7UUFFL0MsSUFBSXVCLGdCQUFnQjtZQUNsQkosb0JBQW9CSSxnQkFBZ0IsR0FBRztZQUV2Q3ZCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVMLHdCQUF3QixzQ0FBc0MsQ0FBQztRQUMxRixPQUFPO1lBQ0wsSUFBSU0sWUFBWTtZQUVoQixNQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1YsUUFBUWxCO1lBRTNELElBQUkyQixvQkFBb0I7Z0JBQ3RCRCxZQUFZO1lBQ2Q7WUFFQSxJQUFJQSxXQUFXO2dCQUNiLE1BQU1HLFlBQVksSUFBSSxFQUFFLEdBQUc7Z0JBRTNCVixvQkFBb0JVLFdBQVksR0FBRztnQkFFbkM3QixRQUFROEIsWUFBWSxDQUFDRDtnQkFFckI3QixRQUFReUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLHdCQUF3QixxQkFBcUIsQ0FBQztZQUNuRjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUyxtQkFBbUJWLE1BQU0sRUFBRWxCLE9BQU8sRUFBRTtRQUNsQyxNQUFNMkIscUJBQXFCLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQzRCLEtBQUssQ0FBQyxDQUFDdEI7WUFDaEQsSUFBSXVCLHFCQUFxQjtZQUV6QkMsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDZixRQUFRbEI7Z0JBQ2ZTLFlBQVlBLFVBQVVRLFFBQVEsQ0FBQ0MsUUFBUWxCLFVBQVcsR0FBRztnQkFFckQsSUFBSVMsY0FBYyxNQUFNO29CQUN0QnVCLHFCQUFxQjtnQkFDdkI7WUFDRixHQUFHaEM7WUFFSCxJQUFJZ0Msb0JBQW9CO2dCQUN0QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9MO0lBQ1Q7SUFFQU8sY0FBY0MsUUFBUSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUN2RCxJQUFJQyxrQkFBa0I7UUFFdEIsTUFBTXRDLFVBQVVxQyxpQkFDVkUsaUJBQWlCSixTQUFTZCxTQUFTLElBQ25DRCwwQkFBMEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVyRHJCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVpQixlQUFlLHFCQUFxQixFQUFFbkIsd0JBQXdCLHVCQUF1QixDQUFDO1FBRXJIb0IsSUFBQUEsa0JBQVMsRUFBQyxDQUFDSDtZQUNULE1BQU1JLFdBQVdOLFNBQVNPLFdBQVcsSUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLGFBQWEsQ0FBQ0gsVUFBVUwsZ0JBQWdCQztZQUVyRSxJQUFJTSxpQkFBaUI7Z0JBQ25CLE1BQU1FLGVBQWVWLFNBQVNXLGVBQWUsSUFDdkNDLG9CQUFvQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSCxjQUFjVCxnQkFBZ0JDO2dCQUUvRSxJQUFJVSxtQkFBbUI7b0JBQ3JCVixnQkFBZ0JZLE1BQU07b0JBRXRCWCxrQkFBa0I7Z0JBQ3BCO1lBQ0Y7UUFDRixHQUFHRDtRQUVILElBQUlDLGlCQUFpQjtZQUNuQnRDLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWMsZUFBZSxxQkFBcUIsRUFBRW5CLHdCQUF3QixxQkFBcUIsQ0FBQztRQUN2SDtRQUVBLE9BQU9rQjtJQUNUO0lBRUFNLGNBQWNILFFBQVEsRUFBRUwsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDdkQsSUFBSU0sa0JBQWtCO1FBRXRCLE1BQU0zQyxVQUFVcUMsaUJBQ1YvQixnQkFBZ0IsSUFBSSxDQUFDRCxnQkFBZ0IsSUFDckM2QyxpQkFBaUJULFNBQVNwQixTQUFTLElBQ25DOEIsc0JBQXNCN0MsY0FBY2UsU0FBUztRQUVuRHJCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU0QixlQUFlLHNCQUFzQixFQUFFQyxvQkFBb0IsbUJBQW1CLENBQUM7UUFFOUcsTUFBTUMsa0JBQWtCWCxTQUFTWSxVQUFVLElBQ3JDQyxvQkFBb0JiLFNBQVNjLFlBQVk7UUFFL0NsQixrQkFBa0JlLGlCQUFrQixHQUFHO1FBRXZDSSxJQUFBQSxhQUFJLEVBQUMsQ0FBQ25CO1lBQ0pHLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ0g7Z0JBQ1QsTUFBTW9CLDJCQUEyQm5ELGNBQWNvRCxjQUFjLENBQUNKLG1CQUFtQmxCLGdCQUFnQkM7Z0JBRWpHLElBQUlvQiwwQkFBMEI7b0JBQzVCcEIsZ0JBQWdCWSxNQUFNLENBQUNqRDtvQkFFdkIyQyxrQkFBa0I7Z0JBQ3BCO1lBQ0YsR0FBR047UUFDTCxHQUFHQSxpQkFBaUJyQztRQUVwQixJQUFJMkMsaUJBQWlCO1lBQ25CM0MsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFeUIsZUFBZSxzQkFBc0IsRUFBRUMsb0JBQW9CLGlCQUFpQixDQUFDO1FBQ2hIO1FBRUEsT0FBT1I7SUFDVDtJQUVBZ0IsZUFBZUMsU0FBUyxFQUFFeEIsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDekQsSUFBSXdCLG1CQUFtQjtRQUV2QixNQUFNN0QsVUFBVXFDLGlCQUNWL0IsZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCLElBQ3JDeUQsa0JBQWtCRixVQUFVdkMsU0FBUyxJQUNyQzhCLHNCQUFzQjdDLGNBQWNlLFNBQVM7UUFFbkRyQixRQUFRc0IsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFd0MsZ0JBQWdCLHNCQUFzQixFQUFFWCxvQkFBb0IsbUJBQW1CLENBQUM7UUFFL0csTUFBTVksbUJBQW1CSCxVQUFVUCxVQUFVLElBQ3ZDVyxxQkFBcUJKLFVBQVVMLFlBQVk7UUFFakRsQixrQkFBa0IwQixrQkFBbUIsR0FBRztRQUV4Q1AsSUFBQUEsYUFBSSxFQUFDLENBQUNuQjtZQUNKRyxJQUFBQSxrQkFBUyxFQUFDLENBQUNIO2dCQUNULE1BQU00Qiw0QkFBNEIzRCxjQUFjb0QsY0FBYyxDQUFDTSxvQkFBb0I1QixnQkFBZ0JDO2dCQUVuRyxJQUFJNEIsMkJBQTJCO29CQUM3QjVCLGdCQUFnQlksTUFBTSxDQUFDakQ7b0JBRXZCNkQsbUJBQW1CO2dCQUNyQjtZQUNGLEdBQUd4QjtRQUNMLEdBQUdBLGlCQUFpQnJDO1FBRXBCLElBQUk2RCxrQkFBa0I7WUFDcEI3RCxRQUFReUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVxQyxnQkFBZ0Isc0JBQXNCLEVBQUVYLG9CQUFvQixpQkFBaUIsQ0FBQztRQUNqSDtRQUVBLE9BQU9VO0lBQ1Q7SUFFQUssaUJBQWlCQyxXQUFXLEVBQUUzRCxLQUFLLEVBQUU0QixjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUNwRSxJQUFJK0IscUJBQXFCO1FBRXpCLE1BQU1wRSxVQUFVcUMsaUJBQ1YzQixvQkFBb0IsSUFBSSxDQUFDSCxvQkFBb0IsQ0FBQ0MsUUFDOUM2RCxvQkFBb0JGLFlBQVk5QyxTQUFTLElBQ3pDaUQsMEJBQTBCNUQsa0JBQWtCVyxTQUFTO1FBRTNEckIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRStDLGtCQUFrQix3QkFBd0IsRUFBRUMsd0JBQXdCLHVCQUF1QixDQUFDO1FBRTNILE1BQU1DLHFCQUFxQkosWUFBWWQsVUFBVSxJQUMzQ21CLHVCQUF1QkwsWUFBWVosWUFBWTtRQUVyRGxCLGtCQUFrQmtDLG9CQUFxQixHQUFHO1FBRTFDZixJQUFBQSxhQUFJLEVBQUMsQ0FBQ25CO1lBQ0pHLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ0g7Z0JBQ1QsTUFBTW9DLDhCQUE4Qi9ELGtCQUFrQmdELGNBQWMsQ0FBQ2Msc0JBQXNCcEMsZ0JBQWdCQztnQkFFM0csSUFBSW9DLDZCQUE2QjtvQkFDL0JwQyxnQkFBZ0JZLE1BQU0sQ0FBQ2pEO29CQUV2Qm9FLHFCQUFxQjtnQkFDdkI7WUFDRixHQUFHL0I7UUFDTCxHQUFHQSxpQkFBaUJyQztRQUVwQixJQUFJb0Usb0JBQW9CO1lBQ3RCcEUsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFNEMsa0JBQWtCLHdCQUF3QixFQUFFQyx3QkFBd0IscUJBQXFCLENBQUM7UUFDN0g7UUFFQSxPQUFPRjtJQUNUO0lBRUFwQixrQkFBa0JILFlBQVksRUFBRTZCLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUU7UUFDL0QsSUFBSTVCLG9CQUFvQjtRQUV4QixNQUFNbEMscUJBQXFCLElBQUksQ0FBQ0YscUJBQXFCLElBQy9DaUUscUJBQXFCL0IsYUFBYWdDLE1BQU0sRUFDeENDLDJCQUEyQmpFLG1CQUFtQmdFLE1BQU07UUFFMUQsSUFBSUQsdUJBQXVCRSwwQkFBMEI7WUFDbkQvQixvQkFBb0JwRCxlQUFla0QsY0FBYyxDQUFDc0IsYUFBYTNEO2dCQUM3RCxNQUFNNEQscUJBQXFCLElBQUksQ0FBQ0YsZ0JBQWdCLENBQUNDLGFBQWEzRCxPQUFPa0UsZUFBZUM7Z0JBRXBGLElBQUlQLG9CQUFvQjtvQkFDdEIsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7UUFFQSxPQUFPckI7SUFDVDtJQUVBZ0MsMkJBQTJCQyxxQkFBcUIsRUFBRWhGLE9BQU8sRUFBRTtRQUN6RCxJQUFJaUYsK0JBQStCO1FBRW5DLE1BQU03QyxpQkFBaUJwQyxTQUNqQnFDLGtCQUFrQnJDLFNBQ2xCb0IsMEJBQTBCLElBQUksQ0FBQ0MsU0FBUyxJQUN4QzZELDhCQUE4QkYsc0JBQXNCM0QsU0FBUztRQUVuRXJCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU0RCw0QkFBNEIscUNBQXFDLEVBQUU5RCx3QkFBd0IsdUJBQXVCLENBQUM7UUFFbEosTUFBTXdDLFlBQVlvQixzQkFBc0JHLFlBQVksSUFDOUN0QixtQkFBbUIsSUFBSSxDQUFDRixjQUFjLENBQUNDLFdBQVd4QixnQkFBZ0JDO1FBRXhFLElBQUl3QixrQkFBa0I7WUFDcEIsTUFBTWhCLGVBQWVtQyxzQkFBc0JsQyxlQUFlLElBQ3BEQyxvQkFBb0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0gsY0FBY1QsZ0JBQWdCQztZQUUvRSxJQUFJVSxtQkFBbUI7Z0JBQ3JCa0MsK0JBQStCO1lBQ2pDO1FBQ0Y7UUFFQSxJQUFJQSw4QkFBOEI7WUFDaENqRixRQUFReUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUV5RCw0QkFBNEIscUNBQXFDLEVBQUU5RCx3QkFBd0IscUJBQXFCLENBQUM7UUFDcEo7UUFFQSxPQUFPNkQ7SUFDVDtJQUVBLE9BQU9HLE9BQU8sb0JBQW9CO0lBRWxDLE9BQU9DLFNBQVNDLElBQUksRUFBRXRGLE9BQU8sRUFBRTtRQUM3QixJQUFJdUYsb0JBQW9CO1FBRXhCLE1BQU0sRUFBRUgsSUFBSSxFQUFFLEdBQUdFO1FBRWpCLElBQUksSUFBSSxDQUFDRixJQUFJLEtBQUtBLE1BQU07WUFDdEJJLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3hGO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdxRixNQUNidEUsd0JBQXdCeUUsSUFBQUEseUNBQTRCLEVBQUN4RixRQUFRRCxVQUM3REcsYUFBYXVGLG9DQUFvQzFFLHVCQUF1QmhCLFVBQ3hFRSxPQUFPYyx1QkFBdUIsR0FBRztnQkFFdkNoQixVQUFVO2dCQUVWdUYsb0JBQW9CLElBQUl6RixrQkFBa0JFLFNBQVNDLFFBQVFDLE1BQU1DO1lBQ25FLEdBQUdIO1FBQ0w7UUFFQSxPQUFPdUY7SUFDVDtBQUNGO0FBRUEsU0FBU0csb0NBQW9DMUUscUJBQXFCLEVBQUVoQixPQUFPO0lBQ3pFLE1BQU0yRixpQkFBaUIzRSxzQkFBc0I0RSxpQkFBaUIsSUFDeER6RixhQUFhd0YsZUFBZUUsR0FBRyxDQUFDLENBQUNDO1FBQy9CLE1BQU1yRixZQUFZVCxRQUFRK0YsNEJBQTRCLENBQUNEO1FBRXZELE9BQU9yRjtJQUNUO0lBRU4sT0FBT047QUFDVCJ9