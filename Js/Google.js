let url = $request.url;

if (url.includes("www.google.cn")) {
    // 302 临时重定向到 www.google.com
    $done({
        status: 302,
        headers: { "Location": url.replace("www.google.cn", "www.google.com") }
    });
} else {
    $done({});
}
