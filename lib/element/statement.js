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
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = require("../elements");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var singular = this.isSingular();
                if (singular) {
                    var node = this.getNode();
                    metavariableName = node.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var node = this.getNode(), singular = node.isSingular();
                return singular;
            }
        },
        {
            key: "isTermContained",
            value: function isTermContained(term, context) {
                var termContained;
                var node = this.getNode(), termString = term.getString(), statementString = this.getString(); ///
                context.trace("Is the '".concat(termString, "' term contained in the '").concat(statementString, "' statement..."), node);
                var statementNode = node, statementNodeTermNodes = statementNode.getTermNodes();
                termContained = statementNodeTermNodes.some(function(statementNodeTermNode) {
                    var statementNodeTermNodeMatches = term.matchNode(statementNodeTermNode);
                    if (statementNodeTermNodeMatches) {
                        return true;
                    }
                });
                if (termContained) {
                    context.debug("...the '".concat(termString, "' term is contained in the '").concat(statementString, "' statement."), node);
                }
                return termContained;
            }
        },
        {
            key: "isFrameContained",
            value: function isFrameContained(frame, context) {
                var frameContained;
                var node = this.getNode(), frameString = frame.getString(), statementString = this.getString(); ///
                context.trace("Is the '".concat(frameString, "' frame contained in the '").concat(statementString, "' statement..."), node);
                var statementNode = node, statementNodeFrameNodes = statementNode.getFrameNodes();
                frameContained = statementNodeFrameNodes.some(function(statementNodeFrameNode) {
                    var statementNodeFrameNodeMatches = frame.matchNode(statementNodeFrameNode);
                    if (statementNodeFrameNodeMatches) {
                        return true;
                    }
                });
                if (frameContained) {
                    context.debug("...the '".concat(frameString, "' frame is contained in the '").concat(statementString, "' statement."), node);
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
            key: "validate",
            value: function validate(assignments, stated, context) {
                var _this = this;
                var validates;
                var node = this.getNode(), statementString = this.getString(); ///
                context.trace("Validating the '".concat(statementString, "' statement..."), node);
                validates = _validation.validateStatements.some(function(validateStatement) {
                    var statement = _this, statementValidates = validateStatement(statement, assignments, stated, context);
                    if (statementValidates) {
                        return true;
                    }
                });
                if (validates) {
                    var statement = this; ///
                    context.addStatement(statement);
                    context.debug("...validated the '".concat(statementString, "' statement."), node);
                }
                return validates;
            }
        },
        {
            key: "validateGivenMetaType",
            value: function validateGivenMetaType(metaType, assignments, stated, context) {
                var validatesGivenMetaType = false;
                var node = this.getNode(), metaTypeString = metaType.getString(), statementString = this.getString(); ///
                context.trace("Validating the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type..."), node);
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var validates = this.validate(assignments, stated, context);
                    validatesGivenMetaType = validates; ///
                }
                if (validatesGivenMetaType) {
                    context.debug("...validated the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type."), node);
                }
                return validatesGivenMetaType;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies = false;
                var node = this.getNode(), context = specificContext, statementNode = node, subproofAssertionNode = statementNode.getSubproofAssertionNode(), assertionNode = subproofAssertionNode; ///
                if (assertionNode !== null) {
                    var assertion = generalContext.findAssertionByAssertionNode(assertionNode), subproofAssertion = assertion; ///
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
                var generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
                specificContext.trace("Unifying the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement..."));
                statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement."));
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
                    var assertionNode = definedAssertionNode || containedAssertionNode, assertion = generalContext.findAssertionByAssertionNode(assertionNode), assertionUnifiesIndependently = assertion.unifyIndependently(substitutions, generalContext, specificContext);
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
            key: "compareStepsOrSubproofs",
            value: function compareStepsOrSubproofs(stepsOrSubproofs, context) {
                var _this = this;
                var comparesToStepsOrSubproofs;
                comparesToStepsOrSubproofs = backwardsSome(stepsOrSubproofs, function(stepOrSubproof) {
                    var statement = _this, stepOrSubproofComparesToStatement = stepOrSubproof.compareStatement(statement, context);
                    if (stepOrSubproofComparesToStatement) {
                        return true;
                    }
                });
                return comparesToStepsOrSubproofs;
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
                var string = json.string, statmentNode = (0, _instantiate.instantiateStatement)(string, context), node = statmentNode; ///,
                context = null;
                var statement = new Statement(context, string, node);
                return statement;
            }
        }
    ]);
    return Statement;
}(_wrap_native_super(_element.default)), _define_property(_Statement, "name", "Statement"), _Statement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gbm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVUZXJtTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlcygpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlVGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBub2RlLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZU5vZGVzKCk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudE5vZGVGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBub2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuXG4gICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gZXF1YWxUbzsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgbm9kZSk7XG5cbiAgICB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudHMuc29tZSgodmFsaWRhdGVTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdmFsaWRhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGUsXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlOyAgLy8vXG5cbiAgICBpZiAoYXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB8fCAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGUgPSAoZGVmaW5lZEFzc2VydGlvbk5vZGUgfHwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBnZW5lcmFsQ29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgY29tcGFyZVN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3RlcHNPclN1YnByb29mcztcblxuICAgIGNvbXBhcmVzVG9TdGVwc09yU3VicHJvb2ZzID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RlcE9yU3VicHJvb2ZDb21wYXJlc1RvU3RhdGVtZW50ID0gc3RlcE9yU3VicHJvb2YuY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2ZDb21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRtZW50Tm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHN0YXRtZW50Tm9kZTsgIC8vLyxcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJkZWZpbmUiLCJTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZ2V0Tm9kZSIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJ0ZXJtQ29udGFpbmVkIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZVRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGVzIiwiZ2V0RnJhbWVOb2RlcyIsInN0YXRlbWVudE5vZGVGcmFtZU5vZGUiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZUIiLCJlcXVhbFRvIiwiaXNFcXVhbFRvIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50cyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwiYWRkU3RhdGVtZW50IiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb21wYXJlU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJjb21wYXJlc1RvU3RlcHNPclN1YnByb29mcyIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZDb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRtZW50Tm9kZSIsImluc3RhbnRpYXRlU3RhdGVtZW50IiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O3lCQVorQjs4REFFWDt3QkFFRztxQkFDUTswQkFDSTsyQkFDRTs2QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFRQSxR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