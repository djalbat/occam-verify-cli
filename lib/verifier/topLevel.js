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
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _error = /*#__PURE__*/ _interop_require_default(require("../verify/error"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../verify/axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../verify/lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../verify/theorem"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../verify/metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../verify/conjecture"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../verify/metatheorem"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../declaration/combinator"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/variable"));
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
            var rule = _rule.default.fromRuleNode(ruleNode, fileContext), ruleVerified = rule.verify(ruleNode, fileContext);
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
            var combinatorDeclaration = _combinator.default.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclarationVerified = combinatorDeclaration.verify(fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlFcnJvciBmcm9tIFwiLi4vdmVyaWZ5L2Vycm9yXCI7XG5pbXBvcnQgdmVyaWZ5QXhpb20gZnJvbSBcIi4uL3ZlcmlmeS9heGlvbVwiO1xuaW1wb3J0IHZlcmlmeUxlbW1hIGZyb20gXCIuLi92ZXJpZnkvbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlUaGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvdGhlb3JlbVwiO1xuaW1wb3J0IHZlcmlmeU1ldGFMZW1tYSBmcm9tIFwiLi4vdmVyaWZ5L21ldGFMZW1tYVwiO1xuaW1wb3J0IHZlcmlmeUNvbmplY3R1cmUgZnJvbSBcIi4uL3ZlcmlmeS9jb25qZWN0dXJlXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXRoZW9yZW0gZnJvbSBcIi4uL3ZlcmlmeS9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IENvbWJpbmF0b3JEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IHZlcmlmeVR5cGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3R5cGVcIjtcbmltcG9ydCB2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vY29uc3RydWN0b3JcIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Vycm9yXCIpLFxuICAgICAgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgYXhpb21Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb21cIiksXG4gICAgICBsZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYVwiKSxcbiAgICAgIHRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbVwiKSxcbiAgICAgIG1ldGFMZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhTGVtbWFcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb25cIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFRvcExldmVsVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvclZlcmlmaWVkID0gdmVyaWZ5RXJyb3IoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHJ1bGUudmVyaWZ5KHJ1bGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogYXhpb21Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChheGlvbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tVmVyaWZpZWQgPSB2ZXJpZnlBeGlvbShheGlvbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gYXhpb21WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbGVtbWFOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbW1hVmVyaWZpZWQgPSB2ZXJpZnlMZW1tYShsZW1tYU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YUxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YUxlbW1hVmVyaWZpZWQgPSB2ZXJpZnlNZXRhTGVtbWEobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhTGVtbWFWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb25qZWN0dXJlVmVyaWZpZWQgPSB2ZXJpZnlDb25qZWN0dXJlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogbWV0YXRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdGhlb3JlbShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlRGVjbGFyYXRpb24odHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0eXBlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZURlY2xhcmF0aW9uKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uID0gQ29tYmluYXRvckRlY2xhcmF0aW9uLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbihjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlRGVjbGFyYXRpb24obWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFZlcmlmaWVyID0gbmV3IFRvcExldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJlcnJvck5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGVRdWVyeSIsIm1ldGFMZW1tYU5vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlUXVlcnkiLCJtZXRhdGhlb3JlbU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsImVycm9yTm9kZSIsImVycm9yVmVyaWZpZWQiLCJ2ZXJpZnlFcnJvciIsInJ1bGVOb2RlIiwicnVsZSIsIlJ1bGUiLCJmcm9tUnVsZU5vZGUiLCJydWxlVmVyaWZpZWQiLCJheGlvbU5vZGUiLCJheGlvbVZlcmlmaWVkIiwidmVyaWZ5QXhpb20iLCJsZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVkIiwidmVyaWZ5TGVtbWEiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW1WZXJpZmllZCIsInZlcmlmeVRoZW9yZW0iLCJtZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhTGVtbWEiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVWZXJpZmllZCIsInZlcmlmeUNvbmplY3R1cmUiLCJtZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVkIiwidmVyaWZ5TWV0YXRoZW9yZW0iLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInRvcExldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZKQTs7O2VBQUE7OzsyREEzSmlCOytEQUNJOzREQUNHOzREQUNBOzREQUNBOzhEQUNFO2dFQUNFO2lFQUNDO2tFQUNDO2lFQUNJOzJEQUNBOytEQUNJO2tFQUNHO21FQUNDO3FCQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCQyxnQkFBZ0JELElBQUFB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