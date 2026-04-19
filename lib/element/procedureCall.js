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
const _breakPoint = require("../utilities/breakPoint");
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, procedureCallNode = (0, _instantiate.instantiateProcedureCall)(string, context), node = procedureCallNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), parameters = (0, _element.parametersFromProcedureCallNode)(json, context), procedureReference = (0, _element.procedureReferenceFromProcedureCallNode)(json, context);
            context = null;
            const procedureCall = new ProcedureCall(context, string, node, breakPoint, parameters, procedureReference);
            return procedureCall;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBldmFsdWF0ZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlLCBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyB0ZXJtc0Zyb21QcmltaXRpdmVzIH0gPSB0ZXJtc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFByb2NlZHVyZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBub2RlO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHsgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlLmdldFByb2NlZHVyZU5hbWUoKTsgfVxuXG4gIGZpbmRQcmltaXRpdmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlID0gcGFyYW1ldGVyLmZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMuZmluZFByaW1pdGl2ZXMoY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKTtcblxuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICB0ZXJtID0gYXdhaXQgZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcyk7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdGVybS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKCFib29sZWFuKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBkaWQgbm90IHJldHVybiBhIGJvb2xlYW4uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgICAgICBpZiAocHJpbWl0aXZlVmFsdWUpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBpbnN0YW50aWF0ZVByb2NlZHVyZUNhbGwoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICAgICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInRlcm1zRnJvbVByaW1pdGl2ZXMiLCJ0ZXJtc1V0aWxpdGllcyIsImRlZmluZSIsIlByb2NlZHVyZUNhbGwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldFByb2NlZHVyZU5hbWUiLCJmaW5kUHJpbWl0aXZlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwicHJpbWl0aXZlcyIsIm1hcCIsInBhcmFtZXRlciIsInByaW1pdGl2ZSIsImZpbmRQcmltaXRpdmUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlQm9vbGVhbiIsImlzQm9vbGVhbiIsImRlYnVnIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtcyIsInRlcm0iLCJldmFsdWF0ZSIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiaW5mbyIsImJvb2xlYW4iLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibmFtZSIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb2NlZHVyZUNhbGwiLCJicmVha1BvaW50RnJvbUpTT04iLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzZCQUNPOzBCQUVSO3lCQUNlOzZCQUNHOzRCQUNzQjt5QkFDMEI7QUFFekYsTUFBTSxFQUFFQSxtQkFBbUIsRUFBRSxHQUFHQywyQkFBYztNQUU5QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsdUJBQU87SUFDdkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixDQUFFO1FBQzdFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCO0lBQ2hDO0lBRUFHLHVCQUF1QjtRQUNyQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsb0JBQW9CUjtRQUUxQixPQUFPUTtJQUNUO0lBRUFDLG1CQUFtQjtRQUFFLE9BQU8sSUFBSSxDQUFDTixrQkFBa0IsQ0FBQ00sZ0JBQWdCO0lBQUk7SUFFeEVDLGVBQWVaLE9BQU8sRUFBRTtRQUN0QixNQUFNYSxnQkFBZ0JiLFFBQVFjLGdCQUFnQixJQUN4Q0MsYUFBYSxJQUFJLENBQUNYLFVBQVUsQ0FBQ1ksR0FBRyxDQUFDLENBQUNDO1lBQ2hDLE1BQU1DLFlBQVlELFVBQVVFLGFBQWEsQ0FBQ04sZUFBZWI7WUFFekQsT0FBT2tCO1FBQ1Q7UUFFTixPQUFPSDtJQUNUO0lBRUFLLFNBQVNwQixPQUFPLEVBQUU7UUFDaEIsSUFBSXFCLFlBQVk7UUFFaEIsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakR2QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RSxNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDZCxnQkFBZ0IsSUFDckNlLFlBQVkxQixRQUFRMkIsNEJBQTRCLENBQUNGO1FBRXZELElBQUlDLGNBQWMsTUFBTTtZQUN0QixNQUFNRSxtQkFBbUJGLFVBQVVHLFNBQVM7WUFFNUMsSUFBSUQsa0JBQWtCO2dCQUNwQlAsWUFBWTtZQUNkLE9BQU87Z0JBQ0xyQixRQUFROEIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFUixvQkFBb0IsMkJBQTJCLENBQUM7WUFDeEU7UUFDRixPQUFPO1lBQ0x0QixRQUFROEIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFUixvQkFBb0IsMkJBQTJCLENBQUM7UUFDeEU7UUFFQSxJQUFJRCxXQUFXO1lBQ2JyQixRQUFROEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVSLG9CQUFvQixpQkFBaUIsQ0FBQztRQUMzRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNVSxtQkFBbUIvQixPQUFPLEVBQUU7UUFDaEMsSUFBSWdDLHVCQUF1QjtRQUUzQixNQUFNVixzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVqRHZCLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLG9CQUFvQixpQ0FBaUMsQ0FBQztRQUVyRixNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDZCxnQkFBZ0IsSUFDckNJLGFBQWEsSUFBSSxDQUFDSCxjQUFjLENBQUNaLFVBQ2pDMEIsWUFBWTFCLFFBQVEyQiw0QkFBNEIsQ0FBQ0YsZ0JBQ2pEUSxRQUFRdEMsb0JBQW9Cb0I7UUFFbEMsSUFBSW1CLE9BQU87UUFFWCxJQUFJO1lBQ0ZBLE9BQU8sTUFBTUMsSUFBQUEsaUJBQVEsRUFBQ1QsV0FBV087UUFDbkMsRUFBRSxPQUFPRyxXQUFXO1lBQ2xCLE1BQU1DLFVBQVVELFVBQVVFLFVBQVU7WUFFcEN0QyxRQUFRdUMsSUFBSSxDQUFDRjtRQUNmO1FBRUEsSUFBSUgsU0FBUyxNQUFNO1lBQ2pCLE1BQU1NLFVBQVVOLEtBQUtMLFNBQVM7WUFFOUIsSUFBSSxDQUFDVyxTQUFTO2dCQUNaeEMsUUFBUXVDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRWpCLG9CQUFvQiwwQ0FBMEMsQ0FBQztZQUN0RixPQUFPO2dCQUNMLE1BQU1tQixpQkFBaUJQLEtBQUtRLGlCQUFpQjtnQkFFN0MsSUFBSUQsZ0JBQWdCO29CQUNsQlQsdUJBQXVCO2dCQUN6QjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQSxzQkFBc0I7WUFDeEJoQyxRQUFROEIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVSLG9CQUFvQiwrQkFBK0IsQ0FBQztRQUN2RjtRQUVBLE9BQU9VO0lBQ1Q7SUFFQSxPQUFPVyxPQUFPLGdCQUFnQjtJQUU5QkMsU0FBUztRQUNQLE1BQU0zQyxTQUFTLElBQUksQ0FBQ3NCLFNBQVM7UUFFN0IsSUFBSXBCO1FBRUpBLGFBQWEsSUFBSSxDQUFDMEMsYUFBYTtRQUUvQixNQUFNQyxpQkFBaUJDLElBQUFBLHNDQUEwQixFQUFDNUM7UUFFbERBLGFBQWEyQyxnQkFBaUIsR0FBRztRQUVqQyxNQUFNRSxPQUFPO1lBQ1gvQztZQUNBRTtRQUNGO1FBRUEsT0FBTzZDO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUVoRCxPQUFPLEVBQUU7UUFDN0IsT0FBT2tELElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2xEO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUcrQyxNQUNidEMsb0JBQW9CeUMsSUFBQUEscUNBQXdCLEVBQUNsRCxRQUFRRCxVQUNyREUsT0FBT1EsbUJBQ1BQLGFBQWFpRCxJQUFBQSw4QkFBa0IsRUFBQ0osT0FDaEM1QyxhQUFhaUQsSUFBQUEsd0NBQStCLEVBQUNMLE1BQU1oRCxVQUNuREsscUJBQXFCaUQsSUFBQUEsZ0RBQXVDLEVBQUNOLE1BQU1oRDtZQUV6RUEsVUFBVTtZQUVWLE1BQU11RCxnQkFBZ0IsSUFBSXpELGNBQWNFLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDLFlBQVlDO1lBRXZGLE9BQU9rRDtRQUNULEdBQUd2RDtJQUNMO0FBQ0YifQ==