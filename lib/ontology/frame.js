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
            key: "getDeclaration",
            value: function getDeclaration() {
                var declaration = null;
                var length = this.getLength();
                if (length === 1) {
                    var firstDeclaration = first(this.declarations);
                    declaration = firstDeclaration; ///
                }
                return declaration;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var simple = this.isSimple();
                if (simple) {
                    var declaration = this.getDeclaration();
                    metavariable = declaration.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var declaration = this.getDeclaration();
                if (declaration !== null) {
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
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                return this.node.match(frameNode);
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
                    var frame = this; ///
                    context.addFrame(frame);
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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var simple = this.isSimple();
                if (simple) {
                    var declaration = this.getDeclaration(), declarationJSON = declaration.toJSON();
                    json = declarationJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var frame = null;
                if (json !== null) {
                    var Declaration = _ontology.default.Declaration, declaration = Declaration.fromJSON(json, context), declarations = [
                        declaration
                    ], string = null, node = null, tokens = null;
                    frame = new Frame(string, node, tokens, declarations);
                }
                return frame;
            }
        },
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
    var Frame = _ontology.default.Frame, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), declarations = declarationsFromFrameNode(frameNode, context), frame = new Frame(string, node, tokens, declarations);
    return frame;
}
function declarationsFromFrameNode(frameNode, context) {
    var Declaration = _ontology.default.Declaration, declarationNodes = frameNode.getDeclarationNodes(), declarations = declarationNodes.map(function(declarationNode) {
        var declaration = Declaration.fromDeclarationNode(declarationNode, context);
        return declaration;
    });
    return declarations;
}
function declarationsStringFromDeclarations(declarations) {
    var declarationsString = declarations.reduce(function(declarationsString, declaration) {
        var declarationString = declaration.getString();
        declarationsString = declarationsString === null ? declarationString : "".concat(declarationsString, ", ").concat(declarationString);
        return declarationsString;
    }, null);
    return declarationsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBTLCBOT1RISU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7IH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0RGVjbGFyYXRpb24gPSBmaXJzdCh0aGlzLmRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGRlY2xhcmF0aW9uID0gZmlyc3REZWNsYXJhdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHRoaXMuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgIGlmIChkZWNsYXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2ltcGxlID0gZGVjbGFyYXRpb24uaXNTaW1wbGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkgeyByZXR1cm4gdGhpcy5ub2RlLm1hdGNoKGZyYW1lTm9kZSk7IH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc0RlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0RlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc01hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZ5ID0gdGhpcy52ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZ5KSB7XG4gICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbXBsZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25zVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGxlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyh0aGlzLmRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgZGVjbGFyYXRpb25zVmVyaWZ5ID0gdGhpcy5kZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZXMgPSBkZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZXMgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB2ZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGpzb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbkpTT04gPSBkZWNsYXJhdGlvbi50b0pTT04oKTtcblxuICAgICAganNvbiA9IGRlY2xhcmF0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgRGVjbGFyYXRpb24gfSA9b250b2xvZ3ksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW1xuICAgICAgICAgICAgICBkZWNsYXJhdGlvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICAgIHRva2VucyA9IG51bGw7XG5cbiAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWNsYXJhdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gIGNvbnN0IGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9ucy5yZWR1Y2UoKGRlY2xhcmF0aW9uc1N0cmluZywgZGVjbGFyYXRpb24pID0+IHtcbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IGRlY2xhcmF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZGVjbGFyYXRpb25zU3RyaW5nID0gKGRlY2xhcmF0aW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc1N0cmluZ30sICR7ZGVjbGFyYXRpb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnNTdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkZyYW1lIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXREZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwiZmlyc3REZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInNpbXBsZSIsImlzU2ltcGxlIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZVN0cmluZyIsImVxdWFsVG8iLCJtYXRjaEZyYW1lTm9kZSIsImZyYW1lTm9kZSIsIm1hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiIsImRlYnVnIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImRlY2xhcmF0aW9uc1ZlcmlmeSIsInZlcmlmeURlY2xhcmF0aW9ucyIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInNPck5vdGhpbmciLCJTIiwiTk9USElORyIsImRlY2xhcmF0aW9uc1N0cmluZyIsImRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJldmVyeSIsImRlY2xhcmF0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJkZWNsYXJhdGlvbkpTT04iLCJmcm9tSlNPTiIsIkRlY2xhcmF0aW9uIiwib250b2xvZ3kiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJuYW1lIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZSIsImRlY2xhcmF0aW9uTm9kZXMiLCJnZXREZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsInJlZHVjZSIsImRlY2xhcmF0aW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7Z0VBRVY7eUJBR007NkJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLDBCQUFDO2FBQU1DLE1BQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0NBRHBCSjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0wsWUFBWSxDQUFDTSxNQUFNO1lBQUU7OztZQUUvQ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQU1GLFNBQVMsSUFBSSxDQUFDRCxTQUFTO2dCQUU3QixJQUFJQyxXQUFXLEdBQUc7b0JBQ2hCLElBQU1HLG1CQUFtQmhCLE1BQU0sSUFBSSxDQUFDTyxZQUFZO29CQUVoRFEsY0FBY0Msa0JBQWtCLEdBQUc7Z0JBQ3JDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMsU0FBUyxJQUFJLENBQUNDLFFBQVE7Z0JBRTVCLElBQUlELFFBQVE7b0JBQ1YsSUFBTUosY0FBYyxJQUFJLENBQUNELGNBQWM7b0JBRXZDSSxlQUFlSCxZQUFZRSxlQUFlO2dCQUM1QztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELFNBQVM7Z0JBRWIsSUFBTUosY0FBYyxJQUFJLENBQUNELGNBQWM7Z0JBRXZDLElBQUlDLGdCQUFnQixNQUFNO29CQUN4QkksU0FBU0osWUFBWUssUUFBUTtnQkFDL0I7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxLQUFLO2dCQUNiLElBQU1DLGNBQWNELE1BQU1kLFNBQVMsSUFDN0JnQixVQUFXRCxnQkFBZ0IsSUFBSSxDQUFDbkIsTUFBTTtnQkFFNUMsT0FBT29CO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUztnQkFBSSxPQUFPLElBQUksQ0FBQ3JCLElBQUksQ0FBQ3NCLEtBQUssQ0FBQ0Q7WUFBWTs7O1lBRS9ERSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUVDLE9BQU87Z0JBQ3JDLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBTVIsY0FBYyxJQUFJLENBQUNuQixNQUFNLEVBQ3pCNEIscUJBQXFCSCxhQUFhckIsU0FBUztnQkFFakRzQixRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBaUVWLE9BQWpEUyxvQkFBbUIsZ0NBQTBDLE9BQVpULGFBQVk7Z0JBRTVGLElBQUksQ0FBQ1EscUJBQXFCO29CQUN4QkEsc0JBQXNCLElBQUksQ0FBQ3hCLFlBQVksQ0FBQzJCLElBQUksQ0FBQyxTQUFDbkI7d0JBQzVDLElBQU1vQixpQ0FBaUNwQixZQUFZYSxpQkFBaUIsQ0FBQ0MsY0FBY0M7d0JBRW5GLElBQUlLLGdDQUFnQzs0QkFDbEMsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJSixxQkFBcUI7b0JBQ3ZCRCxRQUFRTSxLQUFLLENBQUMsQUFBQyxtQkFBb0ViLE9BQWxEUyxvQkFBbUIsaUNBQTJDLE9BQVpULGFBQVk7Z0JBQ2pHO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVSLE9BQU87O2dCQUN2QyxJQUFJUztnQkFFSixJQUFNaEIsY0FBYyxJQUFJLENBQUNuQixNQUFNLEVBQ3pCb0Msc0JBQXNCRixjQUFjRyxRQUFRO2dCQUVsRFgsUUFBUUcsS0FBSyxDQUFDLEFBQUMsaUJBQW1FVixPQUFuRGlCLHFCQUFvQixpQ0FBMkMsT0FBWmpCLGFBQVk7Z0JBRTlGZ0IscUJBQXFCRCxjQUFjSSxpQkFBaUIsQ0FBQyxTQUFDYjtvQkFDcEQsSUFBTUUsc0JBQXNCLE1BQUtILGlCQUFpQixDQUFDQyxjQUFjQztvQkFFakUsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlRLG9CQUFvQjtvQkFDdEJULFFBQVFNLEtBQUssQ0FBQyxBQUFDLG1CQUFxRWIsT0FBbkRpQixxQkFBb0IsaUNBQTJDLE9BQVpqQixhQUFZO2dCQUNsRztnQkFFQSxPQUFPZ0I7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRWYsT0FBTztnQkFDakMsSUFBSWdCLFdBQVc7Z0JBRWYsSUFBTXZCLGNBQWMsSUFBSSxDQUFDbkIsTUFBTSxFQUFHLEdBQUc7Z0JBRXJDMEIsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpWLGFBQVk7Z0JBRTVDLElBQU13QixxQkFBcUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0osYUFBYUMsUUFBUWY7Z0JBRXhFLElBQUlpQixvQkFBb0I7b0JBQ3RCLElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCO29CQUUxQixJQUFJTCxRQUFRO3dCQUNWSSxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1AsYUFBYWQ7b0JBQzFELE9BQU87d0JBQ0xvQixzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ3RCO29CQUMvQztvQkFFQSxJQUFJbUIsc0JBQXNCQyxxQkFBcUI7d0JBQzdDSixXQUFXO29CQUNiO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBTXhCLFFBQVEsSUFBSSxFQUFFLEdBQUc7b0JBRXZCUSxRQUFRdUIsUUFBUSxDQUFDL0I7b0JBRWpCUSxRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWmIsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT3VCO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCUCxXQUFXLEVBQUVkLE9BQU87Z0JBQ25DLElBQUltQixxQkFBcUI7Z0JBRXpCLElBQU0xQixjQUFjLElBQUksQ0FBQ25CLE1BQU0sRUFBRyxHQUFHO2dCQUVyQzBCLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaVixhQUFZO2dCQUU1QyxJQUFNSixTQUFTLElBQUksQ0FBQ0MsUUFBUTtnQkFFNUIsSUFBSSxDQUFDRCxRQUFRO29CQUNYVyxRQUFRRyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaVixhQUFZO2dCQUNwQyxPQUFPO29CQUNMMEIscUJBQXFCO2dCQUN2QjtnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCbkIsUUFBUU0sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpiLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU8wQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQnRCLE9BQU87Z0JBQ3ZCLElBQUlvQjtnQkFFSixJQUFNM0IsY0FBYyxJQUFJLENBQUNuQixNQUFNLEVBQUcsR0FBRztnQkFFckMwQixRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWlYsYUFBWTtnQkFFNUMyQixzQkFBc0I7Z0JBRXRCLElBQUlBLHFCQUFxQjtvQkFDdkJwQixRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWmIsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBTzJCO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSixXQUFXLEVBQUVDLE1BQU0sRUFBRWYsT0FBTztnQkFDN0MsSUFBSWlCLHFCQUFxQixNQUFPLEdBQUc7Z0JBRW5DLElBQU1sQyxTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsU0FBUyxHQUFHO29CQUNkLElBQU15QyxhQUFhLEFBQUN6QyxTQUFTLElBQ1IwQyxZQUFDLEdBQ0NDLGtCQUFPLEVBQ3hCQyxxQkFBcUJDLG1DQUFtQyxJQUFJLENBQUNuRCxZQUFZO29CQUUvRXVCLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFtRHFCLE9BQWxDRyxvQkFBbUIsaUJBQTBCLE9BQVhILFlBQVc7b0JBRTdFVCxTQUFTLE1BQU8sR0FBRztvQkFFbkJELGNBQWMsTUFBTSxHQUFHO29CQUV2QkcscUJBQXFCLElBQUksQ0FBQ3hDLFlBQVksQ0FBQ29ELEtBQUssQ0FBQyxTQUFDNUM7d0JBQzVDLElBQU02QyxzQkFBc0I3QyxZQUFZNEIsTUFBTSxDQUFDQyxhQUFhQyxRQUFRZjt3QkFFcEUsT0FBTzhCO29CQUNUO29CQUVBLElBQUliLG9CQUFvQjt3QkFDdEJqQixRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBcURrQixPQUFsQ0csb0JBQW1CLGlCQUEwQixPQUFYSCxZQUFXO29CQUNqRjtnQkFDRjtnQkFFQSxPQUFPUDtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsUUFBUSxFQUFFbEIsV0FBVyxFQUFFQyxNQUFNLEVBQUVmLE9BQU87Z0JBQ3hELElBQUlpQyx3QkFBd0I7Z0JBRTVCLElBQU14QyxjQUFjLElBQUksQ0FBQ25CLE1BQU0sRUFDekI0RCxpQkFBaUJGLFNBQVN0RCxTQUFTO2dCQUV6Q3NCLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFrRCtCLE9BQWpDekMsYUFBWSx1QkFBb0MsT0FBZnlDLGdCQUFlO2dCQUVoRixJQUFNQyxlQUFlSCxTQUFTSSxPQUFPO2dCQUVyQyxJQUFJRCxpQkFBaUJFLG1DQUFvQixFQUFFO29CQUN6QyxJQUFNckIsV0FBVyxJQUFJLENBQUNILE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUWY7b0JBRWxEaUMsd0JBQXdCakIsVUFBVSxHQUFHO2dCQUN2QztnQkFFQSxJQUFJaUIsdUJBQXVCO29CQUN6QmpDLFFBQVFNLEtBQUssQ0FBQyxBQUFDLG9CQUFvRDRCLE9BQWpDekMsYUFBWSx1QkFBb0MsT0FBZnlDLGdCQUFlO2dCQUNwRjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE9BQU87Z0JBRVgsSUFBTWxELFNBQVMsSUFBSSxDQUFDQyxRQUFRO2dCQUU1QixJQUFJRCxRQUFRO29CQUNWLElBQU1KLGNBQWMsSUFBSSxDQUFDRCxjQUFjLElBQ2pDd0Qsa0JBQWtCdkQsWUFBWXFELE1BQU07b0JBRTFDQyxPQUFPQyxpQkFBa0IsR0FBRztnQkFDOUI7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRixJQUFJLEVBQUV2QyxPQUFPO2dCQUMzQixJQUFJUixRQUFRO2dCQUVaLElBQUkrQyxTQUFTLE1BQU07b0JBQ2pCLElBQU0sQUFBRUcsY0FBZUMsaUJBQVEsQ0FBdkJELGFBQ0Z6RCxjQUFjeUQsWUFBWUQsUUFBUSxDQUFDRixNQUFNdkMsVUFDekN2QixlQUFlO3dCQUNiUTtxQkFDRCxFQUNEWCxTQUFTLE1BQ1RDLE9BQU8sTUFDUEMsU0FBUztvQkFFZmdCLFFBQVEsSUFBSW5CLE1BQU1DLFFBQVFDLE1BQU1DLFFBQVFDO2dCQUMxQztnQkFFQSxPQUFPZTtZQUNUOzs7WUFFT29ELEtBQUFBO21CQUFQLFNBQU9BLGNBQWNoRCxTQUFTLEVBQUVJLE9BQU87Z0JBQ3JDLElBQUlSLFFBQVE7Z0JBRVosSUFBSUksY0FBYyxNQUFNO29CQUN0QkosUUFBUXFELG1CQUFtQmpELFdBQVdJO2dCQUN4QztnQkFFQSxPQUFPUjtZQUNUOzs7WUFFT3NELEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFL0MsT0FBTztnQkFDN0MsSUFBTUosWUFBWW1ELGNBQWNDLFlBQVksSUFDdEN4RCxRQUFRcUQsbUJBQW1CakQsV0FBV0k7Z0JBRTVDLE9BQU9SO1lBQ1Q7OztZQUVPeUQsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRWxELE9BQU87Z0JBQzNELElBQUlSLFFBQVE7Z0JBRVosSUFBTUksWUFBWXNELHFCQUFxQkYsWUFBWTtnQkFFbkQsSUFBSXBELGNBQWMsTUFBTTtvQkFDdEJKLFFBQVFxRCxtQkFBbUJqRCxXQUFXSTtnQkFDeEM7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRU8yRCxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFcEQsT0FBTztnQkFDL0QsSUFBSVIsUUFBUTtnQkFFWixJQUFNSSxZQUFZd0QsdUJBQXVCSixZQUFZO2dCQUVyRCxJQUFJcEQsY0FBYyxNQUFNO29CQUN0QkosUUFBUXFELG1CQUFtQmpELFdBQVdJO2dCQUN4QztnQkFFQSxPQUFPUjtZQUNUOzs7O0tBNURBLHlCQUFPNkQsUUFBTztBQStEaEIsU0FBU1IsbUJBQW1CakQsU0FBUyxFQUFFSSxPQUFPO0lBQzVDLElBQU0sQUFBRTNCLFFBQVVzRSxpQkFBUSxDQUFsQnRFLE9BQ0ZFLE9BQU9xQixXQUNQdEIsU0FBUzBCLFFBQVFzRCxZQUFZLENBQUMvRSxPQUM5QkMsU0FBU3dCLFFBQVF1RCxZQUFZLENBQUNoRixPQUM5QkUsZUFBZStFLDBCQUEwQjVELFdBQVdJLFVBQ3BEUixRQUFRLElBQUluQixNQUFNQyxRQUFRQyxNQUFNQyxRQUFRQztJQUU5QyxPQUFPZTtBQUNUO0FBRUEsU0FBU2dFLDBCQUEwQjVELFNBQVMsRUFBRUksT0FBTztJQUNuRCxJQUFNLEFBQUUwQyxjQUFnQkMsaUJBQVEsQ0FBeEJELGFBQ0ZlLG1CQUFtQjdELFVBQVU4RCxtQkFBbUIsSUFDaERqRixlQUFlZ0YsaUJBQWlCRSxHQUFHLENBQUMsU0FBQ0M7UUFDbkMsSUFBTTNFLGNBQWN5RCxZQUFZbUIsbUJBQW1CLENBQUNELGlCQUFpQjVEO1FBRXJFLE9BQU9mO0lBQ1Q7SUFFTixPQUFPUjtBQUNUO0FBRUEsU0FBU21ELG1DQUFtQ25ELFlBQVk7SUFDdEQsSUFBTWtELHFCQUFxQmxELGFBQWFxRixNQUFNLENBQUMsU0FBQ25DLG9CQUFvQjFDO1FBQ2xFLElBQU04RSxvQkFBb0I5RSxZQUFZUCxTQUFTO1FBRS9DaUQscUJBQXFCLEFBQUNBLHVCQUF1QixPQUN0Qm9DLG9CQUNDLEFBQUMsR0FBeUJBLE9BQXZCcEMsb0JBQW1CLE1BQXNCLE9BQWxCb0M7UUFFbEQsT0FBT3BDO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1QifQ==