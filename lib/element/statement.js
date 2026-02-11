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
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _elements = require("../elements");
var _unify = require("../process/unify");
var _validation = require("../utilities/validation");
var _metaTypeNames = require("../metaTypeNames");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Statement;
var match = _necessary.arrayUtilities.match, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var _default = (0, _elements.define)((_Statement = /*#__PURE__*/ function(Element) {
    _inherits(Statement, Element);
    function Statement(context, string, node) {
        _class_call_check(this, Statement);
        return _call_super(this, Statement, [
            context,
            string,
            node
        ]);
    }
    _create_class(Statement, [
        {
            key: "isSingular",
            value: function isSingular() {
                var node = this.getNode(), singular = node.isSingular();
                return singular;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var node = this.getNode(), metavariableName = node.getMetavariableName();
                return metavariableName;
            }
        },
        {
            key: "isTermContained",
            value: function isTermContained(term, context) {
                var termContained;
                var node = this.getNode(), termString = term.getString(), statementString = this.getString(); ///
                context.trace("Is the '".concat(termString, "' term contained in the '").concat(statementString, "' statement..."));
                var statementNode = node, statementNodeTermNodes = statementNode.getTermNodes();
                termContained = statementNodeTermNodes.some(function(statementNodeTermNode) {
                    var statementNodeTermNodeMatches = term.matchNode(statementNodeTermNode);
                    if (statementNodeTermNodeMatches) {
                        return true;
                    }
                });
                if (termContained) {
                    context.debug("...the '".concat(termString, "' term is contained in the '").concat(statementString, "' statement."));
                }
                return termContained;
            }
        },
        {
            key: "isFrameContained",
            value: function isFrameContained(frame, context) {
                var frameContained;
                var frameString = frame.getString(), statementString = this.getString(); ///
                context.trace("Is the '".concat(frameString, "' frame contained in the '").concat(statementString, "' statement..."));
                var node = this.getNode(), statementNode = node, statementNodeFrameNodes = statementNode.getFrameNodes();
                frameContained = statementNodeFrameNodes.some(function(statementNodeFrameNode) {
                    var statementNodeFrameNodeMatches = frame.matchNode(statementNodeFrameNode);
                    if (statementNodeFrameNodeMatches) {
                        return true;
                    }
                });
                if (frameContained) {
                    context.debug("...the '".concat(frameString, "' frame is contained in the '").concat(statementString, "' statement."));
                }
                return frameContained;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable, context) {
                var metavariableEqualToMetavariable;
                var singular = this.isSingular();
                if (singular) {
                    var node = this.getNode(), metavariableA = metavariable, singularMetavariableNode = node.getSingularMetavariableNode(), metavariableName = singularMetavariableNode.getMetavariableName();
                    metavariable = context.findMetavariableByMetavariableName(metavariableName);
                    var metavariableB = metavariable, equalTo = metavariableA.isEqualTo(metavariableB);
                    metavariableEqualToMetavariable = equalTo; ///
                }
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(statement) {
                var node = this.getNode(), statementNode = statement.getNode(), nodeMatchesStatementNode = node.match(statementNode), equalTo = nodeMatchesStatementNode; ///
                return equalTo;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var comparesToParamter = false;
                var singular = this.isSingular();
                if (singular) {
                    var parameterName = parameter.getName();
                    if (parameterName !== null) {
                        var metavariableName = this.getMetavariableName();
                        if (parameterName === metavariableName) {
                            comparesToParamter = true;
                        }
                    }
                }
                return comparesToParamter;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var _this = this;
                var validates;
                var statementString = this.getString(); ///
                context.trace("Validating the '".concat(statementString, "' statement..."));
                validates = _validation.validateStatements.some(function(validateStatement) {
                    var statement = _this, statementValidates = validateStatement(statement, assignments, stated, context);
                    if (statementValidates) {
                        return true;
                    }
                });
                if (validates) {
                    var statement = this; ///
                    context.addStatement(statement);
                    context.debug("...validated the '".concat(statementString, "' statement."));
                }
                return validates;
            }
        },
        {
            key: "validateGivenMetaType",
            value: function validateGivenMetaType(metaType, assignments, stated, context) {
                var validatesGivenMetaType = false;
                var metaTypeString = metaType.getString(), statementString = this.getString(); ///
                context.trace("Validating the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var validates = this.validate(assignments, stated, context);
                    validatesGivenMetaType = validates; ///
                }
                if (validatesGivenMetaType) {
                    context.debug("...validated the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type."));
                }
                return validatesGivenMetaType;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies = false;
                var node = this.getNode(), statementNode = node, subproofAssertionNode = statementNode.getSubproofAssertionNode(), assertionNode = subproofAssertionNode; ///
                if (assertionNode !== null) {
                    var context = generalContext, assertion = context.findAssertionByAssertionNode(assertionNode), subproofAssertion = assertion; ///
                    var subproofString = subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                    var subproofStatements = subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                        if (statementUnifies) {
                            return true;
                        }
                    });
                    if (subproofUnifies) {
                        context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var context = specificContext, generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
                context.trace("Unifying the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement..."));
                statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiesIndependently = false;
                var context = specificContext, statementString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement independently..."));
                var node = this.getNode(), statementNode = node, definedAssertionNode = statementNode.getDefinedAssertionNode(), containedAssertionNode = statementNode.getContainedAssertionNode();
                if (definedAssertionNode !== null || containedAssertionNode !== null) {
                    var context1 = generalContext, assertionNode = definedAssertionNode || containedAssertionNode, assertion = context1.findAssertionByAssertionNode(assertionNode), assertionUnifiesIndependently = assertion.unifyIndependently(substitutions, generalContext, specificContext);
                    if (assertionUnifiesIndependently) {
                        unifiesIndependently = true;
                    }
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(statementString, "' statement independently."));
                }
                return unifiesIndependently;
            }
        },
        {
            key: "compareSubproofOrProofAssertions",
            value: function compareSubproofOrProofAssertions(subproofOrProofAssertions, context) {
                var _this = this;
                var comparesToSubproofOrProofAssertions;
                comparesToSubproofOrProofAssertions = backwardsSome(subproofOrProofAssertions, function(subproofOrProofAssertion) {
                    var statement = _this, subproofOrProofAssertionComparesToStatement = subproofOrProofAssertion.compareStatement(statement, context);
                    if (subproofOrProofAssertionComparesToStatement) {
                        return true;
                    }
                });
                return comparesToSubproofOrProofAssertions;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var string = this.getString(), json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
            ///
            }
        }
    ]);
    return Statement;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Statement, "name", "Statement"), _Statement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgeyBtYXRjaCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gbm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGVzKCk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZVRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlVGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKHN0YXRlbWVudE5vZGVUZXJtTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1Db250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVDb250YWluZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBub2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuXG4gICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gZXF1YWxUbzsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBub2RlTWF0Y2hlc1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudHMuc29tZSgodmFsaWRhdGVTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB2YWxpZGF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7ICAvLy9cblxuICAgIGlmIChhc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmICgoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHx8IChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSAoZGVmaW5lZEFzc2VydGlvbk5vZGUgfHwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiZGVmaW5lIiwiU3RhdGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJpc1Npbmd1bGFyIiwiZ2V0Tm9kZSIsInNpbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVCIiwiZXF1YWxUbyIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsIm5vZGVNYXRjaGVzU3RhdGVtZW50Tm9kZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsImFkZFN0YXRlbWVudCIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzhCQVZ3Qjt5QkFDTzt3QkFFUjtxQkFDUTswQkFDSTs2QkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBUUEsUUFBeUJDLHlCQUFjLENBQXZDRCxPQUFPRSxnQkFBa0JELHlCQUFjLENBQWhDQztJQUVmLFdBQWVDLElBQUFBLGdCQUFNLDhCQUFDOzthQUFNQyxVQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEUEg7UUFFeEIsT0FBQSxrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxPQUFPLElBQUksQ0FBQ0UsT0FBTyxJQUNuQkMsV0FBV0gsS0FBS0MsVUFBVTtnQkFFaEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixPQUFPLElBQUksQ0FBQ0UsT0FBTyxJQUNuQkcsbUJBQW1CTCxLQUFLSSxtQkFBbUI7Z0JBRWpELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxJQUFJLEVBQUVULE9BQU87Z0JBQzNCLElBQUlVO2dCQUVKLElBQU1SLE9BQU8sSUFBSSxDQUFD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