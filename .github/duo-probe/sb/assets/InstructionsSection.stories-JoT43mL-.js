import{j as i,s as w}from"./iframe-DpCW2UOM.js";import{l as f}from"./meta-BwRgvoZ6.js";import{c as S}from"./orpc-DLtOjQkt.js";import{c as u,g as x}from"./workspaces-MVQPvkVv.js";import{I as v}from"./InstructionsSection-DcJCMRqe.js";import{S as h}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:l,userEvent:E,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,y="/Users/test/my-app",b="/Users/test/other-app";function m(t){const e=[u({id:"ws-instructions-a",name:"main",projectName:"my-app",projectPath:y}),u({id:"ws-instructions-b",name:"main",projectName:"other-app",projectPath:b})];w(e[0]);const n=x(e),a=n.get(y);return a&&t&&(a.customInstructions=t),S({workspaces:e,projects:n})}const Q={...f,title:"Settings/Sections/InstructionsSection",component:v};function p(t){return i.jsx(h,{setup:t,children:i.jsx("div",{className:"bg-background p-6",children:i.jsx(v,{})})})}const s={render:()=>p(()=>m()),play:async({canvasElement:t})=>{const e=c(t);await e.findByText(/Custom instructions are appended to the system prompt/i),await e.findByRole("textbox",{name:/Project custom instructions/i})}},o={render:()=>p(()=>m(`Always run the full test suite before committing.
Prefer small, reviewable changes.`)),play:async({canvasElement:t})=>{await c(t).findByDisplayValue(/Always run the full test suite before committing/i)}},r={render:()=>p(()=>m()),play:async({canvasElement:t})=>{const e=c(t),n=await e.findByRole("textbox",{name:/Project custom instructions/i});await d(()=>l(n).toBeEnabled()),await E.type(n,"Never commit directly to main.");const a=await e.findByRole("button",{name:/^Save$/i});await d(()=>l(a).toBeEnabled())}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => renderInstructionsSection(() => setupInstructionsStory()),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Custom instructions are appended to the system prompt/i);
    await canvas.findByRole("textbox", {
      name: /Project custom instructions/i
    });
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => renderInstructionsSection(() => setupInstructionsStory("Always run the full test suite before committing.\\nPrefer small, reviewable changes.")),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByDisplayValue(/Always run the full test suite before committing/i);
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderInstructionsSection(() => setupInstructionsStory()),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = await canvas.findByRole("textbox", {
      name: /Project custom instructions/i
    });
    // Projects load asynchronously; until one is selected the textarea is
    // disabled and userEvent.type would silently no-op (flaked in Pixel).
    await waitFor(() => expect(textarea).toBeEnabled());
    await userEvent.type(textarea, "Never commit directly to main.");
    const saveButton = await canvas.findByRole("button", {
      name: /^Save$/i
    });
    await waitFor(() => expect(saveButton).toBeEnabled());
  }
}`,...r.parameters?.docs?.source}}};const X=["Empty","WithSavedInstructions","DirtyDraftEnablesSave"];export{r as DirtyDraftEnablesSave,s as Empty,o as WithSavedInstructions,X as __namedExportsOrder,Q as default};
