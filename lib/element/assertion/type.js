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
            const termType = term.getType(), termTypeEqualToOrSuperTypeOfType = termType.isEqualToOrSuperTypeOf(this.type);
            if (termTypeEqualToOrSuperTypeOfType) {
                validatesForwards = true;
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
        const term = this.term.validate(context, (term)=>{
            let validatesForwards = false;
            const termType = term.getType(), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(this.type);
            if (termTypeEqualToOrSubTypeOfType) {
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            validatesWhenDerived = true;
        }
        if (validatesWhenDerived) {
            context.debug(`...validated the '${typeAssertionString}' derived type assertion.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlLCB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRoaXMudHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0aGlzLnR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHZhcmlhYmxlQXNzaWdtZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVUeXBlQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIHR5cGUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRUeXBlQXNzZXJ0aW9uTkJvZGUiLCJnZXROb2RlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidHlwZVZhbGlkYXRlcyIsInZhbGlkYXRlVHlwZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFzc2lnbiIsImFkZEFzc2VydGlvbiIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmFyaWFibGVBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwibmFtZSIsImdldE5hbWUiLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZUFzc2VydGlvbiIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUpTT04iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7a0VBVHNCOzBCQUVDO3lCQUNLOzZCQUNhO3NCQUNJO3dCQUNPO3lCQUNzQjs7Ozs7O01BRTFFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyxrQkFBUztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyx3QkFBd0I7UUFDdEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLG9CQUFvQlIsTUFBTSxHQUFHO1FBRW5DLE9BQU9RO0lBQ1Q7SUFFQUMsU0FBU1gsT0FBTyxFQUFFO1FBQ2hCLElBQUlZLGdCQUFnQjtRQUVwQixNQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RSxJQUFJRyxZQUFZO1FBRWhCLE1BQU1DLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDbEI7UUFFL0MsSUFBSWlCLGdCQUFn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