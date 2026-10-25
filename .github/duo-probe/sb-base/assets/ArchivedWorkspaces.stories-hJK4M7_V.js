import{u as A,bj as j,j as n,d as W,aA as T,W as y,aL as O,aM as P,aN as b,N as i,aJ as f,aK as I}from"./iframe-C48Cgo5e.js";import{c as N}from"./orpc-qlMSh58E.js";import{d as w}from"./workspaces-DZcvJb83.js";import{e as S,l as R}from"./meta-BMDQogfB.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";const{userEvent:B,waitFor:D,within:x}=__STORYBOOK_MODULE_TEST__,p="/Users/dev/my-project",m="my-project",l=6e4,u=60*l,k=[{...w({id:"archived-title-1",name:"bugfix/agent-report-rendering",projectName:m,projectPath:p,createdAt:new Date(i-2*u).toISOString(),archivedAt:new Date(i-15*l).toISOString()}),title:"Fix agent report rendering"},w({id:"archived-2",name:"feature/sub-agent-costs",projectName:m,projectPath:p,createdAt:new Date(i-3*u).toISOString(),archivedAt:new Date(i-30*l).toISOString()}),w({id:"archived-3",name:"refactor/mcp-config",projectName:m,projectPath:p,createdAt:new Date(i-4*u).toISOString(),archivedAt:new Date(i-45*l).toISOString()}),w({id:"archived-4",name:"chore/remove-truncation",projectName:m,projectPath:p,createdAt:new Date(i-5*u).toISOString(),archivedAt:new Date(i-60*l).toISOString()})];function C(o){const e=W.c(11),d=T();let a;e[0]!==o.workspaces?(a=N({projects:new Map([[p,{workspaces:[]}]]),workspaces:o.workspaces}),e[0]=o.workspaces,e[1]=a):a=e[1];const t=a;let c,s;e[2]!==t||e[3]!==d?(c=()=>(d.setClient(t),f().setClient(t),()=>{d.setClient(null),f().setClient(null)}),s=[t,d],e[2]=t,e[3]=d,e[4]=c,e[5]=s):(c=e[4],s=e[5]),y.useEffect(c,s);let r;e[6]!==o.children?(r=n.jsx(O,{children:n.jsx(P,{children:n.jsx(b,{children:o.children})})}),e[6]=o.children,e[7]=r):r=e[7];let h;return e[8]!==t||e[9]!==r?(h=n.jsx(I,{client:t,children:r}),e[8]=t,e[9]=r,e[10]=h):h=e[10],h}function E(){return A(j(p),!0),n.jsx(C,{workspaces:k,children:n.jsx("div",{className:"bg-background p-6",children:n.jsx("div",{className:"max-w-4xl",children:n.jsx(S,{projectPath:p,projectName:m,workspaces:k})})})})}const pe={...R,title:"Components/ArchivedWorkspaces",component:S},g={render:()=>E()},v={render:()=>E(),play:async({canvasElement:o})=>{const a=(await x(o).findByLabelText("Select Fix agent report rendering",{},{timeout:1e4})).closest("div");if(!a)throw new Error("Archived workspace row not found");const t=a.querySelector("svg");if(!t)throw new Error("Runtime icon not found");const c=t.closest("span");if(!c)throw new Error("Runtime badge trigger not found");await B.hover(c),await D(()=>{const s=o.ownerDocument.querySelector('[role="tooltip"]');if(!s)throw new Error("Tooltip not visible");const r=x(s);r.getByText("Worktree: isolated git worktree"),r.getByText("Name"),r.getByText("bugfix/agent-report-rendering")},{interval:50})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => renderArchivedWorkspaces()
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => renderArchivedWorkspaces(),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByLabelText("Select Fix agent report rendering", {}, {
      timeout: 10000
    });
    const row = checkbox.closest<HTMLDivElement>("div");
    if (!row) {
      throw new Error("Archived workspace row not found");
    }
    const runtimeIcon = row.querySelector("svg");
    if (!runtimeIcon) {
      throw new Error("Runtime icon not found");
    }
    const runtimeBadge = runtimeIcon.closest<HTMLElement>("span");
    if (!runtimeBadge) {
      throw new Error("Runtime badge trigger not found");
    }
    await userEvent.hover(runtimeBadge);
    await waitFor(() => {
      const tooltip = canvasElement.ownerDocument.querySelector('[role="tooltip"]');
      if (!tooltip) {
        throw new Error("Tooltip not visible");
      }
      const tooltipWithin = within(tooltip as HTMLElement);
      tooltipWithin.getByText("Worktree: isolated git worktree");
      tooltipWithin.getByText("Name");
      tooltipWithin.getByText("bugfix/agent-report-rendering");
    }, {
      interval: 50
    });
  }
}`,...v.parameters?.docs?.source}}};const de=["ArchivedWorkspaceList","WorkspaceNameInRuntimeTooltip"];export{g as ArchivedWorkspaceList,v as WorkspaceNameInRuntimeTooltip,de as __namedExportsOrder,pe as default};
