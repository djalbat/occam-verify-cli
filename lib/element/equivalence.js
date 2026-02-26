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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _brackets = require("../utilities/brackets");
const _string = require("../utilities/string");
const _element = require("../utilities/element");
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
        return (0, _context.literally)((context)=>{
            const terms = combinedTerms, equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            return equivalence;
        }, context);
    }
    static name = "Equivalence";
    static fromEquality(equality, context) {
        return (0, _context.literally)((context)=>{
            const terms = equality.getTerms(), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            return equivalence;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGVybU1hdGNoZXNHcm91bmRlZFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcy5wdXNoKGdyb3VuZGVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXMucHVzaChpbml0aWFsbHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBkaXNqb2ludEZyb20gPSBlcXVpdmFsZW5jZS5ldmVyeVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtID0gdGhpcy5jb21wYXJlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKCFjb21wYXJlc1RvVGVybSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXNqb2ludEZyb207XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbXBhcmVzVG9UZXJtID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUIgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVPdGhlclRlcm0odGVybSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5maWx0ZXIoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVzdWx0ID0gdGVybXMuc29tZShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29tYmluZVRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29tYmluZWRUZXJtcyA9IFtcbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAuLi50ZXJtc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyhjb21iaW5lZFRlcm1zLCAoY29tYmluZWRUZXJtQSwgY29tYmluZWRUZXJtQikgPT4ge1xuICAgICAgY29uc3QgY29tYmluZWRUZXJtQUVxdWFsVG9Db21iaW5lZFRlcm1CID0gY29tYmluZWRUZXJtQS5pc0VxdWFsVG8oY29tYmluZWRUZXJtQik7XG5cbiAgICAgIGlmICghY29tYmluZWRUZXJtQUVxdWFsVG9Db21iaW5lZFRlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkVGVybXM7XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBlcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIGNvbWJpbmVkVGVybXMgPSB0aGlzLmNvbWJpbmVUZXJtcyh0ZXJtcyk7XG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtcyA9IGNvbWJpbmVkVGVybXMsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVpdmFsZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRFcXVpdmFsZW5jZU5vZGUiLCJnZXROb2RlIiwiZXF1aXZhbGVuY2VOb2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJyZWR1Y2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJ0ZXJtVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1YlR5cGVPZiIsImdldEdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtcyIsImZvckVhY2giLCJ0ZXJtR3JvdW5kZWQiLCJpc0dyb3VuZGVkIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJzb21lIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInB1c2giLCJnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsInRlcm1Jbml0aWFsbHlHcm91bmRlZCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJpbml0aWFsbHlHcm91bmRlZFRlcm0iLCJnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwidGVybUltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybSIsImlzRGlzam9pbnRGcm9tIiwiZXF1aXZhbGVuY2UiLCJkaXNqb2ludEZyb20iLCJldmVyeVRlcm0iLCJjb21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImxlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ0ZXJtQSIsInNvbWVUZXJtIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInRlcm1Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGVzIiwidGVybU5vZGVzIiwidGVybU5vZGVzTWF0Y2giLCJldmVyeSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiIsIm1hdGNoIiwiY2FsbGJhY2siLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiY29tYmluZVRlcm1zIiwiY29tYmluZWRUZXJtcyIsImNvbWJpbmVkVGVybUEiLCJjb21iaW5lZFRlcm1CIiwiY29tYmluZWRUZXJtQUVxdWFsVG9Db21iaW5lZFRlcm1CIiwibWVyZ2VkV2l0aCIsImxpdGVyYWxseSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwibmFtZSIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fa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