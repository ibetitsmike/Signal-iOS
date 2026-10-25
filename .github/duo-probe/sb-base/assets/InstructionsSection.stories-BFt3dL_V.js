import{j as i,s as w}from"./iframe-C48Cgo5e.js";import{l as f}from"./meta-BMDQogfB.js";import{c as S}from"./orpc-qlMSh58E.js";import{c as u,g as x}from"./workspaces-DZcvJb83.js";import{I as v}from"./InstructionsSection-CRyhY1v2.js";import{S as h}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";const{expect:l,userEvent:E,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,y="/Users/test/my-app",b="/Users/test/other-app";function m(t){const e=[u({id:"ws-instructions-a",name:"main",projectName:"my-app",projectPath:y}),u({id:"ws-instructions-b",name:"main",projectName:"other-app",projectPath:b})];w(e[0]);const n=x(e),a=n.get(y);return a&&t&&(a.customInstructions=t),S({workspaces:e,projects:n})}const Q={...f,title:"Settings/Sections/InstructionsSection",component:v};function p(t){return i.jsx(h,{setup:t,children:i.jsx("div",{className:"bg-background p-6",children:i.jsx(v,{})})})}const s={render:()=>p(()=>m()),play:async({canvasElement:t})=>{const e=c(t);await e.findByText(/Custom instructions are appended to the system prompt/i),await e.findByRole("textbox",{name:/Project custom instructions/i})}},o={render:()=>p(()=>m(`Always run the full test suite before committing.
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
