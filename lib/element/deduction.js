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
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZURlZHVjdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBkZWNsYXJlLCBhdHRlbXB0LCBkZXNjZW5kLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWNsYXJlKChjb250ZXh0KSA9PiB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVkdWN0aW9ublN0cmluZ30nIGRlZHVjdGlvbm4ncyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZHVjdGlvbm5TdHJpbmd9JyBkZWR1Y3Rpb25uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlZHVjdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvbjtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gaW5zdGFudGlhdGVEZWR1Y3Rpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiZGVkdWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiZGVjbGFyZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsImRlZHVjdGlvbm5TdHJpbmciLCJkZXNjZW5kIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwic3RlcFN0cmluZyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZGVkdWN0aW9uIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRGVkdWN0aW9uIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjswQkFFRDs2QkFDYzt5QkFDMEM7TUFFL0UsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0osU0FBU0Ms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