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
var _assign = /*#__PURE__*/ _interop_require_default(require("../../process/assign"));
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
                    var _this, verifies, suppositionString, statement, procedureCall;
                    return _ts_generator(this, function(_state) {
                        _this = this;
                        verifies = false;
                        this.break(context);
                        suppositionString = this.getString(); ///
                        context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
                        statement = this.getStatement(), procedureCall = this.getProcedureCall();
                        if (statement !== null || procedureCall !== null) {
                            (0, _context.attempt)(function(context) {
                                if (statement !== null) {
                                    var assignments = [], statementValidates = _this.validateStatement(assignments, context);
                                    if (statementValidates) {
                                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                                        if (assignmentsAssigned) {
                                            var subproofOrProofAssertion = _this; ///
                                            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                            _this.setContext(context);
                                            verifies = true;
                                        }
                                    }
                                }
                                if (procedureCall !== null) {
                                    var procedureCallValidates = procedureCall.validate(context);
                                    if (procedureCallValidates) {
                                        _this.setContext(context);
                                        verifies = true;
                                    }
                                }
                            }, context);
                        } else {
                            context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."));
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(suppositionString, "' supposition."));
                        }
                        return [
                            2,
                            verifies
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var suppositionString = this.getString(); ///
                context.trace("Unifying the '".concat(suppositionString, "' supposition independently..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var statement = this.getStatement();
                if (statement !== null) {
                    var statementUnifiesIndependently = statement.unifyIndependently(substitutions, generalContext, specificContext);
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
                    context.debug("...unified the '".concat(suppositionString, "' supposition independenly."));
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifySubproofOrProosAssertion",
            value: function unifySubproofOrProosAssertion(subproofOrProofAssertion, substitutions, context) {
                var subproofOrProofAssertionUnifies = false;
                var subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion, proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null;
                substitutions.snapshot(context);
                if (subproof !== null) {
                    var subproofUnifies = this.unifySubproof(subproof, substitutions, context);
                    if (subproofUnifies) {
                        subproofOrProofAssertionUnifies = true;
                    }
                }
                if (proofAssertion !== null) {
                    var proofAssertionUnifies = this.unifyProofAssertion(proofAssertion, substitutions, context);
                    if (proofAssertionUnifies) {
                        subproofOrProofAssertionUnifies = true;
                    }
                }
                if (subproofOrProofAssertionUnifies) {
                    substitutions.resolve(context);
                }
                subproofOrProofAssertionUnifies ? substitutions.continue(context) : substitutions.rollback(context);
                return subproofOrProofAssertionUnifies;
            }
        },
        {
            key: "unifyProofAssertion",
            value: function unifyProofAssertion(proofAssertion, substitutions, context) {
                var proofAssertionUnifies = false;
                var suppositionString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Unifying the '".concat(proofAssertionString, "' proof assertion with the '").concat(suppositionString, "' supposition..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                debugger;
                // const proofAssertionContext = proofAssertion.getContext(),
                //       statementUnifies = synthetically((specificContext) => {
                //         const statement = proofAssertion.getStatement(),
                //               statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                //
                //         return statementUnifies;
                //       }, specificContext, proofAssertionContext);
                if (statementUnifies) {
                    proofAssertionUnifies = true;
                }
                if (proofAssertionUnifies) {
                    context.debug("...unified the '".concat(proofAssertionString, "' proof assertion with the '").concat(suppositionString, "' supposition."));
                }
                return proofAssertionUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var subproofString = subproof.getString(), suppositionString = this.getString(); ///
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
            key: "unifySupposition",
            value: function unifySupposition(supposition, substitutions, generalContext, specificContext) {
                var suppositionUnifies;
                var context = specificContext, specificSupposition = supposition, generalSuppositionString = this.getString(), specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."));
                var statement = specificSupposition.getStatement(), statementUnifies1 = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                suppositionUnifies = statementUnifies1; ///
                if (suppositionUnifies) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."));
                }
                return suppositionUnifies;
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
                var supposition = new Supposition(context, string, node, statement, procedureCall);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(_proofAssertion.default), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHByb2NlZHVyZUNhbGxGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24gZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoKHN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpKSB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBwcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29zQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZShjb250ZXh0KSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGRlYnVnZ2VyXG5cbiAgICAvLyBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgLy8gICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHN5bnRoZXRpY2FsbHkoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgLy8gICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAvLyAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIHByb29mQXNzZXJ0aW9uQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdXBwb3NpdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwiYXR0ZW1wdCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzZXRDb250ZXh0IiwicHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mT3JQcm9vc0Fzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInJlc29sdmUiLCJjb250aW51ZSIsInJvbGxiYWNrIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsInVuaWZ5U3RhdGVtZW50IiwidG9KU09OIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsIlByb29mQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7cUVBUDJCOzZEQUNHO3dCQUVQO3VCQUNDO29CQUM2Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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