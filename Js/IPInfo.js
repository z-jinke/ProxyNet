if ($response.statusCode != 200) {
  $done(null);
}

let body = $response.body;
let obj = JSON.parse(body);

let title = " ";
let subtitle = "IP:" (obj["ip"] || "") + " 国家:" + (obj["country_code"] || "");
let ip = obj["ip"] || "";

$done({ title, subtitle, ip });
