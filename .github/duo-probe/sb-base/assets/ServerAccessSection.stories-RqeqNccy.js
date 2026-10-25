import{j as i}from"./iframe-C48Cgo5e.js";import{l as r}from"./meta-BMDQogfB.js";import{S as n}from"./ServerAccessSection-BQ4OZJGC.js";import{S as s,s as a,M as c}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";const{within:m}=__STORYBOOK_MODULE_TEST__,I={...r,title:"Settings/Sections/ServerAccessSection",component:n},e={render:()=>i.jsx(s,{setup:()=>a({serverAuthSessions:c}),children:i.jsx(n,{})}),play:async({canvasElement:o})=>{const t=m(o);await t.findByText(/Server access sessions/i),await t.findByText(/Safari on iPhone \(Current\)/i),await t.findByText(/Chrome on Mac/i),await t.findByText(/Firefox on Android/i),await t.findByRole("button",{name:/^Refresh$/i}),await t.findByRole("button",{name:/Revoke other sessions/i})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
