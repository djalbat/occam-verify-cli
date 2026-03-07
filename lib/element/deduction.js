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
        (0, _context.attempt)((context)=>{
            const deduction = this.validate(context);
            if (deduction !== null) {
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
        let deduction = null;
        const duductionString = this.getString(); ///
        context.trace(`Validating the '${duductionString}' duduction...`);
        if (this.statement !== null) {
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                deduction = this; ///
            }
        } else {
            context.debug(`Unable to verify the '${duductionString}' duduction because it is nonsense.`);
        }
        if (deduction) {
            context.debug(`...validated the '${duductionString}' duduction.`);
        }
        return deduction;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZHVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkdWR1Y3Rpb25TdHJpbmd9JyBkdWR1Y3Rpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2R1ZHVjdGlvblN0cmluZ30nIGR1ZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkdWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkdWR1Y3Rpb25TdHJpbmd9JyBkdWR1Y3Rpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBkZWR1Y3Rpb24gPSB0aGlzOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZHVkdWN0aW9uU3RyaW5nfScgZHVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKGRlZHVjdGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkdWR1Y3Rpb25TdHJpbmd9JyBkdWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZHVkdWN0aW9ublN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2R1ZHVjdGlvbm5TdHJpbmd9JyBkdWR1Y3Rpb25uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZHVkdWN0aW9ublN0cmluZ30nIGR1ZHVjdGlvbm4ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBkdWR1Y3Rpb24gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGluc3RhbnRpYXRlRGVkdWN0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IGR1ZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gZHVkdWN0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGR1ZHVjdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldE5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImR1ZHVjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsImRlZHVjdGlvbiIsInZhbGlkYXRlIiwic2V0Q29udGV4dCIsImRlYnVnIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJkdWR1Y3Rpb25uU3RyaW5nIiwic3RhdGVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VW5pZmllcyIsImRlZHVjdGlvblN0cmluZyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImdlbmVyYWxEZWR1Y3Rpb24iLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInRvSlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImR1ZHVjdGlvbiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlRGVkdWN0aW9uIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ1k7NkJBQ0U7c0JBQ0k7eUJBQ0U7TUFFM0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsQ0FBRTtRQUM1QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUsbUJB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