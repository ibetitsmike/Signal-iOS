import{j as l}from"./iframe-DwmVy7SQ.js";import{a as k,P as f,A as d}from"./meta-CT6GdK4g.js";import{d as h,g as C,a as D}from"./storyPlayHelpers-_VqAI56j.js";import{s as p}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";const{expect:a,waitFor:r,within:n,userEvent:s}=__STORYBOOK_MODULE_TEST__,se={...k,title:"Settings/SettingsPage"},M=["General","Agents","Heartbeats","Providers","Models","MCP","Secrets","Security","Server Access","Runtimes","Experiments","Keybinds","Backup"],T={General:/Theme/i,Agents:/Max Parallel Agent Tasks/i,Heartbeats:/Default interval/i,Providers:/Configure API keys and endpoints for AI providers|API Key/i,Models:/Custom Models|Built-in Models/i,MCP:/MCP Servers/i,Secrets:/Secrets are stored in/i,Security:/Project Trust/i,"Server Access":/Server access sessions/i,Runtimes:/Default runtime/i,Experiments:/Experimental features that are still in development/i,Keybinds:/Open agent picker/i,Backup:/Settings backup/i};async function S(o,t){await s.click(await n(o).findByRole("button",{name:new RegExp(`^${t}$`,"i")}))}async function v(o,t){const e=n(o),i=T[t];await r(()=>{if(e.queryAllByText(i).length===0)throw new Error(`Expected ${t} section content to render.`)},{timeout:2500})}async function L(){await r(()=>a(n(document.body).queryByRole("dialog",{name:"Settings"})).toBeNull())}async function b(){await r(async()=>{n(document.body).queryByRole("dialog",{name:"Settings"})?.getAttribute("data-state")==="open"&&await s.keyboard("{Escape}"),await a(n(document.body).queryByRole("dialog",{name:"Settings"})).toBeNull()},{timeout:5e3})}const u={parameters:{pixel:f},render:()=>l.jsx(d,{setup:()=>p({})}),play:async({canvasElement:o})=>{const t=await h(o);for(const e of M)await S(t,e),await v(t,e)}},E="story-custom-model",m={parameters:{pixel:f},render:()=>l.jsx(d,{setup:()=>p({providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0,baseUrl:"",models:[E]}}})}),play:async({canvasElement:o})=>{const t=await h(o),e=n(t);await S(t,"Models"),await s.click(await e.findByRole("button",{name:"Edit model"}));const i=await e.findByDisplayValue(E);await a(i).toHaveFocus(),await s.keyboard("{Escape}"),await r(()=>a(e.queryByDisplayValue(E)).toBeNull()),await a(C()).toBe(t),await a(e.getByRole("button",{name:"Edit model"})).toBeVisible(),t.focus(),await s.keyboard("{Escape}"),await L(),await r(()=>a(n(o).getByTestId("settings-button")).toHaveFocus())}},w={parameters:{pixel:f},render:()=>l.jsx(d,{setup:()=>p({})}),play:async({canvasElement:o})=>{const t=n(o.ownerDocument.body);await D(o);const e=o.querySelector('[data-component="ChatInputSection"]');if(!e)throw new Error("Chat input section not found");const i=n(e).getByRole("textbox");await s.click(i),await s.keyboard("{Control>}{Shift>}p{/Shift}{/Control}"),await s.keyboard(">Settings: Models{Enter}"),await t.findByRole("dialog",{name:"Settings"}),await b(),await r(()=>a(i).toHaveFocus()),await s.keyboard("typed"),await a(i).toHaveValue("typed");const c=e.querySelector('[data-component="ModelSelectorGroup"]');if(!c)throw new Error("Model selector not found");await s.click(n(c).getByRole("combobox")),await s.click(await t.findByRole("button",{name:"Model settings"})),await t.findByRole("dialog",{name:"Settings"}),await b(),await r(()=>a(i).toHaveFocus())}},g={render:()=>l.jsx(d,{setup:()=>p({heartbeatDefaultIntervalMs:45*6e4,heartbeatDefaultPrompt:"Review pending work before continuing."})}),play:async({canvasElement:o})=>{const t=await h(o);await S(t,"Heartbeats");const e=n(t),i=await e.findByLabelText("Default heartbeat threshold in minutes");await r(()=>a(i).toHaveValue(45));const c=await e.findByLabelText("Default heartbeat prompt");await r(()=>a(c).toHaveValue("Review pending work before continuing."))}},B={pixel:{matrix:{viewports:["phone"]}}},y={render:()=>l.jsx(d,{setup:()=>p({providersConfig:{coder:{apiKeySet:!1,isEnabled:!0,isConfigured:!0,deploymentUrl:"https://coder.example.com",coderOauthSet:!0,discoveredProviders:[{name:"anthropic",type:"anthropic"},{name:"openai",type:"openai"}],canonicalRoutes:{anthropic:"anthropic"}}}})}),globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:B,play:async({canvasElement:o,parameters:t})=>{await a(t.pixel).toEqual(B.pixel);const e=await h(o);await S(e,"Providers"),await v(e,"Providers"),await s.click(await n(e).findByRole("button",{name:/^Coder/}));const i=await n(e).findAllByRole("combobox",{name:/Coder provider$/});if(window.innerWidth<768){const c=e.getBoundingClientRect();await a(c.left).toBe(0),await a(c.width).toBe(window.innerWidth),await a(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth);const x=n(e).getByRole("button",{name:"Close settings"});await a(x.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);for(const R of i)await a(R.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth)}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  // Pixel budget: the App task and compaction settings stories already capture this
  // dialog on desktop, so this file's snapshot slot goes to PhoneFullScreen.
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => setupSettingsStory({})} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const dialog = await openSettingsDialog(canvasElement);
    for (const sectionLabel of BASE_SECTION_LABELS) {
      await clickSectionButton(dialog, sectionLabel);
      await assertSectionBodyRendered(dialog, sectionLabel);
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => setupSettingsStory({
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true,
        baseUrl: "",
        models: [CUSTOM_MODEL_ID]
      }
    }
  })} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const dialog = await openSettingsDialog(canvasElement);
    const settings = within(dialog);
    await clickSectionButton(dialog, "Models");

    // The custom model row's inline editor (ModelRow) cancels its own edit on Escape.
    await userEvent.click(await settings.findByRole("button", {
      name: "Edit model"
    }));
    const editor = await settings.findByDisplayValue(CUSTOM_MODEL_ID);
    await expect(editor).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(settings.queryByDisplayValue(CUSTOM_MODEL_ID)).toBeNull());
    await expect(getSettingsDialog()).toBe(dialog);
    await expect(settings.getByRole("button", {
      name: "Edit model"
    })).toBeVisible();
    dialog.focus();
    await userEvent.keyboard("{Escape}");
    await waitForSettingsClosed();
    // Settings has no DialogTrigger, so focus must be returned to the opener explicitly.
    await waitFor(() => expect(within(canvasElement).getByTestId("settings-button")).toHaveFocus());
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => setupSettingsStory({})} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await waitForChatInputAutofocusDone(canvasElement);
    const chatInput = canvasElement.querySelector<HTMLElement>('[data-component="ChatInputSection"]');
    if (!chatInput) {
      throw new Error("Chat input section not found");
    }
    const composer = within(chatInput).getByRole("textbox");
    await userEvent.click(composer);
    await userEvent.keyboard("{Control>}{Shift>}p{/Shift}{/Control}");
    await userEvent.keyboard(">Settings: Models{Enter}");
    await body.findByRole("dialog", {
      name: "Settings"
    });
    await closeSettingsWithEscape();
    await waitFor(() => expect(composer).toHaveFocus());
    await userEvent.keyboard("typed");
    await expect(composer).toHaveValue("typed");
    const modelSelector = chatInput.querySelector<HTMLElement>('[data-component="ModelSelectorGroup"]');
    if (!modelSelector) {
      throw new Error("Model selector not found");
    }
    await userEvent.click(within(modelSelector).getByRole("combobox"));
    await userEvent.click(await body.findByRole("button", {
      name: "Model settings"
    }));
    await body.findByRole("dialog", {
      name: "Settings"
    });
    await closeSettingsWithEscape();
    await waitFor(() => expect(composer).toHaveFocus());
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSettingsStory({
    heartbeatDefaultIntervalMs: 45 * 60_000,
    heartbeatDefaultPrompt: "Review pending work before continuing."
  })} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const dialog = await openSettingsDialog(canvasElement);
    await clickSectionButton(dialog, "Heartbeats");
    const settings = within(dialog);
    const threshold = await settings.findByLabelText("Default heartbeat threshold in minutes");
    await waitFor(() => expect(threshold).toHaveValue(45));
    const prompt = await settings.findByLabelText("Default heartbeat prompt");
    await waitFor(() => expect(prompt).toHaveValue("Review pending work before continuing."));
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSettingsStory({
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
          name: "openai",
          type: "openai"
        }],
        canonicalRoutes: {
          anthropic: "anthropic"
        }
      }
    }
  })} />,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: phoneParameters,
  play: async ({
    canvasElement,
    parameters
  }) => {
    await expect(parameters.pixel).toEqual(phoneParameters.pixel);
    const dialog = await openSettingsDialog(canvasElement);
    await clickSectionButton(dialog, "Providers");
    await assertSectionBodyRendered(dialog, "Providers");
    // Coder model routing selects switch to full width below the sm breakpoint.
    await userEvent.click(await within(dialog).findByRole("button", {
      name: /^Coder/
    }));
    const routeSelects = await within(dialog).findAllByRole("combobox", {
      name: /Coder provider$/
    });

    // The test-runner plays at desktop size; only Pixel/manager pin the phone width.
    if (window.innerWidth < 768) {
      const rect = dialog.getBoundingClientRect();
      await expect(rect.left).toBe(0);
      await expect(rect.width).toBe(window.innerWidth);
      await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth);
      const close = within(dialog).getByRole("button", {
        name: "Close settings"
      });
      await expect(close.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
      for (const select of routeSelects) {
        await expect(select.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const re=["SectionsSmoke","EscapeInInlineEditor","FocusReturnsWhenOpenerUnmounts","HeartbeatDefaults","PhoneFullScreen"];export{m as EscapeInInlineEditor,w as FocusReturnsWhenOpenerUnmounts,g as HeartbeatDefaults,y as PhoneFullScreen,u as SectionsSmoke,re as __namedExportsOrder,se as default};
