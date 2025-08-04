if ($response.statusCode != 200) {
  $done(null);
}

var body = $response.body;
var obj = JSON.parse(body);

var title = " ";
var subtitle = (obj["ip"] || "") + " 国家:" + (obj["country_code"] || "");
var ip = obj["ip"] || "";

$done({ title, subtitle, ip });

