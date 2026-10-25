import{j as l,d as E,u as T,C as y,S as d}from"./iframe-C48Cgo5e.js";import{a as c,P as m,A as u}from"./meta-BMDQogfB.js";import{s as b}from"./chatSetup--9T4hSMU.js";import{a as L,c as O}from"./messages-Bf7rPDB1.js";import{b as S}from"./tools-Bd0lcXw4.js";import{w as x,b as D}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{waitFor:_}=__STORYBOOK_MODULE_TEST__,it={...c,title:"App/PinnedTodoList"},p=[{content:"Read the task and the linked issue",status:"completed"},{content:"Explored the todo tool and its UI",status:"completed"},{content:"Wrote the plan",status:"completed"},{content:"Raised the todo cap",status:"completed"},{content:"Rewrote the limit tests",status:"completed"},{content:"Kept the pinned panel on the current item",status:"completed"},{content:"Added the long-list stories",status:"completed"},{content:"Ran make static-check",status:"completed"},{content:"Ran the targeted unit tests",status:"completed"},{content:"Audited the new tests",status:"completed"},{content:"Pushed the branch for dogfooding",status:"completed"},{content:"Ran remote dogfood UAT",status:"completed"},{content:"Opening the pull request",status:"in_progress"},{content:"Babysit CI until green",status:"pending"},{content:"Run the Codex review loop",status:"pending"}];function h(e){return T(y(e),!0),b({workspaceId:e,workspaceName:"todo-cap",projectName:"xum",messages:[L("msg-1","Ship the todo cap change.",{historySequence:1,timestamp:d-12e4}),O("msg-2","Tracking the playbook and the task in the TODO list.",{historySequence:2,timestamp:d-11e4,toolCalls:[S("call-todo-long",p)]})]})}async function g(e){const t=document.getElementById("storybook-root")??e;await x(t),D(),await _(()=>v(t),{timeout:1e4})}function v(e){const t=e.querySelector('[data-component="PinnedTodoList"]');if(t===null)throw new Error("Pinned TODO panel not found");const o=t.querySelectorAll("[data-todo-row]");if(o.length!==p.length)throw new Error(`Expected ${p.length} TODO rows, found ${o.length}`);const n=o[0].closest(".overflow-y-auto");if(n===null)throw new Error("Pinned TODO scroll container not found");if(n.scrollHeight<=n.clientHeight)throw new Error("Expected the long TODO list to overflow the pinned panel");const w=p.findIndex(f=>f.status==="in_progress"),s=o[w].getBoundingClientRect(),r=n.getBoundingClientRect();if(s.top<r.top||s.bottom>r.bottom)throw new Error(`In-progress TODO row (${s.top}-${s.bottom}) is outside the panel's visible area (${r.top}-${r.bottom})`);if(t.scrollWidth>t.clientWidth)throw new Error("Pinned TODO panel overflows horizontally")}function A(e){const t=E.c(3);let o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o={width:390,height:844,overflow:"hidden"},t[0]=o):o=t[0];let n;return t[1]!==e?(n=l.jsx("div",{style:o,children:l.jsx(e,{})}),t[1]=e,t[2]=n):n=t[2],n}const a={render:()=>l.jsx(u,{setup:()=>h("ws-pinned-todo-long-desktop")}),parameters:{...c.parameters,pixel:m},play:async({canvasElement:e})=>{await g(e)}},i={globals:{viewport:{value:"mobile1",isRotated:!1}},render:()=>l.jsx(u,{setup:()=>h("ws-pinned-todo-long-phone")}),decorators:[A],parameters:{...c.parameters,pixel:m},play:async({canvasElement:e})=>{await g(e)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupLongTodoStory("ws-pinned-todo-long-desktop")} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertCurrentTodoVisible(canvasElement);
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupLongTodoStory("ws-pinned-todo-long-phone")} />,
  decorators: [PhoneWidthDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    await assertCurrentTodoVisible(canvasElement);
  }
}`,...i.parameters?.docs?.source}}};const pt=["LongListDesktop","LongListPhone"];export{a as LongListDesktop,i as LongListPhone,pt as __namedExportsOrder,it as default};
