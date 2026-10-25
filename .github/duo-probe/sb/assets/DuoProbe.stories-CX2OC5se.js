import{j as m,e as g}from"./iframe-DS5VyXLs.js";import{a as f,A as u}from"./meta-BWzge-eA.js";import{c as y}from"./orpc-DZZSHgoi.js";import{s as b}from"./chatSetup-DJI_9Mbv.js";import{a as v,c as k}from"./messages-CnWrfKdU.js";import{o as S}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";import"./workspaces-BLRlQP3Y.js";import"./git-Ekgdg9se.js";const oe={...f,title:"Probe/Duo"},a=e=>new Promise(t=>setTimeout(t,e)),w=[];if(typeof window<"u"&&window.visualViewport){const e=window.visualViewport,t=r=>w.push(`${r.type}@${Math.round(performance.now())}:${e.width}x${e.height}+${e.offsetTop}/${e.pageTop}s${e.scale}`);e.addEventListener("resize",t),e.addEventListener("scroll",t),window.addEventListener("scroll",()=>w.push(`wscroll@${Math.round(performance.now())}:${window.scrollY}`)),window.addEventListener("resize",()=>w.push(`wresize@${Math.round(performance.now())}:${window.innerWidth}x${window.innerHeight}`))}function x(){let e=document.getElementById("probe-insets");e||(e=document.createElement("div"),e.id="probe-insets",e.style.cssText="position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",document.body.appendChild(e));const t=getComputedStyle(e);return[t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft].join(",")}function E(){const e=window.visualViewport;return{iw:window.innerWidth,ih:window.innerHeight,cw:document.documentElement.clientWidth,ch:document.documentElement.clientHeight,bodyH:document.body.getBoundingClientRect().height,rootH:document.getElementById("storybook-root")?.getBoundingClientRect().height,vv:e&&{w:e.width,h:e.height,ot:e.offsetTop,ol:e.offsetLeft,pt:e.pageTop,s:e.scale},sy:window.scrollY,scr:`${screen.width}x${screen.height}`,dpr:window.devicePixelRatio,insets:x(),phone:window.matchMedia("(max-width: 480px) and (pointer: coarse)").matches,ua:navigator.userAgent,vvEvents:w.slice(-20)}}function i(e){if(!e)return null;const t=e.getBoundingClientRect();return{x:Math.round(t.x),y:Math.round(t.y),w:Math.round(t.width),h:Math.round(t.height)}}function M(){const e=document.querySelector("[data-radix-popper-content-wrapper]"),t=e?.firstElementChild;return{wrapper:i(e),wrapperTransform:e?.style.transform,content:i(t),side:t?.getAttribute("data-side"),maxH:t?getComputedStyle(t).maxHeight:null,opacity:t?getComputedStyle(t).opacity:null,avail:e?.style.getPropertyValue("--radix-popper-available-height")}}async function o(e,t={}){const r=JSON.stringify({tag:e,t:Math.round(performance.now()),m:E(),p:M(),...t}),n=window.webkit;if(n?.messageHandlers?.probe){n.messageHandlers.probe.postMessage(r);return}await fetch("/__probe/log",{method:"POST",body:r}).catch(()=>{})}async function d(e){if(window.webkit){await a(4e3);return}for(;;){const t=await fetch("/__probe/step").then(r=>r.text()).catch(()=>"0");if(Number(t)>=e)return;await a(1e3)}}async function s(e,t=2e4){const r=Date.now();for(;;){const n=e();if(n)return n;if(Date.now()-r>t)throw new Error("timeout");await a(200)}}const c={render:()=>m.jsx(u,{setup:()=>b({workspaceId:"ws-duo",workspaceName:"github-issues",projectName:"xum",messages:Array.from({length:8},(e,t)=>t%2===0?v(`m${t}`,"Please triage the open issues and report.",{historySequence:t+1}):k(`m${t}`,"Done. ".repeat(80),{historySequence:t+1}))})}),play:async()=>{await o("ws-load");const e=await s(()=>document.querySelector("[data-testid='workspace-more-actions']"));await a(3e3),await o("ws-before-open",{btn:i(e),header:i(e.closest(".mobile-sticky-header"))}),await s(()=>window.__probeGo,6e4).catch(()=>0),await o("ws-go",{btn:i(e)}),e.click(),await a(50),await o("ws-open-50ms"),await a(1500),await o("ws-open-1500ms",{ready:1}),await d(2),window.scrollTo(0,1),await a(500),await o("ws-after-scrollTo",{ready:2}),await d(3),await o("ws-done",{ready:3})}},l=Array.from({length:25},(e,t)=>`/Users/dev/project-${String(t).padStart(2,"0")}`),p={render:()=>m.jsx(u,{setup:()=>(g(l),y({projects:new Map(l.map(e=>[e,{workspaces:[]}])),workspaces:[]}))}),play:async({canvasElement:e})=>{const t=document.getElementById("storybook-root")??e;await o("cr-load"),await S(t),(await s(()=>t.querySelector("[data-project-path][aria-controls]"))).click(),await a(3e3);const n=await s(()=>[...document.querySelectorAll("[data-testid='project-selector']")].find(h=>h.getBoundingClientRect().width>0));await o("cr-before-open",{sel:i(n)}),await s(()=>window.__probeGo,6e4).catch(()=>0),await o("cr-go",{sel:i(n)}),n.click(),await a(50),await o("cr-open-50ms"),await a(1500),await o("cr-open-1500ms",{ready:11}),await d(12),await o("cr-done",{ready:12})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    await log("ws-go", {
      btn: rectOf(btn)
    });
    btn.click();
    await sleep(50);
    await log("ws-open-50ms");
    await sleep(1500);
    await log("ws-open-1500ms", {
      ready: 1
    });
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
    await waitStep(12);
    await log("cr-done", {
      ready: 12
    });
  }
}`,...p.parameters?.docs?.source}}};const ae=["Workspace","Creation"];export{p as Creation,c as Workspace,ae as __namedExportsOrder,oe as default};
