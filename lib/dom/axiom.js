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
var _necessary = require("necessary");
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
var _dom = require("../dom");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Axiom;
var match = _necessary.arrayUtilities.match;
var _default = (0, _dom.domAssigned)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom() {
        _class_call_check(this, Axiom);
        return _call_super(this, Axiom, arguments);
    }
    _create_class(Axiom, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var axiom = this, axiomString = axiom.getString(), fileContext = this.getFileContext();
                fileContext.trace("Verifying the '".concat(axiomString, "' axiom..."));
                verified = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                if (verified) {
                    var axiom1 = this; ///
                    fileContext.addAxiom(axiom1);
                    fileContext.debug("...verified the '".concat(axiomString, "' axiom."));
                }
                return verified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context) {
                var axiomLemmaTheoremConjectureUnified = false;
                var axiomString = this.getString(), axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture against the '").concat(axiomString, "' axiom..."));
                var fileContext = this.getFileContext(), substitutions = _substitutions.default.fromNothing(), generalContext = fileContext, specificContext = context; ///
                var suppositions;
                suppositions = this.getSuppositions();
                var generalSuppositions = suppositions; ///
                suppositions = axiomLemmaTheoremConjecture.getSuppositions();
                var specificSuppositions = suppositions, suppositionsMatch = match(generalSuppositions, specificSuppositions, function(generalSupposition, specificSupposition) {
                    var statement = specificSupposition.getStatement(), statementUnified = generalSupposition.unifyStatement(statement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        return true;
                    }
                });
                if (suppositionsMatch) {
                    var deduction;
                    deduction = this.getDeduction();
                    var generalDeduction = deduction; ///
                    deduction = axiomLemmaTheoremConjecture.getDeduction();
                    var specificDeduction = deduction, statement = specificDeduction.getStatement(), statementUnified = generalDeduction.unifyStatement(statement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        axiomLemmaTheoremConjectureUnified = true;
                    }
                }
                if (axiomLemmaTheoremConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture against the '").concat(axiomString, "' axiom."));
                }
                return axiomLemmaTheoremConjectureUnified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Axiom, json, fileContext);
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, fileContext) {
                return _topLevelAssertion.default.fromNode(Axiom, axiomNode, fileContext);
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSBhZ2FpbnN0IHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGxldCBzdXBwb3NpdGlvbnM7XG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2goZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIChnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgICAgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldERlZHVjdGlvbigpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIGFnYWluc3QgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tTm9kZShBeGlvbSwgYXhpb21Ob2RlLCBmaWxlQ29udGV4dCk7IH1cbn0pOyJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJBeGlvbSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJ0cmFjZSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImNvbnRleHQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zTWF0Y2giLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwiZGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21Ob2RlIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFUK0I7b0VBRUw7d0VBQ0k7bUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQVcsMEJBQUM7O2FBQU1DO2dDQUFBQTtlQUFOLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxFQUNaQyxjQUFjRCxNQUFNRSxTQUFTLElBQzdCQyxjQUFjLElBQUksQ0FBQ0MsY0FBYztnQkFFdkNELFlBQVlFLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSixhQUFZO2dCQUVoREYsV0FBVyx1QkFWa0JGLGtCQVVaQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTUMsU0FBUSxJQUFJLEVBQUUsR0FBRztvQkFFdkJHLFlBQVlHLFFBQVEsQ0FBQ047b0JBRXJCRyxZQUFZSSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWk4sYUFBWTtnQkFDcEQ7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNDLDJCQUEyQixFQUFFQyxPQUFPO2dCQUNuRSxJQUFJQyxxQ0FBcUM7Z0JBRXpDLElBQU1WLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCVSxvQ0FBb0NILDRCQUE0QlAsU0FBUztnQkFFL0VRLFFBQVFMLEtBQUssQ0FBQyxBQUFDLGlCQUF1R0osT0FBdkZXLG1DQUFrQyx1REFBaUUsT0FBWlgsYUFBWTtnQkFFbEksSUFBTUUsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNTLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCYixhQUNqQmMsa0JBQWtCUCxTQUFVLEdBQUc7Z0JBRXJDLElBQUlRO2dCQUVKQSxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFbkMsSUFBTUMsc0JBQXNCRixjQUFjLEdBQUc7Z0JBRTdDQSxlQUFlVCw0QkFBNEJVLGVBQWU7Z0JBRTFELElBQU1FLHVCQUF1QkgsY0FDdkJJLG9CQUFvQjVCLE1BQU0wQixxQkFBcUJDLHNCQUFzQixTQUFDRSxvQkFBb0JDO29CQUN4RixJQUFNQyxZQUFZRCxvQkFBb0JFLFlBQVksSUFDNUNDLG1CQUFtQkosbUJBQW1CSyxjQUFjLENBQUNILFdBQVdaLGVBQWVHLGdCQUFnQkM7b0JBRXJHLElBQUlVLGtCQUFrQjt3QkFDcEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixJQUFJTCxtQkFBbUI7b0JBQ3JCLElBQUlPO29CQUVKQSxZQUFZLElBQUksQ0FBQ0MsWUFBWTtvQkFFN0IsSUFBTUMsbUJBQW1CRixXQUFXLEdBQUc7b0JBRXZDQSxZQUFZcEIsNEJBQTRCcUIsWUFBWTtvQkFFcEQsSUFBTUUsb0JBQW9CSCxXQUNwQkosWUFBWU8sa0JBQWtCTixZQUFZLElBQzFDQyxtQkFBbUJJLGlCQUFpQkgsY0FBYyxDQUFDSCxXQUFXWixlQUFlRyxnQkFBZ0JDO29CQUVuRyxJQUFJVSxrQkFBa0I7d0JBQ3BCaEIscUNBQXFDO29CQUN2QztnQkFDRjtnQkFFQSxJQUFJQSxvQ0FBb0M7b0JBQ3RDRCxRQUFRSCxLQUFLLENBQUMsQUFBQyxtQkFBeUdOLE9BQXZGVyxtQ0FBa0MsdURBQWlFLE9BQVpYLGFBQVk7Z0JBQ3RJO2dCQUVBLE9BQU9VO1lBQ1Q7Ozs7WUFJT3NCLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRS9CLFdBQVc7Z0JBQUksT0FBT2dDLDBCQUFpQixDQUFDRixRQUFRLENBQUNwQyxPQUFPcUMsTUFBTS9CO1lBQWM7OztZQUUzRmlDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWxDLFdBQVc7Z0JBQUksT0FBT2dDLDBCQUFpQixDQUFDRyxRQUFRLENBQUN6QyxPQUFPd0MsV0FBV2xDO1lBQWM7Ozs7RUFuRnBFZ0MsMEJBQWlCLEdBK0U5RCx5QkFBT0ksUUFBTyJ9