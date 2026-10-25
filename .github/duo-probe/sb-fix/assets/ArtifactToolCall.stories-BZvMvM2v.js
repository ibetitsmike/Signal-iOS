import{cl as l,h as u,j as a,d as f,E as x}from"./iframe-DwmVy7SQ.js";import{l as g}from"./meta-CT6GdK4g.js";import{c as v}from"./orpc-sAt07-6s.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:w,within:y}=__STORYBOOK_MODULE_TEST__,U={...g,title:"App/Chat/Tools/Artifact",component:l},c="ws-story-artifact-cards";function n(e,t,r,s){return{success:!0,id:`id-${e}`,version:r,path:e,bytes:2048,kind:t,title:s,pin:null}}const p=[n("cache-explorer.html","html",3,"interactive chart"),n("findings.md","markdown",1,"findings.md"),n("bench-results.json","json",2,"p95 by strategy"),n("architecture.svg","svg",1,"architecture.svg"),n("revenue.csv","csv",4,"Q1 revenue"),n("flows/checkout.mmd","mermaid",2,"checkout flow"),n("reports/2026/q3/very-long-folder-name/service-latency-breakdown.md","markdown",12,"latency breakdown with a long title")];function m(e){const t=f.c(5);let r;t[0]!==e.label?(r=a.jsx("div",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:e.label}),t[0]=e.label,t[1]=r):r=t[1];let s;return t[2]!==e.children||t[3]!==r?(s=a.jsxs("section",{className:"flex flex-col gap-1",children:[r,e.children]}),t[2]=e.children,t[3]=r,t[4]=s):s=t[4],s}function d(){return u().setClient(v({experiments:{[x.ARTIFACTS]:!0}})),a.jsx("div",{className:"bg-background p-4",children:a.jsxs("div",{className:"flex w-full max-w-2xl flex-col gap-4",children:[a.jsx(m,{label:"Published artifacts",children:p.map(e=>a.jsx(l,{toolName:"artifact",args:{path:e.path},result:e,status:"completed",workspaceId:c},e.path))}),a.jsx(m,{label:"Failed publish",children:a.jsx(l,{toolName:"artifact",args:{path:"missing.md"},result:{success:!1,error:"File not found in the artifacts folder: missing.md"},status:"failed",workspaceId:c})})]})})}async function h(e){const r=await y(e).findAllByRole("button",{name:/in Artifacts$/});await w(r).toHaveLength(p.length)}const o={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},render:d,play:({canvasElement:e})=>h(e)},i={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:d,play:({canvasElement:e})=>h(e)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const W=["GalleryLaptop","GalleryPhone"];export{o as GalleryLaptop,i as GalleryPhone,W as __namedExportsOrder,U as default};
