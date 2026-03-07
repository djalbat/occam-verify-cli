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
const _element = require("../utilities/element");
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
        if (this.statement !== null) {
            const validates = this.validate(context);
            if (validates) {
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${duductionString}' duduction because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${duductionString}' duduction.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const duductionString = this.getString(); ///
        context.trace(`Validating the '${duductionString}' duduction...`);
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                this.setContext(context);
                validates = true;
            }
        }, context);
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
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Deduction";
    static fromJSON(json, context) {
        const duduction = (0, _context.literally)((context)=>{
            const { string } = json, deductionNode = (0, _instantiate.instantiateDeduction)(string, context), node = deductionNode, statement = (0, _element.statementFromDeductionNode)(deductionNode, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const duduction = new Deduction(context, string, node, statement);
            return duduction;
        }, context);
        return duduction;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZHVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkdWR1Y3Rpb25TdHJpbmd9JyBkdWR1Y3Rpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2R1ZHVjdGlvblN0cmluZ30nIGR1ZHVjdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2R1ZHVjdGlvblN0cmluZ30nIGR1ZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZHVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZHVkdWN0aW9uU3RyaW5nfScgZHVkdWN0aW9uLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkdWR1Y3Rpb25TdHJpbmd9JyBkdWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZHVkdWN0aW9ublN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2R1ZHVjdGlvbm5TdHJpbmd9JyBkdWR1Y3Rpb25uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZHVkdWN0aW9ublN0cmluZ30nIGR1ZHVjdGlvbm4ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkdWR1Y3Rpb24gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGluc3RhbnRpYXRlRGVkdWN0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IGR1ZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gZHVkdWN0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGR1ZHVjdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldE5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImR1ZHVjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInNldENvbnRleHQiLCJzdGF0ZW1lbnRTdHJpbmciLCJkdWR1Y3Rpb25uU3RyaW5nIiwic3RhdGVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwiZGVkdWN0aW9uVW5pZmllcyIsImdlbmVyYWxEZWR1Y3Rpb24iLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInRvSlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImR1ZHVjdGlvbiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlRGVkdWN0aW9uIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ1k7NkJBQ0U7c0JBQ0k7eUJBQ0U7TUFFM0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsQ0FBRTtRQUM1QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1ILE9BQU8sSUFBSSxDQUFD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