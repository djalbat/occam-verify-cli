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
        (0, _context.reconcile)((specificContext)=>{
            const lastStepStatementUnifies = lastStatement.unifyStatement(lastStepStatement, generalContext, specificContext);
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
        const deductionContext = deduction.getContext(), deductionStatement = deduction.getStatement();
        specificContext = deductionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const deductionStatementUnifies = lastStatement.unifyStatement(deductionStatement, generalContext, specificContext);
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
        const suppositionContext = supposition.getContext(), suppositionStatement = supposition.getStatement();
        specificContext = suppositionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const suppositionStatementUnifies = supposedStatement.unifyStatement(suppositionStatement, generalContext, specificContext);
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
        (0, _context.reconcile)((specificContext)=>{
            const deduction = topLevelMetaAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
            if (deductionUnifies) {
                const suppositions = topLevelMetaAssertion.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);
                if (suppositionsUnify) {
                    specificContext.commit();
                    topLevelMetaAssertionUnifies = true;
                }
            }
        }, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFzdFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50ID0gbGFzdCh0aGlzLnN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udCh0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50cyA9IGZyb250U3RhdGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZhbGlkYXRlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3VicHJvb2YuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYXN0U3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBsYXN0U3RhdGVtZW50ID0gdGhpcy5nZXRMYXN0U3RhdGVtZW50KCksXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3QgbGFzdFN0ZXBDb250ZXh0ID0gbGFzdFN0ZXAuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBsYXN0U3RlcENvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGxhc3RTdGVwU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25Db250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBkZWR1Y3Rpb25Db250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyA9IGxhc3RTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoZGVkdWN0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50ID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2VkU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7c3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NlZCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Db250ZXh0ID0gc3VwcG9zaXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMgPSBzdXBwb3NlZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdXBwb3NpdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zZWRTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNMZW5ndGggPSBzdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCA9IHN1cHBvc2VkU3RhdGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYmFja3dhcmRzRXZlcnkoc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb3JBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb3JBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZXROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWV0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJsYXN0IiwiZnJvbnQiLCJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0TGFzdFN0YXRlbWVudCIsImxhc3RTdGF0ZW1lbnQiLCJnZXRTdXBwb3NlZFN0YXRlbWVudCIsImluZGV4Iiwic3RhdGVtZW50Iiwic3VwcG9zZWRTdGF0ZW1lbnQiLCJnZXRTdXBwb3NlZFN0YXRlbWVudHMiLCJmcm9udFN0YXRlbWVudHMiLCJzdXBwb3NlZFN0YXRlbWVudHMiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50c1ZhbGlkYXRlIiwidmFsaWRhdGVTdGF0ZW1lbnRzIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwibWFwIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsInJlY29uY2lsZSIsImxhc3RTdGVwIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcFVuaWZpZXMiLCJ1bmlmeUxhc3RTdGVwIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsImNvbW1pdCIsImxhc3RTdGVwU3RyaW5nIiwibGFzdFN0YXRlbWVudFN0cmluZyIsImxhc3RTdGVwQ29udGV4dCIsImdldENvbnRleHQiLCJsYXN0U3RlcFN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwiZGVkdWN0aW9uQ29udGV4dCIsImRlZHVjdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2VkU3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25Db250ZXh0Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXREZWR1Y3Rpb24iLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3VicHJvb3JBc3NlcnRpb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1ldE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyQkFYK0I7a0VBRVQ7MEJBRUM7eUJBQ0c7NkJBRW1COzs7Ozs7QUFFN0MsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsY0FBYyxFQUFFLEdBQUdDLHlCQUFjO01BRXRELFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxrQkFBUztJQUM3RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDN0MsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQmIsS0FBSyxJQUFJLENBQUNVLFVBQVU7UUFFMUMsT0FBT0c7SUFDVDtJQUVBQyxxQkFBcUJDLEtBQUssRUFBRTtRQUMxQixNQUFNQyxZQUFZLElBQUksQ0FBQ04sVUFBVSxDQUFDSyxNQUFNLEVBQ2xDRSxvQkFBb0JELFdBQVksR0FBRztRQUV6QyxPQUFPQztJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixNQUFNQyxrQkFBa0JsQixNQUFNLElBQUksQ0FBQ1MsVUFBVSxHQUN2Q1UscUJBQXFCRCxpQkFBa0IsR0FBRztRQUVoRCxP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