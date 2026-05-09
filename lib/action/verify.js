"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAction;
    }
});
const _occammodel = require("occam-model");
const _necessary = require("necessary");
const _occamlanguages = require("occam-languages");
const _fileContext = require("../utilities/fileContext");
const _releaseContext = require("../utilities/releaseContext");
const { last } = _necessary.arrayUtilities, { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = _occamlanguages.verificationUtilities;
async function verifyAction(name, log) {
    const callback = async (context, breakPoint)=>{
    ///
    }, releaseContexts = [], dependency = _occammodel.Dependency.fromName(name), projectsDirectoryPath = process.cwd(), context = {
        log,
        callback,
        releaseContexts,
        projectsDirectoryPath,
        FileContextFromFilePath: _fileContext.FileContextFromFilePath,
        releaseContextFromDependency: _releaseContext.releaseContextFromDependency
    };
    try {
        const releaseContextCreated = await createReleaseContexts(dependency, context);
        if (!releaseContextCreated) {
            log.warning(`The '${name}' project or package cannot be created.`);
            return;
        }
        const lastReleaseContext = last(releaseContexts), releaseContext = lastReleaseContext, released = releaseContext.isReleased();
        if (released) {
            log.warning(`The '${name}' package does not need to be verified.`);
            return;
        }
        initialiseReleaseContexts(context);
        const releaseContextsVerify = await verifyReleaseContexts(context);
        if (!releaseContextsVerify) {
            log.warning(`The '${name}' project or package cannot be verified.`);
            return;
        }
    } catch (error) {
        log.error(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHZlcmlmaWNhdGlvblV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZWxlYXNlQ29udGV4dFwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVSZWxlYXNlQ29udGV4dHMsIHZlcmlmeVJlbGVhc2VDb250ZXh0cywgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyB9ID0gdmVyaWZpY2F0aW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24obmFtZSwgbG9nKSB7XG4gIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGJyZWFrUG9pbnQpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSBwcm9jZXNzLmN3ZCgpLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGxvZyxcbiAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dHMsXG4gICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoLFxuICAgICAgICAgIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lcbiAgICAgICAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gYXdhaXQgY3JlYXRlUmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3RSZWxlYXNlQ29udGV4dCA9IGxhc3QocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IGxhc3RSZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwYWNrYWdlIGRvZXMgbm90IG5lZWQgdG8gYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRzKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRzVmVyaWZ5ID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHRzKGNvbnRleHQpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLmVycm9yKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeUFjdGlvbiIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImNyZWF0ZVJlbGVhc2VDb250ZXh0cyIsInZlcmlmeVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dHMiLCJ2ZXJpZmljYXRpb25VdGlsaXRpZXMiLCJuYW1lIiwibG9nIiwiY2FsbGJhY2siLCJjb250ZXh0IiwiYnJlYWtQb2ludCIsInJlbGVhc2VDb250ZXh0cyIsImRlcGVuZGVuY3kiLCJEZXBlbmRlbmN5IiwiZnJvbU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwid2FybmluZyIsImxhc3RSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwicmVsZWFzZUNvbnRleHRzVmVyaWZ5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBOEJBOzs7NEJBVkg7MkJBQ0k7Z0NBQ087NkJBRUU7Z0NBQ0s7QUFFN0MsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MseUJBQWMsRUFDekIsRUFBRUMscUJBQXFCLEVBQUVDLHFCQUFxQixFQUFFQyx5QkFBeUIsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFMUYsZUFBZU4sYUFBYU8sSUFBSSxFQUFFQyxHQUFHO0lBQ2xELE1BQU1DLFdBQVcsT0FBT0MsU0FBU0M7SUFDekIsR0FBRztJQUNMLEdBQ0FDLGtCQUFrQixFQUFFLEVBQ3BCQyxhQUFhQyxzQkFBVSxDQUFDQyxRQUFRLENBQUNSLE9BQ2pDUyx3QkFBd0JDLFFBQVFDLEdBQUcsSUFDbkNSLFVBQVU7UUFDUkY7UUFDQUM7UUFDQUc7UUFDQUk7UUFDQUcseUJBQUFBLG9DQUF1QjtRQUN2QkMsOEJBQUFBLDRDQUE0QjtJQUM5QjtJQUVOLElBQUk7UUFDRixNQUFNQyx3QkFBd0IsTUFBTWxCLHNCQUFzQlUsWUFBWUg7UUFFdEUsSUFBSSxDQUFDVyx1QkFBdUI7WUFDMUJiLElBQUljLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRWYsS0FBSyx1Q0FBdUMsQ0FBQztZQUVqRTtRQUNGO1FBRUEsTUFBTWdCLHFCQUFxQnRCLEtBQUtXLGtCQUMxQlksaUJBQWlCRCxvQkFDakJFLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNaakIsSUFBSWMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFZixLQUFLLHVDQUF1QyxDQUFDO1lBRWpFO1FBQ0Y7UUFFQUYsMEJBQTBCSztRQUUxQixNQUFNaUIsd0JBQXdCLE1BQU12QixzQkFBc0JNO1FBRTFELElBQUksQ0FBQ2lCLHVCQUF1QjtZQUMxQm5CLElBQUljLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRWYsS0FBSyx3Q0FBd0MsQ0FBQztZQUVsRTtRQUNGO0lBQ0YsRUFDQSxPQUFPcUIsT0FBTztRQUNacEIsSUFBSW9CLEtBQUssQ0FBQ0E7SUFDWjtBQUNGIn0=