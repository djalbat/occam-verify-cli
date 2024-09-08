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
var errorNodeQuery = (0, _query.nodeQuery)("/error"), ruleNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/rule!"), axiomNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/axiom!"), lemmaNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/lemma!"), theoremNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/theorem!"), metaLemmaNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/metaLemma!"), conjectureNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/conjecture!"), metatheoremNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/metatheorem!"), typeDeclarationNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/typeDeclaration!"), variableDeclarationNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/variableDeclaration!"), combinatorDeclarationNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/combinatorDeclaration!"), constructorDeclarationNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/constructorDeclaration!"), metavariableDeclarationNodeQuery = (0, _query.nodeQuery)("/topLevelAssertion/metavariableDeclaration!");
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
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90b3BMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IHZlcmlmeUVycm9yIGZyb20gXCIuLi92ZXJpZnkvZXJyb3JcIjtcbmltcG9ydCB2ZXJpZnlSdWxlIGZyb20gXCIuLi92ZXJpZnkvcnVsZVwiO1xuaW1wb3J0IHZlcmlmeUF4aW9tIGZyb20gXCIuLi92ZXJpZnkvYXhpb21cIjtcbmltcG9ydCB2ZXJpZnlMZW1tYSBmcm9tIFwiLi4vdmVyaWZ5L2xlbW1hXCI7XG5pbXBvcnQgdmVyaWZ5VGhlb3JlbSBmcm9tIFwiLi4vdmVyaWZ5L3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlNZXRhTGVtbWEgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhTGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlDb25qZWN0dXJlIGZyb20gXCIuLi92ZXJpZnkvY29uamVjdHVyZVwiO1xuaW1wb3J0IHZlcmlmeU1ldGF0aGVvcmVtIGZyb20gXCIuLi92ZXJpZnkvbWV0YXRoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlUeXBlRGVjbGFyYXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9kZWNsYXJhdGlvbi90eXBlXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5Q29tYmluYXRvckRlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vY29tYmluYXRvclwiO1xuaW1wb3J0IHZlcmlmeUNvbnN0cnVjdG9yRGVjbGFyYXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RvcExldmVsQXNzZXJ0aW9uL3J1bGUhXCIpLFxuICAgICAgYXhpb21Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdG9wTGV2ZWxBc3NlcnRpb24vYXhpb20hXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdG9wTGV2ZWxBc3NlcnRpb24vbGVtbWEhXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi90aGVvcmVtIVwiKSxcbiAgICAgIG1ldGFMZW1tYU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi9tZXRhTGVtbWEhXCIpLFxuICAgICAgY29uamVjdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi9jb25qZWN0dXJlIVwiKSxcbiAgICAgIG1ldGF0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RvcExldmVsQXNzZXJ0aW9uL21ldGF0aGVvcmVtIVwiKSxcbiAgICAgIHR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi90eXBlRGVjbGFyYXRpb24hXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi92YXJpYWJsZURlY2xhcmF0aW9uIVwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi9jb21iaW5hdG9yRGVjbGFyYXRpb24hXCIpLFxuICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90b3BMZXZlbEFzc2VydGlvbi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RvcExldmVsQXNzZXJ0aW9uL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uIVwiKTtcblxuY2xhc3MgVG9wTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvclZlcmlmaWVkID0gdmVyaWZ5RXJyb3IoZXJyb3JOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHJ1bGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChydWxlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZVZlcmlmaWVkID0gdmVyaWZ5UnVsZShydWxlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBydWxlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGF4aW9tTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbVZlcmlmaWVkID0gdmVyaWZ5QXhpb20oYXhpb21Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGF4aW9tVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsZW1tYVZlcmlmaWVkID0gdmVyaWZ5TGVtbWEobGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRoZW9yZW1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGhlb3JlbVZlcmlmaWVkID0gdmVyaWZ5VGhlb3JlbSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0aGVvcmVtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYVZlcmlmaWVkID0gdmVyaWZ5TWV0YUxlbW1hKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YUxlbW1hVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbmplY3R1cmVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZVZlcmlmaWVkID0gdmVyaWZ5Q29uamVjdHVyZShjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb25qZWN0dXJlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbVZlcmlmaWVkID0gdmVyaWZ5TWV0YXRoZW9yZW0obWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF0aGVvcmVtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZURlY2xhcmF0aW9uKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbih2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5Q29tYmluYXRvckRlY2xhcmF0aW9uKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5Q29uc3RydWN0b3JEZWNsYXJhdGlvbihjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlRGVjbGFyYXRpb24obWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFZlcmlmaWVyID0gbmV3IFRvcExldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wTGV2ZWxWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJlcnJvck5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGVRdWVyeSIsIm1ldGFMZW1tYU5vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlUXVlcnkiLCJtZXRhdGhlb3JlbU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJWZXJpZmllciIsIm1hcHMiLCJlcnJvck5vZGUiLCJlcnJvclZlcmlmaWVkIiwidmVyaWZ5RXJyb3IiLCJydWxlTm9kZSIsInJ1bGVWZXJpZmllZCIsInZlcmlmeVJ1bGUiLCJheGlvbU5vZGUiLCJheGlvbVZlcmlmaWVkIiwidmVyaWZ5QXhpb20iLCJsZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVkIiwidmVyaWZ5TGVtbWEiLCJ0aGVvcmVtTm9kZSIsInRoZW9yZW1WZXJpZmllZCIsInZlcmlmeVRoZW9yZW0iLCJtZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhTGVtbWEiLCJjb25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVWZXJpZmllZCIsInZlcmlmeUNvbmplY3R1cmUiLCJtZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbVZlcmlmaWVkIiwidmVyaWZ5TWV0YXRoZW9yZW0iLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeUNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0b3BMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErSkE7OztlQUFBOzs7K0RBN0pxQjs0REFDRzsyREFDRDs0REFDQzs0REFDQTs4REFDRTtnRUFDRTtpRUFDQztrRUFDQzsyREFDSTsrREFDSTtpRUFDRTtrRUFDQzttRUFDQztxQkFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7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