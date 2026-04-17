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
const _occamfurtle = require("occam-furtle");
const _elements = require("../elements");
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const { termsFromPrimitives } = _occamfurtle.termsUtilities;
const _default = (0, _elements.define)(class ProcedureCall extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, parameters, procedureReference){
        super(context, string, node, breakPoint);
        this.parameters = parameters;
        this.procedureReference = procedureReference;
    }
    getParameters() {
        return this.parameters;
    }
    getProcedureReference() {
        return this.procedureReference;
    }
    getProcedureCallNode() {
        const node = this.getNode(), procedureCallNode = node;
        return procedureCallNode;
    }
    getProcedureName() {
        return this.procedureReference.getProcedureName();
    }
    findPrimitives(context) {
        const substitutions = context.getSubstitutions(), primitives = this.parameters.map((parameter)=>{
            const primitive = parameter.findPrimitive(substitutions, context);
            return primitive;
        });
        return primitives;
    }
    validate(context) {
        let validates = false;
        const procedureCallString = this.getString(); ///
        context.trace(`Validating the '${procedureCallString}' procedure call...`);
        const procedureName = this.getProcedureName(), procedure = context.findProcedureByProcedureName(procedureName);
        if (procedure !== null) {
            const procedureBoolean = procedure.isBoolean();
            if (procedureBoolean) {
                validates = true;
            } else {
                context.debug(`The '${procedureCallString}' procedure is not boolean.`);
            }
        } else {
            context.debug(`The '${procedureCallString}' procedure is not present.`);
        }
        if (validates) {
            context.debug(`...validated the '${procedureCallString}' procedure call.`);
        }
        return validates;
    }
    async unifyIndependently(context) {
        let unifiesIndependently = false;
        const procedureCallString = this.getString(); ///
        context.trace(`Unifying the '${procedureCallString}' procedure call independently...`);
        const procedureName = this.getProcedureName(), primitives = this.findPrimitives(context), procedure = context.findProcedureByProcedureName(procedureName), terms = termsFromPrimitives(primitives);
        let term = null;
        try {
            term = await (0, _context.evaluate)(procedure, terms);
        } catch (exception) {
            const message = exception.getMessage();
            context.info(message);
        }
        if (term !== null) {
            const boolean = term.isBoolean();
            if (!boolean) {
                context.info(`The '${procedureCallString}' procedure call did not return a boolean.`);
            } else {
                const primitiveValue = term.getPrimitiveValue();
                if (primitiveValue) {
                    unifiesIndependently = true;
                }
            }
        }
        if (unifiesIndependently) {
            context.debug(`...unified the '${procedureCallString}' procedure call independently.`);
        }
        return unifiesIndependently;
    }
    static name = "ProcedureCall";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, procedureCallNode = (0, _instantiate.instantiateProcedureCall)(string, context), node = procedureCallNode, parameters = (0, _element.parametersFromProcedureCallNode)(json, context), procedureReference = (0, _element.procedureReferenceFromProcedureCallNode)(json, context);
            context = null;
            const procedureCall = new ProcedureCall(context, string, node, breakPoint, parameters, procedureReference);
            return procedureCall;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSwgZXZhbHVhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlLCBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyB0ZXJtc0Zyb21QcmltaXRpdmVzIH0gPSB0ZXJtc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFByb2NlZHVyZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBub2RlO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHsgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlLmdldFByb2NlZHVyZU5hbWUoKTsgfVxuXG4gIGZpbmRQcmltaXRpdmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlID0gcGFyYW1ldGVyLmZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMuZmluZFByaW1pdGl2ZXMoY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKTtcblxuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICB0ZXJtID0gYXdhaXQgZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcyk7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdGVybS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKCFib29sZWFuKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBkaWQgbm90IHJldHVybiBhIGJvb2xlYW4uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgICAgICBpZiAocHJpbWl0aXZlVmFsdWUpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IGluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ0ZXJtc0Zyb21QcmltaXRpdmVzIiwidGVybXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwiZmluZFByaW1pdGl2ZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJwcmltaXRpdmUiLCJmaW5kUHJpbWl0aXZlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybXMiLCJ0ZXJtIiwiZXZhbHVhdGUiLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImluZm8iLCJib29sZWFuIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5hbWUiLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbCIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FW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