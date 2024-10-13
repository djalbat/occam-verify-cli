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
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame/metavariable!");
var Frame = /*#__PURE__*/ function() {
    function Frame(string, declarations, metavariables) {
        _class_call_check(this, Frame);
        this.string = string;
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
            // getMetavariableNode() {
            //   let metavariableNode = null;
            //
            //   const declarationsLength = this.declarations.length;
            //
            //   if (declarationsLength === 0) {
            //     const metavariableNodesLength = this.metavariableNodes.length;
            //
            //     if (metavariableNodesLength === 1) {
            //       const firstMetavariableNode = first(this.metavariableNodes);
            //
            //       metavariableNode = firstMetavariableNode; ///
            //     }
            //   }
            //
            //   return metavariableNode;
            // }
            //
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
            value: function verify(localContext) {
                var verified;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerified = this.declarations.every(function(declaration) {
                    var declarationVerified = declaration.verify(localContext);
                    return declarationVerified;
                });
                if (declarationsVerified) {
                    var metavariablesVerified = this.metavariables.every(function(metavariable) {
                        var metavariableVerified = metavariable.verify(localContext);
                        return metavariableVerified;
                    });
                    verified = metavariablesVerified; ///
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verified;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, localContext) {
                var verifiedGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                localContext.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verified = this.verify(localContext);
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
                var declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
                    var declaration = _declaration.default.fromDeclarationNode(declarationNode, localContext);
                    return declaration;
                }), metavariables = metavariableNodes.map(function(metavariableNode) {
                    var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext);
                    return metavariable;
                }), node = frameNode, string = localContext.nodeAsString(node), frame = new Frame(string, declarations, metavariables);
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var frame = null;
                var frameMetavariableNode = frameMetavariableNodeQuery(containedAssertionNode);
                if (frameMetavariableNode !== null) {
                    var metavariableNode = frameMetavariableNode, metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
                        metavariable
                    ], node = metavariableNode, string = localContext.nodeAsString(node);
                    frame = new Frame(string, declarations, metavariables);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL2ZyYW1lL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVzKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICAvLyBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAvLyAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcbiAgLy9cbiAgLy8gICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG4gIC8vXG4gIC8vICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGVzLmxlbmd0aDtcbiAgLy9cbiAgLy8gICAgIGlmIChtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAvLyAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZU5vZGVzKTtcbiAgLy9cbiAgLy8gICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0TWV0YXZhcmlhYmxlTm9kZTsgLy8vXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICAvLyB9XG4gIC8vXG4gIC8vIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gIC8vICAgbGV0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuICAvL1xuICAvLyAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgIC8vL1xuICAvL1xuICAvLyAgICAgY29uc3QgbmFtZU1hdGNoZXNNZXRhdmFyaWFibGVOYW1lID0gKG5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpO1xuICAvL1xuICAvLyAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBuYW1lTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWU7ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAvLyAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAvLyAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIC8vXG4gIC8vICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbikge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHtcbiAgLy8gICBjb25zdCBzdWJzdGl0dXRpb25zID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAvLyAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gIC8vICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAvL1xuICAvLyAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSksXG4gIC8vICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkO1xuICAvLyB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IGRlY2xhcmF0aW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlc1ZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGxvY2FsQ29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZU5vZGVzLm1hcCgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBzdGF0aWMgZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IFtdLFxuICAvLyAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuICAvL1xuICAvLyAgIHJldHVybiBmcmFtZTtcbiAgLy8gfVxuICAvL1xuICAvLyBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAvLyAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdLFxuICAvLyAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gW1xuICAvLyAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVxuICAvLyAgICAgICAgIF0sXG4gIC8vICAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVOb2Rlcyk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGZyYW1lO1xuICAvLyB9XG4gIC8vXG4gIC8vIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25zQW5kTWV0YXZhcmlhYmxlTm9kZXMoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVOb2Rlcykge1xuICAvLyAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuICAvL1xuICAvLyAgIHJldHVybiBmcmFtZTtcbiAgLy8gfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRnJhbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiRnJhbWUiLCJzdHJpbmciLCJkZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImZpcnN0IiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsInRyYWNlIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwiZGVidWciLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJkZWNsYXJhdGlvbk5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJhbWUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzT0E7OztlQUFBOzs7MkRBcE9pQjtrRUFDTzttRUFDQzs2QkFFWTtxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsd0JBQ3BDRSw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFN0MsSUFBQSxBQUFNQyxzQkFBTjthQUFNQSxNQUNRQyxNQUFNLEVBQUVDLFlBQVks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