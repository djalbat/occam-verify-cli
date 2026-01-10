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
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                if (this.statement !== null) {
                    var _$context = generalContext, subproofAssertion = (0, _statement.subproofAssertionFromStatement)(this.statement, _$context);
                    if (subproofAssertion !== null) {
                        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcbmltcG9ydCB7IHRlcm1zRnJvbUpTT04sIGZyYW1lc0Zyb21KU09OLCBzdGF0ZW1lbnRGcm9tSlNPTiwgcHJvY2VkdXJlQ2FsbEZyb21KU09OLCB0ZXJtc1RvVGVybXNKU09OLCBmcmFtZXNUb0ZyYW1lc0pTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1cHBvc2l0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gLCBub2RlKTtcblxuICAgIGlmICgodGhpcy5zdGF0ZW1lbnQgPT09IG51bGwpICYmICh0aGlzLnByb2NlZHVyZUNhbGwgPT09IG51bGwpKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgc3RlcCA9IFN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IHN0ZXA7ICAvLy9cblxuICAgICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHByb2NlZHVyZUNhbGxWZXJpZmllcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWZXJpZmllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSB0aGlzLnN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlN0ZXAgPSBzdGVwT3JTdWJwcm9vZi5pc1N0ZXAoKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YsXG4gICAgICAgICAgc3RlcCA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgOlxuICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZVbmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXBPclN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgc3RlcFVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBmcmFtZXMsXG4gICAgICAgIHRlcm1zO1xuXG4gICAgZnJhbWVzID0gdGhpcy5jb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgdGVybXMgPSB0aGlzLmNvbnRleHQuZ2V0VGVybXMoKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21UZXJtc0FuZEZyYW1lcyh0ZXJtcywgZnJhbWVzLCBjb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInZlcmlmeSIsInZlcmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsIlRlbXBvcmFyeUNvbnRleHQiLCJmcm9tTm90aGluZyIsImdldE5vZGUiLCJzdXBwb3NpdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiU3RlcCIsImVsZW1lbnRzIiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVzIiwic2V0Q29udGV4dCIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJnZXRDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInN0ZXBPclN1YlByb29mU3RlcCIsImlzU3RlcCIsInN1YnByb29mIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwidW5pZnlTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGVwVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwidG9KU09OIiwiZnJhbWVzIiwidGVybXMiLCJnZXRGcmFtZXMiLCJnZXRUZXJtcyIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsImZyb21UZXJtc0FuZEZyYW1lcyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4REFUb0I7Z0VBQ0M7Z0VBQ1E7NkRBQ0M7eUJBR2lCO29CQUMySTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFMLFdBQWVBLElBQUFBLGdCQUFNLGdDQUFDOzthQUFNQyxZQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGpDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLGFBQWEsR0FBR0E7Ozs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1AsT0FBTztnQkFDWixJQUFJUSxXQUFXO2dCQUVmLElBQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFdBQVcsQ0FBQ1g7Z0JBRXREQSxVQUFVUyxrQkFBa0IsR0FBRztnQkFFL0IsSUFBTVAsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUUvQ2QsUUFBUWUs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