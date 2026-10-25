import{j as i,c as p,S as n}from"./iframe-DS5VyXLs.js";import{a as l,b as y,P as h,A as m}from"./meta-BWzge-eA.js";import{d as c}from"./chatSetup-DJI_9Mbv.js";import{a as d}from"./messages-CnWrfKdU.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";import"./git-Ekgdg9se.js";const{expect:s,waitFor:T,within:x}=__STORYBOOK_MODULE_TEST__,$={...l,title:"Features/Messages/ChatBarrier/InterruptedBarrier"},r={parameters:{pixel:{matrix:y}},render:()=>i.jsx(m,{setup:()=>{p();const t="ws-context-exceeded";return c({workspaceId:t,providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0},xai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}},chatHandler:e=>(setTimeout(()=>{e(d("msg-1","Can you help me with this huge codebase?",{historySequence:1,timestamp:n-1e5})),e({type:"caught-up",historyReplayStatus:"complete"}),e({type:"stream-start",workspaceId:t,messageId:"assistant-1",model:"openai:gpt-5.2",historySequence:2,startTime:n-9e4,mode:"exec"}),e({type:"stream-error",messageId:"assistant-1",error:"Context length exceeded: the conversation is too long to send to this model.",errorType:"context_exceeded"})},50),()=>{})})}})},o="The SSH host is back; the build passes now.",a={parameters:{pixel:h},render:()=>i.jsx(m,{setup:()=>{p();const t="ws-prestart-retry";return c({workspaceId:t,chatHandler:e=>(setTimeout(()=>{e(d("msg-1","Run the build on the remote workspace",{historySequence:1,timestamp:n-1e5})),e({type:"caught-up",historyReplayStatus:"complete"});for(const u of[1,2])e({type:"stream-error",messageId:`assistant-failed-${u}`,error:"Remote workspace unreachable: ssh exited with code 255",errorType:"runtime_start_failed"});e({type:"stream-start",workspaceId:t,messageId:"assistant-reply",model:"openai:gpt-5.2",historySequence:2,startTime:n-9e4,mode:"exec"}),e({type:"stream-delta",workspaceId:t,messageId:"assistant-reply",delta:o,tokens:10,timestamp:n-89e3}),e({type:"stream-end",workspaceId:t,messageId:"assistant-reply",metadata:{historySequence:2,timestamp:n-88e3,model:"openai:gpt-5.2"},parts:[{type:"text",text:o}]})},50),()=>{})})}}),play:async({canvasElement:t})=>{const e=x(t);await T(()=>s(e.getByText(o)).toBeVisible(),{timeout:5e3}),await s(e.queryByText("Stream interrupted")).not.toBeInTheDocument(),await s(e.queryByText("Runtime failed to start")).not.toBeInTheDocument(),await s(e.queryByText(/ssh exited with code 255/)).not.toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    const workspaceId = "ws-context-exceeded";
    return setupCustomChatStory({
      workspaceId,
      providersConfig: {
        openai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        },
        xai: {
          apiKeySet: true,
          isEnabled: true,
          isConfigured: true
        }
      },
      chatHandler: (callback: (event: WorkspaceChatMessage) => void) => {
        setTimeout(() => {
          callback(createUserMessage("msg-1", "Can you help me with this huge codebase?", {
            historySequence: 1,
            timestamp: STABLE_TIMESTAMP - 100000
          }));
          callback({
            type: "caught-up",
            historyReplayStatus: "complete"
          });
          callback({
            type: "stream-start",
            workspaceId,
            messageId: "assistant-1",
            model: "openai:gpt-5.2",
            historySequence: 2,
            startTime: STABLE_TIMESTAMP - 90000,
            mode: "exec"
          });
          callback({
            type: "stream-error",
            messageId: "assistant-1",
            error: "Context length exceeded: the conversation is too long to send to this model.",
            errorType: "context_exceeded"
          });
        }, 50);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
      }
    });
  }} />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    // Behavior is guarded by the play test; a snapshot would only add to the Pixel budget.
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    const workspaceId = "ws-prestart-retry";
    return setupCustomChatStory({
      workspaceId,
      chatHandler: (callback: (event: WorkspaceChatMessage) => void) => {
        setTimeout(() => {
          callback(createUserMessage("msg-1", "Run the build on the remote workspace", {
            historySequence: 1,
            timestamp: STABLE_TIMESTAMP - 100000
          }));
          callback({
            type: "caught-up",
            historyReplayStatus: "complete"
          });
          for (const attempt of [1, 2]) {
            callback({
              type: "stream-error",
              messageId: \`assistant-failed-\${attempt}\`,
              error: "Remote workspace unreachable: ssh exited with code 255",
              errorType: "runtime_start_failed"
            });
          }

          // The failed attempts persisted nothing, so the reply takes sequence 2.
          callback({
            type: "stream-start",
            workspaceId,
            messageId: "assistant-reply",
            model: "openai:gpt-5.2",
            historySequence: 2,
            startTime: STABLE_TIMESTAMP - 90000,
            mode: "exec"
          });
          callback({
            type: "stream-delta",
            workspaceId,
            messageId: "assistant-reply",
            delta: RETRY_REPLY_TEXT,
            tokens: 10,
            timestamp: STABLE_TIMESTAMP - 89000
          });
          callback({
            type: "stream-end",
            workspaceId,
            messageId: "assistant-reply",
            metadata: {
              historySequence: 2,
              timestamp: STABLE_TIMESTAMP - 88000,
              model: "openai:gpt-5.2"
            },
            parts: [{
              type: "text",
              text: RETRY_REPLY_TEXT
            }]
          });
        }, 50);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
      }
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(canvas.getByText(RETRY_REPLY_TEXT)).toBeVisible(), {
      timeout: 5000
    });
    await expect(canvas.queryByText("Stream interrupted")).not.toBeInTheDocument();
    // A stale error banner is now titled by its error kind, not "Stream interrupted".
    await expect(canvas.queryByText("Runtime failed to start")).not.toBeInTheDocument();
    await expect(canvas.queryByText(/ssh exited with code 255/)).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const z=["ContextExceededSuggestion","RetrySucceededAfterPreStartFailures"];export{r as ContextExceededSuggestion,a as RetrySucceededAfterPreStartFailures,z as __namedExportsOrder,$ as default};
