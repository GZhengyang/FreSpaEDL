const samples = ["20830", "20837", "21207", "21708"];

function selectSample(sample) {
  if (!samples.includes(sample)) return;

  const input = document.querySelector("#input-image");
  const output = document.querySelector("#output-image");
  input.src = `assets/${sample}.jpg`;
  input.alt = `DIOR-R input image ${sample}`;
  output.src = `assets/${sample}_frespaedl.jpg`;
  output.alt = `FreSpaEDL detection result for DIOR-R image ${sample}`;
  document.querySelector("#input-id").textContent = `${sample}.jpg`;
  document.querySelector("#output-id").textContent = `${sample} result`;

  document.querySelectorAll(".sample-button").forEach((button) => {
    const active = button.dataset.sample === sample;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".sample-button").forEach((button) => {
  button.addEventListener("click", () => selectSample(button.dataset.sample));
});

document.querySelectorAll(".result-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const panelName = tab.dataset.panel;
    document.querySelectorAll(".result-tab").forEach((candidate) => {
      const active = candidate === tab;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".result-panel").forEach((panel) => {
      const active = panel.id === `panel-${panelName}`;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  });
});
