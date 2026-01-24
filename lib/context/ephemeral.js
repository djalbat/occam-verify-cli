"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EphemeralContext;
    }
});
var _necessary = require("necessary");
var _context = require("../utilities/context");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var extract = _necessary.arrayUtilities.extract;
var EphemeralContext = /*#__PURE__*/ function() {
    function EphemeralContext(context, terms, frames, statements, assertions, references, substitutions) {
        _class_call_check(this, EphemeralContext);
        this.context = context;
        this.terms = terms;
        this.frames = frames;
        this.statements = statements;
        this.assertions = assertions;
        this.references = references;
        this.substitutions = substitutions;
        return (0, _context.chainContext)(this);
    }
    _create_class(EphemeralContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "getFrames",
            value: function getFrames() {
                return this.frames;
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "getAssertions",
            value: function getAssertions() {
                return this.assertions;
            }
        },
        {
            key: "getReferences",
            value: function getReferences() {
                return this.references;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                var termA = term, context = this, termString = term.getString();
                extract(this.terms, function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(termString, "' term to the context."));
                this.terms.push(term);
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var frameA = frame, context = this, frameString = frame.getString();
                extract(this.frames, function(frame) {
                    var frameB = frame, frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (frameAEqualToFrameB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(frameString, "' frame to the context."));
                this.frames.push(frame);
            }
        },
        {
            key: "addStatement",
            value: function addStatement(statement) {
                var context = this, statementA = statement, statementString = statement.getString();
                extract(this.statements, function(statement) {
                    var statementB = statement, statementAEqualToFrameB = statementA.isEqualTo(statementB);
                    if (statementAEqualToFrameB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(statementString, "' statement to the context."));
                this.statements.push(statement);
            }
        },
        {
            key: "addAssertion",
            value: function addAssertion(assertion) {
                var context = this, assertionA = assertion, assertionString = assertion.getString();
                extract(this.assertions, function(assertion) {
                    var assertionB = assertion, assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
                    if (assertionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(assertionString, "' assertion to the context."));
                this.assertions.push(assertion);
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this, referenceA = reference, referenceString = reference.getString();
                extract(this.references, function(reference) {
                    var referenceB = reference, referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
                    if (referenceAEqualToReferenceB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(referenceString, "' reference to the context."));
                this.references.push(reference);
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                extract(this.substitutions, function(substitution) {
                    var substitutionB = substitution, substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionString, "' substitution to the context."));
                this.substitutions.push(substitution);
            }
        },
        {
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                var term = this.terms.find(function(term) {
                    var termNodeMatches = term.matchNode(termNode);
                    if (termNodeMatches) {
                        return true;
                    }
                }) || null;
                return term;
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                var frame = this.frames.find(function(frame) {
                    var frameNodeMatches = frame.matchNode(frameNode);
                    if (frameNodeMatches) {
                        return true;
                    }
                }) || null;
                return frame;
            }
        },
        {
            key: "findStatementByStatementNode",
            value: function findStatementByStatementNode(statementNode) {
                var statement = this.statements.find(function(statement) {
                    var statementNodeMatches = statement.matchNode(statementNode);
                    if (statementNodeMatches) {
                        return true;
                    }
                }) || null;
                return statement;
            }
        },
        {
            key: "findAssertionByAssertionNode",
            value: function findAssertionByAssertionNode(assertionNode) {
                var assertion = this.assertions.find(function(assertion) {
                    var assertionNodeMatches = assertion.matchNode(assertionNode);
                    if (assertionNodeMatches) {
                        return true;
                    }
                }) || null;
                return assertion;
            }
        },
        {
            key: "findReferenceByMetavariableNode",
            value: function findReferenceByMetavariableNode(metavariableNode) {
                var reference = this.references.find(function(reference) {
                    var referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);
                    if (referenceMatcheMetavariableNode) {
                        return true;
                    }
                }) || null;
                return reference;
            }
        },
        {
            key: "findSubstitutionBySubstitutionNode",
            value: function findSubstitutionBySubstitutionNode(substitutionNode) {
                var substitution = this.substitutions.find(function(substitution) {
                    var substitutionNodeMatches = substitution.matchNode(substitutionNode);
                    if (substitutionNodeMatches) {
                        return true;
                    }
                }) || null;
                return substitution;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var terms = [], frames = [], statements = [], assertions = [], references = [], substitutions = [], emphemeralContext = new EphemeralContext(context, terms, frames, statements, assertions, references, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return EphemeralContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNoYWluQ29udGV4dCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcGhlbWVyYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMudGVybXMsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lQSA9IGZyYW1lLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5mcmFtZXMsIChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3RhdGVtZW50cywgKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb0ZyYW1lQiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmFzc2VydGlvbnMsIChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMucmVmZXJlbmNlcywgKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaE5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hOb2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2VzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwidGVybXMiLCJmcmFtZXMiLCJzdGF0ZW1lbnRzIiwiYXNzZXJ0aW9ucyIsInJlZmVyZW5jZXMiLCJzdWJzdGl0dXRpb25zIiwiY2hhaW5Db250ZXh0IiwiZ2V0Q29udGV4dCIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybUEiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInRyYWNlIiwicHVzaCIsImFkZEZyYW1lIiwiZnJhbWUiLCJmcmFtZUEiLCJmcmFtZVN0cmluZyIsImZyYW1lQiIsImZyYW1lQUVxdWFsVG9GcmFtZUIiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFFcXVhbFRvRnJhbWVCIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uQSIsImFzc2VydGlvblN0cmluZyIsImFzc2VydGlvbkIiLCJhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIiLCJhZGRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VBIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlQiIsInJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJmaW5kIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwiZnJvbU5vdGhpbmciLCJlbXBoZW1lcmFsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7dUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjthQUFNQSxpQkFDUEcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsYUFBYTtnQ0FEbEVUO1FBRWpCLElBQUksQ0FBQ0csT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUVyQixPQUFPQyxJQUFBQSxxQkFBWSxFQUFDLElBQUk7O2tCQVZQVjs7WUFhbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1IsT0FBTztZQUNyQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElB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