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
        let validates;
        const variableString = this.getString(); ///
        context.trace(`Validating the '${variableString}' variable...`);
        const variableIdentifier = this.identifier, variable = context.findVariableByVariableIdentifier(variableIdentifier);
        if (variable !== null) {
            const type = variable.getType();
            this.type = type;
            validates = true;
        } else {
            context.debug(`The '${variableString}' variable is not present.`);
        }
        if (validates) {
            context.debug(`...validated the '${variableString}' variable.`);
        }
        return validates;
    }
    validateType(context) {
        let typeValidates = false;
        const typeString = this.type.getString();
        context.trace(`Validating the '${typeString}' type...`);
        const prefixedTypeName = this.type.getPrefixedName(), type = context.findTypeByPrefixedTypeName(prefixedTypeName);
        if (type === null) {
            context.debug(`The '${typeString}' type is not present.`);
        } else {
            this.type = type; ///
            typeValidates = true;
        }
        if (typeValidates) {
            context.debug(`...validated the '${typeString}' type.`);
        }
        return typeValidates;
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
                const { TermSubstitution } = _elements.default;
                let termSubstitution;
                termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context);
                termSubstitution = termSubstitution.validate(generalContext, specificContext); ///
                if (termSubstitution !== null) {
                    termUnifies = true;
                }
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
        const variable = (0, _context.literally)((context)=>{
            const { string } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVarialbeNode)(variableNode, context);
            context = null;
            const variable = new Variable(context, string, node, type, identifier);
            return variable;
        }, context);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVZhcmlhYmxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZVN0cmluZygpIHsgcmV0dXJuIHRoaXMudHlwZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXJFcXVhbFRvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllckVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW10ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICB0eXBlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFyaWFibGUsXG4gICAgICAgIHN1YnN0aXR1dGlvbjtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0gPSBzdWJzdGl0dXRpb24uY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSkge1xuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInZhbGlkYXRlVHlwZSIsInR5cGVWYWxpZGF0ZXMiLCJ0eXBlU3RyaW5nIiwicHJlZml4ZWRUeXBlTmFtZSIsImdldFByZWZpeGVkTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlVmFyaWFibGUiLCJ0eXBlRnJvbUpTT04iLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCO2tFQUVIO3lCQUdLOzZCQUNVO3lCQUNPO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQ25ELEtBQUssQ0FBQ0os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