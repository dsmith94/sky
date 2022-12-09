
/**
 * Skylight string processor. Allows the author to use a markdown-like syntax for text display strings.
 * It is unlikely you'll need to call this yourself.
 * @param {string} str String to operate on.
 * @param {boolean} [skipParagraphTags=false] Do not add paragraph tags to final html markup. This is (almost) never necessary.
 * @returns {string} Completed processed string.
 */
const skylight = (str, skipParagraphTags=false) => {
  const markup = (str) => {
    const start = {
      quote: true,
      bold: true,
      italic: true,
    };


    const searchReplace = (search, flag, tag) => {
      while (str.indexOf(search) > -1) {
        if (start[flag]) {
          str = str.replace(search, `<${tag}>`);
        } else {
          str = str.replace(search, `</${tag}>`);
        }
        start[flag] = !start[flag];
      }
    };

    const headerReplace = (search, tag) =>
      (str = str
        .split("\n")
        .map((s) =>
          s.trimStart().indexOf(search) === 0
            ? `<${tag}>${s.replace(search, "")}</${tag}>`
            : s
        )
        .join("\n"));

    headerReplace("#### ", "h4");
    headerReplace("### ", "h3");
    headerReplace("## ", "h2");
    headerReplace("# ", "h1");
    searchReplace('"', "quote", "q");
    searchReplace("**", "bold", "b");
    searchReplace("*", "italic", "i");
    str = str.trim();
    return str;
  };
  const tags = (!skipParagraphTags) ? 'p' : 'div'; 
  return str
    .split("\n")
    .map((f) => f.trim())
    .join("\n")
    .split("\n\n")
    .filter((f) => f !== "")
    .map((s) => `<${tags}>${markup(s)}</${tags}>`)
    .join("");
};