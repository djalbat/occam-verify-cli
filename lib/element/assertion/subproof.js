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
        const subproofAssertionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${subproofAssertionString}' subproof assertion...`);
        (0, _context.reconcile)((context)=>{
            const deduction = topLevelMetaAssertion.getDeduction(), generalContext = context, specificContext = context, deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
            if (deductionUnifies) {
                const suppositions = topLevelMetaAssertion.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);
                if (suppositionsUnify) {
                    specificContext.commit();
                    topLevelMetaAssertionUnifies = true;
                }
            }
        }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBkZXNjZW5kLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbGFzdCwgZnJvbnQsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRMYXN0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RTdGF0ZW1lbnQgPSBsYXN0KHRoaXMuc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gbGFzdFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHRoaXMuc3RhdGVtZW50cyksXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRzID0gZnJvbnRTdGF0ZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zZWRTdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50c1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRzVmFsaWRhdGUpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5ldmVyeSgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWYWxpZGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IGxhc3RTdGVwQ29udGV4dCA9IGxhc3RTdGVwLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGxhc3RTdGVwQ29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMgPSBsYXN0U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KGxhc3RTdGVwU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhc3RTdGF0ZW1lbnQgPSB0aGlzLmdldExhc3RTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBkZWR1Y3Rpb25Db250ZXh0ID0gZGVkdWN0aW9uLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGRlZHVjdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRVbmlmaWVzID0gbGFzdFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChkZWR1Y3Rpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2xhc3RTdGF0ZW1lbnRTdHJpbmd9JyBsYXN0IHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnQgPSB0aGlzLmdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC4uLmApXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbkNvbnRleHQgPSBzdXBwb3NpdGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzID0gc3VwcG9zZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3VwcG9zaXRpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250eHQsIHNwc2VjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2VkU3RhdGVtZW50cyA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGggPSBzdXBwb3NlZFN0YXRlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGJhY2t3YXJkc0V2ZXJ5KHN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udHh0LCBzcHNlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb3JBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBzdWJwcm9vckFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudHMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29yQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWV0Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1ldE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG4iXSwibmFtZXMiOlsibGFzdCIsImZyb250IiwiYmFja3dhcmRzRXZlcnkiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50Iiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJnZXRMYXN0U3RhdGVtZW50IiwibGFzdFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50IiwiaW5kZXgiLCJzdGF0ZW1lbnQiLCJzdXBwb3NlZFN0YXRlbWVudCIsImdldFN1cHBvc2VkU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsInN1cHBvc2VkU3RhdGVtZW50cyIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJzdGF0ZW1lbnRzVmFsaWRhdGUiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJldmVyeSIsInN0YXRlbWVudFZhbGlkYXRlcyIsImRlc2NlbmQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwicmVjb25jaWxlIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwiY29tbWl0IiwibGFzdFN0ZXBTdHJpbmciLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwibGFzdFN0ZXBDb250ZXh0IiwiZ2V0Q29udGV4dCIsImxhc3RTdGVwU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25Db250ZXh0IiwiZGVkdWN0aW9uU3RhdGVtZW50IiwiZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllcyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxDb250eHQiLCJzcHNlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN1YnByb29yQXNzZXJ0aW9uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwibWFwIiwic3RhdGVtZXROb2RlIiwiZmluZFN0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