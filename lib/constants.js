"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get DEBUG_LEVEL () {
        return DEBUG_LEVEL;
    },
    get ERROR_LEVEL () {
        return ERROR_LEVEL;
    },
    get INFO_LEVEL () {
        return INFO_LEVEL;
    },
    get OCCAM_VERIFY_CLI () {
        return OCCAM_VERIFY_CLI;
    },
    get TRACE_LEVEL () {
        return TRACE_LEVEL;
    },
    get WARNING_LEVEL () {
        return WARNING_LEVEL;
    }
});
const _necessary = require("necessary");
const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL } = _necessary.levels;
const OCCAM_VERIFY_CLI = "Occam Verify-CLI";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZXhwb3J0IGNvbnN0IHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCB9ID0gbGV2ZWxzO1xuXG5leHBvcnQgY29uc3QgT0NDQU1fVkVSSUZZX0NMSSA9IFwiT2NjYW0gVmVyaWZ5LUNMSVwiO1xuIl0sIm5hbWVzIjpbIkRFQlVHX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJJTkZPX0xFVkVMIiwiT0NDQU1fVkVSSUZZX0NMSSIsIlRSQUNFX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsImxldmVscyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSTRCQTtlQUFBQTs7UUFBd0NDO2VBQUFBOztRQUEzQkM7ZUFBQUE7O1FBRTVCQztlQUFBQTs7UUFGRUM7ZUFBQUE7O1FBQXNDQztlQUFBQTs7OzJCQUY5QjtBQUVoQixNQUFNLEVBQUVELFdBQVcsRUFBRUosV0FBVyxFQUFFRSxVQUFVLEVBQUVHLGFBQWEsRUFBRUosV0FBVyxFQUFFLEdBQUdLLGlCQUFNO0FBRW5GLE1BQU1ILG1CQUFtQiJ9