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
var judgementNodeQuery = (0, _query.nodeQuery)("/statement/judgement");
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
            key: "isSimple",
            value: function isSimple() {
                return this.frame.isSimple();
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
                        verified = verifiedWhenStated || verifiedWhenDerived;
                    }
                }
                if (verified) {
                    if (stated) {
                        this.assign(assignments, context);
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
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var judgement = this, judgementAssignment = _judgement.default.fromJudgement(judgement), assignment = judgementAssignment;
                assignments.push(assignment);
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var judgement = null;
                var judgementNode = judgementNodeQuery(statementNode);
                if (judgementNode !== null) {
                    var Frame = _dom.default.Frame, Declaration = _dom.default.Declaration, node = judgementNode, string = context.nodeAsString(node), frame = Frame.fromJudgementNode(judgementNode, context), declaration = Declaration.fromJudgementNode(judgementNode, context);
                    judgement = new Judgement(string, frame, declaration);
                }
                return judgement;
            }
        }
    ]);
    return Judgement;
}(), _define_property(_Judgement, "name", "Judgement"), _Judgement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QganVkZ2VtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9qdWRnZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzU2ltcGxlKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeURlY2xhcmF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25WZXJpZmllZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmRlY2xhcmF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSB0aGlzLmZyYW1lLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IEp1ZGdlbWVudEFzc2lnbm1lbnQuZnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBEZWNsYXJhdGlvbn0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJqdWRnZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkp1ZGdlbWVudCIsInN0cmluZyIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiaXNTaW1wbGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwiZnJhbWVTdHJpbmciLCJkZWNsYXJhdGlvblN0cmluZyIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsIkZyYW1lIiwiZG9tIiwiRGVjbGFyYXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7Z0VBQ2dCO3FCQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXO2dDQURQSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxP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