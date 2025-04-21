addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
	const url = new URL(request.url);
  
	// Gyökér URL vagy könyvtár esetén index.html
	if (url.pathname === '/' || url.pathname.endsWith('/')) {
	  url.pathname = url.pathname === '/' ? '/index.html' : `${url.pathname}index.html`;
	  return Response.redirect(url.toString(), 301);
	}
  
	// Ellenőrizzük, hogy a kért fájl létezik-e
	const response = await fetch(request);
	if (response.status === 404) {
	  // Ha nem létezik, az SPA miatt az index.html-t szolgáljuk ki
	  url.pathname = '/index.html';
	  return fetch(url.toString());
	}
  
	return response;
  }