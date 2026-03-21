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
    constructor(context, string, node, type, terms){
        super(context, string, node);
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
            const termB = term, termAComparesToTermB = termA.compareTerm(termB);
            if (termAComparesToTermB) {
                return true;
            }
        });
        return comparesToTerm;
    }
    someOtherTerm(term, callback) {
        const termA = term, terms = this.terms.filter((term)=>{
            const termB = term, termAComparesToTermB = termA.compareTerm(termB);
            if (!termAComparesToTermB) {
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
            const combinedTermAComparesToCombinedTermB = combinedTermA.compareTerm(combinedTermB);
            if (!combinedTermAComparesToCombinedTermB) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRXF1aXZhbGVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWl2YWxlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRUZXJtcyh0ZXJtcykge1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBncm91bmRlZFRlcm1zLCBjb250ZXh0KSB7XG4gICAgdGhpcy50ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSB0ZXJtLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSkge1xuICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybSA9IHRlcm07XG5cbiAgICAgICAgICBncm91bmRlZFRlcm1zLnB1c2goZ3JvdW5kZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMudGVybXMucmVkdWNlKChpbml0aWFsbHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW5pdGlhbGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtSW5pdGlhbGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5wdXNoKGluaXRpYWxseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZFRlcm1zO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLCB0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtSW1wbGljaXRseUdyb3VuZGVkID0gdGVybS5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQpIHtcbiAgICAgICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLnB1c2goaW1wbGljaXRseUdyb3VuZGVkVGVybSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBpc0Rpc2pvaW50RnJvbShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGRpc2pvaW50RnJvbSA9IGVxdWl2YWxlbmNlLmV2ZXJ5VGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgY29tcGFyZXNUb1Rlcm0gPSB0aGlzLmNvbXBhcmVUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoIWNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpc2pvaW50RnJvbTtcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IGluaXRpYWxseUdyb3VuZGVkVGVybXMgPSB0aGlzLmdldEluaXRpYWxseUdyb3VuZGVkVGVybXMoY29udGV4dCksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGluaXRpYWxseUdyb3VuZGVkVGVybXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKGluaXRpYWxseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW1wbGljaXRseUdyb3VuZGVkVGVybXMoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPSBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gKGltcGxpY2l0bHlHcm91bmRlZFRlcm1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXNNYXRjaCA9IHRlcm1Ob2Rlcy5ldmVyeSgodGVybU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzTWF0Y2g7XG4gIH1cblxuICBzb21lVGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5VGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy50ZXJtcy5ldmVyeShjYWxsYmFjayk7IH1cblxuICBjb21wYXJlVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICBjb21wYXJlc1RvVGVybSA9IHRoaXMuc29tZVRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUNvbXBhcmVzVG9UZXJtQiA9IHRlcm1BLmNvbXBhcmVUZXJtKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BQ29tcGFyZXNUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtO1xuICB9XG5cbiAgc29tZU90aGVyVGVybSh0ZXJtLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybXMgPSB0aGlzLnRlcm1zLmZpbHRlcigodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BQ29tcGFyZXNUb1Rlcm1CID0gdGVybUEuY29tcGFyZVRlcm0odGVybUIpO1xuXG4gICAgICAgICAgICBpZiAoIXRlcm1BQ29tcGFyZXNUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlc3VsdCA9IHRlcm1zLnNvbWUoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbWJpbmVUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbWJpbmVkVGVybXMgPSBbXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuXG4gICAgY29tcHJlc3MoY29tYmluZWRUZXJtcywgKGNvbWJpbmVkVGVybUEsIGNvbWJpbmVkVGVybUIpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkVGVybUFDb21wYXJlc1RvQ29tYmluZWRUZXJtQiA9IGNvbWJpbmVkVGVybUEuY29tcGFyZVRlcm0oY29tYmluZWRUZXJtQik7XG5cbiAgICAgIGlmICghY29tYmluZWRUZXJtQUNvbXBhcmVzVG9Db21iaW5lZFRlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkVGVybXM7XG4gIH1cblxuICBtZXJnZWRXaXRoKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZSgpO1xuXG4gICAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtcyA9IGVxdWl2YWxlbmNlLmdldFRlcm1zKCksXG4gICAgICAgICAgY29tYmluZWRUeXBlID0gY29tYmluZWRUeXBlRnJvbVR5cGVzKHR5cGVzKSxcbiAgICAgICAgICBjb21iaW5lZFRlcm1zID0gdGhpcy5jb21iaW5lVGVybXModGVybXMpO1xuXG4gICAgdHlwZSA9IGNvbWJpbmVkVHlwZTsgIC8vL1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zID0gY29tYmluZWRUZXJtcywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VOb2RlID0gaW5zdGFudGlhdGVFcXVpdmFsZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2Uuc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVpdmFsZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCB0eXBlID0gZXF1YWxpdHkuZ2V0VHlwZSgpO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zID0gZXF1YWxpdHkuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTm9kZSA9IGluc3RhbnRpYXRlRXF1aXZhbGVuY2Uoc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGVxdWl2YWxlbmNlLnNldFR5cGUodHlwZSk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjb21iaW5lZFR5cGVGcm9tVHlwZXModHlwZXMpIHtcbiAgY29uc3QgY29tYmluZWRUeXBlID0gdHlwZXMucmVkdWNlKChjb21iaW5lZFR5cGUsIHR5cGUpID0+IHtcbiAgICBpZiAoY29tYmluZWRUeXBlID09PSBudWxsKSB7XG4gICAgICBjb21iaW5lZFR5cGUgPSB0eXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdWJUeXBlT2ZDb21iaW5lZFR5cGUgPSB0eXBlLmlzU3ViVHlwZU9mKGNvbWJpbmVkVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlU3ViVHlwZU9mQ29tYmluZWRUeXBlKSB7XG4gICAgICAgIGNvbWJpbmVkVHlwZSA9IHR5cGU7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWRUeXBlO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY29tYmluZWRUeXBlO1xufVxuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJFcXVpdmFsZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJ0ZXJtcyIsImdldFR5cGUiLCJnZXRUZXJtcyIsInNldFR5cGUiLCJzZXRUZXJtcyIsImdldEVxdWl2YWxlbmNlTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZU5vZGUiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybSIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwicHVzaCIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwicmVkdWNlIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwiaXNEaXNqb2ludEZyb20iLCJlcXVpdmFsZW5jZSIsImRpc2pvaW50RnJvbSIsImV2ZXJ5VGVybSIsImNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsInNvbWVUZXJtIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwiY2FsbGJhY2siLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFDb21wYXJlc1RvVGVybUIiLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiY29tYmluZVRlcm1zIiwiY29tYmluZWRUZXJtcyIsImNvbWJpbmVkVGVybUEiLCJjb21iaW5lZFRlcm1CIiwiY29tYmluZWRUZXJtQUNvbXBhcmVzVG9Db21iaW5lZFRlcm1CIiwibWVyZ2VkV2l0aCIsInR5cGVzIiwiY29tYmluZWRUeXBlIiwiY29tYmluZWRUeXBlRnJvbVR5cGVzIiwiaW5zdGFudGlhdGUiLCJlcXVpdmFsZW5jZVN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIiwiaW5zdGFudGlhdGVFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsIm5hbWUiLCJmcm9tRXF1YWxpdHkiLCJlcXVhbGl0eSIsInR5cGVTdWJUeXBlT2ZDb21iaW5lZFR5cGUiLCJpc1N1YlR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPOzBCQUVSO3lCQUNLOzZCQUNXOzBCQUNHO3dCQUNDO3lCQUNJO0FBRS9DLE1BQU0sRUFBRUEsUUFBUSxFQUFFLEdBQUdDLHlCQUFjO01BRW5DLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtRQUM5QyxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FB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