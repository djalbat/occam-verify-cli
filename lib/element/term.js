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
        const termNodeA = termNode; ///
        termNode = this.getTermNode();
        const termNodeB = termNode, termNodeAAMatchesTermBNodeB = termNodeA.match(termNodeB), equalTo = termNodeAAMatchesTermBNodeB; ///
        return equalTo;
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
            const validatesForward = validateForwards();
            if (validatesForward) {
                term = validTerm; ///
                context.debug(`...the '${termString}' term is already valid.`);
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
        let validatesGivenType = false;
        const typeString = type.getString(), termString = this.getString(); ///
        context.trace(`Validating the '${termString}' term given the '${typeString}' type...`);
        const term = this.validate(context, ()=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (term !== null) {
            const termType = term.getType(), termTypeEqualToOrSubTypeOfGivenTypeType = termType.isEqualToOrSubTypeOf(type);
            if (termTypeEqualToOrSubTypeOfGivenTypeType) {
                validatesGivenType = true;
            }
        }
        if (validatesGivenType) {
            context.debug(`...validated the '${termString}' term given the '${typeString}' type.`);
        }
        return validatesGivenType;
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
        const term = (0, _context.literally)((context)=>{
            const { string } = json, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context);
            context = null;
            const term = new Term(context, string, node, type);
            return term;
        }, context);
        return term;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHZhbGlkYXRlVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlQSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpO1xuXG4gICAgY29uc3QgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGxldCBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJBID0gdmFyaWFibGVJZGVudGlmaWVyOyAvLy9cblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyQiA9IHZhcmlhYmxlSWRlbnRpZmllcjtcblxuICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9ICh2YXJpYWJsZUlkZW50aWZpZXJBID09PSB2YXJpYWJsZUlkZW50aWZpZXJCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFRlcm0gPSB0aGlzLmZpbmRWYWxpZFRlcm0oY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRUZXJtICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNHaXZlblR5cGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlblR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgdGVybU5vZGUgPSBpbnN0YW50aWF0ZVRlcm0oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgICByZXR1cm4gdGVybTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUIiLCJtYXRjaCIsImVxdWFsVG8iLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhcmlhYmxlSWRlbnRpZmllckEiLCJ2YXJpYWJsZUlkZW50aWZpZXJCIiwiZmluZFZhbGlkVGVybSIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ2YWxpZFRlcm0iLCJpc0VxdWFsVG8iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc1Byb3Zpc2lvbmFsIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVySWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZCIsInZhbGlkYXRlc0ZvcndhcmQiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInZhbGlkYXRlVGVybXMiLCJzb21lIiwidmFsaWRhdGVUZXJtIiwidGVybVZhbGlkYXRlcyIsImFkZFRlcm0iLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInZhbGlkYXRlc0dpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlVGVybSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPOzBCQUVSO3lCQUNHOzRCQUNJOzZCQUNFOzZCQUNFO3NCQUNXO0FBRTdDLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO01BRWpDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFD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