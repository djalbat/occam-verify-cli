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
var _array = require("./utilities/array");
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
                        var firstMetavariableNode = (0, _array.first)(this.metavariableNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVOb2Rlcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlTm9kZXMpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyAgLy8vXG5cbiAgICAgIGNvbnN0IG5hbWVNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IChuYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBuYW1lTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IFtdLFxuICAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IFtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbnNBbmRNZXRhdmFyaWFibGVOb2RlcyhkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKSB7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVOb2Rlcyk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZSIsImRlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmF0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGVOb2RlIiwiZmlyc3QiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJuYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibmFtZU1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwic29tZSIsImRlY2xhcmF0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbiIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwibWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQiLCJmcm9tRGVjbGFyYXRpb25zIiwiZnJhbWUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21EZWNsYXJhdGlvbnNBbmRNZXRhdmFyaWFibGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7cUJBSEM7b0JBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLFlBQVksRUFBRUMsaUJBQWlCO2dDQUR4QkY7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLHFCQUFxQixJQUFJLENBQUNOLFlBQVksQ0FBQ08sTUFBTTtnQkFFbkQsSUFBSUQsdUJBQXVCLEdBQUc7b0JBQzVCLElBQU1FLDBCQUEwQixJQUFJLENBQUNQLGlCQUFpQixDQUFDTSxNQUFNO29CQUU3RCxJQUFJQyw0QkFBNEIsR0FBRzt3QkFDakMsSUFBTUMsd0JBQXdCQyxJQUFBQSxZQUFLLEVBQUMsSUFBSSxDQUFDVCxpQkFBaUI7d0JBRTFESSxtQkFBbUJJLHVCQUF1QixHQUFHO29CQUMvQztnQkFDRjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUNwQyxJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1SLG1CQUFtQixJQUFJLENBQUNELG1CQUFtQjtnQkFFakQsSUFBSUMscUJBQXFCLE1BQU07b0JBQzdCLElBQU1TLE9BQU9GLGtCQUFtQixHQUFHO29CQUVuQ0EsbUJBQW1CRyxJQUFBQSwwQ0FBb0MsRUFBQ1YsbUJBQW9CLEdBQUc7b0JBRS9FLElBQU1XLDhCQUErQkYsU0FBU0Y7b0JBRTlDQywwQkFBMEJHLDZCQUE4QixHQUFHO2dCQUM3RDtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ25CLFlBQVksQ0FBQ29CLElBQUksQ0FBQyxTQUFDQztvQkFDbEQsSUFBTUMscUNBQXFDRCxZQUFZSixpQkFBaUIsQ0FBQ0M7b0JBRXpFLElBQUlJLG9DQUFvQzt3QkFDdEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsb0JBQW9COztnQkFDOUMsSUFBTUMsZ0JBQWdCRCxxQkFBcUJFLGdCQUFnQixJQUNyREMsdUJBQXVCRixjQUFjRyxpQkFBaUIsQ0FBQyxTQUFDVjtvQkFDdEQsSUFBTUMsc0JBQXNCLE1BQUtGLGlCQUFpQixDQUFDQztvQkFFbkQsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLElBQ0FVLGdDQUFnQ0Ysc0JBQXNCLEdBQUc7Z0JBRS9ELE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCOUIsWUFBWTtnQkFDbEMsSUFBTUMsb0JBQW9CLEVBQUUsRUFDdEI4QixRQUFRLElBOUVHaEMsTUE4RU9DLGNBQWNDO2dCQUV0QyxPQUFPOEI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQjNCLGdCQUFnQjtnQkFDMUMsSUFBTUwsZUFBZSxFQUFFLEVBQ2pCQyxvQkFBb0I7b0JBQ2xCSTtpQkFDRCxFQUNEMEIsUUFBUSxJQXhGR2hDLE1Bd0ZPQyxjQUFjQztnQkFFdEMsT0FBTzhCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNqQyxZQUFZLEVBQUVDLGlCQUFpQjtnQkFDekUsSUFBTThCLFFBQVEsSUE5RkdoQyxNQThGT0MsY0FBY0M7Z0JBRXRDLE9BQU84QjtZQUNUOzs7V0FqR21CaEMifQ==