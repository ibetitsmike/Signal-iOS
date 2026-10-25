import{j as e,d as m,W as p}from"./iframe-DwmVy7SQ.js";import{l as u}from"./meta-CT6GdK4g.js";import{S as c}from"./Select-GAe5Uxhm.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{userEvent:x,within:l}=__STORYBOOK_MODULE_TEST__,V={...u,title:"Components/Select",component:c},f=[{value:"opus",label:"Claude Opus 4.8"},{value:"sonnet",label:"Claude Sonnet 4.6"},{value:"haiku",label:"Claude Haiku 4.5"}],r=a=>{const t=m.c(3),[i,d]=p.useState(a.initial);let n;return t[0]!==a.disabled||t[1]!==i?(n=e.jsx(c,{value:i,options:f,onChange:d,disabled:a.disabled,"aria-label":"Model",className:"w-64"}),t[0]=a.disabled,t[1]=i,t[2]=n):n=t[2],n},s={render:()=>e.jsxs("div",{className:"bg-background text-foreground flex flex-col gap-5 p-8",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:"Default"}),e.jsx(r,{initial:"opus"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("span",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:"Disabled"}),e.jsx(r,{initial:"sonnet",disabled:!0})]})]})},o={render:()=>e.jsx("div",{className:"bg-background text-foreground p-8",children:e.jsx(r,{initial:"opus"})}),play:async({canvasElement:a})=>{const t=l(a);await x.click(t.getByRole("combobox")),await l(document.body).findByText("Claude Sonnet 4.6")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
