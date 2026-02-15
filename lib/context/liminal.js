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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, compress = _necessary.arrayUtilities.compress;
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
                var nested = false, nonTrivialSubstitutions = this.findSubstitutions(function(substitution) {
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
                var soleNonTrivialSubstitutions = null;
                var nonTrivialSubstitutions = this.getNonTrivialSubstitutions(), nonTrivialSubstitutionsLength = nonTrivialSubstitutions.length;
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
                var substitutions = [], emphemeralContext = new LiminalContext(context, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return LiminalContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0LCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbWluYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgICAgLi4udGhpcy5zdWJzdGl0dXRpb25zLFxuICAgICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgICBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNOb25Ucml2aWFsKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuZXN0ZWQpO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24oKSB7XG4gICAgbGV0IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IG51bGw7XG5cbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCA9IG5vblRyaXZpYWxTdWJzdGl0dXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uID0gZmlyc3Qobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIHN1YnN0aXR1dGlvblxuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbkEsIHN1YnN0aXR1dGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJlc29sdmVTdWJzdGl0dXRpb25zKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeSgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24ucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBjb21taXQoY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnModGhpcy5zdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2spIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaywgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucyhuZXN0ZWQpO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IGZpbmQoc3Vic3RpdHV0aW9ucywgY2FsbGJhY2spOyAgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBzaW1wbGVTdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsQ29tcGFyZXNsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25BKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJjb21wcmVzcyIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiaXNFcXVhbFRvIiwidHJhY2UiLCJhZGRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIiwiZm9yRWFjaCIsIm1ldGF2YXJpYWJsZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwicmVzb2x2ZSIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsImNvbW1pdCIsInVuZGVmaW5lZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImZyb21Ob3RoaW5nIiwiZW1waGVtZXJhbENvbnRleHQiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTs2QkFDZ0I7c0JBQ007OERBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFRQyxPQUEwQkMseUJBQWMsQ0FBeENELE1BQU1FLFFBQW9CRCx5QkFBYyxDQUFsQ0MsT0FBT0MsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRU4sSUFBQSxBQUFNSiwrQkFBTjtjQUFNQTthQUFBQSxlQUNQSyxPQUFPLEVBQUVDLGFBQWE7Z0NBRGZOOztnQkFFakIsa0JBRmlCQTtZQUVYSzs7UUFFTixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSkpOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFpQkMsU0FBQUEsaUVBQVM7Z0JBQ3hCLElBQUlGO2dCQUVKLElBQUlFLFFBQVE7b0JBQ1YsSUFBTUgsVUFBVSxJQUFJLENBQUNJLFVBQVU7b0JBRS9CSCxn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