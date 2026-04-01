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
const _context = require("../utilities/context");
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
    getName() {
        const { name } = this.constructor;
        return name;
    }
    getContexts() {
        const generalContext = this.getGeneralContext(), specificContext = this.getSpecificContext(), contexts = [
            generalContext,
            specificContext
        ];
        return contexts;
    }
    setGeneralContext(generalContext) {
        this.generalContext = generalContext;
    }
    setSpecificContext(specifiContext) {
        const context = specifiContext; ///
        this.setContext(context);
    }
    setContexts(...contexts) {
        const [generalContext, specificContext] = contexts;
        this.setGeneralContext(generalContext);
        this.setSpecificContext(specificContext);
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
        const contexts = this.getContexts();
        return (0, _context.serialise)((...contexts)=>{
            const name = this.getName(), string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                contexts,
                string,
                lineIndex
            };
            return json;
        }, ...contexts);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHNlcmlhbGlzZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgcHJpbWl0aXZlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5jb25zdCB7IHByaW1pdGl2ZUZyb21Ob2RlIH0gPXByaW1pdGl2ZVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldEdlbmVyYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldENvbnRleHRzKCkge1xuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY29udGV4dHM7XG4gIH1cblxuICBzZXRHZW5lcmFsQ29udGV4dChnZW5lcmFsQ29udGV4dCkge1xuICAgIHRoaXMuZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHNldFNwZWNpZmljQ29udGV4dChzcGVjaWZpQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICBzZXRDb250ZXh0cyguLi5jb250ZXh0cykge1xuICAgIGNvbnN0IFsgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCBdID0gY29udGV4dHM7XG5cbiAgICB0aGlzLnNldEdlbmVyYWxDb250ZXh0KGdlbmVyYWxDb250ZXh0KTtcbiAgICB0aGlzLnNldFNwZWNpZmljQ29udGV4dChzcGVjaWZpY0NvbnRleHQpO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzTm9uVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gdGhpcy5pc1RyaXZpYWwoKSxcbiAgICAgICAgICBub25Ucml2bGFsID0gIXRyaXZpYWw7XG5cbiAgICByZXR1cm4gbm9uVHJpdmxhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmdldENvbnRleHRzKCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKCguLi5jb250ZXh0cykgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBjb250ZXh0cyxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIC4uLmNvbnRleHRzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbiIsInByaW1pdGl2ZUZyb21Ob2RlIiwicHJpbWl0aXZlVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZ2VuZXJhbENvbnRleHQiLCJnZXRHZW5lcmFsQ29udGV4dCIsImdldFByaW1pdGl2ZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInByaW1pdGl2ZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXROYW1lIiwibmFtZSIsImdldENvbnRleHRzIiwiY29udGV4dHMiLCJzZXRHZW5lcmFsQ29udGV4dCIsInNldFNwZWNpZmljQ29udGV4dCIsInNwZWNpZmlDb250ZXh0Iiwic2V0Q29udGV4dCIsInNldENvbnRleHRzIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJlcXVhbFRvIiwiaXNDb21wbGV4Iiwic2ltcGxlIiwiaXNTaW1wbGUiLCJjb21wbGV4IiwiaXNOb25Ucml2aWFsIiwidHJpdmlhbCIsImlzVHJpdmlhbCIsIm5vblRyaXZsYWwiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7Z0NBTkc7eUJBQ0U7NkJBQ1M7QUFFbkMsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFFQywrQkFBa0I7QUFFaEMsTUFBTUYscUJBQXFCRyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsQ0FBRTtRQUM1RCxLQUFLLENBQUNKLFNBQVNDLFFB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