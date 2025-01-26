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
var _judgement = /*#__PURE__*/ _interop_require_default(require("../assignment/judgement"));
var _query = require("../utilities/query");
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
var _Judgement;
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame"), judgementNodeQuery = (0, _query.nodeQuery)("/statement/judgement"), declarationNodeQuery = (0, _query.nodeQuery)("/judgement/declaration");
var _default = (0, _dom.domAssigned)((_Judgement = /*#__PURE__*/ function() {
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
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.frame.getMetavariable();
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' judgement..."));
                var frameVerified = this.verifyFrame(assignments, stated, context);
                if (frameVerified) {
                    var declarationVerified = this.verifyDeclaration(assignments, stated, context);
                    if (declarationVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(context);
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
            key: "verifyFrame",
            value: function verifyFrame(assignments, stated, context) {
                var frameVerified;
                var frameString = this.frame.getString(), judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' judgement's '").concat(frameString, "' frame..."));
                frameVerified = this.frame.verify(assignments, stated, context);
                if (frameVerified) {
                    context.debug("...verified the '".concat(judgementString, "' judgement's '").concat(frameString, "' frame."));
                }
                return frameVerified;
            }
        },
        {
            key: "verifyDeclaration",
            value: function verifyDeclaration(assignments, stated, context) {
                var declarationVerified;
                var judgementString = this.string, declarationString = this.declaration.getString();
                context.trace("Verifying the '".concat(judgementString, "' judgement's '").concat(declarationString, "' declaration..."));
                declarationVerified = this.declaration.verify(assignments, stated, context);
                if (declarationVerified) {
                    context.debug("...verified the '".concat(judgementString, "' judgement's '").concat(declarationString, "' declaration."));
                }
                return declarationVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' stated judgement..."));
                if (assignments !== null) {
                    var judgement = this, judgementAssignment = _judgement.default.fromJudgement(judgement), assignment = judgementAssignment;
                    assignments.push(assignment);
                }
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(judgementString, "' stated judgement."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiedWhenDerived;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' derived judgement..."));
                var reference = this.declaration.getReference(), metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(reference), substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsMatch = this.frame.matchSubstitutions(substitutions, context);
                verifiedWhenDerived = substitutionsMatch;
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(judgementString, "' derived judgement."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var judgement = null;
                var judgementNode = judgementNodeQuery(statementNode);
                if (judgementNode !== null) {
                    var node = judgementNode, string = context.nodeAsString(node), frame = frameFromJudgementNode(judgementNode, context), declaration = declarationFromJudgementNode(judgementNode, context);
                    judgement = new Judgement(string, frame, declaration);
                }
                return judgement;
            }
        }
    ]);
    return Judgement;
}(), _define_property(_Judgement, "name", "Judgement"), _Judgement));
function frameFromJudgementNode(judgementNode, context) {
    var Frame = _dom.default.Frame, frameNode = frameNodeQuery(judgementNode), frame = Frame.fromFrameNode(frameNode, context);
    return frame;
}
function declarationFromJudgementNode(judgementNode, context) {
    var Declaration = _dom.default.Declaration, declarationNode = declarationNodeQuery(judgementNode), declaration = Declaration.fromDeclarationNode(declarationNode, context);
    return declaration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lXCIpLFxuICAgICAganVkZ2VtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9qdWRnZW1lbnRcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeURlY2xhcmF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25WZXJpZmllZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmRlY2xhcmF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmRlY2xhcmF0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc01hdGNoID0gdGhpcy5mcmFtZS5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChzdHJpbmcsIGZyYW1lLCBkZWNsYXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBkb20sXG4gICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZSA9IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb247XG59XG4iXSwibmFtZXMiOlsiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJqdWRnZW1lbnROb2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiSnVkZ2VtZW50Iiwic3RyaW5nIiwiZnJhbWUiLCJkZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEZyYW1lIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwiZnJhbWVTdHJpbmciLCJkZWNsYXJhdGlvblN0cmluZyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiZGVjbGFyYXRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsIm5hbWUiLCJGcmFtZSIsImRvbSIsImZyYW1lTm9kZSIsImZyb21GcmFtZU5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uTm9kZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFB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