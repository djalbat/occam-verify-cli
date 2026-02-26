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
        const termJSON = (0, _json.termToTermJSON)(this.term), term = termJSON, json = {
            term
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04sIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9LiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHsgdGhpcy50ZXJtLnNldFR5cGUodHlwZSk7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0aGlzLnRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVzQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgdGVybVVuaWZpZXMgPSB2YWxpZGF0ZXNGb3J3YXJkczsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBpbnN0YW50aWF0ZUNvbnN0cnVjdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcblxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJnZXRUZXJtIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JOb2RlIiwiZ2V0VHlwZSIsImdldFN0cmluZyIsInR5cGUiLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInNldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0IiwidGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwic2V0Q29udGV4dCIsImRlYnVnIiwidW5pZnlUZXJtIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1VbmlmaWVzIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlQ29uc3RydWN0b3IiLCJ0ZXJtRnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7eUJBQ1k7NkJBQ0k7d0JBQ0M7dUJBQ0M7c0JBQzhCO01BRXZFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDdkMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxrQkFBa0JMLE1BQU8sR0FBRztRQUVsQyxPQUFPSztJQUNUO0lBRUFDLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQ0wsSUFBSSxDQUFDSyxPQUFPO0lBQUk7SUFFeENDLFlBQVk7UUFDVixJQUFJUjtRQUVKLE1BQU1TLE9BQU8sSUFBSSxDQUFDRixPQUFPO1FBRXpCLElBQUlFLFNBQVMsTUFBTTtZQUNqQixNQUFNQyxhQUFhLElBQUksQ0FBQ1IsSUFBSSxDQUFDTSxTQUFTO1lBRXRDUixTQUFTVSxZQUFhLEdBQUc7UUFDM0IsT0FBTztZQUNMLE1BQU1DLGFBQWFGLEtBQUtELFNBQVMsSUFDM0JFLGFBQWEsSUFBSSxDQUFDUixJQUFJLENBQUNNLFNBQVM7WUFFdENSLFNBQVMsR0FBR1UsV0FBVyxDQUFDLEVBQUVDLFlBQVk7UUFDeEM7UUFFQSxPQUFPWDtJQUNUO0lBRUFZLFFBQVFILElBQUksRUFBRTtRQUFFLElBQUksQ0FBQ1AsSUFBSSxDQUFDVSxPQUFPLENBQUNIO0lBQU87SUFFekNJLE9BQU9kLE9BQU8sRUFBRTtRQUNkLElBQUllLFdBQVc7UUFFZixNQUFNQyxvQkFBb0IsSUFBSSxDQUFDUCxTQUFTLElBQUssR0FBRztRQUVoRFQsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUQsa0JBQWtCLGdCQUFnQixDQUFDO1FBRW5FRSxJQUFBQSxnQkFBTyxFQUFDLENBQUNsQjtZQUNQLE1BQU1tQiw0QkFBNEJDLElBQUFBLCtCQUF1QixFQUFDLElBQUksQ0FBQ2pCLElBQUksRUFBRUg7WUFFckUsSUFBSW1CLDJCQUEyQjtnQkFDN0IsSUFBSSxDQUFDRSxVQUFVLENBQUNyQjtnQkFFaEJlLFdBQVc7WUFDYjtRQUNGLEdBQUdmO1FBRUgsSUFBSWUsVUFBVTtZQUNaZixRQUFRc0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVOLGtCQUFrQixjQUFjLENBQUM7UUFDckU7UUFFQSxPQUFPRDtJQUNUO0lBRUFRLFVBQVVwQixJQUFJLEVBQUVILE9BQU8sRUFBRXdCLGdCQUFnQixFQUFFO1FBQ3pDLElBQUlDLGNBQWM7UUFFbEIsTUFBTWQsYUFBYVIsS0FBS00sU0FBUyxJQUMzQk8sb0JBQW9CLElBQUksQ0FBQ1AsU0FBUyxJQUFJLEdBQUc7UUFFL0NULFFBQVFpQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVOLFdBQVcsaUJBQWlCLEVBQUVLLGtCQUFrQixnQkFBZ0IsQ0FBQztRQUVoRyxNQUFNVSxpQkFBaUIxQixTQUFTLEdBQUc7UUFFbkNBLFVBQVUsSUFBSSxDQUFDMkIsVUFBVTtRQUV6QixNQUFNQyxpQkFBaUI1QixTQUFTLEdBQUc7UUFFbkNBLFVBQVUwQixnQkFBZ0IsR0FBRztRQUU3QixNQUFNRyxjQUFjLElBQUksRUFDbEJDLDZCQUE2QkMsSUFBQUEsK0JBQXdCLEVBQUM1QixNQUFNMEIsYUFBYUQsZ0JBQWdCRjtRQUUvRixJQUFJSSw0QkFBNEI7WUFDOUIsSUFBSUU7WUFFSixNQUFNdEIsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFFekJMLEtBQUtVLE9BQU8sQ0FBQ0g7WUFFYnNCLG9CQUFvQlI7WUFFcEJDLGNBQWNPLG1CQUFvQixHQUFHO1FBQ3ZDO1FBRUEsSUFBSVAsYUFBYTtZQUNmekIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFWCxXQUFXLGlCQUFpQixFQUFFSyxrQkFBa0IsY0FBYyxDQUFDO1FBQ2xHO1FBRUEsT0FBT1M7SUFDVDtJQUVBUSxTQUFTO1FBQ1AsTUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNoQyxJQUFJLEdBQ25DQSxPQUFPK0IsVUFDUEUsT0FBTztZQUNMakM7UUFDRjtRQUVOLE9BQU9pQztJQUNUO0lBRUEsT0FBT0MsT0FBTyxjQUFjO0lBRTVCLE9BQU9DLFNBQVNGLElBQUksRUFBRXBDLE9BQU8sRUFBRTtRQUM3QixNQUFNNkIsY0FBY1UsSUFBQUEsa0JBQVMsRUFBQyxDQUFDdkM7WUFDN0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR21DLE1BQ2I3QixrQkFBa0JpQyxJQUFBQSxtQ0FBc0IsRUFBQ3ZDLFFBQVFELFVBQ2pERSxPQUFPSyxpQkFDUEosT0FBT3NDLElBQUFBLGtCQUFZLEVBQUNMLE1BQU1wQyxVQUMxQjBDLG1CQUFtQkMsSUFBQUEsOEJBQXdCLEVBQUNQLE1BQU1wQztZQUV4REEsVUFBVTBDLGtCQUFrQixHQUFHO1lBRS9CLE1BQU1iLGNBQWMsSUFBSS9CLFlBQVlFLFNBQVNDLFFBQVFDLE1BQU1DO1lBRTNELE9BQU8wQjtRQUVULEdBQUc3QjtRQUVILE9BQU82QjtJQUNUO0FBQ0YifQ==