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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
var _default = (0, _elements.define)((_Section = /*#__PURE__*/ function() {
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
        var Axiom = _elements.default.Axiom;
        axiom = Axiom.fromAxiomNode(axiomNode, context);
    }
    return axiom;
}
function lemmaFroSectionNode(sectionNode, context) {
    var lemma = null;
    var lemmaNode = sectionNode.getLemmaNode();
    if (lemmaNode !== null) {
        var Lemma = _elements.default.Lemma;
        lemma = Lemma.fromLemmaNode(lemmaNode, context);
    }
    return lemma;
}
function theoremFroSectionNode(sectionNode, context) {
    var theorem = null;
    var theoremNode = sectionNode.getTheoremNode();
    if (theoremNode !== null) {
        var Theorem = _elements.default.Theorem;
        theorem = Theorem.fromTheoremNode(theoremNode, context);
    }
    return theorem;
}
function conjectureFroSectionNode(sectionNode, context) {
    var conjecture = null;
    var conjectureNode = sectionNode.getConjectureNode();
    if (conjectureNode !== null) {
        var Conjecture = _elements.default.Conjecture;
        conjecture = Conjecture.fromConjectureNode(conjectureNode, context);
    }
    return conjecture;
}
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    var hypotheses = hypothesisNodes.map(function(hypothesisNode) {
        var Hypothesis = _elements.default.Hypothesis, hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5sZW1tYSA9IGxlbW1hO1xuICAgIHRoaXMudGhlb3JlbSA9IHRoZW9yZW07XG4gICAgdGhpcy5jb25qZWN0dXJlID0gY29uamVjdHVyZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRBeGlvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5heGlvbTtcbiAgfVxuXG4gIGdldExlbW1hKCkge1xuICAgIHJldHVybiB0aGlzLmxlbW1hO1xuICB9XG5cbiAgZ2V0VGhlb3JlbSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVvcmVtO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25qZWN0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2VjdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5SHlwb3RoZXNlcygpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKHRoaXMuYXhpb20gfHwgdGhpcy5sZW1tYSB8fCB0aGlzLnRoZW9yZW0gfHwgdGhpcy5jb25qZWN0dXJlKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVmVyaWZpZXMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS52ZXJpZnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuc2V0SHlwb3RoZXNlcyh0aGlzLmh5cG90aGVzZXMpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5SHlwb3RoZXNlcygpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy5oeXBvdGhlc2VzLmV2ZXJ5KChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBoeXBvdGhlc2lzLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSwgY29udGV4dCksXG4gICAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXhpb21Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cztcblxuICAgIGF4aW9tID0gQXhpb20uZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5mdW5jdGlvbiBsZW1tYUZyb1NlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTGVtbWEgfSA9IGVsZW1lbnRzO1xuXG4gICAgbGVtbWEgPSBMZW1tYS5mcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmZ1bmN0aW9uIHRoZW9yZW1Gcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHM7XG5cbiAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmZ1bmN0aW9uIGNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHM7XG5cbiAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNpc05vZGUpID0+IHtcbiAgICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGh5cG90aGVzaXMgPSBIeXBvdGhlc2lzLmZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmZ1bmN0aW9uIGh5cG90aGVzZXNTdHJpbmdGcm9tSHlwb3RoZXNlcyhoeXBvdGhlc2VzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXNTdHJpbmcgPSBoeXBvdGhlc2VzLnJlZHVjZSgoaHlwb3RoZXNlc1N0cmluZywgaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSBoeXBvdGhlc2lzLmdldFN0cmluZygpO1xuXG4gICAgaHlwb3RoZXNlc1N0cmluZyA9IChoeXBvdGhlc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCR7aHlwb3RoZXNlc1N0cmluZ30sICR7aHlwb3RoZXNpc1N0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGh5cG90aGVzaXNTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2VzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gaHlwb3RoZXNlc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUoaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSksXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGh5cG90aGVzZXNTdHJpbmcgPSBoeXBvdGhlc2VzU3RyaW5nRnJvbUh5cG90aGVzZXMoaHlwb3RoZXNlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGBbJHtoeXBvdGhlc2VzU3RyaW5nfV06OjogJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgIGBbJHtoeXBvdGhlc2VzU3RyaW5nfV06OjogYDtcblxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2VjdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwiaHlwb3RoZXNlcyIsImF4aW9tIiwibGVtbWEiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0SHlwb3RoZXNlcyIsImdldEF4aW9tIiwiZ2V0TGVtbWEiLCJnZXRUaGVvcmVtIiwiZ2V0Q29uamVjdHVyZSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2VjdGlvblN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNlc1ZlcmlmeSIsInZlcmlmeUh5cG90aGVzZXMiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVmVyaWZpZXMiLCJzZXRIeXBvdGhlc2VzIiwiZGVidWciLCJldmVyeSIsImh5cG90aGVzaXMiLCJoeXBvdGhlc2lzVmVyaWZpZXMiLCJmcm9tU2VjdGlvbk5vZGUiLCJzZWN0aW9uTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJheGlvbUZyb1NlY3Rpb25Ob2RlIiwibGVtbWFGcm9TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9TZWN0aW9uTm9kZSIsImNvbmplY3R1cmVGcm9TZWN0aW9uTm9kZSIsInN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlIiwic2VjdGlvbiIsIm5hbWUiLCJheGlvbU5vZGUiLCJnZXRBeGlvbU5vZGUiLCJBeGlvbSIsImVsZW1lbnRzIiwiZnJvbUF4aW9tTm9kZSIsImxlbW1hTm9kZSIsImdldExlbW1hTm9kZSIsIkxlbW1hIiwiZnJvbUxlbW1hTm9kZSIsInRoZW9yZW1Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwiZnJvbVRoZW9yZW1Ob2RlIiwiY29uamVjdHVyZU5vZGUiLCJnZXRDb25qZWN0dXJlTm9kZSIsIkNvbmplY3R1cmUiLCJmcm9tQ29uamVjdHVyZU5vZGUiLCJtYXAiLCJoeXBvdGhlc2lzTm9kZSIsIkh5cG90aGVzaXMiLCJmcm9tSHlwb3RoZXNpc05vZGUiLCJoeXBvdGhlc2VzU3RyaW5nRnJvbUh5cG90aGVzZXMiLCJoeXBvdGhlc2VzU3RyaW5nIiwicmVkdWNlIiwiaHlwb3RoZXNpc1N0cmluZyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMcUI7NERBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXpCLFdBQWVBLElBQUFBLGdCQUFNLDRCQUFDO2FBQU1DLFFBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEdERSO1FBRXhCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1IsT0FBTztZQUNyQjs7O1lB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