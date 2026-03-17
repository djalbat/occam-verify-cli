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
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context), sanitised = true;
        return (0, _context.instantiate)((context)=>{
            const { string } = json, deductionNode = (0, _instantiate.instantiateDeduction)(string, context);
            context = ephemeralContext; ///
            const node = deductionNode, statement = statementFromDeductionNode(deductionNode, context), deduction = new Deduction(context, string, node, statement);
            return deduction;
        }, sanitised, context);
    }
});
function statementFromDeductionNode(deductionNode, context) {
    const statementNode = deductionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWR1Y3Rpb24gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvbm5TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25uU3RyaW5nfScgZGVkdWN0aW9ubidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZHVjdGlvbm5TdHJpbmd9JyBkZWR1Y3Rpb25uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNhbml0aXNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGluc3RhbnRpYXRlRGVkdWN0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3Qgbm9kZSA9IGRlZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBkZWR1Y3Rpb247XG4gICAgfSwgc2FuaXRpc2VkLCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiZGVkdWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0Iiwic3RhdGVtZW50U3RyaW5nIiwiZGVkdWN0aW9ublN0cmluZyIsInN0YXRlZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsImRlZHVjdGlvblVuaWZpZXMiLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJ0b0pTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsInNhbml0aXNlZCIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVEZWR1Y3Rpb24iLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNjOzZCQUNBO3NCQUM0QztNQUVqRixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGdCQUFnQkwsTUFBTSxHQUFHO1FBRS9CLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPUixPQUFPLEVBQUU7UUFDcEIsSUFBSVMsV0FBVztRQUVmLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGdCQUFnQixjQUFjLENBQUM7UUFFL0QsSUFBSSxJQUFJLENBQUNSLFNBQVMsS0FBSyxNQUFNO1lBQzNCLE1BQU1XLFlBQVksSUFBSSxDQUFDQyxRQUFRLENBQUNmO1lBRWhDLElBQUljLFdBQVc7Z0JBQ2JMLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTFQsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixFQUFFTCxnQkFBZ0IsbUNBQW1DLENBQUM7UUFDN0Y7UUFFQSxJQUFJRixVQUFVO1lBQ1pULFFBQVFnQixLQUFLLENBQUMsQ0FB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