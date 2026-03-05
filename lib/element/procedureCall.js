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
        const procedureCall = (0, _context.literally)((context)=>{
            const { string } = json, procedureCallNode = (0, _instantiate.instantiateProcedureCall)(string, context), node = procedureCallNode, parameters = (0, _element.parametersFromProcedureCallNode)(json, context), procedureReference = (0, _element.procedureReferenceFromProcedureCallNode)(json, context);
            context = null;
            const procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
            return procedureCall;
        }, context);
        return procedureCall;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlLCBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyB0ZXJtc0Zyb21QcmltaXRpdmVzIH0gPSB0ZXJtc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFByb2NlZHVyZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSBub2RlO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHsgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlLmdldFByb2NlZHVyZU5hbWUoKTsgfVxuXG4gIGZpbmRQcmltaXRpdmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlID0gcGFyYW1ldGVyLmZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByaW1pdGl2ZXMgPSB0aGlzLmZpbmRQcmltaXRpdmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21QcmltaXRpdmVzKHByaW1pdGl2ZXMpLFxuICAgICAgICAgICAgdGVybSA9IGF3YWl0IHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGJvb2xlYW4gPSB0ZXJtLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAoIWJvb2xlYW4pIHtcbiAgICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGRpZCBub3QgcmV0dXJuIGEgYm9vbGVhbi5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpO1xuXG4gICAgICAgIGlmIChwcmltaXRpdmVWYWx1ZSkge1xuICAgICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IGluc3RhbnRpYXRlUHJvY2VkdXJlQ2FsbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInRlcm1zRnJvbVByaW1pdGl2ZXMiLCJ0ZXJtc1V0aWxpdGllcyIsImRlZmluZSIsIlByb2NlZHVyZUNhbGwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UGFyYW1ldGVycyIsImdldFByb2NlZHVyZVJlZmVyZW5jZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UHJvY2VkdXJlTmFtZSIsImZpbmRQcmltaXRpdmVzIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmVzIiwibWFwIiwicGFyYW1ldGVyIiwicHJpbWl0aXZlIiwiZmluZFByaW1pdGl2ZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVCb29sZWFuIiwiaXNCb29sZWFuIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1zIiwidGVybSIsImNhbGwiLCJib29sZWFuIiwiaW5mbyIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzZCQUNPOzBCQUVSO3lCQUNHOzZCQUNlO3lCQUNnRDtBQUV6RixNQUFNLEVBQUVBLG1CQUFtQixFQUFFLEdBQUdDLDJCQUFjO01BRTlDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1QkFBTztJQUN2RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixDQUFFO1FBQ2pFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFD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