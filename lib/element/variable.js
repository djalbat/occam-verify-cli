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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVZhcmlhYmxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZVN0cmluZygpIHsgcmV0dXJuIHRoaXMudHlwZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXJFcXVhbFRvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllckVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW10ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFyaWFibGUsXG4gICAgICAgIHN1YnN0aXR1dGlvbjtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0gPSBzdWJzdGl0dXRpb24uY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSkge1xuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInVuaWZ5VGVybSIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVZhcmlhYmxlIiwidHlwZUZyb21KU09OIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dDQVZ3QjtrRUFFSDt5QkFHSzs2QkFDVTt5QkFDTztzQkFD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