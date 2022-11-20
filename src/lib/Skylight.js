const skylight = (str) => {
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
    searchReplace('"', 'quote', 'q');
    searchReplace('**', 'bold', 'b');
    searchReplace('*', 'italic', 'i');
    str = str.trim();
    return str;
  };