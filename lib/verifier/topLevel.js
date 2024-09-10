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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _error = /*#__PURE__*/ _interop_require_default(require("../verify/error"));
var _rule = /*#__PURE__*/ _interop_require_default(require("../verify/rule"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../verify/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../verify/lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../verify/theorem"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../verify/conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../verify/metatheorem"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/variable"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/metavariable"));
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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/rule"), axiomNodeQuery = (0, _query.nodeQuery)("/axiom"), lemmaNodeQuery = (0, _query.nodeQuery)("/lemma"), theoremNodeQuery = (0, _query.nodeQuery)("/theorem"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/metaLemma"), conjectureNodeQuery = (0, _query.nodeQuery)("/conjecture"), metatheoremNodeQuery = (0, _query.nodeQuery)("/metatheorem"), typeDeclarationNodeQuery = (0, _query.nodeQuery)("/typeDeclaration"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/variableDeclaration"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration");
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
                var verified;
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext);
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return TopLevelVerifier;
}(_verifier.default);
_define_property(TopLevelVerifier, "maps", [
    {
        nodeQuery: errorNodeQuery,
        verify: function(errorNode, fileContext) {
            var errorVerified = (0, _error.default)(errorNode, fileContext);
            return errorVerified;
        }
    },
    {
        nodeQuery: ruleNodeQuery,
        verify: function(ruleNode, fileContext) {
            var ruleVerified = (0, _rule.default)(ruleNode, fileContext);
            return ruleVerified;
        }
    },
    {
        nodeQuery: axiomNodeQuery,
        verify: function(axiomNode, fileContext) {
            var axiomVerified = (0, _axiom.default)(axiomNode, fileContext);
            return axiomVerified;
        }
    },
    {
        nodeQuery: lemmaNodeQuery,
        verify: function(lemmaNode, fileContext) {
            var lemmaVerified = (0, _lemma.default)(lemmaNode, fileContext);
            return lemmaVerified;
        }
    },
    {
        nodeQuery: theoremNodeQuery,
        verify: function(theoremNode, fileContext) {
            var theoremVerified = (0, _theorem.default)(theoremNode, fileContext);
            return theoremVerified;
        }
    },
    {
        nodeQuery: metaLemmaNodeQuery,
        verify: function(metaLemmaNode, fileContext) {
            var metaLemmaVerified = (0, _metaLemma.default)(metaLemmaNode, fileContext);
            return metaLemmaVerified;
        }
    },
    {
        nodeQuery: conjectureNodeQuery,
        verify: function(conjectureNode, fileContext) {
            var conjectureVerified = (0, _conjecture.default)(conjectureNode, fileContext);
            return conjectureVerified;
        }
    },
    {
        nodeQuery: metatheoremNodeQuery,
        verify: function(metatheoremNode, fileContext) {
            var metatheoremVerified = (0, _metatheorem.default)(metatheoremNode, fileContext);
            return metatheoremVerified;
        }
    },
    {
        nodeQuery: typeDeclarationNodeQuery,
        verify: function(typeDeclarationNode, fileContext) {
            var typeDeclarationVerified = (0, _type.default)(typeDeclarationNode, fileContext);
            return typeDeclarationVerified;
        }
    },
    {
        nodeQuery: variableDeclarationNodeQuery,
        verify: function(variableDeclarationNode, fileContext) {
            var variableDeclarationVerified = (0, _variable.default)(variableDeclarationNode, fileContext);
            return variableDeclarationVerified;
        }
    },
    {
        nodeQuery: combinatorDeclarationNodeQuery,
        verify: function(combinatorDeclarationNode, fileContext) {
            var combinatorDeclarationVerified = (0, _combinator.default)(combinatorDeclarationNode, fileContext);
            return combinatorDeclarationVerified;
        }
    },
    {
        nodeQuery: constructorDeclarationNodeQuery,
        verify: function(constructorDeclarationNode, fileContext) {
            var constructorDeclarationVerified = (0, _constructor.default)(constructorDeclarationNode, fileContext);
            return constructorDeclarationVerified;
        }
    },
    {
        nodeQuery: metavariableDeclarationNodeQuery,
        verify: function(metavariableDeclarationNode, fileContext) {
            var metavariableDeclarationVerified = (0, _metavariable.default)(metavariableDeclarationNode, fileContext);
            return metavariableDeclarationVerified;
        }
    }
]);
var topLevelVerifier = new TopLevelVerifier();
var _default = topLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IHZlcmlmeUVycm9yIGZyb20gXCIuLi92ZXJpZnkvZXJyb3JcIjtcbmltcG9ydCB2ZXJpZnlSdWxlIGZyb20gXCIuLi92ZXJpZnkvcnVsZVwiO1xuaW1wb3J0IHZlcmlmeUF4aW9tIGZyb20gXCIuLi92ZXJpZnkvYXhpb21cIjtcbmltcG9ydCB2ZXJpZnlMZW1tYSBmcm9tIFwiLi4vdmVyaWZ5L2xlbW1hXCI7XG5pbXBvcnQgdmVyaWZ5VGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlNZXRhTGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhTGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlDb25qZWN0dXJlIGZyb20gXCIuLi92ZXJpZnkvY29uamVjdHVyZVwiO1xuaW1wb3J0IHZlcmlmeU1ldGF0aGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvbWV0YXRoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9kZWNsYXJhdGlvbi90eXBlXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5Q29tYmluYXRvckRlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IHZlcmlmeUNvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIGNvbmplY3R1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF0aGVvcmVtXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChlcnJvck5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yVmVyaWZpZWQgPSB2ZXJpZnlFcnJvcihlcnJvck5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZXJyb3JWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBydWxlVmVyaWZpZWQgPSB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChheGlvbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tVmVyaWZpZWQgPSB2ZXJpZnlBeGlvbShheGlvbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gYXhpb21WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbW1hVmVyaWZpZWQgPSB2ZXJpZnlMZW1tYShsZW1tYU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YUxlbW1hVmVyaWZpZWQgPSB2ZXJpZnlNZXRhTGVtbWEobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhTGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25qZWN0dXJlVmVyaWZpZWQgPSB2ZXJpZnlDb25qZWN0dXJlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdGhlb3JlbShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlRGVjbGFyYXRpb24odHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0eXBlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb21iaW5hdG9yRGVjbGFyYXRpb24oY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsVmVyaWZpZXIgPSBuZXcgVG9wTGV2ZWxWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0b3BMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImVycm9yTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZU5vZGVRdWVyeSIsImF4aW9tTm9kZVF1ZXJ5IiwibGVtbWFOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwiZXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllZCIsInZlcmlmeUVycm9yIiwicnVsZU5vZGUiLCJydWxlVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlIiwiYXhpb21Ob2RlIiwiYXhpb21WZXJpZmllZCIsInZlcmlmeUF4aW9tIiwibGVtbWFOb2RlIiwibGVtbWFWZXJpZmllZCIsInZlcmlmeUxlbW1hIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZWQiLCJ2ZXJpZnlUaGVvcmVtIiwibWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVkIiwidmVyaWZ5TWV0YUxlbW1hIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlDb25qZWN0dXJlIiwibWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllZCIsInZlcmlmeU1ldGF0aGVvcmVtIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5Q29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkpBOzs7ZUFBQTs7OytEQXpKcUI7NERBQ0c7MkRBQ0Q7NERBQ0M7NERBQ0E7OERBQ0U7Z0VBQ0U7aUVBQ0M7a0VBQ0M7MkRBQ0k7K0RBQ0k7aUVBQ0U7a0VBQ0M7bUVBQ0M7cUJBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRyxpQkFBaUJILElBQUFBLGdCQUFTLEVBQUMsV0FDM0JJLG1CQUFtQkosSUFBQUEsZ0JBQVMsRUFBQyxhQUM3QksscUJBQXFCTCxJQUFBQSxnQkFBUyxFQUFDLGVBQy9CTSxzQkFBc0JOLElBQUFBLGdCQUFTLEVBQUMsZ0JBQ2hDTyx1QkFBdUJQLElBQUFBLGdCQUFTLEVBQUMsaUJBQ2pD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