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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
var _metaTypeNames = require("./metaTypeNames");
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
var frameNodeQuery = (0, _query.nodeQuery)("/*/frame"), declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
var first = _necessary.arrayUtilities.first;
var Frame = /*#__PURE__*/ function() {
    function Frame(string, node, declarations, metavariables) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.declarations = declarations;
        this.metavariables = metavariables;
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
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                return this.metavariables;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable;
                var metavariablesLength = this.metavariables.length;
                if (metavariablesLength === 1) {
                    var firstMetavariable = first(this.metavariables);
                    metavariable = firstMetavariable; ///
                }
                return metavariable;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = null;
                var declarationsLength = this.declarations.length;
                if (declarationsLength === 0) {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength === 1) {
                        var firstMetavariable = first(this.metavariables), metavariable = firstMetavariable; ///
                        metavariableNode = metavariable.getNode();
                    }
                }
                return metavariableNode;
            }
        },
        {
            // matchMetavariableName(metavariableName) {
            //   let metavariableNameMatches = false;
            //
            //   const metavariableNode = this.getMetavariableNode();
            //
            //   if (metavariableNode !== null) {
            //     const name = metavariableName;  ///
            //
            //     metavariableName = metavariableNameFromMetavariableNode(metavariableNode);  ///
            //
            //     const nameMatchesMetavariableName = (name === metavariableName);
            //
            //     metavariableNameMatches = nameMatchesMetavariableName;  ///
            //   }
            //
            //   return metavariableNameMatches;
            // }
            //
            // unifySubstitution(substitution) {
            //   const substitutionUnified = this.declarations.some((declaration) => {
            //     const substitutionUnifiedWithDeclaration = declaration.unifySubstitution(substitution);
            //
            //     if (substitutionUnifiedWithDeclaration) {
            //       return true;
            //     }
            //   });
            //
            //   return substitutionUnified;
            // }
            //
            // unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
            //   const substitutions = metaLemmaMetatheorem.getSubstitutions(),
            //         substitutionsUnified = substitutions.everySubstitution((substitution) => {
            //           const substitutionUnified = this.unifySubstitution(substitution);
            //
            //           if (substitutionUnified) {
            //             return true;
            //           }
            //         }),
            //         metaLemmaOrMetaTheoremUnified = substitutionsUnified; ///
            //
            //   return metaLemmaOrMetaTheoremUnified;
            // }
            key: "verify",
            value: function verify(assignments, stated1, localContext) {
                var verified;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame..."));
                var verifiedWhenStated = false, verifiedWhenDerived = false;
                if (stated1) {
                    verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                } else {
                    verifiedWhenDerived = this.verifyWhenDerived(assignments, localContext);
                }
                if (verifiedWhenStated || verifiedWhenDerived) {
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, localContext) {
                var verifiedWhenStated = false;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame when stated..."));
                var declarationsLength = this.declarations.length;
                if (declarationsLength === 0) {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength === 1) {
                        var firstMetavariable = first(this.metavariables), metavariable = firstMetavariable, metavariableVerified = metavariable.verify(localContext);
                        verifiedWhenStated = metavariableVerified; ///
                    } else {
                        localContext.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."));
                    }
                } else {
                    localContext.trace("The '".concat(frameString, "' stated frame cannot have declarations."));
                }
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(frameString, "' frame when stated."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(assignments, localContext) {
                var verifiedWhenDerived;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame when derived..."));
                var declarationsVerified = this.declarations.every(function(declaration) {
                    var declarationVerified = declaration.verify(assignments, stated, localContext);
                    return declarationVerified;
                });
                if (declarationsVerified) {
                    var metavariablesVerified = this.metavariables.every(function(metavariable) {
                        var metavariableVerified = metavariable.verify(localContext);
                        return metavariableVerified;
                    });
                    verifiedWhenDerived = metavariablesVerified; ///
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(frameString, "' frame when derived."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated1, localContext) {
                var verifiedGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                localContext.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verified = this.verify(assignments, stated1, localContext);
                    verifiedGivenMetaType = verified; ///
                }
                if (verifiedGivenMetaType) {
                    localContext.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiedGivenMetaType;
            }
        }
    ], [
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, localContext) {
                var frame = null;
                if (frameNode !== null) {
                    var declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
                        var declaration = _declaration.default.fromDeclarationNode(declarationNode, localContext);
                        return declaration;
                    }), metavariables = metavariableNodes.map(function(metavariableNode) {
                        var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext);
                        return metavariable;
                    }), node = frameNode, string = localContext.nodeAsString(node);
                    frame = new Frame(string, node, declarations, metavariables);
                }
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var frame = null;
                var frameNode = frameNodeQuery(definedAssertionNode);
                if (frameNode !== null) {
                    var metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
                            metavariable
                        ], node = frameNode, string = localContext.nodeAsString(node);
                        frame = new Frame(string, node, declarations, metavariables);
                    }
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var frame = null;
                var frameNode = frameNodeQuery(containedAssertionNode);
                if (frameNode !== null) {
                    var metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
                            metavariable
                        ], node = frameNode, string = localContext.nodeAsString(node);
                        frame = new Frame(string, node, declarations, metavariables);
                    }
                }
                return frame;
            }
        }
    ]);
    return Frame;
}();
Object.assign(_shim.default, {
    Frame: Frame
});
var _default = Frame;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9mcmFtZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgLy8gbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgLy8gICBsZXQgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG4gIC8vXG4gIC8vICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAgLy8vXG4gIC8vXG4gIC8vICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyAgLy8vXG4gIC8vXG4gIC8vICAgICBjb25zdCBuYW1lTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG4gIC8vXG4gIC8vICAgICBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IG5hbWVNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gIC8vICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gIC8vICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgLy9cbiAgLy8gICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aERlY2xhcmF0aW9uKSB7XG4gIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAvLyAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gIC8vICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgLy8gICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIC8vXG4gIC8vICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICB9KSxcbiAgLy8gICAgICAgICBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAvLy9cbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIC8vIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHN0YXRlZCkge1xuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2hlbiBzdGF0ZWQuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfVxuXG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aGVuIGRlcml2ZWQuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IG1ldGF2YXJpYWJsZXNWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2hlbiBkZXJpdmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEZyYW1lXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRnJhbWU7XG4iXSwibmFtZXMiOlsiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJkZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmF0aW9uc0xlbmd0aCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJkZWNsYXJhdGlvbk5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc1RBOzs7ZUFBQTs7O3lCQXBUK0I7MkRBRWQ7a0VBQ087bUVBQ0M7NkJBRVk7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQzNCQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMseUJBQ2xDSSx5QkFBeUJGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUMsSUFBTSxBQUFFRyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFBLEFBQU1FLHNCQUFOO2FBQU1BLE1BQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRGpESjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUxuQko7O1lBUUpLLEtBQUFBO21CQUFB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