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
    discharge(context) {
        let discharges = false;
        const typeAssertionString = this.getString(); ///
        context.trace(`Discharging the '${typeAssertionString}' type assertion...`);
        const validatesWhenDerived = this.validateWhenDerived(context);
        if (validatesWhenDerived) {
            discharges = true;
        }
        if (discharges) {
            context.debug(`...discharged the '${typeAssertionString}' type assertion.`);
        }
        return discharges;
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
        const term = this.term.validate(context, (term, context)=>{
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
        term = term.validate(context, (term, context)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlLCB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5Cb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG5cbiAgZGlzY2hhcmdlKGNvbnRleHQpIHtcbiAgICBsZXQgZGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYERpc2NoYXJnaW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBkaXNjaGFyZ2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGlzY2hhcmdlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uZGlzY2hhcmdlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNjaGFyZ2VzO1xuICB9XG5cbiAgdmFsaWRhdGVUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0sIGNvbnRleHQpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUbyh0aGlzLnR5cGUpLFxuICAgICAgICAgICAgdGVybVR5cGVTdXBlclR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1cGVyVHlwZU9mKHRoaXMudHlwZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAodGVybVR5cGVFcXVhbFRvVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRlcm1UeXBlU3VwZXJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Fc3RhYmxpc2hlZCA9IHRlcm0uaXNFc3RhYmxpc2hlZCgpO1xuXG4gICAgICAgIGlmICh0ZXJtRXN0YWJsaXNoZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMudHlwZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBsZXQgdGVybTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgY29udGV4dCk7XG5cbiAgICB0ZXJtID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCB0aGlzLnR5cGUsIGNvbnRleHQpOyAvL1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudCh2YXJpYWJsZUFzc2lnbWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdHlwZUpTT04sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVR5cGVBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHR5cGUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIHR5cGUsIGNvbnRleHQpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSwgY29udGV4dCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICBjb25zdCB0ZXJtRXN0YWJsaXNoZWQgPSB0ZXJtLmlzRXN0YWJsaXNoZWQoKTtcblxuICAgICAgICBpZiAodGVybUVzdGFibGlzaGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VHlwZUFzc2VydGlvbk5Cb2RlIiwiZ2V0Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhc3NpZ24iLCJhZGRBc3NlcnRpb24iLCJkaXNjaGFyZ2UiLCJkaXNjaGFyZ2VzIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidGVybVR5cGVFcXVhbFRvVHlwZSIsImlzRXF1YWxUbyIsInRlcm1UeXBlU3VwZXJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInRlcm1Fc3RhYmxpc2hlZCIsImlzRXN0YWJsaXNoZWQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZUFzc2VydGlvbiIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUpTT04iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztrRUFYc0I7MEJBRUM7eUJBQ0s7NkJBQ2E7c0JBQ0k7K0JBQ0E7d0JBQ087NEJBQ1c7eUJBQ1c7Ozs7OztNQUUxRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsa0JBQVM7SUFDekQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN6RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsd0JBQXdCO1FBQ3RCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxvQkFBb0JSLE1BQU0sR0FBRztRQUVuQyxPQUFPUTtJQUNUO0lBRUFDLFNBQVNYLE9BQU8sRUFBRTtRQUNoQixJQUFJWSxnQkFBZ0I7UUFFcEIsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFbERkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsbUJBQW1CLENBQUM7UUFFekUsSUFBSUcsWUFBWTtRQUVoQixNQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2xCO1FBRS9DLElBQUlpQixnQkFBZ0I7WUFDbEJELFlBQVk7WUFFWkosZ0JBQWdCSyxnQkFBZ0IsR0FBRztZQUVuQ2pCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVOLG9CQUFvQixrQ0FBa0MsQ0FBQztRQUNsRixPQUFPO1lBQ0wsTUFBTU8sZ0JBQWdCLElBQUksQ0FBQ0MsWUFBWSxDQUFDckI7WUFFeEMsSUFBSW9CLGVBQWU7Z0JBQ2pCLE1BQU1FLFNBQVN0QixRQUFRdUIsUUFBUTtnQkFFL0IsSUFBSUMsc0JBQXNCLE9BQ3hCQyx1QkFBdUI7Z0JBRXpCLElBQUlILFFBQVE7b0JBQ1ZFLHNCQUFzQixJQUFJLENBQUNFLGtCQUFrQixDQUFDMUI7Z0JBQ2hELE9BQU87b0JBQ0x5Qix1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQzNCO2dCQUNsRDtnQkFFQSxJQUFJd0IsdUJBQXVCQyxzQkFBc0I7b0JBQy9DVCxZQUFZO2dCQUNkO1lBQ0Y7WUFFQSxJQUFJQSxXQUFXO2dCQUNiLE1BQU1ZLFlBQVksSUFBSSxFQUFFLEdBQUc7Z0JBRTNCaEIsZ0JBQWdCZ0IsV0FBWSxHQUFHO2dCQUUvQixJQUFJLENBQUNDLE1BQU0sQ0FBQzdCO2dCQUVaQSxRQUFROEIsWUFBWSxDQUFDRjtZQUN2QjtRQUNGO1FBRUEsSUFBSVosV0FBVztZQUNiaEIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTixvQkFBb0IsaUJBQWlCLENBQUM7UUFDMUU7UUFFQSxPQUFPRDtJQUNUO0lBRUFtQixVQUFVL0IsT0FBTyxFQUFFO1FBQ2pCLElBQUlnQyxhQUFhO1FBRWpCLE1BQU1uQixzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUUxRSxNQUFNWSx1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQzNCO1FBRXRELElBQUl5QixzQkFBc0I7WUFDeEJPLGFBQWE7UUFDZjtRQUVBLElBQUlBLFlBQVk7WUFDZGhDLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxtQkFBbUIsRUFBRU4sb0JBQW9CLGlCQUFpQixDQUFDO1FBQzVFO1FBRUEsT0FBT21CO0lBQ1Q7SUFFQVgsYUFBYXJCLE9BQU8sRUFBRTtRQUNwQixJQUFJb0I7UUFFSixNQUFNUCxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQiwwQkFBMEIsQ0FBQztRQUVoRixNQUFNb0Isa0JBQWtCLElBQUksQ0FBQzVCLElBQUksQ0FBQzZCLGtCQUFrQixJQUM5QzdCLE9BQU9MLFFBQVFtQyx5QkFBeUIsQ0FBQ0Y7UUFFL0MsSUFBSTVCLFNBQVMsTUFBTTtZQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFFWmUsZ0JBQWdCO1FBQ2xCLE9BQU87WUFDTCxNQUFNZ0IsYUFBYSxJQUFJLENBQUMvQixJQUFJLENBQUNTLFNBQVM7WUFFdENkLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVpQixXQUFXLHNCQUFzQixDQUFDO1FBQzFEO1FBRUEsSUFBSWhCLGVBQWU7WUFDakJwQixRQUFRbUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLG9CQUFvQix3QkFBd0IsQ0FBQztRQUNsRjtRQUVBLE9BQU9PO0lBQ1Q7SUFFQU0sbUJBQW1CMUIsT0FBTyxFQUFFO1FBQzFCLElBQUl3QixzQkFBc0I7UUFFMUIsTUFBTVgsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakRkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsMEJBQTBCLENBQUM7UUFFaEYsTUFBTVQsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ08sUUFBUSxDQUFDWCxTQUFTLENBQUNJLE1BQU1KO1lBQzlDLElBQUlxQyxvQkFBb0I7WUFFeEIsTUFBTUMsV0FBV2xDLEtBQUtHLE9BQU8sSUFDdkJnQyxzQkFBc0JELFNBQVNFLFNBQVMsQ0FBQyxJQUFJLENBQUNuQyxJQUFJLEdBQ2xEb0MsMEJBQTBCSCxTQUFTSSxhQUFhLENBQUMsSUFBSSxDQUFDckMsSUFBSTtZQUVoRSxJQUFJLE9BQU87WUFDVCxHQUFHO1lBQ0wsT0FBTyxJQUFJa0MscUJBQXFCO2dCQUM5QkYsb0JBQW9CO1lBQ3RCLE9BQU8sSUFBSUkseUJBQXlCO2dCQUNsQyxNQUFNRSxrQkFBa0J2QyxLQUFLd0MsYUFBYTtnQkFFMUMsSUFBSUQsaUJBQWlCO29CQUNuQk4sb0JBQW9CO2dCQUN0QjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtRQUVBLElBQUlqQyxTQUFTLE1BQU07WUFDakIsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBRVpvQixzQkFBc0I7UUFDeEI7UUFFQSxJQUFJQSxxQkFBcUI7WUFDdkJ4QixRQUFRbUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLG9CQUFvQix3QkFBd0IsQ0FBQztRQUNsRjtRQUVBLE9BQU9XO0lBQ1Q7SUFFQUcsb0JBQW9CM0IsT0FBTyxFQUFFO1FBQzNCLElBQUl5Qix1QkFBdUI7UUFFM0IsTUFBTVosc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakRkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsMkJBQTJCLENBQUM7UUFFakYsTUFBTVQsT0FBT3VCLG9CQUFvQixJQUFJLENBQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUVMO1FBRXZELElBQUlJLFNBQVMsTUFBTTtZQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFFWnFCLHVCQUF1QjtRQUN6QjtRQUVBLElBQUlBLHNCQUFzQjtZQUN4QnpCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sb0JBQW9CLHlCQUF5QixDQUFDO1FBQ25GO1FBRUEsT0FBT1k7SUFDVDtJQUVBb0IsbUJBQW1CQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUNsRCxJQUFJQyx1QkFBdUI7UUFFM0IsTUFBTWhELFVBQVUrQyxpQkFDVmxDLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRWpEZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLG9CQUFvQixpQ0FBaUMsQ0FBQztRQUVyRixJQUFJVDtRQUVKQSxPQUFPNkMsSUFBQUEsMkNBQTRCLEVBQUMsSUFBSSxDQUFDN0MsSUFBSSxFQUFFSjtRQUUvQ0ksT0FBT3VCLG9CQUFvQnZCLE1BQU0sSUFBSSxDQUFDQyxJQUFJLEVBQUVMLFVBQVUsRUFBRTtRQUV4RCxJQUFJSSxTQUFTLE1BQU07WUFDakI0Qyx1QkFBdUI7UUFDekI7UUFFQSxJQUFJQSxzQkFBc0I7WUFDeEJoRCxRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVOLG9CQUFvQiwrQkFBK0IsQ0FBQztRQUN2RjtRQUVBLE9BQU9tQztJQUNUO0lBRUFuQixPQUFPN0IsT0FBTyxFQUFFO1FBQ2QsTUFBTXNCLFNBQVN0QixRQUFRdUIsUUFBUTtRQUUvQixJQUFJLENBQUNELFFBQVE7WUFDWDtRQUNGO1FBRUEsTUFBTVYsZ0JBQWdCLElBQUksRUFDcEJzQyxvQkFBb0JDLElBQUFBLDJDQUFtQyxFQUFDdkMsZUFBZVo7UUFFN0VBLFFBQVFvRCxhQUFhLENBQUNGO0lBQ3hCO0lBRUFHLFNBQVM7UUFDUCxNQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2xELElBQUksR0FDbkNtRCxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQnhELFNBQVMsSUFBSSxDQUFDYSxTQUFTO1FBRTdCLElBQUlYO1FBRUpBLGFBQWEsSUFBSSxDQUFDdUQsYUFBYTtRQUUvQixNQUFNQyxpQkFBaUJDLElBQUFBLHNDQUEwQixFQUFDekQ7UUFFbERBLGFBQWF3RCxnQkFBaUIsR0FBRztRQUVqQyxNQUFNdEQsT0FBT2lELFVBQ1BPLE9BQU87WUFDTEw7WUFDQXZEO1lBQ0FFO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPd0Q7SUFDVDtJQUVBLE9BQU9MLE9BQU8sZ0JBQWdCO0lBRTlCLE9BQU9NLFNBQVNELElBQUksRUFBRTdELE9BQU8sRUFBRTtRQUM3QixJQUFJWSxnQkFBZ0I7UUFFcEIsTUFBTSxFQUFFNEMsSUFBSSxFQUFFLEdBQUdLO1FBRWpCLElBQUksSUFBSSxDQUFDTCxJQUFJLEtBQUtBLE1BQU07WUFDdEJPLElBQUFBLG9CQUFXLEVBQUMsQ0FBQy9EO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUc0RCxNQUNibkQsb0JBQW9Cc0QsSUFBQUEscUNBQXdCLEVBQUMvRCxRQUFRRCxVQUNyREUsT0FBT1EsbUJBQ1BQLGFBQWE4RCxJQUFBQSw4QkFBa0IsRUFBQ0osT0FDaEN6RCxPQUFPOEQsSUFBQUEsa0NBQXlCLEVBQUN4RCxtQkFBbUJWLFVBQ3BESyxPQUFPOEQsSUFBQUEsa0JBQVksRUFBQ04sTUFBTTdEO2dCQUVoQ0EsVUFBVTtnQkFFVlksZ0JBQWdCLElBQUlkLGNBQWNFLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDLE1BQU1DO1lBQzdFLEdBQUdMO1FBQ0w7UUFFQSxPQUFPWTtJQUNUO0lBRUEsT0FBT3dELGNBQWNDLFNBQVMsRUFBRXJFLE9BQU8sRUFBRTtRQUN2QyxNQUFNc0UsZ0JBQWdCRCxVQUFVNUQsT0FBTyxJQUNqQ0csZ0JBQWdCMkQsSUFBQUEsdUNBQThCLEVBQUNELGVBQWV0RTtRQUVwRSxPQUFPWTtJQUNUO0FBQ0Y7QUFFQSxTQUFTZSxvQkFBb0J2QixJQUFJLEVBQUVDLElBQUksRUFBRUwsT0FBTztJQUM5QyxJQUFJSSxTQUFTLE1BQU07UUFDakJBLE9BQU9BLEtBQUtPLFFBQVEsQ0FBQ1gsU0FBUyxDQUFDSSxNQUFNSjtZQUNuQyxJQUFJcUMsb0JBQW9CO1lBRXhCLE1BQU1DLFdBQVdsQyxLQUFLRyxPQUFPLElBQ3ZCaUUsaUNBQWlDbEMsU0FBU21DLG9CQUFvQixDQUFDcEU7WUFFckUsSUFBSW1FLGdDQUFnQztnQkFDbEMsTUFBTTdCLGtCQUFrQnZDLEtBQUt3QyxhQUFhO2dCQUUxQyxJQUFJRCxpQkFBaUI7b0JBQ25CTixvQkFBb0I7Z0JBQ3RCO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFFQSxPQUFPakM7QUFDVCJ9