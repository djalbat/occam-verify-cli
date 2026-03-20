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
        context.addAssignment(variableAssigment);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudCh2YXJpYWJsZUFzc2lnbWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlQXNzZXJ0aW9uID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICAgICAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VHlwZUFzc2VydGlvbk5Cb2RlIiwiZ2V0Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwibmFtZSIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZUFzc2VydGlvbiIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2tFQVRzQjswQkFFQzt5QkFDSzs2QkFDYTt5QkFDQztzQkFDRzt3QkFDTzs7Ozs7O01BRXBELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyxrQkFBUztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLE1B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