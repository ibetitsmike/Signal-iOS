import{j as p,bx as l}from"./iframe-DpCW2UOM.js";import{a as y,A as d}from"./meta-BwRgvoZ6.js";import{s as c}from"./chatSetup-48_rCYsC.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const{within:u,userEvent:m,waitFor:s}=__STORYBOOK_MODULE_TEST__,H={...y,title:"App/Chat/Components/ModelSelector"},w=l.agentId.slice(0,1).toUpperCase()+l.agentId.slice(1),n={render:()=>p.jsx(d,{setup:()=>c({workspaceId:"ws-gateway-model",aiSettings:{model:"openai:gpt-4o",thinkingLevel:"off"},messages:[],routePriority:["openrouter","direct"],providersConfig:{openrouter:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}})}),play:async({canvasElement:t})=>{const e=u(t);await e.findAllByText(w,{},{timeout:15e3}),await s(()=>{e.getByText("GPT-4o")},{interval:50,timeout:1e4});const a=e.queryByText("Openai/gpt 4o");if(a)throw new Error(`Unexpected gateway-formatted model label: ${a.textContent??"(empty)"}`);const o=await s(()=>{const r=t.querySelector('[aria-label="OpenRouter routing"]');if(!r)throw new Error("Gateway indicator not found");return r},{interval:50,timeout:15e3});await m.hover(o),await s(()=>{const r=document.querySelector('[role="tooltip"]');if(!r)throw new Error("Tooltip not visible");if(!r.textContent?.includes("OpenRouter"))throw new Error("Gateway tooltip not visible")},{interval:50,timeout:5e3})},parameters:{docs:{description:{story:"Verifies the bottom-left model selector stays pretty (e.g. GPT-4o) even when OpenRouter routing is enabled."}}}},i={render:()=>p.jsx(d,{setup:()=>c({workspaceId:"ws-model-dropdown",aiSettings:{model:"openai:gpt-4o",thinkingLevel:"off"},messages:[],providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0},anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}})}),play:async({canvasElement:t})=>{const e=u(t);await e.findAllByText(w,{},{timeout:15e3});const a=await s(()=>{const o=e.getByText("GPT-4o");if(!o)throw new Error("Model selector not found");return o});await m.click(a),await e.findByPlaceholderText(/Search \[provider:model-name\]/i),await new Promise(o=>requestAnimationFrame(()=>requestAnimationFrame(o)))},parameters:{docs:{description:{story:"Model selector dropdown open, showing visibility toggle and default star icons properly aligned without gaps."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-gateway-model";
    const baseModel = "openai:gpt-4o";
    return setupSimpleChatStory({
      workspaceId,
      aiSettings: {
        model: baseModel,
        thinkingLevel: "off"
      },
      messages: [],
      routePriority: ["openrouter", "direct"],
      providersConfig: {
        openrouter: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // Wait for chat input to mount.
    await canvas.findAllByText(DEFAULT_AGENT_LABEL, {}, {
      timeout: 15000
    });

    // With a gateway route active, we should still display the *pretty* model name.
    // CI can take longer than the default waitFor timeout while workspace/model
    // state hydrates, so wait explicitly instead of triggering a flaky retry.
    await waitFor(() => {
      canvas.getByText("GPT-4o");
    }, {
      interval: 50,
      timeout: 10000
    });

    // The buggy rendering (openrouter:openai/gpt-4o) shows up as "Openai/gpt 4o".
    const ugly = canvas.queryByText("Openai/gpt 4o");
    if (ugly) {
      throw new Error(\`Unexpected gateway-formatted model label: \${ugly.textContent ?? "(empty)"}\`);
    }

    // Sanity check that the gateway indicator exists (moved to the titlebar).
    const gatewayIndicator = await waitFor(() => {
      const el = canvasElement.querySelector('[aria-label="OpenRouter routing"]');
      if (!el) throw new Error("Gateway indicator not found");
      return el;
    }, {
      interval: 50,
      timeout: 15000
    });

    // Hover to prove the gateway tooltip is wired up (and keep it visible for snapshot).
    await userEvent.hover(gatewayIndicator);
    await waitFor(() => {
      const tooltip = document.querySelector('[role="tooltip"]');
      if (!tooltip) throw new Error("Tooltip not visible");
      if (!tooltip.textContent?.includes("OpenRouter")) {
        throw new Error("Gateway tooltip not visible");
      }
    }, {
      interval: 50,
      timeout: 5000
    });
  },
  parameters: {
    docs: {
      description: {
        story: "Verifies the bottom-left model selector stays pretty (e.g. GPT-4o) even when OpenRouter routing is enabled."
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:`Model selector pretty display with OpenRouter routing enabled.

Regression test: when a gateway route is active, routing happens in the backend,
but the UI should still display the canonical provider:model form
(e.g. GPT-4o, not "Openai/gpt 4o").`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaceId = "ws-model-dropdown";
    const baseModel = "openai:gpt-4o";
    return setupSimpleChatStory({
      workspaceId,
      aiSettings: {
        model: baseModel,
        thinkingLevel: "off"
      },
      messages: [],
      providersConfig: {
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        },
        anthropic: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      }
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // Wait for chat input to mount
    await canvas.findAllByText(DEFAULT_AGENT_LABEL, {}, {
      timeout: 15000
    });

    // Wait for model selector to be clickable (shows pretty name "GPT-4o")
    const modelSelector = await waitFor(() => {
      const el = canvas.getByText("GPT-4o");
      if (!el) throw new Error("Model selector not found");
      return el;
    });

    // Click to open the selector (enters editing mode, shows dropdown)
    await userEvent.click(modelSelector);

    // Wait for the dropdown to appear. The dropdown is rendered inline (not via Radix Portal),
    // so the search input is a reliable signal that it opened.
    await canvas.findByPlaceholderText(/Search \\[provider:model-name\\]/i);

    // Double RAF for visual stability after dropdown renders
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  },
  parameters: {
    docs: {
      description: {
        story: "Model selector dropdown open, showing visibility toggle and default star icons properly aligned without gaps."
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`Model selector dropdown open, showing icon alignment.
The visibility toggle and default star icons should appear side-by-side without gaps.`,...i.parameters?.docs?.description}}};const N=["ModelSelectorPrettyWithGateway","ModelSelectorDropdownOpen"];export{i as ModelSelectorDropdownOpen,n as ModelSelectorPrettyWithGateway,N as __namedExportsOrder,H as default};
