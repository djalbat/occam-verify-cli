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
const _necessary = require("necessary");
const _elements = require("../elements");
const _instantiate = require("../process/instantiate");
const _brackets = require("../utilities/brackets");
const _string = require("../utilities/string");
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const { compress } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Equivalence extends _occamlanguages.Element {
    constructor(context, string, node, terms){
        super(context, string, node);
        this.terms = terms;
    }
    getTerms() {
        return this.terms;
    }
    getEquivalenceNode() {
        const node = this.getNode(), equivalenceNode = node; ///
        return equivalenceNode;
    }
    getType() {
        const type = this.terms.reduce((type, term)=>{
            const termType = term.getType();
            if (type === null) {
                type = termType; ///
            } else {
                const termTypeSubTypeOfType = termType.isSubTypeOf(type);
                if (termTypeSubTypeOfType) {
                    type = termType; ///
                }
            }
            return type;
        }, null);
        return type;
    }
    getGroundedTerms(definedVariables, groundedTerms, context) {
        this.terms.forEach((term)=>{
            const termGrounded = term.isGrounded(definedVariables, context);
            if (termGrounded) {
                const termMatchesGroundedTerm = groundedTerms.some((groundedTerm)=>{
                    const groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchTermNode(groundedTermNode);
                    if (groundedTermNodeMatches) {
                        return true;
                    }
                });
                if (!termMatchesGroundedTerm) {
                    const groundedTerm = term;
                    groundedTerms.push(groundedTerm);
                }
            }
        });
    }
    getInitiallyGroundedTerms(context) {
        const initiallyGroundedTerms = this.terms.reduce((initiallyGroundedTerms, term)=>{
            const termInitiallyGrounded = term.isInitiallyGrounded(context);
            if (termInitiallyGrounded) {
                const initiallyGroundedTerm = term; ///
                initiallyGroundedTerms.push(initiallyGroundedTerm);
            }
            return initiallyGroundedTerms;
        }, []);
        return initiallyGroundedTerms;
    }
    getImplicitlyGroundedTerms(definedVariables, context) {
        const implicitlyGroundedTerms = this.terms.reduce((implicitlyGroundedTerms, term)=>{
            const termImplicitlyGrounded = term.isImplicitlyGrounded(definedVariables, context);
            if (termImplicitlyGrounded) {
                const implicitlyGroundedTerm = term; ///
                implicitlyGroundedTerms.push(implicitlyGroundedTerm);
            }
            return implicitlyGroundedTerms;
        }, []);
        return implicitlyGroundedTerms;
    }
    isDisjointFrom(equivalence) {
        const disjointFrom = equivalence.everyTerm((term)=>{
            const comparesToTerm = this.compareTerm(term);
            if (!comparesToTerm) {
                return true;
            }
        });
        return disjointFrom;
    }
    isInitiallyGrounded(context) {
        const initiallyGroundedTerms = this.getInitiallyGroundedTerms(context), initiallyGroundedTermsLength = initiallyGroundedTerms.length, initiallyGrounded = initiallyGroundedTermsLength > 0;
        return initiallyGrounded;
    }
    isImplicitlyGrounded(definedVariables, context) {
        const implicitlyGroundedTerms = this.getImplicitlyGroundedTerms(definedVariables, context), implicitlyGroundedTermsLength = implicitlyGroundedTerms.length, implicitlyGrounded = implicitlyGroundedTermsLength > 0;
        return implicitlyGrounded;
    }
    compareTerm(term) {
        const termA = term, comparesToTerm = this.someTerm((term)=>{
            const termB = term, termAEqualToTermB = termA.isEqualTo(termB);
            if (termAEqualToTermB) {
                return true;
            }
        });
        return comparesToTerm;
    }
    matchTermNode(termNode) {
        termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
        const termNodeMatches = this.someTerm((term)=>{
            const termNodeMatches = term.matchTermNode(termNode);
            if (termNodeMatches) {
                return true;
            }
        });
        return termNodeMatches;
    }
    matchTermNodes(termNodes) {
        const termNodesMatch = termNodes.every((termNode)=>{
            const termNodeMatches = this.matchTermNode(termNode);
            if (termNodeMatches) {
                return true;
            }
        });
        return termNodesMatch;
    }
    matchVariableNode(variableNode) {
        const variableNodeA = variableNode, variableNodeMatches = this.someTerm((term)=>{
            const termNode = term.getNode(), singularVariableNode = termNode.getSingularVariableNode();
            if (singularVariableNode !== null) {
                const variableNodeB = singularVariableNode, variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);
                if (variableNodeAMatchesVariableNodeB) {
                    return true;
                }
            }
        });
        return variableNodeMatches;
    }
    someTerm(callback) {
        return this.terms.some(callback);
    }
    everyTerm(callback) {
        return this.terms.every(callback);
    }
    someOtherTerm(term, callback) {
        const termA = term, terms = this.terms.filter((term)=>{
            const termB = term, termAEqualToTermB = termA.isEqualTo(termB);
            if (!termAEqualToTermB) {
                return true;
            }
        }), result = terms.some(callback);
        return result;
    }
    combineTerms(terms) {
        const combinedTerms = [
            ...this.terms,
            ...terms
        ];
        compress(combinedTerms, (combinedTermA, combinedTermB)=>{
            const combinedTermAEqualToCombinedTermB = combinedTermA.isEqualTo(combinedTermB);
            if (!combinedTermAEqualToCombinedTermB) {
                return true;
            }
        });
        return combinedTerms;
    }
    mergedWith(equivalence, context) {
        const terms = equivalence.getTerms(), combinedTerms = this.combineTerms(terms);
        return (0, _context.instantiate)((context)=>{
            const terms = combinedTerms, equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            return equivalence;
        }, context);
    }
    static name = "Equivalence";
    static fromEquality(equality, context) {
        const santisedContext = (0, _context.sanitisedContextFromContext)(context);
        context = santisedContext; ///
        return (0, _context.instantiate)((context)=>{
            const terms = equality.getTerms(), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            return equivalence;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVpdmFsZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSwgc2FuaXRpc2VkQ29udGV4dEZyb21Db250ZXh0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtcy5yZWR1Y2UoKHR5cGUsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtID0gdGVybTtcblxuICAgICAgICAgIGdyb3VuZGVkVGVybXMucHVzaChncm91bmRlZFRlcm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZGlzam9pbnRGcm9tID0gZXF1aXZhbGVuY2UuZXZlcnlUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCBjb21wYXJlc1RvVGVybSA9IHRoaXMuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICghY29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlzam9pbnRGcm9tO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICBjb21wYXJlc1RvVGVybSA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIgPSB2YXJpYWJsZU5vZGVBLm1hdGNoKHZhcmlhYmxlTm9kZUIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzb21lVGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5VGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5ldmVyeShjYWxsYmFjayk7IH1cblxuICBzb21lT3RoZXJUZXJtKHRlcm0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZmlsdGVyKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlc3VsdCA9IHRlcm1zLnNvbWUoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbWJpbmVUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbWJpbmVkVGVybXMgPSBbXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuXG4gICAgY29tcHJlc3MoY29tYmluZWRUZXJtcywgKGNvbWJpbmVkVGVybUEsIGNvbWJpbmVkVGVybUIpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkVGVybUFFcXVhbFRvQ29tYmluZWRUZXJtQiA9IGNvbWJpbmVkVGVybUEuaXNFcXVhbFRvKGNvbWJpbmVkVGVybUIpO1xuXG4gICAgICBpZiAoIWNvbWJpbmVkVGVybUFFcXVhbFRvQ29tYmluZWRUZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21iaW5lZFRlcm1zO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gZXF1aXZhbGVuY2UuZ2V0VGVybXMoKSxcbiAgICAgICAgICBjb21iaW5lZFRlcm1zID0gdGhpcy5jb21iaW5lVGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtcyA9IGNvbWJpbmVkVGVybXMsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVpdmFsZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBjb25zdCBzYW50aXNlZENvbnRleHQgPSBzYW5pdGlzZWRDb250ZXh0RnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gc2FudGlzZWRDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zID0gZXF1YWxpdHkuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkVxdWl2YWxlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybXMiLCJnZXRUZXJtcyIsImdldEVxdWl2YWxlbmNlTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsInJlZHVjZSIsInRlcm0iLCJ0ZXJtVHlwZSIsInRlcm1UeXBlU3ViVHlwZU9mVHlwZSIsImlzU3ViVHlwZU9mIiwiZ2V0R3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zIiwiZm9yRWFjaCIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwicHVzaCIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwiaXNEaXNqb2ludEZyb20iLCJlcXVpdmFsZW5jZSIsImRpc2pvaW50RnJvbSIsImV2ZXJ5VGVybSIsImNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1BIiwic29tZVRlcm0iLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwidGVybU5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVCIiwidmFyaWFibGVOb2RlQU1hdGNoZXNWYXJpYWJsZU5vZGVCIiwibWF0Y2giLCJjYWxsYmFjayIsInNvbWVPdGhlclRlcm0iLCJmaWx0ZXIiLCJyZXN1bHQiLCJjb21iaW5lVGVybXMiLCJjb21iaW5lZFRlcm1zIiwiY29tYmluZWRUZXJtQSIsImNvbWJpbmVkVGVybUIiLCJjb21iaW5lZFRlcm1BRXF1YWxUb0NvbWJpbmVkVGVybUIiLCJtZXJnZWRXaXRoIiwiaW5zdGFudGlhdGUiLCJlcXVpdmFsZW5jZVN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIiwiaW5zdGFudGlhdGVFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsIm5hbWUiLCJmcm9tRXF1YWxpdHkiLCJlcXVhbGl0eSIsInNhbnRpc2VkQ29udGV4dCIsInNhbml0aXNlZENvbnRleHRGcm9tQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPOzBCQUVSOzZCQUNnQjswQkFDRzt3QkFDQzt5QkFDSTt5QkFDVTtBQUV6RCxNQUFNLEVBQUVBLFFBQVEsRUFBRSxHQUFHQyx5QkFBYztNQUVuQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxDQUFFO1FBQ3hDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLHFCQUFxQjtRQUNuQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsa0JBQWtCTCxNQUFNLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxVQUFVO1FBQ1IsTUFBTUMsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQUNELE1BQU1FO1lBQ3BDLE1BQU1DLFdBQVdELEtBQUtILE9BQU87WUFFN0IsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQkEsT0FBT0csVUFBVyxHQUFHO1lBQ3ZCLE9BQU87Z0JBQ0wsTUFBTUMsd0JBQXdCRCxTQUFTRSxXQUFXLENBQUNMO2dCQUVuRCxJQUFJSSx1QkFBdUI7b0JBQ3pCSixPQUFPRyxVQUFXLEdBQUc7Z0JBQ3ZCO1lBQ0Y7WUFFQSxPQUFPSDtRQUNULEdBQUc7UUFFSCxPQUFPQTtJQUNUO0lBRUFNLGlCQUFpQkMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRWpC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