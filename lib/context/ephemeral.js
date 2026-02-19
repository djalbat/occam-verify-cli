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
    function EphemeralContext(context, terms, frames, equalities, statements, assertions, references, substitutions) {
        _class_call_check(this, EphemeralContext);
        var _this;
        _this = _call_super(this, EphemeralContext, [
            context
        ]);
        _this.terms = terms;
        _this.frames = frames;
        _this.equalities = equalities;
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
            key: "getEqualities",
            value: function getEqualities() {
                return this.equalities;
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
            key: "addEquality",
            value: function addEquality(equality) {
                var equalityA = equality, context = this, equalityString = equality.getString();
                context.trace("Adding the '".concat(equalityString, "' equality to the ephemeral context..."));
                var equalityB = this.equalities.find(function(equality) {
                    var equalityB = equality, equalityAEqualToEqualityB = equalityA.isEqualTo(equalityB);
                    if (equalityAEqualToEqualityB) {
                        return true;
                    }
                }) || null;
                if (equalityB !== null) {
                    context.trace("The '".concat(equalityString, "' equality has already been added to the ephemeral context."));
                } else {
                    this.equalities.push(equality);
                    context.debug("...added the '".concat(equalityString, "' equality to the ephemeral context."));
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
                    var termNodeMatches = term.matchTermNode(termNode);
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
                    var frameNodeMatches = frame.matchFrameNode(frameNode);
                    if (frameNodeMatches) {
                        return true;
                    }
                }) || null;
                return frame;
            }
        },
        {
            key: "findEqualityByEqualityNode",
            value: function findEqualityByEqualityNode(equalityNode) {
                var equality = this.equalities.find(function(equality) {
                    var equalityNodeMatches = equality.matchEqualityNode(equalityNode);
                    if (equalityNodeMatches) {
                        return true;
                    }
                }) || null;
                return equality;
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
            key: "isEqualityPresentByEqualityNode",
            value: function isEqualityPresentByEqualityNode(equalityNode) {
                var equalityPresent = this.equalities.some(function(equality) {
                    var equalityNodeMatches = equality.matchEqualityNode(equalityNode);
                    if (equalityNodeMatches) {
                        return true;
                    }
                });
                return equalityPresent;
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
                var terms = [], frames = [], equalities = [], statements = [], assertions = [], references = [], substitutions = [], emphemeralContext = new EphemeralContext(context, terms, frames, equalities, statements, assertions, references, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return EphemeralContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2VzLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5lcXVhbGl0aWVzID0gZXF1YWxpdGllcztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgdGVybUIgPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHRlcm1CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lQSA9IGZyYW1lLCAvLy9cbiAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZUIgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuXG4gICAgICBpZiAoZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZyYW1lQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0eUIgPSB0aGlzLmVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgIGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIgPSBlcXVhbGl0eUEuaXNFcXVhbFRvKGVxdWFsaXR5Qik7XG5cbiAgICAgIGlmIChlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudEIgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25BID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25TdHJpbmcgPSBhc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbkIgPSB0aGlzLmFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25CID0gYXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IGFzc2VydGlvbkEuaXNFcXVhbFRvKGFzc2VydGlvbkIpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzZXJ0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZUIgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VCID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiA9IHJlZmVyZW5jZUEuaXNFcXVhbFRvKHJlZmVyZW5jZUIpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAocmVmZXJlbmNlQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5lcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHkubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgaWYgKGVxdWFsaXR5Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hOb2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybVByZXNlbnQgPSB0aGlzLnRlcm1zLnNvbWUoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lUHJlc2VudCA9IHRoaXMuZnJhbWVzLnNvbWUoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eVByZXNlbnQgPSB0aGlzLmVxdWFsaXRpZXMuc29tZSgoZXF1YWxpdHkpID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eS5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudFByZXNlbnQgPSB0aGlzLnN0YXRlbWVudHMuc29tZSgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25QcmVzZW50ID0gdGhpcy5hc3NlcnRpb25zLnNvbWUoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlUHJlc2VudCA9IHRoaXMucmVmZXJlbmNlcy5zb21lKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gcmVmZXJlbmNlLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblByZXNlbnQgPSB0aGlzLnN1YnN0aXR1dGlvbnMuc29tZSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBzdGF0ZW1lbnRzLCBhc3NlcnRpb25zLCByZWZlcmVuY2VzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJjb250ZXh0IiwidGVybXMiLCJmcmFtZXMiLCJlcXVhbGl0aWVzIiwic3RhdGVtZW50cyIsImFzc2VydGlvbnMiLCJyZWZlcmVuY2VzIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldFN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1BIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybUIiLCJmaW5kIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwdXNoIiwiZGVidWciLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QSIsImVxdWFsaXR5U3RyaW5nIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiIsImFkZFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uQSIsImFzc2VydGlvblN0cmluZyIsImFzc2VydGlvbkIiLCJhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIiLCJhZGRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VBIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlQiIsInJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJzb21lIiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsIm1hdGNoQXNzZXJ0aW9uTm9kZSIsImlzUmVmZXJlbmNlUHJlc2VudEJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbU5vdGhpbmciLCJlbXBoZW1lcmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQSxpQkFDUEMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxhQUFhO2dDQUQ5RVI7O2dCQUVqQixrQkFGaUJBO1lBRVhDOztRQUVOLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBVkpSOztZQWFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxLQUFLO1lBQ25COzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxVQUFVO1lBQ3hCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxVQUFVO1lBQ3hCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxVQUFVO1lBQ3hCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxVQUFVO1lBQ3hCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxhQUFhO1lBQzNCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUk7Z0JBQ1YsSUFBTUMsUUFBUUQsTUFDUmhCLFVBQVUsSUFBSSxFQUNka0IsYUFBYUYsS0FBS0csU0FBUztnQkFFakNuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsZUFBeUIsT0FBWEYsWUFBVztnQkFFeEMsSUFBTUcsUUFBUSxJQUFJLENBQUNwQixLQUFLLENBQUNxQixJQUFJLENBQUMsU0FBQ047b0JBQzdCLElBQU1LLFFBQVFMLE1BQ1JPLG9CQUFvQk4sTUFBTU8sU0FBUyxDQUFDSDtvQkFFMUMsSUFBSUUsbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sSUFBSUYsVUFBVSxNQUFNO29CQUNsQnJCLFFBQVFvQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYRixZQUFXO2dCQUNuQyxPQUFPO29CQUNMLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ3dCLElBQUksQ0FBQ1Q7b0JBRWhCaEIsUUFBUTBCLEtBQUssQ0FBQyxBQUFDLGlCQUEyQixPQUFYUixZQUFXO2dCQUM1QztZQUNGOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLEtBQUs7Z0JBQ1osSUFBTUMsU0FBU0QsT0FDYjVCLFVBQVUsSUFBSSxFQUNkOEIsY0FBY0YsTUFBTVQsU0FBUztnQkFFL0JuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsZUFBMEIsT0FBWlUsYUFBWTtnQkFFekMsSUFBTUMsU0FBUyxJQUFJLENBQUM3QixNQUFNLENBQUNvQixJQUFJLENBQUMsU0FBQ007b0JBQy9CLElBQU1HLFNBQVNILE9BQ2JJLHNCQUFzQkgsT0FBT0wsU0FBUyxDQUFDTztvQkFFekMsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sSUFBSUQsV0FBVyxNQUFNO29CQUNuQi9CLFFBQVFvQixLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaVSxhQUFZO2dCQUNwQyxPQUFPO29CQUNMLElBQUksQ0FBQzVCLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0c7b0JBRWpCNUIsUUFBUTBCLEtBQUssQ0FBQyxBQUFDLGlCQUE0QixPQUFaSSxhQUFZO2dCQUM3QztZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFFBQVE7Z0JBQ2xCLElBQU1DLFlBQVlELFVBQ1psQyxVQUFVLElBQUksRUFDZG9DLGlCQUFpQkYsU0FBU2YsU0FBUztnQkFFekNuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsZUFBNkIsT0FBZmdCLGdCQUFlO2dCQUU1QyxJQUFNQyxZQUFZLElBQUksQ0FBQ2xDLFVBQVUsQ0FBQ21CLElBQUksQ0FBQyxTQUFDWTtvQkFDdEMsSUFBTUcsWUFBWUgsVUFDWkksNEJBQTRCSCxVQUFVWCxTQUFTLENBQUNhO29CQUV0RCxJQUFJQywyQkFBMkI7d0JBQzdCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCckMsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLFFBQXNCLE9BQWZnQixnQkFBZTtnQkFDdkMsT0FBTztvQkFDTCxJQUFJLENBQUNqQyxVQUFVLENBQUNzQixJQUFJLENBQUNTO29CQUVyQmxDLFFBQVEwQixLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZlUsZ0JBQWU7Z0JBQ2hEO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTXhDLFVBQVUsSUFBSSxFQUNkeUMsYUFBYUQsV0FDYkUsa0JBQWtCRixVQUFVckIsU0FBUztnQkFFM0NuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsZUFBOEIsT0FBaEJzQixpQkFBZ0I7Z0JBRTdDLElBQU1DLGFBQWEsSUFBSSxDQUFDdkMsVUFBVSxDQUFDa0IsSUFBSSxDQUFDLFNBQUNrQjtvQkFDdkMsSUFBTUcsYUFBYUgsV0FDYkksOEJBQThCSCxXQUFXakIsU0FBUyxDQUFDbUI7b0JBRXpELElBQUlDLDZCQUE2Qjt3QkFDL0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLElBQUlELGVBQWUsTUFBTTtvQkFDdkIzQyxRQUFRb0IsS0FBSyxDQUFDLEFBQUMsUUFBdUIsT0FBaEJzQixpQkFBZ0I7Z0JBQ3hDLE9BQU87b0JBQ0wsSUFBSSxDQUFDdEMsVUFBVSxDQUFDcUIsSUFBSSxDQUFDZTtvQkFFckJ4QyxRQUFRMEIsS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCZ0IsaUJBQWdCO2dCQUNqRDtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQ3BCLElBQU05QyxVQUFVLElBQUksRUFDZCtDLGFBQWFELFdBQ2JFLGtCQUFrQkYsVUFBVTNCLFNBQVM7Z0JBRTNDbkIsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLGVBQThCLE9BQWhCNEIsaUJBQWdCO2dCQUU3QyxJQUFNQyxhQUFhLElBQUksQ0FBQzVDLFVBQVUsQ0FBQ2lCLElBQUksQ0FBQyxTQUFDd0I7b0JBQ3ZDLElBQU1HLGFBQWFILFdBQ2JJLDhCQUE4QkgsV0FBV3ZCLFNBQVMsQ0FBQ3lCO29CQUV6RCxJQUFJQyw2QkFBNkI7d0JBQy9CLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixJQUFJRCxlQUFlLE1BQU07b0JBQ3ZCakQsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLFFBQXVCLE9BQWhCNEIsaUJBQWdCO2dCQUN4QyxPQUFPO29CQUNMLElBQUksQ0FBQzNDLFVBQVUsQ0FBQ29CLElBQUksQ0FBQ3FCO29CQUVyQjlDLFFBQVEwQixLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJzQixpQkFBZ0I7Z0JBQ2pEO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTXBELFVBQVUsSUFBSSxFQUNkcUQsYUFBYUQsV0FDYkUsa0JBQWtCRixVQUFVakMsU0FBUztnQkFFM0NuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsZUFBOEIsT0FBaEJrQyxpQkFBZ0I7Z0JBRTdDLElBQU1DLGFBQWEsSUFBSSxDQUFDakQsVUFBVSxDQUFDZ0IsSUFBSSxDQUFDLFNBQUM4QjtvQkFDdkMsSUFBTUcsYUFBYUgsV0FDYkksOEJBQThCSCxXQUFXN0IsU0FBUyxDQUFDK0I7b0JBRXpELElBQUlDLDZCQUE2Qjt3QkFDL0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLElBQUlELGVBQWUsTUFBTTtvQkFDdkJ2RCxRQUFRb0IsS0FBSyxDQUFDLEFBQUMsUUFBdUIsT0FBaEJrQyxpQkFBZ0I7Z0JBQ3hDLE9BQU87b0JBQ0wsSUFBSSxDQUFDaEQsVUFBVSxDQUFDbUIsSUFBSSxDQUFDMkI7b0JBRXJCcEQsUUFBUTBCLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQjRCLGlCQUFnQjtnQkFDakQ7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLFlBQVk7Z0JBQzFCLElBQU0xRCxVQUFVLElBQUksRUFDZDJELGdCQUFnQkQsY0FDaEJFLHFCQUFxQkYsYUFBYXZDLFNBQVM7Z0JBRWpEbkIsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLGVBQWlDLE9BQW5Cd0Msb0JBQW1CO2dCQUVoRCxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDdEQsYUFBYSxDQUFDZSxJQUFJLENBQUMsU0FBQ29DO29CQUM3QyxJQUFNRyxnQkFBZ0JILGNBQ2hCSSxvQ0FBb0NILGNBQWNuQyxTQUFTLENBQUNxQztvQkFFbEUsSUFBSUMsbUNBQW1DO3dCQUNyQyxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sSUFBSUQsa0JBQWtCLE1BQU07b0JBQzFCN0QsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLFFBQTBCLE9BQW5Cd0Msb0JBQW1CO2dCQUMzQyxPQUFPO29CQUNMLElBQUksQ0FBQ3JELGFBQWEsQ0FBQ2tCLElBQUksQ0FBQ2lDO29CQUV4QjFELFFBQVEwQixLQUFLLENBQUMsQUFBQyxpQkFBbUMsT0FBbkJrQyxvQkFBbUI7Z0JBQ3BEO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxRQUFRO2dCQUN6QixJQUFNaEQsT0FBTyxJQUFJLENBQUNmLEtBQUssQ0FBQ3FCLElBQUksQ0FBQyxTQUFDTjtvQkFDNUIsSUFBTWlELGtCQUFrQmpELEtBQUtrRCxhQUFhLENBQUNGO29CQUUzQyxJQUFJQyxpQkFBaUI7d0JBQ25CLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPakQ7WUFDVDs7O1lBRUFtRCxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxTQUFTO2dCQUM1QixJQUFNeEMsUUFBUSxJQUFJLENBQUMxQixNQUFNLENBQUNvQixJQUFJLENBQUMsU0FBQ007b0JBQzlCLElBQU15QyxtQkFBbUJ6QyxNQUFNMEMsY0FBYyxDQUFDRjtvQkFFOUMsSUFBSUMsa0JBQWtCO3dCQUNwQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT3pDO1lBQ1Q7OztZQUVBMkMsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsWUFBWTtnQkFDckMsSUFBTXRDLFdBQVcsSUFBSSxDQUFDL0IsVUFBVSxDQUFDbUIsSUFBSSxDQUFDLFNBQUNZO29CQUNyQyxJQUFNdUMsc0JBQXNCdkMsU0FBU3dDLGlCQUFpQixDQUFDRjtvQkFFdkQsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT3ZDO1lBQ1Q7OztZQUVBeUMsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsYUFBYTtnQkFDeEMsSUFBTXBDLFlBQVksSUFBSSxDQUFDcEMsVUFBVSxDQUFDa0IsSUFBSSxDQUFDLFNBQUNrQjtvQkFDdEMsSUFBTXFDLHVCQUF1QnJDLFVBQVVzQyxTQUFTLENBQUNGO29CQUVqRCxJQUFJQyxzQkFBc0I7d0JBQ3hCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPckM7WUFDVDs7O1lBRUF1QyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCQyxhQUFhO2dCQUN4QyxJQUFNbEMsWUFBWSxJQUFJLENBQUN6QyxVQUFVLENBQUNpQixJQUFJLENBQUMsU0FBQ3dCO29CQUN0QyxJQUFNbUMsdUJBQXVCbkMsVUFBVWdDLFNBQVMsQ0FBQ0U7b0JBRWpELElBQUlDLHNCQUFzQjt3QkFDeEIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9uQztZQUNUOzs7WUFFQW9DLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NDLGdCQUFnQjtnQkFDOUMsSUFBTS9CLFlBQVksSUFBSSxDQUFDOUMsVUFBVSxDQUFDZ0IsSUFBSSxDQUFDLFNBQUM4QjtvQkFDdEMsSUFBTWdDLGtDQUFrQ2hDLFVBQVVpQyxxQkFBcUIsQ0FBQ0Y7b0JBRXhFLElBQUlDLGlDQUFpQzt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9oQztZQUNUOzs7WUFFQWtDLEtBQUFBO21CQUFBQSxTQUFBQSxtQ0FBbUNDLGdCQUFnQjtnQkFDakQsSUFBTTdCLGVBQWUsSUFBSSxDQUFDbkQsYUFBYSxDQUFDZSxJQUFJLENBQUMsU0FBQ29DO29CQUM1QyxJQUFNOEIsMEJBQTBCOUIsYUFBYW9CLFNBQVMsQ0FBQ1M7b0JBRXZELElBQUlDLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU85QjtZQUNUOzs7WUFFQStCLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0J6QixRQUFRO2dCQUM5QixJQUFNMEIsY0FBYyxJQUFJLENBQUN6RixLQUFLLENBQUMwRixJQUFJLENBQUMsU0FBQzNFO29CQUNuQyxJQUFNaUQsa0JBQWtCakQsS0FBS2tELGFBQWEsQ0FBQ0Y7b0JBRTNDLElBQUlDLGlCQUFpQjt3QkFDbkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPeUI7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJ4QixTQUFTO2dCQUNqQyxJQUFNeUIsZUFBZSxJQUFJLENBQUMzRixNQUFNLENBQUN5RixJQUFJLENBQUMsU0FBQy9EO29CQUNyQyxJQUFNeUMsbUJBQW1CekMsTUFBTTBDLGNBQWMsQ0FBQ0Y7b0JBRTlDLElBQUlDLGtCQUFrQjt3QkFDcEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPd0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0N0QixZQUFZO2dCQUMxQyxJQUFNdUIsa0JBQWtCLElBQUksQ0FBQzVGLFVBQVUsQ0FBQ3dGLElBQUksQ0FBQyxTQUFDekQ7b0JBQzVDLElBQU11QyxzQkFBc0J2QyxTQUFTd0MsaUJBQWlCLENBQUNGO29CQUV2RCxJQUFJQyxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT3NCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDcEIsYUFBYTtnQkFDN0MsSUFBTXFCLG1CQUFtQixJQUFJLENBQUM3RixVQUFVLENBQUN1RixJQUFJLENBQUMsU0FBQ25EO29CQUM3QyxJQUFNcUMsdUJBQXVCckMsVUFBVTBELGtCQUFrQixDQUFDdEI7b0JBRTFELElBQUlDLHNCQUFzQjt3QkFDeEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPb0I7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NuQixhQUFhO2dCQUM3QyxJQUFNb0IsbUJBQW1CLElBQUksQ0FBQy9GLFVBQVUsQ0FBQ3NGLElBQUksQ0FBQyxTQUFDN0M7b0JBQzdDLElBQU1tQyx1QkFBdUJuQyxVQUFVdUQsa0JBQWtCLENBQUNyQjtvQkFFMUQsSUFBSUMsc0JBQXNCO3dCQUN4QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9tQjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ0MsYUFBYTtnQkFDN0MsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ2xHLFVBQVUsQ0FBQ3FGLElBQUksQ0FBQyxTQUFDdkM7b0JBQzdDLElBQU1xRCx1QkFBdUJyRCxVQUFVc0Qsa0JBQWtCLENBQUNIO29CQUUxRCxJQUFJRSxzQkFBc0I7d0JBQ3hCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx3Q0FBd0NwQixnQkFBZ0I7Z0JBQ3RELElBQU1xQixzQkFBc0IsSUFBSSxDQUFDckcsYUFBYSxDQUFDb0YsSUFBSSxDQUFDLFNBQUNqQztvQkFDbkQsSUFBTThCLDBCQUEwQjlCLGFBQWFtRCxxQkFBcUIsQ0FBQ3RCO29CQUVuRSxJQUFJQyx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT29CO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWTlHLE9BQU87Z0JBQ3hCLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsYUFBYSxFQUFFLEVBQ2ZDLGFBQWEsRUFBRSxFQUNmQyxhQUFhLEVBQUUsRUFDZkMsYUFBYSxFQUFFLEVBQ2ZDLGdCQUFnQixFQUFFLEVBQ2xCd0csb0JBQW9CLElBeFlUaEgsaUJBd1k4QkMsU0FBU0MsT0FBT0MsUUFBUUMsWUFBWUMsWUFBWUMsWUFBWUMsWUFBWUM7Z0JBRXZILE9BQU93RztZQUNUOzs7V0EzWW1CaEg7RUFBeUJpSCxnQkFBTyJ9