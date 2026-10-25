import{j as e,cP as u}from"./iframe-C48Cgo5e.js";import{P as d,l as i,S as p}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const P={...i,title:"App/Chat/Tools/ToolSearch",component:u,parameters:{...i.parameters,pixel:d},decorators:[n=>e.jsx(p,{children:e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(n,{})})})})]},c=[{name:"github_create_issue",description:"Create a new issue in a GitHub repository with title, body, and labels."},{name:"github_search_issues",description:"Search issues and pull requests across repositories using GitHub's query syntax."},{name:"github_add_issue_comment",description:"Add a comment to an existing GitHub issue."}],r={args:{args:{query:"create github issue"},status:"executing"}},t={args:{args:{query:"create github issue"},status:"completed",defaultExpanded:!0,result:{query:"create github issue",matches:c,totalDeferred:24}}},s={args:{args:{query:"quantum flux capacitor"},status:"completed",defaultExpanded:!0,result:{query:"quantum flux capacitor",matches:[],totalDeferred:24}}},a={args:{args:{query:"create github issue"},status:"failed",defaultExpanded:!0,result:{success:!1,error:"Tool execution aborted"}}},o={args:{args:{query:"a fairly long tool discovery query that should truncate"},status:"completed",result:{query:"a fairly long tool discovery query that should truncate",matches:c,totalDeferred:24}},decorators:[n=>e.jsx("div",{style:{width:280},children:e.jsx(n,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
