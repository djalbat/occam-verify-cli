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
const _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
const _elements = require("../../elements");
const _context = require("../../utilities/context");
const _instantiate = require("../../process/instantiate");
const _json = require("../../utilities/json");
const _assign = require("../../process/assign");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class TypeAssertion extends _assertion.default {
    constructor(context, string, node, lineIndex, term, type){
        super(context, string, node, lineIndex);
        this.term = term;
        this.type = type;
    }
    getTerm() {
        return this.term;
    }
    getType() {
        return this.type;
    }
    getTypeAssertionNBode() {
        const node = this.getNode(), typeAssertionNode = node; ///
        return typeAssertionNode;
    }
    validate(context) {
        let typeAssertion = null;
        const typeAssertionString = this.getString(); ///
        context.trace(`Validating the '${typeAssertionString}' type assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            typeAssertion = validAssertion; ///
            context.debug(`...the '${typeAssertionString}' type assertion is already valid.`);
        } else {
            let validates = false;
            const typeValidates = this.validateType(context);
            if (typeValidates) {
                const stated = context.isStated();
                let validatesWhenStated = false, validatesWhenDerived = false;
                if (stated) {
                    validatesWhenStated = this.validateWhenStated(context);
                } else {
                    validatesWhenDerived = this.validateWhenDerived(context);
                }
                if (validatesWhenStated || validatesWhenDerived) {
                    validates = true;
                }
            }
            if (validates) {
                const assertion = this; ///
                typeAssertion = assertion; ///
                this.assign(context);
                context.addAssertion(assertion);
                context.debug(`...verified the '${typeAssertionString}' type assertion.`);
            }
        }
        return typeAssertion;
    }
    validateType(context) {
        let typeValidates;
        const typeAssertionString = this.getString(); ///
        context.trace(`Validating the '${typeAssertionString}' type assertion's type...`);
        const nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
        if (type !== null) {
            this.type = type;
            typeValidates = true;
        } else {
            const typeString = this.type.getString();
            context.debug(`The '${typeString}' type is not present.`);
        }
        if (typeValidates) {
            context.debug(`...validated the '${typeAssertionString}' type assertion's type.`);
        }
        return typeValidates;
    }
    validateWhenStated(context) {
        let validatesWhenStated = false;
        const typeAssertionString = this.getString(); ///
        context.trace(`Validating the '${typeAssertionString}' stated type assertion...`);
        const term = this.term.validate(context, (term)=>{
            let validatesForwards = false;
            const termType = term.getType(), typeEqualToOrSubTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);
            if (typeEqualToOrSubTypeOfTermType) {
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            validatesWhenStated = true;
        }
        if (validatesWhenStated) {
            context.debug(`...verified the '${typeAssertionString}' stated type assertion.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived = false;
        const typeAssertionString = this.getString(); ///
        context.trace(`Validating the '${typeAssertionString}' derived type assertion...`);
        const term = this.term.validate(context, (term)=>{
            let validatesForwards = false;
            const termType = term.getType(), termTypeProvisional = termType.isProvisional();
            if (!termTypeProvisional) {
                const typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);
                if (typeEqualToOrSuperTypeOfTermType) {
                    validatesForwards = true;
                }
            }
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            validatesWhenDerived = true;
        }
        if (validatesWhenDerived) {
            context.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
        }
        return validatesWhenDerived;
    }
    assign(context) {
        const stated = context.isStated();
        if (!stated) {
            return;
        }
        const typeAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromTypeAssertion)(typeAssertion, context);
        context.addAssignment(variableAssigment);
    }
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), name = this.getName(), string = this.getString(), lineIndex = this.getLineIndex(), type = typeJSON, json = {
            name,
            string,
            lineIndex,
            type
        };
        return json;
    }
    static name = "TypeAssertion";
    static fromJSON(json, context) {
        let typeAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, typeAssertionNode = (0, _instantiate.instantiateTypeAssertion)(string, context), term = (0, _element.termFromTypeAssertionNode)(typeAssertionNode, context), type = (0, _json.typeFromJSON)(json, context), node = typeAssertionNode; ///
                context = null;
                typeAssertion = new TypeAssertion(context, string, node, lineIndex, term, type);
            }, context);
        }
        return typeAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), typeAssertion = (0, _element.typeAssertionFromStatementNode)(statementNode, context);
        return typeAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlLCB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICB0eXBlQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbidzIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVQcm92aXNpb25hbCA9IHRlcm1UeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgaWYgKCF0ZXJtVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudCh2YXJpYWJsZUFzc2lnbWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlVHlwZUFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZTsgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtLCB0eXBlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VHlwZUFzc2VydGlvbk5Cb2RlIiwiZ2V0Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhc3NpZ24iLCJhZGRBc3NlcnRpb24iLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRlcm1UeXBlUHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidmFyaWFibGVBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwibmFtZSIsImdldE5hbWUiLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZUFzc2VydGlvbiIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUpTT04iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7a0VBVHNCOzBCQUVDO3lCQUNLOzZCQUNhO3NCQUNJO3dCQUNPO3lCQUNzQjs7Ozs7O01BRTFFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyxrQkFBUztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyx3QkFBd0I7UUFDdEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLG9CQUFvQlIsTUFBTSxHQUFHO1FBRW5DLE9BQU9RO0lBQ1Q7SUFFQUMsU0FBU1gsT0FBTyxFQUFFO1FBQ2hCLElBQUlZLGdCQUFnQjtRQUVwQixNQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVG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