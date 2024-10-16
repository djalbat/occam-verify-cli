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
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/*/frame/metavariable!");
var first = _necessary.arrayUtilities.first;
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
                    frame = new Frame(string, declarations, metavariables);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9kZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovZnJhbWUvbWV0YXZhcmlhYmxlIVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVzKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlOyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIC8vIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gIC8vICAgbGV0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuICAvL1xuICAvLyAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgIC8vL1xuICAvL1xuICAvLyAgICAgY29uc3QgbmFtZU1hdGNoZXNNZXRhdmFyaWFibGVOYW1lID0gKG5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpO1xuICAvL1xuICAvLyAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBuYW1lTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWU7ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAvLyAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAvLyAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIC8vXG4gIC8vICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbikge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHtcbiAgLy8gICBjb25zdCBzdWJzdGl0dXRpb25zID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAvLyAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gIC8vICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAvL1xuICAvLyAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSksXG4gIC8vICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkO1xuICAvLyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdoZW4gc3RhdGVkLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH1cblxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aGVuIHN0YXRlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2hlbiBkZXJpdmVkLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IGRlY2xhcmF0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBtZXRhdmFyaWFibGVzVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdoZW4gZGVyaXZlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlTm9kZXMubWFwKChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRnJhbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZyYW1lIiwic3RyaW5nIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmF0aW9uc0xlbmd0aCIsImdldE5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb24iLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwU0E7OztlQUFBOzs7eUJBeFMrQjsyREFFZDtrRUFDTzttRUFDQzs2QkFFWTtxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsd0JBQ3BDRSw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFN0MsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFBLEFBQU1FLHNCQUFOO2FBQU1BLE1BQ1FDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQUQzQ0g7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFKbkJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGFBQWE7WUFDM0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsc0JBQXNCLElBQUksQ0FBQ04sYUFBYSxDQUFDTyxNQUFNO2dCQUVyRCxJ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