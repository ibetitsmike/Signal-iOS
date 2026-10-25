import{j as h,p as B,q as k,c as E}from"./iframe-C48Cgo5e.js";import{a as A,A as F}from"./meta-BMDQogfB.js";import{s as H}from"./chatSetup--9T4hSMU.js";import{a as R,b as w}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{expect:e,userEvent:o,waitFor:l,within:d}=__STORYBOOK_MODULE_TEST__,ce={...A,title:"App/Gateway Fast Mode"},g="ws-gateway-fast-mode",S={name:"Phone",styles:{width:"390px",height:"844px"}};function C(){E();const t=H({workspaceId:g,aiSettings:{model:"coder:openai/gpt-6-astra",thinkingLevel:"high"},messages:[],routePriority:["coder"],providersConfig:{coder:{apiKeySet:!1,isEnabled:!0,isConfigured:!0,models:["openai/gpt-6-astra"]},openai:{apiKeySet:!1,isEnabled:!0,isConfigured:!1}}});return t.providers.setProviderConfig=()=>{throw new Error("Chat speed must not write provider config")},t.workspace.sendMessage=()=>{throw new Error("Speed commands must not send a chat message")},t.workspace.setActiveTurnServiceTier=()=>Promise.resolve({success:!0,data:{accepted:!1}}),t}const c={render:()=>h.jsx(F,{setup:C}),parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async({canvasElement:s})=>{const t=document.getElementById("storybook-root")??s,i=d(t);await R(t),w();const a=i.getByRole("button",{name:/Thinking:/}),f=i.getByRole("textbox",{name:"Message"});for(const[p,r,T]of[["/fast","priority","Thinking: high, fast mode"],["/ultrafast","ultrafast","Thinking: high, ultrafast mode"],["/ultrafast","default","Thinking: high"]])await o.type(f,p),await o.click(i.getByRole("button",{name:"Send message"})),await l(async()=>{await e(f).toHaveValue(""),await e(B(g,"exec","serviceTier")).toBe(r),await e(a).toHaveAccessibleName(T)});w(),await o.hover(a);const y=(await d(document.body).findByRole("tooltip")).querySelector(".mobile-hide-shortcut-hints");k(y,"Thinking shortcuts must opt into mobile hint hiding"),window.matchMedia("(max-width: 768px) and (pointer: coarse)").matches&&await e(y).not.toBeVisible(),await o.unhover(a),await o.click(a);const n=i.getByRole("button",{name:/Fast mode/}),b=i.getByRole("option",{name:"High"});await e(n).toHaveAttribute("aria-pressed","false"),await e(b).toHaveAttribute("aria-selected","true"),await o.click(n),await l(async()=>{await e(n).toBeEnabled(),await e(n).toHaveAttribute("aria-pressed","true"),await e(a).toHaveAccessibleName("Thinking: high, fast mode"),await e(d(a).getByLabelText("Fast mode enabled")).toBeVisible()}),n.focus(),await o.keyboard(" "),await l(async()=>{await e(n).toBeEnabled(),await e(n).toHaveAttribute("aria-pressed","false"),await e(B(g,"exec","serviceTier")).toBe("default"),await e(a).toHaveAccessibleName("Thinking: high"),await e(d(a).queryByLabelText("Fast mode enabled")).not.toBeInTheDocument()}),await o.click(n),await l(async()=>{await e(n).toBeEnabled(),await e(n).toHaveAttribute("aria-pressed","true"),await e(b).toHaveAttribute("aria-selected","true"),await e(i.getByRole("button",{name:/Pro mode/})).toHaveAttribute("aria-pressed","false")});const v=i.queryByTestId("gateway-fast-phone")??t,u=v.getBoundingClientRect();v!==t&&await e(u.width).toBe(390);const x=async p=>{await l(async()=>{const r=t.querySelector(`[data-component="${p}"]`);k(r,`${p} must be rendered`),await e(r.scrollWidth).toBeLessThanOrEqual(r.clientWidth),await e(r.getBoundingClientRect().left).toBeGreaterThanOrEqual(u.left),await e(r.getBoundingClientRect().right).toBeLessThanOrEqual(u.right)})};await o.click(a),await x("ComposerControlRow"),await o.click(a),await x("ThinkingSelectorMenu"),await e(i.getByRole("button",{name:/Fast mode/})).toHaveAttribute("aria-pressed","true"),w()}},m={...c,decorators:[s=>h.jsx("div",{"data-testid":"gateway-fast-phone",style:{width:390,height:844},children:h.jsx(s,{})})],globals:{viewport:{value:"gatewayFastPhone",isRotated:!1}},parameters:{viewport:{options:{gatewayFastPhone:S}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async s=>c.play(s)};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupGatewayFastMode} />,
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const root = document.getElementById("storybook-root") ?? canvasElement;
    const canvas = within(root);
    await waitForChatInputAutofocusDone(root);
    blurActiveElement();
    const trigger = canvas.getByRole("button", {
      name: /Thinking:/
    });
    const composer = canvas.getByRole("textbox", {
      name: "Message"
    });
    for (const [command, tier, label] of [["/fast", "priority", "Thinking: high, fast mode"], ["/ultrafast", "ultrafast", "Thinking: high, ultrafast mode"], ["/ultrafast", "default", "Thinking: high"]] as const) {
      await userEvent.type(composer, command);
      await userEvent.click(canvas.getByRole("button", {
        name: "Send message"
      }));
      await waitFor(async () => {
        await expect(composer).toHaveValue("");
        await expect(getPendingAiSelection(workspaceId, "exec", "serviceTier")).toBe(tier);
        await expect(trigger).toHaveAccessibleName(label);
      });
    }
    blurActiveElement();
    await userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole("tooltip");
    const shortcutHint = tooltip.querySelector<HTMLElement>(".mobile-hide-shortcut-hints");
    assert(shortcutHint, "Thinking shortcuts must opt into mobile hint hiding");
    // Pixel does not emulate touch. Real touch runs additionally exercise the CSS hiding rule.
    if (window.matchMedia("(max-width: 768px) and (pointer: coarse)").matches) {
      await expect(shortcutHint).not.toBeVisible();
    }
    await userEvent.unhover(trigger);
    await userEvent.click(trigger);
    const fast = canvas.getByRole("button", {
      name: /Fast mode/
    });
    const effort = canvas.getByRole("option", {
      name: "High"
    });
    await expect(fast).toHaveAttribute("aria-pressed", "false");
    await expect(effort).toHaveAttribute("aria-selected", "true");
    await userEvent.click(fast);
    await waitFor(async () => {
      await expect(fast).toBeEnabled();
      await expect(fast).toHaveAttribute("aria-pressed", "true");
      await expect(trigger).toHaveAccessibleName("Thinking: high, fast mode");
      await expect(within(trigger).getByLabelText("Fast mode enabled")).toBeVisible();
    });

    // The same control must be keyboard-operable and restore the original non-Fast tier.
    fast.focus();
    await userEvent.keyboard(" ");
    await waitFor(async () => {
      await expect(fast).toBeEnabled();
      await expect(fast).toHaveAttribute("aria-pressed", "false");
      await expect(getPendingAiSelection(workspaceId, "exec", "serviceTier")).toBe("default");
      await expect(trigger).toHaveAccessibleName("Thinking: high");
      await expect(within(trigger).queryByLabelText("Fast mode enabled")).not.toBeInTheDocument();
    });
    await userEvent.click(fast);
    await waitFor(async () => {
      await expect(fast).toBeEnabled();
      await expect(fast).toHaveAttribute("aria-pressed", "true");
      await expect(effort).toHaveAttribute("aria-selected", "true");
      await expect(canvas.getByRole("button", {
        name: /Pro mode/
      })).toHaveAttribute("aria-pressed", "false");
    });
    const frame = canvas.queryByTestId("gateway-fast-phone") ?? root;
    const bounds = frame.getBoundingClientRect();
    if (frame !== root) await expect(bounds.width).toBe(390);
    const expectFitsFrame = async (component: string) => {
      await waitFor(async () => {
        const element = root.querySelector<HTMLElement>(\`[data-component="\${component}"]\`);
        assert(element, \`\${component} must be rendered\`);
        await expect(element.scrollWidth).toBeLessThanOrEqual(element.clientWidth);
        await expect(element.getBoundingClientRect().left).toBeGreaterThanOrEqual(bounds.left);
        await expect(element.getBoundingClientRect().right).toBeLessThanOrEqual(bounds.right);
      });
    };
    // The absolute menu can extend into the composer's padding without clipping, so measure
    // the closed control row separately from the open menu's own content and frame bounds.
    await userEvent.click(trigger);
    await expectFitsFrame("ComposerControlRow");
    await userEvent.click(trigger);
    await expectFitsFrame("ThinkingSelectorMenu");
    await expect(canvas.getByRole("button", {
      name: /Fast mode/
    })).toHaveAttribute("aria-pressed", "true");
    blurActiveElement();
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  // The test-runner ignores viewport globals; keep its layout assertions genuinely narrow.
  decorators: [Story => <div data-testid="gateway-fast-phone" style={{
    width: 390,
    height: 844
  }}>
        <Story />
      </div>],
  globals: {
    viewport: {
      value: "gatewayFastPhone",
      isRotated: false
    }
  },
  parameters: {
    viewport: {
      options: {
        gatewayFastPhone: phoneViewport
      }
    },
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async context => Desktop.play!(context)
}`,...m.parameters?.docs?.source}}};const le=["Desktop","Phone"];export{c as Desktop,m as Phone,le as __namedExportsOrder,ce as default};
