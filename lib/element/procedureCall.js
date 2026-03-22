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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, procedureCallNode = (0, _instantiate.instantiateProcedureCall)(string, context), node = procedureCallNode, parameters = (0, _element.parametersFromProcedureCallNode)(json, context), procedureReference = (0, _element.procedureReferenceFromProcedureCallNode)(json, context);
            context = null;
            const procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
            return procedureCall;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9jZWR1cmVDYWxsIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUsIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IHRlcm1zRnJvbVByaW1pdGl2ZXMgfSA9IHRlcm1zVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlQ2FsbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IG5vZGU7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbE5vZGU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVOYW1lKCkgeyByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UuZ2V0UHJvY2VkdXJlTmFtZSgpOyB9XG5cbiAgZmluZFByaW1pdGl2ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBwcmltaXRpdmVzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBwYXJhbWV0ZXIuZmluZFByaW1pdGl2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmltaXRpdmVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIGlmIChwcm9jZWR1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUJvb2xlYW4gPSBwcm9jZWR1cmUuaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVCb29sZWFuKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJpbWl0aXZlcyA9IHRoaXMuZmluZFByaW1pdGl2ZXMoY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcyksXG4gICAgICAgICAgICB0ZXJtID0gYXdhaXQgcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IHRlcm0uaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmICghYm9vbGVhbikge1xuICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgZGlkIG5vdCByZXR1cm4gYSBib29sZWFuLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHByaW1pdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBpbnN0YW50aWF0ZVByb2NlZHVyZUNhbGwoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUoanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUoanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gICAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybXNGcm9tUHJpbWl0aXZlcyIsInRlcm1zVXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwiZmluZFByaW1pdGl2ZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJwcmltaXRpdmUiLCJmaW5kUHJpbWl0aXZlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybXMiLCJ0ZXJtIiwiY2FsbCIsImJvb2xlYW4iLCJpbmZvIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dDQVZ3Qjs2QkFDTzswQkFFUjt5QkFDSzs2QkFDYTt5QkFDZ0Q7QUFFekYsTUFBTSxFQUFFQSxtQkFBbUIsRUFBRSxHQUFHQywyQkFBYztNQUU5QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsdUJBQU87SUFDdkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsQ0FBRTtRQUNqRSxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0Ys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