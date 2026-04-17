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
const _breakPoint = require("../utilities/breakPoint");
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
            let validatesForwards;
            const provisional = type.isProvisional();
            term.setType(type);
            term.setProvisional(provisional);
            validatesForwards = true;
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
            const { string } = json, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), type = (0, _json.typeFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json, context);
            context = null;
            const term = new Term(context, string, node, breakPoint, type, provisional);
            return term;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBwcm92aXNpb25hbEZyb21KU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgcHJvdmlzaW9uYWwpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlSWRlbnRpZmllcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBpc0VzdGFibGlzaGVkKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gdGVybU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHRlcm1Ob2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSB0ZXJtTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcklkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJJZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRUZXJtID0gdGhpcy5maW5kVmFsaWRUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuVHlwZSA9IGZhbHNlO1xuXG4gICAgdGVybSA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgY29uc3QgcHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB0ZXJtLnNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFRlcm0gPSB0aGlzLFxuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHRlcm0sXG4gICAgICAgICAgZ2VuZXJhbFRlcm1TdHJpbmcgPSBnZW5lcmFsVGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpeFRlcm1TdHJpbmcgPSBzcGVjaWZpY1Rlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaXhUZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsVGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5VGVybUludHJpbnNpY2FsbHkoZ2VuZXJhbFRlcm0sIHNwZWNpZmljVGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpeFRlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxUZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsSlNPTiA9IHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04odGhpcy5wcm92aXNpb25hbCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgdGVybU5vZGUgPSBpbnN0YW50aWF0ZVRlcm0oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB0ZXJtO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidHlwZSIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImlzRXN0YWJsaXNoZWQiLCJlc3RhYmxpc2hlZCIsImlzRXF1YWxUbyIsInRlcm0iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZXF1YWxUbyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoIiwiY29tcGFyZVRlcm0iLCJjb21wYXJlc1RvIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlcklkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiZmluZFZhbGlkVGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInZhbGlkVGVybSIsInZhbGlkYXRlIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlc0ZvcndhcmQiLCJkZWJ1ZyIsInZhbGlkYXRlVGVybXMiLCJzb21lIiwidmFsaWRhdGVUZXJtIiwidGVybVZhbGlkYXRlcyIsImFkZFRlcm0iLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInVuaWZ5VGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJnZW5lcmFsVGVybSIsInNwZWNpZmljVGVybSIsImdlbmVyYWxUZXJtU3RyaW5nIiwic3BlY2lmaXhUZXJtU3RyaW5nIiwidGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlUZXJtSW50cmluc2ljYWxseSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm0iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0eXBlRnJvbUpTT04iLCJwcm92aXNpb25hbEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7Z0NBZHdCOzJCQUNPOzBCQUVSO3lCQUNLOzRCQUNFOzZCQUNFOzZCQUNFO3VCQUNLOzRCQUN3QjtzQkFDaUM7QUFFaEcsTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBR0MseUJBQWM7TUFFakMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsV0FBVyxDQUFFO1FBQ2hFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUU7UUFFekMsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsV0FBVztJQUN6QjtJQUVBRyxRQUFRSixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBSyxlQUFlSixXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFL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