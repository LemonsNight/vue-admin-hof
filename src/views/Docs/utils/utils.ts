export function getImgSrc(text: string): string[] {
  const regex =
    /<img\s+src=(?:"|')(.+?)(?:"|')\s+data-title=(?:"|').+?(?:"|')/gi;
  const srcList = [];
  let match;
  while ((match = regex.exec(text))) {
    const src = match[1];
    srcList.push(src);
  }
  return srcList;
}

export function removeImgTags(text: string): string {
  const regex = /<img[^>]*>/gi;
  return text.replace(regex, "");
}
