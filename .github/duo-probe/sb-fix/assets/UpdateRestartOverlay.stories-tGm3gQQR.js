import{d as c,W as d,j as r,aK as u}from"./iframe-DwmVy7SQ.js";import{l as h,U as x}from"./meta-CT6GdK4g.js";import{c as y}from"./orpc-sAt07-6s.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:o,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const t=c.c(4),[e]=d.useState(g);let a,s;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsxs("div",{className:"text-foreground space-y-2 p-6",children:[r.jsx("h1",{className:"text-lg font-medium",children:"Workspace content"}),r.jsx("p",{className:"text-muted text-sm",children:"Everything here must stay hidden behind the restart screen."})]}),s=r.jsx(x,{}),t[0]=a,t[1]=s):(a=t[0],s=t[1]);let i;return t[2]!==e?(i=r.jsxs(u,{client:e,children:[a,s]}),t[2]=e,t[3]=i):i=t[3],i}function g(){return y({updateStatus:{type:"restarting",info:{version:"0.29.0"}}})}const D={...h,title:"Components/UpdateRestartOverlay",component:v};async function l(){const t=await m(document.body).findByTestId("update-restart-overlay");await o(m(t).getByText("Restarting Xum…")).toBeVisible();const e=t.getBoundingClientRect();await o(e.top).toBeLessThanOrEqual(0),await o(e.left).toBeLessThanOrEqual(0),await o(e.right).toBeGreaterThanOrEqual(window.innerWidth),await o(e.bottom).toBeGreaterThanOrEqual(window.innerHeight)}const n={play:l},p={parameters:{pixel:{matrix:{viewports:["phone"]}}},globals:{viewport:{value:"mobile1",isRotated:!1}},play:l};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: expectOverlayCoversViewport
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  play: expectOverlayCoversViewport
}`,...p.parameters?.docs?.source}}};const H=["Restarting","RestartingPhone"];export{n as Restarting,p as RestartingPhone,H as __namedExportsOrder,D as default};
