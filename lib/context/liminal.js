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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first;
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
                var context = this, substitutionA = substitution, substitutionString = substitution.getString();
                context.trace("Adding the '".concat(substitutionString, "' substitution to the liminal context..."));
                var substitutionB = this.substitutions.find(function(substitution) {
                    var substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToSubstitutionB) {
                        return true;
                    }
                }) || null;
                if (substitutionB !== null) {
                    context.trace("The '".concat(substitutionString, "' substitution has already been added to the liminal context."));
                } else {
                    this.substitutions.push(substitution);
                    context.debug("...added the '".concat(substitutionString, "' substitution to the liminal context."));
                }
            }
        },
        {
            key: "addSubstitutions",
            value: function addSubstitutions(substitutions) {
                var _this = this;
                substitutions.forEach(function(substitution) {
                    _this.addSubstitution(substitution);
                });
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
            value: function areSubstitutionsResolved() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNOb25Ucml2aWFsKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuZXN0ZWQpO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCksXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPSBub25Ucml2aWFsU3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiA9IGZpcnN0KG5vblRyaXZpYWxTdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgbGltaW5hbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgbGltaW5hbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBsaW1pbmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWVzID0gbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWVzLmZvckVhY2goKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZXMgPSBtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlTmFtZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBjb21taXQoY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnModGhpcy5zdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb24oY2FsbGJhY2ssIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKGNhbGxiYWNrLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9ucyhjYWxsYmFjaywgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucyhuZXN0ZWQpO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IGZpbmQoc3Vic3RpdHV0aW9ucywgY2FsbGJhY2spOyAgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVNYXRjaGVzVmFyaWFibGVJZGVudGlmaWVyID0gc3Vic3RpdHV0aW9uVmFyaWFibGUubWF0Y2hWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVmFyaWFibGVNYXRjaGVzVmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IHNpbXBsZVN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSBjb21wbGV4U3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuY29tcGFyZShzdWJzdGl0dXRpb25BKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGxpbWluYWxDb250ZXh0ID0gbmV3IExpbWluYWxDb250ZXh0KGNvbnRleHQsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGxpbWluYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGltaW5hbENvbnRleHQiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJpc0VxdWFsVG8iLCJwdXNoIiwiZGVidWciLCJhZGRTdWJzdGl0dXRpb25zIiwiZm9yRWFjaCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVOYW1lcyIsIm1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwicmVzb2x2ZSIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsImNvbW1pdCIsInVuZGVmaW5lZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInN1YnN0aXR1dGlvblZhcmlhYmxlTWF0Y2hlc1ZhcmlhYmxlSWRlbnRpZmllciIsIm1hdGNoVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Db21wbGV4IiwiaXNDb21wbGV4IiwiY29tcGxleFN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSIsImNvbXBhcmUiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImZyb21Ob3RoaW5nIiwibGltaW5hbENvbnRleHQiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTs2QkFDb0I7OERBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFRQyxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztBQUVDLElBQUEsQUFBTUgsK0JBQU47Y0FBTUE7YUFBQUEsZUFDUEksT0FBTyxFQUFFQyxhQUFhO2dDQURmTDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEk7O1FBRU4sTUFBS0MsYUFBYSxHQUFHQTs7O2tCQUpKTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBaUJDLFNBQUFBLGlFQUFTO2dCQUN4QixJQUFJRjtnQkFFSixJQUFJRSxRQUFRO29CQUNWLElBQU1ILFVBQVUsSUFBSSxDQUFDSSxVQUFVO29CQUUvQkgsZ0JBQWdCRCxRQUFRRSxnQkFBZ0I7b0JBRXhDRCxnQkFBZ0IsQUFDZCxxQkFBRyxJQUFJLENBQUNBLGFBQWEsU0FDckIscUJBQUdBO2dCQUVQLE9BQU87b0JBQ0xBLGdCQUFn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