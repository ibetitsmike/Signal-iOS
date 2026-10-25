import{j as u,c as i,s as m,a as c,S as a}from"./iframe-DwmVy7SQ.js";import{a as l,b as d,A as g}from"./meta-CT6GdK4g.js";import{c as b}from"./chatSetup-D_GSrzyc.js";import{a as w}from"./messages-ajL82_FT.js";import{c as h}from"./orpc-sAt07-6s.js";import{c as y,g as k}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./git-Ekgdg9se.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{userEvent:L,waitFor:n}=__STORYBOOK_MODULE_TEST__,V={...l,title:"Components/DebugLlmRequestModal"},M=e=>({capturedAt:a-45e3,workspaceId:e,messageId:"assistant-debug-1",model:"anthropic:claude-3-5-sonnet-20241022",providerName:"anthropic",thinkingLevel:"medium",mode:"exec",agentId:"exec",maxOutputTokens:2048,systemMessage:"You are Xum, a focused coding agent. Follow the user’s instructions and keep answers short.",messages:[{role:"user",content:"We hit a rate limit while refactoring. Summarize the plan and retry."},{role:"assistant",content:"Here’s a concise summary and the next steps to resume safely."},{role:"tool",name:"write_summary",content:"Summarized 3 tasks, trimmed history, and queued a retry."}],response:{capturedAt:a-44e3,metadata:{model:"anthropic:claude-3-5-sonnet-20241022",usage:{inputTokens:123,outputTokens:456,totalTokens:579},duration:1234,systemMessageTokens:42},parts:[{type:"text",text:"Here’s a concise summary and the next steps to resume safely.",timestamp:a-44e3},{type:"dynamic-tool",toolCallId:"tool-1",toolName:"write_summary",state:"output-available",input:{tasks:3},output:{ok:!0},timestamp:a-43950}]}}),r={parameters:{pixel:{matrix:d}},render:()=>u.jsx(g,{setup:()=>{i();const e="ws-debug-request",t=[y({id:e,name:"debug",projectName:"my-app"})];m(t[0]),c();const o=new Map([[e,s=>(setTimeout(()=>{s(w("msg-1","Can you summarize what just happened?",{historySequence:1,timestamp:a-1e5})),s({type:"caught-up",historyReplayStatus:"complete"}),s({type:"stream-error",messageId:"error-msg",error:"Rate limit exceeded. Please wait before making more requests.",errorType:"rate_limit"})},50),()=>{})]]),p=new Map([[e,M(e)]]);return h({projects:k(t),workspaces:t,onChat:b(o),lastLlmRequestSnapshots:p})}}),play:async({canvasElement:e})=>{await n(()=>{if(!e.querySelector('button[aria-label="Open last LLM request debug modal"]'))throw new Error("Debug button not found")});const t=e.querySelector('button[aria-label="Open last LLM request debug modal"]');if(!t)throw new Error("Debug button not found");await L.click(t),await n(()=>{if(!document.querySelector('[role="dialog"]')?.textContent?.includes("Last LLM request"))throw new Error("Debug modal did not open")})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    const workspaceId = "ws-debug-request";
    const workspaces = [createWorkspace({
      id: workspaceId,
      name: "debug",
      projectName: "my-app"
    })];
    selectWorkspace(workspaces[0]);
    collapseRightSidebar();
    const chatHandlers = new Map([[workspaceId, (callback: (event: WorkspaceChatMessage) => void) => {
      setTimeout(() => {
        callback(createUserMessage("msg-1", "Can you summarize what just happened?", {
          historySequence: 1,
          timestamp: STABLE_TIMESTAMP - 100000
        }));
        callback({
          type: "caught-up",
          historyReplayStatus: "complete"
        });
        callback({
          type: "stream-error",
          messageId: "error-msg",
          error: "Rate limit exceeded. Please wait before making more requests.",
          errorType: "rate_limit"
        });
      }, 50);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }]]);
    const lastLlmRequestSnapshots = new Map([[workspaceId, createDebugLlmRequestSnapshot(workspaceId)]]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces,
      onChat: createOnChatAdapter(chatHandlers),
      lastLlmRequestSnapshots
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await waitFor(() => {
      const debugButton = canvasElement.querySelector('button[aria-label="Open last LLM request debug modal"]');
      if (!debugButton) throw new Error("Debug button not found");
    });
    const debugButton = canvasElement.querySelector('button[aria-label="Open last LLM request debug modal"]');
    if (!debugButton) {
      throw new Error("Debug button not found");
    }
    await userEvent.click(debugButton);
    await waitFor(() => {
      const dialog = document.querySelector('[role="dialog"]');
      if (!dialog?.textContent?.includes("Last LLM request")) {
        throw new Error("Debug modal did not open");
      }
    });
  }
}`,...r.parameters?.docs?.source}}};const Z=["DebugLlmRequestModal"];export{r as DebugLlmRequestModal,Z as __namedExportsOrder,V as default};
