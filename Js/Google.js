let url = $request.url;

if (url.includes("www.google.cn")) {
    let newUrl = url.replace("www.google.cn", "www.google.com");
    $done({
        response: {
            status: 302,
            headers: {
                "Location": newUrl
            }
        }
    });
} else {
    $done({});
}
