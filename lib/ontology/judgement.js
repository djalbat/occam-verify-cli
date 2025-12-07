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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
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
var _default = (0, _ontology.define)((_Judgement = /*#__PURE__*/ function() {
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
                var verifies = false;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' judgement..."));
                var frameVerifies = this.verifyFrame(assignments, stated, context);
                if (frameVerifies) {
                    var declarationVerifies = this.verifyDeclaration(assignments, stated, context);
                    if (declarationVerifies) {
                        var verifiesWhenStated = false, verifiesWhenDerived = false;
                        if (stated) {
                            verifiesWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiesWhenDerived = this.verifyWhenDerived(context);
                        }
                        if (verifiesWhenStated || verifiesWhenDerived) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(judgementString, "' judgement."));
                }
                return verifies;
            }
        },
        {
            key: "verifyFrame",
            value: function verifyFrame(assignments, stated, context) {
                var frameVerifies;
                var frameString = this.frame.getString();
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                frameVerifies = this.frame.verify(assignments, stated, context);
                if (frameVerifies) {
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return frameVerifies;
            }
        },
        {
            key: "verifyDeclaration",
            value: function verifyDeclaration(assignments, stated, context) {
                var declarationVerifies;
                declarationVerifies = this.declaration.verify(assignments, stated, context);
                return declarationVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' stated judgement..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(judgementString, "' stated judgement."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var judgementString = this.string; ///
                context.trace("Verifying the '".concat(judgementString, "' derived judgement..."));
                var metavariable = this.declaration.getMetavariable(), reference = referenceFromMetavariable(metavariable, context), metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(reference), substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsMatch = this.frame.matchSubstitutions(substitutions, context);
                verifiesWhenDerived = substitutionsMatch;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(judgementString, "' derived judgement."));
                }
                return verifiesWhenDerived;
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
                    var Frame = _ontology.default.Frame, Declaration = _ontology.default.Declaration, node = judgementNode, string = context.nodeAsString(node), frame = Frame.fromJudgementNode(judgementNode, context), declaration = Declaration.fromJudgementNode(judgementNode, context);
                    judgement = new Judgement(string, frame, declaration);
                }
                return judgement;
            }
        }
    ]);
    return Judgement;
}(), _define_property(_Judgement, "name", "Judgement"), _Judgement));
function referenceFromMetavariable(metavariable, context) {
    var Reference = _ontology.default.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzU2ltcGxlKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllcykge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllcztcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvblZlcmlmaWVzO1xuXG4gICAgZGVjbGFyYXRpb25WZXJpZmllcyA9IHRoaXMuZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc01hdGNoID0gdGhpcy5mcmFtZS5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBEZWNsYXJhdGlvbn0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoc3RyaW5nLCBmcmFtZSwgZGVjbGFyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsInN0cmluZyIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiaXNTaW1wbGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImp1ZGdlbWVudFN0cmluZyIsInRyYWNlIiwiZnJhbWVWZXJpZmllcyIsInZlcmlmeUZyYW1lIiwiZGVjbGFyYXRpb25WZXJpZmllcyIsInZlcmlmeURlY2xhcmF0aW9uIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwiZnJhbWVTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwianVkZ2VtZW50IiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsIkZyYW1lIiwib250b2xvZ3kiLCJEZWNsYXJhdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tSnVkZ2VtZW50Tm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMcUI7Z0VBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhDLFdBQWVBLElBQUFBLGdCQUFNLDhCQUFDO2FBQU1DLFVBQ2RDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXO2dDQURaSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxRQUFRO1lBQUk7OztZQUUzQ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxlQUFlO1lBQUk7OztZQUV6REMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNqQyxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGtCQUFr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