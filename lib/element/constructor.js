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
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _unify = require("../process/unify");
const _validate = require("../process/validate");
const _json = require("../utilities/json");
const _string = require("../utilities/string");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Constructor extends _occamlanguages.Element {
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
    getConclusionNode() {
        const node = this.getNode(), constructorNode = node; ///
        return constructorNode;
    }
    getString(includeType = true) {
        let string;
        if (includeType) {
            const termString = this.term.getString(), typeString = this.type.getString();
            string = `${termString}.${typeString}`;
        } else {
            string = super.getString();
        }
        return string;
    }
    setType(type) {
        this.type = type;
    }
    validate(context) {
        let validates = false;
        const includeType = false, constructorString = this.getString(includeType);
        context.trace(`Validating the '${constructorString}' constructor...`);
        (0, _context.attempt)((context)=>{
            const termValidates = this.validateTerm(context);
            if (termValidates) {
                validates = true;
            }
            if (validates) {
                this.commit(context);
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${constructorString}' constructor.`);
        }
        return validates;
    }
    validateTerm(context) {
        let termValidates = false;
        const includeType = false, constructorString = this.getString(includeType);
        context.trace(`Validating the '${constructorString}' constructor's term...`);
        const termValidatesAsConstructor = (0, _validate.validateTermAsConstructor)(this.term, context);
        if (termValidatesAsConstructor) {
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${constructorString}' constructor's term.`);
        }
        return termValidates;
    }
    unifyTerm(term, context, validateForwards) {
        let termUnifies = false;
        const termString = term.getString(), includeType = false, constructorString = this.getString(includeType);
        context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);
        const specifiContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specifiContext; ///
        const constructor = this, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructor)(term, constructor, generalContext, specifiContext);
        if (termUnifiesWithConstructor) {
            let validatesForwards;
            const typeString = this.type.getString(), provisional = this.type.isProvisional(), provisionallyString = (0, _string.provisionallyStringFromProvisional)(provisional);
            context.trace(`Setting the '${termString}' term's type to the '${constructorString}' constructor's '${typeString}' type${provisionallyString}.`);
            term.setType(this.type);
            term.setProvisional(provisional);
            validatesForwards = validateForwards(term);
            if (validatesForwards) {
                termUnifies = true;
            }
        }
        if (termUnifies) {
            context.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`);
        }
        return termUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const includeType = false, typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(includeType);
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = breakPoint.toJSON();
            breakPoint = breakPointJSON; ///
            const type = typeJSON, json = {
                context,
                string,
                breakPoint,
                type
            };
            return json;
        }, context);
    }
    static name = "Constructor";
    static fromJSON(json, context) {
        let constructor;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, breakPoint } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context);
                constructor = new Constructor(context, string, node, breakPoint, term, type);
            }, context);
        }, json, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yTm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZyhpbmNsdWRlVHlwZSA9IHRydWUpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGluY2x1ZGVUeXBlKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ30uJHt0eXBlU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZyA9IHN1cGVyLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IgPSB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yKHRoaXMudGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IpIHtcbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnR5cGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxseVN0cmluZyA9IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSB0byB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVTdHJpbmd9JyB0eXBlJHtwcm92aXNpb25hbGx5U3RyaW5nfS5gKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgIHRlcm0uc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHZhbGlkYXRlRm9yd2FyZHModGVybSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXNGb3J3YXJkcykge1xuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgICAgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnQudG9KU09OKCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb25zdHJ1Y3RvcjtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgYnJlYWtQb2ludCB9ID0ganNvbixcbiAgICAgICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gaW5zdGFudGlhdGVDb25zdHJ1Y3RvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtLCB0eXBlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JOb2RlIiwiZ2V0U3RyaW5nIiwiaW5jbHVkZVR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInNldFR5cGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsImNvbW1pdCIsImRlYnVnIiwidGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIiwidW5pZnlUZXJtIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1VbmlmaWVzIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbGx5U3RyaW5nIiwicHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCIsInNldFByb3Zpc2lvbmFsIiwidG9KU09OIiwic2VyaWFsaXNlIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYd0I7MEJBRUQ7NkJBQ2dCO3lCQUNDO3VCQUNDOzBCQUNDO3NCQUNHO3dCQUNNO3lCQUNV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