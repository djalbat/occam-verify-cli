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
        const duductionString = this.getString(); ///
        context.trace(`Verifying the '${duductionString}' duduction...`);
        (0, _context.attempt)((context)=>{
            const validates = this.validate(context);
            if (validates) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${duductionString}' duduction.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const duductionString = this.getString(); ///
        context.trace(`Validating the '${duductionString}' duduction...`);
        if (this.statement !== null) {
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                validates = true;
            }
        } else {
            context.debug(`Unable to verify the '${duductionString}' duduction because it is nonsense.`);
        }
        if (validates) {
            context.debug(`...validated the '${duductionString}' duduction.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates;
        const statementString = this.statement.getString(), duductionnString = this.getString(); ///
        context.trace(`Validating the '${duductionnString}' duductionn's '${statementString}' statement...`);
        const stated = true, statement = this.statement.validate(stated, context);
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.trace(`...validated the '${duductionnString}' duductionn's '${statementString}' statement.`);
        }
        return statementValidates;
    }
    unifyStatement(statement, substitutions, context) {
        let statementUnifies;
        const statementString = statement.getString(), deductionString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${deductionString}' deduction...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
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
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, string = this.getString(), json = {
            context,
            string,
            statement
        };
        return json;
    }
    static name = "Deduction";
    static fromJSON(json, context) {
        const duduction = (0, _context.literally)((context)=>{
            const { string } = json, duductionNode = (0, _instantiate.instantiateDeduction)(string, context), node = duductionNode, statement = statementFromJSON(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const duduction = new Deduction(context, string, node, statement);
            return duduction;
        }, context);
        return duduction;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZWR1Y3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGR1ZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZHVkdWN0aW9uU3RyaW5nfScgZHVkdWN0aW9uLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkdWR1Y3Rpb25TdHJpbmd9JyBkdWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGR1ZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2R1ZHVjdGlvblN0cmluZ30nIGR1ZHVjdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2R1ZHVjdGlvblN0cmluZ30nIGR1ZHVjdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZHVkdWN0aW9uU3RyaW5nfScgZHVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGR1ZHVjdGlvbm5TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkdWR1Y3Rpb25uU3RyaW5nfScgZHVkdWN0aW9ubidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2R1ZHVjdGlvbm5TdHJpbmd9JyBkdWR1Y3Rpb25uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWR1Y3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGR1ZHVjdGlvbiA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBkdWR1Y3Rpb25Ob2RlID0gaW5zdGFudGlhdGVEZWR1Y3Rpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBkdWR1Y3Rpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgZHVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBkdWR1Y3Rpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZHVkdWN0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWR1Y3Rpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiZHVkdWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJzZXRDb250ZXh0IiwiZGVidWciLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImR1ZHVjdGlvbm5TdHJpbmciLCJzdGF0ZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwidG9KU09OIiwiY29udGV4dEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImR1ZHVjdGlvbiIsImxpdGVyYWxseSIsImR1ZHVjdGlvbk5vZGUiLCJpbnN0YW50aWF0ZURlZHVjdGlvbiIsInN0YXRlbWVudEZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNZOzZCQUNFO3NCQUM4QjtNQUVuRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxD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