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
            subproorAssertion = (0, _context.instantiate)((context)=>{
                const { string } = json, subproofAssertionNode = (0, _instantiate.instantiateSubproofAssertion)(string, context), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), node = subproofAssertionNode; ///
                context = null;
                const subproorAssertion = new SubproofAssertion(context, string, node, statements);
                return subproorAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgam9pbiwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFzdFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50ID0gbGFzdCh0aGlzLnN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udCh0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50cyA9IGZyb250U3RhdGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZhbGlkYXRlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3VicHJvb2YuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYXN0U3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBsYXN0U3RhdGVtZW50ID0gdGhpcy5nZXRMYXN0U3RhdGVtZW50KCksXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3QgbGFzdFN0ZXBDb250ZXh0ID0gbGFzdFN0ZXAuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBsYXN0U3RlcENvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChsYXN0U3RlcFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBsYXN0U3RhdGVtZW50ID0gdGhpcy5nZXRMYXN0U3RhdGVtZW50KCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3QgZGVkdWN0aW9uQ29udGV4dCA9IGRlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gZGVkdWN0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChkZWR1Y3Rpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbkNvbnRleHQgPSBzdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IHN1cHBvc2l0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMgPSBzdXBwb3NlZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdXBwb3NpdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnR4dCwgc3BzZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zZWRTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNMZW5ndGggPSBzdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCA9IHN1cHBvc2VkU3RhdGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYmFja3dhcmRzRXZlcnkoc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250eHQsIHNwc2VjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZkFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29yQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN1YnByb29yQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHN1YnByb29yQXNzZXJ0aW9uO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29yQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWV0Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1ldE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG4iXSwibmFtZXMiOlsibGFzdCIsImZyb250IiwiYmFja3dhcmRzRXZlcnkiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldExhc3RTdGF0ZW1lbnQiLCJsYXN0U3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnQiLCJpbmRleCIsInN0YXRlbWVudCIsInN1cHBvc2VkU3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwic3VwcG9zZWRTdGF0ZW1lbnRzIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwic3RhdGVkIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInN0YXRlbWVudHNWYWxpZGF0ZSIsInZhbGlkYXRlU3RhdGVtZW50cyIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsIm1hcCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJyZWNvbmNpbGUiLCJsYXN0U3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwidW5pZnlMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJjb21taXQiLCJsYXN0U3RlcFN0cmluZyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJsYXN0U3RlcENvbnRleHQiLCJnZXRDb250ZXh0IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJqb2luIiwibGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25Db250ZXh0IiwiZGVkdWN0aW9uU3RhdGVtZW50IiwiZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllcyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxDb250eHQiLCJzcHNlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN1YnByb29yQXNzZXJ0aW9uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwic3RhdGVtZXROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkJBWCtCO2tFQUVUOzBCQUVDO3lCQUNHOzZCQUVtQjs7Ozs7O0FBRTdDLE1BQU0sRUFBRUEsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLGNBQWMsRUFBRSxHQUFHQyx5QkFBYztNQUV0RCxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDBCQUEwQkMsa0JBQVM7SUFDN0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQzdDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLG1CQUFtQjtRQUNq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