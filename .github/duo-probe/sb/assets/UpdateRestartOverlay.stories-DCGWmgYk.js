import{d as c,W as d,j as r,aK as u}from"./iframe-DpCW2UOM.js";import{l as h,U as x}from"./meta-BwRgvoZ6.js";import{c as y}from"./orpc-DLtOjQkt.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:o,within:m}=__STORYBOOK_MODULE_TEST__;function v(){const t=c.c(4),[e]=d.useState(g);let a,s;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=r.jsxs("div",{className:"text-foreground space-y-2 p-6",children:[r.jsx("h1",{className:"text-lg font-medium",children:"Workspace content"}),r.jsx("p",{className:"text-muted text-sm",children:"Everything here must stay hidden behind the restart screen."})]}),s=r.jsx(x,{}),t[0]=a,t[1]=s):(a=t[0],s=t[1]);let i;return t[2]!==e?(i=r.jsxs(u,{client:e,children:[a,s]}),t[2]=e,t[3]=i):i=t[3],i}function g(){return y({updateStatus:{type:"restarting",info:{version:"0.29.0"}}})}const D={...h,title:"Components/UpdateRestartOverlay",component:v};async function l(){const t=await m(document.body).findByTestId("update-restart-overlay");await o(m(t).getByText("Restarting Xum…")).toBeVisible();const e=t.getBoundingClientRect();await o(e.top).toBeLessThanOrEqual(0),await o(e.left).toBeLessThanOrEqual(0),await o(e.right).toBeGreaterThanOrEqual(window.innerWidth),await o(e.bottom).toBeGreaterThanOrEqual(window.innerHeight)}const n={play:l},p={parameters:{pixel:{matrix:{viewports:["phone"]}}},globals:{viewport:{value:"mobile1",isRotated:!1}},play:l};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
