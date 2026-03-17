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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _unify = require("../process/unify");
const _validate = require("../process/validate");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Constructor extends _occamlanguages.Element {
    constructor(context, string, node, term, type){
        super(context, string, node, type);
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
                context.commit(this);
                validates = true;
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${constructorString}' constructor.`);
        }
        return validates;
    }
    validateTerm(context) {
        let termValidates = false;
        const termString = this.term.getString(), includeType = false, constructorString = this.getString(includeType);
        context.trace(`Validating the '${constructorString}' constructor's '${termString}' term...`);
        const termValidatesAsConstructor = (0, _validate.validateTermAsConstructor)(this.term, context);
        if (termValidatesAsConstructor) {
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${constructorString}' constructor's '${termString}' term.`);
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
            const typeString = this.type.getString();
            context.trace(`Setting the '${termString}' term's type to the '${constructorString}' constructor's '${typeString}' type.`);
            term.setType(this.type);
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
        let context;
        context = this.getContext();
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const includeType = false, typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(includeType), type = typeJSON, json = {
            context,
            string,
            type
        };
        return json;
    }
    static name = "Constructor";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context), sanitised = true;
        return (0, _context.instantiate)((context)=>{
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context);
            context = ephemeralContext; ///
            const constructor = new Constructor(context, string, node, term, type);
            return constructor;
        }, sanitised, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBzdXBlci5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yID0gdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSB0byB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRKU09OOyAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzYW5pdGlzZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9LCBzYW5pdGlzZWQsIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJnZXRTdHJpbmciLCJpbmNsdWRlVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIiwic2V0VHlwZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiY29tbWl0IiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciIsInZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm0iLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVVuaWZpZXMiLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsInNhbml0aXNlZCIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7eUJBQ2M7NkJBQ0U7eUJBQ0M7dUJBQ0M7MEJBQ0M7c0JBQ3FFO01BRS9HLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUM3QyxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1FO1FBRTdCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFB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