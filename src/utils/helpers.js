export const goToTopPage = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

export const convertToSlug = (sentence) => {
  return sentence
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const haveSpecialChar = (sentence) => {
  const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return format.test(sentence);
};

export const breakPointMediaQuery = () => {
  const breakpoints = [500, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return mq;
};
