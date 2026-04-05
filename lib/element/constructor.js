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
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const includeType = false, typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(includeType), lineIndex = this.getLineIndex(), type = typeJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRlcm1Bc0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmFsaWRhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JOb2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGluY2x1ZGVUeXBlID0gdHJ1ZSkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoaW5jbHVkZVR5cGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfS4ke3R5cGVTdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nID0gc3VwZXIuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciA9IHZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IodGhpcy50ZXJtLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSB0byB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZHMpIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtLCB0eXBlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJnZXRTdHJpbmciLCJpbmNsdWRlVHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIiwic2V0VHlwZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiY29tbWl0IiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzQXNDb25zdHJ1Y3RvciIsInZhbGlkYXRlVGVybUFzQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm0iLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVVuaWZpZXMiLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRvSlNPTiIsInNlcmlhbGlzZSIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzBCQUVEOzZCQUNnQjt5QkFDQzt1QkFDQzswQkFDQztzQkFDRzt5QkFDZ0I7TUFFN0QsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFPO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDeEQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLG9CQUFvQjtRQUNsQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsa0JBQWtCUixNQUFPLEdBQUc7UUFFbEMsT0FBT1E7SUFDVDtJQUVBQyxVQUFVQyxjQUFjLElBQUksRUFBRTtRQUM1QixJQUFJWDtRQUVKLElBQUlXLGFBQWE7WUFDZixNQUFNQyxhQUFhLElBQUksQ0FBQ1QsSUFBSSxDQUFDTyxTQUFTLElBQ2hDRyxhQUFhLElBQUksQ0FBQ1QsSUFBSSxDQUFDTSxTQUFTO1lB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