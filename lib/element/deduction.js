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
    constructor(context, string, node, statement){
        super(context, string, node);
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
                    context.commit(this);
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
        const statementString = this.statement.getString(), deductionnString = this.getString(); ///
        context.trace(`Validating the '${deductionnString}' deductionn's '${statementString}' statement...`);
        (0, _context.descend)((context)=>{
            const statement = this.statement.validate(context);
            if (statement !== null) {
                statementValidates = true;
            }
        }, context);
        if (statementValidates) {
            context.trace(`...validated the '${deductionnString}' deductionn's '${statementString}' statement.`);
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
            const string = this.getString(), json = {
                context,
                string
            };
            return json;
        }, context);
    }
    static name = "Deduction";
    static fromJSON(json, context) {
        let deduction;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, deductionNode = (0, _instantiate.instantiateDeduction)(string, context), node = deductionNode, statement = statementFromDeductionNode(deductionNode, context);
                deduction = new Deduction(context, string, node, statement);
            }, context);
        }, json, context);
        return deduction;
    }
});
function statementFromDeductionNode(deductionNode, context) {
    const statementNode = deductionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZURlZHVjdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBkZWNsYXJlLCBhdHRlbXB0LCBkZXNjZW5kLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvbm5TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25uU3RyaW5nfScgZGVkdWN0aW9ubidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZGVkdWN0aW9ublN0cmluZ30nIGRlZHVjdGlvbm4ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvbiA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWR1Y3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb247XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZHVjdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiZGVkdWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiZGVjbGFyZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsInN0YXRlbWVudFN0cmluZyIsImRlZHVjdGlvbm5TdHJpbmciLCJkZXNjZW5kIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwic3RlcFN0cmluZyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsImRlZHVjdGlvblVuaWZpZXMiLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRGVkdWN0aW9uIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7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