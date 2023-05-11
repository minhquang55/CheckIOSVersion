function getiOSVersion() {
  const userAgent = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Kiểm tra xem thiết bị đang chạy iOS
    const match = userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
    if (match) {
      // Lấy các phiên bản số từ userAgent
      const version = [
        parseInt(match[1], 10),
        parseInt(match[2], 10),
        parseInt(match[3] || 0, 10),
      ];
      return version;
    }
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
