const listDiv = document.getElementById("provinceList");
const title = document.getElementById("provinceTitle");
const infoBox = document.getElementById("provinceInfo");

// render danh sách tỉnh
window.provinces.forEach((p, index) => {
  const btn = document.createElement("button");
  btn.className = "province-btn";
  btn.textContent = p.name;

  btn.onclick = () => {
    // bỏ active cũ
    document.querySelectorAll(".province-btn")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // cập nhật tiêu đề
    title.textContent = p.name.toUpperCase();

    // cập nhật nội dung (gạch đầu dòng)
    infoBox.innerHTML = "";
    p.info.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      infoBox.appendChild(li);
    });
  };

  listDiv.appendChild(btn);
});

// tự động chọn tỉnh đầu tiên khi load
if (window.provinces.length > 0) {
  listDiv.children[0].click();
}
