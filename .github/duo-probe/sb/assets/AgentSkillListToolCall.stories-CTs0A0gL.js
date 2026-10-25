import{j as r,ck as g}from"./iframe-DpCW2UOM.js";import{P as f,l as p,S as h}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const M={...p,title:"App/Chat/Tools/AgentSkillList",component:g,parameters:{...p.parameters,pixel:f},decorators:[s=>r.jsx(h,{children:r.jsx("div",{className:"bg-background p-6",children:r.jsx("div",{className:"w-full max-w-2xl",children:r.jsx(s,{})})})})]},w="Browser automation CLI for AI agents. Use when the user needs to interact with websites — navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. Triggers include requests to “open a website”, “fill out a form”, “click a button”, or “take a screenshot”.",e=[{name:"agent-browser",scope:"project",description:w},{name:"db-console",scope:"project",description:"Run read-only SQL against the project’s dev database, inspect schema, and summarize results. Use when the user asks to look up a record, check a table, or debug a query. Never issues writes or migrations."},{name:"linear",scope:"global",description:"Search, create, and update Linear issues and projects. Use when the user references a ticket, asks to file a bug, or wants to move an issue between states."},{name:"pdf",scope:"built-in",description:"Read, search, split, and fill PDF documents and extract text, tables, and form fields. Use whenever the user attaches a PDF or asks to read, summarize, or edit one."},{name:"docx",scope:"built-in",description:"Author and revise Microsoft Word documents with styles, headings, and structure. Use when the user wants a .docx report or to edit a Word file they shared."}],u=[{name:"orchestrator",scope:"project",advertise:!1,description:"Internal planning skill that decomposes a task into sub-agent steps and sequences their workspaces. Invoked by the task runner — not intended for direct use."},{name:"release-notes",scope:"global",advertise:!1,description:"Generate changelog entries and release notes from merged PRs over a commit range. A power-user workflow kept out of the default skill index."}],n={args:{args:{includeUnadvertised:!1},status:"completed",defaultExpanded:!0,result:{success:!0,skills:e}}},a={args:{args:{includeUnadvertised:!0},status:"completed",defaultExpanded:!0,result:{success:!0,skills:[e[0],u[0],e[2],u[1],e[3]]}}},o={args:{args:{includeUnadvertised:!1},status:"completed",result:{success:!0,skills:e}}},i={args:{args:{includeUnadvertised:!1},status:"completed",defaultExpanded:!0,result:{success:!0,skills:[]}}},d={args:{args:{includeUnadvertised:!1},status:"executing",defaultExpanded:!0}},c={args:{args:{includeUnadvertised:!1},status:"failed",defaultExpanded:!0,result:{success:!1,error:"Skills directory is unreadable: EACCES .mux/skills"}}},l={args:{args:{includeUnadvertised:!0},status:"completed",defaultExpanded:!0,result:{success:!0,skills:[e[0],u[0],e[3]]}},decorators:[s=>r.jsx("div",{"data-testid":"skill-list-card-container",className:"w-[375px]",children:r.jsx(s,{})})],play:async({canvasElement:s})=>{if(!s.textContent?.includes("agent-browser"))throw new Error("AgentSkillList card did not render its skills");const t=s.querySelector('[data-testid="skill-list-card-container"]');if(!(t instanceof HTMLElement))throw new Error("AgentSkillList story container not found");if(await new Promise(m=>requestAnimationFrame(()=>requestAnimationFrame(()=>m()))),t.scrollWidth>t.clientWidth+1)throw new Error(`AgentSkillList tool card overflowed its ${t.clientWidth}px container by ${t.scrollWidth-t.clientWidth}px`)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: false
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      skills: ADVERTISED
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Listed · advertised skills only (the default), grouped by scope.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: true
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      skills: [ADVERTISED[0], UNADVERTISED[0], ADVERTISED[2], UNADVERTISED[1], ADVERTISED[3]]
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Listed · including unadvertised skills (the eye-off chip marks them).",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: false
    },
    status: "completed",
    result: {
      success: true,
      skills: ADVERTISED
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"The glanceable resting state — collapsed to a count.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: false
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      skills: []
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Listed · nothing configured in this workspace.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: false
    },
    status: "executing",
    defaultExpanded: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Mid-flight, before the result arrives.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: false
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "Skills directory is unreadable: EACCES .mux/skills"
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Error · the skills directory could not be read.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      includeUnadvertised: true
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      success: true,
      skills: [ADVERTISED[0], UNADVERTISED[0], ADVERTISED[3]]
    }
  },
  decorators: [Story => <div data-testid="skill-list-card-container" className="w-[375px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.textContent?.includes("agent-browser")) {
      throw new Error("AgentSkillList card did not render its skills");
    }
    const container = canvasElement.querySelector('[data-testid="skill-list-card-container"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("AgentSkillList story container not found");
    }
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (container.scrollWidth > container.clientWidth + 1) {
      throw new Error(\`AgentSkillList tool card overflowed its \${container.clientWidth}px container by \` + \`\${container.scrollWidth - container.clientWidth}px\`);
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Narrow (~375px) viewport. Pinned to a fixed-width container because the Storybook
test-runner renders at desktop width and ignores viewport / Pixel matrix variants, so the
mobile case must be forced with a wrapper. The play fails if the long browser-skill
description or scope rows overflow horizontally instead of wrapping/clamping.`,...l.parameters?.docs?.description}}};const _=["Listed","IncludingUnadvertised","Collapsed","NothingConfigured","Executing","ErrorResult","NarrowViewport"];export{o as Collapsed,c as ErrorResult,d as Executing,a as IncludingUnadvertised,n as Listed,l as NarrowViewport,i as NothingConfigured,_ as __namedExportsOrder,M as default};
