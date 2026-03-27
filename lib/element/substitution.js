"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
const _occamlanguages = require("occam-languages");
const _occamfurtle = require("occam-furtle");
const { primitiveFromNode } = _occamfurtle.primitiveUtilities;
class Substitution extends _occamlanguages.Element {
    getPrimitive(context) {
        const replacementNode = this.getReplacementNode(), node = replacementNode, primitive = primitiveFromNode(node, context);
        return primitive;
    }
    getSubstitutionNode() {
        const node = this.getNode(), substitutionNode = node; ///
        return substitutionNode;
    }
    isEqualTo(substitution) {
        const substitutionNode = substitution.getNode(), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), equalTo = substitutionNodeMatches; ///
        return equalTo;
    }
    isComplex() {
        const simple = this.isSimple(), complex = !simple;
        return complex;
    }
    isNonTrivial() {
        const trivial = this.isTrivial(), nonTrivlal = !trivial;
        return nonTrivlal;
    }
    getVariable() {
        const variable = null;
        return variable;
    }
    getMetavariable() {
        const metavariable = null;
        return metavariable;
    }
    getSubstitution() {
        const substitution = null;
        return substitution;
    }
    getVariableNode() {
        const variableNode = null;
        return variableNode;
    }
    getMetavariableNode() {
        const metavariableNode = null;
        return metavariableNode;
    }
    isSimple() {
        const simple = true;
        return simple;
    }
    matchSubstitutionNode(substitutionNode) {
        const node = substitutionNode, nodeMatches = this.matchNode(node), substitutionNodeMatches = nodeMatches; ///
        return substitutionNodeMatches;
    }
    compareParameter(parameter) {
        const comparesToParameter = false;
        return comparesToParameter;
    }
    findValidSubstitution(context) {
        const substitutionNode = this.getSubstitutionNode(), substitution = context.findSubstitutionBySubstitutionNode(substitutionNode), validSubstitution = substitution; ///
        return validSubstitution;
    }
    resolve(substitutions, generalContext, specificContext) {
        const resolved = true;
        return resolved;
    }
    toJSON() {
        const { name } = this.constructor, string = this.getString(), json = {
            name,
            string
        };
        return json;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQcmltaXRpdmUoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMuZ2V0UmVwbGFjZW1lbnROb2RlKCksXG4gICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNOb25Ucml2aWFsKCkge1xuICAgIGNvbnN0IHRyaXZpYWwgPSB0aGlzLmlzVHJpdmlhbCgpLFxuICAgICAgICAgIG5vblRyaXZsYWwgPSAhdHJpdmlhbDtcblxuICAgIHJldHVybiBub25Ucml2bGFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUGFyYW1ldGVyID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJwcmltaXRpdmVVdGlsaXRpZXMiLCJFbGVtZW50IiwiZ2V0UHJpbWl0aXZlIiwiY29udGV4dCIsInJlcGxhY2VtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsIm5vZGUiLCJwcmltaXRpdmUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImVxdWFsVG8iLCJpc0NvbXBsZXgiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImNvbXBsZXgiLCJpc05vblRyaXZpYWwiLCJ0cml2aWFsIiwiaXNUcml2aWFsIiwibm9uVHJpdmxhbCIsImdldFZhcmlhYmxlIiwidmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVzb2x2ZWQiLCJ0b0pTT04iLCJuYW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnQ0FMRzs2QkFDVztBQUVuQyxNQUFNLEVBQUVDLGlCQUFpQixFQUFFLEdBQUVDLCtCQUFrQjtBQUVoQyxNQUFNRixxQkFBcUJHLHVCQUFPO0lBQy9DQyxhQUFhQyxPQUFPLEVBQUU7UUFDcEIsTUFBTUMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLElBQ3pDQyxPQUFPRixpQkFDUEcsWUFBWVIsa0JBQWtCTyxNQUFNSDtRQUUxQyxPQUFPSTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNRixPQUFPLElBQUksQ0FBQ0csT0FBTyxJQUNuQkMsbUJBQW1CSixNQUFNLEdBQUc7UUFFbEMsT0FBT0k7SUFDVDtJQUVBQyxVQUFVQyxZQUFZLEVBQUU7UUFDdEIsTUFBTUYsbUJBQW1CRSxhQUFhSCxPQUFPLElBQ3ZDSSwwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0osbUJBQ3JESyxVQUFVRix5QkFBMEIsR0FBRztRQUU3QyxPQUFPRTtJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNQyxTQUFTLElBQUksQ0FBQ0MsUUFBUSxJQUN0QkMsVUFBVSxDQUFDRjtRQUVqQixPQUFPRTtJQUNUO0lBRUFDLGVBQWU7UUFDYixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsU0FBUyxJQUN4QkMsYUFBYSxDQUFDRjtRQUVwQixPQUFPRTtJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQyxXQUFXO1FBRWpCLE9BQU9BO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQ2hCLE1BQU1DLGVBQWU7UUFFckIsT0FBT0E7SUFDVDtJQUVBQyxrQkFBa0I7UUFDaEIsTUFBTWhCLGVBQWU7UUFFckIsT0FBT0E7SUFDVDtJQUVBaUIsa0JBQWtCO1FBQ2hCLE1BQU1DLGVBQWU7UUFFckIsT0FBT0E7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsTUFBTUMsbUJBQW1CO1FBRXpCLE9BQU9BO0lBQ1Q7SUFFQWQsV0FBVztRQUNULE1BQU1ELFNBQVM7UUFFZixPQUFPQTtJQUNUO0lBRUFILHNCQUFzQkosZ0JBQWdCLEVBQUU7UUFDdEMsTUFBTUosT0FBT0ksa0JBQ1B1QixjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDNUIsT0FDN0JPLDBCQUEwQm9CLGFBQWEsR0FBRztRQUVoRCxPQUFPcEI7SUFDVDtJQUVBc0IsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsTUFBTUMsc0JBQXNCO1FBRTVCLE9BQU9BO0lBQ1Q7SUFFQUMsc0JBQXNCbkMsT0FBTyxFQUFFO1FBQzdCLE1BQU1PLG1CQUFtQixJQUFJLENBQUNGLG1CQUFtQixJQUMzQ0ksZUFBZVQsUUFBUW9DLGtDQUFrQyxDQUFDN0IsbUJBQzFEOEIsb0JBQW9CNUIsY0FBZSxHQUFHO1FBRTVDLE9BQU80QjtJQUNUO0lBRUFDLFFBQVFDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDdEQsTUFBTUMsV0FBVztRQUVqQixPQUFPQTtJQUNUO0lBRUFDLFNBQVM7UUFDUCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzNCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUyxJQUN2QkMsT0FBTztZQUNMSDtZQUNBQztRQUNGO1FBRU4sT0FBT0U7SUFDVDtBQUNGIn0=