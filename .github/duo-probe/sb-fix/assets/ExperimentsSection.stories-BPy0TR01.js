import{j as n,d as f,E as g}from"./iframe-DwmVy7SQ.js";import{l as w}from"./meta-CT6GdK4g.js";import{E as s}from"./ExperimentsSection-BjFZg8Z4.js";import{S as y,s as h}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./autoModelRouting-DEovgEig.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";const{expect:r,waitFor:T,within:c}=__STORYBOOK_MODULE_TEST__,Z={...w,title:"Settings/Sections/ExperimentsSection",component:s},p={render:()=>n.jsx(y,{setup:()=>h({experiments:{[g.MEMORY]:!1}}),children:n.jsx(s,{})}),play:async({canvasElement:t})=>{const e=c(t);await e.findByLabelText("Toggle Agent Memory"),await r(e.queryByLabelText("Toggle Memory Consolidation")).toBeNull()}},m={render:()=>n.jsx(y,{setup:()=>h({experiments:{[g.MEMORY]:!0}}),children:n.jsx(s,{})}),play:async({canvasElement:t})=>{await c(t).findByLabelText("Toggle Memory Consolidation")}},d={render:()=>n.jsx(y,{setup:()=>h({experiments:{[g.PROGRAMMATIC_TOOL_CALLING]:!0}}),children:n.jsx(s,{})}),play:async({canvasElement:t})=>{await c(t).findByLabelText("Toggle RLM Mode")}},i={render:()=>n.jsx(y,{setup:()=>h({experiments:{[g.AUTO_MODEL_ROUTING]:!0},providersConfig:{anthropic:{apiKeySet:!0,isEnabled:!0,isConfigured:!0},openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}}),children:n.jsx(s,{})}),play:async({canvasElement:t})=>{const e=c(t);await e.findByLabelText("Evaluation model"),await e.findByLabelText("Tier 4 description"),await e.findByRole("button",{name:"Add tier"})}},v=390;function M(t){const e=f.c(3);let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o={width:`min(100vw, ${v}px)`,overflow:"hidden"},e[0]=o):o=e[0];let a;return e[1]!==t?(a=n.jsx("div",{"data-phone-frame":!0,style:o,children:n.jsx(t,{})}),e[1]=t,e[2]=a):a=e[2],a}const u={...i,globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},decorators:[M],play:async({canvasElement:t,parameters:e,globals:o})=>{await r(e).toMatchObject({pixel:{matrix:{viewports:["phone"]}}}),await r(o).toMatchObject({viewport:{value:"mobile1"}});const a=c(t);await a.findByLabelText("Tier 4 description"),await a.findByRole("button",{name:"Add tier"});const E=t.querySelector("[data-phone-frame]"),l=t.querySelector("[data-auto-model-routing-config]");if(!(E instanceof HTMLElement)||!(l instanceof HTMLElement))throw new Error("Phone frame or routing section did not render");const x=E.getBoundingClientRect().right;await T(async()=>{await r(l.scrollWidth).toBeLessThanOrEqual(l.clientWidth);for(const S of l.querySelectorAll("input, button, textarea"))await r(S.getBoundingClientRect().right).toBeLessThanOrEqual(x+1)})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    // Seed the parent off explicitly so the "sub-experiments hidden"
    // assertion does not rely on the experiment's default value.
    experiments: {
      [EXPERIMENT_IDS.MEMORY]: false
    }
  })}>
      <ExperimentsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Memory sub-experiments are nested under Agent Memory, so with the parent
    // off they must not appear anywhere in the list.
    await canvas.findByLabelText("Toggle Agent Memory");
    await expect(canvas.queryByLabelText("Toggle Memory Consolidation")).toBeNull();
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    experiments: {
      [EXPERIMENT_IDS.MEMORY]: true
    }
  })}>
      <ExperimentsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // With Agent Memory enabled, the sub-experiment toggles render in the
    // nested panel under the parent row.
    await canvas.findByLabelText("Toggle Memory Consolidation");
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    experiments: {
      [EXPERIMENT_IDS.PROGRAMMATIC_TOOL_CALLING]: true
    }
  })}>
      <ExperimentsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // With PTC enabled, the RLM Mode sub-experiment renders in the nested
    // panel under the parent row.
    await canvas.findByLabelText("Toggle RLM Mode");
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    experiments: {
      [EXPERIMENT_IDS.AUTO_MODEL_ROUTING]: true
    },
    providersConfig: {
      anthropic: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true
      },
      openai: {
        apiKeySet: true,
        isEnabled: true,
        isConfigured: true
      }
    }
  })}>
      <ExperimentsSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The nested panel renders the evaluation model field, the default tier rows, and the
    // preview control.
    await canvas.findByLabelText("Evaluation model");
    await canvas.findByLabelText("Tier 4 description");
    await canvas.findByRole("button", {
      name: "Add tier"
    });
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...AutoModelRoutingEnabled,
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
    }
  },
  decorators: [PhoneWidthDecorator],
  play: async ({
    canvasElement,
    parameters,
    globals
  }) => {
    await expect(parameters).toMatchObject({
      pixel: {
        matrix: {
          viewports: ["phone"]
        }
      }
    });
    await expect(globals).toMatchObject({
      viewport: {
        value: "mobile1"
      }
    });
    const canvas = within(canvasElement);
    await canvas.findByLabelText("Tier 4 description");
    await canvas.findByRole("button", {
      name: "Add tier"
    });
    const frame = canvasElement.querySelector("[data-phone-frame]");
    const section = canvasElement.querySelector("[data-auto-model-routing-config]");
    if (!(frame instanceof HTMLElement) || !(section instanceof HTMLElement)) {
      throw new Error("Phone frame or routing section did not render");
    }
    const frameRight = frame.getBoundingClientRect().right;
    // Nothing in the routing panel may extend past the phone frame: inputs, selectors, and
    // the per-tier controls must all fit inside the narrow column.
    await waitFor(async () => {
      await expect(section.scrollWidth).toBeLessThanOrEqual(section.clientWidth);
      for (const element of section.querySelectorAll<HTMLElement>("input, button, textarea")) {
        await expect(element.getBoundingClientRect().right).toBeLessThanOrEqual(frameRight + 1);
      }
    });
  }
}`,...u.parameters?.docs?.source}}};const ee=["Experiments","MemorySettingsEnabled","ExperimentsToggleOn","AutoModelRoutingEnabled","AutoModelRoutingEnabledPhone"];export{i as AutoModelRoutingEnabled,u as AutoModelRoutingEnabledPhone,p as Experiments,d as ExperimentsToggleOn,m as MemorySettingsEnabled,ee as __namedExportsOrder,Z as default};
