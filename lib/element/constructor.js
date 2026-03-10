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
                this.setContext(context);
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
            term.setType(this.type);
            validatesForwards = validateForwards();
            termUnifies = validatesForwards; ///
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
        const constructor = (0, _context.literally)((context)=>{
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = termFromConstructorNode(constructorNode, context), type = (0, _json.typeFromJSON)(json, context), constructor = new Constructor(context, string, node, term, type);
            return constructor;
        }, context);
        return constructor;
    }
});
function termFromConstructorNode(constructorNode, context) {
    const termNode = constructorNode.getTermNode(), term = context.findTermByTermNode(termNode);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBzdXBlci5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciA9IHZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IodGhpcy50ZXJtLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVzID0gdmFsaWRhdGVzRm9yd2FyZHM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsInR5cGUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsImdldFN0cmluZyIsImluY2x1ZGVUeXBlIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciLCJzZXRUeXBlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJzZXRDb250ZXh0IiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciIsInZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm0iLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVVuaWZpZXMiLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInR5cGVGcm9tSlNPTiIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt5QkFDWTs2QkFDSTt1QkFDRTswQkFDQztzQkFDcUU7TUFFL0csV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFPO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQzdDLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUU7UUFFN0IsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxvQkFBb0I7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