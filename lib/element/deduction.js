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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZURlZHVjdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBkZWNsYXJlLCBhdHRlbXB0LCBkZXNjZW5kLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVkdWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvbm5TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWR1Y3Rpb25uU3RyaW5nfScgZGVkdWN0aW9ubidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZGVkdWN0aW9ublN0cmluZ30nIGRlZHVjdGlvbm4ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVkdWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gaW5zdGFudGlhdGVEZWR1Y3Rpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldE5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImRlZHVjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImRlY2xhcmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJjb21taXQiLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWR1Y3Rpb25uU3RyaW5nIiwiZGVzY2VuZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsImRlZHVjdGlvblVuaWZpZXMiLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRGVkdWN0aW9uIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjswQkFFRDs2QkFDYzt5QkFDMEM7TUFFL0UsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJ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