function getiOSVersion() {
  const userAgent = navigator.userAgent;
  const match = userAgent.match(/(iPad|iPhone|iPod).*? OS (\d+)_(\d+)_?(\d+)?/);
  document.getElementById("detail").textContent = userAgent;
  document.getElementById("detail1").textContent = match;

  if (match && match.length > 2) {
    // Lấy phiên bản iOS từ kết quả trùng khớp
    const majorVersion = parseInt(match[2], 10);
    const minorVersion = parseInt(match[3], 10);
    const patchVersion = match[4] ? parseInt(match[4], 10) : 0;
    return [majorVersion, minorVersion, patchVersion];
  }
  return null; // Trả về null nếu không phải iOS
}

const iOSVersion = getiOSVersion();
if (iOSVersion) {
  document.getElementById(
    "title"
  ).textContent = `Phiên bản iOS: ${iOSVersion.join(".")}`;
} else {
  document.getElementById("title").textContent = "Không phải iOS";
}
