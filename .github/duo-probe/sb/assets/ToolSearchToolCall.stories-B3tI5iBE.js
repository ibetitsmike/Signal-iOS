import{j as e,cP as u}from"./iframe-DpCW2UOM.js";import{P as d,l as i,S as p}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const P={...i,title:"App/Chat/Tools/ToolSearch",component:u,parameters:{...i.parameters,pixel:d},decorators:[n=>e.jsx(p,{children:e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(n,{})})})})]},c=[{name:"github_create_issue",description:"Create a new issue in a GitHub repository with title, body, and labels."},{name:"github_search_issues",description:"Search issues and pull requests across repositories using GitHub's query syntax."},{name:"github_add_issue_comment",description:"Add a comment to an existing GitHub issue."}],r={args:{args:{query:"create github issue"},status:"executing"}},t={args:{args:{query:"create github issue"},status:"completed",defaultExpanded:!0,result:{query:"create github issue",matches:c,totalDeferred:24}}},s={args:{args:{query:"quantum flux capacitor"},status:"completed",defaultExpanded:!0,result:{query:"quantum flux capacitor",matches:[],totalDeferred:24}}},a={args:{args:{query:"create github issue"},status:"failed",defaultExpanded:!0,result:{success:!1,error:"Tool execution aborted"}}},o={args:{args:{query:"a fairly long tool discovery query that should truncate"},status:"completed",result:{query:"a fairly long tool discovery query that should truncate",matches:c,totalDeferred:24}},decorators:[n=>e.jsx("div",{style:{width:280},children:e.jsx(n,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      query: "create github issue"
    },
    status: "executing"
  }
}`,...r.parameters?.docs?.source},description:{story:"Executing: query visible, no result yet.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      query: "create github issue"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      query: "create github issue",
      matches: MATCHES,
      totalDeferred: 24
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Completed with matches (expanded to show names + descriptions).",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      query: "quantum flux capacitor"
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      query: "quantum flux capacitor",
      matches: [],
      totalDeferred: 24
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Completed with zero matches (expanded to show the empty-state copy).",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      query: "create github issue"
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "Tool execution aborted"
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Failed call (expanded to show the error box).",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      query: "a fairly long tool discovery query that should truncate"
    },
    status: "completed",
    result: {
      query: "a fairly long tool discovery query that should truncate",
      matches: MATCHES,
      totalDeferred: 24
    }
  },
  decorators: [Story => <div style={{
    width: 280
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source},description:{story:"Narrow (~375px) container: match count hides, query truncates.",...o.parameters?.docs?.description}}};const F=["Pending","Matches","ZeroMatches","Failed","NarrowContainer"];export{a as Failed,t as Matches,o as NarrowContainer,r as Pending,s as ZeroMatches,F as __namedExportsOrder,P as default};
