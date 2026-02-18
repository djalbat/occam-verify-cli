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
var _Premise;
var _default = (0, _elements.define)((_Premise = /*#__PURE__*/ function(ProofAssertion) {
    _inherits(Premise, ProofAssertion);
    function Premise(context, string, node, statement, procedureCall) {
        _class_call_check(this, Premise);
        var _this;
        _this = _call_super(this, Premise, [
            context,
            string,
            node,
            statement
        ]);
        _this.procedureCall = procedureCall;
        return _this;
    }
    _create_class(Premise, [
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "getPremiseNode",
            value: function getPremiseNode() {
                var node = this.getNode(), premiseNode = node; ///
                return premiseNode;
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
            value: function validate(assignments, context) {
                var validates = false;
                var premiseString = this.getString(); ///
                context.trace("Validatting the '".concat(premiseString, "' premise..."));
                var statement = this.getStatement(), procedureCall = this.getProcedureCall();
                if (false) {
                ///
                } else if (statement !== null) {
                    var statementValidates = this.validateStatement(assignments, context);
                    if (statementValidates) {
                        validates = true;
                    }
                } else if (procedureCall !== null) {
                    var procedureCallValidates = this.validateProcedureCall(assignments, context);
                    if (procedureCallValidates) {
                        validates = true;
                    }
                } else {
                    context.debug("Unable to validate the '".concat(premiseString, "' premise because it is nonsense."));
                }
                if (validates) {
                    context.debug("...validated the '".concat(premiseString, "' premise."));
                }
                return validates;
            }
        },
        {
            key: "validateProcedureCall",
            value: function validateProcedureCall(assignments, context) {
                var procedureCallValidates = false;
                var premiseString = this.getString(), procedureCallString = this.procedureCall.getString();
                context.trace("Validatting the '".concat(premiseString, "' premise's '").concat(procedureCallString, "' procedure call..."));
                procedureCallValidates = this.procedureCall.validate(context);
                if (procedureCallValidates) {
                    context.debug("...validated the '".concat(premiseString, "' premise's '").concat(procedureCallString, "' procedure call."));
                }
                return procedureCallValidates;
            }
        },
        {
            key: "unifySubproofOrProofAssertion",
            value: function unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
                var subproofOrProofAssertionUnifies;
                var premiseString = this.getString(), subproofOrProofAssertionString = subproofOrProofAssertion.getString();
                context.trace("Unifying the '".concat(subproofOrProofAssertionString, "' subproof or proof assertion with the '").concat(premiseString, "' premise..."));
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
                    context.debug("...unified the '".concat(subproofOrProofAssertionString, "' subproof or proof assertion with the '").concat(premiseString, "' premise."));
                }
                return subproofOrProofAssertionUnifies;
            }
        },
        {
            key: "unifyProofAssertion",
            value: function unifyProofAssertion(proofAssertion, context) {
                var _this = this;
                var proofAssertionUnifies;
                var premiseString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Unifying the '".concat(proofAssertionString, "' proof assertion with the '").concat(premiseString, "' premise..."));
                var proofAssertionContext = proofAssertion.getContext(), premiseContext = this.getContext(), generalContext = premiseContext, specificContext = proofAssertionContext; ///
                proofAssertionUnifies = (0, _context.liminally)(function(specificContext) {
                    var statement = proofAssertion.getStatement(), statementUnifies = _this.unifyStatement(statement, generalContext, specificContext);
                    if (statementUnifies) {
                        specificContext.commit(context);
                        return true;
                    }
                }, specificContext);
                if (proofAssertionUnifies) {
                    context.debug("...unified the '".concat(proofAssertionString, "' proof assertion with the '").concat(premiseString, "' premise."));
                }
                return proofAssertionUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, context) {
                var subproofUnifies = false;
                var premiseString = this.getString(), subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(premiseString, "' premise..."));
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
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(premiseString, "' premise."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, context) {
                return _async_to_generator(function() {
                    var _this, verifies, premiseString;
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
                                premiseString = this.getString();
                                context.trace("Verifying the '".concat(premiseString, "' premise..."));
                                (0, _context.attempt)(function(context) {
                                    var validates = _this.validate(assignments, context);
                                    if (validates) {
                                        _this.setContext(context);
                                        verifies = true;
                                    }
                                }, context);
                                if (verifies) {
                                    context.debug("...verified the '".concat(premiseString, "' premise."));
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
                    var unifiesIndependently, premiseString, statement, procedureCall, specificContext, generalContext, statementUnifiesIndependently, procedureCallResolvedIndependently;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                unifiesIndependently = false;
                                premiseString = this.getString(); ///
                                context.trace("Unifying the '".concat(premiseString, "' premise independently..."));
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
                                    context.debug("...unified the '".concat(premiseString, "' premise independenly."));
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
                var statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var node = null;
                var premise = new Premise(context, string, node, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(_proofAssertion.default), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByZW1pc2UgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGUoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnByb2NlZHVyZUNhbGwudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbjtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcmVtaXNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gcHJlbWlzZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBsaW1pbmFsbHkoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVubHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByZW1pc2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0UHJlbWlzZU5vZGUiLCJnZXROb2RlIiwicHJlbWlzZU5vZGUiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJ2YWxpZGF0ZXMiLCJwcmVtaXNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInByb2NlZHVyZUNhbGxWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVByb2NlZHVyZUNhbGwiLCJkZWJ1ZyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJwcmVtaXNlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGltaW5hbGx5Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiY29tbWl0Iiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnN0aXR1dGlvbnMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiYXR0ZW1wdCIsInNldENvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInRvSlNPTiIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcmVtaXNlIiwiUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztxRUFOMkI7d0JBRUo7dUJBQ1k7b0JBQ2tGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckgs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