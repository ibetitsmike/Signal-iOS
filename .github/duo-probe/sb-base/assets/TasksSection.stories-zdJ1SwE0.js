import{j as c,d as x,E as h}from"./iframe-C48Cgo5e.js";import{l as w}from"./meta-BMDQogfB.js";import{T as u}from"./TasksSection-QGoSgOg2.js";import{S as T,s as y}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./autoModelRouting-B76RJT77.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";const{expect:o,waitFor:l,within:m}=__STORYBOOK_MODULE_TEST__,z={...w,title:"Settings/Sections/TasksSection",component:u};function p(t){return m(t).getAllByRole("combobox").filter(e=>e.textContent?.trim()==="Auto")}const s={render:()=>c.jsx(T,{setup:()=>y({taskSettings:{maxParallelAgentTasks:2,maxTaskNestingDepth:4},agentResourceLimits:{enabled:!0,limits:{cpuCores:8,memoryGiB:16},projects:{},status:{state:"active",cgroup:"/xum/xum-agents"},support:{state:"ready",cgroup:"/xum"}},experiments:{[h.AUTO_MODEL_ROUTING]:!0},agentAiDefaults:{plan:{autoModelRouting:!0,autoThinkingLevel:!0},exec:{modelString:"anthropic:claude-opus-4-6",autoModelRouting:!0}}}),children:c.jsx(u,{})}),play:async({canvasElement:t})=>{const e=m(t);await e.findByText(/Max Parallel Agent Tasks/i),await e.findByText(/Max Task Nesting Depth/i),await e.findByText(/Agent Defaults/i),await e.findByRole("heading",{name:/UI agents/i}),await e.findByRole("heading",{name:/Sub-agents/i}),await e.findByRole("heading",{name:/Internal/i}),await e.findAllByText(/^Plan$/i),await e.findAllByText(/^Exec$/i),await e.findByRole("group",{name:"Exec defaults"}),await e.findAllByText(/^Explore$/i),await e.findAllByText(/^Compact$/i),await l(async()=>{await o(p(t)).toHaveLength(2)}),await e.findByText(/Active: agents share 8 CPU cores and 16 GiB of memory/i),await l(async()=>{await o(e.getByLabelText("CPU limit")).toHaveValue(8),await o(e.getByLabelText("Memory limit")).toHaveValue(16)}),await l(()=>{const n=e.queryAllByRole("spinbutton");if(n.length!==4)throw new Error(`Expected 4 number inputs, got ${n.length}`);const a=n[0].value,i=n[1].value;if(a!=="2")throw new Error(`Expected maxParallelAgentTasks=2, got ${JSON.stringify(a)}`);if(i!=="4")throw new Error(`Expected maxTaskNestingDepth=4, got ${JSON.stringify(i)}`)})}},v=390;function E(t){const e=x.c(3);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n={width:`min(100vw, ${v}px)`,overflow:"hidden"},e[0]=n):n=e[0];let a;return e[1]!==t?(a=c.jsx("div",{"data-phone-frame":!0,style:n,children:c.jsx(t,{})}),e[1]=t,e[2]=a):a=e[2],a}const r={render:s.render,globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{exclude:!0}},decorators:[E],play:async({canvasElement:t})=>{await m(t).findByRole("heading",{name:/UI agents/i});const n=t.querySelector("[data-phone-frame]");if(!(n instanceof HTMLElement))throw new Error("Phone frame did not render");const a=n.getBoundingClientRect().right;await l(async()=>{const i=p(t);await o(i).toHaveLength(2);for(const d of i){const g=d.closest(".space-y-1");if(!(g instanceof HTMLElement))throw new Error("Model column did not render");const f=m(g).getByRole("button",{name:"Reset"});await o(f.getBoundingClientRect().right).toBeLessThanOrEqual(a+1)}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({
    taskSettings: {
      maxParallelAgentTasks: 2,
      maxTaskNestingDepth: 4
    },
    agentResourceLimits: {
      enabled: true,
      limits: {
        cpuCores: 8,
        memoryGiB: 16
      },
      projects: {},
      status: {
        state: "active",
        cgroup: "/xum/xum-agents"
      },
      support: {
        state: "ready",
        cgroup: "/xum"
      }
    },
    // Reuse this story because the Pixel snapshot budget has no headroom.
    experiments: {
      [EXPERIMENT_IDS.AUTO_MODEL_ROUTING]: true
    },
    agentAiDefaults: {
      plan: {
        autoModelRouting: true,
        autoThinkingLevel: true
      },
      exec: {
        modelString: "anthropic:claude-opus-4-6",
        autoModelRouting: true
      }
    }
  })}>
      <TasksSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/Max Parallel Agent Tasks/i);
    await canvas.findByText(/Max Task Nesting Depth/i);
    await canvas.findByText(/Agent Defaults/i);
    await canvas.findByRole("heading", {
      name: /UI agents/i
    });
    await canvas.findByRole("heading", {
      name: /Sub-agents/i
    });
    await canvas.findByRole("heading", {
      name: /Internal/i
    });
    await canvas.findAllByText(/^Plan$/i);
    await canvas.findAllByText(/^Exec$/i);
    await canvas.findByRole("group", {
      name: "Exec defaults"
    });
    await canvas.findAllByText(/^Explore$/i);
    await canvas.findAllByText(/^Compact$/i);
    await waitFor(async () => {
      await expect(findAutoModelTriggers(canvasElement)).toHaveLength(2);
    });
    await canvas.findByText(/Active: agents share 8 CPU cores and 16 GiB of memory/i);
    await waitFor(async () => {
      await expect(canvas.getByLabelText("CPU limit")).toHaveValue(8);
      await expect(canvas.getByLabelText("Memory limit")).toHaveValue(16);
    });
    await waitFor(() => {
      // Task settings first, then the CPU and memory limits.
      const inputs = canvas.queryAllByRole("spinbutton");
      if (inputs.length !== 4) {
        throw new Error(\`Expected 4 number inputs, got \${inputs.length}\`);
      }
      const maxParallelAgentTasks = (inputs[0] as HTMLInputElement).value;
      const maxTaskNestingDepth = (inputs[1] as HTMLInputElement).value;
      if (maxParallelAgentTasks !== "2") {
        throw new Error(\`Expected maxParallelAgentTasks=2, got \${JSON.stringify(maxParallelAgentTasks)}\`);
      }
      if (maxTaskNestingDepth !== "4") {
        throw new Error(\`Expected maxTaskNestingDepth=4, got \${JSON.stringify(maxTaskNestingDepth)}\`);
      }
    });
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Tasks.render,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      exclude: true
    }
  },
  decorators: [PhoneWidthDecorator],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("heading", {
      name: /UI agents/i
    });
    const frame = canvasElement.querySelector("[data-phone-frame]");
    if (!(frame instanceof HTMLElement)) throw new Error("Phone frame did not render");
    const frameRight = frame.getBoundingClientRect().right;
    await waitFor(async () => {
      const autoTriggers = findAutoModelTriggers(canvasElement);
      await expect(autoTriggers).toHaveLength(2);
      for (const trigger of autoTriggers) {
        const column = trigger.closest(".space-y-1");
        if (!(column instanceof HTMLElement)) throw new Error("Model column did not render");
        const reset = within(column).getByRole("button", {
          name: "Reset"
        });
        await expect(reset.getBoundingClientRect().right).toBeLessThanOrEqual(frameRight + 1);
      }
    });
  }
}`,...r.parameters?.docs?.source}}};const Q=["Tasks","TasksPhone"];export{s as Tasks,r as TasksPhone,Q as __namedExportsOrder,z as default};
