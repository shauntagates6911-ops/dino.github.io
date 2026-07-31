document.getElementById("centerBtn").onclick = () => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw centered
  ctx.putImageData(
    imgData,
    (canvas.width - imgData.width) / 2,
    (canvas.height - imgData.height) / 2
  );
};
