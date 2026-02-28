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
require("../preamble");
const _occammodel = require("occam-model");
const _occamlanguages = require("occam-languages");
const _fileContext = require("../utilities/fileContext");
const _releaseContext = require("../utilities/releaseContext");
const { createReleaseContext, verifyReleaseContext, initialiseReleaseContext } = _occamlanguages.verificationUtilities;
async function verifyAction(name, log) {
    const callback = async (context, filePath, lineIndex)=>{
    ///
    }, releaseContextMap = {}, context = {
        log,
        callback,
        releaseContextMap,
        FileContextFromFilePath: _fileContext.FileContextFromFilePath,
        releaseContextFromDependency: _releaseContext.releaseContextFromDependency
    };
    try {
        const dependentNames = [], dependency = _occammodel.Dependency.fromName(name), releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);
        if (!releaseContextCreated) {
            log.warning(`The '${name}' project or package cannot be created.`);
            return;
        }
        const releaseName = name, releaseContext = releaseContextMap[releaseName], released = releaseContext.isReleased();
        if (released) {
            log.warning(`The '${name}' package does not need to be verified.`);
            return;
        }
        initialiseReleaseContext(dependency, context);
        const dependentName = null, dependentReleased = false, releaseContextVerifies = await verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (!releaseContextVerifies) {
            log.warning(`The '${name}' project or package cannot be verified.`);
            return;
        }
    } catch (error) {
        log.error(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyB2ZXJpZmljYXRpb25VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcblxuY29uc3QgeyBjcmVhdGVSZWxlYXNlQ29udGV4dCwgdmVyaWZ5UmVsZWFzZUNvbnRleHQsIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCB9ID0gdmVyaWZpY2F0aW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24obmFtZSwgbG9nKSB7XG4gIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAgPSB7fSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBsb2csXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAsXG4gICAgICAgICAgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxuICAgICAgICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgIHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwYWNrYWdlIGRvZXMgbm90IG5lZWQgdG8gYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0VmVyaWZpZXMgPSBhd2FpdCB2ZXJpZnlSZWxlYXNlQ29udGV4dChyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInZlcmlmaWNhdGlvblV0aWxpdGllcyIsIm5hbWUiLCJsb2ciLCJjYWxsYmFjayIsImNvbnRleHQiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsInJlbGVhc2VDb250ZXh0TWFwIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJkZXBlbmRlbmN5IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwid2FybmluZyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBOEJBOzs7UUFWdkI7NEJBRW9CO2dDQUNXOzZCQUVFO2dDQUNLO0FBRTdDLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUVDLG9CQUFvQixFQUFFQyx3QkFBd0IsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFdkYsZUFBZUosYUFBYUssSUFBSSxFQUFFQyxHQUFHO0lBQ2xELE1BQU1DLFdBQVcsT0FBT0MsU0FBU0MsVUFBVUM7SUFDbkMsR0FBRztJQUNMLEdBQ0FDLG9CQUFvQixDQUFDLEdBQ3JCSCxVQUFVO1FBQ1JGO1FBQ0FDO1FBQ0FJO1FBQ0FDLHlCQUFBQSxvQ0FBdUI7UUFDdkJDLDhCQUFBQSw0Q0FBNEI7SUFDOUI7SUFFTixJQUFJO1FBQ0YsTUFBTUMsaUJBQWlCLEVBQUUsRUFDbkJDLGFBQWFDLHNCQUFVLENBQUNDLFFBQVEsQ0FBQ1osT0FDakNhLHdCQUF3QixNQUFNakIscUJBQXFCYyxZQUFZRCxnQkFBZ0JOO1FBRXJGLElBQUksQ0FBQ1UsdUJBQXVCO1lBQzFCWixJQUFJYSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUVkLEtBQUssdUNBQXVDLENBQUM7WUFFakU7UUFDRjtRQUVBLE1BQU1lLGNBQWNmLE1BQ2RnQixpQkFBaUJWLGlCQUFpQixDQUFDUyxZQUFZLEVBQy9DRSxXQUFXRCxlQUFlRSxVQUFVO1FBRTFDLElBQUlELFVBQVU7WUFDWmhCLElBQUlhLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRWQsS0FBSyx1Q0FBdUMsQ0FBQztZQUVqRTtRQUNGO1FBRUFGLHlCQUF5QlksWUFBWVA7UUFFckMsTUFBTWdCLGdCQUFnQixNQUNoQkMsb0JBQW9CLE9BQ3BCQyx5QkFBeUIsTUFBTXhCLHFCQUFxQmtCLGFBQWFJLGVBQWVDLG1CQUFtQmQ7UUFFekcsSUFBSSxDQUFDZSx3QkFBd0I7WUFDM0JwQixJQUFJYSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUVkLEtBQUssd0NBQXdDLENBQUM7WUFFbEU7UUFDRjtJQUNGLEVBQ0EsT0FBT3NCLE9BQU87UUFDWnJCLElBQUlxQixLQUFLLENBQUNBO0lBQ1o7QUFDRiJ9