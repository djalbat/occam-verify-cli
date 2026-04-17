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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), name = this.getName(), string = this.getString(), lineIndex = this.getBreakPoint(), type = typeJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlLCB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUbyh0aGlzLnR5cGUpLFxuICAgICAgICAgICAgdGVybVR5cGVTdXBlclR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1cGVyVHlwZU9mKHRoaXMudHlwZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAodGVybVR5cGVFcXVhbFRvVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRlcm1UeXBlU3VwZXJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Fc3RhYmxpc2hlZCA9IHRlcm0uaXNFc3RhYmxpc2hlZCgpO1xuXG4gICAgICAgIGlmICh0ZXJtRXN0YWJsaXNoZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMudHlwZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBsZXQgdGVybTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgY29udGV4dCk7XG5cbiAgICB0ZXJtID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCB0aGlzLnR5cGUsIGNvbnRleHQpOyAvL1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudCh2YXJpYWJsZUFzc2lnbWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVR5cGVBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgdHlwZSk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgdHlwZSwgY29udGV4dCkge1xuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Fc3RhYmxpc2hlZCA9IHRlcm0uaXNFc3RhYmxpc2hlZCgpO1xuXG4gICAgICAgIGlmICh0ZXJtRXN0YWJsaXNoZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZUFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsInR5cGUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldFR5cGVBc3NlcnRpb25OQm9kZSIsImdldE5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidGVybVR5cGVFcXVhbFRvVHlwZSIsImlzRXF1YWxUbyIsInRlcm1UeXBlU3VwZXJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInRlcm1Fc3RhYmxpc2hlZCIsImlzRXN0YWJsaXNoZWQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0QnJlYWtQb2ludCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tSlNPTiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2tFQVZzQjswQkFFQzt5QkFDSzs2QkFDYTtzQkFDSTsrQkFDQTt3QkFDTzt5QkFDc0I7Ozs7OztNQUUxRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsa0JBQVM7SUFDekQsWUFBWUMsT0FBTyxF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