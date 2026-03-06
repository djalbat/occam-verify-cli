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
    constructor(context, string, node, term){
        super(context, string, node);
        this.term = term;
    }
    getTerm() {
        return this.term;
    }
    getConclusionNode() {
        const node = this.getNode(), constructorNode = node; ///
        return constructorNode;
    }
    getType() {
        return this.term.getType();
    }
    getString(includeType = true) {
        let string;
        if (includeType) {
            const type = this.getType(), typeString = type.getString(), termString = this.term.getString();
            string = `${termString}.${typeString}`;
        } else {
            string = super.getString();
        }
        return string;
    }
    setType(type) {
        this.term.setType(type);
    }
    verify(context) {
        let verifies = false;
        const includeType = false, constructorString = this.getString(includeType);
        context.trace(`Verifying the '${constructorString}' constructor...`);
        (0, _context.attempt)((context)=>{
            const termVerifiesAsConstructor = (0, _verify.verifyTermAsConstructor)(this.term, context);
            if (termVerifiesAsConstructor) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${constructorString}' constructor.`);
        }
        return verifies;
    }
    unifyTerm(term, context, validateForwards) {
        let termUnifies = false;
        const termString = term.getString(), constructorString = this.getString(); ///
        context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);
        const specifiContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specifiContext; ///
        const constructor = this, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructor)(term, constructor, generalContext, specifiContext);
        if (termUnifiesWithConstructor) {
            let validatesForwards;
            const type = this.getType();
            term.setType(type);
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
        const includeType = false, termJSON = (0, _json.termToTermJSON)(this.term), string = this.getString(includeType), term = termJSON, json = {
            context,
            string,
            term
        };
        return json;
    }
    static name = "Constructor";
    static fromJSON(json, context) {
        const constructor = (0, _context.literally)((context)=>{
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _element.termFromConstructorNode)(constructorNode, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const constructor = new Constructor(context, string, node, term);
            return constructor;
        }, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB0ZXJtVG9UZXJtSlNPTiwgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudGVybS5nZXRUeXBlKCk7IH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfS4ke3R5cGVTdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nID0gc3VwZXIuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkgeyB0aGlzLnRlcm0uc2V0VHlwZSh0eXBlKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGhpcy50ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVzID0gdmFsaWRhdGVzRm9yd2FyZHM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZyhpbmNsdWRlVHlwZSksXG4gICAgICAgICAgdGVybSA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3I7XG5cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZ2V0VGVybSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJpbmNsdWRlVHlwZSIsInR5cGUiLCJ0eXBlU3RyaW5nIiwidGVybVN0cmluZyIsInNldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwic2V0Q29udGV4dCIsImRlYnVnIiwidW5pZnlUZXJtIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1VbmlmaWVzIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0b0pTT04iLCJjb250ZXh0SlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzBCQUVEO3lCQUNZOzZCQUNJO3dCQUNDO3lCQUNBO3VCQUNDO3NCQUNnQjtNQUV6RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsa0JBQWtCTCxNQUFPLEdBQUc7UUFFbEMsT0FBT0s7SUFDVDtJQUVBQyxVQUFVO1FBQUUsT0FBTyxJQUFJLENBQUNMLElBQUksQ0FBQ0ssT0FBTztJQUFJO0lBRXhDQyxVQUFVQyxjQUFjLElBQUksRUFBRTtRQUM1QixJQUFJVDtRQUVKLElBQUlTLGFBQWE7WUFDZixNQUFNQyxPQUFPLElBQUksQ0FBQ0gsT0FBTyxJQUNuQkksYUFBYUQsS0FBS0YsU0FBUyxJQUMzQkksYUFBYSxJQUFJLENBQUNWLElBQUksQ0FBQ00sU0FBUztZQUV0Q1IsU0FBUyxHQUFHWSxXQUFXLENBQUMsRUFBRUQsWUFBWTtRQUN4QyxPQUFPO1lB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