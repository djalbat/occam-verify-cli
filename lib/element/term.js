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
        const termNodeB = termNode, termNodeAAMatchesTermBNodeB = termNodeA.match(termNodeB), termNodeMatches = termNodeAAMatchesTermBNodeB; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHZhbGlkYXRlVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlQSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpO1xuXG4gICAgY29uc3QgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyQSA9IHZhcmlhYmxlSWRlbnRpZmllcjsgLy8vXG5cbiAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllckIgPSB2YXJpYWJsZUlkZW50aWZpZXI7XG5cbiAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSAodmFyaWFibGVJZGVudGlmaWVyQSA9PT0gdmFyaWFibGVJZGVudGlmaWVyQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBmaW5kVmFsaWRUZXJtKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhbGlkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkVGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gdGVybU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHsgcmV0dXJuIHRoaXMudHlwZS5pc1Byb3Zpc2lvbmFsKCk7IH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVySWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJJZGVudGlmaWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRUZXJtID0gdGhpcy5maW5kVmFsaWRUZXJtKGNvbnRleHQpLFxuICAgICAgICAgIHZhbGlkID0gKHZhbGlkVGVybSAhPT0gbnVsbCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXNGb3J3YXJkKSB7XG4gICAgICAgIHRlcm0gPSB2YWxpZFRlcm07IC8vL1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm1zLnNvbWUoKHZhbGlkYXRlVGVybSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzR2l2ZW5UeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gaW5zdGFudGlhdGVUZXJtKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgICAgcmV0dXJuIHRlcm07XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZ2V0VGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVBQU1hdGNoZXNUZXJtQk5vZGVCIiwibWF0Y2giLCJ0ZXJtTm9kZU1hdGNoZXMiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhcmlhYmxlSWRlbnRpZmllckEiLCJ2YXJpYWJsZUlkZW50aWZpZXJCIiwiZmluZFZhbGlkVGVybSIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ2YWxpZFRlcm0iLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybSIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNQcm92aXNpb25hbCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlcklkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjsyQkFDTzswQkFFUjt5QkFDRzs0QkFDSTs2QkFDRTs2QkFDRTtzQkFDVztBQUU3QyxNQUFNLEVBQUVBLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztNQUVqQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFD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