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
    function LiminalContext(context, terms, frames, substitutions) {
        _class_call_check(this, LiminalContext);
        var _this;
        _this = _call_super(this, LiminalContext, [
            context
        ]);
        _this.terms = terms;
        _this.frames = frames;
        _this.substitutions = substitutions;
        return _this;
    }
    _create_class(LiminalContext, [
        {
            key: "getTerms",
            value: function getTerms() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var terms;
                if (nested) {
                    var context = this.getContext();
                    terms = context.getTerms();
                    terms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                } else {
                    terms = this.terms;
                }
                return terms;
            }
        },
        {
            key: "getFrames",
            value: function getFrames() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var frames;
                if (nested) {
                    var context = this.getContext();
                    frames = context.getFrames();
                    frames = _to_consumable_array(this.frames).concat(_to_consumable_array(frames));
                } else {
                    frames = this.frames;
                }
                return frames;
            }
        },
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
                var soleNonTrivialSubstitutions = null;
                var nested = false, nonTrivialSubstitutions = this.getNonTrivialSubstitutions(nested), nonTrivialSubstitutionsLength = nonTrivialSubstitutions.length;
                if (nonTrivialSubstitutionsLength === 1) {
                    var firstNonTrivkalSubstitution = first(nonTrivialSubstitutions);
                    soleNonTrivialSubstitutions = firstNonTrivkalSubstitution; ///
                }
                return soleNonTrivialSubstitutions;
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
            key: "addTerm",
            value: function addTerm(term) {
                var context = this, termString = term.getString();
                this.terms = _to_consumable_array(this.terms).concat([
                    term
                ]);
                compress(this.terms, function(termA, termB) {
                    var termAEqualToTermB = termA.isEqualTo(termB);
                    if (!termAEqualToTermB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(termString, "' term to the context."));
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var context = this, frameString = frame.getString();
                this.frames = _to_consumable_array(this.frames).concat([
                    frame
                ]);
                compress(this.frames, function(frameA, frameB) {
                    var frameAEqualToFrameB = frameA.isEqualTo(frameB);
                    if (!frameAEqualToFrameB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(frameString, "' frame to the context."));
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
            key: "addTerms",
            value: function addTerms(terms) {
                var context = this, termsString = (0, _string.termsStringFromTerms)(terms);
                this.terms = _to_consumable_array(this.terms).concat(_to_consumable_array(terms));
                compress(this.terms, function(substitutionA, substitutionB) {
                    var substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(termsString, "' terms to the context."));
            }
        },
        {
            key: "addFrames",
            value: function addFrames(frames) {
                var context = this, framesString = (0, _string.framesStringFromFrames)(frames);
                this.frames = _to_consumable_array(this.frames).concat(_to_consumable_array(frames));
                compress(this.frames, function(substitutionA, substitutionB) {
                    var substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (!substitutionAEqualToAssertionB) {
                        return true;
                    }
                });
                context.trace("Added the '".concat(framesString, "' frames to the context."));
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
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                var terms = this.getTerms(), term = terms.find(function(term) {
                    var termNodeMatches = term.matchNode(termNode);
                    if (termNodeMatches) {
                        return true;
                    }
                }) || null;
                return term;
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                var frames = this.getFrames(), frame = frames.find(function(frame) {
                    var frameNodeMatches = frame.matchNode(frameNode);
                    if (frameNodeMatches) {
                        return true;
                    }
                }) || null;
                return frame;
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
                var terms = [], frames = [], substitutions = [], emphemeralContext = new LiminalContext(context, terms, frames, substitutions);
                return emphemeralContext;
            }
        }
    ]);
    return LiminalContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcywgZnJhbWVzU3RyaW5nRnJvbUZyYW1lcywgc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgeyBmaW5kLCBmaXJzdCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pbmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFRlcm1zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdGVybXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAgIC4uLnRlcm1zXG4gICAgICBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1zID0gdGhpcy50ZXJtcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBmcmFtZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAgIC4uLnRoaXMuZnJhbWVzLFxuICAgICAgICAuLi5mcmFtZXNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzID0gdGhpcy5mcmFtZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCBub25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc05vblRyaXZpYWwoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgbmVzdGVkKTtcblxuICAgIHJldHVybiBub25Ucml2aWFsU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKCkge1xuICAgIGxldCBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuXG4gICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKG5lc3RlZCksXG4gICAgICAgICAgbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPSBub25Ucml2aWFsU3Vic3RpdHV0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiA9IGZpcnN0KG5vblRyaXZpYWxTdWJzdGl0dXRpb25zKTtcblxuICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gZmlyc3ROb25Ucml2a2FsU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHRoaXMuc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50ZXJtcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgdGVybVxuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnRlcm1zLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgIGlmICghdGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIGZyYW1lXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuZnJhbWVzLCAoZnJhbWVBLCBmcmFtZUIpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG5cbiAgICAgIGlmICghZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICBzdWJzdGl0dXRpb25cbiAgICBdO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcyk7XG5cbiAgICB0aGlzLnRlcm1zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAuLi50ZXJtc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnRlcm1zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRGcmFtZXMoZnJhbWVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgZnJhbWVzU3RyaW5nID0gZnJhbWVzU3RyaW5nRnJvbUZyYW1lcyhmcmFtZXMpO1xuXG4gICAgdGhpcy5mcmFtZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5mcmFtZXMsXG4gICAgICAuLi5mcmFtZXNcbiAgICBdO1xuXG4gICAgY29tcHJlc3ModGhpcy5mcmFtZXMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKCFzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZnJhbWVzU3RyaW5nfScgZnJhbWVzIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbkEsIHN1YnN0aXR1dGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJlc29sdmVTdWJzdGl0dXRpb25zKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeSgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBjb21wbGV4U3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBzdWJzdGl0dXRpb24uaXNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24ucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICByZXNvbHZlZCA9IG1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbnMuZXZlcnkoKGNvbXBsZXhTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbnMoY2FsbGJhY2ssIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMobmVzdGVkKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBmaW5kKHN1YnN0aXR1dGlvbnMsIGNhbGxiYWNrKTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRoaXMuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaE5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU2ltcGxlID0gc3Vic3RpdHV0aW9uLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25TaW1wbGUpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBzaW1wbGVTdWJzdGl0dXRpb24uY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wbGV4ID0gc3Vic3RpdHV0aW9uLmlzQ29tcGxleCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGxleCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsQ29tcGFyZXNsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25BKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IExpbWluYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGltaW5hbENvbnRleHQiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImNvbXByZXNzIiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwibmVzdGVkIiwiZ2V0Q29udGV4dCIsImdldEZyYW1lcyIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsIm5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob25Ucml2aWFsIiwiaXNOb25Ucml2aWFsIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbiIsImNvbW1pdCIsInVuZGVmaW5lZCIsImFkZFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJ0cmFjZSIsImFkZEZyYW1lIiwiZnJhbWUiLCJmcmFtZVN0cmluZyIsImZyYW1lQSIsImZyYW1lQiIsImZyYW1lQUVxdWFsVG9GcmFtZUIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImFkZFRlcm1zIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtcyIsInN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZEZyYW1lcyIsImZyYW1lc1N0cmluZyIsImZyYW1lc1N0cmluZ0Zyb21GcmFtZXMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwic3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMiLCJmb3JFYWNoIiwibWV0YXZhcmlhYmxlIiwiY29tcGxleFN1YnN0aXR1dGlvbnMiLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJldmVyeSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsImlzUmVzb2x2ZWQiLCJyZXNvbHZlIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TaW1wbGUiLCJpc1NpbXBsZSIsInNpbXBsZVN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uQ29tcGxleCIsImlzQ29tcGxleCIsImNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxDb21wYXJlc2xUb01ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJmcm9tTm90aGluZyIsImVtcGhlbWVyYWxDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7NkJBQ2dCO3NCQUNvRDs4REFFL0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQVFDLE9BQTBCQyx5QkFBYyxDQUF4Q0QsTUFBTUUsUUFBb0JELHlCQUFjLENBQWxDQyxPQUFPQyxXQUFhRix5QkFBYyxDQUEzQkU7QUFFTixJQUFBLEFBQU1KLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1BLLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLGFBQWE7Z0NBRDlCUjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEs7O1FBRU4sTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxhQUFhLEdBQUdBOzs7a0JBTkpSOztZQVNuQlMsS0FBQUE7bUJB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