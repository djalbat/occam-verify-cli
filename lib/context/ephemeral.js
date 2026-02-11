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
var _occamlanguages = require("occam-languages");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var extract = _necessary.arrayUtilities.extract, chainContext = _occamlanguages.contextUtilities.chainContext;
var EphemeralContext = /*#__PURE__*/ function(Context) {
    _inherits(EphemeralContext, Context);
    function EphemeralContext(context, terms, frames, statements, assertions, references, substitutions) {
        _class_call_check(this, EphemeralContext);
        var _this;
        _this = _call_super(this, EphemeralContext, [
            context
        ]);
        _this.terms = terms;
        _this.frames = frames;
        _this.statements = statements;
        _this.assertions = assertions;
        _this.references = references;
        _this.substitutions = substitutions;
        return _possible_constructor_return(_this, chainContext(_this));
    }
    _create_class(EphemeralContext, [
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
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBDb250ZXh0LCBjb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5jb25zdCB7IGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwaGVtZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMudGVybXMsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lQSA9IGZyYW1lLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGV4dHJhY3QodGhpcy5mcmFtZXMsIChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBleHRyYWN0KHRoaXMuc3RhdGVtZW50cywgKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb0ZyYW1lQiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLmFzc2VydGlvbnMsIChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlQSA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnJlZmVyZW5jZXMsIChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZXh0cmFjdCh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hOb2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsInN0YXRlbWVudHMiLCJhc3NlcnRpb25zIiwicmVmZXJlbmNlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldFN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1BIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJ0cmFjZSIsInB1c2giLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb0ZyYW1lQiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwiZmluZCIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImZyb21Ob3RoaW5nIiwiZW1waGVtZXJhbENvbnRleHQiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTs4QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQsU0FDRixBQUFFRSxlQUFpQkMsZ0NBQWdCLENBQWpDRDtBQUVPLElBQUEsQUFBTUgsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BLLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGFBQWE7Z0NBRGxFWDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEs7O1FBRU4sTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxhQUFhLEdBQUdBO1FBRXJCLDJDQUFPUjs7a0JBWFVIOztZQWNuQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9B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