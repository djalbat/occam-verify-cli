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
            const variableNode = variable.getIdentifier();
            variable = context.findVariableByVariableNode(variableNode);
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
    static fromTerm(term, context) {
        const termNode = term.getNode(), variable = (0, _element.variableFromTermNode)(termNode, context);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdmFyaWFibGVGcm9tVGVybU5vZGUsIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZVN0cmluZygpIHsgcmV0dXJuIHRoaXMudHlwZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXJFcXVhbFRvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllckVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW10ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAoZGVjbGFyZWRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IGRlY2xhcmVkVmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgU2V0dGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzIHR5cGUgdG8gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFyaWFibGUsXG4gICAgICAgIHN1YnN0aXR1dGlvbjtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0gPSBzdWJzdGl0dXRpb24uY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSkge1xuICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0eXBlU3RyaW5nIiwiZGVidWciLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVZhcmlhYmxlIiwidHlwZUZyb21KU09OIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJmcm9tVGVybSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7a0VBRUg7eUJBR087NkJBQ1E7c0JBQ1M7eUJBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFakUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQ25ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxRQUFRSixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBSyxrQkFBa0I7UUFDaEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGVBQWVSLE1BQU8sRUFBRTtRQUU5QixPQUFPUTtJQUNUO0lBRUFDLGdCQUFnQjtRQUFFLE9BQU8sSUFBSSxDQUFDUixJQUFJLENBQUNTLFNBQVM7SUFBSTtJQUVoREMsb0JBQW9CVCxVQUFVLEVBQUU7UUFDOUIsTUFBTVUsb0JBQXFCLElBQUksQ0FBQ1YsVUFBVSxLQUFLQTtRQUUvQyxPQUFPVTtJQUNUO0lBRUFDLFFBQVFDLFFBQVEsRUFBRTtRQUNoQixNQUFNQyxxQkFBcUJELFNBQVNYLGFBQWEsSUFDM0NhLGFBQWMsSUFBSSxDQUFDZCxVQUFVLEtBQUthO1FBRXhDLE9BQU9DO0lBQ1Q7SUFFQUMsZ0JBQWdCQyxTQUFTLEVBQUU7UUFDekIsTUFBTWhCLGFBQWFnQixVQUFVZixhQUFhLElBQ3BDUyxvQkFBb0IsSUFBSSxDQUFDRCxtQkFBbUIsQ0FBQ1QsYUFDN0NpQixxQkFBcUJQLG1CQUFtQixHQUFHO1FBRWpELE9BQU9PO0lBQ1Q7SUFFQUMsMEJBQTBCTCxrQkFBa0IsRUFBRTtRQUM1QyxNQUFNYixhQUFhYSxvQkFDYkgsb0JBQW9CLElBQUksQ0FBQ0QsbUJBQW1CLENBQUNULGFBQzdDbUIsK0JBQStCVCxtQkFBbUIsR0FBRztRQUUzRCxPQUFPUztJQUNUO0lBRUFDLFNBQVN4QixPQUFPLEVBQUU7UUFDaEIsSUFBSWdCLFdBQVc7UUFFZixNQUFNUyxpQkFBaUIsSUFBSSxDQUFDYixTQUFTLElBQUksR0FBRztRQUU1Q1osUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRCxlQUFlLGFBQWEsQ0FBQztRQUU5RCxJQUFJRSxZQUFZO1FBRWhCLE1BQU1WLHFCQUFxQixJQUFJLENBQUNiLFVBQVUsRUFDcEN3QixtQkFBbUI1QixRQUFRNkIsd0NBQXdDLENBQUNaO1FBRTFFLElBQUlXLHFCQUFxQixNQUFNO1lBQzdCLE1BQU16QixPQUFPeUIsaUJBQWlCdEIsT0FBTyxJQUMvQndCLGFBQWEzQixLQUFLUyxTQUFTLElBQzNCYSxpQkFBaUIsSUFBSSxDQUFDYixTQUFTLElBQUssR0FBRztZQUU3Q1osUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRUQsZUFBZSwwQkFBMEIsRUFBRUssV0FBVyxPQUFPLENBQUM7WUFFNUYsSUFBSSxDQUFDM0IsSUFBSSxHQUFHQTtZQUVad0IsWUFBWTtRQUNkLE9BQU87WUFDTDNCLFFBQVErQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVOLGVBQWUsMEJBQTBCLENBQUM7UUFDbEU7UUFFQSxJQUFJRSxXQUFXO1lBQ2JYLFdBQVcsSUFBSSxFQUFHLEdBQUc7WUFFckJoQixRQUFRK0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLGVBQWUsV0FBVyxDQUFDO1FBQ2hFO1FBRUEsT0FBT1Q7SUFDVDtJQUVBZ0IsVUFBVUMsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUMvQyxJQUFJQyxjQUFjO1FBRWxCLE1BQU1wQyxVQUFVbUMsaUJBQ1ZFLGFBQWFKLEtBQUtyQixTQUFTLElBQzNCYSxpQkFBaUIsSUFBSSxDQUFDYixTQUFTLElBQUksR0FBRztRQUU1Q1osUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRVcsV0FBVyxpQkFBaUIsRUFBRVosZUFBZSxhQUFhLENBQUM7UUFFMUYsSUFBSVQsVUFDQXNCO1FBRUp0QixXQUFXLElBQUksRUFBRSxHQUFHO1FBRXBCLE1BQU1DLHFCQUFxQkQsU0FBU1gsYUFBYTtRQUVqRGlDLGVBQWV0QyxRQUFRdUMsb0NBQW9DLENBQUN0QjtRQUU1RCxJQUFJcUIsaUJBQWlCLE1BQU07WUFDekIsTUFBTUUsNkJBQTZCRixhQUFhRyxXQUFXLENBQUNSLE1BQU1qQztZQUVsRSxJQUFJd0MsNEJBQTRCO2dCQUM5QixNQUFNRSxtQkFBbUJKLGNBQ25CSyx5QkFBeUJELGlCQUFpQjlCLFNBQVM7Z0JBRXpEWixRQUFRMEIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFaUIsdUJBQXVCLHVDQUF1QyxDQUFDO2dCQUVyRlAsY0FBYztZQUNoQjtRQUNGLE9BQU87WUFDTCxJQUFJcEM7WUFFSkEsVUFBVWtDLGdCQUFpQixHQUFHO1lBRTlCLE1BQU14QixlQUFlTSxTQUFTWCxhQUFhO1lBRTNDVyxXQUFXaEIsUUFBUTRDLDBCQUEwQixDQUFDbEM7WUFFOUNWLFVBQVVtQyxpQkFBa0IsR0FBRztZQUUvQixNQUFNVSxXQUFXWixLQUFLeEIsT0FBTztZQUU3QndCLE9BQU9qQyxRQUFROEMsa0JBQWtCLENBQUNEO1lBRWxDLE1BQU1FLFdBQVdkLEtBQUszQixPQUFPLElBQ3ZCMEMsZUFBZWhDLFNBQVNWLE9BQU8sSUFDL0IyQyx5Q0FBeUNGLFNBQVNHLG9CQUFvQixDQUFDRjtZQUU3RSxJQUFJQyx3Q0FBd0M7Z0JBQzFDLE1BQU0sRUFBRUUsZ0JBQWdCLEVBQUUsR0FBR0MsaUJBQVEsRUFDL0JWLG1CQUFtQlMsaUJBQWlCRSxtQkFBbUIsQ0FBQ3BCLE1BQU1qQixVQUFVaEI7Z0JBRTlFMEMsaUJBQWlCbEIsUUFBUSxDQUFDVSxnQkFBZ0JDO2dCQUUxQ0MsY0FBYztZQUNoQjtRQUNGO1FBRUEsSUFBSUEsYUFBYTtZQUNmcEMsUUFBUStCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFTSxXQUFXLGlCQUFpQixFQUFFWixlQUFlLFdBQVcsQ0FBQztRQUM1RjtRQUVBLE9BQU9XO0lBQ1Q7SUFFQWtCLFNBQVM7UUFDUCxNQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ3JELElBQUksR0FDbkNBLE9BQU9vRCxVQUNQdEQsU0FBUyxJQUFJLENBQUNXLFNBQVMsSUFDdkI2QyxPQUFPO1lBQ0x4RDtZQUNBRTtRQUNGO1FBRU4sT0FBT3NEO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFdBQVc7SUFFekIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFekQsT0FBTyxFQUFFO1FBQzdCLE9BQU80RCxJQUFBQSxvQkFBVyxFQUFDLENBQUM1RDtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHd0QsTUFDYi9DLGVBQWVtRCxJQUFBQSxnQ0FBbUIsRUFBQzVELFFBQVFELFVBQzNDRSxPQUFPUSxjQUNQUCxPQUFPMkQsSUFBQUEsa0JBQVksRUFBQ0wsTUFBTXpELFVBQzFCSSxhQUFhMkQsSUFBQUEsbUNBQTBCLEVBQUNyRCxjQUFjVjtZQUU1REEsVUFBVTtZQUVWLE1BQU1nQixXQUFXLElBQUlsQixTQUFTRSxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztZQUUzRCxPQUFPWTtRQUNULEdBQUdoQjtJQUNMO0lBRUEsT0FBT2dFLFNBQVMvQixJQUFJLEVBQUVqQyxPQUFPLEVBQUU7UUFDN0IsTUFBTTZDLFdBQVdaLEtBQUt4QixPQUFPLElBQ3ZCTyxXQUFXaUQsSUFBQUEsNkJBQW9CLEVBQUNwQixVQUFVN0M7UUFFaEQsT0FBT2dCO0lBQ1Q7QUFDRiJ9