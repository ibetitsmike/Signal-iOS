import{I as t,j as e,bk as p,bl as x,d as g}from"./iframe-DS5VyXLs.js";import{l as h}from"./meta-BWzge-eA.js";import{P as m}from"./ToggleGroup-Cthcbmic.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const T={...h,title:"Components/Button",component:t},u=r=>{const n=g.c(7);let a;n[0]!==r.label?(a=e.jsx("span",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:r.label}),n[0]=r.label,n[1]=a):a=n[1];let i;n[2]!==r.children?(i=e.jsx("div",{className:"flex flex-wrap items-center gap-3",children:r.children}),n[2]=r.children,n[3]=i):i=n[3];let s;return n[4]!==a||n[5]!==i?(s=e.jsxs("div",{className:"flex flex-col gap-2",children:[a,i]}),n[4]=a,n[5]=i,n[6]=s):s=n[6],s},o={render:()=>e.jsx("div",{className:"bg-background text-foreground flex flex-col gap-6 p-8",children:e.jsxs(u,{label:"Variants",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"link",children:"Link"})]})})},l={render:()=>e.jsx("div",{className:"bg-background text-foreground flex flex-col gap-6 p-8",children:e.jsxs(u,{label:"Sizes",children:[e.jsx(t,{size:"xs",children:"Extra small"}),e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"icon",tooltip:"Add",children:e.jsx(m,{})})]})})},c={render:()=>e.jsx("div",{className:"bg-background text-foreground flex flex-col gap-6 p-8",children:e.jsxs(u,{label:"With icons",children:[e.jsxs(t,{children:[e.jsx(m,{}),"New workspace"]}),e.jsxs(t,{variant:"outline",children:["Continue",e.jsx(p,{})]}),e.jsxs(t,{variant:"destructive",children:[e.jsx(x,{}),"Delete"]}),e.jsx(t,{variant:"ghost",size:"icon",tooltip:"Delete",children:e.jsx(x,{})})]})})},d={render:()=>e.jsx("div",{className:"bg-background text-foreground flex flex-col gap-6 p-8",children:e.jsxs(u,{label:"Disabled",children:[e.jsx(t,{disabled:!0,children:"Default"}),e.jsx(t,{variant:"outline",disabled:!0,children:"Outline"}),e.jsx(t,{variant:"destructive",disabled:!0,children:"Destructive"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-6 p-8">
      <Section label="Variants">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </Section>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-6 p-8">
      <Section label="Sizes">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" tooltip="Add">
          <Plus />
        </Button>
      </Section>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-6 p-8">
      <Section label="With icons">
        <Button>
          <Plus />
          New workspace
        </Button>
        <Button variant="outline">
          Continue
          <ArrowRight />
        </Button>
        <Button variant="destructive">
          <Trash2 />
          Delete
        </Button>
        <Button variant="ghost" size="icon" tooltip="Delete">
          <Trash2 />
        </Button>
      </Section>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-6 p-8">
      <Section label="Disabled">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
        <Button variant="destructive" disabled>
          Destructive
        </Button>
      </Section>
    </div>
}`,...d.parameters?.docs?.source}}};const G=["Variants","Sizes","WithIcons","Disabled"];export{d as Disabled,l as Sizes,o as Variants,c as WithIcons,G as __namedExportsOrder,T as default};
