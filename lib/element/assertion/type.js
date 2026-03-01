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
const _assign = require("../../process/assign");
const _json = require("../../utilities/json");
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
        debugger;
        const { name } = this.constructor, termJSON = (0, _json.termToTermJSON)(this.term), typeJSON = typeToTypeJSON(this.type), term = termJSON, type = typeJSON, string = this.getString(), json = {
            string,
            name,
            term,
            type
        };
        return json;
    }
    static name = "TypeAssertion";
    static fromJSON(json, context) {
        let typeAssertion = null;
        const { name } = json;
        if (this.name === name) {
            debugger;
        }
        return typeAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuaW1wb3J0IHt0ZXJtVG9UZXJtSlNPTn0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZUFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdtZW50OyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgZGVidWdnZXJcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB0ZXJtSlNPTiA9IHRlcm1Ub1Rlcm1KU09OKHRoaXMudGVybSksXG4gICAgICAgICAgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VHlwZUFzc2VydGlvbk5Cb2RlIiwiZ2V0Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhc3NpZ25tZW50IiwiYWRkQXNzaWdubWVudCIsInRvSlNPTiIsIm5hbWUiLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7a0VBTnNCOzBCQUVDO3dCQUM2QjtzQkFDdkI7Ozs7OztNQUU3QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsa0JBQVM7SUFDekQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDN0MsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLHdCQUF3QjtRQUN0QixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsb0JBQW9CUCxNQUFNLEdBQUc7UUFFbkMsT0FBT087SUFDVDtJQUVBQyxTQUFTQyxNQUFNLEVBQUVYLE9BQU8sRUFBRTtRQUN4QixJQUFJWSxnQkFBZ0I7UUFFcEIsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFbERkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsbUJBQW1CLENBQUM7UUFFekUsTUFBTUcsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNqQjtRQUUvQyxJQUFJZ0IsZ0JBQWdCO1lBQ2xCSixnQkFBZ0JJLGdCQUFnQixHQUFHO1lBRW5DaEIs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