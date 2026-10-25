import{j as v,c as x,a as f,u as b,g as y,S as B}from"./iframe-C48Cgo5e.js";import{a as E,A as T}from"./meta-BMDQogfB.js";import{s as R}from"./chatSetup--9T4hSMU.js";import{P as S}from"./subagentReportStory-b97XinZz.js";import{c as C}from"./messages-Bf7rPDB1.js";import{c as k}from"./workspaces-DZcvJb83.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./orpc-qlMSh58E.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{expect:e,userEvent:_,within:h}=__STORYBOOK_MODULE_TEST__,d="ws-code-execution-spacing",u="code-execution-reviewer";function q(){return x(),f(),b(y(d),{}),R({workspaceId:d,workspaceName:"nested-tool-spacing",projectName:"mux",messages:[C("nested-tools","",{historySequence:1,timestamp:B,toolCalls:[{type:"dynamic-tool",toolCallId:"code-execution",toolName:"code_execution",state:"output-available",input:{code:"mux.file_read({ path: 'src/config.ts' });"},output:{success:!0,toolCalls:[],consoleOutput:[]},nestedCalls:[{toolCallId:"nested-report",toolName:"agent_report",state:"output-available",input:{title:"Layout review",reportMarkdown:"The tool cards should stay inside the code execution border."},output:{success:!0}},{toolCallId:"nested-read",toolName:"file_read",state:"output-available",input:{path:"src/config.ts"},output:{success:!0,lines_read:1,file_size:24,content:"1	const debug = false;"}},{toolCallId:"nested-message",toolName:"task_send_message",state:"output-available",input:{task_id:u,message:`Check both collapsed and expanded cards at phone widths.

Inspect src/browser/features/Tools/Shared/NestedToolsContainer.tsx for spacing shared by all nested tools.`},output:{status:"reactivated",taskId:u}}]}]})],additionalWorkspaces:[k({id:u,name:"reviewer",title:"Reviewer",projectName:"mux",parentWorkspaceId:d,taskStatus:"running"})]})}const ie={...E,title:"App/CodeExecution"},t={render:()=>v.jsx(T,{setup:q}),globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["laptop"]}}},play:async({canvasElement:o})=>{const r=h(o),c=await r.findByRole("button",{name:"Message to Reviewer"}),a=r.getByRole("group",{name:"Code Execution"}),w=a.querySelector("legend"),m=a.querySelector(":scope > div");await e(m.children).toHaveLength(3);const g=async()=>{const n=a.getBoundingClientRect();let l=w.getBoundingClientRect().bottom;for(const p of m.children){const s=p.getBoundingClientRect();await e(s.left-n.left).toBeGreaterThanOrEqual(8),await e(n.right-s.right).toBeGreaterThanOrEqual(8),await e(s.top-l).toBeGreaterThanOrEqual(8),await e(p.scrollWidth).toBeLessThanOrEqual(p.clientWidth),l=s.bottom}await e(n.bottom-l).toBeGreaterThanOrEqual(8),await e(a.scrollWidth).toBeLessThanOrEqual(a.clientWidth)};await e(c).toHaveAttribute("aria-expanded","false"),await g(),await _.click(c),await e(c).toHaveAttribute("aria-expanded","true"),await new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(()=>n()))),await g()}},i={...t,globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[S],parameters:{pixel:{matrix:{viewports:["phone"]}}},play:async o=>{await e(o.parameters.pixel).toMatchObject({matrix:{viewports:["phone"]}}),await t.play?.(o);const r=h(o.canvasElement).getByRole("group",{name:"Code Execution"});await e(r.getBoundingClientRect().width).toBeLessThan(390)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupNestedToolsStory} />,
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Message to Reviewer"
    });
    const frame = canvas.getByRole("group", {
      name: "Code Execution"
    });
    const legend = frame.querySelector("legend")!;
    const tools = frame.querySelector(":scope > div")!;
    await expect(tools.children).toHaveLength(3);
    const checkSpacing = async () => {
      const bounds = frame.getBoundingClientRect();
      let previousBottom = legend.getBoundingClientRect().bottom;
      // Assert rendered geometry, not utility classes: every tool (including an
      // unbordered file read) needs its own clearance from the shared border.
      for (const card of tools.children) {
        const rect = card.getBoundingClientRect();
        await expect(rect.left - bounds.left).toBeGreaterThanOrEqual(8);
        await expect(bounds.right - rect.right).toBeGreaterThanOrEqual(8);
        await expect(rect.top - previousBottom).toBeGreaterThanOrEqual(8);
        await expect(card.scrollWidth).toBeLessThanOrEqual(card.clientWidth);
        previousBottom = rect.bottom;
      }
      await expect(bounds.bottom - previousBottom).toBeGreaterThanOrEqual(8);
      await expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth);
    };
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await checkSpacing();
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    await checkSpacing();
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...NestedTools,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  // Keep the narrow-container regression active in the desktop-sized test-runner too.
  decorators: [PhoneSubagentReportDecorator],
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  play: async context => {
    await expect(context.parameters.pixel).toMatchObject({
      matrix: {
        viewports: ["phone"]
      }
    });
    await NestedTools.play?.(context);
    const frame = within(context.canvasElement).getByRole("group", {
      name: "Code Execution"
    });
    await expect(frame.getBoundingClientRect().width).toBeLessThan(390);
  }
}`,...i.parameters?.docs?.source}}};const ce=["NestedTools","NestedToolsPhone"];export{t as NestedTools,i as NestedToolsPhone,ce as __namedExportsOrder,ie as default};
