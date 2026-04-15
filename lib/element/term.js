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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), provisionalJSON = (0, _json.provisionalToProvisionalJSON)(this.provisional), string = this.getString(), lineIndex = this.getLineIndex(), type = typeJSON, provisional = provisionalJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IHsgdW5pZnlUZXJtSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OLCBwcm92aXNpb25hbEZyb21KU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHByb3Zpc2lvbmFsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHByb3Zpc2lvbmFsKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgaXNFc3RhYmxpc2hlZCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIGVzdGFibGlzaGVkID0gIXByb3Zpc2lvbmFsO1xuXG4gICAgcmV0dXJuIGVzdGFibGlzaGVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGxldCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gdGVybU5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBmaW5kVmFsaWRUZXJtKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhbGlkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkVGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkVGVybSA9IHRoaXMuZmluZFZhbGlkVGVybShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB2YWxpZFRlcm07IC8vL1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyh0ZXJtKTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm0gPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm1zLnNvbWUoKHZhbGlkYXRlVGVybSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHRlcm0gPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc0dpdmVuVHlwZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gdGhpcyxcbiAgICAgICAgICBzcGVjaWZpY1Rlcm0gPSB0ZXJtLFxuICAgICAgICAgIGdlbmVyYWxUZXJtU3RyaW5nID0gZ2VuZXJhbFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaXhUZXJtU3RyaW5nID0gc3BlY2lmaWNUZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZml4VGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFRlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVRlcm1JbnRyaW5zaWNhbGx5KGdlbmVyYWxUZXJtLCBzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaXhUZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsVGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gaW5zdGFudGlhdGVUZXJtKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHRlcm07XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVGVybSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJpc1Byb3Zpc2lvbmFsIiwic2V0VHlwZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJpc0VzdGFibGlzaGVkIiwiZXN0YWJsaXNoZWQiLCJpc0VxdWFsVG8iLCJ0ZXJtIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImVxdWFsVG8iLCJpc0dyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNvbXBhcmVUZXJtIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZpbmRWYWxpZFRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ2YWxpZFRlcm0iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiZGVidWciLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidW5pZnlUZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwiZ2VuZXJhbFRlcm1TdHJpbmciLCJzcGVjaWZpeFRlcm1TdHJpbmciLCJ0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVRlcm1JbnRyaW5zaWNhbGx5IiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInByb3Zpc2lvbmFsSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iLCJwcm92aXNpb25hbEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OztnQ0Fid0I7MkJBQ087MEJBRVI7eUJBQ0s7NEJBQ0U7NkJBQ0U7NkJBQ0U7dUJBQ0s7c0JBQ3lEO0FBRWhHLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO01BRWpDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsQ0FBRTtRQUMvRCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdFO1FBRXhDLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFdBQVc7SUFDekI7SUFFQUcsUUFBUUosSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUssZUFBZUosV0FBVyxFQUFFO1FBQzFCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtJQUNyQjtJQUVBSyxjQUFjO1FBQ1osTUFBTVIsT0FBTyxJQUFJLENBQUNTLE9BQU8sSUFDbkJDLFdBQVdWLE1BQU8sR0FBRztRQUUzQixPQUFPVTtJQUNUO0lBRUFDLGtCQUFrQjtRQUNoQixNQUFNRCxXQUFXLElBQUksQ0FBQ0YsV0FBVyxJQUMzQkksZUFBZUYsU0FBU0MsZUFBZTtRQUU3QyxPQUFPQztJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixNQUFNSCxXQUFXLElBQUksQ0FBQ0YsV0FBVyxJ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