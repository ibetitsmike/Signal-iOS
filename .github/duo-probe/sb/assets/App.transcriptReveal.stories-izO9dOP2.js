import{j as y,b5 as ne,d as ie,b6 as W,b7 as G,b8 as U,s as ce,c as X,a as le,e as de}from"./iframe-DpCW2UOM.js";import{t as x}from"./AIView-CvG2HY8V.js";import{a as R,P as $,A as B}from"./meta-BwRgvoZ6.js";import{c as pe}from"./orpc-DLtOjQkt.js";import{c as J,a as ue}from"./messages-BbMCeQNx.js";import{c as Y,g as he}from"./workspaces-MVQPvkVv.js";import{o as me}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:s,userEvent:S,waitFor:d,within:T}=__STORYBOOK_MODULE_TEST__,Xe={...R,title:"App/TranscriptReveal"},b=300,K=2*(W+2*G),v=e=>`reveal-row-${e}`,h=e=>`Transcript row ${e} of the tail-first reveal.`,q=Y({id:"ws-reveal-small",name:"small",projectName:"mux"}),N=Y({id:"ws-reveal-large",name:"large",projectName:"mux"});function we(e=b){return Array.from({length:e},(a,t)=>t%2===0?ue(v(t),h(t),{historySequence:t+1}):J(v(t),h(t),{historySequence:t+1}))}function A(e=b){return ce(q),X(),le(),de([q.projectPath]),pe({projects:he([q,N]),workspaces:[q,N],onChat:(a,t)=>{if(a===N.id)for(const o of we(e))t(o);else t(J("small-1","A short transcript.",{historySequence:1}));t({type:"caught-up",historyReplayStatus:"complete",hasOlderHistory:!1})}})}async function D(e){await me(e);const a=await d(async()=>{const t=e.querySelector(`[data-workspace-id="${N.id}"][role="button"]`);return await s(t).not.toBeNull(),t});await S.click(a),X()}async function f(e,a){const t=await T(e).findByText(a,{},{timeout:15e3});return await d(()=>s(t).toBeVisible()),t}function ge(e){return Array.from(e.querySelectorAll("[data-message-id]")).map(a=>a.getAttribute("data-message-id")??"")}function fe(e){const a=new Map;let t=0,o=0,i=requestAnimationFrame(function n(){o+=1,i=requestAnimationFrame(n)});const r=new MutationObserver(n=>{t+=1;for(const c of n)for(const l of c.addedNodes){if(!(l instanceof HTMLElement))continue;const p=l.matches("[data-message-id]")?[l]:Array.from(l.querySelectorAll("[data-message-id]"));for(const w of p){const g=w.getAttribute("data-message-id");g&&!a.has(g)&&a.set(g,{batch:t,frame:o})}}});return r.observe(e,{childList:!0,subtree:!0}),{firstSeen:a,stop:()=>{r.disconnect(),cancelAnimationFrame(i)}}}const z=async({canvasElement:e,step:a})=>{const t=T(e);await f(e,"A short transcript.");const o=fe(e);try{await a("The newest rows mount first, then older chunks after a rendering opportunity",async()=>{await D(e),await f(e,h(b-1)),await d(()=>s(t.queryByText(h(0))).not.toBeNull(),{timeout:15e3});const i=o.firstSeen.get(v(b-1)),r=o.firstSeen.get(v(0));await s(i.batch,"tail committed before the oldest row").toBeLessThan(r.batch),await s(r.frame,"an animation frame ran between the tail and the oldest chunk").toBeGreaterThan(i.frame);const n=Array.from(o.firstSeen.values()).filter(c=>c.batch===i.batch).length;await s(n).toBeGreaterThanOrEqual(ne),await s(n).toBeLessThan(b),await s(ge(e)).toEqual(s.arrayContaining([v(0),v(b-1)]))})}finally{o.stop()}},O={render:()=>y.jsx(B,{setup:A}),play:z},F={width:390,height:844};function Q(e){const a=ie.c(3);let t;a[0]===Symbol.for("react.memo_cache_sentinel")?(t={width:F.width,height:F.height,overflow:"hidden"},a[0]=t):t=a[0];let o;return a[1]!==e?(o=y.jsx("div",{style:t,children:y.jsx(e,{})}),a[1]=e,a[2]=o):o=a[2],o}const C={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>y.jsx(B,{setup:A}),decorators:[Q],parameters:{...R.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async e=>{await d(()=>s(e.canvasElement.querySelector('[data-testid="message-window"]').getBoundingClientRect().width).toBeLessThanOrEqual(F.width)),await z(e)}};function V(e){const a=e.getBoundingClientRect().top;for(const t of e.querySelectorAll("[data-message-id]"))if(t.getBoundingClientRect().bottom>a)return t.getAttribute("data-message-id");return null}function L(e){if(e===null)return"null";const a=e.getAttribute("data-message-id")??e.getAttribute("data-testid")??e.getAttribute("role")??e.classList.item(0);return a===null?e.tagName:`${e.tagName}[${a}]`}function ye(e,a){const t=e.querySelector('[role="log"]');if(t===null)throw new Error("the transcript content element is missing");const o=()=>e.querySelectorAll("[data-message-id]").length,i=()=>document.getAnimations().flatMap(u=>{const m=u.effect instanceof KeyframeEffect?u.effect.target:null;if(m===null||!(e.contains(m)||m.contains(e)))return[];const E=u instanceof CSSAnimation?u.animationName:u instanceof CSSTransition?u.transitionProperty:"script",H=m.contains(a)?"*":"";return[`${E}@${L(m)}${H}:${u.playState}`]}),r=()=>{const u=i().filter(H=>H.includes("*")),E=`${Math.round(t.getBoundingClientRect().height)}/${Math.round(e.scrollTop)}/${o()}`;return u.length===0?E:`${E} ${u.join(",")}`},n=r(),c=[],l=new ResizeObserver(()=>{c.length<30&&c.push(r())});l.observe(t);const p=[],w=new MutationObserver(u=>{for(const m of u)!(m.target instanceof Element)||!m.target.contains(a)||p.length<10&&p.push(`${L(m.target)}.${m.attributeName??"?"}`)});w.observe(e,{subtree:!0,attributes:!0,attributeFilter:["class","style"]});const g=Array.from(new Set(i())).slice(0,10),j=e.getBoundingClientRect(),re=document.elementFromPoint(j.left+j.width/2,j.top+1),se={start:n,overflowAnchor:getComputedStyle(t).overflowAnchor,topEdge:L(re),activeElement:L(document.activeElement),animations:g};return{stop:()=>(l.disconnect(),w.disconnect(),JSON.stringify({...se,samples:c,ancestorChanges:p,end:r()}))}}const P={render:()=>y.jsx(B,{setup:A}),play:async({canvasElement:e,step:a})=>{const t=T(e);await f(e,"A short transcript.");const o=[],i=x.schedule;x.schedule=r=>(o.push(r),()=>{const n=o.indexOf(r);n!==-1&&o.splice(n,1)});try{await a("Scrolling up while only the tail is mounted keeps the reader's row in place",async()=>{await D(e),await f(e,h(b-1)),await d(()=>s(o).toHaveLength(1)),await s(t.queryByText(h(0))).toBeNull();const r=t.getByTestId("message-window");await s(r.scrollHeight).toBeGreaterThan(r.clientHeight),r.dispatchEvent(new WheelEvent("wheel",{deltaY:-100,bubbles:!0})),r.scrollTop=Math.floor(r.scrollHeight/2),r.dispatchEvent(new Event("scroll")),await t.findByRole("button",{name:/Jump to bottom/});const n=V(r);if(n===null)throw new Error("no transcript row is visible after scrolling up");const c=()=>r.querySelector(`[data-message-id="${n}"]`),l=c().getBoundingClientRect().top,p=ye(r,c());x.schedule=i,o.shift()(),await d(()=>s(t.queryByText(h(0))).not.toBeNull(),{timeout:15e3}),await new Promise(g=>requestAnimationFrame(()=>requestAnimationFrame(()=>g())));const w=p.stop();await s(V(r),`top visible row after the reveal; evidence (#6758): ${w}`).toBe(n),await s(Math.abs(c().getBoundingClientRect().top-l),`anchor row displacement (px); evidence (#6758): ${w}`).toBeLessThanOrEqual(1)})}finally{x.schedule=i}}},Z=()=>A(K),ee=async({canvasElement:e,step:a})=>{const t=T(e);await f(e,"A short transcript.");const o=()=>e.querySelectorAll('[data-testid="message-window"] [data-testid="chat-message"]').length;await a("The automatic reveal pauses at its rows budget",async()=>{await D(e),await f(e,h(K-1)),await d(async()=>{await s(e.querySelector('[data-testid="message-window"][data-loaded="true"]')).not.toBeNull(),await s(o()).toBeGreaterThanOrEqual(W)},{timeout:15e3});const i=o();await s(i).toBeLessThanOrEqual(W+G);for(let r=0;r<4;r+=1)await new Promise(n=>requestAnimationFrame(()=>n()));await s(o()).toBe(i),await s(t.queryByText(h(0))).toBeNull()}),await a("Load older messages mounts the rest of the loaded rows",async()=>{const i=await t.findByRole("button",{name:"Load older messages"});await d(()=>s(i).toBeVisible());const r=o(),n=e.querySelector('[data-testid="message-window"]');n.dispatchEvent(new WheelEvent("wheel",{deltaY:-100,bubbles:!0})),n.scrollTop=0,n.dispatchEvent(new Event("scroll")),await t.findByRole("button",{name:/Jump to bottom/}),await s(n.scrollTop).toBe(0);const c=n.querySelector("[data-message-id]"),l=c.getBoundingClientRect().top;await S.click(i),await d(()=>s(t.queryByText(h(0))).not.toBeNull(),{timeout:15e3}),await s(o()).toBeGreaterThan(r),await s(c.isConnected).toBe(!0),await s(Math.abs(c.getBoundingClientRect().top-l)).toBeLessThanOrEqual(1),await d(()=>s(t.queryByRole("button",{name:"Load older messages"})).toBeNull())})},_={render:()=>y.jsx(B,{setup:Z}),parameters:{...R.parameters,pixel:$},play:ee},M={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>y.jsx(B,{setup:Z}),decorators:[Q],parameters:{...R.parameters,pixel:$},play:async e=>{await d(()=>s(e.canvasElement.querySelector('[data-testid="message-window"]').getBoundingClientRect().width).toBeLessThanOrEqual(F.width)),await ee(e)}},te=2*(U+W),ae=()=>A(te);async function oe({canvasElement:e,step:a},t){const o=T(e);await f(e,"A short transcript.");const i=h(te-1),r=()=>e.querySelector('[data-testid="message-window"]'),n=()=>r().querySelectorAll('[data-testid="chat-message"]');await a("Load older past the cap unmounts the newest rows",async()=>{await D(e),await f(e,i),t&&r().dispatchEvent(new WheelEvent("wheel",{deltaY:-100,bubbles:!0}));for(let c=0;c<3;c+=1){const l={name:"Load older messages"},p=await o.findByRole("button",l,{timeout:15e3});t&&(r().scrollTop=0),await S.click(p)}await o.findByText(h(0),{},{timeout:15e3}),await o.findByRole("button",{name:"Show newer messages"},{timeout:15e3}),await s(o.queryByText(i)).toBeNull(),await s(n().length).toBeLessThanOrEqual(U)}),await a("Show newer mounts rows below the reader without moving the read row",async()=>{const c=o.getByRole("button",{name:"Show newer messages"});t&&c.scrollIntoView({block:"end",behavior:"instant"});const l=()=>r().querySelectorAll("[data-message-id]"),p=l()[l().length-1].dataset.messageId,w=()=>r().querySelector(`[data-message-id="${p}"]`),g=w().getBoundingClientRect().top;await S.click(c),await d(()=>s(l()[l().length-1].dataset.messageId).not.toBe(p)),await s(Math.abs(w().getBoundingClientRect().top-g)).toBeLessThanOrEqual(1)}),await a("Jump to bottom returns to the live tail",async()=>{await S.click(o.getByRole("button",{name:/Jump to bottom/})),await f(e,i),await d(()=>s(o.queryByRole("button",{name:"Show newer messages"})).toBeNull())})}const k={render:()=>y.jsx(B,{setup:ae}),parameters:{...R.parameters,pixel:$},play:e=>oe(e,!0)},I={render:()=>y.jsx(B,{setup:ae}),parameters:{...R.parameters,pixel:$},play:e=>oe(e,!1)};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setup} />,
  play: revealTailFirst
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={setup} />,
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async context => {
    await waitFor(() => expect(context.canvasElement.querySelector('[data-testid="message-window"]')!.getBoundingClientRect().width).toBeLessThanOrEqual(IPHONE_16E.width));
    await revealTailFirst(context);
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setup} />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await findVisibleText(canvasElement, "A short transcript.");
    // Hold the reveal after its tail commit so the scroll happens deterministically mid-reveal;
    // the remaining chunks then run on the production scheduler.
    const held: Array<() => void> = [];
    const realSchedule = transcriptRevealFrameScheduler.schedule;
    transcriptRevealFrameScheduler.schedule = callback => {
      held.push(callback);
      return () => {
        const index = held.indexOf(callback);
        if (index !== -1) held.splice(index, 1);
      };
    };
    try {
      await step("Scrolling up while only the tail is mounted keeps the reader's row in place", async () => {
        await switchToLargeWorkspace(canvasElement);
        await findVisibleText(canvasElement, rowText(LARGE_ROWS - 1));
        await waitFor(() => expect(held).toHaveLength(1));
        await expect(canvas.queryByText(rowText(0))).toBeNull();
        const scrollport = canvas.getByTestId("message-window");
        await expect(scrollport.scrollHeight).toBeGreaterThan(scrollport.clientHeight);
        // A wheel gesture releases the bottom lock; land in the middle of the mounted tail.
        scrollport.dispatchEvent(new WheelEvent("wheel", {
          deltaY: -100,
          bubbles: true
        }));
        scrollport.scrollTop = Math.floor(scrollport.scrollHeight / 2);
        scrollport.dispatchEvent(new Event("scroll"));
        await canvas.findByRole("button", {
          name: /Jump to bottom/
        });
        const anchorRow = topVisibleRowId(scrollport);
        if (anchorRow === null) throw new Error("no transcript row is visible after scrolling up");
        const anchorElement = () => scrollport.querySelector(\`[data-message-id="\${anchorRow}"]\`)!;
        const anchorTop = anchorElement().getBoundingClientRect().top;
        const evidence = recordRevealEvidence(scrollport, anchorElement());
        transcriptRevealFrameScheduler.schedule = realSchedule;
        held.shift()!();
        await waitFor(() => expect(canvas.queryByText(rowText(0))).not.toBeNull(), {
          timeout: 15_000
        });
        await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
        const report = evidence.stop();
        await expect(topVisibleRowId(scrollport), \`top visible row after the reveal; evidence (#6758): \${report}\`).toBe(anchorRow);
        // Native scroll anchoring restores the row within a sub-pixel of its previous position.
        await expect(Math.abs(anchorElement().getBoundingClientRect().top - anchorTop), \`anchor row displacement (px); evidence (#6758): \${report}\`).toBeLessThanOrEqual(1);
      });
    } finally {
      transcriptRevealFrameScheduler.schedule = realSchedule;
    }
  }
}`,...P.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupOverBudget} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: pauseAtBudget
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={setupOverBudget} />,
  // The decorator forces the phone width for the test-runner, which applies no viewport.
  decorators: [IPhone16eDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async context => {
    await waitFor(() => expect(context.canvasElement.querySelector('[data-testid="message-window"]')!.getBoundingClientRect().width).toBeLessThanOrEqual(IPHONE_16E.width));
    await pauseAtBudget(context);
  }
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupCapped} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: context => detachedPastCap(context, true)
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupCapped} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: context => detachedPastCap(context, false)
}`,...I.parameters?.docs?.source}}};const Je=["TailFirstSwitch","TailFirstSwitchPhone","ScrollUpMidReveal","PauseAtBudget","PauseAtBudgetPhone","DetachedPastCap","DetachedPastCapLocked"];export{k as DetachedPastCap,I as DetachedPastCapLocked,_ as PauseAtBudget,M as PauseAtBudgetPhone,P as ScrollUpMidReveal,O as TailFirstSwitch,C as TailFirstSwitchPhone,Je as __namedExportsOrder,Xe as default};
