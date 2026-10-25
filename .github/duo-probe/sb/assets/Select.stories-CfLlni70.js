import{j as e,d as m,W as p}from"./iframe-DS5VyXLs.js";import{l as u}from"./meta-BWzge-eA.js";import{S as c}from"./Select-DEs3yokq.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const{userEvent:x,within:l}=__STORYBOOK_MODULE_TEST__,V={...u,title:"Components/Select",component:c},f=[{value:"opus",label:"Claude Opus 4.8"},{value:"sonnet",label:"Claude Sonnet 4.6"},{value:"haiku",label:"Claude Haiku 4.5"}],r=a=>{const t=m.c(3),[i,d]=p.useState(a.initial);let n;return t[0]!==a.disabled||t[1]!==i?(n=e.jsx(c,{value:i,options:f,onChange:d,disabled:a.disabled,"aria-label":"Model",className:"w-64"}),t[0]=a.disabled,t[1]=i,t[2]=n):n=t[2],n},s={render:()=>e.jsxs("div",{className:"bg-background text-foreground flex flex-col gap-5 p-8",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:"Default"}),e.jsx(r,{initial:"opus"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:"Disabled"}),e.jsx(r,{initial:"sonnet",disabled:!0})]})]})},o={render:()=>e.jsx("div",{className:"bg-background text-foreground p-8",children:e.jsx(r,{initial:"opus"})}),play:async({canvasElement:a})=>{const t=l(a);await x.click(t.getByRole("combobox")),await l(document.body).findByText("Claude Sonnet 4.6")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground flex flex-col gap-5 p-8">
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Default
        </span>
        <SelectDemo initial="opus" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Disabled
        </span>
        <SelectDemo initial="sonnet" disabled />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background text-foreground p-8">
      <SelectDemo initial="opus" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    // Options render in a portal at the document root, not inside canvasElement.
    await within(document.body).findByText("Claude Sonnet 4.6");
  }
}`,...o.parameters?.docs?.source}}};const W=["Default","Open"];export{s as Default,o as Open,W as __namedExportsOrder,V as default};
