import{j as k,f as b}from"./iframe-DpCW2UOM.js";import{a as x,A as B}from"./meta-BwRgvoZ6.js";import{d as R,g as f}from"./storyPlayHelpers-_VqAI56j.js";import{s as S}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:n,userEvent:a,waitFor:p,within:v}=__STORYBOOK_MODULE_TEST__,ee={...x,title:"App/PluginImports"},c={source:{type:"git",url:"https://github.com/example/review-tools.git",ref:"main",refType:"branch"},method:{kind:"agent-plugin"},methods:[{kind:"agent-plugin"}],skillsCliSkills:[],lockedSha:"a".repeat(40),manifest:{name:"review-tools",version:"1.0.0",description:"Review and research tools"},targetPath:"~/.xum/plugins/review-tools",skills:[{name:"review",description:"Picks the smallest change that fully solves the task, then reviews it for scope creep"},{name:"research",description:"Research a topic"}],mcpServers:[{serverName:"reference",transport:"stdio",summary:"node ${PLUGIN_ROOT}/servers/reference.js --read-only"}],agents:["reviewer.md"],workflows:["review.js"],slashCommands:[{name:"review-status",description:"Summarize review status"}],consentDigest:"c".repeat(64),reviewedComponents:[],codexHooks:[],hook:{path:"hooks.js",toolGrants:["file_read"]},warnings:[]};function y(t=!1,e=!1){b();const s=S({});let o={name:c.manifest.name,scope:"global",source:c.source,lockedSha:c.lockedSha,installedAt:"2026-09-01T00:00:00.000Z",importedComponents:{skills:["review"],mcpServers:[]}};return s.workspace.plugins={slashCommands:{list:()=>Promise.resolve([])},composition:{get:()=>Promise.resolve({plugins:[],diagnostics:[],skills:[],agents:[],workflows:[],mcpServers:[],slashCommands:[],hooks:[]})}},s.agentPlugins.preview=()=>Promise.resolve({success:!0,data:{kind:"plugin",preview:c}}),s.agentPlugins.checkUpdates=()=>Promise.resolve({success:!0,data:[]}),s.agentPlugins.list=()=>Promise.resolve({success:!0,data:t?[{...o,managed:!0,present:!0,location:c.targetPath,skillCount:2,mcpServerCount:1,importedSkillCount:o.importedComponents?.skills.length??2,importedMcpServerCount:o.importedComponents?.mcpServers.length??1}]:[]}),s.agentPlugins.listForSettings=async()=>({list:await s.agentPlugins.list(),pendingSignOuts:{kind:"none"}}),s.agentPlugins.getComponents=()=>Promise.resolve({success:!0,data:{...c,contentHash:"fixture-content-hash",importedComponents:o.importedComponents}}),s.agentPlugins.install=l=>(t=!0,o={...o,importedComponents:l.importedComponents??void 0},Promise.resolve({success:!0,data:o})),s.agentPlugins.setComponents=l=>e?(e=!1,o={...o,importedComponents:{skills:["review"],mcpServers:["reference"]}},Promise.resolve({success:!1,error:"Selection changed in another window"})):(o={...o,importedComponents:l.importedComponents},Promise.resolve({success:!0,data:o})),s}async function d(t){const e=v(await R(t));return await a.click(await e.findByRole("button",{name:"Plugins"})),e}async function h(){if(!(window.innerWidth>=768)){await p(()=>n(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth));for(const t of v(f()).getAllByRole("group"))await n(t.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth)}}const r={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},render:()=>k.jsx(B,{setup:y}),play:async({canvasElement:t})=>{const e=await d(t);await a.click(await e.findByRole("button",{name:"Add plugin"})),await a.type(e.getByLabelText("Git URL or owner/repo"),"example/review-tools"),await a.click(e.getByRole("button",{name:"Preview"}));for(const s of["Skills","MCP servers"]){const o=v(await e.findByRole("group",{name:s}));await a.click(o.getByRole("button",{name:"Clear"}));for(const l of o.getAllByRole("checkbox"))await n(l).not.toBeChecked()}await n(e.getByRole("button",{name:"Install"})).toBeEnabled(),await h(),e.getByRole("group",{name:"Skills"}).scrollIntoView({block:"start"})}},m={...r,play:async t=>{await n(t.parameters.pixel.matrix.viewports).toContain("phone"),await r.play?.(t)},globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark"],viewports:["phone"]}}}},i={...r,render:()=>k.jsx(B,{setup:()=>y(!0)}),play:async({canvasElement:t})=>{const e=await d(t);await a.click(await e.findByRole("button",{name:"Manage components for review-tools"})),await n(await e.findByRole("checkbox",{name:"review"})).toBeEnabled(),await n(e.getByRole("button",{name:"Save changes"})).toBeDisabled(),await a.click(e.getByRole("checkbox",{name:"review"})),await a.click(e.getByRole("checkbox",{name:"research"})),await a.click(e.getByRole("button",{name:"Save changes"})),await p(()=>n(e.getByRole("button",{name:"Done"})).toBeEnabled()),await n(e.getByRole("checkbox",{name:"review"})).not.toBeChecked(),await n(e.getByRole("checkbox",{name:"research"})).toBeChecked(),await a.click(e.getByRole("button",{name:"Done"})),await a.click(e.getByRole("button",{name:"Manage components for review-tools"})),await n(await e.findByRole("checkbox",{name:"review"})).not.toBeChecked(),await n(e.getByRole("checkbox",{name:"research"})).toBeChecked(),await n(e.getByRole("button",{name:"Save changes"})).toBeDisabled(),await h()}},w={...i,play:async t=>{await n(t.parameters.pixel.matrix.viewports).toContain("phone"),await i.play?.(t)},globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark"],viewports:["phone"]}}}},u={...i,play:async({canvasElement:t})=>{const e=await d(t);await a.click(await e.findByRole("button",{name:"Manage components for review-tools"}));const s=v(await e.findByRole("group",{name:"Skills"}));await a.click(s.getByRole("button",{name:"Clear"})),await n(e.getByRole("button",{name:"Save changes"})).toBeEnabled(),await a.click(e.getByRole("button",{name:"Save changes"})),await e.findByText(/0 of 2 skills imported/),await p(()=>n(e.getByRole("button",{name:"Done"})).toBeEnabled());for(const o of e.getAllByRole("checkbox"))await n(o).not.toBeChecked();await n(e.getByRole("button",{name:"Manage components for review-tools"})).toBeEnabled(),await h()}},g={...i,render:()=>k.jsx(B,{setup:()=>y(!0,!0)}),play:async({canvasElement:t})=>{const e=await d(t);await a.click(await e.findByRole("button",{name:"Manage components for review-tools"})),await a.click(await e.findByRole("checkbox",{name:"research"})),await a.click(e.getByRole("button",{name:"Save changes"})),await e.findByRole("alert"),await p(()=>n(e.getByRole("checkbox",{name:"reference"})).toBeChecked()),await n(e.getByRole("checkbox",{name:"research"})).not.toBeChecked(),await n(e.getByRole("button",{name:"Save changes"})).toBeDisabled(),await a.click(e.getByRole("checkbox",{name:"research"})),await a.click(e.getByRole("button",{name:"Save changes"})),await e.findByText(/2 of 2 skills imported/),await p(()=>n(e.getByRole("button",{name:"Done"})).toBeEnabled()),await n(e.queryByRole("alert")).not.toBeInTheDocument(),await h()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["desktop"]
      }
    }
  },
  render: () => <AppWithMocks setup={setupPluginSettings} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = await openPlugins(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Add plugin"
    }));
    await userEvent.type(canvas.getByLabelText("Git URL or owner/repo"), "example/review-tools");
    await userEvent.click(canvas.getByRole("button", {
      name: "Preview"
    }));
    for (const label of ["Skills", "MCP servers"]) {
      const group = within(await canvas.findByRole("group", {
        name: label
      }));
      await userEvent.click(group.getByRole("button", {
        name: "Clear"
      }));
      for (const checkbox of group.getAllByRole("checkbox")) await expect(checkbox).not.toBeChecked();
    }
    await expect(canvas.getByRole("button", {
      name: "Install"
    })).toBeEnabled();
    await checkPhoneBounds();
    canvas.getByRole("group", {
      name: "Skills"
    }).scrollIntoView({
      block: "start"
    });
  }
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...PreviewDesktop,
  play: async context => {
    await expect(context.parameters.pixel.matrix.viewports).toContain("phone");
    await PreviewDesktop.play?.(context);
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...PreviewDesktop,
  render: () => <AppWithMocks setup={() => setupPluginSettings(true)} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = await openPlugins(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Manage components for review-tools"
    }));
    await expect(await canvas.findByRole("checkbox", {
      name: "review"
    })).toBeEnabled();
    await expect(canvas.getByRole("button", {
      name: "Save changes"
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole("checkbox", {
      name: "review"
    }));
    await userEvent.click(canvas.getByRole("checkbox", {
      name: "research"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Save changes"
    }));
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Done"
    })).toBeEnabled());
    await expect(canvas.getByRole("checkbox", {
      name: "review"
    })).not.toBeChecked();
    await expect(canvas.getByRole("checkbox", {
      name: "research"
    })).toBeChecked();
    await userEvent.click(canvas.getByRole("button", {
      name: "Done"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Manage components for review-tools"
    }));
    await expect(await canvas.findByRole("checkbox", {
      name: "review"
    })).not.toBeChecked();
    await expect(canvas.getByRole("checkbox", {
      name: "research"
    })).toBeChecked();
    await expect(canvas.getByRole("button", {
      name: "Save changes"
    })).toBeDisabled();
    await checkPhoneBounds();
  }
}`,...i.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...ManageComponentsDesktop,
  play: async context => {
    await expect(context.parameters.pixel.matrix.viewports).toContain("phone");
    await ManageComponentsDesktop.play?.(context);
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  }
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...ManageComponentsDesktop,
  play: async ({
    canvasElement
  }) => {
    const canvas = await openPlugins(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Manage components for review-tools"
    }));
    const group = within(await canvas.findByRole("group", {
      name: "Skills"
    }));
    await userEvent.click(group.getByRole("button", {
      name: "Clear"
    }));
    await expect(canvas.getByRole("button", {
      name: "Save changes"
    })).toBeEnabled();
    await userEvent.click(canvas.getByRole("button", {
      name: "Save changes"
    }));
    await canvas.findByText(/0 of 2 skills imported/);
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Done"
    })).toBeEnabled());
    for (const checkbox of canvas.getAllByRole("checkbox")) await expect(checkbox).not.toBeChecked();
    await expect(canvas.getByRole("button", {
      name: "Manage components for review-tools"
    })).toBeEnabled();
    await checkPhoneBounds();
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...ManageComponentsDesktop,
  render: () => <AppWithMocks setup={() => setupPluginSettings(true, true)} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = await openPlugins(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Manage components for review-tools"
    }));
    await userEvent.click(await canvas.findByRole("checkbox", {
      name: "research"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Save changes"
    }));
    await canvas.findByRole("alert");
    await waitFor(() => expect(canvas.getByRole("checkbox", {
      name: "reference"
    })).toBeChecked());
    await expect(canvas.getByRole("checkbox", {
      name: "research"
    })).not.toBeChecked();
    await expect(canvas.getByRole("button", {
      name: "Save changes"
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole("checkbox", {
      name: "research"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Save changes"
    }));
    await canvas.findByText(/2 of 2 skills imported/);
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Done"
    })).toBeEnabled());
    await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    await checkPhoneBounds();
  }
}`,...g.parameters?.docs?.source}}};const ne=["PreviewDesktop","PreviewPhone","ManageComponentsDesktop","ManageComponentsPhone","EmptySelection","SelectionConflict"];export{u as EmptySelection,i as ManageComponentsDesktop,w as ManageComponentsPhone,r as PreviewDesktop,m as PreviewPhone,g as SelectionConflict,ne as __namedExportsOrder,ee as default};
