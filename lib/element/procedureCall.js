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
        // try {
        const primitives = this.findPrimitives(context), terms = termsFromPrimitives(primitives), term = await procedure.call(terms, context), boolean = term.isBoolean();
        if (!boolean) {
            context.info(`The '${procedureCallString}' procedure call did not return a boolean.`);
        } else {
            const primitiveValue = term.getPrimitiveValue();
            if (primitiveValue) {
                unifiesIndependently = true;
            }
        }
        // } catch (exception) {
        //   const message = exception.getMessage();
        //
        //   context.info(message);
        // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbUpTT04sIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgdGVybXNGcm9tUHJpbWl0aXZlcyB9ID0gdGVybXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gbm9kZTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsTm9kZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBmaW5kUHJpbWl0aXZlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHByaW1pdGl2ZXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHBhcmFtZXRlci5maW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBib29sZWFuLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIC8vIHRyeSB7XG4gICAgICBjb25zdCBwcmltaXRpdmVzID0gdGhpcy5maW5kUHJpbWl0aXZlcyhjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKSxcbiAgICAgICAgICAgIHRlcm0gPSBhd2FpdCBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdGVybS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKCFib29sZWFuKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBkaWQgbm90IHJldHVybiBhIGJvb2xlYW4uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgICAgICBpZiAocHJpbWl0aXZlVmFsdWUpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAvLyB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAvLyAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuICAgIC8vXG4gICAgLy8gICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgLy8gfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTih0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybXNGcm9tUHJpbWl0aXZlcyIsInRlcm1zVXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwiZmluZFByaW1pdGl2ZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJwcmltaXRpdmUiLCJmaW5kUHJpbWl0aXZlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybXMiLCJ0ZXJtIiwiY2FsbCIsImJvb2xlYW4iLCJpbmZvIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsInRvSlNPTiIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7NkJBQ087MEJBRVI7c0JBQ2dIO0FBRXZJLE1BQU0sRUFBRUEsbUJBQW1CLEVBQUUsR0FBR0MsMkJBQWM7TUFFOUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxzQkFBc0JDLHVCQUFPO0lBQ3ZELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLENBQUU7UUFDakUsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7SUFDNUI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7SUFDaEM7SUFFQUcsdUJBQXVCO1FBQ3JCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxvQkFBb0JQO1FBRTFCLE9BQU9PO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQUUsT0FBTyxJQUFJLENBQUNOLGtCQUFrQixDQUFDTSxnQkFBZ0I7SUFBSTtJQUV4RUMsZUFBZVgsT0FBTyxFQUFFO1FBQ3RCLE1BQU1ZLGdCQUFnQlosUUFBUWEsZ0JBQWdCLElBQ3hDQyxhQUFhLElBQUksQ0FBQ1gsVUFBVSxDQUFDWSxHQUFHLENBQUMsQ0FBQ0M7WUFDaEMsTUFBTUMsWUFBWUQsVUFBVUUsYUFBYSxDQUFDTjtZQUUxQyxPQUFPSztRQUNUO1FBRU4sT0FBT0g7SUFDVDtJQUVBSyxTQUFTbkIsT0FBTyxFQUFFO1FBQ2hCLElBQUlvQixZQUFZO1FBRWhCLE1BQU1DLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRWpEdEIsUUFBUXVCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsbUJBQW1CLENBQUM7UUFFekUsTUFBTUcsZ0JBQWdCLElBQUksQ0FBQ2QsZ0JBQWdCLElBQ3JDZSxZQUFZekIsUUFBUTBCLDRCQUE0QixDQUFDRjtRQUV2RCxJQUFJQyxjQUFjLE1BQU07WUFDdEIsTUFBTUUsbUJBQW1CRixVQUFVRyxTQUFTO1lBRTVDLElBQUlELGtCQUFrQjtnQkFDcEJQLFlBQVk7WUFDZCxPQUFPO2dCQUNMcEIsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRVIsb0JBQW9CLDJCQUEyQixDQUFDO1lBQ3hFO1FBQ0YsT0FBTztZQUNMckIsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRVIsb0JBQW9CLDJCQUEyQixDQUFDO1FBQ3hFO1FBRUEsSUFBSUQsV0FBVztZQUNicEIsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFUixvQkFBb0IsaUJBQWlCLENBQUM7UUFDM0U7UUFFQSxPQUFPRDtJQUNUO0lBRUEsTUFBTVUsbUJBQW1COUIsT0FBTyxFQUFFO1FBQ2hDLElBQUkrQix1QkFBdUI7UUFFM0IsTUFBTVYsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakR0QixRQUFRdUIsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFRixvQkFBb0IsaUNBQWlDLENBQUM7UUFFckYsTUFBTUcsZ0JBQWdCLElBQUksQ0FBQ2QsZ0JBQWdCLElBQ3JDZSxZQUFZekIsUUFBUTBCLDRCQUE0QixDQUFDRjtRQUV2RCxRQUFRO1FBQ04sTUFBTVYsYUFBYSxJQUFJLENBQUNILGNBQWMsQ0FBQ1gsVUFDakNnQyxRQUFRckMsb0JBQW9CbUIsYUFDNUJtQixPQUFPLE1BQU1SLFVBQVVTLElBQUksQ0FBQ0YsT0FBT2hDLFVBQ25DbUMsVUFBVUYsS0FBS0wsU0FBUztRQUU5QixJQUFJLENBQUNPLFNBQVM7WUFDWm5DLFFBQVFvQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUVmLG9CQUFvQiwwQ0FBMEMsQ0FBQztRQUN0RixPQUFPO1lBQ0wsTUFBTWdCLGlCQUFpQkosS0FBS0ssaUJBQWlCO1lBRTdDLElBQUlELGdCQUFnQjtnQkFDbEJOLHVCQUF1QjtZQUN6QjtRQUNGO1FBQ0Ysd0JBQXdCO1FBQ3hCLDRDQUE0QztRQUM1QyxFQUFFO1FBQ0YsMkJBQTJCO1FBQzNCLElBQUk7UUFFSixJQUFJQSxzQkFBc0I7WUFDeEIvQixRQUFRNkIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVSLG9CQUFvQiwrQkFBK0IsQ0FBQztRQUN2RjtRQUVBLE9BQU9VO0lBQ1Q7SUFFQVEsU0FBUztRQUNQLE1BQU1DLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDdEMsVUFBVSxHQUMzREMscUJBQXFCc0MsSUFBQUEsZ0RBQTBDLEVBQUMsSUFBSSxDQUFDdEMsa0JBQWtCLEdBQ3ZGRCxhQUFhcUMsZ0JBQ2JHLE9BQU87WUFDTHZDO1lBQ0FEO1FBQ0Y7UUFFTixPQUFPd0M7SUFDVDtJQUVBLE9BQU9DLE9BQU8sZ0JBQWdCO0lBRTlCLE9BQU9DLFNBQVNGLElBQUksRUFBRTNDLE9BQU8sRUFBRTtRQUM3QixRQUFRO0lBQ1Y7QUFDRiJ9