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
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _elements = require("../../elements");
var _context = require("../../utilities/context");
var _json = require("../../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _Supposition;
var _default = (0, _elements.define)((_Supposition = /*#__PURE__*/ function(ProofAssertion) {
    _inherits(Supposition, ProofAssertion);
    function Supposition(context, string, node, statement, procedureCall) {
        _class_call_check(this, Supposition);
        var _this;
        _this = _call_super(this, Supposition, [
            context,
            string,
            node,
            statement
        ]);
        _this.procedureCall = procedureCall;
        return _this;
    }
    _create_class(Supposition, [
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "getSuppositionNode",
            value: function getSuppositionNode() {
                var node = this.getNode(), suppositionNode = node; ///
                return suppositionNode;
            }
        },
        {
            key: "isStated",
            value: function isStated() {
                var stated = true; ///
                return stated;
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates = false;
                var suppositionString = this.getString(); ///
                context.trace("Validatting the '".concat(suppositionString, "' supposition..."));
                var statement = this.getStatement(), procedureCall = this.getProcedureCall();
                if (false) {
                ///
                } else if (statement !== null) {
                    var statementValidates = this.validateStatement(context);
                    if (statementValidates) {
                        validates = true;
                    }
                } else if (procedureCall !== null) {
                    var procedureCallValidates = this.validateProcedureCall(context);
                    if (procedureCallValidates) {
                        validates = true;
                    }
                } else {
                    context.debug("Unable to validate the '".concat(suppositionString, "' supposition because it is nonsense."));
                }
                if (validates) {
                    context.debug("...validated the '".concat(suppositionString, "' supposition."));
                }
                return validates;
            }
        },
        {
            key: "validateProcedureCall",
            value: function validateProcedureCall(context) {
                var procedureCallValidates = false;
                var suppositionString = this.getString(), procedureCallString = this.procedureCall.getString();
                context.trace("Validatting the '".concat(suppositionString, "' supposition's '").concat(procedureCallString, "' procedure call..."));
                procedureCallValidates = this.procedureCall.validate(context);
                if (procedureCallValidates) {
                    context.debug("...validated the '".concat(suppositionString, "' supposition's '").concat(procedureCallString, "' procedure call."));
                }
                return procedureCallValidates;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, generalContext, specificContext) {
                var suppositionUnifies;
                var context = specificContext, specificSupposition = supposition, generalSuppositionString = this.getString(), specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."));
                var statement = specificSupposition.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
                suppositionUnifies = statementUnifies; ///
                if (suppositionUnifies) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."));
                }
                return suppositionUnifies;
            }
        },
        {
            key: "unifySubproofOrProofAssertion",
            value: function unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
                var subproofOrProofAssertionUnifies;
                var suppositionString = this.getString(), subproofOrProofAssertionString = subproofOrProofAssertion.getString();
                context.trace("Unifying the '".concat(subproofOrProofAssertionString, "' subproof or proof assertion with the '").concat(suppositionString, "' supposition..."));
                var subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null, subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion;
                if (proofAssertion !== null) {
                    var proofAssertionUnifies = this.unifyProofAssertion(proofAssertion, context);
                    if (proofAssertionUnifies) {
                        subproofOrProofAssertionUnifies = true;
                    }
                }
                if (subproof !== null) {
                    var subproofUnifies = this.unifySubproof(subproof, context);
                    if (subproofUnifies) {
                        subproofOrProofAssertionUnifies = true;
                    }
                }
                if (subproofOrProofAssertionUnifies) {
                    context.debug("...unified the '".concat(subproofOrProofAssertionString, "' subproof or proof assertion with the '").concat(suppositionString, "' supposition."));
                }
                return subproofOrProofAssertionUnifies;
            }
        },
        {
            key: "unifyProofAssertion",
            value: function unifyProofAssertion(proofAssertion, context) {
                var _this = this;
                var proofAssertionUnifies;
                var suppositionString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Unifying the '".concat(proofAssertionString, "' proof assertion with the '").concat(suppositionString, "' supposition..."));
                var proofAssertionContext = proofAssertion.getContext(), suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = proofAssertionContext; ///
                proofAssertionUnifies = (0, _context.liminally)(function(specificContext) {
                    var statement = proofAssertion.getStatement(), statementUnifies = _this.unifyStatement(statement, generalContext, specificContext);
                    if (statementUnifies) {
                        specificContext.commit(context);
                        return true;
                    }
                }, specificContext);
                if (proofAssertionUnifies) {
                    context.debug("...unified the '".concat(proofAssertionString, "' proof assertion with the '").concat(suppositionString, "' supposition."));
                }
                return proofAssertionUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, context) {
                var subproofUnifies = false;
                var suppositionString = this.getString(), subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(suppositionString, "' supposition..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var statement = this.getStatement();
                if (statement !== null) {
                    var statementNode = statement.getNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
                    if (subproofAssertionNode !== null) {
                        var _$context = generalContext, assertionNode = subproofAssertionNode, assertion = _$context.findAssertionByAssertionNode(assertionNode);
                        if (assertion !== null) {
                            var subproofAssertion = assertion; ///
                            subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                        }
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(suppositionString, "' supposition."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                return _async_to_generator(function() {
                    var _this, verifies, suppositionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                suppositionString = this.getString(); ///
                                context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
                                (0, _context.attempt)(function(context) {
                                    var validates = _this.validate(context);
                                    if (validates) {
                                        _this.setContext(context);
                                        verifies = true;
                                    }
                                }, context);
                                if (verifies) {
                                    context.debug("...verified the '".concat(suppositionString, "' supposition."));
                                }
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(context) {
                return _async_to_generator(function() {
                    var unifiesIndependently, suppositionString, statement, procedureCall, specificContext, generalContext, statementUnifiesIndependently, procedureCallResolvedIndependently;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                unifiesIndependently = false;
                                suppositionString = this.getString(); ///
                                context.trace("Unifying the '".concat(suppositionString, "' supposition independently..."));
                                statement = this.getStatement(), procedureCall = this.getProcedureCall();
                                if (statement !== null) {
                                    specificContext = context; ///
                                    context = this.getContext();
                                    generalContext = context; ///
                                    context = specificContext; ///
                                    statementUnifiesIndependently = statement.unifyIndependently(generalContext, specificContext);
                                    if (statementUnifiesIndependently) {
                                        unifiesIndependently = true;
                                    }
                                }
                                if (!(procedureCall !== null)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    procedureCall.unifyIndependently(context)
                                ];
                            case 1:
                                procedureCallResolvedIndependently = _state.sent();
                                if (procedureCallResolvedIndependently) {
                                    unifiesIndependently = true;
                                }
                                _state.label = 2;
                            case 2:
                                if (unifiesIndependently) {
                                    context.debug("...unified the '".concat(suppositionString, "' supposition independenly."));
                                }
                                return [
                                    2,
                                    unifiesIndependently
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var procedureCallJSON = (0, _json.procedureCallToProcedureCallJSON)(this.procedureCall), statementJSON = (0, _json.statementToStatementJSON)(this.statement), procedureCall = procedureCallJSON, statement = statementJSON, json = {
                    statement: statement,
                    procedureCall: procedureCall
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
    return Supposition;
}(_proofAssertion.default), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGltaW5hbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgcHJvY2VkdXJlQ2FsbEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGU7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZhbGlkYXRlIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBsaW1pbmFsbHkoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKVxuXG4gICAgICAgIGlmIChhc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFN1cHBvc2l0aW9uTm9kZSIsImdldE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyIsInZhbGlkYXRlUHJvY2VkdXJlQ2FsbCIsImRlYnVnIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJsaW1pbmFsbHkiLCJjb21taXQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJhdHRlbXB0Iiwic2V0Q29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidG9KU09OIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O3FFQU4yQjt3QkFFSjt1QkFDWTtvQkFDa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxnQkFBTSxnQ0FBQzs7YUFBTUMsWUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURqQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0MsYUFBYSxHQUFHQTs7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixPQUFPLElBQUks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