// src/utils/scrollUtils.js
export const scrollToElement = (id, headerHeight = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = element.offsetTop - headerHeight;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};