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
                var judgementNode = statementNode.getJudgementNode();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgSnVkZ2VtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBmcmFtZSwgZGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb247XG4gIH1cblxuICBpc1NpbXBsZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNTaW1wbGUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdGhpcy52ZXJpZnlEZWNsYXJhdGlvbihhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgZnJhbWVWZXJpZmllZCA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5kZWNsYXJhdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHRoaXMuZnJhbWUubWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHN1YnN0aXR1dGlvbnNNYXRjaDtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoYXNzaWdubWVudHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkp1ZGdlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBGcmFtZSwgRGVjbGFyYXRpb259ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChzdHJpbmcsIGZyYW1lLCBkZWNsYXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJKdWRnZW1lbnQiLCJzdHJpbmciLCJmcmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImlzU2ltcGxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJ0cmFjZSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJkZWJ1ZyIsImZyYW1lU3RyaW5nIiwiZGVjbGFyYXRpb25TdHJpbmciLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJnZXRKdWRnZW1lbnROb2RlIiwiRnJhbWUiLCJkb20iLCJEZWNsYXJhdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tSnVkZ2VtZW50Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtnRUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhDLFdBQWVBLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVztnQ0FEUEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssUUFBUTtZQUFJOzs7WUFFM0NDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ00sZUFBZTtZQUFJOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDakMs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