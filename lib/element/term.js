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
    constructor(context, string, node, lineIndex, type, provisional){
        super(context, string, node, lineIndex, provisional);
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), provisionalJSON = (0, _json.provisionalToProvisionalJSON)(this.provisional), string = this.getString(), lineIndex = this.getBreakPoint(), type = typeJSON, provisional = provisionalJSON, json = {
            string,
            lineIndex,
            type,
            provisional
        };
        return json;
    }
    static name = "Term";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json, context);
            context = null;
            const term = new Term(context, string, node, lineIndex, type, provisional);
            return term;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBwcm92aXNpb25hbEZyb21KU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHByb3Zpc2lvbmFsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHByb3Zpc2lvbmFsKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgaXNFc3RhYmxpc2hlZCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIGVzdGFibGlzaGVkID0gIXByb3Zpc2lvbmFsO1xuXG4gICAgcmV0dXJuIGVzdGFibGlzaGVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGxldCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gdGVybU5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBmaW5kVmFsaWRUZXJtKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhbGlkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkVGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkVGVybSA9IHRoaXMuZmluZFZhbGlkVGVybShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB2YWxpZFRlcm07IC8vL1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyh0ZXJtKTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm0gPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm1zLnNvbWUoKHZhbGlkYXRlVGVybSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHRlcm0gPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc0dpdmVuVHlwZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gdGhpcyxcbiAgICAgICAgICBzcGVjaWZpY1Rlcm0gPSB0ZXJtLFxuICAgICAgICAgIGdlbmVyYWxUZXJtU3RyaW5nID0gZ2VuZXJhbFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaXhUZXJtU3RyaW5nID0gc3BlY2lmaWNUZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZml4VGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFRlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVRlcm1JbnRyaW5zaWNhbGx5KGdlbmVyYWxUZXJtLCBzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaXhUZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsVGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGluc3RhbnRpYXRlVGVybShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB0ZXJtO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiaXNQcm92aXNpb25hbCIsInNldFR5cGUiLCJzZXRQcm92aXNpb25hbCIsImdldFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiaXNFc3RhYmxpc2hlZCIsImVzdGFibGlzaGVkIiwiaXNFcXVhbFRvIiwidGVybSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJlcXVhbFRvIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybSIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVCIiwidmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCIiwibWF0Y2giLCJjb21wYXJlVGVybSIsImNvbXBhcmVzVG8iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVySWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmaW5kVmFsaWRUZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidmFsaWRUZXJtIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGVzRm9yd2FyZCIsImRlYnVnIiwidmFsaWRhdGVUZXJtcyIsInNvbWUiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtVmFsaWRhdGVzIiwiYWRkVGVybSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInVuaWZ5VGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJnZW5lcmFsVGVybSIsInNwZWNpZmljVGVybSIsImdlbmVyYWxUZXJtU3RyaW5nIiwic3BlY2lmaXhUZXJtU3RyaW5nIiwidGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlUZXJtSW50cmluc2ljYWxseSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiZ2V0QnJlYWtQb2ludCIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybSIsInR5cGVGcm9tSlNPTiIsInByb3Zpc2lvbmFsRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7O2dDQWJ3QjsyQkFDTzswQkFFUjt5QkFDSzs0QkFDRTs2QkFDRTs2QkFDRTt1QkFDSztzQkFDeUQ7QUFFaEcsTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBR0MseUJBQWM7TUFFakMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsV0FBVyxDQUFFO1FBQy9ELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0U7UUFFeEMsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsV0FBVztJQUN6QjtJQUVBRyxRQUFRSixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBSyxlQUFlSixXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFLLGNBQWM7UUFDWixNQUFNUixPQUFPLElBQUksQ0FBQ1MsT0FBTyxJQUNuQkMsV0FBV1YsTUFBTyxHQUFHO1FBRTNCLE9BQU9VO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQ2hCLE1BQU1ELFdBQVcsSUFBSSxDQUFDRixXQUFXLElBQzNCSSxlQUFlRixTQUFTQyxlQUFlO1FBRTdDLE9BQU9DO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQ3RCLE1BQU1ILFdBQVcsSUFBSSxDQUFDRixXQUFX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