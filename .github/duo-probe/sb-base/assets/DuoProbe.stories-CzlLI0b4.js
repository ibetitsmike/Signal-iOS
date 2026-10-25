import{j as g,e as f}from"./iframe-C48Cgo5e.js";import{a as y,A as h}from"./meta-BMDQogfB.js";import{c as b}from"./orpc-qlMSh58E.js";import{s as v}from"./chatSetup--9T4hSMU.js";import{a as k,c as S}from"./messages-Bf7rPDB1.js";import{o as E}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./workspaces-DZcvJb83.js";import"./git-Ekgdg9se.js";const oe={...y,title:"Probe/Duo"},o=e=>new Promise(t=>setTimeout(t,e)),d=[];if(typeof window<"u"&&window.visualViewport){const e=window.visualViewport,t=r=>d.push(`${r.type}@${Math.round(performance.now())}:${e.width}x${e.height}+${e.offsetTop}/${e.pageTop}s${e.scale}`);e.addEventListener("resize",t),e.addEventListener("scroll",t),window.addEventListener("scroll",()=>d.push(`wscroll@${Math.round(performance.now())}:${window.scrollY}`)),window.addEventListener("resize",()=>d.push(`wresize@${Math.round(performance.now())}:${window.innerWidth}x${window.innerHeight}`))}function x(){let e=document.getElementById("probe-insets");e||(e=document.createElement("div"),e.id="probe-insets",e.style.cssText="position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",document.body.appendChild(e));const t=getComputedStyle(e);return[t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft].join(",")}function M(){const e=window.visualViewport;return{iw:window.innerWidth,ih:window.innerHeight,cw:document.documentElement.clientWidth,ch:document.documentElement.clientHeight,bodyH:document.body.getBoundingClientRect().height,rootH:document.getElementById("storybook-root")?.getBoundingClientRect().height,vv:e&&{w:e.width,h:e.height,ot:e.offsetTop,ol:e.offsetLeft,pt:e.pageTop,s:e.scale},sy:window.scrollY,scr:`${screen.width}x${screen.height}`,dpr:window.devicePixelRatio,insets:x(),phone:window.matchMedia("(max-width: 480px) and (pointer: coarse)").matches,ua:navigator.userAgent,vvEvents:d.slice(-20)}}function i(e){if(!e)return null;const t=e.getBoundingClientRect();return{x:Math.round(t.x),y:Math.round(t.y),w:Math.round(t.width),h:Math.round(t.height)}}function C(){const e=document.querySelector("[data-radix-popper-content-wrapper]"),t=e?.firstElementChild;return{wrapper:i(e),wrapperTransform:e?.style.transform,content:i(t),side:t?.getAttribute("data-side"),maxH:t?getComputedStyle(t).maxHeight:null,opacity:t?getComputedStyle(t).opacity:null,avail:e?.style.getPropertyValue("--radix-popper-available-height")}}async function a(e,t={}){const r=JSON.stringify({tag:e,t:Math.round(performance.now()),m:M(),p:C(),...t}),n=window.webkit;if(n?.messageHandlers?.probe){n.messageHandlers.probe.postMessage(r);return}await fetch("/__probe/log",{method:"POST",body:r}).catch(()=>{})}async function l(e){if(window.webkit){await o(4e3);return}for(;;){const t=await fetch("/__probe/step").then(r=>r.text()).catch(()=>"0");if(Number(t)>=e)return;await o(1e3)}}async function s(e,t=2e4){const r=Date.now();for(;;){const n=e();if(n)return n;if(Date.now()-r>t)throw new Error("timeout");await o(200)}}const c={render:()=>g.jsx(h,{setup:()=>v({workspaceId:"ws-duo",workspaceName:"github-issues",projectName:"xum",messages:Array.from({length:8},(e,t)=>t%2===0?k(`m${t}`,"Please triage the open issues and report.",{historySequence:t+1}):S(`m${t}`,"Done. ".repeat(80),{historySequence:t+1}))})}),play:async()=>{await a("ws-load");const e=await s(()=>document.querySelector("[data-testid='workspace-more-actions']"));await o(3e3),await a("ws-before-open",{btn:i(e),header:i(e.closest(".mobile-sticky-header"))}),await s(()=>window.__probeGo,6e4).catch(()=>0);const t=[...document.querySelectorAll("textarea")].find(n=>n.getBoundingClientRect().width>0);t?.focus(),await o(2500),await a("kbd-up",{ta:i(t),active:document.activeElement?.tagName});const r=[...document.querySelectorAll("[data-testid='workspace-more-actions']")].find(n=>n.getBoundingClientRect().width>0)??e;await a("ws-go",{btn:i(r)}),r.click(),await o(50),await a("ws-open-50ms"),await o(1500),await a("ws-open-1500ms",{ready:1}),await o(2e3),await a("ws-open-3500ms"),await l(2),window.scrollTo(0,1),await o(500),await a("ws-after-scrollTo",{ready:2}),await l(3),await a("ws-done",{ready:3})}},u=Array.from({length:25},(e,t)=>`/Users/dev/project-${String(t).padStart(2,"0")}`),p={render:()=>g.jsx(h,{setup:()=>(f(u),b({projects:new Map(u.map(e=>[e,{workspaces:[]}])),workspaces:[]}))}),play:async({canvasElement:e})=>{const t=document.getElementById("storybook-root")??e;await a("cr-load"),await E(t),(await s(()=>t.querySelector("[data-project-path][aria-controls]"))).click(),await o(3e3);const n=await s(()=>[...document.querySelectorAll("[data-testid='project-selector']")].find(w=>w.getBoundingClientRect().width>0));await a("cr-before-open",{sel:i(n)}),await s(()=>window.__probeGo,6e4).catch(()=>0);const m=[...document.querySelectorAll("textarea")].find(w=>w.getBoundingClientRect().width>0);m?.focus(),await o(2500),await a("kbd-up",{ta:i(m),active:document.activeElement?.tagName}),await a("cr-go",{sel:i(n)}),n.click(),await o(50),await a("cr-open-50ms"),await o(1500),await a("cr-open-1500ms",{ready:11}),await o(2e3),await a("cr-open-3500ms"),await l(12),await a("cr-done",{ready:12})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-duo",
    workspaceName: "github-issues",
    projectName: "xum",
    messages: Array.from({
      length: 8
    }, (_, i) => i % 2 === 0 ? createUserMessage(\`m\${i}\`, "Please triage the open issues and report.", {
      historySequence: i + 1
    }) : createAssistantMessage(\`m\${i}\`, "Done. ".repeat(80), {
      historySequence: i + 1
    }))
  })} />,
  play: async () => {
    await log("ws-load");
    const btn = await waitFor(() => document.querySelector<HTMLElement>("[data-testid='workspace-more-actions']"));
    await sleep(3000);
    await log("ws-before-open", {
      btn: rectOf(btn),
      header: rectOf(btn.closest(".mobile-sticky-header"))
    });
    await waitFor(() => (window as unknown as {
      __probeGo?: number;
    }).__probeGo, 60000).catch(() => 0);
    const ta = [...document.querySelectorAll<HTMLTextAreaElement>("textarea")].find(el => el.getBoundingClientRect().width > 0);
    ta?.focus();
    await sleep(2500);
    await log("kbd-up", {
      ta: rectOf(ta),
      active: document.activeElement?.tagName
    });
    const liveBtn = [...document.querySelectorAll<HTMLElement>("[data-testid='workspace-more-actions']")].find(el => el.getBoundingClientRect().width > 0) ?? btn;
    await log("ws-go", {
      btn: rectOf(liveBtn)
    });
    liveBtn.click();
    await sleep(50);
    await log("ws-open-50ms");
    await sleep(1500);
    await log("ws-open-1500ms", {
      ready: 1
    });
    await sleep(2000);
    await log("ws-open-3500ms");
    await waitStep(2);
    window.scrollTo(0, 1);
    await sleep(500);
    await log("ws-after-scrollTo", {
      ready: 2
    });
    await waitStep(3);
    await log("ws-done", {
      ready: 3
    });
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    expandProjects(PROJECTS);
    return createMockORPCClient({
      projects: new Map(PROJECTS.map(p => [p, {
        workspaces: []
      }])),
      workspaces: []
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    const root = document.getElementById("storybook-root") ?? canvasElement;
    await log("cr-load");
    await openLeftSidebar(root);
    const row = await waitFor(() => root.querySelector<HTMLElement>("[data-project-path][aria-controls]"));
    row.click();
    await sleep(3000);
    const sel = await waitFor(() => [...document.querySelectorAll<HTMLElement>("[data-testid='project-selector']")].find(el => el.getBoundingClientRect().width > 0));
    await log("cr-before-open", {
      sel: rectOf(sel)
    });
    await waitFor(() => (window as unknown as {
      __probeGo?: number;
    }).__probeGo, 60000).catch(() => 0);
    const ta = [...document.querySelectorAll<HTMLTextAreaElement>("textarea")].find(el => el.getBoundingClientRect().width > 0);
    ta?.focus();
    await sleep(2500);
    await log("kbd-up", {
      ta: rectOf(ta),
      active: document.activeElement?.tagName
    });
    await log("cr-go", {
      sel: rectOf(sel)
    });
    sel.click();
    await sleep(50);
    await log("cr-open-50ms");
    await sleep(1500);
    await log("cr-open-1500ms", {
      ready: 11
    });
    await sleep(2000);
    await log("cr-open-3500ms");
    await waitStep(12);
    await log("cr-done", {
      ready: 12
    });
  }
}`,...p.parameters?.docs?.source}}};const ne=["Workspace","Creation"];export{p as Creation,c as Workspace,ne as __namedExportsOrder,oe as default};
