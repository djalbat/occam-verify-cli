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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("./assignment/judgement"));
var _query = require("./utilities/query");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame"), declarationNodeQuery = (0, _query.nodeQuery)("/judgement/declaration");
var Judgement = /*#__PURE__*/ function() {
    function Judgement(string, frame, declaration) {
        _class_call_check(this, Judgement);
        this.string = string;
        this.frame = frame;
        this.declaration = declaration;
    }
    _create_class(Judgement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                return this.declaration;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.frame.getMetavariableNode();
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.frame.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' judgement..."));
                var frameVerified = this.frame.verify(assignments, stated, context);
                if (frameVerified) {
                    var declarationVerified = this.declaration.verify(assignments, stated, context);
                    if (declarationVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(assignments, context);
                        }
                        if (verifiedWhenStated || verifiedWhenDerived) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(judgementString, "' judgement."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' judgement when stated..."));
                if (assignments !== null) {
                    var judgement = this, judgementAssignment = _judgement.default.fromJudgement(judgement), assignment = judgementAssignment;
                    assignments.push(assignment);
                }
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(judgementString, "' judgement when stated."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(assignments, context) {
                var verifiedWhenDerived = false;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' judgement when derived..."));
                if (!verifiedWhenDerived) {
                    var generalContext = context, specificContext = context, reference = this.declaration.getReference(), metaLemma = generalContext.findMetaLemmaByReference(reference, specificContext), metatheorem = generalContext.findMetatheoremByReference(reference, specificContext), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                    if (metaLemmaMetatheorem !== null) {
                        var metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, context);
                        verifiedWhenDerived = metaLemmaMetatheoremUnified; ///
                    }
                }
                if (!verifiedWhenDerived) {
                    var reference1 = this.declaration.getReference(), axiom = context.findAxiomByReference(reference1), lemma = context.findLemmaByReference(reference1), theorem = context.findTheoremByReference(reference1), conjecture = context.findConjectureByReference(reference1), axiomLemmaTheoremOrConjecture = axiom || lemma || theorem || conjecture;
                    if (axiomLemmaTheoremOrConjecture !== null) {
                        var axiomLemmaTheoremOrConjectureUnified = this.frame.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, context);
                        verifiedWhenDerived = axiomLemmaTheoremOrConjectureUnified; ///
                    }
                }
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(judgementString, "' judgement when derived."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var judgement = null;
                if (judgementNode !== null) {
                    var Frame = _shim.default.Frame, Declaration = _shim.default.Declaration, frameNode = frameNodeQuery(judgementNode), declarationNode = declarationNodeQuery(judgementNode), node = judgementNode, frame = Frame.fromFrameNode(frameNode, context), string = context.nodeAsString(node), declaration = Declaration.fromDeclarationNode(declarationNode, context);
                    judgement = new Judgement(string, frame, declaration);
                }
                return judgement;
            }
        }
    ]);
    return Judgement;
}();
Object.assign(_shim.default, {
    Judgement: Judgement
});
var _default = Judgement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvanVkZ2VtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBzdGF0ZWQuLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIHN0YXRlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gdGhpcy5kZWNsYXJhdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgdGhlb3JlbSA9IGNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBkZXJpdmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBEZWNsYXJhdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25Ob2RlID0gZGVjbGFyYXRpb25Ob2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoc3RyaW5nLCBmcmFtZSwgZGVjbGFyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEp1ZGdlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEp1ZGdlbWVudDsiXSwibmFtZXMiOlsiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVRdWVyeSIsIkp1ZGdlbWVudCIsInN0cmluZyIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkIiwidW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImxlbW1hIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJ0aGVvcmVtIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImNvbmplY3R1cmUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiRnJhbWUiLCJzaGltIiwiRGVjbGFyYXRpb24iLCJmcmFtZU5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJub2RlIiwiZnJvbUZyYW1lTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStKQTs7O2VBQUE7OzsyREE3SmlCO2dFQUNlO3FCQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDM0JDLHVCQUF1QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFBLEFBQU1FLDBCQUFOO2FBQU1BLFVB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