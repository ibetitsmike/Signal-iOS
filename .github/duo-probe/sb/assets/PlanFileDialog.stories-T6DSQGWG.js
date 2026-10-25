import{j as r,W as l,bt as p,bc as c,aK as d,q as P}from"./iframe-DS5VyXLs.js";import{c as m}from"./orpc-DZZSHgoi.js";import{P as a}from"./PlanFileDialog-a1c-6TsR.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const{waitFor:u,within:y}=__STORYBOOK_MODULE_TEST__,s="ws-plan-preview",i="/home/user/.mux/plans/my-app/ws-plan-preview.md",w=`# Plan preview modal story

- Show the preserved plan directly in the right sidebar flow.
- Keep open-in-editor as a secondary action.
- Verify markdown remains readable in a dialog.`,h=({setup:e,children:o})=>{const n=l.useRef(null);return n.current??=e(),r.jsx(p,{children:r.jsx(c,{children:r.jsx(d,{client:n.current,children:o})})})};function x(){const e=m();return e.workspace.getPlanContent=o=>(P(o.workspaceId===s,"Unexpected workspace in story mock"),Promise.resolve({success:!0,data:{content:w,path:i}})),e}const T={title:"Features/RightSidebar/PlanFileDialog",component:a,parameters:{layout:"fullscreen",pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},decorators:[e=>r.jsx("div",{style:{width:1600,height:"100dvh"},children:r.jsx(e,{})})]},t={render:()=>r.jsx(h,{setup:x,children:r.jsx(a,{open:!0,onOpenChange:()=>{},workspaceId:s})}),play:async()=>{const e=y(document.body);await u(()=>{e.getByText("Plan preview modal story"),e.getByText(i)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <PlanStoryShell setup={setupPlanPreviewClient}>
      <PlanFileDialog open={true} onOpenChange={() => {
      // No-op in Storybook; dialog remains open for visual regression snapshots.
    }} workspaceId={PLAN_PREVIEW_WORKSPACE_ID} />
    </PlanStoryShell>,
  play: async () => {
    const body = within(document.body);
    await waitFor(() => {
      body.getByText("Plan preview modal story");
      body.getByText(PLAN_PREVIEW_PATH);
    });
  }
}`,...t.parameters?.docs?.source}}};const b=["PlanPreviewModal"];export{t as PlanPreviewModal,b as __namedExportsOrder,T as default};
