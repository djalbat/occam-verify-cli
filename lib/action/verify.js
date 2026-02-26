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
        const dependentNames = [], dependency = _occammodel.Dependency.fromName(name), success = await createReleaseContext(dependency, dependentNames, context);
        if (!success) {
            log.warning(`The '${name}' project or package cannot be created.`);
            return;
        }
        const releaseName = name, releaseContext = releaseContextMap[releaseName], released = releaseContext.isReleased();
        if (released) {
            log.warning(`The '${name}' package does not need to be verified.`);
            return;
        }
        initialiseReleaseContext(dependency, context);
        const dependentName = null, dependentReleased = false, releaseVerifies = await verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (!releaseVerifies) {
            log.warning(`The '${name}' project or package cannot be verified.`);
            return;
        }
    } catch (error) {
        log.error(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyB2ZXJpZmljYXRpb25VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcblxuY29uc3QgeyBjcmVhdGVSZWxlYXNlQ29udGV4dCwgdmVyaWZ5UmVsZWFzZUNvbnRleHQsIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCB9ID0gdmVyaWZpY2F0aW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24obmFtZSwgbG9nKSB7XG4gIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAgPSB7fSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBsb2csXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAsXG4gICAgICAgICAgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxuICAgICAgICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoIXJlbGVhc2VWZXJpZmllcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInZlcmlmaWNhdGlvblV0aWxpdGllcyIsIm5hbWUiLCJsb2ciLCJjYWxsYmFjayIsImNvbnRleHQiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsInJlbGVhc2VDb250ZXh0TWFwIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJkZXBlbmRlbmN5IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwic3VjY2VzcyIsIndhcm5pbmciLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBOEJBOzs7UUFWdkI7NEJBRW9CO2dDQUNXOzZCQUVFO2dDQUNLO0FBRTdDLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUVDLG9CQUFvQixFQUFFQyx3QkFBd0IsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFdkYsZUFBZUosYUFBYUssSUFBSSxFQUFFQyxHQUFHO0lBQ2xELE1BQU1DLFdBQVcsT0FBT0MsU0FBU0MsVUFBVUM7SUFDbkMsR0FBRztJQUNMLEdBQ0FDLG9CQUFvQixDQUFDLEdBQ3JCSCxVQUFVO1FBQ1JGO1FBQ0FDO1FBQ0FJO1FBQ0FDLHlCQUFBQSxvQ0FBdUI7UUFDdkJDLDhCQUFBQSw0Q0FBNEI7SUFDOUI7SUFFTixJQUFJO1FBQ0YsTUFBTUMsaUJBQWlCLEVBQUUsRUFDbkJDLGFBQWFDLHNCQUFVLENBQUNDLFFBQVEsQ0FBQ1osT0FDakNhLFVBQVUsTUFBTWpCLHFCQUFxQmMsWUFBWUQsZ0JBQWdCTjtRQUV2RSxJQUFJLENBQUNVLFNBQVM7WUFDWlosSUFBSWEsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFZCxLQUFLLHVDQUF1QyxDQUFDO1lBRWpFO1FBQ0Y7UUFFQSxNQUFNZSxjQUFjZixNQUNkZ0IsaUJBQWlCVixpQkFBaUIsQ0FBQ1MsWUFBWSxFQUMvQ0UsV0FBV0QsZUFBZUUsVUFBVTtRQUUxQyxJQUFJRCxVQUFVO1lBQ1poQixJQUFJYSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUVkLEtBQUssdUNBQXVDLENBQUM7WUFFakU7UUFDRjtRQUVBRix5QkFBeUJZLFlBQVlQO1FBRXJDLE1BQU1nQixnQkFBZ0IsTUFDaEJDLG9CQUFvQixPQUNwQkMsa0JBQWtCLE1BQU14QixxQkFBcUJrQixhQUFhSSxlQUFlQyxtQkFBbUJkO1FBRWxHLElBQUksQ0FBQ2UsaUJBQWlCO1lBQ3BCcEIsSUFBSWEsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFZCxLQUFLLHdDQUF3QyxDQUFDO1lBRWxFO1FBQ0Y7SUFDRixFQUNBLE9BQU9zQixPQUFPO1FBQ1pyQixJQUFJcUIsS0FBSyxDQUFDQTtJQUNaO0FBQ0YifQ==