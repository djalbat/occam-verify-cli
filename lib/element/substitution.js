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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldEdlbmVyYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpIHtcbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNOb25Ucml2aWFsKCkge1xuICAgIGNvbnN0IHRyaXZpYWwgPSB0aGlzLmlzVHJpdmlhbCgpLFxuICAgICAgICAgIG5vblRyaXZsYWwgPSAhdHJpdmlhbDtcblxuICAgIHJldHVybiBub25Ucml2bGFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJwcmltaXRpdmVGcm9tTm9kZSIsInByaW1pdGl2ZVV0aWxpdGllcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJnZXRQcmltaXRpdmUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJwcmltaXRpdmUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic2V0R2VuZXJhbENvbnRleHQiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImVxdWFsVG8iLCJpc0NvbXBsZXgiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImNvbXBsZXgiLCJpc05vblRyaXZpYWwiLCJ0cml2aWFsIiwiaXNUcml2aWFsIiwibm9uVHJpdmxhbCIsImdldFZhcmlhYmxlIiwidmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsInRvSlNPTiIsIm5hbWUiLCJnZXRTdHJpbmciLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dDQUxHOzZCQUNXO0FBRW5DLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUUsR0FBRUMsK0JBQWtCO0FBRWhDLE1BQU1GLHFCQUFxQkcsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsY0FBYyxDQUFFO1FBQ2pELEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO0lBQ3hCO0lBRUFDLG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQ0QsY0FBYztJQUM1QjtJQUVBRSxhQUFhTCxPQUFPLEVBQUU7UUFDcEIsTUFBTU0sa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLElBQ3pDTCxPQUFPSSxpQkFDUEUsWUFBWVgsa0JBQWtCSyxNQUFNRjtRQUUxQyxPQUFPUTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsbUJBQW1CVCxNQUFNLEdBQUc7UUFFbEMsT0FBT1M7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsTUFBTVosVUFBVSxJQUFJLENBQUNhLFVBQVUsSUFDekJDLGtCQUFrQmQsU0FBVSxHQUFHO1FBRXJDLE9BQU9jO0lBQ1Q7SUFFQUMsa0JBQWtCWixjQUFjLEVBQUU7UUFDaEMsSUFBSSxDQUFDQSxjQUFjLEdBQUdBO0lBQ3hCO0lBRUFhLFVBQVVDLFlBQVksRUFBRTtRQUN0QixNQUFNTixtQkFBbUJNLGFBQWFQLE9BQU8sSUFDdkNRLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDUixtQkFDckRTLFVBQVVGLHlCQUEwQixHQUFHO1FBRTdDLE9BQU9FO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLFNBQVMsSUFBSSxDQUFDQyxRQUFRLElBQ3RCQyxVQUFVLENBQUNGO1FBRWpCLE9BQU9FO0lBQ1Q7SUFFQUMsZUFBZTtRQUNiLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLElBQ3hCQyxhQUFhLENBQUNGO1FBRXBCLE9BQU9FO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLFdBQVc7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFDLGtCQUFrQjtRQUNoQixNQUFNaEIsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFpQixrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUI7UUFFekIsT0FBT0E7SUFDVDtJQUVBZCxXQUFXO1FBQ1QsTUFBTUQsU0FBUztRQUVmLE9BQU9BO0lBQ1Q7SUFFQUgsc0JBQXNCUixnQkFBZ0IsRUFBRTtRQUN0QyxNQUFNVCxPQUFPUyxrQkFDUDJCLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNyQyxPQUM3QmdCLDBCQUEwQm9CLGFBQWEsR0FBRztRQUVoRCxPQUFPcEI7SUFDVDtJQUVBc0Isc0JBQXNCeEMsT0FBTyxFQUFFO1FBQzdCLE1BQU1XLG1CQUFtQixJQUFJLENBQUNGLG1CQUFtQixJQUMzQ1EsZUFBZWpCLFFBQVF5QyxrQ0FBa0MsQ0FBQzlCLG1CQUMxRCtCLG9CQUFvQnpCLGNBQWUsR0FBRztRQUU1QyxPQUFPeUI7SUFDVDtJQUVBQyxRQUFRQyxhQUFhLEVBQUV6QyxjQUFjLEVBQUVXLGVBQWUsRUFBRTtRQUN0RCxNQUFNK0IsV0FBVztRQUVqQixPQUFPQTtJQUNUO0lBRUFDLFNBQVM7UUFDUCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzNCOUMsU0FBUyxJQUFJLENBQUMrQyxTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xGO1lBQ0E5QztRQUNGO1FBRU4sT0FBT2dEO0lBQ1Q7QUFDRiJ9