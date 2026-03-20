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
        return (0, _context.instantiate)((context)=>{
            const terms = combinedTerms, equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context), equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            return equivalence;
        }, context);
    }
    static name = "Equivalence";
    static fromEquality(equality, context) {
        let equivalence;
        (0, _context.simplify)((context)=>{
            (0, _context.instantiate)((context)=>{
                const terms = equality.getTerms(), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context);
                equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            }, context);
        }, context);
        return equivalence;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc2ltcGxpZnksIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVpdmFsZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm1zLnJlZHVjZSgodHlwZSwgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVHlwZVN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgdHlwZSA9IHRlcm1UeXBlOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGVybU1hdGNoZXNHcm91bmRlZFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcy5wdXNoKGdyb3VuZGVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXMucHVzaChpbml0aWFsbHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBkaXNqb2ludEZyb20gPSBlcXVpdmFsZW5jZS5ldmVyeVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtID0gdGhpcy5jb21wYXJlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKCFjb21wYXJlc1RvVGVybSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXNqb2ludEZyb207XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbXBhcmVzVG9UZXJtID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUIgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQiA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUFNYXRjaGVzVmFyaWFibGVOb2RlQikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVPdGhlclRlcm0odGVybSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5maWx0ZXIoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgICAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVzdWx0ID0gdGVybXMuc29tZShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29tYmluZVRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29tYmluZWRUZXJtcyA9IFtcbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAuLi50ZXJtc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyhjb21iaW5lZFRlcm1zLCAoY29tYmluZWRUZXJtQSwgY29tYmluZWRUZXJtQikgPT4ge1xuICAgICAgY29uc3QgY29tYmluZWRUZXJtQUVxdWFsVG9Db21iaW5lZFRlcm1CID0gY29tYmluZWRUZXJtQS5pc0VxdWFsVG8oY29tYmluZWRUZXJtQik7XG5cbiAgICAgIGlmICghY29tYmluZWRUZXJtQUVxdWFsVG9Db21iaW5lZFRlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkVGVybXM7XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBlcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIGNvbWJpbmVkVGVybXMgPSB0aGlzLmNvbWJpbmVUZXJtcyh0ZXJtcyk7XG5cbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zID0gY29tYmluZWRUZXJtcywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWl2YWxlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCkge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIHNpbXBsaWZ5KChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRXF1aXZhbGVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtcyIsImdldFRlcm1zIiwiZ2V0RXF1aXZhbGVuY2VOb2RlIiwiZ2V0Tm9kZSIsImVxdWl2YWxlbmNlTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwicmVkdWNlIiwidGVybSIsInRlcm1UeXBlIiwidGVybVR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdWJUeXBlT2YiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybUdyb3VuZGVkIiwiaXNHcm91bmRlZCIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJwdXNoIiwiZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyIsImluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJ0ZXJtSW5pdGlhbGx5R3JvdW5kZWQiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWRUZXJtIiwiZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyIsInRlcm1JbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm0iLCJpc0Rpc2pvaW50RnJvbSIsImVxdWl2YWxlbmNlIiwiZGlzam9pbnRGcm9tIiwiZXZlcnlUZXJtIiwiY29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsImluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGgiLCJsZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwiaW1wbGljaXRseUdyb3VuZGVkIiwidGVybUEiLCJzb21lVGVybSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJ0ZXJtTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlcyIsInRlcm1Ob2RlcyIsInRlcm1Ob2Rlc01hdGNoIiwiZXZlcnkiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlc1ZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsImNhbGxiYWNrIiwic29tZU90aGVyVGVybSIsImZpbHRlciIsInJlc3VsdCIsImNvbWJpbmVUZXJtcyIsImNvbWJpbmVkVGVybXMiLCJjb21iaW5lZFRlcm1BIiwiY29tYmluZWRUZXJtQiIsImNvbWJpbmVkVGVybUFFcXVhbFRvQ29tYmluZWRUZXJtQiIsIm1lcmdlZFdpdGgiLCJpbnN0YW50aWF0ZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJpbnN0YW50aWF0ZUVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwibmFtZSIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5Iiwic2ltcGxpZnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjsyQkFDTzswQkFFUjt5QkFDZTs2QkFDQzswQkFDRzt3QkFDQzt5QkFDSTtBQUUvQyxNQUFNLEVBQUVBLFFBQVEsRUFBRSxHQUFHQyx5QkFBYztNQUVuQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxDQUFFO1FBQ3hDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLHFCQUFxQjtRQUNuQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsa0JBQWtCTCxNQUFNLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxVQUFVO1FBQ1IsTUFBTUMsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQUNELE1BQU1FO1lBQ3BDLE1BQU1DLFdBQVdELEtBQUtILE9BQU87WUFFN0IsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQkEsT0FBT0csVUFBVyxHQUFHO1lBQ3ZCLE9BQU87Z0JBQ0wsTUFBTUMsd0JBQXdCRCxTQUFTRSxXQUFXLENBQUNMO2dCQUVuRCxJQUFJSSx1QkFBdUI7b0JBQ3pCSixPQUFPRyxVQUFXLEdBQUc7Z0JBQ3ZCO1lBQ0Y7WUFFQSxPQUFPSDtRQUNULEdBQUc7UUFFSCxPQUFPQTtJQUNUO0lBRUFNLGlCQUFpQkMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRWpCLE9BQU8sRUFBRTtRQUN6RCxJQUFJLENBQUNHLEtBQUssQ0FBQ2UsT0FBTyxDQUFDLENBQUNQO1lBQ2xCLE1BQU1RLGVBQWVSLEtBQUtTLFVBQVUsQ0FBQ0osa0JB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