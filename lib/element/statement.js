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
    function Statement() {
        _class_call_check(this, Statement);
        return _call_super(this, Statement, arguments);
    }
    _create_class(Statement, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var node = this.getNode(), statementNode = node; ///
                return statementNode;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var sttaementNode = this.getStatementNode(), metavariableName = sttaementNode.getMetavariableName();
                return metavariableName;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var statementNode = this.getStatementNode(), singular = statementNode.isSingular();
                return singular;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeA = statementNode; ///
                statementNode = this.getStatementNode();
                var statementNodeB = statementNode, statementNodeAAMatchesStatementBNodeB = statementNodeA.match(statementNodeB), equalTo = statementNodeAAMatchesStatementBNodeB; ///
                return equalTo;
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                var comparesToMetavariableName = false;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableNameA = metavariableName ///
                    ;
                    metavariableName = this.getMetavariableName();
                    var metavariableNameB = metavariableName; ///
                    comparesToMetavariableName = metavariableNameA === metavariableNameB;
                }
                return comparesToMetavariableName;
            }
        },
        {
            key: "findValidStatment",
            value: function findValidStatment(context) {
                var statementNode = this.getStatementNode(), statement = context.findStatementByStatementNode(statementNode), validStatement = statement; ///
                return validStatement;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(statement) {
                var statementNode = statement.getNode(), statementNodeMatches = this.matchStatementNode(statementNode), equalTo = statementNodeMatches; ///
                return equalTo;
            }
        },
        {
            key: "isTermContained",
            value: function isTermContained(term, context) {
                var termContained;
                var termString = term.getString(), statementString = this.getString(); ///
                context.trace("Is the '".concat(termString, "' term contained in the '").concat(statementString, "' statement..."));
                var statementNode = this.getStatementNode(), statementNodeTermNodes = statementNode.getTermNodes();
                termContained = statementNodeTermNodes.some(function(statementNodeTermNode) {
                    var statementNodeTermNodeMatches = term.matchTermNode(statementNodeTermNode);
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
                var statementNode = this.getStatementNode(), statementNodeFrameNodes = statementNode.getFrameNodes();
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
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                var comparesToMetavariableName;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableName;
                    metavariableName = metavariable.getName();
                    var metavariableNameA = metavariableName; ///
                    metavariableName = this.getMetavariableName();
                    var metavariableNameB = metavariableName; ///
                    comparesToMetavariableName = metavariableNameA === metavariableNameB;
                }
                return comparesToMetavariableName;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var _this = this;
                var statement = null;
                var statementString = this.getString(); ///
                context.trace("Validating the '".concat(statementString, "' statement..."));
                var validStatement = this.findValidStatment(context);
                if (validStatement !== null) {
                    statement = validStatement; ///
                    context.debug("...the '".concat(statementString, "' statement is alrady valid."));
                } else {
                    var validates = _validation.validateStatements.some(function(validateStatement) {
                        var statement = _this, statementValidates = validateStatement(statement, stated, context);
                        if (statementValidates) {
                            return true;
                        }
                    });
                    if (validates) {
                        statement = this; ///
                        context.addStatement(statement);
                        context.debug("...validated the '".concat(statementString, "' statement."));
                    }
                }
                return statement;
            }
        },
        {
            key: "validateGivenMetaType",
            value: function validateGivenMetaType(metaType, stated, context) {
                var validatesGivenMetaType = false;
                var metaTypeString = metaType.getString(), statementString = this.getString(); ///
                context.trace("Validating the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var validates = this.validate(stated, context);
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
            value: function unifySubproof(subproof, generalContext, specificContext) {
                var subproofUnifies = false;
                var statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode(), assertionNode = subproofAssertionNode; ///
                if (assertionNode !== null) {
                    var context = generalContext, assertion = context.findAssertionByAssertionNode(assertionNode), subproofAssertion = assertion; ///
                    var subproofString = subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                    var subproofStatements = subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, generalContext, specificContext);
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
            value: function unifyStatement(statement, generalContext, specificContext) {
                var statementUnifies;
                var context = specificContext, generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
                context.trace("Unifying the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement..."));
                statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(generalContext, specificContext) {
                var unifiesIndependently = false;
                var context = specificContext, statementString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement independently..."));
                var statementNode = this.getStatementNode(), definedAssertionNode = statementNode.getDefinedAssertionNode(), containedAssertionNode = statementNode.getContainedAssertionNode();
                if (definedAssertionNode !== null || containedAssertionNode !== null) {
                    var context1 = generalContext, assertionNode = definedAssertionNode || containedAssertionNode, assertion = context1.findAssertionByAssertionNode(assertionNode), assertionUnifiesIndependently = assertion.unifyIndependently(generalContext, specificContext);
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
                debugger;
            }
        }
    ]);
    return Statement;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Statement, "name", "Statement"), _Statement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgeyBtYXRjaCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IHN0dGFlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc3R0YWVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gc3RhdGVtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVBQU1hdGNoZXNTdGF0ZW1lbnRCTm9kZUIgPSBzdGF0ZW1lbnROb2RlQS5tYXRjaChzdGF0ZW1lbnROb2RlQiksXG4gICAgICAgICAgZXF1YWxUbyA9IHN0YXRlbWVudE5vZGVBQU1hdGNoZXNTdGF0ZW1lbnRCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBmaW5kVmFsaWRTdGF0bWVudChjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICB2YWxpZFN0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU3RhdGVtZW50O1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlVGVybU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZXMoKTtcblxuICAgIHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnROb2RlVGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHN0YXRlbWVudE5vZGVUZXJtTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1Db250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVDb250YWluZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lTm9kZXMoKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVDb250YWluZWQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3RhdGVtZW50ID0gdGhpcy5maW5kVmFsaWRTdGF0bWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gdmFsaWRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIGFscmFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnRzLnNvbWUoKHZhbGlkYXRlU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZW1lbnQsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB2YWxpZGF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZTsgIC8vL1xuXG4gICAgaWYgKGFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZXMgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB8fCAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gKGRlZmluZWRBc3NlcnRpb25Ob2RlIHx8IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiZGVmaW5lIiwiU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdHRhZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlQUFNYXRjaGVzU3RhdGVtZW50Qk5vZGVCIiwiZXF1YWxUbyIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiZmluZFZhbGlkU3RhdG1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInZhbGlkU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsImFkZFN0YXRlbWVudCIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJ0b0pTT04iLCJzdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7OEJBVndCO3lCQUNPO3dCQUVSO3FCQUNROzBCQUNJOzZCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0lBRWYsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGdCQUFnQkYsTUFBTSxHQUFHO2dCQUUvQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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