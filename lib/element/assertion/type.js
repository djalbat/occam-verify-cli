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
const _substitutions = require("../../utilities/substitutions");
const _assign = require("../../process/assign");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class TypeAssertion extends _assertion.default {
    constructor(context, string, node, breakPoint, term, type){
        super(context, string, node, breakPoint);
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
        let validates = false;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            validates = true;
            typeAssertion = validAssertion; ///
            context.debug(`...the '${typeAssertionString}' type assertion is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...verified the '${typeAssertionString}' type assertion.`);
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
            const termType = term.getType(), termTypeEqualToType = termType.isEqualTo(this.type), termTypeSuperTypeOfType = termType.isSuperTypeOf(this.type);
            if (false) {
            ///
            } else if (termTypeEqualToType) {
                validatesForwards = true;
            } else if (termTypeSuperTypeOfType) {
                const termEstablished = term.isEstablished();
                if (termEstablished) {
                    validatesForwards = true;
                }
            }
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            validatesWhenStated = true;
        }
        if (validatesWhenStated) {
            context.debug(`...validated the '${typeAssertionString}' stated type assertion.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived = false;
        const typeAssertionString = this.getString(); ///
        context.trace(`Validating the '${typeAssertionString}' derived type assertion...`);
        const term = validateWhenDerived(this.term, this.type, context);
        if (term !== null) {
            this.term = term;
            validatesWhenDerived = true;
        }
        if (validatesWhenDerived) {
            context.debug(`...validated the '${typeAssertionString}' derived type assertion.`);
        }
        return validatesWhenDerived;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently = false;
        const context = specificContext, typeAssertionString = this.getString(); ///
        context.trace(`Unifying the '${typeAssertionString}' type assertion independently...`);
        let term;
        term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, context);
        term = validateWhenDerived(term, this.type, context); //
        if (term !== null) {
            unifiesIndependently = true;
        }
        if (unifiesIndependently) {
            context.debug(`...unified the '${typeAssertionString}' type assertion independently.`);
        }
        return unifiesIndependently;
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), name = this.getName(), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const type = typeJSON, json = {
            name,
            string,
            breakPoint,
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
                const { string, breakPoint } = json, typeAssertionNode = (0, _instantiate.instantiateTypeAssertion)(string, context), term = (0, _element.termFromTypeAssertionNode)(typeAssertionNode, context), type = (0, _json.typeFromJSON)(json, context), node = typeAssertionNode; ///
                context = null;
                typeAssertion = new TypeAssertion(context, string, node, breakPoint, term, type);
            }, context);
        }
        return typeAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), typeAssertion = (0, _element.typeAssertionFromStatementNode)(statementNode, context);
        return typeAssertion;
    }
});
function validateWhenDerived(term, type, context) {
    if (term !== null) {
        term = term.validate(context, (term)=>{
            let validatesForwards = false;
            const termType = term.getType(), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
            if (termTypeEqualToOrSubTypeOfType) {
                const termEstablished = term.isEstablished();
                if (termEstablished) {
                    validatesForwards = true;
                }
            }
            return validatesForwards;
        });
    }
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlLCB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5Cb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbidzIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9UeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvKHRoaXMudHlwZSksXG4gICAgICAgICAgICB0ZXJtVHlwZVN1cGVyVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3VwZXJUeXBlT2YodGhpcy50eXBlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICh0ZXJtVHlwZUVxdWFsVG9UeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGVybVR5cGVTdXBlclR5cGVPZlR5cGUpIHtcbiAgICAgICAgY29uc3QgdGVybUVzdGFibGlzaGVkID0gdGVybS5pc0VzdGFibGlzaGVkKCk7XG5cbiAgICAgICAgaWYgKHRlcm1Fc3RhYmxpc2hlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy50eXBlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGxldCB0ZXJtO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBjb250ZXh0KTtcblxuICAgIHRlcm0gPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIHRoaXMudHlwZSwgY29udGV4dCk7IC8vXG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHZhcmlhYmxlQXNzaWdtZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVKU09OLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtLCB0eXBlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCB0eXBlLCBjb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgY29uc3QgdGVybUVzdGFibGlzaGVkID0gdGVybS5pc0VzdGFibGlzaGVkKCk7XG5cbiAgICAgICAgaWYgKHRlcm1Fc3RhYmxpc2hlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGVybSIsInR5cGUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldFR5cGVBc3NlcnRpb25OQm9kZSIsImdldE5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidGVybVR5cGVFcXVhbFRvVHlwZSIsImlzRXF1YWxUbyIsInRlcm1UeXBlU3VwZXJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInRlcm1Fc3RhYmxpc2hlZCIsImlzRXN0YWJsaXNoZWQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGVBc3NlcnRpb24iLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21KU09OIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7a0VBVnNCOzBCQUVDO3lCQUNLOzZCQUNhO3NCQUNJOytCQUNBO3dCQUNPO3lCQUNzQjs7Ozs7O01BRTFFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyxrQkFBUztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3pELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyx3QkFBd0I7UUFDdEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLG9CQUFvQlIsTUFBTSxHQUFHO1FBRW5DLE9BQU9RO0lBQ1Q7SUFFQUMsU0FBU1gsT0FBTyxFQUFFO1FBQ2hCLElBQUlZLGdCQUFnQjtRQUVwQixNQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RSxJQUFJRyxZQUFZO1FBRWhCLE1BQU1DLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDbEI7UUFFL0MsSUFBSWlCLGdCQUFnQjtZQUNsQkQsWUFBWTtZQUVaSixnQkFBZ0JLLGdCQUFnQixHQUFHO1lBRW5DakIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRU4sb0JBQW9CLGtDQUFrQyxDQUFDO1FBQ2xGLE9BQU87WUFDTCxNQUFNTyxnQkFBZ0IsSUFBSSxDQUFDQyxZQUFZLENBQUNyQjtZQUV4QyxJQUFJb0IsZUFBZTtnQkFDakIsTUFBTUUsU0FBU3RCLFFBQVF1QixRQUFRO2dCQUUvQixJQUFJQyxzQkFBc0IsT0FDdEJDLHVCQUF1QjtnQkFFM0IsSUFBSUgsUUFBUTtvQkFDVkUsc0JBQXNCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMxQjtnQkFDaEQsT0FBTztvQkFDTHlCLHVCQUF1QixJQUFJLENBQUNFLG1CQUFtQixDQUFDM0I7Z0JBQ2xEO2dCQUVBLElBQUl3Qix1QkFBdUJDLHNCQUFzQjtvQkFDL0NULFlBQVk7Z0JBQ2Q7WUFDRjtZQUVBLElBQUlBLFdBQVc7Z0JBQ2IsTUFBTVksWUFBWSxJQUFJLEVBQUUsR0FBRztnQkFFM0JoQixnQkFBZ0JnQixXQUFZLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ0MsTUFBTSxDQUFDN0I7Z0JBRVpBLFFBQVE4QixZQUFZLENBQUNGO1lBQ3ZCO1FBQ0Y7UUFFQSxJQUFJWixXQUFXO1lBQ2JoQixRQUFRbUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVOLG9CQUFvQixpQkFBaUIsQ0FBQztRQUMxRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVMsYUFBYXJCLE9BQU8sRUFBRTtRQUNwQixJQUFJb0I7UUFFSixNQUFNUCxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQiwwQkFBMEIsQ0FBQztRQUVoRixNQUFNa0Isa0JBQWtCLElBQUksQ0FBQzFCLElBQUksQ0FBQzJCLGtCQUFrQixJQUM5QzNCLE9BQU9MLFFBQVFpQyx5QkFBeUIsQ0FBQ0Y7UUFFL0MsSUFBSTFCLFNBQVMsTUFBTTtZQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFFWmUsZ0JBQWdCO1FBQ2xCLE9BQU87WUFDTCxNQUFNYyxhQUFhLElBQUksQ0FBQzdCLElBQUksQ0FBQ1MsU0FBUztZQUV0Q2QsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRWUsV0FBVyxzQkFBc0IsQ0FBQztRQUMxRDtRQUVBLElBQUlkLGVBQWU7WUFDakJwQixRQUFRbUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLG9CQUFvQix3QkFBd0IsQ0FBQztRQUNsRjtRQUVBLE9BQU9PO0lBQ1Q7SUFFQU0sbUJBQW1CMUIsT0FBTyxFQUFFO1FBQzFCLElBQUl3QixzQkFBc0I7UUFFMUIsTUFBTVgsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakRkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsMEJBQTBCLENBQUM7UUFFaEYsTUFBTVQsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ08sUUFBUSxDQUFDWCxTQUFTLENBQUNJO1lBQ3hDLElBQUkrQixvQkFBb0I7WUFFeEIsTUFBTUMsV0FBV2hDLEtBQUtHLE9BQU8sSUFDdkI4QixzQkFBc0JELFNBQVNFLFNBQVMsQ0FBQyxJQUFJLENBQUNqQyxJQUFJLEdBQ2xEa0MsMEJBQTBCSCxTQUFTSSxhQUFhLENBQUMsSUFBSSxDQUFDbkMsSUFBSTtZQUVoRSxJQUFJLE9BQU87WUFDVCxHQUFHO1lBQ0wsT0FBTyxJQUFJZ0MscUJBQXFCO2dCQUM5QkYsb0JBQW9CO1lBQ3RCLE9BQU8sSUFBSUkseUJBQXlCO2dCQUNsQyxNQUFNRSxrQkFBa0JyQyxLQUFLc0MsYUFBYTtnQkFFMUMsSUFBSUQsaUJBQWlCO29CQUNuQk4sb0JBQW9CO2dCQUN0QjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtRQUVBLElBQUkvQixTQUFTLE1BQU07WUFDakIsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBRVpvQixzQkFBc0I7UUFDeEI7UUFFQSxJQUFJQSxxQkFBcUI7WUFDdkJ4QixRQUFRbUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLG9CQUFvQix3QkFBd0IsQ0FBQztRQUNsRjtRQUVBLE9BQU9XO0lBQ1Q7SUFFQUcsb0JBQW9CM0IsT0FBTyxFQUFFO1FBQzNCLElBQUl5Qix1QkFBdUI7UUFFM0IsTUFBTVosc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakRkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsMkJBQTJCLENBQUM7UUFFakYsTUFBTVQsT0FBT3VCLG9CQUFvQixJQUFJLENBQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUVMO1FBRXZELElBQUlJLFNBQVMsTUFBTTtZQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFFWnFCLHVCQUF1QjtRQUN6QjtRQUVBLElBQUlBLHNCQUFzQjtZQUN4QnpCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sb0JBQW9CLHlCQUF5QixDQUFDO1FBQ25GO1FBRUEsT0FBT1k7SUFDVDtJQUVBa0IsbUJBQW1CQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUNsRCxJQUFJQyx1QkFBdUI7UUFFM0IsTUFBTTlDLFVBQVU2QyxpQkFDVmhDLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRWpEZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLG9CQUFvQixpQ0FBaUMsQ0FBQztRQUVyRixJQUFJVDtRQUVKQSxPQUFPMkMsSUFBQUEsMkNBQTRCLEVBQUMsSUFBSSxDQUFDM0MsSUFBSSxFQUFFSjtRQUUvQ0ksT0FBT3VCLG9CQUFvQnZCLE1BQU0sSUFBSSxDQUFDQyxJQUFJLEVBQUVMLFVBQVUsRUFBRTtRQUV4RCxJQUFJSSxTQUFTLE1BQU07WUFDakIwQyx1QkFBdUI7UUFDekI7UUFFQSxJQUFJQSxzQkFBc0I7WUFDeEI5QyxRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVOLG9CQUFvQiwrQkFBK0IsQ0FBQztRQUN2RjtRQUVBLE9BQU9pQztJQUNUO0lBRUFqQixPQUFPN0IsT0FBTyxFQUFFO1FBQ2QsTUFBTXNCLFNBQVN0QixRQUFRdUIsUUFBUTtRQUUvQixJQUFJLENBQUNELFFBQVE7WUFDWDtRQUNGO1FBRUEsTUFBTVYsZ0JBQWdCLElBQUksRUFDcEJvQyxvQkFBb0JDLElBQUFBLDJDQUFtQyxFQUFDckMsZUFBZVo7UUFFN0VBLFFBQVFrRCxhQUFhLENBQUNGO0lBQ3hCO0lBRUFHLFNBQVM7UUFDUCxNQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2hELElBQUksR0FDbkNpRCxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQnRELFNBQVMsSUFBSSxDQUFDYSxTQUFTO1FBRTdCLElBQUlYO1FBRUpBLGFBQWEsSUFBSSxDQUFDcUQsYUFBYTtRQUUvQixNQUFNQyxpQkFBaUJ0RCxXQUFXZ0QsTUFBTTtRQUV4Q2hELGFBQWFzRCxnQkFBaUIsR0FBRztRQUVqQyxNQUFNcEQsT0FBTytDLFVBQ1BNLE9BQU87WUFDTEo7WUFDQXJEO1lBQ0FFO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPcUQ7SUFDVDtJQUVBLE9BQU9KLE9BQU8sZ0JBQWdCO0lBRTlCLE9BQU9LLFNBQVNELElBQUksRUFBRTFELE9BQU8sRUFBRTtRQUM3QixJQUFJWSxnQkFBZ0I7UUFFcEIsTUFBTSxFQUFFMEMsSUFBSSxFQUFFLEdBQUdJO1FBRWpCLElBQUksSUFBSSxDQUFDSixJQUFJLEtBQUtBLE1BQU07WUFDdEJNLElBQUFBLG9CQUFXLEVBQUMsQ0FBQzVEO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxVQUFVLEVBQUUsR0FBR3VELE1BQ3pCaEQsb0JBQW9CbUQsSUFBQUEscUNBQXdCLEVBQUM1RCxRQUFRRCxVQUNyREksT0FBTzBELElBQUFBLGtDQUF5QixFQUFDcEQsbUJBQW1CVixVQUNwREssT0FBTzBELElBQUFBLGtCQUFZLEVBQUNMLE1BQU0xRCxVQUMxQkUsT0FBT1EsbUJBQW1CLEdBQUc7Z0JBRW5DVixVQUFVO2dCQUVWWSxnQkFBZ0IsSUFBSWQsY0FBY0UsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUMsTUFBTUM7WUFDN0UsR0FBR0w7UUFDTDtRQUVBLE9BQU9ZO0lBQ1Q7SUFFQSxPQUFPb0QsY0FBY0MsU0FBUyxFQUFFakUsT0FBTyxFQUFFO1FBQ3ZDLE1BQU1rRSxnQkFBZ0JELFVBQVV4RCxPQUFPLElBQ2pDRyxnQkFBZ0J1RCxJQUFBQSx1Q0FBOEIsRUFBQ0QsZUFBZWxFO1FBRXBFLE9BQU9ZO0lBQ1Q7QUFDRjtBQUVBLFNBQVNlLG9CQUFvQnZCLElBQUksRUFBRUMsSUFBSSxFQUFFTCxPQUFPO0lBQzlDLElBQUlJLFNBQVMsTUFBTTtRQUNqQkEsT0FBT0EsS0FBS08sUUFBUSxDQUFDWCxTQUFTLENBQUNJO1lBQzdCLElBQUkrQixvQkFBb0I7WUFFeEIsTUFBTUMsV0FBV2hDLEtBQUtHLE9BQU8sSUFDdkI2RCxpQ0FBaUNoQyxTQUFTaUMsb0JBQW9CLENBQUNoRTtZQUVyRSxJQUFJK0QsZ0NBQWdDO2dCQUNsQyxNQUFNM0Isa0JBQWtCckMsS0FBS3NDLGFBQWE7Z0JBRTFDLElBQUlELGlCQUFpQjtvQkFDbkJOLG9CQUFvQjtnQkFDdEI7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLE9BQU8vQjtBQUNUIn0=