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
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/*/frame/metavariable!");
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
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var frame = null;
                var frameMetavariableNode = frameMetavariableNodeQuery(definedAssertionNode);
                if (frameMetavariableNode !== null) {
                    var metavariableNode = frameMetavariableNode, metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
                        metavariable
                    ], node = metavariableNode, string = localContext.nodeAsString(node);
                    frame = new Frame(string, declarations, metavariables);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGU7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgLy8gZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgLy8gICBsZXQgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG4gIC8vXG4gIC8vICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuICAvL1xuICAvLyAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgLy8gICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVOb2Rlcy5sZW5ndGg7XG4gIC8vXG4gIC8vICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgLy8gICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGVOb2RlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVOb2Rlcyk7XG4gIC8vXG4gIC8vICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgLy8gfVxuICAvL1xuICAvLyBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAvLyAgIGxldCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcbiAgLy9cbiAgLy8gICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cbiAgLy9cbiAgLy8gICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7ICAvLy9cbiAgLy9cbiAgLy8gICAgIGNvbnN0IG5hbWVNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IChuYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcbiAgLy9cbiAgLy8gICAgIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbmFtZU1hdGNoZXNNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgLy8gICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgLy8gICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAvL1xuICAvLyAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24pIHtcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7XG4gIC8vICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgLy8gICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAvLyAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgLy9cbiAgLy8gICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gIC8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0pLFxuICAvLyAgICAgICAgIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuICAvL1xuICAvLyAgIHJldHVybiBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZDtcbiAgLy8gfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5ldmVyeSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMubWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZXNWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShsb2NhbENvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLy8gc3RhdGljIGZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gIC8vICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBbXSxcbiAgLy8gICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gZnJhbWU7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgLy8gICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgLy8gICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IFtcbiAgLy8gICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVcbiAgLy8gICAgICAgICBdLFxuICAvLyAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuICAvL1xuICAvLyAgIHJldHVybiBmcmFtZTtcbiAgLy8gfVxuICAvL1xuICAvLyBzdGF0aWMgZnJvbURlY2xhcmF0aW9uc0FuZE1ldGF2YXJpYWJsZU5vZGVzKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpIHtcbiAgLy8gICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gZnJhbWU7XG4gIC8vIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEZyYW1lXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRnJhbWU7XG4iXSwibmFtZXMiOlsiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkZyYW1lIiwic3RyaW5nIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJmaXJzdCIsInZlcmlmeSIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJ0cmFjZSIsImRlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsImRlYnVnIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb24iLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyYW1lIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyUEE7OztlQUFBOzs7MkRBelBpQjtrRUFDTzttRUFDQzs2QkFFWTtxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsd0JBQ3BDRSw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFN0MsSUFBQSxBQUFNQyxzQkFBTjthQUFNQSxNQUNRQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEM0NIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSm5CSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FB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