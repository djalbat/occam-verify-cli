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
const _json = require("../utilities/json");
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
        const parametersJSON = (0, _json.parametersToParametersJSON)(this.parameters), procedureReference = (0, _json.procedureReferenceToProcedureReferenceJSON)(this.procedureReference), parameters = parametersJSON, json = {
            procedureReference,
            parameters
        };
        return json;
    }
    static name = "ProcedureCall";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbUpTT04sIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgdGVybXNGcm9tUHJpbWl0aXZlcyB9ID0gdGVybXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gbm9kZTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsTm9kZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBmaW5kUHJpbWl0aXZlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHByaW1pdGl2ZXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHBhcmFtZXRlci5maW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBib29sZWFuLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmltaXRpdmVzID0gdGhpcy5maW5kUHJpbWl0aXZlcyhjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKSxcbiAgICAgICAgICAgIHRlcm0gPSBhd2FpdCBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdGVybS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKCFib29sZWFuKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBkaWQgbm90IHJldHVybiBhIGJvb2xlYW4uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgICAgICBpZiAocHJpbWl0aXZlVmFsdWUpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuXG4gICAgICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTih0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybXNGcm9tUHJpbWl0aXZlcyIsInRlcm1zVXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwiZmluZFByaW1pdGl2ZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJwcmltaXRpdmUiLCJmaW5kUHJpbWl0aXZlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybXMiLCJ0ZXJtIiwiY2FsbCIsImJvb2xlYW4iLCJpbmZvIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3Qjs2QkFDTzswQkFFUjtzQkFDZ0g7QUFFdkksTUFBTSxFQUFFQSxtQkFBbUIsRUFBRSxHQUFHQywyQkFBYztNQUU5QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsdUJBQU87SUFDdkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsQ0FBRTtRQUNqRSxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtJQUNoQztJQUVBRyx1QkFBdUI7UUFDckIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLG9CQUFvQlA7UUFFMUIsT0FBT087SUFDVDtJQUVBQyxtQkFBbUI7UUFBRSxPQUFPLElBQUksQ0FBQ04sa0JBQWtCLENBQUNNLGdCQUFnQjtJQUFJO0lBRXhFQyxlQUFlWCxPQUFPLEVBQUU7UUFDdEIsTUFBTVksZ0JBQWdCWixRQUFRYSxnQkFBZ0IsSUFDeENDLGFBQWEsSUFBSSxDQUFDWCxVQUFVLENBQUNZLEdBQUcsQ0FBQyxDQUFDQztZQUNoQyxNQUFNQyxZQUFZRCxVQUFVRSxhQUFhLENBQUNOO1lBRTFDLE9BQU9LO1FBQ1Q7UUFFTixPQUFPSDtJQUNUO0lBRUFLLFNBQVNuQixPQUFPLEVBQUU7UUFDaEIsSUFBSW9CLFlBQVk7UUFFaEIsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakR0QixRQUFRdUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RSxNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDZCxnQkFBZ0IsSUFDckNlLFlBQVl6QixRQUFRMEIsNEJBQTRCLENBQUNGO1FBRXZELElBQUlDLGNBQWMsTUFBTTtZQUN0QixNQUFNRSxtQkFBbUJGLFVBQVVHLFNBQVM7WUFFNUMsSUFBSUQsa0JBQWtCO2dCQUNwQlAsWUFBWTtZQUNkLE9BQU87Z0JBQ0xwQixRQUFRNkIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFUixvQkFBb0IsMkJBQTJCLENBQUM7WUFDeEU7UUFDRixPQUFPO1lBQ0xyQixRQUFRNkIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFUixvQkFBb0IsMkJBQTJCLENBQUM7UUFDeEU7UUFFQSxJQUFJRCxXQUFXO1lBQ2JwQixRQUFRNkIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVSLG9CQUFvQixpQkFBaUIsQ0FBQztRQUMzRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNVSxtQkFBbUI5QixPQUFPLEVBQUU7UUFDaEMsSUFBSStCLHVCQUF1QjtRQUUzQixNQUFNVixzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVqRHRCLFFBQVF1QixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLG9CQUFvQixpQ0FBaUMsQ0FBQztRQUVyRixNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDZCxnQkFBZ0IsSUFDckNlLFlBQVl6QixRQUFRMEIsNEJBQTRCLENBQUNGO1FBRXZELElBQUk7WUFDRixNQUFNVixhQUFhLElBQUksQ0FBQ0gsY0FBYyxDQUFDWCxVQUNqQ2dDLFFBQVFyQyxvQkFBb0JtQixhQUM1Qm1CLE9BQU8sTUFBTVIsVUFBVVMsSUFBSSxDQUFDRixPQUFPaEMsVUFDbkNtQyxVQUFVRixLQUFLTCxTQUFTO1lBRTlCLElBQUksQ0FBQ08sU0FBUztnQkFDWm5DLFFBQVFvQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUVmLG9CQUFvQiwwQ0FBMEMsQ0FBQztZQUN0RixPQUFPO2dCQUNMLE1BQU1nQixpQkFBaUJKLEtBQUtLLGlCQUFpQjtnQkFFN0MsSUFBSUQsZ0JBQWdCO29CQUNsQk4sdUJBQXVCO2dCQUN6QjtZQUNGO1FBQ0YsRUFBRSxPQUFPUSxXQUFXO1lBQ2xCLE1BQU1DLFVBQVVELFVBQVVFLFVBQVU7WUFFcEN6QyxRQUFRb0MsSUFBSSxDQUFDSTtRQUNmO1FBRUEsSUFBSVQsc0JBQXNCO1lBQ3hCL0IsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFUixvQkFBb0IsK0JBQStCLENBQUM7UUFDdkY7UUFFQSxPQUFPVTtJQUNUO0lBRUFXLFNBQVM7UUFDUCxNQUFNQyxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQ3pDLFVBQVUsR0FDM0RDLHFCQUFxQnlDLElBQUFBLGdEQUEwQyxFQUFDLElBQUksQ0FBQ3pDLGtCQUFrQixHQUN2RkQsYUFBYXdDLGdCQUNiRyxPQUFPO1lBQ0wxQztZQUNBRDtRQUNGO1FBRU4sT0FBTzJDO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLGdCQUFnQjtJQUU5QixPQUFPQyxTQUFTRixJQUFJLEVBQUU5QyxPQUFPLEVBQUU7UUFDN0IsUUFBUTtJQUNWO0FBQ0YifQ==