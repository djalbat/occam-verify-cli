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
    function Section(context, string, hypotheses, axiom, lemma, theorem, conjecture) {
        _class_call_check(this, Section);
        this.context = context;
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
                this.context.trace("Verifying the '".concat(sectionString, "' section..."));
                var hypothesesVerify = this.verifyHypotheses();
                if (hypothesesVerify) {
                    var axiomLemmaTheoremOrConjecture = this.axiom || this.lemma || this.theorem || this.conjecture, axiomLemmaTheoremOrConjectureVerifies = axiomLemmaTheoremOrConjecture.verify(this.context);
                    if (axiomLemmaTheoremOrConjectureVerifies) {
                        axiomLemmaTheoremOrConjecture.setHypotheses(this.hypotheses);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(sectionString, "' section."));
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
                var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFroSectionNode(sectionNode, context), lemma = lemmaFroSectionNode(sectionNode, context), theorem = theoremFroSectionNode(sectionNode, context), conjecture = conjectureFroSectionNode(sectionNode, context), string = stringFromHypothesesAxiomLemmaTheoremAndConjecture(hypotheses, axiom, lemma, theorem, conjecture, context), section = new Section(context, string, hypotheses, axiom, lemma, theorem, conjecture);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gICAgdGhpcy5heGlvbSA9IGF4aW9tO1xuICAgIHRoaXMubGVtbWEgPSBsZW1tYTtcbiAgICB0aGlzLnRoZW9yZW0gPSB0aGVvcmVtO1xuICAgIHRoaXMuY29uamVjdHVyZSA9IGNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0QXhpb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBnZXRMZW1tYSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW1tYTtcbiAgfVxuXG4gIGdldFRoZW9yZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlb3JlbTtcbiAgfVxuXG4gIGdldENvbmplY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uamVjdHVyZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNlY3Rpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlIeXBvdGhlc2VzKCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSAodGhpcy5heGlvbSB8fCB0aGlzLmxlbW1hIHx8IHRoaXMudGhlb3JlbSB8fCB0aGlzLmNvbmplY3R1cmUpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVWZXJpZmllcyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVWZXJpZmllcykge1xuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5zZXRIeXBvdGhlc2VzKHRoaXMuaHlwb3RoZXNlcyk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5SHlwb3RoZXNlcygpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy5oeXBvdGhlc2VzLmV2ZXJ5KChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBoeXBvdGhlc2lzLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZShoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUsIGNvbnRleHQpLFxuICAgICAgICAgIHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGF4aW9tRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBBeGlvbSB9ID0gZG9tO1xuXG4gICAgYXhpb20gPSBBeGlvbS5mcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXhpb207XG59XG5cbmZ1bmN0aW9uIGxlbW1hRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBMZW1tYSB9ID0gZG9tO1xuXG4gICAgbGVtbWEgPSBMZW1tYS5mcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmZ1bmN0aW9uIHRoZW9yZW1Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVGhlb3JlbSB9ID0gZG9tO1xuXG4gICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5mdW5jdGlvbiBjb25qZWN0dXJlRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGRvbTtcblxuICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2lzTm9kZSkgPT4ge1xuICAgIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZG9tLFxuICAgICAgICAgIGh5cG90aGVzaXMgPSBIeXBvdGhlc2lzLmZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNTdHJpbmdGcm9tSHlwb3RoZXNlcyhoeXBvdGhlc2VzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXNTdHJpbmcgPSBoeXBvdGhlc2VzLnJlZHVjZSgoaHlwb3RoZXNlc1N0cmluZywgaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSBoeXBvdGhlc2lzLmdldFN0cmluZygpO1xuXG4gICAgaHlwb3RoZXNlc1N0cmluZyA9IChoeXBvdGhlc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCR7aHlwb3RoZXNlc1N0cmluZ30sICR7aHlwb3RoZXNpc1N0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cG90aGVzaXNTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2VzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gaHlwb3RoZXNlc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUoaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSksXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh5cG90aGVzZXNTdHJpbmcgPSBoeXBvdGhlc2VzU3RyaW5nRnJvbUh5cG90aGVzZXMoaHlwb3RoZXNlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGBbJHtoeXBvdGhlc2VzU3RyaW5nfV06OjogJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgIGBbJHtoeXBvdGhlc2VzU3RyaW5nfV06OjogYDtcblxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTZWN0aW9uIiwiY29udGV4dCIsInN0cmluZyIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0SHlwb3RoZXNlcyIsImdldEF4aW9tIiwiZ2V0TGVtbWEiLCJnZXRUaGVvcmVtIiwiZ2V0Q29uamVjdHVyZSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2VjdGlvblN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNlc1ZlcmlmeSIsInZlcmlmeUh5cG90aGVzZXMiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVmVyaWZpZXMiLCJzZXRIeXBvdGhlc2VzIiwiZGVidWciLCJldmVyeSIsImh5cG90aGVzaXMiLCJoeXBvdGhlc2lzVmVyaWZpZXMiLCJmcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0IiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJheGlvbUZyb1NlY3Rpb25Ob2RlIiwibGVtbWFGcm9TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9TZWN0aW9uTm9kZSIsImNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZSIsInN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlIiwic2VjdGlvbiIsIm5hbWUiLCJheGlvbU5vZGUiLCJnZXRBeGlvbU5vZGUiLCJBeGlvbSIsImRvbSIsImZyb21BeGlvbU5vZGUiLCJsZW1tYU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJMZW1tYSIsImZyb21MZW1tYU5vZGUiLCJ0aGVvcmVtTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsImZyb21UaGVvcmVtTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwibWFwIiwiaHlwb3RoZXNpc05vZGUiLCJIeXBvdGhlc2lzIiwiZnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzIiwiaHlwb3RoZXNlc1N0cmluZyIsInJlZHVjZSIsImh5cG90aGVzaXNTdHJpbmciLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCOzREQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl6QixXQUFlQSxJQUFBQSxnQkFBVyw0QkFBQzthQUFNQyxRQUNuQkMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEM0NQO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsT0FBTztZQUNyQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsTUFBTTtZQUNwQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsVUFBVTtZQUN4Qjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsS0FBSztZQUNuQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1As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