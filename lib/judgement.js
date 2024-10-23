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
            value: function verify(assignments, stated, localContext) {
                var verified;
                var judgementString = this.string; ///
                localContext.trace("Verifying the '".concat(judgementString, "' judgement..."));
                var frameVerified = this.frame.verify(assignments, stated, localContext);
                if (frameVerified) {
                    var declarationVerified = this.declaration.verify(assignments, stated, localContext);
                    if (declarationVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(assignments, localContext);
                        }
                        if (verifiedWhenStated || verifiedWhenDerived) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(judgementString, "' judgement."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, localContext) {
                var verifiedWhenStated;
                var judgementString = this.string; ///
                localContext.trace("Verifying the '".concat(judgementString, "' judgement when stated..."));
                if (assignments !== null) {
                    var judgement = this, judgementAssignment = _judgement.default.fromJudgement(judgement), assignment = judgementAssignment;
                    assignments.push(assignment);
                }
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(judgementString, "' judgement when stated."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(assignments, localContext) {
                var verifiedWhenDerived = false;
                var judgementString = this.string; ///
                localContext.trace("Verifying the '".concat(judgementString, "' judgement when derived..."));
                if (!verifiedWhenDerived) {
                    var reference = this.declaration.getReference(), metaLemma = localContext.findMetaLemmaByReference(reference), metatheorem = localContext.findMetatheoremByReference(reference), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                    if (metaLemmaMetatheorem !== null) {
                        var metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, localContext);
                        verifiedWhenDerived = metaLemmaMetatheoremUnified; ///
                    }
                }
                if (!verifiedWhenDerived) {
                    var reference1 = this.declaration.getReference(), theorem = localContext.findTheoremByReference(reference1), lemma = localContext.findLemmaByReference(reference1), axiom = localContext.findAxiomByReference(reference1), axiomLemmaOrTheorem = axiom || lemma || theorem;
                    if (axiomLemmaOrTheorem !== null) {
                        var axiomLemmaOrTheoremUnified = this.frame.unifyAxiomLemmaOrTheorem(axiomLemmaOrTheorem, localContext);
                        verifiedWhenDerived = axiomLemmaOrTheoremUnified; ///
                    }
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(judgementString, "' judgement when derived."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, localContext) {
                var judgement = null;
                if (judgementNode !== null) {
                    var Frame = _shim.default.Frame, Declaration = _shim.default.Declaration, frameNode = frameNodeQuery(judgementNode), declarationNode = declarationNodeQuery(judgementNode), node = judgementNode, string = localContext.nodeAsString(node), frame = Frame.fromFrameNode(frameNode, localContext), declaration = Declaration.fromDeclarationNode(declarationNode, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvanVkZ2VtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBzdGF0ZWQuLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmRlY2xhcmF0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgICAgbWV0YUxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5kZWNsYXJhdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgIHRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbGVtbWEgPSBsb2NhbENvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGF4aW9tID0gbG9jYWxDb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBheGlvbUxlbW1hT3JUaGVvcmVtID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0pO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYU9yVGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBheGlvbUxlbW1hT3JUaGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlBeGlvbUxlbW1hT3JUaGVvcmVtKGF4aW9tTGVtbWFPclRoZW9yZW0sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGF4aW9tTGVtbWFPclRoZW9yZW1VbmlmaWVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBEZWNsYXJhdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25Ob2RlID0gZGVjbGFyYXRpb25Ob2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoc3RyaW5nLCBmcmFtZSwgZGVjbGFyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEp1ZGdlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEp1ZGdlbWVudDsiXSwibmFtZXMiOlsiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVRdWVyeSIsIkp1ZGdlbWVudCIsInN0cmluZyIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwidHJhY2UiLCJmcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkIiwidW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtIiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tTGVtbWFPclRoZW9yZW0iLCJheGlvbUxlbW1hT3JUaGVvcmVtVW5pZmllZCIsInVuaWZ5QXhpb21MZW1tYU9yVGhlb3JlbSIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsIkZyYW1lIiwic2hpbSIsIkRlY2xhcmF0aW9uIiwiZnJhbWVOb2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21GcmFtZU5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0SkE7OztlQUFBOzs7MkRBMUppQjtnRUFDZTtxQkFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQzNCQyx1QkFBdUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdkMsSUFBQSxBQUFNRSwwQkFBTjthQUFNQSxVQUNRQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVztnQ0FEbENIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKakJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTtt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