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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Section = /*#__PURE__*/ function() {
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
                var localContext = _local.default.fromContext(context);
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
        var Axiom = _dom.default.Axiom;
        axiom = Axiom.fromAxiomNode(axiomNode, context);
    }
    return axiom;
}
function lemmaFroSectionNode(sectionNode, context) {
    var lemma = null;
    var lemmaNode = sectionNode.getLemmaNode();
    if (lemmaNode !== null) {
        var Lemma = _dom.default.Lemma;
        lemma = Lemma.fromLemmaNode(lemmaNode, context);
    }
    return lemma;
}
function theoremFroSectionNode(sectionNode, context) {
    var theorem = null;
    var theoremNode = sectionNode.getTheoremNode();
    if (theoremNode !== null) {
        var Theorem = _dom.default.Theorem;
        theorem = Theorem.fromTheoremNode(theoremNode, context);
    }
    return theorem;
}
function conjectureFroSectionNode(sectionNode, context) {
    var conjecture = null;
    var conjectureNode = sectionNode.getConjectureNode();
    if (conjectureNode !== null) {
        var Conjecture = _dom.default.Conjecture;
        conjecture = Conjecture.fromConjectureNode(conjectureNode, context);
    }
    return conjecture;
}
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    var hypotheses = hypothesisNodes.map(function(hypothesisNode) {
        var Hypothesis = _dom.default.Hypothesis, hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5sZW1tYSA9IGxlbW1hO1xuICAgIHRoaXMudGhlb3JlbSA9IHRoZW9yZW07XG4gICAgdGhpcy5jb25qZWN0dXJlID0gY29uamVjdHVyZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRBeGlvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5heGlvbTtcbiAgfVxuXG4gIGdldExlbW1hKCkge1xuICAgIHJldHVybiB0aGlzLmxlbW1hO1xuICB9XG5cbiAgZ2V0VGhlb3JlbSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVvcmVtO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25qZWN0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2VjdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5SHlwb3RoZXNlcygpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKHRoaXMuYXhpb20gfHwgdGhpcy5sZW1tYSB8fCB0aGlzLnRoZW9yZW0gfHwgdGhpcy5jb25qZWN0dXJlKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVmVyaWZpZXMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS52ZXJpZnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuc2V0SHlwb3RoZXNlcyh0aGlzLmh5cG90aGVzZXMpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5SHlwb3RoZXNlcygpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy5oeXBvdGhlc2VzLmV2ZXJ5KChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBoeXBvdGhlc2lzLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSwgY29udGV4dCksXG4gICAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXhpb21Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IEF4aW9tIH0gPSBkb207XG5cbiAgICBheGlvbSA9IEF4aW9tLmZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZnVuY3Rpb24gbGVtbWFGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IExlbW1hIH0gPSBkb207XG5cbiAgICBsZW1tYSA9IExlbW1hLmZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZnVuY3Rpb24gdGhlb3JlbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBUaGVvcmVtIH0gPSBkb207XG5cbiAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmZ1bmN0aW9uIGNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tO1xuXG4gICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzaXNOb2RlKSA9PiB7XG4gICAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBkb20sXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZnVuY3Rpb24gaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzKGh5cG90aGVzZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlc1N0cmluZyA9IGh5cG90aGVzZXMucmVkdWNlKChoeXBvdGhlc2VzU3RyaW5nLCBoeXBvdGhlc2lzKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IGh5cG90aGVzaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBoeXBvdGhlc2VzU3RyaW5nID0gKGh5cG90aGVzZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHtoeXBvdGhlc2VzU3RyaW5nfSwgJHtoeXBvdGhlc2lzU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaHlwb3RoZXNpc1N0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZShoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgaHlwb3RoZXNlc1N0cmluZyA9IGh5cG90aGVzZXNTdHJpbmdGcm9tSHlwb3RoZXNlcyhoeXBvdGhlc2VzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgYFske2h5cG90aGVzZXNTdHJpbmd9XTo6OiAke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgYFske2h5cG90aGVzZXNTdHJpbmd9XTo6OiBgO1xuXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlNlY3Rpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldEh5cG90aGVzZXMiLCJnZXRBeGlvbSIsImdldExlbW1hIiwiZ2V0VGhlb3JlbSIsImdldENvbmplY3R1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiZXZlcnkiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwiZnJvbVNlY3Rpb25Ob2RlIiwic2VjdGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiYXhpb21Gcm9TZWN0aW9uTm9kZSIsImxlbW1hRnJvU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvU2VjdGlvbk5vZGUiLCJjb25qZWN0dXJlRnJvU2VjdGlvbk5vZGUiLCJzdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZSIsInNlY3Rpb24iLCJuYW1lIiwiYXhpb21Ob2RlIiwiZ2V0QXhpb21Ob2RlIiwiQXhpb20iLCJkb20iLCJmcm9tQXhpb21Ob2RlIiwibGVtbWFOb2RlIiwiZ2V0TGVtbWFOb2RlIiwiTGVtbWEiLCJmcm9tTGVtbWFOb2RlIiwidGhlb3JlbU5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJmcm9tVGhlb3JlbU5vZGUiLCJjb25qZWN0dXJlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImZyb21Db25qZWN0dXJlTm9kZSIsIm1hcCIsImh5cG90aGVzaXNOb2RlIiwiSHlwb3RoZXNpcyIsImZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzZXNTdHJpbmdGcm9tSHlwb3RoZXNlcyIsImh5cG90aGVzZXNTdHJpbmciLCJyZWR1Y2UiLCJoeXBvdGhlc2lzU3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjs0REFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJekIsV0FBZUEsSUFBQUEsZ0JBQVcsNEJBQUM7YUFBTUMsUUFDbkJDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEakRSO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1IsT0FBTztZQUNyQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFP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