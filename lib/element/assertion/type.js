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
const _element = require("../../utilities/element");
const _json = require("../../utilities/json");
const _assign = require("../../process/assign");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class TypeAssertion extends _assertion.default {
    constructor(context, string, node, term, type){
        super(context, string, node);
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
    validate(stated, context) {
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
                this.assign(stated, context);
                context.addAssertion(assertion);
                context.debug(`...verified the '${typeAssertionString}' type assertion.`);
            }
        }
        return typeAssertion;
    }
    validateType(context) {
        let typeValidates;
        const typeString = this.type.getString(), typeAssertionString = this.getString(); ///
        context.trace(`Validating the '${typeAssertionString}' type assertion's '${typeString}' type...`);
        const nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
        if (type !== null) {
            this.type = type;
            typeValidates = true;
        } else {
            context.debug(`The '${typeString}' type is not present.`);
        }
        if (typeValidates) {
            context.debug(`...validated the '${typeAssertionString}' type assertion's '${typeString}' type.`);
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
    assign(stated, context) {
        if (!stated) {
            return;
        }
        const typeAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromTypeAssertion)(typeAssertion, context);
        if (variableAssigment !== null) {
            const assignment = variableAssigment; ///
            context.addAssignment(assignment);
        }
    }
    toJSON() {
        const { name } = this.constructor, typeJSON = (0, _json.typeToTypeJSON)(this.type), type = typeJSON, string = this.getString(), json = {
            name,
            string,
            type
        };
        return json;
    }
    static name = "TypeAssertion";
    static fromJSON(json, context) {
        let typeAssertion = null;
        const { name } = json;
        if (this.name === name) {
            typeAssertion = (0, _context.instantiate)((context)=>{
                const { string } = json, typeAssertionNode = (0, _instantiate.instantiateTypeAssertion)(string, context), term = (0, _element.termFromTypeAssertionNode)(typeAssertionNode, context), type = (0, _json.typeFromJSON)(json, context), node = typeAssertionNode; ///
                context = null;
                const typeAssertion = new TypeAssertion(context, string, node, term, type);
                return typeAssertion;
            }, context);
        }
        return typeAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZUFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdtZW50OyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlQXNzZXJ0aW9uID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICAgICAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VHlwZUFzc2VydGlvbk5Cb2RlIiwiZ2V0Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhc3NpZ25tZW50IiwiYWRkQXNzaWdubWVudCIsInRvSlNPTiIsIm5hbWUiLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGVBc3NlcnRpb24iLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztrRUFUc0I7MEJBRUM7eUJB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