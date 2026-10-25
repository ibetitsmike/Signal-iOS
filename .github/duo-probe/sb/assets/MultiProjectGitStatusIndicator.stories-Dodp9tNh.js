import{j as s,d as h,W as y}from"./iframe-DS5VyXLs.js";import{c as E}from"./orpc-DZZSHgoi.js";import{g as A,c as f}from"./workspaces-BLRlQP3Y.js";import{t as D}from"./contrast-Bnc7IxMq.js";import{l as P}from"./meta-BWzge-eA.js";import{M as j,u as k,c as T}from"./AIView-Bsvwuvut.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./ConfirmationModal-D10R7Urj.js";import"./sendDispatchModes-Coi3kdkT.js";import"./ToggleGroup-Cthcbmic.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./shell-DJ7G-zZU.js";import"./TimelinePanel-BhqA7Mw3.js";import"./timelineReveal-B9mUteaZ.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./slashCommandHints-BSKyjYjN.js";const{expect:C,userEvent:_,waitFor:S,within:u}=__STORYBOOK_MODULE_TEST__;function m(t,e){return{...f({id:t,name:"feature/multi-project-status",projectName:e,createdAt:"2023-11-14T22:13:20.000Z"}),projects:[{projectPath:`/home/user/projects/${e}`,projectName:"app"},{projectPath:"/home/user/projects/docs",projectName:"docs"}]}}const x=m("ws-multi-diverged","app-diverged-story"),O=m("ws-multi-clean","app-clean-story"),R=m("ws-multi-dialog","app-dialog-story"),M=[{projectPath:"/home/user/projects/app-diverged",projectName:"app",gitStatus:{branch:"main",ahead:2,behind:1,dirty:!1,outgoingAdditions:14,outgoingDeletions:3,incomingAdditions:8,incomingDeletions:2},error:null},{projectPath:"/home/user/projects/docs",projectName:"docs",gitStatus:{branch:"main",ahead:0,behind:0,dirty:!1,outgoingAdditions:0,outgoingDeletions:0,incomingAdditions:0,incomingDeletions:0},error:null}],b=[{projectPath:"/home/user/projects/app-clean",projectName:"app",gitStatus:{branch:"main",ahead:0,behind:0,dirty:!1,outgoingAdditions:0,outgoingDeletions:0,incomingAdditions:0,incomingDeletions:0},error:null},{projectPath:"/home/user/projects/docs",projectName:"docs",gitStatus:{branch:"main",ahead:0,behind:0,dirty:!1,outgoingAdditions:0,outgoingDeletions:0,incomingAdditions:0,incomingDeletions:0},error:null}],v=[{projectPath:"/home/user/projects/app-dialog",projectName:"app",gitStatus:{branch:"main",ahead:2,behind:1,dirty:!1,outgoingAdditions:14,outgoingDeletions:3,incomingAdditions:8,incomingDeletions:2},error:null},{projectPath:"/home/user/projects/docs",projectName:"docs",gitStatus:{branch:"main",ahead:0,behind:0,dirty:!0,outgoingAdditions:4,outgoingDeletions:1,incomingAdditions:0,incomingDeletions:0},error:null}];function g(t){const e=h.c(10),o=k();let i;e[0]!==t.projectStatuses||e[1]!==t.workspace?(i=E({projects:A([t.workspace]),workspaces:[t.workspace],projectGitStatusesByWorkspace:new Map([[t.workspace.id,t.projectStatuses]])}),e[0]=t.projectStatuses,e[1]=t.workspace,e[2]=i):i=e[2];const a=i;let r,n;e[3]!==a||e[4]!==o||e[5]!==t.workspace?(r=()=>(o.setClient(a),o.syncWorkspaces(new Map([[t.workspace.id,t.workspace]])),()=>{T(t.workspace.id),o.syncWorkspaces(new Map),o.setClient(null)}),n=[a,o,t.workspace],e[3]=a,e[4]=o,e[5]=t.workspace,e[6]=r,e[7]=n):(r=e[6],n=e[7]),y.useEffect(r,n);let c;return e[8]!==t.workspace.id?(c=s.jsx("div",{className:"bg-background p-6",children:s.jsx(j,{workspaceId:t.workspace.id})}),e[8]=t.workspace.id,e[9]=c):c=e[9],c}async function w(t,e){const i=await u(t).findByRole("button",{name:/open multi-project git status details/i},{timeout:1e4});return await S(()=>{if(!i.textContent?.includes(e))throw new Error(`Expected multi-project git chip to include "${e}".`)}),i}const ct={...P,title:"Components/GitStatusIndicator/MultiProjectGitStatusIndicator",component:j},d={render:()=>s.jsx(g,{workspace:x,projectStatuses:M}),play:async({canvasElement:t})=>{await w(t,"1 diverged")}},p={render:()=>s.jsx(g,{workspace:O,projectStatuses:b}),play:async({canvasElement:t})=>{await w(t,"2 repos")}},l={render:()=>s.jsx(g,{workspace:R,projectStatuses:v}),play:async({canvasElement:t})=>{const e=await w(t,"1 diverged");await _.click(e);const o=u(t.ownerDocument.body),i=await S(()=>{const n=o.getByRole("dialog");if(!n.textContent?.includes("Multi-project git status"))throw new Error("Multi-project git status dialog not rendered yet.");return n}),a=u(i);await a.findByText("Project"),await a.findByText("docs"),await a.findByText("1 dirty");const r=a.getAllByText(/^\+[1-9]\d*$/);await C(D(()=>r).join(`
`)).toBe("")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <MultiProjectIndicatorStory workspace={DIVERGED_WORKSPACE} projectStatuses={DIVERGED_PROJECT_STATUSES} />,
  play: async ({
    canvasElement
  }) => {
    await waitForMultiProjectChip(canvasElement, "1 diverged");
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MultiProjectIndicatorStory workspace={CLEAN_WORKSPACE} projectStatuses={CLEAN_PROJECT_STATUSES} />,
  play: async ({
    canvasElement
  }) => {
    await waitForMultiProjectChip(canvasElement, "2 repos");
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <MultiProjectIndicatorStory workspace={DIALOG_WORKSPACE} projectStatuses={DIALOG_PROJECT_STATUSES} />,
  play: async ({
    canvasElement
  }) => {
    const chip = await waitForMultiProjectChip(canvasElement, "1 diverged");
    await userEvent.click(chip);
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await waitFor(() => {
      const foundDialog = body.getByRole("dialog");
      if (!foundDialog.textContent?.includes("Multi-project git status")) {
        throw new Error("Multi-project git status dialog not rendered yet.");
      }
      return foundDialog;
    });
    const dialogScope = within(dialog);
    await dialogScope.findByText("Project");
    await dialogScope.findByText("docs");
    await dialogScope.findByText("1 dirty");

    // The green "+N" addition counts were 2.08:1 or lower in the light themes (#6885).
    const additions = dialogScope.getAllByText(/^\\+[1-9]\\d*$/);
    await expect(textsBelowAaInThemes(() => additions).join("\\n")).toBe("");
  }
}`,...l.parameters?.docs?.source}}};const dt=["Diverged","Clean","DialogOpen"];export{p as Clean,l as DialogOpen,d as Diverged,dt as __namedExportsOrder,ct as default};
