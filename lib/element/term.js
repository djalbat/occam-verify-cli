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
const _necessary = require("necessary");
const _elements = require("../elements");
const _context = require("../utilities/context");
const _validation = require("../utilities/validation");
const _instantiate = require("../process/instantiate");
const _equivalence = require("../utilities/equivalence");
const _json = require("../utilities/json");
const { filter } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Term extends _occamlanguages.Element {
    constructor(context, string, node, type){
        super(context, string, node);
        this.type = type;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getTermNode() {
        const node = this.getNode(), termNode = node; ///
        return termNode;
    }
    getVariableIdentifier() {
        const termNode = this.getTermNode(), variableIdentifier = termNode.getVariableIdentifier();
        return variableIdentifier;
    }
    matchTermNode(termNode) {
        const node = termNode, nodeMatches = this.matchNode(node), termNodeMatches = nodeMatches; ///
        return termNodeMatches;
    }
    compareVariableIdentifier(variableIdentifier) {
        let comparesToVariableIdentifier = false;
        const singular = this.isSingular();
        if (singular) {
            const variableIdentifierA = variableIdentifier; ///
            variableIdentifier = this.getVariableIdentifier();
            const variableIdentifierB = variableIdentifier;
            comparesToVariableIdentifier = variableIdentifierA === variableIdentifierB;
        }
        return comparesToVariableIdentifier;
    }
    findValidTerm(context) {
        const termNode = this.getTermNode(), term = context.findTermByTermNode(termNode), validTerm = term; ///
        return validTerm;
    }
    isEqualTo(term) {
        const termNode = term.getNode(), termNodeMatches = this.matchTermNode(termNode), equalTo = termNodeMatches; ///
        return equalTo;
    }
    isGrounded(definedVariables, context) {
        const term = this, variables = (0, _equivalence.variablesFromTerm)(term, context);
        filter(variables, (variable)=>{
            const definedVariablesIncludesVariable = definedVariables.includes(variable);
            if (!definedVariablesIncludesVariable) {
                return true;
            }
        });
        const undefinedVariables = variables, undefinedVariablesLength = undefinedVariables.length, grounded = undefinedVariablesLength <= 1;
        return grounded;
    }
    isSingular() {
        const termNode = this.getTermNode(), singular = termNode.isSingular();
        return singular;
    }
    isProvisional() {
        return this.type.isProvisional();
    }
    isInitiallyGrounded(context) {
        const term = this, variables = (0, _equivalence.variablesFromTerm)(term, context), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
        return initiallyGrounded;
    }
    isImplicitlyGrounded(definedVariables, context) {
        const grounded = this.isGrounded(definedVariables, context), implicitlyGrounded = grounded; ///
        return implicitlyGrounded;
    }
    compareParameter(parameter) {
        let comparesToParamter = false;
        const singular = this.isSingular();
        if (singular) {
            const parameterIdentifier = parameter.getIdentifier();
            if (parameterIdentifier !== null) {
                const variableIdentifier = this.getVariableIdentifier();
                if (parameterIdentifier === variableIdentifier) {
                    comparesToParamter = true;
                }
            }
        }
        return comparesToParamter;
    }
    validate(context, validateForwards) {
        let term = null;
        const termString = this.getString(); ///
        context.trace(`Validating the '${termString}' term...`);
        const validTerm = this.findValidTerm(context), valid = validTerm !== null;
        if (valid) {
            term = validTerm; ///
            context.debug(`...the '${termString}' term is already valid.`);
            const validatesForward = validateForwards(term);
            if (!validatesForward) {
                term = null;
            }
        } else {
            const validates = _validation.validateTerms.some((validateTerm)=>{
                const term = this, termValidates = validateTerm(term, context, validateForwards);
                if (termValidates) {
                    return true;
                }
            });
            if (validates) {
                term = this; ///
                context.addTerm(term);
                context.debug(`...validated the '${termString}' term.`);
            }
        }
        return term;
    }
    validateGivenType(type, context) {
        let term;
        const typeString = type.getString(), termString = this.getString(); ///
        context.trace(`Validating the '${termString}' term given the '${typeString}' type...`);
        let validatesGivenType = false;
        term = this.validate(context, (term)=>{
            let validatesForwards = false;
            const termType = term.getType(), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
            if (termTypeEqualToOrSubTypeOfType) {
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (term !== null) {
            validatesGivenType = true;
        }
        if (validatesGivenType) {
            context.debug(`...validated the '${termString}' term given the '${typeString}' type.`);
        }
        return term;
    }
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(), type = typeJSON, json = {
            string,
            type
        };
        return json;
    }
    static name = "Term";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context);
            context = null;
            const term = new Term(context, string, node, type);
            return term;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlSWRlbnRpZmllcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGxldCBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJBID0gdmFyaWFibGVJZGVudGlmaWVyOyAvLy9cblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyQiA9IHZhcmlhYmxlSWRlbnRpZmllcjtcblxuICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9ICh2YXJpYWJsZUlkZW50aWZpZXJBID09PSB2YXJpYWJsZUlkZW50aWZpZXJCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFRlcm0gPSB0aGlzLmZpbmRWYWxpZFRlcm0oY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRUZXJtICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyh0ZXJtKTtcblxuICAgICAgaWYgKCF2YWxpZGF0ZXNGb3J3YXJkKSB7XG4gICAgICAgIHRlcm0gPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm1zLnNvbWUoKHZhbGlkYXRlVGVybSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHRlcm0gPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc0dpdmVuVHlwZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGluc3RhbnRpYXRlVGVybShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiB0ZXJtO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsIm1hdGNoVGVybU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyQSIsInZhcmlhYmxlSWRlbnRpZmllckIiLCJmaW5kVmFsaWRUZXJtIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInZhbGlkVGVybSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc1Byb3Zpc2lvbmFsIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVySWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZCIsImRlYnVnIiwidmFsaWRhdGVzRm9yd2FyZCIsInZhbGlkYXRlcyIsInZhbGlkYXRlVGVybXMiLCJzb21lIiwidmFsaWRhdGVUZXJtIiwidGVybVZhbGlkYXRlcyIsImFkZFRlcm0iLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUZXJtIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7MkJBQ087MEJBRVI7eUJBQ0s7NEJBQ0U7NkJBQ0U7NkJBQ0U7c0JBQ1c7QUFFN0MsTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBR0MseUJBQWM7TUFFakMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDdkMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsUUFBUUYsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUcsY0FBYztRQUNaLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxXQUFXTixNQUFP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