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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Section;
var _default = (0, _ontology.define)((_Section = /*#__PURE__*/ function() {
    function Section(context, node, string, hypotheses, axiom, lemma, theorem, conjecture) {
        _class_call_check(this, Section);
        this.context = context;
        this.node = node;
        this.string = string;
        this.hypotheses = hypotheses;
        this.axiom = axiom;
        this.lemma = lemma;
        this.theorem = theorem;
        this.conjecture = conjecture;
    }
    _create_class(Section, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getHypotheses",
            value: function getHypotheses() {
                return this.hypotheses;
            }
        },
        {
            key: "getAxiom",
            value: function getAxiom() {
                return this.axiom;
            }
        },
        {
            key: "getLemma",
            value: function getLemma() {
                return this.lemma;
            }
        },
        {
            key: "getTheorem",
            value: function getTheorem() {
                return this.theorem;
            }
        },
        {
            key: "getConjecture",
            value: function getConjecture() {
                return this.conjecture;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var sectionString = this.string; ///
                this.context.trace("Verifying the '".concat(sectionString, "' section..."), this.node);
                var hypothesesVerify = this.verifyHypotheses();
                if (hypothesesVerify) {
                    var axiomLemmaTheoremOrConjecture = this.axiom || this.lemma || this.theorem || this.conjecture, axiomLemmaTheoremOrConjectureVerifies = axiomLemmaTheoremOrConjecture.verify(this.context);
                    if (axiomLemmaTheoremOrConjectureVerifies) {
                        axiomLemmaTheoremOrConjecture.setHypotheses(this.hypotheses);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(sectionString, "' section."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyHypotheses",
            value: function verifyHypotheses() {
                var _this = this;
                var hypothesesVerify = this.hypotheses.every(function(hypothesis) {
                    var hypothesisVerifies = hypothesis.verify(_this.context);
                    if (hypothesisVerifies) {
                        return true;
                    }
                });
                return hypothesesVerify;
            }
        }
    ], [
        {
            key: "fromSectionNode",
            value: function fromSectionNode(sectionNode, context) {
                var localContext = _local.default.fromNothing(context);
                context = localContext; ///
                var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFroSectionNode(sectionNode, context), lemma = lemmaFroSectionNode(sectionNode, context), theorem = theoremFroSectionNode(sectionNode, context), conjecture = conjectureFroSectionNode(sectionNode, context), node = sectionNode, string = stringFromHypothesesAxiomLemmaTheoremAndConjecture(hypotheses, axiom, lemma, theorem, conjecture, context), section = new Section(context, node, string, hypotheses, axiom, lemma, theorem, conjecture);
                return section;
            }
        }
    ]);
    return Section;
}(), _define_property(_Section, "name", "Section"), _Section));
function axiomFroSectionNode(sectionNode, context) {
    var axiom = null;
    var axiomNode = sectionNode.getAxiomNode();
    if (axiomNode !== null) {
        var Axiom = _ontology.default.Axiom;
        axiom = Axiom.fromAxiomNode(axiomNode, context);
    }
    return axiom;
}
function lemmaFroSectionNode(sectionNode, context) {
    var lemma = null;
    var lemmaNode = sectionNode.getLemmaNode();
    if (lemmaNode !== null) {
        var Lemma = _ontology.default.Lemma;
        lemma = Lemma.fromLemmaNode(lemmaNode, context);
    }
    return lemma;
}
function theoremFroSectionNode(sectionNode, context) {
    var theorem = null;
    var theoremNode = sectionNode.getTheoremNode();
    if (theoremNode !== null) {
        var Theorem = _ontology.default.Theorem;
        theorem = Theorem.fromTheoremNode(theoremNode, context);
    }
    return theorem;
}
function conjectureFroSectionNode(sectionNode, context) {
    var conjecture = null;
    var conjectureNode = sectionNode.getConjectureNode();
    if (conjectureNode !== null) {
        var Conjecture = _ontology.default.Conjecture;
        conjecture = Conjecture.fromConjectureNode(conjectureNode, context);
    }
    return conjecture;
}
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    var hypotheses = hypothesisNodes.map(function(hypothesisNode) {
        var Hypothesis = _ontology.default.Hypothesis, hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);
        return hypothesis;
    });
    return hypotheses;
}
function hypothesesStringFromHypotheses(hypotheses, context) {
    var hypothesesString = hypotheses.reduce(function(hypothesesString, hypothesis) {
        var hypothesisString = hypothesis.getString();
        hypothesesString = hypothesesString !== null ? "".concat(hypothesesString, ", ").concat(hypothesisString) : hypothesisString; ///
        return hypothesesString;
    }, null);
    return hypothesesString;
}
function stringFromHypothesesAxiomLemmaTheoremAndConjecture(hypotheses, axiom, lemma, theorem, conjecture, context) {
    var axiomLemmaTheoremOrConjecture = axiom || lemma || theorem || conjecture, axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString(), hypothesesString = hypothesesStringFromHypotheses(hypotheses, context), string = axiomLemmaTheoremOrConjectureString !== null ? "[".concat(hypothesesString, "]::: ").concat(axiomLemmaTheoremOrConjectureString) : "[".concat(hypothesesString, "]::: ");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gICAgdGhpcy5heGlvbSA9IGF4aW9tO1xuICAgIHRoaXMubGVtbWEgPSBsZW1tYTtcbiAgICB0aGlzLnRoZW9yZW0gPSB0aGVvcmVtO1xuICAgIHRoaXMuY29uamVjdHVyZSA9IGNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0QXhpb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBnZXRMZW1tYSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW1tYTtcbiAgfVxuXG4gIGdldFRoZW9yZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlb3JlbTtcbiAgfVxuXG4gIGdldENvbmplY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uamVjdHVyZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNlY3Rpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNWZXJpZnkgPSB0aGlzLnZlcmlmeUh5cG90aGVzZXMoKTtcblxuICAgIGlmIChoeXBvdGhlc2VzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9ICh0aGlzLmF4aW9tIHx8IHRoaXMubGVtbWEgfHwgdGhpcy50aGVvcmVtIHx8IHRoaXMuY29uamVjdHVyZSksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVZlcmlmaWVzID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUudmVyaWZ5KHRoaXMuY29udGV4dCk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLnNldEh5cG90aGVzZXModGhpcy5oeXBvdGhlc2VzKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUh5cG90aGVzZXMoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMuaHlwb3RoZXNlcy5ldmVyeSgoaHlwb3RoZXNpcykgPT4ge1xuICAgICAgY29uc3QgaHlwb3RoZXNpc1ZlcmlmaWVzID0gaHlwb3RoZXNpcy52ZXJpZnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzaXNWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2VzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNlY3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHNlY3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZShoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUsIGNvbnRleHQpLFxuICAgICAgICAgIHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGF4aW9tRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBBeGlvbSB9ID0gb250b2xvZ3k7XG5cbiAgICBheGlvbSA9IEF4aW9tLmZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZnVuY3Rpb24gbGVtbWFGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IExlbW1hIH0gPSBvbnRvbG9neTtcblxuICAgIGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5mdW5jdGlvbiB0aGVvcmVtRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFRoZW9yZW0gfSA9IG9udG9sb2d5O1xuXG4gICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5mdW5jdGlvbiBjb25qZWN0dXJlRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IENvbmplY3R1cmUgfSA9IG9udG9sb2d5O1xuXG4gICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzaXNOb2RlKSA9PiB7XG4gICAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5mdW5jdGlvbiBoeXBvdGhlc2VzU3RyaW5nRnJvbUh5cG90aGVzZXMoaHlwb3RoZXNlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzU3RyaW5nID0gaHlwb3RoZXNlcy5yZWR1Y2UoKGh5cG90aGVzZXNTdHJpbmcsIGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gaHlwb3RoZXNpcy5nZXRTdHJpbmcoKTtcblxuICAgIGh5cG90aGVzZXNTdHJpbmcgPSAoaHlwb3RoZXNlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke2h5cG90aGVzZXNTdHJpbmd9LCAke2h5cG90aGVzaXNTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBvdGhlc2lzU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSwgY29udGV4dCkge1xuICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldFN0cmluZygpLFxuICAgICAgICBoeXBvdGhlc2VzU3RyaW5nID0gaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzKGh5cG90aGVzZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgWyR7aHlwb3RoZXNlc1N0cmluZ31dOjo6ICR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICBgWyR7aHlwb3RoZXNlc1N0cmluZ31dOjo6IGA7XG5cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNlY3Rpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldEh5cG90aGVzZXMiLCJnZXRBeGlvbSIsImdldExlbW1hIiwiZ2V0VGhlb3JlbSIsImdldENvbmplY3R1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiZXZlcnkiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwiZnJvbVNlY3Rpb25Ob2RlIiwic2VjdGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiYXhpb21Gcm9TZWN0aW9uTm9kZSIsImxlbW1hRnJvU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvU2VjdGlvbk5vZGUiLCJjb25qZWN0dXJlRnJvU2VjdGlvbk5vZGUiLCJzdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZSIsInNlY3Rpb24iLCJuYW1lIiwiYXhpb21Ob2RlIiwiZ2V0QXhpb21Ob2RlIiwiQXhpb20iLCJvbnRvbG9neSIsImZyb21BeGlvbU5vZGUiLCJsZW1tYU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJMZW1tYSIsImZyb21MZW1tYU5vZGUiLCJ0aGVvcmVtTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsImZyb21UaGVvcmVtTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwibWFwIiwiaHlwb3RoZXNpc05vZGUiLCJIeXBvdGhlc2lzIiwiZnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzIiwiaHlwb3RoZXNlc1N0cmluZyIsInJlZHVjZSIsImh5cG90aGVzaXNTdHJpbmciLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHFCOzREQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl6QixXQUFlQSxJQUFBQSxnQkFBTSw0QkFBQzthQUFNQyxRQUNkQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0NBRHREUjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLE9BQU87WUFDckI7OztZ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