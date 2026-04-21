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
const _context = require("../utilities/context");
const _breakPoint = require("../utilities/breakPoint");
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
        const termString = term.getString(), includeType = false, constructorString = this.getString(includeType); ///
        context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);
        const constructor = this, constructorContext = constructor.getContext(), generalContext = constructorContext, specifiContext = context, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructor)(term, constructor, generalContext, specifiContext);
        if (termUnifiesWithConstructor) {
            const provisional = this.type.isProvisional();
            term.setType(this.type);
            term.setProvisional(provisional);
            const validatesForwards = validateForwards(term, context);
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
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), term = (0, _element.termFromConstructorNode)(constructorNode, context), type = (0, _json.typeFromJSON)(json, context);
                constructor = new Constructor(context, string, node, breakPoint, term, type);
            }, json, context);
        }, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5jbHVkZVR5cGUgPSB0cnVlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChpbmNsdWRlVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBzdXBlci5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yID0gdmFsaWRhdGVUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXNBc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvckNvbnRleHQgPSBjb25zdHJ1Y3Rvci5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb25zdHJ1Y3RvckNvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMudHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICB0ZXJtLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHR5cGUpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJnZXRTdHJpbmciLCJpbmNsdWRlVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIiwic2V0VHlwZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiY29tbWl0IiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciIsInZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm0iLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVVuaWZpZXMiLCJjb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmlDb250ZXh0IiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJzZXRQcm92aXNpb25hbCIsInZhbGlkYXRlc0ZvcndhcmRzIiwidG9KU09OIiwic2VyaWFsaXNlIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZUNvbnN0cnVjdG9yIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGVybUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0eXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjswQkFFRDs2QkFDZ0I7eUJBQ0M7dUJBQ0M7MEJBQ0M7c0JBQ0c7eUJBQ2dCOzRCQUNFO01BRS9ELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3pELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdB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