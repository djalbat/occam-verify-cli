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
        let validates = false;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgam9pbiwgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldExhc3RTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFN0YXRlbWVudCA9IGxhc3QodGhpcy5zdGF0ZW1lbnRzKTtcblxuICAgIHJldHVybiBsYXN0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VwcG9zZWRTdGF0ZW1lbnQoaW5kZXgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHNbaW5kZXhdLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgZnJvbnRTdGF0ZW1lbnRzID0gZnJvbnQodGhpcy5zdGF0ZW1lbnRzKSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHMgPSBmcm9udFN0YXRlbWVudHM7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudHNWYWxpZGF0ZSkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50c1ZhbGlkYXRlID0gdGhpcy5zdGF0ZW1lbnRzLmV2ZXJ5KChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZhbGlkYXRlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3VicHJvb2YuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYXN0U3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBsYXN0U3RhdGVtZW50ID0gdGhpcy5nZXRMYXN0U3RhdGVtZW50KCksXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3QgbGFzdFN0ZXBDb250ZXh0ID0gbGFzdFN0ZXAuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBsYXN0U3RlcENvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChsYXN0U3RlcFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBsYXN0U3RhdGVtZW50ID0gdGhpcy5nZXRMYXN0U3RhdGVtZW50KCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3QgZGVkdWN0aW9uQ29udGV4dCA9IGRlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gZGVkdWN0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChkZWR1Y3Rpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbkNvbnRleHQgPSBzdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IHN1cHBvc2l0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMgPSBzdXBwb3NlZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdXBwb3NpdGlvblN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke3N1cHBvc2VkU3RhdGVtZW50U3RyaW5nfScgc3VwcG9zZWQgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnR4dCwgc3BzZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zZWRTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNMZW5ndGggPSBzdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCA9IHN1cHBvc2VkU3RhdGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYmFja3dhcmRzRXZlcnkoc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250eHQsIHNwc2VjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZkFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29yQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnRzKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vckFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1ldE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZXROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuIl0sIm5hbWVzIjpbImxhc3QiLCJmcm9udCIsImJhY2t3YXJkc0V2ZXJ5IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZkFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4Iiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJnZXRMYXN0U3RhdGVtZW50IiwibGFzdFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50IiwiaW5kZXgiLCJzdGF0ZW1lbnQiLCJzdXBwb3NlZFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsInN1cHBvc2VkU3RhdGVtZW50cyIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJzdGF0ZW1lbnRzVmFsaWRhdGUiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJldmVyeSIsInN0YXRlbWVudFZhbGlkYXRlcyIsImRlc2NlbmQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwicmVjb25jaWxlIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwiY29tbWl0IiwibGFzdFN0ZXBTdHJpbmciLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwibGFzdFN0ZXBDb250ZXh0IiwiZ2V0Q29udGV4dCIsImxhc3RTdGVwU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwiam9pbiIsImxhc3RTdGVwU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwiZGVkdWN0aW9uQ29udGV4dCIsImRlZHVjdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2VkU3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25Db250ZXh0Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsQ29udHh0Iiwic3BzZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1cHBvc2VkU3RhdGVtZW50c0xlbmd0aCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldERlZHVjdGlvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJzdWJwcm9vckFzc2VydGlvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsIm1h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