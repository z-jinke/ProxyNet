let url = $request.url;
let body = $response.body;

if (/^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(url)) {
  let obj = JSON.parse(body);
  obj.data.list.forEach(item => {
    item.duration = 0;
    item.begin_time = 1893427200;
    item.end_time = 1893427200;
  });
  body = JSON.stringify(obj);
} else if (/^https:\/\/app\.bilibili\.com\/x\/v2\/search/.test(url)) {
  let obj = JSON.parse(body);
  obj.data = obj.data.filter(item => item.type !== "recommend");
  body = JSON.stringify(obj);
} else if (/^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index/.test(url)) {
  let obj = JSON.parse(body);
  obj.data.items = obj.data.items.filter(item => item.goto === "av" && item.card_goto === "av");
  body = JSON.stringify(obj);
} else if (/^https:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(url)) {
  let obj = JSON.parse(body);
  const { tab, bottom, top } = obj.data;
  obj.data.tab = tab.filter(t => [40, 41, 3502, 3503].includes(t.id));
  obj.data.bottom = bottom.filter(b => [177, 179, 181].includes(b.id));
  obj.data.top = top.filter(t => t.id === 3510);
  obj.data.top_more = [];
  body = JSON.stringify(obj);
} else if (/^https:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\?/.test(url)) {
  let obj = JSON.parse(body);
  obj.result.modules = obj.result.modules.filter(m => ![1455, 1611, 292].includes(m.module_id));
  body = JSON.stringify(obj);
} else if (/^https:\/\/api\.bilibili\.com\/pgc\/page\/channel\?/.test(url)) {
  let obj = JSON.parse(body);
  obj.data.modules = obj.data.modules.filter(m => ![1968, 1891, 1892, 1893, 1896, 2012, 1962, 1963].includes(m.id));
  body = JSON.stringify(obj);
} else if (/^https:\/\/app\.bilibili\.com\/x\/v2\/account\/mine\?/.test(url)) {
  let obj = JSON.parse(body);
  delete obj.data.modular_vip_section;
  obj.data.show_creative = 0;
  obj.data.sections_v2 = obj.data.sections_v2.map(section => {
    if (section.button) delete section.button;
    if (section.title === "推荐服务") {
      delete section.title;
      section.items = section.items.filter(item => [396, 397, 3072, 2830].includes(item.id));
    } else if (section.title === "更多服务") {
      delete section.title;
      section.items = section.items.filter(item => [407, 410].includes(item.id)).map(item => {
        if (item.id === 407) item.title = "客服中心";
        else if (item.id === 410) item.title = "个人设置";
        return item;
      });
    }
    return section;
  }).filter(section => section.items.length > 0);
  body = JSON.stringify(obj);
} else if (/^https:\/\/app\.bilibili\.com\/x\/v2\/account\/mine\/ipad\?/.test(url)) {
  let obj = JSON.parse(body);
  obj.data.ipad_recommend_sections = obj.data.ipad_recommend_sections.filter(s => ![758, 759, 760, 792, 793, 2542, 794].includes(s.id));
  obj.data.ipad_more_sections = obj.data.ipad_more_sections.filter(s => ![1070, 965].includes(s.id));
  delete obj.data.ipad_upper_sections;
  body = JSON.stringify(obj);
}

$done({ body });
