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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzU2ltcGxlKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllcykge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllcztcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvblZlcmlmaWVzO1xuXG4gICAgZGVjbGFyYXRpb25WZXJpZmllcyA9IHRoaXMuZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc01hdGNoID0gdGhpcy5mcmFtZS5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBEZWNsYXJhdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KHN0cmluZywgZnJhbWUsIGRlY2xhcmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IG9udG9sb2d5LFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJKdWRnZW1lbnQiLCJzdHJpbmciLCJmcmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImlzU2ltcGxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJqdWRnZW1lbnRTdHJpbmciLCJ0cmFjZSIsImZyYW1lVmVyaWZpZXMiLCJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJkZWJ1ZyIsImZyYW1lU3RyaW5nIiwibWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImdldEp1ZGdlbWVudE5vZGUiLCJGcmFtZSIsIm9udG9sb2d5IiwiRGVjbGFyYXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJuYW1lIiwiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHFCO2dFQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQyxXQUFlQSxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVztnQ0FEWkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssUUFBUTtZQUFJOzs7WUFFM0NDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ00sZUFBZTtZQUFJOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDakMsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxrQkFB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