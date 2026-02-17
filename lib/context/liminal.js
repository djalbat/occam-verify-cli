"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiminalContext;
    }
});
var _necessary = require("necessary");
var _substitutions = require("../utilities/substitutions");
var _string = require("../utilities/string");
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, prune = _necessary.arrayUtilities.prune, compress = _necessary.arrayUtilities.compress;
var LiminalContext = /*#__PURE__*/ function(Context) {
    _inherits(LiminalContext, Context);
    function LiminalContext(context, substitutions) {
        _class_call_check(this, LiminalContext);
        var _this;
        _this = _call_super(this, LiminalContext, [
            context
        ]);
        _this.substitutions = substitutions;
        return _this;
    }
    _create_class(LiminalContext, [
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var substitutions;
                if (nested) {
                    var context = this.getContext();
                    substitutions = context.getSubstitutions();
                    substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                } else {
                    substitutions = this.substitutions;
                }
                return substitutions;
            }
        },
        {
            key: "getNonTrivialSubstitutions",
            value: function getNonTrivialSubstitutions() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var nonTrivialSubstitutions = this.findSubstitutions(function(substitution) {
                    var substitutionNonTrivial = substitution.isNonTrivial();
                    if (substitutionNonTrivial) {
                        return true;
                    }
                }, nested);
                return nonTrivialSubstitutions;
            }
        },
        {
            key: "getSoleNonTrivialSubstitution",
            value: function getSoleNonTrivialSubstitution() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var soleNonTrivialSubstitutions = null;
                var nonTrivialSubstitutions = this.getNonTrivialSubstitutions(nested), nonTrivialSubstitutionsLength = nonTrivialSubstitutions.length;
                if (nonTrivialSubstitutionsLength === 1) {
                    var firstNonTrivkalSubstitution = first(nonTrivialSubstitutions);
                    soleNonTrivialSubstitutions = firstNonTrivkalSubstitution; ///
                }
                return soleNonTrivialSubstitutions;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionString = substitution.getString();
                this.substitutions = _to_consumable_array(this.substitutions).concat([
                    substitution
                ]);
                compress(this.substitutions, function(substitutionA, substitutionB) {
                    var substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualToSubstitutionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionString, "' substitution to the context."));
            }
        },
        {
            key: "addSubstitutions",
            value: function addSubstitutions(substitutions) {
                var context = this, substitutionsString = (0, _string.substitutionsStringFromSubstitutions)(substitutions);
                this.substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                compress(this.substitutions, function(substitutionA, substitutionB) {
                    var substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(substitutionsString, "' substitutions to the context."));
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution) {
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                prune(this.substitutions, function(substitution) {
                    var substitutionB = substitution, substitutionAEqualTosubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualTosubstitutionB) {
                        return true;
                    }
                });
                context.trace("Removed the '".concat(substitutionString, "' substitution to the context."));
            }
        },
        {
            key: "resolveSubstitutions",
            value: function resolveSubstitutions(generalContext, specificContext) {
                var _this = this;
                var substitutions = this.getSubstitutions(), metavariables = (0, _substitutions.metavariablesFromSubstitutions)(substitutions, generalContext, specificContext);
                metavariables.forEach(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.every(function(complexSubstitution) {
                        var substitution = complexSubstitution, resolved = substitution.isResolved();
                        if (!resolved) {
                            substitution.resolve(generalContext, specificContext);
                        }
                    });
                    if (complexSubstitutionsResolved) {
                        return true;
                    }
                });
            }
        },
        {
            key: "areSubstitutionsResolved",
            value: function areSubstitutionsResolved(generalContext, specificContext) {
                var _this = this;
                var substitutions = this.getSubstitutions(), metavariables = (0, _substitutions.metavariablesFromSubstitutions)(substitutions, generalContext, specificContext), resolved = metavariables.every(function(metavariable) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.every(function(complexSubstitution) {
                        var complexSubstitutionResolved = complexSubstitution.isResolved();
                        if (complexSubstitutionResolved) {
                            return true;
                        }
                    });
                    if (complexSubstitutionsResolved) {
                        return true;
                    }
                });
                return resolved;
            }
        },
        {
            key: "commit",
            value: function commit(context) {
                if (context === undefined) {
                    context = this.getContext();
                }
                context.addSubstitutions(this.substitutions);
            }
        },
        {
            key: "findSubstitution",
            value: function findSubstitution(callback, generalContext, specificContext) {
                var substitutions = this.getSubstitutions(), substitution = substitutions.find(callback, generalContext, specificContext);
                return substitution;
            }
        },
        {
            key: "findSubstitutions",
            value: function findSubstitutions(callback) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var substitutions;
                substitutions = this.getSubstitutions(nested);
                substitutions = find(substitutions, callback); ///
                return substitutions;
            }
        },
        {
            key: "findSubstitutionByVariable",
            value: function findSubstitutionByVariable(variable, generalContext, specifiContext) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionVariable = substitution.getVariable();
                    if (substitutionVariable !== null) {
                        var substitutionVariableEqualToVariable = substitutionVariable.isEqualTo(variable);
                        if (substitutionVariableEqualToVariable) {
                            return true;
                        }
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariable",
            value: function findSubstitutionByMetavariable(metavariable, generalContext, specificContext) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariable = substitution.getMetavariable(generalContext, specificContext);
                    if (substitutionMetavariable !== null) {
                        var substitutionMetavvariableComparesToMetavariable = substitutionMetavariable.compare(metavariable);
                        if (substitutionMetavvariableComparesToMetavariable) {
                            return true;
                        }
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariable",
            value: function findSimpleSubstitutionByMetavariable(metavariable) {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        var simpleSubstitution = substitution, simpleSubstitutionMetavariableComparesToMetavariable = simpleSubstitution.compareMetavariable(metavariable);
                        if (simpleSubstitutionMetavariableComparesToMetavariable) {
                            return true;
                        }
                    }
                }) || null;
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariable",
            value: function findComplexSubstitutionsByMetavariable(metavariable) {
                var complexSubstitutions = this.findSubstitutions(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        var complexSubstitution = substitution, complexSubstitutionMetavariableComparesToMetavariable = complexSubstitution.compareMetavariable(metavariable);
                        if (complexSubstitutionMetavariableComparesToMetavariable) {
                            return true;
                        }
                    }
                });
                return complexSubstitutions;
            }
        },
        {
            key: "findSubstitutionByMetavariableAndSubstitution",
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution, generalContet, specificContext) {
                var substitutionA = substitution; ///
                substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariablCompareslToMetavariable = substitution.compareMetavariable(metavariable);
                    if (substitutionMetavariablCompareslToMetavariable) {
                        var substitutionB = substitution, substitutionBSubstitutionComparesToSubstitutionA = substitutionB.compare(substitutionA);
                        if (substitutionBSubstitutionComparesToSubstitutionA) {
                            return true;
                        }
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "isSimpleSubstitutionPresentByMetavariable",
            value: function isSimpleSubstitutionPresentByMetavariable(metavariable) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariable(metavariable), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableAndSubstitution",
            value: function isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution, generalContet, specificContext) {
                substitution = this.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution, generalContet, specificContext); ///
                var substitutionPresent = substitution !== null;
                return substitutionPresent;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var substitutions = [], liminalContext = new LiminalContext(context, substitutions);
                return liminalContext;
            }
        }
    ]);
    return LiminalContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0LCBwcnVuZSwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pbmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5zdWJzdGl0dXRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc05vblRyaXZpYWwoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG5lc3RlZCk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IG51bGw7XG5cbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMobmVzdGVkKSxcbiAgICAgICAgICBub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxTdWJzdGl0dXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uID0gZmlyc3Qobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIHN1YnN0aXR1dGlvblxuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbkEsIHN1YnN0aXR1dGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBwcnVuZSh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb3N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb3N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5KChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHRoaXMuc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZChjYWxsYmFjaywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2ssIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBmaW5kKHN1YnN0aXR1dGlvbnMsIGNhbGxiYWNrKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2dmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlLmNvbXBhcmUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWV0YXZ2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TaW1wbGUgPSBzdWJzdGl0dXRpb24uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblNpbXBsZSkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHNpbXBsZVN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGNvbXBsZXhTdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxDb21wYXJlc2xUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb25CLmNvbXBhcmUoc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGxpbWluYWxDb250ZXh0ID0gbmV3IExpbWluYWxDb250ZXh0KGNvbnRleHQsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGxpbWluYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGltaW5hbENvbnRleHQiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInBydW5lIiwiY29tcHJlc3MiLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJuZXN0ZWQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9uVHJpdmlhbCIsImlzTm9uVHJpdmlhbCIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwic29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwibm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImlzRXF1YWxUbyIsInRyYWNlIiwiYWRkU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIiLCJyZW1vdmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BRXF1YWxUb3N1YnN0aXR1dGlvbkIiLCJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyIsImZvckVhY2giLCJtZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImV2ZXJ5IiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwiaXNSZXNvbHZlZCIsInJlc29sdmUiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJjb21taXQiLCJ1bmRlZmluZWQiLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwic3BlY2lmaUNvbnRleHQiLCJzdWJzdGl0dXRpb25WYXJpYWJsZSIsImdldFZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25NZXRhdnZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsInNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbENvbnRldCIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsQ29tcGFyZXNsVG9NZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJmcm9tTm90aGluZyIsImxpbWluYWxDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7NkJBQ2dCO3NCQUNNOzhEQUVqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBUUMsT0FB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