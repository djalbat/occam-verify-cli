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
var _occamlanguages = require("occam-languages");
var _string = require("../utilities/string");
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
var compress = _necessary.arrayUtilities.compress, chainContext = _occamlanguages.contextUtilities.chainContext;
var LiminalContext = /*#__PURE__*/ function(Context) {
    _inherits(LiminalContext, Context);
    function LiminalContext(context, substitutions) {
        _class_call_check(this, LiminalContext);
        var _this;
        _this = _call_super(this, LiminalContext, [
            context
        ]);
        _this.substitutions = substitutions;
        return _possible_constructor_return(_this, chainContext(_this));
    }
    _create_class(LiminalContext, [
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                var substitutions;
                var context = this.getContext();
                substitutions = context.getSubstitutions();
                substitutions = _to_consumable_array(this.substitutions).concat(_to_consumable_array(substitutions));
                return substitutions;
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
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this, substitutionString = substitution.getString();
                this.substitutions = _to_consumable_array(this.substitutions).concat([
                    substitution
                ]);
                compress(this.substitutions, function(substitutionA, substitutionB) {
                    var substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);
                    if (substitutionAEqualToAssertionB) {
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
            key: "findSubstitution",
            value: function findSubstitution(callback) {
                return this.substitutions.find(callback);
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariable",
            value: function findSimpleSubstitutionByMetavariable(metavariable) {
                var simpleSubstitution = this.findSubstitution(function(substitution) {
                    var substitutionSimple = substitution.isSimple();
                    if (substitutionSimple) {
                        var simpleSubstitution = substitution, simpleSubstitutionMetavariableEqualToMetavariable = simpleSubstitution.isMetavariableEqualToMetavariable(metavariable);
                        if (simpleSubstitutionMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                }) || null;
                return simpleSubstitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableAndSubstitution",
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
                var substitutionA = substitution; ///
                substitution = this.findSubstitution(function(substitution) {
                    var substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);
                    if (substitutionMetavariableEqualToMetavariable) {
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
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQ29udGV4dCwgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbWluYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5zdWJzdGl0dXRpb25zLFxuICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgIF1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHRoaXMuc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIHN1YnN0aXR1dGlvblxuICAgIF07XG5cbiAgICBjb21wcmVzcyh0aGlzLnN1YnN0aXR1dGlvbnMsIChzdWJzdGl0dXRpb25BLCBzdWJzdGl0dXRpb25CKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuc3Vic3RpdHV0aW9ucyxcbiAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICBdO1xuXG4gICAgY29tcHJlc3ModGhpcy5zdWJzdGl0dXRpb25zLCAoc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9uQikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG5cbiAgICAgIGlmICghc3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoY2FsbGJhY2spIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblNpbXBsZSA9IHN1YnN0aXR1dGlvbi5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU2ltcGxlKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gc2ltcGxlU3Vic3RpdHV0aW9uLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25NZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJTdWJzdGl0dXRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbkIuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25BKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQlN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb25BKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgIC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBMaW1pbmFsQ29udGV4dChjb250ZXh0LCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbWluYWxDb250ZXh0IiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImNoYWluQ29udGV4dCIsImNvbnRleHRVdGlsaXRpZXMiLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRDb250ZXh0IiwiY29tbWl0IiwidW5kZWZpbmVkIiwiYWRkU3Vic3RpdHV0aW9ucyIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiaXNFcXVhbFRvIiwidHJhY2UiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwic3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21TdWJzdGl0dXRpb25zIiwiZmluZFN1YnN0aXR1dGlvbiIsImNhbGxiYWNrIiwiZmluZCIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblNpbXBsZSIsImlzU2ltcGxlIiwic2ltcGxlU3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25CU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbkEiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiZnJvbU5vdGhpbmciLCJlbXBoZW1lcmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVOzhCQUNXO3NCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBTSxBQUFFQyxXQUFh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