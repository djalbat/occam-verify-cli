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
            const includeType = false, typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(includeType), lineIndex = this.getBreakPoint(), type = typeJSON, json = {
                context,
                string,
                lineIndex,
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
                const { string, lineIndex } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context);
                constructor = new Constructor(context, string, node, lineIndex, term, type);
            }, context);
        }, json, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBzdXBlci5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yID0gdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmlDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsbHlTdHJpbmcgPSBwcm92aXNpb25hbGx5U3RyaW5nRnJvbVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKVxuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIHR5cGUgdG8gdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlU3RyaW5nfScgdHlwZSR7cHJvdmlzaW9uYWxseVN0cmluZ30uYCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICB0ZXJtLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb25zdHJ1Y3RvcjtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgdHlwZSk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JOb2RlIiwiZ2V0U3RyaW5nIiwiaW5jbHVkZVR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInNldFR5cGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsImNvbW1pdCIsImRlYnVnIiwidGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIiwidW5pZnlUZXJtIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1VbmlmaWVzIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbGx5U3RyaW5nIiwicHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCIsInNldFByb3Zpc2lvbmFsIiwidG9KU09OIiwic2VyaWFsaXNlIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImdldEJyZWFrUG9pbnQiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzBCQUVEOzZCQUNnQjt5QkFDQzt1QkFDQzswQkFDQztzQkFDRzt3QkFDTTt5QkFDVTtNQUU3RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN4RCxLQUFLLENBQUNM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