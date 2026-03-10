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
            const type = variable.getType();
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
        const variable = (0, _context.literally)((context)=>{
            const { string } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVarialbeNode)(variableNode, context);
            context = null;
            const variable = new Variable(context, string, node, type, identifier);
            return variable;
        }, context);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVZhcmlhYmxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7aWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUsIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZVN0cmluZygpIHsgcmV0dXJuIHRoaXMudHlwZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXJFcXVhbFRvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllckVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW10ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuXG4gICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIHZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YXJpYWJsZSxcbiAgICAgICAgc3Vic3RpdHV0aW9uO1xuXG4gICAgdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gaW5zdGFudGlhdGVWYXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyKTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImdldFR5cGUiLCJzZXRUeXBlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvIiwiY29tcGFyZVBhcmFtdGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImRlYnVnIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlVmFyaWFibGUiLCJ0eXBlRnJvbUpTT04iLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCO2tFQUVIO3lCQUdLOzZCQUNVO3lCQUMrQjtzQkFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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