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
const _releaseContext = require("../utilities/releaseContext");
const { last } = _necessary.arrayUtilities, { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = _occamlanguages.verificationUtilities;
async function verifyAction(name, log) {
    const callback = async (context, breakPoint)=>{
    ///
    }, dependencyName = name, releaseContexts = [], projectsDirectoryPath = process.cwd(), context = {
        log,
        callback,
        releaseContexts,
        projectsDirectoryPath,
        FileContextFromFilePath: _fileContext.FileContextFromFilePath,
        releaseContextFromDependency: _releaseContext.releaseContextFromDependency
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHZlcmlmaWNhdGlvblV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZWxlYXNlQ29udGV4dFwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVSZWxlYXNlQ29udGV4dHMsIHZlcmlmeVJlbGVhc2VDb250ZXh0cywgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyB9ID0gdmVyaWZpY2F0aW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24obmFtZSwgbG9nKSB7XG4gIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGJyZWFrUG9pbnQpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSBwcm9jZXNzLmN3ZCgpLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGxvZyxcbiAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dHMsXG4gICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoLFxuICAgICAgICAgIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lcbiAgICAgICAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gYXdhaXQgY3JlYXRlUmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3lOYW1lLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0UmVsZWFzZUNvbnRleHQgPSBsYXN0KHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBsYXN0UmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgICByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcGFja2FnZSBkb2VzIG5vdCBuZWVkIHRvIGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0cyhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeVJlbGVhc2VDb250ZXh0cyhjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGxvZy5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjcmVhdGVSZWxlYXNlQ29udGV4dHMiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHRzIiwidmVyaWZpY2F0aW9uVXRpbGl0aWVzIiwibmFtZSIsImxvZyIsImNhbGxiYWNrIiwiY29udGV4dCIsImJyZWFrUG9pbnQiLCJkZXBlbmRlbmN5TmFtZSIsInJlbGVhc2VDb250ZXh0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInByb2Nlc3MiLCJjd2QiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJ3YXJuaW5nIiwibGFzdFJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJyZWxlYXNlQ29udGV4dHNWZXJpZnkiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUE4QkE7OzsyQkFUQztnQ0FDTzs2QkFFRTtnQ0FDSztBQUU3QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyx5QkFBYyxFQUN6QixFQUFFQyxxQkFBcUIsRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QixFQUFFLEdBQUdDLHFDQUFxQjtBQUUxRixlQUFlTixhQUFhTyxJQUFJLEVBQUVDLEdBQUc7SUFDbEQsTUFBTUMsV0FBVyxPQUFPQyxTQUFTQztJQUN6QixHQUFHO0lBQ0wsR0FDQUMsaUJBQWlCTCxNQUNqQk0sa0JBQWtCLEVBQUUsRUFDcEJDLHdCQUF3QkMsUUFBUUMsR0FBRyxJQUNuQ04sVUFBVTtRQUNSRjtRQUNBQztRQUNBSTtRQUNBQztRQUNBRyx5QkFBQUEsb0NBQXVCO1FBQ3ZCQyw4QkFBQUEsNENBQTRCO0lBQzlCO0lBRU4sSUFBSTtRQUNGLE1BQU1DLHdCQUF3QixNQUFNaEIsc0JBQXNCUyxnQkFBZ0JGO1FBRTFFLElBQUksQ0FBQ1MsdUJBQXVCO1lBQzFCWCxJQUFJWSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUViLEtBQUssdUNBQXVDLENBQUM7WUFFakU7UUFDRjtRQUVBLE1BQU1jLHFCQUFxQnBCLEtBQUtZLGtCQUMxQlMsaUJBQWlCRCxvQkFDakJFLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNaZixJQUFJWSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUViLEtBQUssdUNBQXVDLENBQUM7WUFFakU7UUFDRjtRQUVBRiwwQkFBMEJLO1FBRTFCLE1BQU1lLHdCQUF3QixNQUFNckIsc0JBQXNCTTtRQUUxRCxJQUFJLENBQUNlLHVCQUF1QjtZQUMxQmpCLElBQUlZLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRWIsS0FBSyx3Q0FBd0MsQ0FBQztZQUVsRTtRQUNGO0lBQ0YsRUFDQSxPQUFPbUIsT0FBTztRQUNabEIsSUFBSWtCLEtBQUssQ0FBQ0E7SUFDWjtBQUNGIn0=