import{j as n,l as w,n as h,R as we,m as Se,c as ve,a as Ie,b$ as qe,b_ as Me,W as ye,aA as Fe,aJ as ke,c4 as Be,A as Ee,aQ as Ce,bt as Le,aK as je,aL as Ue,aM as He,aN as Ge,bc as Ke,aO as $e,aP as Ve,c5 as Ye,c6 as ze,c7 as Je,d as Xe,s as Ze,bG as Qe,E as et}from"./iframe-DwmVy7SQ.js";import{P as x,A as Te,f as tt}from"./meta-CT6GdK4g.js";import{C as at}from"./sendDispatchModes-BJ8PBEam.js";import{g as st,h as nt,i as ot,j as rt}from"./AIView-Cw4ZT1Fh.js";import{T as it}from"./TerminalRouterContext-3wrzl_rm.js";import{a as m,c as R}from"./messages-ajL82_FT.js";import{c as ct}from"./orpc-sAt07-6s.js";import{c as _e}from"./workspaces-DVCSHIwS.js";import{b as lt,e as dt}from"./storyPlayHelpers-_VqAI56j.js";import{s as g,e as pt,c as ut,a as mt}from"./chatSetup-D_GSrzyc.js";import{t as wt}from"./contrast-Bnc7IxMq.js";import{s as ht}from"./reviews-BCBhcOn2.js";import{R as Ae}from"./RightSidebar-BQa1W4kD.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./ConfirmationModal-C1groiNk.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./shell-NsnPoeBt.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./slashCommandHints-BSKyjYjN.js";import"./timelineReveal-HqQYIr77.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";const{expect:o,userEvent:u,waitFor:d,within:l}=__STORYBOOK_MODULE_TEST__,ca={title:"Features/RightSidebar/RightSidebar",component:Ae,decorators:[e=>n.jsx("div",{style:{width:1600,height:"100dvh"},children:n.jsx(e,{})})],parameters:{layout:"fullscreen",backgrounds:{default:"dark",values:[{name:"dark",value:"#1e1e1e"},{name:"light",value:"#f5f6f8"}]},pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}}},Ne="/home/user/projects/my-app";function gt(e){return`/home/user/.mux/src/my-app/${e}`}function bt(){typeof localStorage>"u"||localStorage.removeItem(Ce)}function yt(){if(typeof window>"u")return null;const e=new URLSearchParams(window.location.search),t=e.get("id")??e.get("path"),a=window.innerWidth<=768?"narrow":"wide";return t?`${t}:${a}`:a}function b(e){const t=ye.useRef(null),a=ye.useRef(null),s=yt();(a.current===null||t.current!==s)&&(bt(),t.current=s,a.current=null),a.current??=e.setup();const i=Fe(),c=a.current;ye.useEffect(()=>(i.setClient(c),ke().setClient(c),Be().setClient(c),()=>{i.setClient(null),ke().setClient(null),Be().setClient(null)}),[c,i]);const S=Ee(Ce,null)?.workspaceId??"ws-story";return n.jsx(Le,{children:n.jsx(je,{client:a.current,children:n.jsx(Ue,{children:n.jsx(He,{children:n.jsx(Ge,{children:n.jsx(it,{children:n.jsx(Ke,{delayDuration:200,children:n.jsx($e,{children:n.jsx(tt,{children:n.jsx(Ve,{children:n.jsx(st,{children:n.jsx(nt,{children:n.jsx(Ye,{children:n.jsx(ot,{children:n.jsx(at,{children:n.jsx(ze,{workspaceId:S,projectPath:Ne,children:n.jsx(rt,{workspaceId:S,children:n.jsx(Je,{workspaceId:S,children:e.children})})})})})})})})})})})})})})})})},s??"right-sidebar-story")})}function f(e,t,a=t[0]){const s={version:1,openTabsOnly:!0,nextId:2,focusedTabsetId:"tabset-1",root:{type:"tabset",id:"tabset-1",tabs:t,activeTab:a}};localStorage.setItem(Se(e),JSON.stringify(s))}async function Re(e){await d(()=>{const t=e.querySelector('[role="tab"][aria-selected="true"]'),a=t?.closest("[data-tab-scroll-row]");if(t==null||a==null)throw new Error("selected tab not rendered");const s=t.getBoundingClientRect(),r=a.getBoundingClientRect();if(s.left<r.left-1||s.right>r.right+1)throw new Error(`selected tab ${Math.round(s.left)}-${Math.round(s.right)} is outside its strip ${Math.round(r.left)}-${Math.round(r.right)}`)})}async function Pe(e,t){await d(()=>{const a=e.querySelector('[role="tabpanel"]');if(!t.test(a?.textContent??""))throw new Error(`diff text ${t.source} not rendered`)},{timeout:1e4})}function y(e){const t=Xe.c(6);let a;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=Ee(w,400),t[0]=a):a=t[0];const s=a,r=e.workspaceId;let i;t[1]!==e.workspaceId?(i=gt(e.workspaceId),t[1]=e.workspaceId,t[2]=i):i=t[2];let c;return t[3]!==e.workspaceId||t[4]!==i?(c=n.jsx(Ae,{workspaceId:r,workspacePath:i,projectPath:Ne,width:s}),t[3]=e.workspaceId,t[4]=i,t[5]=c):c=t[5],c}function _(e){const t=e*.6,a=e*.2,s=e*.1,r=e*.1;return{byModel:{"claude-sonnet-4-20250514":{input:{tokens:1e4,cost_usd:t},cached:{tokens:5e3,cost_usd:s},cacheCreate:{tokens:0,cost_usd:0},output:{tokens:2e3,cost_usd:a},reasoning:{tokens:1e3,cost_usd:r},model:"claude-sonnet-4-20250514"}},version:1}}const A={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem("statsContainer:subTab",JSON.stringify("cost")),localStorage.setItem(w,"400"),f("ws-costs",["costs","review"],"costs");const e=g({workspaceId:"ws-costs",workspaceName:"feature/api",projectName:"my-app",messages:[m("msg-1","Help me build an API",{historySequence:1}),R("msg-2","I'll help you build a REST API.",{historySequence:2})],sessionUsage:_(.56)});return h("ws-costs"),e},children:n.jsx(y,{workspaceId:"ws-costs"})}),play:async({canvasElement:e})=>{const t=l(e);await d(()=>{t.getByRole("tab",{name:/stats.*\$0\.56/i})})}},N={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem("statsContainer:subTab",JSON.stringify("cost")),localStorage.setItem(w,"350");const e={input:{tokens:2e3,cost_usd:.006},cached:{tokens:45e3,cost_usd:.0045},cacheCreate:{tokens:3e4,cost_usd:.1125},output:{tokens:3e3,cost_usd:.045},reasoning:{tokens:0,cost_usd:0},model:"anthropic:claude-sonnet-4-20250514"};f("ws-cache-create",["costs","review"],"costs");const t=g({workspaceId:"ws-cache-create",workspaceName:"feature/caching",projectName:"my-app",messages:[m("msg-1","Refactor the auth module",{historySequence:1}),R("msg-2","I'll refactor the authentication module.",{historySequence:2})],sessionUsage:{byModel:{[e.model]:e},lastRequest:{model:e.model,usage:e,timestamp:0},version:1}});return h("ws-cache-create"),t},children:n.jsx(y,{workspaceId:"ws-cache-create"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^stats/i},{timeout:1e4});await u.click(a),await d(()=>{t.getByText(/cache create/i),t.getByText(/cache read/i)},{timeout:15e3})}},P={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem("statsContainer:subTab",JSON.stringify("cost")),localStorage.setItem(w,"400"),f("ws-multi-model",["costs","review"],"costs");const e=g({workspaceId:"ws-multi-model",workspaceName:"feature/multi-model",projectName:"my-app",messages:[m("msg-1","Plan and implement the parser",{historySequence:1}),R("msg-2","Done: plan reviewed and parser implemented.",{historySequence:2})],sessionUsage:{byModel:{"anthropic:claude-opus-4-6":{input:{tokens:12e3,cost_usd:.18},cached:{tokens:24e4,cost_usd:.36},cacheCreate:{tokens:8e4,cost_usd:1.5},output:{tokens:9e3,cost_usd:.675},reasoning:{tokens:4e3,cost_usd:.3},model:"anthropic:claude-opus-4-6"},"openai:gpt-5.2":{input:{tokens:3e4,cost_usd:.0525},cached:{tokens:5e4,cost_usd:.021875},cacheCreate:{tokens:0,cost_usd:0},output:{tokens:6e3,cost_usd:.084},reasoning:{tokens:8e3,cost_usd:.112},model:"openai:gpt-5.2"}},version:1}});return h("ws-multi-model"),e},children:n.jsx(y,{workspaceId:"ws-multi-model"})}),play:async({canvasElement:e})=>{const t=l(e);await d(()=>{const a=t.getByTestId("cost-by-model");l(a).getByText("Opus 4.6"),l(a).getByText("GPT-5.2")})}},O={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700"),f("ws-review",["costs","review"],"costs");const e=g({workspaceId:"ws-review",workspaceName:"feature/review",projectName:"my-app",messages:[m("msg-1","Add a new component",{historySequence:1}),R("msg-2","I've added the component.",{historySequence:2})],sessionUsage:_(.42)});return h("ws-review"),e},children:n.jsx(y,{workspaceId:"ws-review"})}),play:async({canvasElement:e})=>{const t=l(e);await d(()=>{t.getByRole("tab",{name:/stats.*\$0\.42/i})});const a=await t.findByRole("tab",{name:/^review/i});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^review/i,selected:!0})})}},D={render:()=>n.jsx(b,{setup:()=>{f("ws-stats-idle",["costs","review"],"costs"),localStorage.setItem(w,"400"),localStorage.setItem("statsContainer:subTab",JSON.stringify("timing"));const e=g({workspaceId:"ws-stats-idle",workspaceName:"feature/stats",projectName:"my-app",statsTabEnabled:!0,messages:[m("msg-1","Help me with something",{historySequence:1}),R("msg-2","Sure, I can help with that.",{historySequence:2})],sessionUsage:_(.25)});return h("ws-stats-idle"),e},children:n.jsx(y,{workspaceId:"ws-stats-idle"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^stats/i});await u.click(a),await d(()=>{t.getByText(/no timing data yet/i)})}},W={render:()=>n.jsx(b,{setup:()=>{f("ws-stats-streaming",["costs","review"],"costs"),localStorage.setItem(w,"400"),localStorage.setItem("statsContainer:subTab",JSON.stringify("timing"));const e=pt({workspaceId:"ws-stats-streaming",workspaceName:"feature/streaming",projectName:"my-app",statsTabEnabled:!0,messages:[m("msg-1","Write a comprehensive test suite",{historySequence:1})],streamingMessageId:"msg-2",historySequence:2,streamText:"I'll create a test suite for you. Let me start by analyzing..."});return h("ws-stats-streaming"),e},children:n.jsx(y,{workspaceId:"ws-stats-streaming"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^stats/i});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^stats/i,selected:!0})}),await d(()=>{t.getByTestId("timing-section")}),await d(()=>{t.getByText(/model time/i)})}},he=`diff --git a/src/utils/format.ts b/src/utils/format.ts
new file mode 100644
index 0000000..abc1234
--- /dev/null
+++ b/src/utils/format.ts
@@ -0,0 +1,12 @@
+export function formatDate(date: Date): string {
+  return date.toISOString();
+}
+
+export function formatCurrency(amount: number): string {
+  return \`$\${amount.toFixed(2)}\`;
+}
+
+export function formatPercentage(value: number): string {
+  return \`\${(value * 100).toFixed(1)}%\`;
+}
+
diff --git a/src/components/Button.tsx b/src/components/Button.tsx
index def5678..ghi9012 100644
--- a/src/components/Button.tsx
+++ b/src/components/Button.tsx
@@ -1,8 +1,15 @@
 import React from 'react';
 
-export const Button = ({ children }) => {
+interface ButtonProps {
+  children: React.ReactNode;
+  variant?: 'primary' | 'secondary';
+  onClick?: () => void;
+}
+
+export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
   return (
-    <button className="btn">
+    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
       {children}
     </button>
   );
diff --git a/src/api/client.ts b/src/api/client.ts
index 111aaa..222bbb 100644
--- a/src/api/client.ts
+++ b/src/api/client.ts
@@ -5,6 +5,10 @@ const BASE_URL = '/api';
 export async function fetchData(endpoint: string) {
   const response = await fetch(\`\${BASE_URL}/\${endpoint}\`);
+  if (!response.ok) {
+    throw new Error(\`HTTP error: \${response.status}\`);
+  }
   return response.json();
 }
`,ge=`12	0	src/utils/format.ts
10	3	src/components/Button.tsx
4	0	src/api/client.ts`,fe={format:"hunk-1a2b3c4d",button:"hunk-5e6f7g8h",client:"hunk-9i0j1k2l"},q={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700");const e="ws-review-sort";f(e,["costs","review"],"review");const t=Date.now();ht(e,{[fe.format]:t-7200*1e3,[fe.button]:t-1800*1e3,[fe.client]:t-300*1e3});const a=g({workspaceId:e,workspaceName:"feature/sorting",userPreferences:{review:{sortOrder:"last-edit"}},projectName:"my-app",messages:[m("msg-1","Add utilities and refactor button",{historySequence:1}),R("msg-2","Done! Added format utilities and improved Button.",{historySequence:2})],gitDiff:{diffOutput:he,numstatOutput:ge}});return h("ws-review-sort"),a},children:n.jsx(y,{workspaceId:"ws-review-sort"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^review/i},{timeout:1e4});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^review/i,selected:!0})},{timeout:1e4});const s=await t.findByRole("combobox",{name:/sort hunks by/i});await o(s).toHaveValue("last-edit"),await d(()=>{t.getAllByText(/format\.ts/i),t.getAllByText(/Button\.tsx/i),t.getAllByText(/client\.ts/i)}),await d(async()=>{const r=t.getAllByText(/ago|just now/i);await o(r.length).toBeGreaterThan(0)})}},M={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700");const e="ws-review-file-order";f(e,["costs","review"],"review");const t=g({workspaceId:e,workspaceName:"feature/file-order",userPreferences:{review:{sortOrder:"file-order"}},projectName:"my-app",messages:[m("msg-1","Make some changes",{historySequence:1}),R("msg-2","Changes made.",{historySequence:2})],gitDiff:{diffOutput:he,numstatOutput:ge}});return h("ws-review-file-order"),t},children:n.jsx(y,{workspaceId:"ws-review-file-order"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^review/i},{timeout:1e4});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^review/i,selected:!0})},{timeout:1e4});const s=await t.findByRole("combobox",{name:/sort hunks by/i});await o(s).toHaveValue("file-order"),await d(()=>{t.getAllByText(/format\.ts/i)}),await u.selectOptions(s,"last-edit"),await o(s).toHaveValue("last-edit")}},ft=`diff --git a/src/test.ts b/src/test.ts
new file mode 100644
index 0000000..1234567
--- /dev/null
+++ b/src/test.ts
@@ -0,0 +1,8 @@
+// This file tests diff padding alignment
+export function add(a: number, b: number): number {
+  return a + b;
+}
+
+export function subtract(a: number, b: number): number {
+  return a - b;
+}
`,St="8	0	src/test.ts",F={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700"),f("ws-diff-alignment",["costs","review"],"review");const e=g({workspaceId:"ws-diff-alignment",workspaceName:"feature/alignment-test",projectName:"my-app",messages:[m("msg-1","Add math utilities",{historySequence:1}),R("msg-2","Added the utilities.",{historySequence:2})],gitDiff:{diffOutput:ft,numstatOutput:St}});return h("ws-diff-alignment"),e},children:n.jsx(y,{workspaceId:"ws-diff-alignment"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^review/i},{timeout:1e4});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^review/i,selected:!0})},{timeout:1e4}),await Pe(e,/add\(a: number/i)}},vt=`diff --git a/src/config.ts b/src/config.ts
index aaa1111..bbb2222 100644
--- a/src/config.ts
+++ b/src/config.ts
@@ -1,7 +1,9 @@
 export const config = {
-  timeout: 1000,
-  retries: 3,
+  timeout: 5000,
+  retries: 5,
+  maxConnections: 10,
   debug: false,
+  verbose: true,
 };
`,Tt="4	2	src/config.ts",L={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700"),f("ws-diff-modification",["costs","review"],"review");const e=g({workspaceId:"ws-diff-modification",workspaceName:"feature/config-update",projectName:"my-app",messages:[m("msg-1","Update config values",{historySequence:1}),R("msg-2","Updated config.",{historySequence:2})],gitDiff:{diffOutput:vt,numstatOutput:Tt}});return h("ws-diff-modification"),e},children:n.jsx(y,{workspaceId:"ws-diff-modification"})}),play:async({canvasElement:e})=>{const a=await l(e).findByRole("tab",{name:/^review/i},{timeout:1e4});await u.click(a),await Pe(e,/export const config/i)}},Rt=["// Button component with variants","// Created for the design system","//","// Supports: primary, secondary variants","// Accessible by default","","import React from 'react';","","interface ButtonProps {","  children: React.ReactNode;","  variant?: 'primary' | 'secondary';","  onClick?: () => void;","}","","export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {","  return (","    <button className={`btn btn-${variant}`} onClick={onClick}>","      {children}","    </button>","  );","};","","// Default export for convenience","export default Button;"],kt=`diff --git a/src/components/Button.tsx b/src/components/Button.tsx
index def5678..ghi9012 100644
--- a/src/components/Button.tsx
+++ b/src/components/Button.tsx
@@ -7,8 +7,15 @@ import React from 'react';
 
-export const Button = ({ children }) => {
+interface ButtonProps {
+  children: React.ReactNode;
+  variant?: 'primary' | 'secondary';
+  onClick?: () => void;
+}
+
+export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
   return (
-    <button className="btn">
+    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
       {children}
     </button>
   );
`,Bt="10	3	src/components/Button.tsx",j={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700");const e="ws-read-more";f(e,["costs","review"],"review");const t=g({workspaceId:e,workspaceName:"feature/button-types",projectName:"my-app",messages:[m("msg-1","Add TypeScript types to Button",{historySequence:1}),R("msg-2","Done! Added ButtonProps interface.",{historySequence:2})],gitDiff:{diffOutput:kt,numstatOutput:Bt,fileContents:new Map([["src/components/Button.tsx",Rt]])}});return h("ws-read-more"),t},children:n.jsx(y,{workspaceId:"ws-read-more"})})},xt=["// Tiny utility","export const add = (a: number, b: number) => a + b;","export const sub = (a: number, b: number) => a - b;"],It=`diff --git a/src/utils/math.ts b/src/utils/math.ts
index aaa1111..bbb2222 100644
--- a/src/utils/math.ts
+++ b/src/utils/math.ts
@@ -1,2 +1,3 @@
 // Tiny utility
 export const add = (a: number, b: number) => a + b;
+export const sub = (a: number, b: number) => a - b;
`,Et="1	0	src/utils/math.ts",U={render:()=>n.jsx(b,{setup:()=>{f("ws-review-file-filter",["costs","review"],"review"),localStorage.setItem(w,"700");const e="ws-review-file-filter";localStorage.setItem(`review-file-filter:${e}`,JSON.stringify("src/components/Button.tsx"));const t=g({workspaceId:e,workspaceName:"feature/file-filter",projectName:"my-app",messages:[m("msg-1","Refactor button component",{historySequence:1}),R("msg-2","Updated Button.tsx with proper types.",{historySequence:2})],gitDiff:{diffOutput:he,numstatOutput:ge}});return h("ws-review-file-filter"),t},children:n.jsx(y,{workspaceId:"ws-review-file-filter"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^review/i},{timeout:1e4});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^review/i,selected:!0})},{timeout:1e4}),await d(()=>{t.getByText("Files")});const s=await t.findByRole("button",{name:/^Button\.tsx\s*✕$/});await o(s).toBeInTheDocument(),await o(s).toHaveTextContent("Button.tsx");const r=await t.findByTestId("review-file-tree");let c=(await l(r).findByText("Button.tsx")).parentElement;for(;c&&getComputedStyle(c).backgroundColor==="rgba(0, 0, 0, 0)";)c=c.parentElement;if(!c||!r.contains(c))throw new Error("No selected-row tint found");const p=c,S=()=>[...p.querySelectorAll("*")].filter(E=>!E.closest("[aria-hidden='true']")&&E.childElementCount===0),T=()=>t.getAllByText(/^[-−]\d+$|^M$/);await o(wt(()=>[s,...new Set([...S(),...T()])]).join(`
`)).toBe("")}},le={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700");const e="ws-read-more-boundaries";f(e,["costs","review"],"review");const t=g({workspaceId:e,workspaceName:"feature/math-utils",projectName:"my-app",messages:[m("msg-1","Add subtraction utility",{historySequence:1}),R("msg-2","Added sub function.",{historySequence:2})],gitDiff:{diffOutput:It,numstatOutput:Et,fileContents:new Map([["src/utils/math.ts",xt]])}});return h("ws-read-more-boundaries"),t},children:n.jsx(y,{workspaceId:"ws-read-more-boundaries"})})},H={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"700");const e="ws-untracked";f(e,["costs","review"],"review");const t=g({workspaceId:e,workspaceName:"feature/new-feature",projectName:"my-app",messages:[m("msg-1","Add new utilities",{historySequence:1}),R("msg-2","Added new files and utilities.",{historySequence:2})],gitDiff:{diffOutput:he,numstatOutput:ge,untrackedFiles:["src/utils/newHelper.ts","src/components/NewComponent.tsx","tests/newHelper.test.ts"]}});return h("ws-untracked"),t},children:n.jsx(y,{workspaceId:"ws-untracked"})}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("tab",{name:/^review/i},{timeout:1e4});await u.click(a),await d(()=>{t.getByRole("tab",{name:/^review/i,selected:!0})},{timeout:1e4}),await d(()=>{t.getByText(/3 untracked files/i)});const s=t.getByText(/untracked files/i);await u.click(s),await d(()=>{t.getByText("src/utils/newHelper.ts"),t.getByText("Track All Files")}),await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))),lt()}},G={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem("statsContainer:subTab",JSON.stringify("cost")),localStorage.setItem(w,"400"),f("ws-compact-warning",["costs","review"],"costs");const e=g({workspaceId:"ws-compact-warning",workspaceName:"feature/compaction",projectName:"my-app",agentAiDefaults:{compact:{modelString:"openai:gpt-4o"}},userPreferences:{ai:{autoCompactionThresholdByModel:{"anthropic:claude-opus-4-1":80}}},messages:[m("msg-1","Help me refactor this large codebase",{historySequence:1}),R("msg-2","I'll help you refactor the codebase.",{historySequence:2,model:"anthropic:claude-opus-4-1",contextUsage:{inputTokens:15e4,outputTokens:2e3}})],sessionUsage:{byModel:{"anthropic:claude-opus-4-1":{input:{tokens:15e4,cost_usd:2.25},cached:{tokens:0,cost_usd:0},cacheCreate:{tokens:0,cost_usd:0},output:{tokens:2e3,cost_usd:.15},reasoning:{tokens:0,cost_usd:0},model:"anthropic:claude-opus-4-1"}},version:1}});return h("ws-compact-warning"),e},children:n.jsx(y,{workspaceId:"ws-compact-warning"})}),play:async({canvasElement:e})=>{const t=l(e);await d(()=>{t.getByText(/compaction model context/i)})},parameters:{docs:{description:{story:"Shows the compaction model context warning when the configured compaction model (gpt-4o, 128k) has a smaller context window than the auto-compact threshold (80% of 200k = 160k tokens)."}}}};function Oe(){const e=Date.now();return[{timestamp:e-5*6e4,level:"info",message:"Server bootstrap complete on http://localhost:3000",location:"src/node/server.ts:42"},{timestamp:e-4*6e4,level:"debug",message:"Loaded 18 routes from API manifest",location:"src/node/router.ts:88"},{timestamp:e-3*6e4,level:"warn",message:"Deprecated endpoint /v1/users called by legacy client",location:"src/node/api/users.ts:133"},{timestamp:e-2*6e4,level:"info",message:"Redis cache warmup finished with 243 keys",location:"src/node/cache/warmup.ts:57"},{timestamp:e-9e4,level:"error",message:"Database connection timeout after 5000ms",location:"src/node/db/pool.ts:219"},{timestamp:e-6e4,level:"debug",message:"Cache hit for user profile query",location:"src/node/cache/queryCache.ts:74"},{timestamp:e-45e3,level:"warn",message:"Retrying webhook delivery (attempt 2/3)",location:"src/node/webhooks/sender.ts:161"},{timestamp:e-3e4,level:"error",message:"Failed to parse JSON payload from upstream service",location:"src/node/integrations/partnerClient.ts:204"},{timestamp:e-15e3,level:"info",message:"Background cleanup job completed successfully",location:"src/node/jobs/cleanup.ts:96"}]}const K={parameters:{pixel:x},render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"400"),f("ws-output-empty",["costs","review","output"],"output");const e=g({workspaceId:"ws-output-empty",workspaceName:"feature/logging",projectName:"my-app",messages:[m("msg-1","Hello",{historySequence:1})],logEntries:[]});return h("ws-output-empty"),e},children:n.jsx(y,{workspaceId:"ws-output-empty"})}),play:async({canvasElement:e})=>{const t=await l(e).findByRole("tabpanel",{name:/^output/i});await o(await l(t).findByRole("button",{name:"Delete output logs"})).toBeVisible(),await o(t.querySelector(".overflow-y-auto")).toBeEmptyDOMElement()}},$={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"400"),f("ws-output-logs",["costs","review","output"],"output");const e=g({workspaceId:"ws-output-logs",workspaceName:"feature/logging",projectName:"my-app",messages:[m("msg-1","Show logs",{historySequence:1})],logEntries:Oe()});return h("ws-output-logs"),e},children:n.jsx(y,{workspaceId:"ws-output-logs"})})},V={render:()=>n.jsx(b,{setup:()=>{localStorage.setItem(w,"400"),f("ws-output-errors",["costs","review","output"],"output");const e=g({workspaceId:"ws-output-errors",workspaceName:"feature/logging",userPreferences:{ui:{outputTabLevel:"error"}},projectName:"my-app",messages:[m("msg-1","Check errors",{historySequence:1})],logEntries:Oe()});return h("ws-output-errors"),e},children:n.jsx(y,{workspaceId:"ws-output-errors"})})},Y={parameters:{pixel:x},render:()=>n.jsx(b,{setup:()=>{localStorage.removeItem(we),localStorage.setItem(w,"400"),localStorage.removeItem(Se("ws-new-tab"));const e=g({workspaceId:"ws-new-tab",workspaceName:"feature/new-tab",projectName:"my-app",messages:[m("msg-1","Hello",{historySequence:1})]});return e.workflows.listScripts=()=>Promise.resolve([]),h("ws-new-tab"),e},children:n.jsx(y,{workspaceId:"ws-new-tab"})}),play:async({canvasElement:e})=>{const t=l(e);await t.findByRole("tab",{name:/^new tab/i,selected:!0}),await t.findByRole("button",{name:"Review"}),await o(t.getAllByRole("tab")).toHaveLength(1);const a=e.querySelector('[role="tabpanel"][id$="-panel-new"]'),s=l(a).getAllByRole("button").map(i=>i.getAttribute("aria-label")).filter(i=>i!=="Terminal"&&i!=="Side chat");for(const i of s)(await t.findByRole("button",{name:i})).focus(),await u.keyboard("{Enter}"),await d(()=>{const p=t.getByRole("tab",{selected:!0}),S=document.getElementById(p.getAttribute("aria-controls"));return o(document.activeElement===p||S?.contains(document.activeElement)).toBe(!0)}),await dt(e);const r=()=>e.querySelector('[role="tabpanel"][id$="-panel-new"]')?.contains(document.activeElement)===!0;await d(()=>o(r()).toBe(!0)),await new Promise(i=>setTimeout(i,50)),await o(r()).toBe(!0)}},z={parameters:{viewport:{options:{pixelDesktop:{name:"Pixel desktop",styles:{width:"1900px",height:"1080px"},type:"desktop"}}}},globals:{viewport:{value:"pixelDesktop",isRotated:!1}},render:()=>n.jsx(b,{setup:()=>{localStorage.removeItem(we),localStorage.setItem(w,"705");const e={version:1,openTabsOnly:!0,nextId:4,focusedTabsetId:"launcher",root:{type:"split",id:"launcher-output",direction:"vertical",sizes:[300/7,400/7],children:[{type:"tabset",id:"launcher",tabs:["costs","review","instructions","goal","workflows","new"],activeTab:"new"},{type:"tabset",id:"output",tabs:["costs","review","output"],activeTab:"output"}]}};localStorage.setItem(Se("ws-new-tab-narrow"),JSON.stringify(e));const t=g({workspaceId:"ws-new-tab-narrow",workspaceName:"feature/new-tab",projectName:"my-app",messages:[m("msg-1","Hello",{historySequence:1})],sessionUsage:_(.12),logEntries:[]});return h("ws-new-tab-narrow"),t},children:n.jsx(y,{workspaceId:"ws-new-tab-narrow"})}),play:async({canvasElement:e})=>{const t=l(e),s=(await t.findByRole("tab",{name:/^new tab/i,selected:!0})).closest("[data-tabset-id]"),r=l(s).getByRole("button",{name:"Side chat"});await o(r).toBeVisible(),await o(s.getBoundingClientRect().width).toBeGreaterThanOrEqual(295),await o(s.getBoundingClientRect().width).toBeLessThanOrEqual(305),await l(s).findByRole("tab",{name:/stats.*\$0\.12/i}),await Re(s);const i=await t.findByRole("tabpanel",{name:/^output/i});await o(i).toBeVisible(),await o(await l(i).findByRole("button",{name:"Delete output logs"})).toBeVisible(),await o(i.querySelector(".overflow-y-auto")).toBeEmptyDOMElement();const c=i.getBoundingClientRect();await o(c.left).toBeGreaterThanOrEqual(s.getBoundingClientRect().right),await o(c.right).toBeLessThanOrEqual(window.innerWidth),await o(r.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight)}},J={parameters:{pixel:x},render:()=>n.jsx(b,{setup:()=>{localStorage.removeItem(we),localStorage.setItem(w,"320"),f("ws-many-tabs",["costs","review","instructions","goal","workflows","timeline","output"],"timeline");const e=g({workspaceId:"ws-many-tabs",workspaceName:"feature/many-tabs",projectName:"my-app",messages:[m("msg-1","Hello",{historySequence:1})],sessionUsage:_(.34)});return h("ws-many-tabs"),e},children:n.jsx(y,{workspaceId:"ws-many-tabs"})}),play:async({canvasElement:e})=>{const t=l(e);await t.findByRole("tab",{name:/^timeline/i,selected:!0}),await t.findByRole("button",{name:"All tabs"}),await t.findByRole("tab",{name:/stats.*\$0\.34/i}),await Re(e)}};function ue(e){const t=e.getBoundingClientRect(),a=document.elementFromPoint(t.left+t.width/2,t.top+t.height/2);return a!=null&&e.contains(a)}function De(e,t){const a=`ws-inset-${e}`;return{parameters:{pixel:x},render:()=>n.jsx("div",{className:"contents",style:{"--titlebar-right-inset":`${e}px`},children:n.jsx(b,{setup:()=>{localStorage.removeItem(we),localStorage.setItem(w,String(t)),f(a,["costs","review"],"costs");const s=g({workspaceId:a,workspaceName:"feature/wide-inset",projectName:"my-app",messages:[m("msg-1","Hello",{historySequence:1})],sessionUsage:_(.34)});return h(a),s},children:n.jsx(y,{workspaceId:a})})}),play:async({canvasElement:s})=>{const r=l(s),i=await r.findByRole("tab",{name:/stats.*\$0\.34/i,selected:!0}),c=await r.findByRole("tab",{name:/^review/i});await Re(s),await d(()=>{if(!ue(i))throw new Error("selected tab is not under the pointer");for(const p of["New tab","All tabs"])if(!ue(r.getByRole("button",{name:p})))throw new Error(`${p} is not under the pointer`)}),c.scrollIntoView({block:"nearest",inline:"nearest"}),await d(()=>{if(!ue(c))throw new Error("unselected tab is not under the pointer")}),await u.click(c),await r.findByRole("tab",{name:/^review/i,selected:!0})}}}const X=De(2e3,400),Z=De(138,300),We="ws-overview";function xe(e,t,a){return{..._e({id:e,name:e,projectName:"my-app",title:t,createdAt:a}),sideChatParentWorkspaceId:We}}const I={globals:{viewport:{value:"desktop",isRotated:!1}},render:()=>n.jsx(Te,{setup:()=>{const e=g({workspaceId:We,workspaceName:"feature/settlement-reconciler",messages:[m("msg-1","Why did the reconciler withdraw the hedge?",{historySequence:1}),R("msg-2","The order filled for about 49 seconds, then the reconciler reduced it from 25 to 12 contracts and withdrew the rest. That was a per-order action, not a portfolio-wide revision cancellation.",{historySequence:2})],gitStatus:{ahead:3,dirty:2,outgoingAdditions:29692,outgoingDeletions:6248},sessionUsage:{byModel:{"claude-opus-4-5":{input:{tokens:82e4,cost_usd:4.1},cached:{tokens:24e5,cost_usd:1.2},cacheCreate:{tokens:9e4,cost_usd:.56},output:{tokens:64e3,cost_usd:1.6},reasoning:{tokens:21e3,cost_usd:.53},model:"claude-opus-4-5"}},version:1},additionalWorkspaces:[xe("side-bq","Give me the BQ migration","2026-01-01T10:00:00.000Z"),xe("side-hedger","How real-time is the hedger?","2026-01-01T11:00:00.000Z")]});return ve(),Ie(),e}}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("complementary",{name:"Workspace insights"},{timeout:15e3}),s=await d(()=>{const p=a.querySelector(".right-sidebar-overview-card");if(!p)throw new Error("Overview card not mounted yet");return p}),r=await l(s).findByRole("region",{name:"Side chats"});await l(r).findByText("How real-time is the hedger?"),await d(()=>o(l(s).getByRole("button",{name:/Changes/})).toHaveTextContent("+29,692")),await l(s).findByRole("button",{name:/\$7\.99/}),await o(t.getByRole("button",{name:"Expand right sidebar"})).toBeVisible();const i=e.querySelector("[data-workspace-shell]");await o(i).not.toBeNull(),await d(async()=>{const p=i.getBoundingClientRect();await o(s.getBoundingClientRect().height).toBeLessThan(p.height/2),await o(t.getByRole("main").getBoundingClientRect().right).toBe(p.right)});const c=t.getByRole("log",{name:"Conversation transcript"});await d(async()=>{const p=c.getBoundingClientRect(),S=p.left-t.getByRole("main").getBoundingClientRect().left,T=s.getBoundingClientRect().left-p.right;await o(T).toBeGreaterThan(0),await o(Math.abs(S-T)).toBeLessThanOrEqual(1)})}},C={...I,decorators:[e=>n.jsx("div",{style:{width:1e3,height:"100%"},children:n.jsx(e,{})})],parameters:{pixel:{matrix:{themes:["dark"],viewports:["desktop"]}}},play:async({canvasElement:e})=>{const t=l(e);await t.findByRole("button",{name:"Expand right sidebar"},{timeout:15e3});const a=await d(()=>{const r=e.querySelector(".right-sidebar-overview-card");if(!r)throw new Error("Overview card not mounted yet");return r},{timeout:15e3});await o(getComputedStyle(a).visibility).toBe("hidden");const s=e.querySelector('[aria-label="Workspace insights"]');await o(s).not.toBeNull(),await o(getComputedStyle(s).display).not.toBe("none"),await o(t.queryByRole("complementary",{name:"Workspace insights"})).toBeNull()}},Q={...C,parameters:{pixel:x},play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("button",{name:"Expand right sidebar"},{timeout:15e3});a.focus(),await u.keyboard("{Enter}");const s=await t.findByRole("complementary",{name:"Workspace insights"});await d(()=>{if(s.querySelector('[role="tablist"]')==null||s.getAnimations().length>0)throw new Error("The sidebar is still sliding open")}),await u.keyboard("{Enter}"),await o(a).toHaveAccessibleName("Expand right sidebar"),await u.tab(),await o(s.querySelector('[role="tablist"]')).not.toBeNull(),await o(s.contains(document.activeElement)).toBe(!1)}};function Ct(){const e=(r,i)=>{const c=`/home/user/.mux/scratch/${r}`;return{..._e({id:r,name:`scratch-${r}`,projectName:"Scratch",projectPath:c,title:i,runtimeConfig:{type:"local"}}),kind:"scratch",namedWorkspacePath:c}},t=e("scratch-parent","Scratch"),a={...e("scratch-side-chat","Side question"),sideChatParentWorkspaceId:t.id},s=[t,a];return Ze(a),ve(),Ie(),ct({projects:new Map([[Qe,{projectKind:"system",trusted:!0,workspaces:s.map(r=>({kind:"scratch",path:r.namedWorkspacePath,id:r.id,name:r.name,runtimeConfig:{type:"local"}}))}]]),workspaces:s,onChat:ut(new Map([[a.id,mt([m("msg-1","What does the hedger do?",{historySequence:1}),R("msg-2","It offsets the open position.",{historySequence:2})])]]))})}const ee={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:x},render:()=>n.jsx(Te,{setup:Ct}),play:async({canvasElement:e})=>{const t=l(e);await t.findByRole("button",{name:"Expand right sidebar"},{timeout:15e3});const a=await d(()=>{const s=e.querySelector(".right-sidebar-overview-card");if(!s)throw new Error("Overview card not mounted yet");return s},{timeout:15e3});await o(getComputedStyle(a).display).toBe("none"),await o(me(be(e))).toBe(15),await o(t.queryByRole("complementary",{name:"Workspace insights"})).toBeNull()}};function be(e){return e.querySelector(".chat-reserved-inline-end-scrollport")}function me(e){return parseFloat(getComputedStyle(e).paddingRight)}const te={...I,decorators:[e=>n.jsx("div",{"data-testid":"shell-frame",style:{width:1600,height:"100%"},children:n.jsx(e,{})})],parameters:{pixel:x},play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("complementary",{name:"Workspace insights"},{timeout:15e3});await d(()=>o(a.querySelector(".right-sidebar-overview-card")).not.toBeNull());const s=be(e);await d(()=>o(me(s)).toBeGreaterThan(100)),t.getByTestId("shell-frame").style.width="1000px",await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))),await o(me(s)).toBe(15)}};async function ce(e,t){const a=l(e),s=a.getByTestId("right-sidebar-toggle-bar").querySelector("button"),r=a.getByRole("complementary",{name:"Workspace insights"}),i=be(e),c=[];let p=!0;const S=()=>{c.push({toggle:s.getBoundingClientRect(),sidebarWidth:r.getBoundingClientRect().width,card:r.querySelector(".right-sidebar-overview-card")!=null,panel:r.querySelector('[role="tablist"]')!=null,chatPadding:me(i)}),p&&requestAnimationFrame(S)};return S(),await t(),await new Promise(T=>setTimeout(T,600)),p=!1,c}async function de(e,t){for(const a of["left","top","width","height"])await o(Math.abs(e[a]-t[a])).toBeLessThanOrEqual(.1)}const ae={...I,parameters:{pixel:x},play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("complementary",{name:"Workspace insights"},{timeout:15e3});await d(()=>o(a.querySelector(".right-sidebar-overview-card")).not.toBeNull());const s=t.getByRole("button",{name:"Expand right sidebar"}),r=t.getByTestId("workspace-menu-bar"),i=r.querySelector("button.right-sidebar-toggle");s.focus();const c=s.getBoundingClientRect();await de(i.getBoundingClientRect(),c);const p=await ce(e,()=>u.keyboard("{Enter}"));await o(s).toHaveAccessibleName("Collapse right sidebar"),await o(s).toHaveFocus();for(const v of p)await de(v.toggle,c);const S=p[p.length-1].sidebarWidth;await o(S).toBeGreaterThan(200),await o(p.some(v=>v.sidebarWidth>1&&v.sidebarWidth<S-1)).toBe(!0),await o(p.some(v=>v.card&&v.panel)).toBe(!1);const T=t.getByRole("tablist",{name:"Sidebar views"}).parentElement.parentElement,E=T.querySelector('button[aria-hidden="true"]');await de(E.getBoundingClientRect(),c),await o(T.getBoundingClientRect().height).toBe(r.getBoundingClientRect().height);const k=await ce(e,()=>u.keyboard("{Enter}"));await o(s).toHaveAccessibleName("Expand right sidebar"),await o(s).toHaveFocus();for(const v of k)await de(v.toggle,c);await o(k[k.length-1].sidebarWidth).toBe(0),await o(k.some(v=>v.sidebarWidth>1&&v.sidebarWidth<S-1)).toBe(!0),await o(k.some(v=>v.card&&v.panel)).toBe(!0);const B=k[k.length-1].chatPadding;await o(B).toBeGreaterThan(100),await o(k.some(v=>v.chatPadding>16&&v.chatPadding<B-1)).toBe(!0),await o(k[k.length-1].panel).toBe(!1)}},se={...I,parameters:{pixel:x},play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("complementary",{name:"Workspace insights"},{timeout:15e3});await u.click(t.getByRole("button",{name:"Expand right sidebar"})),await u.click(await l(a).findByRole("button",{name:/^Stats\b/}));const s=await l(a).findByRole("button",{name:"Close Stats"});await d(()=>{if(a.getAnimations().length>0)throw new Error("The sidebar is still sliding open")});const r=await ce(e,()=>u.click(s));await o(t.getByRole("button",{name:"Expand right sidebar"})).toBeVisible();const i=r[0].sidebarWidth;await o(i).toBeGreaterThan(200),await o(r[r.length-1].sidebarWidth).toBe(0);const c=r.filter(p=>p.sidebarWidth<i-1);await o(c.some(p=>p.sidebarWidth>1)).toBe(!0),await o(c.some(p=>p.panel)).toBe(!1)}},ne={...I,parameters:{pixel:x},play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("complementary",{name:"Workspace insights"},{timeout:15e3});await d(()=>o(a.querySelector(".right-sidebar-overview-card")).not.toBeNull()),await u.click(t.getByRole("button",{name:"Expand right sidebar"})),await d(()=>{if(a.querySelector(".right-sidebar-overview-card")!=null||a.getAnimations().length>0||be(e).getAnimations().length>0)throw new Error("The sidebar is still sliding open")});const s=a.getBoundingClientRect().width;await o(s).toBeGreaterThan(200);const r=a.querySelector("[data-sidebar-resize-handle]"),i=r.getBoundingClientRect(),c={pointerId:7,isPrimary:!0,bubbles:!0,clientY:i.top+100},p=()=>new Promise(B=>requestAnimationFrame(B));r.dispatchEvent(new PointerEvent("pointerdown",{...c,clientX:i.left})),await p();const S=B=>async()=>{document.dispatchEvent(new PointerEvent("pointermove",{...c,clientX:B})),await p()},T=await ce(e,S(i.left+s+50));await o(T[T.length-1].sidebarWidth).toBe(0),await o(T[T.length-1].panel).toBe(!1);const E=T[T.length-1].chatPadding;await o(E).toBeGreaterThan(100);for(const B of T)await o([0,s]).toContain(B.sidebarWidth),await o([15,E]).toContain(B.chatPadding);const k=await ce(e,S(i.left));document.dispatchEvent(new PointerEvent("pointerup",{...c,clientX:i.left})),await o(k[k.length-1].sidebarWidth).toBe(s);for(const B of k)await o([0,s]).toContain(B.sidebarWidth)}},oe={...I,decorators:[e=>n.jsx("div",{className:"contents",style:{"--titlebar-right-inset":"513px"},children:n.jsx(e,{})})],parameters:{pixel:x},play:async({canvasElement:e})=>{const t=l(e);await u.click(await t.findByRole("button",{name:"Expand right sidebar"},{timeout:15e3}));const a=await t.findByRole("button",{name:"All tabs"},{timeout:15e3});await d(()=>{if(a.scrollIntoView({block:"nearest",inline:"nearest"}),!ue(a))throw new Error("All tabs is not under the pointer")})}},pe="ws-pinned-last-tab-close",re={status:"ok",path:"report.md",kind:qe("report.md"),size:26,modifiedMs:1,encoding:"utf8",content:`# Weekly report

All good.`},ie={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:x},render:()=>n.jsx(Te,{setup:()=>{const e=g({workspaceId:pe,workspaceName:"feature/pinned-close",experiments:{[et.ARTIFACTS]:!0},messages:[m("msg-1","Show me the report",{historySequence:1})]});return e.artifacts={...e.artifacts,list:()=>Promise.resolve({success:!0,data:{available:!0,dir:"/scratch/artifacts",entries:[{path:re.path,kind:re.kind,size:re.size,modifiedMs:1}],truncated:!1}}),read:()=>Promise.resolve({success:!0,data:re})},Me(pe,{scope:"artifact",path:re.path,version:null}),ve(),f(pe,["artifacts"]),h(pe),e}}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByRole("complementary",{name:"Workspace insights"},{timeout:15e3});await u.click(await l(a).findByRole("button",{name:"Fullscreen"},{timeout:15e3}));const s=await t.findByRole("region",{name:"Artifact report.md"});await d(()=>o(s).toHaveFocus()),await u.keyboard("{Control>}w{/Control}");const r=await t.findByRole("button",{name:"Expand right sidebar"});await d(()=>{const i=document.activeElement;if(i!==r)throw new Error(`Focus is on <${i?.tagName.toLowerCase()??"none"}>, not the toggle`)})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem("statsContainer:subTab", JSON.stringify("cost"));
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    seedSidebarLayout("ws-costs", ["costs", "review"], "costs");
    const client = setupSimpleChatStory({
      workspaceId: "ws-costs",
      workspaceName: "feature/api",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Help me build an API", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "I'll help you build a REST API.", {
        historySequence: 2
      })],
      sessionUsage: createSessionUsage(0.56)
    });
    expandRightSidebar("ws-costs");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-costs" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Session usage is fetched async via WorkspaceStore; wait to avoid snapshot races.
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /stats.*\\$0\\.56/i
      });
    });
  }
}`,...A.parameters?.docs?.source},description:{story:"Costs tab with session cost displayed in tab label ($0.56)",...A.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem("statsContainer:subTab", JSON.stringify("cost"));
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "350");
    const modelUsage = {
      // Realistic Anthropic usage: heavy caching, cache create is expensive
      input: {
        tokens: 2000,
        cost_usd: 0.006
      },
      cached: {
        tokens: 45000,
        cost_usd: 0.0045
      },
      // Cache read: cheap
      cacheCreate: {
        tokens: 30000,
        cost_usd: 0.1125
      },
      // Cache create: expensive!
      output: {
        tokens: 3000,
        cost_usd: 0.045
      },
      reasoning: {
        tokens: 0,
        cost_usd: 0
      },
      model: "anthropic:claude-sonnet-4-20250514"
    };
    seedSidebarLayout("ws-cache-create", ["costs", "review"], "costs");
    const client = setupSimpleChatStory({
      workspaceId: "ws-cache-create",
      workspaceName: "feature/caching",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Refactor the auth module", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "I'll refactor the authentication module.", {
        historySequence: 2
      })],
      sessionUsage: {
        byModel: {
          [modelUsage.model]: modelUsage
        },
        lastRequest: {
          model: modelUsage.model,
          usage: modelUsage,
          timestamp: 0
        },
        version: 1
      }
    });
    expandRightSidebar("ws-cache-create");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-cache-create" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure we're on the Stats tab (layout state can persist across stories).
    const statsTab = await canvas.findByRole("tab", {
      name: /^stats/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(statsTab);

    // Wait for session usage to load + render.
    await waitFor(() => {
      canvas.getByText(/cache create/i);
      canvas.getByText(/cache read/i);
    }, {
      timeout: 15_000
    });
  }
}`,...N.parameters?.docs?.source},description:{story:`Costs tab showing cache create vs cache read differentiation.
Cache create is more expensive than cache read; both render in grey tones.
This story uses realistic Anthropic-style usage where most input is cached.`,...N.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem("statsContainer:subTab", JSON.stringify("cost"));
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    seedSidebarLayout("ws-multi-model", ["costs", "review"], "costs");
    const client = setupSimpleChatStory({
      workspaceId: "ws-multi-model",
      workspaceName: "feature/multi-model",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Plan and implement the parser", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Done: plan reviewed and parser implemented.", {
        historySequence: 2
      })],
      sessionUsage: {
        byModel: {
          "anthropic:claude-opus-4-6": {
            input: {
              tokens: 12000,
              cost_usd: 0.18
            },
            cached: {
              tokens: 240000,
              cost_usd: 0.36
            },
            cacheCreate: {
              tokens: 80000,
              cost_usd: 1.5
            },
            output: {
              tokens: 9000,
              cost_usd: 0.675
            },
            reasoning: {
              tokens: 4000,
              cost_usd: 0.3
            },
            model: "anthropic:claude-opus-4-6"
          },
          "openai:gpt-5.2": {
            input: {
              tokens: 30000,
              cost_usd: 0.0525
            },
            cached: {
              tokens: 50000,
              cost_usd: 0.021875
            },
            cacheCreate: {
              tokens: 0,
              cost_usd: 0
            },
            output: {
              tokens: 6000,
              cost_usd: 0.084
            },
            reasoning: {
              tokens: 8000,
              cost_usd: 0.112
            },
            model: "openai:gpt-5.2"
          }
        },
        version: 1
      }
    });
    expandRightSidebar("ws-multi-model");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-multi-model" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Session usage is fetched async via WorkspaceStore; wait for the
    // per-model breakdown rows to render.
    await waitFor(() => {
      const byModel = canvas.getByTestId("cost-by-model");
      within(byModel).getByText("Opus 4.6");
      within(byModel).getByText("GPT-5.2");
    });
  }
}`,...P.parameters?.docs?.source},description:{story:`Costs tab with multiple models used in one session.
The per-model breakdown table lists each model's tokens and cost.`,...P.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    seedSidebarLayout("ws-review", ["costs", "review"], "costs");
    const client = setupSimpleChatStory({
      workspaceId: "ws-review",
      workspaceName: "feature/review",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Add a new component", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "I've added the component.", {
        historySequence: 2
      })],
      sessionUsage: createSessionUsage(0.42)
    });
    expandRightSidebar("ws-review");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-review" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for session usage to land (avoid theme/mode snapshots diverging on timing).
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /stats.*\\$0\\.42/i
      });
    });

    // Use findByRole (retry-capable) to handle transient DOM gaps between awaits.
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    });
    await userEvent.click(reviewTab);
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^review/i,
        selected: true
      });
    });
  }
}`,...O.parameters?.docs?.source},description:{story:`Review tab selected - click switches from Costs to Review tab
Verifies per-tab width persistence: starts at Costs width (350px), switches to Review width (700px)`,...O.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    seedSidebarLayout("ws-stats-idle", ["costs", "review"], "costs");
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    // Pre-select Timing sub-tab so it shows timing content
    localStorage.setItem("statsContainer:subTab", JSON.stringify("timing"));
    const client = setupSimpleChatStory({
      workspaceId: "ws-stats-idle",
      workspaceName: "feature/stats",
      projectName: "my-app",
      statsTabEnabled: true,
      messages: [createUserMessage("msg-1", "Help me with something", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Sure, I can help with that.", {
        historySequence: 2
      })],
      sessionUsage: createSessionUsage(0.25)
    });
    expandRightSidebar("ws-stats-idle");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-stats-idle" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The "Stats" tab (internal key "costs") is default active.
    const statsTab = await canvas.findByRole("tab", {
      name: /^stats/i
    });
    await userEvent.click(statsTab);
    await waitFor(() => {
      canvas.getByText(/no timing data yet/i);
    });
  }
}`,...D.parameters?.docs?.source},description:{story:"Stats tab (Timing sub-tab) when idle (no timing data) - shows placeholder message",...D.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    seedSidebarLayout("ws-stats-streaming", ["costs", "review"], "costs");
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    // Pre-select Timing sub-tab so it shows timing content
    localStorage.setItem("statsContainer:subTab", JSON.stringify("timing"));
    const client = setupStreamingChatStory({
      workspaceId: "ws-stats-streaming",
      workspaceName: "feature/streaming",
      projectName: "my-app",
      statsTabEnabled: true,
      messages: [createUserMessage("msg-1", "Write a comprehensive test suite", {
        historySequence: 1
      })],
      streamingMessageId: "msg-2",
      historySequence: 2,
      streamText: "I'll create a test suite for you. Let me start by analyzing..."
    });
    expandRightSidebar("ws-stats-streaming");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-stats-streaming" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The "Stats" tab (internal key "costs") should already be active.
    const statsTab = await canvas.findByRole("tab", {
      name: /^stats/i
    });
    await userEvent.click(statsTab);
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^stats/i,
        selected: true
      });
    });

    // Verify timing section is rendered (use testid since "Timing" appears in both
    // the sub-tab toggle and the section header)
    await waitFor(() => {
      canvas.getByTestId("timing-section");
    });

    // Verify timing table components are displayed
    await waitFor(() => {
      canvas.getByText(/model time/i);
    });
  }
}`,...W.parameters?.docs?.source},description:{story:"Stats tab (Timing sub-tab) during active streaming - shows timing statistics",...W.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    // Clear persisted layout to ensure review tab appears in fresh default layout
    const workspaceId = "ws-review-sort";
    seedSidebarLayout(workspaceId, ["costs", "review"], "review");
    const now = Date.now();

    // Set up first-seen timestamps for hunks (oldest to newest: format -> button -> client)
    // We use placeholder IDs since exact hash depends on content
    setHunkFirstSeen(workspaceId, {
      // format.ts was seen 2 hours ago
      [HUNK_IDS.format]: now - 2 * 60 * 60 * 1000,
      // Button.tsx was seen 30 minutes ago
      [HUNK_IDS.button]: now - 30 * 60 * 1000,
      // client.ts was seen 5 minutes ago
      [HUNK_IDS.client]: now - 5 * 60 * 1000
    });
    const client = setupSimpleChatStory({
      workspaceId,
      workspaceName: "feature/sorting",
      userPreferences: {
        review: {
          sortOrder: "last-edit"
        }
      },
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Add utilities and refactor button", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Done! Added format utilities and improved Button.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: SAMPLE_DIFF_OUTPUT,
        numstatOutput: SAMPLE_NUMSTAT_OUTPUT
      }
    });
    expandRightSidebar("ws-review-sort");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-review-sort" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure the Review tab is active. Storybook can preserve prior sidebar state
    // between captures, so persisted tab selection might not apply until interaction.
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(reviewTab);
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^review/i,
        selected: true
      });
    }, {
      timeout: 10_000
    });

    // Verify the sort dropdown shows "Last edit"
    // Use a more specific selector since there are multiple combobox elements
    const sortSelect = await canvas.findByRole("combobox", {
      name: /sort hunks by/i
    });
    await expect(sortSelect).toHaveValue("last-edit");

    // Wait for hunks to load - look for file paths in the diff
    // Use getAllByText since files appear in both file tree and hunk headers
    await waitFor(() => {
      canvas.getAllByText(/format\\.ts/i);
      canvas.getAllByText(/Button\\.tsx/i);
      canvas.getAllByText(/client\\.ts/i);
    });

    // Verify relative time indicators are shown (e.g., "5m ago", "30m ago", "2h ago")
    // These come from the firstSeenAt timestamps we set
    await waitFor(async () => {
      // At least one relative time indicator should be visible
      const timeIndicators = canvas.getAllByText(/ago|just now/i);
      await expect(timeIndicators.length).toBeGreaterThan(0);
    });
  }
}`,...q.parameters?.docs?.source},description:{story:`Review tab with hunks sorted by "Last edit" (LIFO order).
Shows timestamps in hunk headers indicating when each change was first seen.`,...q.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    const workspaceId = "ws-review-file-order";
    seedSidebarLayout(workspaceId, ["costs", "review"], "review");
    const client = setupSimpleChatStory({
      workspaceId,
      workspaceName: "feature/file-order",
      userPreferences: {
        review: {
          sortOrder: "file-order"
        }
      },
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Make some changes", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Changes made.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: SAMPLE_DIFF_OUTPUT,
        numstatOutput: SAMPLE_NUMSTAT_OUTPUT
      }
    });
    expandRightSidebar("ws-review-file-order");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-review-file-order" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure Review tab is active (Storybook may preserve prior tab state).
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(reviewTab);
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^review/i,
        selected: true
      });
    }, {
      timeout: 10_000
    });

    // Verify the sort dropdown shows "File order"
    // Use a more specific selector since there are multiple combobox elements
    const sortSelect = await canvas.findByRole("combobox", {
      name: /sort hunks by/i
    });
    await expect(sortSelect).toHaveValue("file-order");

    // Wait for hunks to load - use getAllByText since files appear in both file tree and hunk headers
    await waitFor(() => {
      canvas.getAllByText(/format\\.ts/i);
    });

    // Switch to "Last edit" sorting
    await userEvent.selectOptions(sortSelect, "last-edit");
    await expect(sortSelect).toHaveValue("last-edit");
  }
}`,...M.parameters?.docs?.source},description:{story:`Review tab with hunks sorted by file order (default).
Demonstrates switching between sort modes.`,...M.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    seedSidebarLayout("ws-diff-alignment", ["costs", "review"], "review");
    const client = setupSimpleChatStory({
      workspaceId: "ws-diff-alignment",
      workspaceName: "feature/alignment-test",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Add math utilities", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Added the utilities.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: ALIGNMENT_TEST_DIFF,
        numstatOutput: ALIGNMENT_TEST_NUMSTAT
      }
    });
    expandRightSidebar("ws-diff-alignment");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-diff-alignment" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure Review tab is active.
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(reviewTab);

    // Wait for Review tab to be selected.
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^review/i,
        selected: true
      });
    }, {
      timeout: 10_000
    });

    // Wait for diff content to render.
    await waitForDiffText(canvasElement, /add\\(a: number/i);

    // Visual verification: the padding strip should align with the diff gutter
  }
}`,...F.parameters?.docs?.source},description:{story:`Review tab with diff focused on padding alignment verification.
The saturated green gutter (line numbers) should align perfectly with
the top/bottom padding strips. The indicator column (+/-) should have
the less saturated code background.`,...F.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    seedSidebarLayout("ws-diff-modification", ["costs", "review"], "review");
    const client = setupSimpleChatStory({
      workspaceId: "ws-diff-modification",
      workspaceName: "feature/config-update",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Update config values", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Updated config.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: MODIFICATION_DIFF,
        numstatOutput: MODIFICATION_NUMSTAT
      }
    });
    expandRightSidebar("ws-diff-modification");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-diff-modification" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure Review tab is active.
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(reviewTab);

    // Wait for diff content to render
    await waitForDiffText(canvasElement, /export const config/i);

    // Visual verification for mixed diff types
  }
}`,...L.parameters?.docs?.source},description:{story:`Review tab with modification diff (context + additions + removals).
Tests padding alignment when the first line is context (neutral) and
the diff contains mixed line types.`,...L.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    const workspaceId = "ws-read-more";
    seedSidebarLayout(workspaceId, ["costs", "review"], "review");
    const client = setupSimpleChatStory({
      workspaceId,
      workspaceName: "feature/button-types",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Add TypeScript types to Button", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Done! Added ButtonProps interface.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: READ_MORE_DIFF_OUTPUT,
        numstatOutput: READ_MORE_NUMSTAT_OUTPUT,
        fileContents: new Map([["src/components/Button.tsx", BUTTON_FILE_CONTENT]])
      }
    });
    expandRightSidebar("ws-read-more");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-read-more" />
    </RightSidebarStoryShell>
  // No play function - interaction testing covered by tests/ui/readMore.integration.test.ts
}`,...j.parameters?.docs?.source},description:{story:`Review tab with read-more feature to expand context above/below hunks.
Click ▲ to show more context above, ▼ to show more context below.`,...j.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    seedSidebarLayout("ws-review-file-filter", ["costs", "review"], "review");
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    const workspaceId = "ws-review-file-filter";

    // Set active file filter - this would be set when user clicks a file in tree
    localStorage.setItem(\`review-file-filter:\${workspaceId}\`, JSON.stringify("src/components/Button.tsx"));
    const client = setupSimpleChatStory({
      workspaceId,
      workspaceName: "feature/file-filter",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Refactor button component", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Updated Button.tsx with proper types.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: SAMPLE_DIFF_OUTPUT,
        numstatOutput: SAMPLE_NUMSTAT_OUTPUT
      }
    });
    expandRightSidebar("ws-review-file-filter");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-review-file-filter" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure Review tab is active.
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(reviewTab);
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^review/i,
        selected: true
      });
    }, {
      timeout: 10_000
    });

    // Wait for file tree to load
    await waitFor(() => {
      canvas.getByText("Files");
    });

    // Verify file filter indicator is visible in the header (has clear button with ✕)
    const filterIndicator = await canvas.findByRole("button", {
      name: /^Button\\.tsx\\s*✕$/
    });
    await expect(filterIndicator).toBeInTheDocument();
    await expect(filterIndicator).toHaveTextContent("Button.tsx");

    // In the light themes, the warning "-N" counts and "M" letters were 1.54:1 on white, and every
    // colored text on the selected file row was below WCAG AA, down to 1.16:1. The filter chip
    // shares the row's tint, and its "✕" was 2.85:1 (#6935).
    const tree = await canvas.findByTestId("review-file-tree");
    const selectedName = await within(tree).findByText("Button.tsx");
    // The selected row is the nearest ancestor that paints a background: the selection tint.
    let selectedRow = selectedName.parentElement;
    while (selectedRow && getComputedStyle(selectedRow).backgroundColor === "rgba(0, 0, 0, 0)") {
      selectedRow = selectedRow.parentElement;
    }
    if (!selectedRow || !tree.contains(selectedRow)) throw new Error("No selected-row tint found");
    const row = selectedRow;
    // The file-type icon is aria-hidden: the file name next to it carries the same information.
    const rowTexts = () => [...row.querySelectorAll<HTMLElement>("*")].filter(element => !element.closest("[aria-hidden='true']") && element.childElementCount === 0);
    const deletionCounts = () => canvas.getAllByText(/^[-−]\\d+$|^M$/);
    await expect(textsBelowAaInThemes(() => [filterIndicator, ...new Set([...rowTexts(), ...deletionCounts()])]).join("\\n")).toBe("");
  }
}`,...U.parameters?.docs?.source},description:{story:`Review tab with file filter active - shows the filter indicator prominently
User has clicked on a file in the tree to filter hunks to just that file.`,...U.parameters?.docs?.description}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    const workspaceId = "ws-read-more-boundaries";
    seedSidebarLayout(workspaceId, ["costs", "review"], "review");
    const client = setupSimpleChatStory({
      workspaceId,
      workspaceName: "feature/math-utils",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Add subtraction utility", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Added sub function.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: SMALL_FILE_DIFF_OUTPUT,
        numstatOutput: SMALL_FILE_NUMSTAT_OUTPUT,
        fileContents: new Map([["src/utils/math.ts", SMALL_FILE_CONTENT]])
      }
    });
    expandRightSidebar("ws-read-more-boundaries");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-read-more-boundaries" />
    </RightSidebarStoryShell>
  // No play function - interaction testing covered by tests/ui/readMore.integration.test.ts
}`,...le.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "700");
    const workspaceId = "ws-untracked";
    seedSidebarLayout(workspaceId, ["costs", "review"], "review");
    const client = setupSimpleChatStory({
      workspaceId,
      workspaceName: "feature/new-feature",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Add new utilities", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "Added new files and utilities.", {
        historySequence: 2
      })],
      gitDiff: {
        diffOutput: SAMPLE_DIFF_OUTPUT,
        numstatOutput: SAMPLE_NUMSTAT_OUTPUT,
        untrackedFiles: ["src/utils/newHelper.ts", "src/components/NewComponent.tsx", "tests/newHelper.test.ts"]
      }
    });
    expandRightSidebar("ws-untracked");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-untracked" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Ensure Review tab is active
    const reviewTab = await canvas.findByRole("tab", {
      name: /^review/i
    }, {
      timeout: 10_000
    });
    await userEvent.click(reviewTab);
    await waitFor(() => {
      canvas.getByRole("tab", {
        name: /^review/i,
        selected: true
      });
    }, {
      timeout: 10_000
    });

    // Wait for the untracked files banner to appear
    await waitFor(() => {
      canvas.getByText(/3 untracked files/i);
    });

    // Expand the banner to show file list and Track All button
    const bannerButton = canvas.getByText(/untracked files/i);
    await userEvent.click(bannerButton);

    // Wait for expanded content
    await waitFor(() => {
      canvas.getByText("src/utils/newHelper.ts");
      canvas.getByText("Track All Files");
    });

    // Double-RAF for scroll stabilization after banner expansion changes layout
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    // Blur focus for clean screenshot
    blurActiveElement();
  }
}`,...H.parameters?.docs?.source},description:{story:`Review tab with untracked files banner shown prominently above hunks.
The banner is collapsible and shows a "Track All Files" button when expanded.`,...H.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem("statsContainer:subTab", JSON.stringify("cost"));
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    seedSidebarLayout("ws-compact-warning", ["costs", "review"], "costs");
    const client = setupSimpleChatStory({
      workspaceId: "ws-compact-warning",
      workspaceName: "feature/compaction",
      projectName: "my-app",
      agentAiDefaults: {
        compact: {
          modelString: "openai:gpt-4o"
        }
      },
      // 80% of 200k = 160k, which exceeds gpt-4o's 128k context
      userPreferences: {
        ai: {
          autoCompactionThresholdByModel: {
            "anthropic:claude-opus-4-1": 80
          }
        }
      },
      messages: [createUserMessage("msg-1", "Help me refactor this large codebase", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "I'll help you refactor the codebase.", {
        historySequence: 2,
        model: "anthropic:claude-opus-4-1",
        contextUsage: {
          inputTokens: 150000,
          outputTokens: 2000
        }
      })],
      sessionUsage: {
        byModel: {
          "anthropic:claude-opus-4-1": {
            input: {
              tokens: 150000,
              cost_usd: 2.25
            },
            cached: {
              tokens: 0,
              cost_usd: 0
            },
            cacheCreate: {
              tokens: 0,
              cost_usd: 0
            },
            output: {
              tokens: 2000,
              cost_usd: 0.15
            },
            reasoning: {
              tokens: 0,
              cost_usd: 0
            },
            model: "anthropic:claude-opus-4-1"
          }
        },
        version: 1
      }
    });
    expandRightSidebar("ws-compact-warning");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-compact-warning" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the warning to appear
    await waitFor(() => {
      canvas.getByText(/compaction model context/i);
    });
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the compaction model context warning when the configured compaction model (gpt-4o, 128k) " + "has a smaller context window than the auto-compact threshold (80% of 200k = 160k tokens)."
      }
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Stats tab showing compaction model context warning in the always-visible
context usage section. When the compaction model (gpt-4o, 128k) has a smaller
context window than the auto-compact threshold (80% of 200k = 160k), a warning appears.`,...G.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  // Empty Output is captured beside the narrow launcher; keep this isolated play for debugging.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    seedSidebarLayout("ws-output-empty", ["costs", "review", "output"], "output");
    const client = setupSimpleChatStory({
      workspaceId: "ws-output-empty",
      workspaceName: "feature/logging",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Hello", {
        historySequence: 1
      })],
      logEntries: []
    });
    expandRightSidebar("ws-output-empty");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-output-empty" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const output = await within(canvasElement).findByRole("tabpanel", {
      name: /^output/i
    });
    // The Output panel is lazy-loaded: its body arrives after the tabpanel.
    await expect(await within(output).findByRole("button", {
      name: "Delete output logs"
    })).toBeVisible();
    await expect(output.querySelector(".overflow-y-auto")).toBeEmptyDOMElement();
  }
}`,...K.parameters?.docs?.source},description:{story:"Output tab selected with an empty log feed.",...K.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    seedSidebarLayout("ws-output-logs", ["costs", "review", "output"], "output");
    const client = setupSimpleChatStory({
      workspaceId: "ws-output-logs",
      workspaceName: "feature/logging",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Show logs", {
        historySequence: 1
      })],
      logEntries: createOutputLogEntries()
    });
    expandRightSidebar("ws-output-logs");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-output-logs" />
    </RightSidebarStoryShell>
}`,...$.parameters?.docs?.source},description:{story:"Output tab selected with mixed log entries.",...$.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    seedSidebarLayout("ws-output-errors", ["costs", "review", "output"], "output");
    // Persist the level filter to "error" so only error entries display.

    const client = setupSimpleChatStory({
      workspaceId: "ws-output-errors",
      workspaceName: "feature/logging",
      // Only error entries display.
      userPreferences: {
        ui: {
          outputTabLevel: "error"
        }
      },
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Check errors", {
        historySequence: 1
      })],
      logEntries: createOutputLogEntries()
    });
    expandRightSidebar("ws-output-errors");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-output-errors" />
    </RightSidebarStoryShell>
}`,...V.parameters?.docs?.source},description:{story:'Output tab with persisted level filter set to "error".',...V.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // Play-only: NewTabLauncherNarrow captures the launcher (and the strip overflow) for Pixel,
  // which keeps this PR within the snapshot budget.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.removeItem(RIGHT_SIDEBAR_TAB_KEY);
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "400");
    localStorage.removeItem(getRightSidebarLayoutKey("ws-new-tab"));
    const client = setupSimpleChatStory({
      workspaceId: "ws-new-tab",
      workspaceName: "feature/new-tab",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Hello", {
        historySequence: 1
      })]
    });
    // The keyboard play opens Workflows, not just its launcher row.
    client.workflows.listScripts = () => Promise.resolve([]);
    expandRightSidebar("ws-new-tab");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-new-tab" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("tab", {
      name: /^new tab/i,
      selected: true
    });
    await canvas.findByRole("button", {
      name: "Review"
    });
    await expect(canvas.getAllByRole("tab")).toHaveLength(1);
    const launcher = canvasElement.querySelector('[role="tabpanel"][id$="-panel-new"]')!;
    const tools = within(launcher as HTMLElement).getAllByRole("button").map(button => button.getAttribute("aria-label")!).filter(name => name !== "Terminal" && name !== "Side chat");
    for (const name of tools) {
      const row = await canvas.findByRole("button", {
        name
      });
      row.focus();
      await userEvent.keyboard("{Enter}");
      await waitFor(() => {
        const tab = canvas.getByRole("tab", {
          selected: true
        });
        const panel = document.getElementById(tab.getAttribute("aria-controls")!);
        // Review/Artifacts keep their specialized panel focus; other tools focus their tab.
        return expect(document.activeElement === tab || panel?.contains(document.activeElement)).toBe(true);
      });
      await openSidebarNewTab(canvasElement);
    }
    // The strip's "+" hands focus to the launcher, which keeps it.
    const launcherHasFocus = () => canvasElement.querySelector('[role="tabpanel"][id$="-panel-new"]')?.contains(document.activeElement) === true;
    await waitFor(() => expect(launcherHasFocus()).toBe(true));
    await new Promise(resolve => setTimeout(resolve, 50));
    await expect(launcherHasFocus()).toBe(true);
  }
}`,...Y.parameters?.docs?.source},description:{story:`A fresh workspace: the strip holds only the New tab, whose launcher lists the tools a pane can
open (Codex-style empty tab) instead of showing every tool as an idle tab.`,...Y.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  // Match Pixel's named desktop exactly; the global Storybook "desktop" is smaller.
  parameters: {
    viewport: {
      options: {
        pixelDesktop: {
          name: "Pixel desktop",
          styles: {
            width: "1900px",
            height: "1080px"
          },
          type: "desktop"
        }
      }
    }
  },
  globals: {
    viewport: {
      value: "pixelDesktop",
      isRotated: false
    }
  },
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.removeItem(RIGHT_SIDEBAR_TAB_KEY);
    // Share the existing empty-Output captures instead of spending more Pixel variants.
    // After the border/divider, this gives the launcher ~300px and Output ~400px.
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "705");
    const layout: RightSidebarLayoutState = {
      version: 1,
      openTabsOnly: true,
      nextId: 4,
      focusedTabsetId: "launcher",
      root: {
        type: "split",
        id: "launcher-output",
        direction: "vertical",
        sizes: [300 / 7, 400 / 7],
        children: [{
          type: "tabset",
          id: "launcher",
          tabs: ["costs", "review", "instructions", "goal", "workflows", "new"],
          activeTab: "new"
        }, {
          type: "tabset",
          id: "output",
          tabs: ["costs", "review", "output"],
          activeTab: "output"
        }]
      }
    };
    localStorage.setItem(getRightSidebarLayoutKey("ws-new-tab-narrow"), JSON.stringify(layout));
    const client = setupSimpleChatStory({
      workspaceId: "ws-new-tab-narrow",
      workspaceName: "feature/new-tab",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Hello", {
        historySequence: 1
      })],
      sessionUsage: createSessionUsage(0.12),
      logEntries: []
    });
    expandRightSidebar("ws-new-tab-narrow");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-new-tab-narrow" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const newTab = await canvas.findByRole("tab", {
      name: /^new tab/i,
      selected: true
    });
    const launcher = newTab.closest<HTMLElement>("[data-tabset-id]")!;
    const sideChat = within(launcher).getByRole("button", {
      name: "Side chat"
    });
    await expect(sideChat).toBeVisible();
    await expect(launcher.getBoundingClientRect().width).toBeGreaterThanOrEqual(295);
    await expect(launcher.getBoundingClientRect().width).toBeLessThanOrEqual(305);
    // The open tabs overflow this narrow strip: the selected New tab stays fully reachable.
    await within(launcher).findByRole("tab", {
      name: /stats.*\\$0\\.12/i
    });
    await expectSelectedTabVisible(launcher);
    const output = await canvas.findByRole("tabpanel", {
      name: /^output/i
    });
    await expect(output).toBeVisible();
    // The Output panel is lazy-loaded: its body arrives after the tabpanel.
    await expect(await within(output).findByRole("button", {
      name: "Delete output logs"
    })).toBeVisible();
    await expect(output.querySelector(".overflow-y-auto")).toBeEmptyDOMElement();
    // Both states must share one capture, not merely exist off-screen or in a hidden tab.
    const outputRect = output.getBoundingClientRect();
    await expect(outputRect.left).toBeGreaterThanOrEqual(launcher.getBoundingClientRect().right);
    await expect(outputRect.right).toBeLessThanOrEqual(window.innerWidth);
    await expect(sideChat.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight);
  }
}`,...z.parameters?.docs?.source},description:{story:`The New tab launcher at the sidebar's minimum width (300px), next to more open tabs than fit:
launcher rows wrap their descriptions instead of overflowing, and the strip stays one row
that scrolls sideways (hidden scrollbar, faded edges) with All tabs pinned at the end.`,...z.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // Play-only: NewTabLauncherNarrow already captures the overflowing strip for Pixel.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <RightSidebarStoryShell setup={() => {
    localStorage.removeItem(RIGHT_SIDEBAR_TAB_KEY);
    localStorage.setItem(RIGHT_SIDEBAR_WIDTH_KEY, "320");
    seedSidebarLayout("ws-many-tabs", ["costs", "review", "instructions", "goal", "workflows", "timeline", "output"], "timeline");
    const client = setupSimpleChatStory({
      workspaceId: "ws-many-tabs",
      workspaceName: "feature/many-tabs",
      projectName: "my-app",
      messages: [createUserMessage("msg-1", "Hello", {
        historySequence: 1
      })],
      sessionUsage: createSessionUsage(0.34)
    });
    expandRightSidebar("ws-many-tabs");
    return client;
  }}>
      <RightSidebarStoryContent workspaceId="ws-many-tabs" />
    </RightSidebarStoryShell>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("tab", {
      name: /^timeline/i,
      selected: true
    });
    await canvas.findByRole("button", {
      name: "All tabs"
    });
    // Wait for the cost badge: it widens Stats after mount, pushing the selected tab right.
    await canvas.findByRole("tab", {
      name: /stats.*\\$0\\.34/i
    });
    await expectSelectedTabVisible(canvasElement);
  }
}`,...J.parameters?.docs?.source},description:{story:`Many open tabs in a narrow sidebar with a middle tab selected: the strip scrolls that tab
fully into view instead of wrapping onto a second line.`,...J.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:"titlebarInsetStory(2000, 400)",...X.parameters?.docs?.source},description:{story:"An inset wider than the pane (Linux e2e reported one larger than the whole sidebar).",...X.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:"titlebarInsetStory(138, 300)",...Z.parameters?.docs?.source},description:{story:"The 138 px Windows/Linux fallback inset at the sidebar's 300 px minimum width.",...Z.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => {
    const client = setupSimpleChatStory({
      workspaceId: OVERVIEW_WORKSPACE_ID,
      workspaceName: "feature/settlement-reconciler",
      messages: [createUserMessage("msg-1", "Why did the reconciler withdraw the hedge?", {
        historySequence: 1
      }), createAssistantMessage("msg-2", "The order filled for about 49 seconds, then the reconciler reduced it from 25 to " + "12 contracts and withdrew the rest. That was a per-order action, not a " + "portfolio-wide revision cancellation.", {
        historySequence: 2
      })],
      gitStatus: {
        ahead: 3,
        dirty: 2,
        outgoingAdditions: 29692,
        outgoingDeletions: 6248
      },
      sessionUsage: {
        byModel: {
          "claude-opus-4-5": {
            input: {
              tokens: 820_000,
              cost_usd: 4.1
            },
            cached: {
              tokens: 2_400_000,
              cost_usd: 1.2
            },
            cacheCreate: {
              tokens: 90_000,
              cost_usd: 0.56
            },
            output: {
              tokens: 64_000,
              cost_usd: 1.6
            },
            reasoning: {
              tokens: 21_000,
              cost_usd: 0.53
            },
            model: "claude-opus-4-5"
          }
        },
        version: 1
      },
      additionalWorkspaces: [overviewSideChat("side-bq", "Give me the BQ migration", "2026-01-01T10:00:00.000Z"), overviewSideChat("side-hedger", "How real-time is the hedger?", "2026-01-01T11:00:00.000Z")]
    });
    collapseLeftSidebar();
    // Exercise the app's default: no saved collapsed flag for the workspace.
    collapseRightSidebar();
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    }, {
      timeout: 15_000
    });
    const card = await waitFor(() => {
      const element = sidebar.querySelector<HTMLElement>(".right-sidebar-overview-card");
      if (!element) throw new Error("Overview card not mounted yet");
      return element;
    });
    const sideChats = await within(card).findByRole("region", {
      name: "Side chats"
    });
    await within(sideChats).findByText("How real-time is the hedger?");
    await waitFor(() => expect(within(card).getByRole("button", {
      name: /Changes/
    })).toHaveTextContent("+29,692"));
    // The session's cost leads the card.
    await within(card).findByRole("button", {
      name: /\\$7\\.99/
    });
    // The toggle shows beside the card: the card has no expand control of its own.
    await expect(canvas.getByRole("button", {
      name: "Expand right sidebar"
    })).toBeVisible();

    // Bounded: the card is a fraction of the workspace's height, and the chat is not narrowed
    // by a collapsed rail: it reaches the workspace's right edge.
    const shell = canvasElement.querySelector<HTMLElement>("[data-workspace-shell]");
    await expect(shell).not.toBeNull();
    await waitFor(async () => {
      const shellRect = shell!.getBoundingClientRect();
      await expect(card.getBoundingClientRect().height).toBeLessThan(shellRect.height / 2);
      await expect(canvas.getByRole("main").getBoundingClientRect().right).toBe(shellRect.right);
    });
    // The transcript makes room for the card: it sits as far from the card as from the left
    // edge of the chat, instead of centering under it.
    const transcript = canvas.getByRole("log", {
      name: "Conversation transcript"
    });
    await waitFor(async () => {
      const column = transcript.getBoundingClientRect();
      const leftGap = column.left - canvas.getByRole("main").getBoundingClientRect().left;
      const rightGap = card.getBoundingClientRect().left - column.right;
      await expect(rightGap).toBeGreaterThan(0);
      await expect(Math.abs(leftGap - rightGap)).toBeLessThanOrEqual(1);
    });
  }
}`,...I.parameters?.docs?.source},description:{story:`The collapsed right sidebar (Codex desktop style): instead of a full-height rail it floats a
bounded overview card over the chat's top-right corner, and the chat keeps the full width.
Rendered in the whole app because the card is positioned against the workspace shell.`,...I.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverview,
  // Inside the meta's 1600px frame: a fixed width, so the test runner's window size cannot
  // decide which of the two shows.
  decorators: [(Story: ComponentType) => <div style={{
    width: 1000,
    height: "100%"
  }}>
        <Story />
      </div>],
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["desktop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("button", {
      name: "Expand right sidebar"
    }, {
      timeout: 15_000
    });
    // The toggle shows before the card: WorkspaceShell loads the sidebar lazily (#6206), so
    // wait for the card to mount. It is hidden, so no role query can find it.
    const card = await waitFor(() => {
      const element = canvasElement.querySelector<HTMLElement>(".right-sidebar-overview-card");
      if (!element) throw new Error("Overview card not mounted yet");
      return element;
    }, {
      timeout: 15_000
    });
    await expect(getComputedStyle(card).visibility).toBe("hidden");
    // The layout still shows the (zero-width) sidebar, so its shortcuts keep expanding it
    // rather than taking the narrow-layout fallbacks.
    const sidebar = canvasElement.querySelector<HTMLElement>('[aria-label="Workspace insights"]');
    await expect(sidebar).not.toBeNull();
    await expect(getComputedStyle(sidebar!).display).not.toBe("none");
    // Without its card the sidebar is no landmark: assistive tech would find it empty.
    await expect(canvas.queryByRole("complementary", {
      name: "Workspace insights"
    })).toBeNull();
  }
}`,...C.parameters?.docs?.source},description:{story:`Where the transcript column would lose width to the card (a 1000px workspace here), the card
stays hidden; the toggle still expands the sidebar.`,...C.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverviewYieldsToTranscript,
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Expand right sidebar"
    }, {
      timeout: 15_000
    });
    toggle.focus();
    await userEvent.keyboard("{Enter}");
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    });
    await waitFor(() => {
      if (sidebar.querySelector('[role="tablist"]') == null || sidebar.getAnimations().length > 0) {
        throw new Error("The sidebar is still sliding open");
      }
    });
    await userEvent.keyboard("{Enter}");
    await expect(toggle).toHaveAccessibleName("Expand right sidebar");
    await userEvent.tab();
    // Still sliding out after the Tab, so the panel was there to tab into.
    await expect(sidebar.querySelector('[role="tablist"]')).not.toBeNull();
    await expect(sidebar.contains(document.activeElement)).toBe(false);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Sliding out, the panel stays painted but takes no focus: Tab right after collapsing does not
land on a control that unmounts when the slide ends. The 1000px workspace hides the card, so
nothing else in the sidebar can take that focus.`,...Q.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={setupEmptyOverview} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("button", {
      name: "Expand right sidebar"
    }, {
      timeout: 15_000
    });
    const card = await waitFor(() => {
      const element = canvasElement.querySelector<HTMLElement>(".right-sidebar-overview-card");
      if (!element) throw new Error("Overview card not mounted yet");
      return element;
    }, {
      timeout: 15_000
    });
    await expect(getComputedStyle(card).display).toBe("none");
    // The 1600px workspace has room for a card, but reserves none for this one.
    await expect(getPaddingRight(getChatScrollport(canvasElement))).toBe(15);
    await expect(canvas.queryByRole("complementary", {
      name: "Workspace insights"
    })).toBeNull();
  }
}`,...ee.parameters?.docs?.source},description:{story:`A collapsed sidebar with nothing to summarize shows no card, so the transcript takes the room
a card would have had, and no empty landmark is left in its place.`,...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverview,
  decorators: [(Story: ComponentType) => <div data-testid="shell-frame" style={{
    width: 1600,
    height: "100%"
  }}>
        <Story />
      </div>],
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    }, {
      timeout: 15_000
    });
    await waitFor(() => expect(sidebar.querySelector(".right-sidebar-overview-card")).not.toBeNull());
    const scrollport = getChatScrollport(canvasElement);
    await waitFor(() => expect(getPaddingRight(scrollport)).toBeGreaterThan(100));
    canvas.getByTestId("shell-frame").style.width = "1000px";
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    await expect(getPaddingRight(scrollport)).toBe(15);
  }
}`,...te.parameters?.docs?.source},description:{story:`A window resize across the card's breakpoint moves the transcript's room for the card at once:
only the sidebar's own slide eases it.`,...te.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverview,
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    }, {
      timeout: 15_000
    });
    await waitFor(() => expect(sidebar.querySelector(".right-sidebar-overview-card")).not.toBeNull());
    const toggle = canvas.getByRole("button", {
      name: "Expand right sidebar"
    });
    const header = canvas.getByTestId("workspace-menu-bar");
    const headerRoom = header.querySelector<HTMLElement>("button.right-sidebar-toggle")!;
    // Focus first: focus() may scroll the 1600px frame into the test runner's narrower window.
    toggle.focus();
    const rest = toggle.getBoundingClientRect();
    await expectSameRect(headerRoom.getBoundingClientRect(), rest);
    const opening = await sampleToggleFrames(canvasElement, () => userEvent.keyboard("{Enter}"));
    await expect(toggle).toHaveAccessibleName("Collapse right sidebar");
    await expect(toggle).toHaveFocus();
    for (const frame of opening) await expectSameRect(frame.toggle, rest);
    const openWidth = opening[opening.length - 1].sidebarWidth;
    await expect(openWidth).toBeGreaterThan(200);
    await expect(opening.some(frame => frame.sidebarWidth > 1 && frame.sidebarWidth < openWidth - 1)).toBe(true);
    // Expanding drops the card at once; the panel slides in.
    await expect(opening.some(frame => frame.card && frame.panel)).toBe(false);

    // The row sits in a wrapper that holds its desktop no-drag region.
    const strip = canvas.getByRole("tablist", {
      name: "Sidebar views"
    }).parentElement!.parentElement!;
    const stripRoom = strip.querySelector<HTMLElement>('button[aria-hidden="true"]')!;
    await expectSameRect(stripRoom.getBoundingClientRect(), rest);
    await expect(strip.getBoundingClientRect().height).toBe(header.getBoundingClientRect().height);
    const closing = await sampleToggleFrames(canvasElement, () => userEvent.keyboard("{Enter}"));
    await expect(toggle).toHaveAccessibleName("Expand right sidebar");
    await expect(toggle).toHaveFocus();
    for (const frame of closing) await expectSameRect(frame.toggle, rest);
    await expect(closing[closing.length - 1].sidebarWidth).toBe(0);
    await expect(closing.some(frame => frame.sidebarWidth > 1 && frame.sidebarWidth < openWidth - 1)).toBe(true);
    // The card is revealed under the panel as it slides out.
    await expect(closing.some(frame => frame.card && frame.panel)).toBe(true);
    // The transcript's room for the card eases in with the slide instead of squeezing the
    // column the moment the sidebar starts collapsing.
    const reservedPadding = closing[closing.length - 1].chatPadding;
    await expect(reservedPadding).toBeGreaterThan(100);
    await expect(closing.some(frame => frame.chatPadding > 16 && frame.chatPadding < reservedPadding - 1)).toBe(true);
    await expect(closing[closing.length - 1].panel).toBe(false);
  }
}`,...ae.parameters?.docs?.source},description:{story:`The right sidebar's toggle (like the left one) is one element in both states: it keeps its
size, place and focus while the docked width slides, and the header (collapsed) and the tab
strip (expanded) reserve its room on their own line.`,...ae.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverview,
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    }, {
      timeout: 15_000
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Expand right sidebar"
    }));
    // The launcher row's name includes its description.
    await userEvent.click(await within(sidebar).findByRole("button", {
      name: /^Stats\\b/
    }));
    const close = await within(sidebar).findByRole("button", {
      name: "Close Stats"
    });
    await waitFor(() => {
      if (sidebar.getAnimations().length > 0) throw new Error("The sidebar is still sliding open");
    });
    const frames = await sampleToggleFrames(canvasElement, () => userEvent.click(close));
    await expect(canvas.getByRole("button", {
      name: "Expand right sidebar"
    })).toBeVisible();
    const openWidth = frames[0].sidebarWidth;
    await expect(openWidth).toBeGreaterThan(200);
    await expect(frames[frames.length - 1].sidebarWidth).toBe(0);
    const sliding = frames.filter(frame => frame.sidebarWidth < openWidth - 1);
    await expect(sliding.some(frame => frame.sidebarWidth > 1)).toBe(true);
    await expect(sliding.some(frame => frame.panel)).toBe(false);
  }
}`,...se.parameters?.docs?.source},description:{story:`Closing the only tab collapses the sidebar, and the panel slides out empty: the New tab that
takes the closed tab's place never paints during the slide (user request). A collapse with the
New tab already open slides out with it (ToggleStaysPutWhileSliding).`,...se.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverview,
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    }, {
      timeout: 15_000
    });
    await waitFor(() => expect(sidebar.querySelector(".right-sidebar-overview-card")).not.toBeNull());
    await userEvent.click(canvas.getByRole("button", {
      name: "Expand right sidebar"
    }));
    // Past the toggle's own slide, and the transcript's easing with it.
    await waitFor(() => {
      const sliding = sidebar.querySelector(".right-sidebar-overview-card") != null || sidebar.getAnimations().length > 0 || getChatScrollport(canvasElement).getAnimations().length > 0;
      if (sliding) throw new Error("The sidebar is still sliding open");
    });
    const openWidth = sidebar.getBoundingClientRect().width;
    await expect(openWidth).toBeGreaterThan(200);
    const handle = sidebar.querySelector<HTMLElement>("[data-sidebar-resize-handle]")!;
    const start = handle.getBoundingClientRect();
    const pointer = {
      pointerId: 7,
      isPrimary: true,
      bubbles: true,
      clientY: start.top + 100
    };
    const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));
    handle.dispatchEvent(new PointerEvent("pointerdown", {
      ...pointer,
      clientX: start.left
    }));
    await nextFrame();
    const dragTo = (clientX: number) => async () => {
      document.dispatchEvent(new PointerEvent("pointermove", {
        ...pointer,
        clientX
      }));
      await nextFrame();
    };
    const closing = await sampleToggleFrames(canvasElement, dragTo(start.left + openWidth + 50));
    await expect(closing[closing.length - 1].sidebarWidth).toBe(0);
    await expect(closing[closing.length - 1].panel).toBe(false);
    const reservedPadding = closing[closing.length - 1].chatPadding;
    await expect(reservedPadding).toBeGreaterThan(100);
    for (const frame of closing) {
      await expect([0, openWidth]).toContain(frame.sidebarWidth);
      await expect([15, reservedPadding]).toContain(frame.chatPadding);
    }
    const opening = await sampleToggleFrames(canvasElement, dragTo(start.left));
    document.dispatchEvent(new PointerEvent("pointerup", {
      ...pointer,
      clientX: start.left
    }));
    await expect(opening[opening.length - 1].sidebarWidth).toBe(openWidth);
    for (const frame of opening) await expect([0, openWidth]).toContain(frame.sidebarWidth);
  }
}`,...ne.parameters?.docs?.source},description:{story:`Dragging the resize handle past the snap point collapses the sidebar, and dragging back
reopens it, at once: the width (and the transcript's room for the card) follows the pointer
instead of sliding behind it.`,...ne.parameters?.docs?.description}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  ...CollapsedOverview,
  decorators: [(Story: ComponentType) =>
  // On a wrapper, not :root, so the override cannot leak into later stories.
  <div className="contents" style={{
    "--titlebar-right-inset": "513px"
  } as CSSProperties}>
        <Story />
      </div>],
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Expand right sidebar"
    }, {
      timeout: 15_000
    }));
    const allTabs = await canvas.findByRole("button", {
      name: "All tabs"
    }, {
      timeout: 15_000
    });
    await waitFor(() => {
      // Like Playwright: bring it into view (the 1600px frame can be wider than the window),
      // again on each retry, since it mounts while the panel is still sliding in.
      allTabs.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
      if (!isHitTarget(allTabs)) throw new Error("All tabs is not under the pointer");
    });
  }
}`,...oe.parameters?.docs?.source},description:{story:`The shell's toggle bar reserves the full titlebar overlay inset, and the tab strip caps its own
(see TabsReachableUnderWideTitlebarInset), so under a wide inset the bar's box reaches over the
strip. Linux e2e reports 513px: its viewport is wider than the real window. The strip's
controls under the bar must still take clicks.`,...oe.parameters?.docs?.description}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => {
    const client = setupSimpleChatStory({
      workspaceId: PINNED_CLOSE_WORKSPACE_ID,
      workspaceName: "feature/pinned-close",
      experiments: {
        [EXPERIMENT_IDS.ARTIFACTS]: true
      },
      messages: [createUserMessage("msg-1", "Show me the report", {
        historySequence: 1
      })]
    });
    client.artifacts = {
      ...client.artifacts,
      list: () => Promise.resolve({
        success: true as const,
        data: {
          available: true,
          dir: "/scratch/artifacts",
          entries: [{
            path: PINNED_REPORT.path,
            kind: PINNED_REPORT.kind,
            size: PINNED_REPORT.size,
            modifiedMs: 1
          }],
          truncated: false
        }
      }),
      read: () => Promise.resolve({
        success: true as const,
        data: PINNED_REPORT
      })
    };
    writeArtifactSelection(PINNED_CLOSE_WORKSPACE_ID, {
      scope: "artifact",
      path: PINNED_REPORT.path,
      version: null
    });
    collapseLeftSidebar();
    seedSidebarLayout(PINNED_CLOSE_WORKSPACE_ID, ["artifacts"]);
    expandRightSidebar(PINNED_CLOSE_WORKSPACE_ID);
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidebar = await canvas.findByRole("complementary", {
      name: "Workspace insights"
    }, {
      timeout: 15_000
    });
    await userEvent.click(await within(sidebar).findByRole("button", {
      name: "Fullscreen"
    }, {
      timeout: 15_000
    }));
    const pinned = await canvas.findByRole("region", {
      name: "Artifact report.md"
    });
    await waitFor(() => expect(pinned).toHaveFocus());
    await userEvent.keyboard("{Control>}w{/Control}");
    const toggle = await canvas.findByRole("button", {
      name: "Expand right sidebar"
    });
    // A plain throw (not the instrumented expect), so a failure names where focus went.
    await waitFor(() => {
      const active = document.activeElement;
      if (active !== toggle) {
        throw new Error(\`Focus is on <\${active?.tagName.toLowerCase() ?? "none"}>, not the toggle\`);
      }
    });
  }
}`,...ie.parameters?.docs?.source},description:{story:`Cmd/Ctrl+W on the only tab while it is pinned (Artifacts fullscreen over the workspace shell)
closes the sidebar, and focus still ends on the sidebar toggle. The pinned view holds the
toggle inert until it unmounts with the tab.`,...ie.parameters?.docs?.description}}};const la=["CostsTab","CostsTabWithCacheCreate","CostsTabMultiModel","ReviewTab","StatsTabIdle","StatsTabStreaming","ReviewTabSortByLastEdit","ReviewTabSortByFileOrder","DiffPaddingAlignment","DiffPaddingAlignmentModification","ReviewTabReadMore","ReviewTabWithFileFilter","ReviewTabReadMoreBoundaries","ReviewTabWithUntrackedFiles","CompactionModelWarning","OutputTabEmpty","OutputTabWithLogs","OutputTabErrorsOnly","NewTabLauncher","NewTabLauncherNarrow","ManyTabsSingleRow","TabsReachableUnderWideTitlebarInset","SelectedTabFitsUnderTitlebarInset","CollapsedOverview","CollapsedOverviewYieldsToTranscript","CollapsingPanelTakesNoFocus","CollapsedEmptyOverviewReservesNothing","CollapsedOverviewRoomFollowsResize","ToggleStaysPutWhileSliding","ClosingLastTabSlidesOutEmpty","DragCollapseSnapsWithoutSliding","StripReachableUnderToggleBar","ClosingPinnedLastTabFocusesToggle"];export{se as ClosingLastTabSlidesOutEmpty,ie as ClosingPinnedLastTabFocusesToggle,ee as CollapsedEmptyOverviewReservesNothing,I as CollapsedOverview,te as CollapsedOverviewRoomFollowsResize,C as CollapsedOverviewYieldsToTranscript,Q as CollapsingPanelTakesNoFocus,G as CompactionModelWarning,A as CostsTab,P as CostsTabMultiModel,N as CostsTabWithCacheCreate,F as DiffPaddingAlignment,L as DiffPaddingAlignmentModification,ne as DragCollapseSnapsWithoutSliding,J as ManyTabsSingleRow,Y as NewTabLauncher,z as NewTabLauncherNarrow,K as OutputTabEmpty,V as OutputTabErrorsOnly,$ as OutputTabWithLogs,O as ReviewTab,j as ReviewTabReadMore,le as ReviewTabReadMoreBoundaries,M as ReviewTabSortByFileOrder,q as ReviewTabSortByLastEdit,U as ReviewTabWithFileFilter,H as ReviewTabWithUntrackedFiles,Z as SelectedTabFitsUnderTitlebarInset,D as StatsTabIdle,W as StatsTabStreaming,oe as StripReachableUnderToggleBar,X as TabsReachableUnderWideTitlebarInset,ae as ToggleStaysPutWhileSliding,la as __namedExportsOrder,ca as default};
