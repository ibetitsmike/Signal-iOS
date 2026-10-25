import{j as r,d as C,S as n}from"./iframe-DpCW2UOM.js";import{a as i,P as c,A as p}from"./meta-BwRgvoZ6.js";import{s as b}from"./chatSetup-48_rCYsC.js";import{a as g,c as w}from"./messages-BbMCeQNx.js";import{c as f}from"./tools-Bd0lcXw4.js";import{w as L,b as M}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const{userEvent:E,waitFor:A,within:P}=__STORYBOOK_MODULE_TEST__,de={...i,title:"App/AskUserQuestionDock"},y=[{question:"Which storage backend should the cache use?",header:"Storage",options:[{label:"SQLite",description:"One file next to the config; survives restarts."},{label:"In memory",description:"Fastest, but cold after every restart."}],multiSelect:!1},{question:"Which platforms need the migration?",header:"Platforms",options:[{label:"macOS",description:"Desktop app on Apple silicon and Intel."},{label:"Linux",description:"AppImage and server installs."},{label:"Windows",description:"Installer and portable builds."}],multiSelect:!0}],x=Array.from({length:12},(e,t)=>`Step ${t+1}: while the questions are open I am reading the cache module, its callers and the tests that cover eviction, so the change is ready to go once you answer.`).join(`

`);function v(e){return b({workspaceId:e,workspaceName:"cache-backend",projectName:"xum",messages:[g("msg-1","Add a persistent cache for the model list.",{historySequence:1,timestamp:n-12e4}),w("msg-2","A couple of choices first; I'll keep exploring meanwhile.",{historySequence:2,timestamp:n-11e4,toolCalls:[f("call-ask-dock",y)]}),w("msg-3",x,{historySequence:3,timestamp:n-1e5})]})}const q=[{question:"How long should cached entries live?",header:"Expiry",options:[{label:"One day",description:"Refetch the model list daily."},{label:"Until restart",description:"Never expire while the app runs."}],multiSelect:!1}];function S(e){return b({workspaceId:e,workspaceName:"cache-backend",projectName:"xum",messages:[g("msg-1","Add a persistent cache for the model list.",{historySequence:1,timestamp:n-12e4}),w("msg-2","A couple of choices first; I'll keep exploring meanwhile.",{historySequence:2,timestamp:n-11e4,toolCalls:[f("call-ask-dock",y)]}),w("msg-3",x,{historySequence:3,timestamp:n-1e5,toolCalls:[f("call-ask-dock-2",q)]})]})}function D(e){I(e);const t=e.querySelector('[data-testid="chat-composer-dock"] [data-component="AskUserQuestionDock"]'),o=Array.from(t?.querySelectorAll("button")??[]).map(a=>a.textContent?.trim());for(const a of[...y,...q].map(Q=>Q.header))if(!o.includes(a))throw new Error(`The chained form has no "${a}" tab`);if(t?.querySelectorAll("[data-question-group-divider]").length!==1)throw new Error("Expected one divider between the two calls' tabs");const s=Array.from(e.querySelectorAll("div")).filter(a=>a.textContent?.trim()==="Answer in the panel above the chat input.");if(s.length!==2)throw new Error(`Expected a transcript stub per call; found ${s.length}`)}async function l(e,t=I){const o=document.getElementById("storybook-root")??e;await L(o),M(),await A(()=>t(o),{timeout:1e4})}function I(e){const o=e.querySelector('[data-testid="chat-composer-dock"]')?.querySelector('[data-component="AskUserQuestionDock"]');if(!o)throw new Error("Open question is not docked above the chat input");if(!o.textContent?.includes(y[0].question))throw new Error("Docked question does not show the first question");const s=Array.from(e.querySelectorAll("button")).filter(a=>a.textContent?.trim()==="Next");if(s.length!==1||!o.contains(s[0]))throw new Error(`Expected one Next button, inside the dock; found ${s.length}`);if(o.scrollWidth>o.clientWidth)throw new Error("Docked question overflows horizontally")}function _(e){const t=C.c(3);let o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o={width:390,height:844,overflow:"hidden"},t[0]=o):o=t[0];let s;return t[1]!==e?(s=r.jsx("div",{style:o,children:r.jsx(e,{})}),t[1]=e,t[2]=s):s=t[2],s}const m={render:()=>r.jsx(p,{setup:()=>v("ws-ask-dock-desktop")}),parameters:{...i.parameters,pixel:c},play:async({canvasElement:e})=>{await l(e)}},d={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>r.jsx(p,{setup:()=>v("ws-ask-dock-phone")}),decorators:[_],parameters:{...i.parameters,pixel:c},play:async({canvasElement:e})=>{await l(e)}},u={render:()=>r.jsx(p,{setup:()=>S("ws-ask-dock-chained-desktop")}),parameters:{...i.parameters,pixel:c},play:async({canvasElement:e})=>{await l(e,D)}},h={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>r.jsx(p,{setup:()=>S("ws-ask-dock-chained-phone")}),decorators:[_],parameters:{...i.parameters,pixel:c},play:async({canvasElement:e})=>{await l(e,D)}},k={render:()=>r.jsx(p,{setup:()=>S("ws-ask-dock-chained-submit")}),parameters:{...i.parameters,pixel:c},play:async({canvasElement:e})=>{await l(e,D);const t=document.getElementById("storybook-root")??e,o=P(t.querySelector('[data-component="AskUserQuestionDock"]')??t);await E.click(o.getByRole("button",{name:"Summary"})),await E.click(o.getByRole("button",{name:"Submit answers"})),await A(()=>{if(t.querySelector('[data-component="AskUserQuestionDock"]'))throw new Error("The chained form stayed open after its answers were accepted")},{timeout:1e4})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDockStory("ws-ask-dock-desktop")} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertQuestionDocked(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupDockStory("ws-ask-dock-phone")} />,
  decorators: [PhoneWidthDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertQuestionDocked(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupChainedDockStory("ws-ask-dock-chained-desktop")} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertQuestionDocked(canvasElement, checkChainedQuestionsDocked);
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupChainedDockStory("ws-ask-dock-chained-phone")} />,
  decorators: [PhoneWidthDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertQuestionDocked(canvasElement, checkChainedQuestionsDocked);
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupChainedDockStory("ws-ask-dock-chained-submit")} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertQuestionDocked(canvasElement, checkChainedQuestionsDocked);
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const questionDock = within(storyRoot.querySelector<HTMLElement>('[data-component="AskUserQuestionDock"]') ?? storyRoot);
    await userEvent.click(questionDock.getByRole("button", {
      name: "Summary"
    }));
    await userEvent.click(questionDock.getByRole("button", {
      name: "Submit answers"
    }));
    // A form left open here could send the same answers again.
    await waitFor(() => {
      if (storyRoot.querySelector('[data-component="AskUserQuestionDock"]')) {
        throw new Error("The chained form stayed open after its answers were accepted");
      }
    }, {
      timeout: 10_000
    });
  }
}`,...k.parameters?.docs?.source}}};const ue=["Desktop","Phone","ChainedDesktop","ChainedPhone","ChainedSubmit"];export{u as ChainedDesktop,h as ChainedPhone,k as ChainedSubmit,m as Desktop,d as Phone,ue as __namedExportsOrder,de as default};
