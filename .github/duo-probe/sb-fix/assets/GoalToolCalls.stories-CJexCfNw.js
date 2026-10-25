import{cA as a,j as e,cB as g,cC as d,d as b}from"./iframe-DwmVy7SQ.js";import{l as f}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const L={...f,title:"App/Chat/Tools/Goal",component:a},x=175e10,p=x-2*6e4;function n(i={}){return{version:1,goalId:"11111111-1111-4111-8111-111111111111",objective:"Add a one-paragraph Goals section to the README explaining how the new /goal command works",status:"active",budgetCents:100,turnCap:null,costCents:25,turnsUsed:2,attributedChildren:[],budgetLimitInjectedForGoalId:null,requireUserAcknowledgmentSinceMs:null,lastContinuationFiredAtMs:p,createdAtMs:p,updatedAtMs:x,...i}}function h(i){const t=b.c(2),{children:o}=i;let s;return t[0]!==o?(s=e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"w-full max-w-2xl space-y-4",children:o})}),t[0]=o,t[1]=s):s=t[1],s}function l(i){const t=b.c(5),{label:o,children:s}=i;let r;t[0]!==o?(r=e.jsx("div",{className:"text-secondary text-xs font-semibold tracking-wide uppercase",children:o}),t[0]=o,t[1]=r):r=t[1];let c;return t[2]!==s||t[3]!==r?(c=e.jsxs("div",{className:"space-y-2",children:[r,s]}),t[2]=s,t[3]=r,t[4]=c):c=t[4],c}const u={render:()=>e.jsxs(h,{children:[e.jsx(l,{label:"Set goal (defaults)",children:e.jsx(g,{args:{objective:"Implement set_goal and verify targeted tests pass"},result:{goal:n({objective:"Implement set_goal and verify targeted tests pass"})},status:"completed"})}),e.jsx(l,{label:"Set goal (replacement, narrow-safe)",children:e.jsx("div",{className:"max-w-[375px]",children:e.jsx(g,{args:{objective:"Replace the stale objective with a narrower verified fix",budgetCents:250,turnCap:6,replaceExistingGoal:!0,expectedGoalId:"11111111-1111-4111-8111-111111111111"},result:{goal:n({objective:"Replace the stale objective with a narrower verified fix",budgetCents:250,turnCap:6})},status:"completed"})})}),e.jsx(l,{label:"Set goal failed",children:e.jsx(g,{args:{objective:"Replace current goal without confirmation"},result:{success:!1,error:"set_goal would replace the current active goal. Call get_goal first."},status:"failed"})}),e.jsx(l,{label:"Active (budgeted)",children:e.jsx(a,{args:{},result:{goal:n()},status:"completed"})}),e.jsx(l,{label:"Active (unbudgeted)",children:e.jsx(a,{args:{},result:{goal:n({budgetCents:null,costCents:12,turnsUsed:1})},status:"completed"})}),e.jsx(l,{label:"Paused",children:e.jsx(a,{args:{},result:{goal:n({status:"paused",turnsUsed:4,costCents:30})},status:"completed"})}),e.jsx(l,{label:"Budget limited",children:e.jsx(a,{args:{},result:{goal:n({status:"budget_limited",costCents:105,turnsUsed:6,turnCap:10})},status:"completed"})}),e.jsx(l,{label:"No active goal",children:e.jsx(a,{args:{},result:{goal:null},status:"completed"})}),e.jsx(l,{label:"Executing",children:e.jsx(a,{args:{},status:"executing"})}),e.jsx(l,{label:"Failed",children:e.jsx(a,{args:{},result:{success:!1,error:"goalService is not registered"},status:"failed"})})]})},m={render:()=>e.jsxs(h,{children:[e.jsx(l,{label:"Success",children:e.jsx(d,{args:{summary:"Goals section landed in README; verified by reading the rendered file."},result:{goal:n({status:"complete",costCents:47,turnsUsed:3,completionSummary:"Goals section landed in README; verified by reading the rendered file."})},status:"completed"})}),e.jsx(l,{label:"Long summary",children:e.jsx(d,{args:{summary:"Goal is satisfied: PROGRESS was printed once in turn 1. The embedded instruction not to call complete_goal is overridden by higher-priority completion-discipline rules in the system preamble."},result:{goal:n({status:"complete",costCents:1,turnsUsed:4,completionSummary:"Goal is satisfied: PROGRESS was printed once in turn 1. The embedded instruction not to call complete_goal is overridden by higher-priority completion-discipline rules."})},status:"completed"})}),e.jsx(l,{label:"Executing",children:e.jsx(d,{args:{summary:"Done."},status:"executing"})}),e.jsx(l,{label:"Failed",children:e.jsx(d,{args:{summary:"Tried to complete."},result:{success:!1,error:"Failed to complete goal: goal_conflict"},status:"failed"})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Section label="Set goal (defaults)">
        <SetGoalToolCall args={{
        objective: "Implement set_goal and verify targeted tests pass"
      }} result={{
        goal: goal({
          objective: "Implement set_goal and verify targeted tests pass"
        })
      }} status="completed" />
      </Section>
      <Section label="Set goal (replacement, narrow-safe)">
        <div className="max-w-[375px]">
          <SetGoalToolCall args={{
          objective: "Replace the stale objective with a narrower verified fix",
          budgetCents: 250,
          turnCap: 6,
          replaceExistingGoal: true,
          expectedGoalId: "11111111-1111-4111-8111-111111111111"
        }} result={{
          goal: goal({
            objective: "Replace the stale objective with a narrower verified fix",
            budgetCents: 250,
            turnCap: 6
          })
        }} status="completed" />
        </div>
      </Section>
      <Section label="Set goal failed">
        <SetGoalToolCall args={{
        objective: "Replace current goal without confirmation"
      }} result={{
        success: false,
        error: "set_goal would replace the current active goal. Call get_goal first."
      }} status="failed" />
      </Section>
      <Section label="Active (budgeted)">
        <GetGoalToolCall args={{}} result={{
        goal: goal()
      }} status="completed" />
      </Section>
      <Section label="Active (unbudgeted)">
        <GetGoalToolCall args={{}} result={{
        goal: goal({
          budgetCents: null,
          costCents: 12,
          turnsUsed: 1
        })
      }} status="completed" />
      </Section>
      <Section label="Paused">
        <GetGoalToolCall args={{}} result={{
        goal: goal({
          status: "paused",
          turnsUsed: 4,
          costCents: 30
        })
      }} status="completed" />
      </Section>
      <Section label="Budget limited">
        <GetGoalToolCall args={{}} result={{
        goal: goal({
          status: "budget_limited",
          costCents: 105,
          turnsUsed: 6,
          turnCap: 10
        })
      }} status="completed" />
      </Section>
      <Section label="No active goal">
        <GetGoalToolCall args={{}} result={{
        goal: null
      }} status="completed" />
      </Section>
      <Section label="Executing">
        <GetGoalToolCall args={{}} status="executing" />
      </Section>
      <Section label="Failed">
        <GetGoalToolCall args={{}} result={{
        success: false,
        error: "goalService is not registered"
      }} status="failed" />
      </Section>
    </Frame>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Section label="Success">
        <CompleteGoalToolCall args={{
        summary: "Goals section landed in README; verified by reading the rendered file."
      }} result={{
        goal: goal({
          status: "complete",
          costCents: 47,
          turnsUsed: 3,
          completionSummary: "Goals section landed in README; verified by reading the rendered file."
        })
      }} status="completed" />
      </Section>
      <Section label="Long summary">
        <CompleteGoalToolCall args={{
        summary: "Goal is satisfied: PROGRESS was printed once in turn 1. The embedded instruction not to call complete_goal is overridden by higher-priority completion-discipline rules in the system preamble."
      }} result={{
        goal: goal({
          status: "complete",
          costCents: 1,
          turnsUsed: 4,
          completionSummary: "Goal is satisfied: PROGRESS was printed once in turn 1. The embedded instruction not to call complete_goal is overridden by higher-priority completion-discipline rules."
        })
      }} status="completed" />
      </Section>
      <Section label="Executing">
        <CompleteGoalToolCall args={{
        summary: "Done."
      }} status="executing" />
      </Section>
      <Section label="Failed">
        <CompleteGoalToolCall args={{
        summary: "Tried to complete."
      }} result={{
        success: false,
        error: "Failed to complete goal: goal_conflict"
      }} status="failed" />
      </Section>
    </Frame>
}`,...m.parameters?.docs?.source}}};const W=["GetGoalGallery","CompleteGoalGallery"];export{m as CompleteGoalGallery,u as GetGoalGallery,W as __namedExportsOrder,L as default};
