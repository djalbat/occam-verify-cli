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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtcywgZnJhbWVzU3RyaW5nRnJvbUZyYW1lcywgc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgeyBmaW5kLCBmaXJzdCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pbmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFRlcm1zKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdGVybXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAgIC4uLnRlcm1zXG4gICAgICBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1zID0gdGhpcy50ZXJtcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBmcmFtZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAgIC4uLnRoaXMuZnJhbWVzLFxuICAgICAgICAuLi5mcmFtZXNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzID0gdGhpcy5mcmFtZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldE5vblRyaXZpYWxTdWJzdGl0dXRpb25zKCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kU3Vic3RpdHV0aW9ucygoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9uVHJpdmlhbCA9IHN1YnN0aXR1dGlvbi5pc05vblRyaXZpYWwoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG5lc3RlZCk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbigpIHtcbiAgICBsZXQgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gbnVsbDtcblxuICAgIGNvbnN0IG5vblRyaXZpYWxTdWJzdGl0dXRpb25zID0gdGhpcy5nZXROb25Ucml2aWFsU3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIG5vblRyaXZpYWxTdWJzdGl0dXRpb25zTGVuZ3RoID0gbm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG5vblRyaXZpYWxTdWJzdGl0dXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb24gPSBmaXJzdChub25Ucml2aWFsU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9ucyA9IGZpcnN0Tm9uVHJpdmthbFN1YnN0aXR1dGlvbjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRlcm1zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICB0ZXJtXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMudGVybXMsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgICAgaWYgKCF0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcyk7XG5cbiAgICB0aGlzLnRlcm1zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudGVybXMsXG4gICAgICAuLi50ZXJtc1xuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnRlcm1zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIGZyYW1lXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuZnJhbWVzLCAoZnJhbWVBLCBmcmFtZUIpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG5cbiAgICAgIGlmICghZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkRnJhbWVzKGZyYW1lcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGZyYW1lc1N0cmluZyA9IGZyYW1lc1N0cmluZ0Zyb21GcmFtZXMoZnJhbWVzKTtcblxuICAgIHRoaXMuZnJhbWVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuZnJhbWVzLFxuICAgICAgLi4uZnJhbWVzXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuZnJhbWVzLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2ZyYW1lc1N0cmluZ30nIGZyYW1lcyB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5zdWJzdGl0dXRpb25zLFxuICAgICAgc3Vic3RpdHV0aW9uXG4gICAgXTtcblxuICAgIGNvbXByZXNzKHRoaXMuc3Vic3RpdHV0aW9ucywgKHN1YnN0aXR1dGlvbkEsIHN1YnN0aXR1dGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoIXN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICBdO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgcmVzb2x2ZVN1YnN0aXR1dGlvbnMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbWV0YXZhcmlhYmxlcy5mb3JFYWNoKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXhTdWJzdGl0dXRpb25zID0gdGhpcy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5KChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9ucy5ldmVyeSgoY29tcGxleFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIGNvbW1pdChjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9ucyh0aGlzLnN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25zKGNhbGxiYWNrLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKG5lc3RlZCk7XG5cbiAgICBzdWJzdGl0dXRpb25zID0gZmluZChzdWJzdGl0dXRpb25zLCBjYWxsYmFjayk7ICAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0aGlzLmdldEZyYW1lcygpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gc2ltcGxlU3Vic3RpdHV0aW9uLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9ucyA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbnMoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGxleCA9IHN1YnN0aXR1dGlvbi5pc0NvbXBsZXgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBsZXgpIHtcbiAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gY29tcGxleFN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxDb21wYXJlc2xUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NZXRhdmFyaWFibENvbXBhcmVzbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb25CLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uQSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7ICAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJjb21wcmVzcyIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRUZXJtcyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXRGcmFtZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0Tm9uVHJpdmlhbFN1YnN0aXR1dGlvbnMiLCJub25Ucml2aWFsU3Vic3RpdHV0aW9ucyIsImZpbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9uVHJpdmlhbCIsImlzTm9uVHJpdmlhbCIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwic29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb25zIiwibm9uVHJpdmlhbFN1YnN0aXR1dGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vblRyaXZrYWxTdWJzdGl0dXRpb24iLCJhZGRUZXJtIiwidGVybSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJ0cmFjZSIsImFkZFRlcm1zIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtcyIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZnJhbWVBIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZEZyYW1lcyIsImZyYW1lc1N0cmluZyIsImZyYW1lc1N0cmluZ0Zyb21GcmFtZXMiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIiwiZm9yRWFjaCIsIm1ldGF2YXJpYWJsZSIsImNvbXBsZXhTdWJzdGl0dXRpb25zIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJpc1Jlc29sdmVkIiwicmVzb2x2ZSIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCIsImNvbW1pdCIsInVuZGVmaW5lZCIsImZpbmRTdWJzdGl0dXRpb24iLCJjYWxsYmFjayIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU2ltcGxlIiwiaXNTaW1wbGUiLCJzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbkNvbXBsZXgiLCJpc0NvbXBsZXgiLCJjb21wbGV4U3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsQ29tcGFyZXNsVG9NZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiZnJvbU5vdGhpbmciLCJlbXBoZW1lcmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOzZCQUNnQjtzQkFDb0Q7OERBRS9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFRQyxPQUEwQkMseUJBQWMsQ0FBeENELE1BQU1FLFFBQW9CRCx5QkFBYyxDQUFsQ0MsT0FBT0MsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRU4sSUFBQSxBQUFNSiwrQkFBTjtjQUFNQTthQUFBQSxlQUNQSyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxhQUFhO2dDQUQ5QlI7O2dCQUVqQixrQkFGaUJBO1lBRVhLOztRQUVOLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsYUFBYSxHQUFHQTs7O2tCQU5KUjs7WUFTbkJTLEtBQUFBO21C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