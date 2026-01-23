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
}(_wrap_native_super(_element.default)), _define_property(_Statement, "name", "Statement"), _Statement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBub2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlVGVybU5vZGVzID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZXMoKTtcblxuICAgIHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnROb2RlVGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudE5vZGVUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaE5vZGUoc3RhdGVtZW50Tm9kZVRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lTm9kZXMoKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50Tm9kZUZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50Tm9kZUZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlRnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoTm9kZShzdGF0ZW1lbnROb2RlRnJhbWVOb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVGcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVDb250YWluZWQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVBID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IG5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpXG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsXG4gICAgICAgICAgICBlcXVhbFRvID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBlcXVhbFRvOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXMgPSB2YWxpZGF0ZVN0YXRlbWVudHMuc29tZSgodmFsaWRhdGVTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB2YWxpZGF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGU7ICAvLy9cblxuICAgIGlmIChhc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmICgoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHx8IChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSAoZGVmaW5lZEFzc2VydGlvbk5vZGUgfHwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiZGVmaW5lIiwiU3RhdGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJpc1Npbmd1bGFyIiwiZ2V0Tm9kZSIsInNpbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlVGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZSIsInN0YXRlbWVudE5vZGVUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlcyIsImdldEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnROb2RlRnJhbWVOb2RlIiwic3RhdGVtZW50Tm9kZUZyYW1lTm9kZU1hdGNoZXMiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVCIiwiZXF1YWxUbyIsImlzRXF1YWxUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudHMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsImFkZFN0YXRlbWVudCIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O3lCQVgrQjs4REFFWDt3QkFFRztxQkFDUTswQkFDSTs2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