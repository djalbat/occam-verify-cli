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
    constructor(context, string, node, breakPoint, type, terms){
        super(context, string, node, breakPoint);
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
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const terms = combinedTerms, equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context);
                equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            }, context);
        }, context);
        equivalence.setType(type);
        return equivalence;
    }
    static name = "Equivalence";
    static fromEquality(equality, context) {
        let equivalence;
        const type = equality.getType();
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const terms = equality.getTerms(), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalenceNode = (0, _instantiate.instantiateEquivalence)(string, context);
                equivalence = (0, _element.equivalenceFromEquivalenceNode)(equivalenceNode, context);
            }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYWJsYXRlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVpdmFsZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1aXZhbGVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFRlcm1zKHRlcm1zKSB7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZU5vZGU7XG4gIH1cblxuICBnZXRHcm91bmRlZFRlcm1zKGRlZmluZWRWYXJpYWJsZXMsIGdyb3VuZGVkVGVybXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLnRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IHRlcm0uaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtID0gdGVybTtcblxuICAgICAgICAgIGdyb3VuZGVkVGVybXMucHVzaChncm91bmRlZFRlcm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRJbml0aWFsbHlHcm91bmRlZFRlcm1zKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm1zID0gdGhpcy50ZXJtcy5yZWR1Y2UoKGluaXRpYWxseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Jbml0aWFsbHlHcm91bmRlZCA9IHRlcm0uaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1Jbml0aWFsbHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsbHlHcm91bmRlZFRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zLnB1c2goaW5pdGlhbGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkVGVybXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseUdyb3VuZGVkVGVybXMgPSB0aGlzLnRlcm1zLnJlZHVjZSgoaW1wbGljaXRseUdyb3VuZGVkVGVybXMsIHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1JbXBsaWNpdGx5R3JvdW5kZWQgPSB0ZXJtLmlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybUltcGxpY2l0bHlHcm91bmRlZCkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkVGVybXMucHVzaChpbXBsaWNpdGx5R3JvdW5kZWRUZXJtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZFRlcm1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtcztcbiAgfVxuXG4gIGlzRGlzam9pbnRGcm9tKGVxdWl2YWxlbmNlKSB7XG4gICAgY29uc3QgZGlzam9pbnRGcm9tID0gZXF1aXZhbGVuY2UuZXZlcnlUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCBjb21wYXJlc1RvVGVybSA9IHRoaXMuY29tcGFyZVRlcm0odGVybSk7XG5cbiAgICAgIGlmICghY29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlzam9pbnRGcm9tO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRUZXJtcyA9IHRoaXMuZ2V0SW5pdGlhbGx5R3JvdW5kZWRUZXJtcyhjb250ZXh0KSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoID0gaW5pdGlhbGx5R3JvdW5kZWRUZXJtcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAoaW5pdGlhbGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zID0gdGhpcy5nZXRJbXBsaWNpdGx5R3JvdW5kZWRUZXJtcyhkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZFRlcm1zLmxlbmd0aCxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSAoaW1wbGljaXRseUdyb3VuZGVkVGVybXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnNvbWVUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKHRlcm1Ob2Rlcykge1xuICAgIGNvbnN0IHRlcm1Ob2Rlc01hdGNoID0gdGVybU5vZGVzLmV2ZXJ5KCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgfVxuXG4gIHNvbWVUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnRlcm1zLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGNvbXBhcmVzVG9UZXJtID0gdGhpcy5zb21lVGVybSgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtO1xuICB9XG5cbiAgc29tZU90aGVyVGVybSh0ZXJtLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybXMgPSB0aGlzLnRlcm1zLmZpbHRlcigodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXJtcy5zb21lKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb21iaW5lVGVybXModGVybXMpIHtcbiAgICBjb25zdCBjb21iaW5lZFRlcm1zID0gW1xuICAgICAgLi4udGhpcy50ZXJtcyxcbiAgICAgIC4uLnRlcm1zXG4gICAgXTtcblxuICAgIGNvbXByZXNzKGNvbWJpbmVkVGVybXMsIChjb21iaW5lZFRlcm1BLCBjb21iaW5lZFRlcm1CKSA9PiB7XG4gICAgICBjb25zdCBjb21iaW5lZFRlcm1FcXVhbFRvVG9Db21iaW5lZFRlcm1CID0gY29tYmluZWRUZXJtQS5pc0VxdWFsVG8oY29tYmluZWRUZXJtQik7XG5cbiAgICAgIGlmICghY29tYmluZWRUZXJtRXF1YWxUb1RvQ29tYmluZWRUZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21iaW5lZFRlcm1zO1xuICB9XG5cbiAgbWVyZ2VkV2l0aChlcXVpdmFsZW5jZSwgY29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgdHlwZSA9IGVxdWl2YWxlbmNlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgICAgICAgdGhpcy50eXBlLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXMgPSBlcXVpdmFsZW5jZS5nZXRUZXJtcygpLFxuICAgICAgICAgIGNvbWJpbmVkVHlwZSA9IGNvbWJpbmVkVHlwZUZyb21UeXBlcyh0eXBlcyksXG4gICAgICAgICAgY29tYmluZWRUZXJtcyA9IHRoaXMuY29tYmluZVRlcm1zKHRlcm1zKTtcblxuICAgIHR5cGUgPSBjb21iaW5lZFR5cGU7ICAvLy9cblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybXMgPSBjb21iaW5lZFRlcm1zLCAgLy8vXG4gICAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2Uuc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVpdmFsZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCB0eXBlID0gZXF1YWxpdHkuZ2V0VHlwZSgpO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IGVxdWFsaXR5LmdldFRlcm1zKCksXG4gICAgICAgICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBlcXVpdmFsZW5jZU5vZGUgPSBpbnN0YW50aWF0ZUVxdWl2YWxlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgZXF1aXZhbGVuY2Uuc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNvbWJpbmVkVHlwZUZyb21UeXBlcyh0eXBlcykge1xuICBjb25zdCBjb21iaW5lZFR5cGUgPSB0eXBlcy5yZWR1Y2UoKGNvbWJpbmVkVHlwZSwgdHlwZSkgPT4ge1xuICAgIGlmIChjb21iaW5lZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbWJpbmVkVHlwZSA9IHR5cGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN1YlR5cGVPZkNvbWJpbmVkVHlwZSA9IHR5cGUuaXNTdWJUeXBlT2YoY29tYmluZWRUeXBlKTtcblxuICAgICAgaWYgKHR5cGVTdWJUeXBlT2ZDb21iaW5lZFR5cGUpIHtcbiAgICAgICAgY29tYmluZWRUeXBlID0gdHlwZTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZFR5cGU7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBjb21iaW5lZFR5cGU7XG59XG4iXSwibmFtZXMiOlsiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkVxdWl2YWxlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJ0ZXJtcyIsImdldFR5cGUiLCJnZXRUZXJtcyIsInNldFR5cGUiLCJzZXRUZXJtcyIsImdldEVxdWl2YWxlbmNlTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZU5vZGUiLCJnZXRHcm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXMiLCJmb3JFYWNoIiwidGVybSIsInRlcm1Hcm91bmRlZCIsImlzR3JvdW5kZWQiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwicHVzaCIsImdldEluaXRpYWxseUdyb3VuZGVkVGVybXMiLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zIiwicmVkdWNlIiwidGVybUluaXRpYWxseUdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkVGVybSIsImdldEltcGxpY2l0bHlHcm91bmRlZFRlcm1zIiwiaW1wbGljaXRseUdyb3VuZGVkVGVybXMiLCJ0ZXJtSW1wbGljaXRseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtIiwiaXNEaXNqb2ludEZyb20iLCJlcXVpdmFsZW5jZSIsImRpc2pvaW50RnJvbSIsImV2ZXJ5VGVybSIsImNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJpbml0aWFsbHlHcm91bmRlZFRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWRUZXJtc0xlbmd0aCIsImltcGxpY2l0bHlHcm91bmRlZCIsInRlcm1Ob2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsInNvbWVUZXJtIiwibWF0Y2hUZXJtTm9kZXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtTm9kZXNNYXRjaCIsImV2ZXJ5IiwiY2FsbGJhY2siLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJzb21lT3RoZXJUZXJtIiwiZmlsdGVyIiwicmVzdWx0IiwiY29tYmluZVRlcm1zIiwiY29tYmluZWRUZXJtcyIsImNvbWJpbmVkVGVybUEiLCJjb21iaW5lZFRlcm1CIiwiY29tYmluZWRUZXJtRXF1YWxUb1RvQ29tYmluZWRUZXJtQiIsIm1lcmdlZFdpdGgiLCJ0eXBlcyIsImNvbWJpbmVkVHlwZSIsImNvbWJpbmVkVHlwZUZyb21UeXBlcyIsImFibGF0ZSIsImluc3RhbnRpYXRlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImluc3RhbnRpYXRlRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJuYW1lIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJ0eXBlU3ViVHlwZU9mQ29tYmluZWRUeXBlIiwiaXNTdWJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjsyQkFDTzswQkFFUjt5QkFDYTs2QkFDRzswQkFDRzt3QkFDQzt5QkFDSTtBQUUvQyxNQUFNLEVBQUVBLFFBQVEsRUFBRSxH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