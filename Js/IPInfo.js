if ($response.statusCode != 200) {
  $done(null);
}

var body = $response.body;
var obj = JSON.parse(body);

// 国家代码与国家名称的映射表
const countryMap = {
  "TW": "台湾",
  "MO": "澳门",
  "HK": "香港",
  "US": "美国",
  "JP": "日本",
  "SG": "新加坡",
  "DE": "德国",
  "FR": "法国",
  "GB": "英国",
  "CA": "加拿大",
  "AU": "澳大利亚",
  "KH": "柬埔寨",
  "VN": "越南",
  "TH": "泰国",
  "IN": "印度"
};

var ip = obj["ip"] || "未知";
var countryCode = obj["country"] || "未知";
var countryName = countryMap[countryCode] || "未知"; 

var title = " ";
var subtitle = `IP-${ip} 地区:${countryName}`;

$done({ title, subtitle, ip });
