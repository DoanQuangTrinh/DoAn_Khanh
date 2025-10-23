const fs = require("fs");
const path = require("path");

// Thư mục cần quét (ví dụ: components + pages)
const TARGET_DIRS = ["./components", "./pages"];

// Hàm quét thư mục
function walk(dir) {
  if (!fs.existsSync(dir)) return []; // Nếu thư mục không tồn tại → trả về mảng rỗng
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
      results.push(file);
    }
  });
  return results;
}

// Hàm replace " trong JSX text
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Regex: thay dấu " trong nội dung JSX (không phải trong attribute)
  // Mình sẽ tìm " nằm giữa > ... < (text node)
  const regex = />([^<]*?)"/g;

  let fixedContent = content.replace(regex, (match, p1) => {
    return `>${p1}&quot;`;
  });

  // Ngoài ra, replace mở đầu text node với "
  const regexStart = />\s*"/g;
  fixedContent = fixedContent.replace(regexStart, ">&quot;");

  if (fixedContent !== content) {
    fs.writeFileSync(filePath, fixedContent, "utf-8");
    console.log("Fixed:", filePath);
  }
}

// Thực thi
TARGET_DIRS.forEach((dir) => {
  const files = walk(dir);
  files.forEach(fixFile);
});

console.log("Done!");
