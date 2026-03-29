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
    constructor(context, string, node, lineIndex, generalContext){
        super(context, string, node, lineIndex);
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
        const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            name,
            string,
            lineIndex
        };
        return json;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRHZW5lcmFsQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5nZXRSZXBsYWNlbWVudE5vZGUoKSxcbiAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNwZWNpZmljQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIHNwZWNpZmljQ29udGV4dDtcbiAgfVxuXG4gIHNldEdlbmVyYWxDb250ZXh0KGdlbmVyYWxDb250ZXh0KSB7XG4gICAgdGhpcy5nZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzTm9uVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gdGhpcy5pc1RyaXZpYWwoKSxcbiAgICAgICAgICBub25Ucml2bGFsID0gIXRyaXZpYWw7XG5cbiAgICByZXR1cm4gbm9uVHJpdmxhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cblxuICBmaW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJwcmltaXRpdmVVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0IiwiZ2V0UHJpbWl0aXZlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicHJpbWl0aXZlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInNldEdlbmVyYWxDb250ZXh0IiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJlcXVhbFRvIiwiaXNDb21wbGV4Iiwic2ltcGxlIiwiaXNTaW1wbGUiLCJjb21wbGV4IiwiaXNOb25Ucml2aWFsIiwidHJpdmlhbCIsImlzVHJpdmlhbCIsIm5vblRyaXZsYWwiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsInRvSlNPTiIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXRMaW5lSW5kZXgiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dDQUxHOzZCQUNXO0FBRW5DLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUUsR0FBRUMsK0JBQWtCO0FBRWhDLE1BQU1GLHFCQUFxQkcsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLENBQUU7UUFDNUQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLGNBQWMsR0FBR0E7SUFDeEI7SUFFQUMsb0JBQW9CO1FBQ2xC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