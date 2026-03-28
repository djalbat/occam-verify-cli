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
    constructor(context, string, node, generalContext){
        super(context, string, node);
        this.generalContext = generalContext;
    }
    getGeneralContext() {
        return this.generalContext;
    }
    getPrimitive(context) {
        const replacementNode = this.getReplacementNode(), node = replacementNode, primitive = primitiveFromNode(node, context);
        return primitive;
    }
    getSubstitutionNode() {
        const node = this.getNode(), substitutionNode = node; ///
        return substitutionNode;
    }
    getSpecificContext() {
        const context = this.getContext(), specificContext = context; ///
        return specificContext;
    }
    setGeneralContext(generalContext) {
        this.generalContext = generalContext;
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
    matchVariableNode(variableNode) {
        const variableNodeMatches = false;
        return variableNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        const metavariableNodeMatches = false;
        return metavariableNodeMatches;
    }
    matchSubstitutionNode(substitutionNode) {
        const node = substitutionNode, nodeMatches = this.matchNode(node), substitutionNodeMatches = nodeMatches; ///
        return substitutionNodeMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldEdlbmVyYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpIHtcbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNOb25Ucml2aWFsKCkge1xuICAgIGNvbnN0IHRyaXZpYWwgPSB0aGlzLmlzVHJpdmlhbCgpLFxuICAgICAgICAgIG5vblRyaXZsYWwgPSAhdHJpdmlhbDtcblxuICAgIHJldHVybiBub25Ucml2bGFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuXG4gIGZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJwcmltaXRpdmVVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0IiwiZ2V0UHJpbWl0aXZlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicHJpbWl0aXZlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInNldEdlbmVyYWxDb250ZXh0IiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJlcXVhbFRvIiwiaXNDb21wbGV4Iiwic2ltcGxlIiwiaXNTaW1wbGUiLCJjb21wbGV4IiwiaXNOb25Ucml2aWFsIiwidHJpdmlhbCIsImlzVHJpdmlhbCIsIm5vblRyaXZsYWwiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsInRvSlNPTiIsIm5hbWUiLCJnZXRTdHJpbmciLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dDQUxHOzZCQUNXO0FBRW5DLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUUsR0FBRUMsK0JBQWtCO0FBRWhDLE1BQU1GLHFCQUFxQkcsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsY0FBYyxDQUFFO1FBQ2pELEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO0lBQ3hCO0lBRUFDLG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQ0QsY0FBYztJQUM1QjtJQUVBRSxhQUFhTCxPQUFPLEVBQUU7UUFDcEIsTUFBTU0sa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLElBQ3pDTCxPQUFPSSxpQkFDUEUsWUFBWVgsa0JBQWtCSyxNQUFNRjtRQUUxQyxPQUFPUTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsbUJBQW1CVCxNQUFNLEdBQUc7UUFFbEMsT0FBT1M7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsTUFBTVosVUFBVSxJQUFJLENBQUNhLFVBQVUsSUFDekJDLGtCQUFrQmQsU0FBVSxHQUFHO1FBRXJDLE9BQU9jO0lBQ1Q7SUFFQUMsa0JBQWtCWixjQUFjLEVBQUU7UUFDaEMsSUFBSSxDQUFDQSxjQUFjLEdBQUdBO0lBQ3hCO0lBRUFhLFVBQVVDLFlBQVksRUFBRTtRQUN0QixNQUFNTixtQkFBbUJNLGFBQWFQLE9BQU8sSUFDdkNRLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDUixtQkFDckRTLFVBQVVGLHlCQUEwQixHQUFHO1FBRTdDLE9BQU9FO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLFNBQVMsSUFBSSxDQUFDQyxRQUFRLElBQ3RCQyxVQUFVLENBQUNGO1FBRWpCLE9BQU9FO0lBQ1Q7SUFFQUMsZUFBZTtRQUNiLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLElBQ3hCQyxhQUFhLENBQUNGO1FBRXBCLE9BQU9FO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLFdBQVc7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFDLGtCQUFrQjtRQUNoQixNQUFNaEIsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFpQixrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUI7UUFFekIsT0FBT0E7SUFDVDtJQUVBZCxXQUFXO1FBQ1QsTUFBTUQsU0FBUztRQUVmLE9BQU9BO0lBQ1Q7SUFFQWdCLGtCQUFrQkgsWUFBWSxFQUFFO1FBQzlCLE1BQU1JLHNCQUFzQjtRQUU1QixPQUFPQTtJQUNUO0lBRUFDLHNCQUFzQkgsZ0JBQWdCLEVBQUU7UUFDdEMsTUFBTUksMEJBQTBCO1FBRWhDLE9BQU9BO0lBQ1Q7SUFFQXRCLHNCQUFzQlIsZ0JBQWdCLEVBQUU7UUFDdEMsTUFBTVQsT0FBT1Msa0JBQ1ArQixjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDekMsT0FDN0JnQiwwQkFBMEJ3QixhQUFhLEdBQUc7UUFFaEQsT0FBT3hCO0lBQ1Q7SUFHQTBCLHNCQUFzQjVDLE9BQU8sRUFBRTtRQUM3QixNQUFNVyxtQkFBbUIsSUFBSSxDQUFDRixtQkFBbUIsSUFDM0NRLGVBQWVqQixRQUFRNkMsa0NBQWtDLENBQUNsQyxtQkFDMURtQyxvQkFBb0I3QixjQUFlLEdBQUc7UUFFNUMsT0FBTzZCO0lBQ1Q7SUFFQUMsUUFBUUMsYUFBYSxFQUFFN0MsY0FBYyxFQUFFVyxlQUFlLEVBQUU7UUFDdEQsTUFBTW1DLFdBQVc7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUMzQmxELFNBQVMsSUFBSSxDQUFDbUQsU0FBUyxJQUN2QkMsT0FBTztZQUNMRjtZQUNBbEQ7UUFDRjtRQUVOLE9BQU9vRDtJQUNUO0FBQ0YifQ==