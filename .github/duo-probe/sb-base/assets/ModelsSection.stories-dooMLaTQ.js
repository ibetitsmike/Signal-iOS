import{j as r,u as B,aR as E}from"./iframe-C48Cgo5e.js";import{l as S,P as f}from"./meta-BMDQogfB.js";import{M as c}from"./ModelsSection-BRuc4zaw.js";import{S as p,s as v}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./autoModelRouting-B76RJT77.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";const{expect:n,userEvent:t,waitFor:x,within:i}=__STORYBOOK_MODULE_TEST__,te={...S,title:"Settings/Sections/ModelsSection",component:c},w={render:()=>r.jsx(p,{setup:()=>{const o=v({providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:[]},openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:[]}}});return B(E,"openai"),o},children:r.jsx(c,{})}),play:async({canvasElement:o})=>{const e=i(o);await x(()=>{if(e.queryAllByText(/Built-in Models/i).length===0)throw new Error("Expected Built-in Models to render")},{timeout:5e3}),await t.type(e.getByRole("combobox",{name:"Model ID"}),"fable");const a=await e.findByRole("option",{name:/claude-fable-5$/});await n(a).toHaveTextContent("Anthropic"),await n(e.queryByRole("option",{name:/claude-fable-5-1/})).toBeNull()}},y={render:()=>r.jsx(p,{setup:()=>v({userPreferences:{ai:{providerOptions:{anthropic:{use1MContextModels:["anthropic:claude-sonnet-4-20250514"]}}}},providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:["claude-sonnet-4-20250514","claude-opus-4-8"]},openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:["gpt-4o","gpt-4o-mini","o1-preview"]},xai:{apiKeySet:!1,isEnabled:!0,isConfigured:!1,baseUrl:"",models:["grok-beta"]}}}),children:r.jsx(c,{})}),play:async({canvasElement:o})=>{const e=i(o);await x(()=>{if(e.queryAllByText(/claude-sonnet-4-20250514/i).length===0)throw new Error("Expected claude-sonnet-4-20250514 to render")},{timeout:5e3}),await x(()=>{if(e.queryAllByText(/^gpt-4o$/i).length===0)throw new Error("Expected gpt-4o to render")},{timeout:5e3}),await t.click(e.getByRole("combobox",{name:"Provider"})),await t.click(i(document.body).getByRole("option",{name:/Anthropic/}));const a=e.getByRole("combobox",{name:"Model ID"});await t.click(a),await n(e.queryByRole("listbox")).toBeNull(),await t.type(a,"custom/manual-model"),await t.click(e.getByRole("button",{name:"Add"})),await e.findByText("custom/manual-model"),await n(a).toHaveValue("")}},R=["anthropic/claude-x","anthropic/claude-y","openai/gpt-z"],l=[];function b(){const o=v({providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:[]},coder:{apiKeySet:!1,coderOauthSet:!0,isEnabled:!0,isConfigured:!0,models:["anthropic/claude-x"],discoveredModels:R}},providersList:["anthropic","coder"]});return B(E,"coder"),l.length=0,o.providers.setModels=e=>(l.push(e),Promise.resolve({success:!0,data:void 0})),o}const m={render:()=>r.jsx(p,{setup:b,children:r.jsx(c,{})}),play:async({canvasElement:o})=>{const e=i(o);await e.findByText("anthropic/claude-x"),await n(e.queryByText(/claude-y/)).toBeNull();const a=e.getByRole("combobox",{name:"Model ID"});await t.click(a);const d=await e.findByRole("listbox");await n(i(d).getAllByRole("option")).toHaveLength(2),await n(i(d).queryByRole("option",{name:/claude-x/})).toBeNull(),await t.type(a,"anthropic/claude"),await n(i(d).getAllByRole("option")).toHaveLength(1),await t.keyboard("{ArrowDown}"),await t.click(e.getByRole("combobox",{name:"Provider"})),await t.click(i(document.body).getByRole("option",{name:/Anthropic/})),await t.click(a),await n(e.queryByRole("listbox")).toBeNull(),await t.click(e.getByRole("combobox",{name:"Provider"})),await t.click(i(document.body).getByRole("option",{name:/Coder/})),await t.click(a),await t.keyboard("{Enter}"),await e.findByText("anthropic/claude"),await n(l.at(-1)?.models).toEqual(["anthropic/claude-x","anthropic/claude"]),await n(a).toHaveValue(""),await t.type(a,"anthropic/claude{Enter}"),await e.findByText(/already exists for this provider/),await n(a).toHaveValue("anthropic/claude"),await n(l).toHaveLength(1),await t.clear(a),await t.click(a),await t.click(e.getByRole("option",{name:"anthropic/claude-y"})),await e.findByText("anthropic/claude-y"),await n(l).toHaveLength(2),await n(a).toHaveValue(""),await t.type(a,"gpt"),await t.keyboard("{ArrowDown}{Escape}"),await n(e.queryByRole("listbox")).toBeNull(),await n(a).toHaveValue("gpt"),await n(l).toHaveLength(2),await t.keyboard("{ArrowDown}{Enter}"),await e.findByText("openai/gpt-z"),await n(l.at(-1)).toEqual({provider:"coder",models:["anthropic/claude-x","anthropic/claude","anthropic/claude-y","openai/gpt-z"]}),await t.click(a),await n(e.queryByRole("listbox")).toBeNull(),await t.type(a,"custom/after-catalog{Enter}"),await e.findByText("custom/after-catalog")}},g={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}},docs:{description:{story:"Pins the phone-width contract for the add row: the single model field and its suggestions fit without right-edge overflow."}}},render:()=>r.jsx("div",{style:{width:390,maxWidth:"100%"},children:r.jsx(p,{setup:b,children:r.jsx(c,{})})}),play:async({canvasElement:o})=>{const e=i(o);await e.findByText("anthropic/claude-x");const a=e.getByRole("combobox",{name:"Model ID"}),d=e.getByRole("button",{name:"Add"});let s=a.parentElement;for(;s&&!s.contains(d);)s=s.parentElement;if(!s)throw new Error("Expected the model field and Add button in one add row");await n(s.getBoundingClientRect().width).toBeLessThanOrEqual(390),await n(s.scrollWidth).toBeLessThanOrEqual(s.clientWidth),await t.type(a,"claude");const u=await e.findByRole("listbox");await i(u).findByRole("group",{name:"From catalogue"}),await n(i(u).getByRole("group",{name:"Discovered models"})).toBeTruthy(),await n(u.getBoundingClientRect().right).toBeLessThanOrEqual(s.getBoundingClientRect().right),await n(u.scrollWidth).toBeLessThanOrEqual(u.clientWidth)}},C=Array.from({length:60},(o,e)=>`custom-model-${String(e+1).padStart(2,"0")}`),h={parameters:{pixel:f},render:()=>r.jsx(p,{setup:()=>v({providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:C}}}),children:r.jsx(c,{})})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => {
    const client = setupSettingsStory({
      providersConfig: {
        anthropic: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true,
          baseUrl: "",
          models: []
        },
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true,
          baseUrl: "",
          models: []
        }
      }
    });
    // With OpenAI selected, the Anthropic catalogue match shows that
    // suggestions name their own provider.
    updatePersistedState(LAST_CUSTOM_MODEL_PROVIDER_KEY, "openai");
    return client;
  }}>
      <ModelsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      if (canvas.queryAllByText(/Built-in Models/i).length === 0) {
        throw new Error("Expected Built-in Models to render");
      }
    }, {
      timeout: 5000
    });

    // Older models replaced by a newer built-in are found in the real catalogue
    // search. Stops with the list open so the snapshot shows the suggestions;
    // adding is covered by ModelsSection.discovery.test.tsx.
    await userEvent.type(canvas.getByRole("combobox", {
      name: "Model ID"
    }), "fable");
    const option = await canvas.findByRole("option", {
      name: /claude-fable-5$/
    });
    await expect(option).toHaveTextContent("Anthropic");
    await expect(canvas.queryByRole("option", {
      name: /claude-fable-5-1/
    })).toBeNull();
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    userPreferences: {
      ai: {
        providerOptions: {
          anthropic: {
            use1MContextModels: ["anthropic:claude-sonnet-4-20250514"]
          }
        }
      }
    },
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: "",
        models: ["claude-sonnet-4-20250514", "claude-opus-4-8"]
      },
      openai: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: "",
        models: ["gpt-4o", "gpt-4o-mini", "o1-preview"]
      },
      xai: {
        apiKeySet: false,
        isEnabled: true,
        isConfigured: false,
        baseUrl: "",
        models: ["grok-beta"]
      }
    }
  })}>
      <ModelsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      if (canvas.queryAllByText(/claude-sonnet-4-20250514/i).length === 0) {
        throw new Error("Expected claude-sonnet-4-20250514 to render");
      }
    }, {
      timeout: 5000
    });
    await waitFor(() => {
      if (canvas.queryAllByText(/^gpt-4o$/i).length === 0) {
        throw new Error("Expected gpt-4o to render");
      }
    }, {
      timeout: 5000
    });

    // A provider without a catalog still accepts arbitrary model IDs.
    await userEvent.click(canvas.getByRole("combobox", {
      name: "Provider"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: /Anthropic/
    }));
    const input = canvas.getByRole("combobox", {
      name: "Model ID"
    });
    await userEvent.click(input);
    await expect(canvas.queryByRole("listbox")).toBeNull();
    await userEvent.type(input, "custom/manual-model");
    await userEvent.click(canvas.getByRole("button", {
      name: "Add"
    }));
    await canvas.findByText("custom/manual-model");
    await expect(input).toHaveValue("");
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={setupCoderCatalogStory}>
      <ModelsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("anthropic/claude-x");
    await expect(canvas.queryByText(/claude-y/)).toBeNull();
    const input = canvas.getByRole("combobox", {
      name: "Model ID"
    });
    await userEvent.click(input);
    const list = await canvas.findByRole("listbox");
    await expect(within(list).getAllByRole("option")).toHaveLength(2);
    await expect(within(list).queryByRole("option", {
      name: /claude-x/
    })).toBeNull();

    // Typing filters suggestions, but Enter must not silently replace a manual ID.
    await userEvent.type(input, "anthropic/claude");
    await expect(within(list).getAllByRole("option")).toHaveLength(1);
    // Switching providers clears a previous keyboard selection.
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.click(canvas.getByRole("combobox", {
      name: "Provider"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: /Anthropic/
    }));
    await userEvent.click(input);
    await expect(canvas.queryByRole("listbox")).toBeNull();
    await userEvent.click(canvas.getByRole("combobox", {
      name: "Provider"
    }));
    await userEvent.click(within(document.body).getByRole("option", {
      name: /Coder/
    }));
    await userEvent.click(input);
    await userEvent.keyboard("{Enter}");
    await canvas.findByText("anthropic/claude");
    await expect(coderSetModelsCalls.at(-1)?.models).toEqual(["anthropic/claude-x", "anthropic/claude"]);
    await expect(input).toHaveValue("");

    // Rejected duplicates keep the typed ID and do not persist another entry.
    await userEvent.type(input, "anthropic/claude{Enter}");
    await canvas.findByText(/already exists for this provider/);
    await expect(input).toHaveValue("anthropic/claude");
    await expect(coderSetModelsCalls).toHaveLength(1);
    await userEvent.clear(input);
    await userEvent.click(input);

    // Pointer selection adds immediately via the same persistence path.
    await userEvent.click(canvas.getByRole("option", {
      name: "anthropic/claude-y"
    }));
    await canvas.findByText("anthropic/claude-y");
    await expect(coderSetModelsCalls).toHaveLength(2);
    await expect(input).toHaveValue("");

    // Escape keeps the query without adding; explicit arrow navigation selects.
    await userEvent.type(input, "gpt");
    await userEvent.keyboard("{ArrowDown}{Escape}");
    await expect(canvas.queryByRole("listbox")).toBeNull();
    await expect(input).toHaveValue("gpt");
    await expect(coderSetModelsCalls).toHaveLength(2);
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await canvas.findByText("openai/gpt-z");
    await expect(coderSetModelsCalls.at(-1)).toEqual({
      provider: "coder",
      models: ["anthropic/claude-x", "anthropic/claude", "anthropic/claude-y", "openai/gpt-z"]
    });
    await userEvent.click(input);
    await expect(canvas.queryByRole("listbox")).toBeNull();
    // The same field remains usable when every discovered entry is configured.
    await userEvent.type(input, "custom/after-catalog{Enter}");
    await canvas.findByText("custom/after-catalog");
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    },
    docs: {
      description: {
        story: "Pins the phone-width contract for the add row: the single model field and its suggestions fit without right-edge overflow."
      }
    }
  },
  // The test-runner ignores viewport globals; the wrapper enforces the width there too.
  render: () => <div style={{
    width: 390,
    maxWidth: "100%"
  }}>
      <SettingsSectionStory setup={setupCoderCatalogStory}>
        <ModelsSection />
      </SettingsSectionStory>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("anthropic/claude-x");
    const input = canvas.getByRole("combobox", {
      name: "Model ID"
    });
    const addButton = canvas.getByRole("button", {
      name: "Add"
    });
    let row = input.parentElement;
    while (row && !row.contains(addButton)) row = row.parentElement;
    if (!row) throw new Error("Expected the model field and Add button in one add row");
    await expect(row.getBoundingClientRect().width).toBeLessThanOrEqual(390);
    await expect(row.scrollWidth).toBeLessThanOrEqual(row.clientWidth);

    // Discovered and catalogue groups share the list; both must fit the row.
    await userEvent.type(input, "claude");
    const list = await canvas.findByRole("listbox");
    await within(list).findByRole("group", {
      name: "From catalogue"
    });
    await expect(within(list).getByRole("group", {
      name: "Discovered models"
    })).toBeTruthy();
    await expect(list.getBoundingClientRect().right).toBeLessThanOrEqual(row.getBoundingClientRect().right);
    await expect(list.scrollWidth).toBeLessThanOrEqual(list.clientWidth);
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: "",
        models: MANY_CUSTOM_MODELS
      }
    }
  })}>
      <ModelsSection />
    </SettingsSectionStory>
}`,...h.parameters?.docs?.source}}};const ne=["ModelsEmpty","ModelsConfigured","CoderCatalogDiscovered","CoderCatalogDiscoveredPhone","ManyCustomModelsFilterAndPaging"];export{m as CoderCatalogDiscovered,g as CoderCatalogDiscoveredPhone,h as ManyCustomModelsFilterAndPaging,y as ModelsConfigured,w as ModelsEmpty,ne as __namedExportsOrder,te as default};
