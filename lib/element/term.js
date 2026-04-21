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
const _validation = require("../process/validation");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVUZXJtcyB9IGZyb20gXCIuLi9wcm9jZXNzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VcIjtcbmltcG9ydCB7IHVuaWZ5VGVybUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiwgcHJvdmlzaW9uYWxGcm9tSlNPTiwgcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHByb3Zpc2lvbmFsKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgaXNFc3RhYmxpc2hlZCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIGVzdGFibGlzaGVkID0gIXByb3Zpc2lvbmFsO1xuXG4gICAgcmV0dXJuIGVzdGFibGlzaGVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGxldCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gdGVybU5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBmaW5kVmFsaWRUZXJtKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhbGlkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkVGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkVGVybSA9IHRoaXMuZmluZFZhbGlkVGVybShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB2YWxpZFRlcm07IC8vL1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm0gPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm1zLnNvbWUoKHZhbGlkYXRlVGVybSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcyk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHRlcm0gPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtLCBjb250ZXh0KSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB0eXBlRXN0YWJsaXNoZWQgPSB0eXBlLmlzRXN0YWJsaXNoZWQoKSxcbiAgICAgICAgICAgICAgdGVybVByb3Zpc2lvbmFsID0gdGVybS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgaWYgKHR5cGVFc3RhYmxpc2hlZCAmJiB0ZXJtUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNHaXZlblR5cGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsVGVybSA9IHRoaXMsXG4gICAgICAgICAgc3BlY2lmaWNUZXJtID0gdGVybSxcbiAgICAgICAgICBnZW5lcmFsVGVybVN0cmluZyA9IGdlbmVyYWxUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZml4VGVybVN0cmluZyA9IHNwZWNpZmljVGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpeFRlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxUZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlUZXJtSW50cmluc2ljYWxseShnZW5lcmFsVGVybSwgc3BlY2lmaWNUZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZml4VGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFRlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTih0aGlzLnByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGluc3RhbnRpYXRlVGVybShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHRlcm07XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVGVybSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0eXBlIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiaXNQcm92aXNpb25hbCIsInNldFR5cGUiLCJzZXRQcm92aXNpb25hbCIsImdldFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiaXNFc3RhYmxpc2hlZCIsImVzdGFibGlzaGVkIiwiaXNFcXVhbFRvIiwidGVybSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJlcXVhbFRvIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybSIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVCIiwidmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCIiwibWF0Y2giLCJjb21wYXJlVGVybSIsImNvbXBhcmVzVG8iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVySWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmaW5kVmFsaWRUZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidmFsaWRUZXJtIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGVzRm9yd2FyZCIsImRlYnVnIiwidmFsaWRhdGVUZXJtcyIsInNvbWUiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtVmFsaWRhdGVzIiwiYWRkVGVybSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInR5cGVFc3RhYmxpc2hlZCIsInRlcm1Qcm92aXNpb25hbCIsInVuaWZ5VGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJnZW5lcmFsVGVybSIsInNwZWNpZmljVGVybSIsImdlbmVyYWxUZXJtU3RyaW5nIiwic3BlY2lmaXhUZXJtU3RyaW5nIiwidGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlUZXJtSW50cmluc2ljYWxseSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm0iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0eXBlRnJvbUpTT04iLCJwcm92aXNpb25hbEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7Z0NBZHdCOzJCQUNPOzBCQUVSO3lCQUNLOzRCQUNFOzZCQUNFOzZCQUNFO3VCQUNLOzRCQUN3QjtzQkFDaUM7QUFFaEcsTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBR0MseUJBQWM7TUFFakMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxN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