import{j as e}from"./iframe-C48Cgo5e.js";import{l as m}from"./meta-BMDQogfB.js";import{S as r}from"./SecuritySection-CRylFbIM.js";import{S as c,a as p}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";const{within:d}=__STORYBOOK_MODULE_TEST__,Y={...m,title:"Settings/Sections/SecuritySection",component:r},o={render:()=>e.jsx(c,{setup:()=>p([]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);await t.findByText(/Project Trust/i),await t.findByText(/No projects added yet\./i)}},a={render:()=>e.jsx(c,{setup:()=>p([{name:"my-app",path:"/Users/dev/my-app",trusted:!0},{name:"untrusted-repo",path:"/Users/dev/untrusted-repo",trusted:!1},{name:"another-project",path:"/Users/dev/another-project",trusted:!0}]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);await t.findByText(/Project Trust/i),await t.findByRole("button",{name:/^Trust untrusted-repo$/i});const s=await t.findAllByRole("button",{name:/^Revoke trust for /i});if(s.length!==2)throw new Error(`Expected 2 Revoke trust buttons, got ${s.length}`)}},i={render:()=>e.jsx(c,{setup:()=>p([{name:"my-app",path:"/Users/dev/my-app",trusted:!0},{name:"payments-service",path:"/Users/dev/payments-service",trusted:!0}]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);if(await t.findByText(/Project Trust/i),(await t.findAllByRole("button",{name:/^Revoke trust for /i})).length===0)throw new Error("Expected at least one Revoke trust button");if(t.queryByRole("button",{name:/^Trust /i}))throw new Error("Expected no Trust buttons when all projects are trusted")}},u={render:()=>e.jsx(c,{setup:()=>p([{name:"my-app",path:"/Users/dev/my-app",trusted:!1},{name:"legacy-repo",path:"/Users/dev/legacy-repo",trusted:!1}]),children:e.jsx(r,{})}),play:async({canvasElement:n})=>{const t=d(n);if(await t.findByText(/Project Trust/i),(await t.findAllByRole("button",{name:/^Trust /i})).length===0)throw new Error("Expected at least one Trust button");if(t.queryByRole("button",{name:/^Revoke trust for /i}))throw new Error("Expected no Revoke trust buttons when all projects are untrusted")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    await canvas.findByText(/No projects added yet\\./i);
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([{
    name: "my-app",
    path: "/Users/dev/my-app",
    trusted: true
  }, {
    name: "untrusted-repo",
    path: "/Users/dev/untrusted-repo",
    trusted: false
  }, {
    name: "another-project",
    path: "/Users/dev/another-project",
    trusted: true
  }])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    await canvas.findByRole("button", {
      name: /^Trust untrusted-repo$/i
    });
    const revokeButtons = await canvas.findAllByRole("button", {
      name: /^Revoke trust for /i
    });
    if (revokeButtons.length !== 2) {
      throw new Error(\`Expected 2 Revoke trust buttons, got \${revokeButtons.length}\`);
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([{
    name: "my-app",
    path: "/Users/dev/my-app",
    trusted: true
  }, {
    name: "payments-service",
    path: "/Users/dev/payments-service",
    trusted: true
  }])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    const revokeButtons = await canvas.findAllByRole("button", {
      name: /^Revoke trust for /i
    });
    if (revokeButtons.length === 0) {
      throw new Error("Expected at least one Revoke trust button");
    }
    if (canvas.queryByRole("button", {
      name: /^Trust /i
    })) {
      throw new Error("Expected no Trust buttons when all projects are trusted");
    }
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSecurityStory([{
    name: "my-app",
    path: "/Users/dev/my-app",
    trusted: false
  }, {
    name: "legacy-repo",
    path: "/Users/dev/legacy-repo",
    trusted: false
  }])}>
      <SecuritySection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Project Trust/i);
    const trustButtons = await canvas.findAllByRole("button", {
      name: /^Trust /i
    });
    if (trustButtons.length === 0) {
      throw new Error("Expected at least one Trust button");
    }
    if (canvas.queryByRole("button", {
      name: /^Revoke trust for /i
    })) {
      throw new Error("Expected no Revoke trust buttons when all projects are untrusted");
    }
  }
}`,...u.parameters?.docs?.source}}};const z=["SecurityEmpty","SecurityMixedTrust","SecurityAllTrusted","SecurityAllUntrusted"];export{i as SecurityAllTrusted,u as SecurityAllUntrusted,o as SecurityEmpty,a as SecurityMixedTrust,z as __namedExportsOrder,Y as default};
