import{j as c,s as S}from"./iframe-DpCW2UOM.js";import{l as d}from"./meta-BwRgvoZ6.js";import{c as u}from"./orpc-DLtOjQkt.js";import{c as m,g as E}from"./workspaces-MVQPvkVv.js";import{S as y}from"./SecretsSection-D2U7Sn7L.js";import{S as T}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";const{userEvent:_,within:i}=__STORYBOOK_MODULE_TEST__;function p(a={}){const e="/Users/test/my-app",t="/Users/test/other-app",o=[m({id:"ws-secrets-a",name:"main",projectName:"my-app",projectPath:e}),m({id:"ws-secrets-b",name:"main",projectName:"other-app",projectPath:t})];return S(o[0]),u({workspaces:o,projects:E(o),globalSecrets:a.globalSecrets??[{key:"GLOBAL_TOKEN",value:"global-secret"}],projectSecrets:a.projectSecrets??new Map([[e,[{key:"PROJECT_TOKEN",value:"project-secret"}]],[t,[{key:"OTHER_TOKEN",value:"other-secret"}]]])})}const $={...d,title:"Settings/Sections/SecretsSection",component:y};function l(a){return c.jsx(T,{setup:a,children:c.jsx("div",{className:"bg-background p-6",children:c.jsx(y,{})})})}const r={render:()=>l(()=>p()),play:async({canvasElement:a})=>{const e=i(a);await e.findByText(/Secrets are stored in/i),await e.findByDisplayValue("GLOBAL_TOKEN")}},n={render:()=>l(()=>p({globalSecrets:[{key:"OPENAI_API_KEY",value:"sk-openai"},{key:"ANTHROPIC_API_KEY",value:"sk-anthropic"},{key:"GITHUB_TOKEN",value:"ghp_123"},{key:"SENTRY_AUTH_TOKEN",value:"sentry"}]})),play:async({canvasElement:a})=>{const e=i(a);await e.findByDisplayValue("OPENAI_API_KEY"),await e.findByDisplayValue("ANTHROPIC_API_KEY"),await e.findByDisplayValue("GITHUB_TOKEN"),await e.findByDisplayValue("SENTRY_AUTH_TOKEN")}},s={render:()=>l(()=>p()),play:async({canvasElement:a})=>{const e=i(a),t=await e.findByRole("radio",{name:/^Project$/i});await _.click(t),await e.findByText(/Select a project to configure/i),await e.findByDisplayValue("PROJECT_TOKEN")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderSecretsSection(() => setupSecretsStory()),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Secrets are stored in/i);
    await canvas.findByDisplayValue("GLOBAL_TOKEN");
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => renderSecretsSection(() => setupSecretsStory({
    globalSecrets: [{
      key: "OPENAI_API_KEY",
      value: "sk-openai"
    }, {
      key: "ANTHROPIC_API_KEY",
      value: "sk-anthropic"
    }, {
      key: "GITHUB_TOKEN",
      value: "ghp_123"
    }, {
      key: "SENTRY_AUTH_TOKEN",
      value: "sentry"
    }]
  })),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByDisplayValue("OPENAI_API_KEY");
    await canvas.findByDisplayValue("ANTHROPIC_API_KEY");
    await canvas.findByDisplayValue("GITHUB_TOKEN");
    await canvas.findByDisplayValue("SENTRY_AUTH_TOKEN");
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => renderSecretsSection(() => setupSecretsStory()),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const projectScopeToggle = await canvas.findByRole("radio", {
      name: /^Project$/i
    });
    await userEvent.click(projectScopeToggle);
    await canvas.findByText(/Select a project to configure/i);
    await canvas.findByDisplayValue("PROJECT_TOKEN");
  }
}`,...s.parameters?.docs?.source}}};const q=["GlobalSecretsView","PopulatedGlobalSecrets","ProjectSecrets"];export{r as GlobalSecretsView,n as PopulatedGlobalSecrets,s as ProjectSecrets,q as __namedExportsOrder,$ as default};
