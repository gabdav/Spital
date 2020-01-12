export const remakeString = theString => {
  const titluCap = theString.replace(/([A-Z])/g, " $1").trim();
  return titluCap.charAt(0).toUpperCase() + titluCap.slice(1);
};
