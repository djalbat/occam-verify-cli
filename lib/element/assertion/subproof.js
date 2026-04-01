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
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last, front, backwardsEvery } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class SubproofAssertion extends _assertion.default {
    constructor(context, string, node, lineIndex, statements){
        super(context, string, node, lineIndex);
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
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            subproofAssertion = validAssertion; ///
            context.debug(`...the '${subproofAssertionString}' subproof assertion is already valid.`);
        } else {
            let validates = false;
            const statementsValidate = this.validateStatements(context);
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
                const { string, lineIndex } = json, subproofAssertionNode = (0, _instantiate.instantiateSubproofAssertion)(string, context), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), node = subproofAssertionNode; ///
                context = null;
                subproorAssertion = new SubproofAssertion(context, string, node, lineIndex, statements);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgam9pbiwgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldExhc3RTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFN0YXRlbWVudCA9IGxhc3QodGhpcy5zdGF0ZW1lbnRzKTtcblxuICAgIHJldHVybiBsYXN0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VwcG9zZWRTdGF0ZW1lbnQoaW5kZXgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHNbaW5kZXhdLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgZnJvbnRTdGF0ZW1lbnRzID0gZnJvbnQodGhpcy5zdGF0ZW1lbnRzKSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHMgPSBmcm9udFN0YXRlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnRzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnN0YXRlbWVudHMuZXZlcnkoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzVmFsaWRhdGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdGhpcy51bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCgpO1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0cmluZyA9IGxhc3RTdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBsYXN0U3RlcENvbnRleHQgPSBsYXN0U3RlcC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGxhc3RTdGVwQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGxhc3RTdGVwU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAobGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25Db250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBkZWR1Y3Rpb25Db250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGRlZHVjdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudCA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnQoaW5kZXgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NlZFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uQ29udGV4dCA9IHN1cHBvc2l0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gc3VwcG9zaXRpb25Db250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyA9IHN1cHBvc2VkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN1cHBvc2l0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7c3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NlZCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udHh0LCBzcHNlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NlZFN0YXRlbWVudHMgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50cygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoID0gc3VwcG9zZWRTdGF0ZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IHN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBiYWNrd2FyZHNFdmVyeShzdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnR4dCwgc3BzZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb3JBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZTsgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc3VicHJvb3JBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudHMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29yQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWV0Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1ldE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG4iXSwibmFtZXMiOlsibGFzdCIsImZyb250IiwiYmFja3dhcmRzRXZlcnkiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldExhc3RTdGF0ZW1lbnQiLCJsYXN0U3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnQiLCJpbmRleCIsInN0YXRlbWVudCIsInN1cHBvc2VkU3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwic3VwcG9zZWRTdGF0ZW1lbnRzIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInN0YXRlbWVudHNWYWxpZGF0ZSIsInZhbGlkYXRlU3RhdGVtZW50cyIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsImV2ZXJ5Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiZGVzY2VuZCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJyZWNvbmNpbGUiLCJsYXN0U3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwidW5pZnlMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJjb21taXQiLCJsYXN0U3RlcFN0cmluZyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJsYXN0U3RlcENvbnRleHQiLCJnZXRDb250ZXh0IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJqb2luIiwibGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25Db250ZXh0IiwiZGVkdWN0aW9uU3RhdGVtZW50IiwiZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllcyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxDb250eHQiLCJzcHNlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN1YnByb29yQXNzZXJ0aW9uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwibWFwIiwic3RhdGVtZXROb2RlIiwiZmluZFN0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