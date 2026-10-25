import{j as c,c as g}from"./iframe-DwmVy7SQ.js";import{a as u,A as h}from"./meta-CT6GdK4g.js";import{s as w}from"./chatSetup-D_GSrzyc.js";import{a as v,b as y}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";const{expect:e,userEvent:r,within:b}=__STORYBOOK_MODULE_TEST__,J={...u,title:"App/Astra Pro"},f="ws-astra-pro",d={name:"Phone",styles:{width:"390px",height:"844px"}},o={decorators:[a=>c.jsx("div",{"data-testid":"astra-pro-phone",style:{width:`min(${d.styles.width}, 100%)`,height:"100%"},children:c.jsx(a,{})})],globals:{viewport:{value:"astraPhone",isRotated:!1}},parameters:{viewport:{options:{astraPhone:d}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:()=>c.jsx(h,{setup:()=>(g(),w({workspaceId:f,aiSettings:{model:"coder:openai/gpt-6-astra",thinkingLevel:"high"},messages:[],routePriority:["coder"],providersConfig:{coder:{apiKeySet:!1,isEnabled:!0,isConfigured:!0,models:["openai/gpt-6-astra"]}}}))}),play:async({canvasElement:a})=>{const s=document.getElementById("storybook-root")??a,n=b(s);await v(s),y();const p=n.getByRole("button",{name:/Thinking:/});await r.click(p);const t=n.getByRole("button",{name:/Pro mode/});await e(t).toHaveAttribute("aria-pressed","false"),await r.click(t),await e(t).toHaveAttribute("aria-pressed","true"),await e(p).toHaveAccessibleName("Thinking: high, pro mode"),t.focus(),await r.keyboard(" "),await e(t).toHaveAttribute("aria-pressed","false"),await e(p).toHaveAccessibleName("Thinking: high"),await r.click(t);const l=n.getByRole("listbox",{name:"Reasoning effort"}),m=(n.queryByTestId("astra-pro-phone")??s).getBoundingClientRect();await e(l.getBoundingClientRect().right).toBeLessThanOrEqual(m.right),await e(l.getBoundingClientRect().left).toBeGreaterThanOrEqual(m.left)}},i={...o,decorators:[],globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async a=>o.play(a)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // The test-runner ignores viewport globals, so enforce the narrow container there too.
  decorators: [Story => <div data-testid="astra-pro-phone" style={{
    width: \`min(\${phoneViewport.styles.width}, 100%)\`,
    height: "100%"
  }}>
        <Story />
      </div>],
  globals: {
    viewport: {
      value: "astraPhone",
      isRotated: false
    }
  },
  parameters: {
    viewport: {
      options: {
        astraPhone: phoneViewport
      }
    },
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      workspaceId,
      aiSettings: {
        model: "coder:openai/gpt-6-astra",
        thinkingLevel: "high"
      },
      messages: [],
      routePriority: ["coder"],
      providersConfig: {
        coder: {
          apiKeySet: false,
          isEnabled: true,
          isConfigured: true,
          models: ["openai/gpt-6-astra"]
        }
      }
    });
  }} />,
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
    await userEvent.click(trigger);
    const pro = canvas.getByRole("button", {
      name: /Pro mode/
    });
    await expect(pro).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(pro);
    await expect(pro).toHaveAttribute("aria-pressed", "true");
    await expect(trigger).toHaveAccessibleName("Thinking: high, pro mode");
    // Keyboard activation must also disable Pro without changing reasoning effort.
    pro.focus();
    await userEvent.keyboard(" ");
    await expect(pro).toHaveAttribute("aria-pressed", "false");
    await expect(trigger).toHaveAccessibleName("Thinking: high");
    await userEvent.click(pro);
    const menu = canvas.getByRole("listbox", {
      name: "Reasoning effort"
    });
    const bounds = (canvas.queryByTestId("astra-pro-phone") ?? root).getBoundingClientRect();
    await expect(menu.getBoundingClientRect().right).toBeLessThanOrEqual(bounds.right);
    await expect(menu.getBoundingClientRect().left).toBeGreaterThanOrEqual(bounds.left);
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...CoderGateway,
  decorators: [],
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
        viewports: ["laptop"]
      }
    }
  },
  play: async context => CoderGateway.play!(context)
}`,...i.parameters?.docs?.source}}};const Q=["CoderGateway","Desktop"];export{o as CoderGateway,i as Desktop,Q as __namedExportsOrder,J as default};
