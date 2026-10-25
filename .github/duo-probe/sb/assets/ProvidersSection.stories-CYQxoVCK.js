import{j as t}from"./iframe-DpCW2UOM.js";import{P as B,l as C}from"./meta-BwRgvoZ6.js";import{P as r}from"./ProvidersSection-B9ulLBQH.js";import{S as o,s}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./flowId-B1kfzhma.js";import"./grip-vertical-D5evcSDG.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:i,userEvent:d,waitFor:w,within:c}=__STORYBOOK_MODULE_TEST__,ae={...C,title:"Settings/Sections/ProvidersSection",component:r,parameters:{pixel:B}},m={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{const e=c(n);await w(()=>{if(e.queryAllByText(/No providers are currently enabled\./i).length===0)throw new Error("Expected empty providers message to render")},{timeout:5e3})}},y={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:""},openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"https://custom.openai.com/v1"},xai:{apiKeySet:!1,isEnabled:!0,isConfigured:!1,baseUrl:""}}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{await c(n).findAllByTitle(/^Configured$/i,{},{timeout:5e3})}},v={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{openai:{apiKeySet:!1,apiKeySource:"env",isEnabled:!0,isConfigured:!0,baseUrlSource:"env",baseUrlResolved:"https://env.openai.test/v1"}}}),children:t.jsx(r,{})}),parameters:{pixel:B},play:async({canvasElement:n})=>{const e=c(n),a=await e.findByRole("button",{name:/openai/i});await d.click(a),await e.findByText("https://env.openai.test/v1"),await w(()=>{if(e.queryAllByText(/Set by env vars\./i).length<2)throw new Error("Expected env source labels for OpenAI key and base URL")})}},p={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{layout:"fullscreen",pixel:{exclude:!1,matrix:{themes:["dark"],viewports:["phone"]}}},render:()=>t.jsx(o,{setup:()=>s({providersConfig:{meta:{apiKeySet:!1,isEnabled:!0,isConfigured:!1},openai:{apiKeySet:!1,apiKeySource:"env",isEnabled:!0,isConfigured:!0,baseUrlSource:"env",baseUrlResolved:"https://env.openai.test/v1"}}}),children:t.jsx("div",{"data-testid":"phone-frame",style:{width:375,maxWidth:"100%"},children:t.jsx(r,{})})}),play:async({canvasElement:n})=>{const e=c(n),a=e.getByTestId("phone-frame").getBoundingClientRect();await d.click(await e.findByRole("button",{name:/openai/i}));const E=(await e.findByText("Use OpenAI API key by default")).closest("[role='group']");if(!(E instanceof HTMLElement))throw new Error("Expected the default-auth toggle group");await i(E.getBoundingClientRect().right).toBeLessThanOrEqual(a.right);const u=await e.findByRole("button",{name:"Add provider"});await i(u.getBoundingClientRect().right).toBeLessThanOrEqual(a.right),await i(u.scrollWidth).toBeLessThanOrEqual(u.clientWidth),await i(getComputedStyle(u).flexShrink).toBe("0");const b=await e.findByRole("button",{name:/^Meta/});await i(b.getBoundingClientRect().right).toBeLessThanOrEqual(a.right),await i(b.querySelector("svg path")).not.toBeNull(),await d.click(b);const x=await e.findByRole("link",{name:/Get API Key/});await i(x.getBoundingClientRect().right).toBeLessThanOrEqual(a.right),await i(x).toHaveAttribute("href","https://dev.meta.ai/docs")}},g={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{xai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,serviceTier:"priority"}}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{const e=c(n),a=await e.findByRole("button",{name:/xAI/i});await d.click(a),await e.findByText("fast (priority)")}},h={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,cyberModelEnabled:!0}}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{const e=c(n);await d.click(await e.findByRole("button",{name:/openai/i})),await i(await e.findByRole("switch",{name:"Enable cyber model"})).toHaveAttribute("aria-checked","true")}},f={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:""},openai:{apiKeySet:!1,isEnabled:!0,isConfigured:!1,baseUrl:""},xai:{apiKeySet:!1,isEnabled:!0,isConfigured:!1,baseUrl:""}}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{const e=c(n),a=await e.findByRole("button",{name:/openai/i});await d.click(a),await e.findByRole("link",{name:/get api key/i})}},S={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{coder:{apiKeySet:!1,isEnabled:!0,isConfigured:!0,deploymentUrl:"https://coder.example.com",coderOauthSet:!0,discoveredProviders:[{name:"anthropic",type:"anthropic"},{name:"anthropic-bedrock",type:"anthropic"},{name:"openai",type:"openai"}],canonicalRoutes:{anthropic:"anthropic-bedrock",openai:"openai-removed"}}}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{const e=c(n);await d.click(await e.findByRole("button",{name:/^Coder/})),await e.findByText("Model routing"),await e.findByText(/openai-removed is not a known OpenAI provider/)}},l={render:()=>t.jsx(o,{setup:()=>s({providersConfig:{}}),children:t.jsx(r,{})}),play:async({canvasElement:n})=>{const a=await c(n).findByRole("switch",{name:"Count AI calls from bash commands"},{timeout:5e3});await w(()=>i(a).toHaveAttribute("aria-checked","false")),await d.click(a),await w(()=>i(a).toHaveAttribute("aria-checked","true"))}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {}
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      if (canvas.queryAllByText(/No providers are currently enabled\\./i).length === 0) {
        throw new Error("Expected empty providers message to render");
      }
    }, {
      timeout: 5000
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: ""
      },
      openai: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: "https://custom.openai.com/v1"
      },
      xai: {
        apiKeySet: false,
        isEnabled: true,
        isConfigured: false,
        baseUrl: ""
      }
    }
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findAllByTitle(/^Configured$/i, {}, {
      timeout: 5000
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      openai: {
        apiKeySet: false,
        apiKeySource: "env",
        isEnabled: true,
        isConfigured: true,
        baseUrlSource: "env",
        baseUrlResolved: "https://env.openai.test/v1"
      }
    }
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  parameters: {
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openaiButton = await canvas.findByRole("button", {
      name: /openai/i
    });
    await userEvent.click(openaiButton);
    await canvas.findByText("https://env.openai.test/v1");
    await waitFor(() => {
      if (canvas.queryAllByText(/Set by env vars\\./i).length < 2) {
        throw new Error("Expected env source labels for OpenAI key and base URL");
      }
    });
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    layout: "fullscreen",
    // The meta disables Pixel; parameters deep-merge, so re-enable explicitly.
    pixel: {
      exclude: false,
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      meta: {
        apiKeySet: false,
        isEnabled: true,
        isConfigured: false
      },
      openai: {
        apiKeySet: false,
        apiKeySource: "env",
        isEnabled: true,
        isConfigured: true,
        baseUrlSource: "env",
        baseUrlResolved: "https://env.openai.test/v1"
      }
    }
  })}>
      {/* Fixed phone width so the play's overflow assertions hold in the CI
          test-runner too, which ignores viewport globals (AGENTS.md). 375px matches
          the \`mobile1\` viewport global; maxWidth keeps the frame inside narrower views. */}
      <div data-testid="phone-frame" style={{
      width: 375,
      maxWidth: "100%"
    }}>
        <ProvidersSection />
      </div>
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = canvas.getByTestId("phone-frame").getBoundingClientRect();
    await userEvent.click(await canvas.findByRole("button", {
      name: /openai/i
    }));
    const apiKeyOption = await canvas.findByText("Use OpenAI API key by default");
    const toggle = apiKeyOption.closest("[role='group']");
    if (!(toggle instanceof HTMLElement)) {
      throw new Error("Expected the default-auth toggle group");
    }
    await expect(toggle.getBoundingClientRect().right).toBeLessThanOrEqual(frame.right);
    const addProvider = await canvas.findByRole("button", {
      name: "Add provider"
    });
    await expect(addProvider.getBoundingClientRect().right).toBeLessThanOrEqual(frame.right);
    await expect(addProvider.scrollWidth).toBeLessThanOrEqual(addProvider.clientWidth);
    // Chromium never shrinks a nowrap button below its label, but iOS Safari did:
    // the button must opt out of flex shrinking for the label to stay inside it.
    await expect(getComputedStyle(addProvider).flexShrink).toBe("0");

    // First-class Meta uses the same credential form and stays inside the phone card.
    const metaButton = await canvas.findByRole("button", {
      name: /^Meta/
    });
    await expect(metaButton.getBoundingClientRect().right).toBeLessThanOrEqual(frame.right);
    await expect(metaButton.querySelector("svg path")).not.toBeNull();
    await userEvent.click(metaButton);
    const keyLink = await canvas.findByRole("link", {
      name: /Get API Key/
    });
    await expect(keyLink.getBoundingClientRect().right).toBeLessThanOrEqual(frame.right);
    await expect(keyLink).toHaveAttribute("href", "https://dev.meta.ai/docs");
  }
}`,...p.parameters?.docs?.source},description:{story:`Pinned phone viewport for the rows that overflowed at narrow widths: the OpenAI
default-auth toggle must wrap inside the card, and the custom-provider "Add provider"
button must keep its label width (AGENTS.md Storybook responsive rule).`,...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      xai: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        serviceTier: "priority"
      }
    }
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const xaiButton = await canvas.findByRole("button", {
      name: /xAI/i
    });
    await userEvent.click(xaiButton);
    await canvas.findByText("fast (priority)");
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      openai: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        cyberModelEnabled: true
      }
    }
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: /openai/i
    }));
    await expect(await canvas.findByRole("switch", {
      name: "Enable cyber model"
    })).toHaveAttribute("aria-checked", "true");
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: ""
      },
      openai: {
        apiKeySet: false,
        isEnabled: true,
        isConfigured: false,
        baseUrl: ""
      },
      xai: {
        apiKeySet: false,
        isEnabled: true,
        isConfigured: false,
        baseUrl: ""
      }
    }
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openaiButton = await canvas.findByRole("button", {
      name: /openai/i
    });
    await userEvent.click(openaiButton);
    await canvas.findByRole("link", {
      name: /get api key/i
    });
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      coder: {
        apiKeySet: false,
        isEnabled: true,
        isConfigured: true,
        deploymentUrl: "https://coder.example.com",
        coderOauthSet: true,
        discoveredProviders: [{
          name: "anthropic",
          type: "anthropic"
        }, {
          name: "anthropic-bedrock",
          type: "anthropic"
        }, {
          name: "openai",
          type: "openai"
        }],
        canonicalRoutes: {
          anthropic: "anthropic-bedrock",
          openai: "openai-removed"
        }
      }
    }
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: /^Coder/
    }));
    await canvas.findByText("Model routing");
    await canvas.findByText(/openai-removed is not a known OpenAI provider/);
  }
}`,...S.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {}
  })}>
      <ProvidersSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("switch", {
      name: "Count AI calls from bash commands"
    }, {
      timeout: 5000
    });
    await waitFor(() => expect(toggle).toHaveAttribute("aria-checked", "false"));
    await userEvent.click(toggle);
    // A failed save rolls the switch back.
    await waitFor(() => expect(toggle).toHaveAttribute("aria-checked", "true"));
  }
}`,...l.parameters?.docs?.source},description:{story:"The Bash commands switch saves through the API and stays on.",...l.parameters?.docs?.description}}};const ie=["ProvidersEmpty","ProvidersConfigured","ProvidersEnvSourced","ProvidersPhoneViewport","XAIProcessingMode","OpenAICyberModelEnabled","ProvidersExpanded","CoderModelRouting","BashCommandsSwitch"];export{l as BashCommandsSwitch,S as CoderModelRouting,h as OpenAICyberModelEnabled,y as ProvidersConfigured,m as ProvidersEmpty,v as ProvidersEnvSourced,f as ProvidersExpanded,p as ProvidersPhoneViewport,g as XAIProcessingMode,ie as __namedExportsOrder,ae as default};
