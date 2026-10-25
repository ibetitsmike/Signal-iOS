import{j as e,d as l}from"./iframe-DpCW2UOM.js";import{l as c}from"./meta-BwRgvoZ6.js";import{P as d}from"./AIView-CvG2HY8V.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./ConfirmationModal-DQrDMilx.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./ToggleGroup-D1Db6hA_.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./shell-ZYrtNCUY.js";import"./TimelinePanel-BSxjzr0t.js";import"./timelineReveal-B8CyznN7.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./slashCommandHints-BSKyjYjN.js";const A={...c,title:"App/Header/PRLinkBadge",component:d};function m(r){const t=l.c(2);let n;return t[0]!==r.children?(n=e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-2",children:r.children})}),t[0]=r.children,t[1]=n):n=t[1],n}function a(r,t={},n={}){return{type:"github-pr",url:`https://github.com/coder/mux/pull/${r}`,owner:"coder",repo:"mux",number:r,detectedAt:17e11,occurrenceCount:1,status:{state:"OPEN",mergeable:"MERGEABLE",mergeStateStatus:"CLEAN",title:"feat: add first-class link support",isDraft:!1,headRefName:"feature/links",baseRefName:"main",fetchedAt:17e11,...t},...n}}const s={args:{prLink:a(1623)},render:r=>e.jsx(m,{children:e.jsx(d,{...r})})},i={render:()=>{const r=[{label:"Ready to merge",prLink:a(1623,{mergeStateStatus:"CLEAN",title:"feat: add link support"})},{label:"Checks pending",prLink:a(1624,{mergeStateStatus:"BLOCKED",title:"fix: resolve flaky test",hasPendingChecks:!0})},{label:"Checks failing",prLink:a(1628,{mergeStateStatus:"BLOCKED",title:"fix: failing checks",hasFailedChecks:!0})},{label:"Behind base branch",prLink:a(1625,{mergeStateStatus:"BEHIND",title:"docs: update README"})},{label:"Draft PR",prLink:a(1627,{mergeStateStatus:"DRAFT",mergeable:"UNKNOWN",isDraft:!0,title:"WIP: experimental feature"})},{label:"Merged",prLink:a(1620,{state:"MERGED",mergeStateStatus:"UNKNOWN",mergeable:"UNKNOWN",title:"feat: previous feature"})},{label:"Closed",prLink:a(1618,{state:"CLOSED",mergeStateStatus:"UNKNOWN",mergeable:"UNKNOWN",title:"feat: abandoned approach"})}];return e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"grid max-w-2xl gap-2 rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-3",children:r.map(t=>e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:"text-muted-foreground text-xs",children:t.label}),e.jsx(d,{prLink:t.prLink})]},t.label))})})}},o={render:()=>{const r=["https://docs.example.com/links","https://api.example.com/v1/docs","https://github.com/coder/mux/issues/1500","https://github.com/coder/mux/actions/runs/12345"];return e.jsx("div",{className:"bg-background p-6",children:e.jsxs("div",{className:"max-w-xl space-y-3 rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-[var(--color-subtle)]",children:"Workspace links"}),e.jsx(d,{prLink:a(1623,{mergeStateStatus:"CLEAN",title:"feat: add link support"})})]}),e.jsxs("div",{className:"rounded border border-[var(--color-border-light)] p-2",children:[e.jsx("p",{className:"text-muted-foreground mb-1 text-xs",children:"Detected links"}),e.jsx("ul",{className:"space-y-1 text-xs",children:r.map(t=>e.jsx("li",{className:"truncate",children:e.jsx("a",{href:t,target:"_blank",rel:"noreferrer",className:"text-link hover:underline",children:t})},t))})]})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    prLink: makePRLink(1623)
  },
  render: args => <StoryLayout>
      <PRLinkBadge {...args} />
    </StoryLayout>
}`,...s.parameters?.docs?.source},description:{story:"Single badge in the ready-to-merge state",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const badges: Array<{
      label: string;
      prLink: GitHubPRLinkWithStatus;
    }> = [{
      label: "Ready to merge",
      prLink: makePRLink(1623, {
        mergeStateStatus: "CLEAN",
        title: "feat: add link support"
      })
    }, {
      label: "Checks pending",
      prLink: makePRLink(1624, {
        mergeStateStatus: "BLOCKED",
        title: "fix: resolve flaky test",
        hasPendingChecks: true
      })
    }, {
      label: "Checks failing",
      prLink: makePRLink(1628, {
        mergeStateStatus: "BLOCKED",
        title: "fix: failing checks",
        hasFailedChecks: true
      })
    }, {
      label: "Behind base branch",
      prLink: makePRLink(1625, {
        mergeStateStatus: "BEHIND",
        title: "docs: update README"
      })
    }, {
      label: "Draft PR",
      prLink: makePRLink(1627, {
        mergeStateStatus: "DRAFT",
        mergeable: "UNKNOWN",
        isDraft: true,
        title: "WIP: experimental feature"
      })
    }, {
      label: "Merged",
      prLink: makePRLink(1620, {
        state: "MERGED",
        mergeStateStatus: "UNKNOWN",
        mergeable: "UNKNOWN",
        title: "feat: previous feature"
      })
    }, {
      label: "Closed",
      prLink: makePRLink(1618, {
        state: "CLOSED",
        mergeStateStatus: "UNKNOWN",
        mergeable: "UNKNOWN",
        title: "feat: abandoned approach"
      })
    }];
    return <div className="bg-background p-6">
        <div className="grid max-w-2xl gap-2 rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-3">
          {badges.map(badge => <div key={badge.label} className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground text-xs">{badge.label}</span>
              <PRLinkBadge prLink={badge.prLink} />
            </div>)}
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Gallery of common PR badge statuses from the deleted app-level story",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const links = ["https://docs.example.com/links", "https://api.example.com/v1/docs", "https://github.com/coder/mux/issues/1500", "https://github.com/coder/mux/actions/runs/12345"];
    return <div className="bg-background p-6">
        <div className="max-w-xl space-y-3 rounded-md border border-[var(--color-border-medium)] bg-[var(--color-card)] p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--color-subtle)]">Workspace links</span>
            <PRLinkBadge prLink={makePRLink(1623, {
            mergeStateStatus: "CLEAN",
            title: "feat: add link support"
          })} />
          </div>
          <div className="rounded border border-[var(--color-border-light)] p-2">
            <p className="text-muted-foreground mb-1 text-xs">Detected links</p>
            <ul className="space-y-1 text-xs">
              {links.map(link => <li key={link} className="truncate">
                  <a href={link} target="_blank" rel="noreferrer" className="text-link hover:underline">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"PR badge alongside a simple links list to mirror the old links-dropdown context",...o.parameters?.docs?.description}}};const K=["ReadyToMerge","PRStatusBadges","LinksDropdownContext"];export{o as LinksDropdownContext,i as PRStatusBadges,s as ReadyToMerge,K as __namedExportsOrder,A as default};
