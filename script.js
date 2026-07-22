const results = {

"YNY":{
title:"ゲルマンの森型",
catch:"「副文の奥に、新しい自分がいる。」",
desc:[
"論理的に物事を考えるのが得意。",
"仕組みを理解すると一気に伸びるタイプです。"
],
langs:[
"ドイツ語",
"オランダ語",
"スウェーデン語",
"ノルウェー語",
"デンマーク語",
"アイスランド語"
]
},

"YYY":{
title:"言語オタク型",
catch:"「誰も行かない道を行く。」",
desc:[
"好奇心のかたまり。",
"『なぜこんな文法になるの？』が最高のご褒美。"
],
langs:[
"フィンランド語",
"ハンガリー語",
"ジョージア語",
"バスク語",
"エストニア語"
]
},

"YYN":{
title:"スラヴの大平原型",
catch:"「難しいからこそ、面白い。」",
desc:[
"挑戦を楽しめる人。",
"少し険しい道ほど燃えるタイプです。"
],
langs:[
"ロシア語",
"ポーランド語",
"チェコ語",
"セルビア語",
"クロアチア語"
]
},

"YNN":{
title:"文化遺産ハンター型",
catch:"「言葉は文明のタイムカプセルだ。」",
desc:[
"歴史や文化の背景に魅力を感じます。",
"語学は知的冒険。"
],
langs:[
"ヘブライ語",
"アイルランド語",
"ウェールズ語",
"チベット語",
"アルメニア語"
]
},

"NNY":{
title:"ロマンスの旅人型",
catch:"「人生は少し遠回りしたほうが美しい。」",
desc:[
"響きや美しさに敏感。",
"語学を通して人生を豊かにする人です。"
],
langs:[
"フランス語",
"イタリア語",
"スペイン語",
"ポルトガル語",
"ルーマニア語"
]
},

"NYY":{
title:"シルクロード冒険型",
catch:"「地図の余白へ。」",
desc:[
"未知の文化や土地への憧れが強いタイプ。",
"旅そのものが人生の目的です。"
],
langs:[
"トルコ語",
"ペルシア語",
"モンゴル語",
"カザフ語",
"ウズベク語"
]
},

"NYN":{
title:"アジア探究型",
catch:"「近くて遠い隣人たち。」",
desc:[
"人との交流や現地体験が好き。",
"食文化や日常文化から言語に入るタイプです。"
],
langs:[
"韓国語",
"ベトナム語",
"タイ語",
"インドネシア語",
"ヒンディー語"
]
},

"NNN":{
title:"世界市民型",
catch:"「世界への搭乗券。」",
desc:[
"実用性重視。",
"まずは世界とつながることを大切にします。"
],
langs:[
"英語",
"スペイン語",
"フランス語",
"中国語",
"アラビア語"
]
}

};

document.getElementById("diagnose").addEventListener("click",()=>{

const q1=document.querySelector('input[name="q1"]:checked');
const q2=document.querySelector('input[name="q2"]:checked');
const q3=document.querySelector('input[name="q3"]:checked');

if(!q1||!q2||!q3){
alert("すべて回答してください。");
return;
}

const key=q1.value+q2.value+q3.value;

const r=results[key];

let html=`
<h2>${r.title}</h2>
<h3>${r.catch}</h3>
`;

r.desc.forEach(d=>{
html+=`<p>${d}</p>`;
});

html+=`<h3>おすすめ言語</h3><ul>`;

r.langs.forEach(l=>{
html+=`<li>${l}</li>`;
});

html+="</ul>";

const result=document.getElementById("result");

result.innerHTML=html;
result.style.display="block";

result.scrollIntoView({
behavior:"smooth"
});

});
