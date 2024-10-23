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
                    var reference = this.declaration.getReference(), metaLemma = localContext.findMetaLemmaByReference(reference, localContext), metatheorem = localContext.findMetatheoremByReference(reference, localContext), metaLemmaMetatheorem = metaLemma || metatheorem; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvanVkZ2VtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBzdGF0ZWQuLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmRlY2xhcmF0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgICAgbWV0YUxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLmZyYW1lLnVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgICBheGlvbSA9IGxvY2FsQ29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgbGVtbWEgPSBsb2NhbENvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIHRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGxvY2FsQ29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkID0gdGhpcy5mcmFtZS51bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBkZXJpdmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgRnJhbWUsIERlY2xhcmF0aW9uIH0gPSBzaGltLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbk5vZGUgPSBkZWNsYXJhdGlvbk5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChzdHJpbmcsIGZyYW1lLCBkZWNsYXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgSnVkZ2VtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSnVkZ2VtZW50OyJdLCJuYW1lcyI6WyJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiSnVkZ2VtZW50Iiwic3RyaW5nIiwiZnJhbWUiLCJkZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEZyYW1lIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJ0cmFjZSIsImZyYW1lVmVyaWZpZWQiLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwianVkZ2VtZW50IiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJtZXRhTGVtbWEiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQiLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0iLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwibGVtbWEiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsInRoZW9yZW0iLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiY29uamVjdHVyZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJGcmFtZSIsInNoaW0iLCJEZWNsYXJhdGlvbiIsImZyYW1lTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tRnJhbWVOb2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkpBOzs7ZUFBQTs7OzJEQTNKaUI7Z0VBQ2U7cUJBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMzQkMsdUJBQXVCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQUEsQUFBTUUsMEJBQU47YUFBTUEsVUFDUUMsTUFBTSxFQUFF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