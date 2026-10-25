import{j as v,S as g,D as P,s as $,c as A,a as F,e as K,b as et,f as at}from"./iframe-C48Cgo5e.js";import{a as it,A as M}from"./meta-BMDQogfB.js";import{c as z}from"./activityFeed-Btvgg14-.js";import{c as _}from"./orpc-qlMSh58E.js";import{c as W}from"./messages-Bf7rPDB1.js";import{c as I,g as Q}from"./workspaces-DZcvJb83.js";import{c as ot,o as X}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";const{expect:t,userEvent:R,waitFor:B,within:S}=__STORYBOOK_MODULE_TEST__,Ot={...it,title:"App/ChatLoading"};async function L(a){await t(a.parameters).toMatchObject({pixel:{matrix:{viewports:t.arrayContaining(["phone"])}}}),await B(()=>t(S(a.canvasElement).getByTestId("chat-loading-phone").getBoundingClientRect().width).toBe(390))}async function x(a,r){at(),await X(a);const n=await B(async()=>{const p=a.querySelector('[data-workspace-id="'+r+'"][role="button"]');return await t(p).not.toBeNull(),p});await R.click(n),A()}async function c(a,r=!0){const n=S(a);await B(async()=>{const p=n.getByRole("log");await t(p).toBeVisible(),await t(p).toHaveAttribute("aria-busy",String(r)),await t(n.getByTestId("message-window")).toHaveAttribute("data-loaded",String(!r)),await t(getComputedStyle(p).paddingBottom).toBe("0px");const d=n.queryByTestId("transcript-loading-status");if(r&&!n.queryByTestId("transcript-hydration-placeholder")){await t(d).toBeVisible(),await t(d).toHaveAttribute("role","status");const i=d.getBoundingClientRect(),y=n.getByTestId("chat-composer-dock").getBoundingClientRect();await t(i.top).toBe(y.top),await t(i.height).toBeGreaterThan(0),await t(i.bottom).toBeLessThanOrEqual(y.bottom)}else await t(d).toBeNull();const s=a.querySelector('[data-component="ChatInputSurface"], [data-testid="chat-composer-dock"] [role="note"]').getBoundingClientRect();await t(s.left).toBeGreaterThanOrEqual(a.getBoundingClientRect().left),await t(s.right).toBeLessThanOrEqual(a.getBoundingClientRect().right)})}async function D(a,r){const n=S(a),p=n.getByTestId("chat-composer-dock"),d=n.getByText("Previously loaded response."),f=n.getByTestId("message-window"),s={dockHeight:p.getBoundingClientRect().height,messageTop:d.getBoundingClientRect().top,scrollHeight:f.scrollHeight},i=n.getByText("Compact tail reasoning.");await t(i).toBeVisible(),await t(i.getBoundingClientRect().bottom).toBeLessThanOrEqual(p.getBoundingClientRect().top),r(),await c(a,!1),await new Promise(l=>requestAnimationFrame(()=>requestAnimationFrame(()=>l()))),await t(p.getBoundingClientRect().height).toBe(s.dockHeight);const y=await n.findByText("Previously loaded response.");await t(y.getBoundingClientRect().top,"cached message position").toBe(s.messageTop),await t(f.scrollHeight).toBe(s.scrollHeight)}function G(a){const r=I({id:a,name:"loading-history",projectName:"xum"}),n=I({id:a+"-other",name:"caught-up-history",projectName:"xum"}),p=I({id:a+"-monitor",name:"waiting-on-monitor",projectName:"xum"}),d=I({id:a+"-transcript",name:"read-only-history",projectName:"xum",transcriptOnly:!0}),f=[r,n,p,d],s=W("history",Array.from({length:20},(o,m)=>`Earlier response paragraph ${m+1}.`).join(`

`)+`

