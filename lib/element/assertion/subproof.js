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
        stated = true; ///
        const statementsValidate = this.statements.map((statement)=>{
            let statementValidates = false;
            statement = statement.validate(stated, context); ///
            if (statement !== null) {
                statementValidates = true;
            }
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
        const lastStep = subproof.getLastStep(), lastStepUnifies = this.unifyLastStep(lastStep, generalContext, specificContext);
        if (lastStepUnifies) {
            const suppositions = subproof.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);
            if (suppositionsUnify) {
                subproofUnifies = true;
            }
        }
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
        }
        return subproofUnifies;
    }
    unifyLastStep(lastStep, generalContext, specificContext) {
        let lastStepUnifies = false;
        const lastStatement = this.getLastStatement(), lastStepString = lastStep.getString(), lastStepStatement = lastStep.getStatement(), lastStatementString = lastStatement.getString(), subproofAssertionString = this.getString(), lastStepStatementString = lastStepStatement.getString();
        let context;
        context = specificContext; ///
        context.trace(`Unifying the '${lastStepString}' last step's '${lastStepStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${lastStatementString}' last statement...`);
        context = lastStep.getContext();
        specificContext = context; ///
        (0, _context.reconcile)((specificContext)=>{
            const lastStepStatementUnifies = lastStatement.unifyStatement(lastStepStatement, generalContext, specificContext);
            if (lastStepStatementUnifies) {
                lastStepUnifies = true;
            }
        }, specificContext);
        if (lastStepUnifies) {
            context.debug(`...unified the '${lastStepString}' last step's '${lastStepStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${lastStatementString}' last statement.`);
        }
        return lastStepUnifies;
    }
    unifyDeduction(deduction, generalContext, specificContext) {
        let deductionUnifies = false;
        const lastStatement = this.getLastStatement(), deductionString = deduction.getString(), deductionStatement = deduction.getStatement(), lastStatementString = lastStatement.getString(), subproofAssertionString = this.getString(), deductionStatementString = deductionStatement.getString();
        let context;
        context = specificContext; ///
        context.trace(`Unifying the '${deductionString}' deduction's '${deductionStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${lastStatementString}' last statement...`);
        context = deduction.getContext();
        specificContext = context; ///
        (0, _context.reconcile)((specificContext)=>{
            const deductionStatementUnifies = lastStatement.unifyStatement(deductionStatement, generalContext, specificContext);
            if (deductionStatementUnifies) {
                deductionUnifies = true;
            }
        }, specificContext);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction's '${deductionStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${lastStatementString}' last statement.`);
        }
        return deductionUnifies;
    }
    unifySupposition(supposition, index, generalContext, specificContext) {
        let suppositionUnifies = false;
        const supposedStatement = this.getSupposedStatement(index), suppositionString = supposition.getString(), suppositionStatement = supposition.getStatement(), subproofAssertionString = this.getString(), supposedStatementString = supposedStatement.getString(), suppositionStatementString = suppositionStatement.getString(); ///
        let context;
        context = specificContext; ///
        context.trace(`Unifying the '${suppositionString}' supposition's '${suppositionStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${supposedStatementString}' supposed statement...`);
        context = supposition.getContext();
        specificContext = context; ///
        (0, _context.reconcile)((specificContext)=>{
            const suppositionStatementUnifies = supposedStatement.unifyStatement(suppositionStatement, generalContext, specificContext);
            if (suppositionStatementUnifies) {
                suppositionUnifies = true;
            }
        }, specificContext);
        if (suppositionUnifies) {
            context.debug(`...unified the '${suppositionString}' supposition's '${suppositionStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${supposedStatementString}' supposed statement.`);
        }
        return suppositionUnifies;
    }
    unifySuppositions(suppositions, generalContext, specificContext) {
        let suppositionsUnify = false;
        const supposedStatements = this.getSupposedStatements(), suppositionsLength = suppositions.length, supposedStatementsLength = supposedStatements.length;
        if (suppositionsLength === supposedStatementsLength) {
            suppositionsUnify = backwardsEvery(suppositions, (supposition, index)=>{
                const suppositionUnifies = this.unifySupposition(supposition, index, generalContext, specificContext);
                if (suppositionUnifies) {
                    return true;
                }
            });
        }
        return suppositionsUnify;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, generalContext, specificContext) {
        let topLevelMetaAssertionUnifies = false;
        const context = specificContext, subproofAssertionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFzdFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50ID0gbGFzdCh0aGlzLnN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udCh0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50cyA9IGZyb250U3RhdGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZhbGlkYXRlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50U3RyaW5nID0gbGFzdFN0ZXBTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCdzICcke2xhc3RTdGVwU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uJ3MgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnRleHQgPSBsYXN0U3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChsYXN0U3RlcFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAncyAnJHtsYXN0U3RlcFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbidzICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmcgPSBkZWR1Y3Rpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24ncyAnJHtkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24ncyAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29udGV4dCA9IGRlZHVjdGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyA9IGxhc3RTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoZGVkdWN0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24ncyAnJHtkZWR1Y3Rpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24ncyAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zZWRTdGF0ZW1lbnQgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2VkU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zaXRpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbidzICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnRleHQgPSBzdXBwb3NpdGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzID0gc3VwcG9zZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3VwcG9zaXRpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbidzICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zZWRTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNMZW5ndGggPSBzdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCA9IHN1cHBvc2VkU3RhdGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYmFja3dhcmRzRXZlcnkoc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vckFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZTsgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc3VicHJvb3JBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vckFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1ldE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZXROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuIl0sIm5hbWVzIjpbImxhc3QiLCJmcm9udCIsImJhY2t3YXJkc0V2ZXJ5IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZkFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJnZXRMYXN0U3RhdGVtZW50IiwibGFzdFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50IiwiaW5kZXgiLCJzdGF0ZW1lbnQiLCJzdXBwb3NlZFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsInN1cHBvc2VkU3RhdGVtZW50cyIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzdGF0ZW1lbnRzVmFsaWRhdGUiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJtYXAiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwibGFzdFN0ZXBTdHJpbmciLCJsYXN0U3RlcFN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJsYXN0U3RlcFN0YXRlbWVudFN0cmluZyIsImdldENvbnRleHQiLCJyZWNvbmNpbGUiLCJsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImRlZHVjdGlvblN0cmluZyIsImRlZHVjdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudFN0cmluZyIsImRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50Iiwic3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldERlZHVjdGlvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJzdWJwcm9vckFzc2VydGlvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInN0YXRlbWV0Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJCQVgrQjtrRUFFVDswQkFF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