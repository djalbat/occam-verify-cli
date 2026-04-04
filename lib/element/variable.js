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
const _json = require("../utilities/json");
const _element = require("../utilities/element");
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
    constructor(context, string, node, lineIndex, type, identifier){
        super(context, string, node, lineIndex);
        this.type = type;
        this.identifier = identifier;
    }
    getIdentifier() {
        return this.identifier;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getVariableNode() {
        const node = this.getNode(), variableNode = node; //
        return variableNode;
    }
    getTypeString() {
        return this.type.getString();
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
            const type = declaredVariable.getType(), typeString = type.getString(), variableString = this.getString(); ///
            context.trace(`Setting the '${variableString}' variable's type to the '${typeString}' type.`);
            this.type = type;
            validates = true;
        } else {
            context.debug(`The '${variableString}' variable is not present.`);
        }
        if (validates) {
            variable = this; ///
            context.debug(`...validated the '${variableString}' variable.`);
        }
        return variable;
    }
    unifyTerm(term, generalContext, specificContext) {
        let termUnifies = false;
        const context = specificContext, termString = term.getString(), variableString = this.getString(); ///
        context.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);
        let variable, derivedSubstitution;
        variable = this; ///
        const variableNode = variable.getNode();
        derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);
        if (derivedSubstitution !== null) {
            const derivedSubstitutionComparesToTerm = derivedSubstitution.compareTerm(term, context);
            if (derivedSubstitutionComparesToTerm) {
                const derivedSubstitutionString = derivedSubstitution.getString();
                context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                termUnifies = true;
            }
        } else {
            let context;
            context = generalContext; ///
            const variableNode = variable.getNode();
            variable = context.findVariableByVariableNode(variableNode);
            context = specificContext; ///
            const termNode = term.getNode();
            term = context.findTermByTermNode(termNode);
            const termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
            if (termTypeEqualToOrSubTypeOfVariableType) {
                const { TermSubstitution } = _elements.default, termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, generalContext, specificContext);
                termSubstitution.validate(context);
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
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), type = typeJSON, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex,
            type
        };
        return json;
    }
    static name = "Variable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVarialbeNode)(variableNode, context);
            context = null;
            const variable = new Variable(context, string, node, lineIndex, type, identifier);
            return variable;
        }, context);
    }
    static fromTerm(term, context) {
        const termNode = term.getNode(), variable = (0, _element.variableFromTermNode)(termNode, context);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdmFyaWFibGVGcm9tVGVybU5vZGUsIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICBpc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyRXF1YWxUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJFcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZSA9ICh0aGlzLmlkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtdGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKGRlY2xhcmVkVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBkZWNsYXJlZFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyB0eXBlIHRvIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhcmlhYmxlLFxuICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uO1xuXG4gICAgdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIGRlcml2ZWRTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0gPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmcgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb24oZGVyaXZlZFN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyKTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImdldFR5cGUiLCJzZXRUeXBlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZSIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0eXBlU3RyaW5nIiwiZGVidWciLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJkZXJpdmVkU3Vic3RpdHV0aW9uIiwiZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsImRlcml2ZWRTdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwiZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImFkZERlcml2ZWRTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVWYXJpYWJsZSIsInR5cGVGcm9tSlNPTiIsImlkZW50aWZpZXJGcm9tVmFy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