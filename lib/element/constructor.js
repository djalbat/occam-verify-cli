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
        const termJSON = (0, _json.termToTermJSON)(this.term), string = this.getString(), term = termJSON, json = {
            term,
            string
        };
        return json;
    }
    static name = "Constructor";
    static fromJSON(json, context) {
        const constructor = (0, _context.literally)((context)=>{
            const { string } = json, constructorNode = (0, _instantiate.instantiateConstructor)(string, context), node = constructorNode, term = (0, _json.termFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const constructor = new Constructor(context, string, node, term);
            return constructor;
        }, context);
        return constructor;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04sIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHsgdGhpcy50ZXJtLnNldFR5cGUodHlwZSk7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgdGVybVVuaWZpZXMgPSB2YWxpZGF0ZXNGb3J3YXJkczsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm0sXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29uc3RydWN0b3Ioc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKTtcblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuXG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsImdldFRlcm0iLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJnZXRUeXBlIiwiZ2V0U3RyaW5nIiwidHlwZSIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIiwic2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ0ZXJtVmVyaWZpZXNBc0NvbnN0cnVjdG9yIiwidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJzZXRDb250ZXh0IiwiZGVidWciLCJ1bmlmeVRlcm0iLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVVuaWZpZXMiLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRvSlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVDb25zdHJ1Y3RvciIsInRlcm1Gcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt5QkFDWTs2QkFD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