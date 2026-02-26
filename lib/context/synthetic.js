"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SyntheticContext;
    }
});
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SyntheticContext extends _context.default {
    constructor(context, contexts){
        super(context);
        this.contexts = contexts;
    }
    getContexts() {
        return this.contexts;
    }
    findTermByTermNode(termNode) {
        let term = null;
        this.contexts.some((context)=>{
            term = context.findTermByTermNode(termNode);
            if (term !== null) {
                return true;
            }
        });
        return term;
    }
    findFrameByFrameNode(frameNode) {
        let frame = null;
        this.contexts.some((context)=>{
            frame = context.findFrameByFrameNode(frameNode);
            if (frame !== null) {
                return true;
            }
        });
        return frame;
    }
    static fromContexts(contexts, context) {
        const syntheticContext = new SyntheticContext(context, contexts);
        return syntheticContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ludGhldGljQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb250ZXh0cykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHM7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNvbWUoKGNvbnRleHQpID0+IHtcbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0cy5zb21lKChjb250ZXh0KSA9PiB7XG4gICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0cyhjb250ZXh0cywgY29udGV4dCkge1xuICAgIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBuZXcgU3ludGhldGljQ29udGV4dChjb250ZXh0LCBjb250ZXh0cyk7XG5cbiAgICByZXR1cm4gc3ludGhldGljQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN5bnRoZXRpY0NvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImNvbnRleHRzIiwiZ2V0Q29udGV4dHMiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJzb21lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21Db250ZXh0cyIsInN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0VBRkQ7Ozs7OztBQUVMLE1BQU1BLHlCQUF5QkMsZ0JBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxRQUFRLENBQUU7UUFDN0IsS0FBSyxDQUFDRDtRQUVOLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7SUFDdEI7SUFFQUUsbUJBQW1CQyxRQUFRLEVBQUU7UUFDM0IsSUFBSUMsT0FBTztRQUVYLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxJQUFJLENBQUMsQ0FBQ047WUFDbEJLLE9BQU9MLFFBQVFHLGtCQUFrQixDQUFDQztZQUVsQyxJQUFJQyxTQUFTLE1BQU07Z0JBQ2pCLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBRSxxQkFBcUJDLFNBQVMsRUFBRTtRQUM5QixJQUFJQyxRQUFRO1FBRVosSUFBSSxDQUFDUixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDTjtZQUNsQlMsUUFBUVQsUUFBUU8sb0JBQW9CLENBQUNDO1lBRXJDLElBQUlDLFVBQVUsTUFBTTtnQkFDbEIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUEsT0FBT0MsYUFBYVQsUUFBUSxFQUFFRCxPQUFPLEVBQUU7UUFDckMsTUFBTVcsbUJBQW1CLElBQUliLGlCQUFpQkUsU0FBU0M7UUFFdkQsT0FBT1U7SUFDVDtBQUNGIn0=