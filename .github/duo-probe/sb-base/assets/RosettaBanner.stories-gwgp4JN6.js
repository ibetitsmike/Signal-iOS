import{W as a,j as r}from"./iframe-C48Cgo5e.js";import{R as o,l as s}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const{within:m}=__STORYBOOK_MODULE_TEST__,D={...s,title:"Components/RosettaBanner",component:o,decorators:[e=>{const t=a.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},isRosetta:!0},a.useEffect(()=>{const i=t.current;return()=>{window.api=i}},[]),r.jsx(e,{})}]},n={render:()=>(typeof localStorage<"u"&&localStorage.removeItem("rosettaBannerDismissedAt"),r.jsx("div",{className:"bg-background p-6",children:r.jsx(o,{})})),play:async({canvasElement:e})=>{const t=m(e);await t.findByText(/Xum is running under Rosetta/i),await t.findByRole("button",{name:/dismiss rosetta warning/i})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
