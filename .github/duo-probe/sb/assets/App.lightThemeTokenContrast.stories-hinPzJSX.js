import{j as l,S as u,f as ie,n as me,u as ne,R as ue,t as Ce,s as Ee,m as De,v as ge,x as We,y as _e}from"./iframe-DpCW2UOM.js";import{b as X,c as U,t as Fe,a as Me,d as he,f as $e}from"./contrast-Bnc7IxMq.js";import{s as ce}from"./settingsStoryUtils-D5wjZSky.js";import{s as z}from"./chatSetup-48_rCYsC.js";import{s as Be}from"./drafts-CZZSGIvH.js";import{c as Ie}from"./reviews-DadIuiKg.js";import{a as fe,P as Oe,A as d}from"./meta-BwRgvoZ6.js";import{a as J,c as Q}from"./messages-BbMCeQNx.js";import{a as le}from"./tools-Bd0lcXw4.js";import{c as ke,s as Pe}from"./orpc-DLtOjQkt.js";import{c as Ge,g as Ne}from"./workspaces-MVQPvkVv.js";import{d as Z}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./ConfirmationModal-DQrDMilx.js";import"./git-Ekgdg9se.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:xe,userEvent:V,waitFor:g,within:c}=__STORYBOOK_MODULE_TEST__,$t={...fe,title:"App/LightThemeTokenContrast"},qe=["--color-muted","--color-secondary"],de=e=>X(e,qe);async function ee(e,t){await g(()=>{const a=de(e);for(const[r,o]of Object.entries(t)){const s=a.filter(n=>n.token===r);if(s.length<o)throw new Error(`expected ${o}+ texts in ${r}, found ${s.length}`)}},{timeout:15e3}),await m(de(e).map(a=>({...a,label:a.token})))}async function m(e){const t=e.filter(a=>a.ratio<4.5).map(a=>`${a.label} ${a.ratio.toFixed(2)}:1 "${a.text}"`);await xe(t.join(`
`)).toBe("")}async function f(e,t,a){return g(()=>{const r=a().flatMap(o=>U(o).map(s=>({...s,label:e})));if(r.length<t)throw new Error(`expected ${t}+ ${e} texts, found ${r.length}`);return r},{timeout:15e3})}const p={...fe.parameters,pixel:Oe},S={globals:{theme:"light"},parameters:p,render:()=>l.jsx(d,{setup:()=>ke()}),play:async({canvasElement:e})=>{await c(e).findByText("No projects",{},{timeout:15e3}),await ee(e,{})}},He=`diff --git a/src/app.ts b/src/app.ts
index 1111111..2222222 100644
--- a/src/app.ts
+++ b/src/app.ts
@@ -1,3 +1,4 @@
 export function start() {
+  console.log("ready");
   return true;
 }
`;function we(e){const t=z({workspaceId:"ws-light-tokens",workspaceName:"feature/light-tokens",projectName:"my-app",messages:[J("u1","Add a ready log to start().",{historySequence:1,timestamp:u-6e4}),Q("a1","Added the log line in src/app.ts.",{historySequence:2,timestamp:u})],gitDiff:{diffOutput:He,numstatOutput:"1	0	src/app.ts"},userPreferences:e.flatSidebar?{ui:{sidebarFlatMode:!0}}:void 0});return ie(),me("ws-light-tokens"),ne(ue,"review"),t}async function ye(e){await c(e).findByText("Added the log line in src/app.ts.",{},{timeout:15e3})}const Se=(e,t)=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:()=>we({flatSidebar:!1})}),play:async({canvasElement:a})=>{await ye(a),await ee(a,{[t]:3})}}),b=Se("light","--color-muted"),A=Se("flexoki-light","--color-secondary"),T={globals:{theme:"light"},parameters:p,render:()=>l.jsx(d,{setup:()=>we({flatSidebar:!0})}),play:async({canvasElement:e})=>{await ye(e),await c(e).findByText("New chat",{},{timeout:15e3}),await ee(e,{"--color-muted":4})}},w=[...Ce.map(([e])=>e),"#000000","#ffffff"],se=e=>`avatar-${e.replace("#","hex-").toLowerCase()}`;function Ke(){const e=w.map(a=>Ge({id:`ws-${se(a)}`,name:`chat-${se(a)}`,projectName:se(a)})),t=Ne(e);for(const[a,r]of w.entries()){const o=e[a].projectPath,s=t.get(o);if(!s)throw new Error(`no project config for ${o}`);t.set(o,{...s,color:r}),Be(o,[{draftId:`draft-${a}`,workspaceName:`draft-${a}`}])}return Ee(e[0]),ie(),ke({projects:t,workspaces:e,userPreferences:{ui:{sidebarFlatMode:!0}}})}async function Ue(e){const t=await g(()=>{const a=[...e.querySelectorAll('[data-testid^="workspace-project-avatar-"]')],r=a.filter(o=>o.dataset.testid?.includes("-draft-"));if(a.length-r.length<w.length||r.length<w.length)throw new Error(`expected ${w.length} chat and draft avatars, found ${a.length}`);return a},{timeout:15e3});await m(t.map(a=>({element:a,text:a.textContent??"",ratio:Me(a),label:a.dataset.testid??"project avatar"})))}const te=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:Ke}),play:async({canvasElement:t})=>{await Ue(t)}}),v=te("light"),L=te("flexoki-light"),j=te("dark"),R=te("flexoki-dark"),C={globals:{theme:"light"},parameters:p,render:()=>l.jsx(d,{setup:()=>ce({})}),play:async({canvasElement:e})=>{const t=await Z(e);await ee(t,{"--color-muted":3})}},k={globals:{theme:"light"},parameters:p,render:()=>l.jsx(d,{setup:()=>ce({})}),play:async({canvasElement:e})=>{const t=await Z(e);await V.click(c(t).getByRole("button",{name:"Models"}));const a=await g(()=>{const r=X(t,["--color-muted-light"]);if(r.length<5)throw new Error(`expected 5+ muted-light texts, found ${r.length}`);return r},{timeout:15e3});await m(a.map(r=>({...r,label:r.token})))}},Ve=["Renamed `startServer` and added a retry:","","```ts","// Retry the listen call before giving up.","export function startServer(port: number, retries = 3): boolean {",'  const label = "server";',"  if (retries > 0) return true;","  return false;","}","```"].join(`
`),Ye=`diff --git a/src/server.ts b/src/server.ts
index 1111111..2222222 100644
--- a/src/server.ts
+++ b/src/server.ts
@@ -1,4 +1,4 @@
-// Start once, no retry.
-export function start(port: number, retries = 0) {
+// Retry the listen call before giving up.
+export function startServer(port: number, retries = 3) {
   return true;
 }
`,pe=Ie("review-gutter","src/server.ts","-2-3 +1","Check the retry count.","pending",u);function ae(e,t=!1){t&&Pe("ws-light-code",{reviews:{[pe.id]:pe}});const a=z({workspaceId:"ws-light-code",workspaceName:"feature/light-code",projectName:"my-app",messages:[J("u1","Rename `start` and add a retry.",{historySequence:1,timestamp:u-6e4}),Q("a1",Ve,{historySequence:2,timestamp:u})],gitDiff:{diffOutput:Ye,numstatOutput:"2	2	src/server.ts"},sessionUsage:{byModel:{"anthropic:claude-sonnet-4-20250514":{input:{tokens:12e3,cost_usd:.04},cached:{tokens:0,cost_usd:0},cacheCreate:{tokens:0,cost_usd:0},output:{tokens:3e3,cost_usd:.05},reasoning:{tokens:0,cost_usd:0},model:"anthropic:claude-sonnet-4-20250514"}},version:1}});return ie(),me("ws-light-code"),ne(ue,e),ne(De("ws-light-code"),null),a}const Y=e=>[...e.querySelectorAll("span[style]")].filter(t=>/^color:#[0-9a-f]{6}/i.test(t.getAttribute("style")??"")&&t.textContent?.trim()),be=e=>{const t=e.closest("[data-diff-indicator] ~ span");return t!=null&&getComputedStyle(t).backgroundImage!=="none"},Ae=e=>[...e.querySelectorAll('[role="tab"][aria-selected="true"]')];async function Xe(e){await c(e).findByText("Renamed",{exact:!1},{timeout:15e3}),await g(()=>{const i=Y(e);for(const h of["--color-success","--color-danger"])if(!i.some(y=>y.closest(`[style*="${h}"]`)))throw new Error(`no highlighted token on a ${h} diff line yet`);if(!i.some(be))throw new Error("no highlighted token on a review-highlighted line yet")});const t=await f("highlighted token",8,()=>Y(e)),a=await f("inline code",2,()=>[...e.querySelectorAll(".markdown-content code")].filter(i=>!i.closest("pre"))),r=await f("selected tab",2,()=>Ae(e)),o=await f("branch name",2,()=>c(e).queryAllByText("feature/light-code"));await m([...t,...a,...r,...o]);const s=Object.values(ge[We]),n=t.flatMap(i=>s.map(h=>({element:i.element,text:`${h} behind "${i.text}"`,ratio:he(h,i.element),label:"min-light replacement"})));await m(n)}const ze={"+":"add","−":"remove","":"context"};async function Je(e){const t=await g(()=>{const a=[],r=new Set;for(const o of e.querySelectorAll("[data-diff-indicator]")){const s=o.previousElementSibling;if(!(s instanceof HTMLElement))continue;const n=ze[o.textContent?.trim()??""];if(!n)continue;const i=getComputedStyle(o).backgroundImage;if(i!=="none"&&!$e(i))throw new Error(`unread highlight ${i}`);const h=i==="none"?"plain":"highlighted",y=[...U(o),...U(s)];y.length!==0&&(r.add(`${n} ${h}`),a.push(...y.map(Re=>({...Re,label:`${n} ${h} gutter`}))))}for(const o of["add","remove","context"])for(const s of["plain","highlighted"])if(!r.has(`${o} ${s}`))throw new Error(`no ${o} ${s} diff line yet`);return a},{timeout:15e3});await m(t)}const Te=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:()=>ae("review",!0)}),play:async({canvasElement:t})=>{await Xe(t)}}),E=Te("light"),D=Te("flexoki-light"),re=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:()=>ae("review",!0)}),play:async({canvasElement:t})=>{await Je(t)}});async function Qe(e){await c(e).findByText("Renamed",{exact:!1},{timeout:15e3}),await g(()=>{if(!Y(e).some(be))throw new Error("no highlighted token on a review-highlighted line yet")});const t=await f("highlighted token",8,()=>Y(e));await m(t);const a=Object.values(ge[_e]);await m(t.flatMap(r=>a.map(o=>({element:r.element,text:`${o} behind "${r.text}"`,ratio:he(o,r.element),label:"min-dark replacement"}))))}const ve=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:()=>ae("review",!0)}),play:async({canvasElement:t})=>{await Qe(t)}}),W=ve("dark"),_=ve("flexoki-dark"),F=re("light"),M=re("flexoki-light"),$=re("dark"),B=re("flexoki-dark"),Le=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:()=>ae("costs")}),play:async({canvasElement:t})=>{const r=await c(t).findByText("Cost",{selector:"button"},{timeout:15e3}),o=await f("selected tab",2,()=>Ae(t));await m([...o,...U(r).map(s=>({...s,label:"selected Stats pill"}))])}}),I=Le("light"),O=Le("flexoki-light");function Ze(){return z({workspaceId:"ws-dark-secondary",workspaceName:"feature/dark-secondary",projectName:"my-app",messages:[J("u1","Write tests for this component.",{historySequence:1,timestamp:u-6e4}),Q("a1","Loading the project skills first.",{historySequence:2,timestamp:u-5e4,toolCalls:[le("tc-1","tests",{description:"Testing doctrine, commands, and test layout conventions",scope:"project"}),le("tc-2","react-effects",{description:"Guidelines for when to use (and avoid) useEffect in React",scope:"project"})]})]})}const je=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:Ze}),play:async({canvasElement:t})=>{const r=await c(t).findByRole("textbox",{name:"Message"},{timeout:15e3});await V.click(r),await V.keyboard("/");const o=t.ownerDocument.body;await c(o).findByRole("listbox",{name:"Slash command suggestions"});const s=await g(()=>{const n=X(o,["--color-secondary"]);if(n.length<10)throw new Error(`expected 10+ secondary texts, found ${n.length}`);return n},{timeout:15e3});await m(s.map(n=>({...n,label:n.token})))}}),P=je("dark"),G=je("flexoki-dark");function et(){return z({workspaceId:"ws-dark-accent",workspaceName:"feature/dark-accent",projectName:"my-app",messages:[J("u1","Where is the setup guide?",{historySequence:1,timestamp:u-6e4}),Q("a1","See the [setup guide](https://example.com/setup) and the [release notes](https://example.com/notes).",{historySequence:2,timestamp:u})]})}const oe=e=>({globals:{theme:e},parameters:p,render:()=>l.jsx(d,{setup:et}),play:async({canvasElement:t})=>{const a=await f("markdown link",2,()=>[...t.querySelectorAll(".markdown-content a")]),r=await Z(t),o=await f("selected Settings section",1,()=>[c(r).getByRole("button",{name:"General"})]);await m([...a,...o])}}),N=oe("light"),q=oe("flexoki-light"),H=oe("dark"),K=oe("flexoki-dark"),x={globals:{theme:"dark"},parameters:p,render:()=>l.jsx(d,{setup:()=>ce({})}),play:async({canvasElement:e})=>{const t=await Z(e);await V.click(await c(t).findByRole("button",{name:"Agents"})),await c(t).findByRole("group",{name:"Exec defaults"});const a=()=>X(t,["--color-muted"]).map(r=>r.element);await g(()=>{if(a().length<5)throw new Error("expected 5+ muted texts on the Agents cards")}),await xe(Fe(a,["dark","flexoki-dark"]).join(`
`)).toBe("")}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  },
  parameters: lightContract,
  render: () => <AppWithMocks setup={() => createMockORPCClient()} />,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByText("No projects", {}, {
      timeout: 15_000
    });
    // No minimum: home shows no muted or secondary text (the sidebar toggle is an icon), and the
    // scan still checks any that a later change adds.
    await expectTokenTextsReadable(canvasElement, {});
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'workspaceWithSidebarsStory("light", "--color-muted")',...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'workspaceWithSidebarsStory("flexoki-light", "--color-secondary")',...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  },
  parameters: lightContract,
  render: () => <AppWithMocks setup={() => setupWorkspaceWithSidebars({
    flatSidebar: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await waitForWorkspace(canvasElement);
    await within(canvasElement).findByText("New chat", {}, {
      timeout: 15_000
    });
    await expectTokenTextsReadable(canvasElement, {
      "--color-muted": 4
    });
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'projectAvatarStory("light")',...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:'projectAvatarStory("flexoki-light")',...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'projectAvatarStory("dark")',...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:'projectAvatarStory("flexoki-dark")',...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  },
  parameters: lightContract,
  render: () => <AppWithMocks setup={() => setupSettingsStory({})} />,
  play: async ({
    canvasElement
  }) => {
    const dialog = await openSettingsDialog(canvasElement);
    await expectTokenTextsReadable(dialog, {
      "--color-muted": 3
    });
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  },
  parameters: lightContract,
  render: () => <AppWithMocks setup={() => setupSettingsStory({})} />,
  play: async ({
    canvasElement
  }) => {
    const dialog = await openSettingsDialog(canvasElement);
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Models"
    }));
    const found = await waitFor(() => {
      const texts = tokenTextContrasts(dialog, ["--color-muted-light"]);
      if (texts.length < 5) throw new Error(\`expected 5+ muted-light texts, found \${texts.length}\`);
      return texts;
    }, {
      timeout: 15_000
    });
    await expectReadable(found.map(entry => ({
      ...entry,
      label: entry.token
    })));
  }
}`,...k.parameters?.docs?.source},description:{story:"Light `--color-muted-light` text in Settings > Models: model rows label their aliases and\nlimits with it. It now aliases `--color-muted`, so the texts match both tokens (#5984).",...k.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'codeStory("light")',...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'codeStory("flexoki-light")',...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:'darkCodeStory("dark")',...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'darkCodeStory("flexoki-dark")',..._.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:'diffGutterStory("light")',...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:'diffGutterStory("flexoki-light")',...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:'diffGutterStory("dark")',...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:'diffGutterStory("flexoki-dark")',...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:'statsStory("light")',...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:'statsStory("flexoki-light")',...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:'darkSecondaryStory("dark")',...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:'darkSecondaryStory("flexoki-dark")',...G.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:'accentLinkStory("light")',...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:'accentLinkStory("flexoki-light")',...q.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:'accentLinkStory("dark")',...H.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:'accentLinkStory("flexoki-dark")',...K.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  parameters: lightContract,
  render: () => <AppWithMocks setup={() => setupSettingsStory({})} />,
  play: async ({
    canvasElement
  }) => {
    const dialog = await openSettingsDialog(canvasElement);
    await userEvent.click(await within(dialog).findByRole("button", {
      name: "Agents"
    }));
    await within(dialog).findByRole("group", {
      name: "Exec defaults"
    });
    // Read the muted texts per theme: the token resolves to a different color in each one.
    const mutedTexts = () => tokenTextContrasts(dialog, ["--color-muted"]).map(e => e.element);
    await waitFor(() => {
      if (mutedTexts().length < 5) throw new Error("expected 5+ muted texts on the Agents cards");
    });
    await expect(textsBelowAaInThemes(mutedTexts, ["dark", "flexoki-dark"]).join("\\n")).toBe("");
  }
}`,...x.parameters?.docs?.source},description:{story:"Every `--color-muted` text on the Settings > Agents cards (`bg-background-secondary`) reaches\n4.5:1 in dark and flexoki-dark. Dark muted at 53% was 4.16:1 on these cards.",...x.parameters?.docs?.description}}};const Bt=["Home","WorkspaceWithSidebars","WorkspaceWithSidebarsFlexokiLight","WorkspaceWithFlatSidebar","ProjectAvatarsLight","ProjectAvatarsFlexokiLight","ProjectAvatarsDark","ProjectAvatarsFlexokiDark","Settings","MutedLightModels","CodeLight","CodeFlexokiLight","CodeDark","CodeFlexokiDark","DiffGutterLight","DiffGutterFlexokiLight","DiffGutterDark","DiffGutterFlexokiDark","StatsLight","StatsFlexokiLight","SecondaryTextDark","SecondaryTextFlexokiDark","AccentLinksLight","AccentLinksFlexokiLight","AccentLinksDark","AccentLinksFlexokiDark","MutedOnRaisedSurfacesDark"];export{H as AccentLinksDark,K as AccentLinksFlexokiDark,q as AccentLinksFlexokiLight,N as AccentLinksLight,W as CodeDark,_ as CodeFlexokiDark,D as CodeFlexokiLight,E as CodeLight,$ as DiffGutterDark,B as DiffGutterFlexokiDark,M as DiffGutterFlexokiLight,F as DiffGutterLight,S as Home,k as MutedLightModels,x as MutedOnRaisedSurfacesDark,j as ProjectAvatarsDark,R as ProjectAvatarsFlexokiDark,L as ProjectAvatarsFlexokiLight,v as ProjectAvatarsLight,P as SecondaryTextDark,G as SecondaryTextFlexokiDark,C as Settings,O as StatsFlexokiLight,I as StatsLight,T as WorkspaceWithFlatSidebar,b as WorkspaceWithSidebars,A as WorkspaceWithSidebarsFlexokiLight,Bt as __namedExportsOrder,$t as default};
