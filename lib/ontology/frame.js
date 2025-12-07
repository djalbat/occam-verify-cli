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
var _necessary = require("necessary");
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _constants = require("../constants");
var _metaTypeNames = require("../metaTypeNames");
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
var _Frame;
var first = _necessary.arrayUtilities.first;
var _default = (0, _ontology.define)((_Frame = /*#__PURE__*/ function() {
    function Frame(string, node, tokens, declarations) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.declarations = declarations;
    }
    _create_class(Frame, [
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
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.declarations.length;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var simple = this.isSimple();
                if (simple) {
                    var firstDeclaration = first(this.declarations), declaration = firstDeclaration; ///
                    metavariable = declaration.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var length = this.getLength();
                if (length === 1) {
                    var firstDeclaration = first(this.declarations), declaration = firstDeclaration; ///
                    simple = declaration.isSimple();
                }
                return simple;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var frameString = frame.getString(), equalTo = frameString === this.string;
                return equalTo;
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(frameString, "' frame..."));
                if (!substitutionMatches) {
                    substitutionMatches = this.declarations.some(function(declaration) {
                        var substitutionMatchesDeclaration = declaration.matchSubstitution(substitution, context);
                        if (substitutionMatchesDeclaration) {
                            return true;
                        }
                    });
                }
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(substitutionString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var _this = this;
                var substitutionsMatch;
                var frameString = this.string, substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerify = this.verifyDeclarations(assignments, stated, context);
                if (declarationsVerify) {
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
                if (verifies) {
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' stated frame..."));
                var simple = this.isSimple();
                if (!simple) {
                    context.trace("The '".concat(frameString, "' stated frame must be simple."));
                } else {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "verifyDeclarations",
            value: function verifyDeclarations(assignments, stated, context) {
                var declarationsVerify = true; ///
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, declarationsString = declarationsStringFromDeclarations(this.declarations);
                    context.trace("Verifying the '".concat(declarationsString, "' declaration").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    declarationsVerify = this.declarations.every(function(declaration) {
                        var declarationVerifies = declaration.verify(assignments, stated, context);
                        return declarationVerifies;
                    });
                    if (declarationsVerify) {
                        context.debug("...verified the '".concat(declarationsString, "' declaration").concat(sOrNothing, "."));
                    }
                }
                return declarationsVerify;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
            }
        }
    ], [
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var frame = null;
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var frameNode = definedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var frameNode = containedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));
function frameFromFrameNode(frameNode, context) {
    var Frame = _ontology.default.Frame, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), declarations = declarationsFromFrameNode(frameNode, context), metavariables = metavariablesFromFrameNode(frameNode, context), frame = new Frame(string, node, tokens, declarations, metavariables);
    return frame;
}
function declarationsFromFrameNode(frameNode, context) {
    var Declaration = _ontology.default.Declaration, declarationNodes = frameNode.getDeclarationNodes(), declarations = declarationNodes.map(function(declarationNode) {
        var declaration = Declaration.fromDeclarationNode(declarationNode, context);
        return declaration;
    });
    return declarations;
}
function metavariablesFromFrameNode(frameNode, context) {
    var Metavariable = _ontology.default.Metavariable, metavariableNodes = frameNode.getMetavariableNodes(), metavariables = metavariableNodes.map(function(metavariableNode) {
        var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
        return metavariable;
    });
    return metavariables;
}
function declarationsStringFromDeclarations(declarations) {
    var declarationsString = declarations.reduce(function(declarationsString, declaration) {
        var declarationString = declaration.getString();
        declarationsString = declarationsString === null ? declarationString : "".concat(declarationsString, ", ").concat(declarationString);
        return declarationsString;
    }, null);
    return declarationsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBTLCBOT1RISU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBmaXJzdERlY2xhcmF0aW9uID0gZmlyc3QodGhpcy5kZWNsYXJhdGlvbnMpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBmaXJzdERlY2xhcmF0aW9uOyAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlID0gZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGxldCBzaW1wbGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdERlY2xhcmF0aW9uID0gZmlyc3QodGhpcy5kZWNsYXJhdGlvbnMpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBmaXJzdERlY2xhcmF0aW9uOyAvLy9cblxuICAgICAgc2ltcGxlID0gZGVjbGFyYXRpb24uaXNTaW1wbGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzRGVjbGFyYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNNYXRjaDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmICghc2ltcGxlKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgbXVzdCBiZSBzaW1wbGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeURlY2xhcmF0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlY2xhcmF0aW9uc1ZlcmlmeSA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChsZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnModGhpcy5kZWNsYXJhdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmeSA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVzID0gZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWNsYXJhdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGVzKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgY29uc3QgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zLnJlZHVjZSgoZGVjbGFyYXRpb25zU3RyaW5nLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gZGVjbGFyYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBkZWNsYXJhdGlvbnNTdHJpbmcgPSAoZGVjbGFyYXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zU3RyaW5nfSwgJHtkZWNsYXJhdGlvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldERlY2xhcmF0aW9ucyIsImdldExlbmd0aCIsImxlbmd0aCIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInNpbXBsZSIsImlzU2ltcGxlIiwiZmlyc3REZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZVN0cmluZyIsImVxdWFsVG8iLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwic3Vic3RpdHV0aW9uTWF0Y2hlc0RlY2xhcmF0aW9uIiwiZGVidWciLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwiZGVjbGFyYXRpb25zVmVyaWZ5IiwidmVyaWZ5RGVjbGFyYXRpb25zIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInNPck5vdGhpbmciLCJTIiwiTk9USElORyIsImRlY2xhcmF0aW9uc1N0cmluZyIsImRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJldmVyeSIsImRlY2xhcmF0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJvbnRvbG9neSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uTm9kZXMiLCJnZXREZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCO2dFQUVWO3lCQUdNOzZCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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