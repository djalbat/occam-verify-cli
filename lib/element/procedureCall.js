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
    constructor(context, string, node, lineIndex, parameters, procedureReference){
        super(context, string, node, lineIndex);
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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, procedureCallNode = (0, _instantiate.instantiateProcedureCall)(string, context), node = procedureCallNode, parameters = (0, _element.parametersFromProcedureCallNode)(json, context), procedureReference = (0, _element.procedureReferenceFromProcedureCallNode)(json, context);
            context = null;
            const procedureCall = new ProcedureCall(context, string, node, lineIndex, parameters, procedureReference);
            return procedureCall;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSwgZXZhbHVhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlLCBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyB0ZXJtc0Zyb21QcmltaXRpdmVzIH0gPSB0ZXJtc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gbm9kZTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsTm9kZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBmaW5kUHJpbWl0aXZlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHByaW1pdGl2ZXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHBhcmFtZXRlci5maW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBib29sZWFuLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByaW1pdGl2ZXMgPSB0aGlzLmZpbmRQcmltaXRpdmVzKGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcyk7XG5cbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgdGVybSA9IGF3YWl0IGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYm9vbGVhbiA9IHRlcm0uaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmICghYm9vbGVhbikge1xuICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgZGlkIG5vdCByZXR1cm4gYSBib29sZWFuLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHByaW1pdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gaW5zdGFudGlhdGVQcm9jZWR1cmVDYWxsKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gICAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybXNGcm9tUHJpbWl0aXZlcyIsInRlcm1zVXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwiZmluZFByaW1pdGl2ZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJwcmltaXRpdmUiLCJmaW5kUHJpbWl0aXZlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybXMiLCJ0ZXJtIiwiZXZhbHVhdGUiLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImluZm8iLCJib29sZWFuIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5hbWUiLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzZCQUNPOzBCQUVSO3lCQUNlOzZCQUNHO3lCQUNnRDtBQUV6RixNQUFNLEVBQUVBLG1CQUFtQixFQUFFLEdBQUdDLDJCQUFjO01BRTlDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1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