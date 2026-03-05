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
const _json = require("../../utilities/json");
const _element = require("../../utilities/element");
const _instantiate = require("../../process/instantiate");
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
        const term = this.term.validate(context, ()=>{
            let validatesForwards;
            const termType = this.term.getType(), typeEqualToOrSubTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);
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
        const term = this.term.validate(context, ()=>{
            let validatesForwards = false;
            const termType = this.term.getType(), termTypeProvisional = termType.isProvisional();
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
        const { name } = this.constructor, typeJSON = typeToTypeJSON(this.type), type = typeJSON, string = this.getString(), json = {
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
            (0, _context.literally)((context)=>{
                const { string } = json, typeAssertionNode = (0, _instantiate.instantiateSubproofAssertion)(string, context), term = (0, _element.termFromTypeAssertionNode)(typeAssertionNode, context), type = (0, _json.typeFromJSON)(json, context), node = typeAssertionNode; ///
                context = null;
                typeAssertion = new TypeAssertion(context, string, node, term, type);
            }, context);
        }
        return typeAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdWJwcm9vZkFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRUeXBlQXNzZXJ0aW9uTkJvZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICB0eXBlQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZVByb3Zpc2lvbmFsID0gdGVybVR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICBpZiAoIXRlcm1UeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgY29uc3QgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlQXNzaWdtZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRUeXBlQXNzZXJ0aW9uTkJvZGUiLCJnZXROb2RlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwidHlwZVZhbGlkYXRlcyIsInZhbGlkYXRlVHlwZSIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhc3NpZ24iLCJhZGRBc3NlcnRpb24iLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRlcm1UeXBlUHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidmFyaWFibGVBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwibmFtZSIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVN1YnByb29mQXNzZXJ0aW9uIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7a0VBVHNCOzBCQUVDO3lCQUNHO3NCQUNHO3lCQUNhOzZCQUNHO3dCQUNPOzs7Ozs7TUFFcEQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxzQkFB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