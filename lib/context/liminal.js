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
                    context.debug("The '".concat(substitutionString, "' substitution has already been added to the liminal context."));
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
                    var complexSubstitutions = _this.findComplexSubstitutionsByMetavariableName(metavariableName);
                    complexSubstitutions.forEach(function(complexSubstitution) {
                        var substitution = complexSubstitution, resolved = substitution.isResolved();
                        if (!resolved) {
                            substitution.resolve(generalContext, specificContext);
                        }
                    });
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
                context.debug("Commiting the limiinal context");
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
            key: "findSubstitutionByVariableIdentifier",
            value: function findSubstitutionByVariableIdentifier(variableIdentifier) {
                var substitution = this.findSubstitution(function(substitution) {
                    var substitutionComparesToVariableIdentifier = substitution.compareVariableIdentifier(variableIdentifier);
                    if (substitutionComparesToVariableIdentifier) {
                        return true;
                    }
                }) || null;
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableName",
            value: function findSubstitutionByMetavariableName(metavariableName) {
                var simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName), substitution = simpleSubstitution; ///
                return substitution;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableName",
            value: function findSimpleSubstitutionByMetavariableName(metavariableName) {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        var simpleSubstitution = substitution, simpleSubstitutionComparesToMetavariableName = simpleSubstitution.compareMetavariableName(metavariableName);
                        if (simpleSubstitutionComparesToMetavariableName) {
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
                        var complexSubstitution = substitution, complexSubstitutionComparesToMetavariableName = complexSubstitution.compareMetavariableName(metavariableName);
                        if (complexSubstitutionComparesToMetavariableName) {
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
                    var substitutionComparesToMetavariableName = substitution.compareMetavariableName(metavariableName);
                    if (substitutionComparesToMetavariableName) {
                        var substitutionB = substitution, substitutionBEqualToSubstitutionA = substitutionB.isEqualTo(substitutionA);
                        if (substitutionBEqualToSubstitutionA) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IGZpbmQsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGltaW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vblRyaXZpYWwgPSBzdWJzdGl0dXRpb24uaXNOb25Ucml2aWFsKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuZXN0ZWQpO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24obmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCksXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPSBub25Ucml2aWFsU3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiA9IGZpcnN0KG5vblRyaXZpYWxTdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgbGltaW5hbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgbGltaW5hbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBsaW1pbmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWVzID0gbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWVzLmZvckVhY2goKG1ldGF2YXJpYWJsZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zLmZvckVhY2goKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29tcGxleFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHJlc29sdmVkID0gc3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lcyA9IG1ldGF2YXJpYWJsZU5hbWVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgcmVzb2x2ZWQgPSBtZXRhdmFyaWFibGVOYW1lcy5ldmVyeSgobWV0YXZhcmlhYmxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeSgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIGNvbW1pdChjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYENvbW1pdGluZyB0aGUgbGltaWluYWwgY29udGV4dGApO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHRoaXMuc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2ssIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBmaW5kKHN1YnN0aXR1dGlvbnMsIGNhbGxiYWNrKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gc2ltcGxlU3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25zKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBsZXggPSBzdWJzdGl0dXRpb24uaXNDb21wbGV4KCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wbGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29tcGxleFN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQkVxdWFsVG9TdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uQi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsaW1pbmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBsaW1pbmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJuZXN0ZWQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9uVHJpdmlhbCIsImlzTm9uVHJpdmlhbCIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwic29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwibm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiaXNFcXVhbFRvIiwiZGVidWciLCJwdXNoIiwiYWRkU3Vic3RpdHV0aW9ucyIsImZvckVhY2giLCJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibWV0YXZhcmlhYmxlTmFtZXMiLCJtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwiaXNSZXNvbHZlZCIsInJlc29sdmUiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJldmVyeSIsImNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJjb21taXQiLCJ1bmRlZmluZWQiLCJmaW5kU3Vic3RpdHV0aW9uIiwiY2FsbGJhY2siLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJzaW1wbGVTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbkJFcXVhbFRvU3Vic3RpdHV0aW9uQSIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiZnJvbU5vdGhpbmciLCJsaW1pbmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVOzZCQUNvQjs4REFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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