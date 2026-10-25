import{j as i}from"./iframe-DpCW2UOM.js";import{l as r}from"./meta-BwRgvoZ6.js";import{S as n}from"./ServerAccessSection-J6SWHLPe.js";import{S as s,s as a,M as c}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";const{within:m}=__STORYBOOK_MODULE_TEST__,I={...r,title:"Settings/Sections/ServerAccessSection",component:n},e={render:()=>i.jsx(s,{setup:()=>a({serverAuthSessions:c}),children:i.jsx(n,{})}),play:async({canvasElement:o})=>{const t=m(o);await t.findByText(/Server access sessions/i),await t.findByText(/Safari on iPhone \(Current\)/i),await t.findByText(/Chrome on Mac/i),await t.findByText(/Firefox on Android/i),await t.findByRole("button",{name:/^Refresh$/i}),await t.findByRole("button",{name:/Revoke other sessions/i})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    serverAuthSessions: MOCK_SERVER_AUTH_SESSIONS
  })}>
      <ServerAccessSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Server access sessions/i);
    await canvas.findByText(/Safari on iPhone \\(Current\\)/i);
    await canvas.findByText(/Chrome on Mac/i);
    await canvas.findByText(/Firefox on Android/i);
    await canvas.findByRole("button", {
      name: /^Refresh$/i
    });
    await canvas.findByRole("button", {
      name: /Revoke other sessions/i
    });
  }
}`,...e.parameters?.docs?.source}}};const N=["ServerAccess"];export{e as ServerAccess,N as __namedExportsOrder,I as default};
