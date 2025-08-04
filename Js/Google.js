let url = $request.url;

if (url.includes("www.google.cn")) {
    $done({
        response: {
            status: 302,
            headers: { "Location": url.replace("www.google.cn", "www.google.com") }
        }
    });
}

$done({});
