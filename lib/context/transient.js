"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TransientContext;
    }
});
var _necessary = require("necessary");
var _context = require("../utilities/context");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var extract = _necessary.arrayUtilities.extract, compress = _necessary.arrayUtilities.compress;
var TransientContext = /*#__PURE__*/ function() {
    function TransientContext(context, terms, frames, statements, assertions, references, substitutions) {
        _class_call_check(this, TransientContext);
        this.context = context;
        this.terms = terms;
        this.frames = frames;
        this.statements = statements;
        this.assertions = assertions;
        this.references = references;
        this.substitutions = substitutions;
        return (0, _context.chainContext)(this);
    }
    _create_class(TransientContext, [
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
                context.trace("ADded the '".concat(termString, "' term to the context."));
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
                    var substitutionB = substitution, substituionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substituionAEqualToSubstitutionB) {
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
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.context.getVariables(nested);
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.context.addVariable(variable, nested);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.context.findVariableByVariableIdentifier(variableIdentifier, nested);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return this.context.findVariableByVariableIdentifier(variableIdentifier, nested);
            }
        },
        {
            key: "merge",
            value: function merge(context) {
                var terms = context.getTerms(), frames = context.getFrames(), statements = context.getStatements(), assertions = context.getAssertions(), references = context.getReferences(), substitutions = context.getSubstitutions();
                this.terms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                this.frames = _to_consumable_array(this.frames).concat(_to_consumable_array(frames));
                this.statements = _to_consumable_array(this.statements).concat(_to_consumable_array(statements));
                this.assertions = _to_consumable_array(this.assertions).concat(_to_consumable_array(assertions));
                this.references = _to_consumable_array(this.references).concat(_to_consumable_array(references));
                this.substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                compress(this.terms, function(termA, termB) {
                    var termAEqualToTermB = termA.isEqualTo(termB);
                    if (!termAEqualToTermB) {
                        return true;
                    }
                });
                compress(this.frames, function(frameA, frameB) {
                    var frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (!frameAEqualToFrameB) {
                        return true;
                    }
                });
                compress(this.statements, function(statementA, statementB) {
                    var statementAEqualToStatementB = statementA.isEqualTo(statementB);
                    if (!statementAEqualToStatementB) {
                        return true;
                    }
                });
                compress(this.assertions, function(assertionA, assertionB) {
                    var assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
                    if (!assertionAEqualToAssertionB) {
                        return true;
                    }
                });
                compress(this.references, function(referenceA, referenceB) {
                    var referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
                    if (!referenceAEqualToReferenceB) {
                        return true;
                    }
                });
                compress(this.substitutions, function(substitutionA, substitutionB) {
                    var substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualToSubstitutionB) {
                        return true;
                    }
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var terms = [], frames = [], statements = [], assertions = [], references = [], substitutions = [], transientContext = new TransientContext(context, terms, frames, statements, assertions, references, substitutions);
                return transientContext;
            }
        },
        {
            key: "fromTermsAndFrames",
            value: function fromTermsAndFrames(terms, frames, context) {
                var statements = [], assertions = [], references = [], substitutions = [], transientContext = new TransientContext(context, terms, frames, statements, assertions, references, substitutions);
                return transientContext;
            }
        }
    ]);
    return TransientContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3RyYW5zaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNoYWluQ29udGV4dCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpZW50Q29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIHN0YXRlbWVudHMsIGFzc2VydGlvbnMsIHJlZmVyZW5jZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnRlcm1zLCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQURkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuZnJhbWVzLCAoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lQiA9IGZyYW1lLCAvLy9cbiAgICAgICAgICAgIGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG5cbiAgICAgIGlmIChmcmFtZUFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnN0YXRlbWVudHMsIChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50QUVxdWFsVG9GcmFtZUIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5hc3NlcnRpb25zLCAoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25CID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IGFzc2VydGlvbkEuaXNFcXVhbFRvKGFzc2VydGlvbkIpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5yZWZlcmVuY2VzLCAocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VCID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiA9IHJlZmVyZW5jZUEuaXNFcXVhbFRvKHJlZmVyZW5jZUIpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dWlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaE5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hOb2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKG5lc3RlZCk7IH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkID0gdHJ1ZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7IH1cblxuICBtZXJnZShjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBjb250ZXh0LmdldFRlcm1zKCksXG4gICAgICAgICAgZnJhbWVzID0gY29udGV4dC5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBjb250ZXh0LmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICB0aGlzLnRlcm1zID0gW1xuICAgICAgLi4udGhpcy50ZXJtcyxcbiAgICAgIC4uLnRlcm1zXG4gICAgXTtcblxuICAgIHRoaXMuZnJhbWVzID0gW1xuICAgICAgLi4udGhpcy5mcmFtZXMsXG4gICAgICAuLi5mcmFtZXNcbiAgICBdO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gW1xuICAgICAgLi4udGhpcy5zdGF0ZW1lbnRzLFxuICAgICAgLi4uc3RhdGVtZW50c1xuICAgIF07XG5cbiAgICB0aGlzLmFzc2VydGlvbnMgPSBbXG4gICAgICAuLi50aGlzLmFzc2VydGlvbnMsXG4gICAgICAuLi5hc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHRoaXMucmVmZXJlbmNlcyA9IFtcbiAgICAgIC4uLnRoaXMucmVmZXJlbmNlcyxcbiAgICAgIC4uLnJlZmVyZW5jZXNcbiAgICBdO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gW1xuICAgICAgLi4udGhpcy5zdWJzdGl0dXRpb25zLFxuICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnRlcm1zLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyh0aGlzLmZyYW1lcywgKGZyYW1lQSwgZnJhbWVCKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuXG4gICAgICBpZiAoIWZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyh0aGlzLnN0YXRlbWVudHMsIChzdGF0ZW1lbnRBLCBzdGF0ZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyh0aGlzLmFzc2VydGlvbnMsIChhc3NlcnRpb25BLCBhc3NlcnRpb25CKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKCFhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyh0aGlzLnJlZmVyZW5jZXMsIChyZWZlcmVuY2VBLCByZWZlcmVuY2VCKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcblxuICAgICAgaWYgKCFyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb21wcmVzcyh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIHRyYW5zaWVudENvbnRleHQgPSBuZXcgVHJhbnNpZW50Q29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2VzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiB0cmFuc2llbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtc0FuZEZyYW1lcyh0ZXJtcywgZnJhbWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIHRyYW5zaWVudENvbnRleHQgPSBuZXcgVHJhbnNpZW50Q29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2VzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiB0cmFuc2llbnRDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVHJhbnNpZW50Q29udGV4dCIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwic3RhdGVtZW50cyIsImFzc2VydGlvbnMiLCJyZWZlcmVuY2VzIiwic3Vic3RpdHV0aW9ucyIsImNoYWluQ29udGV4dCIsImdldENvbnRleHQiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldFN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1BIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJ0cmFjZSIsInB1c2giLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb0ZyYW1lQiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJmaW5kIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJtZXJnZSIsInN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImZyb21Ob3RoaW5nIiwidHJhbnNpZW50Q29udGV4dCIsImZyb21UZXJtc0FuZEZyYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7dUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxVQUFzQkMseUJBQWMsQ0FBcENELFNBQVNFLFdBQWFELHlCQUFjLENBQTNCQztBQUVGLElBQUEsQUFBTUgsaUNBQU47YUFBTUEsaUJBQ1BJLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGFBQWE7Z0NBRGxFVjtRQUVqQixJQUFJLENBQUNJLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFFckIsT0FBT0MsSUFBQUEscUJBQVksRUFBQyxJQUFJOztrQkFWUFg7O1lBYW5CWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLE9BQU87WUFDckI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLEtBQUs7WUFDbkI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLE1BQU07WUFDcEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FB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