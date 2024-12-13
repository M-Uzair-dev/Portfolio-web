document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("mousemove", (e) => {
    const skillWrapper = skill.parentElement;
    const follower = skillWrapper.querySelector(".follower");

    // Get the position of the skillWrapper element
    const rect = skillWrapper.getBoundingClientRect();

    // Calculate mouse position relative to skillWrapper
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adjust the position of the follower element to match the mouse cursor
    follower.style.position = "absolute";
    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
  });
  skill.addEventListener("mouseleave", (e) => {
    const skillWrapper = skill.parentElement;
    const follower = skillWrapper.querySelector(".follower");
    follower.style.position = "absolute";
    follower.style.left = `50%`;
    follower.style.top = `50%`;
  });
});

const copyEmail = () => {
  navigator.clipboard.writeText("uzairmanandev@gmail.com");
  alert("Email copied to clipboard.");
};
