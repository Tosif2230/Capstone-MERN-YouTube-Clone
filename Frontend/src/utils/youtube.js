export const getEmbedUrl = (url) => {
  if (!url) return "";

  // youtu.be format
  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }

  // youtube.com/watch?v= format
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
};