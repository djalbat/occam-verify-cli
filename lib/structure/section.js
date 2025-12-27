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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Section = /*#__PURE__*/ function() {
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
        var Axiom = _structure.default.Axiom;
        axiom = Axiom.fromAxiomNode(axiomNode, context);
    }
    return axiom;
}
function lemmaFroSectionNode(sectionNode, context) {
    var lemma = null;
    var lemmaNode = sectionNode.getLemmaNode();
    if (lemmaNode !== null) {
        var Lemma = _structure.default.Lemma;
        lemma = Lemma.fromLemmaNode(lemmaNode, context);
    }
    return lemma;
}
function theoremFroSectionNode(sectionNode, context) {
    var theorem = null;
    var theoremNode = sectionNode.getTheoremNode();
    if (theoremNode !== null) {
        var Theorem = _structure.default.Theorem;
        theorem = Theorem.fromTheoremNode(theoremNode, context);
    }
    return theorem;
}
function conjectureFroSectionNode(sectionNode, context) {
    var conjecture = null;
    var conjectureNode = sectionNode.getConjectureNode();
    if (conjectureNode !== null) {
        var Conjecture = _structure.default.Conjecture;
        conjecture = Conjecture.fromConjectureNode(conjectureNode, context);
    }
    return conjecture;
}
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    var hypotheses = hypothesisNodes.map(function(hypothesisNode) {
        var Hypothesis = _structure.default.Hypothesis, hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICAgIHRoaXMuYXhpb20gPSBheGlvbTtcbiAgICB0aGlzLmxlbW1hID0gbGVtbWE7XG4gICAgdGhpcy50aGVvcmVtID0gdGhlb3JlbTtcbiAgICB0aGlzLmNvbmplY3R1cmUgPSBjb25qZWN0dXJlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldEF4aW9tKCkge1xuICAgIHJldHVybiB0aGlzLmF4aW9tO1xuICB9XG5cbiAgZ2V0TGVtbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVtbWE7XG4gIH1cblxuICBnZXRUaGVvcmVtKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW9yZW07XG4gIH1cblxuICBnZXRDb25qZWN0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmplY3R1cmU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzZWN0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlIeXBvdGhlc2VzKCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSAodGhpcy5heGlvbSB8fCB0aGlzLmxlbW1hIHx8IHRoaXMudGhlb3JlbSB8fCB0aGlzLmNvbmplY3R1cmUpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVWZXJpZmllcyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVWZXJpZmllcykge1xuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5zZXRIeXBvdGhlc2VzKHRoaXMuaHlwb3RoZXNlcyk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlIeXBvdGhlc2VzKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNWZXJpZnkgPSB0aGlzLmh5cG90aGVzZXMuZXZlcnkoKGh5cG90aGVzaXMpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90aGVzaXNWZXJpZmllcyA9IGh5cG90aGVzaXMudmVyaWZ5KHRoaXMuY29udGV4dCk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2lzVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTZWN0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc05vZGVzID0gc2VjdGlvbk5vZGUuZ2V0SHlwb3RoZXNpc05vZGVzKCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUoaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlLCBjb250ZXh0KSxcbiAgICAgICAgICBzZWN0aW9uID0gbmV3IFNlY3Rpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBheGlvbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQXhpb20gfSA9IHN0cnVjdHVyZTtcblxuICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5mdW5jdGlvbiBsZW1tYUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTGVtbWEgfSA9IHN0cnVjdHVyZTtcblxuICAgIGxlbW1hID0gTGVtbWEuZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5mdW5jdGlvbiB0aGVvcmVtRnJvU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFRoZW9yZW0gfSA9IHN0cnVjdHVyZTtcblxuICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZnVuY3Rpb24gY29uamVjdHVyZUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBzdHJ1Y3R1cmU7XG5cbiAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNpc05vZGUpID0+IHtcbiAgICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5mdW5jdGlvbiBoeXBvdGhlc2VzU3RyaW5nRnJvbUh5cG90aGVzZXMoaHlwb3RoZXNlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzU3RyaW5nID0gaHlwb3RoZXNlcy5yZWR1Y2UoKGh5cG90aGVzZXNTdHJpbmcsIGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gaHlwb3RoZXNpcy5nZXRTdHJpbmcoKTtcblxuICAgIGh5cG90aGVzZXNTdHJpbmcgPSAoaHlwb3RoZXNlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke2h5cG90aGVzZXNTdHJpbmd9LCAke2h5cG90aGVzaXNTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBvdGhlc2lzU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSwgY29udGV4dCkge1xuICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldFN0cmluZygpLFxuICAgICAgICBoeXBvdGhlc2VzU3RyaW5nID0gaHlwb3RoZXNlc1N0cmluZ0Zyb21IeXBvdGhlc2VzKGh5cG90aGVzZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgWyR7aHlwb3RoZXNlc1N0cmluZ31dOjo6ICR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICBgWyR7aHlwb3RoZXNlc1N0cmluZ31dOjo6IGA7XG5cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNlY3Rpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldEh5cG90aGVzZXMiLCJnZXRBeGlvbSIsImdldExlbW1hIiwiZ2V0VGhlb3JlbSIsImdldENvbmplY3R1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiZXZlcnkiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwiZnJvbVNlY3Rpb25Ob2RlIiwic2VjdGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiYXhpb21Gcm9TZWN0aW9uTm9kZSIsImxlbW1hRnJvU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvU2VjdGlvbk5vZGUiLCJjb25qZWN0dXJlRnJvU2VjdGlvbk5vZGUiLCJzdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZSIsInNlY3Rpb24iLCJuYW1lIiwiYXhpb21Ob2RlIiwiZ2V0QXhpb21Ob2RlIiwiQXhpb20iLCJzdHJ1Y3R1cmUiLCJmcm9tQXhpb21Ob2RlIiwibGVtbWFOb2RlIiwiZ2V0TGVtbWFOb2RlIiwiTGVtbWEiLCJmcm9tTGVtbWFOb2RlIiwidGhlb3JlbU5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJmcm9tVGhlb3JlbU5vZGUiLCJjb25qZWN0dXJlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImZyb21Db25qZWN0dXJlTm9kZSIsIm1hcCIsImh5cG90aGVzaXNOb2RlIiwiSHlwb3RoZXNpcyIsImZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzZXNTdHJpbmdGcm9tSHlwb3RoZXNlcyIsImh5cG90aGVzZXNTdHJpbmciLCJyZWR1Y2UiLCJoeXBvdGhlc2lzU3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2lFQUxzQjs0REFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJekIsV0FBZUEsSUFBQUEsaUJBQU0sNEJBQUM7YUFBTUMsUUFDZEMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUR0RFI7UUFFeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixPQUFP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