import{W as a,j as r}from"./iframe-DwmVy7SQ.js";import{R as o,l as s}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{within:m}=__STORYBOOK_MODULE_TEST__,D={...s,title:"Components/RosettaBanner",component:o,decorators:[e=>{const t=a.useRef(window.api);return window.api={platform:"darwin",versions:{node:"20.0.0",chrome:"120.0.0",electron:"28.0.0"},isRosetta:!0},a.useEffect(()=>{const i=t.current;return()=>{window.api=i}},[]),r.jsx(e,{})}]},n={render:()=>(typeof localStorage<"u"&&localStorage.removeItem("rosettaBannerDismissedAt"),r.jsx("div",{className:"bg-background p-6",children:r.jsx(o,{})})),play:async({canvasElement:e})=>{const t=m(e);await t.findByText(/Xum is running under Rosetta/i),await t.findByRole("button",{name:/dismiss rosetta warning/i})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
