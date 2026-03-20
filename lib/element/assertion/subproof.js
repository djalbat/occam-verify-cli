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
            (0, _context.descend)((context)=>{
                const stated = true; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgam9pbiwgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFzdFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50ID0gbGFzdCh0aGlzLnN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udCh0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50cyA9IGZyb250U3RhdGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5ldmVyeSgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWYWxpZGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IGxhc3RTdGVwQ29udGV4dCA9IGxhc3RTdGVwLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gbGFzdFN0ZXBDb250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcyA9IGxhc3RTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQobGFzdFN0ZXBTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RTdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IGRlZHVjdGlvbkNvbnRleHQgPSBkZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGRlZHVjdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyA9IGxhc3RTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoZGVkdWN0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50ID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2VkU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7c3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NlZCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Db250ZXh0ID0gc3VwcG9zaXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzID0gc3VwcG9zZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3VwcG9zaXRpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250eHQsIHNwc2VjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2VkU3RhdGVtZW50cyA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGggPSBzdXBwb3NlZFN0YXRlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGJhY2t3YXJkc0V2ZXJ5KHN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udHh0LCBzcHNlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vckFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZTsgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc3VicHJvb3JBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vckFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1ldE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZXROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuIl0sIm5hbWVzIjpbImxhc3QiLCJmcm9udCIsImJhY2t3YXJkc0V2ZXJ5IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZkFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJnZXRMYXN0U3RhdGVtZW50IiwibGFzdFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50IiwiaW5kZXgiLCJzdGF0ZW1lbnQiLCJzdXBwb3NlZFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsInN1cHBvc2VkU3RhdGVtZW50cyIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzdGF0ZW1lbnRzVmFsaWRhdGUiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJldmVyeSIsInN0YXRlbWVudFZhbGlkYXRlcyIsImRlc2NlbmQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwicmVjb25jaWxlIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwiY29tbWl0IiwibGFzdFN0ZXBTdHJpbmciLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwibGFzdFN0ZXBDb250ZXh0IiwiZ2V0Q29udGV4dCIsImxhc3RTdGVwU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwiam9pbiIsImxhc3RTdGVwU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwiZGVkdWN0aW9uQ29udGV4dCIsImRlZHVjdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2VkU3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25Db250ZXh0Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsQ29udHh0Iiwic3BzZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldERlZHVjdGlvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJzdWJwcm9vckFzc2VydGlvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsIm1hcCIsInN0YXRlbWV0Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJCQVgrQjtrRUFFVDswQkFFQzt5QkFDRzs2QkFFbUI7Ozs7OztBQUU3QyxNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFQyxjQUFjLEVBQUUsR0FBR0MseUJBQWM7TUFFdEQsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLGtCQUFTO0lBQzdELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUM3QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUks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