Previously loaded response.`,{historySequence:1});s.parts.push({type:"reasoning",text:"Compact tail reasoning."});let i,y,l=0,u=0,h;function w(){l=0,u=0;const o=z();y=o.emit,$(r),A(),F(),K([r.projectPath]);const m=_({projects:Q(f),workspaces:f,workspaceActivitySnapshots:{[p.id]:{recency:g,streaming:!1,lastModel:null,lastThinkingLevel:null,activeBashMonitorCount:1}},onChat:(e,b)=>{e===r.id?(i=b,l+=1):e===p.id?b(s):e===d.id?(h=b,u+=1,u===1&&(b(s),b({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1,cursor:{history:{messageId:s.id,historySequence:1}}}))):(b(W("other-history","Another workspace response.",{historySequence:1})),b({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1}))}});return m.workspace.activity.subscribe=o.subscribe,m}return{render:()=>v.jsx(M,{setup:w}),play:async({canvasElement:o,step:m})=>{const e=S(o),b=()=>S(e.getByTestId("message-window")).queryAllByRole("status");await m("First fetch is visible before the transcript and decorations reveal",async()=>{await c(o),await t(e.getByTestId("transcript-hydration-placeholder")).toBeVisible(),await t(b()).toHaveLength(1),await t(b()[0]).toBe(e.getByTestId("transcript-hydration-placeholder")),await t(e.getByRole("textbox")).toBeEnabled(),i({type:"stream-lifecycle",workspaceId:r.id,phase:"preparing",hadAnyOutput:!1}),await t(await e.findByRole("button",{name:"Stop streaming"})).toBeVisible(),await c(o),await t(e.getByTestId("transcript-hydration-placeholder")).toBeVisible(),await t(e.queryByTestId("transcript-loading-status")).toBeNull(),i({type:"stream-lifecycle",workspaceId:r.id,phase:"idle",hadAnyOutput:!1}),await t(await e.findByTestId("transcript-hydration-placeholder")).toBeVisible(),i({type:"init-start",hookPath:"/project/.xum/init",timestamp:g,replay:!0}),await t((await e.findAllByText(/Creating workspace/))[0]).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),i({type:"init-end",exitCode:0,timestamp:g,replay:!0}),await t(await e.findByTestId("transcript-hydration-placeholder")).toBeVisible(),await t(e.queryByText(/Workspace created/)).toBeNull(),await t(e.queryByTestId("transcript-loading-status")).toBeNull(),i(s),i({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1,cursor:{history:{messageId:s.id,historySequence:1}}}),await c(o,!1),await t(await e.findByText("Previously loaded response.",{},{timeout:5e3})).toBeVisible(),await t(await e.findByText(/Workspace created/)).toBeVisible(),await t(b()).toHaveLength(0)}),await m("Switching away settles the transcript; revisiting preserves cached rows during replay",async()=>{await x(o,n.id),await t(await e.findByText("Another workspace response.",{},{timeout:5e3})).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),await x(o,r.id),await B(()=>t(l).toBe(2)),await c(o),await t(e.getByText("Previously loaded response.")).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),await t(b()).toHaveLength(1),await t(b()[0]).toBe(e.getByTestId("transcript-loading-status"));const q=e.getByTestId("message-window");await t(q.scrollHeight).toBeGreaterThan(q.clientHeight),q.dispatchEvent(new WheelEvent("wheel",{deltaY:-100,bubbles:!0})),q.scrollTop=0,q.dispatchEvent(new Event("scroll"));const tt=await e.findByRole("button",{name:/Jump to bottom/});await c(o),await R.click(tt),await c(o),await D(o,()=>{i(s),i({type:"caught-up",historyReplayStatus:"complete",replay:"since",hasOlderHistory:!1,cursor:{history:{messageId:s.id,historySequence:1}}})}),await x(o,n.id),await t(await e.findByText("Another workspace response.")).toBeVisible(),await x(o,r.id),await B(()=>t(l).toBe(3)),await c(o)}),await m("Active turns retain replay shimmer alongside their controls",async()=>{i({type:"init-start",hookPath:"/project/.xum/init",timestamp:g,replay:!0}),i({type:"init-output",line:"Preparing workspace",step:!0,isError:!1,timestamp:g,replay:!0}),await t((await e.findAllByText(/Creating workspace/))[0]).toBeVisible(),await t(await e.findByText("Preparing workspace")).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),i({type:"init-end",exitCode:0,timestamp:g,replay:!0}),await t(await e.findByText(/Workspace created/)).toBeVisible(),await c(o),i({type:"stream-lifecycle",workspaceId:r.id,phase:"preparing",hadAnyOutput:!1}),await t(await e.findByRole("button",{name:"Stop streaming"})).toBeVisible(),await c(o),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),i({type:"stream-start",workspaceId:r.id,messageId:"stream",model:P,historySequence:2,startTime:g}),await t(await e.findByText(/ streaming$/)).toBeVisible(),await c(o),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),i(s),i({type:"caught-up",historyReplayStatus:"complete",replay:"since",hasOlderHistory:!1,cursor:{history:{messageId:s.id,historySequence:1}}}),i({type:"stream-delta",workspaceId:r.id,messageId:"stream",delta:"Live response.",tokens:3,timestamp:g}),await t(await e.findByText("Live response.")).toBeVisible(),await t(e.getByRole("log")).toHaveAttribute("aria-busy","true"),await t(e.queryByTestId("transcript-loading-status")).toBeNull(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),i({type:"stream-end",workspaceId:r.id,messageId:"stream",metadata:{model:P},parts:[{type:"text",text:"Live response."}]}),i({type:"stream-lifecycle",workspaceId:r.id,phase:"idle",hadAnyOutput:!0})}),await m("A monitor barrier stays docked beside the replay skeleton",async()=>{await x(o,p.id),await t(await e.findByText(/Waiting on background bash monitor/,{},{timeout:5e3})).toBeVisible(),await c(o),await t(e.getByTestId("transcript-hydration-placeholder")).toBeVisible(),await t(e.queryByTestId("transcript-loading-status")).toBeNull()}),await m("Read-only cached transcripts stay stable during replay",async()=>{await x(o,d.id),await t(await e.findByText("Previously loaded response.",{},{timeout:5e3})).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),await x(o,n.id),await t(await e.findByText("Another workspace response.")).toBeVisible(),await x(o,d.id),await B(()=>t(u).toBe(2)),await c(o),await t(e.getByText("Previously loaded response.")).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),await t(e.queryByRole("textbox")).toBeNull(),await D(o,()=>{h(s),h({type:"caught-up",historyReplayStatus:"complete",replay:"since",hasOlderHistory:!1,cursor:{history:{messageId:s.id,historySequence:1}}})}),await c(o,!1),await t(e.getByText("Previously loaded response.")).toBeVisible()}),await m("Switching back to a workspace that streamed in the background keeps cached rows painted during the since replay",async()=>{await x(o,n.id),await t(await e.findByText("Another workspace response.",{},{timeout:5e3})).toBeVisible(),y(r.id,{recency:g+1,streaming:!0,streamingGeneration:2,lastModel:P,lastThinkingLevel:null}),await x(o,r.id),await B(()=>t(l).toBe(4)),await t(await e.findByRole("button",{name:"Stop streaming"})).toBeVisible(),await c(o),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),await t(e.getByText("Previously loaded response.")).toBeVisible(),await t(e.getByTestId("transcript-loading-status")).toBeVisible(),i(s),i({type:"caught-up",historyReplayStatus:"complete",replay:"since",hasOlderHistory:!1,cursor:{history:{messageId:s.id,historySequence:1}}}),await c(o,!1),await t(await e.findByText("Previously loaded response.")).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),y(r.id,{recency:g+2,streaming:!1,streamingGeneration:2,lastModel:P,lastThinkingLevel:null})}),await m("A later replay remains busy without shifting or clearing previously cached messages",async()=>{await x(o,n.id),await t(await e.findByText("Another workspace response.",{},{timeout:5e3})).toBeVisible(),await x(o,r.id),await B(()=>t(l).toBe(5)),await c(o),await t(e.getByText("Previously loaded response.")).toBeVisible(),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull(),i({type:"stream-lifecycle",workspaceId:r.id,phase:"preparing",hadAnyOutput:!1}),await t(await e.findByRole("button",{name:"Stop streaming"})).toBeVisible(),await c(o),await t(e.queryByTestId("transcript-hydration-placeholder")).toBeNull()})}}}const C={...G("ws-loading-desktop"),parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}}},J=G("ws-loading-phone"),k={...J,play:async a=>{await L(a),await J.play(a)},decorators:[a=>v.jsx("div",{"data-testid":"chat-loading-phone",style:{width:390,maxWidth:"100%",height:"100vh",overflow:"hidden"},children:v.jsx(a,{})})],globals:{viewport:{value:"phone",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}},viewport:{options:{phone:{name:"Phone",styles:{width:"390px",height:"844px"},type:"mobile"}}}}},V={...k,...G("ws-loading-initial-phone"),globals:{...k.globals,theme:"light"},parameters:{...k.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async a=>{await L(a),await c(a.canvasElement);const r=S(a.canvasElement).getByTestId("transcript-hydration-placeholder");await t(r).toBeVisible(),await t(r.getBoundingClientRect().top).toBeGreaterThanOrEqual(0)}};function Z(a){const r=I({id:a,name:"streaming-replay",projectName:"xum"});let n;function p(){return $(r),A(),F(),_({projects:Q([r]),workspaces:[r],onChat:(d,f)=>{n=f}})}return{render:()=>v.jsx(M,{setup:p}),play:async({canvasElement:d,step:f})=>{const s=S(d);await B(()=>t(typeof n).toBe("function")),await c(d),await ot(s.getByRole("log")),await t(s.getByTestId("transcript-hydration-placeholder")).toBeVisible(),n({type:"stream-lifecycle",workspaceId:a,phase:"preparing",hadAnyOutput:!1});const i=await s.findByRole("button",{name:"Stop streaming"}),y=await s.findByText(/starting\.\.\./),l=s.getByTestId("message-window"),u=()=>({statusLeft:y.getBoundingClientRect().left,statusTop:y.getBoundingClientRect().top,stopRight:i.getBoundingClientRect().right,stopTop:i.getBoundingClientRect().top});await new Promise(T=>requestAnimationFrame(()=>requestAnimationFrame(()=>T())));const h=u(),w=async()=>{await t(u()).toEqual(h),await t(i.getBoundingClientRect().right).toBeLessThanOrEqual(l.getBoundingClientRect().right),await t(y.getBoundingClientRect().left).toBeGreaterThanOrEqual(l.getBoundingClientRect().left),await t(i.getBoundingClientRect().bottom).toBeLessThanOrEqual(l.getBoundingClientRect().bottom)};await f("Skeleton and short history share the same live-control position",async()=>{await w();const T=[];let o=0;const m=()=>{T.push(u()),o=requestAnimationFrame(m)};o=requestAnimationFrame(m);try{n(W("history","Replayed response.",{historySequence:1})),n({type:"stream-start",workspaceId:a,messageId:"stream",model:P,historySequence:2,startTime:g}),n({type:"caught-up",hasOlderHistory:!1,historyReplayStatus:"complete"}),await t(await s.findByText("Replayed response.")).toBeVisible(),await B(()=>t(l).toHaveAttribute("data-loaded","true")),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),await w();for(const e of T)await t(e).toEqual(h)}finally{cancelAnimationFrame(o)}}),await f("Growing output and scrolling history leave Stop in place",async()=>{n({type:"stream-delta",workspaceId:a,messageId:"stream",delta:Array.from({length:30},(T,o)=>"Streaming paragraph "+(o+1)+".").join(`

