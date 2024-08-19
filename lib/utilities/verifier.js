"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "verifyNode", {
    enumerable: true,
    get: function() {
        return verifyNode;
    }
});
function verifyNode(nodeQueryMaps, nonTerminalNode, localMetaContext, verifyAhead) {
    var nodeVerified;
    nodeVerified = nodeQueryMaps.some(function(nodeQueryMap) {
        var nodeVerified = false;
        var nodeQuery = nodeQueryMap.nodeQuery, verifyNode = nodeQueryMap.verifyNode;
        var node = nodeQuery(nonTerminalNode);
        if (node !== null) {
            nodeVerified = verifyNode(node, localMetaContext, verifyAhead);
        }
        if (nodeVerified) {
            return true;
        }
    });
    return nodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBub2RlVmVyaWZpZWQgPSBub2RlUXVlcnlNYXBzLnNvbWUoKG5vZGVRdWVyeU1hcCkgPT4ge1xuICAgIGxldCBub2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCB2ZXJpZnlOb2RlIH0gPSBub2RlUXVlcnlNYXA7XG5cbiAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU5vZGUiLCJub2RlUXVlcnlNYXBzIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9kZVZlcmlmaWVkIiwic29tZSIsIm5vZGVRdWVyeU1hcCIsIm5vZGVRdWVyeSIsIm5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsV0FBV0MsYUFBYSxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXO0lBQ3RGLElBQUlDO0lBRUpBLGVBQWVKLGNBQWNLLElBQUksQ0FBQyxTQUFDQztRQUNqQyxJQUFJRixlQUFlO1FBRW5CLElBQVFHLFlBQTBCRCxhQUExQkMsV0FBV1IsYUFBZU8sYUFBZlA7UUFFbkIsSUFBTVMsT0FBT0QsVUFBVU47UUFFdkIsSUFBSU8sU0FBUyxNQUFNO1lBQ2pCSixlQUFlTCxXQUFXUyxNQUFNTixrQkFBa0JDO1FBQ3BEO1FBRUEsSUFBSUMsY0FBYztZQUNoQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==