import{j as o}from"./iframe-DS5VyXLs.js";import{t as m}from"./contrast-Bnc7IxMq.js";import{P as g,S as u}from"./meta-BWzge-eA.js";import{D as _}from"./DevToolsStepCard-6CXrVeO0.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{expect:h,waitFor:r,within:p}=__STORYBOOK_MODULE_TEST__,y=300,E=16,w=16,T=2,v=y-E-w-T,l="server:GOOGLE_SEARCH_WEB_WITH_A_VERY_LONG_UNBROKEN_POLICY_REGEX_THAT_MUST_WRAP_IN_NARROW_DEBUG_CARDS",V={title:"Features/RightSidebar/DevToolsStepCard",component:_,parameters:{layout:"fullscreen",pixel:g},decorators:[t=>o.jsx(u,{children:o.jsx("div",{className:"bg-surface-primary text-foreground p-3",children:o.jsx("div",{"data-testid":"narrow-debug-card",className:"overflow-hidden",style:{width:v},children:o.jsx(t,{})})})})]},c={id:"step-2",runId:"run-1",stepNumber:2,type:"stream",modelId:"gemini-3.5-flash",provider:"google.generative-ai",startedAt:"2026-06-09T12:00:00.000Z",durationMs:8400,input:{maxOutputTokens:65536,toolChoice:"auto",providerOptions:{google:{safetySettings:[{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_NONE"}]}},tools:Array.from({length:26},(t,e)=>({name:`tool_${e+1}`,description:"A tool available to the agent.",parameters:{type:"object",properties:{query:{type:"string"}}}})),prompt:[{role:"system",content:"You are Xum."},{role:"user",content:"Find the latest information about evaluations."},{role:"assistant",content:"I will search the web and summarize the results."},{role:"tool",content:"Search results included https://example.com/engineering/demystifying-evals-for-ai-agents"}]},output:{finishReason:"SAFETY",reasoningParts:[{id:"reasoning-1",text:"Summarizing the request and selecting the best follow-up tool call."}],toolCalls:[{toolCallId:"tool-call-1",toolName:"server:GOOGLE_SEARCH_WEB",args:{query:"site:example.com engineering demystifying evals for ai agents"}}],textParts:[{id:"text-1",text:"The provider blocked this response for safety policy reasons."}]},usage:{inputTokens:14450,outputTokens:807,totalTokens:15257,raw:{promptTokenCount:14450,candidatesTokenCount:807}},error:null,rawRequest:{body:{model:"gemini-3.5-flash",tools:["server:GOOGLE_SEARCH_WEB"]}},requestHeaders:null,responseHeaders:null,rawResponse:{finishReason:"SAFETY"},rawChunks:null,inputTransformations:null},a={tags:["devtools-overflow"],args:{step:c,toolPolicy:Array.from({length:12},(t,e)=>({regex_match:e===0?l:`server:policy_${e+1}`,action:e%2===0?"enable":"disable"}))},play:async({canvasElement:t})=>{const e=p(t);e.getByRole("button",{name:/Step 2/}).click(),await r(()=>e.getByText("server:GOOGLE_SEARCH_WEB"));const s=e.getByTestId("narrow-debug-card");if(i(s),e.queryByRole("button",{name:/Dropped thinking/})!=null)throw new Error("Dropped thinking pill rendered for a step without entries");e.getByRole("button",{name:/12 policy rules/}).click(),await r(()=>e.getByText(l)),i(s);const d=[...e.getAllByText("assistant"),...e.getAllByText("enable")];await h(m(()=>d).join(`
`)).toBe("")}},b={...c,id:"step-3",stepNumber:3,modelId:"claude-fable-5-1",provider:"anthropic.messages",output:{finishReason:"stop",textParts:[{id:"text-1",text:"Done."}]},usage:{inputTokens:9200,outputTokens:410,totalTokens:9610},inputTransformations:[{type:"thinking_dropped",path:"messages.3.content.0",reason:"prefix_binding_mismatch"},{type:"thinking_dropped",path:"messages.11.content.0",reason:"model_binding_mismatch"},{type:"thinking_mismatch_allowed",path:"messages.15.content.2",reason:"prefix_binding_mismatch"}]},n={args:{step:b},play:async({canvasElement:t})=>{const e=p(t);e.getByRole("button",{name:/Step 3/}).click(),(await r(()=>e.getByRole("button",{name:"Dropped thinking · 2"}))).click(),await r(()=>e.getByText("messages.3.content.0 · prefix_binding_mismatch")),e.getByText("messages.15.content.2 · thinking_mismatch_allowed · prefix_binding_mismatch"),i(e.getByTestId("narrow-debug-card"))}};function i(t){if(t.scrollWidth>t.clientWidth+1)throw new Error(`Debug step card overflowed narrow container by ${t.scrollWidth-t.clientWidth}px`)}a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["devtools-overflow"],
  args: {
    step: debugStep,
    toolPolicy: Array.from({
      length: 12
    }, (_, index) => ({
      regex_match: index === 0 ? LONG_POLICY_REGEX : \`server:policy_\${index + 1}\`,
      action: index % 2 === 0 ? "enable" : "disable"
    }))
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByRole("button", {
      name: /Step 2/
    }).click();
    await waitFor(() => canvas.getByText("server:GOOGLE_SEARCH_WEB"));
    const container = canvas.getByTestId("narrow-debug-card");
    assertNoDebugCardOverflow(container);
    // No input_transformations reported, so no dropped-thinking pill.
    if (canvas.queryByRole("button", {
      name: /Dropped thinking/
    }) != null) {
      throw new Error("Dropped thinking pill rendered for a step without entries");
    }
    canvas.getByRole("button", {
      name: /12 policy rules/
    }).click();
    await waitFor(() => canvas.getByText(LONG_POLICY_REGEX));
    assertNoDebugCardOverflow(container);

    // The green role and policy chips are success text on a green tint (#6882).
    const greenChips = [...canvas.getAllByText("assistant"), ...canvas.getAllByText("enable")];
    await expect(textsBelowAaInThemes(() => greenChips).join("\\n")).toBe("");
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    step: anthropicStep
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByRole("button", {
      name: /Step 3/
    }).click();
    const pill = await waitFor(() => canvas.getByRole("button", {
      name: "Dropped thinking · 2"
    }));
    pill.click();
    await waitFor(() => canvas.getByText("messages.3.content.0 · prefix_binding_mismatch"));
    canvas.getByText("messages.15.content.2 · thinking_mismatch_allowed · prefix_binding_mismatch");
    assertNoDebugCardOverflow(canvas.getByTestId("narrow-debug-card"));
  }
}`,...n.parameters?.docs?.source},description:{story:"Anthropic preserved thinking: each replayed block the API dropped is listed by path.",...n.parameters?.docs?.description}}};const $=["NarrowExpanded","DroppedThinking"];export{n as DroppedThinking,a as NarrowExpanded,$ as __namedExportsOrder,V as default};