`),tokens:1e4,timestamp:g}),await t(await s.findByText(/Streaming paragraph 30\./,{},{timeout:1e4})).toBeVisible(),await new Promise(T=>requestAnimationFrame(()=>requestAnimationFrame(()=>T()))),await w(),l.dispatchEvent(new WheelEvent("wheel",{deltaY:-100,bubbles:!0})),l.scrollTop=0,l.dispatchEvent(new Event("scroll")),await t(await s.findByRole("button",{name:/Jump to bottom/})).toBeVisible(),await w(),await R.click(s.getByRole("button",{name:/Jump to bottom/}))})}}}const H={...Z("ws-streaming-hydration"),globals:{viewport:{value:"laptop",isRotated:!1}},parameters:{...C.parameters,viewport:{options:{laptop:{name:"Laptop",styles:{width:"1200px",height:"900px"},type:"desktop"}}}}},U=Z("ws-streaming-hydration-phone"),O={...k,...U,play:async a=>{await L(a),await U.play(a)}};function E(){const a="/home/user/projects/xum",r="Add a dark mode toggle",n="dark-mode-toggle";let p=()=>{},d=()=>{};function f(){et(),A(),F(),K([a]);const i=new Promise(h=>{p=h}),y=new Promise(h=>{d=h}),l=_({projects:new Map([[a,{workspaces:[],trusted:!0}]]),workspaces:[],onChat:(h,w)=>{h.startsWith("ws-created-")&&(w({type:"init-start",hookPath:a+"/.xum/init",timestamp:g}),w({type:"init-output",line:"Preparing checkout",step:!0,isError:!1,timestamp:g}),w({type:"init-output",line:"Running .xum/init",step:!0,isError:!1,timestamp:g}),w({type:"caught-up",historyReplayStatus:"complete",replay:"full",hasOlderHistory:!1}))}});l.nameGeneration.generate=async()=>(await i,{success:!0,data:{name:n,title:"Dark mode toggle",modelUsed:"mock"}});const u=l.workspace.create;return l.workspace.create=async h=>(await y,u(h)),l.workspace.activity.subscribe=z().subscribe,l}return{render:()=>v.jsx(M,{setup:f}),play:async({canvasElement:i,step:y})=>{const l=S(i),u=()=>i.querySelector("textarea");await y("Open the project creation view",async()=>{await X(i);const h=await B(async()=>{const w=i.querySelector('[data-project-path="'+a+'"][aria-controls]');return await t(w).not.toBeNull(),w});await R.click(h),A(),await B(async()=>{await t(u()).not.toBeNull(),await t(u()).toBeEnabled()})}),await y("Sending only locks the composer; the project page shows no transcript",async()=>{await R.click(u()),await R.type(u(),r),await R.click(l.getByRole("button",{name:"Send message"})),await B(async()=>{await t(u()).toBeDisabled()}),p(),await t(i.querySelector('[data-testid="chat-message"]')).toBeNull(),await t(l.queryByText(/Creating workspace/)).toBeNull(),await t(l.queryByTestId("message-window")).toBeNull()}),await y("The new workspace opens with the message above the live creation card",async()=>{d();const h=await l.findByTestId("message-window",{},{timeout:5e3});await B(async()=>{const w=Array.from(h.querySelectorAll('[data-testid="chat-message"]'));await t(w.length).toBeGreaterThanOrEqual(2),await t(w[0].textContent).toContain(r),await t(w[1].textContent).toContain("Creating workspace")}),await t(await l.findByText("Running .xum/init")).toBeVisible()})}}}const N={...E(),parameters:{pixel:{matrix:{viewports:["laptop"]}}}},Y=E(),j={...Y,play:async a=>{await L(a),await Y.play(a)},decorators:[a=>v.jsx("div",{"data-testid":"chat-loading-phone",style:{width:390,maxWidth:"100%",height:"100vh",overflow:"hidden"},children:v.jsx(a,{})})],globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...createHydrationStory("ws-loading-desktop"),
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...phoneHydration,
  play: async context => {
    await checkPhoneViewport(context);
    await phoneHydration.play!(context);
  },
  decorators: [Story => <div data-testid="chat-loading-phone" style={{
    width: 390,
    maxWidth: "100%",
    height: "100vh",
    overflow: "hidden"
  }}>
        <Story />
      </div>],
  globals: {
    viewport: {
      value: "phone",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    },
    viewport: {
      options: {
        phone: {
          name: "Phone",
          styles: {
            width: "390px",
            height: "844px"
          },
          type: "mobile"
        }
      }
    }
  }
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...Phone,
  ...createHydrationStory("ws-loading-initial-phone"),
  globals: {
    ...Phone.globals,
    theme: "light"
  },
  parameters: {
    ...Phone.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async context => {
    await checkPhoneViewport(context);
    await checkTranscriptLayout(context.canvasElement);
    const skeleton = within(context.canvasElement).getByTestId("transcript-hydration-placeholder");
    await expect(skeleton).toBeVisible();
    // A fixed-height phone canvas can autofocus-scroll the initial shimmer out of view.
    await expect(skeleton.getBoundingClientRect().top).toBeGreaterThanOrEqual(0);
  }
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...createStreamingHydrationStory("ws-streaming-hydration"),
  globals: {
    viewport: {
      value: "laptop",
      isRotated: false
    }
  },
  parameters: {
    ...Replay.parameters,
    viewport: {
      options: {
        laptop: {
          name: "Laptop",
          styles: {
            width: "1200px",
            height: "900px"
          },
          type: "desktop"
        }
      }
    }
  }
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Phone,
  ...phoneStreamingHydration,
  play: async context => {
    await checkPhoneViewport(context);
    await phoneStreamingHydration.play!(context);
  }
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...createCreationPendingStory(),
  parameters: {
    pixel: {
      matrix: {
        viewports: ["laptop"]
      }
    }
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...creationPendingPhone,
  play: async context => {
    await checkPhoneViewport(context);
    await creationPendingPhone.play!(context);
  },
  decorators: [Story => <div data-testid="chat-loading-phone" style={{
    width: 390,
    maxWidth: "100%",
    height: "100vh",
    overflow: "hidden"
  }}>
        <Story />
      </div>],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const Nt=["Replay","Phone","InitialLoadingPhone","StreamingHydration","StreamingHydrationPhone","CreationPending","CreationPendingPhone"];export{N as CreationPending,j as CreationPendingPhone,V as InitialLoadingPhone,k as Phone,C as Replay,H as StreamingHydration,O as StreamingHydrationPhone,Nt as __namedExportsOrder,Ot as default};
