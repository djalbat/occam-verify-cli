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
                var frameVerified = this.frame.verify(assignments, stated, localContext), declarationVerified = this.declaration.verify(assignments, stated, localContext);
                if (frameVerified && declarationVerified) {
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
                    var reference1 = this.declaration.getReference(), theorem = localContext.findTheoremByReference(reference1), lemma = localContext.findLemmaByReference(reference1), lemmaOrTheorem = lemma || theorem;
                    if (lemmaOrTheorem !== null) {
                        var lemmaOrTheoremUnified = this.frame.unifyLemmaTheorem(lemmaOrTheorem, localContext);
                        verifiedWhenDerived = lemmaOrTheoremUnified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvanVkZ2VtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkICYmIGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gc3RhdGVkLi4uYCk7XG5cbiAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IEp1ZGdlbWVudEFzc2lnbm1lbnQuZnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpLFxuICAgICAgICAgICAgYXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnQ7XG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIHN0YXRlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIGRlcml2ZWQuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5kZWNsYXJhdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLmZyYW1lLnVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgICB0aGVvcmVtID0gbG9jYWxDb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgIGxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgICBsZW1tYU9yVGhlb3JlbSA9IChsZW1tYSB8fCB0aGVvcmVtKTtcblxuICAgICAgaWYgKGxlbW1hT3JUaGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxlbW1hT3JUaGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlMZW1tYVRoZW9yZW0obGVtbWFPclRoZW9yZW0sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGxlbW1hT3JUaGVvcmVtVW5pZmllZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIGRlcml2ZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBGcmFtZSwgRGVjbGFyYXRpb24gfSA9IHNoaW0sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZSA9IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBKdWRnZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBKdWRnZW1lbnQ7Il0sIm5hbWVzIjpbImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJKdWRnZW1lbnQiLCJzdHJpbmciLCJmcmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsIm1ldGFMZW1tYSIsImZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsInRoZW9yZW0iLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwibGVtbWEiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImxlbW1hT3JUaGVvcmVtIiwibGVtbWFPclRoZW9yZW1VbmlmaWVkIiwidW5pZnlMZW1tYVRoZW9yZW0iLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJGcmFtZSIsInNoaW0iLCJEZWNsYXJhdGlvbiIsImZyYW1lTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tRnJhbWVOb2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0pBOzs7ZUFBQTs7OzJEQXRKaUI7Z0VBQ2U7cUJBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMzQkMsdUJBQXVCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQUEsQUFBTUUsMEJBQU47YUFBTUEsVUFDUUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVc7Z0NBRGxDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSmpCSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUF3QixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxtQkFBbUI7WUFBSTs7O1lBRWpFQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNQLEtBQUssQ0FBQ00scUJBQXFCLENBQUNDO1lBQW1COzs7WUFFckdDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCLElBQUksQ0FBQ2QsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDWSxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFckQsSUFBTUUsZ0JBQWdCLElBQUksQ0FBQ2YsS0FBSyxDQUFDUSxNQUFNLENBQUNDLGFBQWFDLFFBQVFDLGVBQ3ZESyxzQkFBc0IsSUFBSSxDQUFDZixXQUFXLENBQUNPLE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUUM7Z0JBRXpFLElBQUlJLGlCQUFpQkMscUJBQXFCO29CQUN4QyxJQUFJQyxxQkFBcUIsT0FDckJDLHNCQUFzQjtvQkFFMUIsSUFBSVIsUUFBUTt3QkFDVk8scUJBQXFCLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNWLGFBQWFFO29CQUMxRCxPQUFPO3dCQUNMTyxzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ1gsYUFBYUU7b0JBQzVEO29CQUVBLElBQUlNLHNCQUFzQkMscUJBQXFCO3dCQUM3Q04sV0FBVztvQkFDYjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaRCxhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJSLGlCQUFnQjtnQkFDekQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJWLFdBQVcsRUFBRUUsWUFBWTtnQkFDeEMsSUFBSU07Z0JBRUosSUFBTUosa0JBQWtCLElBQUksQ0FBQ2QsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDWSxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFckQsSUFBSUosZ0JBQWdCLE1BQU07b0JBQ3hCLElBQU1hLFlBQVksSUFBSSxFQUNoQkMsc0JBQXNCQyxrQkFBbUIsQ0FBQ0MsYUFBYSxDQUFDSCxZQUN4REksYUFBYUg7b0JBRW5CZCxZQUFZa0IsSUFBSSxDQUFDRDtnQkFDbkI7Z0JBRUFULHFCQUFxQjtnQkFFckIsSUFBSUEsb0JBQW9CO29CQUN0Qk4sYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCUixpQkFBZ0I7Z0JBQ3pEO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCWCxXQUFXLEVBQUVFLFlBQVk7Z0JBQ3pDLElBQUlPLHNCQUFzQjtnQkFFMUIsSUFBTUwsa0JBQWtCLElBQUksQ0FBQ2QsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDWSxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFckQsSUFBSSxDQUFDSyxxQkFBcUI7b0JBQ3hCLElBQU1VLFlBQVksSUFBSSxDQUFDM0IsV0FBVyxDQUFDNEIsWUFBWSxJQUN6Q0MsWUFBWW5CLGFBQWFvQix3QkFBd0IsQ0FBQ0gsWUFDbERJLGNBQWNyQixhQUFhc0IsMEJBQTBCLENBQUNMLFlBQ3RETSx1QkFBd0JKLGFBQWFFLGFBQWUsR0FBRztvQkFFN0QsSUFBSUUseUJBQXlCLE1BQU07d0JBQ2pDLElBQU1DLDhCQUE4QixJQUFJLENBQUNuQyxLQUFLLENBQUNvQywyQkFBMkIsQ0FBQ0Ysc0JBQXNCdkI7d0JBRWpHTyxzQkFBc0JpQiw2QkFBNkIsR0FBRztvQkFDeEQ7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDakIscUJBQXFCO29CQUN4QixJQUFNVSxhQUFZLElBQUksQ0FBQzNCLFdBQVcsQ0FBQzRCLFlBQVksSUFDekNRLFVBQVUxQixhQUFhMkIsc0JBQXNCLENBQUNWLGFBQzlDVyxRQUFRNUIsYUFBYTZCLG9CQUFvQixDQUFDWixhQUMxQ2EsaUJBQWtCRixTQUFTRjtvQkFFakMsSUFBSUksbUJBQW1CLE1BQU07d0JBQzNCLElBQU1DLHdCQUF3QixJQUFJLENBQUMxQyxLQUFLLENBQUMyQyxpQkFBaUIsQ0FBQ0YsZ0JBQWdCOUI7d0JBRTNFTyxzQkFBc0J3Qix1QkFBdUIsR0FBRztvQkFDbEQ7Z0JBQ0Y7Z0JBRUEsSUFBSXhCLHFCQUFxQjtvQkFDdkJQLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlIsaUJBQWdCO2dCQUN6RDtnQkFFQSxPQUFPSztZQUNUOzs7O1lBRU8wQixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRWxDLFlBQVk7Z0JBQ2xELElBQUlXLFlBQVk7Z0JBRWhCLElBQUl1QixrQkFBa0IsTUFBTTtvQkFDMUIsSUFBUUMsUUFBdUJDLGFBQUksQ0FBM0JELE9BQU9FLGNBQWdCRCxhQUFJLENBQXBCQyxhQUNUQyxZQUFZdEQsZUFBZWtELGdCQUMzQkssa0JBQWtCckQscUJBQXFCZ0QsZ0JBQ3ZDTSxPQUFPTixlQUNQOUMsU0FBU1ksYUFBYXlDLFlBQVksQ0FBQ0QsT0FDbkNuRCxRQUFROEMsTUFBTU8sYUFBYSxDQUFDSixXQUFXdEMsZUFDdkNWLGNBQWMrQyxZQUFZTSxtQkFBbUIsQ0FBQ0osaUJBQWlCdkM7b0JBRXJFVyxZQUFZLElBbklaeEIsVUFtSTBCQyxRQUFRQyxPQUFPQztnQkFDM0M7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztXQXZJSXhCOztBQTBJTnlELE9BQU9DLE1BQU0sQ0FBQ1QsYUFBSSxFQUFFO0lBQ2xCakQsV0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=