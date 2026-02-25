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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGltaW5hbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgcHJvY2VkdXJlQ2FsbEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04sIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGU7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnByb2NlZHVyZUNhbGwudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb24sICAvLy9cbiAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbjtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25Db250ZXh0ID0gcHJvb2ZBc3NlcnRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3VwcG9zaXRpb25Db250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gbGltaW5hbGx5KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFN1cHBvc2l0aW9uTm9kZSIsImdldE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwic2V0Q29udGV4dCIsImRlYnVnIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJsaW1pbmFsbHkiLCJjb21taXQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9ucyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidG9KU09OIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O3FFQU4yQjt3QkFFSjt1QkFDWTtvQkFDa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxnQkFBTSxnQ0FBQzs7YUFBTUMsWUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURqQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0MsYUFBYSxHQUFHQTs7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixPQUFPLElBQUks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