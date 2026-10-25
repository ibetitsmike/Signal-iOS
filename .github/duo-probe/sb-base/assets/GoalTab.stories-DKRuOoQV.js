import{j as e,aK as p,bc as m}from"./iframe-C48Cgo5e.js";import{b as u}from"./meta-BMDQogfB.js";import{c as b}from"./orpc-qlMSh58E.js";import{GoalTab as d}from"./GoalTab-3yls_m1t.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./GoalBoardSections-DsY5YXjt.js";import"./grip-vertical-CGkNEFDp.js";const Y={title:"Features/RightSidebar/GoalTab",component:d,parameters:{layout:"fullscreen"}},g=[{label:"Empty · with create form",goal:null,onCreate:()=>{}},{label:"Empty · read-only",goal:null},{label:"Active",goal:{goalId:"11111111-1111-4111-8111-111111111111",status:"active",objective:"Ship the goal primitive vertical slice",budgetCents:null,costCents:0,turnsUsed:0,turnCap:null,startedAtMs:Date.now()}},{label:"Active · with accounting",goal:{goalId:"44444444-4444-4444-8444-444444444444",status:"active",objective:"Ship the cost accumulator vertical slice",budgetCents:500,costCents:125,turnsUsed:3,turnCap:10,startedAtMs:Date.now()-9e4}},{label:"Paused",goal:{goalId:"22222222-2222-4222-8222-222222222222",status:"paused",objective:"Ship the goal primitive vertical slice",budgetCents:null,costCents:125,turnsUsed:3,turnCap:null,startedAtMs:Date.now()}},{label:"Budget limited",goal:{goalId:"55555555-5555-4555-8555-555555555555",status:"budget_limited",objective:"Ship the budget-limited transition slice",budgetCents:500,costCents:525,turnsUsed:4,turnCap:10,startedAtMs:Date.now()-12e4}},{label:"Complete",goal:{goalId:"33333333-3333-4333-8333-333333333333",status:"complete",objective:"Ship the goal primitive vertical slice",budgetCents:null,costCents:250,turnsUsed:5,turnCap:null,completionSummary:"The lifecycle controls shipped with persistence and tests.",startedAtMs:Date.now()}},{label:"Active · with budget",goal:{goalId:"66666666-6666-4666-8666-666666666666",status:"active",objective:"Ship the goal budget UX iteration",budgetCents:1e3,costCents:150,turnsUsed:2,turnCap:null,startedAtMs:Date.now()-3e4}}],o={render:()=>e.jsx("div",{className:"flex flex-col gap-6 p-3",children:g.map(t=>e.jsxs("section",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-xs font-medium tracking-wide uppercase opacity-60",children:t.label}),e.jsx(d,{goal:t.goal,onCreate:t.onCreate})]},t.label))})},c="ws-story-goaltab",a=Date.UTC(2026,4,20,12,0,0);function s(t){return{version:1,goalId:t.goalId,objective:t.objective??"Untitled goal",status:t.status??"paused",budgetCents:t.budgetCents??null,turnCap:t.turnCap??null,costCents:t.costCents??0,turnsUsed:t.turnsUsed??0,attributedChildren:t.attributedChildren??[],budgetLimitInjectedForGoalId:t.budgetLimitInjectedForGoalId??null,requireUserAcknowledgmentSinceMs:t.requireUserAcknowledgmentSinceMs??null,createdAtMs:t.createdAtMs??a,updatedAtMs:t.updatedAtMs??a,...t.completionSummary!=null?{completionSummary:t.completionSummary}:{}}}function l(t,r,i){return i!=null?{section:t,goal:r,endedAtMs:i}:{section:t,goal:r}}const h={entries:[l("upcoming",s({goalId:"aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",objective:"Wire goal-board reorder to the keyboard",budgetCents:500})),l("upcoming",s({goalId:"bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",objective:"Audit goal continuation telemetry"})),l("complete",s({goalId:"cccccccc-cccc-4ccc-8ccc-cccccccccccc",objective:"Ship the goal primitive vertical slice",status:"complete",budgetCents:500,costCents:412,turnsUsed:8,completionSummary:"Lifecycle controls shipped with persistence and tests."}),a-6e4),l("archived",s({goalId:"dddddddd-dddd-4ddd-8ddd-dddddddddddd",objective:"Sketch goal-board mobile layout"}),a-36e5)]},n={args:{workspaceId:c,goal:{goalId:"33333333-3333-4333-8333-333333333333",status:"complete",objective:"Ship the goal primitive vertical slice",budgetCents:null,costCents:250,turnsUsed:5,turnCap:null,completionSummary:"The lifecycle controls shipped with persistence and tests.",startedAtMs:a}},parameters:{pixel:{matrix:u}},decorators:[t=>e.jsx(p,{client:b({goalBoardSnapshots:new Map([[c,h]])}),children:e.jsx(m,{children:e.jsx("div",{className:"max-w-md p-3",children:e.jsx(t,{})})})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-3">
      {STATE_VARIANTS.map(variant => <section key={variant.label} className="flex flex-col gap-2">
          <div className="text-xs font-medium tracking-wide uppercase opacity-60">
            {variant.label}
          </div>
          <GoalTab goal={variant.goal} onCreate={variant.onCreate} />
        </section>)}
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceId: STORY_WORKSPACE_ID,
    goal: {
      goalId: "33333333-3333-4333-8333-333333333333",
      status: "complete",
      objective: "Ship the goal primitive vertical slice",
      budgetCents: null,
      costCents: 250,
      turnsUsed: 5,
      turnCap: null,
      completionSummary: "The lifecycle controls shipped with persistence and tests.",
      startedAtMs: NOW
    }
  },
  // Dual-theme smoke coverage: the row-action button restyle should not
  // regress in either light or dark mode.
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  decorators: [Story => <APIProvider client={createMockORPCClient({
    goalBoardSnapshots: new Map([[STORY_WORKSPACE_ID, FULL_BOARD]])
  })}>
        <TooltipProvider>
          <div className="max-w-md p-3">
            <Story />
          </div>
        </TooltipProvider>
      </APIProvider>]
}`,...n.parameters?.docs?.source}}};const q=["States","CompleteWithBoard"];export{n as CompleteWithBoard,o as States,q as __namedExportsOrder,Y as default};
