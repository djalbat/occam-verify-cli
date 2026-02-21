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
            value: function validate(context) {
                var validates = false;
                var premiseString = this.getString(); ///
                context.trace("Validatting the '".concat(premiseString, "' premise..."));
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
            value: function validateProcedureCall(context) {
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
                            subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, specificContext);
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
            value: function verify(context) {
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
                                    var validates = _this.validate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByZW1pc2UgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25Db250ZXh0ID0gcHJvb2ZBc3NlcnRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByZW1pc2VDb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBwcmVtaXNlQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0OyAvLy9cblxuICAgIHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGxpbWluYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKVxuXG4gICAgICAgIGlmIChhc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVubHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByZW1pc2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0UHJlbWlzZU5vZGUiLCJnZXROb2RlIiwicHJlbWlzZU5vZGUiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwicHJlbWlzZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwiZGVidWciLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJnZXRDb250ZXh0IiwicHJlbWlzZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImxpbWluYWxseSIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImNvbW1pdCIsInN1YnByb29mU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiYXR0ZW1wdCIsInNldENvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInRvSlNPTiIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcmVtaXNlIiwiUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztxRUFOMkI7d0JBRUo7dUJBQ1k7b0JBQ2tGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckgsV0FBZUEsSUFBQUEsZ0JBQU0sNEJBQUM7O2FBQU1DLFFBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEakNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7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