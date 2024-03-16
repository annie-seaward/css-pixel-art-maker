export function cssGenerator(pixelArray: string[][]): string {
  let pixelSize = 20;

  const boxShadowArray: string[] = [];
  pixelArray.forEach((row, i) =>
    row.forEach((pixelColor: string, j: number) => {
      if (pixelColor !== null) {
        boxShadowArray.push(
          `${pixelSize * j}px ${pixelSize * i}px ${pixelColor}`
        );
      }
    })
  );

  return `height: ${pixelSize}px; width: ${pixelSize}px; box-shadow: ${boxShadowArray.join(
    ", "
  )};`;
}
