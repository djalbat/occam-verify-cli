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
var _statement = require("../utilities/statement");
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
                var suppositionString = this.string; ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."), this.node);
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _elements.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                            context.addStepOrSubproof(stepOrSubproof);
                            verifies = true;
                        }
                    }
                } else if (this.procedureCall !== null) {
                    var stated1 = true, assignments1 = null, procedureCallVerifies = this.procedureCall.verify(assignments1, stated1, context);
                    if (procedureCallVerifies) {
                        verifies = true;
                    }
                } else {
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."), this.node);
                }
                if (verifies) {
                    this.context = context;
                    context.debug("...verified the '".concat(suppositionString, "' supposition."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, substitutions, generalContext1, specificContext) {
                var suppositionUnifies;
                var context = specificContext, specificSupposition = supposition, generalSuppositionString = this.string, specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."), this.node);
                var statement = specificSupposition.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext1, specificContext);
                suppositionUnifies = statementUnifies; ///
                if (suppositionUnifies) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."), this.node);
                }
                return suppositionUnifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var suppositionString = this.string, generalContext1 = this.context, specificContext = context; ///
                context.trace("Unifying the '".concat(suppositionString, "' supposition independently..."), this.node);
                if (this.statement !== null) {
                    var statementUnifiesIndependently = this.statement.unifyIndependently(substitutions, generalContext1, specificContext);
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
                    context.debug("...unified the '".concat(suppositionString, "' supposition independenly."), this.node);
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
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                if (this.statement !== null) {
                    var _$context = generalContext, subproofAssertion = (0, _statement.subproofAssertionFromStatement)(this.statement, _$context);
                    if (subproofAssertion !== null) {
                        var _$generalContext = this.context, specificContext = _$context; ///
                        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, _$generalContext, specificContext);
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var supposition = this, statementString = statement.getString(), suppositionString = supposition.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                if (this.statement !== null) {
                    var generalContext1 = this.context, specificContext = context; ///
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext1, specificContext);
                }
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIGZyYW1lc0Zyb21KU09OLCBzdGF0ZW1lbnRGcm9tSlNPTiwgcHJvY2VkdXJlQ2FsbEZyb21KU09OLCB0ZXJtc1RvVGVybXNKU09OLCBmcmFtZXNUb0ZyYW1lc0pTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1cHBvc2l0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgc3RlcCA9IFN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbFZlcmlmaWVzID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW5seS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlN0ZXAgPSBzdGVwT3JTdWJwcm9vZi5pc1N0ZXAoKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YsXG4gICAgICAgICAgc3RlcCA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgOlxuICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZVbmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXBPclN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgc3RlcFVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGZyYW1lcyxcbiAgICAgICAgdGVybXM7XG5cbiAgICBmcmFtZXMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICB0ZXJtcyA9IHRoaXMuY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTih0aGlzLnByb2NlZHVyZUNhbGwpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSxcbiAgICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKTtcblxuICAgIGZyYW1lcyA9IGZyYW1lc0pTT047ICAvLy9cblxuICAgIHRlcm1zID0gdGVybXNKU09OOyAgLy8vXG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdXBwb3NpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbVRlcm1zQW5kRnJhbWVzKHRlcm1zLCBmcmFtZXMsIGNvbnRleHQpO1xuXG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VwcG9zaXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRTdGF0ZW1lbnQiLCJnZXRQcm9jZWR1cmVDYWxsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwic3VwcG9zaXRpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZWxlbWVudHMiLCJzdGVwIiwiZnJvbVN0YXRlbWVudCIsInN0ZXBPclN1YnByb29mIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJwcm9jZWR1cmVDYWxsVmVyaWZpZXMiLCJkZWJ1ZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0ZXAiLCJyZXNvbHZlIiwiY29udGludWUiLCJyb2xsYmFjayIsInN0ZXBVbmlmaWVzIiwiZ2V0Q29udGV4dCIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsImZyb21UZXJtc0FuZEZyYW1lcyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4REFUb0I7Z0VBQ0M7Z0VBQ1E7NkRBQ0M7eUJBR2lCO29CQUMySTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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