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
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
        return _this;
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
                context.trace("Adding the '".concat(termString, "' term to the ephemeral context..."));
                var termB = this.terms.find(function(term) {
                    var termB = term, termAEqualToTermB = termA.isEqualTo(termB);
                    if (termAEqualToTermB) {
                        return true;
                    }
                }) || null;
                if (termB !== null) {
                    context.trace("The '".concat(termString, "' term has already been added to the ephemeral context."));
                } else {
                    this.terms.push(term);
                    context.debug("...added the '".concat(termString, "' term to the ephemeral context."));
                }
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var frameA = frame, context = this, frameString = frame.getString();
                context.trace("Adding the '".concat(frameString, "' frame to the ephemeral context..."));
                var frameB = this.frames.find(function(frame) {
                    var frameB = frame, frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (frameAEqualToFrameB) {
                        return true;
                    }
                }) || null;
                if (frameB !== null) {
                    context.trace("The '".concat(frameString, "' frame has already been added to the ephemeral context."));
                } else {
                    this.frames.push(frame);
                    context.debug("...added the '".concat(frameString, "' frame to the ephemeral context."));
                }
            }
        },
        {
            key: "addStatement",
            value: function addStatement(statement) {
                var context = this, statementA = statement, statementString = statement.getString();
                context.trace("Adding the '".concat(statementString, "' statement to the ephemeral context..."));
                var statementB = this.statements.find(function(statement) {
                    var statementB = statement, statementAEqualToStatementB = statementA.isEqualTo(statementB);
                    if (statementAEqualToStatementB) {
                        return true;
                    }
                }) || null;
                if (statementB !== null) {
                    context.trace("The '".concat(statementString, "' statement has already been added to the ephemeral context."));
                } else {
                    this.statements.push(statement);
                    context.debug("...added the '".concat(statementString, "' statement to the ephemeral context."));
                }
            }
        },
        {
            key: "addAssertion",
            value: function addAssertion(assertion) {
                var context = this, assertionA = assertion, assertionString = assertion.getString();
                context.trace("Adding the '".concat(assertionString, "' assertion to the ephemeral context..."));
                var assertionB = this.assertions.find(function(assertion) {
                    var assertionB = assertion, assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
                    if (assertionAEqualToAssertionB) {
                        return true;
                    }
                }) || null;
                if (assertionB !== null) {
                    context.trace("The '".concat(assertionString, "' assertion has already been added to the ephemeral context."));
                } else {
                    this.assertions.push(assertion);
                    context.debug("...added the '".concat(assertionString, "' assertion to the ephemeral context."));
                }
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this, referenceA = reference, referenceString = reference.getString();
                context.trace("Adding the '".concat(referenceString, "' reference to the ephemeral context..."));
                var referenceB = this.references.find(function(reference) {
                    var referenceB = reference, referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
                    if (referenceAEqualToReferenceB) {
                        return true;
                    }
                }) || null;
                if (referenceB !== null) {
                    context.trace("The '".concat(referenceString, "' reference has already been added to the ephemeral context."));
                } else {
                    this.references.push(reference);
                    context.debug("...added the '".concat(referenceString, "' reference to the ephemeral context."));
                }
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                context.trace("Adding the '".concat(substitutionString, "' substitution to the ephemeral context..."));
                var substitutionB = this.substitutions.find(function(substitution) {
                    var substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToSubstitutionB) {
                        return true;
                    }
                }) || null;
                if (substitutionB !== null) {
                    context.trace("The '".concat(substitutionString, "' substitution has already been added to the ephemeral context."));
                } else {
                    this.substitutions.push(substitution);
                    context.debug("...added the '".concat(substitutionString, "' substitution to the ephemeral context."));
                }
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
            key: "isTermPresentByTermNode",
            value: function isTermPresentByTermNode(termNode) {
                var termPresent = this.terms.some(function(term) {
                    var termNodeMatches = term.matchTermNode(termNode);
                    if (termNodeMatches) {
                        return true;
                    }
                });
                return termPresent;
            }
        },
        {
            key: "isFramePresentByFrameNode",
            value: function isFramePresentByFrameNode(frameNode) {
                var framePresent = this.frames.some(function(frame) {
                    var frameNodeMatches = frame.matchFrameNode(frameNode);
                    if (frameNodeMatches) {
                        return true;
                    }
                });
                return framePresent;
            }
        },
        {
            key: "isStatementPresentByStatementNode",
            value: function isStatementPresentByStatementNode(statementNode) {
                var statementPresent = this.statements.some(function(statement) {
                    var statementNodeMatches = statement.matchStatementNode(statementNode);
                    if (statementNodeMatches) {
                        return true;
                    }
                });
                return statementPresent;
            }
        },
        {
            key: "isAssertionPresentByAssertionNode",
            value: function isAssertionPresentByAssertionNode(assertionNode) {
                var assertionPresent = this.assertions.some(function(assertion) {
                    var assertionNodeMatches = assertion.matchAssertionNode(assertionNode);
                    if (assertionNodeMatches) {
                        return true;
                    }
                });
                return assertionPresent;
            }
        },
        {
            key: "isReferencePresentByReferenceNode",
            value: function isReferencePresentByReferenceNode(referenceNode) {
                var referencePresent = this.references.some(function(reference) {
                    var referenceNodeMatches = reference.matchReferenceNode(referenceNode);
                    if (referenceNodeMatches) {
                        return true;
                    }
                });
                return referencePresent;
            }
        },
        {
            key: "isSubstitutionPresentBySubstitutionNode",
            value: function isSubstitutionPresentBySubstitutionNode(substitutionNode) {
                var substitutionPresent = this.substitutions.some(function(substitution) {
                    var substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);
                    if (substitutionNodeMatches) {
                        return true;
                    }
                });
                return substitutionPresent;
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
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2VzLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1CID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZUIgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmcmFtZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRCID0gdGhpcy5zdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25CID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc2VydGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlQSA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VCID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZmVyZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hOb2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1QcmVzZW50ID0gdGhpcy50ZXJtcy5zb21lKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZVByZXNlbnQgPSB0aGlzLmZyYW1lcy5zb21lKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50UHJlc2VudCA9IHRoaXMuc3RhdGVtZW50cy5zb21lKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvblByZXNlbnQgPSB0aGlzLmFzc2VydGlvbnMuc29tZSgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGFzc2VydGlvbi5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2VQcmVzZW50ID0gdGhpcy5yZWZlcmVuY2VzLnNvbWUoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSByZWZlcmVuY2UubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHRoaXMuc3Vic3RpdHV0aW9ucy5zb21lKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgc3RhdGVtZW50cywgYXNzZXJ0aW9ucywgcmVmZXJlbmNlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwic3RhdGVtZW50cyIsImFzc2VydGlvbnMiLCJyZWZlcmVuY2VzIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybUEiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtQiIsImZpbmQiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInB1c2giLCJkZWJ1ZyIsImFkZEZyYW1lIiwiZnJhbWUiLCJmcmFtZUEiLCJmcmFtZVN0cmluZyIsImZyYW1lQiIsImZyYW1lQUVxdWFsVG9GcmFtZUIiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsInNvbWUiLCJtYXRjaFRlcm1Ob2RlIiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsIm1hdGNoRnJhbWVOb2RlIiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJpc1JlZmVyZW5jZVByZXNlbnRCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImZyb21Ob3RoaW5nIiwiZW1waGVtZXJhbENvbnRleHQiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGFBQWE7Z0NBRGxFUDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsS0FBSyxH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