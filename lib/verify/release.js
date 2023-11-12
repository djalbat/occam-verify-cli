"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
var _files = /*#__PURE__*/ _interop_require_default(require("../verify/files"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(releaseName, releaseContextMap) {
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var verified = releaseContext.isVerified();
            if (verified) {
                releaseVerified = true;
            } else {
                releaseContext.debug("Verifying '".concat(releaseName, "'."));
                var releaseFilesVerified = verifyReleaseFiles(releaseContext);
                if (releaseFilesVerified) {
                    var verified1 = true;
                    releaseContext.setVerified(verified1);
                    releaseVerified = verified1; ///
                }
                if (releaseVerified) {
                    releaseContext.info("Verified  '".concat(releaseName, "'."));
                }
            }
        }
    }
    return releaseVerified;
}
function verifyReleaseFiles(releaseContext) {
    var filesVerified = (0, _files.default)(releaseContext), releaseFilesVerified = filesVerified; ///
    return releaseFilesVerified;
}
function verifyDependencyReleases(releaseContext, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyAnJHtyZWxlYXNlTmFtZX0nLmApO1xuXG4gICAgICAgIGNvbnN0IHJlbGVhc2VGaWxlc1ZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZUZpbGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVsZWFzZUZpbGVzVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgICByZWxlYXNlQ29udGV4dC5zZXRWZXJpZmllZCh2ZXJpZmllZCk7XG5cbiAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgICcke3JlbGVhc2VOYW1lfScuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZXNWZXJpZmllZCA9IHZlcmlmeUZpbGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSBmaWxlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gcmVsZWFzZUZpbGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlVmVyaWZpZWQiLCJyZWxlYXNlQ29udGV4dCIsImRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCIsInZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyIsInZlcmlmaWVkIiwiaXNWZXJpZmllZCIsImRlYnVnIiwicmVsZWFzZUZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlSZWxlYXNlRmlsZXMiLCJzZXRWZXJpZmllZCIsImluZm8iLCJmaWxlc1ZlcmlmaWVkIiwidmVyaWZ5RmlsZXMiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJldmVyeURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwibmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7NERBRkE7Ozs7OztBQUVULFNBQVNBLGNBQWNDLFdBQVcsRUFBRUMsaUJBQWlCO0lBQ2xFLElBQUlDLGtCQUFrQjtJQUV0QixJQUFNQyxpQkFBaUJGLGlCQUFpQixDQUFDRCxZQUFZO0lBRXJELElBQUlHLG1CQUFtQixNQUFNO1FBQzNCLElBQU1DLDhCQUE4QkMseUJBQXlCRixnQkFBZ0JGO1FBRTdFLElBQUlHLDZCQUE2QjtZQUMvQixJQUFNRSxXQUFXSCxlQUFlSSxVQUFVO1lBRTFDLElBQUlELFVBQVU7Z0JBQ1pKLGtCQUFrQjtZQUNwQixPQUFPO2dCQUNMQyxlQUFlSyxLQUFLLENBQUMsQUFBQyxjQUF5QixPQUFaUixhQUFZO2dCQUUvQyxJQUFNUyx1QkFBdUJDLG1CQUFtQlA7Z0JBRWhELElBQUlNLHNCQUFzQjtvQkFDeEIsSUFBTUgsWUFBVztvQkFFakJILGVBQWVRLFdBQVcsQ0FBQ0w7b0JBRTNCSixrQkFBa0JJLFdBQVUsR0FBRztnQkFDakM7Z0JBRUEsSUFBSUosaUJBQWlCO29CQUNuQkMsZUFBZVMsSUFBSSxDQUFDLEFBQUMsY0FBeUIsT0FBWlosYUFBWTtnQkFDaEQ7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUO0FBRUEsU0FBU1EsbUJBQW1CUCxjQUFjO0lBQ3hDLElBQU1VLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDWCxpQkFDNUJNLHVCQUF1QkksZUFBZSxHQUFHO0lBRS9DLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSix5QkFBeUJGLGNBQWMsRUFBRUYsaUJBQWlCO0lBQ2pFLElBQU1jLGVBQWVaLGVBQWVhLGVBQWUsSUFDN0NaLDhCQUE4QlcsYUFBYUUsZUFBZSxDQUFDLFNBQUNDO1FBQzFELElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJwQixjQUFjbUIsTUFDZGpCLGtCQUFrQkgsY0FBY0MsYUFBYUM7UUFFbkQsSUFBSUMsaUJBQWlCO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0U7QUFDVCJ9