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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), sectionNodeQuery = (0, _query.nodeQuery)("/section"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = (0, _query.nodeQuery)("/typePrefixDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), complexTypeDeclarationNodeQuery = (0, _query.nodeQuery)("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
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
            var Error = _ontology.default.Error, error = Error.fromErrorNode(errorNode, context), errorVerifies = error.verify();
            return errorVerifies;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, context) {
            var Rule = _ontology.default.Rule, rule = Rule.fromRuleNode(ruleNode, context), ruleVerifies = rule.verify();
            return ruleVerifies;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, context) {
            var Axiom = _ontology.default.Axiom, axiom = Axiom.fromAxiomNode(axiomNode, context), axiomVerifies = axiom.verify();
            return axiomVerifies;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, context) {
            var Lemma = _ontology.default.Lemma, lemma = Lemma.fromLemmaNode(lemmaNode, context), lemmaVerifies = lemma.verify();
            return lemmaVerifies;
        }
    },
    {
        nodeQuery: sectionNodeQuery,
        verify: function(sectionNode, context) {
            var Section = _ontology.default.Section, section = Section.fromSectionNode(sectionNode, context), sectionVerifies = section.verify();
            return sectionVerifies;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, context) {
            var Theorem = _ontology.default.Theorem, theorem = Theorem.fromTheoremNode(theoremNode, context), theoremVerifies = theorem.verify();
            return theoremVerifies;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, context) {
            var MetaLemma = _ontology.default.MetaLemma, metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context), metaLemmaVerifies = metaLemma.verify();
            return metaLemmaVerifies;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, context) {
            var Conjecture = _ontology.default.Conjecture, conjecture = Conjecture.fromConjectureNode(conjectureNode, context), conjectureVerifies = conjecture.verify();
            return conjectureVerifies;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, context) {
            var Metatheorem = _ontology.default.Metatheorem, metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context), metatheoremVerifies = metatheorem.verify();
            return metatheoremVerifies;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, context) {
            var VariableDeclaration = _ontology.default.VariableDeclaration, variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclarationVerifies = variableDeclaration.verify();
            return variableDeclarationVerifies;
        }
    },
    {
        nodeQuery: simpleTypeDeclarationNodeQuery,
        verify: function(simpleTypeDeclarationNode, context) {
            var SimpleTypeDeclaration = _ontology.default.SimpleTypeDeclaration, simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();
            return simpleTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: typePrefixDeclarationNodeQuery,
        verify: function(typePrefixDeclarationNode, context) {
            var TypePrefixDeclaration = _ontology.default.TypePrefixDeclaration, typePrefixDeclaration = TypePrefixDeclaration.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = typePrefixDeclaration.verify();
            return typePrefixDeclarationVerifies;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, context) {
            var CombinatorDeclaration = _ontology.default.CombinatorDeclaration, combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclarationVerifies = combinatorDeclaration.verify();
            return combinatorDeclarationVerifies;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, context) {
            var ConstructorDeclaration = _ontology.default.ConstructorDeclaration, constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclarationVerifies = constructorDeclaration.verify();
            return constructorDeclarationVerifies;
        }
    },
    {
        nodeQuery: complexTypeDeclarationNodeQuery,
        verify: function(complexTypeDeclarationNode, context) {
            var ComplexTypeDeclaration = _ontology.default.ComplexTypeDeclaration, complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = complexTypeDeclaration.verify();
            return complexTypeDeclarationVerifies;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, context) {
            var MetavariableDeclaration = _ontology.default.MetavariableDeclaration, metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclarationVerifies = metavariableDeclaration.verify();
            return metavariableDeclarationVerifies;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Vycm9yXCIpLFxuICAgICAgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgYXhpb21Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb21cIiksXG4gICAgICBsZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYVwiKSxcbiAgICAgIHNlY3Rpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2VjdGlvblwiKSxcbiAgICAgIHRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbVwiKSxcbiAgICAgIG1ldGFMZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhTGVtbWFcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2ltcGxlVHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVQcmVmaXhEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNBdFRvcExldmVsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZXNBdFRvcExldmVsID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllc0F0VG9wTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgRXJyb3IgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBlcnJvciA9IEVycm9yLmZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBlcnJvclZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAocnVsZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcnVsZVZlcmlmaWVzID0gcnVsZS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gcnVsZVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gYXhpb21WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChsZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBMZW1tYSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBsZW1tYVZlcmlmaWVzID0gbGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGxlbW1hVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHNlY3Rpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzZWN0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFNlY3Rpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBzZWN0aW9uID0gU2VjdGlvbi5mcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBzZWN0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRoZW9yZW0gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0aGVvcmVtVmVyaWZpZXMgPSB0aGVvcmVtLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB0aGVvcmVtVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGFMZW1tYVZlcmlmaWVzID0gbWV0YUxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhTGVtbWFWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllcyA9IGNvbmplY3R1cmUudmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdGhlb3JlbVZlcmlmaWVzID0gbWV0YXRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF0aGVvcmVtVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gVmFyaWFibGVEZWNsYXJhdGlvbi5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSB2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBTaW1wbGVUeXBlRGVjbGFyYXRpb24uZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IFR5cGVQcmVmaXhEZWNsYXJhdGlvbi5mcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMgPSB0eXBlUHJlZml4RGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gQ29uc3RydWN0b3JEZWNsYXJhdGlvbi5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gQ29tcGxleFR5cGVEZWNsYXJhdGlvbi5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxWZXJpZmllciA9IG5ldyBUb3BMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiZXJyb3JOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInNlY3Rpb25Ob2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZpZXNBdFRvcExldmVsIiwiY29udGV4dCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVzIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJvbnRvbG9neSIsImVycm9yIiwiZnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZXMiLCJydWxlTm9kZSIsIlJ1bGUiLCJydWxlIiwiZnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVzIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsImZyb21BeGlvbU5vZGUiLCJheGlvbVZlcmlmaWVzIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJsZW1tYSIsImZyb21MZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVzIiwic2VjdGlvbk5vZGUiLCJTZWN0aW9uIiwic2VjdGlvbiIsImZyb21TZWN0aW9uTm9kZSIsInNlY3Rpb25WZXJpZmllcyIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsInRoZW9yZW0iLCJmcm9tVGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZXMiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFWZXJpZmllcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJmcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZXMiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcyIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0b3BMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyTUE7OztlQUFBOzs7K0RBek1xQjsrREFDQTtxQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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