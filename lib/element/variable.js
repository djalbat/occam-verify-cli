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
    constructor(context, string, node, type, identifier){
        super(context, string, node);
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
    compare(variable) {
        const variableIdentifier = variable.getIdentifier(), comparesTo = this.identifier === variableIdentifier;
        return comparesTo;
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
        const variableIdentifier = this.identifier;
        variable = context.findVariableByVariableIdentifier(variableIdentifier);
        if (variable !== null) {
            const type = variable.getType(), typeString = type.getString(), variableString = this.getString(); ///
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
        let variable, substitution;
        variable = this; ///
        const variableIdentifier = variable.getIdentifier();
        substitution = context.findSubstitutionByVariableIdentifier(variableIdentifier);
        if (substitution !== null) {
            const substitutionComparesToTerm = substitution.compareTerm(term, context);
            if (substitutionComparesToTerm) {
                const termSubstitution = substitution, termSubstitutionString = termSubstitution.getString();
                context.trace(`The '${termSubstitutionString}' term substitution is already present.`);
                termUnifies = true;
            }
        } else {
            let context;
            context = generalContext; ///
            const variableIdentifier = variable.getIdentifier();
            variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            const termNode = term.getNode();
            term = context.findTermByTermNode(termNode);
            const termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
            if (termTypeEqualToOrSubTypeOfVariableType) {
                const { TermSubstitution } = _elements.default, termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context);
                termSubstitution.validate(generalContext, specificContext);
                termUnifies = true;
            }
        }
        if (termUnifies) {
            context.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
        }
        return termUnifies;
    }
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), type = typeJSON, string = this.getString(), json = {
            string,
            type
        };
        return json;
    }
    static name = "Variable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVarialbeNode)(variableNode, context);
            context = null;
            const variable = new Variable(context, string, node, type, identifier);
            return variable;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHtpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSwgdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllckVxdWFsVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyRXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXI7XG5cbiAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyB0eXBlIHRvIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhcmlhYmxlLFxuICAgICAgICBzdWJzdGl0dXRpb247XG5cbiAgICB2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGVybVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZVZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VHlwZVN0cmluZyIsImdldFN0cmluZyIsImlzSWRlbnRpZmllckVxdWFsVG8iLCJpZGVudGlmaWVyRXF1YWxUbyIsImNvbXBhcmUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG8iLCJjb21wYXJlUGFyYW10ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsInZhbGlkYXRlIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidHlwZVN0cmluZyIsImRlYnVnIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwidGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVmFyaWFibGUiLCJ0eXBlRnJvbUpTT04iLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCO2tFQUVIO3lCQUdPOzZCQUNRO3lCQUMrQjtzQkFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU3QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFFBQVFKLElBQUksRUFBRTtRQUNaLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtJQUNkO0lBRUFLLGtCQUFrQjtRQUNoQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZUFBZVIsTUFBTyxFQUFFO1FBRTlCLE9BQU9RO0lBQ1Q7SUFFQUMsZ0JB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