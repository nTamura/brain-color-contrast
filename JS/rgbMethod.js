const getRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
     r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
     r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
     g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
     b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
  } : null;
}
