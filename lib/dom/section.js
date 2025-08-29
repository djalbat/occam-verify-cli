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
                    debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gICAgdGhpcy5heGlvbSA9IGF4aW9tO1xuICAgIHRoaXMubGVtbWEgPSBsZW1tYTtcbiAgICB0aGlzLnRoZW9yZW0gPSB0aGVvcmVtO1xuICAgIHRoaXMuY29uamVjdHVyZSA9IGNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0QXhpb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBnZXRMZW1tYSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW1tYTtcbiAgfVxuXG4gIGdldFRoZW9yZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlb3JlbTtcbiAgfVxuXG4gIGdldENvbmplY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uamVjdHVyZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNlY3Rpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlIeXBvdGhlc2VzKCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUh5cG90aGVzZXMoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMuaHlwb3RoZXNlcy5ldmVyeSgoaHlwb3RoZXNpcykgPT4ge1xuICAgICAgY29uc3QgaHlwb3RoZXNpc1ZlcmlmaWVzID0gaHlwb3RoZXNpcy52ZXJpZnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzaXNWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2VzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNlY3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUoaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlLCBjb250ZXh0KSxcbiAgICAgICAgICBzZWN0aW9uID0gbmV3IFNlY3Rpb24oY29udGV4dCwgc3RyaW5nLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBheGlvbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQXhpb20gfSA9IGRvbTtcblxuICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5mdW5jdGlvbiBsZW1tYUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTGVtbWEgfSA9IGRvbTtcblxuICAgIGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5mdW5jdGlvbiB0aGVvcmVtRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbTtcblxuICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZnVuY3Rpb24gY29uamVjdHVyZUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBkb207XG5cbiAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNpc05vZGUpID0+IHtcbiAgICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGRvbSxcbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5mdW5jdGlvbiBoeXBvdGhlc2VzU3RyaW5nRnJvbUh5cG90aGVzZXMoaHlwb3RoZXNlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzU3RyaW5nID0gaHlwb3RoZXNlcy5yZWR1Y2UoKGh5cG90aGVzZXNTdHJpbmcsIGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gaHlwb3RoZXNpcy5nZXRTdHJpbmcoKTtcblxuICAgIGh5cG90aGVzZXNTdHJpbmcgPSAoaHlwb3RoZXNlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke2h5cG90aGVzZXNTdHJpbmd9LCAke2h5cG90aGVzaXNTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBvdGhlc2lzU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSwgY29udGV4dCkge1xuICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldFN0cmluZygpLFxuICAgICAgICBoeXBvdGhlc2VzU3RyaW5nID0gaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzKGh5cG90aGVzZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgWyR7aHlwb3RoZXNlc1N0cmluZ31dOjo6ICR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICBgWyR7aHlwb3RoZXNlc1N0cmluZ31dOjo6IGA7XG5cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2VjdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJoeXBvdGhlc2VzIiwiYXhpb20iLCJsZW1tYSIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldEh5cG90aGVzZXMiLCJnZXRBeGlvbSIsImdldExlbW1hIiwiZ2V0VGhlb3JlbSIsImdldENvbmplY3R1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiZGVidWciLCJldmVyeSIsImh5cG90aGVzaXMiLCJoeXBvdGhlc2lzVmVyaWZpZXMiLCJmcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0IiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJheGlvbUZyb1NlY3Rpb25Ob2RlIiwibGVtbWFGcm9TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9TZWN0aW9uTm9kZSIsImNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZSIsInN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlIiwic2VjdGlvbiIsIm5hbWUiLCJheGlvbU5vZGUiLCJnZXRBeGlvbU5vZGUiLCJBeGlvbSIsImRvbSIsImZyb21BeGlvbU5vZGUiLCJsZW1tYU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJMZW1tYSIsImZyb21MZW1tYU5vZGUiLCJ0aGVvcmVtTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsImZyb21UaGVvcmVtTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwibWFwIiwiaHlwb3RoZXNpc05vZGUiLCJIeXBvdGhlc2lzIiwiZnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzIiwiaHlwb3RoZXNlc1N0cmluZyIsInJlZHVjZSIsImh5cG90aGVzaXNTdHJpbmciLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7NERBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXpCLFdBQWVBLElBQUFBLGdCQUFXLDRCQUFDO2FBQU1DLFFBQ25CQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUQz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