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
    constructor(context, string, node, type, identifier, propertyRelations){
        super(context, string, node);
        this.type = type;
        this.identifier = identifier;
        this.propertyRelations = propertyRelations;
    }
    getIdentifier() {
        return this.identifier;
    }
    getType() {
        return this.type;
    }
    getPropertyRelations() {
        return this.propertyRelations;
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), identifierJSON = (0, _json.identifierToIdentifierJSON)(this.identifier), propertyRelationsJSON = (0, _json.propertyRelationsToPropertyRelationsJSON)(this.propertyRelations), type = typeJSON, identifier = identifierJSON, propertyRelations = propertyRelationsJSON, string = this.getString(), json = {
            string,
            type,
            identifier,
            propertyRelations
        };
        return json;
    }
    static name = "Variable";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdHlwZVRvVHlwZUpTT04sIGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OLCBwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICBpc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyRXF1YWxUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJFcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtdGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcixcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhcmlhYmxlLFxuICAgICAgICBzdWJzdGl0dXRpb247XG5cbiAgICB2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29udGV4dDtcblxuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAodGVybVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04odGhpcy5pZGVudGlmaWVyKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uc0pTT04gPSBwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OKHRoaXMucHJvcGVydHlSZWxhdGlvbnMpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVySlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbnMiLCJzZXRUeXBlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvIiwiY29tcGFyZVBhcmFtdGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImRlYnVnIiwidmFsaWRhdGVUeXBlIiwidHlwZVZhbGlkYXRlcyIsInR5cGVTdHJpbmciLCJwcmVmaXhlZFR5cGVOYW1lIiwiZ2V0UHJlZml4ZWROYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwidGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJpZGVudGlmaWVySlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwicHJvcGVydHlSZWxhdGlvbnNKU09OIiwicHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjtrRUFFSDtzQkFHZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUVyRyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQixDQUFFO1FBQ3RFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFD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