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
    constructor(context, string, node, parameters, procedureReference){
        super(context, string, node);
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
            const primitive = parameter.findPrimitive(substitutions);
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
        const procedureName = this.getProcedureName(), procedure = context.findProcedureByProcedureName(procedureName);
        try {
            const primitives = this.findPrimitives(context), terms = termsFromPrimitives(primitives), term = await procedure.call(terms, context), boolean = term.isBoolean();
            if (!boolean) {
                context.info(`The '${procedureCallString}' procedure call did not return a boolean.`);
            } else {
                const primitiveValue = term.getPrimitiveValue();
                if (primitiveValue) {
                    unifiesIndependently = true;
                }
            }
        } catch (exception) {
            const message = exception.getMessage();
            context.info(message);
        }
        if (unifiesIndependently) {
            context.debug(`...unified the '${procedureCallString}' procedure call independently.`);
        }
        return unifiesIndependently;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "ProcedureCall";
    static fromJSON(json, context) {
        const procedureCall = (0, _context.instantiate)((context)=>{
            const { string } = json, procedureCallNode = (0, _instantiate.instantiateProcedureCall)(string, context), node = procedureCallNode, parameters = (0, _element.parametersFromProcedureCallNode)(json, context), procedureReference = (0, _element.procedureReferenceFromProcedureCallNode)(json, context);
            context = null;
            const procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
            return procedureCall;
        }, context);
        return procedureCall;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9jZWR1cmVDYWxsIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUsIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IHRlcm1zRnJvbVByaW1pdGl2ZXMgfSA9IHRlcm1zVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlQ2FsbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IG5vZGU7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbE5vZGU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVOYW1lKCkgeyByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UuZ2V0UHJvY2VkdXJlTmFtZSgpOyB9XG5cbiAgZmluZFByaW1pdGl2ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBwcmltaXRpdmVzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBwYXJhbWV0ZXIuZmluZFByaW1pdGl2ZShzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmltaXRpdmVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIGlmIChwcm9jZWR1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUJvb2xlYW4gPSBwcm9jZWR1cmUuaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVCb29sZWFuKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJpbWl0aXZlcyA9IHRoaXMuZmluZFByaW1pdGl2ZXMoY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcyksXG4gICAgICAgICAgICB0ZXJtID0gYXdhaXQgcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IHRlcm0uaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmICghYm9vbGVhbikge1xuICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgZGlkIG5vdCByZXR1cm4gYSBib29sZWFuLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHByaW1pdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBpbnN0YW50aWF0ZVByb2NlZHVyZUNhbGwoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUoanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUoanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gICAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ0ZXJtc0Zyb21QcmltaXRpdmVzIiwidGVybXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldFByb2NlZHVyZU5hbWUiLCJmaW5kUHJpbWl0aXZlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwicHJpbWl0aXZlcyIsIm1hcCIsInBhcmFtZXRlciIsInByaW1pdGl2ZSIsImZpbmRQcmltaXRpdmUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlQm9vbGVhbiIsImlzQm9vbGVhbiIsImRlYnVnIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtcyIsInRlcm0iLCJjYWxsIiwiYm9vbGVhbiIsImluZm8iLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwicHJvY2VkdXJlQ2FsbCIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzZCQUNPOzBCQUVSO3lCQUNLOzZCQUNhO3lCQUNnRDtBQUV6RixNQUFNLEVBQUVBLG1CQUFtQixFQUFFLEdBQUdDLDJCQUFjO01BRTlDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1QkFBTztJQUN2RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixDQUFFO1FBQ2pFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVC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