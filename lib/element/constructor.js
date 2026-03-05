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
    getString() {
        let string;
        const type = this.getType();
        if (type === null) {
            const termString = this.term.getString();
            string = termString; ///
        } else {
            const typeString = type.getString(), termString = this.term.getString();
            string = `${termString}.${typeString}`;
        }
        return string;
    }
    setType(type) {
        this.term.setType(type);
    }
    verify(context) {
        let verifies = false;
        const constructorString = this.getString(); ///
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
        const string = this.getString(), json = {
            context,
            string
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IHRlcm1TdHJpbmc7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfS4ke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7IHRoaXMudGVybS5zZXRUeXBlKHR5cGUpOyB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGhpcy50ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVzID0gdmFsaWRhdGVzRm9yd2FyZHM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3I7XG5cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZ2V0VGVybSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ0eXBlIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciLCJzZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5VGVybSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtVW5pZmllcyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZhbGlkYXRlc0ZvcndhcmRzIiwidG9KU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsInRlcm1Gcm9tQ29uc3RydWN0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