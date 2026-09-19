const listDiv = document.getElementById("provinceList");
const title = document.getElementById("provinceTitle");
const infoBox = document.getElementById("provinceInfo");

window.provinces.forEach((p, index) => {
  const btn = document.createElement("button");
  btn.className = "province-btn";
  btn.textContent = p.name;

  btn.onclick = () => {
    document.querySelectorAll(".province-btn")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    title.textContent = p.name.toUpperCase();

    infoBox.innerHTML = "";
    p.info.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      infoBox.appendChild(li);
    });
  };

  listDiv.appendChild(btn);
});

if (window.provinces.length > 0) {
  listDiv.children[0].click();
}
