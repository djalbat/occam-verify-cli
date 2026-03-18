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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _json = require("../utilities/json");
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
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                context.commit(this);
                validates = true;
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${deductionString}' deduction.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates;
        const statementString = this.statement.getString(), deductionnString = this.getString(); ///
        context.trace(`Validating the '${deductionnString}' deductionn's '${statementString}' statement...`);
        const stated = true, statement = this.statement.validate(stated, context);
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.trace(`...validated the '${deductionnString}' deductionn's '${statementString}' statement.`);
        }
        return statementValidates;
    }
    unifyStatement(statement, context) {
        let statementUnifies;
        const statementString = statement.getString(), deductionString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${deductionString}' deduction...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${deductionString}' deduction.`);
        }
        return statementUnifies;
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
        let context;
        context = this.getContext();
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Deduction";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        return (0, _context.instantiate)((context)=>{
            const { string } = json, deductionNode = (0, _instantiate.instantiateDeduction)(string, context), node = deductionNode, statement = statementFromDeductionNode(deductionNode, context), deduction = new Deduction(context, string, node, statement);
            return deduction;
        }, context);
    }
});
function statementFromDeductionNode(deductionNode, context) {
    const statementNode = deductionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWR1Y3Rpb24gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvbm5TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25uU3RyaW5nfScgZGVkdWN0aW9ubidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZHVjdGlvbm5TdHJpbmd9JyBkZWR1Y3Rpb25uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZHVjdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBkZWR1Y3Rpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldE5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImRlZHVjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsInN0YXRlbWVudFN0cmluZyIsImRlZHVjdGlvbm5TdHJpbmciLCJzdGF0ZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwidG9KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRGVkdWN0aW9uIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDYzs2QkFDQTtzQkFDNEM7TUFFakYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsQ0FBRTtRQUM1QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxnQkFBZ0JMLE1BQU0sR0FBRztRQUUvQixPQUFPSztJQUNUO0lBRUEsTUFBTUMsT0FBT1IsT0FBTyxFQUFFO1FBQ3BCLElBQUlTLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDVjtRQUVqQixNQUFNVyxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q1osUUFBUWEsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixnQkFBZ0IsY0FBYyxDQUFDO1FBRS9ELElBQUksSUFBSSxDQUFDUixTQUFTLEtBQUssTUFBTTtZQUMzQixNQUFNVyxZQUFZLElBQUksQ0FBQ0MsUUFBUSxDQUFDZjtZQUVoQyxJQUFJYyxXQUFXO2dCQUNiTCxXQUFXO1lBQ2I7UUFDRixPQUFPO1lBQ0xULFFBQVFnQixLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRUwsZ0JBQWdCLG1DQUFtQyxDQUFDO1FBQzdGO1FBRUEsSUFBSUYsVUFBVTtZQUNaVCxRQUFRZ0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVMLGdCQUFnQixZQUFZLENBQUM7UUFDakU7UUFFQSxPQUFPRjtJQUNUO0lB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