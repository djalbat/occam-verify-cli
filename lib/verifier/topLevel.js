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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _query = require("../utilities/query");
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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), sectionNodeQuery = (0, _query.nodeQuery)("/section"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/simpleTypeDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
var TopLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TopLevelVerifier, Verifier);
    function TopLevelVerifier() {
        _class_call_check(this, TopLevelVerifier);
        return _call_super(this, TopLevelVerifier, arguments);
    }
    _create_class(TopLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, fileContext) {
                var verifiesAtTopLevel;
                var context = fileContext, nonTerminalNode = node, nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNode, context);
                verifiesAtTopLevel = nonTerminalNodeVerifies; ///
                return verifiesAtTopLevel;
            }
        }
    ]);
    return TopLevelVerifier;
}(_verifier.default);
_define_property(TopLevelVerifier, "maps", [
    {
        nodeQuery: errorNodeQuery,
        verify: function(errorNode, context) {
            var Error = _dom.default.Error, error = Error.fromErrorNode(errorNode, context), errorVerifies = error.verify();
            return errorVerifies;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, context) {
            var Rule = _dom.default.Rule, rule = Rule.fromRuleNode(ruleNode, context), ruleVerifies = rule.verify();
            return ruleVerifies;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, context) {
            var Axiom = _dom.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, context), axiomVerifies = axiom.verify();
            return axiomVerifies;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, context) {
            var Lemma = _dom.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, context), lemmaVerifies = lemma.verify();
            return lemmaVerifies;
        }
    },
    {
        nodeQuery: sectionNodeQuery,
        verify: function(sectionNode, context) {
            var Section = _dom.default.Section, section = Section.fromSectionNode(sectionNode, context), sectionVerifies = section.verify();
            return sectionVerifies;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, context) {
            var Theorem = _dom.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, context), theoremVerifies = theorem.verify();
            return theoremVerifies;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, context) {
            var MetaLemma = _dom.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context), metaLemmaVerifies = metaLemma.verify();
            return metaLemmaVerifies;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, context) {
            var Conjecture = _dom.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, context), conjectureVerifies = conjecture.verify();
            return conjectureVerifies;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, context) {
            var Metatheorem = _dom.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context), metatheoremVerifies = metatheorem.verify();
            return metatheoremVerifies;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, context) {
            var VariableDeclaration = _dom.default.VariableDeclaration, variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclarationVerifies = variableDeclaration.verify();
            return variableDeclarationVerifies;
        }
    },
    {
        nodeQuery: simpleTypeDeclarationNodeQuery,
        verify: function(simpleTypeDeclarationNode, context) {
            var SimpleTypeDeclaration = _dom.default.SimpleTypeDeclaration, simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();
            return simpleTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, context) {
            var CombinatorDeclaration = _dom.default.CombinatorDeclaration, combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclarationVerifies = combinatorDeclaration.verify();
            return combinatorDeclarationVerifies;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, context) {
            var ConstructorDeclaration = _dom.default.ConstructorDeclaration, constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclarationVerifies = constructorDeclaration.verify();
            return constructorDeclarationVerifies;
        }
    },
    {
        nodeQuery: complexTypeDeclarationNodeQuery,
        verify: function(complexTypeDeclarationNode, context) {
            var ComplexTypeDeclaration = _dom.default.ComplexTypeDeclaration, complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = complexTypeDeclaration.verify();
            return complexTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, context) {
            var MetavariableDeclaration = _dom.default.MetavariableDeclaration, metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclarationVerifies = metavariableDeclaration.verify();
            return metavariableDeclarationVerifies;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgc2VjdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWN0aW9uXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uXCIpLFxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaW1wbGVUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBsZXhUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHZlcmlmaWVzQXRUb3BMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZXNBdFRvcExldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGVycm9yTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IEVycm9yIH0gPSBkb20sXG4gICAgICAgICAgICAgIGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVzID0gZXJyb3IudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFJ1bGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcnVsZVZlcmlmaWVzID0gcnVsZS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gcnVsZVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBheGlvbVZlcmlmaWVzID0gYXhpb20udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGF4aW9tVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTGVtbWEgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZXMgPSBsZW1tYS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2VjdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgU2VjdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBzZWN0aW9uID0gU2VjdGlvbi5mcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBzZWN0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGhlb3JlbVZlcmlmaWVzID0gdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gdGhlb3JlbVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBkb20sXG4gICAgICAgICAgICAgIG1ldGFMZW1tYSA9IE1ldGFMZW1tYS5mcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGFMZW1tYVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllcyA9IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXRoZW9yZW1WZXJpZmllcyA9IG1ldGF0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdGhlb3JlbVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBWYXJpYWJsZURlY2xhcmF0aW9uLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IHZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBTaW1wbGVUeXBlRGVjbGFyYXRpb24uZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBDb21iaW5hdG9yRGVjbGFyYXRpb24uZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzID0gY29tYmluYXRvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gQ29uc3RydWN0b3JEZWNsYXJhdGlvbi5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IENvbXBsZXhUeXBlRGVjbGFyYXRpb24uZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24uZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFZlcmlmaWVyID0gbmV3IFRvcExldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJlcnJvck5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5Iiwic2VjdGlvbk5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllc0F0VG9wTGV2ZWwiLCJjb250ZXh0Iiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZXMiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJWZXJpZmllciIsIm1hcHMiLCJlcnJvck5vZGUiLCJFcnJvciIsImRvbSIsImVycm9yIiwiZnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZXMiLCJydWxlTm9kZSIsIlJ1bGUiLCJydWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVzIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsImZyb21BeGlvbU5vZGUiLCJheGlvbVZlcmlmaWVzIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJsZW1tYSIsImZyb21MZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVzIiwic2VjdGlvbk5vZGUiLCJTZWN0aW9uIiwic2VjdGlvbiIsImZyb21TZWN0aW9uTm9kZSIsInNlY3Rpb25WZXJpZmllcyIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsInRoZW9yZW0iLCJmcm9tVGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZXMiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFWZXJpZmllcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJmcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZXMiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwidG9wTGV2ZWxWZXJpZmllciJdLCJt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