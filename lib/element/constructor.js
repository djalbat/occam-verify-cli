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
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        return (0, _context.instantiate)((context)=>{
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context), constructor = new Constructor(context, string, node, term, type);
            return constructor;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBzdXBlci5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yID0gdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSB0byB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRKU09OOyAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JOb2RlIiwiZ2V0U3RyaW5nIiwiaW5jbHVkZVR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInNldFR5cGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsImNvbW1pdCIsImRlYnVnIiwidGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIiwidW5pZnlUZXJtIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1VbmlmaWVzIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0b0pTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzBCQUVEO3lCQUNjOzZCQUNFO3lCQUNDO3VCQUNDOzBCQUNDO3NCQUNxRTtNQUUvRyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDN0MsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNRTtRQUU3QixJQUFJLENBQUNELElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFH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