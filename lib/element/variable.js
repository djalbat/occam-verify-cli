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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _string = require("../utilities/string");
const _element = require("../utilities/element");
const _json = require("../utilities/json");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const _default = (0, _elements.define)(class Variable extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, type, identifier, provisional){
        super(context, string, node, breakPoint);
        this.type = type;
        this.identifier = identifier;
        this.provisional = provisional;
    }
    getType() {
        return this.type;
    }
    getIdentifier() {
        return this.identifier;
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
    getVariableNode() {
        const node = this.getNode(), variableNode = node; //
        return variableNode;
    }
    getTypeString() {
        return this.type.getString();
    }
    isEstablished() {
        const provisional = this.isProvisional(), established = !provisional;
        return established;
    }
    isIdentifierEqualTo(identifier) {
        const identifierEqualTo = this.identifier === identifier;
        return identifierEqualTo;
    }
    compareVariable(variable) {
        const variableIdentifier = variable.getIdentifier(), comparesToVariable = this.identifier === variableIdentifier;
        return comparesToVariable;
    }
    compareParamter(parameter) {
        const identifier = parameter.getIdentifier(), identifierEqualTo = this.isIdentifierEqualTo(identifier), comparesToParamter = identifierEqualTo; ///
        return comparesToParamter;
    }
    compareVariableIdentifier(variableIdentifier) {
        const identifier = variableIdentifier, identifierEqualTo = this.isIdentifierEqualTo(identifier), comparesToVariableIdentifier = identifierEqualTo; ///
        return comparesToVariableIdentifier;
    }
    validate(context) {
        let variable = null;
        const variableString = this.getString(); ///
        context.trace(`Validating the '${variableString}' variable...`);
        let validates = false;
        const variableIdentifier = this.identifier, declaredVariable = context.findDeclaredVariableByVariableIdentifier(variableIdentifier);
        if (declaredVariable !== null) {
            const type = declaredVariable.getType(), typeString = type.getString(), provisional = declaredVariable.isProvisional(), variableString = this.getString(), provisinallyString = (0, _string.provisionallyStringFromProvisional)(provisional);
            context.trace(`Setting the '${variableString}' variable's type to the '${typeString}' type${provisinallyString}.`);
            this.type = type;
            this.provisional = provisional;
            variable = this;
            validates = true;
        } else {
            context.debug(`The '${variableString}' variable is not present.`);
        }
        if (validates) {
            context.debug(`...validated the '${variableString}' variable.`);
        }
        return variable;
    }
    unifyTerm(term, generalContext, specificContext) {
        let termUnifies = false;
        const context = specificContext, termString = term.getString(), variableString = this.getString(); ///
        context.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);
        const variable = this, termVariableUnifies = this.unifyTermVariable(term, generalContext, specificContext);
        if (termVariableUnifies) {
            termUnifies = true;
        } else {
            const variableNode = variable.getNode(), derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);
            if (derivedSubstitution !== null) {
                const derivedSubstitutionTermComparesToTerm = derivedSubstitution.compareTerm(term, context);
                if (derivedSubstitutionTermComparesToTerm) {
                    const derivedSubstitutionString = derivedSubstitution.getString();
                    context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                    termUnifies = true;
                }
            } else {
                const { TermSubstitution } = _elements.default;
                let termSubstitution;
                termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, generalContext, specificContext);
                termSubstitution = termSubstitution.validate(context); ///
                const derivedSubstitution = termSubstitution; ///
                context.addDerivedSubstitution(derivedSubstitution);
                termUnifies = true;
            }
        }
        if (termUnifies) {
            context.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
        }
        return termUnifies;
    }
    unifyTermVariable(term, generalContext, specificContext) {
        let termVariableUnifies = false;
        const context = specificContext, termString = term.getString(), variableString = this.getString(); ///
        context.trace(`Unifying the '${termString}' term's variable with the '${variableString}' variable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const variableNode = this.getVariableNode(), variableNodeMatches = term.matchVariableNode(variableNode);
            if (variableNodeMatches) {
                termVariableUnifies = true;
            }
        }
        if (termVariableUnifies) {
            context.debug(`...unified the '${termString}' term's variable with the '${variableString}' variable.`);
        }
        return termVariableUnifies;
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
    static name = "Variable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVariableNode)(variableNode, context), provisional = (0, _json.provisionalFromJSON)(json, context);
            context = null;
            const variable = new Variable(context, string, node, breakPoint, type, identifier, provisional);
            return variable;
        }, context);
    }
    static fromTerm(term, context) {
        const termNode = term.getNode(), variable = (0, _element.variableFromTermNode)(termNode, context);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21UZXJtTm9kZSwgaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgaWRlbnRpZmllciwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICBpc0VzdGFibGlzaGVkKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyRXF1YWxUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJFcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZSA9ICh0aGlzLmlkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtdGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKGRlY2xhcmVkVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBkZWNsYXJlZFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBkZWNsYXJlZFZhcmlhYmxlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcHJvdmlzaW5hbGx5U3RyaW5nID0gcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyB0eXBlIHRvIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSR7cHJvdmlzaW5hbGx5U3RyaW5nfS5gKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuXG4gICAgICB2YXJpYWJsZSA9IHRoaXM7XG5cbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlUZXJtVmFyaWFibGUodGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25UZXJtQ29tcGFyZXNUb1Rlcm0gPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uVGVybUNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZyA9IGRlcml2ZWRTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZ30nIGRlcml2ZWQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZXJpdmVkU3Vic3RpdHV0aW9uKGRlcml2ZWRTdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtVmFyaWFibGUodGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB2YXJpYWJsZSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICB0ZXJtVmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB2YXJpYWJsZSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgYnJlYWtQb2ludCB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgaWRlbnRpZmllciwgcHJvdmlzaW9uYWwpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJpZGVudGlmaWVyIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiZ2V0SWRlbnRpZmllciIsImlzUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VHlwZVN0cmluZyIsImdldFN0cmluZyIsImlzRXN0YWJsaXNoZWQiLCJlc3RhYmxpc2hlZCIsImlzSWRlbnRpZmllckVxdWFsVG8iLCJpZGVudGlmaWVyRXF1YWxUbyIsImNvbXBhcmVWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlIiwiY29tcGFyZVBhcmFtdGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWNsYXJlZFZhcmlhYmxlIiwiZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInR5cGVTdHJpbmciLCJwcm92aXNpbmFsbHlTdHJpbmciLCJwcm92aXNpb25hbGx5U3RyaW5nRnJvbVByb3Zpc2lvbmFsIiwiZGVidWciLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJ0ZXJtVmFyaWFibGVVbmlmaWVzIiwidW5pZnlUZXJtVmFyaWFibGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uIiwiZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsImRlcml2ZWRTdWJzdGl0dXRpb25UZXJtQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsImRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmciLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImFkZERlcml2ZWRTdWJzdGl0dXRpb24iLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVWYXJpYWJsZSIsInR5cGVGcm9tSlNPTiIsImlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21UZXJtIiwidGVybU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCO2tFQUVIO3lCQUdPOzZCQUNRO3dCQUNlO3lCQUNjO3NCQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRWhHLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDNUUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBSSxRQUFRTixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBTyxlQUFlTCxXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFNLGtCQUFrQjtRQUNoQixNQUFNVixPQUFPLElBQUksQ0FBQ1csT0FBTyxJQUNuQkMsZUFBZVosTUFBTyxFQUFFO1FBRTlCLE9BQU9ZO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQUUsT0FBTyxJQUFJLENBQUNYLElBQUksQ0FBQ1ksU0FBUztJQUFJO0lBRWhEQyxnQkFBZ0I7UUFDZCxNQUFNWCxjQUFjLElBQUksQ0FBQ0cs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