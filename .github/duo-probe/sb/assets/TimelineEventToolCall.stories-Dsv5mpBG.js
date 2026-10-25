import{j as s,cN as f}from"./iframe-DS5VyXLs.js";import{P as w,l as g,S as y}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const F={...g,title:"App/Chat/Tools/TimelineEvent",component:f,parameters:{...g.parameters,pixel:w},decorators:[r=>s.jsx(y,{children:s.jsx("div",{className:"bg-background p-6",children:s.jsx("div",{className:"w-full max-w-2xl",children:s.jsx(r,{})})})})]},e=new Date("2026-07-28T09:42:00").getTime(),o={args:{args:{description:"Landed the session-token refactor on main and opened PR #412 for review.",category:"milestone"},status:"completed",defaultExpanded:!0,result:{success:!0,recorded:!0},toolCallTimestamp:e}},n={args:{args:{description:"Picked up a review comment on PR #412 asking to gate the new token path behind a flag.",category:"picked_up"},status:"completed",result:{success:!0,recorded:!0},toolCallTimestamp:e}},a={args:{args:{description:"Switched workspace status updates from polling to SSE — polling starved the renderer past ~200 workspaces.",category:"decision"},status:"completed",defaultExpanded:!0,result:{success:!0,recorded:!0},toolCallTimestamp:e}},i={args:{args:{description:"Blocked on staging migrations — the deploy role lacks ALTER TABLE and needs an infra approval.",category:"blocker"},status:"completed",result:{success:!0,recorded:!0},toolCallTimestamp:e}},d={args:{args:{description:"Handed flaky-test triage to the infra workspace with a repro script and the failing seeds.",category:"handoff"},status:"completed",result:{success:!0,recorded:!0},toolCallTimestamp:e}},c={args:{args:{description:"Rebased the feature branch onto main after the v0.27.0 release tag."},status:"completed",defaultExpanded:!0,result:{success:!0,recorded:!0},toolCallTimestamp:e}},p={args:{args:{description:"Landed the session-token refactor on main and opened PR #412 for review.",category:"milestone"},status:"completed",defaultExpanded:!0,result:{success:!0,recorded:!1},toolCallTimestamp:e}},l={args:{args:{description:"Landed the session-token refactor on main and opened PR #412 for review.",category:"milestone"},status:"executing",defaultExpanded:!0}},m={args:{args:{description:"   ",category:"milestone"},status:"failed",defaultExpanded:!0,result:{success:!1,error:"timeline_event requires a non-empty description"}}},u={args:{args:{description:"Deployed preview build https://ci.example.com/runs/0123456789abcdef0123456789abcdef/artifacts/mux-nightly-darwin-arm64.dmg for QA.",category:"milestone"},status:"completed",defaultExpanded:!0,result:{success:!0,recorded:!0},toolCallTimestamp:e},decorators:[r=>s.jsx("div",{"data-testid":"timeline-event-card-container",className:"w-[375px]",children:s.jsx(r,{})})],play:async({canvasElement:r})=>{if(!r.querySelector('[data-testid="timeline-row-preview"]'))throw new Error("Timeline row preview did not render");const t=r.querySelector('[data-testid="timeline-event-card-container"]');if(!(t instanceof HTMLElement))throw new Error("Timeline event story container not found");if(await new Promise(h=>requestAnimationFrame(()=>requestAnimationFrame(()=>h()))),t.scrollWidth>t.clientWidth+1)throw new Error(`Timeline event tool card overflowed its ${t.clientWidth}px container by ${t.scrollWidth-t.clientWidth}px`)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Landed the session-token refactor on main and opened PR #412 for review.",
      category: "milestone"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...o.parameters?.docs?.source},description:{story:"milestone · work landed, PR opened (expanded to show the feed-row preview).",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Picked up a review comment on PR #412 asking to gate the new token path behind a flag.",
      category: "picked_up"
    },
    status: "completed",
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...n.parameters?.docs?.source},description:{story:"picked_up · external input pulled in — collapsed, the note itself is the summary.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Switched workspace status updates from polling to SSE — polling starved the renderer past ~200 workspaces.",
      category: "decision"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...a.parameters?.docs?.source},description:{story:"decision · approach changed, with the why.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Blocked on staging migrations — the deploy role lacks ALTER TABLE and needs an infra approval.",
      category: "blocker"
    },
    status: "completed",
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...i.parameters?.docs?.source},description:{story:"blocker · progress stopped.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Handed flaky-test triage to the infra workspace with a repro script and the failing seeds.",
      category: "handoff"
    },
    status: "completed",
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...d.parameters?.docs?.source},description:{story:"handoff · work passed on.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Rebased the feature branch onto main after the v0.27.0 release tag."
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...c.parameters?.docs?.source},description:{story:`No category · the chip and row badge fall back to the feed's generic "Agent".`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Landed the session-token refactor on main and opened PR #412 for review.",
      category: "milestone"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      recorded: false
    },
    toolCallTimestamp: RECORDED_AT
  }
}`,...p.parameters?.docs?.source},description:{story:`Throttled · the tool succeeded but TimelineService dropped the note (duplicate or too
many in the window): amber "Not recorded" chip, and no feed-row preview.`,...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Landed the session-token refactor on main and opened PR #412 for review.",
      category: "milestone"
    },
    status: "executing",
    defaultExpanded: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Mid-flight, before the result arrives.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "   ",
      category: "milestone"
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "timeline_event requires a non-empty description"
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Error · the tool rejected the call (whitespace-only description passes the schema's min
length but fails the backend's trim check), so the header shows the explicit
empty-description placeholder instead of blank text.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      description: "Deployed preview build https://ci.example.com/runs/0123456789abcdef0123456789abcdef/artifacts/mux-nightly-darwin-arm64.dmg for QA.",
      category: "milestone"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      recorded: true
    },
    toolCallTimestamp: RECORDED_AT
  },
  decorators: [Story => <div data-testid="timeline-event-card-container" className="w-[375px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="timeline-row-preview"]')) {
      throw new Error("Timeline row preview did not render");
    }
    const container = canvasElement.querySelector('[data-testid="timeline-event-card-container"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("Timeline event story container not found");
    }
    // Let layout settle before measuring.
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (container.scrollWidth > container.clientWidth + 1) {
      throw new Error(\`Timeline event tool card overflowed its \${container.clientWidth}px container by \` + \`\${container.scrollWidth - container.clientWidth}px\`);
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Narrow container · long unbroken token in the description. Pinned to a fixed ~375px
wrapper (the Storybook test-runner renders at desktop width and ignores viewport / Pixel
matrix variants, so the narrow case must be forced) with a play that fails if the header
or the feed-row preview overflows instead of truncating/clamping.`,...u.parameters?.docs?.description}}};const $=["MilestoneExpanded","PickedUpCollapsed","DecisionExpanded","Blocker","Handoff","NoCategory","Throttled","Executing","ErrorEmptyDescription","NarrowContainer"];export{i as Blocker,a as DecisionExpanded,m as ErrorEmptyDescription,l as Executing,d as Handoff,o as MilestoneExpanded,u as NarrowContainer,c as NoCategory,n as PickedUpCollapsed,p as Throttled,$ as __namedExportsOrder,F as default};
