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
            value: function findSubstitution(callback) {
                var substitutions = this.getSubstitutions(), substitution = substitutions.find(callback);
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
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
                var substitutionA = substitution; ///
                substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariablCompareslToMetavariable = substitution.compareMetavariable(metavariable);
                    if (substitutionMetavariablCompareslToMetavariable) {
                        var substitutionB = substitution, substitutionBSubstitutionComparesToSubstitutionA = substitutionB.compareSubstitution(substitutionA);
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
            value: function isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution) {
                substitution = this.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0LCBwcnVuZSwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pbmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5zdWJzdGl0dXRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc05vblRyaXZpYWwoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG5lc3RlZCk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IG51bGw7XG5cbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMobmVzdGVkKSxcbiAgICAgICAgICBub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxTdWJzdGl0dXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uID0gZmlyc3Qobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIHN1YnN0aXR1dGlvblxuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbkEsIHN1YnN0aXR1dGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBwcnVuZSh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb3N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb3N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZW1vdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5KChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHRoaXMuc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2ssIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBmaW5kKHN1YnN0aXR1dGlvbnMsIGNhbGxiYWNrKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gc2ltcGxlU3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gY29tcGxleFN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxDb21wYXJlc2xUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb25CLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7ICAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgbGltaW5hbENvbnRleHQgPSBuZXcgTGltaW5hbENvbnRleHQoY29udGV4dCwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gbGltaW5hbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW1pbmFsQ29udGV4dCIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHJ1bmUiLCJjb21wcmVzcyIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiaXNFcXVhbFRvIiwidHJhY2UiLCJhZGRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvc3Vic3RpdHV0aW9uQiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIiwiZm9yRWFjaCIsIm1ldGF2YXJpYWJsZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwicmVzb2x2ZSIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsImNvbW1pdCIsInVuZGVmaW5lZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImZyb21Ob3RoaW5nIiwibGltaW5hbENvbnRleHQiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTs2QkFDZ0I7c0JBQ007OERBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFRQyxPQUFpQ0MseUJBQWMsQ0FBL0NELE1BQU1FLFFBQTJCRCx5QkFBYyxDQUF6Q0MsT0FBT0MsUUFBb0JGLHlCQUFjLENBQWxDRSxPQUFPQyxXQUFhSCx5QkFBYyxDQUEzQkc7QUFFYixJQUFBLEFBQU1MLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1BNLE9BQU8sRUFBRUMsYUFBYTtnQ0FEZlA7O2dCQUVqQixrQkFGaUJBO1lBRVhNOztRQUVOLE1BQUtDLGFBQWEsR0FBR0E7OztrQkFKSlA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWlCQyxTQUFBQSxpRUFBUztnQkFDeEIsSUFBSUY7Z0JBRUosSUFBSUUsUUFBUTtvQkFDVixJQUFNSCxVQUFVLElBQUksQ0FBQ0ksVUFBVTtvQkFFL0JILGdCQUFnQkQsUUFBUUUsZ0JBQWdCO29CQUV4Q0QsZ0JBQWdCLEFBQ2QscUJBQUcsSUFBSSxDQUFDQSxhQUFhLFNBQ3JCLHFCQUFHQTtnQkFFUCxPQUFPO29CQUNMQSxnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhO2dCQUNwQztnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO29CQUEyQkYsU0FBQUEsaUVBQVM7Z0JBQ2xDLElBQU1HLDBCQUEwQixJQUFJLENBQUNDLGlCQUFpQixDQUFDLFNBQUNDO29CQUNsRCxJQUFNQyx5QkFBeUJELGFBQWFFLFlB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