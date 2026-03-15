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
        const lastStatement = this.getLastStatement(), lastStepString = lastStep.getString(), lastStepStatement = lastStep.getStatement(), lastStatementString = lastStatement.getString(), lastStepStatementString = lastStepStatement.getString(), subproofAssertionString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZyb250LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFzdFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50ID0gbGFzdCh0aGlzLnN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NlZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udCh0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50cyA9IGZyb250U3RhdGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRzVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50cyhzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50c1ZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZhbGlkYXRlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0ZXBTdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGVwU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCdzICcke2xhc3RTdGVwU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uJ3MgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnRleHQgPSBsYXN0U3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChsYXN0U3RlcFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAncyAnJHtsYXN0U3RlcFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbidzICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2VkU3RhdGVtZW50ID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NlZFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50LmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24ncyAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC4uLmApXG5cbiAgICBjb250ZXh0ID0gc3VwcG9zaXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyA9IHN1cHBvc2VkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN1cHBvc2l0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24ncyAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2VkU3RhdGVtZW50cyA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGggPSBzdXBwb3NlZFN0YXRlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGJhY2t3YXJkc0V2ZXJ5KHN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZkFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29yQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBzdWJwcm9vckFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29yQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWV0Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1ldE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG4iXSwibmFtZXMiOlsibGFzdCIsImZyb250IiwiYmFja3dhcmRzRXZlcnkiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldExhc3RTdGF0ZW1lbnQiLCJsYXN0U3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnQiLCJpbmRleCIsInN0YXRlbWVudCIsInN1cHBvc2VkU3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwic3VwcG9zZWRTdGF0ZW1lbnRzIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwic3RhdGVkIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInN0YXRlbWVudHNWYWxpZGF0ZSIsInZhbGlkYXRlU3RhdGVtZW50cyIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsIm1hcCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJsYXN0U3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwidW5pZnlMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJsYXN0U3RlcFN0cmluZyIsImxhc3RTdGVwU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0YXRlbWVudFN0cmluZyIsImxhc3RTdGVwU3RhdGVtZW50U3RyaW5nIiwiZ2V0Q29udGV4dCIsInJlY29uY2lsZSIsImxhc3RTdGVwU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2VkU3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGgiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3VicHJvb3JBc3NlcnRpb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1ldE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyQkFYK0I7a0VBRVQ7MEJBRUM7eUJBQ0c7NkJBRW1COzs7Ozs7QUFFN0MsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsY0FBYyxFQUFFLEdBQUdDLHlCQUFjO01BRXRELFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxr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