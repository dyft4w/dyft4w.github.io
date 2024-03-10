function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.onload = async function(){
	await sleep(5000);
	window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
