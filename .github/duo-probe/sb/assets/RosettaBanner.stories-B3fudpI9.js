import{W as a,j as r}from"./iframe-DpCW2UOM.js";import{R as o,l as s}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{within:m}=__STORYBOOK_MODULE_TEST__,D={...s,title:"Components/RosettaBanner",component:o,decorators:[e=>{const t=a.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},isRosetta:!0},a.useEffect(()=>{const i=t.current;return()=>{window.api=i}},[]),r.jsx(e,{})}]},n={render:()=>(typeof localStorage<"u"&&localStorage.removeItem("rosettaBannerDismissedAt"),r.jsx("div",{className:"bg-background p-6",children:r.jsx(o,{})})),play:async({canvasElement:e})=>{const t=m(e);await t.findByText(/Xum is running under Rosetta/i),await t.findByRole("button",{name:/dismiss rosetta warning/i})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("rosettaBannerDismissedAt");
    }
    return <div className="bg-background p-6">
        <RosettaBanner />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Xum is running under Rosetta/i);
    await canvas.findByRole("button", {
      name: /dismiss rosetta warning/i
    });
  }
}`,...n.parameters?.docs?.source}}};const k=["BannerVisible"];export{n as BannerVisible,k as __namedExportsOrder,D as default};
