import{j as e,d as i}from"./iframe-DS5VyXLs.js";import{l as p}from"./meta-BWzge-eA.js";import{I as a}from"./sendDispatchModes-Coi3kdkT.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const E={...p,title:"Components/Input",component:a},r=t=>{const l=i.c(5);let d;l[0]!==t.label?(d=e.jsx("span",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:t.label}),l[0]=t.label,l[1]=d):d=l[1];let n;return l[2]!==t.children||l[3]!==d?(n=e.jsxs("label",{className:"flex w-72 flex-col gap-1.5",children:[d,t.children]}),l[2]=t.children,l[3]=d,l[4]=n):n=l[4],n},o={render:()=>e.jsxs("div",{className:"bg-background text-foreground flex flex-col gap-5 p-8",children:[e.jsx(r,{label:"Placeholder",children:e.jsx(a,{placeholder:"my-team.example.com"})}),e.jsx(r,{label:"With value",children:e.jsx(a,{defaultValue:"feature/dark-mode"})}),e.jsx(r,{label:"Disabled",children:e.jsx(a,{defaultValue:"read-only value",disabled:!0})})]})},s={render:()=>e.jsxs("div",{className:"bg-background text-foreground flex flex-col gap-5 p-8",children:[e.jsx(r,{label:"Text",children:e.jsx(a,{type:"text",placeholder:"Workspace name"})}),e.jsx(r,{label:"Password",children:e.jsx(a,{type:"password",defaultValue:"hunter2"})}),e.jsx(r,{label:"Number",children:e.jsx(a,{type:"number",defaultValue:100})}),e.jsx(r,{label:"Search",children:e.jsx(a,{type:"search",placeholder:"Filter…"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-5 p-8">
      <Field label="Placeholder">
        <Input placeholder="my-team.example.com" />
      </Field>
      <Field label="With value">
        <Input defaultValue="feature/dark-mode" />
      </Field>
      <Field label="Disabled">
        <Input defaultValue="read-only value" disabled />
      </Field>
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-5 p-8">
      <Field label="Text">
        <Input type="text" placeholder="Workspace name" />
      </Field>
      <Field label="Password">
        <Input type="password" defaultValue="hunter2" />
      </Field>
      <Field label="Number">
        <Input type="number" defaultValue={100} />
      </Field>
      <Field label="Search">
        <Input type="search" placeholder="Filter…" />
      </Field>
    </div>
}`,...s.parameters?.docs?.source}}};const _=["Default","Types"];export{o as Default,s as Types,_ as __namedExportsOrder,E as default};
