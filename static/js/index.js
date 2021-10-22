window.onload = function () {
  const notFound = /page not found/i.test(window.document.head.querySelector('title').innerText);
  if (notFound) return window.location.replace('/api');
}

