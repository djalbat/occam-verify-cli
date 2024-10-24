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
                    var reference1 = this.declaration.getReference(), axiom = localContext.findAxiomByReference(reference1), lemma = localContext.findLemmaByReference(reference1), theorem = localContext.findTheoremByReference(reference1), conjecture = localContext.findConjectureByReference(reference1), axiomLemmaTheoremOrConjecture = axiom || lemma || theorem || conjecture;
                    if (axiomLemmaTheoremOrConjecture !== null) {
                        var axiomLemmaTheoremOrConjectureUnified = this.frame.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, localContext);
                        verifiedWhenDerived = axiomLemmaTheoremOrConjectureUnified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvanVkZ2VtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBzdGF0ZWQuLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmRlY2xhcmF0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgICAgbWV0YUxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5kZWNsYXJhdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgIGF4aW9tID0gbG9jYWxDb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBsZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgdGhlb3JlbSA9IGxvY2FsQ29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gbG9jYWxDb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQgPSB0aGlzLmZyYW1lLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIGRlcml2ZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBGcmFtZSwgRGVjbGFyYXRpb24gfSA9IHNoaW0sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZSA9IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBKdWRnZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBKdWRnZW1lbnQ7Il0sIm5hbWVzIjpbImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJKdWRnZW1lbnQiLCJzdHJpbmciLCJmcmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsIm1ldGFMZW1tYSIsImZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsIkZyYW1lIiwic2hpbSIsIkRlY2xhcmF0aW9uIiwiZnJhbWVOb2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21GcmFtZU5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2SkE7OztlQUFBOzs7MkRBM0ppQjtnRUFDZTtxQkFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQzNCQyx1QkFBdUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdkMsSUFBQSxBQUFNRSwwQkFBTjthQUFNQSxVQUNRQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVztnQ0FEbENIO1FB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