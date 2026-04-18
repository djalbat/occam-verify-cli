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
            const validatesForward = validateForwards(term, context);
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
        term = this.validate(context, (term, context)=>{
            let validatesForwards = false;
            const termType = term.getType(), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
            if (termTypeEqualToOrSubTypeOfType) {
                validatesForwards = true;
                const typeEstablished = type.isEstablished(), termProvisional = term.isProvisional();
                if (typeEstablished && termProvisional) {
                    validatesForwards = false;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBwcm92aXNpb25hbEZyb21KU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgcHJvdmlzaW9uYWwpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlSWRlbnRpZmllcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBpc0VzdGFibGlzaGVkKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gdGVybU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IHRlcm1Ob2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSB0ZXJtTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcklkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJJZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRUZXJtID0gdGhpcy5maW5kVmFsaWRUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuVHlwZSA9IGZhbHNlO1xuXG4gICAgdGVybSA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKHRlcm0sIGNvbnRleHQpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVFc3RhYmxpc2hlZCA9IHR5cGUuaXNFc3RhYmxpc2hlZCgpLFxuICAgICAgICAgICAgICB0ZXJtUHJvdmlzaW9uYWwgPSB0ZXJtLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICBpZiAodHlwZUVzdGFibGlzaGVkICYmIHRlcm1Qcm92aXNpb25hbCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc0dpdmVuVHlwZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gdGhpcyxcbiAgICAgICAgICBzcGVjaWZpY1Rlcm0gPSB0ZXJtLFxuICAgICAgICAgIGdlbmVyYWxUZXJtU3RyaW5nID0gZ2VuZXJhbFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaXhUZXJtU3RyaW5nID0gc3BlY2lmaWNUZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZml4VGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFRlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVRlcm1JbnRyaW5zaWNhbGx5KGdlbmVyYWxUZXJtLCBzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaXhUZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsVGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gaW5zdGFudGlhdGVUZXJtKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgcHJvdmlzaW9uYWwpO1xuXG4gICAgICByZXR1cm4gdGVybTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJpc1Byb3Zpc2lvbmFsIiwic2V0VHlwZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJpc0VzdGFibGlzaGVkIiwiZXN0YWJsaXNoZWQiLCJpc0VxdWFsVG8iLCJ0ZXJtIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImVxdWFsVG8iLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNvbXBhcmVUZXJtIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZpbmRWYWxpZFRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ2YWxpZFRlcm0iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiZGVidWciLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidHlwZUVzdGFibGlzaGVkIiwidGVybVByb3Zpc2lvbmFsIiwidW5pZnlUZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwiZ2VuZXJhbFRlcm1TdHJpbmciLCJzcGVjaWZpeFRlcm1TdHJpbmciLCJ0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVRlcm1JbnRyaW5zaWNhbGx5IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInByb3Zpc2lvbmFsSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInR5cGVGcm9tSlNPTiIsInByb3Zpc2lvbmFsRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OztnQ0Fkd0I7MkJBQ087MEJBRVI7eUJBQ0s7NEJBQ0U7NkJBQ0U7NkJBQ0U7dUJBQ0s7NEJBQ3dCO3NCQUNpQztBQUVoRyxNQUFNLEVBQUVBLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztNQUVqQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFD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