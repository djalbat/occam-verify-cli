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
const _unify = require("../process/unify");
const _json = require("../utilities/json");
const { filter } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Term extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, type){
        super(context, string, node, lineIndex);
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
    getVariableNode() {
        const termNode = this.getTermNode(), variableNode = termNode.getVariableNode();
        return variableNode;
    }
    getVariableIdentifier() {
        const termNode = this.getTermNode(), variableIdentifier = termNode.getVariableIdentifier();
        return variableIdentifier;
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
    matchTermNode(termNode) {
        const node = termNode, nodeMatches = this.matchNode(node), termNodeMatches = nodeMatches; ///
        return termNodeMatches;
    }
    matchVariableNode(variableNode) {
        let varialbeNodeMatches = false;
        const singular = this.isSingular();
        if (singular) {
            const variableNodeA = variableNode; ///
            variableNode = this.getVariableNode();
            const variableNodeB = variableNode, variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);
            if (variableNodeAMatchesVariableNodeB) {
                varialbeNodeMatches = true; ///
            }
        }
        return varialbeNodeMatches;
    }
    compareTerm(term) {
        const termNode = term.getNode(), termNodeMatches = this.matchNode(termNode), comparesTo = termNodeMatches; ///
        return comparesTo;
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
    findValidTerm(context) {
        const termNode = this.getTermNode(), term = context.findTermByTermNode(termNode), validTerm = term; ///
        return validTerm;
    }
    validate(context, validateForwards) {
        let term = null;
        const termString = this.getString(); ///
        context.trace(`Validating the '${termString}' term...`);
        let validates = false;
        const validTerm = this.findValidTerm(context);
        if (validTerm !== null) {
            term = validTerm; ///
            const validatesForward = validateForwards(term);
            if (validatesForward) {
                validates = true;
                context.debug(`...the '${termString}' term is already valid.`);
            } else {
                term = null;
            }
        } else {
            validates = _validation.validateTerms.some((validateTerm)=>{
                const term = this, termValidates = validateTerm(term, context, validateForwards);
                if (termValidates) {
                    return true;
                }
            });
            if (validates) {
                term = this; ///
                context.addTerm(term);
            }
        }
        if (validates) {
            context.debug(`...validated the '${termString}' term.`);
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
    unifyTerm(term, generalContext, specificContext) {
        let termUnifies = false;
        const context = specificContext, generalTerm = this, specificTerm = term, generalTermString = generalTerm.getString(), specifixTermString = specificTerm.getString();
        context.trace(`Unifying the '${specifixTermString}' term with the '${generalTermString}' term...`);
        const termUnifiesIntrinsically = (0, _unify.unifyTermIntrinsically)(generalTerm, specificTerm, generalContext, specificContext);
        if (termUnifiesIntrinsically) {
            termUnifies = true;
        }
        if (termUnifies) {
            context.debug(`...unified the '${specifixTermString}' term with the '${generalTermString}' term.`);
        }
        return termUnifies;
    }
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(), lineIndex = this.getLineIndex(), type = typeJSON, json = {
            string,
            lineIndex,
            type
        };
        return json;
    }
    static name = "Term";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context);
            context = null;
            const term = new Term(context, string, node, lineIndex, type);
            return term;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IHZhcmlhbGJlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgdmFyaWFsYmVOb2RlTWF0Y2hlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWxiZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSB0ZXJtTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcklkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJJZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRUZXJtID0gdGhpcy5maW5kVmFsaWRUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuVHlwZSA9IGZhbHNlO1xuXG4gICAgdGVybSA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFRlcm0gPSB0aGlzLFxuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHRlcm0sXG4gICAgICAgICAgZ2VuZXJhbFRlcm1TdHJpbmcgPSBnZW5lcmFsVGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpeFRlcm1TdHJpbmcgPSBzcGVjaWZpY1Rlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaXhUZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsVGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5VGVybUludHJpbnNpY2FsbHkoZ2VuZXJhbFRlcm0sIHNwZWNpZmljVGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpeFRlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxUZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgdGVybU5vZGUgPSBpbnN0YW50aWF0ZVRlcm0oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSk7XG5cbiAgICAgIHJldHVybiB0ZXJtO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImlzRXF1YWxUbyIsInRlcm0iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZXF1YWxUbyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImlzUHJvdmlzaW9uYWwiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWxiZU5vZGVNYXRjaGVzIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNvbXBhcmVUZXJtIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZpbmRWYWxpZFRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ2YWxpZFRlcm0iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiZGVidWciLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidW5pZnlUZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwiZ2VuZXJhbFRlcm1TdHJpbmciLCJzcGVjaWZpeFRlcm1TdHJpbmciLCJ0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVRlcm1JbnRyaW5zaWNhbGx5IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7Z0NBYndCOzJCQUNPOzBCQUVSO3lCQUNLOzRCQUNFOzZCQUNFOzZCQUNFO3VCQUNLO3NCQUNNO0FBRTdDLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO01BRWpDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUU7UUFDbEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsUUFBUUYsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUcsY0FBYztRQUNaLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxXQUFXUCxNQUFPLEdBQUc7UUFFM0IsT0FBT087SUFDVDtJQUVBQyxrQkFBa0I7UUFDaEIsTUFBTUQsV0FBVyxJQUFJLENBQUNGLFdBQVcsSUFDM0JJLGVBQWVGLFNBQVNDLGVBQWU7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