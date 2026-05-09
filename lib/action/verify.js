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
const _necessary = require("necessary");
const _occamlanguages = require("occam-languages");
const _fileContext = require("../utilities/fileContext");
const { last } = _necessary.arrayUtilities, { releaseContextFromDependency } = _occamlanguages.releaseContextUtilities, { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = _occamlanguages.verificationUtilities;
async function verifyAction(name, log) {
    const callback = async (context, breakPoint)=>{
    ///
    }, dependencyName = name, releaseContexts = [], projectsDirectoryPath = process.cwd(), context = {
        log,
        callback,
        releaseContexts,
        projectsDirectoryPath,
        FileContextFromFilePath: _fileContext.FileContextFromFilePath,
        releaseContextFromDependency
    };
    try {
        const releaseContextCreated = await createReleaseContexts(dependencyName, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHZlcmlmaWNhdGlvblV0aWxpdGllcywgcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlQ29udGV4dFwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSByZWxlYXNlQ29udGV4dFV0aWxpdGllcyxcbiAgICAgIHsgY3JlYXRlUmVsZWFzZUNvbnRleHRzLCB2ZXJpZnlSZWxlYXNlQ29udGV4dHMsIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dHMgfSA9IHZlcmlmaWNhdGlvblV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QWN0aW9uKG5hbWUsIGxvZykge1xuICBjb25zdCBjYWxsYmFjayA9IGFzeW5jIChjb250ZXh0LCBicmVha1BvaW50KSA9PiB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBsb2csXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzLFxuICAgICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCxcbiAgICAgICAgICBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG4gICAgICAgIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5TmFtZSwgY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSBjcmVhdGVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdFJlbGVhc2VDb250ZXh0ID0gbGFzdChyZWxlYXNlQ29udGV4dHMpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbGFzdFJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dHMoY29udGV4dCk7XG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dHNWZXJpZnkgPSBhd2FpdCB2ZXJpZnlSZWxlYXNlQ29udGV4dHMoY29udGV4dCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0c1ZlcmlmeSkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIiwiY3JlYXRlUmVsZWFzZUNvbnRleHRzIiwidmVyaWZ5UmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyIsInZlcmlmaWNhdGlvblV0aWxpdGllcyIsIm5hbWUiLCJsb2ciLCJjYWxsYmFjayIsImNvbnRleHQiLCJicmVha1BvaW50IiwiZGVwZW5kZW5jeU5hbWUiLCJyZWxlYXNlQ29udGV4dHMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJ3YXJuaW5nIiwibGFzdFJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJyZWxlYXNlQ29udGV4dHNWZXJpZnkiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUE4QkE7OzsyQkFUQztnQ0FDZ0M7NkJBRXZCO0FBRXhDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLHlCQUFjLEVBQ3pCLEVBQUVDLDRCQUE0QixFQUFFLEdBQUdDLHVDQUF1QixFQUMxRCxFQUFFQyxxQkFBcUIsRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QixFQUFFLEdBQUdDLHFDQUFxQjtBQUUxRixlQUFlUixhQUFhUyxJQUFJLEVBQUVDLEdBQUc7SUFDbEQsTUFBTUMsV0FBVyxPQUFPQyxTQUFTQztJQUN6QixHQUFHO0lBQ0wsR0FDQUMsaUJBQWlCTCxNQUNqQk0sa0JBQWtCLEVBQUUsRUFDcEJDLHdCQUF3QkMsUUFBUUMsR0FBRyxJQUNuQ04sVUFBVTtRQUNSRjtRQUNBQztRQUNBSTtRQUNBQztRQUNBRyx5QkFBQUEsb0NBQXVCO1FBQ3ZCaEI7SUFDRjtJQUVOLElBQUk7UUFDRixNQUFNaUIsd0JBQXdCLE1BQU1mLHNCQUFzQlMsZ0JBQWdCRjtRQUUxRSxJQUFJLENBQUNRLHVCQUF1QjtZQUMxQlYsSUFBSVcsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFWixLQUFLLHVDQUF1QyxDQUFDO1lBRWpFO1FBQ0Y7UUFFQSxNQUFNYSxxQkFBcUJyQixLQUFLYyxrQkFDMUJRLGlCQUFpQkQsb0JBQ2pCRSxXQUFXRCxlQUFlRSxVQUFVO1FBRTFDLElBQUlELFVBQVU7WUFDWmQsSUFBSVcsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFWixLQUFLLHVDQUF1QyxDQUFDO1lBRWpFO1FBQ0Y7UUFFQUYsMEJBQTBCSztRQUUxQixNQUFNYyx3QkFBd0IsTUFBTXBCLHNCQUFzQk07UUFFMUQsSUFBSSxDQUFDYyx1QkFBdUI7WUFDMUJoQixJQUFJVyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUVaLEtBQUssd0NBQXdDLENBQUM7WUFFbEU7UUFDRjtJQUNGLEVBQ0EsT0FBT2tCLE9BQU87UUFDWmpCLElBQUlpQixLQUFLLENBQUNBO0lBQ1o7QUFDRiJ9