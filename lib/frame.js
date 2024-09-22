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
    function Frame(declarations, metavariables) {
        _class_call_check(this, Frame);
        this.declarations = declarations;
        this.metavariables = metavariables;
    }
    _create_class(Frame, [
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
                var metavariable = null;
                var declarationsLength = this.declarations.length;
                if (declarationsLength === 0) {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength === 1) {
                        var firstMetavariable = (0, _array.first)(this.metavariables);
                        metavariable = firstMetavariable; ///
                    }
                }
                return metavariable;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = false;
                var metavariable = this.getMetavariable();
                if (metavariable !== null) {
                    var name = metavariableName, nameMatches = metavariable.matchName(name);
                    metavariableNameMatches = nameMatches; ///
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
            key: "fromMetavariable",
            value: function fromMetavariable(metavariable) {
                var declarations = [], metavariables = [
                    metavariable
                ], frame = new Frame(declarations, metavariables);
                return frame;
            }
        },
        {
            key: "fromDeclarations",
            value: function fromDeclarations(declarations) {
                var metavariables = [], frame = new Frame(declarations, metavariables);
                return frame;
            }
        },
        {
            key: "fromDeclarationsAndMetavariables",
            value: function fromDeclarationsAndMetavariables(declarations, metavariables) {
                var frame = new Frame(declarations, metavariables);
                return frame;
            }
        }
    ]);
    return Frame;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBuYW1lTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbmFtZU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZFdpdGhEZWNsYXJhdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uc0FuZE1ldGF2YXJpYWJsZXMoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZyYW1lIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJmaXJzdCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRGVjbGFyYXRpb24iLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJldmVyeVN1YnN0aXR1dGlvbiIsIm1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkIiwiZnJvbU1ldGF2YXJpYWJsZSIsImZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsImZyb21EZWNsYXJhdGlvbnNBbmRNZXRhdmFyaWFibGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLFlBQVksRUFBRUMsYUFBYTtnQ0FEcEJGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDTixZQUFZLENBQUNPLE1BQU07Z0JBRW5ELElBQUlELHVCQUF1QixHQUFHO29CQUM1QixJQUFNRSxzQkFBc0IsSUFBSSxDQUFDUCxhQUFhLENBQUNNLE1BQU07b0JBRXJELElBQUlDLHdCQUF3QixHQUFHO3dCQUM3QixJQUFNQyxvQkFBb0JDLElBQUFBLFlBQUssRUFBQyxJQUFJLENBQUNULGFBQWE7d0JBRWxESSxlQUFlSSxtQkFBbUIsR0FBRztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNUixlQUFlLElBQUksQ0FBQ0QsZUFBZTtnQkFFekMsSUFBSUMsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1TLE9BQU9GLGtCQUNQRyxjQUFjVixhQUFhVyxTQUFTLENBQUNGO29CQUUzQ0QsMEJBQTBCRSxhQUFjLEdBQUc7Z0JBQzdDO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBc0IsSUFBSSxDQUFDbkIsWUFBWSxDQUFDb0IsSUFBSSxDQUFDLFNBQUNDO29CQUNsRCxJQUFNQyxxQ0FBcUNELFlBQVlKLGlCQUFpQixDQUFDQztvQkFFekUsSUFBSUksb0NBQW9DO3dCQUN0QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7O2dCQUM5QyxJQUFNQyxnQkFBZ0JELHFCQUFxQkUsZ0JBQWdCLElBQ3JEQyx1QkFBdUJGLGNBQWNHLGlCQUFpQixDQUFDLFNBQUNWO29CQUN0RCxJQUFNQyxzQkFBc0IsTUFBS0YsaUJBQWlCLENBQUNDO29CQUVuRCxJQUFJQyxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0YsSUFDQVUsZ0NBQWdDRixzQkFBc0IsR0FBRztnQkFFL0QsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJ6QixZQUFZO2dCQUNsQyxJQUFNTCxlQUFlLEVBQUUsRUFDakJDLGdCQUFnQjtvQkFDZEk7aUJBQ0QsRUFDRDBCLFFBQVEsSUE5RUdoQyxNQThFT0MsY0FBY0M7Z0JBRXRDLE9BQU84QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCaEMsWUFBWTtnQkFDbEMsSUFBTUMsZ0JBQWdCLEVBQUUsRUFDbEI4QixRQUFRLElBckZHaEMsTUFxRk9DLGNBQWNDO2dCQUV0QyxPQUFPOEI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ2pDLFlBQVksRUFBRUMsYUFBYTtnQkFDakUsSUFBTThCLFFBQVEsSUEzRkdoQyxNQTJGT0MsY0FBY0M7Z0JBRXRDLE9BQU84QjtZQUNUOzs7V0E5Rm1CaEMifQ==