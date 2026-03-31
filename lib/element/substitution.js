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
const _context = require("../utilities/context");
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
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcbmltcG9ydCB7c2VyaWFsaXNlfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRHZW5lcmFsQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5nZXRSZXBsYWNlbWVudE5vZGUoKSxcbiAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNwZWNpZmljQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIHNwZWNpZmljQ29udGV4dDtcbiAgfVxuXG4gIHNldEdlbmVyYWxDb250ZXh0KGdlbmVyYWxDb250ZXh0KSB7XG4gICAgdGhpcy5nZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzTm9uVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gdGhpcy5pc1RyaXZpYWwoKSxcbiAgICAgICAgICBub25Ucml2bGFsID0gIXRyaXZpYWw7XG5cbiAgICByZXR1cm4gbm9uVHJpdmxhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJwcmltaXRpdmVGcm9tTm9kZSIsInByaW1pdGl2ZVV0aWxpdGllcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJnZXRQcmltaXRpdmUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJwcmltaXRpdmUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic2V0R2VuZXJhbENvbnRleHQiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImVxdWFsVG8iLCJpc0NvbXBsZXgiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImNvbXBsZXgiLCJpc05vblRyaXZpYWwiLCJ0cml2aWFsIiwiaXNUcml2aWFsIiwibm9uVHJpdmxhbCIsImdldFZhcmlhYmxlIiwidmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsInJlc29sdmVkIiwidG9KU09OIiwic2VyaWFsaXNlIiwibmFtZSIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7Z0NBTkc7NkJBQ1c7eUJBQ1g7QUFFeEIsTUFBTSxFQUFF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