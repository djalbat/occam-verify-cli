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
const _breakPoint = require("../../utilities/breakPoint");
const _instantiate = require("../../process/instantiate");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBqb2luLCBkZXNjZW5kLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbGFzdCwgZnJvbnQsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRMYXN0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RTdGF0ZW1lbnQgPSBsYXN0KHRoaXMuc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gbGFzdFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1cHBvc2VkU3RhdGVtZW50KGluZGV4KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2VkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHRoaXMuc3RhdGVtZW50cyksXG4gICAgICAgICAgc3VwcG9zZWRTdGF0ZW1lbnRzID0gZnJvbnRTdGF0ZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zZWRTdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50c1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRzVmFsaWRhdGUpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMuc3RhdGVtZW50cy5ldmVyeSgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWYWxpZGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IGxhc3RTdGVwQ29udGV4dCA9IGxhc3RTdGVwLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gbGFzdFN0ZXBDb250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RTdGVwU3RhdGVtZW50VW5pZmllcyA9IGxhc3RTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQobGFzdFN0ZXBTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChsYXN0U3RlcFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RTdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0YXRlbWVudCA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudCgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7bGFzdFN0YXRlbWVudFN0cmluZ30nIGxhc3Qgc3RhdGVtZW50Li4uYClcblxuICAgIGNvbnN0IGRlZHVjdGlvbkNvbnRleHQgPSBkZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IGRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGRlZHVjdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyA9IGxhc3RTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoZGVkdWN0aW9uU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtsYXN0U3RhdGVtZW50U3RyaW5nfScgbGFzdCBzdGF0ZW1lbnQuYClcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2VkU3RhdGVtZW50ID0gdGhpcy5nZXRTdXBwb3NlZFN0YXRlbWVudChpbmRleCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2VkU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7c3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NlZCBzdGF0ZW1lbnQuLi5gKVxuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Db250ZXh0ID0gc3VwcG9zaXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRVbmlmaWVzID0gc3VwcG9zZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3VwcG9zaXRpb25TdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NlZFN0YXRlbWVudFN0cmluZ30nIHN1cHBvc2VkIHN0YXRlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250eHQsIHNwc2VjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2VkU3RhdGVtZW50cyA9IHRoaXMuZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzdXBwb3NlZFN0YXRlbWVudHNMZW5ndGggPSBzdXBwb3NlZFN0YXRlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGJhY2t3YXJkc0V2ZXJ5KHN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udHh0LCBzcHNlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vckFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHN1YnByb29yQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RhdGVtZW50cyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb3JBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZXROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWV0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJsYXN0IiwiZnJvbnQiLCJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldExhc3RTdGF0ZW1lbnQiLCJsYXN0U3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnQiLCJpbmRleCIsInN0YXRlbWVudCIsInN1cHBvc2VkU3RhdGVtZW50IiwiZ2V0U3VwcG9zZWRTdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwic3VwcG9zZWRTdGF0ZW1lbnRzIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInN0YXRlbWVudHNWYWxpZGF0ZSIsInZhbGlkYXRlU3RhdGVtZW50cyIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsImV2ZXJ5Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiZGVzY2VuZCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJyZWNvbmNpbGUiLCJsYXN0U3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwidW5pZnlMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJjb21taXQiLCJsYXN0U3RlcFN0cmluZyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJsYXN0U3RlcENvbnRleHQiLCJnZXRDb250ZXh0IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJqb2luIiwibGFzdFN0ZXBTdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJkZWR1Y3Rpb25TdHJpbmciLCJkZWR1Y3Rpb25Db250ZXh0IiwiZGVkdWN0aW9uU3RhdGVtZW50IiwiZGVkdWN0aW9uU3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllcyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3VwcG9zZWRTdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxDb250eHQiLCJzcHNlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3VwcG9zZWRTdGF0ZW1lbnRzTGVuZ3RoIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN1YnByb29yQXNzZXJ0aW9uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwibWFwIiwic3RhdGVtZXROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkJBYitCO2tFQUVUOzBCQUVDO3lCQUNHOzRCQUNTOzZCQUVVO3lCQUNNOzs7Ozs7QUFFbkQsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsY0FBYyxFQUFFLEdBQUdDLHlCQUFjO01BRXRELFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxrQkFBUztJQUM3RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsQ0FBRTtRQUN6RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCZCxLQUFLLElBQUksQ0FBQ1csVUFBVTtRQUUxQyxPQUFPRztJQUNUO0lBRUFDLHFCQUFxQkMsS0FBSyxFQUFFO1FBQzFCLE1BQU1DLFlBQVksSUFBSSxDQUFDTixVQUFVLENBQUNLLE1BQU0sRUFDbENFLG9CQUFvQkQsV0FBWSxHQUFHO1FBRXpDLE9BQU9DO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQ3RCLE1BQU1DLGtCQUFrQm5CLE1BQU0sSUFBSSxDQUFDVSxVQUFVLEdBQ3ZDVSxxQkFBcUJELGlCQUFrQixHQUFHO1FBRWhELE9BQU9DO0lBQ1Q7SUFFQUMsMkJBQTJCO1FBQ3pCLE1BQU1iLE9BQU8sSUFB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