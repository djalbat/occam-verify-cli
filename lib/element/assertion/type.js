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
const _breakPoint = require("../../utilities/breakPoint");
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
                const { string } = json, typeAssertionNode = (0, _instantiate.instantiateTypeAssertion)(string, context), node = typeAssertionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), term = (0, _element.termFromTypeAssertionNode)(typeAssertionNode, context), type = (0, _json.typeFromJSON)(json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlLCB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5Cb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbidzIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9UeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvKHRoaXMudHlwZSksXG4gICAgICAgICAgICB0ZXJtVHlwZVN1cGVyVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzU3VwZXJUeXBlT2YodGhpcy50eXBlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICh0ZXJtVHlwZUVxdWFsVG9UeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGVybVR5cGVTdXBlclR5cGVPZlR5cGUpIHtcbiAgICAgICAgY29uc3QgdGVybUVzdGFibGlzaGVkID0gdGVybS5pc0VzdGFibGlzaGVkKCk7XG5cbiAgICAgICAgaWYgKHRlcm1Fc3RhYmxpc2hlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy50eXBlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGxldCB0ZXJtO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBjb250ZXh0KTtcblxuICAgIHRlcm0gPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIHRoaXMudHlwZSwgY29udGV4dCk7IC8vXG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHZhcmlhYmxlQXNzaWdtZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlSlNPTixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlVHlwZUFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSwgdHlwZSk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgdHlwZSwgY29udGV4dCkge1xuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Fc3RhYmxpc2hlZCA9IHRlcm0uaXNFc3RhYmxpc2hlZCgpO1xuXG4gICAgICAgIGlmICh0ZXJtRXN0YWJsaXNoZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZUFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRUeXBlQXNzZXJ0aW9uTkJvZGUiLCJnZXROb2RlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidHlwZVZhbGlkYXRlcyIsInZhbGlkYXRlVHlwZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFzc2lnbiIsImFkZEFzc2VydGlvbiIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb1R5cGUiLCJpc0VxdWFsVG8iLCJ0ZXJtVHlwZVN1cGVyVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJ0ZXJtRXN0YWJsaXNoZWQiLCJpc0VzdGFibGlzaGVkIiwidW5pZnlJbmRlcGVuZGVudGx5IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ2YXJpYWJsZUFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIiwiYWRkQXNzaWdubWVudCIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJuYW1lIiwiZ2V0TmFtZSIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGVBc3NlcnRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21KU09OIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7a0VBWHNCOzBCQUVDO3lCQUNLOzZCQUNhO3NCQUNJOytCQUNBO3dCQUNPOzRCQUNXO3lCQUNXOzs7Ozs7TUFFMUUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxzQkFBc0JDLGtCQUFTO0lBQ3pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDekQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLHdCQUF3QjtRQUN0QixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsb0JBQW9CUixNQUFNLEdBQUc7UUFFbkMsT0FBT1E7SUFDVDtJQUVBQyxTQUFTWCxPQUFPLEVBQUU7UUFDaEIsSUFBSVksZ0JBQWdCO1FBRXBCLE1BQU1DLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRWxEZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsb0JBQW9CLG1CQUFtQixDQUFDO1FBRXpFLElBQUlHLFlBQVk7UUFFaEIsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNsQjtRQUUvQyxJQUFJaUIsZ0JB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