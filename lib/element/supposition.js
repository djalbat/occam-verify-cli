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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _json = require("../utilities/json");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _Supposition;
var _default = (0, _elements.define)((_Supposition = /*#__PURE__*/ function(Element) {
    _inherits(Supposition, Element);
    function Supposition(context, string, node, statement, procedureCall) {
        _class_call_check(this, Supposition);
        var _this;
        _this = _call_super(this, Supposition, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        _this.procedureCall = procedureCall;
        return _this;
    }
    _create_class(Supposition, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var node = this.getNode(), suppositionString = this.getString(); ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."), node);
                if (this.statement === null && this.procedureCall === null) {
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."), node);
                } else {
                    if (this.statement !== null) {
                        var stated = true, assignments = [], statementValidates = this.statement.validate(assignments, stated, context);
                        if (statementValidates) {
                            var assignmentsAssigned = (0, _assign.default)(assignments, context);
                            if (assignmentsAssigned) {
                                var Step = _elements.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                                context.addStepOrSubproof(stepOrSubproof);
                                verifies = true;
                            }
                        }
                    }
                    if (this.procedureCall !== null) {
                        var stated1 = true, assignments1 = null, procedureCallVerifies = this.procedureCall.verify(assignments1, stated1, context);
                        if (procedureCallVerifies) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    this.setContext(context);
                    context.debug("...verified the '".concat(suppositionString, "' supposition."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var node = this.getNode(), suppositionString = this.getString();
                context.trace("Unifying the '".concat(suppositionString, "' supposition independently..."), node);
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                if (this.statement !== null) {
                    var statementUnifiesIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                    if (statementUnifiesIndependently) {
                        unifiesIndependently = true;
                    }
                }
                if (this.procedureCall !== null) {
                    var procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);
                    if (procedureCallResolvedIndependently) {
                        unifiesIndependently = true;
                    }
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(suppositionString, "' supposition independenly."), node);
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifyStepOrSubproof",
            value: function unifyStepOrSubproof(stepOrSubproof, substitutions, context) {
                var stepOrSubproofUnifies = false;
                var stepOrSubProofStep = stepOrSubproof.isStep(), subproof = stepOrSubProofStep ? null : stepOrSubproof, step = stepOrSubProofStep ? stepOrSubproof : null;
                substitutions.snapshot();
                if (subproof !== null) {
                    var subproofUnifies = this.unifySubproof(subproof, substitutions, context);
                    stepOrSubproofUnifies = subproofUnifies; ///
                }
                if (step !== null) {
                    var statementUnifies = this.unifyStep(step, substitutions, context);
                    stepOrSubproofUnifies = statementUnifies; ///
                }
                if (stepOrSubproofUnifies) {
                    substitutions.resolve(context);
                }
                stepOrSubproofUnifies ? substitutions.continue() : substitutions.rollback(context);
                return stepOrSubproofUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(suppositionStatementString, "' supposition..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                if (this.statement !== null) {
                    var statementNode = this.statement.getNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
                    if (subproofAssertionNode !== null) {
                        var _$context = generalContext, assertionNode = subproofAssertionNode, assertion = _$context.findAssertionByAssertionNode(assertionNode);
                        if (assertion !== null) {
                            var subproofAssertion = assertion; ///
                            subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                        }
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(suppositionStatementString, "' supposition."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStep",
            value: function unifyStep(step, substitutions, context) {
                var stepUnifies;
                context = step.getContext();
                var statement = step.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, context);
                stepUnifies = statementUnifies; ///
                return stepUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var supposition = this, statementString = statement.getString(), suppositionString = supposition.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                if (this.statement !== null) {
                    var generalContext = this.context, specificContext = context; ///
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, substitutions, generalContext, specificContext) {
                var suppositionUnifies;
                var node = this.getNode(), context = specificContext, specificSupposition = supposition, generalSuppositionString = this.getString(), specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."), node);
                var statement = specificSupposition.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                suppositionUnifies = statementUnifies; ///
                if (suppositionUnifies) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."), node);
                }
                return suppositionUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var frames, terms;
                frames = this.context.getFrames();
                terms = this.context.getTerms();
                var procedureCallJSON = (0, _json.procedureCallToProcedureCallJSON)(this.procedureCall), statementJSON = (0, _json.statementToStatementJSON)(this.statement), framesJSON = (0, _json.framesToFramesJSON)(frames), termsJSON = (0, _json.termsToTermsJSON)(terms);
                frames = framesJSON; ///
                terms = termsJSON; ///
                var procedureCall = procedureCallJSON, statement = statementJSON, json = {
                    procedureCall: procedureCall,
                    statement: statement,
                    frames: frames,
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var terms = (0, _json.termsFromJSON)(json, context), frames = (0, _json.framesFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context), temporaryContext = _temporary.default.fromTermsAndFrames(terms, frames, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var node = null;
                context = temporaryContext; ///
                var supposition = new Supposition(context, string, node, statement, procedureCall);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(_wrap_native_super(_element.default)), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgZnJhbWVzRnJvbUpTT04sIHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHRlcm1zVG9UZXJtc0pTT04sIGZyYW1lc1RvRnJhbWVzSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgaWYgKCh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkgJiYgKHRoaXMucHJvY2VkdXJlQ2FsbCA9PT0gbnVsbCkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICBzdGVwID0gU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gc3RlcDsgIC8vL1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbFZlcmlmaWVzID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFZlcmlmaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSB0aGlzLnN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlN0ZXAgPSBzdGVwT3JTdWJwcm9vZi5pc1N0ZXAoKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YsXG4gICAgICAgICAgc3RlcCA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgOlxuICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZVbmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXBPclN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLnN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpXG5cbiAgICAgICAgaWYgKGFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXM7XG5cbiAgICBjb250ZXh0ID0gc3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBzdGVwVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpO1xuXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgIC8vL1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tVGVybXNBbmRGcmFtZXModGVybXMsIGZyYW1lcywgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdXBwb3NpdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFN0YXRlbWVudCIsImdldFByb2NlZHVyZUNhbGwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJnZXROb2RlIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlN0ZXAiLCJlbGVtZW50cyIsInN0ZXAiLCJmcm9tU3RhdGVtZW50Iiwic3RlcE9yU3VicHJvb2YiLCJhZGRTdGVwT3JTdWJwcm9vZiIsInByb2NlZHVyZUNhbGxWZXJpZmllcyIsInNldENvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdXBwb3NpdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsInRvSlNPTiIsImZyYW1lcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0VGVybXMiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tVGVybXNBbmRGcmFtZXMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7OERBUm9CO2dFQUNDO2dFQUNROzZEQUNDO29CQUc0Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFMLFdBQWVBLElBQUFBLGdCQUFNLGdDQUFDOzthQUFNQyxZQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGpDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLGFBQWEsR0FBR0E7Ozs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7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