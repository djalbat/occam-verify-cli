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
function halt(node) {
    this.context.halt(node);
}
function begin(node) {
    this.context.begin(node);
}
function complete(node) {
    this.context.complete(node);
}
var callbacksMixins = {
    halt: halt,
    begin: begin,
    complete: complete
};
var _default = callbacksMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2FsbGJhY2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBoYWx0KG5vZGUpIHsgdGhpcy5jb250ZXh0LmhhbHQobm9kZSk7IH1cblxuZnVuY3Rpb24gYmVnaW4obm9kZSkgeyB0aGlzLmNvbnRleHQuYmVnaW4obm9kZSk7IH1cblxuZnVuY3Rpb24gY29tcGxldGUobm9kZSkgeyB0aGlzLmNvbnRleHQuY29tcGxldGUobm9kZSk7IH1cblxuY29uc3QgY2FsbGJhY2tzTWl4aW5zID0ge1xuICBoYWx0LFxuICBiZWdpbixcbiAgY29tcGxldGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGxiYWNrc01peGlucztcbiJdLCJuYW1lcyI6WyJoYWx0Iiwibm9kZSIsImNvbnRleHQiLCJiZWdpbiIsImNvbXBsZXRlIiwiY2FsbGJhY2tzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztBQVpBLFNBQVNBLEtBQUtDLElBQUksRUFBRTtJQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixJQUFJLENBQUNDO0FBQU87QUFFL0MsU0FBU0UsTUFBTUYsSUFBSSxFQUFFO0lBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0Y7QUFBTztBQUVqRCxTQUFTRyxTQUFTSCxJQUFJLEVBQUU7SUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDSDtBQUFPO0FBRXZELElBQU1JLGtCQUFrQjtJQUN0QkwsTUFBQUE7SUFDQUcsT0FBQUE7SUFDQUMsVUFBQUE7QUFDRjtJQUVBLFdBQWVDIn0=