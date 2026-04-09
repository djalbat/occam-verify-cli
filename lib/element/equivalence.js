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
    constructor(context, string, node, lineIndex, type, terms){
        super(context, string, node, lineIndex);
        this.type = type;
        this.terms = terms;
    }
    getType() {
        return this.type;
    }
    getTerms() {
        return this.terms;
    }
    setType(type) {
        this.type = type;
    }
    setTerms(terms) {
        this.terms = terms;
    }
    getEquivalenceNode() {
        const node = this.getNode(), equivalenceNode = node; ///
        return equivalenceNode;
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
    someTerm(callback) {
        return this.terms.some(callback);
    }
    everyTerm(callback) {
        return this.terms.every(callback);
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
            const combinedTermEqualToToCombinedTermB = combinedTermA.isEqualTo(combinedTermB);
            if (!combinedTermEqualToToCombinedTermB) {
                return true;
            }
        });
        return combinedTerms;
    }
    mergedWith(equivalence, context) {
        let type;
        type = equivalence.getType();
        const types = [
            this.type,
            type
        ], terms = equivalence.getTerms(), combinedType = combinedTypeFromTypes(types), combinedTerms = this.combineTerms(terms);
        type = combinedType; ///
        (0, _context.instantiate)((context)=>{
            const terms = combinedTerms, equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context);
            equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
        }, context);
        equivalence.setType(type);
        return equivalence;
    }
    static name = "Equivalence";
    static fromEquality(equality, context) {
        let equivalence;
        const type = equality.getType();
        (0, _context.instantiate)((context)=>{
            const terms = equality.getTerms(), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context);
            equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
        }, context);
        equivalence.setType(type);
        return equivalence;
    }
});
function combinedTypeFromTypes(types) {
    const combinedType = types.reduce((combinedType, type)=>{
        if (combinedType === null) {
            combinedType = type; ///
        } else {
            const typeSubTypeOfCombinedType = type.isSubTypeOf(combinedType);
            if (typeSubTypeOfCombinedType) {
                combinedType = type; ///
            }
        }
        return combinedType;
    }, null);
    return combinedType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRXF1aXZhbGVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0VGVybXModGVybXMpIHtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlTm9kZTtcbiAgfVxuXG4gIGdldEdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgZ3JvdW5kZWRUZXJtcywgY29udGV4dCkge1xuICAgIHRoaXMudGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUdyb3VuZGVkID0gdGVybS5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGVybU1hdGNoZXNHcm91bmRlZFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcy5wdXNoKGdyb3VuZGVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW5pdGlhbGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUluaXRpYWxseUdyb3VuZGVkID0gdGVybS5pc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUluaXRpYWxseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXMucHVzaChpbml0aWFsbHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcywgdGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUltcGxpY2l0bHlHcm91bmRlZCA9IHRlcm0uaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW1wbGljaXRseUdyb3VuZGVkKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5wdXNoKGltcGxpY2l0bHlHcm91bmRlZFRlcm0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgaXNEaXNqb2ludEZyb20oZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBkaXNqb2ludEZyb20gPSBlcXVpdmFsZW5jZS5ldmVyeVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtID0gdGhpcy5jb21wYXJlVGVybSh0ZXJtKTtcblxuICAgICAgaWYgKCFjb21wYXJlc1RvVGVybSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXNqb2ludEZyb207XG4gIH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IChpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXModGVybU5vZGVzKSB7XG4gICAgY29uc3QgdGVybU5vZGVzTWF0Y2ggPSB0ZXJtTm9kZXMuZXZlcnkoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2Rlc01hdGNoO1xuICB9XG5cbiAgc29tZVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeVRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMudGVybXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgY29tcGFyZVRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm0gPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm07XG4gIH1cblxuICBzb21lT3RoZXJUZXJtKHRlcm0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZmlsdGVyKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAoIXRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlc3VsdCA9IHRlcm1zLnNvbWUoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbWJpbmVUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbWJpbmVkVGVybXMgPSBbXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuXG4gICAgY29tcHJlc3MoY29tYmluZWRUZXJtcywgKGNvbWJpbmVkVGVybUEsIGNvbWJpbmVkVGVybUIpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkVGVybUVxdWFsVG9Ub0NvbWJpbmVkVGVybUIgPSBjb21iaW5lZFRlcm1BLmlzRXF1YWxUbyhjb21iaW5lZFRlcm1CKTtcblxuICAgICAgaWYgKCFjb21iaW5lZFRlcm1FcXVhbFRvVG9Db21iaW5lZFRlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkVGVybXM7XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZSgpO1xuXG4gICAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtcyA9IGVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgY29tYmluZWRUeXBlID0gY29tYmluZWRUeXBlRnJvbVR5cGVzKHR5cGVzKSxcbiAgICAgICAgICBjb21iaW5lZFRlcm1zID0gdGhpcy5jb21iaW5lVGVybXModGVybXMpO1xuXG4gICAgdHlwZSA9IGNvbWJpbmVkVHlwZTsgIC8vL1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zID0gY29tYmluZWRUZXJtcywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2Uuc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVpdmFsZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCB0eXBlID0gZXF1YWxpdHkuZ2V0VHlwZSgpO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zID0gZXF1YWxpdHkuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGVxdWl2YWxlbmNlLnNldFR5cGUodHlwZSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjb21iaW5lZFR5cGVGcm9tVHlwZXModHlwZXMpIHtcbiAgY29uc3QgY29tYmluZWRUeXBlID0gdHlwZXMucmVkdWNlKChjb21iaW5lZFR5cGUsIHR5cGUpID0+IHtcbiAgICBpZiAoY29tYmluZWRUeXBlID09PSBudWxsKSB7XG4gICAgICBjb21iaW5lZFR5cGUgPSB0eXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdWJUeXBlT2ZDb21iaW5lZFR5cGUgPSB0eXBlLmlzU3ViVHlwZU9mKGNvbWJpbmVkVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlU3ViVHlwZU9mQ29tYmluZWRUeXBlKSB7XG4gICAgICAgIGNvbWJpbmVkVHlwZSA9IHR5cGU7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWRUeXBlO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY29tYmluZWRUeXBlO1xufVxuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJ0ZXJtcyIsImdldFR5cGUiLCJnZXRUZXJtcyIsInNldFR5cGUiLCJzZXRUZXJtcyIsImdldEVxdWl2YWxlbmNlTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZU5vZGUiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybSIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwicHVzaCIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwicmVkdWNlIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwiaXNEaXNqb2ludEZyb20iLCJlcXVpdmFsZW5jZSIsImRpc2pvaW50RnJvbSIsImV2ZXJ5VGVybSIsImNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsInNvbWVUZXJtIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwiY2FsbGJhY2siLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiY29tYmluZVRlcm1zIiwiY29tYmluZWRUZXJtcyIsImNvbWJpbmVkVGVybUEiLCJjb21iaW5lZFRlcm1CIiwiY29tYmluZWRUZXJtRXF1YWxUb1RvQ29tYmluZWRUZXJtQiIsIm1lcmdlZFdpdGgiLCJ0eXBlcyIsImNvbWJpbmVkVHlwZSIsImNvbWJpbmVkVHlwZUZyb21UeXBlcyIsImluc3RhbnRpYXRlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImluc3RhbnRpYXRlRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJuYW1lIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJ0eXBlU3ViVHlwZU9mQ29tYmluZWRUeXBlIiwiaXNTdWJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjsyQkFDTzswQkFFUjt5QkFDSzs2QkFDVzswQkFDRzt3QkFDQzt5QkFDSTtBQUUvQyxNQUFNLEVBQUVBLFFBQVEsRUFBRSxHQUFHQyx5QkFBYztNQUVuQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtR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