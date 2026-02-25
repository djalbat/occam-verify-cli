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
var _context = require("../utilities/context");
var _unify = require("../process/unify");
var _validation = require("../utilities/validation");
var _instantiate = require("../process/instantiate");
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
                var statement = (0, _context.literally)(function(context) {
                    var string = json.string, statementNode = (0, _instantiate.instantiateStatement)(string, context), node = statementNode, statement = new Statement(context, string, node);
                    return statement;
                }, context);
                return statement;
            }
        }
    ]);
    return Statement;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Statement, "name", "Statement"), _Statement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3Qgc3R0YWVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBzdHRhZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBzdGF0ZW1lbnROb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUFBTWF0Y2hlc1N0YXRlbWVudEJOb2RlQiA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3RhdGVtZW50Tm9kZUFBTWF0Y2hlc1N0YXRlbWVudEJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVUZXJtTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlcygpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVOb2RlcygpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnROb2RlRnJhbWVOb2Rlcy5zb21lKChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hOb2RlKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRTdGF0ZW1lbnQgPSB0aGlzLmZpbmRWYWxpZFN0YXRtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB2YWxpZFN0YXRlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgYWxyYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudHMuc29tZSgodmFsaWRhdGVTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlbWVudCwgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IHZhbGlkYXRlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlOyAgLy8vXG5cbiAgICBpZiAoYXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFN0cmluZyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmcgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmICgoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHx8IChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSAoZGVmaW5lZEFzc2VydGlvbk5vZGUgfHwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50O1xuXG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsImRlZmluZSIsIlN0YXRlbWVudCIsImdldFN0YXRlbWVudE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3R0YWVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50Tm9kZUFBTWF0Y2hlc1N0YXRlbWVudEJOb2RlQiIsImVxdWFsVG8iLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImZpbmRWYWxpZFN0YXRtZW50IiwiY29udGV4dCIsInN0YXRlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJ2YWxpZFN0YXRlbWVudCIsImlzRXF1YWxUbyIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMiLCJnZXRGcmFtZU5vZGVzIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZSIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnRzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJhZGRTdGF0ZW1lbnQiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50IiwidG9KU09OIiwic3RyaW5nIiwianNvbiIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVTdGF0ZW1lbnQiLCJFbGVtZW50IiwibmFtZSJd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