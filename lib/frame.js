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
var frameMetavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame/metavariable!");
var Frame = /*#__PURE__*/ function() {
    function Frame() {
        _class_call_check(this, Frame);
    }
    _create_class(Frame, null, [
        {
            key: "fromContainedAssertionNode",
            value: // constructor(declarations, metavariableNodes) {
            //   this.declarations = declarations;
            //   this.metavariableNodes = metavariableNodes;
            // }
            //
            // getDeclarations() {
            //   return this.declarations;
            // }
            //
            // getMetavariableNodes() {
            //   return this.metavariableNodes;
            // }
            //
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
            function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var frame = null;
                var frameMetavariableNode = frameMetavariableNodeQuery(containedAssertionNode);
                if (frameMetavariableNode !== null) {
                    debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL2ZyYW1lL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIEZyYW1lIHtcbiAgLy8gY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVOb2Rlcykge1xuICAvLyAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAvLyAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2RlcztcbiAgLy8gfVxuICAvL1xuICAvLyBnZXREZWNsYXJhdGlvbnMoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICAvLyB9XG4gIC8vXG4gIC8vIGdldE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAvLyAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGVzO1xuICAvLyB9XG4gIC8vXG4gIC8vIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gIC8vICAgbGV0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuICAvL1xuICAvLyAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcbiAgLy9cbiAgLy8gICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID09PSAwKSB7XG4gIC8vICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZXMubGVuZ3RoO1xuICAvL1xuICAvLyAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gIC8vICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlTm9kZXMpO1xuICAvL1xuICAvLyAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZmlyc3RNZXRhdmFyaWFibGVOb2RlOyAvLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIC8vIH1cbiAgLy9cbiAgLy8gbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgLy8gICBsZXQgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG4gIC8vXG4gIC8vICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAgLy8vXG4gIC8vXG4gIC8vICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyAgLy8vXG4gIC8vXG4gIC8vICAgICBjb25zdCBuYW1lTWF0Y2hlc01ldGF2YXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG4gIC8vXG4gIC8vICAgICBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IG5hbWVNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gIC8vICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gIC8vICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkV2l0aERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgLy9cbiAgLy8gICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkV2l0aERlY2xhcmF0aW9uKSB7XG4gIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAvLyAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gIC8vICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgLy8gICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIC8vXG4gIC8vICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICB9KSxcbiAgLy8gICAgICAgICBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAvLy9cbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAvLyAgIGRlYnVnZ2VyXG4gIC8vIH1cbiAgLy9cbiAgLy8gc3RhdGljIGZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gIC8vICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBbXSxcbiAgLy8gICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gZnJhbWU7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgLy8gICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgLy8gICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IFtcbiAgLy8gICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVcbiAgLy8gICAgICAgICBdLFxuICAvLyAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpO1xuICAvL1xuICAvLyAgIHJldHVybiBmcmFtZTtcbiAgLy8gfVxuICAvL1xuICAvLyBzdGF0aWMgZnJvbURlY2xhcmF0aW9uc0FuZE1ldGF2YXJpYWJsZU5vZGVzKGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlTm9kZXMpIHtcbiAgLy8gICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZU5vZGVzKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gZnJhbWU7XG4gIC8vIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEZyYW1lXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRnJhbWU7XG4iXSwibmFtZXMiOlsiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJGcmFtZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImxvY2FsQ29udGV4dCIsImZyYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0lBOzs7ZUFBQTs7OzJEQTlIaUI7cUJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTdDLElBQUEsQUFBTUMsc0JBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBNEVHQyxLQUFBQTttQkFBUCxBQTNFQSxpREFBaUQ7WUFDakQsc0NBQXNDO1lBQ3RDLGdEQUFnRDtZQUNoRCxJQUFJO1lBQ0osRUFBRTtZQUNGLHNCQUFzQjtZQUN0Qiw4QkFBOEI7WUFDOUIsSUFBSTtZQUNKLEVBQUU7WUFDRiwyQkFBMkI7WUFDM0IsbUNBQW1DO1lBQ25DLElBQUk7WUFDSixFQUFFO1lBQ0YsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyxFQUFFO1lBQ0YseURBQXlEO1lBQ3pELEVBQUU7WUFDRixvQ0FBb0M7WUFDcEMscUVBQXFFO1lBQ3JFLEVBQUU7WUFDRiwyQ0FBMkM7WUFDM0MscUVBQXFFO1lBQ3JFLEVBQUU7WUFDRixzREFBc0Q7WUFDdEQsUUFBUTtZQUNSLE1BQU07WUFDTixFQUFFO1lBQ0YsNkJBQTZCO1lBQzdCLElBQUk7WUFDSixFQUFFO1lBQ0YsNENBQTRDO1lBQzVDLHlDQUF5QztZQUN6QyxFQUFFO1lBQ0YseURBQXlEO1lBQ3pELEVBQUU7WUFDRixxQ0FBcUM7WUFDckMsMENBQTBDO1lBQzFDLEVBQUU7WUFDRixzRkFBc0Y7WUFDdEYsRUFBRTtZQUNGLHVFQUF1RTtZQUN2RSxFQUFFO1lBQ0Ysa0VBQWtFO1lBQ2xFLE1BQU07WUFDTixFQUFFO1lBQ0Ysb0NBQW9DO1lBQ3BDLElBQUk7WUFDSixFQUFFO1lBQ0Ysb0NBQW9DO1lBQ3BDLDBFQUEwRTtZQUMxRSw4RkFBOEY7WUFDOUYsRUFBRTtZQUNGLGdEQUFnRDtZQUNoRCxxQkFBcUI7WUFDckIsUUFBUTtZQUNSLFFBQVE7WUFDUixFQUFFO1lBQ0YsZ0NBQWdDO1lBQ2hDLElBQUk7WUFDSixFQUFFO1lBQ0Ysc0RBQXNEO1lBQ3RELG1FQUFtRTtZQUNuRSxxRkFBcUY7WUFDckYsOEVBQThFO1lBQzlFLEVBQUU7WUFDRix1Q0FBdUM7WUFDdkMsMkJBQTJCO1lBQzNCLGNBQWM7WUFDZCxjQUFjO1lBQ2Qsb0VBQW9FO1lBQ3BFLEVBQUU7WUFDRiwwQ0FBMEM7WUFDMUMsSUFBSTtZQUVKLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUVDLFlBQVk7Z0JBQ3BFLElBQUlDLFFBQVE7Z0JBRVosSUFBTUMsd0JBQXdCUCwyQkFBMkJJO2dCQUV6RCxJQUFJRywwQkFBMEIsTUFBTTtvQkFDbEMsUUFBUTtnQkFDVjtnQkFFQSxPQUFPRDtZQUNUOzs7V0F0RklKOztBQW9ITk0sT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJSLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9