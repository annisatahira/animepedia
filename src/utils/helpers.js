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
