function getiOSVersion() {
  const userAgent = navigator.userAgent;
  const match = userAgent.match(
    /(iPad|iPhone|iPod)\s+OS\s+(\d+_)?(\d+(\.\d+)?(\.\d+)?)/i
  );
  document.getElementById("detail").textContent = userAgent;
  document.getElementById("detail1").textContent = match || 'Unmatched';
  if (match) {
    // Lấy phiên bản iOS từ user agent
    const version = match[3].replace(/_/g, ".");
    return version;
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
