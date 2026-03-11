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
            const typeString = this.type.getString();
            context.trace(`Setting the '${termString}' term's type to the constructor's '${typeString}' type.`);
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
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context), constructor = new Constructor(context, string, node, term, type);
            return constructor;
        }, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiwgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JOb2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGluY2x1ZGVUeXBlID0gdHJ1ZSkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoaW5jbHVkZVR5cGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfS4ke3R5cGVTdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nID0gc3VwZXIuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IgPSB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yKHRoaXMudGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhbGlkYXRlc0FzQ29uc3RydWN0b3IpIHtcbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmlDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgU2V0dGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB0eXBlIHRvIHRoZSBjb25zdHJ1Y3RvcidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVzID0gdmFsaWRhdGVzRm9yd2FyZHM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JOb2RlIiwiZ2V0U3RyaW5nIiwiaW5jbHVkZVR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInNldFR5cGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInNldENvbnRleHQiLCJkZWJ1ZyIsInRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yIiwidmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtVW5pZmllcyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZhbGlkYXRlc0ZvcndhcmRzIiwidG9KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7eUJBQ1k7NkJBQ0k7eUJBQ0M7dUJBQ0M7MEJBQ0M7c0JBQ3FFO01BRS9HLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUM3QyxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1FO1FBRTdCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsb0JBQW9CO1FB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