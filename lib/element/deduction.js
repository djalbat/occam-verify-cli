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
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Deduction extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, statement){
        super(context, string, node, lineIndex);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getDeductionNode() {
        const node = this.getNode(), deductionNode = node; ///
        return deductionNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const deductionString = this.getString(); ///
        context.trace(`Verifying the '${deductionString}' deduction...`);
        if (this.statement !== null) {
            const validates = this.validate(context);
            if (validates) {
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${deductionString}' deduction because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${deductionString}' deduction.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const deductionString = this.getString(); ///
        context.trace(`Validating the '${deductionString}' deduction...`);
        (0, _context.declare)((context)=>{
            (0, _context.attempt)((context)=>{
                const statementValidates = this.validateStatement(context);
                if (statementValidates) {
                    validates = true;
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
        }, context);
        if (validates) {
            context.debug(`...validated the '${deductionString}' deduction.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const deductionnString = this.getString(); ///
        context.trace(`Validating the '${deductionnString}' deductionn's statement...`);
        (0, _context.descend)((context)=>{
            const statement = this.statement.validate(context);
            if (statement !== null) {
                statementValidates = true;
            }
        }, context);
        if (statementValidates) {
            context.trace(`...validated the '${deductionnString}' deductionn's statement.`);
        }
        return statementValidates;
    }
    unifyStep(step, context) {
        let stepUnifies = false;
        const stepString = step.getString(), deductionString = this.getString(); ///
        context.trace(`Unifying the '${stepString}' step with the '${deductionString}' deduction...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const statement = step.getStatement(), statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);
        if (statementUnifies) {
            stepUnifies = true;
        }
        if (stepUnifies) {
            context.debug(`...unified the '${stepString}' step with the '${deductionString}' deduction.`);
        }
        return stepUnifies;
    }
    unifyDeduction(deduction, substitutions, generalContext, specificContext) {
        let deductionUnifies = false;
        const context = specificContext, generalDeduction = this, specificDeduction = deduction, generalDeductionString = generalDeduction.getString(), specificDeductionString = specificDeduction.getString();
        context.trace(`Unifying the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction...`);
        const statement = specificDeduction.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
        if (statementUnifies) {
            deductionUnifies = true;
        }
        if (deductionUnifies) {
            context.debug(`...unified the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction.`);
        }
        return deductionUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getLineIndex(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static name = "Deduction";
    static fromJSON(json, context) {
        let deduction;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, deductionNode = (0, _instantiate.instantiateDeduction)(string, context), node = deductionNode, statement = statementFromDeductionNode(deductionNode, context);
                deduction = new Deduction(context, string, node, lineIndex, statement);
            }, context);
        }, json, context);
        return deduction;
    }
});
function statementFromDeductionNode(deductionNode, context) {
    const statementNode = deductionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZURlZHVjdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBkZWNsYXJlLCBhdHRlbXB0LCBkZXNjZW5kLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWNsYXJlKChjb250ZXh0KSA9PiB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVkdWN0aW9ublN0cmluZ30nIGRlZHVjdGlvbm4ncyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZHVjdGlvbm5TdHJpbmd9JyBkZWR1Y3Rpb25uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZHVjdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkRlZHVjdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldERlZHVjdGlvbk5vZGUiLCJnZXROb2RlIiwiZGVkdWN0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJkZWR1Y3Rpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJkZWNsYXJlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0IiwiZGVkdWN0aW9ublN0cmluZyIsImRlc2NlbmQiLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJzdGVwU3RyaW5nIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwiZGVkdWN0aW9uVW5pZmllcyIsImdlbmVyYWxEZWR1Y3Rpb24iLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVEZWR1Y3Rpb24iLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5n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