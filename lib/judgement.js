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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.frame.matchMetavariableName(metavariableName);
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
                var metavariableNode = this.declaration.getMetavariableNode(), metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode), metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                if (metaLemmaMetatheorem !== null) {
                    var metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi9mcmFtZVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgSnVkZ2VtZW50QXNzaWdubWVudCBmcm9tIFwiLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lXCIpLFxuICAgICAgZGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2RlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdWRnZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGZyYW1lLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgZGVjbGFyYXRpb25WZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllZCAmJiBkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIHN0YXRlZC4uLmApO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgd2hlbiBzdGF0ZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHdoZW4gZGVyaXZlZC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBsb2NhbENvbnRleHQuZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMuZnJhbWUudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTtcblxuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB3aGVuIGRlcml2ZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbk5vZGUgPSBkZWNsYXJhdGlvbk5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChzdHJpbmcsIGZyYW1lLCBkZWNsYXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkp1ZGdlbWVudCIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJmcmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdGhlb3JlbSIsImZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYSIsImZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImZyYW1lTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJGcmFtZSIsImZyb21GcmFtZU5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21EZWNsYXJhdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzREQVRIO2tFQUNNO2dFQUNRO3FCQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDM0JDLHVCQUF1QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QixJQUFBLEFBQU1GLDBCQUFOO2FBQU1BLFVBQ1BJLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXO2dDQURuQk47UUFFakIsSUFBSSxDQUFDSSxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKRk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENB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