"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Frame;
    }
});
var _necessary = require("necessary");
var _name = require("./utilities/name");
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
var first = _necessary.arrayUtilities.first;
var Frame = /*#__PURE__*/ function() {
    function Frame(declarations, metavariableNodes) {
        _class_call_check(this, Frame);
        this.declarations = declarations;
        this.metavariableNodes = metavariableNodes;
    }
    _create_class(Frame, [
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getMetavariableNodes",
            value: function getMetavariableNodes() {
                return this.metavariableNodes;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = null;
                var declarationsLength = this.declarations.length;
                if (declarationsLength === 0) {
                    var metavariableNodesLength = this.metavariableNodes.length;
                    if (metavariableNodesLength === 1) {
                        var firstMetavariableNode = first(this.metavariableNodes);
                        metavariableNode = firstMetavariableNode; ///
                    }
                }
                return metavariableNode;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = false;
                var metavariableNode = this.getMetavariableNode();
                if (metavariableNode !== null) {
                    var name = metavariableName; ///
                    metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode); ///
                    var nameMatchesMetavariableName = name === metavariableName;
                    metavariableNameMatches = nameMatchesMetavariableName; ///
                }
                return metavariableNameMatches;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution) {
                var substitutionUnified = this.declarations.some(function(declaration) {
                    var substitutionUnifiedWithDeclaration = declaration.unifySubstitution(substitution);
                    if (substitutionUnifiedWithDeclaration) {
                        return true;
                    }
                });
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetaLemmaOrMetatheorem",
            value: function unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
                var _this = this;
                var substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution);
                    if (substitutionUnified) {
                        return true;
                    }
                }), metaLemmaOrMetaTheoremUnified = substitutionsUnified; ///
                return metaLemmaOrMetaTheoremUnified;
            }
        }
    ], [
        {
            key: "fromDeclarations",
            value: function fromDeclarations(declarations) {
                var metavariableNodes = [], frame = new Frame(declarations, metavariableNodes);
                return frame;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode) {
                var declarations = [], metavariableNodes = [
                    metavariableNode
                ], frame = new Frame(declarations, metavariableNodes);
                return frame;
            }
        },
        {
            key: "fromDeclarationsAndMetavariableNodes",
            value: function fromDeclarationsAndMetavariableNodes(declarations, metavariableNodes) {
                var frame = new Frame(declarations, metavariableNodes);
                return frame;
            }
        }
    ]);
    return Frame;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZU5vZGVzKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZmlyc3RNZXRhdmFyaWFibGVOb2RlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgIC8vL1xuXG4gICAgICBjb25zdCBuYW1lTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbmFtZU1hdGNoZXNNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBbXSxcbiAgICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBbXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25zQW5kTWV0YXZhcmlhYmxlTm9kZXMoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVOb2Rlcykge1xuICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWV0YXZhcmlhYmxlTm9kZXNMZW5ndGgiLCJmaXJzdE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJuYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibmFtZU1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwic29tZSIsImRlY2xhcmF0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbiIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwibWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQiLCJmcm9tRGVjbGFyYXRpb25zIiwiZnJhbWUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21EZWNsYXJhdGlvbnNBbmRNZXRhdmFyaWFibGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7b0JBRXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47YUFBTUEsTUFDUEcsWUFBWSxFQUFFQyxpQkFBaUI7Z0NBRHhCSjtRQUVqQixJQUFJLENBQUNHLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2tCQUhSSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMscUJBQXFCLElBQUksQ0FBQ04sWUFBWSxDQUFDTyxNQUFNO2dCQUVuRCxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUIsSUFBTUUsMEJBQTBCLElBQUksQ0FBQ1AsaUJBQWlCLENBQUNNLE1BQU07b0JBRTdELElBQUlDLDRCQUE0QixHQUFHO3dCQUNqQyxJQUFNQyx3QkFBd0JYLE1BQU0sSUFBSSxDQUFDRyxpQkFBaUI7d0JBRTFESSxtQkFBbUJJLHVCQUF1QixHQUFHO29CQUMvQztnQkFDRjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUNwQyxJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1QLG1CQUFtQixJQUFJLENBQUNELG1CQUFtQjtnQkFFakQsSUFBSUMscUJBQXFCLE1BQU07b0JBQzdCLElBQU1RLE9BQU9GLGtCQUFtQixHQUFHO29CQUVuQ0EsbUJBQW1CRyxJQUFBQSwwQ0FBb0MsRUFBQ1QsbUJBQW9CLEdBQUc7b0JBRS9FLElBQU1VLDhCQUErQkYsU0FBU0Y7b0JBRTlDQywwQkFBMEJHLDZCQUE4QixHQUFHO2dCQUM3RDtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ21CLElBQUksQ0FBQyxTQUFDQztvQkFDbEQsSUFBTUMscUNBQXFDRCxZQUFZSixpQkFBaUIsQ0FBQ0M7b0JBRXpFLElBQUlJLG9DQUFvQzt3QkFDdEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsb0JBQW9COztnQkFDOUMsSUFBTUMsZ0JBQWdCRCxxQkFBcUJFLGdCQUFnQixJQUNyREMsdUJBQXVCRixjQUFjRyxpQkFBaUIsQ0FBQyxTQUFDVjtvQkFDdEQsSUFBTUMsc0JBQXNCLE1BQUtGLGlCQUFpQixDQUFDQztvQkFFbkQsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLElBQ0FVLGdDQUFnQ0Ysc0JBQXNCLEdBQUc7Z0JBRS9ELE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCN0IsWUFBWTtnQkFDbEMsSUFBTUMsb0JBQW9CLEVBQUUsRUFDdEI2QixRQUFRLElBOUVHakMsTUE4RU9HLGNBQWNDO2dCQUV0QyxPQUFPNkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQjFCLGdCQUFnQjtnQkFDMUMsSUFBTUwsZUFBZSxFQUFFLEVBQ2pCQyxvQkFBb0I7b0JBQ2xCSTtpQkFDRCxFQUNEeUIsUUFBUSxJQXhGR2pDLE1Bd0ZPRyxjQUFjQztnQkFFdEMsT0FBTzZCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNoQyxZQUFZLEVBQUVDLGlCQUFpQjtnQkFDekUsSUFBTTZCLFFBQVEsSUE5RkdqQyxNQThGT0csY0FBY0M7Z0JBRXRDLE9BQU82QjtZQUNUOzs7V0FqR21CakMifQ==