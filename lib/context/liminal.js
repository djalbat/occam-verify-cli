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
                var substitutions = this.getSubstitutions(), metavariableNames = (0, _substitutions.metavariableNamesFromSubstitutions)(substitutions);
                metavariableNames.forEach(function(metavariableName) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableName(metavariableName), complexSubstitutionsResolved = complexSubstitutions.every(function(complexSubstitution) {
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
                var substitutions = this.getSubstitutions(), metavariableNames = (0, _substitutions.metavariableNamesFromSubstitutions)(substitutions), resolved = metavariableNames.every(function(metavariableName) {
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableName(metavariableName), complexSubstitutionsResolved = complexSubstitutions.every(function(complexSubstitution) {
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
            key: "findSubstitutionByVariableIdentifier",
            value: function findSubstitutionByVariableIdentifier(variable) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionVariable = substitution.getVariable();
                    if (substitutionVariable !== null) {
                        var substitutionVariableMatchesVariableIdentifier = substitutionVariable.matchVariableIdentifier(variableIdentifier);
                        if (substitutionVariableMatchesVariableIdentifier) {
                            return true;
                        }
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableName",
            value: function findSubstitutionByMetavariableName(metavariableName) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionMatchesMetavariableName = substitution.matchMetavariableName(metavariableName);
                    if (substitutionMatchesMetavariableName) {
                        return true;
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableName",
            value: function findSimpleSubstitutionByMetavariableName(metavariableName) {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        var simpleSubstitution = substitution, simpleSubstitutionMatchesMetavariableName = simpleSubstitution.matchMetavariableName(metavariableName);
                        if (simpleSubstitutionMatchesMetavariableName) {
                            return true;
                        }
                    }
                }) || null;
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariableName",
            value: function findComplexSubstitutionsByMetavariableName(metavariableName) {
                var complexSubstitution = this.findSubstitutions(function(substitution) {
                    var substitutionComplex = substitution.isComplex();
                    if (substitutionComplex) {
                        var complexSubstitution = substitution, complexSubstitutionMatchesMetavariableName = complexSubstitution.matchMetavariableName(metavariableName);
                        if (complexSubstitutionMatchesMetavariableName) {
                            return true;
                        }
                    }
                }) || null;
                return complexSubstitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableNameAndSubstitution",
            value: function findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) {
                var substitutionA = substitution; ///
                substitution = this.findSubstitution(function(substitution) {
                    var substitutionMatchesMetavariableName = substitution.matchMetavariableName(metavariableName);
                    if (substitutionMatchesMetavariableName) {
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
            key: "isSimpleSubstitutionPresentByMetavariableName",
            value: function isSimpleSubstitutionPresentByMetavariableName(metavariableName) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName), simpleSubstitutionPresent = simpleSubstitution !== null;
                return simpleSubstitutionPresent;
            }
        },
        {
            key: "isSubstitutionPresentByMetavariableNameAndSubstitution",
            value: function isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) {
                substitution = this.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgeyBmaW5kLCBmaXJzdCwgcHJ1bmUsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNOb25Ucml2aWFsKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuZXN0ZWQpO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCksXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPSBub25Ucml2aWFsU3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiA9IGZpcnN0KG5vblRyaXZpYWxTdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICBzdWJzdGl0dXRpb25cbiAgICBdO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zU3RyaW5nRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5zdWJzdGl0dXRpb25zLFxuICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgcHJ1bmUodGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9zdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9zdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgUmVtb3ZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbnMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lcyA9IG1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBtZXRhdmFyaWFibGVOYW1lcy5mb3JFYWNoKChtZXRhdmFyaWFibGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5KChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lcyA9IG1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVOYW1lcy5ldmVyeSgobWV0YXZhcmlhYmxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeSgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIGNvbW1pdChjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9ucyh0aGlzLnN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoY2FsbGJhY2ssIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKG5lc3RlZCk7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gZmluZChzdWJzdGl0dXRpb25zLCBjYWxsYmFjayk7ICAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZU1hdGNoZXNWYXJpYWJsZUlkZW50aWZpZXIgPSBzdWJzdGl0dXRpb25WYXJpYWJsZS5tYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25WYXJpYWJsZU1hdGNoZXNWYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lID0gc2ltcGxlU3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IGNvbXBsZXhTdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uQi5jb21wYXJlKHN1YnN0aXR1dGlvbkEpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbik7ICAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgbGltaW5hbENvbnRleHQgPSBuZXcgTGltaW5hbENvbnRleHQoY29udGV4dCwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gbGltaW5hbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW1pbmFsQ29udGV4dCIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHJ1bmUiLCJjb21wcmVzcyIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiaXNFcXVhbFRvIiwidHJhY2UiLCJhZGRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsInJlbW92ZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvc3Vic3RpdHV0aW9uQiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVOYW1lcyIsIm1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMiLCJmb3JFYWNoIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lIiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImV2ZXJ5IiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwiaXNSZXNvbHZlZCIsInJlc29sdmUiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJjb21taXQiLCJ1bmRlZmluZWQiLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsInN1YnN0aXR1dGlvblZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZU1hdGNoZXNWYXJpYWJsZUlkZW50aWZpZXIiLCJtYXRjaFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsInNpbXBsZVN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEiLCJjb21wYXJlIiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJmcm9tTm90aGluZyIsImxpbWluYWxDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7NkJBQ29CO3NCQUNFOzhEQUVqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBUUMsT0FBaUNDLHlCQUFjLENBQS9DRCxNQUFNRSxRQUEyQkQseUJBQWMsQ0FBekNDLE9BQU9DLFFBQW9CRix5QkFBYyxDQUFsQ0UsT0FBT0MsV0FBYUgseUJBQWMsQ0FBM0JHO0FBRWIsSUFBQSxBQUFNTCwrQkFBTjtjQUFNQTthQUFBQSxlQUNQTSxPQUFPLEVBQUVDLGFBQWE7Z0NBRGZQOztnQkFFakIsa0JBRmlCQTtZQUVYTTs7UUFFTixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSkpQOztZQU9uQlEsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFpQkMsU0FBQUEsaUVBQVM7Z0JBQ3hCLElBQUlGO2dCQUVKLElBQUlFLFFBQVE7b0JBQ1YsSUFBTUgsVUFBVSxJQUFJLENBQUNJLFVBQVU7b0JBRS9CSCxnQkFBZ0JELFFBQVFF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