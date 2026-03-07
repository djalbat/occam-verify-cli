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
const _verify = require("../process/verify");
const _element = require("../utilities/element");
const _unify = require("../process/unify");
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
    verify(context) {
        let verifies = false;
        const includeType = false, constructorString = this.getString(includeType);
        context.trace(`Verifying the '${constructorString}' constructor...`);
        (0, _context.attempt)((context)=>{
            const termVerifies = this.verifyTerm(context);
            if (termVerifies) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${constructorString}' constructor.`);
        }
        return verifies;
    }
    verifyTerm(context) {
        let termVerifies = false;
        const termString = this.term.getString(), includeType = false, constructorString = this.getString(includeType);
        context.trace(`Verifying the '${constructorString}' constructor's '${termString}' term...`);
        const termVerifiesAsConstructor = (0, _verify.verifyTermAsConstructor)(this.term, context);
        if (termVerifiesAsConstructor) {
            termVerifies = true;
        }
        if (termVerifies) {
            context.debug(`...verified the '${constructorString}' constructor's '${termString}' term.`);
        }
        return termVerifies;
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
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const includeType = false, termJSON = (0, _json.termToTermJSON)(this.term), typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(includeType), term = termJSON, type = typeJSON, json = {
            context,
            string,
            term,
            type
        };
        return json;
    }
    static name = "Constructor";
    static fromJSON(json, context) {
        const constructor = (0, _context.literally)((context)=>{
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const constructor = new Constructor(context, string, node, term, type);
            return constructor;
        }, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHRlcm1Ub1Rlcm1KU09OLCB0eXBlVG9UeXBlSlNPTiwgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBzdXBlci5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IpIHtcbiAgICAgIHRlcm1WZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVzID0gdmFsaWRhdGVzRm9yd2FyZHM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3I7XG5cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JOb2RlIiwiZ2V0U3RyaW5nIiwiaW5jbHVkZVR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInNldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInNldENvbnRleHQiLCJkZWJ1ZyIsInRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtVW5pZmllcyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZhbGlkYXRlc0ZvcndhcmRzIiwidG9KU09OIiwiY29udGV4dEpTT04iLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZUNvbnN0cnVjdG9yIiwidGVybUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0eXBlRnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7eUJBQ1k7NkJBQ0k7d0JBQ0M7eUJBQ0E7dUJBQ0M7c0JBQzhDO01BRXZGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUM3QyxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1FO1FBRTdCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsb0JBQW9CO1FBQ2xCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxrQkFBa0JQLE1BQU8sR0FBRztRQUVsQyxPQUFPTztJQUNUO0lBRUFDLFVBQVVDLGNBQWMsSUFBSSxFQUFFO1FBQzVCLElBQUlWO1FBRUosSUFBSVUsYUFBYTtZQUNmLE1BQU1DLGFBQWEsSUFBSSxDQUFDVCxJQUFJLENBQUNPLFNBQVMsSUFDaENHLGFBQWEsSUFBSSxDQUFDVCxJQUFJLENBQUNNLFNBQVM7WUFFdENULFNBQVMsR0FBR1csV0FBVyxDQUFDLEVBQUVDLFlBQVk7UUFDeEMsT0FBTztZQUNMWixTQUFTLEtBQUssQ0FBQ1M7UUFDakI7UUFFQSxP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