"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFrame;
    }
});
var _frame = /*#__PURE__*/ _interop_require_default(require("../frame"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("../metaType/frame"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("../verify/declaration"));
var _metavariableGivenMetaType = /*#__PURE__*/ _interop_require_default(require("./metavariableGivenMetaType"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var declarationNodeQuery = (0, _query.nodeQuery)("/frame/declaration!"), declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
var verifyFrameFunctions = [
    verifyDerivedFrame,
    verifyStatedFrame
];
function verifyFrame(frameNode, frames, stated, localContext) {
    var frameVerified;
    var frameString = localContext.nodeAsString(frameNode);
    localContext.trace("Verifying the '".concat(frameString, "' frame..."), frameNode);
    frameVerified = verifyFrameFunctions.some(function(verifyFrameFunction) {
        var frameVerified = verifyFrameFunction(frameNode, frames, stated, localContext);
        if (frameVerified) {
            return true;
        }
    });
    if (frameVerified) {
        localContext.debug("...verified the '".concat(frameString, "' frame."), frameNode);
    }
    return frameVerified;
}
function verifyDerivedFrame(frameNode, frames, stated, localContext) {
    var derivedFrameVerified;
    if (!stated) {
        var frameString = localContext.nodeAsString(frameNode);
        localContext.trace("Verifying the '".concat(frameString, "' derived frame..."), frameNode);
        var declarationNode = declarationNodeQuery(frameNode);
        if (declarationNode !== null) {}
        var declarationNodesLength = declarationNodes.length;
        if (declarationNodesLength === 1) {
            var metavariableNodes = metavariableNodesQuery(frameNode), metavariableNodesLength = metavariableNodes.length;
            if (metavariableNodesLength === 0) {
                var firstDeclarationNode = (0, _array.first)(declarationNodes), declarationNode1 = firstDeclarationNode, declarations = [], declarationVerified = (0, _declaration.default)(declarationNode1, declarations, stated, localContext);
                if (declarationVerified) {
                    var frame = _frame.default.fromDeclarations(declarations);
                    frames.push(frame);
                    derivedFrameVerified = true; ///
                }
            } else {
                localContext.debug("The '".concat(frameString, "' derived frame must no spread metavariables."), frameNode);
            }
        } else {
            localContext.debug("The '".concat(frameString, "' derived frame must have one and only one declaration."), frameNode);
        }
        if (derivedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' derived frame."), frameNode);
        }
    }
    return derivedFrameVerified;
}
function verifyStatedFrame(frameNode, frames, stated, localContext) {
    var statedFrameVerified;
    if (stated) {
        var frameString = localContext.nodeAsString(frameNode);
        localContext.trace("Verifying the '".concat(frameString, "' stated frame..."), frameNode);
        var declarationNodes1 = declarationNodesQuery(frameNode), declarationNodesLength = declarationNodes1.length;
        if (declarationNodesLength === 0) {
            var metavariableNodes = metavariableNodesQuery(frameNode), metavariableNodesLength = metavariableNodes.length;
            if (metavariableNodesLength === 1) {
                var firstMetavariableNode = (0, _array.first)(metavariableNodes), metavariableNode = firstMetavariableNode, metaType = _frame1.default, metavariables = [], metavariableVerified = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, metavariables, localContext);
                if (metavariableVerified) {
                    var firstMetavariable = (0, _array.first)(metavariables), metavariable = firstMetavariable, frame = _frame.default.fromMetavariable(metavariable);
                    frames.push(frame);
                    statedFrameVerified = true;
                }
            } else {
                localContext.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."), frameNode);
            }
        } else {
            localContext.trace("The '".concat(frameString, "' stated frame cannot have declarations."), frameNode);
        }
        if (statedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' stated frame."), frameNode);
        }
    }
    return statedFrameVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIGZyb20gXCIuL21ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uIVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHZlcmlmeUZyYW1lRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRnJhbWUsXG4gIHZlcmlmeVN0YXRlZEZyYW1lXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lVmVyaWZpZWQ7XG5cbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZSA9IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2RlICE9PSBudWxsKSB7XG5cbiAgICB9XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9IGRlY2xhcmF0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXNMZW5ndGggPSBtZXRhdmFyaWFibGVOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdERlY2xhcmF0aW9uTm9kZSA9IGZpcnN0KGRlY2xhcmF0aW9uTm9kZXMpLFxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbk5vZGUgPSBmaXJzdERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBkZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5RGVjbGFyYXRpb24oZGVjbGFyYXRpb25Ob2RlLCBkZWNsYXJhdGlvbnMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgICAgZGVyaXZlZEZyYW1lVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lIG11c3Qgbm8gc3ByZWFkIG1ldGF2YXJpYWJsZXMuYCwgZnJhbWVOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lIG11c3QgaGF2ZSBvbmUgYW5kIG9ubHkgb25lIGRlY2xhcmF0aW9uLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXNMZW5ndGggPSBkZWNsYXJhdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID0gbWV0YXZhcmlhYmxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGVOb2RlID0gZmlyc3QobWV0YXZhcmlhYmxlTm9kZXMpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZmlyc3RNZXRhdmFyaWFibGVOb2RlLFxuICAgICAgICAgICAgICBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbWV0YXZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KG1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlLFxuXG4gICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgICBzdGF0ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCwgZnJhbWVOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RnJhbWUiLCJkZWNsYXJhdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwidmVyaWZ5RnJhbWVGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRnJhbWUiLCJ2ZXJpZnlTdGF0ZWRGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lcyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImZyYW1lVmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeUZyYW1lRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRGcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCIsImRlY2xhcmF0aW9uTm9kZXMiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3REZWNsYXJhdGlvbk5vZGUiLCJmaXJzdCIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsImZyYW1lIiwiRnJhbWUiLCJmcm9tRGVjbGFyYXRpb25zIiwicHVzaCIsInN0YXRlZEZyYW1lVmVyaWZpZWQiLCJmaXJzdE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZSIsImZpcnN0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBd0JBOzs7NERBakJOOzZEQUNRO2tFQUNJO2dGQUNjO3FCQUV0QjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUMsd0JBQ2pDQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUM7QUFFMUMsSUFBTUUsdUJBQXVCO0lBQzNCQztJQUNBQztDQUNEO0FBRWMsU0FBU1IsWUFBWVMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUN6RSxJQUFJQztJQUVKLElBQU1DLGNBQWNGLGFBQWFHLFlBQVksQ0FBQ047SUFFOUNHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZLGVBQWFMO0lBRTlESSxnQkFBZ0JQLHFCQUFxQlcsSUFBSSxDQUFDLFNBQUNDO1FBQ3pDLElBQU1MLGdCQUFnQkssb0JBQW9CVCxXQUFXQyxRQUFRQyxRQUFRQztRQUVyRSxJQUFJQyxlQUFlO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNqQkQsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVksYUFBV0w7SUFDaEU7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU04sbUJBQW1CRSxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ2pFLElBQUlRO0lBRUosSUFBSSxDQUFDVCxRQUFRO1FBQ1gsSUFBTUcsY0FBY0YsYUFBYUcsWUFBWSxDQUFDTjtRQUU5Q0csYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksdUJBQXFCTDtRQUV0RSxJQUFNWSxrQkFBa0JwQixxQkFBcUJRO1FBRTdDLElBQUlZLG9CQUFvQixNQUFNLENBRTlCO1FBQ0EsSUFBTUMseUJBQXlCQyxpQkFBaUJDLE1BQU07UUFFdEQsSUFBSUYsMkJBQTJCLEdBQUc7WUFDaEMsSUFBTUcsb0JBQW9CcEIsdUJBQXVCSSxZQUMzQ2lCLDBCQUEwQkQsa0JBQWtCRCxNQUFNO1lBRXhELElBQUlFLDRCQUE0QixHQUFHO2dCQUNqQyxJQUFNQyx1QkFBdUJDLElBQUFBLFlBQUssRUFBQ0wsbUJBQzdCRixtQkFBa0JNLHNCQUNsQkUsZUFBZSxFQUFFLEVBQ2pCQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDVixrQkFBaUJRLGNBQWNsQixRQUFRQztnQkFFckYsSUFBSWtCLHFCQUFxQjtvQkFDdkIsSUFBTUUsUUFBUUMsY0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQ0w7b0JBRXJDbkIsT0FBT3lCLElBQUksQ0FBQ0g7b0JBRVpaLHVCQUF1QixNQUFNLEdBQUc7Z0JBQ2xDO1lBQ0YsT0FBTztnQkFDTFIsYUFBYU8sS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkwsYUFBWSxrREFBZ0RMO1lBQ3pGO1FBQ0YsT0FBTztZQUNMRyxhQUFhTyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaTCxhQUFZLDREQUEwREw7UUFDbkc7UUFFQSxJQUFJVyxzQkFBc0I7WUFDeEJSLGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZLHFCQUFtQkw7UUFDeEU7SUFDRjtJQUVBLE9BQU9XO0FBQ1Q7QUFFQSxTQUFTWixrQkFBa0JDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDaEUsSUFBSXdCO0lBRUosSUFBSXpCLFFBQVE7UUFDVixJQUFNRyxjQUFjRixhQUFhRyxZQUFZLENBQUNOO1FBRTlDRyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxzQkFBb0JMO1FBRXJFLElBQU1jLG9CQUFtQnBCLHNCQUFzQk0sWUFDekNhLHlCQUF5QkMsa0JBQWlCQyxNQUFNO1FBRXRELElBQUlGLDJCQUEyQixHQUFHO1lBQ2hDLElBQU1HLG9CQUFvQnBCLHVCQUF1QkksWUFDM0NpQiwwQkFBMEJELGtCQUFrQkQsTUFBTTtZQUV4RCxJQUFJRSw0QkFBNEIsR0FBRztnQkFDakMsSUFBTVcsd0JBQXdCVCxJQUFBQSxZQUFLLEVBQUNILG9CQUM5QmEsbUJBQW1CRCx1QkFDbkJFLFdBQVdDLGVBQWEsRUFDeEJDLGdCQUFnQixFQUFFLEVBQ2xCQyx1QkFBdUJDLElBQUFBLGtDQUErQixFQUFDTCxrQkFBa0JDLFVBQVVFLGVBQWU3QjtnQkFFeEcsSUFBSThCLHNCQUFzQjtvQkFDeEIsSUFBTUUsb0JBQW9CaEIsSUFBQUEsWUFBSyxFQUFDYSxnQkFDMUJJLGVBQWVELG1CQUVyQlosUUFBUUMsY0FBSyxDQUFDYSxnQkFBZ0IsQ0FBQ0Q7b0JBRS9CbkMsT0FBT3lCLElBQUksQ0FBQ0g7b0JBRVpJLHNCQUFzQjtnQkFDeEI7WUFDRixPQUFPO2dCQUNMeEIsYUFBYUksS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkYsYUFBWSwyREFBeURMO1lBQ2xHO1FBQ0YsT0FBTztZQUNMRyxhQUFhSSxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaRixhQUFZLDZDQUEyQ0w7UUFDcEY7UUFFQSxJQUFJMkIscUJBQXFCO1lBQ3ZCeEIsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVksb0JBQWtCTDtRQUN2RTtJQUNGO0lBRUEsT0FBTzJCO0FBQ1QifQ==