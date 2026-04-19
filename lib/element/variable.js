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
const _breakPoint = require("../utilities/breakPoint");
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
    static name = "Variable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVariableNode)(variableNode, context), provisional = (0, _json.provisionalFromJSON)(json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21UZXJtTm9kZSwgaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgaWRlbnRpZmllciwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICBpc0VzdGFibGlzaGVkKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyRXF1YWxUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJFcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZSA9ICh0aGlzLmlkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtdGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKGRlY2xhcmVkVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBkZWNsYXJlZFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBkZWNsYXJlZFZhcmlhYmxlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcHJvdmlzaW5hbGx5U3RyaW5nID0gcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyB0eXBlIHRvIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSR7cHJvdmlzaW5hbGx5U3RyaW5nfS5gKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuXG4gICAgICB2YXJpYWJsZSA9IHRoaXM7XG5cbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlUZXJtVmFyaWFibGUodGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25UZXJtQ29tcGFyZXNUb1Rlcm0gPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uVGVybUNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZyA9IGRlcml2ZWRTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZ30nIGRlcml2ZWQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZXJpdmVkU3Vic3RpdHV0aW9uKGRlcml2ZWRTdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtVmFyaWFibGUodGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB2YXJpYWJsZSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICB0ZXJtVmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB2YXJpYWJsZSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZVZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidHlwZSIsImlkZW50aWZpZXIiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRJZGVudGlmaWVyIiwiaXNQcm92aXNpb25hbCIsInNldFR5cGUiLCJzZXRQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNFc3RhYmxpc2hlZCIsImVzdGFibGlzaGVkIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZVZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGUiLCJjb21wYXJlUGFyYW10ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsInZhbGlkYXRlIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsImRlY2xhcmVkVmFyaWFibGUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidHlwZVN0cmluZyIsInByb3Zpc2luYWxseVN0cmluZyIsInByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwiLCJkZWJ1ZyIsInVuaWZ5VGVybSIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsInRlcm1WYXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVRlcm1WYXJpYWJsZSIsImRlcml2ZWRTdWJzdGl0dXRpb24iLCJmaW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwiZGVyaXZlZFN1YnN0aXR1dGlvblRlcm1Db21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwiZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZyIsIlRlcm1TdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwiYWRkRGVyaXZlZFN1YnN0aXR1dGlvbiIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInByb3Zpc2lvbmFsSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVmFyaWFibGUiLCJicmVha1BvaW50RnJvbUpTT04iLCJ0eXBlRnJvbUpTT04iLCJpZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSIsInByb3Zpc2lvbmFsRnJvbUpTT04iLCJmcm9tVGVybSIsInRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDt5QkFHTzs2QkFDUTt3QkFDZTs0QkFDWTt5QkFDRTtzQkFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUVoRyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQzVFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFVBQVU7SUFDeEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUksUUFBUU4sSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQU8sZUFBZUwsV0FBVyxFQUFFO1FBQzFCLElB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