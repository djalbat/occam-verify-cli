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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
var _context = require("../utilities/context");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var _Subproof;
var asyncEvery = _occamlanguages.asynchronousUtilities.asyncEvery;
var _default = (0, _elements.define)((_Subproof = /*#__PURE__*/ function(Element) {
    _inherits(Subproof, Element);
    function Subproof(context, string, node, suppositions, subDerivation) {
        _class_call_check(this, Subproof);
        var _this;
        _this = _call_super(this, Subproof, [
            context,
            string,
            node
        ]);
        _this.suppositions = suppositions;
        _this.subDerivation = subDerivation;
        return _this;
    }
    _create_class(Subproof, [
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getSubDerivation",
            value: function getSubDerivation() {
                return this.subDerivation;
            }
        },
        {
            key: "getSubproofNode",
            value: function getSubproofNode() {
                var node = this.getNode(), subproofNode = node; ///
                return subproofNode;
            }
        },
        {
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                return this.subDerivation.getLastProofAssertion();
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                var lastProofAssertion = this.getLastProofAssertion(), suppositionStatements = this.suppositions.map(function(supposition) {
                    var suppositionStatement = supposition.getStatement();
                    return suppositionStatement;
                }), lastProofAssertionStatement = lastProofAssertion.getStatement(), statements = _to_consumable_array(suppositionStatements).concat([
                    lastProofAssertionStatement
                ]);
                return statements;
            }
        },
        {
            key: "isProofAssertion",
            value: function isProofAssertion() {
                var proofAssertion = false;
                return proofAssertion;
            }
        },
        {
            key: "compareStatement",
            value: function compareStatement(statement, context) {
                var statementUnifies = false;
                return statementUnifies;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                return _async_to_generator(function() {
                    var _this, verifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                return [
                                    4,
                                    (0, _context.asyncScope)(function() {
                                        return _async_to_generator(function() {
                                            var suppositionsVerify, subDerivationVerifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            asyncEvery(this.suppositions, function(supposition) {
                                                                return _async_to_generator(function() {
                                                                    var suppositionVerifies, subproofOrProofAssertion;
                                                                    return _ts_generator(this, function(_state) {
                                                                        switch(_state.label){
                                                                            case 0:
                                                                                return [
                                                                                    4,
                                                                                    supposition.verify(context)
                                                                                ];
                                                                            case 1:
                                                                                suppositionVerifies = _state.sent();
                                                                                if (suppositionVerifies) {
                                                                                    subproofOrProofAssertion = supposition; ////
                                                                                    context.assignAssignments(context);
                                                                                    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                                                                    return [
                                                                                        2,
                                                                                        true
                                                                                    ];
                                                                                }
                                                                                return [
                                                                                    2
                                                                                ];
                                                                        }
                                                                    });
                                                                })();
                                                            })
                                                        ];
                                                    case 1:
                                                        suppositionsVerify = _state.sent();
                                                        if (!suppositionsVerify) return [
                                                            3,
                                                            3
                                                        ];
                                                        return [
                                                            4,
                                                            this.subDerivation.verify(context)
                                                        ];
                                                    case 2:
                                                        subDerivationVerifies = _state.sent();
                                                        if (subDerivationVerifies) {
                                                            verifies = true;
                                                        }
                                                        _state.label = 3;
                                                    case 3:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, context)
                                ];
                            case 1:
                                _state.sent();
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
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var subproofString = this.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        var subproof = this, substitutions = [], statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                            if (substitutionsCompare) {
                                unifiesWithSatisfiesAssertion = true;
                            }
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ]);
    return Subproof;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Subproof, "name", "Subproof"), _Subproof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RQcm9vZkFzc2VydGlvbigpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSB0aGlzLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cyhjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKVxuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXhpb20udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2YiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mTm9kZSIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImdldFN0YXRlbWVudHMiLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJhc3luY1Njb3BlIiwic3VwcG9zaXRpb25zVmVyaWZ5Iiwic3ViRGVyaXZhdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsImdldFN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwidW5pZnlTdWJwcm9vZiIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4QkFQK0M7d0JBRXhCO3VCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTSxBQUFFQSxhQUFlQyxxQ0FBcUIsQ0FBcENEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sNkJBQUM7O2FBQU1DLFNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEcENMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsYUFBYSxHQUFHQTs7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lB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