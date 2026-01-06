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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _assign = require("../process/assign");
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
var _default = (0, _elements.define)((_Judgement = /*#__PURE__*/ function() {
    function Judgement(context, string, node, frame, assumption) {
        _class_call_check(this, Judgement);
        this.context = context;
        this.string = string;
        this.node = node;
        this.frame = frame;
        this.assumption = assumption;
    }
    _create_class(Judgement, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                return this.assumption;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                return this.node.isSingular();
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
                declarationVerifies = this.assumption.verify(assignments, stated, context);
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
                var metavariable = this.assumption.getMetavariable(), reference = referenceFromMetavariable(metavariable, context), metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(reference), substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsMatch = this.frame.matchSubstitutions(substitutions, context);
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
                var judgement = this, judgementAssignment = (0, _assign.judgementAssignmentFromJudgement)(judgement), assignment = judgementAssignment; ///
                assignments.push(assignment);
            }
        }
    ]);
    return Judgement;
}(), _define_property(_Judgement, "name", "Judgement"), _Judgement));
function referenceFromMetavariable(metavariable, context) {
    var Reference = _elements.default.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBKdWRnZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7IHJldHVybiB0aGlzLm5vZGUuaXNTaW5ndWxhcigpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZXM7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGZyYW1lVmVyaWZpZXMgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeURlY2xhcmF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25WZXJpZmllcztcblxuICAgIGRlY2xhcmF0aW9uVmVyaWZpZXMgPSB0aGlzLmFzc3VtcHRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSB0aGlzLmZyYW1lLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZnJhbWUiLCJhc3N1bXB0aW9uIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiaXNTaW5ndWxhciIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJqdWRnZW1lbnRTdHJpbmciLCJ0cmFjZSIsImZyYW1lVmVyaWZpZXMiLCJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJkZWJ1ZyIsImZyYW1lU3RyaW5nIiwibWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwibmFtZSIsIlJlZmVyZW5jZSIsImVsZW1lbnRzIiwibWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMcUI7c0JBRzRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxVQUFVO2dDQUQxQkw7UUFFeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxL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