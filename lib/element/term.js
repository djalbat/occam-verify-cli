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
    constructor(context, string, node, breakPoint, type, provisional){
        super(context, string, node, breakPoint, provisional);
        this.type = type;
        this.provisional = provisional;
    }
    getType() {
        return this.type;
    }
    isProvisional() {
        return this.provisional;
    }
    setType(type) {
        this.type = type;
    }
    setProvisional(provisional) {
        this.provisional = provisional;
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
    isEstablished() {
        const provisional = this.isProvisional(), established = !provisional;
        return established;
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
        let variableNodeMatches = false;
        const singular = this.isSingular();
        if (singular) {
            const variableNodeA = variableNode; ///
            variableNode = this.getVariableNode();
            const variableNodeB = variableNode, variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);
            if (variableNodeAMatchesVariableNodeB) {
                variableNodeMatches = true; ///
            }
        }
        return variableNodeMatches;
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), provisionalJSON = (0, _json.provisionalToProvisionalJSON)(this.provisional), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const type = typeJSON, provisional = provisionalJSON, json = {
            string,
            breakPoint,
            type,
            provisional
        };
        return json;
    }
    static name = "Term";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json, context);
            context = null;
            const term = new Term(context, string, node, breakPoint, type, provisional);
            return term;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBwcm92aXNpb25hbEZyb21KU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgcHJvdmlzaW9uYWwpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlSWRlbnRpZmllcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBpc0VzdGFibGlzaGVkKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gdGVybU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHRlcm1Ob2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSB0ZXJtTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcklkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJJZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRUZXJtID0gdGhpcy5maW5kVmFsaWRUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuVHlwZSA9IGZhbHNlO1xuXG4gICAgdGVybSA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFRlcm0gPSB0aGlzLFxuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHRlcm0sXG4gICAgICAgICAgZ2VuZXJhbFRlcm1TdHJpbmcgPSBnZW5lcmFsVGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpeFRlcm1TdHJpbmcgPSBzcGVjaWZpY1Rlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaXhUZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsVGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5VGVybUludHJpbnNpY2FsbHkoZ2VuZXJhbFRlcm0sIHNwZWNpZmljVGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpeFRlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxUZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsSlNPTiA9IHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04odGhpcy5wcm92aXNpb25hbCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50LnRvSlNPTigpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGluc3RhbnRpYXRlVGVybShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgcHJvdmlzaW9uYWwpO1xuXG4gICAgICByZXR1cm4gdGVybTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJpc1Byb3Zpc2lvbmFsIiwic2V0VHlwZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJpc0VzdGFibGlzaGVkIiwiZXN0YWJsaXNoZWQiLCJpc0VxdWFsVG8iLCJ0ZXJtIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImVxdWFsVG8iLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNvbXBhcmVUZXJtIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZpbmRWYWxpZFRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ2YWxpZFRlcm0iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiZGVidWciLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidW5pZnlUZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwiZ2VuZXJhbFRlcm1TdHJpbmciLCJzcGVjaWZpeFRlcm1TdHJpbmciLCJ0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVRlcm1JbnRyaW5zaWNhbGx5IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInByb3Zpc2lvbmFsSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iLCJwcm92aXNpb25hbEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OztnQ0Fid0I7MkJBQ087MEJBRVI7eUJBQ0s7NEJBQ0U7NkJBQ0U7NkJBQ0U7dUJBQ0s7c0JBQ3lEO0FBRWhHLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO01BRWpDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsQ0FBRTtRQUNoRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlFO1FBRXpDLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFdBQVc7SUFDekI7SUFFQUcsUUFBUUosSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUssZUFBZUosV0FBVyxFQUFFO1FBQzFCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtJQUNyQjtJQUVBSyxjQUFjO1FBQ1osTUFBTVIsT0FBTyxJQUFJLENBQUNTLE9BQU8sSUFDbkJDLFdBQVdWLE1BQU8sR0FBRztRQUUzQixPQUFPVTtJQUNU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