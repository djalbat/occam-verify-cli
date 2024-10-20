"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Judgement;
    }
});
var _frame = /*#__PURE__*/ _interop_require_default(require("./frame"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
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
                var verifiedWhenDerived;
                var judgementString = this.string; ///
                localContext.trace("Verifying the '".concat(judgementString, "' judgement when derived..."));
                var reference = this.declaration.getReference(), metaLemma = localContext.findMetaLemmaByReference(reference), metatheorem = localContext.findMetatheoremByReference(reference), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                if (metaLemmaMetatheorem !== null) {
                    var metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, localContext);
                    verifiedWhenDerived = metaLemmaMetatheoremUnified; ///
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
                    var frameNode = frameNodeQuery(judgementNode), declarationNode = declarationNodeQuery(judgementNode), node = judgementNode, string = localContext.nodeAsString(node), frame = _frame.default.fromFrameNode(frameNode, localContext), declaration = _declaration.default.fromDeclarationNode(declarationNode, localContext);
                    judgement = new Judgement(string, frame, declaration);
                }
                return judgement;
            }
        }
    ]);
    return Judgement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9mcmFtZVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgSnVkZ2VtZW50QXNzaWdubWVudCBmcm9tIFwiLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lXCIpLFxuICAgICAgZGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2RlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdWRnZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGZyYW1lLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgZGVjbGFyYXRpb25WZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllZCAmJiBkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIHN0YXRlZC4uLmApO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBzdGF0ZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5kZWNsYXJhdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBsb2NhbENvbnRleHQuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZSA9IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSnVkZ2VtZW50IiwiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVRdWVyeSIsInN0cmluZyIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwidHJhY2UiLCJmcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkIiwidW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIkZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsIkRlY2xhcmF0aW9uIiwiZnJvbURlY2xhcmF0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NERBVEg7a0VBQ007Z0VBQ1E7cUJBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMzQkMsdUJBQXVCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXhCLElBQUEsQUFBTUYsMEJBQU47YUFBTUEsVUFDUEksTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVc7Z0NBRG5CTjtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUpGTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFB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